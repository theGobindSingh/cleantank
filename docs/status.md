# Site status (2026-09-21)

Clean Tank Services (an initiative of Gobind Galaxy) marketing/lead-gen site. Content overhaul
replaced fabricated marketing copy with real facts from `refs/INFO-BANK.md`, sourced centrally
in `src/constants/index.ts` (`@constants`).

## Routes (9 real pages + 404)
`/`, `/about-us`, `/services`, `/process`, `/clients`, `/franchise`, `/contact`,
`/privacy-policy`, `/terms`, `/404`. All build, type-check and lint clean; all listed in
`public/sitemap.xml` and allowed in `public/robots.txt`.

## Real vs placeholder
- **Real:** all company facts, phone numbers, emails, offices, ISO cert wording, registrations,
  founder bio, client name lists, franchise terms, 5-step cleaning process, 7-state presence —
  all from INFO-BANK via `@constants`.
- **Placeholder — owner action needed:**
  1. **Google Form IDs** — `src/modules/contact/constants.ts:109-153` (`contactGoogleFormConfig`)
     still has `REPLACE_WITH_CONTACT_GOOGLE_FORM_ID` / `entry.REPLACE_*` placeholders. The
     franchise enquiry form on `/franchise` (`src/modules/home/franchise.tsx`) already has a
     real form ID and entry IDs — the contact form does not yet.
  2. **Testimonials** — `src/modules/home/constants.ts:398` (`testimonialItems`), all entries
     are `"Customer testimonial coming soon."` placeholders. Needs real customer quotes.
  3. **Client logos** — `public/assets/images/clients/{government,healthcare,industrial,
     institutional}/` exist as folders but are empty of matching logo files; `/clients` page
     (`src/pages/clients.tsx`) falls back to name-only chips when no image matches a client
     name. Needs logo image files + permission to use them.
  4. **ISO certificate image** — not published anywhere on the site; only the text wording
     (`iso.safeWording` in `src/constants/index.ts`) is shown. Owner to decide whether to
     publish the certificate image itself.
  5. **Map coordinates / social profiles / Google Business Profile URL** —
     `businessContactDetails.geo`, `.socialProfiles`, `.googleBusinessProfileUrl` in
     `src/constants/index.ts` are `null`/`[]` placeholders for the owner to fill in.

## Shared feature-card section — DONE (2026-09-21T22:20:31+00:00)
Owner asked to stop maintaining two near-identical icon+title+description card grids. Both the
homepage "Our Services" grid and the franchise benefits grid now render the same
`src/layouts/feature-card-section/` component (`FeatureCardGrid`/`FeatureCard`/`FeatureCardCta`
styles, `FeatureCardItem`/`FeatureCardSectionCta`/`FeatureCardSectionProps` types, default export
`FeatureCardSection` wrapping `StandardSectionLayout`). `src/modules/franchise/benefits.tsx` and
`src/modules/home/service-cards.tsx` are both deleted; `src/modules/franchise/index.tsx` and
`src/modules/home/index.tsx` both render `<FeatureCardSection ... bg="var(--color-neutral-1000)" />`
(franchise with no `cta`, home with the "View All Services" `cta`).
- Settled: `--color-neutral-1000` is a light token (`#EFF1F2`) and was already the homepage's
  effective background (`global.ts` sets it on `body`), so passing it explicitly changes nothing
  visually and just makes the two call sites match instead of relying on inheritance.
- Accepted consequence, per owner instruction: the homepage cards used to scroll horizontally on
  phone; the shared grid stacks to one column there instead — no carousel variant was built.
- VERIFIED end to end: `src/layouts/feature-card-section/` has the three files with the named
  exports; grep for `ServiceCardsGrid|ServiceCardsCta|ServiceCard\b|FranchiseBenefitsGrid|
  FranchiseBenefitCard|benefit-` across `src/` returns nothing; `tsc --noEmit` 0 errors; lint 0
  errors / the same 3 known pre-existing warnings; build all 11 routes. Browser check (production
  build, scratch port, port 3000 untouched) at 390/768/1280 on `/` and `/franchise`: grids resolve
  1/2/3 columns, no horizontal overflow, card text contrast 11.65:1 / 5.68:1 (well above AA), CTA
  shows only on home, hover state correct.

