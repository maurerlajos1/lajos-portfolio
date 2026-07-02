# Agent Guide

This file is for future coding agents working on the Lajos Maurer portfolio.

## Project Purpose

This is a personal portfolio for performance growth, CRO, paid acquisition, measurement, and conversion-focused case studies. The current positioning intentionally uses a sharp, differentiated voice around systems, tracking, CRO, and the Vault/playbook angle.

Do not flatten the voice into generic recruiter copy unless the user explicitly asks. The Vault is part of the differentiation and should not be removed casually.

## Current Architecture

- React/Vite single-page app.
- Routing lives in `src/App.jsx`.
- Page-level SEO is handled with `src/components/SEO.jsx`.
- Translations live in `src/i18n.jsx`; keep English and Hungarian keys in sync.
- Main pages live in `src/pages/`.
- Case-study cards are data-driven from `src/data/caseStudiesData.js`.
- Blog metadata is in `src/data/blogPosts.js`; markdown bodies are in `src/content/blog/`.
- The Vault loads from `src/data/vaultData.json`.

## Commands

Run these before finishing code changes:

```bash
npm run lint
npm run build
```

For UI checks:

```bash
npm run dev -- --host 127.0.0.1
```

Then test at:

```text
http://localhost:5173/
```

## Recent Decisions

- Homepage primary CTA should point to case studies (`/work`).
- Homepage secondary CTA downloads the language-aware CV PDF.
- Blog posts include a compact conversion block after article content:
  - `View Case Studies` -> `/work`
  - `Download CV` -> language-aware CV PDF
- The Vault remains an authority/differentiation asset, but it is no longer the hero primary CTA.
- Each route should have exactly one meta description through the `SEO` component.
- Vercel rewrites all routes to `index.html` via `vercel.json`.

## QA Notes

Smoke-test these routes on desktop and mobile:

- `/`
- `/work`
- `/methodology`
- `/vault`
- `/blog`
- `/blog/cro-psychology`
- `/about`
- `/resume`

Check:

- No console errors or warnings.
- No horizontal overflow.
- Hero CTA links to `/work`.
- EN CV download uses `/Lajos_Maurer_CV.pdf`.
- HU CV download uses `/Lajos_Maurer_CV_HU.pdf`.
- Blog post bottom CTA is visible and usable.
- Mobile hamburger menu opens, fits, and includes all nav targets.
- Each page has title, canonical, and one meta description.

## Git And Generated Files

- Do not commit `dist/`, `node_modules/`, or `output/`.
- `output/` is ignored because local browser QA can create screenshots there.
- There may be modified generated PDFs in `public/`; do not revert them unless the user explicitly asks.
- This repo uses `master` and remote `origin` at `https://github.com/maurerlajos1/lajos-portfolio.git`.

## Editing Guidelines

- Keep changes narrow and preserve the current design language.
- Prefer existing components, Tailwind classes, and translation patterns.
- Do not hard-code English-only UI text unless it is intentionally untranslated.
- When adding visible copy, add both EN and HU translations.
- When changing page metadata, use `SEO` rather than manual `document.title`.
- Avoid broad copy rewrites unless the user explicitly requests a copywriting/CRO pass.
