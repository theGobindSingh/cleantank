# Clean Tank Services: Style Guide
# 19. Assets, Handoff & Governance

> This pillar governs how the Clean Tank identity leaves the guide and arrives intact in a website, a print shop, a franchise partner's van, an agency deck or an AI prompt. It fixes the single source of truth, the folder tree, one naming rule for every file family, formats by use, versions, approvals, the exception path, franchise brand-usage limits, vendor briefs, QA, audits, licence and consent registers, AI tool limits, archive and takedown, training, and the launch gate. Clean Tank runs one brand through many local operators, so drift happens at the handoff: a stale logo, a retyped hex value, a franchise flyer printed before anyone looked at it. This sheet makes the approved file the easiest file to find. It also holds the reference-code registry (a proposal for the owner), the filled "Clean Tank Style on a Page" sheet (v2.0) and the master Open Items register for all pillars. Under "Quiet precision. One standard, every tank.", governance is part of the look: a file that is exact, ordered and documented is the brand.

Sheet CT-SG-19 | v2.0 | 08 Oct 2026 (Quiet Utility revision) | Tier legend: LOCK = central brand owner approves any change · GUARD = varies inside stated limits · FLEX = judgment within principles

## 19.1 Principles / inheritance

Big idea (v2): **Quiet precision. One standard, every tank.** Authority lives in the visuals and the records; humility stays in the words (voice is unchanged).

| Principle | Governance behaviour | Where |
|---|---|---|
| Exact | Every file has a version, an owner and a "which file for what" table. Values are numbers and token names, never adjectives. Hex is never retyped | 19.3 to 19.6, 19.10 |
| Ordered | One current version, one naming rule, numbered folders, one approval path, one reference-code grammar, the same standard in every district | 19.4, 19.6, 19.8, 19.10 |
| Restrained | No exception is granted quietly. Handoff files carry only locked values: 4 px radius, no shadows, no gradients, accent as marker only. Fewer files, fewer variants | 19.9, 19.13, 19.17 |
| Documented | Changelog, exception log, licence and consent registers, prompt log, signed proofs and reference-code registry exist before use. Records read like spec sheets | 19.6.1, 19.7, 19.15, 19.16 |
| Honest materials | Real photos, real records, real vendors' proofs. No AI image presented as real, no stock on records, no invented claim, no screenshot of a logo | 19.17, 19.18 |

Voice traits (knowledgeable, disciplined, humble, responsible, reassuring) still govern how requests are answered: politely, in writing, with a named person to ask. They do not set visual rules.

Scope. This pillar owns the asset library, file naming, formats, licences, handoff, approvals, audits and versioning. It does not create new brand elements (other pillars do). Trademark and legal approvals stay in the brand guide (Phase 11); only visual approvals live here. If a file is unclear, download from the official folder, never from a screenshot, a WhatsApp forward or an old email.

## 19.2 Roles and the approval ladder

