# Frontend Digest  Project Fingerprint

## Repo Classification

- **repo_kind**: `frontend-app`
- **confidence**: `high`
- **Signals**: React SPA portfolio app with Vite build tooling, React Router for
  client-side routing, no monorepo layout, no design-system packages.

## Tooling

- **Package manager**: `pnpm` (v9, via `packageManager` field in package.json)
- **Workspace manager**: None (single-package)
- **Install command**: `pnpm install`
- **Lint command**: None configured
- **Type-check command**: None (no TypeScript)
- **Unit/component test command**: None configured
- **E2E test command**: None configured

## Framework & Runtime

- **Primary framework**: React 18 with React Router DOM 6
- **Build tool**: Vite 5.x with React plugin
- **Rendering model**: Client-side SPA; routes handled by React Router
- **Routing**: `/` → redirects to `/home`; routes: `/home`, `/work`, `/about`
- **App paths**:
  - `src/main.tsx`  app entry
  - `src/App.tsx`  router setup with shared layout (Nav + Footer)
  - `src/pages/HomePage.tsx`  home page (hero, AI workflow, stats, CTA)
  - `src/pages/WorkPage.tsx`  projects gallery with 3 full case study cards
  - `src/pages/AboutPage.tsx`  about page with experience, skills, education
  - `src/components/Nav.tsx`  shared navigation
  - `src/components/Footer.tsx`  shared footer
  - `src/components/CustomCursor.tsx`  custom cursor effect
  - `src/components/Toast.tsx`  email copy toast notification
  - `src/styles/global.css`  shared design system CSS variables
  - `public/raraspace.html`  static case study (RaraSpace EMS)
  - `public/intellix.html`  static case study (Intellix Healthcare)
  - `public/loksewa.html`  static case study (Loksewa Pro)

## Styling & Design System

- **Styling solution**: Global CSS with CSS custom properties (no CSS-in-JS)
- **Token source**: `src/styles/global.css` defines `:root` variables:
  `--bg`, `--bg2`, `--bg3`, `--orange`, `--orange2`, `--white`, `--gray`,
  `--gray2`, `--success`, `--border`, `--border2`
- **Typography**: Google Fonts  Bebas Neue (headings), DM Sans (body),
  DM Mono (monospace)
- **Design system**: Custom per-case-study accent colors (teal for Intellix,
  amber for Loksewa, orange for global brand)
- **Internal design-system packages**: None
- **Publishes/consumes design system**: Neither

## Data, State & API

- **Data fetching**: None (static portfolio SPA)
- **State management**: React useState/useEffect only
- **API client pattern**: None
- **API contract sources**: None  fully static portfolio with no backend or API
- **Backend directory mapping**: N/A

## Testing Stack

- **Unit/component frameworks**: None
- **E2E framework**: None
- No test infrastructure present

## Analytics & Observability

- **Analytics stack**: None configured
- **Observability stack**: None configured

## CI/CD & Release Signals

- **CI provider**: GitHub Actions
- **Deploy platform**: GitHub Pages (project site)
  - **URL**: `https://dikshyachhetri.github.io/Portfolio/`
- **Preview/sandbox platform**: None (GitHub Pages deploys directly to prod)
- **Release workflow**: `.github/workflows/deploy.yml`  on push to `main`,
  install with `pnpm install --frozen-lockfile`, build with `pnpm build`,
  deploy with `actions/deploy-pages@v4`
- **404 fallback**: `dist/404.html` (copy of built index.html) for client-side routing

## Workflow Conventions

- **Default branch**: `main`
- **PR/release branch model**: Standard GitHub flow (main as default)
- **Docs/planning folders**:
  - `docs/frontend-skill-digest/` (this digest)
  - `docs/HANDOFF.md`  original project handoff
  - `docs/VITE_SETUP.md`  Vite setup guide
  - `docs/AGENT_CONTEXT.md`  agent context for Dikshya's portfolio
  - `public/`  static assets (case study HTML pages)
  - `.github/workflows/`  CI/CD
- **Import/naming conventions**: PascalCase for components, camelCase for files

## Skill Applicability Map

| Lane | Status | Notes |
|------|--------|-------|
| PR review | `applies` | Review React components, CSS, and static HTML case studies |
| API integration | `out_of_scope` | Static SPA with no API |
| Testing | `out_of_scope` | No test infrastructure |
| Analytics | `partial` | No analytics installed; can advise on Google Analytics/Plausible |
| Observability | `out_of_scope` | No observability tooling |
| CI/CD | `applies` | GitHub Actions deploy to GitHub Pages |
| Planning | `applies` | Standard branch/PR planning for React apps |
| Commit hygiene | `applies` | Atomic commits for React component changes |

## Freshness

- **Generated**: `2026-06-09T14:33:00+05:45`
- **Generated commit SHA**: `e85a17f53de478e27cdb6446b66ee1a270466d7b`
- **Files/signals inspected**:
  - `src/App.tsx`  router and layout
  - `src/pages/HomePage.tsx`  home page component
  - `src/pages/WorkPage.tsx`  work page component
  - `src/pages/AboutPage.tsx`  about page component
  - `src/styles/global.css`  design system CSS
  - `package.json`  deps and scripts
  - `vite.config.ts`  Vite config with base path `/Portfolio/`
  - `pnpm-lock.yaml`  lockfile
  - `.github/workflows/deploy.yml`  CI/CD

**Triggers for refresh**:
- Lockfile change (`pnpm-lock.yaml`)
- Vite config change (`vite.config.ts`)
- New React dependency or route added
- CI/CD provider or deploy platform change
- New source component added

## Open Questions

None.
