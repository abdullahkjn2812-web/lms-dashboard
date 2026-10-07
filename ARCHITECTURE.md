# Architecture

LearnCorp has two independent npm projects: a React browser application and an Express API. MongoDB is accessed only by the backend. **The frontend currently renders fixtures; no frontend-to-backend request flow is connected.**

## Folder structure and responsibilities

```text
frontend/
  index.html                  Browser entry document
  package.json                Frontend dependencies and scripts
  vite.config.js              React and Tailwind Vite plugins; no API proxy
  src/
    main.jsx                  React root, StrictMode, BrowserRouter, global CSS
    App.jsx                   Public, student, and admin route definitions
    index.css                 Tailwind import, theme tokens, base styles
    pages/                    Public pages and forms
      student/                Student dashboard and account/learning screens
      admin/                  Admin tables, dashboards, and analytics
    components/
      layout/                 Public/dashboard shells, navigation, sidebar
      ui/                     Reusable inputs, buttons, tables, modals, states
      courses/                Course cards and expandable module lists
      reviews/                Review presentation
      notifications/          Notification presentation
      chat/                   Local mock support chat
    data/                     JavaScript fixtures and mock chat reply logic
backend/
  package.json                Backend dependencies and scripts
  server.js                   Environment loading, middleware, routes, startup
  config/db.js                Mongoose connection
  routes/                    Route paths and authentication/role middleware
  controllers/               Input checks, business logic, database operations
  models/                    Mongoose User and Course schemas
  midleware/                 JWT verification, role checks, request logging
```

`midleware` is the existing folder spelling. `postman/` and `.postman/` contain API-client workspace artifacts; they are not application runtime code.

## Frontend flow

`index.html` loads `src/main.jsx`, which mounts `App.jsx` inside `BrowserRouter`. `App.jsx` selects a page within `PublicLayout`, `StudentLayout`, or `AdminLayout`; nested pages render through layout outlets.

- Public routes cover `/`, `/courses`, `/courses/:id`, `/about`, `/support`, `/login`, `/signup`, and `/payment/:courseId`.
- Student routes live under `/dashboard`; admin routes live under `/admin`.
- `/register` redirects to `/signup`; `/profile` redirects to `/dashboard/profile`.

Pages import `src/data/*.js` fixtures and use React state for interactive changes. For example, `CoursesPage.jsx` filters local courses, renders `CourseCard.jsx`, and links to `CourseDetailsPage.jsx`, which renders modules through `ModuleList.jsx`. No API request or database query occurs.

`LoginPage.jsx` and `SignupPage.jsx` navigate to `/dashboard` after local form handling. The layouts do not enforce authentication or roles, and no persistent browser session storage is implemented.

## Backend startup and database

`server.js` loads dotenv configuration, creates Express, and registers middleware and routes. `startServer()` awaits `config/db.js`, which checks `MONGO_URI` and calls `mongoose.connect`. Only then does the HTTP listener start on `PORT` (default `5000`). Connection/startup failures exit the process.

| Model file | Stored data |
| --- | --- |
| `models/user.js` | Name, email, password hash, role (`student` default or `admin`), timestamps |
| `models/course.js` | Title, description, price (default zero), status (`draft` default or `published`), `createdBy` reference to User, timestamps |

Signup hashes passwords before storing them. Login/signup responses omit the password field; profile queries explicitly exclude it. JWTs carry the user's ID and role and expire after one day. Keep `MONGO_URI` and `JWT_SECRET` in local environment configuration; the browser must never connect directly to MongoDB.

## Implemented API routes

| Method | Path | Access / behavior |
| --- | --- | --- |
| GET | `/api/health` | Public health response |
| POST | `/api/auth/signup` | Public student registration |
| POST | `/api/auth/login` | Public credential check and JWT issuance |
| GET | `/api/auth/profile` | Valid Bearer JWT; return user profile |
| GET | `/api/auth/Admin-test` | Valid JWT and admin role; access check |
| POST | `/api/auth/courses` | Valid JWT and admin role; partial draft course creation |

The course router is mounted at `/api/auth/courses`, not `/api/courses`. There are no course read/update/delete routes yet.

## Request-to-response workflow

1. A direct API client sends an HTTP request to `server.js`.
2. `midleware/requestLogger.js` logs the method/path and later the response status/duration. CORS and `express.json()` handle cross-origin headers and JSON bodies.
3. `routes/authRoutes.js` or `routes/courseRoutes.js` matches the endpoint. Protected routes use `midleware/authMidleware.js` to verify a Bearer token and attach its payload to `req.user`; admin routes then use `midleware/roleMidleware.js`.
4. The controller validates input, uses a Mongoose model when needed, and returns an HTTP status plus JSON. Invalid/missing tokens return `401`; a disallowed role returns `403`. Controller validation failures return `400`, and caught server failures return `500`. Unmatched endpoints reach the JSON `404` handler.
5. The API client receives the response. Rendering it in React remains planned work.

**Login:** `server.js` -> `routes/authRoutes.js` -> `controllers/authControllers.js` (`login`) -> `models/user.js` / MongoDB lookup -> bcrypt comparison -> JWT signing -> JSON token and safe user fields.

**Profile:** `routes/authRoutes.js` -> `midleware/authMidleware.js` -> `authControllers.js` (`getProfile`) -> `User.findById` without the password -> JSON profile.

**Course creation:** `routes/courseRoutes.js` -> JWT verification -> admin-role check -> `controllers/courseController.js` -> `models/course.js` / MongoDB insert -> `201` JSON. The controller requires `instructor` but omits it from the insert; `type` affects price but is absent from the schema. Neither field is persisted. This is a partial implementation.

## Planned integration

Future frontend/API integration would follow: user action -> React request -> Express route/middleware -> controller -> Mongoose/MongoDB -> JSON response -> React loading/error/success state. An API client, session handling, route guards, aligned course data, and persistence for the other demo screens are not implemented. See [README.md](README.md) for the proposed next steps.
