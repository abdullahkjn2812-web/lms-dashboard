# LearnCorp LMS

A learning management system with public course pages, a student dashboard, and an admin console. The project contains a React frontend and a separate Express API backed by MongoDB.

**Current state:** the frontend uses local demo data and component state. It is not connected to the backend; completing a UI form does not create a database record or authenticate a user.

## Implemented features

### Backend

- MongoDB connection before server startup, request/response logging, health endpoint, and JSON responses for unmatched routes.
- Student signup with required-field checks, an existing-email check, and bcrypt password hashing.
- Login with password verification and a JWT valid for one day.
- Protected profile retrieval and an admin-role access-check endpoint.
- Admin-only draft course creation, with the limitations described below.

### Frontend: demo and local UI

- Public home, about, support, login/signup, course catalog, course details, and payment screens.
- Catalog search, filters, pagination, and expandable course modules using fixture data.
- Student dashboard, course/progress displays, payments, local review editing, notifications, profile, and support screens.
- Admin tables and charts for users, courses, payments, reviews, analytics, notifications, support, and audit logs.
- Responsive layouts, shared UI components, and a support chat with predefined replies.

Login/signup currently navigate to the dashboard; signup checks matching passwords locally. Dashboard routes have no authentication guards. Payments, profile saves, chat replies, and other demo interactions do not persist to the backend. The chat is not connected to an AI service.

## Known limitations

- Course creation requires `instructor` in the controller but does not save it; the schema defines neither `instructor` nor `type`. Course management is incomplete.
- Backend signup creates students. No admin provisioning command or role-management API is provided.
- Frontend course fixtures contain richer data than the current MongoDB course schema.

## Planned work / not yet implemented

These are proposed next steps based on the existing screens, not a committed roadmap:

- Connect frontend authentication and course screens to the API; add session handling and protected routes.
- Align the course controller/schema and add listing, detail, update, and delete endpoints.
- Implement persistent enrollment, lessons/progress, payments, reviews, notifications, profile updates, support, analytics, and audit logs.
- Add meaningful automated tests as backend and frontend integration develops.

## Tech stack

| Area | Technologies |
| --- | --- |
| Frontend | JavaScript/JSX, React 19, React Router 7, Vite 7 |
| UI | Tailwind CSS 4, Lucide React icons, Recharts 3 |
| Backend | Node.js, Express 5, CommonJS JavaScript |
| Database and auth | MongoDB, Mongoose 9, bcrypt, jsonwebtoken |
| Development | npm lockfiles, nodemon, dotenv, cors |

## Installation and development setup

Prerequisites: Node.js 22.x version 22.12 or newer, npm, and a reachable local or hosted MongoDB database. The frontend can run independently for UI exploration.

1. Install dependencies from the project root:

   ```sh
   npm --prefix backend ci
   npm --prefix frontend ci
   ```

2. If `backend/.env` does not exist, create it from `backend/.env.example`. Configure these values locally; do not commit or share real credentials:

   | Variable | Purpose |
   | --- | --- |
   | `MONGO_URI` | Connection URI for your development MongoDB database; required at startup |
   | `JWT_SECRET` | Locally configured signing/verification secret; required for authentication |
   | `PORT` | Optional backend port; defaults to `5000` |

   Use the exact uppercase name `JWT_SECRET`: token verification does not use the legacy mixed-case fallback present in login.

3. Start the backend in one terminal:

   ```sh
   npm --prefix backend run dev
   ```

   Start the frontend in another:

   ```sh
   npm --prefix frontend run dev
   ```

   Open the URL printed by Vite, usually `http://localhost:5173`. Check the API at `http://localhost:5000/api/health` when using the default backend port. The API starts listening only after MongoDB connects. There is currently no frontend API client or Vite API proxy.

On Windows PowerShell, use `npm.cmd` in place of `npm` if the execution policy blocks `npm.ps1`.

## Development checks

- `npm --prefix frontend run build`: generate the frontend production build.
- `npm --prefix frontend run preview`: inspect that build locally after building.
- `npm --prefix backend start`: run the API without nodemon.
- Manually check affected UI flows and API responses. No automated test suite or lint script is configured; `npm --prefix backend test` currently exits with an intentional placeholder error.

See [ARCHITECTURE.md](ARCHITECTURE.md) for folders and request flows, and [AGENTS.md](AGENTS.md) for coding and learning instructions.
