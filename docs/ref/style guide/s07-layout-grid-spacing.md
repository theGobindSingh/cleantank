# Clean Tank Services: Style Guide
# 07. Layout, Grid & Spacing

> This pillar governs where things sit and how far apart they are: the base unit, spacing scale, responsive grid, visible structure, density, page patterns, print grids, social formats, logo placement zones and bilingual layout. For Clean Tank it matters because the brand promises one standard for every tank: a customer in Kharar and a hospital in Kanpur should receive a sticker, a certificate and a web page that sit on the same visible structure. Rules, numbered sections and generous empty space show the work is exact, ordered and unhurried.

Sheet CT-SG-07 | v2.0 | 08 Oct 2026 (Quiet Utility revision) | Tier legend: LOCK = central brand owner approves any change · GUARD = varies inside stated limits · FLEX = judgment within principles

## 07.1 Principles and inheritance

Big idea: **Quiet precision. One standard, every tank.** Layout carries it through five principles.

| Principle | Layout behaviour |
|---|---|
| Exact | One 4 px base, one 8 px rhythm, one grid per breakpoint. Franchise partners reuse templates, they do not re-decide spacing. |
| Ordered | Strict 12-column grid. Zones are divided by 1 px rules. Sections are numbered (02.1). Process steps sit in equal ruled cells. |
| Restrained | One idea per section, one primary action per view, generous gaps (ma). Emphasis comes from space and size, never from badges, bursts or crowded corners. |
| Documented | Records (certificate, sticker, job card) are spec sheets: ruled field grid, mono values, reference codes, so a date or number is found in the same place every time. |
| Honest materials | Layout stays flat: no shadows, no decorative frames. Structure is drawn with 1 px lines and solid primary bands. Photos show concrete, steel and water. |

**Density statement:** Airy between sections, orderly inside them. Dense only in tables, certificates and tender documents, where the reader is checking facts. Two adjectives: *exact, unhurried*. Sliders (s01): Airy/Dense 3, Quiet/Loud 1, Still/Lively 1.

**Japandi spacing.** Each section holds one idea and is separated from the next by `ct.space.section.*` (64 / 80 / 96). Asymmetric balance is allowed on the 12-column grid (for example copy in cols 1 to 5 with cols 6 to 7 left empty and a figure in cols 8 to 12), provided every edge still lands on a column line. Empty columns are deliberate, never filled to "balance".

**60/30/10 applied to layout zones** (area of a single view or page, per s03):

| Share | Colour | Layout zones | Limit |
|---|---|---|---|
| 60% | Neutral: white `ct.color.neutral.0` `#FFFFFF` and stone `ct.color.neutral.50` (about `#F5F4F1`, final hex per s03 v2) | Page canvas, content sections, form areas, certificate body, margins | Majority of every page and document. Margins and gutters count as neutral. Sections alternate white and stone. |
| 30% | Primary `ct.color.primary.700` `#20334B` | Header, footer, selected emphasis sections (5-step process band), certificate title band, sticker title band, table headers, Instagram title band | Never a whole navy page. At most 2 primary bands visible per screen height. |
| 10% | Accent `ct.color.accent.*` (500 `#EE7555`) | Marker only: Level Line, active step underline, reference tags and index numbers, one key figure per view | One accent cluster per view. Never a button fill, never a full-width band, never body text on white, never a warning. |

Secondary colour (`ct.color.secondary.*`) is TBD (owner to decide). No layout zone is assigned to it until it is set.

## 07.2 Base unit and spacing scale

Base unit **4 px**, layout rhythm **8 px**. Every margin, padding, gap, image and control height is a multiple of 4; layout-level gaps prefer multiples of 8. Values are rem at 16 px root, so 200% text resize scales gutters too.

| Token | CSS variable | px | rem | Use for |
|---|---|---|---|---|
| `ct.space.0` | `--ct-space-0` | 0 | 0 | Reset |
| `ct.space.1` | `--ct-space-1` | 4 | 0.25 | Icon-to-label gap, hairline offsets (half-step) |
| `ct.space.2` | `--ct-space-2` | 8 | 0.5 | Related items, label to field, min gap between touch targets |
| `ct.space.3` | `--ct-space-3` | 12 | 0.75 | Compact table cell padding, chip padding |
| `ct.space.4` | `--ct-space-4` | 16 | 1 | Default padding, mobile margin, mobile gutter |
| `ct.space.5` | `--ct-space-5` | 24 | 1.5 | Cell padding (ruled cells), tablet gutter, paragraph-to-heading |
| `ct.space.6` | `--ct-space-6` | 32 | 2 | Group gap, tablet margin |
| `ct.space.7` | `--ct-space-7` | 40 | 2.5 | Desktop margin, large cell padding |
| `ct.space.8` | `--ct-space-8` | 48 | 3 | Sub-section gap, button/field height |
| `ct.space.9` | `--ct-space-9` | 64 | 4 | Section gap (mobile), social margin |
| `ct.space.10` | `--ct-space-10` | 80 | 5 | Section gap (tablet) |
| `ct.space.11` | `--ct-space-11` | 96 | 6 | Section gap (desktop), hero padding |
| `ct.space.12` | `--ct-space-12` | 128 | 8 | Hero top on 1280+, rare |

**Semantic aliases** (developers use these first):

| Token | Value | Note |
|---|---|---|
| `ct.space.inset.default` | space.4 (16) | Default container padding |
| `ct.space.inset.cell` | space.5 mobile, space.7 desktop (24, 40) | Ruled cells and panels |
| `ct.space.stack.text` | 1em | Paragraph spacing, per s04 |
| `ct.space.stack.group` | space.5 (24) | Between heading block and content |
| `ct.space.section.sm` | space.9 (64) | Below 768 |
| `ct.space.section.md` | space.10 (80) | 768 to 1023 |
| `ct.space.section.lg` | space.11 (96) | 1024 and up |
| `ct.space.target.min` | space.8 (48) | Touch and click target |

