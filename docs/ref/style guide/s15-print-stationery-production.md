# Clean Tank Services: Style Guide
# 15. Print, Stationery & Production

> This pillar governs every printed object Clean Tank Services puts in a customer's hand or on a notice board: stationery, quotations, invoices, job cards, tender documents, flyers, brochures, posters, standees, newspaper ads and the rubber stamp. It also governs how artwork is exported, proofed and ordered. Under Quiet Utility, print reads like a spec sheet or test report: white or stone paper, solid primary bands for header and footer zones, condensed capital headings, mono capital reference codes and field labels, ruled field grids, numbered sections, square corners, and no gradients, shadows or rounded panels. Screen colour is backlit and ink is reflective, so a hex value alone is not a print spec, and a wrong run cannot be fixed with a deploy. The brand also prints in many small towns: franchise partners will order from a local press with unknown colour control, so this sheet gives a simple pack rule that keeps one standard in every district. Packaging (certificate folder, tank sticker, agent labels) belongs to s14, and uniforms, vans and signboards belong to s16.

Sheet CT-SG-15 | v2.0 | 08 Oct 2026 (Quiet Utility revision) | Tier legend: LOCK = central brand owner approves any change · GUARD = varies inside stated limits · FLEX = judgment within principles

## 15.1 Principles / inheritance

Big idea: "Quiet precision. One standard, every tank." Principles: Exact, Ordered, Restrained, Documented, Honest materials. Authority lives in the visuals; humility stays in the words (p7).

| Principle | Visual behaviour on paper |
|---|---|
| Exact | One grid per item, same margins every time, 0.5 pt rules, square corners, fixed field order on invoice and job card |
| Ordered | Numbered sections (01, 02.1), ruled field grids, tabular numerals (`tnum`), mono reference code at the top of every record, one franchise print pack |
| Restrained | White or stone paper, one primary band at the head and one at the foot, one accent marker per sheet; no superlatives, no seals, no foil, no tints of accent |
| Documented | Records first: job card, certificate, dated sticker, copy labels on the invoice; each carries a REF code in IBM Plex Mono caps; claims carry qualifiers |
| Honest materials | Matte uncoated or matte coated stock, no gloss, no gradient, no shadow; the paper is allowed to look like paper |

Palette on paper follows the locked 60/30/10, using the v2 role names (s03): Neutral (white `ct.color.neutral.0` and stone `ct.color.neutral.50` `#F5F4F1`) 60%, Primary `ct.color.primary.700` `#20334B` 30%, Accent `ct.color.accent.500` `#EE7555` 10% maximum and marker only, Neutral 900 `#25282A` for text. Secondary (`ct.color.secondary.*`) is TBD and is not used on any printed item; nothing here reserves a value for it. Accent is never body text on white (2.87:1), never a fill block, never a tint, and never signals warning or urgency. Documents print well in one colour (Primary or Neutral 900 only) because many customers photocopy, scan and forward them on WhatsApp.

Print typography (s04): headings Anek Latin wdth 78, 700, UPPERCASE, +0.01em, leading 1.0 to 1.05, at most 8 words; body Anek 400 sentence case; field labels, REF codes, dates on records and numbers in IBM Plex Mono 500 or 600 UPPERCASE, +0.08 to +0.10em. Plex Mono has no Indic glyphs: Indic labels use Anek (no case change). Print uses static TTF instances at wdth 78 (s04).

## 15.2 Item inventory and master spec table

Trim sizes come from s07.7 and are **proposals: confirm with the printer before freezing.** Bleed 3 mm outside trim, safe area 5 mm inside trim, except where stated. "Band" means a solid Primary 700 zone.

| Item | Trim (mm) | Bleed / safe | Stock (verify with swatch book) | Process | Colour | Finish | Min qty |
|---|---|---|---|---|---|---|---|
| Letterhead, pre-printed | 210 x 297 | 3 / 5 | 100 gsm uncoated, natural white | Digital | Primary + Neutral 900, Accent marker | None | 100 |
| Letterhead, office-print PDF | 210 x 297 | None / 8 (printer margin) | Any 80 to 100 gsm office paper | Office laser | Primary + Neutral 900 | None | PDF |
| Visiting card | 90 x 54 (alt. 89 x 51) | 3 / 3 | 350 gsm uncoated or matte uncoated board | Digital, offset at 1,000+ | Primary + Neutral 900, Accent marker | None (matte film only if scuffing shows) | 100 |
| Envelope DL | 110 x 220 | 3 / 5 | 100 gsm uncoated | Digital | Primary + Neutral 900 | None | 100 |
| Envelope C4 | 229 x 324 | 3 / 5 | 100 gsm uncoated | Digital | Primary + Neutral 900 | None | 50 |
| Quotation (A4) | 210 x 297 | None / 8 | 90 gsm uncoated or PDF | Customer or office laser | Neutral 900 + Primary | None | PDF |
| Invoice (A4) | 210 x 297 | None / 8 | 90 gsm uncoated or PDF | Office laser or inkjet | Neutral 900 + Primary | None | PDF |
| Job card (A4, 2-part carbonless optional) | 210 x 297 | None / 8 | 80 to 90 gsm uncoated | Digital or offset pad | Neutral 900 + Primary | Pad glue | 100 |
| Tender document | 210 x 297 | 3 / 5 on cover only | Cover 250 gsm matte coated, inside 100 gsm uncoated | Digital | Primary + Neutral 900 | None | 5 |
| A5 flyer | 148 x 210 | 3 / 5 (12 mm margin) | 130 gsm matte coated or 120 gsm uncoated | Digital, offset at 2,000+ | Full colour, white-led | None | 500 |
| DL brochure (tri-fold) | 297 x 210 flat, 99 mm panels | 3 / 5 (10 mm from folds) | 150 gsm matte coated | Digital, offset at 2,000+ | Full colour | Scored fold | 500 |
| Franchise brochure | A4 folded to A5, 4 to 8 pages | 3 / 5 | 150 gsm matte coated inside, 250 gsm cover | Digital | Primary + Neutral 900, Accent marker | Matte film on cover optional | 100 |
| Poster (A3, A4) | 297 x 420, 210 x 297 | 3 / 5 | 130 gsm matte coated | Digital | Primary + Neutral 900, Accent marker | None | 20 |
| Standee | 800 x 2000 | Per vendor / 30 | Matte flex or matte PVC film (vendor names the stock) | Large-format digital | Full colour | Matte only | 1 |
| Newspaper ad | Per publication column grid | None | Newsprint | Publisher | **1 colour: black** | None | n/a |
| Rubber stamp | 60 x 30 | n/a | Self-inking, vendor die | Photopolymer | 1 colour: Primary ink | None | 1 |

