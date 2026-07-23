# Contributing — qyne-web

How to work in this repository. Read this and any `AGENTS.md` before writing code.

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

Two long-lived branches, each mapped to an environment:

| Branch | Environment | How code arrives |
|---|---|---|
| `main` | **production** | release PR from `develop` |
| `develop` | **staging** | squash-merged feature PRs |

Work branches off `develop`:

| Branch | Purpose |
|---|---|
| `feat/*` | new capability |
| `fix/*` | bug fix |
| `chore/*` | tooling, deps, config |
| `hotfix/*` | urgent production fix — branch off `main`, then back-merge to `develop` |

- **Conventional commits** (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`).
- Open a PR into `develop`; it must pass CI and get a review. Prefer **squash-merge**.
- A release is a PR from `develop` into `main`.

### Protected branches (interim, free plan)

`main` and `develop` are **never pushed to directly** — always via PR. Server-side
branch protection needs a paid GitHub plan; until then a client-side hook enforces
it locally:

- Enabled automatically on `npm install` (the `prepare` script runs
  `git config core.hooksPath .githooks`). To enable manually, run that command once.
- [`.githooks/pre-push`](.githooks/pre-push) blocks direct pushes to `main` and `develop`.
- Emergency bypass (use deliberately): `git push --no-verify`.

## Keeping the README current

[README.md](README.md) is the front door to this repo and **must never drift from
reality**. Before every push, check whether your change makes it wrong — if it
does, fix it in the same PR. A PR that leaves the README stale should be sent
back in review.

Update it whenever a change touches:

- setup or prerequisites (Node version, tooling)
- environment variables
- project structure or architecture
- **routes/pages**, or the shared styling primitives and design tokens
- scripts, CI gates, or the branching workflow

If nothing in the README is affected, say so explicitly in the PR
("README: no change needed") so it's a conscious call rather than an oversight.

## Definition of done

- Lint and build (type-check) pass; CI is green.
- No secrets or PII in code, logs, or fixtures.
- **README is current** — updated in this PR, or explicitly confirmed unaffected.