No value outside the scale (13, 15, 18, 20, 36 px) may be used. Print and social use their own units (07.8 to 07.10) mapped to this ladder.

**Baseline and line height.** Layout boxes snap to 4 px. Text lines follow the s04 ratios (Latin body 1.50, condensed caps headings about 1.0 to 1.05, Devanagari 1.65, Gurmukhi 1.60); 16/24 Latin sits on the grid. Indic body lines (26 px at 16 px) are not multiples of 4: stacked blocks absorb the difference with `ct.space.*` padding, and text boxes never get fixed heights. Logged as an open item.

## 07.3 Breakpoints, columns, gutters, margins

Mobile-first. The 4-column base is designed at **320 CSS px** so reflow works; 360 is the primary design width (common Android phone).

| Name | Min width | Columns | Margin | Gutter | Max content | Notes |
|---|---|---|---|---|---|---|
| base | 0 (design at 320) | 4 | 16 | 16 | fluid | Single column content |
| `sm` | 360 | 4 | 16 | 16 | fluid | Primary phone design |
| `md` | 768 | 8 | 32 | 24 | fluid | Tablet, 2-up cells |
| `lg` | 1024 | 12 | 40 | 24 | 1200 | Laptop |
| `xl` | 1280 | 12 | 40 | 24 | 1200 | Desktop, text 18 px (s04) |
| `2xl` | 1440 | 12 | auto | 24 | 1200 | Content stays 1200, centred; side space is neutral |

Max content width **1200 px**. Full-bleed items (hero photo, primary bands, footer, 1 px zone rules) extend edge to edge; their content stays inside the 1200 container. Tokens: `ct.layout.breakpoint.sm|md|lg|xl|2xl` = 360 | 768 | 1024 | 1280 | 1440; `ct.layout.columns` = 4 | 4 | 8 | 12 | 12 | 12; `ct.layout.margin`, `ct.layout.gutter` as above.

**Grid overlay (12-column, 1200 container, 24 gutter):**

```
|<--------------------- 1200 container --------------------->|
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10| 11| 12|   col = 76 px
 24-px gutters between.
 Split section: copy cols 1-5 | empty 6-7 | figure or table cols 8-12
 Text-only editorial: cols 3-10 or cols 1-7 (never full 12)
```

Text never crosses a gutter. Images and bands may span any whole number of columns. Asymmetric splits are allowed if they use whole columns.

## 07.4 Visible structure: rules, ruled cells, numbering, reference tags

Structure is drawn, not decorated. No shadows, no glows, no card elevation.

| Device | Spec | Token / note |
|---|---|---|
| Zone rule | 1 px line, full-bleed or container width, between header, sections and footer. Colour `ct.color.neutral.200` on white/stone; `ct.color.primary.700` for the strongest division (under a section title) | `ct.line.hairline` = 1 px; square caps, miter joins |
| Ruled cells | Grid container background `neutral.200` (or primary 700 on a primary band at 40% line), `gap: 1px`, each cell filled white or stone, padding `space.5` mobile / `space.7` desktop. Gives 1 px lines with no borders to double up | Cell radius 0; outer container radius 0 to 2 (`ct.radius.none` / `xs`) |
| Section number | Mono caps, Accent 700 on neutral (5.92:1 on stone), Accent 400 on primary (5.14:1). Format `02`, sub-blocks `02.1`, `02.2`. Sits above the section title, left-aligned on col 1 | Numbering is continuous down the page |
| Reference tag | IBM Plex Mono 500/600, UPPERCASE, tracking +0.08 to 0.1em, 11 to 13 px. Example `REF CT-PR-05`, `CT-CERT-0001`. Primary 700 or neutral 600 text (5.65:1 on stone); accent only for the index number | Tags label sections, cards, records, photos |
| Corner radius | Default `ct.radius.sm` 4 px (buttons, inputs, image frames). Tables, rules, ruled cells 0 to 2 | No 8, 12, 16 or full radius |
| Circles | Only literal round objects (manhole, gauge dial) | |

Heading style per s04: Anek Latin condensed caps 700. Labels and data: IBM Plex Mono caps.

## 07.5 Reading measure, alignment, hierarchy

| Script | Measure (characters per line) | Container cap | Note |
|---|---|---|---|
| Latin (English) | 45 to 75, aim 60 to 68 | `max-width: 68ch` | Body 16 to 18 px per s04 |
| Devanagari (Hindi) | 35 to 60 (s04) | `max-width: 55ch` | Line height 1.65 |
| Gurmukhi (Punjabi) | 35 to 60 (s04) | `max-width: 55ch` | Line height 1.60 |
| Tables, forms | Not capped | Width of grid cells | Labels above fields |

`ch` depends on the font; test with real Anek strings (open item). Prose containers use the script cap via `:lang()`.

**Alignment:** left-aligned, ragged right, always (s04: never justified). Centre is allowed in only two places: the title line of the Cleaning Certificate (4 words or fewer) and short confirmation states (one line). Hero, cells, process steps, footers and stickers stay left-aligned.

**Hierarchy by size and space, in this order:** (1) section number and headline with the largest space above, (2) one supporting line, (3) one primary action (primary 700 fill, white label; on photo or primary band: white fill, primary label), (4) evidence (image, certificate, number). A secondary action is a 1 px primary outline button or an underlined text link. Accent is never a button fill.

**Density by audience:**

| Audience | Density | Layout behaviour |
|---|---|---|
| Families, homes | Airiest | Single column on phone, one CTA, WhatsApp and call as primary actions, short sections, 18 px body at 1280, photo of a technician at work |
| Apartment societies (RWA) | Airy, a bit more information | Service types, process, AMC and certificate shown as scannable ruled rows |
| Institutions, tenders | Orderly, denser | Document grid (12 col), tables, numbered headings, formal tone, certificate and process records shown in full |
| Franchise partners | Structured, airy | Same grid as master brand; one section per topic; disclaimer beside every figure (never below 14 px web, 8 pt print); no money imagery |

