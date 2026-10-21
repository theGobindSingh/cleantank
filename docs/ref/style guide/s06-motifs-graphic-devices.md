# Clean Tank Services: Style Guide
# 06. Motifs & Graphic Devices

> This pillar names the small set of graphic devices that make a Clean Tank Services layout recognisable when the logo is small, cropped or absent. A device is a named, rule-bound element built from the shapes in s05 and the colours in s03: it has one job, exact construction, a cap on how often it appears, and a place where it never goes. Clean Tank has no approved logo yet, so these devices carry early recognition on stickers, certificates, vans and web pages. They are few, ruled and exact, drawn like a spec sheet or test report: a level line, a scale, a record block, a numbered track, a faint grid, a reference tag and a solid band. Nothing decorative, nothing that radiates, splashes or glows.

Sheet CT-SG-06 | v2.0 | 08 Oct 2026 (Quiet Utility revision) | Tier legend: LOCK = central brand owner approves any change · GUARD = varies inside stated limits · FLEX = judgment within principles

Not covered here: logo (s02), icons (s10), illustration and diagrams (s09), shapes, radii and strokes (s05), motion timing (s11), packaging-only patterns (s14). Colour roles follow v2: Primary (navy `#20334B`), Secondary (TBD, owner to decide, no value assigned, no device uses it), Accent (coral `#EE7555`, marker only), Neutral (white to graphite, slightly warm), State. Contrast ratios are WCAG 2.x values computed with Python.

---

## 06.1 Principle and inheritance

A **device** is a repeatable graphic element with a name, a job and constants. Colour, type, photos and the logo are not devices.

Big idea: **Quiet precision. One standard, every tank.** Devices are the drafting marks of that standard.

| v2 principle | Device behaviour | Device |
|---|---|---|
| Exact | One construction per device, same constants in every district, square ends, 1 px lines | All |
| Ordered | Numbered nodes, numbered sections, ruled fields, a grid that lines up with the layout grid | Step Track, Reference Tag, Record Block, Technical Grid |
| Restrained | One primary device plus one supporting device per layout; one accent cluster per view; calm layouts are valid | 06.10 |
| Documented | The record is the hero: dates, serials, reference codes in mono | Record Block, Reference Tag |
| Honest materials | Solid fills and rules only: no gradient, glow, shadow, texture or fake depth | Primary Band, all |

Source of the set: s01 distinctive-asset candidates (Level Line with primary bands, ruled spec-sheet record, 5-step track) and s05 section 05.9 (Level Line geometry). **Test: cover the logo.** The page should still read as "ruled spec sheet, navy bands, one accent line" (s01 Rule 01.1). Humility lives in the words (voice is unchanged); authority lives in these visuals.

---

## 06.2 The device set

| # | Name | Type | One-line job | Derived from | Tier |
|---|---|---|---|---|---|
| 1 | **Level Line** | Accent marker | A 3 px accent rule with square ends, like the water level on a gauge: marks the start of content, a key figure or a due date. | Tank water level, s05.9 | LOCK |
| 2 | **Gauge Scale** | Pattern (linear, arc later) | A ruled scale of square ticks that says "measured": hangs from a Level Line or frames one fact figure. | Gauge face | GUARD |
| 3 | **Record Block** | Frame | A ruled spec tag: primary title band, ruled "Cleaned on" and "Next due" fields in mono, a reference code, a 3 px accent underline under the CERT NO. in the reference row. | Cleaning Date Sticker, s05.10 | LOCK |
| 4 | **Step Track** | Diagram device | The 5-step process as square nodes numbered 01 to 05 on a 2 px line, step 05 dashed. | 5-step process, s05.11 | LOCK |
| 5 | **Technical Grid** | Background pattern | A faint neutral drafting grid for calm bands and decks. Replaces the v1 Tank Grid. Later phase. | Drawing sheet, section drawing | FLEX |
| 6 | **Reference Tag** (new) | Label device | Mono caps codes: `REF CT-PR-05`, section index `02.1`, in accent 700 or neutral 600. | Test report, drawing register | GUARD |
| 7 | **Primary Band** (new) | Structural frame | A solid navy band for header, footer, emphasis sections and record title bands. | Spec sheet title block | LOCK |

Status: devices 1 to 4 are **candidates** under s01.7 (none is fame-tested); pair each with the CLEAN TANK SERVICES name until measured. Devices 6 and 7 are structural: they appear on nearly every layout and have their own caps (06.8, 06.9) instead of the device budget. Why seven and not more: each has a different job (marker, scale, record, diagram, background, label, band), and more would break "one idea per section".

Shared constants: colours only from s03; geometry on the 4 px base (s07); radii `ct.radius.none` 0, `xs` 2, `sm` 4 only (no 8, 12, 16, full); strokes from `ct.border.width.*`; **square caps and miter joins** on every line and tick (s05.4); no shadows, no gradients.

---

## 06.3 Device 1: Level Line (accent marker)

**Meaning:** Calibrated and Recorded. A level reading made and noted. It is a marker; it never carries information alone and is never a button, link or progress bar.

| Property | Screen (1x) | Print |
|---|---|---|
| Stroke | `ct.border.width.bold` 3 px, **square ends** | A4 paper 1 pt; sticker and vinyl 1 mm (s05.4, verify with printer) |
| Colour | Accent 500 `#EE7555` (`ct.color.accent.500`) | Pantone 170 C or C0 M62 Y65 K0 (s03 start values) |
| Short form | 48 px long, 12 px below the heading or key figure (`ct.space.3`), left aligned | 12 mm long, 3 mm below the heading |
| Long form | Full container width, never wider than the 1200 px container (s07) | Between margins; sticker underline per 06.5; van stripe 5% of panel short side, min 25 mm |
| Scale option | Ticks hang from the line, see 06.4 | Module in 06.4 |
| Minimum | Short form 48 px; below that omit it | Short form 12 mm; no line under 1 pt on paper or 1 mm on vinyl |
| Clear space | 16 px (`ct.space.4`) to the next element below; 12 px above ticks end; 24 px to any image edge | Same in mm at 0.2646 mm per px, rounded: 4 mm, 6 mm |
| Max per layout | **One per view.** It leads the single accent cluster (03, s07): the Level Line plus at most one Reference Tag or index number in the same block | One per page; on a sticker the due-date underline is the Level Line |
| Crop | Never cropped, rotated, tapered or dashed | Same |

