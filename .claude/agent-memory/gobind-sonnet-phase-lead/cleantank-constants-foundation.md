---
name: cleantank-constants-foundation
description: cleantank repo already has @constants alias and src/constants/index.ts wired up before any content overhaul — check existing exports before assuming "new file"
metadata:
  type: project
---

In the cleantank (Clean Tank Services) Next.js repo, `src/constants/index.ts` and the
`@constants` / `@constants/*` tsconfig path aliases already existed (tsconfig.json paths)
before the Phase A content-overhaul brief described it as a file to create. It already
exported `SITE_URL`, `SITE_NAME`, `siteLinks`, `businessContactDetails`, `cleaningProcessSteps`
and was consumed by `src/components/header/index.tsx`, `src/components/head-meta/index.tsx`,
`src/modules/home/constants.ts`, `src/modules/process/constants.ts`,
`src/modules/contact/constants.ts`.

**Why:** A brief that says "create NEW src/constants/index.ts" can be wrong if the repo has
moved on since the brief was written — always grep for existing consumers of the alias
(`grep -rln "@constants" src`) before writing/overwriting, or you silently break other
modules' imports.

**How to apply:** When touching `src/constants/index.ts` in this repo, preserve the existing
exported shapes (`businessContactDetails.phone.label/href`, `.email.label/href`,
`.serviceArea`, `.hours`, `.address`, `.geo`, etc.) exactly — `src/modules/contact/constants.ts`
and others destructure these directly. Add new grouped facts (brand, contact, offices,
registrations, iso, presence, founder, clients, franchise, serviceResultsQualifier,
footerNavLinks, legalLinks) alongside, don't replace. See [[cleantank-info-bank-source]].

Update (2026-09-21, phase E2): the fabricated process content described above has since been
fixed — `@constants.cleaningProcessSteps` now holds the real INFO-BANK 5-step process
(de-watering, high-pressure jet up to 250 bar, sludge/vacuum removal, disinfection spray, UV
where applicable) and `src/modules/home/constants.ts` / `src/modules/process/constants.ts` both
consume it instead of duplicating fabricated content. Do not assume this note's original
"still fabricated" claim is current — re-check `src/constants/index.ts` before trusting either
version of this memory.