Notes:
- Office printers cannot print to the edge (typically 4 to 5 mm unprintable, verify per machine). Office-print items therefore keep bands inside an 8 mm margin, with no bleed. Pre-printed stock carries the full-bleed bands.
- Visiting card trim: s07 proposes 90 x 54. Indian online printers commonly sell 89 x 51 mm (3.5 x 2 in). Design the card artwork with a 1 mm tolerance so either trim works, and confirm with the vendor before the first run.
- ISO sizes: A4 210 x 297, A5 148 x 210, DL envelope 110 x 220, C4 envelope 229 x 324 (C4 is the ISO 269 size, verify with vendor).
- The tank sticker (100 x 70 mm) is owned by s14. It uses the file and colour rules in this pillar.

## 15.3 Print system: grid, rules, corners, bands

| Element | Spec (all items) |
|---|---|
| Grid | 12 columns on A4 (s07.7), 25 mm outer margins on documents, 4 mm baseline unit for field rows. Record items sit on a visible ruled grid |
| Rules | 0.5 pt (about 0.18 mm) Neutral 300 equivalent (K30, see 15.4) for field grids and table rows; 1 pt Primary 700 for the band edge and section top rules; 3 pt Accent for the Level Line only. Line ends square, joins miter. Office-printed documents never go below 0.5 pt (hairlines drop out). s05 maps the 1 px token to 0.25 pt for scaled artwork; 0.5 pt is the print-floor deviation for documents and is GUARD |
| Ruled field grid | Cells 8 mm tall minimum, label in Plex Mono 500 caps 7 pt (Primary 700) at the top-left of the cell, value in Plex Mono 600 caps or Anek 400 below, 2 mm cell padding, no cell fill except a Neutral 50 stone label row (optional) |
| Section numbers | "01", "02.1" in Plex Mono 600, Accent 700 `#A33C1F` (6.51:1 on White, 5.92:1 on Stone), followed by the heading in condensed caps. Accent here is a reference tag, which is a permitted marker use |
| Reference code | One per record, top right, Plex Mono 600 caps, e.g. `REF CT-QT-0001` (quotation), `CT-INV-`, `CT-JC-`, `CT-TD-`. Numbering schemes are owner decisions (open item 19) |
| Bands | Header band and footer band in Primary 700, full width, square. White type reversed out. Bands are never full pages, never gradient, never rounded. Emphasis bands inside a document (for example the 5-step process band) are allowed once per sheet, with 12 mm minimum height |
| Corners | Paper is trimmed square. Visiting cards: **0 mm (square) is the standard**; an optional 1.5 mm die-cut corner is allowed only as one choice for the whole run and the whole franchise pack, never mixed. Rubber stamp 1.5 mm. Panels, tables and boxes: radius 0 |
| Banned | Gradients, drop shadows, glow, rounded panels, pills, circular badges (except a literal round object), tints of Accent, textures, rays, bokeh, cartoon bacteria |
| Accent marker (max one use class per sheet) | Level Line, or active step, or reference tag, or one key figure. Never a fill block, never a button-like label |

## 15.4 Colour for print

All CMYK and Pantone values below come from s03.3 and are starting points; stone and grey values are new **estimates, not measurements**. **Mark: verify with printer and swatch book. Do not convert HEX to CMYK in software and call it final.**

| Role and step | HEX (screen) | CMYK coated (start) | CMYK uncoated (start) | Pantone C / U (verify) | Total ink |
|---|---|---|---|---|---|
| Primary 700 | `#20334B` | C100 M80 Y35 K45 | C90 M70 Y35 K40 | 534 C / 534 U | 260% coated, 235% uncoated |
| Accent 500 (marker only) | `#EE7555` | C0 M62 Y65 K0 | C0 M58 Y62 K0 | 170 C / 7416 C (pick after swatch book) | 127% coated, 120% uncoated |
| Neutral 900, text | `#25282A` | K90 | K90 | Black 6 C | 90% |
| Neutral 900, solids | `#25282A` | C60 M50 Y45 K85 | K90 | Black 6 C | 240% |
| Neutral 600, muted text | `#65655F` | K70 (estimate) | K70 (estimate) | n/a | 70% |
| Neutral 300, rules | `#C7C6C1` | K30 (estimate) | K30 (estimate) | n/a | 30% |
| Neutral 200, light rule or stripe | `#DEDDD8` | C2 M2 Y5 K14 (estimate) | K15 (estimate) | n/a | 23% / 15% |
| Neutral 100, table stripe | `#ECEBE7` | C0 M1 Y4 K8 (estimate) | K8 (estimate) | n/a | 13% / 8% |
| Neutral 50, stone ground | `#F5F4F1` | C0 M1 Y3 K4 (estimate) | C0 M1 Y3 K4 (estimate) | n/a | 8% |
| Neutral 0, white | `#FFFFFF` | Paper, no ink | Paper, no ink | n/a | 0% |
| Secondary | TBD | TBD | TBD | TBD | TBD |

Stone is a warm light grey. Build it as a printed flat tint on white stock, never by buying cream or ivory stock (a tinted stock shifts every other colour on the sheet). Thin or small content (rules, text, table stripes on office printers) uses the single-channel K version, which gives up the slight warmth in exchange for sharp, registration-safe lines. Wide stone blocks may use the warm four-colour estimate on digital presses only after a proof. Stone is subtle: expect visible run-to-run variation, so never rely on a stone-versus-white edge to carry meaning (the 1 pt rule does that).

| Rule | Value |
|---|---|
| Colour mode | CMYK for all artwork sent to print. Build in RGB only for screen. Convert once, from the master, with the approved ICC profile |
| Output intent (coated) | ECI PSO Coated v3 (FOGRA51), or the profile the vendor names in writing |
| Output intent (uncoated) | A FOGRA47-class uncoated profile, or the vendor's named profile (verify) |
| Black rule | Text and rules under 1.5 pt: single-channel K (K90 text, K70 muted, K30 rules), never rich black. Large solid black areas: C60 M50 Y45 K85 (240% total) |
| Total ink limit | 300% on coated stock (FOGRA51 limit), 240% on uncoated and newsprint (verify with vendor) |
| Primary solids | Header and footer bands on pre-printed stock at full bleed. On uncoated stock keep primary blocks under about 25% of the sheet to avoid mottling and slow drying (verify on proof). Office-print letterheads use a band of 12 mm or less per zone and a one-colour fallback (15.5) |
| Reverse (white out of primary) | Latin 8 pt minimum at weight 500 or heavier, Indic 9 pt minimum at weight 500 or heavier. Never reverse 7 pt text. Plex Mono caps reversed: 8 pt minimum. White on Primary 700 is 12.83:1 |
| Tints | Do not tint Accent. Light areas use Neutral 50 stone (table above) or paper white |
| Delta E tolerance | CIEDE2000 (Delta E 2000) of 3 or less between approved hard proof and run for Primary and Accent on the same stock. Up to 5 accepted on uncoated stock. Stone: visual match on the real stock, no numeric limit until measured. **Proposal, confirm with vendor** |
| Pantone | Not used at launch. Primary and Accent print as CMYK builds. Add a spot only if the proof shows the Primary cannot hold (open item 1, 15.19) |

