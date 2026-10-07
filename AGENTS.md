# Codex Project Instructions

## Scope and project context

- Read `README.md`, `ARCHITECTURE.md`, and the relevant source files before making changes. Treat the code as the source of truth.
- This is LearnCorp LMS: a React frontend using demo data and a separate Express/MongoDB backend. Frontend screens do not currently call the API.
- Distinguish implemented backend behavior, mock/local UI behavior, and planned work. A visible screen does not establish a working backend feature.
- Preserve existing user changes. Keep edits limited to the requested task; do not rename folders, refactor unrelated code, or add dependencies without a concrete need.

## JavaScript-only coding standards

- Use JavaScript (`.js`) and React JSX (`.jsx`); do not introduce TypeScript, `.ts`/`.tsx` files, or a TypeScript migration.
- Keep frontend ES modules (`import`/`export`) and backend CommonJS (`require`/`module.exports`).
- Follow the surrounding file's formatting. Use clear names, small functions, functional React components, and hooks; prefer `const` unless reassignment is necessary.
- Keep pages in `frontend/src/pages`, shared components in `components`, and demo fixtures in `data`. Reuse existing UI components and Tailwind theme tokens.
- Keep Express routing in `routes`, request handling in `controllers`, schemas in `models`, and connection setup in `config`. Preserve the existing `backend/midleware` spelling in imports and paths.
- Validate API input, handle asynchronous failures, and return appropriate HTTP status codes with JSON responses. Enforce authentication and roles on the server for protected operations.
- Keep model fields, request payloads, and response handling consistent. Do not silently treat frontend fixture objects as database records.
- Never place real passwords, tokens, JWT secrets, or credential-bearing connection strings in code, documentation, examples, or logs. Keep local configuration in ignored environment files; use `JWT_SECRET` consistently.

## Step-by-step learning workflow

1. **Inspect first.** Trace the existing behavior and identify the smallest complete feature or fix. Work on one focused step at a time.
2. **Explain before implementing any feature.** Give a short summary covering all four points:
   - **Purpose:** What problem does this feature solve?
   - **Workflow:** How will the user action, frontend, API, and database interact, where applicable?
   - **Files involved:** Which existing or new files will change, and what is each file's role?
   - **Benefits:** What will the learner or application gain?
3. **Implement the explained step.** Keep the change easy to review. Clarify missing requirements when necessary; the explanation itself is not an additional approval gate.
4. **Verify the result.** Run checks appropriate to the changed behavior. Report the actual results, including failures or checks that could not be run. Do not claim success from source inspection alone.
5. **Teach after successful implementation and testing.** Explain the complete feature workflow, file by file, in simple **Roman Urdu + English**. Include each changed file and relevant unchanged files in the flow. Explain what each does, why it is needed, where data comes from, what it passes to the next file, and how the result reaches the user. Cover validation/error paths and the checks performed. For UI-only work, explain state and rendering without inventing API calls.

Example explanation style: "`routes/authRoutes.js` request ko controller tak bhejti hai. `controllers/authControllers.js` input validate karta hai aur `models/user.js` ke through MongoDB se data leta hai. Controller JSON response bhejta hai. Frontend par result dikhana tabhi explain karein jab API connection implement ho."

If implementation or testing fails, explain the blocker and remaining work instead of presenting the feature as complete.

## Verification and documentation

- Frontend: `npm --prefix frontend run build`; manually check affected screens and interactions as needed.
- Backend: syntax-check changed JavaScript with `node --check <file>` and exercise relevant API success, validation, authentication, and role paths against a local development database when needed. A syntax check alone does not prove API behavior.
- No automated test suite or lint scripts are configured. `backend`'s `npm test` is a failing placeholder, not a passing test suite.
- Do not install test tooling or write tests merely for formatting or documentation changes. For documentation-only tasks, verify claims, paths, commands, and the final diff.
- Update the existing root documentation when behavior or setup changes. Keep implemented and planned features clearly separated; do not add extra documentation files unless requested.