**Where it goes**

| Surface | Form | Position |
|---|---|---|
| Website top-level page heading (home, services, franchise) | Short | 12 px under the H1, left aligned |
| Key figure (one per view) | Short | 12 px under the figure |
| Active step (Step Track) | Underline, 16 px | Under the numeral, see 06.6 |
| Cleaning Certificate (s14) | Long | 1 pt, directly under the Primary Band title block, between 20 mm margins |
| Cleaning Date Sticker (s14) | Underline | 3 px (1 mm on vinyl) under the "Next due" value, value width, square ends |
| Service van, signboard | Long as stripe | Straight and horizontal at one height on both sides; square ends at panel edges; 2X clear of the logo (s02); s16 confirms colour area against the 10% cap |
| Letterhead, invoice, tender cover | Long | Under the header block on page 1 only |
| WhatsApp card, Instagram post | Short, 2x scale | Under the headline, same corner on every post |
| Technician name badge | Short (optional) | 12 mm by 1 mm under the name, vendor test (verify) |

**Where it never goes:** above or through Devanagari or Gurmukhi headings (Rule 06.7); on a photograph or scrim (Accent 500 on a Navy 900 70% scrim over a white photo is only 2.31:1 worst case); inside a button, alert, input, tag or chip; as a CTA, "progress" or "urgency" bar; as an underline of live text links (links are underlined Primary 700 per s03); curved, wavy, diagonal or dashed.

**Colour versions**

| Ground | Line | Ticks | Ratio of line to ground | Verdict |
|---|---|---|---|---|
| White `#FFFFFF` (Neutral 0) | Accent 500 | Primary 700 | 2.87:1 | Decorative, nothing depends on it |
| Stone `#F5F4F1` (Neutral 50) | Accent 500 | Primary 700 | 2.61:1 | Decorative |
| Primary 700 `#20334B` | Accent 500 | White | 4.47:1 | Passes 3:1 UI |
| Primary 800 `#172436` / Primary 900 `#0F1824` (dark page) | Accent 500 | White | 5.45:1 / 6.21:1 | Passes |
| One-colour print | Primary 700 or black | Same as line | 12.83:1 on white | Only when one ink exists (owner approves) |

Scaling ladder (stroke does not grow with the page; it steps with the canvas):

| Context | k | Line | Short form | Gap | Pitch / tick (minor, major) |
|---|---|---|---|---|---|
| Web 360 to 1440 | 1 | 3 px | 48 px | 12 px | 8 px, 6 px and 12 px tall, 1 px wide |
| Social 1080 canvas, slide 1920 x 1080 | 2 | 6 px | 96 px | 24 px | 16 px, 12 px and 24 px tall, 2 px wide |
| A4 and A5 print | n/a | 1 pt | 12 mm | 3 mm | 2 mm, 1.5 mm and 3 mm tall, 0.25 pt wide |
| Sticker, badge | n/a | 1 mm | n/a | n/a | Not used on stickers at launch |
| Van, signboard | n/a | 5% of panel short side, min 25 mm | n/a | n/a | Later, sign-maker test |

**Motion (s11):** the Level Line is the one device that draws. On first view it extends left to right with `ct.motion.duration.moderate` 240 ms and `ct.motion.easing.settle` (0.4, 0.14, 0.3, 1), no overshoot, once per page load. This is the only place "settle" easing is kept. Reduced motion: appears at once. Never loops, never repeats on scroll.

---

## 06.4 Device 2: Gauge Scale

**Meaning:** Exact. Numbers read at a glance. Two forms: a linear scale (day one) and an arc readout (Later).

**Linear scale (hangs from the Level Line, s05.9 values)**

| Property | Value |
|---|---|
| Tick pitch | 8 px (`ct.motif.scale.pitch`) |
| Minor tick | 1 px wide, 6 px tall, **square ends** |
| Major tick (every 5th) | 1 px wide, 12 px tall |
| Division | 5 minor intervals per major; **5 major divisions = 200 px module** (25 intervals, 26 ticks). The five divisions echo the five process steps |
| Anchor | Left aligned to the Level Line start; ticks hang from the line's lower edge, 0 gap |
| Length | One 200 px module, or two (400 px). The line continues plain beyond the scale |
| Colour | Primary 700 on White or Stone; White on Primary 700; Neutral 300 on Primary 800 or 900 |
| Numerals | None by default. If a numeral is needed under a major tick it is live text: IBM Plex Mono 500, 11 px, caps, tabular, Primary 700 on white 12.83:1 or Neutral 600 on white 5.87:1; never accent |
| Minimum | 200 px module on screen, 50 mm in print; below that, plain Level Line |

**Arc readout (Later, month 3 to 12)**

| Property | Value |
|---|---|
| Shape | Semicircle, 180 degrees, 3 px Primary 700 stroke with square caps (the s05 gauge arc; a literal gauge dial is a permitted round object), radius 64 px, min 48 px |
| Ticks | 6 major ticks every 36 degrees, 4 minor ticks between them every 7.2 degrees; 1 px, 6 px and 12 px long, inside the arc, square ends |
| Baseline | Sits on a Level Line baseline as the diameter (3 px accent). Arc and baseline are one device and count once |
| Needle | **None.** A needle would imply a live reading |
| Readout | One fact figure in the centre, Anek Latin condensed 700 caps at h2 size, tabular, from INFO-BANK only, with its qualifier; unit in mono caps |
| Permitted figures | Tank capacity ranges and jet pressure as written in INFO-BANK, for example "up to 250 bar, subject to site and equipment". No invented ranges, efficiencies or health figures |
| Max per layout | One arc; never two readouts side by side as a "dashboard". The hero-crop supergraphic of v1 is dropped |

Where it never goes: beside an unconfirmed figure; as a progress meter or "water quality" dial; with good/bad coloured zones (that would claim a safety result); on photographs.

