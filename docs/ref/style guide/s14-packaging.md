# Clean Tank Services: Style Guide
# 14. Packaging & Service Kit

> Clean Tank sells a service, so its "packaging" is the physical record and kit that the customer and the technician touch: the Cleaning Date Sticker on the tank, the Cleaning Certificate, the envelope or folder that carries it, the label on any Clean Tank Agent container, the technician's bag and equipment tags, and the franchise welcome kit. Under the v2 big idea, "Quiet precision. One standard, every tank.", these items are built as spec sheets and test labels: a solid primary title band, a ruled field grid, mono values and a reference code. This pillar fixes size, material, print, colour, type and compliance placeholders for each, so a sticker fitted in Kharar and a certificate issued in Kanpur read the same. Nothing here is a retail pack; there is no shelf, so the blueprint's shelf, barcode and marketplace parts are reduced to what applies.

Sheet CT-SG-14 | v2.0 | 08 Oct 2026 (Quiet Utility revision) | Tier legend: LOCK = central brand owner approves any change · GUARD = varies inside stated limits · FLEX = judgment within principles

All materials, sizes, finishes and CMYK values below are proposals. **Verify with vendor and a signed physical proof** before any bulk order. Nothing in this pillar is a regulatory opinion: every compliance field is a placeholder for the compliance reviewer.

## 14.1 Principles and inheritance

| v2 principle | Behaviour in the service kit |
|---|---|
| Exact | One construction per item, same sizes, stock and wording in every district. Dimensions in mm, rules at fixed weights, fields in a fixed order on sticker and certificate. |
| Ordered | Ruled cells, numbered steps 01 to 05, mono reference codes (`CT-CERT-0001` style, format Open), the same field order everywhere. |
| Restrained | White or stone ground, one primary band, one accent marker per record. No badges, seals, ribbons, starbursts or "certified best" language (s05). |
| Documented | The record is the hero: dates, serials, certificate and technician IDs in mono. Dates are recommended, not promised. The water-quality qualifier travels with every health-adjacent line. |
| Honest materials | Matte stock, matte laminate, flat solid print. No gradient, gloss, foil, emboss, shadow or fake depth. |

Humility lives in the words (voice unchanged); authority lives in the structure. Franchise operators fill fields; they do not redesign.

Inherited locks: Primary `#20334B` (`ct.color.primary.700`), Accent `#EE7555` (`ct.color.accent.500`, marker only), Neutral white `#FFFFFF` and stone `#F5F4F1` (`ct.color.neutral.0` / `.50`), Graphite `#25282A` (`ct.color.neutral.900`) (s03). Headings and band titles in Anek Latin condensed (wdth 78) 700 caps; labels, dates, IDs and serials in IBM Plex Mono caps, slashed zero (s04). Indic labels in Anek (Plex Mono has no Indic glyphs). Physical radius: sticker and badge about 1.5 mm, folder 2 mm, certificate square, van panels and signboards square or fixed 4 mm (s05.13). Line ends square. Record Block per s06.5. Logo versions per s02. Icon and information hierarchy per s10.

## 14.2 Kit inventory (what we make, who touches it)

| # | Item | Level | Format | Corners | Who touches it | Owner |
|---|---|---|---|---|---|---|
| 1 | Cleaning Date Sticker | Record on the tank | 100 x 70 mm | About 1.5 mm | Customer (years), next technician | Central brand owner |
| 2 | Cleaning Certificate | Record to customer | A4 portrait, PDF and print | Square | Customer, RWA, institution, auditor | Central brand owner |
| 3 | Certificate envelope (day one) / folder (later) | Carrier | C4 envelope / A4 pocket folder | Envelope standard; folder 2 mm | Customer | Central brand owner |
| 4 | Clean Tank Agent container label | Primary, only if repackaged | Container-dependent | About 1.5 mm | Technician | Compliance reviewer plus owner |
| 5 | Technician kit bag, case, asset tags | Operational | Bag about 450 x 250 x 250 mm (proposal); tag 50 x 25 mm | Tags about 1.5 mm | Technician; customer sees it arrive | Central brand owner |
| 6 | Franchise welcome kit box | Secondary, unboxing | Mailer about 340 x 250 x 80 mm (proposal) | Square (die-cut) | Franchise partner | Central brand owner |

Not applicable to Clean Tank: retail barcode (EAN-13), MRP on pack, variant colour coding, store icon and screenshots, thumbnail test strip. Reason: nothing here is sold on a shelf or a marketplace. Revisit only if Clean Tank Agent is ever sold at retail (Open, 14.17).

## 14.3 Lock, flex, navigate, scale

| Layer | Rule for the service kit |
|---|---|
| Lock | Logo version per item (14.2 and s02), primary title band, white ground, ruled field order, mono value style, ISO wording where allowed, qualifier text, type families, contact numbers from `src/site.ts` only. |
| Flex | Customer and site data, dates, serial and certificate numbers, technician name and ID, franchise block text, language pair (English plus Hindi or Punjabi). |
| Navigate | Item type is found by format and printed title ("CLEANING RECORD", "CLEANING CERTIFICATE"), never by colour alone. Language is shown by script, not colour. |
| Scale | Sticker below 100 x 70 mm is not allowed. Equipment tags use the 50 x 25 mm layout or symbol only (min 8 mm, s02). A5 certificate summary is a later item, not a shrunk certificate. |

## 14.4 Item 1: Cleaning Date Sticker (100 x 70 mm), ruled spec tag

The sticker is the Record Block (s06.5) at print size: a test label with a primary title band, two ruled date fields and a reference row.

### Structure and layout

