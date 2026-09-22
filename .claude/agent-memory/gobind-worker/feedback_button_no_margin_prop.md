---
name: feedback-button-no-margin-prop
description: Button component (@components/button) has no $margin prop — wrap it in a styled div for spacing
metadata:
  type: feedback
---

`ButtonBaseProps` (src/components/button/types.ts) only exposes `$variant`, `$color`, `$size`, `$padding`, `$borderRadius`, `$colorWeight`, `$fontWeight`, `$textColor`, `$textColorWeight`, `$withBorder` — there is no `$margin`. `tsc --noEmit` confirmed a pre-existing bug of this exact kind in `src/modules/home/service-cards.tsx:50` (`$margin` passed to `Button`, TS2322).

**Why:** Easy mistake since other typography components (`H1/H2/H3/P/Span`) do accept `$margin` via `CommonTextProps`, so it's natural to assume `Button` does too.

**How to apply:** When a `Button` needs spacing, wrap it in a small styled `div` (e.g. `const CtaWrapper = styled.div\`margin: 2.5rem 0 0;\`;`) in the module's `styles.ts` rather than passing `$margin` to `Button` directly.