Motion: none. Ticks and arc are static; no sweeping needle, no counting up (s11 bans counters).

---

## 06.5 Device 3: Record Block (ruled spec tag)

**Meaning:** Documented and Responsible. "We leave behind a record of the service, not just a cleaned tank." It is the sticker's structure lifted into a reusable frame, built like a test label.

| Property | Spec |
|---|---|
| Structure | Outer rectangle, three zones top to bottom: (1) **Primary Band title row** (white caps Anek heading, for example "CLEANING RECORD"); (2) **ruled field grid**, two equal fields side by side, **Cleaned on** and **Next due**; (3) **reference row** with a mono reference or serial code (06.8) |
| Outer outline | `ct.border.width.base` 2 px Primary 700 (print 0.75 pt paper, 0.75 mm vinyl) |
| Outer radius | Screen `ct.radius.sm` 4 px; sticker about 1.5 mm; certificate and paper forms square (s05.13) |
| Ruled grid | Cells separated by 1 px Primary 700 gaps (`gap: 1px` over a Primary 700 background), cells White; inner corners square (`ct.radius.none`). Sticker vinyl rule min 0.5 mm (s05.4) |
| Field label | IBM Plex Mono 500, caps, tracking +0.08em, 11 to 12 px (print 7 pt Latin minimum), Neutral 600. Indic labels use Anek 600, no case change, 8 pt print minimum (Plex Mono has no Indic glyphs) |
| Field value | IBM Plex Mono 600, caps, tabular, 24 px on screen (print 14 pt minimum), format `03 OCT 2026` (s04), Primary 700 |
| Due-date marker | **3 px Accent 500 underline** under the CERT NO. value in the reference row (it links sticker and certificate; matches the owner-approved preview), value width, 4 px (`ct.space.1`) below the baseline, square ends. It replaces the v1 coral band; the sticker no longer has a coral fill. The date is also written as text |
| Title row | Primary 700 fill, radius 0 inside the outline, height 14 mm on a 100 x 70 mm sticker (s07 rows 14 / 34 / 17 mm); screen 40 px; label White, Anek caps 700 |
| Padding | Cell padding 16 px (`ct.space.4`), large cells 24 px (`ct.space.5`); sticker 4 mm |
| Sizes | Screen min 240 x 144 px; sticker 100 x 70 mm (s07, confirm in s14); certificate date block full text width, height 24 mm |
| Max per layout | One Record Block per view or sheet. It is a primary device |

Layout: label above value in each cell; reference row full width below the grid with a 1 px rule above. Sample dates in any mock-up are dummy values labelled "Sample" (for example 12 JAN 2027 and 12 JUL 2027), not a cleaning-frequency recommendation.

Draft Indic labels (**needs native review**): Hindi "सफाई की तिथि" and "अगली तिथि"; Punjabi "ਸਫ਼ਾਈ ਦੀ ਤਾਰੀਖ਼" and "ਅਗਲੀ ਤਾਰੀਖ਼". Latin digits are used in all scripts for dates (see 06.16).

Where it goes: tank sticker, Cleaning Certificate date block, service-history card on the website and WhatsApp, franchise brochure "what the customer receives" panel, Instagram post about the record.

Where it never goes: inside a seal, rosette, shield or starburst; with a tick-in-circle or any mark implying approval; with an "ISO" line (s10: the sticker carries no ISO line); as a countdown or "days left" display; with the due date itself in accent or red text; empty on a public asset (a sample is labelled "Sample"); with white text on an accent fill (accent is never a band fill here).

Motion: static. The record is not animated.

---

## 06.6 Device 4: Step Track

**Meaning:** Ordered and Exact. The same 5 steps in every district. It reuses s05.11 and Rule 05.7; s06 adds only the device rules.

| Property | Spec (from s05.11) |
|---|---|
| Nodes | Five **squares**, `ct.radius.xs` 2 px, 40 px (`ct.size.node.md`), 32 px at 360 px screens (`ct.size.node.sm`); 2 px Primary 700 outline, White fill; numeral "01" to "05" in IBM Plex Mono 600, Primary 700, tabular. 48 px hit area if interactive |
| Active step | Primary 700 fill, White numeral, 3 px Accent 500 underline under the numeral (16 px long, square ends). One active step at a time, only where progress or focus is shown. A static "How we clean" strip has no active step |
| Step 05 | Dashed outline 2 px Primary 700, 4 px dash, 4 px gap, White fill, Primary numeral, with the mono caps note `* WHERE APPLICABLE`. The dash shows "where applicable" by shape, not colour |
| Connector | 2 px Primary 700, square caps, sharp 90 degree miter elbows (no radius), 16 px minimum between node edge and connector end |
| Labels | Full step names below or beside each node: Dewatering, High-pressure cleaning, Sludge & water removal, Disinfection (antibacterial), UV treatment (where applicable). Headings caps per s04; step names sentence case Anek 600 |
| Direction | Horizontal from 768 px, vertical on narrow screens |
| On a Primary Band | Inverse: White outline and numerals, White connectors; active node White fill with Primary numeral, Accent 500 underline (4.47:1 on Primary 700) |
| Print minimum | Node 8 mm square, numeral 9 pt, connector 0.75 pt (verify) |
| Colour | Primary only; accent appears only as the active underline |
| Max per layout | One Step Track; it is a primary device |

The Step Track may sit under a Level Line (short form) but never touches it; the five-division Gauge Scale and the five nodes are never shown together in one view. The best home is the emphasis Primary Band (06.9).

Where it goes: website "How we clean" band, franchise brochure process page, tender method statement, standee panel, a social carousel slide per step.

Where it never goes: sticker, uniform or van (too much text for the size); as a loading spinner or progress bar; with six nodes, an HCl step or water-drop icons in place of numerals; with statuses like "done" in accent or green (status is always icon plus label).

Motion: none. All five nodes are visible at once. If an active step changes (interactive use), the fill changes in `ct.motion.duration.fast` 110 ms, colour only. v1 staggered node reveals are removed.

---

## 06.7 Device 5: Technical Grid (background pattern, Later)

