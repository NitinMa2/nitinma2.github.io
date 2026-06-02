# Project Tracker

Progress tracker for the nitinma2.github.io revamp. Check off items as they are completed.

---

## Phase 1 — Documentation

- [x] Restructure `CLAUDE.md` to system instructions only
- [x] Create `docs/PRD.md`
- [x] Create `docs/TRACKER.md`
- [x] Create `docs/ARCHITECTURE.md`

---

## Phase 2 — Global Styles

- [x] Update `src/styles/global.css` with violet palette + light mode tokens
- [x] Add Google Fonts (Inter, JetBrains Mono) to `index.html`

---

## Phase 3 — Data

- [x] Update `src/data/projects.ts` — add Tosta Interiors + LiveWire, add all URLs

---

## Phase 4 — Components

- [x] Navbar (fixed top, name, nav links, theme toggle)
- [x] Hero (full-viewport, name, tagline, scroll CTA, slide-up animation)
- [x] Portfolio section + grid layout
- [x] ProjectCard (image, title, description, tags, optional link, scroll animation)
- [x] Contact (email mailto, social icons)

---

## Phase 5 — App Composition

- [x] `src/App.tsx` — compose all sections
- [x] `index.html` — page title, meta description, Open Graph tags

---

## Phase 6 — Deployment

- [ ] GitHub Actions workflow (`.github/workflows/deploy.yml`)

---

## Phase 7 — QA

- [x] `npm run build` passes with no TypeScript errors
- [ ] All sections render correctly in dev
- [ ] Dark/light toggle works and persists across refresh
- [ ] Portfolio card links open correct URLs in new tab
- [ ] Responsive at 375px, 768px, 1280px
- [ ] Lighthouse 95+ (performance, accessibility, best practices, SEO)