## 07.6 Above the fold, density modes, targets

**Above-the-fold limit: 5 content elements** (s01 start value): (1) headline, (2) one supporting line, (3) CTAs (one primary, optional secondary outline), (4) photo (the hero background itself), (5) brand mark. Header chrome (navigation, language switch, phone and WhatsApp links) and the sticky mobile action bar are utility and do not count, but the header holds at most 4 items on phone (logo, language, call, menu). Anything extra (badges, ISO line, client logos) moves below the fold. Re-test with the first real hero (open item).

| Density mode | Use | Row or control height | Cell padding |
|---|---|---|---|
| Comfortable (default) | Forms, lists, service tables | 56 px rows; 48 px fields | space.4 |
| Compact | Dense tender tables, franchise data tables, admin lists | 40 px rows | space.3 |

Compact is never used for touch-only phone screens or for customer-facing forms.

**Targets:** brand minimum 48 x 48 CSS px for every control (button height 44 to 48 per s13, 48 for touch), minimum 8 px (`space.2`) between adjacent targets. WCAG 2.5.8 floor is 24 x 24 CSS px; the brand exceeds it so a technician with wet or gloved hands can tap reliably. Inline text links in prose are exempt but keep 4 px minimum vertical line spacing.

## 07.7 Website page and section patterns

Every pattern uses the container, section spacing (64 / 80 / 96), a 1 px zone rule between sections, a section number and a mono reference tag. Backgrounds alternate white and stone; primary bands only for header, footer and selected emphasis sections. Visual order equals DOM order.

| Archetype | Layout spec (lg, 12 col) | Mobile (4 col) | Content slots | Zone colour |
|---|---|---|---|---|
| **A1 Hero** | Full-bleed background photo, min height 640 (lg), content in cols 1 to 7, vertically centred, bottom-aligned option allowed; flat scrim over photo; padding 96 | Photo full-bleed behind content, min height 560, padding 16 / 64 | H1 condensed caps, one line, CTAs (primary white fill + primary label, secondary 1 px white outline + white label); mono ref tag; brand mark in header | Photo + flat Navy 900 scrim |
| **A2 Process band (5 steps)** | Full-bleed primary band; 5 ruled cells in a 5-column sub-grid (cols 2.4 each), 1 px gap (line `primary.400`), each cell: mono number `01` to `05`, icon (s10), step name, one line; step 05 dashed with "* Where applicable" | Vertical list of 5 ruled rows, number left (48 px), text right | Steps in fixed order: Dewatering, High-pressure cleaning, Sludge & water removal, Disinfection (antibacterial), UV treatment (where applicable) | Primary 700 band, white text 12.83:1, accent 400 numerals `#F1876A` 5.14:1 |
| **A3 Services** | Ruled cells in 3 columns (4 cols each), 1 px gap, cell padding 40 | 1 column, padding 24 | Tank type, capacity range (tabular, mono), one line, link | Stone section, white cells, `neutral.200` lines |
| **A4 AMC** | Text cols 1 to 5, schedule or reminder table cols 8 to 12 (cols 6 to 7 empty) | Stacked | "Never Miss Your Tank Cleaning Schedule", scheduled cleaning, reminders, service history | White section |
| **A5 Clients** | Name row in ruled cells, 6 across, 64 px row height, greyscale | 2 across | Only permitted names; no logos until permission is recorded | Stone |
| **A6 Franchise** | Copy cols 1 to 7, figures table cols 8 to 12; disclaimer directly under figures, full width of that block, 14 px min | Stacked, disclaimer under figures | Figures only from the approved set, with the financial disclaimer; no coins or money imagery | White section; primary sub-band only if selected as emphasis |
| **A7 Enquiry form** | Form cols 1 to 6 (single column fields, 48 px height, 16 gap), contact block cols 8 to 12 (phone, WhatsApp, address) in ruled cells | Form first, contact block below | Name, phone, city, tank type, preferred language, message | Stone section, labels above fields |

### Header: two options (owner TBD)

| | Option H1: fixed solid bar | Option H2: floating, transparent to solid |
|---|---|---|
| Behaviour | Primary 700 bar, 64 px high (56 on phone), fixed at top. Hero starts below it. | Transparent over the hero photo at top of page, 72 px high; becomes solid primary 700 after 80 px of scroll |
| Contents | Logo (reverse, per s02), nav, language, call, WhatsApp | Same; white text and logo over the photo |
| Over the photo | Photo is clear of the bar, no scrim needed under it | Flat Navy 900 scrim extends under the header zone so white text meets 4.5:1 (s08: 70% or more) |
| Transition | None | Background colour change only, 150 ms, no slide or blur; respects reduced motion |
| Pros | Simplest, always legible, consistent with the footer | Photo gets full height, more editorial |
| Risks | Uses 64 px of hero height | Legibility depends on the photo; needs the scrim and a test on every hero image |
| Shared rules | 1 px `primary.600` rule under the bar; `scroll-padding-top` equals header height; header must not hide a focused element | Same |

### Wireframes

**Wireframe 1: website hero (photo), mobile 360 and desktop 1280**

