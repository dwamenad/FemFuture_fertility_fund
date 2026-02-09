# FemFuture Fertility Fund (MVP)

Next.js App Router + TypeScript + Tailwind + Prisma + PostgreSQL starter for:
- Public nonprofit site
- Applicant portal
- Donor portal
- Partner portal
- Admin + Reviewer dashboard

## Current status
This initial scaffold includes:
- Repository structure for all required portal routes
- Prisma schema with core entities and audit logging model
- Auth.js credentials baseline with role-aware middleware gates
- Docker compose for Postgres + MinIO
- Seed script and basic test scaffolding
- Applicant MVP flow with validated step-save and submit endpoints
- Admin/reviewer decision + reviewer-assignment endpoints with audit log writes

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- Auth.js / NextAuth (credentials)
- MinIO (S3-compatible local storage)
- Playwright + Vitest

## Quick start
1. Copy env file:
   ```bash
   cp .env.example .env
   ```
2. Start infra:
   ```bash
   docker compose up -d
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Generate Prisma client + migrate + seed:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   npm run prisma:seed
   ```
5. Run app:
   ```bash
   npm run dev
   ```

## Scripts
- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run typecheck`
- `npm run test`

## Implemented API endpoints (MVP)
- `GET /api/applicant/application`: get-or-create current draft application for signed-in applicant
- `POST /api/applicant/application`: create a new draft (or return existing unless `forceNew=true`)
- `POST /api/applicant/application/step`: save one validated application step
- `POST /api/applicant/application/submit`: submit application after all six steps are complete
- `GET /api/applicant/messages?applicationId=...`: read thread for an application
- `POST /api/applicant/messages`: send a message in an application thread
- `GET /api/admin/applications`: admin/reviewer filtered application queue
- `POST /api/admin/applications/:id/assign`: admin reviewer assignment + anonymized mode toggle
- `POST /api/admin/applications/:id/decision`: reviewer/admin decision write + optional needs-info message

## Security notes (MVP baseline)
- RBAC middleware gates role-specific portal routes.
- Schema is data-minimized for eligibility and funding decisions.
- Upload handling and signed URL access are planned next (storage keys never returned directly).
- Sensitive field encryption-at-rest hooks are planned next for applicant profile/contact fields.
- AuditLog model exists for all reviewer/admin actions.
- Applicant APIs enforce ownership checks so applicants can only access their own applications.

## Assumptions
- Authentication method selected: email + password (credentials).
- Stripe donation path can gracefully fallback to a dev-mode stub when keys are absent.
- Reviewer and Admin roles are distinct; only Admin can access `/admin/*`.

## Next implementation steps
- Implement contact/partner intake APIs with rate limiting
- Build full multi-step applicant workflow and file upload pipeline
- Add admin decision workflows, award issuance, and audit write hooks
- Add Stripe donation checkout + PDF receipt generation
