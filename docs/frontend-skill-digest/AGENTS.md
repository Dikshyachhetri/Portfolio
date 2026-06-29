# Frontend Digest  Operating Contract

## Purpose

This folder contains the frontend-skill digest for the Dikshya Portfolio  a
React SPA portfolio for a UI/UX designer, built with Vite and React Router.
`project-digest.md` is the authoritative fingerprint of the repo; this file
governs trust, freshness, and re-check rules for all frontend lanes.

## Authoritative File

- `project-digest.md` is the single source of truth for repo detection results.
- This file (`AGENTS.md`) governs trust, freshness, and re-check rules.

## When to Refresh

Run `/frontend:refresh-digest` when any of these change:

- Lockfile (`pnpm-lock.yaml`)
- Workspace layout or package manager
- Primary framework or Vite config
- New analytics, observability, or styling tool added
- CI provider or deploy platform changes
- Branch model changes

Only `/frontend:refresh-digest` persists updates; all other commands use
ephemeral inline detection when the digest is stale.

## Trust and Re-check Rules

### Trust without re-checking

- Repo classification (`frontend-app`)
- Package manager (`pnpm`)
- Framework (React 18 + Vite SPA)
- Workspace layout (single-package)

### Verify at runtime when staleness is possible

- CI/CD provider and deploy platform
- API contract sources (currently none)
- Analytics/observability stack (currently none)

Lanes must never silently override digest values. If a lane detects a
mismatch, note the discrepancy and recommend a refresh.
