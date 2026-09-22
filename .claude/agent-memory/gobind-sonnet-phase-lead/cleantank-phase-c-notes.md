---
name: cleantank-phase-c-notes
description: Pitfalls hit while running the About/Process/Clients phase of the CleanTank content overhaul as a parallel-worker phase lead
metadata:
  type: feedback
---

Feedback from running three parallel `worker` subagents (about, process, clients pages) on /home/rimuru/programming/cleantank:

1. `Button` (`@components/button`) has no `$margin` prop (only `$variant/$color/$size/$padding/$borderRadius/$colorWeight/$fontWeight/$textColor/$textColorWeight/$withBorder`). A worker tried `$margin` on it, tsc caught it. **Why it matters:** if a CTA button needs spacing, wrap it in a small styled div instead of guessing at a Button prop — don't assume every styled-ish component supports the same prop surface as `H1`/`P`/`Span`.

2. When a worker needs to run `pnpm run lint:fix` to clear a warning it introduced, that command is repo-wide and will reformat/autofix every file in the repo — including files owned by sibling phases mid-edit in parallel. In one run this reordered imports and converted 3 arrow-function bodies in a sibling-owned file (formatting only, verified via tsc/lint before+after, no logic change), but it's still a hard-rule violation risk ("touch only your owned files"). **How to apply:** when briefing workers who need `lint:fix`, tell them to scope it to their own files only (e.g. `pnpm exec eslint --fix <their files>` or check if the project's lint script supports a path argument) rather than running the bare repo-wide script. Always re-diff sibling-owned files after a worker reports running a repo-wide fixer, to confirm no functional damage — in this case it was a false alarm (formatting only) but it needed manual verification to be sure.

3. This repo's pattern for a page owned by one phase but consuming a shared component from another module (e.g. `process/index.tsx` importing `TechnologySection`/`technologyPoints` from `@modules/about/technology`/`@modules/about/constants`) worked fine as a deliberate content-sharing seam — briefed both workers explicitly about the shared export names/shapes so neither broke the other's imports. Confirmed this style of cross-module reuse (owned by one phase, read-only-imported by an adjacent phase) is a workable pattern here, not an anti-pattern to avoid.

Related: [[cleantank-deploy-facts]] (Vercel/portfolio facts from a different session's memory).