| Spec | Value | Source or note |
|---|---|---|
| Trim | 100 x 70 mm, landscape, corner radius about 1.5 mm | s05.13 (vendor confirms die) |
| Outer border | 2 px Primary 700 = 0.75 mm on vinyl, inside the trim, at least 0.5 mm | s05.4, s06.5 |
| Bleed / safe | Bleed 2 mm, safe 3 mm, inner margin 5 mm | s07 (printer confirms) |
| Grid | 2 columns, ruled cells, inner rules 0.5 mm Primary 700 (vinyl minimum), inner corners square | s06.5 |
| Rows (top to bottom) | Primary title band **14 mm** · date fields **34 mm** · reference row **17 mm** = 65 mm, then a 5 mm white foot margin = 70 mm | s06 and s07 rows 14 / 34 / 17. The 5 mm foot margin balances the 5 mm side margins; confirm at first proof (Open 17) |
| Ground | White `#FFFFFF`, about 75% of area. No stone on vinyl (no print value set for stone) | s03 |
| Accent | **One 3 px (1 mm on vinyl) Accent 500 underline marker**, square ends, in the reference row (below). No coral band, no coral fill | s05, s06 |

**Row 1, primary title band (14 mm).** Fill Primary 700, radius 0 inside the border. Left: "CLEAN TANK SERVICES" in Anek Latin 700, wdth 78, caps, +0.01em, 12 pt, white. Right: "CLEANING RECORD" in IBM Plex Mono 500, caps, +0.08em, 7 pt, white. Text sits inside the 5 mm margin. Once the logo exists (s02), the reverse small-use logo replaces the left text; the mono title stays. White on Primary 700 12.83:1.

**Row 2, date fields (34 mm).** Two equal cells (50 mm each), White, 4 mm cell padding, left aligned. Each cell, top to bottom: label in Plex Mono 500 caps +0.08em 7 pt Neutral 600 ("CLEANED ON", "NEXT DUE (RECOMMENDED)"); value in Plex Mono 600 caps, tabular, slashed zero, **16 pt Primary 700**, format `03 OCT 2026`; Indic label in Anek 600, 8 pt, no case change (Hindi "सफाई की तारीख", "अगली सफाई की तारीख"; Punjabi "ਸਫ਼ਾਈ ਦੀ ਤਾਰੀਖ਼", "ਅਗਲੀ ਸਫ਼ਾਈ ਦੀ ਤਾਰੀਖ਼"; draft, native review needed). Values are written with a permanent marker or label-printed; pre-printed `DD MON YYYY` guide ticks keep handwriting inside the cell. Sample dates in any mock-up are labelled "Sample" and are not a frequency recommendation.

**Row 3, reference row (17 mm).** Ruled strip with a full-width 0.5 mm rule above. Two sub-rows. Upper (10 mm), two cells: `CERT NO.` and `TECH ID`, label Plex Mono 7 pt Neutral 600, value Plex Mono 600 9 pt Primary 700 (written or label-printed; the certificate number matches the certificate). The **3 px Accent 500 underline marker** sits 4 px (1.2 mm) below the CERT NO. value, value width, square ends: it marks the reference that joins sticker and certificate. The marker is not text and the number is also written in text. Lower (7 mm): one contact number in Anek 600, 10 pt, Primary 700 (which of the two office numbers in `src/site.ts` prints is Open); right: `SERIAL` and the pre-printed sticker serial, Plex Mono 7 pt, slashed zero.

Fit check: `03 OCT 2026` is 11 characters. Plex Mono advances 0.6 em, so at 16 pt it is about 37 mm against 42 mm usable (50 mm cell minus 2 x 4 mm padding). Floor is 14 pt (s06); never above 16 pt (it will not fit). If the first proof overflows, drop to 14 pt and tell s04 and s06.

### Information hierarchy (s10.19)

| Rank | Content | Type | Pre-printed or written |
|---|---|---|---|
| 1 | Cleaned on, date | Plex Mono 600 16 pt tabular Primary 700, label 7 pt | Written or label-printed per job |
| 2 | Next due (recommended), date | Same as rank 1 | Written or label-printed per job |
| 3 | Technician ID; Authorised Service Provider ID on franchise jobs | Plex Mono 600 9 pt | Written |
| 4 | Contact: one number | Anek 600 10 pt | Pre-printed |
| 5 | Certificate number of this job | Plex Mono 600 9 pt, accent underline marker | Written; matches certificate |
| 6 | Sticker serial number | Plex Mono 7 pt, slashed zero | Pre-printed, unique per sticker |
| 7 | Optional QR | Black on white, min 20 x 20 mm, 4-module quiet zone (verify) | Later: only after a record page exists |

Hindi and Punjabi run as separate sticker versions, not three scripts on one label. English label above, Indic label below, 8 pt minimum. Allow 20 to 30% longer Indic text; wrap, never truncate.

**The sticker carries no ISO line, no health claim and no urgency wording** (s10). The endorsement line "An Initiative of Gobind Galaxy" is not printed on the sticker front (s02).

### Material, adhesive and print (all verify with vendor)

| Layer | Proposal | Why |
|---|---|---|
| Face | White UV-stable polymer vinyl, about 80 to 100 micron | Rooftop sun, rain and heat |
| Overlaminate | Clear matte UV laminate, about 25 to 50 micron; surface accepts a permanent paint marker (test) | Protects ink, supports write-in; no gloss (s01, s05) |
| Adhesive | Permanent, outdoor-grade acrylic; separate grades for (a) polyethylene plastic tanks (low surface energy), (b) painted or plain concrete, (c) metal and FRP | One adhesive rarely suits all surfaces |
| Liner | Silicone-coated paper, easy peel | Applied on a ladder or roof |
| Print | Digital UV-curable or eco-solvent for short runs; screen print for later volume | Short runs first |
| Colour | Primary C100 M80 Y35 K45, Accent C0 M62 Y65 K0 (coated starting values from s03; Pantone 534 C and 170 C or 7416 C to confirm) | Do not convert HEX to CMYK in software and call it final |
| Durability test | Outdoor UV fade and rain test on the real stock before the first order, including the 1 mm accent line and thin mono text; target life not yet defined | s03: accent fade untested |
| Format | Single stickers on a sheet or roll in lots of 50; technician carries a counted set | Counted issue stops loose stickers circulating |

Surface rules for the technician: clean and dry the patch, avoid seams, ribs and fill points, fit on the front wall of the tank at about eye level if safe (exact placing is Open), press from the centre outward. If a sticker will not hold (wet, flaking paint), place it on the nearest fixed clean surface and record the location on the certificate.

### Tamper and record control

