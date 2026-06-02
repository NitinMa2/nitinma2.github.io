# Architecture Decisions

---

## Stack

| Concern | Decision | Rationale |
|---|---|---|
| Framework | React 19 + Vite 8 | Static output for GitHub Pages; fast HMR; large ecosystem |
| Language | TypeScript | Type safety, better DX |
| Styling | CSS Modules + global.css tokens | Zero runtime, co-located with components, Vite native support |
| Animation | CSS keyframes + Intersection Observer | No library needed for subtle effects; keeps bundle tiny |
| Routing | None | Single-page scroll app; anchor hrefs only |
| Package manager | npm | |

---

## Theme System

- `:root` in `global.css` defines dark-mode tokens (default)
- `[data-theme="light"]` on `<html>` overrides to light tokens
- Toggle sets `document.documentElement.dataset.theme` and persists to `localStorage`
- On first visit, reads `window.matchMedia('(prefers-color-scheme: light)')` as fallback

### Color Tokens

| Token | Dark | Light |
|---|---|---|
| `--color-bg` | `#0a0a0f` | `#f5f4ff` |
| `--color-surface` | `#13131a` | `#ffffff` |
| `--color-accent` | `#a78bfa` (violet-400) | `#7c3aed` (violet-600) |
| `--color-text` | `#e2e8f0` | `#1e1b2e` |
| `--color-text-muted` | `#64748b` | `#64748b` |
| `--color-border` | `#1e1e2e` | `#e2e0f0` |

### Typography

- `--font-heading` / `--font-body`: Inter (Google Fonts)
- `--font-mono`: JetBrains Mono (used for accents/tags)

---

## Component Tree

```
App.tsx                        ← theme init, section composition
  Navbar/Navbar.tsx            ← fixed top; name left, nav links right, theme toggle
  Hero/Hero.tsx                ← full-viewport; name, tagline, scroll CTA
  Portfolio/Portfolio.tsx      ← section wrapper + responsive grid
    ProjectCard/ProjectCard.tsx ← image, title, description, tags, optional link
  Contact/Contact.tsx          ← email mailto link, social icons
```

---

## Animations

All via CSS — no library.

| Element | Animation |
|---|---|
| Navbar | Fade-in on load |
| Hero text | Slide-up on mount (`@keyframes`) |
| Project cards | Fade + translate-up on scroll (Intersection Observer hook) |
| Theme toggle | Smooth color swap (`transition` on `:root` properties) |

---

## Deployment

- GitHub Actions workflow builds `dist/` on push to `master`
- Pushes `dist/` to `gh-pages` branch
- `public/CNAME` is copied to `dist/` by Vite automatically
- `vite.config.ts` uses `base: '/'` (correct for `username.github.io`)