| Role | Held by | Decides | Response time (proposed starting values) |
|---|---|---|---|
| **Central brand owner** | Gobind Galaxy (the proprietor's office; named person is an open item) | LOCK changes, logo route and artwork, palette, new templates, franchise rules, exceptions to LOCK items, vendor and AI tool approval | 3 working days |
| **Asset steward** | One named person at Gobind Galaxy (open item; the central brand owner acts as steward until named) | Library, changelog, exception log, licence and consent registers, reference-code registry (19.6.1), GUARD and FLEX questions, proofs against templates | 2 working days |
| **Operations reviewer** | A named operations lead (open item) | Technical accuracy of diagrams, photos, captions and process claims | 3 working days |
| **Franchise partner** | Each Authorised Service Provider | Fills only the fields allowed in 19.11; asks before any local print | n/a |
| **Vendors and agencies** | Printer, sign maker, embroiderer, photographer, web developer, agency | Work from the brief; send proofs; cannot approve their own work | Proof returned in 1 working day (ask) |

Ladder: requester > asset steward (GUARD, FLEX) > central brand owner (LOCK, anything touching the logo, certificate, sticker, uniform, signage or franchise material) > for claims, the evidence check in 19.17. Ask by email to `admin@cleantankservices.com` or the brand channel the steward sets up (open item: channel not decided). Use only the contacts in INFO-BANK §1 on any file.

## 19.3 Single source of truth and storage

| Item | Spec |
|---|---|
| Sentence for the README | "Figma file 'Clean Tank Brand' is the source. The repo `/tokens` folder and the shared Drive are exported from it. Never edit an export; fix the master and re-export." |
| Design source | One Figma file, named **Clean Tank Brand**, with pages: Cover, Logo, Colour, Type, Shape, Motifs, Layout, Imagery, Icons, Diagrams, Records, Templates, Print, Social |
| Code source | Repo folder `/tokens` with `ct.tokens.json` (DTCG-shaped), built to `tokens.css` (`--ct-*` variables) and a Tailwind preset. The DTCG format is a draft Community Group Report, not a W3C Standard (draft of 8 September 2026): pin the build tool version |
| Plain-text brand file | `brand.md` at the repo root: colour roles, type, spacing, radius, motion, copy rules, hard rules, do and don't. For Claude Code, Cursor and any AI tool |
| Distribution | Shared Drive folder **Clean Tank Brand** (tree in 19.4), plus a `/brand` route on the website or a Notion page with one zip per asset type once partners need downloads |
| Edit rights | Edit: steward and central brand owner. Comment: designers and developers in the team. View or download: franchise partners and vendors, via link, not via email attachments |
| Cost ceiling | Open: owner to set. Figma, Drive and a repo cost nothing beyond existing plans at launch. A paid portal (Frontify, zeroheight, Brandfolder) only when many outsiders need access |
| Visible on page one | Version, date, owner, "last updated" line, contact |

## 19.4 Folder tree

```
ct-brand/                                  (Shared Drive: "Clean Tank Brand")
  00-readme/        README.txt, VERSION, CHANGELOG.md, which-file.csv, contacts.txt,
                    exceptions.csv, gaps.csv, ref-codes.csv (19.6.1)
  01-logo/          ct-logo-kit-v2.0/
                      svg/ pdf-cmyk/ png/ favicon/ embroidery/ vinyl/ stamp/ indic/ source/
  02-colour/        tokens/ (ct.tokens.json, tokens.css)  swatches/ (ct-colour-v2.0.ase, .aco)  contrast-pairs.csv
  03-type/          licences/ (OFL.txt per family)  web-woff2/  desktop-ttf/  specimen/
  04-imagery/       photography/ (masters, web, grade: ctd-v2.xmp, ctd-v2.cube, shot-list P01-P23)
                    illustration/ (D1-D10 masters, ai-log, aidraft-internal)
                    icons/ (lucide-pinned, custom-19)
  05-motion/        lottie/ mp4/ webm/ captions/ audio/ (licensed music, with licence PDFs)
  06-templates/     certificate/ sticker/ letterhead/ visiting-card/ invoice-quotation/ job-card/
                    tender-doc/ flyer/ brochure/ standee/ social/ whatsapp/ email/ deck/
  07-print-ready/   (locked, steward-exported) cards/ stationery/ stickers/ signage/ uniform/ vehicle/
  08a-franchise/    partner-kit/ brand-usage-rules.pdf  local-print-requests/  audit/
  08b-localised/    hi/ pa/ (and mr/ when approved)
  09-licences/      licence-register.csv  consent-register (restricted)  receipts/ vendor-agreements/
  10-briefs/        printer/ signmaker/ embroiderer/ photographer/ webdev/ agency/ ai-tools/
  99-archive/       2026/ (retired items, never linked from 00-readme)
```

Rules for the tree: numbered top-level folders keep order stable in every file browser, and no two share a number. Photo masters can be large: raw files live in a restricted `04-imagery/photography/raw/` folder, not in partner downloads. The consent register is restricted to steward and owner (19.16).

## 19.5 Asset index

One table per asset type with the same columns. Version column is the version of the kit, set in 19.7 (the first kit issued is numbered v2.0 so kit and guide share one number; guide v1.0 never released a kit). "Status" is the current state on 08 Oct 2026.

| Asset | File or folder | Format | Size or spec | Use | Owner | Status |
|---|---|---|---|---|---|---|
| Logo kit | `ct-logo-kit-v2.0/` | SVG, PDF CMYK, PNG @1x/2x/3x, EPS, favicon, embroidery, vinyl, stamp | Min 40 mm / 180 px horizontal (s02) | Everywhere | Central brand owner | **No artwork yet.** s02 says draw Routes A and B to the same constants, then owner decides; optional accent marker yes or no is open |
| Fonts | `03-type/` | WOFF2 (web), TTF (desktop, static instances) | Anek Latin (headings at wdth 78, 700; body wdth 100), Anek Devanagari, Anek Gurmukhi (400/500/600/700); IBM Plex Mono (500/600 for labels and refs, 400 as needed) | All text | Steward | Licence: SIL OFL 1.1 |
| Colour | `02-colour/` | `.ase`, `.aco`, DTCG JSON, CSS | Roles per s03: Primary `#20334B`, Secondary TBD (no value), Accent `#EE7555` (marker only), Neutral `#FFFFFF` to `#25282A` (stone `#F5F4F1`), State | Design, code | Steward | `.ase` and JSON not yet produced (s03, s12) |
| Icons | `04-imagery/icons/` | SVG, React components | Lucide (ISC), pinned version, 24 px grid, 1.75 px stroke, `stroke-linecap="square"`, `stroke-linejoin="miter"`, plus 19 custom icons (s10) | UI, print | Steward | Custom 19 to be drawn; Lucide rounded-rectangle patch is open |
| Illustration | `04-imagery/illustration/` | Layered SVG, PNG @1x/@2x, vector PDF | Diagrams D1 to D10, "Clean Tank Technical Line" | Web, certificate, sticker, deck | Steward, operations reviewer | To be drawn |
| Photo library | `04-imagery/photography/` | JPEG master, AVIF/WebP, grade `ctd-v2.xmp` and `ctd-v2.cube` ("Clean Tank Daylight v2") | Shot list P01 to P23; stock max 10% of web images | Web, social, print | Steward | No pilot shoot yet |
| Certificate | `06-templates/certificate/` | PDF (tagged), DOCX or Figma | A4 portrait, 20 mm margins, square corners, primary title band, ruled field grid | Every job | Central brand owner | LOCK template |
| Tank sticker | `06-templates/sticker/` | Vector PDF CMYK | 100 x 70 mm, corners about 1.5 mm (s05.13); primary title band, ruled fields, 3 px accent underline | Every job | Central brand owner | LOCK template; s14 still shows 3 mm, to align |
| Letterhead | `06-templates/letterhead/` | DOCX, PDF | A4, 25 mm margins | Letters | Steward | Month 1 to 3 |
| Visiting card | `06-templates/visiting-card/` | Vector PDF CMYK | 90 x 54 mm, 3 mm bleed | Staff, partners | Steward | Month 1 to 3 |
| Invoice and quotation | `06-templates/invoice-quotation/` | XLSX or DOCX plus PDF | A4; GSTIN in Plex Mono | Billing | Steward | Month 1 to 3 |
| Job card | `06-templates/job-card/` | PDF, Figma | A4 or A5 | Field | Operations reviewer, steward | Month 1 to 3 |
| Tender document | `06-templates/tender-doc/` | DOCX, PDF | A4; ISO line exact wording only | Institutions | Central brand owner | Month 1 to 3 |
| Flyer | `06-templates/flyer/` | Vector PDF CMYK | A5, 12 mm margin | Local marketing | Steward | Month 1 to 3 |
| Brochure | `06-templates/brochure/` | Vector PDF CMYK | DL panels 99 mm | Sales, franchise | Central brand owner | Later |
| Standee | `06-templates/standee/` | Vector PDF CMYK | 800 x 2000 mm-units per s07 | Events | Central brand owner | Later |
| Social templates | `06-templates/social/` | Figma, PNG | 1080x1080, 1080x1350, 1080x1920; 64 px margin | Instagram, Facebook, LinkedIn | Steward | Month 1 to 3 |
| WhatsApp cards | `06-templates/whatsapp/` | Figma, PNG | 1080x1080 | Customer messages | Steward | Month 1 to 3 |
| Email | `06-templates/email/` | HTML, PNG header | 600 px wide (verify) | Quotes, reminders | Steward | Month 1 to 3 |
| Deck | `06-templates/deck/` | PPTX, Google Slides | 16:9 | Institutions, franchise | Steward | Month 1 to 3 |
| Reference-code registry | `00-readme/ref-codes.csv` | CSV | Columns in 19.6.1 | All numbered sections, records and masters | Steward | Proposal, owner to approve |
| Motion | `05-motion/` | MP4 H.264, WebM, Lottie | 25 fps, -14 LUFS / -1 dBTP; Lottie 150 KB (own limit) | Web, video | Steward | Later |

### Font licence notes (OFL)

| Item | Note |
|---|---|
| Licence | Anek (Latin, Devanagari, Gurmukhi) and IBM Plex Mono are under the SIL Open Font License 1.1 (open source, free for commercial use) |
| Allowed | Use, embed in PDFs and sites, redistribute with the kit, modify |
| Required | Keep each family's copyright notice and `OFL.txt` with every copy you redistribute |
| Not allowed | Selling the font files by themselves. Do not rename a modified font using a Reserved Font Name |
| Open | Confirm reserved-name terms for Anek and Plex before making renamed static TTFs for the franchise kit, and before naming the customised wordmark drawing after Anek (s02, s04) |

## 19.6 File naming convention (unified)

Earlier pillars set three patterns: logo `ct-logo-<version>-<colour>[-<variant>].<ext>` (s02), photos `ct_[cat]_[subject]_[city]_[yyyymmdd]_[seq]_[ratio].jpg` (s08), illustration `ct-ill-<type>-<subject>-<lang>-<tier>-<variant>-v<NN>.<ext>` (s09). They differ in separator. This sheet unifies the rule while keeping every published example valid.

| Part | Rule |
|---|---|
| Case and characters | Lowercase letters, digits, hyphen. No spaces, no capitals, no accents, no brackets, no "final", "new", "copy" |
| Prefix | Always `ct-` then a family code, e.g. `ct-logo`, `ct-ill`, `ct-photo`, `ct-icon`, `ct-tpl`, `ct-cert`, `ct-sticker`, `ct-social`, `ct-wa`, `ct-vid` |
| Order of parts | `ct-<family>-<subject>-<variant>-<colour or mode>-<lang>-<size or scale>-v<NN>.<ext>`; drop any part that does not apply, keep the order |
| Language codes | `en`, `hi`, `pa`, `mr` (when approved). Omit for language-free files |
| Size or scale | `1x`, `2x`, `3x`, `180px`, `a4`, `a5`, `dl`, `1080x1350`, `print` |
| Version | Kit folders carry the kit version (`ct-logo-kit-v2.0/`). Template and illustration files carry `v01`, `v02` (two digits) |
| Max length | 80 characters including extension |
| Dates | Photos only: `yyyymmdd`, ISO order, so files sort by date |
| Alt text | Stored with the asset: IPTC description (photos) or a sidecar `alt.csv` with columns `file, alt_en, alt_hi, alt_pa` (125 characters or fewer) |

Photo exception, one line: s08's pattern uses underscores. Until s08 is reissued, either form is accepted; new photo files use `ct-photo-<cat>-<subject>-<city>-<yyyymmdd>-<seq>-<ratio>.jpg`. This is an open item (19.25, item 4).

| Family | Valid example |
|---|---|
| Logo | `ct-logo-horizontal-primary.svg` · `ct-logo-stacked-primary.svg` · `ct-logo-symbol-white.png` · `ct-logo-franchise-primary.pdf` |
| Illustration | `ct-ill-process-5step-en-hero-light-v01.svg` (carries `REF CT-ILL-D1-01` inside the artwork, s09) |
| Photo | `ct-photo-pro-dewatering-pump-kharar-20261114-003-3x2.jpg` (example only) |
| Icon | `ct-icon-process-dewatering-24.svg` |
| Template | `ct-tpl-certificate-en-a4-v01.pdf` · `ct-tpl-invoice-hi-a4-v01.xlsx` |
| Social | `ct-social-process-step3-en-1080x1350-v01.png` |
| WhatsApp card | `ct-wa-amc-reminder-pa-1080x1080-v01.png` |
| Franchise print file | `ct-fr-flyer-<partner-code>-<city>-a5-v01.pdf` (partner code assigned by the steward) |

### 19.6.1 Reference-code registry (PROPOSAL, owner to approve)

Status: **proposal**. The owner supplied one example, `REF CT-PR-05` (s06). Every other family below is a suggestion built from codes already used in s07 and s09. Nothing here is final until the central brand owner approves the grammar (master register, "Reference codes").

| Part | Proposed rule |
|---|---|
| Form | `REF CT-<FAMILY>-<NN>`. FAMILY is 2 to 4 uppercase Latin letters. NN is two digits. Illustration masters add an ID segment: `REF CT-ILL-<ID>-<NN>` (s09). Record serials use four digits: `CT-CERT-0001` |
| Typeface | IBM Plex Mono 500 or 600, UPPERCASE, tracking +0.08 to 0.1em, 11 to 13 px; always Latin letters, also on Hindi and Punjabi pages (s06) |
| Colour | Neutral 600 or Primary 700 by default. Accent 700 only for the one accent tag or index number per view (s06) |
| Issue | The asset steward issues every code from `00-readme/ref-codes.csv` before the item is built or printed. A code is never reused or recycled, even for a retired item |
| Meaning | A code is a filing label. It never implies a certificate, licence, approval or accreditation (s06). It is not an ISO number: the ISO line stays exactly as in 19.17 |
| Match | The code on the item equals the registry row; the file name (19.6) and the code are cross-listed in the registry |

| Family | Covers | Example | Source | Issued by |
|---|---|---|---|---|
| PR | Process: the 5-step process pages, bands and diagrams | `REF CT-PR-05` | Owner example (s06) | Steward. What NN counts (step, page or item) is open |
| ILL | Illustration masters; NN equals the master version | `REF CT-ILL-D2-01` | s09 | Steward, operations reviewer for technical accuracy |
| CERT | Cleaning-record serial printed on a certificate, one per job | `CT-CERT-0001` | s07 wireframe | Operations, not the steward. Numbering by partner or central is open |
| TECH | Technical and specification pages: capacities, tank types, equipment sheets | `REF CT-TECH-01` | Proposal | Steward. Content only from INFO-BANK |
| WEB | Website sections and pages | `REF CT-WEB-01` | s07 wireframe | Steward |
| SVC | Services sections | `REF CT-SVC-02` | s07 wireframe | Steward |
| DOC | Documents: tender, brochure, letterhead, deck sections | `REF CT-DOC-01` | s07 wireframe | Steward |
| SOC | Social and WhatsApp post templates | `REF CT-SOC-01` | s07 wireframe | Steward |
| FR | Franchise kit pages (candidate, not used in any pillar yet) | `REF CT-FR-01` | Proposal | Central brand owner |

Conflict to settle: the s07 website wireframe shows `REF CT-PRC-03` for the process section, while the owner's example is `PR`. Proposal: use `PR` everywhere and retire `PRC`. Registry columns: `code, family, title, surface, version, issued_on, issued_by, status, file`.

## 19.7 Versioning and changelog

| Digit | Bumps when | Example |
|---|---|---|
| MAJOR (v2.0) | Logo artwork, colour values or roles, typeface, radius or grid change; anything that makes old files look wrong beside new ones | Quiet Utility revision (v2.0, 08 Oct 2026); a new logo drawn and approved |
| MINOR (v1.1) | New asset, new template, new language, new variant, clarified rule; old files remain valid | Hindi certificate added |
| PATCH (v1.1.1) | Typo, metadata, export fix; no visual change | Corrected alt text |

One current version only. The version number sits in the kit folder name, the `VERSION` file, the Figma cover page and the website `/brand` page. Old versions move to `99-archive/<yyyy>/` the same day.

Changelog (`00-readme/CHANGELOG.md`), newest first. New entries use the v1.1 pattern in the last block.

```
v2.0  08 Oct 2026  Quiet Utility revision.
  Why:      Authority over friendliness. A specialist is trusted first for how exact
            its records look. Humility stays in the words (voice unchanged); authority
            lives in the visuals. Big idea: "Quiet precision. One standard, every tank."
            Principles: Exact, Ordered, Restrained, Documented, Honest materials.
  Owner decisions (08 Oct 2026):
            1. Radius 4 px default (tokens none 0, xs 2, sm 4 only; 8, 12, 16, full removed)
            2. Headings in condensed Anek caps (wdth 78, 700); labels in IBM Plex Mono caps
            3. Navy bands for header, footer and emphasis sections, not whole pages
            4. Accent (coral) is a marker only: never a fill, button or CTA
            5. Colour roles: Primary, Secondary (TBD), Accent, Neutral, State
            6. Website hero is a full-bleed photo with headline and CTAs on top
            7. Header fixed or floating: TBD
  Also changed: no shadows, no gradients; square caps and miter joins on lines and icons;
            strict 12-column grid, numbered sections, mono reference codes;
            sticker coral band replaced by a 3 px accent underline; grade ctd-v2.
  Retired:  Clean White, Uniform Navy, Care Coral, Checklist Ink, Mist White;
            ct.color.navy.*, ct.color.coral.*, ct.color.status.*, ct.shadow.*;
            radius 8, 12, 16, full; navy gradient; grade ctd-v1.
  Migration: re-export all files; replace old token names; check any file made from
            v1.0 values against the v2.0 sheet before reuse.
  Approved by: Gobind Galaxy, central brand owner
v1.0  03 Oct 2026  Guide issued. Palette, type, tokens defined. Logo artwork pending.
v1.1  [date]       [what changed]  Why: [reason]  Approved by: [name]
```

## 19.8 Formats by use

| Use | Format | Colour space and note |
|---|---|---|
| Logo, web and UI | SVG (text outlined) | sRGB. One file per variant |
| Logo, print and vendors | PDF (vector) or EPS, outlined | CMYK; one-colour version for vinyl, stamp, embroidery |
| Slides, email, docs | PNG @1x, @2x, @3x, transparent; logo at least 1200 px wide | sRGB |
| Photos, web | AVIF or WebP q75, JPEG fallback q80; 2400 px long edge max (s08) | sRGB |
| Photos, print | JPEG q95 or TIFF master, 300 ppi at final size | CMYK conversion by printer (confirm with printer) |
| Favicon and app icon | ICO (16, 32, 48) plus SVG, 180 px touch icon, 512 px PNG | Square, built-in padding; larger than 48 px advised by Google (verify) |
| Social, OG image | PNG or JPEG; OG 1200 x 630 | sRGB |
| WhatsApp card | PNG 1080 x 1080 | sRGB; keep under 1 MB where possible (verify) |
| Raster density | Base size at 1x, supply @2x and @3x | Name with `2x`, `3x` |
| Video | MP4 (H.264) and WebM, 25 fps, captions burned in or sidecar `.srt` | -14 LUFS / -1 dBTP (s11) |
| UI animation | Lottie JSON, 150 KB limit (own starting value), static fallback | Honours reduced motion |
| Fonts, web | WOFF2, self-hosted | Subset per script |
| Fonts, desktop | TTF (static instances) for Word, Canva and design tools | Variable fonts fail in some tools (verify) |
| Documents for customers | Tagged PDF with live text, not outlined text | Alt text on informative images |
| Colour swatches | `.ase` (Adobe), `.aco`, CSS, DTCG JSON | Same values as 19.5 |

Print corners follow s05.13 (sticker and badge about 1.5 mm, folder 2 mm, van panel and signboard square or fixed 4 mm, certificate square): vendors receive vector art with the corners already drawn, never a rounding effect. Pantone, CMYK and vinyl values in s03 are estimates until a printer's swatch book confirms them. Print specs are placeholders until the printer confirms.

## 19.9 Lock, flex and the exception process

### Lock and flex map

| Level | What | Who decides |
|---|---|---|
| **Locked** | Logo artwork and geometry, clear space (ideal 2X, minimum 1X), colour roles and values, the 60/30/10 split, accent as marker only, 4 px radius and no shadows, Anek (condensed caps headings) and IBM Plex Mono (caps labels), the reference-code grammar once approved, the 5-step process wording and order, certificate and sticker layouts, ISO wording, tagline and descriptor, contact lines, franchise lockup layout | Central brand owner |
| **Needs approval** | New logo colourway, co-brand, signage, vehicle graphics, uniform, any print run by a franchise partner, any new template, any new claim, any client name or logo | Central brand owner |
| **Guarded** | Photo crops within safe zones, illustration text layer language, social layout grid inside s07, steps inside the primary and accent scales (no new hex) | Asset steward |
| **Flexible** | Campaign copy inside voice rules, photo choice from the approved library, post order and timing | Marketer, checked by steward |

### Exception request

| Field | Content |
|---|---|
| Asset | File name or surface |
| Rule | Rule number being varied (e.g. 03.4) |
| Reason | Why the standard does not work |
| Channel | Where it will be seen |
| Duration | Dates, one-off or ongoing |
| Requester | Name, role, partner code |
| Mockup | Attached |
| Decision, date, approver | Filled by the owner |

Turnaround: steward answers in 2 working days; central brand owner in 3 working days (proposed). Silence is not approval. Every request and answer goes into the exception log (`00-readme/exceptions.csv`).

Three-request rule: if the same exception is requested 3 times, the central brand owner either changes the rule (with a MINOR or MAJOR bump and a changelog line) or confirms it in writing. Exceptions never become silent policy.

## 19.10 Design to code handoff

| Step | Spec |
|---|---|
| Token source | `/tokens/ct.tokens.json`, groups `ct.color.{primary,secondary,accent,neutral,state}.*`, `ct.font.*`, `ct.space.*`, `ct.radius.{none,xs,sm}`, `ct.border.*`, `ct.focus.*`, `ct.motion.*` (names per s03, s04, s05, s07, s11, s12). `ct.color.secondary.*` stays an empty placeholder until the owner decides. There is no `shadow` group: CI fails on the string `shadow` in `/tokens` (s12) |
| Build | Tokens to `tokens.css` (`--ct-color-primary-700`) and a Tailwind preset, with a build script run in CI. Hex typed by hand in code is a defect |
| Code matches guide | CI test compares token values with the values in `brand.md`; a mismatch fails the build |
| Figma to code | Figma Variables mirror tokens. Dev Mode and Code Connect need a paid Dev or Full seat (Organization plan for Code Connect): defer until a component library exists |
| Components | Storybook once the Next.js component library exists (s13). Every story shows light and dark, 360 px, and Hindi and Punjabi labels; no story has a shadow, a radius above 4 px or an accent fill |
| Fonts in code | `next/font/google` for Anek and IBM Plex Mono (verify export names, s04); self-host WOFF2 for the franchise kit |
| `brand.md` | One page: colour roles with pairs and ratios, type scale, spacing, radius, motion, copy rules, hard rules from 19.17, forbidden list |
| Lucide render override | Build step sets `stroke-linecap="square"`, `stroke-linejoin="miter"`, stroke 1.75 at 24 on every Lucide icon (s10). Patching Lucide's rounded rectangles at build time is an open item |

## 19.11 Franchise brand-usage rules

Principle (Phase 9 and 11): one brand, many local operators, one standard. Clean Tank stays primary.

| Item | May the partner change it? |
|---|---|
| Authorised Service Provider name and city or district line, in the franchise lockup `[Franchisee Name] \| [City / District]` | **Yes**, text only, set in the template's locked style, spelling approved |
| Local phone number | **Only if approved** by the central brand owner in writing. Default: central contacts only |
| Logo, lockup layout, clear space, tagline, descriptor | No |
| Colour, type, grid, radius, icons, diagrams, photography grade | No |
| Process wording and order, ISO wording, certificate and sticker layout | No |
| Uniform, van, signage design | No (central artwork; partners order from approved vendors) |
| Claims, health lines, client names, testimonials | No new claims. Use library copy only |
| Franchise figures | Only INFO-BANK §8 figures, with the financial disclaimer beside them, in central franchise material only |
| Partner's own logo | Not allowed in or near the Clean Tank lockup (owner ruling pending, s02 item 7) |
| Social accounts | Name and profile follow templates; owner approves the handle |

Process for local print and signage:

1. Partner downloads a template from `08a-franchise/partner-kit/` and fills only the allowed fields.
2. Partner submits the PDF to the steward (local-print request: item, quantity, vendor, date).
3. Steward checks against the QA list (19.13) and replies within 2 working days.
4. Printer sends a proof; steward or owner signs it before the run.
5. Partner stores the signed proof in `08a-franchise/local-print-requests/`.

**No local printing begins before written approval.** Unapproved printed material is withdrawn at the partner's cost (agreement wording is for counsel). Audit: 19.14.

## 19.12 Vendor briefs

Each brief is a one-page template. Fill it, attach the files, keep a copy in `10-briefs/`.

```
VENDOR BRIEF   [type]   Date: [dd Mon yyyy]   Job: [name]
Deliverable:      [item, size, quantity]
Files attached:   [ct-... file names from the kit, version v2.0]
Colour mode:      [CMYK / one-colour / sRGB]   Colours: [role names and hex, Pantone estimates per s03]
Spec:             [stock, finish, resolution, bleed 3 mm, safe 5 mm]
Proof required:   [yes: digital / physical sample]   Sign-off: [name], within [2] working days
Do not:           [stretch, recolour, redraw, add shadows, gradients or glow, round corners beyond the stated radius,
                   fill anything with accent, change text, use any file not attached]
Claims:           Only the text supplied. No added certifications, approvals or health claims.
Contacts on item: Only the phones, emails and addresses supplied.
```

| Vendor | Extra fields | Notes from earlier pillars |
|---|---|---|
| Printer | Stock, finish, ink, bleed 3 mm, safe 5 mm, proof | CMYK PDF; confirm all print specs and Pantone matches; outdoor UV test for sticker ink |
| Sign maker | One-colour vector PDF, size, material, mounting, weeding order | Vinyl gaps 3 mm minimum (verify); panel corners square or a fixed 4 mm (s05.13), never a percentage |
| Embroiderer | Digitized stitch file from approved art, 2 thread colours max, text cap height 6 mm minimum | Test-sew before bulk; navy fabric swatch against Primary 700 `#20334B` |
| Photographer | Shot list P01 to P23, grade `ctd-v2`, releases, safety SOP, delivery naming | No PPE frames until safety SOP confirmed; consent before shooting |
| Web developer | Tokens, `brand.md`, `/brand` route, performance and accessibility targets, WCAG 2.2 AA | Anek and Plex only; no extra fonts |
| Agency | Guide v2.0, hard rules, voice, lock/flex map, review rounds, approver | Written IP assignment, worldwide and in perpetuity (counsel to confirm); no AI-generated final art |
| AI tools | Rules in 19.18 and `brand.md`; prompts logged | No tool approved at launch |

## 19.13 QA checklist and pass mark

Run on every external file before release. Pass mark: **all 5 critical items pass, and at least 13 of the 16 others** (18 of 21 in total). A single critical failure blocks release whatever the total. Each result is written as a word (Pass or Fail), not colour alone.

| # | Check | Critical |
|---|---|---|
| 1 | Logo is from the official kit, correct version, not redrawn | Yes |
| 2 | Clear space 1X minimum, 2X where room | |
| 3 | Minimum size respected (40 mm / 180 px horizontal etc., s02) | |
| 4 | Colours are role tokens (Primary, Neutral, Accent, State); 60/30/10 holds; accent under 10% of area; navy used for header, footer and emphasis bands, not as a whole-page ground; no Secondary colour used while it is TBD | |
| 5 | Accent (coral) is a marker only: Level Line, active step, reference tag or index number, one key figure. Never a fill, a button, a CTA, body text on white, or a warning or urgency signal. Primary buttons are navy fill with white label | Yes |
| 6 | No shadows, gradients, glow, bevel or blur anywhere; depth is 1 px rules, ruled cells and solid primary bands; lines and icons have square caps and miter joins | |
| 7 | Corners are 4 px (sm) on buttons, inputs, cards, frames and on-screen stickers; 0 to 2 px on tables, rules and grids; no 8, 12, 16 or pill radius; circles only for literal round objects; print corners per s05.13 | |
| 8 | Headings in Anek condensed caps (Devanagari and Gurmukhi: no case change); labels and codes in IBM Plex Mono caps; body in Anek; sizes at or above minimums (7 pt Latin, 8 pt Indic print) | |
| 9 | Text pairs pass 4.5:1 body, 3:1 large and UI | |
| 10 | Process shown as the 5 steps only, in order | Yes |
| 11 | ISO line uses the exact wording or does not appear | Yes |
| 12 | Health or "safe" lines carry the water-quality qualifier | Yes |
| 13 | No "best", "#1", "guaranteed", "100% bacteria-free"; no competitor attack | |
| 14 | Contacts only those in INFO-BANK §1 (or approved local phone) | |
| 15 | Imagery is real, consented, graded `ctd-v2`; people shown working, not posing; stock not on records or franchise items | |
| 16 | Alt text present on informative images; live text in PDFs | |
| 17 | File format matches use (19.8); file name follows 19.6; any reference code on the item matches the registry (19.6.1) | |
| 18 | Hindi and Punjabi strings set in native fonts, reviewed by a native reader | |
| 19 | Rights: licence or release recorded (19.15, 19.16) | |
| 20 | Tone passes the persona filter: explains, never frightens, no pressure | |
| 21 | Client names or logos have written permission, or are absent | |

Before and after: keep one failed and one corrected example per quarter in `10-briefs/qa-examples/` for training.

## 19.14 Brand audit scorecard and cadence

Scope: franchise locations (Phase 11 periodic audit) and central channels. Cadence: **every 6 months for central channels (April, October)**, **at onboarding and then every 6 months for each Authorised Service Provider**, plus a spot check after any complaint. Sample: 10 items per location (website or page, 3 social posts, 2 printed items, a certificate and sticker from a recent job, uniform and van photo, a WhatsApp message). Starting values; adjust after the first round.

Score 0 (fails), 1 (partial), 2 (meets). Result is written as a word beside the number.

| Area | What is checked | 0 to 2 |
|---|---|---|
| Logo and lockup | Official file, clear space, franchise lockup correct | |
| Colour and depth | Role tokens, contrast, accent as marker only, no shadows or gradients | |
| Type and shape | Anek caps headings, Plex Mono labels, sizes, scripts, 4 px corners | |
| Imagery | Real photos, consent, grade, no shock imagery | |
| Process and claims | 5 steps, qualifiers, ISO wording, no banned claims | |
| Records | Certificate and dated sticker used on every job | |
| People and vehicle | Uniform, name badge, van graphics per s16 | |
| Print approvals | Signed proofs on file for all local printing | |
| Rights and consent | Licences and releases present | |
| Conduct | Unhurried, no pressure messages | |

Total out of 20. **Meets the standard: 17 or more, with no area at 0. 12 to 16: corrective plan in 30 days. Under 12, or any 0 on Process and claims: central brand owner reviews the partnership's brand rights** (legal wording for counsel). Findings and fixes are logged in `08a-franchise/audit/`.

Distinctive asset test (candidate list from s01 and s06 v2: Level Line with primary bands, ruled spec-sheet record, 5-step Step Track, dated sticker, pressed uniform with name badge): once the logo and first assets are live, test annually with a sample of at least 100 people across home owners and RWA or institution contacts (starting value, not a published standard). The cadence is a recommendation; confirm method against the Ehrenberg-Bass material.

## 19.15 Licence register

File `09-licences/licence-register.csv`. Alert **60 days** before expiry (starting value); the steward owns renewals.

| Column | Content |
|---|---|
| asset | Name and file |
| licensor | Who granted it |
| type | OFL, ISC, stock licence, commissioned, music |
| scope | Web, print, social, video, territory |
| start, expiry, alert date | `dd Mon yyyy` |
| link | Receipt or licence file |
| notes | Attribution or reserved-name conditions |

Rows to create at launch:

| Asset | Licensor | Type | Scope | Expiry |
|---|---|---|---|---|
| Anek Latin, Devanagari, Gurmukhi | Anek project authors, via Google Fonts | SIL OFL 1.1 | Web, app, print, redistribute with notice | None |
| IBM Plex Mono | IBM, via Google Fonts | SIL OFL 1.1 (Reserved Font Name) | Same | None |
| Lucide icons (pinned version; house override of caps, joins and stroke) | Lucide contributors | ISC | Web, app, print | None |
| Custom 19 icons | Designer, written assignment | Commissioned, worldwide, perpetual | All | None |
| Illustration D1 to D10 (CT Technical Line) | Illustrator, written assignment | Commissioned, worldwide, perpetual | All | None |
| Stock photos (max 10% of web images) | To be chosen | Stock licence | Web and social | Open: record |
| Music for video | To be chosen | Licensed library | Video, territory | Open: record |
| WhatsApp glyph | Meta | Brand terms | Only where it opens a chat | Verify current terms |

Keep each font's copyright notice and `OFL.txt` with any copy you redistribute.

## 19.16 Rights and consent register

File `09-licences/consent-register` (restricted access). Columns: consent ID, person or site, role (technician, customer, site owner), what was captured, where it may be used, start, end or withdrawal, form link, minor (yes or no), retention date, withdrawn on.

| Rule | Spec |
|---|---|
| Written consent | Signed release before any face, voice, name or identifiable site is used |
| Technicians | Written consent for pose, clothing and likeness; may withdraw |
| Customers and sites | No house numbers, documents with names or identifiable interiors |
| Children | Not photographed; no minors in brand imagery |
| Clients | Written permission before LIC, MES, BSNL, AIIMS, IIT Kanpur or any other name or logo is used publicly |
| DPDP note | India's Digital Personal Data Protection Act applies to personal data in photos, video, customer lists and reminders. Counsel confirms the current Rules, consent wording, retention and withdrawal process (open item). Store only what is needed; delete on withdrawal |
| Reminders | AMC reminders and WhatsApp messages need the customer's opt-in; no pressure copy |

## 19.17 Hard rules for all content and files

These apply to every vendor, agency, partner and tool. Copy them into every brief and into `brand.md`.

| Rule | Spec |
|---|---|
| ISO | Only: "ISO 9001:2015 certified (Q2A-UK Certification Board), Certificate No. Q2A-2026-0401T118011, valid to 31 March 2029." Never "accredited", "internationally recognised", UKAS, IAF |
| Process | 5 steps only: Dewatering, High-pressure cleaning, Sludge & water removal, Disinfection (antibacterial), UV treatment (where applicable). Never the old 6-step or HCl version |
| Health lines | Qualifier: water quality also depends on source water, plumbing, tank condition and later maintenance, which are outside our service |
| Banned words | "100% bacteria-free", "guaranteed", "best", "#1"; attacks on competitors or local plumbers |
| Needs evidence before public use | Clean Tank Agent properties (non-toxic, eco-friendly, 3-month effect), CPWD DSR inclusion (exact edition and item), the "60% of diseases" stat, any WHO, FDA or government approval |
| Cleaning frequency | Depends on the organisation (healthcare about 3 months, schools about 6). No single flat number |
| Franchise | Only INFO-BANK §8 figures with the disclaimer. Never guaranteed income, zero royalty, "small investment, high profit" |
| Visual (v2) | No shadows, no gradients. Radius 4 px default (0 to 2 on tables and rules). Accent is a marker only, never a fill or CTA. Headings condensed caps. No sun rays, bokeh, red or orange urgency badges, cartoon bacteria, glossy effects, fear imagery |
| Unverified | Origin story location, early dates (Delhi Railway Station 2006 to 08), CPWD DSR: not in public copy until confirmed |

## 19.18 AI tool governance (Phase 11.7)

AI tools and agencies must not invent: **certifications, government approvals, lab results, health claims, technical specifications, client credentials, performance claims or legal status.**

| Rule | Spec |
|---|---|
| Approved tools | None at launch. A tool is added only after the central brand owner reads its terms (commercial use, training on inputs, indemnity) for the plan in use |
| Allowed uses | Internal drafts, moodboards, copy ideas, code, checklists |
| Not allowed | AI photos presented as real; AI-drawn final diagrams (a designer redraws in vector, s09); AI-generated testimonials, reviews, client logos, certificates, lab reports |
| Input | Give the tool `brand.md` and the 19.17 rules; never paste customer personal data or the consent register |
| Prompt log | Tool, version, plan, date, prompt, seed, person, output file name, redrawn by, approver (`04-imagery/illustration/ai-log`) |
| Review | Every AI-assisted public item passes QA (19.13) and the evidence check by a named human before release |
| Labelling | AI-assisted images carry the suffix `_aidraft` until redrawn; never leave the internal folder |
| Old prompts | INFO-BANK §9 prompts are obsolete and must not be used |
| Failure | An AI output that invents a claim is logged, deleted, and counted in the next audit |

## 19.19 Archive and takedown

| Item | Rule |
|---|---|
| Archive location | `99-archive/<yyyy>/`, not linked from the readme or `/brand` page |
| Retired now | The old glossy tank-and-droplets logo and its files; the **yellow standee** and yellow, ray or red-border collateral; the 6-step or HCl process version; old colour values (Tank navy `#0D2C4A`, Water blue, Leaf green, yellow, red, gradients); old claims (any "100%", "guaranteed", "best"), the old Phase 4 franchise figure of Rs 5 lakh |
| Retired in v2.0 | Colour names Clean White, Uniform Navy, Care Coral, Checklist Ink, Mist White; tokens `ct.color.navy.*`, `ct.color.coral.*`, `ct.color.status.*`, `ct.shadow.*`; radius 8, 12, 16 and full; the navy gradient; the coral sticker band; grade `ctd-v1` ("Clean Tank Daylight v1"); Mist `#F7F7F8`; rounded and shadowed templates |
| Takedown window | Retired files removed from downloads the day a new version is approved; live public use removed within **14 days** (starting value); printed stock withdrawn within **30 days** unless the owner allows a sell-through |
| Partners | Steward emails a retirement notice with the list of replaced files and dates; partners confirm in writing |
| Vendors | Old files recalled in writing; printers delete plates and templates |
| Websites and social | Old logos, bios, banners and pinned posts replaced; search listings and directories updated |
| Evidence | Keep screenshots of removals in the audit folder |
| Contact | Questions on retired items: steward, then central brand owner |

## 19.20 Training for staff and franchise partners

| Audience | Content | When | Format |
|---|---|---|---|
| New staff | Logo, colour, type basics; 5 steps; hard rules; where files live | First week | 45 minutes plus this guide's one-page sheet |
| Technicians | Uniform and name badge; certificate and dated sticker; photo and consent rules (s08 phone guide) | Onboarding, then yearly | Hands-on, in the language the person is comfortable in |
| Franchise partners | Brand-usage rules (19.11), templates, local print approval, audit scorecard, claims | Before launch, then yearly | Half-day session plus partner kit |
| Marketers and agencies | Voice, hard rules, QA, lock/flex, AI rules | Before first brief | Brief plus 30-minute call |
| Stranger test | A freelancer makes a social post, an invoice header and a slide from the guide alone; every question is a gap | Before launch, then yearly | Log gaps in `00-readme/gaps.csv` |

## 19.21 Localisation rules for assets

| Script | Rule |
|---|---|
| Hindi (Devanagari) | Anek Devanagari; line height 1.65; Indic minimum print 8 pt; reserve 40% extra width in labels (verify); native review before release |
| Punjabi (Gurmukhi) | Anek Gurmukhi; line height 1.60; same reviews |
| Bilingual logo | `ct-logo-bilingual-hi-primary.svg` after native review; wording of the Indic descriptor and tagline is not yet approved |
| Marathi | Added when Maharashtra marketing starts; native review first |
| Files | Separate master per language, same drawing, suffix `hi`, `pa` |
| Customer phrases | Keep natural (e.g. "Tank साफ करवाना है"), never machine translated without a native reader |

## 19.22 Rules

```
RULE 19.1:     Treat the Figma file "Clean Tank Brand" as the only source; export every master from it.
CLASS:         MUST
REASON:        Exact and Ordered: one version of every file in every district.
EXACT SPEC:    Source: Figma "Clean Tank Brand". Mirrors: repo /tokens, Drive ct-brand/. Exports never hand-edited.
EXAMPLE:       The printer receives ct-logo-horizontal-primary.pdf exported from the master.
ANTI-EXAMPLE:  A partner redraws the logo from a screenshot in Canva.
TEST:          Does the file name exist in the Drive kit at the current version?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 19.2:     Name every file by the unified pattern.
CLASS:         MUST
REASON:        Exact: findable, sortable, unambiguous.
EXACT SPEC:    ct-<family>-<subject>-<variant>-<colour>-<lang>-<size>-v<NN>.<ext>; lowercase, hyphens, max 80 characters; no "final" or "copy".
EXAMPLE:       ct-wa-amc-reminder-pa-1080x1080-v01.png
ANTI-EXAMPLE:  Final_logo_NEW2.png
TEST:          Does the name match the pattern and fit in 80 characters?
EXCEPTION:     s08 photo underscore form accepted until reissue. Steward approves.
TIER / OWNER:  GUARD / Asset steward
```

```
RULE 19.3:     Change the rule when the same exception is asked for three times.
CLASS:         MUST
REASON:        Restrained and Documented: exceptions never become silent policy.
EXACT SPEC:    Log each request in exceptions.csv; on the third identical request, owner changes or confirms the rule within 10 working days.
EXAMPLE:       Three partners ask for a local phone number on flyers; owner approves a rule with a written approval step.
ANTI-EXAMPLE:  Partners print local numbers because "everyone does".
TEST:          Does the log show a decision for every request?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner
```

```
RULE 19.4:     Print nothing locally before written approval of a proof.
CLASS:         NEVER
REASON:        Ordered: one standard across districts.
EXACT SPEC:    Request, steward check within 2 working days, signed proof, then run. Proof stored in 08a-franchise/local-print-requests/.
EXAMPLE:       A partner sends the A5 flyer PDF; steward approves; printer proof signed; 500 copies run.
ANTI-EXAMPLE:  A partner prints 2,000 flyers with a changed tagline and a new logo colour.
TEST:          Is there a signed proof dated before the print run?
EXCEPTION:     None for public materials. Internal notes may be printed freely.
TIER / OWNER:  LOCK / Central brand owner
```

```
RULE 19.5:     Let partners change only the Authorised Service Provider name and city line, and an approved local phone.
CLASS:         MUST
REASON:        Ordered: one brand, many local operators.
EXACT SPEC:    Fields: [Franchisee Name] | [City / District]; local phone only with written approval. All else locked.
EXAMPLE:       "Sharma Services | Ludhiana" in the franchise lockup, template style unchanged.
ANTI-EXAMPLE:  A partner adds a personal logo beside the Clean Tank symbol.
TEST:          Compare against the template: is any locked region different?
EXCEPTION:     Owner ruling in writing.
TIER / OWNER:  LOCK / Central brand owner
```

```
RULE 19.6:     Give AI tools the hard rules and never accept invented claims.
CLASS:         MUST
REASON:        Honest materials: no invented certifications, approvals, lab results, health claims, specs, credentials, performance or legal status.
EXACT SPEC:    brand.md plus 19.17 in every prompt; human QA before release; prompt log kept.
EXAMPLE:       A drafted caption is edited to add the water-quality qualifier before posting.
ANTI-EXAMPLE:  An AI tool writes "WHO-approved disinfectant" on a flyer.
TEST:          Does every claim trace to INFO-BANK with evidence?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner
```

```
RULE 19.7:     Record every licence and consent before use.
CLASS:         MUST
REASON:        Documented: rights found late cost more than rights recorded early.
EXACT SPEC:    Register row complete (19.15, 19.16); alert 60 days before expiry.
EXAMPLE:       Music for a reel is logged with licence and territory before the reel is posted.
ANTI-EXAMPLE:  A stock photo used past its licence end date.
TEST:          Is there a register row for this asset?
EXCEPTION:     None.
TIER / OWNER:  GUARD / Asset steward
```

```
RULE 19.8:     Issue every reference code from the registry before the item is built or printed.
CLASS:         MUST
REASON:        Documented and Ordered: a code must point to exactly one item.
EXACT SPEC:    Form REF CT-<FAMILY>-<NN> (19.6.1); issued by the steward in 00-readme/ref-codes.csv; never reused; mono caps; never implies a certificate, licence or approval. PROPOSAL until the owner approves the grammar.
EXAMPLE:       "REF CT-PR-05" in the process band footer, with a matching registry row.
ANTI-EXAMPLE:  A partner invents "REF CT-ISO-01" for a flyer.
TEST:          Does the code on the item match a registry row dated before release?
EXCEPTION:     None.
TIER / OWNER:  GUARD / Asset steward (grammar: LOCK / Central brand owner)
```

```
RULE 19.9:     Ship no file with a shadow, a gradient, a radius above 4 px, or an accent fill.
CLASS:         NEVER
REASON:        Restrained: the look is ruled cells, 1 px lines and solid primary bands.
EXACT SPEC:    Radius none 0, xs 2, sm 4 only (default 4); no shadow or gradient tokens; accent (Accent 500 #EE7555) only as Level Line, active step, reference tag or index number, one key figure; primary buttons Primary 700 fill with white label.
EXAMPLE:       Template button: navy fill, white uppercase label, 4 px corners, no shadow.
ANTI-EXAMPLE:  A partner flyer with a coral "CALL NOW" button and a soft drop shadow on the card.
TEST:          Inspect the file: any box-shadow, gradient, radius over 4 px or accent fill? Any yes fails QA items 5 to 7.
EXCEPTION:     None for accent fills and shadows. Radius: circles only for literal round objects (manhole, gauge dial).
TIER / OWNER:  LOCK / Central brand owner
```

## 19.23 Do / Don't

| Do | Don't |
|---|---|
| Download from `ct-brand/` and check the version | Use a screenshot, an old email or a WhatsApp forward |
| Fill only the partner fields in the template | Change layout, colours or type to suit a local taste |
| Ask for approval in writing and wait for the answer | Treat silence as a yes |
| Keep one current version and archive the rest | Leave retired logos downloadable |
| Add the qualifier to health lines | Write "safe" or "bacteria-free" without it |
| Write Pass or Fail beside every audit score | Show audit results by colour alone |
| Log AI prompts and redraw drafts in vector | Publish AI output as final art or as a real photo |
| Use accent only as a marker (Level Line, tag, one key figure) | Fill a button or banner with coral, or use it as a warning |
| Separate with 1 px rules and solid navy bands, corners at 4 px | Add shadows, gradients, 8, 12 or 16 px corners, pills or blobs |
| Take the next reference code from the registry | Make up a REF code or reuse a retired one |

## 19.24 Accessibility & India notes

| Topic | Rule |
|---|---|
| Baseline | WCAG 2.2 AA: 4.5:1 body, 3:1 large text (18 pt, or 14 pt bold) and UI parts |
| Fixes ready | Ship one-colour primary, white reverse and primary logo versions so a contrast failure has an approved fix. Pairs (python-checked): Primary 700 on White 12.83:1, on Stone 11.67:1; Neutral 900 on White 14.83:1, on Stone 13.49:1; Accent 700 on White 6.51:1, on Stone 5.92:1 (tags only); Neutral 600 on White 5.87:1, on Stone 5.33:1; Neutral 500 on White 3.75:1 (control borders only); Accent 500 on White 2.87:1 fails, never text, never a button fill |
| Alt text | Stored with every informative asset (125 characters or fewer), in `en`, `hi`, `pa`; empty alt for decoration |
| Accessible templates | Real headings, live text in PDFs (tagged), minimum sizes (16 px body web, 7 pt Latin and 8 pt Indic print), contrast-checked pairs |
| Motion | Animated assets have a static fallback and honour prefers-reduced-motion; nothing flashes more than 3 times per second |
| Focus | 2 px Primary 700 ring, 2 px offset, radius 4 (white ring on primary bands and photos) |
| Audit and portal | Pass and Fail words beside every score; never colour alone |
| This guide | Provide a tagged PDF of the guide itself and keep headings real |
| Scripts | Native readers check Hindi and Punjabi before release. Test Anek Gurmukhi and Devanagari rendering in Word, Canva and print |
| India | Dates `03 Oct 2026`; rupee sign before number with no space; en-IN grouping (20,00,000 L); phone numbers only from INFO-BANK §1; GSTIN in IBM Plex Mono |

## 19.25 Clean Tank Style on a Page (v2.0)

```
CLEAN TANK SERVICES  STYLE ON A PAGE  v2.0  08 Oct 2026  owner: Central brand owner, Gobind Galaxy
Inherits from: Brand Guide p1 to p11.
Big idea:    Quiet precision. One standard, every tank.
Principles:  Exact · Ordered · Restrained · Documented · Honest materials
Style:       Quiet Utility = utilitarian structure + Japandi restraint. Authoritative, not friendly.
             Humility lives in the words (voice unchanged); authority lives in the visuals.
Sliders 1-5: Warm/Cool 3 · Soft/Sharp 4 · Airy/Dense 3 · Quiet/Loud 1 · Human/Technical 4
             · Still/Lively 1 · Organic/Geometric 5
Descriptor:  Scientific & Mechanized Water Tank Cleaning   Tagline: Clean Tank, Healthy Life.

LOGO        none yet; s02 routes A and B to be drawn to the same constants, owner decides
            optional single accent marker: yes or no is OPEN
            files: ct-brand/01-logo/ct-logo-kit-v2.0 (empty until artwork approved)
            clear space: X = cap height of "T" in CLEAN TANK; ideal 2X, min 1X
            min: horizontal 40 mm / 180 px; small 30 mm / 140 px; symbol 8 mm / 24 px
            never: redraw or trace it, recolour outside the roles, add gloss, shadow or effects
COLOUR      roles: Primary · Secondary (TBD, no value) · Accent · Neutral · State
            Primary   navy #20334B (700)  scale 50..900   ct.color.primary.*
                      headings, primary buttons, header/footer bands, rules, table headers
            Secondary TBD, owner to decide                ct.color.secondary.*
            Accent    coral #EE7555 (500)  600 #C54826  700 #A33C1F   ct.color.accent.*
                      MARKER ONLY: Level Line, active step, reference tags and index
                      numbers, one key figure per view. Never a button fill, never body text
                      on white, never warning or urgency
            Neutral   0 #FFFFFF · 50 #F5F4F1 (stone) · 100 #ECEBE7 · 200 #DEDDD8 · 300 #C7C6C1
                      400 #A9A8A3 · 500 #85847F · 600 #65655F · 700 #4A4B48 · 800 #35383A
                      900 #25282A (text)                  ct.color.neutral.*
            State     info #1B6A8F · error #B01A45 · warning #8A5A00 · success #1E7A3C
                      (fg values) always icon + word      ct.color.state.{info,error,warning,success}.*
            proportion 60 neutral (white + stone) / 30 primary / 10 accent. No gradients.
            backgrounds: mostly white or stone. Navy bands for header, footer, emphasis
            sections, table headers. Never whole-page navy.
            passes: Primary on White 12.83:1 (on Stone 11.67:1), Neutral 900 on White 14.83:1,
            Accent 700 on White 6.51:1 (tags), Neutral 600 on White 5.87:1
            fails: Accent 500 on White 2.87:1 (never text, never a fill under white text)
TYPE        headings: Anek Latin condensed (wdth 78), 700, UPPERCASE, +0.01em, line height
            1.0 to 1.05, max 8 words. Devanagari and Gurmukhi headings: Anek 700, no case change
            body: Anek Latin normal width 400, sentence case, scale ratio 1.2, 16 px at 360
            to 18 px at 1280. h4 sentence case 600
            labels, refs, data: IBM Plex Mono 500/600, UPPERCASE, +0.08 to 0.1em, 11 to 13 px
            (no Indic glyphs: Indic labels use Anek)
            buttons: Anek 700, uppercase, +0.06em, 14 px
            scripts: English, Hindi, Punjabi; line height 1.50 / 1.65 / 1.60
SHAPE       radius none 0 · xs 2 · sm 4 (DEFAULT: buttons, inputs, cards, modals, frames,
            stickers, signage). Tables, rules, grids 0 to 2. Circles only for literal round objects
            NO SHADOWS. Depth = 1 px rules, ruled cells, solid primary bands
            stroke 1, 2, 3 px · square caps, miter joins on lines and icons
            print: sticker and badge ~1.5 mm, folder 2 mm, van panel and signboard square or 4 mm
            step nodes: square (radius 2), outlined, mono "01" to "05"; active filled primary
            with accent underline; step 05 dashed "* Where applicable"
MOTIFS      Level Line: 3 px accent rule, square ends (one per view)
            Reference Tag: REF CT-<FAMILY>-<NN> in mono caps (grammar PROPOSED, 19.6.1)
LAYOUT      base 4 px, rhythm 8 px · strict 12-col grid, columns 4/8/12 · margins 16/32/40
            max width 1200 px · visible 1 px rules between zones · numbered sections (02.1)
            section gap 64 mobile, 96 desktop · one idea per section · touch target 48 (44 min)
            website hero: full-bleed PHOTO + scrim, headline and CTAs on top;
            header fixed or floating: TBD (owner)
BUTTONS     primary: Primary 700 fill, white label · secondary: 1 px primary outline
            on primary bands or photos: white fill, primary label · 44 to 48 px high, radius 4
IMAGERY     photo: still, composed, documentary, honest materials, muted neutral grade
            "Clean Tank Daylight v2" (ctd-v2), people working not posing
            illustration: "Clean Tank Technical Line"
            icons: Lucide, stroke-linecap square, linejoin miter, 1.75 px at 24 + 19 custom
MOTION      70/110/150/240 ms · easing standard (0.2,0,0.38,0.9) · functional only
            "settle" easing only for the Level Line draw · reduced motion: no movement
THEMES      light and dark (primary-based) · tokens: repo /tokens/ct.tokens.json
ACCESS      WCAG 2.2 AA · body 16 px min · focus ring 2 px Primary 700, 2 px offset, radius 4
            (white ring on bands) · state never by colour alone
FRANCHISE   change only: Authorised Service Provider name, city line, approved local phone
FILES       Drive: ct-brand/   Figma: Clean Tank Brand   ASK: admin@cleantankservices.com
```

## 19.26 Launch quality gate (adapted)

| Gate | Clean Tank test | Status Oct 2026 |
|---|---|---|
| Stranger test | A freelancer makes a social post, a WhatsApp card and a certificate from this guide alone, and the owner would ship all three unchanged | Not run |
| Numbers, not adjectives | Logo, colour roles, type, spacing, radius and motion all carry values | Met except logo (artwork pending) and Secondary colour (TBD) |
| Code matches guide | `ct.tokens.json` equals the values in s03, s04, s05, s07, s11, s12 and `brand.md`; no `shadow` string in `/tokens` | Tokens file not yet built |
| Contrast passes | Every pair in the guide passes AA in light and dark; Accent 500 (2.87:1) never used as text or fill | Met on paper; test in templates |
| Scripts covered | Hindi and Punjabi strings set in real layouts, not fallback | Needs native review |
| Smallest and biggest | Logo and type tested at favicon, receipt line, sticker, standee and van | Needs artwork |
| Every surface in 12 months | Web, certificate, sticker, letterhead, card, invoice, job card, tender doc, flyer, brochure, standee, social, WhatsApp, email, deck, uniform, van each have a template or example | Templates to build |
| No shadows, 4 px, accent never a fill | A sample of 10 templates and 10 web screens passes QA items 5 to 7 | Not run |
| Files are findable | All approved files in `ct-brand/` with a which-file table | Folder to create |
| Owner and exceptions | Named owner, exception process and changelog on page one | Owner named by role; person pending |
| Reference codes issued | Every numbered section and record has a registry row (19.6.1) | Proposal, awaiting owner |
| Rights cleared | Licence and consent registers filled for every asset in the kit | Registers to create |

Maturity ladder and build order (adapted):

| Stage | Meaning for Clean Tank | Pillars | Timing |
|---|---|---|---|
| D0 | The brand can launch: logo, colour, type, direction, layout, imagery, essential digital, baseline accessibility | 01 to 04, 07, 08, 13, 18 | Week 1 to 4 |
| D1 | The brand can scale: motifs, illustration, motion, templates, packaging, print, physical, marketing | 05, 06, 09 to 11, 14 to 17 | Months 1 to 3 |
| D2 | The brand works across markets: Hindi, Punjabi, Marathi, franchise kits, production systems | 04, 12, 15, 18 | Months 3 to 9 |
| D3 | The brand is governed in code: tokens pipeline, library governance, `brand.md`, distinctive asset tracking, audits | 12, 19 | Months 6 to 12 |

## 19.27 Day one vs later

| Day one (week 1) | Later |
|---|---|
| One Figma file, one repo folder with `ct.tokens.json`, the `ct-brand/` Drive tree | Storybook and Code Connect, once the component library exists |
| Core logo files (once artwork exists): SVG, mono, white, PNG, favicon set, OG image | Embroidery, vinyl, stamp and bilingual logo files |
| `brand.md`, licence CSV, consent register, exception log | Paid portal when about 20 people or many outsiders need access |
| `ref-codes.csv` with the owner-approved grammar | Reference codes for later families (TECH, FR) as they are needed |
| Certificate, sticker and WhatsApp card templates (LOCK) | Letterhead, card, invoice, job card, tender, flyer, brochure, standee, deck, email (months 1 to 3) |
| Vendor brief for printer; QA checklist; this one-page sheet | Other vendor briefs; first audit (month 6); distinctive asset test (months 6 to 12) |
| Franchise brand-usage rules and the local-print approval step | Franchise partner kit with training deck and quarterly audit |

## 19.28 Checklist

- [ ] Source of truth named (Figma "Clean Tank Brand") with one named steward
- [ ] Drive tree `ct-brand/` created with the numbered folders in 19.4
- [ ] Naming rule published with real examples for every family; s08 photo form reconciled
- [ ] Format matrix and export presets saved (SVG, PDF CMYK, PNG @1x/@2x/@3x, EPS, ICO)
- [ ] Token file `ct.tokens.json` built to CSS and a Tailwind preset with role names (`primary`, `secondary` placeholder, `accent`, `neutral`, `state`); CI compares to `brand.md` and fails on any `shadow` string
- [ ] Templates built with a lock/flex map beside each: certificate, sticker, letterhead, card, invoice, job card, tender, flyer, brochure, standee, social, WhatsApp, email, deck
- [ ] Vendor brief for each vendor type (printer, sign maker, embroiderer, photographer, web developer, agency, AI tools)
- [ ] Lock/flex table and an exception process with a 2 and 3 working day turnaround
- [ ] QA checklist with pass mark (5 critical plus 13 of 16), including no shadows, 4 px radius and accent never a fill
- [ ] Audit scorecard and 6-month cadence for franchise locations
- [ ] Reference-code grammar approved by the owner and `ref-codes.csv` created
- [ ] Changelog v2.0 entry and retirement notice for v1.0 names and values sent to partners and vendors
- [ ] Distinctive asset test planned (annual, at least 100 people)
- [ ] Localisation rules for Hindi, Punjabi and Marathi
- [ ] Licence register with expiry dates and 60-day alerts
- [ ] Rights and consent register with DPDP review by counsel
- [ ] Archive and takedown rule, changelog and owner contact on the readme
- [ ] AI tool rules and prompt log set up
- [ ] Training sessions scheduled for staff and partners
- [ ] Stranger test run and gaps closed

## 19.29 Open items & evidence needed

### Items owned by this pillar

| # | Item | Needed |
|---|---|---|
| 1 | Named people | Central brand owner person, asset steward, operations reviewer: names and contact |
| 2 | Brand channel | Which channel handles questions and exceptions |
| 3 | Response times | 2 and 3 working days, 1 working day for proofs: proposed, owner to confirm |
| 4 | Naming reconciliation | Reissue s08 photo pattern to hyphens, or accept the dual form; confirm s02 and s09 versions |
| 5 | Storage and cost | Drive, Notion or portal choice; monthly ceiling |
| 6 | Franchise agreement | Counsel to word local print approval, withdrawal at partner cost, brand-rights review after a failed audit |
| 7 | Local phone rule | Whether partner phones may appear beyond central contacts (also s11 item 14) |
| 8 | Audit thresholds | 17 of 20, 12 to 16 and the 6-month cadence are starting values; test on the first round |
| 9 | Takedown windows | 14 and 30 days are starting values |
| 10 | Legal | DPDP Rules, consent wording, retention; IP assignment for illustrators |
| 11 | Font terms | Reserved-name terms for Anek and IBM Plex before renamed static TTFs |
| 12 | Tool pricing and seats | Figma Dev Mode, Code Connect and any portal prices (verify before use) |
| 13 | Reference-code grammar | Owner approves or edits the 19.6.1 proposal: families (PR, ILL, CERT, TECH, WEB, SVC, DOC, SOC, FR), digits, who issues CERT serials, retire `PRC` in favour of `PR` |
| 14 | Kit numbering | First kit issued as v2.0 so kit and guide share a number (19.5); owner confirms |
| 15 | Sticker corner alignment | s14 and s16 still show 3 mm corners; s05.13 says about 1.5 mm (sticker, badge) and a fixed 4 mm for van panels and signboards. Reissue s14 and s16 |

### Master Open Items register (cross-pillar)

| Theme | Item | Pillars | Owner of decision |
|---|---|---|---|
| Logo | No logo exists. s02 says draw Routes A "Gauge Tank" and B to the same constants, then owner picks route and designer; drawn proportions, minimum sizes and clear space need confirmation on outlined artwork | 01, 02, 05, 08, 11 | Central brand owner |
| Logo | **Accent marker in the logo: yes or no.** The marker is optional (s02); the logo must work without it | 02, 03, 19 | Central brand owner |
| Logo | Indic names, descriptor and tagline translations; native review; Marathi | 02, 04, 19 | Owner, native reviewers |
| Logo | Does a Gobind Galaxy parent mark exist; may franchisees show their own logo | 02, 19 | Owner |
| Trademark | Class (likely 37) and franchise class, applicant name, fee category; no ® until filed | 02, 03 | Attorney |
| Colour | **Secondary colour: TBD.** Owner decides whether one exists and its value; `ct.color.secondary.*` stays a placeholder and no pair is published until then | 03, 12, 13, 19 | Central brand owner |
| Colour | Pantone, CMYK, vinyl values are estimates; UV fade of accent on stickers and vinyl; uniform dye-lot swatch against `#20334B`; `.ase` and token JSON; APCA not recorded | 03, 08, 14, 15, 16 | Printer, supplier |
| Colour | Error raspberry `#B01A45` beside real accent coral; cultural reading of coral | 01, 03 | Owner, research |
| Web layout | **Header fixed or floating (TBD).** Both specced in s07 (fixed 64 px primary bar; floating transparent over the hero, solid after 80 px scroll); owner picks one | 07, 13 | Central brand owner |
| Type | Anek Gurmukhi x-height check; digit and zero style; Hindi and Punjabi line heights at 360 px; OFL reserved names; `next/font` names and 150 KB cap | 04, 07 | Developer, native reviewers |
| Shape and layout | Sticker size and radius; certificate orientation; print stroke minimums; platform safe zones; 5-element above-the-fold limit; measure caps in `ch` | 05, 07, 14, 15 | Printer, usability test |
| Photography | Pilot shoot and budget; grade values confirmed with references; safety SOP and PPE; women technicians; accent 3% frame cap | 08, 11, 16 | Owner, operations |
| Illustration | Operations reviewer named; technical accuracy of diagrams; budget and illustrator; assignment wording; AI tool approval | 09, 19 | Owner, counsel |
| Icons and info | Custom 19 icons drawn; helmet in `technician` icon unconfirmed; Lucide version pinned; **Lucide rounded-rect patch:** upstream rectangles keep 2 px rounded corners, so decide whether to patch them at build time to square (s10.28) | 10, 13, 19 | Designer, developer |
| Motion and sound | Loudness targets for platforms; frame rate confirmation; Indic caption sizes; voice-over casting; music licence source; sonic logo; IVR; real footage | 11 | Owner, producer |
| Claims | Clean Tank Agent properties, CPWD DSR edition and item, "60% of diseases", any WHO, FDA or government approval: no public use until evidence is seen | all | Owner with evidence |
| Facts | Origin story location (LIC Lucknow vs Kanpur), early dates (Delhi Railway Station 2006 to 08): not in public copy until confirmed | 01, 08, 11 | Owner |
| Clients | Written permission before any client name or logo (LIC, MES, BSNL, AIIMS, IIT Kanpur and others) | 07, 08, 09, 11, 19 | Owner, clients |
| Legal and privacy | DPDP Rules, releases, minors, retention | 08, 11, 19 | Counsel |
| Franchise | Partner phone rule; franchise end cards; local print agreement wording | 02, 11, 19 | Owner, counsel |
| Tokens | s12 token names are written; the DTCG build and `ct.tokens.json` are not yet built; pillars 03 to 19 were revised to v2.0 on 08 Oct 2026 and must be re-aligned on publication | 12, 19 | Developer |
| Reference codes | **Reference code grammar:** `REF CT-<FAMILY>-<NN>`, families PR, ILL, CERT, TECH and others, issuer and registry (19.6.1, proposal); `PR` vs `PRC` conflict with s07 wireframes | 06, 07, 09, 19 | Central brand owner |
| Print | s14 and s16 sticker, badge and van corners still read 3 mm; align to s05.13 (about 1.5 mm, 2 mm, fixed 4 mm) | 05, 14, 16, 19 | Designer, printer |
| Platforms | Sizes and safe zones for WhatsApp, Instagram, LinkedIn, YouTube, OG: verify before use | 02, 07, 11 | Designer |