| Option | Day one | Later |
|---|---|---|
| Pre-printed unique serial number | Yes | Yes |
| Write-in dates and technician ID | Yes (permanent paint marker) | Variable-data print from a portable label printer |
| Destructible or "void if removed" vinyl | Optional, ask vendor | Decide after cost and field test |
| QR to verify the record | No | Yes, once the record page exists (Open) |

Serial numbers are issued in batches against a register kept by Gobind Galaxy; each certificate lists the sticker serial. Format of serial and certificate numbers is Open (14.17).

## 14.5 Item 2: Cleaning Certificate (A4 portrait), test-report form

### Layout (s07 wireframe 5, with measurements)

Margins 20 mm all sides, content width 170 mm, 6-column grid, 5 mm gutter. Square corners throughout. Left aligned except the title line (s07). Paper white; no banding, no stone fill (ruled cells carry the structure). Ruled grid: 0.25 pt rules in Primary 700 (`ct.color.border.strong`), cells White.

| Zone | Position (mm from top) | Content | Type |
|---|---|---|---|
| Primary title band | 0 to 35 (bleed 3) | Fill Primary 700. Left at 20 mm margin: reverse lockup per s02 (until the logo exists, "CLEAN TANK SERVICES" text), clear space X. Right: certificate number, `CERT NO. CT-CERT-0001` (format Open), Plex Mono 600 caps 10 pt, white. Below, title "CLEANING CERTIFICATE" in Anek Latin 700 wdth 78 caps, 24 pt, white, centred (4 words or fewer); Hindi or Punjabi title beneath, Anek 700, no case change (native review) | s04, s06.1 |
| Reference line | 40 to 46 | `REF CT-DOC-01` and `ISSUED 03 OCT 2026`, Plex Mono 500 caps 8 pt, Neutral 600 | Reference Tag |
| Field grid | 50 to 116 | Ruled **3-column** grid, 56.67 mm columns, five rows (below) | s06.5 |
| Process record | 122 to 152 | Section label "02 PROCESS RECORD" (mono), then the steps row 01 to 05 (below) | s06.2 |
| Notes | 158 to 180 | Ruled box, 3 lines, sticker location and remarks, 10 pt | |
| Sign-off | 186 to 212 | Signature box 55 x 20 mm, stamp box 45 x 20 mm, "STICKER FITTED: YES / NO" with two square checkboxes, 8 pt mono labels | |
| Footer | 240 to 277 | 0.25 pt rule above; qualifier, ISO wording, GSTIN (`src/site.ts`), endorsement, contacts, 8 pt | |

Positions are starting points; confirm at proof.

**Field grid (3 columns, label above value).** Label: Plex Mono 500 caps +0.08em 7 pt, Neutral 600. Value: Plex Mono 600 caps, tabular, slashed zero, 10 pt, Primary 700 (long text such as an address may use Anek 500 10 pt). Cell padding 3 mm.

| Row (height) | Column 1 | Column 2 | Column 3 |
|---|---|---|---|
| 1 (12 mm) | CERTIFICATE NO. | CLEANED ON, `03 OCT 2026` | NEXT DUE (RECOMMENDED) |
| 2 (18 mm) | CUSTOMER AND SITE ADDRESS, spans all three columns | | |
| 3 (12 mm) | TANK TYPE | CAPACITY, en-IN style (`20,000 L`) | PO / WORK ORDER NO. (institutions; else blank) |
| 4 (12 mm) | TECHNICIAN | TECH ID | AUTHORISED SERVICE PROVIDER ID (franchise only) |
| 5 (12 mm) | STICKER SERIAL | STICKER LOCATION | CLEAN TANK CONTACT (`src/site.ts` only) |

The same **3 px (1 pt on paper) Accent 500 underline marker** as on the sticker sits under the CERTIFICATE NO. value, value width, square ends. It is the only accent on the sheet.

**Steps-completed row.** A ruled row of five equal cells (34 mm), one per step, in the process order. Each cell: mono numeral `01` to `05` (Plex Mono 600 9 pt, Primary 700), the step name in Anek 600 8 pt sentence case, and a square checkbox (3.5 mm, 0.5 pt Primary 700 outline, radius 0, "DONE") that the technician ticks. Cell 05 carries two checkboxes, "DONE" and "N/A", and the note "* Where applicable".

| Cell | Step name (exact) |
|---|---|
| 01 | Dewatering |
| 02 | High-pressure cleaning |
| 03 | Sludge & water removal |
| 04 | Disinfection (antibacterial) |
| 05 * | UV treatment (where applicable): DONE or N/A |

Steps 01 to 04 must be ticked; step 05 must have one of the two boxes ticked. Digital PDF: ticks are form fields or stamped marks, never icons without text.

### Mandatory text (exact)

Qualifier, in the footer, 8 pt, Neutral 700 `#4A4B48` (8.78:1 on White) or Graphite:

> Water quality also depends on source water, plumbing, tank condition and later maintenance, which are outside our service.

ISO line, allowed on the certificate only, 8 pt, exactly:

> The ISO line from docs/PRODUCT.md (Claims), filled from `src/site.ts`.

Never "accredited", "internationally recognised", UKAS or IAF. Never print "safe", "bacteria-free", "guaranteed" or "best". The certificate states what was done and when, not what the water will be.

### Security features

| Feature | Spec | Note |
|---|---|---|
| Unique certificate number | Plex Mono in band and field grid | Sequential or coded; register held centrally |
| Signature | Wet signature of technician or supervisor in the 55 x 20 mm box | Ink blue or black, not red |
| Stamp | Rectangular office stamp, one colour primary or black, stroke 0.4 mm or more (verify with stamp maker) | No round seal graphic (s05) |
| Sticker serial cross-reference | Printed in the field grid | Links the two records |
| Optional QR | Later, bottom right of footer, 20 x 20 mm | Needs a record page and data policy (Open) |
| Pre-printed shell | Title band, grid rules and static labels on stock; variable data printed after | Harder to copy, uniform band |

### Material, print and delivery

