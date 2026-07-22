# Security & Privacy

Qyne handles **personal health and biometric data** (heart rate, HRV, SpO₂, sleep,
activity). Security and privacy are product requirements, not add-ons.

## Controls

1. **Authentication** — Supabase-issued JWTs; tokens verified server-side, never
   trusted from the request body. Refresh tokens rotate.
2. **Authorization** — the user id is derived from the verified JWT; a user can
   only read/write their own data.
3. **Input validation** — every ingested payload is schema-validated; out-of-range
   or unknown samples are rejected with a reason, never trusted blindly.
4. **Transport** — TLS in transit for all API and Supabase traffic.
5. **Least data** — collect only what a feature needs; health data lives server-side,
   the phone acts as a gateway and does not persist others' data.
6. **Secrets** — no hardcoded secrets or API keys in code, logs, or fixtures.
   `.env*` files are git-ignored and must never be committed. Personal access
   tokens (e.g. Figma) live in local, git-ignored config only.

## Handling data

- Do not put real user PII or health data in fixtures, tests, screenshots, or logs.
- Scrub tokens and identifiers before sharing logs or transcripts.
- Rotate any credential that may have been exposed.

## Reporting a vulnerability

Report suspected vulnerabilities **privately** to the Qyne maintainers — do not
open a public issue for security matters.
