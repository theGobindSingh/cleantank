---
name: cleantank-button-no-margin-prop
description: In the cleantank repo, @components/button's ButtonBaseProps has no $margin field, unlike H1/H2/H3/P/Span which do.
metadata:
  type: project
---

`src/components/button/types.ts` `ButtonBaseProps` does not declare `$margin` (only
`$padding`, `$borderRadius`, `$fontWeight`, colors, `$size`, `$variant`, `$withBorder`).
Passing `$margin` to `<Button>` is a TypeScript error, even though at least one existing
file (`src/modules/process/index.tsx`, `Button ... $margin="2.5rem 0 0"`) does this —
that appears to be a pre-existing latent type error in the codebase, not a pattern to copy.

**Why:** Found while building `src/modules/services/*` — copying the process module's
Button-with-$margin pattern would have introduced a new tsc error in owned files.

**How to apply:** When a Button needs spacing, wrap it (or an adjacent element) and use
margin on a `P`/`Span`/wrapper div instead, or rely on parent gap/flex spacing. Never add
`$margin` to a `Button` call in new code.