| Spec | Proposal (verify) |
|---|---|
| Stock | 130 gsm or heavier matte or uncoated white. If printing variable data on a desktop laser or inkjet, confirm the stock suits that printer; otherwise 120 gsm uncoated, with a proof of the primary band |
| Print | Offset or digital CMYK for the shell; Primary C100 M80 Y35 K45; accent marker C0 M62 Y65 K0 |
| Finish | No varnish, foil, emboss or gloss |
| Digital copy | PDF/A-style export (verify), fonts embedded, text live, tagged for reading order; shared on WhatsApp and email |
| Tender and institution version | Same layout, same fields; the PO / WORK ORDER NO. cell is filled (a field, not a claim) |

### Franchise version

| Element | Rule |
|---|---|
| Title band | Clean Tank lockup stays primary at full size |
| Provider block | Under the lockup in the band, white: "Authorised Service Provider" then "[Franchisee Name] / [City / District]" (Phase 9 lockup), Anek 600 9 pt, never larger than the descriptor |
| Fields | Authorised Service Provider ID filled in row 4, column 3 |
| ISO line | Printed only if the owner confirms the ISO certificate scope covers Authorised Service Providers. Until then the franchise certificate omits it (Open) |
| Endorsement | "An Initiative of Gobind Galaxy" stays in the footer |
| Franchisee logo | None |

## 14.6 Item 3: Certificate envelope and folder

| Spec | Day one: envelope | Later: pocket folder |
|---|---|---|
| Format | C4 (229 x 324 mm) so the certificate travels flat | A4 folder, closed about 220 x 310 mm, one pocket 80 mm deep (verify die with printer) |
| Corners | Standard envelope cut | 2 mm fixed radius, no larger |
| Material | 100 to 120 gsm white paper | 300 to 350 gsm uncoated or matte-coated board, FSC only if certified (14.11) |
| Print | One colour Primary: wordmark or reverse-free logo top left, 40 mm wide minimum, `REF CT-ENV-01` in mono 8 pt bottom left | Two colours (Primary, Accent marker). Front: solid Primary 700 band across the lower third (about 100 mm), reversed logo and title "CLEANING CERTIFICATE" in condensed caps white; mono reference code above the band; ruled 0.25 pt line above the band |
| Colour share | White 90%, primary 10%, no accent | White 70%, primary 29%, accent one 1 mm marker only |
| Finish | None | Matte aqueous coat or no film; no gloss lamination, no spot UV, no emboss |
| Card slot | None | Slit for visiting card 90 x 54 mm |
| Contents | Certificate (A4, unfolded) | Certificate; space for the AMC reminder note if the customer takes AMC (content Open) |
| Front line | "Your Cleaning Certificate" Anek 600 14 pt, Hindi or Punjabi beneath | Same, plus "Clean Tank, Healthy Life." 11 pt on the back |
| Back | Contacts from `src/site.ts` only, 8 pt minimum | Same, plus franchise block when issued by a provider |

The folder never shows a photograph of a dirty tank, a droplet or a splash. The inside left panel may carry the Step Track (s06, s10) with exact labels, square nodes numbered 01 to 05, step 05 dashed.

## 14.7 Item 4: Clean Tank Agent label (only if Clean Tank repackages or labels it)

Scope: this applies only if a Clean Tank branded container is filled, relabelled or distributed by Clean Tank. If the product is used from the manufacturer's own container, Clean Tank adds no label (Open: who manufactures and who labels).

### Label hierarchy (proposal, container size not yet known)

Built as a test label: white ground, 0.75 mm Primary 700 outer border, corners about 1.5 mm, primary title band across the top, ruled zones below.

| Rank | Element | Spec |
|---|---|---|
| 1 | Primary title band | Fill Primary 700, 10 mm high: "CLEAN TANK AGENT" Anek 700 wdth 78 caps 14 pt white, left; mono batch reference right (white, 7 pt). Logo, if shown, reversed small-use or symbol (min 30 mm wide or 5 mm symbol, s02) |
| 2 | Descriptor | One line, Anek 500 9 pt: plain function from INFO-BANK, for example "Disinfection (antibacterial) agent for water tank cleaning". To be confirmed against the product's real composition and registration |
| 3 | Hazard block | Regulated pictograms, signal word, hazard statements, first aid: copied from the Safety Data Sheet (placeholder) |
| 4 | Directions | "For use by trained technicians. Read the Safety Data Sheet before use." (placeholder wording) |
| 5 | Legal block | Ruled zone, see compliance table (placeholders) |
| 6 | Batch and date | Ruled cells: BATCH NO., PACKED (month, year), EXPIRY, Plex Mono caps 7 pt labels, 9 pt values (placeholders) |

Accent: at most one 1 mm marker line, never on or near the hazard block. Regulated pictograms keep their required colours and are exempt from the palette; they are never restyled, recoloured or made smaller than the rule requires.

### Compliance placeholders (compliance reviewer to confirm, with sign-off date)

| Zone | Placeholder | Check against (to confirm) |
|---|---|---|
| Manufacturer, packer or importer name and address | [Name, address] | Legal Metrology (Packaged Commodities) Rules, 2011 and amendments, if applicable |
| Net quantity | [e.g. litres or kg]; numeral height by quantity: up to 200 g or ml, 1 mm; above 200 up to 500, 2 mm; above 500, 4 mm; blown or moulded 2, 4 and 6 mm (verify) | Same rules, Rule 7 |
| Month and year of packing, batch no., expiry | [fields] | Same rules, product registration |
| Customer care contact | Phone and email from `src/site.ts` only | Same rules |
| MRP | Only if sold at retail; otherwise "Not for retail sale" (confirm wording) | Same rules |
| Hazard pictograms, signal words, statements | [per SDS] | Applicable chemical hazard labelling rules (compliance to identify) |
| Product registration or licence number | [if the product category requires one] | Applicable regulator (compliance to identify) |
| Plastic container marking and EPR | [resin code, producer registration] | CPCB plastic EPR and Plastic Waste Management Rules, if Clean Tank is a brand owner |

The legal block has a fixed zone on the back or lower third, at least 7 pt Latin and 8 pt Indic, with a dated sign-off by the reviewer. A legal zone with no date is a guess; print is blocked until it is filled.

### Claims that must not be printed (hard rule)

