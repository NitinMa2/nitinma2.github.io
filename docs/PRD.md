# Product Requirements Document

Personal portfolio site for Nitin Mathew — an experienced software engineer showcasing work to attract clients and potential employers.

**Live URL:** https://www.nitinmathew.com

---

## Site Structure

Single-page app with smooth scroll. No routing library. Sections in order:

1. **Hero** — name, tagline, stats, social icons, scroll CTA
2. **Portfolio** — project grid
3. **Contact** — email + social links

No About section. No blog. No contact form.

---

## Design Language

- Minimalist, bold, clean, responsive
- Subtle animations (CSS only — no animation library)
- Dark mode by default; light/dark toggle available
- OS preference respected on first visit (`prefers-color-scheme`)
- Color palette: near-black base with violet/purple pastel accent
- Animated diamond sparkle stars in background (dark mode only)
- Shooting star with curved CSS motion-path trajectory (dark mode only)
- See [`ARCHITECTURE.md`](ARCHITECTURE.md) for exact color tokens

---

## Hero Section

- **Greeting:** Hello world, I'm
- **Name:** Nitin Mathew
- **Tagline:** Just a tall adrenaline junkie who likes to code when I'm not working on my posture.
- **Stats:** Years Coding (dynamic, from 2014), Countries Travelled (16), Unhappy Clients (0)
- **Social icons:** Email (scrolls to contact), GitHub, LinkedIn
- Scroll-down CTA arrow

---

## Portfolio Section

6 projects. Cards display image, title, description, tags. All cards link to the live site in a new tab.

| Project | URL | Tags |
|---|---|---|
| Cake My Day | https://nitinma2.github.io/CakeMyDay/ | web, bakery |
| Sleepish | https://nitinma2.github.io/Sleepish/ | web, start-up |
| Huddle Landing Page | https://nitinma2.github.io/HuddleLandingPage/ | web, start-up |
| Dexter | https://nitinma2.github.io/Dexter/ | web, personal |
| Tosta Interiors | https://nitinma2.github.io/TostaInteriors/ | web, interior design |
| LiveWire | https://nitinma2.github.io/LiveWire/ | web, start-up |

---

## Contact Section

- Email: **nitinmathew.official@gmail.com** — displayed as obfuscated plain text (no mailto link)
- Social links: GitHub, LinkedIn (text links)

| Platform | URL |
|---|---|
| LinkedIn | https://www.linkedin.com/in/nitinma2/ |
| GitHub | https://www.github.com/nitinma2 |

---

## Non-Functional Requirements

| Concern | Target |
|---|---|
| Performance | Lighthouse 95+ across all categories |
| Accessibility | WCAG AA |
| SEO | Meta tags, Open Graph tags, Twitter Card, canonical link, OG image |
| Responsiveness | Mobile-first, tested at 375px, 768px, 1280px |
