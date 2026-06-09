# Frontend Digest — Project Fingerprint

## Repo Classification

- **repo_kind**: `frontend-app`
- **confidence**: `high`
- **Signals**: Single static HTML portfolio app with Vite build tooling, no
  monorepo layout, no design-system packages, no workspace config.

## Tooling

- **Package manager**: `pnpm` (v9, via `packageManager` field in package.json)
- **Workspace manager**: None (single-package)
- **Install command**: `pnpm install`
- **Lint command**: None configured
- **Type-check command**: None (no TypeScript)
- **Unit/component test command**: None configured
- **E2E test command**: None configured

## Framework & Runtime

- **Primary framework**: None (pure HTML/CSS/JS)
- **Build tool**: Vite 5.x (static asset bundler, no framework plugin)
- **Rendering model**: Static HTML served as-is; no SSR, SPA, or component
  framework
- **App paths**:
  - `index.html` (root) — home page
  - `public/about.html` — about page
  - `public/projects.html` — projects gallery
  - `public/raraspace.html` — RaraSpace EMS case study
  - `public/intellix.html` — Intellix Healthcare KPI case study
  - `public/loksewa.html` — Loksewa Pro case study

## Styling & Design System

- **Styling solution**: Pure CSS with CSS custom properties (no framework)
- **Token source**: Inline `:root` variables in each HTML file:
  `--bg`, `--bg2`, `--bg3`, `--orange`, `--orange2`, `--white`, `--gray`,
  `--gray2`, `--success`, `--border`, `--border2`
- **Typography**: Google Fonts — Bebas Neue (headings), DM Sans (body),
  DM Mono (monospace)
- **Design system**: Custom per-case-study accent colors (teal for Intellix,
  amber for Loksewa, orange for global brand)
- **Internal design-system packages**: None
- **Publishes/consumes design system**: Neither

## Data, State & API

- **Data fetching**: None (static site)
- **State management**: None
- **API client pattern**: None
- **API contract sources**: None — this is a fully static portfolio with no
  backend or API dependencies
- **Backend directory mapping**: N/A

## Testing Stack

- **Unit/component frameworks**: None
- **E2E framework**: None
- No test infrastructure present

## Analytics & Observability

- **Analytics stack**: None configured
- **Observability stack**: None configured
- No tracking or monitoring tools present

## CI/CD & Release Signals

- **CI provider**: GitHub Actions
- **Deploy platform**: GitHub Pages (user site)
  - **URL**: `https://dikshyachhetri.github.io`
- **Preview/sandbox platform**: None (GitHub Pages deploys directly to prod)
- **Release workflow**: `.github/workflows/deploy.yml` — on push to `main`,
  install with `pnpm install --frozen-lockfile`, build with `pnpm build`,
  deploy with `actions/deploy-pages@v4`

## Workflow Conventions

- **Default branch**: `main`
- **PR/release branch model**: Standard GitHub flow (main as default)
- **Docs/planning folders**:
  - `docs/frontend-skill-digest/` (this digest)
  - `public/` (static HTML pages)
  - `.github/workflows/` (CI/CD)
- **Import/naming conventions**: N/A — no JS modules or components

## Skill Applicability Map

| Lane | Status | Notes |
|------|--------|-------|
| PR review | `partial` | Review HTML/CSS/JS changes only; no component framework |
| API integration | `out_of_scope` | Static site with no API |
| Testing | `out_of_scope` | No test infrastructure |
| Analytics | `partial` | No analytics installed; can advise on adding Google Analytics/Plausible |
| Observability | `out_of_scope` | No observability tooling |
| CI/CD | `applies` | GitHub Actions deploy to GitHub Pages |
| Planning | `applies` | Standard branch/PR planning for static sites |
| Commit hygiene | `applies` | Atomic commits for HTML/CSS/JS changes |

## Freshness

- **Generated**: `2026-06-09T14:12:00+05:45`
- **Generated commit SHA**: `faa1779fc71f7e68c2dca6f748d288c383080c93`
- **Files/signals inspected**:
  - `index.html` — 7908428b7e734a07f72938bde38d9df3
  - `package.json` — fc662d22a4c2d810ab0c66dca2376e2f
  - `vite.config.ts` — 12ca0f69ce1eec53abe11d03214f8b52
  - `pnpm-lock.yaml` — 9a44e5f335c717a908a44161166fef83
  - `.github/workflows/deploy.yml` — a3aa357a7e1fb601a33c5ce772380ec4
  - `public/about.html` — f2b3a1efba872a588a85ab6f0240e5d8
  - `public/intellix.html` — e7017a1a911da1e30c432fdac7fac72a
  - `public/loksewa.html` — 5230b48c6f3836fcc6f31c1b7f0097de
  - `public/projects.html` — 98ea244dc4e297552e4a15cedf8893e6
  - `public/raraspace.html` — 91cd70c2bddf26547a40887079dc696a

**Triggers for refresh**:
- Lockfile change (`pnpm-lock.yaml`)
- Vite config change (`vite.config.ts`)
- New analytics/observability tool added
- CI/CD provider or deploy platform change
- Any HTML file hash change

## Open Questions

None — this is a complete static app with no backend, API, or external
dependencies.