| Claim | Status | Gate |
|---|---|---|
| Non-toxic | NEVER printed until evidence | Test report or SDS statement filed |
| Eco-friendly | NEVER printed until evidence | Specific, provable wording per CCPA greenwashing guidelines; proof filed |
| "3-month effect" | NEVER printed until evidence | Lab or field study filed |
| Government, WHO, FDA or other approval | NEVER printed until evidence | Certificate or letter filed with exact wording |
| "Kills germs", percentages, "100%" | NEVER | Not allowed by brand rules |
| CPWD DSR inclusion | NEVER on a label | Needs edition and item; belongs in tenders, not on a pack |

Proof file location: Open (propose a controlled folder owned by Gobind Galaxy; s19 to record it).

### Material and print

| Spec | Proposal (verify) |
|---|---|
| Label stock | White polypropylene or polyethylene film, waterproof, chemical-resistant overlaminate, permanent adhesive matched to the container resin (usually HDPE) |
| Size | Fit to the container wrap; 5 mm quiet margin from seams and handles. Example only until the container is chosen: 120 x 80 mm front panel |
| Print | Digital label press or flexo, CMYK; Primary C100 M80 Y35 K45; test chemical rub resistance and wet fastness |
| Finish | Matte laminate; no gloss, foil |
| Bleed / safe | 2 mm / 3 mm (printer confirms) |
| Variants | One label per container size, same hierarchy |

## 14.8 Item 5: Technician kit bag, case and equipment tags

The kit should look like a well-run lab kit: ordered, labelled, plain.

### Kit bag and case

| Spec | Proposal (verify with supplier) |
|---|---|
| Bag format | Duffel or tool bag about 450 x 250 x 250 mm, rigid base, water-resistant woven polyester or similar, matt |
| Colour | Primary `#20334B` body (dyed to match the swatch card), Graphite trim. No accent on the bag |
| Logo | Symbol or small-use lockup, white, on a square-cornered woven patch or one-colour screen print, front panel, centred on the pocket; symbol 25 mm tall minimum for embroidery or patch (s02, verify with digitizer); text cap height 6 mm minimum |
| Reference | Bag ID in white mono caps on a square label tape, `CT-BAG-0001` style (format Open), 8 pt |
| Inside | Labelled compartments for torch, checklist, sticker set, certificate pad or tablet, gloves and shoe covers (English labels, 8 pt minimum on label tape, mono caps) |
| Hard case for the UV unit | Neutral dark grey or black; outside carries the asset tag and a small symbol only. IP rating and dimensions follow the UV unit (Open) |
| Sustainability | One bag per technician issued for several years; no single-use inserts; repair before replace |

### Equipment tags and decals

All tags are ruled spec tags: primary title band, mono value, square inner corners, outer corners about 1.5 mm, matte.

| Item | Size (proposal) | Content | Material (verify) |
|---|---|---|---|
| Asset tag (pump, pressure washer, vacuum, UV unit, hose reel) | 50 x 25 mm; border 0.5 mm Primary 700 | Band 7 mm: "CLEAN TANK SERVICES" Anek 700 condensed caps 8 pt white. Value row 11 mm: `ASSET ID` label (mono 6 pt, Neutral 600; 6 pt is an exception for tags only, native-script text not used) and ID in Plex Mono 600 10 pt, slashed zero. Reference row 7 mm: `SERVICED` and next date strip when used; franchise units add the Authorised Service Provider ID | Polyester or anodised aluminium, permanent adhesive plus rivet or screw where fitted; tamper-evident preferred |
| Equipment decal on casings | 80 x 30 mm | Small-use lockup or wordmark, one colour Primary or white on the body | Cast vinyl, matte, UV-stable |
| Service date strip | 60 x 15 mm | Two ruled cells, "SERVICED" and "NEXT", dates in mono, initials | Write-in on matte laminate, same stock as sticker |
| Safety warnings (pressure, electrical, UV exposure) | As required | Left exactly as the equipment maker or safety rule requires | Never covered, resized or recoloured by brand decals |

Rules: decals sit on flat panels, aligned, never on moving parts or vents; a torn or dirty decal is replaced before the next job; no stripes, hazard-tape patterns or "powered by" claims; no performance figure (such as bar rating) printed on the decal unless the maker's rating is cited and verified (INFO-BANK: "up to 250 bar, subject to site and equipment").

## 14.9 Item 6: Franchise welcome and onboarding kit box

### Box

| Spec | Proposal (verify) |
|---|---|
| Format | Corrugated E-flute mailer about 340 x 250 x 80 mm so A4 documents lie flat (inside dimensions after the contents are fixed). Square die-cut corners |
| Material | Kraft-back or white-top corrugated, mono-material, no plastic film, no foam |
| Print | Outside one colour Primary on white-top board, or white print on kraft. Lid: a solid Primary 700 band across the top 40 mm with "CLEAN TANK SERVICES" in condensed caps and `REF CT-FR-01` in mono; no shadow, no pattern. Inside: Primary only, plus at most one 1 mm accent marker |
| Logo | Horizontal lockup with descriptor on the lid band, left, about 90 mm wide (until the logo exists, band text). Franchise lockup (Authorised Service Provider) printed on the welcome card, not the box |
| Closure | Tape-free tab-lock; tear strip or finger notch, no knife needed |
| Colour share | White 80%, primary 20% or less; accent marker only |
| Finish | Matte, aqueous coat only if required; no gloss, foil or emboss |
| Label | Courier label panel 100 x 150 mm blank on the base, so the brand print never fights the address |

### Unboxing order (top layer to bottom)