```
MOBILE 360                       DESKTOP 1280 (container 1200)
+---------------------------+    +----------------------------------------------------+
|#[logo]  [Hi] [call] [=]###|    |#[logo]    SERVICES PROCESS AMC     [ENG v] [call]#|  header
+---------------------------+    +----------------------------------------------------+  (H1 solid or
|PPPPPPPPPPPPPPPPPPPPPPPPPPP|    |PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP|   H2 floating)
|PPP photo full-bleed PPPPPP|    |PPPP photo full-bleed + flat navy scrim PPPPPPPPPPPP|
|P REF CT-WEB-01 (mono)PPPPP|    |PP 96                                               |
|P 16                  PPPPP|    |PP REF CT-WEB-01  (mono, cols 1-7)                  |
|P WHEN WAS YOUR TANK  PPPPP|    |PP WHEN WAS YOUR TANK LAST CLEANED?                 |
|P LAST CLEANED?       PPPPP|    |PP (condensed caps H1, left)                        |
|P (condensed caps)    PPPPP|    |PP 16                                               |
|P 16                  PPPPP|    |PP One supporting line.                             |
|P One supporting line.PPPPP|    |PP 24                                               |
|P 24                  PPPPP|    |PP [ ENQUIRE ON WHATSAPP ]  [ SEE THE PROCESS ]     |
|P [ENQUIRE ON WHATSAPP]PPPP|    |PP  white fill, primary      1 px white outline     |
|P  48 px, white fill  PPPPP|    |PP 96                                               |
|P [SEE THE PROCESS]   PPPPP|    +----------------------------------------------------+
|P 64                  PPPPP|    1 px rule, then 02 section (white or stone), 96 gap
+---------------------------+    5 elements: headline, line, CTAs, photo, brand mark
 1 px rule, 64 gap, section 02   (nav, call, language are chrome, not counted)
```

**Wireframe 2: content section on stone with ruled cells (desktop 1280)**

```
+----------------------------------------------------------------------------------+
| 1 px rule (neutral.200, full-bleed)                                             |
|                      STONE SECTION (neutral.50), padding 96 top and bottom       |
|  02  REF CT-SVC-02                                                               |
|  SERVICES BY TANK TYPE            (condensed caps H2, cols 1-6)                  |
|  One supporting line (cols 1-5, max 68ch). Cols 6-7 left empty.                  |
|  24                                                                              |
|  +----------------+----------------+----------------+   <- container background |
|  | 02.1           | 02.2           | 02.3           |      neutral.200,         |
|  | OVERHEAD TANK  | UNDERGROUND    | SOCIETY SUMP   |      gap: 1px             |
|  | CAPACITY (mono)| CAPACITY (mono)| CAPACITY (mono)|      cells white          |
|  | one line       | one line       | one line       |      padding 40, radius 0 |
|  | LEARN MORE >   | LEARN MORE >   | LEARN MORE >   |                           |
|  +----------------+----------------+----------------+                           |
|  96 gap                                                                          |
| 1 px rule                                                                        |
+----------------------------------------------------------------------------------+
 Cell labels are placeholders: tank types and capacities come from INFO-BANK only.
```

**Wireframe 3: 5-step process band (desktop 1280, primary 700 full-bleed)**

```
+----------------------------------------------------------------------------------+
|######################## PRIMARY 700 BAND, padding 96 ############################|
|# 03  REF CT-PR-03                                                              #|
|# OUR 5-STEP PROCESS  (white condensed caps)                                     #|
|# 24                                                                             #|
|# +----------+----------+----------+----------+- - - - - -+   gap 1 px, line      #|
|# | 01       | 02       | 03       | 04       | 05        |   primary.400         #|
|# | [icon]   | [icon]   | [icon]   | [icon]   | [icon]    |   cells primary 700,  #|
|# |DEWATERING|HIGH-PRESS|SLUDGE &  |DISINFECT-|UV         |   padding 24          #|
|# |          |URE CLEAN |WATER REM.|ION (ANTI-|TREATMENT* |   numbers accent 400  #|
|# |one line  |one line  |one line  |BACTERIAL)|one line   |   step 05 dashed      #|
|# +----------+----------+----------+----------+- - - - - -+                       #|
|# * WHERE APPLICABLE                                                              #|
|######################################################################################|
 Mobile: 5 ruled rows, number left 48 px, text right. Active step: accent underline.
```

**Wireframe 4: sticky mobile action bar (utility, not counted)**

```
+---------------------------+
| [ CALL ] 8 | [ WHATSAPP ] |  48 px targets, 8 gap, primary fill, white label
+---------------------------+  1 px primary.600 rule above
```

## 07.8 Print grids (mm)

Bleed 3 mm outside trim and safe area 5 mm inside trim as defaults (common practice). Print bleed and trim production specs belong to s15; all sizes below are proposals and **confirm with printer** before artwork. Record-type items (certificate, sticker, job card, tender documents) follow the spec-sheet form: primary title band, ruled field grid, mono values, reference or serial code.

| Item | Trim (mm) | Margins (mm) | Grid | Bleed / safe | Notes |
|---|---|---|---|---|---|
| A4 letterhead | 210 x 297 | 25 all sides (matches s04) | 6 cols, 5 gutter, content 160 wide (col 22.5) | No bleed unless primary strip; safe 5 | Logo top-left; address and GSTIN footer 8 pt mono in bottom 15 mm band, 0.25 pt rule above |
| A4 Cleaning Certificate (portrait) | 210 x 297 | 20 all sides | 6 cols, 5 gutter, content 170 (col 25) | Bleed 3 for primary title band 35 mm; safe 5 | Ruled field grid, 0.25 pt rules, values and certificate no. in mono |
| A5 flyer | 148 x 210 | 12 all sides | 4 cols, 4 gutter, content 124 (col 27) | Bleed 3, safe 5 | Max 5 elements, one phone line first |
| DL brochure (tri-fold) | 99 x 210 per panel, 297 x 210 flat (fold-in panel often 97, confirm) | 10 from each fold and edge | 4 cols per panel, 4 gutter | Bleed 3, safe 5 | Cover, process, services/AMC, contact |
| Visiting card | 90 x 54 (proposed; 89 x 51 alternative) | 5 | 4 cols, 3 gutter | Bleed 3, safe 3 | Franchise lockup per p9 on franchise cards |
| Cleaning Date Sticker (proposal) | 100 x 70, corner radius about 1 to 2 (s05 to confirm) | 5 | 2 cols, 0.25 pt ruled cells, 3 rows (14 / 34 / 17 mm) | Bleed 2, safe 3 | Weatherproof material and adhesive owned by s14 |
| Standee | 800 x 2000 | 40 sides; 100 top; bottom 300 kept for hardware and floor | 6 cols, 20 gutter, content 720 (col 103) | Bleed per vendor; safe 30 | Primary band for header zone and base; body area white or stone; no whole navy standee |

