# Vite + React Setup for GitHub Pages
**Purpose:** Wrap the existing static HTML portfolio in a Vite + React project so you can host on GitHub Pages using the standard `gh-pages` deploy workflow.

---

## Option A  Keep as Static HTML (Simplest)

You don't need Vite at all. GitHub Pages serves static files directly.

**Steps:**
```bash
# 1. Create a new GitHub repo named:
#    yourusername.github.io
#    (replace "yourusername" with your actual GitHub username)

# 2. Clone it locally
git clone https://github.com/yourusername/yourusername.github.io
cd yourusername.github.io

# 3. Copy all portfolio files into the repo root
cp path/to/dikshya-portfolio/*.html .
mkdir assets
# Add dikshya.jpg and resume.pdf to assets/

# 4. Push
git add .
git commit -m "Initial portfolio deploy"
git push origin main

# 5. Go to GitHub repo → Settings → Pages
#    Source: Deploy from a branch → main → / (root)
#    Save  your site is live at https://yourusername.github.io
```

---

## Option B  Vite + React Wrapper (If you want a build pipeline)

Use this if you want hot module replacement during development, want to add React components later, or prefer a modern build setup.

### Prerequisites
```bash
node --version   # needs v18+
npm --version    # needs v9+
```

### Step 1  Scaffold the Vite project
```bash
npm create vite@latest dikshya-portfolio-vite -- --template react
cd dikshya-portfolio-vite
npm install
```

### Step 2  Install gh-pages deploy tool
```bash
npm install --save-dev gh-pages
```

### Step 3  Configure vite.config.js
Open `vite.config.js` and add your repo name as the base:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Use '/' for yourusername.github.io repos
              // Use '/repo-name/' for project repos (e.g. '/portfolio/')
})
```

### Step 4  Update package.json
Add these fields to your `package.json`:
```json
{
  "homepage": "https://yourusername.github.io",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 5  Move HTML files into public/
Vite serves files in `public/` as static assets at the root path.

```bash
# From inside dikshya-portfolio-vite/
mkdir -p public/assets

# Copy all portfolio HTML files
cp path/to/dikshya-portfolio/index.html public/
cp path/to/dikshya-portfolio/projects.html public/
cp path/to/dikshya-portfolio/about.html public/
cp path/to/dikshya-portfolio/raraspace.html public/
cp path/to/dikshya-portfolio/intellix.html public/
cp path/to/dikshya-portfolio/loksewa.html public/

# Copy your assets
cp path/to/dikshya.jpg public/assets/
cp path/to/resume.pdf public/assets/
```

### Step 6  Update asset paths in HTML files
Since files are in `public/`, asset paths in your HTML become root-relative.
In `about.html`, update the photo-frame to:
```html
<div class="photo-frame" style="
  background-image: url('/assets/dikshya.jpg');
  background-size: cover;
  background-position: center top;
  font-size: 0;
"></div>
```

All resume links update to:
```html
<a href="/assets/resume.pdf" download>Download Resume</a>
```

### Step 7  Test locally
```bash
npm run dev
# Opens at http://localhost:5173
# Navigate to http://localhost:5173/projects.html etc.
```

### Step 8  Deploy to GitHub Pages
```bash
# First time only  connect to your GitHub repo
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Deploy
npm run deploy
# This runs: npm run build → gh-pages -d dist
# Pushes the dist/ folder to a gh-pages branch
```

### Step 9  Enable GitHub Pages
1. Go to your GitHub repo → **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** → **/ (root)**
4. Save
5. Live at: `https://yourusername.github.io` in ~2 minutes

---

## Option C  GitHub Actions (Auto-deploy on push)

Create `.github/workflows/deploy.yml` in your repo:

```yaml
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

With this set up, every `git push` to `main` automatically rebuilds and redeploys. No manual `npm run deploy` needed.

---

## Folder Structure After Setup (Option B)

```
dikshya-portfolio-vite/
├── public/
│   ├── index.html
│   ├── projects.html
│   ├── about.html
│   ├── raraspace.html
│   ├── intellix.html
│   ├── loksewa.html
│   └── assets/
│       ├── dikshya.jpg
│       └── resume.pdf
├── src/
│   ├── main.jsx          (Vite entry  leave as-is)
│   └── App.jsx           (not used for static HTML approach)
├── .github/
│   └── workflows/
│       └── deploy.yml    (Option C only)
├── vite.config.js
├── package.json
├── HANDOFF.md
└── VITE_SETUP.md
```

---

## Quick Reference  Commands

```bash
npm run dev        # Start local dev server (http://localhost:5173)
npm run build      # Build to dist/
npm run preview    # Preview the built dist/ locally
npm run deploy     # Build + push to gh-pages branch
```

---

## Troubleshooting

**404 on page reload?**
Vite's dev server handles this, but GitHub Pages doesn't support client-side routing for HTML files. Since this portfolio uses direct `.html` file links (not React Router), this is not an issue.

**Assets not loading after deploy?**
Check that `base` in `vite.config.js` matches your repo structure. For `yourusername.github.io` use `base: '/'`. For a project repo at `github.com/user/portfolio` use `base: '/portfolio/'`.

**Google Fonts not loading?**
The fonts are loaded via `<link>` tags in each HTML file  they load directly from Google CDN. No changes needed.

**Custom cursor not working on mobile?**
Correct  the cursor is hidden on mobile (requires pointer device). Touch devices fall back to the default cursor. This is intentional behaviour.
