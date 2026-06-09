# Dikshya Portfolio — Agent Handoff Document
**Version:** 1.0  
**Built:** June 2026  
**Status:** Production-ready, deploy-ready  

---

## Project Overview

A 6-page static HTML/CSS/JS portfolio for **Dikshya**, a UI/UX Designer based in Kathmandu, Nepal. Built with no frameworks — pure HTML, CSS, and vanilla JS. Designed to deploy on GitHub Pages as-is, or be wrapped in a Vite + React shell (see `VITE_SETUP.md`).

---

## File Structure

```
dikshya-portfolio/
├── index.html          # Home — hero, AI workflow, project list, stats, CTA
├── projects.html       # Work — 3 full project preview cards
├── about.html          # About — bio, experience, skills, education
├── raraspace.html      # Case study — RaraSpace EMS (Rara Digital Lab)
├── intellix.html       # Case study — Intellix Healthcare KPI (Rara Digital Lab)
├── loksewa.html        # Case study — Loksewa Pro mobile app (Pisces Moon)
├── assets/             # (CREATE THIS) — add photo + resume here
│   ├── dikshya.jpg     # Profile photo (replace emoji placeholder in about.html)
│   └── resume.pdf      # CV download
├── HANDOFF.md          # This file
└── VITE_SETUP.md       # Vite + React migration guide
```

---

## Design System (CSS Variables)

All pages share identical CSS custom properties defined in `:root`:

```css
--bg:        #0e0e0e   /* Page background */
--bg2:       #161616   /* Section alternate background */
--bg3:       #1e1e1e   /* Card / elevated surface */
--orange:    #e8521a   /* Primary brand accent */
--orange2:   #ff6b35   /* Hover state of orange */
--white:     #f0ece4   /* Body text */
--gray:      #999      /* Secondary text */
--gray2:     #555      /* Muted / placeholder text */
--success:   #22c55e   /* Status dot (available indicator) */
--border:    rgba(255,255,255,0.08)  /* Subtle borders */
--border2:   rgba(255,255,255,0.13) /* Active borders */
```

**Typography:**
- Display / headings: `Bebas Neue` (Google Fonts)
- Body: `DM Sans` (Google Fonts)
- Monospace / labels: `DM Mono` (Google Fonts)

---

## Features Implemented

### Global (all pages)
- [x] Custom cursor — orange dot + lagging ring
- [x] Fixed navigation — logo, links, "Hire Me" CTA
- [x] Mobile hamburger drawer with X animation
- [x] Email copy toast notification (on all CTA buttons)
- [x] Skip-to-content link (accessibility)
- [x] Focus-visible styles (keyboard navigation)
- [x] `prefers-reduced-motion` media query (all animations disabled for accessibility)
- [x] Fully responsive — tested at 1200px, 900px, 600px, 375px

### index.html
- [x] Character scramble animation on hero text (RESEARCH. / DESIGN. / EXPERIENCE.)
- [x] Staggered fade-up animations on hero load
- [x] Ambient background glow animation
- [x] Available-for-hire pulsing green dot
- [x] Scroll-reveal on AI cards, project rows, stat items
- [x] Marquee ticker strip (pauses on hover)
- [x] Fixed social strip (left side)
- [x] Scroll indicator (right side)
- [x] Stats row: 5yrs · 10K+ · 30% · 6 industries
- [x] Nav border darkens on scroll

### projects.html
- [x] 3 full project preview cards
- [x] 3D-tilt CSS mock screens (perspective transform, eases on hover)
- [x] Scroll-reveal staggered entrance
- [x] Case study summary (Problem → Process → Impact) per card
- [x] Real metrics per project
- [x] Direct "View Case Study" links

### about.html
- [x] Two-column page header
- [x] Photo placeholder (TODO: replace with real photo)
- [x] Display quote section
- [x] 7 experience entries with scroll-reveal
- [x] **Case study links embedded in experience entries:**
  - Loksewa entry → `loksewa.html`
  - Rara Digital Lab entry → `raraspace.html` + `intellix.html`
- [x] 6-group skills grid
- [x] Education + Additional section

### raraspace.html / intellix.html / loksewa.html (case studies)
- [x] Reading progress bar (top of page, fills as you scroll)
- [x] Hero with breadcrumb, meta chips, quick-stats bar
- [x] Fully coded CSS mockup of the actual product UI
- [x] Proof bar (metrics, live links where applicable)
- [x] Research section
- [x] Pain point → solution cards (4 per project)
- [x] Before/After design decision table
- [x] Final design showcase cards (4 per project)
- [x] Metrics section
- [x] Reflection section (4 cards)
- [x] "Next project" section (creates a loop between case studies)
- [x] Scroll-reveal on all card grids

---

## Navigation / Link Map

