# Product Requirements Document

Personal portfolio site for Nitin Mathew — an experienced software engineer showcasing work to attract clients and potential employers.

**Live URL:** https://nitinma2.github.io

---

## Site Structure

Single-page app with smooth scroll. No routing library. Sections in order:

1. **Hero** — name, tagline, scroll CTA
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
- See [`ARCHITECTURE.md`](ARCHITECTURE.md) for exact color tokens

---

## Hero Section

- **Headline:** Nitin Mathew
- **Tagline:** Not your average techie
- Scroll-down CTA arrow

---

## Portfolio Section

7 projects. Cards display image, title, description, tags. Cards with a URL open the live site in a new tab. Cards without a URL are display-only.

| Project | URL |
|---|---|
| CakeMyDay | https://nitinma2.github.io/CakeMyDay/ |
| Sleepish | https://nitinma2.github.io/Sleepish/ |
| Huddle Landing Page | https://nitinma2.github.io/HuddleLandingPage/ |
| Undertake | _(no link)_ |
| Dexter | https://nitinma2.github.io/Dexter/ |
| Tosta Interiors | https://nitinma2.github.io/TostaInteriors/ |
| LiveWire | https://nitinma2.github.io/LiveWire/ |

---

## Contact Section

- Email: **nitinmathew.official@gmail.com** — displayed as text and wrapped in a `mailto:` link
- Social icons: Twitter, LinkedIn, GitHub

| Platform | URL |
|---|---|
| Twitter | https://www.twitter.com/nitin_ma2 |
| LinkedIn | https://www.linkedin.com/in/nitin-mathew-328a55168/ |
| GitHub | https://www.github.com/nitinma2 |

---

## Non-Functional Requirements

| Concern | Target |
|---|---|
| Performance | Lighthouse 95+ across all categories |
| Accessibility | WCAG AA |
| SEO | Meta tags, Open Graph tags |
| Responsiveness | Mobile-first, tested at 375px, 768px, 1280px |
