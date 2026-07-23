# Contributing — qyne-web

How to work in this repository. Read this and any `AGENTS.md` / `CLAUDE.md` before
writing code.

## Prerequisites

- Node `>=20` (use `nvm use` if you keep an `.nvmrc`)
- npm (this repo uses `package-lock.json`)

## Getting started

```bash
npm install          # installs deps AND wires the git hooks (prepare script)
cp .env.example .env  # if present — fill in local values (never commit .env)
npm run dev          # Vite dev server
npm run lint         # eslint
npm run build        # tsc -b && vite build (type-checks + production build)
```

## Git workflow

`main` maps to production and is **never pushed to directly** — all changes land via
PR.

| Branch | Purpose |
|---|---|
| `feat/*` | new capability |
| `fix/*` | bug fix |
| `chore/*` | tooling, deps, config |

- **Conventional commits** (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`).
- Open a PR from your branch into `main`; it must pass CI and get a review.
  Prefer **squash-merge**.
- Commit trailer for AI-assisted changes:
  ```
  Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
  ```

### Protected `main` (interim, free plan)

Server-side branch protection needs a paid GitHub plan. Until then a client-side
hook enforces it locally:

- Enabled automatically on `npm install` (the `prepare` script runs
  `git config core.hooksPath .githooks`). To enable manually, run that command once.
- [`.githooks/pre-push`](.githooks/pre-push) blocks direct pushes to `main`.
- Emergency bypass (use deliberately): `git push --no-verify`.

## Definition of done

- Lint and build (type-check) pass; CI is green.
- No secrets or PII in code, logs, or fixtures.
- Docs updated when behaviour changes.