| Layer | Item | Note |
|---|---|---|
| 1 | Welcome card, A5, with franchise lockup | Calm, one paragraph, no figures |
| 2 | Brand and standards pack (printed summary of this guide's one-page sheet) | Short, not the full guide |
| 3 | Documentation set: certificate shell stock, sticker set, folder | Same items technicians use |
| 4 | Uniform and identification items | Only if the package includes them (Open) |
| 5 | Contact and support card | Contacts from `src/site.ts` only |

A ruled "KIT CONTENTS" card (mono, numbered 01 to 05, square checkboxes) sits on top of layer 2 so the partner can check the box against the list.

### Contents: OPEN

What the franchise "all-in package" includes is **not defined in any source file**. This pillar lists candidate slots only; nothing on the list is a promise to a partner. Owner to confirm item by item. No investment, royalty, ROI or payback figure is printed in the kit. If any figure is ever added, it must come only from INFO-BANK §8, sit beside the mandatory financial disclaimer at 8 pt or larger, and never use the dropped lines.

## 14.10 Typography, colour and contrast on kit items

| Item | Smallest type (Latin / Indic) | Main pair and ratio |
|---|---|---|
| Sticker | Mono labels 7 pt / Anek 8 pt; dates 16 pt (floor 14 pt) | Primary 700 on White 12.83:1; White on Primary 700 band 12.83:1 |
| Certificate | 8 pt footer, 10 pt values / 8 pt | Primary on White 12.83:1; Graphite on White 14.83:1; Neutral 700 on White 8.78:1 |
| Field labels, reference lines | 7 to 8 pt mono | Neutral 600 `#65655F` on White 5.87:1 (on Stone 5.33:1) |
| Product label | 7 pt legal / 8 pt | Primary or Graphite on White (12.83:1, 14.83:1) |
| Accent marker | Line only, no text | Accent 500 on White 2.87:1: not text, so allowed only as a marker with the value also written |
| Links on digital certificate | 11 pt | Primary 700 on White 12.83:1, underlined |

Accent 500 as text is forbidden. Graphite or Primary carries all required legal and warning text. State colours (info, error, warning, success) are not used on any kit item; "Due date has passed" is a digital state, not a printed one (s10). On a Primary 700 band, the Accent 500 marker is 4.47:1 (non-text), but no accent is placed on bands.

## 14.11 Sustainability

| Rule | Spec |
|---|---|
| Less pack | One envelope or folder, one sticker, one certificate. No gift-style boxes, plastic sleeves or single-use inserts |
| Mono-material | Paper and board with water-based or soy-compatible inks (verify); no glossy film, foil or mixed laminates on paper items |
| Plastic | Vinyl stickers and polymer labels are unavoidable (outdoor life) and are not recyclable with paper; keep them small, do not claim otherwise |
| Digital first | Certificate PDF sent on request; paper is still issued because the record is meant to be left behind |
| Claims | "Recyclable" or "FSC" only after supplier paperwork is filed. "Eco-friendly", "green" and "sustainable" are never printed (CCPA greenwashing guidelines, 2024) |
| Plastic EPR | Check whether Clean Tank, as a brand owner, must register for plastic packaging (Open) |

## 14.12 Rules

```
RULE 14.1:     Fit a Cleaning Date Sticker built as the ruled spec tag on every tank cleaned, and record its serial on the certificate.
CLASS:         MUST
REASON:        Documented and Exact: a dated, numbered record is left behind with the tank.
EXACT SPEC:    100 x 70 mm, corners about 1.5 mm, 2 px (0.75 mm) Primary 700 border, rows 14 / 34 / 17 mm plus 5 mm foot margin, title band "CLEAN TANK SERVICES" (Anek 700 caps) + "CLEANING RECORD" (Plex Mono), two ruled date fields with mono 16 pt values (floor 14 pt) like 03 OCT 2026, reference row with CERT NO. and TECH ID, one 3 px (1 mm) Accent 500 underline marker.
EXAMPLE:       Domestic overhead tank in Kharar: sticker with 03 OCT 2026 and a recommended next date, serial in mono, matching the certificate.
ANTI-EXAMPLE:  Handwritten date on a plain white label with no serial or contact; or a sticker with a coral band.
TEST:          Does the sticker show cleaned date, next date, cert no., tech ID, contact and serial in the ruled layout, no ISO line, and no coral fill?
EXCEPTION:     If the surface cannot hold a sticker, fit on the nearest fixed clean surface and note it; owner approves any other size.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 14.2:     Print no ISO line, health claim or urgency wording on the sticker.
CLASS:         NEVER
REASON:        Honest and Restrained: partial ISO wording is not allowed and the full line does not fit.
EXACT SPEC:    Sticker text limited to the items in 14.4.
EXAMPLE:       Sticker with dates, cert no., tech ID, one phone number.
ANTI-EXAMPLE:  "ISO certified, safe water" on the sticker.
TEST:          Search the artwork for "ISO", "safe", "hygienic", "due now".
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 14.3:     Show the next date as "recommended", in Primary mono text, never as a promise or an alarm.
CLASS:         MUST
REASON:        Restrained and Honest: the customer decides.
EXACT SPEC:    Label "NEXT DUE (RECOMMENDED)"; Primary 700 mono value; no red, orange or accent on the date text. The accent marker is a line only.
EXAMPLE:       "NEXT DUE (RECOMMENDED): 03 JAN 2027" for a customer whose interval was agreed.
ANTI-EXAMPLE:  Red "MUST CLEAN BY" label.
TEST:          Is the next date Primary, labelled recommended, with no urgency colour or word?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 14.4:     Use the exact ISO wording on the certificate only, and the water-quality qualifier next to any water-quality line.
CLASS:         MUST
REASON:        Honest: claims must be provable and bounded.
EXACT SPEC:    ISO line and qualifier as printed in 14.5, 8 pt or larger.
EXAMPLE:       Certificate footer with both lines, in order.
ANTI-EXAMPLE:  "ISO accredited" on the folder cover.
TEST:          Do the footer strings match the source characters exactly?
EXCEPTION:     Franchise certificates omit the ISO line until its scope is confirmed.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 14.5:     Build the certificate as a test report: primary title band, ruled 3-column field grid with mono values, a 01 to 05 steps row with checkboxes, number, signature, rectangular stamp and sticker serial.
CLASS:         MUST
REASON:        Documented and Ordered: the document is a record, not decoration.
EXACT SPEC:    A4, square corners, band 35 mm (bleed 3) with "CLEANING CERTIFICATE" and mono certificate no.; grid 0.25 pt Primary 700 rules, 3 columns of 56.67 mm; steps cells 34 mm with 3.5 mm square checkboxes, cell 05 DONE or N/A; signature 55 x 20 mm; stamp 45 x 20 mm, stroke 0.4 mm or more; no seal, ribbon or star.
EXAMPLE:       Certificate with number, ticked steps 01 to 04, 05 marked N/A, signature, stamp and sticker serial.
ANTI-EXAMPLE:  A gold round seal drawn on the certificate; five steps listed without checkboxes.
TEST:          Does the certificate carry number, five step cells, signature, stamp and sticker serial, with square corners throughout?
EXCEPTION:     Digital PDF may carry a scanned signature approved by the owner.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 14.6:     Keep Clean Tank primary on franchise records.
CLASS:         MUST
REASON:        Exact: one standard, every tank, many local operators.
EXACT SPEC:    Franchisee name only in the provider block, Anek 600 9 pt, below the lockup; no franchisee logo.
EXAMPLE:       "Authorised Service Provider / Rao Services | Patiala".
ANTI-EXAMPLE:  Franchisee's own logo beside the Clean Tank mark.
TEST:          Is the Clean Tank lockup larger than every franchisee element?
EXCEPTION:     None without owner approval.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 14.7:     Never print Agent properties or approvals on any label or kit item until evidence is filed.
CLASS:         NEVER
REASON:        Honest: no unproven claims.
EXACT SPEC:    Blocked: non-toxic, eco-friendly, 3-month effect, government or WHO or FDA approval, CPWD DSR.
EXAMPLE:       Label shows name, descriptor, hazard block and legal block only.
ANTI-EXAMPLE:  "Non-toxic, eco-friendly, lasts 3 months" on the can.
TEST:          Is there a filed evidence document for each phrase printed?
EXCEPTION:     Owner may lift a block per claim once the proof file is complete.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 14.8:     Reserve the legal block on any Agent label first, and sign it off with a date before print.
CLASS:         MUST
REASON:        Documented: legal text added last gets squeezed.
EXACT SPEC:    Fixed zone, 7 pt Latin and 8 pt Indic minimum, reviewer name and date recorded.
EXAMPLE:       Proof with legal block signed "[reviewer], [date]".
ANTI-EXAMPLE:  Label proof printed before compliance review.
TEST:          Is there a dated sign-off on the file?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 14.9:     Keep every kit item flat, ruled and square-cornered within the limits: no shadow, gradient, gloss, rays, droplets, bursts, urgency badges or large radii.
CLASS:         NEVER
REASON:        Restrained and Honest materials (s01, s05); persona avoid list.
EXACT SPEC:    Matte finish; solid primary band, 1 px rules (0.25 pt paper, 0.5 mm vinyl minimum), mono codes; corners: sticker, label and tag about 1.5 mm, folder 2 mm, certificate and box square; one accent marker (3 px, 1 mm on vinyl) per record.
EXAMPLE:       White certificate with a navy title band, ruled grid and one short accent underline.
ANTI-EXAMPLE:  Glossy folder with a splash graphic and 8 mm rounded corners.
TEST:          Any shadow, gradient, gloss, droplet, burst, red badge, or corner above 2 mm? Yes: reject.
EXCEPTION:     Regulated hazard pictograms keep their mandated look.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 14.10:    Give every record and tag a mono reference code and keep codes in the same position.
CLASS:         SHOULD
REASON:        Ordered and Documented: a code is found in the same place every time.
EXACT SPEC:    Plex Mono caps, slashed zero, tracking +0.08 to +0.1em; sticker: reference row; certificate: band top right and field row 1; tag: reference row; box and folder: lid or cover above the band. Code formats are Open (14.17).
EXAMPLE:       CERT NO. on sticker and certificate reads the same string.
ANTI-EXAMPLE:  Serial in a script font at a different position on each batch.
TEST:          Do sticker and certificate show the same CERT NO. string in mono?
EXCEPTION:     Regulated labels follow the rule that applies.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

## 14.13 Do / Don't

| Do | Don't |
|---|---|
| Use a white ground, a solid primary band and ruled cells | Fill a folder, sticker or bag with accent colour |
| Print the next date as "recommended" in Primary mono | Print "overdue", "urgent" or a red date |
| Keep the water-quality qualifier beside any health line | Print "safe water" or "bacteria-free" |
| Use the exact ISO line on the certificate | Put ISO on the sticker, folder or bag |
| Use Plex Mono, slashed zero, for IDs, serials and dates | Use a script or rounded font for dates or numbers |
| Use fixed small corners (1.5 mm sticker, 2 mm folder, square certificate) | Round corners further, add shadows, bevels or gloss |
| Test the 1 mm accent line and thin mono text for outdoor fade before the first sticker order | Assume screen colour equals vinyl colour |
| Match adhesive to tank surface (plastic, concrete, metal) | Order one adhesive and hope |
| Show the Clean Tank lockup larger than the franchisee name | Add a franchisee logo |
| Leave what the franchise kit includes marked Open | List a package nobody has approved |
| Keep safety warnings on equipment as supplied | Cover them with brand decals |

## 14.14 Accessibility and India notes (WCAG 2.2 AA and print)

- Text contrast 4.5:1 minimum on every record (14.10). Test on the real stock: matte stock lowers real contrast, so screen ratios are a start.
- **Arm's length rule:** the sticker's two dates must be readable from about 1 m (assumption, verify on first print; 16 pt mono caps have a cap height of about 3.9 mm). The certificate body is 10 pt or larger; only footers go to 8 pt.
- Minimum print type: 7 pt Latin, 8 pt Indic (s04). Do not shrink the Indic line to match the English line. Plex Mono has no Indic glyphs: Indic labels use Anek.
- Bilingual: each sticker and certificate version has English plus one Indic language (Hindi in Devanagari for U.P., Delhi, M.P., Jharkhand, H.P.; Punjabi in Gurmukhi for Punjab; Maharashtra language version is Open). Native-speaker review is mandatory before print for every Indic string. Allow 20 to 30% longer Indic text; wrap, never truncate. Indic headings keep wdth 100 and no case change.
- Dates are written `03 OCT 2026` with the month in letters so day and month are never confused. Western digits throughout.
- No colour-only meaning: language is shown by script; item type by printed title; the due date is text, and the accent line only marks it. Checked steps are ticked boxes with a word.
- Legible by touch and tool: the tab-lock opens by hand with a finger notch and a small icon plus text ("Pull to open"; Hindi line to follow). No knife.
- Digital certificate PDF: tagged, text live, alt text on the logo, reading order band, title, fields, steps, footer, document language set; checkboxes as labelled form fields.
- Outdoor stickers face heat, rain and fading; durable matte laminate and a replacement rule keep the record readable.
- Customers may be elderly or non-English readers: the technician reads the sticker aloud in the customer's language at handover. This is a handover practice, not a printed rule.

## 14.15 Day one vs later

| Day one (must exist at launch) | Later |
|---|---|
| Sticker 100 x 70 mm ruled tag, one version per language (English with Hindi, English with Punjabi), one adhesive tested on plastic, one on concrete | Variable-data sticker print, destructible vinyl, QR verification page |
| Certificate A4 as a locked PDF template plus pre-printed shell, numbered, with steps row, qualifier and ISO line | Serialised pre-printed security stock, A5 summary, QR |
| C4 envelope, one-colour primary | Pocket folder with business-card slit and inside Step Track |
| Technician bag in navy with a patch, asset tags | Matching hard cases, embroidered uniform sets |
| Agent label: only if Clean Tank repackages, after compliance sign-off | Retail pack and barcode, only if the product is ever sold |
| Franchise welcome card and a printed one-page brand sheet | Full welcome kit box, once contents are confirmed |
| Sticker replacement rule: replace a peeling or faded sticker at the next visit | Field audit of sticker condition at franchise reviews |

## 14.16 Checklist

- [ ] Sticker artwork 100 x 70 mm, corners about 1.5 mm, 2 px (0.75 mm) Primary border, rows 14 / 34 / 17 mm plus 5 mm foot margin
- [ ] Sticker title band shows "CLEAN TANK SERVICES" and mono "CLEANING RECORD"; two ruled date fields with mono values
- [ ] Reference row shows CERT NO. and TECH ID with one 3 px (1 mm) accent underline; no coral band
- [ ] Sticker shows no ISO line, health claim or urgency wording
- [ ] Sticker material, laminate and adhesive tested on plastic, concrete and metal by the vendor, with UV and rain test of the accent line and thin mono text
- [ ] Date fit checked at 16 pt in the 42 mm usable cell width; fallback 14 pt recorded
- [ ] Sticker serial register and counted-issue process in place
- [ ] Certificate A4 with 20 mm margins, primary title band, 3-column ruled grid in the s10.20 field order, square corners
- [ ] Steps row 01 to 05 with square checkboxes; step 05 has DONE and N/A
- [ ] Certificate number, signature box, rectangular stamp and sticker serial present
- [ ] Certificate carries exact ISO line and exact qualifier, and nothing else about safety
- [ ] Franchise certificate uses the Authorised Service Provider block, with no ISO line until scope is confirmed
- [ ] Envelope or folder printed with matte finish, no film, no shadow; folder corners 2 mm
- [ ] Agent label (if made): legal block signed off with date, hazard block from the SDS, no blocked claims
- [ ] Evidence file location named for Agent properties
- [ ] Bag, case and asset tags follow 14.8 (no accent, mono IDs); safety warnings uncovered
- [ ] Franchise kit contents confirmed by owner, with no financial figures, or marked Open
- [ ] No shadow, gradient, gloss or corner above 2 mm on any item (Rule 14.9)
- [ ] Hindi and Punjabi strings reviewed by native speakers
- [ ] All CMYK values and stocks proofed physically and signed off
- [ ] Sustainability wording passes 14.11 and proof files filed
- [ ] File names, version and review trigger recorded (s19)

## 14.17 Open items and evidence needed

| # | Item | Needed from |
|---|---|---|
| 1 | Final logo route and artwork (no logo exists yet); until then band text stands in | Owner |
| 2 | Sticker vinyl, laminate, adhesive grades and measured outdoor life; fade of the 1 mm accent line and thin mono text | Sticker vendor |
| 3 | Which phone number prints on the sticker (either phone in `src/site.ts`) | Owner |
| 4 | Exact placement guidance on the tank, and a written replacement and removal rule | Owner and field team |
| 5 | Certificate, sticker, asset and bag code formats and register ownership (placeholder idea: prefix, year, running number) | Owner |
| 6 | Whether the ISO certificate scope covers Authorised Service Providers; whether the ISO line may appear on franchise certificates | Owner and certifier |
| 7 | Certificate stock vs printer compatibility, and whether pre-printed shells are viable at current volumes | Printer |
| 8 | Whether an unfolded C4 envelope or A4 folder is preferred, and what else goes inside (AMC note) | Owner |
| 9 | Whether Clean Tank Agent is repackaged or labelled by Clean Tank, who manufactures it, and the container size | Owner |
| 10 | Legal Metrology, hazard labelling, product registration and plastic EPR duties for the Agent label | Compliance reviewer |
| 11 | Evidence for non-toxic, eco-friendly, 3-month effect and any approval | Owner, lab reports |
| 12 | Kit bag, case and tag suppliers; asset ID scheme; UV unit case size | Owner and suppliers |
| 13 | What the franchise all-in package contains; box dimensions follow from it | Owner |
| 14 | Hindi and Punjabi strings; Maharashtra language version | Native reviewers, owner |
| 15 | QR record page, data policy and verification process | Owner and developer (s13, s19) |
| 16 | FSC or recyclability claims: supplier certificates | Suppliers |
| 17 | s06/s07 rows 14 / 34 / 17 sum to 65 mm; this pillar adds a 5 mm foot margin to reach 70 mm. Confirm, or change the reference row to 22 mm | s06, s07 owners |
| 18 | Resolved: the accent underline sits under CERT NO. in the reference row across s05, s06, s10 and s14 | Closed |
| 19 | 6 pt mono label on 50 x 25 mm asset tags is below the 7 pt print floor; confirm tag layout or enlarge tag to 60 x 30 mm | s04 owner, vendor |