**Meaning:** Exact. The faint grid of a drawing sheet, almost felt rather than seen. It replaces the v1 Tank Grid (tonal navy at 4% and 8%); it is now plain neutral lines.

| Property | Spec |
|---|---|
| Tile | 160 x 160 px square (`ct.motif.grid.tile`), repeat both axes, no rotation, origin at the container top-left |
| Cell | 32 px (`ct.motif.grid.cell`), 5 x 5 cells per tile |
| Lines | 1 px, square, `shape-rendering: crispEdges`, whole pixels at 1x and 2x |
| On White | Minor line Neutral 100 `#ECEBE7`; major line (tile edge) Neutral 200 `#DEDDD8` |
| On Stone | Minor line Neutral 200 `#DEDDD8`; major line Neutral 300 `#C7C6C1` |
| Dark page (s12) | Minor Primary 800 `#172436`, major Primary 700 `#20334B`, on Primary 900 `#0F1824` only |
| Allowed grounds | White, Stone, Primary 900 dark page. Not on a Primary Band, not on photos |
| Coverage cap | **30% of the layout area**, one contiguous panel, bleeding off at least one edge |
| Crop | At a cell boundary (multiples of 32 px); no partial first cell |
| Colour | Neutral only (or the dark-page primary pair). Never accent lines, never a gradient, no fade-out mask, no dots or crosshairs |
| Print | Not used on certificates, stickers or forms. Allowed on deck and brochure backgrounds only after a printer proof (lines under 0.25 pt may vanish) |

**Calm zones (the grid never sits behind them):** body text, forms and inputs, tables, price or capacity figures, certificate content, the Record Block, the Step Track, any text under 18 px. A display headline of 24 px or larger may sit on the grid after the check below.

**Contrast check (worst spot under text, not average):** on White with the Neutral 200 major line, Primary 700 text 9.43:1 and Graphite 10.91:1, but Neutral 600 muted text only 4.31:1, so **muted text never sits on the grid**. On Stone with the Neutral 300 major line, Primary 700 text 7.50:1 and Graphite 8.67:1. Dark page: White on Primary 700 12.83:1. The restriction is mainly about calm (Quiet/Loud 1).

Motion: none. Static background; no parallax, no drift.

Day-one stand-in: none. Plain White or Stone is the calm layout.

---

## 06.8 Device 6: Reference Tag (new)

**Meaning:** Documented and Ordered. Every section, record and sheet carries a short code, as on a test report or drawing register. It is an identifier, never a claim.

| Property | Spec |
|---|---|
| Type | IBM Plex Mono 500 (codes) or 600 (index numbers), **caps**, tracking +0.08 to +0.1em, 11 to 13 px (`ct.font.label`), line-height 16 px; print 7 pt minimum |
| Forms | (a) Reference code: `REF CT-PR-05`; (b) section index: `02.1` matching the numbered sections of s07; (c) sheet code: `CT-SG-06`; (d) record serial in the Record Block reference row |
| Container | None: plain text. No box, pill, chip fill or circle. Optional 1 px Neutral 200 zone rule above (s07) |
| Colour on White or Stone | Accent 700 `#A33C1F`: 6.51:1 on White, 5.92:1 on Stone, 5.46:1 on Neutral 100. Or Neutral 600 `#65655F`: 5.87:1 on White, 5.33:1 on Stone |
| Colour on Primary 700 | Accent 400 `#F1876A` 5.14:1 (6.27:1 on Primary 800); or Neutral 300 `#C7C6C1` 7.50:1; or White 12.83:1 |
| Placement | Above the section heading, left on the column line, 8 px (`ct.space.2`) gap; order top to bottom: tag, heading, Level Line (if any). Footers: page code at the right, mono, Neutral 600 |
| Accent budget | Accent tags and index numbers belong to the accent cluster: **at most one accent tag or index number per view**, in the same block as the Level Line or alone. Every other tag is Neutral 600 |
| Grammar | `REF CT-PR-05` is the owner's example form: `CT-` + two-letter family + two-digit number. Families beyond PR are not defined yet (open item 5); never invent a code that implies a certificate, licence or approval |
| Language | Codes and indexes are always Latin, even on Hindi and Punjabi pages; headings beside them use Anek |

Where it goes: every numbered website section, tender and brochure sections, record serial rows, job cards, document footers, social title band footers (mono footer per s07).

Where it never goes: in place of the ISO certificate wording (the certificate number appears only in the exact ISO sentence); on a button, alert or link; in a box that looks like a stamp; as a fake barcode or QR; as decoration without a real meaning (a tag must point to something).

Motion: none. Static text.

---

## 06.9 Device 7: Primary Band (new)

**Meaning:** Ordered and Honest materials. A solid navy band is the title block of the page: it holds identity at the edges and marks the one section that deserves emphasis.

| Property | Spec |
|---|---|
| Fill | Primary 700 `#20334B` (`ct.color.primary.700`), flat. No gradient, no photo behind, no pattern, no shadow |
| Edges | Radius 0, full-bleed width; content stays inside the 1200 px container (s07). Below a header band, a 1 px `ct.color.primary.600` rule (s07) |
| Text | White (12.83:1) or Stone (11.67:1). Headings Anek caps 700; labels mono caps in Neutral 300 (7.50:1) or White |
| Marks on a band | Accent only as Level Line, active-step underline (Accent 500, 4.47:1) and Reference Tags (Accent 400, 5.14:1) |
| Buttons on a band | White fill, Primary 700 label; focus ring White 2 px (s05) |

| Role | Height / padding | Notes |
|---|---|---|
| Header | 64 px (56 phone), fixed (option H1); floating option H2 is 72 px, transparent over the hero then solid Primary 700 after 80 px scroll (owner TBD, s07) | Reverse logo, nav, language, call, WhatsApp |
| Footer | Padding `ct.space.section.lg` (96/80/64) | Reverse logo, contacts as in INFO-BANK, page code |
| Emphasis band | Padding `ct.space.section.*`; one idea | The 5-step Step Track is the default; one key fact or one quote also allowed |
| Record title row | Sticker 14 mm of 70 mm; certificate title band about 28 mm (verify, s14); Record Block screen 40 px | White caps title |
| Table header | Row 44 px minimum | White mono caps labels |
| Social title band | Per s07 wireframe 7 and s17 | Photo below, mono footer |

