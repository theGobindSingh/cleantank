# Neumorphic cards (CT-470 trial)

A scoped experiment, not a site default. DESIGN.md's no-shadow rule still holds everywhere else. This page records the treatment as built at commit eeefe64, so it can be reused or removed exactly.

## Scope

- Only the separate franchise model cards (`isSeparate`) in "Your Business, Your Plan" on `/franchise-guide`, `/hi/franchise-guide` and `/pa/franchise-guide`.
- Dev and staging only (James's call, 28 Nov 2026). Not for production without James's OK and the franchise release gates.
- `/franchise` keeps its ruled grid, and no other block uses this. There is no shared shadow token or utility, and no CMS toggle.

## Where it lives

- Switch: `const IS_RAISED = true;` in `src/blocks/franchise-models/index.tsx`. It adds `franchise-ground-raised` to the section wrapper and `franchise-card-raised` to each separate card.
- Styles: `src/blocks/franchise-models/franchise-models.css`, imported from `src/styles/components.css`.

## Parameters

The section ground sets three local custom properties, and the cards read them.

| Property                                  | Light mode                        | Resolves to                    |
| ----------------------------------------- | --------------------------------- | ------------------------------ |
| `--raised-ground` (section and card fill) | `var(--color-bg-subtle)`, grey 50 | `hsl(45 16.7% 95.3%)`, #F5F4F1 |
| `--raised-light` (highlight)              | `var(--color-white)`              | `hsl(0 0% 100%)`, #FFFFFF      |
| `--raised-dark` (shadow)                  | `var(--color-grey-300)`           | `hsl(50 5% 77%)`, #C7C6C1      |

Card shadow, two layers, both fully opaque colors:

| Layer                  | x    | y    | Blur | Spread | Color            |
| ---------------------- | ---- | ---- | ---- | ------ | ---------------- |
| Highlight, up and left | -8px | -8px | 16px | 0      | `--raised-light` |
| Shadow, down and right | 8px  | 8px  | 16px | 0      | `--raised-dark`  |

```css
box-shadow:
  -8px -8px 16px var(--raised-light),
  8px 8px 16px var(--raised-dark);
```

Card edge and shape:

- Border: 1 px, `transparent`. It keeps the box the same size as the flat card, with no visible stroke.
- Radius: `rounded-sm`, 6 px, the site's maximum.
- Fill: `--raised-ground`, identical to the section, so the card reads as molded out of the ground rather than floating on it.

Dark mode values exist in the CSS, under `meta[name="color-scheme"][content="dark"]` or `[data-scheme="dark"]`:

| Property          | Dark mode                                  | Resolves to    |
| ----------------- | ------------------------------------------ | -------------- |
| `--raised-ground` | `var(--color-primary-900)`                 | #0F1824        |
| `--raised-light`  | `hsl(var(--color-primary-700-base) / 0.6)` | #20334B at 60% |
| `--raised-dark`   | `var(--color-primary-950)`                 | #0A1019        |

They are untested: the site is locked to light, so dark mode can't be seen yet.

## Forced colors

`@media (forced-colors: active)` drops the shadows, as browsers do, and sets the border to `CanvasText`, so each card keeps a solid 1 px outline. That is the only state with a visible border.

## What stays as CT-467 left it

Layout, column count, gaps (24 px, 32 px from `lg`), padding (24 / 40 px, 24 px again from `2xl`), subgrid rows, order, type, text colors, prices, disclaimer and translations. The cards are static: no hover, button look, accent or gradient.

## Accessibility

- Contrast on #F5F4F1 is at least 5.33:1 for muted text, and 11.67:1 for headings and prices (WCAG 2.2 AA).
- Nothing depends on the shadow for meaning. Reading order, focus and targets are unchanged.

## Known limits

- The white highlight is subtle: white is only about 4% lighter than grey 50, so most of the relief comes from the warm shadow. A darker ground, such as grey 100 (#ECEBE7), would make it stronger.
- The next section, "Who we clean", is also on stone, so the two meet without the usual white-to-stone step. This exception is part of the trial.
- At 320 px the outer few pixels of the shadow pass the screen edge. There is no horizontal scroll.
- Dark mode is not exposed, so its values are unverified.

## Verified on

Staging, 28 Nov 2026, at 320, 768, 1024, 1440 and 1920 px, in en, hi and pa: https://ct.letmecome.in/franchise-guide. The dev server (https://nextjsdev.letmecome.in) was down.

Screenshots: [after, 1440](https://www.letmecome.in/ct470-after-1440.png), [after, 375](https://www.letmecome.in/ct470-after-375.png), [before, CT-467 flat cards, 1440](https://www.letmecome.in/ct470-before-1440.png).

## Rollback

1. In `src/blocks/franchise-models/index.tsx`, set `IS_RAISED` to `false`. The cards return to CT-467's white `bg-surface` fill with a 1 px `border-border` edge, and the section returns to its own background (`isSubtle`). Layout and content don't change.
2. To remove the trial entirely, revert its commits b819fe9, 2ab0061, 0ef855f and eeefe64, then delete this page and its link in DESIGN.md.
