---
applyTo: "modules/**/*.{ts,tsx}"
description: "Module and layout conventions: folder structure, sub-file rules, index composition, constants, layout guidelines, conversion focus"
---

# Module & Layout Conventions

## Module Folder Structure

Every module lives in `modules/<name>/` and contains:

```
modules/home/
├── index.tsx       → composition only — no logic, no static data
├── hero-strip.tsx  → named section component
├── process.tsx     → named section component
├── styles.ts       → ALL Emotion styled components for this module
├── types.ts        → ALL TypeScript types for this module
├── constants.ts    → ALL static data, typed against types.ts
```

Large modules split their UI into named sub-files (e.g., `hero-strip.tsx`, `process.tsx`). All sub-files share a single `styles.ts`.

---

## Per-File Rules

### `index.tsx` — pure composition

- Imports sub-section components
- Imports all data from `constants.ts`
- Passes data as props to sub-components
- Contains zero static data, zero business logic, zero styling

```ts
// Good index.tsx
import HeroStrip from "./hero-strip";
import ProcessSection from "./process";
import { heroStripProps, processItems } from "./constants";

const Home = () => (
  <>
    <HeroStrip {...heroStripProps} />
    <ProcessSection items={processItems} />
  </>
);

export default Home;
```

### `styles.ts` — styled components only

- Only `@emotion/styled` component definitions and `css` helper blocks
- No logic, no data, no type definitions
- All styled components used anywhere in this module live here

### `types.ts` — types only

- All `interface` and `type` declarations for this module
- Import `SvgIconComponent` from `@mui/icons-material` for icon props
- No logic, no data, no styled components

### `constants.ts` — static data only

- All arrays, config objects, and static content for this module
- Typed against `types.ts` using `NonNullable<Props["prop"]>`
- Import icons from `@mui/icons-material` directly

```ts
import { HomeProcessSectionProps } from "@modules/home/types";
import {
  WaterDropOutlined,
  CleaningServicesOutlined,
} from "@mui/icons-material";

export const processItems: NonNullable<HomeProcessSectionProps["items"]> = [
  { icon: WaterDropOutlined, title: "Water Removal", description: "..." },
  { icon: CleaningServicesOutlined, title: "Jet Cleaning", description: "..." },
];
```

---

## Module Guidelines

- Modules are composed of components — never contain raw HTML elements
- Sub-section components (e.g., `process.tsx`) receive data as props, never define static data themselves
- No duplicated layouts across modules
- Sections accept props; do not hardcode content inside components

---

## Layout Guidelines

`layouts/global/index.tsx` wraps every page:

```ts
const GlobalLayout = ({ children }: Props) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
```

- Layouts combine modules/sections into full page structures
- Handle spacing, flow, and page-level HTML semantics
- No UI duplication across layouts
- Pages import layouts only — no direct module or component imports in `pages/`

---

## Conversion Focus

Every module should support lead generation. Ensure:

- Visible CTA buttons linked to `/contact` or `/franchise` using the `Button` component with `href`
- Franchise page sections strongly emphasize guaranteed earnings and low-friction onboarding
- Contact touchpoints (phone, form) appear in multiple sections
- No dead-end pages — every section has a next step

```ts
// CTA in a section
<Button href="/contact" $variant="filled" $size="lg" $color="primary" $colorWeight="400">
  Get a Free Quote
</Button>
```
