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

### Section Meta Pattern

For sections where heading/description data is separate from the list data, use `Pick` or `Omit` to type the meta object:

```ts
import { IndustriesSectionProps } from "@modules/home/types";

// Meta object — heading fields only
export const industriesSectionMeta: Pick<
  IndustriesSectionProps,
  "chip" | "title" | "description"
> = {
  chip: "INDUSTRIES WE SERVE",
  title: "Industries We Serve",
  description: "Purpose-built protocols for every sector.",
};

// Items array — full typed array
export const industryItems: NonNullable<IndustriesSectionProps["items"]> = [ ... ];
```

In `index.tsx`, spread the meta and pass items separately:

```ts
<IndustriesSection {...industriesSectionMeta} items={industryItems} />
```

- Use `Omit<Props, "items">` when the section has only one optional list prop
- Store chip labels as SCREAMING_CASE strings in constants — `StandardSectionLayout` uppercases internally

---

## Module Guidelines

- Modules are composed of components — never contain raw HTML elements
- Sub-section components (e.g., `process.tsx`) receive data as props, never define static data themselves
- No duplicated layouts across modules
- Sections accept props; do not hardcode content inside components

### Using `StandardSectionLayout`

Every non-hero section in a module uses `StandardSectionLayout` as its outer wrapper:

```ts
import StandardSectionLayout from "@layouts/standard-section";

const IndustriesSection = ({ chip, title, description, items = [] }: IndustriesSectionProps) => (
  <StandardSectionLayout chip={chip} title={title ?? ""} description={description} element="section">
    {items.length > 0 && <IndustriesGrid>{items.map(industryCardMapper)}</IndustriesGrid>}
  </StandardSectionLayout>
);
```

- Pass `css={extraCss}` to override padding or layout for a specific section
- Guard list rendering with `items.length > 0` before mapping
- Use `title ?? ""` when `title` is optional in the prop type

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

- The module's `index.tsx` is responsible for wrapping with `GlobalLayout` (not the page file)
- Layouts handle spacing, flow, and page-level HTML semantics
- No UI duplication across layouts
- Pages import the module's root component only — no direct layout, component, or business logic imports in `pages/`

### Form Handling

Use `@webadeva/use-easy-google-form` for Google Form submissions and `react-toastify` for feedback:

```ts
import {
  useEasyGoogleForm,
  UseEasyGoogleFormParams,
} from "@webadeva/use-easy-google-form";
import { toast } from "react-toastify";
import { useMemo, useRef } from "react";

const formRef = useRef<HTMLFormElement>(null);
const easyParams = useMemo<UseEasyGoogleFormParams>(
  () => ({
    formRef,
    gFormId: "YOUR_FORM_ID",
    links: [{ type: "text", entryId: "entry.XXXXXXX", formId: "f-name" }],
    onSubmitExtra: () => {
      formRef.current?.reset();
      toast.success("Your inquiry has been sent successfully!");
    },
  }),
  [],
);
const submitHandler = useEasyGoogleForm(easyParams);
```

- Always wrap `easyParams` in `useMemo` to prevent re-creation on every render
- Use `formRef.current?.reset()` inside `onSubmitExtra` to clear the form after submission

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
