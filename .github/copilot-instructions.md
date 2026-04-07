# Copilot Instructions for Clean Tank Services Web App

## Project Overview

**Clean Tank Services** — a high-conversion, industrial-grade website for a company providing large-scale water tank cleaning solutions across India.

Position the brand as a **premium, process-driven, government-level service provider** for hospitals, schools, commercial buildings, residential societies, and government organizations. Avoid anything that feels local, informal, or small-scale.

Key business goals:

- Lead generation for large-scale cleaning projects
- Trust through process transparency and certifications
- Franchise page conversions (guaranteed earnings from month 1, reliable support)

The cleaning process: water removal → jet cleaning → vacuum → UV sterilization → chemical sterilization. Machine-based, not manual labor.

---

## Tech Stack

- Next.js (Pages Router), TypeScript
- `next/image` — all images use the `Image` component; never use raw `<img>`
- `@emotion/styled` + `@emotion/react`
- `@mui/icons-material` (icons as `SvgIconComponent` React components)
- `@kami-ui/react-components` (`FullWidthWrapper` via `CommonFullWidthWrapper`)
- `@kami-ui/types` (`ColorsObject`, `ThemeObject`), `@kami-ui/theme-shop` (`defaultLightTheme`)
- CSS Variables from kami-ui (`theme.ts`)
- Google Fonts via `next/font/google`: Plus Jakarta Sans (`--font-sans`), Inter (`--font-serif`), DM Mono (`--font-mono`), Nothing You Could Do (`--font-cursive`)
- `react-toastify` — toast notifications (e.g., form submission success)
- `@webadeva/use-easy-google-form` — Google Form submission hook used in contact/franchise forms

---

## Architecture (STRICT)

```
components → layouts → modules → pages
```

- `components/` — small reusable UI units
- `layouts/` — page-level and section-level compositions (e.g., `GlobalLayout`, `StandardSectionLayout`)
- `modules/` — feature sections composed of components; each module has sub-section files
- `pages/` — Next.js pages; use the module's root component only, no direct component imports, no business logic

`StandardSectionLayout` (from `@layouts/standard-section`) is the standard wrapper for every non-hero section. It renders a `Chip`, `H2` title, and optional `P` description inside a `CommonFullWidthWrapper`, then renders `children` below. Unless a section has unique layout needs, it should use `StandardSectionLayout` for consistency.

---

## Folder Structure

```
components/button/
├── index.tsx    → logic
├── styles.ts    → Emotion styled only
├── types.ts     → TypeScript types

modules/home/
├── index.tsx    → composition only
├── hero-strip.tsx
├── process.tsx
├── styles.ts    → all module styled components
├── types.ts
├── constants.ts → all static data
```

- `index.tsx` — pure composition, no static data, no logic
- `constants.ts` — all arrays/config, typed against `types.ts`
- Always use **const arrow functions**, never `function` declarations

---

## Pages (6 Total)

Home, Services, About, Clients, Franchise, Contact.

Each page requires: unique `<title>`, meta description, Open Graph tags, `h1→h2→h3` hierarchy, semantic HTML.

---

## Design Philosophy

- Clean, minimal, industrial, professional
- Dark-on-light sections alternate with dark-background strips
- Focus on conversion, not decoration

---

## Anti-Patterns (STRICTLY AVOID)

- Inline styles or hardcoded hex/rgb values
- Mixing layers (components directly in pages)
- Raw `<h1>/<p>/<span>` — use `H1`/`P`/`Span` from `@components/html`
- Raw `<a>/<button>` — use `Button` component
- Icons from anywhere other than `@mui/icons-material`
- Static data in `index.tsx` — always in `constants.ts`
- Mapper functions inline in render — define outside or use `useCallback`
- Duplicate components or logic

---

## Detailed Guidelines

Detailed rules are in `.github/instructions/`:

- **Styling** — color system, fonts, breakpoints, `shouldForwardProp`, hover patterns, CSS counters → `styling.instructions.md` (auto-loaded on `styles.ts` files)
- **Component patterns** — `CommonFullWidthWrapper`, typography, icons, `Button`, `Chip`, `forwardRef`, list mappers, TypeScript patterns → `component-patterns.instructions.md`
- **Module & layout conventions** — module sub-file rules, `constants.ts` pattern, layout guidelines → `module-conventions.instructions.md` (auto-loaded in `modules/`)

---

## Goal

Scalable, maintainable, high-conversion industrial website reflecting trust, professionalism, and technical excellence.
