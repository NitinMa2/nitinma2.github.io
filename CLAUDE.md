# CLAUDE.md — nitinma2.github.io

System instructions and behavioral guidelines for Claude Code. Keep this file lean — project requirements live in [`docs/PRD.md`](docs/PRD.md), progress tracking in [`docs/TRACKER.md`](docs/TRACKER.md), and architecture decisions in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

---

## Working Style

- **Before building any feature or making design decisions, ask clarifying questions until at least 95% confident in the requirements. Do NOT make assumptions.**
- Update [`docs/TRACKER.md`](docs/TRACKER.md) by checking off items as soon as they are completed.

---

## File/Folder Conventions

```
src/
  components/       # Reusable React components
    Navbar/
      Navbar.tsx
      Navbar.module.css
    Hero/
      Hero.tsx
      Hero.module.css
    ...
  pages/            # Top-level page compositions (if needed)
  styles/
    global.css      # CSS custom properties, resets
  data/
    projects.ts     # Portfolio project data
  App.tsx
  main.tsx
public/
  img/              # Static assets (images, favicon)
  CNAME             # Must stay here for GitHub Pages custom domain
docs/
  PRD.md
  TRACKER.md
  ARCHITECTURE.md
```

Each component lives in its own folder with a co-located CSS Module: `ComponentName/ComponentName.tsx` + `ComponentName.module.css`.

---

## Coding Conventions

- **Components:** PascalCase folder + filename (`Hero/Hero.tsx`)
- **CSS variables:** Define in `global.css`, use everywhere (`--color-accent`, `--font-heading`)
- **No inline styles** — all styling via CSS Modules or global CSS vars
- **Images:** Reference from `public/img/`; use `loading="lazy"` on `<img>` tags
- **Commits:** Conventional Commits format — `feat:`, `fix:`, `chore:`, `refactor:`
- **No comments** unless the WHY is non-obvious

---

## GitHub Pages Deployment

- `vite.config.ts` uses `base: '/'` (correct for username.github.io)
- Deploy via GitHub Actions (`.github/workflows/deploy.yml`) — builds `dist/` and pushes to `gh-pages`
- `public/CNAME` is copied to `dist/` automatically by Vite
- **Do NOT manually push build output** — let CI handle it

---

## Common Tasks

```bash
# Start dev server
npm run dev

# Build & preview
npm run build && npm run preview

# Format
npx prettier --write .
```

---

## Auto-Formatting

Prettier runs automatically after every file edit via Claude Code hook.
Config: `.prettierrc`
