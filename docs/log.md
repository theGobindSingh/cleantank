# Change log (newest first)

## 2026-09-21T22:20:31+00:00 — Shared feature-card section refactor (3 phases, complete)
Consolidated two near-identical icon+title+description card grids (homepage "Our Services",
franchise benefits) into one component, `src/layouts/feature-card-section/`
(`FeatureCardGrid`/`FeatureCard`/`FeatureCardCta` + default export `FeatureCardSection`).
- P1: extracted the franchise grid/card out of `src/modules/franchise/styles.ts` into the new
  layout; `.benefit-*` class hooks renamed `.feature-*`; `src/modules/franchise/benefits.tsx`
  deleted; `/franchise` renders `FeatureCardSection` directly with `bg="var(--color-neutral-1000)"`.
- P2: homepage migrated onto the same component; `src/modules/home/service-cards.tsx` and the
  `ServiceCardsGrid`/`ServiceCard`/`ServiceCardsCta` styles deleted; home now renders
  `FeatureCardSection` with the same `bg` plus a `cta` prop for "View All Services".
- P3 (this pass): re-verified the finished state rather than re-running the browser check (already
  done by the main session against a production build on a scratch port, port 3000 untouched).
  Confirmed via grep/ls: no `ServiceCardsGrid`/`ServiceCardsCta`/`ServiceCard`/
  `FranchiseBenefitsGrid`/`FranchiseBenefitCard`/`benefit-` left in `src/`; both deleted files stay
  deleted; both call sites import and render `FeatureCardSection`. Gates: `tsc --noEmit` 0 errors,
  `pnpm run lint` 0 errors / the same 3 known pre-existing warnings (forwardRef in
  `components/button` and `components/common-full-width-wrapper`, dangerouslySetInnerHTML in
  `components/head-meta`), `pnpm run build` all 11 routes.
- Accepted product change: homepage cards no longer carousel horizontally on phone; the shared
  grid stacks to one column there. Owner-directed, not a regression.

## 2026-09-21T12:56:00+00:00 — Browser verification pass (main session)
Ran the real-runtime QA the earlier phase could not (no Playwright in that subagent env).
Production build served on scratch ports 3456-3459; port 3000 never touched; all stopped after.
All 10 routes at 390/768/1280: no horizontal overflow, one `<h1>` each, no console errors,
every internal link 200, `/services#amc` anchors correctly.

Fixed during the pass:
- `src/modules/home/constants.ts` — hero `title.text` was `"Clean Tank, "` while `highlight`
  was `"Healthy Life"`; `indexOf` missed, so `hero-section` dropped the highlight and the
  homepage `<h1>` read "Clean Tank,". Text is now the full string.
- `src/modules/legal/index.tsx` — legal pages had no `<h1>`; now pass `headingLevel="h1"`.
- `src/modules/legal/constants.ts` — headings renamed to the canonical "Privacy Policy" /
  "Terms & Conditions" (chip "Legal"), matching the footer and page meta.
- Contrast/visibility (all were unreadable text, verified by computed-style sweep):
  `src/modules/home/service-cards.tsx` (title `neutral-1000` on a light card → `100`, body
  `700` → `400`); `src/modules/franchise/support-training.tsx` (step labels `1000` → `100`);
  `src/modules/franchise/hero.tsx` (trust-panel text `700` → `900` on the blue panel);
  `src/modules/contact/reach-out.tsx` and `src/modules/contact/offices.tsx` (dark-navy headings
  on dark-navy cards → `neutral-1000` headings, `900` body).
- `src/pages/404.tsx` — 480px illustration overflowed at 390px; SVG now `max-width:100%`.
- `src/modules/contact/*` — "CleanTank Services" → "Clean Tank Services" (3 strings).

Gates after the fixes: `pnpm exec tsc --noEmit` 0 errors, `pnpm run lint` 0 errors / 3 known
warnings, `pnpm run build` all 11 routes.

## 2026-09-21T12:21:51+00:00 — Phase E2: final gates, honesty audit, docs
Verified/fixed the tail end of the content overhaul left mid-run by a prior agent.

- Build gates: `pnpm exec tsc --noEmit` (0 errors), `pnpm run lint` (0 errors, 3 known
  pre-existing warnings), `pnpm run build` (all 11 routes render) — all pass.
- Fixed `src/pages/clients.tsx`: stray `;` after `<Clients />` inside JSX was rendering as a
  visible semicolon on the live `/clients` page.
- Fixed 4 hardcoded/non-token colors in `src/modules/contact/styles.ts` (a `#fff` fallback on a
  non-existent `--color-neutral-1100` var, and three literal `rgba(r,g,b,a)` values) — replaced
  with the CSS custom properties already used elsewhere in the same file/theme
  (`--color-neutral-1000`, `--color-neutral-900-base`, `--color-secondary-700-base`).
- Verified (already correct from the prior run, re-checked rather than assumed): `pageMeta` for
  all 9 routes in `src/components/head-meta/index.tsx`; `public/sitemap.xml` lists all 9 routes;
  `robots.txt` allows everything; `businessContactDetails.serviceArea`/`.hours` in
  `src/constants/index.ts` already use honest, INFO-BANK-supported wording (no fabricated
  hours); header logo already carries the "An Initiative of Gobind Galaxy" subline;
  `src/modules/about/constants.ts` has no fabricated "8 States / 200+ Technicians / 5000+
  Projects" credentials; `/services#amc` has a matching `id="amc"`.
- Honesty/link grep across `src/`: no banned ISO wording, no fabricated stat patterns, no raw
  `<a>/<img>/<button>/<table>`, no dead internal links, no placeholder phone/email outside form
  `placeholder=` attributes (which are fine).
- Browser-automation (Playwright MCP) verification could not run — no such tool was available
  in this session or a delegated worker's session. Did an HTTP/curl-based fallback instead: all
  9 routes return 200, `/does-not-exist` returns 404, `/services` HTML contains `id="amc"`.
  Visual/console/contrast/click-through checks are **NOT VERIFIED** — flagged for the owner or a
  future pass with real browser tooling.
- Added `docs/status.md` and this log.