Contrast on paper (computed, WCAG 2.x formula, applies to ink on paper in good light):

| Pair | Ratio | Use |
|---|---|---|
| Primary 700 `#20334B` on White | 12.83:1 | Headings, rules, table text |
| Neutral 900 `#25282A` on White | 14.83:1 | Body text |
| Primary 700 on Stone `#F5F4F1` | 11.67:1 | Headings on a stone ground |
| Neutral 900 on Stone | 13.49:1 | Body on a stone ground |
| Primary 700 on Neutral 100 `#ECEBE7` | 10.76:1 | Table stripe text |
| White on Primary 700 | 12.83:1 | Bands, reversed headings |
| Accent 400 `#F1876A` on Primary 700 | 5.14:1 | Marker numerals on a primary band only |
| Accent 700 `#A33C1F` on White | 6.51:1 | Section numbers and reference tags |
| Accent 700 on Stone | 5.92:1 | Section numbers and reference tags on stone |
| Neutral 600 `#65655F` on White | 5.87:1 | Muted text (labels of secondary importance, captions) |
| Neutral 600 on Stone | 5.33:1 | Muted text on stone |
| Accent 500 `#EE7555` on White | 2.87:1, **fails** | Level Line and underline fills only, never text |
| Neutral 300 `#C7C6C1` on White | 1.71:1 | Decorative rules only, never text; meaning also sits in the printed label |

## 15.5 Stationery

### Letterhead (A4, 210 x 297 mm)

Two builds, same layout. **Pre-printed** (digital press, bleed 3 mm) carries full-bleed bands. **Office-print PDF/DOCX** carries bands inset 8 mm from the trim with no bleed, and a one-colour fallback: if the office printer cannot hold solid coverage, replace both bands with a 1 pt Primary rule and set the footer text in Primary on white (the layout does not change).

| Zone | Spec |
|---|---|
| Header band | Primary 700, 18 mm tall (pre-printed: from the top trim, full width; office-print: top 8 mm inset). White reversed lockup at 60 mm wide (minimum 52 mm), clear space 2X ideal, left at the 25 mm margin (logo files per s02; reverse version on primary) |
| Level Line | 3 pt Accent 500 horizontal rule, 48 mm long, flush under the header band at the left margin. This is the one accent mark on the sheet. No second accent element |
| Reference and date | Right-aligned, 6 mm below the band: `REF CT-LT-[0001]` and the date as "03 OCT 2026" in Plex Mono 500 caps 8 pt, Primary 700 |
| Body | 25 mm left and right margins; starts 18 mm below the band. Anek 400 sentence case, 10 pt on 14.5 pt leading (Indic 10 pt on 16 pt), left-aligned, ragged right, Neutral 900 |
| Body end | At least 8 mm above the footer band |
| Footer band | Primary 700, 24 mm tall, flush to the bottom (pre-printed: to trim; office-print: bottom 8 mm inset). White reversed text, Anek 500 8 pt, leading 10 pt, 25 mm left margin. GSTIN in Plex Mono 500 8 pt reversed |
| Rules between zones | None other than the band edges. Bands and the whitespace between them are the zoning |

Footer content (exact, from brand-context and INFO-BANK §1; nothing else may be added):

```
GOBIND GALAXY | An Initiative of Gobind Galaxy
Regd. Office: 109/122, Nehru Nagar, R.K. Nagar, Kanpur Nagar-208012, U.P.  |  9453517514
Correspondence & Sales Office: B-3/26, Jamuna Apartments, Ch-Kurali Highway, NH-5,
Khanpur, Kharar, SAS Nagar-140301, Punjab  |  8699339947
gobindgalaxy@gmail.com  |  admin@cleantankservices.com  |  www.cleantankservices.com
GSTIN 09ALFPS1473F5ZU
```

The letterhead carries no ISO line and no tagline; ISO wording appears only on tender documents, brochures and the certificate (see 15.7). Franchise partners use the franchise letterhead variant: franchise lockup (15.6), partner details panel replacing the Correspondence line, central legal footer kept. DOCX build: Anek is installed as the static condensed-instance TTF for headings; PDF remains the source of truth (open item 20).

### Visiting cards (90 x 54 mm, landscape; bleed 3 mm, safe 3 mm; corners 0 mm square)

Front: white. Primary 700 band 12 mm tall across the top, full bleed, with the white reversed lockup at 40 mm wide (horizontal minimum). Below the band: name in Anek 700 caps 11 pt (condensed, Primary 700), role in Plex Mono 500 caps 7 pt, then a two-column ruled contact grid (0.5 pt K30 rules, labels PH, EML, WEB in Plex Mono caps 6.5 pt Neutral 600, values Plex Mono 500 8 pt). Back: Primary 700 full bleed, white lockup or symbol centred on the grid, 3 mm Accent tick 12 mm long (Level Line) as the single marker. The reference ID (technician cards) sits bottom left in Plex Mono caps 7 pt reversed. Latin role names may be caps; Indic text is never forced to caps.

| Card | Front | Back | Contacts allowed |
|---|---|---|---|
| Technician | Band, logo, name, role "SERVICE TECHNICIAN", ID number `CT-TECH-[0000]` (Plex Mono), photo not printed | Primary, symbol, "Clean Tank, Healthy Life" in white | Company line 9453517514 only unless owner approves (open) |
| Franchise partner | Band with franchise lockup (Authorised Service Provider, partner name, city or district) | Primary, wordmark, partner details | Partner's own number needs an owner ruling (open item 5, 15.19); brand-context lists no partner numbers |
| Founder | Band, logo, "Mr. Gurdev Singh", "FOUNDER & CEO" | Primary, symbol | 8699339947, gobindgalaxy@gmail.com, www.cleantankservices.com |

No bilingual card at launch: add Hindi or Punjabi on the back at 8 pt minimum if a region needs it (later).

### Envelopes

| Item | Spec |
|---|---|
| DL (110 x 220) | Logo top left, 40 mm wide, 10 mm from top and left trim. Return address (Regd. Office line only) 8 pt below, Anek 400. Window position for window envelopes: left 20 mm, top 50 mm, 90 x 35 mm (verify with vendor) |
| C4 (229 x 324) | Same logo, 52 mm wide with descriptor, return address both offices. Primary flap band optional (12 mm, square) |
| Colour | Primary + Neutral 900 only. No full-bleed primary on envelopes at launch (vendors print poorly near the glue line) |

## 15.6 Franchise lockup on print

The franchise lockup from p9 and s02 holds on every printed item for a partner:

```
CLEAN TANK SERVICES
Scientific & Mechanized Water Tank Cleaning
Authorised Service Provider
[Franchisee Name] | [City / District]
```

Minimum 52 mm wide on paper. Clean Tank stays primary: the partner line is set at 70% of the descriptor size, Anek 500, never larger than "Authorised Service Provider". No sub-brands, no partner logo beside the lockup (see p9, p11).