Print type uses s04 sizes (Latin 7 pt, Indic 8 pt minimum). Standee text must be readable from about 2 m (verify with the vendor).

**Wireframe 5: A4 Cleaning Certificate, spec-sheet form (portrait, mm)**

```
+----------------------------------------------+ 210 wide
|######## PRIMARY TITLE BAND 35 (bleed 3) ######|
|# [logo, reverse, per s02]   CERT NO. CT-CERT-0001 (mono, white)|
|# CLEANING CERTIFICATE   (white condensed caps, <= 4 words)    |
|##############################################|
| 12                                           |
| REF CT-DOC-01  ISSUED 03 OCT 2026  (mono)    |
| +------------------+-----------------------+ |
| | CUSTOMER         | name, address         | |  field labels: mono caps
| +------------------+-----------------------+ |  values: mono or Anek
| | SITE / TANK      | type, capacity (L)    | |  0.25 pt rules, radius 0
| +------------------+-----------------------+ |
| | CLEANED ON       | 03 OCT 2026           | |
| +------------------+-----------------------+ |
| | NEXT RECOMMENDED | date set for the site | |
| +------------------+-----------------------+ |
| 8                                            |
| PROCESS CHECK   01 02 03 04 05*  (ruled row; |
|  done / not applicable per step)             |
| +--------------------+-------------------+   |
| | SIGNATURE 55 x 20  | STICKER FITTED    |   |
| +--------------------+-------------------+   |
| ISO 9001:2015 line (exact wording), GSTIN,   |
| water-quality disclaimer, 8 pt, 0.25 pt rule |
| 20 bottom                                    |
+----------------------------------------------+
 Hindi / Punjabi line stacked under the title inside the band or below it.
```

**Wireframe 6: Cleaning Date Sticker, ruled tag (100 x 70 mm, proposal)**

```
+--------------------------------------------+ 100  (corner radius ~1-2)
|#### PRIMARY BAND 14: [logo, white]  CT-STK-0001 (mono) ##|  14
+---------------------+----------------------+
| CLEANED ON          | NEXT DUE             |
| ?? ??? ????  (mono) | ?? ??? ???? (mono)   |  34
| label Hindi/Punjabi | label Hindi/Punjabi  |
+---------------------+----------------------+
| [PHONE 1]  | [PHONE 2]       CERT. NO. (mono)|  17
+--------------------------------------------+ 70
 Margin 5, 2 columns, 0.25 pt rules between cells.
 Dates written by hand or label-printed; serial code in mono.
```

## 07.9 Social formats and safe zones

Digital sizes are px. Platform safe zones change; items marked (verify before use) are to be re-checked at design time.

| Format | Size | Ratio | Use | Margins and safe zone |
|---|---|---|---|---|
| Square post | 1080 x 1080 | 1:1 | Feed post, carousel slide | 64 all sides; copy block max 5 elements |
| Portrait post | 1080 x 1350 | 4:5 | Preferred feed post | 64 sides; keep key content inside the centre 1012 x 1350, in case the profile grid crops to 3:4 (verify before use) |
| Story / Reel | 1080 x 1920 | 9:16 | Stories, short video cover | 64 sides; keep top 250 and bottom 250 px free of text and logo for app UI (verify before use) |
| WhatsApp message card | 1080 x 1080 | 1:1 | Reminder, tip, status card | 64 sides; one message, one phone number; WhatsApp may crop edges in preview (verify before use) |

One idea per card. Structure: primary title band, photo, mono footer. Accent only as one marker (index number or short rule), never a badge shape.

**Wireframe 7: Instagram post 1080 x 1350 (navy title band + photo + mono footer)**

```
+-------------------------------------+ 1080
|#### PRIMARY 700 TITLE BAND 360 #####|
|# 64                                #|
|# REF CT-SOC-01  (mono, accent 400) #|
|# WHEN WAS YOUR TANK                #|
|# LAST CLEANED?  (white condensed   #|
|#  caps, left)                      #|
|# 64                                #|
+-------------------------------------+  1 px rule
| 64 margin                           |
| +---------------------------------+ |
| |  documentary photo, 4:3 or 1:1  | |  radius 4, muted grade
| |  (s08), no overlay text         | |
| +---------------------------------+ |
| 24                                  |
| 1 px rule                           |
| [PHONE 1]   CLEANTANKSERVICES.COM   |  mono footer, neutral 600 / primary
| [logo, bottom-left per 07.10]       |
| 64                                  |
+-------------------------------------+ 1350
 White canvas below the band, primary band about 27% of height, accent used once.
```

## 07.10 Logo placement and clear space

Logo artwork, construction, clear space (X) and minimum size are defined in s02. This pillar sets only where it sits.

| Surface | Position | Edge margin | Clear space |
|---|---|---|---|
| Website header | Top-left, inside container; reverse version on primary bar or photo | Page margin (16 / 32 / 40) | Logo per s02, clear space X |
| Website footer (primary band) | Top-left, reverse version | Page margin | X |
| A4 letterhead | Top-left | 25 mm | Logo per s02, clear space X |
| Certificate | Top-left in primary title band, reverse version | 20 mm | X |
| Sticker | Top-left in primary band | 5 mm | X (reverse version per s02) |
| Social posts | Bottom-left (title band carries text, not logo), or top-left inside band when the footer is full | 64 px | X, and at least 64 from edges |
| Standee | Top zone, 100 mm from top | 40 mm | X |
| Franchise lockup | Same anchor as master logo; operator line below | As above | Clean Tank primary, operator secondary |