```
index.html
  ├── → projects.html      (nav + "See all work" + "View Work" CTA)
  ├── → about.html         (nav + "About Me" ghost button)
  ├── → raraspace.html     (project row 01)
  ├── → intellix.html      (project row 02)
  └── → loksewa.html       (project row 03)

projects.html
  ├── → raraspace.html     (card 01 CTA)
  ├── → intellix.html      (card 02 CTA)
  └── → loksewa.html       (card 03 CTA)

about.html
  ├── → loksewa.html       (Pisces Moon experience entry)
  ├── → raraspace.html     (Rara Digital Lab experience entry)
  └── → intellix.html      (Rara Digital Lab experience entry)

raraspace.html → loksewa.html   (next project)
intellix.html  → loksewa.html   (next project)
loksewa.html   → intellix.html  (next project loop)
```

---

## TODOs Before Going Live

| Priority | Task | File | Instructions |
|----------|------|------|-------------|
| 🔴 Critical | Replace photo placeholder | `about.html` | Find `.photo-frame` div, remove emoji, add `style="background-image:url('assets/dikshya.jpg');background-size:cover;background-position:center top;"` |
| 🔴 Critical | Replace all email addresses | All files | Search `dikshya@email.com`, replace with real email |
| 🔴 Critical | Replace social links | `index.html` | Find `.social-strip`, update LinkedIn, Dribbble, Behance `href` values |
| 🟡 High | Add resume PDF | `about.html`, `index.html` | Add `assets/resume.pdf`, update href on all download buttons |
| 🟡 High | Update Play Store link | `loksewa.html` | Find `play.google.com` href in proof bar, paste real URL |
| 🟢 Nice | Add real project screenshots | All case studies | Replace CSS mock screens with `<img>` tags (see instructions per file) |

---

## Case Study Project Summary

### 01 — RaraSpace EMS (`raraspace.html`)
- **Client:** Rara Digital Lab Pvt. Ltd.
- **Role:** UI/UX Designer · 2022–2024
- **Platform:** Web App
- **Team:** 12 people · 9 months
- **Outcome:** 100% operational efficiency improvement, 10+ modules unified
- **Product accent color:** `#e8521a` (orange)

### 02 — Intellix Healthcare KPI (`intellix.html`)
- **Client:** Rara Digital Lab Pvt. Ltd.
- **Role:** UI/UX Designer · 2022–2024
- **Platform:** Web App + Mobile
- **Team:** 6 people · 2 months
- **Outcome:** 30% user satisfaction improvement, reduced clinical cognitive load
- **Product accent color:** `#0d6b5e` (teal) / `#1a9b8a`

### 03 — Loksewa Pro (`loksewa.html`)
- **Client:** Pisces Moon
- **Role:** UI/UX Designer · 2024–2025
- **Platform:** Mobile App (iOS + Android)
- **Team:** 2 people · 2 months
- **Outcome:** 10,000+ downloads, 4.4★ Play Store rating
- **Product accent color:** `#f59e0b` (amber)

---

## Patterns & Conventions

### Scroll Reveal
All animated elements use `IntersectionObserver`:
```js
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') });
}, { threshold: 0.07 });
document.querySelectorAll('.your-class').forEach(el => obs.observe(el));
```
CSS pattern:
```css
.element {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
}
.element.revealed { opacity: 1; transform: translateY(0); }
```

### Toast Notification
Used on all email/CTA buttons. Copies email to clipboard:
```js
function showToast(e) {
  e.preventDefault();
  navigator.clipboard.writeText('dikshya@email.com').catch(() => {});
  const t = document.getElementById('toast');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}
```

### Custom Cursor
Present on all pages. Smooth lagging ring uses `requestAnimationFrame`:
```js
let mx=0, my=0, rx=0, ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; cursor.style.left=mx+'px'; cursor.style.top=my+'px'; });
(function anim(){ rx+=(mx-rx)*.11; ry+=(my-ry)*.11; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(anim); })();
```

### Hamburger Menu
All pages have a mobile drawer nav with animated hamburger → X:
```js
hamburger.addEventListener('click', () => {
  const open = drawer.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
  const s = hamburger.querySelectorAll('span');
  if (open) {
    s[0].style.transform = 'translateY(6.5px) rotate(45deg)';
    s[1].style.opacity = '0';
    s[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
  } else { s.forEach(x => { x.style.transform=''; x.style.opacity=''; }); }
});
```

---

## Accessibility Notes
- All interactive elements have `aria-label` attributes
- Skip-to-content link on every page
- `aria-current="page"` on active nav link
- `role="list"` / `role="listitem"` on all card grids
- `aria-live="polite"` on toast notification
- `prefers-reduced-motion` disables all CSS animations
- Minimum 44px touch targets on all buttons and links
- Semantic HTML5 throughout (`<nav>`, `<main>`, `<article>`, `<header>`, `<footer>`, `<section>`)