Caps: **never a whole navy page**; Primary stays at about 30% of area (s03). At most 2 bands visible per screen height (s07). Per page: header, footer and at most 2 emphasis bands, never adjacent. Band to band has no gap.

Where it never goes: as a faded overlay, a diagonal or curved band, a band with an inset shadow, a band behind body paragraphs longer than 3 lines, a stack of 3 or more bands on one screen. A hero photo scrim (s08) is a separate construct and is not a Primary Band.

Motion: none. The only change is the optional H2 header colour switch, 150 ms colour only (s07), off under reduced motion.

---

## 06.10 Devices per layout, layering and density

| Rule | Value |
|---|---|
| Structural, not counted | Primary Band (06.9) and Reference Tag (06.8) have their own caps and are expected on most layouts |
| Budget | **One primary device plus at most one supporting device per layout** |
| Primary | Record Block, Step Track, or Gauge Scale arc (one) |
| Supporting | Level Line (with or without linear scale), or Technical Grid |
| Default | Level Line alone is a complete device budget; a layout with no device is a valid calm layout |
| Accent | One accent cluster per view (06.3, 06.8). The sticker underline and the certificate Level Line are the same device, never both on one sheet |
| Density cap | All devices together 30% of layout area; keep at least 60% of any view neutral (s01); accent at most 10% (s03) |
| Layering order | Ground, then photo, then Primary Band, then device, then text. Grid never overlays a photo or a band |
| Text over device | 4.5:1 normal, 3:1 large, measured at the worst pixel under the text |

Combination matrix (Y = allowed, N = not allowed, C = only with condition):

| | Level Line | Gauge Scale | Record Block | Step Track | Technical Grid |
|---|---|---|---|---|---|
| **Level Line** | n/a | Y (hangs from it) | C: only as the due-date underline | Y, short form above it | Y |
| **Gauge Scale** | Y | n/a | N | N | C: not behind the arc |
| **Record Block** | C | N | n/a | N | N |
| **Step Track** | Y | N | N | n/a | C: grid behind headline only |
| **Technical Grid** | Y | C | N | C | n/a |

---

## 06.11 With photography and type

Level Line only on a solid ground (White, Stone, Primary band) beside or under a photo, never over it. Text on a photo uses the Navy 900 scrim of 70% or more with no device on it (s08). The Record Block sits beside the photo, ideally a real sticker shot. Reference Tags may sit on the hero scrim in White only (Neutral 300 would drop below 4.5:1 on a bright photo, so not used); they are never accent on a photo. Gradients: none in the system (the v1 Navy dark hero gradient is dropped). Duotone and generative devices: not applicable. Headings beside devices are Anek caps; Devanagari and Gurmukhi headings keep their own line height and clearance (Rule 06.7).

---

## 06.12 Print and physical translation

| Item | Device | Spec (verify with vendor and signed proof) |
|---|---|---|
| Tank sticker 100 x 70 mm | Record Block, Primary Band title row, Reference Tag | Matte laminate, corner radius about 1.5 mm, 0.75 mm outline, title row 14 mm flat Primary 700 with white caps, ruled fields 0.5 mm min, mono dates, serial row 17 mm, 1 mm accent underline under "Next due". **No coral band** |
| Cleaning Certificate A4 portrait | Primary Band title block, Level Line long, Record Block date block, Reference Tag | 20 mm margins; Primary title band; Level Line 1 pt under it; date block square corners with 0.25 pt ruled cells; mono reference code. Optional keyline: one 0.75 pt Primary 700 line 10 mm from trim, square corners. **No guilloche, rosette, seal or ornate border** (it would read as an approval claim) |
| Service van | Level Line stripe | Flat accent vinyl, straight, square ends, 5% of panel short side, min 25 mm; 2X from the logo; no wrap around curves, no taper. Navy panel areas are an s16 decision |
| Signboard 600 x 900 mm | Level Line, Primary Band | 30 mm stripe (5%), flat; panel corners square or fixed 4 mm (s05) |
| Uniform | None on fabric at launch | Logo only (s02). Accent piping needs owner approval and a thread swatch (s16) |
| Name badge | Reference Tag, Level Line short (optional) | Mono ID code under the name; line 12 mm x 1 mm, matte |
| Letterhead, tender cover | Level Line long, Reference Tag | Page 1 only, 1 pt; mono code footer with 0.25 pt rule above (s07) |
| Franchise brochure | Step Track on Primary Band, Reference Tags | Disclaimer sits beside any figure, never inside a device |
| Tender sections | Reference Tag, table-header Primary Band | Index `02.1` per section, neutral 600 |

---

## 06.13 Forbidden devices

| Forbidden | Why | Test |
|---|---|---|
| Droplets, splashes, crowns, waves, swooshes, ripples, bubbles | Category cliche; persona avoid list; s05.5 | Any teardrop or wavy contour? |
| Sun rays, radial bursts, bokeh, lens flare | Persona avoid list | Any element radiating from a point? |
| Starbursts, badges, seals, rosettes, ribbons, shields, laurels | Looks like an approval claim; "Offer" burst is a pressure tactic | Is a shape enclosing a claim or number as a stamp? |
| Cartoon bacteria, germs, "dirty vs clean" split | Explain, never frighten | Any microbe or shock contrast? |
| Rupee signs, coins, notes, money stacks | Banned for franchise imagery (s01.9) | Any money object or symbol as decoration? (A price in live text is fine) |
| Tricolour or flag-like bands, saffron-white-green stacks | National symbol; accent reads close to saffron (s01.11) | Accent, white and a green stacked in bands? |
| Rangoli, kolam, phulkari, block print, mandala, festival clip art | Cultural property; see 06.16 | Any craft or festival pattern? |
| Brutalist noise, scanlines, halftone, ASCII art, glitch | Rejected style sources (v2); not quiet | Any texture, noise or text-art effect? |
| Aviation red, hazard stripes, warning tape, red or orange urgency devices, countdown bars | Persona ban; accent never alarms | Does the device suggest time pressure or danger? |
| Diagonal slashes, hexagon grids, circuit lines, DNA helices, dot-and-crosshair grids | Not in the s05 vocabulary; "tech" cliche | Any shape outside square, rectangle, line, tick, elbow, gauge arc? |
| Gradients, glow, shadows, rounded pills, 8/12/16 radii on devices | s03 and s05.6 | Any non-flat fill or corner above 4 px? |
| Fake barcodes, QR as ornament, invented serials that mimic certificate numbers | Implied approval | Does any code point to nothing? |
| Highlighter or "marker" swashes | Cheap flyer aesthetic | Any hand-drawn mark? |