Never centre the logo on a layout.

## 07.11 Bilingual layout

| Property | Rule |
|---|---|
| Order | English first by default; on a Hindi or Punjabi page or card, that language first |
| Default pattern | Stacked: English block, `space.2` (8 px; 2 mm in print), then Hindi or Punjabi block of the same meaning |
| Side by side | Only at `lg` and above for short, parallel content (labels, certificate headings): two equal columns, 12 gutter min, each left-aligned, separated by a 1 px rule |
| Case | Latin headings caps; Devanagari and Gurmukhi headings keep native form, no case change (s04) |
| Size ratio | Indic at same nominal size as Latin (1:1); check optical size on real text, increase by at most 1 px (web) or 0.5 pt (print) only if letters look small (verify) |
| Line height | Per s04: Latin 1.50, Devanagari 1.65, Gurmukhi 1.60; condensed caps headings about 1.0 to 1.05 (Latin only); blocks never have fixed heights |
| Alignment | Left, ragged right; never justified, never letter-spaced |
| Mixed lines | Numbers, phone, GSTIN, dates in Latin digits per s04 formats; keep `lang` attributes correct |
| Sticker and certificate | Indic text at 8 pt minimum even if the English line could be smaller |
| RTL | Not applicable to Clean Tank: no Arabic, Urdu or Hebrew planned |

## 07.12 Rules

```
RULE 07.1:     Use only the ct.space scale: 4 px base, 8 px rhythm.
CLASS:         MUST
REASON:        Exact: one rhythm means every district's page looks alike.
EXACT SPEC:    ct.space.0 to 12 = 0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128 px
EXAMPLE:       Ruled cell padding 40 px (space.7), section gap 96 px (space.11).
ANTI-EXAMPLE:  Padding 18 px and gap 22 px added to "make it fit".
TEST:          Does every margin, padding and gap match a token? Yes: pass.
EXCEPTION:     Print and social use mm and their stated px; Central brand owner approves others.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 07.2:     Build mobile-first on the 4-column base and test at 320 and 360 px.
CLASS:         MUST
REASON:        Most families and RWA members first meet the brand on a phone.
EXACT SPEC:    Breakpoints 360, 768, 1024, 1280, 1440; columns 4/4/8/12/12/12; margins 16/16/32/40/40/auto; gutters 16/16/24/24/24/24; max 1200 px
EXAMPLE:       Ruled cells stack to one column at 360, three across at 1024.
ANTI-EXAMPLE:  Desktop-only layout that scrolls sideways at 320.
TEST:          Open at 320 CSS px: any horizontal scroll? No: pass.
EXCEPTION:     Data tables may scroll horizontally inside their own container.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 07.3:     Limit the above-the-fold area to 5 content elements.
CLASS:         MUST (web hero), SHOULD (flyer, post)
REASON:        Restrained: one idea per view.
EXACT SPEC:    Headline, one supporting line, CTAs (one primary, one optional outline), photo, brand mark; utility header and sticky action bar not counted
EXAMPLE:       Photo hero in 07.7 (A1).
ANTI-EXAMPLE:  Hero with ISO badge, three phone numbers, three buttons and a banner.
TEST:          Count the distinct elements in the first 640 px of a 360 px screen. 5 or fewer: pass.
EXCEPTION:     Tender and institutional landing pages may add one ISO line (exact wording only) after review.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 07.4:     Left-align all text; centre only a certificate title or a one-line confirmation.
CLASS:         MUST
REASON:        Ordered: readability in three scripts; one reading edge.
EXACT SPEC:    text-align: left; centre limited to 4 words or fewer
EXAMPLE:       Certificate title centred, everything beneath left-aligned.
ANTI-EXAMPLE:  Centred hero headline and centred paragraphs.
TEST:          Is any centred text longer than one line? Yes: reject.
EXCEPTION:     None without owner approval.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 07.5:     Keep text to the script's measure and never let it cross a gutter.
CLASS:         MUST
REASON:        Exact: plain, readable lines.
EXACT SPEC:    Latin 68ch max; Devanagari and Gurmukhi 55ch max; text spans whole columns
EXAMPLE:       Article text in cols 3 to 10.
ANTI-EXAMPLE:  A 12-column paragraph, 110 characters per line.
TEST:          Count characters on the longest line. Within the stated range: pass.
EXCEPTION:     Tables and forms.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 07.6:     Give every interactive control a 48 px target with at least 8 px between neighbours.
CLASS:         MUST
REASON:        Exact: usable with gloves, wet hands, older users.
EXACT SPEC:    48 x 48 CSS px; gap 8 px (WCAG 2.5.8 floor 24 x 24)
EXAMPLE:       Call and WhatsApp buttons 48 px tall with 8 px between.
ANTI-EXAMPLE:  Three 32 px icons packed with 4 px gaps.
TEST:          Measure target size and gap in dev tools.
EXCEPTION:     Inline text links in prose.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 07.7:     Keep to the 60/30/10 zone proportion: neutral majority, primary bands only for header, footer and selected emphasis, accent as marker only.
CLASS:         MUST
REASON:        Restrained: authority comes from structure, not from colour mass.
EXACT SPEC:    Neutral (white, stone) about 60%; primary about 30% (max 2 bands per screen height, never a whole page); accent 10% max as marker; no accent button fill; no full-width accent band
EXAMPLE:       Photo hero, white and stone sections, one primary 5-step band, primary footer.
ANTI-EXAMPLE:  A navy page from header to footer; a coral CTA button.
TEST:          Squint test or pixel count: primary over 30% or any accent fill on a control? Yes: reject.
EXCEPTION:     Primary share may rise on a standee base and in dark mode (s12), never as a whole-page ground.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 07.8:     Draw structure with 1 px rules and ruled cells; number every section; tag records with mono reference codes.
CLASS:         MUST
REASON:        Ordered and Documented: the reader can see where one idea ends and the next begins.
EXACT SPEC:    1 px lines (`neutral.200` or `primary.700`), square caps, miter joins; ruled cells = background line colour + gap 1px, cell radius 0; section numbers 02 / 02.1 in mono caps; reference tags mono 11 to 13 px, +0.08 to 0.1em; no shadows; default radius 4 px (sm), tables and rules 0 to 2
EXAMPLE:       Services section with three ruled cells and tag REF CT-SVC-02.
ANTI-EXAMPLE:  Floating cards with soft shadows and 16 px corners.
TEST:          Any box-shadow, radius above 4 px, or unnumbered section? Yes: reject.
EXCEPTION:     Photos carry no rule; circles only for literal round objects.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 07.9:     Give each section one idea and a full section gap; allow asymmetric balance only on whole columns.
CLASS:         SHOULD
REASON:        Restrained: deliberate empty space (ma) reads as unhurried.
EXACT SPEC:    Section gap `ct.space.section.sm|md|lg` = 64 / 80 / 96; empty columns left empty; every edge on a column line
EXAMPLE:       AMC copy in cols 1 to 5, table in cols 8 to 12, cols 6 to 7 empty.
ANTI-EXAMPLE:  Two unrelated messages in one section, gap cut to 32 to fit more.
TEST:          Can the section be named in one phrase, and is the gap at least the token value? Yes: pass.
EXCEPTION:     Tables, certificates and tender documents may be denser inside the section.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 07.10:    Build the website hero as a full-bleed photo with text and CTAs on a flat scrim; header is fixed solid or floating per owner choice.
CLASS:         MUST
REASON:        Honest materials and Exact: a real photo, legible text, no decoration.
EXACT SPEC:    Scrim flat Navy 900 `#0F1824` at 70% or more (s08; white text 6.64:1 on worst-case white photo), no gradient overlays beyond it; H1 condensed caps; CTAs: white fill + primary label, outline secondary; header H1 solid primary 700 (64 / 56 px) or H2 transparent to solid after 80 px, 150 ms colour change only
EXAMPLE:       Technician-at-work photo, H1 left in cols 1 to 7, two CTAs.
ANTI-EXAMPLE:  Bright photo with white text and no scrim; accent-filled CTA; blur header.
TEST:          Sample text against the worst-case photo pixels: 4.5:1 body, 3:1 large? Yes: pass.
EXCEPTION:     Header option (H1 or H2) is an open owner decision; the other rules are fixed.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 07.11:    Stack Indic and English with 8 px / 2 mm between, never justified.
CLASS:         MUST
REASON:        Same respect for every script; Devanagari must not clip.
EXACT SPEC:    Stacked below lg; side by side only at lg+ for short parallel text; line heights per s04
EXAMPLE:       Certificate heading in English with a Hindi line below.
ANTI-EXAMPLE:  Fixed-height text box clipping Devanagari matras.
TEST:          Apply WCAG 1.4.12 overrides with native strings: any clipping? No: pass.
EXCEPTION:     Sticker may reduce both scripts together, never below 7 pt Latin and 8 pt Indic.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

