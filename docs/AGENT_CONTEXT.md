# Agent Context — Dikshya Portfolio
**For AI agents continuing work on this project**

---

## Who is Dikshya?

- **Name:** Dikshya
- **Role:** UI/UX Designer
- **Location:** Kathmandu, Nepal
- **Experience:** 5 years (since 2021)
- **Status:** Actively job hunting as of June 2026
- **Email:** dikshya@email.com ← REPLACE WITH REAL EMAIL
- **Specializations:** Enterprise dashboards, mobile apps, healthcare UX, EdTech, design systems
- **AI tools she uses:** Claude, ChatGPT, Lovable, Uizard, Figma AI, Stitch

---

## Current Employment

| Company | Role | Period | Notes |
|---------|------|--------|-------|
| Invicta PTE LTD | Senior UI/UX Designer | 2025–Present | Current role. Likely NDA — no screenshots available. Maritime voyage intelligence platform. |
| Pisces Moon | UI/UX Designer | 2024–2025 | Loksewa Pro app. Has full case study. |
| Freelancing | UI/UX Designer | 2024–2025 | Multiple clients — AI fintech, Zero Trust security. No screenshots. |
| Life Management Science Labs | UI/UX Designer | 2024–2025 | Wellness app, EdTech. No dedicated case study built. |
| Rara Digital Lab Pvt. Ltd. | UI/UX Designer | 2022–2024 | RaraSpace EMS + Intellix Healthcare. Both have full case studies. |
| Smart Acre Media Solutions | Designer & Marketing Analyst | 2021–2022 | Email design. No case study needed. |
| Featherwebs | Frontend Developer (Internship) | 2021 | HRIS internship. No case study needed. |

---

## Portfolio Structure (3 Core Case Studies)

### Why these 3?
Selected based on: visual assets available, depth of process, measurable outcomes, industry breadth.

| # | Project | File | Industry | Key Metric |
|---|---------|------|----------|-----------|
| 1 | RaraSpace EMS | `raraspace.html` | Enterprise / Internal Tool | 100% ops efficiency improvement |
| 2 | Intellix Healthcare KPI | `intellix.html` | Healthcare | 30% user satisfaction lift |
| 3 | Loksewa Pro | `loksewa.html` | EdTech / Mobile | 10,000+ downloads · 4.4★ |

### Projects NOT in portfolio (and why)
- **Invicta / Maritime** — Current role, NDA, no ownable screenshots
- **AI Fintech Platform** — No screenshots, no metrics
- **Zero Trust Security** — No screenshots, niche domain
- **LMSL Wellness App** — No screenshots provided

---

## Design System

### Colour tokens
```
--bg:      #0e0e0e   Primary background
--bg2:     #161616   Secondary background / section alternates
--bg3:     #1e1e1e   Card surface
--orange:  #e8521a   Brand accent — ALL interactive elements
--orange2: #ff6b35   Hover state
--white:   #f0ece4   Body text (warm white, not pure #fff)
--gray:    #999      Secondary text
--gray2:   #555      Muted text
--success: #22c55e   Status / available indicator
--border:  rgba(255,255,255,.08)  Borders
```

### Per-case-study accent colours
```
raraspace.html → --orange (#e8521a) — matches global brand
intellix.html  → --teal (#0d6b5e) / --teal2 (#1a9b8a)
loksewa.html   → --amber (#f59e0b) / --amber2 (#fbbf24)
```

### Typography
```
Bebas Neue  → All headings, display text, numbers
DM Sans     → Body copy, nav, buttons
DM Mono     → Labels, kickers, metadata, monospace
```
All loaded via Google Fonts CDN link in `<head>`.

---

## Key Interactions

### Scramble text (index.html only)
Hero headline letters randomize through `ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%?&` then snap to real character. Orange flash on each iteration. Triggered 1100ms / 1320ms / 1540ms after page load (after fadeUp animations complete).

### Reading progress bar (case study pages)
Thin 2px line at top (below nav), fills left-to-right as user scrolls. Orange on raraspace, teal on intellix, amber on loksewa.