---

## 06.14 Distinctive-asset plan

| Item | Plan |
|---|---|
| Asset repeated relentlessly | **The Level Line**, in accent, always paired with the CLEAN TANK SERVICES lockup in view (s01 Rule 01.7), seen with navy Primary Bands |
| Why this one | Cheap to reproduce for every franchise partner, works in one colour and at van scale, and sits on the certificate, sticker, van and page, so one device links every touchpoint |
| Position constancy | Short form under the top heading on web and social; long form under the certificate title band; underline under the sticker CERT NO.; stripe on the van |
| Mandatory surfaces | Certificate, sticker, van, letterhead page 1, tender cover, website top-level page heading, brochure cover |
| Supporting assets | Record Block (the Documented story), Step Track (the Exact story), Reference Tag and Primary Band (the Ordered story): used consistently, not on every surface |
| Do not change | The adopted geometry for 12 months after adoption (s01.7) |

Measurement (internal starting targets, owner may revise):

| Test | Method | Target | When |
|---|---|---|---|
| Logo-off recognition | Show five layouts with name and logo removed; ask to name the brand or the service | Baseline, then track yearly | After first campaign |
| Device audit | Check 10 franchise materials against 06.10 and 06.14 | 100% of mandatory surfaces carry the Level Line to spec; 0 forbidden devices | Every 6 months (s19) |

---

## 06.15 Rules

