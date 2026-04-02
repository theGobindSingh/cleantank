---
applyTo: "**/styles.ts"
description: "Styling rules for Emotion styled components: color system, fonts, breakpoints, shouldForwardProp, hover/transition, CSS counters, local CSS vars"
---

# Styling Rules

## Color System

Colors use a **100–1000 scale where 100 is darkest and 1000 is lightest**.

Palettes:

- `primary` — deep navy blue (`#001B3C` → `#ECF1FF`)
- `secondary` — teal/green (`#00201C` → `#B5FFF0`)
- `accent` — dark teal-grey (`#0E1E1E` → `#E2F4F3`)
- `neutral` — grey (`#191C1D` → `#EFF1F2`)

```ts
color: var(--color-primary-500);
background: var(--color-neutral-900);
border-color: var(--color-secondary-300);
```

For transparency, use the `-base` suffix (raw RGB triplet) with `rgba()` — never hardcode rgba values:

```ts
background: rgba(var(--color-primary-100-base), 0.9);
color: rgba(var(--color-neutral-700-base), 0.25);
border: 1px solid rgba(var(--color-accent-500-base), 0.3);
```

Never use hardcoded hex, `rgb()`, or `hsl()` with literal values. Never introduce new color tokens.

---

## Font Variables

```ts
var(--font-sans)    /* Plus Jakarta Sans — primary UI font */
var(--font-serif)   /* Inter — serif/body fallback */
var(--font-mono)    /* DM Mono — monospaced labels, chips, subtitles */
var(--font-cursive) /* Nothing You Could Do — decorative accents */
```

---

## Font Size Scale

Use `var(--fs-X)` tokens (responsive per breakpoint):

```
4xs  3xs  2xs  1xs  s  m  l  1xl  2xl  3xl  4xl
```

---

## Responsive Breakpoints

Import from `@styles/global`:

```ts
import { mediaQuery, breakpoints } from "@styles/global";
```

Breakpoints:

- `phone`: 0–640px
- `tablet`: 641–1024px
- `desktop`: 1025px+

Usage in styled components:

```ts
padding: 3.75rem 0;

${mediaQuery.tablet} {
  padding: 2.5rem 0;
}

${mediaQuery.phone} {
  padding: 2rem 0;
}
```

Also available: `mediaQuery.nonDesktop` for tablet + phone together.

---

## Local CSS Custom Properties

Prefix component-internal CSS variables with `--_` to signal they are scoped to that component:

```ts
const Wrapper = styled.div`
  --_height: 2.25rem;
  --_gap: 1.5rem;
  --_pos: 5%;

  height: calc(100svh - var(--_height));
  gap: var(--_gap);
  left: var(--_pos);
`;
```

---

## `shouldForwardProp`

All styled-component props that should NOT reach the DOM receive a `$` prefix. Always pass `shouldForwardProp` to prevent them leaking to the DOM:

```ts
import { shouldForwardProp } from "@styles/global";

const Wrapper = styled("div", { shouldForwardProp })<{ $isActive: boolean }>`
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.5)};
`;
```

---

## Hover / Transition Pattern

Apply `transition: all 0.3s ease` on both the parent and `*` so every nested element animates:

```ts
const Card = styled.div`
  transition: all 0.3s ease;
  * {
    transition: all 0.3s ease;
  }

  &:hover {
    ${cardHoverStyles}
  }
`;
```

Define hover changes in a named `css` block (from `@emotion/react`) — never inline:

```ts
import { css } from "@emotion/react";

const cardHoverStyles = css`
  background-color: var(--color-primary-200);
  .card-title {
    color: var(--color-accent-1000);
  }
  .icon {
    color: var(--color-secondary-400);
  }
`;
```

---

## CSS Counters for Numbered Lists

Use CSS counters for auto-numbering — never add index numbers manually in JSX:

```ts
export const ProcessList = styled.ol`
  counter-reset: step-counter;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ProcessItem = styled.li`
  counter-increment: step-counter;

  &::before {
    content: "0" counter(step-counter);
    font-size: 450%;
    font-weight: 800;
    color: rgba(var(--color-neutral-800-base), 0.5);
    font-family: var(--font-sans);
    line-height: 1;
  }
`;
```

---

## Emotion Usage Rules

- `@emotion/styled` for all styled components
- `css` from `@emotion/react` for reusable CSS snippets (hover blocks, `wrapperCss` prop values)
- Never nest styles more than 2 levels deep
- Target child elements using class names (`.icon`, `.title`, `.card-desc`) — not by nesting styled components inside styled components

```ts
// Correct — target children by class name
const Card = styled.div`
  .icon {
    color: var(--color-secondary-500);
    font-size: 1.5rem;
  }
  .title {
    font-weight: 700;
  }
`;

// Wrong — nested styled components
const Card = styled.div`
  ${Icon} {
    color: red;
  }
`;
```

---

## Section Base Pattern

Every full-width section extends `CommonFullWidthWrapper` via `styled()`:

```ts
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";

export const ProcessSectionWrapper = styled(CommonFullWidthWrapper)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3.75rem 0;

  ${mediaQuery.tablet} {
    padding: 2.5rem 0;
  }
`;
```