## 07.13 Do / Don't

| Do | Don't |
|---|---|
| Align headings, photos and buttons to the same column edge | Offset elements off the grid "for energy" |
| Separate zones with 1 px rules and use ruled cells for grouped facts | Use shadows, soft cards or heavy borders |
| Number sections (02, 02.1) and tag records with mono codes | Leave sections unlabelled or invent decorative badges |
| Leave a full `space.9` to `space.11` between sections, one idea each | Fill gaps with badges, stickers or bursts |
| Keep white and stone as the majority; use primary for header, footer and selected emphasis bands | Make a whole page navy |
| Put hero text and CTAs on a flat scrim over the photo | Put text on a bright photo unprotected, or use a gradient wash |
| Use white-fill CTAs on photo and bands, primary-fill CTAs on white and stone | Fill any button with accent |
| Keep text left, ragged right | Centre paragraphs or justify Hindi or Punjabi |
| Set 5 steps in equal ruled cells, in the fixed order, step 05 dashed | Resize one step to look "special" |

## 07.14 Accessibility & India notes

- **Reflow (WCAG 1.4.10):** no two-dimensional scrolling at 320 CSS px (equals 1280 px at 400% zoom). The 4-column base is designed at 320.
- **Text spacing (1.4.12):** no fixed-height text containers; test line height 1.5, paragraph spacing 2x, letter spacing 0.12x, word spacing 0.16x with Hindi and Punjabi strings. Hero text containers over photos grow with content.
- **Resize:** spacing in rem; layout holds at 200% text zoom.
- **Target size (2.5.8):** 48 px brand standard, 24 px floor, 8 px gaps.
- **Focus (2.4.11):** focus ring 2 px Primary 700, 2 px offset (white ring on primary bands and photos, per s03); containers never `overflow: hidden` over a focused control; fixed or floating header must not hide a focused element (`scroll-padding-top` equals header height).
- **Hero photo text:** flat scrim at 70% or more; Devanagari and Gurmukhi strokes are thin, so keep hero Indic lines large and check per letter (s08). Provide alt text or mark the photo decorative.
- **Order:** DOM order matches visual order; no CSS reordering that changes reading sequence.
- **Colour is not the only signal:** active step uses fill plus underline plus the mono number; states use icon and word.
- **Contrast of layout zones (checked):** White on Primary 700 12.83:1; Primary 700 on stone (about `#F5F4F1`) 11.67:1; Neutral 900 on stone 13.49:1; Neutral 600 on stone 5.65:1; Accent 700 `#A33C1F` on stone 5.92:1; Accent 600 `#C54826` on white 4.85:1 and on stone 4.41:1 (large text and graphics only on stone); Accent 400 `#F1876A` on Primary 700 5.14:1. Recheck stone pairs once s03 v2 fixes the final hex.
- **India:** mid-range Android phones at 360 px dominate; the hero photo must be optimised for slow networks (responsive sizes, compressed, a still poster, no autoplay video). WhatsApp is the main enquiry path, so call and WhatsApp targets sit in the header or sticky bar, not hidden in a menu. Hindi headings may wrap longer than English: allow 2 to 3 lines.

