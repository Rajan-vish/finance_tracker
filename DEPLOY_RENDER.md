# Deploy to Render — step-by-step

This project contains two parts:
- backend (Node + TypeScript) in the `backend/` folder
- client (Vite + React) in the `client/` folder

I added a `render.yaml` manifest that declares two services (a web service for the backend and a static site for the client). Follow these instructions to deploy successfully on Render.

---

1) Push this repository to a Git host (GitHub, GitLab, Bitbucket).

2) In Render, create a new service and choose "Deploy from a Git repo" and connect to your repo. When Render detects `render.yaml` it will offer to create services from it. You can choose that, or create services manually using the commands below.

3) Backend service configuration (if creating manually):
- Environment: Node
- Branch: `main` (or the branch you use)
- Build command: `cd backend && npm ci && npm run build`
- Start command: `cd backend && npm run start`
- Disk: 512 MB (or default)

4) Client service configuration (if creating manually):
- Type: Static Site
- Branch: `main`
- Build command: `cd client && npm ci && npm run build`
- Publish directory: `client/dist`

5) REQUIRED environment variables (set these in the Render Dashboard for the backend service):
- MONGO_URI (MongoDB connection string)
- JWT_SECRET
- CLOUDINARY_CLOUD_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET
- RESEND_API_KEY
- RESEND_MAILER_SENDER
- FRONTEND_ORIGIN (set to the client URL after the client is deployed, e.g. `https://finance-tracker-client.onrender.com`)

Notes about secrets: never commit secrets to git. Use Render's Environment / Secrets settings.

6) Set the client build-time env var `VITE_API_URL` on the client service BEFORE you build the static site. This must include the backend URL and the API base path. Example:

Example values:
- Backend URL (after backend deploy): `https://finance-tracker-backend.onrender.com`
- VITE_API_URL: `https://finance-tracker-backend.onrender.com/api`

Important: Vite inlines env vars at build time; if you change `VITE_API_URL` you must re-deploy the client.

7) Deployment order and CORS:
- Deploy the backend first. Once it is running, copy the backend URL.
- In the client service environment variables, set `VITE_API_URL` to `<BACKEND_URL>/api` and then re-deploy the client.
- In the backend service environment variables, set `FRONTEND_ORIGIN` to the client URL (no trailing slash). This ensures CORS allows requests from the client.

8) Extra checks (if signup/auth fails after deployment):
- Check backend logs on Render for incoming requests and any error stack traces.
- Verify the client is calling the correct endpoint by inspecting the built JS; it should call `<VITE_API_URL>/auth/register`.
- Use `curl` or Postman to send a POST to `<BACKEND_URL>/api/auth/register` to confirm backend behavior.

9) Helpful curl examples (replace placeholders):

Test registration directly against the backend (use caution with real data):

```bash
curl -X POST '<BACKEND_URL>/api/auth/register' -H 'Content-Type: application/json' -d '{"name":"Test","email":"test@example.com","password":"password123"}'
```

If you get a successful response locally but a different response in Render, check env vars and database connectivity (MONGO_URI).

---

Troubleshooting checklist
- Backend fails to start: check Render build logs for TypeScript compile errors and missing environment variables.
- Client shows CORS errors: ensure `FRONTEND_ORIGIN` is set correctly on the backend and backend CORS allows it.
- Client shows 404 on /api: confirm `VITE_API_URL` points to `<BACKEND_URL>/api` and that `BASE_PATH` in backend is `/api` (default).

If you want, I can:
- Provide the exact list of env var keys (I can auto-generate a `.env.example` for the repo).
- Add a Render Health Check endpoint to the backend that returns 200 on GET / (or GET /api/health) so Render can verify the service is healthy.