```
RULE 06.1:     Use at most one primary device plus one supporting device per layout, on top of the structural Primary Band and Reference Tags.
CLASS:         MUST
REASON:        Restrained and Exact: a flexible system stays coherent only with a budget.
EXACT SPEC:    Primary: Record Block, Step Track or Gauge Scale arc. Supporting: Level Line or Technical Grid. Together 30% of area or less. Matrix in 06.10.
EXAMPLE:       Website "How we clean" page: Step Track on a Primary Band plus a short Level Line under the H1.
ANTI-EXAMPLE:  A flyer with Step Track, Gauge arc, Technical Grid and two accent rules.
TEST:          Count devices other than band and tags: more than two? Reject.
EXCEPTION:     Sticker and certificate: the Level Line and the due-date underline are one device.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 06.2:     Draw the Level Line with the constants in 06.3 and keep it to one per view.
CLASS:         MUST
REASON:        Exact: the signature device works only if it is always the same.
EXACT SPEC:    3 px Accent 500 #EE7555, square ends; short 48 px, 12 px below heading; long full container width; print 1 pt paper, 1 mm vinyl; never cropped, rotated, tapered, dashed or curved; draws once in 240 ms.
EXAMPLE:       48 px accent rule under the H1 on the services page.
ANTI-EXAMPLE:  A 6 px wavy accent underline on a van with a tapered end.
TEST:          Is the stroke 3 px (or the k step), straight, square-ended, Accent 500, and alone in the view?
EXCEPTION:     Social and slide canvases use k = 2 steps. Owner approves others.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 06.3:     Keep accent devices off photographs, buttons, alerts and anything urgent.
CLASS:         NEVER
REASON:        Honest materials: accent is a marker, never an alarm or a CTA; 2.87:1 on White, 2.31:1 on a worst-case scrim.
EXACT SPEC:    Accent device only on White, Stone, Primary 700, 800, 900. Never inside buttons, tags with fill, alerts, countdowns. Buttons are Primary 700 fill with a white label.
EXAMPLE:       Accent line on a white section beside the hero photo.
ANTI-EXAMPLE:  Accent rule across the rooftop photo next to "Book now".
TEST:          Is the ground under every accent device a flat approved colour, and is no control filled accent?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 06.4:     Build the Record Block as a ruled spec tag with a 3 px accent underline under the CERT NO. in the reference row, and put nothing in it that implies approval.
CLASS:         MUST
REASON:        Documented and Responsible: the record is the hero; no invented certifications.
EXACT SPEC:    Primary title row, 2 px Primary 700 outline, two equal ruled fields with 1 px gaps, mono caps values, reference row, 3 px Accent 500 underline under CERT NO. in the reference row, labels "Cleaned on" and "Next due", date format 03 OCT 2026, radius per s05.13. No coral band.
EXAMPLE:       Tank sticker 100 x 70 mm with a 14 mm navy title row and a 1.5 mm corner radius.
ANTI-EXAMPLE:  Sticker in a starburst with a tick and "Certified", or one with a coral band.
TEST:          Title row, two ruled fields, reference row, one underline, no seal, no ISO line?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 06.5:     Never use the forbidden devices in 06.13 or any shape outside the s05 vocabulary.
CLASS:         NEVER
REASON:        Restrained: persona avoid list and rejected style sources.
EXACT SPEC:    Droplets, splashes, waves, swooshes, rays, bokeh, badges, seals, bacteria, rupee or coin, tricolour, rangoli, noise, scanlines, halftone, ASCII art and similar.
EXAMPLE:       A flat navy rectangle with a short accent Level Line.
ANTI-EXAMPLE:  A coin stack with an orange burst on a franchise flyer.
TEST:          Does any item in the 06.13 table appear?
EXCEPTION:     None. The anti-board is internal reference (s01.8).
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 06.6:     Keep every decorative device out of the accessibility tree and never let it carry meaning alone.
CLASS:         MUST
REASON:        Documented: WCAG 1.1.1, 1.4.1 and 1.4.11.
EXACT SPEC:    Devices are CSS backgrounds, or SVG with aria-hidden="true". Dates, steps, figures and reference codes are live text beside the device.
EXAMPLE:       Record Block as HTML fields; the accent underline is a CSS border.
ANTI-EXAMPLE:  A due date shown only by where a tick sits on a scale.
TEST:          Remove all devices: is every fact still readable?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 06.7:     Keep the Level Line clear of Devanagari and Gurmukhi head strokes.
CLASS:         MUST
REASON:        Rooted, not themed: scripts are first-class (s01).
EXACT SPEC:    Line goes below or beside the heading; 12 px under the lowest matra (8 px minimum), never above.
EXAMPLE:       Punjabi H1 with a 48 px accent line 12 px under its lowest vowel sign.
ANTI-EXAMPLE:  An accent rule directly above a Hindi heading reading as a second shirorekha.
TEST:          Is the rule under or beside the heading, 8 px or more from any matra?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 06.8:     Set Reference Tags in mono caps, as plain text, with no more than one in accent per view.
CLASS:         MUST
REASON:        Documented and Ordered: codes make sections and records findable; accent stays a single marker.
EXACT SPEC:    IBM Plex Mono 500/600 caps, +0.08 to 0.1em, 11 to 13 px (print 7 pt min); Accent 700 (6.51:1 White, 5.92:1 Stone) or Neutral 600 (5.87:1, 5.33:1); on Primary 700 Accent 400 (5.14:1), Neutral 300 (7.50:1) or White; no container; 8 px above the heading.
EXAMPLE:       "02.1" in Accent 700 above "HOW WE CLEAN", other page tags Neutral 600; "REF CT-PR-05" in the process band footer.
ANTI-EXAMPLE:  A coral pill reading "NEW", or a tag styled like an ISO certificate number.
TEST:          Plain mono caps text, one accent tag at most, code points to something real?
EXCEPTION:     None. New code families are registered by the central owner (open item 5).
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 06.9:     Use the Primary Band only for header, footer, selected emphasis sections, record title rows and table headers, never for a whole page.
CLASS:         MUST
REASON:        Ordered and Honest materials: solid navy frames the page; 60/30/10 holds.
EXACT SPEC:    Primary 700 flat, radius 0, full-bleed, content in the 1200 px container; at most 2 bands per screen height; page = header + footer + at most 2 non-adjacent emphasis bands; no gradient, pattern, photo or shadow behind; text White 12.83:1 or Stone 11.67:1.
EXAMPLE:       "How we clean" Step Track on one navy band between two white sections.
ANTI-EXAMPLE:  A full navy page, or a navy band with a faint grid and a glow.
TEST:          Flat navy, square, 2 bands or fewer on screen, no overlay?
EXCEPTION:     Dark-mode pages use Primary 900 as ground (s12); owner approves others.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

Constants in 06.4, 06.6 and 06.7 (Gauge Scale, Step Track, Technical Grid) bind at the tier shown in 06.2.

---

## 06.16 Cultural-motif policy and Indic text interplay

| Topic | Policy |
|---|---|
| Brand devices | None of the seven devices is derived from craft, textile, festival or religious design |
| Cultural motifs | No rangoli, kolam, phulkari, block print, mandala, paisley or festival clip art as a brand device or background |
| Provenance | Phulkari is a registered GI (application 27, registered 22-10-2010, Punjab, Haryana and Rajasthan); Bagru Hand Block Print is a registered GI (application 183, registered 11-05-2011, Rajasthan). Community-owned motifs are not trademark patterns |
| Allowed | Indian craft only as credited photography of real work, or a paid, credited collaboration approved by the owner |
| Religious symbols | None used as devices or backgrounds |
| Flag and festival | No accent, white and green banding; occasion posts stay inside the palette (s01.11) |
| Digits | Latin (0 to 9) tabular numerals in all scripts for dates, node numerals, scale numerals and reference codes. Open item: confirm with native review whether Devanagari or Gurmukhi digits are wanted on any surface |
| Record Block labels | Draft translations in 06.5, needs native review. Indic labels are set in Anek (Plex Mono has no Indic glyphs); widths are tested in the field, which must not shrink below the 8 pt print or 12 px screen floor |
| Step labels | Hindi and Punjabi step names are not defined here; they need approved wording (p7 and p8) |
| Shirorekha and sirorekha | Level Line stays below or beside headings (Rule 06.7); Gurmukhi and Devanagari line height 1.60 and 1.65 (s04) leave room for the 12 px gap. Indic headings are not uppercased |

---

## 06.17 Do / Don't

| Do (correct) | Don't (incorrect) |
|---|---|
| Do draw one short accent Level Line under a page heading. | Don't add a second accent rule or an accent block to the same view. |
| Do build the Record Block as a ruled spec tag with real dates in mono. | Don't wrap it in a seal, add an approval tick or fill a band with coral. |
| Do show the five steps as square navy nodes numbered 01 to 05 with full labels. | Don't colour steps accent or green, use circles, or show six. |
| Do use the Technical Grid only as a whisper behind a large headline. | Don't place it behind text under 18 px, muted text, tables, forms or on a band. |
| Do keep the Level Line on solid white, stone or navy. | Don't lay it across a photograph or make it a button. |
| Do set reference tags as plain mono caps above a section heading. | Don't box them as pills or invent codes that look like certificates. |
| Do use a flat navy band for header, footer and one emphasis section. | Don't make the page navy, add gradients or stack three bands on one screen. |

---

## 06.18 Accessibility & India notes

- Devices are `aria-hidden="true"` or CSS backgrounds; facts and codes are live text (1.1.1, 1.4.1). Reference Tags are text, not headings.
- Level Line on White 2.87:1 and Stone 2.61:1 is allowed only because nothing depends on it; on Primary 700 4.47:1. Ticks and nodes are Primary 12.83:1.
- Reference Tag text: Accent 700 6.51:1 on White, Neutral 600 5.87:1; Accent 400 on Primary 700 5.14:1. All pass 4.5:1.
- Text over devices: 4.5:1 normal, 3:1 large, at the worst pixel (Technical Grid worst cases 9.43:1, 10.91:1 on White; 7.50:1, 8.67:1 on Stone; muted text banned on the grid).
- Motion is limited to the one Level Line draw (240 ms, once) and is off under `prefers-reduced-motion`; nothing moves over 5 seconds (2.2.2).
- Focus ring on bands is White 2 px (s05). Test Hindi and Punjabi headings with the Level Line, and 1 px ticks and 0.5 mm rules on a budget Android in sunlight and on uncoated stock.

---

## 06.19 Tokens and files

Tokens: `ct.motif.level-line.height` (= `ct.border.width.bold`), `.short` 48, `.gap` 12, `ct.motif.scale.pitch` 8, `.tick.minor` 6, `.tick.major` 12, `.module` 200, `ct.motif.grid.cell` 32, `.tile` 160, `.minor` and `.major` colours (`ct.color.neutral.100/200` on White, `200/300` on Stone), `ct.motif.reftag.size` 11 to 13, `.tracking` 0.08em, `ct.motif.band.fill` (= `ct.color.primary.700`), `ct.motif.band.header` 64 (56 phone). CSS `--ct-motif-*`. Level Line animation: `scaleX` 0 to 1, 240 ms (`ct.motion.duration.moderate`), `cubic-bezier(0.4,0.14,0.3,1)`, only inside `prefers-reduced-motion: no-preference`. Removed from v1: coral band token, Tank Grid opacity tokens, 700 ms settle duration.

Token names follow s03 and s05 (`ct.motif.*` to be registered in s12). Files: `ct-motif-<device>-<colour>[-<size>].<ext>`, for example `ct-motif-level-line-accent-short.svg`, `ct-motif-gauge-scale-primary.svg`, `ct-motif-record-block-fullcolor.svg`, `ct-motif-step-track-primary.svg`, `ct-motif-technical-grid-light.svg`, in `ct-motif-kit-v2.0/` beside the logo kit. Reference Tags and Primary Bands are live type and CSS, not artwork. Owner of master files: central brand owner (Gobind Galaxy).

---

## 06.20 Day one vs later

| Day one | Later (months 3 to 12 and beyond) |
|---|---|
| Level Line short and long, with solid colour versions and a one-page misuse list (06.13) | Level Line scale module on vans after sign-maker tests |
| Primary Band (header, footer, one emphasis band) and Reference Tags (section index, record serial) | New reference code families, registered in s19 |
| Record Block on sticker and certificate | Gauge Scale arc |
| Step Track on the website and brochure | Technical Grid for decks, empty states and website bands |
| Calm layout with no device (valid) | Duotone, generative, hero supergraphic: not planned |
| SVG masters for devices 1 to 4 | Cultural collaborations with credited partners (owner approval) |
| Logo-off test baseline | Fame and uniqueness study once there is reach |

---

## 06.21 Checklist

- [ ] Definition of "device" and the seven named devices published
- [ ] Construction diagram for each (Level Line, Gauge Scale, Record Block, Step Track, Technical Grid, Reference Tag, Primary Band) with the values above
- [ ] Scale ladder (web, social, print, sticker, van) checked at real size
- [ ] Density cap (30%) and calm zones stated and tested on three layouts
- [ ] Devices-per-layout cap (one primary plus one supporting) shown on a budget diagram
- [ ] Combinations with photos and type shown, including Hindi and Punjabi headings
- [ ] One-colour, reversed and dark-page versions of each device built
- [ ] Misuse page from 06.13 with thumbnails
- [ ] Text-over-device contrast checked at the worst pixel
- [ ] Sticker proof shows navy title row, 0.5 mm ruled fields, accent underline and no coral band
- [ ] Reference Tag contrast checked in Accent 700, Neutral 600 and on Primary 700
- [ ] Cultural-motif policy approved by the owner
- [ ] Asset index, file names and owner recorded
- [ ] Devices tested with the logo hidden, in greyscale and at 16 px (Level Line short form where applicable)

---

## 06.22 Open items & evidence needed

| # | Item | Needed |
|---|---|---|
| 1 | Level Line adoption | Candidate only: owner decision, then logo-off recognition test (s05 open item 2). Align with the s02 route: if the logo also uses an accent level line, check the device does not duplicate the symbol |
| 2 | Print line weights | 1 pt on paper and 1 mm on vinyl are s05 start values; proof accent on uncoated stock and sticker ink for UV. s07 lists 0.25 pt sticker ruled cells; vinyl minimum is 0.5 mm (s05), s14 to settle |
| 3 | Sticker size and rows | 100 x 70 mm and rows 14 / 34 / 17 mm are from s07; confirm in s14 with the printer |
| 4 | Scale on van | Pitch and tick sizes need sign-maker tests; van stripe colour area against the 10% accent cap (s16) |
| 5 | Reference code grammar | `REF CT-PR-05` is the owner's example. Families (PR and others), numbering and who issues codes need an owner decision and a register in s19 |
| 6 | Gauge Scale figures | Any figure in the arc must exist in INFO-BANK with its qualifier; "250 bar" is subject to site and equipment |
| 7 | Indic labels | "Cleaned on" and "Next due" in Hindi and Punjabi are drafts: native review. Step names in Indic scripts need approved wording |
| 8 | Digits | Latin digits in all scripts is the working default; confirm with native readers |
| 9 | Certificate keyline and title band | Optional 0.75 pt keyline at 10 mm from trim and title band height (about 28 mm): owner decision and s14 proof |
| 10 | Uniform piping | Accent trim needs owner approval and a thread swatch (s16) |
| 11 | Technical Grid | Line colours are start values; proof on budget phones and decks before adoption; print not planned |
| 12 | Header | Fixed (H1) or floating (H2) is an owner decision (s07); band spec covers both |
| 13 | Token names | `ct.motif.*` to be registered in s12 |
| 14 | Evidence | Coverage cap 30% and per-layout cap are internal start values (only Tearfund publishes a cap, 25%, for a charity); confirm by testing |
| 15 | Claims | No device may be used to imply certification, approval or a measured water-quality result; the water-quality qualifier (source water, plumbing, tank condition and later maintenance are outside our service) applies wherever a health line sits near a device |
| 16 | Secondary colour | TBD (owner). No device uses it; revisit if one is assigned |