## 07.15 Day one vs later

| Day one | Later |
|---|---|
| Spacing tokens, breakpoints and 12-column grid as CSS variables; 1 px rule and ruled-cell utilities | Gutter and density modes beyond comfortable/compact |
| A1 photo hero (with chosen header option), A2 process band, A7 enquiry form templates | Remaining archetypes with redlines |
| Certificate and sticker spec-sheet layouts (print proposals approved by printer) | Standee, brochure, visiting card templates |
| 1080 x 1080 and 1080 x 1350 post templates (primary title band), WhatsApp card | Story template, slides |
| Logo placement table, section numbering and reference tag format | Bilingual specimens in all formats |

**Token export (starter):**

```css
:root{
  --ct-space-1:.25rem; --ct-space-2:.5rem; --ct-space-3:.75rem; --ct-space-4:1rem;
  --ct-space-5:1.5rem; --ct-space-6:2rem; --ct-space-7:2.5rem; --ct-space-8:3rem;
  --ct-space-9:4rem; --ct-space-10:5rem; --ct-space-11:6rem; --ct-space-12:8rem;
  --ct-layout-max:1200px; --ct-layout-margin:1rem; --ct-layout-gutter:1rem;
  --ct-line-hairline:1px; --ct-radius-none:0; --ct-radius-xs:2px; --ct-radius-sm:4px;
}
@media (min-width:768px){:root{--ct-layout-margin:2rem;--ct-layout-gutter:1.5rem}}
@media (min-width:1024px){:root{--ct-layout-margin:2.5rem}}
/* Ruled cells: 1 px lines with no borders */
.ct-ruled{display:grid;gap:1px;background:var(--ct-color-neutral-200);border-radius:var(--ct-radius-xs)}
.ct-ruled>*{background:var(--ct-color-neutral-0);padding:var(--ct-space-5);border-radius:0}
```

## 07.16 Checklist

- [ ] Density statement present: airy between sections, orderly inside, dense only in tables and records
- [ ] All spacing uses `ct.space.*` tokens, no off-scale values
- [ ] Breakpoint table (360, 768, 1024, 1280, 1440) with columns, margins, gutters implemented
- [ ] Max width 1200 px and text measure caps applied per script
- [ ] Grid overlay checked on the hero, content section and process band
- [ ] Sections numbered (02, 02.1), 1 px rules between zones, ruled cells built with 1 px gap, mono reference tags present
- [ ] No shadows; radius 4 px default, 0 to 2 on tables, rules and cells
- [ ] White / stone majority; primary bands only on header, footer and selected emphasis; no whole navy page; no accent button fill
- [ ] Photo hero built with flat scrim at 70% or more and contrast sampled; header option (H1 or H2) decided and built
- [ ] At least four archetypes built (A1 hero, A2 process band, A3 services, A7 form)
- [ ] Certificate and sticker follow the spec-sheet form with mono values and serial codes
- [ ] Format table implemented: 1080 x 1080, 1080 x 1350, 1080 x 1920, WhatsApp card; Instagram post uses title band + photo + mono footer
- [ ] Print margins, bleed and safe area confirmed with the printer
- [ ] Logo placement and clear space X per s02 checked on every template
- [ ] Bilingual stacked layout tested with Devanagari and Gurmukhi strings
- [ ] Alignment, proximity and whitespace rules reviewed
- [ ] Token export committed and matches this guide
- [ ] Reflow at 320 px, 200% zoom, text-spacing override and 48 px targets tested

## 07.17 Open items & evidence needed

| # | Item | Needed |
|---|---|---|
| 1 | Print sizes (sticker 100 x 70, visiting card 90 x 54, DL panel widths, standee margins) | Printer and vendor confirmation; sticker physical size and material owned by s14/s16 |
| 2 | Standee and sign readability distance | Vendor guidance |
| 3 | Platform safe zones (Instagram profile crop, Story UI, WhatsApp preview) | Re-check at design time (verify before use) |
| 4 | Measure caps in `ch` | Test with real Anek Latin, Devanagari and Gurmukhi strings |
| 5 | Indic line heights vs 4 px baseline | Test on native headings; decide whether to round to 2 px |
| 6 | 5-element above-fold limit with CTAs on a photo | Usability test with the first real hero |
| 7 | Sticker and certificate corner radius (about 1 to 2 mm) | s05 shape language |
| 8 | Clients band | Written permission for each name or logo |
| 9 | Franchise figures | Only approved set, with disclaimer; owner confirms placement |
| 10 | Logo anchor and clear space X | s02 (written in parallel); update this pillar if it differs |
| 11 | Certificate orientation (portrait assumed) | Confirm with s14 and owner |
| 12 | Header: fixed solid bar (H1) or floating transparent-to-solid (H2) | Owner decision (TBD) |
| 13 | Hero photo | Real documentary photo per s08; scrim strength tested on the chosen image |
| 14 | Stone hex (about `#F5F4F1`) and neutral.0 / neutral.50 naming | Final values in s03 v2; recheck contrast numbers here |
| 15 | Secondary colour | Owner to decide; no layout zone assigned until set |
| 16 | Tank types and capacities in the A3 wireframe | Placeholders only; fill from INFO-BANK |
