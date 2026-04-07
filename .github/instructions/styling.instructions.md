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

**Custom breakpoints** beyond the three presets use the `breakpoints` object with named `.max` values:

```ts
// Between custom width and tablet max
@media (max-width: 1300px) and (min-width: ${breakpoints.tablet.max}px) {
  /* mid-range adjustments */
}

// Extra small phones
@media (max-width: 400px) {
  grid-template-columns: 1fr;
}
```

Available values: `breakpoints.phone.max`, `breakpoints.tablet.max`, `breakpoints.desktop.min`, etc. (check `@styles/global` for the full list).

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

### Hover on Phone — Use `.active` Class Instead

On phone, CSS `:hover` is unreliable. For card interactions on phone, apply hover styles via an `active` class toggled by an `IntersectionObserver` in the component:

```ts
// styles.ts — apply the same hover block to both :hover and .active
const Card = styled.li`
  ${mediaQuery.desktop} {
    &:hover {
      ${cardHoverStyles}
    }
  }
  ${mediaQuery.tablet} {
    &:hover {
      ${cardHoverStyles}
    }
  }
  &.active {
    ${cardHoverStyles}
  }
`;
```

The component handles toggling via IntersectionObserver (see component-patterns for the `Item` extraction pattern).

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

---

## Section Separator Comments

In `styles.ts`, use Unicode box-drawing separators between distinct section groups. This keeps large files readable:

```ts
// ─── Industries We Serve ────────────────────────────────────────────────────────────────
export const IndustriesGrid = styled.div` ... `;
export const IndustryCard = styled.article` ... `;

// ─── Franchise Section ──────────────────────────────────────────────────────────────
export const FranchiseSectionWrapper = styled(CommonFullWidthWrapper)` ... `;
```

---

## Mobile Horizontal Scroll (Carousel) Pattern

When a grid becomes too cramped on phone, convert it to a horizontal scroll carousel:

```ts
export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  ${mediaQuery.phone} {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    width: 100%;
    justify-content: flex-start;
    scroll-snap-type: x mandatory;
  }
`;

export const ItemCard = styled.article`
  /* desktop styles... */

  ${mediaQuery.phone} {
    flex-shrink: 0;
    width: 75vw;
    scroll-snap-align: center;
  }
`;
```

- `75vw` width shows a peek of the next card to signal scrollability
- `scroll-snap-align: center` gives smooth snapping
- Apply to the wrapper: `scroll-snap-type: x mandatory`

---

## Semantic HTML in Styled Components

Choose the semantically correct base element when creating styled components:

| Use case        | Base element | Example                                    |
| --------------- | ------------ | ------------------------------------------ |
| Content card    | `article`    | `styled.article` for IndustryCard          |
| Testimonial     | `blockquote` | `styled.blockquote` for TestimonialCard    |
| Attribution row | `footer`     | `styled.footer` for TestimonialAttribution |
| List item card  | `li`         | `styled.li` for ProcessItem                |
| List container  | `ol` / `ul`  | `styled.ol` for numbered process list      |

Never use `div` when a semantic alternative is appropriate.

---

## Next.js `Image` in Styled Components

For background or fill images inside a positioned container:

```ts
import Image from "next/image";
import styled from "@emotion/styled";

export const CardImage = styled(Image)`
  position: absolute !important;
  inset: 0;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  transition: transform 0.5s ease;
`;
```

The parent container must be `position: relative; overflow: hidden`.

---

## Gradient Overlay with `::after`

For image cards with text on top, use a `::after` pseudo-element as the gradient overlay and `z-index` layering:

```ts
export const Card = styled.article`
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(
      to top,
      rgba(var(--color-primary-100-base), 0.97) 0%,
      rgba(var(--color-primary-100-base), 0.6) 40%,
      transparent 100%
    );
  }

  .card-content {
    position: relative;
    z-index: 2; /* above the overlay */
  }
`;
```

- Always use `-base` CSS variables with `rgba()` inside `linear-gradient()` — never hardcode values
- Content must be `z-index: 2`, overlay at `z-index: 1`, image at `z-index: 0` (default)