### Scroll reveal
`IntersectionObserver` with `threshold: 0.07`. Elements start `opacity:0; transform:translateY(20px)`. On intersection, `.revealed` class added. Staggered via `transition-delay` on nth-child selectors.

### Custom cursor
12px dot + 32px ring. Ring lags behind dot using `rx += (mx-rx) * 0.11` lerp in `requestAnimationFrame`. Cursor grows on `a:hover` and `button:hover`. Hidden on mobile (no pointer device).

### Toast notification
All email CTAs call `showToast(event)`. Copies `dikshya@email.com` to clipboard. Toast slides up from bottom, shows 3 seconds, slides back down.

### Mobile hamburger
Three-line icon animates to X on open. Drawer slides down from nav. `aria-expanded` updates for accessibility.

---

## TODOs Remaining

### Critical (before going live)
- [ ] Replace `dikshya@email.com` with real email in all 6 files
- [ ] Add real photo to `about.html` (`.photo-frame` div — see HANDOFF.md)
- [ ] Update social links in `index.html` `.social-strip` (LinkedIn, Dribbble, Behance)
- [ ] Add `assets/resume.pdf` and update download buttons

### High priority
- [ ] Update Loksewa Play Store URL in `loksewa.html` proof bar
- [ ] Add real project screenshots to case studies (see "Adding screenshots" below)

### Nice to have
- [ ] Add a contact form (currently just email copy)
- [ ] Add Google Analytics / Plausible
- [ ] Add OG meta tags for social sharing previews

---

## Adding Real Screenshots

In each case study, the project visuals are CSS mockups. To replace with real screenshots:

**For desktop screenshots** (raraspace, intellix):
```html
<!-- Find the .proj-visual or .showcase-visual div -->
<!-- Replace the mock-screen div with: -->
<img 
  src="assets/screenshot-name.png" 
  alt="Descriptive alt text"
  style="width:85%;border-radius:10px;box-shadow:0 24px 64px rgba(0,0,0,.4);"
/>
```

**For mobile screenshots** (loksewa):
```html
<img 
  src="assets/loksewa-home.png" 
  alt="Loksewa Pro home screen"
  style="width:180px;border-radius:24px;box-shadow:0 24px 64px rgba(0,0,0,.5);"
/>
```

---

## Conversation History Summary

This portfolio was built across a long conversation session in June 2026. Key decisions made:

1. **Dark editorial theme** kept from Dikshya's original Figma portfolio (black bg, orange accent, Bebas Neue for display text)
2. **No hamburger on desktop** — nav links always visible (UX principle: Visibility/Findability)
3. **3 projects only** — Maritime (Invicta, current role) was intentionally excluded due to NDA risk. Fintech and Zero Trust excluded due to no visual assets.
4. **Case study depth** — Each case study follows: Hero → Research → Pain points → Design decisions (Before/After) → Final design → Metrics → Reflection. Matches the structure of Dikshya's original Figma case studies.
5. **UX principles applied** throughout — from the GFG article on UI/UX principles: Simplicity, Visibility, Consistency, Feedback, Clarity, Accessibility, Usability, Efficiency, Delight, User-centered design.
6. **Scramble text effect** added to hero based on a screen recording Dikshya shared showing this transition style.
7. **Reading progress bar** added to all case study pages for depth feedback.
8. **Toast notification** replaces direct mailto links — copies email to clipboard (more professional UX in 2026).

---

## If You're Continuing This Work

### Immediate next asks (likely)
- Dikshya may want to swap in real photos and screenshots
- She may want a contact form added
- She may want additional case studies added for LMSL or freelance projects

### How to add a new case study
1. Duplicate `loksewa.html` (most recent, cleanest structure)
2. Update the accent color CSS variable at top of `:root`
3. Replace all content sections with new project content
4. Add the new page to `projects.html` as a 4th card
5. Add a link from `about.html` in the relevant experience entry
6. Update "next project" links to form a new chain

### Tone & voice
Content is written in **confident, modern, non-desperate** voice. Third-person is avoided. Active voice throughout. Technical details are included but not jargon-heavy. Metrics are cited where real — never fabricated.