## 15.7 Commercial documents

All commercial documents share one frame: a Primary 700 header band (title in condensed caps, white; REF code top right in Plex Mono caps), numbered sections (01, 02, 03), ruled field grids with mono caps labels and mono values, and the legal footer as a Primary footer band or, where the printer cannot hold it, a 1 pt rule with Primary text. Status is a word in the field, never a colour.

### Quotation / estimate (A4)

| Zone | Content |
|---|---|
| Header band | Logo, title "QUOTATION", `REF CT-QT-[0001]`, date, validity period (owner to set), prepared by (ruled cells in the band's lower row) |
| 01 Customer | Ruled grid: NAME, SITE ADDRESS, PHONE, TANK TYPE (domestic, overhead, underground, institutional), CAPACITY (L), NO. OF TANKS, ACCESS NOTES |
| 02 Scope | Table, header row Primary 700 with white Plex Mono caps labels: SERVICE, TANK, CAPACITY, STEPS INCLUDED (the 5-step list, step 5 "where applicable"), QTY, RATE, AMOUNT (₹) |
| 03 Notes | Water quality qualifier, cleaning frequency "set with you based on your organisation", payment terms [owner], taxes [confirm with CA] |
| Footer | Legal footer as letterhead, plus "This is an estimate, not a tax invoice" [wording confirm with CA] |

Never state a price, discount, equipment capacity or timeline that is not approved by the owner; all are fields, not defaults.

### Invoice (A4): GST fields

**Placeholder layout. Confirm every field with the chartered accountant (CA) before use; record the sign-off date: [CA sign-off: ____ / ____ / 2026].** Colour: Neutral 900 and Primary only, and the layout survives black and white (the bands print as dark bands with white text; test on a mono laser). Money in en-IN grouping, ₹ before number, Plex Mono tabular (`tnum`), right-aligned, for example ₹1,25,000.00.

| Zone | Fields (mandatory ones to confirm) | Notes |
|---|---|---|
| Header band | Logo, supplier legal name Gobind Galaxy, address, GSTIN 09ALFPS1473F5ZU (Plex Mono) | Document heading "TAX INVOICE" is optional (Rule 46 does not require the words) |
| 01 Meta (ruled grid) | INVOICE NO. (consecutive serial, up to 16 characters, letters, numbers, hyphen, slash), DATE, PLACE OF SUPPLY (state and code), REVERSE CHARGE (Yes or No) | Date format "03 Oct 2026" on invoices; mono caps "03 OCT 2026" is allowed in grid cells |
| 02 Bill-to / ship-to | NAME, ADDRESS, STATE, RECIPIENT GSTIN if registered | JOB CARD REF cross-reference (`CT-JC-`) |
| 03 Line table | DESCRIPTION, HSN or SAC code (4 digits up to ₹5 crore turnover, 6 above; CA to supply the code), QTY, UNIT, RATE, DISCOUNT, TAXABLE VALUE, CGST and SGST rate and amount, or IGST rate and amount | Service description names the tank and capacity. Stripe rows with Neutral 100 only if the printer holds it, else rules only |
| 04 Totals | Taxable total, tax total, round-off, grand total, amount in words | Plex Mono right-aligned; grand total row may carry the Accent marker as the one key figure (Accent 600, large, only in colour print; optional) |
| 05 Signature block | Authorised signatory, name, designation, rubber stamp area 60 x 30 mm | See 15.9 |
| Footer band | Copy label for paper invoices: "ORIGINAL FOR RECIPIENT" and "DUPLICATE FOR SUPPLIER" (services); legal footer; e-invoice QR and IRN block if e-invoicing applies | Labels do not apply to e-invoices |
| Status words | Status is a word, never colour alone: "Paid", "Due 12 days" | Overdue never red or accent |

Open: whether franchise partners issue invoices under their own GSTIN or Gobind Galaxy invoices centrally. This decides if the partner footer replaces the legal footer on partner invoices. The invoice PDF must be tagged and text-selectable, not an image.

### Service report / job card (A4)

One page, two columns of checks, filled on site by the technician with a pen (Neutral 900 ink, 10 pt minimum labels, boxes 5 x 5 mm, square, 0.5 pt Primary outline). Record form: primary title band, ruled field grid, mono labels.

| Section | Fields |
|---|---|
| Header band | Logo, "SERVICE REPORT / JOB CARD", `JOB NO. CT-JC-[0001]` (Plex Mono), date, branch or partner |
| 01 Customer and site | NAME, ADDRESS, CONTACT, TANK TYPE, CAPACITY (L), NO. OF TANKS, ACCESS AND WATER-OFF ARRANGEMENT |
| 02 Readiness checks (before work) | ☐ Customer or site contact confirmed ☐ Tank type and capacity recorded ☐ Access and water-off arranged ☐ Equipment checked on arrival ☐ Technician in uniform with name badge |
| 03 Five-step checklist | ☐ 01 Dewatering ☐ 02 High-pressure cleaning ☐ 03 Sludge & water removal ☐ 04 Disinfection (antibacterial) ☐ 05 UV treatment: ☐ Done ☐ Not applicable (reason: ____). Step numbers are mono, square; step 05 row has a dashed rule and the note "* Where applicable" |
| 04 Closure checks (after work) | ☐ Cleaning Date Sticker applied with date and due date ☐ Cleaning Certificate issued ☐ Next cleaning date discussed, decision left to the customer ☐ Site left tidy ☐ Customer sign-off |
| 05 Notes | Observations, photos taken (only with consent), limits met on site |
| 06 Signatures | TECHNICIAN, CUSTOMER, DATE |

Readiness and closure items are proposed from Phase 10 and the persona (readiness check, closure check, dated sticker, certificate); the operations lead must confirm the final list [open]. The checklist order is fixed and must not be edited per branch.

### Tender / institutional document

| Element | Spec |
|---|---|
| Format | A4 portrait, 25 mm margins, Anek 400 10.5 pt (s04), headings H1 20 pt, H2 14 pt (Anek wdth 78, 700, caps), fine print 8 pt |
| Cover | Primary 700 band 80 mm tall with white lockup, document title 22 pt white condensed caps, `REF CT-TD-[0001]` in Plex Mono caps; white or stone lower area as a ruled grid: TENDER REFERENCE, DATE, SUBMITTED TO, SUBMITTED BY |
| Section styles | Numbered "01", "02.1" (Plex Mono 600, Accent 700) before each H1; H1 Primary 700 caps with a 1 pt Primary top rule across the column; H2 Primary caps; body Neutral 900; no decorative type. One Accent Level Line, 48 mm, on the cover only |
| Tables | Header row Primary 700 with white Plex Mono 500 caps labels; rows white with Neutral 100 `#ECEBE7` banding (or rules only); 0.5 pt Neutral 300 rules (K30); numbers right-aligned in Plex Mono |
| Required blocks | Company profile, the 5-step process diagram (as a Primary emphasis band, square numbered nodes 01 to 05, step 05 dashed with "* Where applicable"), capacities (domestic up to 20,000 L, commercial overhead up to 20,00,000 L, underground up to 1 crore L), documentation (certificate, dated sticker), quality statement, contacts |
| ISO line (exact) | "ISO 9001:2015 certified (Q2A-UK Certification Board), Certificate No. Q2A-2026-0401T118011, valid to 31 March 2029." Never "accredited". Set 8 pt minimum, Plex Mono for the number |
| Client references | Only names listed in INFO-BANK, spelled as listed, and only after written permission from each client. Permission recorded in the reference log before print |
| Page furniture | Footer: document title left, REF and page number right in Plex Mono caps 8 pt, over a 1 pt Primary rule |
| Water-quality qualifier | Wherever "safe" or health appears: water quality also depends on source water, plumbing, tank condition and later maintenance, which are outside our service |

## 15.8 Collateral

Collateral may use photography (s08: still, documentary, muted neutral grade, people working) but keeps the same frame: white or stone ground, one primary band, condensed caps headline, mono caps tags, square image frames (radius 0 on bleed, 1.5 mm optional only on unbled frames, one choice per item).

### A5 flyer (148 x 210 mm)

Margins 12 mm. Five elements maximum: headline, one line, process strip or one image, brand mark, one phone line first (9453517514). Layout: white ground, Primary 700 header band 22 mm with white lockup, condensed caps Primary headline 28 pt below, Accent Level Line 48 mm, a numbered 5-step strip of square outlined nodes (01 to 05, Plex Mono, step 05 dashed with "* Where applicable"), footer band with the phone line. No sun rays, no bokeh, no red badges, no yellow ground, no gradient, no rounded panels. Bilingual: English block, then Hindi or Punjabi block (s07.10), never side by side on A5.

### DL brochure (297 x 210 mm flat, tri-fold, 99 mm panels)

| Panel | Content |
|---|---|
| Cover | Lockup on a Primary band across the top 40 mm, a plain question or statement as condensed caps headline on white or photo; tagline "Clean Tank, Healthy Life" only as a sign-off |
| Inside left | `01` Why tank cleaning matters, calm explanation with qualifier |
| Inside centre | `02` The 5-step process diagram (s10, D1) as a Primary emphasis band |
| Inside right | `03` Services, tank types, AMC "Never Miss Your Tank Cleaning Schedule" |
| Back | Contacts from INFO-BANK §1 only, ISO line (exact), legal footer on a Primary footer band |

10 mm from folds and edges. Fold-in panel is often 97 mm: confirm scoring with the vendor. Panels are separated by the fold and a 0.5 pt rule, not by boxes.

### Standee (800 x 2000 mm)

| Zone | Spec |
|---|---|
| Margins | 40 mm sides, 100 mm top, bottom 300 mm kept clear for hardware and floor |
| Content | Primary header band with lockup (top 250 mm), question headline in condensed caps, numbered vertical 5-step process (square nodes), contact and QR at 1,200 to 1,600 mm height |
| Colour | White or stone led; Primary bands (header, and one emphasis band) together maximum 30% of height. The old yellow standee style is retired |
| Type | Headline at least 120 mm cap height; body at least 30 mm cap height (read from about 2 m, verify with vendor) |
| File | Vector, 100% at final size or 25% scale at 300 ppi equivalent (vendor decides), outlined type |

### Franchise brochure (A4 folded to A5)

Structure: lockup, what the partner builds, training and support, process standard, one documentation page, **financial page**, contact. Pages are numbered sections with mono REF tags (`REF CT-FR-[00]`). Every figure from INFO-BANK §8 (investment ₹3 to 8 lakh depending on model, royalty 3.5% per month as applicable, indicative ROI 40%+ and payback 4 to 6 months, subject to actual performance, office about 150 sq ft or home-based, agreement 3 years) sits next to the disclaimer, never on a different page, in a ruled field grid (label in mono caps, value in mono):

> All investment, revenue, ROI and payback figures are indicative business projections and are not guaranteed returns unless specifically stated in the executed franchise agreement. Actual results may vary depending on territory, customer acquisition, sales volume, pricing, operating expenses, manpower, local competition and other business conditions.

Disclaimer 8 pt minimum, Neutral 900, same page and same panel as the figures. No coins, cash or money imagery. Dropped lines (flat monthly income, zero royalty, "small investment high profit") never appear.

### Posters for apartment society notice boards (A3, A4)

| Element | Spec |
|---|---|
| Headline | "When was your water tank last cleaned?" Anek wdth 78, 700, caps, Primary, 60 to 80 pt on A3 (Hindi and Punjabi: Anek 700 at wdth 100, no case change) |
| Line | One supporting sentence, for example "If your tank is due for cleaning, we can help you plan the service." |
| Visual | One documentary photograph of a technician at work, square frame, or the 5-step diagram; no dirty-tank shock images |
| Footer band | Primary 700 band 30 mm: lockup, phone 9453517514, website, QR (20 x 20 mm minimum, 4-module quiet zone, Primary on white tile, scan-tested on two phones) |
| Hindi / Punjabi | Separate version per language, same layout; draft headline Hindi "आपकी पानी की टंकी आखिरी बार कब साफ़ हुई थी?", Punjabi "ਤੁਹਾਡੀ ਪਾਣੀ ਦੀ ਟੈਂਕੀ ਆਖ਼ਰੀ ਵਾਰ ਕਦੋਂ ਸਾਫ਼ ਹੋਈ ਸੀ?" (wording to be checked by native speakers) |
| Tone | No urgency words, no exclamation marks, no countdown. RWA decides; the poster only informs |

### Newspaper ad (1-colour, black)

Built as a separate artwork, not a converted colour ad. Black (K100 for text, line art) on newsprint. Lockup in the one-colour black version (s02). The header band becomes a 3 pt black rule above the lockup; the Accent Level Line becomes a 3 pt black rule. Headline 18 pt minimum Latin, 20 pt Indic; body 8 pt minimum Latin, 9 pt Indic (newsprint spread, verify); no reversed text under 12 pt (so no reversed bands carrying small text); no tints under 20% or over 80%; photo screened at the publisher's line screen (ask for lpi, commonly in the 85 to 100 range for newsprint, verify). Contacts and the ISO line exactly as brand-context. Size and column grid come from the publisher's rate card.

## 15.9 Rubber stamp specification

| Item | Spec |
|---|---|
| Shape | Rectangle 60 x 30 mm, corner radius 1.5 mm (square corners if the die maker allows; no round seals: s05 bans seal and badge shapes) |
| Content | Wordmark (one-colour, 40 mm wide minimum), "Gobind Galaxy", GSTIN 09ALFPS1473F5ZU (Plex Mono), "Authorised Signatory" |
| Ink | Primary stamp ink (nearest to `#20334B`, verify on paper) or black |
| Line weight | 0.4 mm minimum stroke (s02, verify with stamp maker); text 7 pt Latin minimum |
| Use | Invoices, job cards, quotations; not on the Cleaning Certificate if the certificate carries a printed signature block |
| Franchise | Partner stamp uses the franchise lockup text only, no logo redraw. Central brand owner approves the die proof |

## 15.10 File and artwork spec

| Item | Spec |
|---|---|
| PDF standard | PDF/X-4 (ISO 15930-7) if the vendor RIP supports it; otherwise PDF/X-1a (flat transparency, CMYK and spot only). Gradients and shadows do not exist in the artwork, so flattening risk is low |
| Fonts | Embedded, or outlined for flyers and posters. Anek and Plex Mono are OFL; keep the font licence files in the logo and font kit (s19). Headings use the wdth 78 static instance; confirm it is embedded, not substituted |
| Raster | 300 ppi at final size minimum; 150 ppi at final size for standee and large-format (vendor decides); line art, logos, rules and icons vector only (square caps, miter joins) |
| Marks | Crop marks offset 3 mm, bleed marks on, no registration marks inside bleed |
| Layers | No hidden layers, no comments, no unused swatches; overprint off except K text |
| Naming | `CTS_<Item>_<Size>_<Lang>_v<major.minor>_<YYYY-MM-DD>.pdf`, for example `CTS_Letterhead_A4_EN_v2.0_2026-10-08.pdf` |
| Delivery | Print-ready PDF plus the vendor brief (15.13). Editable DOCX for letterhead and quotation only, built with Anek; PDF is the source of truth |
| Accessibility | Digital copies of invoices, quotations and certificates are tagged, text-selectable PDFs |

## 15.11 Paper, finish and cost

### Stock and finish rules

| Rule | Value |
|---|---|
| Paper family | One uncoated (natural white) and one matte coated. No cream, no recycled claim until a vendor proves it |
| Finishes | Matte only. Gloss lamination, spot UV, foil, embossing and glitter are not used: they glare on notice boards and contradict Honest materials |
| Signature finish | None at launch. Matte film is allowed on primary covers and card backs only if scuffing shows on proof |
| Stock names | The exact stock name and gsm from the vendor swatch book is recorded in the reorder log at first approval |

### Digital vs offset (cost tiers; quotes are open items)

| Tier | Quantity | Process | When |
|---|---|---|---|
| T1 | 1 to 500 sheets | Digital | Cards, letterhead, job cards, tender copies, proofs |
| T2 | 500 to 2,000 | Digital or short-run offset | Flyers, brochures. Compare two quotes |
| T3 | 2,000 and above | Offset, with a press check | Flyers and DL brochures for a campaign or franchise pack |
| Large format | 1 to 10 pieces | Large-format digital | Standees, posters. Check the vendor's colour on a swatch |

Thresholds are proposals. Record the actual vendor quotes before fixing them.

## 15.12 Proofing and press check

| Step | Who | Check | Pass criteria |
|---|---|---|---|
| 1 Preflight | Designer | Fonts embedded, CMYK, 3 mm bleed, safe 5 mm, 300 ppi, black rule, rules at 0.5 pt or more | Zero preflight errors |
| 2 Soft proof | Designer | Screen proof with the output ICC profile | Primary not shifted to purple; accent not to red |
| 3 Hard proof | Vendor | Printed on the real stock, from the final PDF | Delta E within 15.4, bands solid with no mottling, stone block even, text readable, nothing near trim |
| 4 Sign-off | Central brand owner (Gobind Galaxy) | Compare proof with swatch and spec table | Written approval by message or signature, date and initials |
| 5 Press check | Brand owner or designer, offset runs over 2,000 | First sheets on press | Colour within tolerance, registration, no set-off |
| 6 Delivery check | Receiver | Count, trim, fold, sample against approved proof | Within overs and unders (vendor terms) |

Record in the reorder log: job number, item, vendor, stock and gsm, process, quantity, approved date, delta E result, photo of the approved sample next to the spec.

## 15.13 Vendor brief and franchise print pack

Vendor brief (one page, sent with every job):

```
JOB: [item]  JOB NO.: CTS-P-[0001]  QTY: [ ]  DEADLINE: [ ]
TRIM: [mm]  BLEED: 3 mm  SAFE: 5 mm  ORIENTATION: [ ]
STOCK: [name, gsm, coated/uncoated]  PROCESS: [digital/offset]
COLOUR: Primary 700 #20334B (CMYK per spec table), Accent 500 #EE7555 (marker only),
        Neutral 900 #25282A, Neutral 50 stone #F5F4F1 (flat tint, estimate, proof required)
BLACK RULE: text K90; solids C60 M50 Y45 K85; total ink limit [300/240]%
FINISH: matte only / none   FILE: PDF/X-4 or X-1a, fonts embedded
CORNERS: square trim [or 1.5 mm die-cut, whole run]
PROOF REQUIRED BEFORE RUN: yes (hard proof on real stock)
COLOUR TOLERANCE: Delta E 2000 of 3 or less [verify]
PACKING AND DELIVERY: [ ]  OVERS AND UNDERS: [ ]
APPROVER: [name]   LAST APPROVED: [date, job no.]
```

### Franchise print pack (local printers in tier-2 and tier-3 cities)

Local presses often run CorelDRAW or Photoshop files, convert colour at the RIP, and may not support PDF/X. The rule is: partners do not design.

1. Central issues locked, print-ready PDFs for every approved item. The partner enters only the **local details panel** (partner name, city or district, approved contact), filled in by the central team or through an approved template.
2. Each pack includes: PDFs (PDF/X-1a, the safest option for small presses), a one-page vendor brief, a printed colour reference card (Primary, Accent, Neutral 900 and stone swatches printed on the approved stock), and the Do/Don't strip.
3. The partner never opens, recolours, stretches or rebuilds the logo, never converts to RGB, never adds a finish, never rounds corners or adds shadows.
4. The first order from any new press needs a hard proof on real stock; the partner sends a photo next to the reference card, and the central owner approves in writing.
5. Approved presses are listed in the franchise reorder log. A press that fails the proof twice is replaced.
6. If a local press cannot hold Primary solids, the fallback is the one-colour build: a 1 pt Primary (or black) rule replaces each band and type stays Neutral 900. Never a "close" blue. If it cannot hold stone, print white.

## 15.14 Rules

```
RULE 15.1:     Print every brand item from the approved master PDF, never from a screenshot or WhatsApp image.
CLASS:         MUST
REASON:        Exact. One standard in every district.
EXACT SPEC:    Source file CTS_<Item>_<Size>_<Lang>_v<x.y>_<date>.pdf; CMYK, fonts embedded, bleed 3 mm.
EXAMPLE:       Kharar partner prints the A5 flyer from the pack PDF.
ANTI-EXAMPLE:  Partner prints a WhatsApp-forwarded JPEG; primary turns purple.
TEST:          Does the file name match the pattern and is it a PDF with embedded fonts?
EXCEPTION:     None for public items. Internal drafts may use any format. Central brand owner.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 15.2:     Use the CMYK builds in 15.4 and approve them on a hard proof before any bulk order.
CLASS:         MUST
REASON:        Exact. Screen colour is not print colour.
EXACT SPEC:    Primary 700 C100 M80 Y35 K45 coated, C90 M70 Y35 K40 uncoated; Accent 500 C0 M62 Y65 K0 coated, C0 M58 Y62 K0 uncoated; stone C0 M1 Y3 K4 (estimates, verify).
EXAMPLE:       First card run proofed on 350 gsm stock, dated and filed.
ANTI-EXAMPLE:  Order of 5,000 flyers without a proof.
TEST:          Is there a dated, signed hard proof for this job number?
EXCEPTION:     Reprint of an approved job with the same vendor and stock. Central brand owner.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 15.3:     Set small text and rules in single-channel K, and large black solids in C60 M50 Y45 K85.
CLASS:         MUST
REASON:        Exact. Small text and 0.5 pt rules must stay sharp.
EXACT SPEC:    Text under 1.5 pt: K90 only; muted K70; rules K30 at 0.5 pt minimum. Total ink 300% coated, 240% uncoated and newsprint.
EXAMPLE:       GSTIN in the footer prints crisp; field-grid rules hold on an office laser.
ANTI-EXAMPLE:  8 pt rich-black text with colour fringes; 0.25 pt hairlines that vanish on a photocopy.
TEST:          Does the preflight report show text in a single channel and no rule under 0.5 pt?
EXCEPTION:     Artwork scaled from the 1 px token (0.25 pt) on coated stock, with a proof. Central brand owner.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 15.4:     Use matte finishes only; never gloss lamination, spot UV or foil.
CLASS:         NEVER
REASON:        Honest materials. Gloss glares on notice boards and hides the paper.
EXACT SPEC:    Matte coated or uncoated stock; matte film only on primary covers and card backs if needed.
EXAMPLE:       DL brochure on 150 gsm matte coated.
ANTI-EXAMPLE:  Gloss-laminated flyer with a shiny logo.
TEST:          Does the finish line on the vendor brief read "matte" or "none"?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 15.5:     Never print invoices, quotations or tender documents with claims, contacts or legal text outside the approved footer and ISO wording.
CLASS:         MUST
REASON:        Documented. Documents are evidence.
EXACT SPEC:    Contacts only from INFO-BANK §1; ISO line exactly as brand-context; no "accredited"; GSTIN 09ALFPS1473F5ZU.
EXAMPLE:       Tender cover lists ISO line with certificate number in Plex Mono.
ANTI-EXAMPLE:  A footer with an old phone number or "internationally recognised".
TEST:          Does every phone, email and address match INFO-BANK §1?
EXCEPTION:     Partner details panel on franchise stationery, per owner ruling. Central brand owner.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 15.6:     Print franchise figures only beside the financial disclaimer.
CLASS:         MUST
REASON:        Documented. Projections are not promises.
EXACT SPEC:    Disclaimer in 8 pt minimum, same page and panel as every figure; figures only from INFO-BANK §8.
EXAMPLE:       Franchise brochure financial page with figures and disclaimer in one ruled block.
ANTI-EXAMPLE:  A flyer saying "₹3 lakh, 40% return" with no disclaimer.
TEST:          Is a disclaimer within the same panel as each figure?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 15.7:     Set Indic text at 8 pt minimum and reversed Indic text at 9 pt minimum.
CLASS:         MUST
REASON:        Exact. If the customer cannot read it, the record has failed.
EXACT SPEC:    Latin 7 pt, Indic 8 pt minimum; weight 400 or heavier; Indic leading 1.65 Devanagari, 1.60 Gurmukhi; Indic headings wdth 100, no case change; Indic labels in Anek, not Plex Mono.
EXAMPLE:       Poster Hindi footer at 9 pt.
ANTI-EXAMPLE:  Hindi address line at 6.5 pt copied from the English size.
TEST:          Does preflight show every Indic text frame at 8 pt or more?
EXCEPTION:     None.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 15.8:     Build every printed item in the Quiet Utility frame: primary header and footer bands, condensed caps headings, mono caps references and labels, ruled grids, numbered sections, square corners.
CLASS:         MUST
REASON:        Ordered. A stranger in any district can tell it is the same standard.
EXACT SPEC:    Bands Primary 700, square, never full page; headings Anek wdth 78 caps; labels and REF Plex Mono caps +0.08 to 0.10em; rules 0.5 pt; corners 0 mm (cards 0 or one run-wide 1.5 mm choice); no gradient, shadow, rounded panel, pill or circular badge.
EXAMPLE:       Job card with a primary title band, REF CT-JC-0412, ruled customer grid and square 5 mm tick boxes.
ANTI-EXAMPLE:  A flyer with a rounded navy panel, a soft shadow and a navy-to-blue gradient.
TEST:          Does the item show a REF code, ruled fields or numbered sections, and none of the banned effects?
EXCEPTION:     Newspaper one-colour ad (bands become rules). Central brand owner.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 15.9:     Use Accent only as a marker: the Level Line, an active step, a reference tag or number, or one key figure per sheet.
CLASS:         NEVER (accent as fill, tint, body text, button, badge or warning)
REASON:        Restrained. Accent 500 on White is 2.87:1 and urgency is not the brand.
EXACT SPEC:    Level Line 3 pt Accent 500, 48 mm; text uses Accent 700 `#A33C1F` (6.51:1 on White, 5.92:1 on Stone) or Accent 400 on Primary (5.14:1); at most 10% of the area.
EXAMPLE:       Letterhead with one Level Line under the header band; section numbers in Accent 700.
ANTI-EXAMPLE:  A coral "BOOK NOW" label block on a poster.
TEST:          Does Accent appear only as a line, number or tag, and only once as a line per sheet?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

## 15.15 Do / Don't

| Do | Don't |
|---|---|
| Design in CMYK, with bleed 3 mm and safe 5 mm | Design in RGB and convert at the last minute |
| Proof on the real stock before a run | Trust the screen or a photo of a screen |
| Keep white or stone dominant, one primary header band, one primary footer band | Make a whole page navy, or add rounded panels, gradients or shadows |
| Put REF codes and field labels in Plex Mono caps, headings in condensed caps | Mix in script, rounded or decorative faces |
| Use ruled field grids and numbered sections for records | Use coloured boxes or icons to separate fields |
| Use one accent Level Line or number as the marker | Fill areas with accent, tint it, or use red or orange urgency badges, yellow grounds, rays |
| Use matte or uncoated stock | Use gloss lamination, foil or spot UV |
| Put the disclaimer beside every franchise figure | Print franchise figures alone |
| Use the exact ISO wording | Write "accredited" or "internationally recognised" |
| Name clients only with permission and in listed spelling | Print client logos from the web |
| Tick boxes and words for status | Show status by colour alone or in red |
| Send franchise partners locked PDFs | Let a local press rebuild the logo |

## 15.16 Accessibility & India notes

- Body text on paper at 4.5:1 or better: Primary on White 12.83:1, Neutral 900 on White 14.83:1, on Stone 13.49:1. Muted text Neutral 600 5.87:1 on White (5.33:1 on Stone). Accent 500 is never text (2.87:1); Accent 700 for small numbers.
- Printed body 10 pt minimum on documents and tenders (10.5 pt), 8 pt minimum on cards. Indic text 8 pt minimum, reversed Indic 9 pt. Never reverse text under 8 pt out of colour; mono caps labels reversed are 8 pt minimum. Mono caps labels on white are 6.5 pt minimum on cards, 7 pt on documents.
- Condensed caps headings stay short (8 words maximum) so they remain easy to read; running text is never set in caps or condensed.
- No foil or spot UV over critical text. Matte stock reduces glare for low-vision readers.
- Tagged, text-selectable PDFs for invoices, quotations and certificates. Offer a large-print version (14 pt) of the job card and certificate on request.
- Never carry meaning in colour alone: "Due 12 days" is a word, step 05 is "UV treatment (where applicable)" with a tick box and a reason field, and the stone-versus-white edge never carries meaning on its own.
- Bilingual print: English block first, Hindi or Punjabi block beneath, 8 pt gap (2 mm), same meaning. No Indic letter-spacing, no justification, `hyphens: manual`. Plex Mono has no Indic glyphs, so Indic labels use Anek. Check proofs with a native reader.
- India specifics: ₹ before number with en-IN grouping (₹20,00,000), dates "03 Oct 2026", GSTIN in Plex Mono, A4 not US Letter, tier-2 and tier-3 vendors may not run colour-managed workflows.

## 15.17 Day one vs later

| Day one | Later |
|---|---|
| Letterhead (PDF and DOCX), visiting card spec, one invoice template (PDF), job card, quotation template | Envelope runs, compliment slip, folders |
| One-page print colour table (this sheet), hard proof of the card and letterhead including band solids and the stone tint | Offset runs with press check, ICC calibration |
| Vendor brief, reorder log, one local vendor | Second vendor, written turnaround terms |
| A5 flyer and one poster (English) | DL brochure, standee, Hindi and Punjabi versions |
| Franchise print pack v1 (letterhead, card, flyer) | Franchise brochure print run, partner stamp dies |
| Rubber stamp | Premium finishes, recycled or FSC claims, e-invoice layout change |

## 15.18 Checklist

- [ ] Trim, bleed and safe zone per item confirmed with the printer, with a dieline diagram
- [ ] Stock name, gsm and coated or uncoated recorded for each item from the swatch book
- [ ] Process chosen per item (digital, offset)
- [ ] CMYK, Pantone C and U for Primary, Accent, Neutral 900 confirmed on a hard proof (currently "verify")
- [ ] Stone and grey CMYK estimates (Neutral 50 to 600) proofed on the real stock and corrected
- [ ] ICC profile and PDF/X version agreed with the vendor
- [ ] Black rule: K90 text, K30 rules at 0.5 pt, rich black solids, ink limit confirmed
- [ ] Header and footer bands hold solid on the chosen stock; office-print one-colour fallback tested
- [ ] Finish layers: matte only, named on the vendor brief
- [ ] Card corner choice recorded (0 mm standard, or 1.5 mm for the whole run)
- [ ] Every record item shows a REF code, ruled field grid and numbered sections
- [ ] Headings in condensed caps, labels and refs in Plex Mono caps; Indic labels in Anek
- [ ] No gradient, shadow, rounded panel or accent fill anywhere in the artwork
- [ ] Annotated invoice layout with every GST field, CA sign-off date recorded
- [ ] Letterhead footer checked against INFO-BANK §1
- [ ] Job card has readiness checks, 5-step tick boxes, closure checks
- [ ] ISO line exact on tender, brochure and certificate
- [ ] Franchise figures only with the disclaimer beside them
- [ ] Indic text 8 pt minimum (reversed 9 pt)
- [ ] Proof sequence and named approver in place
- [ ] File naming and delivery format followed
- [ ] Vendor brief and reorder log created
- [ ] Photo of approved sample filed next to the spec
- [ ] Franchise print pack issued

## 15.19 Open items & evidence needed

| # | Item | Needs |
|---|---|---|
| 1 | CMYK, Pantone and Primary hold on uncoated stock | Vendor swatch book and hard proof; add a Pantone spot only if needed |
| 2 | Card trim 90 x 54 vs 89 x 51; corner 0 mm vs 1.5 mm | Vendor confirmation; owner confirms the 0 mm standard |
| 3 | GST fields, SAC code, quotation wording, copy labels, e-invoicing status | CA sign-off |
| 4 | Who invoices: Gobind Galaxy or franchise partner under own GSTIN | Owner ruling |
| 5 | Contacts allowed on technician and partner cards | Owner ruling; brand-context lists only the two phones and two emails |
| 6 | Job card readiness and closure items, final order | Operations lead |
| 7 | Client references on tenders | Written permission per client |
| 8 | Clean Tank Agent properties (non-toxic, eco-friendly, 3-month effect), CPWD DSR inclusion, "60% of diseases" stat, any government approval | Evidence before any print use; not used here |
| 9 | Origin story location (Lucknow or Kanpur) and early dates | Not used in print; do not print until confirmed |
| 10 | Hindi and Punjabi poster headlines | Native-speaker review |
| 11 | Newsprint line screen and ad size | Publisher rate card |
| 12 | Stock names, gsm, vendor quotes, T1 to T3 thresholds | Vendor quotes |
| 13 | Rubber stamp line weight, corner (1.5 mm or square) and ink colour | Stamp maker |
| 14 | Standee and large-format resolution | Vendor |
| 15 | FOGRA profile the vendor runs; 300% limit and 240% uncoated limit | Vendor written confirmation |
| 16 | Delta E tolerance values, including a stone tint tolerance | Vendor agreement and measured proofs |
| 17 | Window envelope position and C4 size | Vendor |
| 18 | Logo artwork for print, including the reversed version on primary; all positions assume the final route (s02) | Final logo files |
| 19 | REF code schemes (CT-QT, CT-INV, CT-JC, CT-TD, CT-LT, CT-FR, CT-TECH) and who issues serials | Owner and operations lead |
| 20 | Static wdth 78 Anek instance for DOCX and for presses; OFL reserved-name terms | s04 open item; font kit check |
| 21 | Stone and grey CMYK values are estimates; Neutral 50 may not be visible on some uncoated stock or office printers | Hard proofs; fall back to white |
| 22 | Print rule floor 0.5 pt vs s05 token 0.25 pt on paper | Owner confirms 0.5 pt for office-printed documents |
| 23 | Secondary colour (TBD): no print role reserved | Owner decision, then update 15.4 |
