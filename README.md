# Lajos Maurer Portfolio

Personal portfolio site for Lajos Maurer, focused on performance growth, CRO, paid acquisition, analytics, and conversion-focused case studies.

## Live Site

- Production domain: https://maurerlajos.com
- Deployment target: Vercel

## Stack

- React 19
- Vite
- Tailwind CSS 4
- React Router
- Framer Motion
- React Helmet Async
- React Markdown with Mermaid support
- Recharts

## Local Development

```bash
npm install
npm run dev
```

The local dev server usually runs at:

```text
http://localhost:5173/
```

## Quality Checks

```bash
npm run lint
npm run build
```

Both should pass before pushing changes.

## Project Notes

- Main app entry: `src/App.jsx`
- Page components: `src/pages/`
- Shared components: `src/components/`
- Translation strings: `src/i18n.jsx`
- Case-study content: `src/data/caseStudiesData.js`
- Blog metadata/content imports: `src/data/blogPosts.js`
- Vault database: `src/data/vaultData.json`
- Public PDFs and images: `public/`

The site is bilingual (`en` and `hu`) through the local language context in `src/i18n.jsx`.

## Future Agent Guide

For implementation conventions, recent decisions, QA notes, and gotchas, read:

```text
AGENTS.md
```