## Subagent browser tooling — fixed, needs a session restart (2026-09-21T21:57:59+00:00)
Root cause of "no Playwright in subagents": `.claude/skills/gobind/agents/{sonnet-phase-lead,
opus-phase-lead,worker}.md` each ended their `tools:` allowlist with `mcp__*`. `tools:` is an
allowlist and `mcp__*` is only valid in `disallowedTools` (where it means *remove all MCP tools*);
as an allowlist entry it is unrecognised, so every spawned agent got zero MCP tools. Dropping
`tools:` entirely would restore MCP inheritance but would also drop `Agent(worker, drone)` and break
the delegation tree, so the allowlist stays and now names ten `mcp__playwright__browser_*` tools
explicitly. The drone is unchanged (deliberately read-only).
- NOT VERIFIED: a probe worker spawned after the edit still reported no `mcp__playwright__*` tools,
  which points at agent definitions being read at session start. Re-test after a restart.
- Consequence: the list is explicit, so a newly added MCP server will not be inherited automatically.

## Client groups — one canonical set (2026-09-21T15:28:47+00:00)
Owner ruling: these are **client groups**, not market segments, and they are not split. The five
labels from INFO-BANK §7 — Government · Healthcare · Industrial · Hospitality & Residential ·
Institutional — now live in `clientGroupLabels` (`src/constants/index.ts`, after the `clients`
export) and are imported wherever groups are shown.
- `/clients` category titles and chips now use those labels (were "Government & Public Sector",
  "Educational & Research Institutions", etc.).
- Home "Who We Serve" went from six cards to the same five; "Residential & Apartments" and
  "Hospitality" are merged back into "Hospitality & Residential", matching the client list.
- Assumption taken: flowing prose quoted from INFO-BANK (§6 paragraphs, the ISO scope) still says
  "residential, commercial and institutional" and was left untouched — it is source text, not a
  list of group labels.
- The "Who We Serve" section blurb and the LocalBusiness JSON-LD `makesOffer` list (which carried
  its own hardcoded six-way split) now use the same five labels.
- VERIFIED: no old wording left in `src/` (grep); `/clients` still renders all 46 names, since it
  keys off the object keys, not the display titles; tsc 0 errors, lint 0 errors / 3 known
  warnings, build all 11 routes.

## Browser verification (done, 2026-09-21)
All 10 routes checked in a real browser (Playwright, production build served on a scratch port;
port 3000 untouched) at 390 / 768 / 1280 px:
- No horizontal overflow on any route at any width; every page has exactly one `<h1>`.
- No JS/console errors (the only 404s logged were the deliberate bad-URL request).
- Every internal link returns 200; the only external links are the two approved `tel:`, the
  WhatsApp link and the two approved `mailto:`. `/services#amc` resolves to a real `id="amc"`.

Defects found and fixed in that pass:
1. Home `<h1>` rendered as "Clean Tank," only — `heroSectionMeta.title.text` did not contain
   its own `highlight`, so `hero-section` fell back and dropped "Healthy Life".
2. `/privacy-policy` and `/terms` had no `<h1>` at all (legal module now passes `headingLevel="h1"`).
3. Invisible text: `neutral-1000` (near-white) used on light surfaces and dark navy used on dark
   cards — home service cards, franchise support-flow steps, contact enquiry cards, contact
   office cards. All corrected; a repo-wide contrast sweep now shows no readable-text failure.
4. `/404` overflowed at 390px (fixed-size 480px SVG); the illustration is now responsive.
5. Brand spelled "CleanTank Services" in three contact strings; now "Clean Tank Services".

Known, deliberately left (design/product calls for the owner):
- The teal accent on light backgrounds (e.g. "View All Services", the water-hygiene pull quote)
  is ~2:1 contrast, below WCAG AA. Changing it means changing a brand colour — your call.
- All five `/process` step cards use the same stock photo, and several sections still use Pexels
  stock imagery. Images were out of scope tonight.
- Testimonial placeholder text is intentionally muted (~2.8:1); it goes away with real quotes.
