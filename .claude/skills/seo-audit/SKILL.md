---
name: seo-audit
description: >
  Performs a comprehensive SEO audit of a web project by reading source files directly.
  Use this skill whenever the user asks to audit, review, analyze, or improve SEO for a
  website or web project — including requests like "check my SEO", "what's wrong with my
  meta tags", "how do I rank better", "review my OG tags", or "improve my Lighthouse SEO
  score". Works with any framework: plain HTML, React, Vue, Next.js, Vite, etc.
---

# SEO Audit Skill

You are performing a technical SEO audit. Your job is to read the project's source files,
identify issues across every SEO category, and produce a prioritized developer-facing report
with clear, actionable findings.

---

## Step 1 — Discover the project

Start by understanding what kind of project this is:

1. Look for `package.json` → detect framework (React, Next.js, Vue, Nuxt, Astro, etc.)
2. Find the HTML entry point — `index.html`, `src/index.html`, `public/index.html`, or
   framework-specific equivalents (`_document.tsx` for Next.js, `app.html` for SvelteKit)
3. Locate component files that render `<head>` content
4. Check for `robots.txt`, `sitemap.xml`, and `public/` or `static/` directories
5. Scan for image assets and how they're referenced in components

---

## Step 2 — Read and audit

Read the relevant files and evaluate against all the categories below. Be thorough — check
actual file contents, not just what you expect to find.

### Category 1: Meta tags & document head
- `<title>` — present, unique, 50–60 characters, contains primary keyword
- `<meta name="description">` — present, 120–160 characters, compelling
- `<meta name="author">` — present
- `<meta name="robots">` — check for accidental `noindex` or `nofollow`
- Viewport meta tag — present and correct
- `<html lang="...">` — present and correct locale

### Category 2: Open Graph & Social
- `og:title`, `og:description`, `og:type`, `og:url`, `og:image` — all present
- `og:image` — absolute URL, ideally 1200×630px, `og:image:width`/`og:image:height` set, `og:image:alt` set
- Twitter Card — `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- `<link rel="canonical">` — present, matches the intended public URL (no trailing slash ambiguity)

### Category 3: Structured data (JSON-LD)
- Check for `<script type="application/ld+json">` in the document head
- For a portfolio/personal site: `Person` or `ProfilePage` schema is appropriate
- For a business site: `LocalBusiness`, `Organization`, or `WebSite` schema
- Flag if structured data is missing entirely — rich results in Google depend on it

### Category 4: Technical SEO
- `robots.txt` — exists, not blocking important paths, points to sitemap
- `sitemap.xml` — exists, contains correct URLs, referenced in robots.txt
- URL structure — clean, lowercase, hyphenated, no query strings for main pages
- `<link rel="icon">` and `apple-touch-icon` — present, correct format
- HTTPS — check if hardcoded URLs in meta tags use `https://`
- Canonical domain consistency — `www` vs non-`www` should be consistent

### Category 5: Performance signals that affect SEO
- Images — `width` and `height` attributes present (prevents CLS)
- Images — `loading="lazy"` on below-fold images, `loading="eager"` or absent on above-fold
- Images — next-gen formats (WebP/AVIF) preferred over PNG/JPG where possible
- Render-blocking resources — Google Fonts should use `display=swap` and `preconnect`
- External scripts — check for synchronous `<script>` without `defer` or `async`
- Bundle size — flag if JS bundle seems very large (>500KB uncompressed) for a simple site

### Category 6: Accessibility signals (affect SEO)
- All `<img>` tags have meaningful `alt` text (not empty, not just filename)
- Heading hierarchy — one `<h1>` per page, logical `h2`→`h3` nesting
- Link text — avoid generic "click here" or "read more" (bad for crawlers)
- Colour contrast — note if muted text colours may fail WCAG AA (crawlers value readable content)
- `aria-label` on icon-only links — if absent, anchor has no text for crawlers

---

## Step 3 — Produce the report

Write the full audit report in this format:

```
# SEO Audit Report — [Project/Site Name]
**URL:** [live URL if found]
**Framework:** [detected framework]
**Audited:** [list of key files reviewed]

---

## Summary
🔴 X Critical  ·  🟡 Y Warnings  ·  🔵 Z Suggestions

---

## 🔴 Critical
Issues that directly harm search ranking or prevent indexing. Fix these first.

### [Issue title]
**Impact:** [Why this hurts SEO]
**Finding:** [What was found — quote the actual code if relevant]
**Fix:**
[If trivial: one-line explanation]
[If non-trivial: include a code sample]

---

## 🟡 Warnings
Issues that reduce SEO effectiveness but don't block indexing.

[Same structure]

---

## 🔵 Suggestions
Best-practice improvements and quick wins.

[Same structure]

---

## ✅ What's already good
Call out things done well — this helps the developer know what not to change.
```

---

## Severity guide

Use this to assign severity consistently:

| Severity | When to use |
|---|---|
| 🔴 Critical | Missing title/description, accidental `noindex`, no canonical, broken OG image URL, no `lang` attribute, `robots.txt` blocking all crawlers |
| 🟡 Warning | OG tags incomplete, no structured data, missing `robots.txt` or `sitemap.xml`, images missing `alt` or dimensions, render-blocking fonts, inconsistent canonical domain |
| 🔵 Suggestion | Author meta, `og:image:alt`, next-gen image formats, JSON-LD enhancements, `apple-touch-icon`, minor description length tweaks |

---

## Code sample guidance

- Provide code samples when the fix is not obvious from the description alone
- Show the corrected HTML/JSX/config — not just the concept
- Keep samples minimal and focused on the specific fix
- For React/JSX projects, show JSX syntax; for plain HTML, show HTML
