# Clean Tank Services: Style Guide
# 10. Icons & Information Design

> This pillar governs the small symbols and the exact-number graphics that carry meaning without prose: the icon library, the 5-step process diagram, data tables, number and date formats, charts, the state map, the Cleaning Date Sticker hierarchy, the certificate data block and site signage pictograms. For Clean Tank Services these are the clearest proof of "Quiet precision. One standard, every tank.": a ruled diagram, a real measurement and a record laid out like a spec sheet say "specialist" faster than any adjective. A mismatched stroke, a wrong number grouping or an unsupported statistic reads as "assembled", so every value here is fixed.

Sheet CT-SG-10 | v2.0 | 08 Oct 2026 (Quiet Utility revision) | Tier legend: LOCK = central brand owner approves any change · GUARD = varies inside stated limits · FLEX = judgment within principles

Not covered here: colour values (s03), type sizes (s04), radius and shape tokens (s05), illustration (s09), UI components (s13), physical sticker and sign production (s14, s16). Ratios below are WCAG 2.2 relative-luminance ratios computed with Python and shown to two decimals. Colour roles: Primary (navy `#20334B`), Secondary (TBD, owner to decide, no value assigned and not used here), Accent (coral `#EE7555`, marker only), Neutral (white to graphite, slightly warm), State.

## 10.1 Principles and inheritance

| Principle | Behaviour in icons and information design |
|---|---|
| Exact | One library, one stroke, one grid, one number format in every district. Values are measured and dated, never rounded for effect. |
| Ordered | Diagrams, tables and records sit on a strict grid with 1 px rules, numbered nodes (01 to 05) and mono reference codes. |
| Restrained | Outline icons only, no fill, no decoration. Accent appears as a thin marker (active underline, one key figure), nothing else. |
| Documented | Every graphic cites its source; records (sticker, certificate) are ruled spec fields with serial and reference codes. |
| Honest materials | Flat line on white or stone, or white line on a primary band. No gloss, no gradient, no shadow, no fear imagery. |

Conditions stay on the graphic ("where applicable", "up to", "subject to site and equipment"). Chart titles say what is measured, never how impressive it is. Accent never marks warning, error or urgency. Humility lives in the words; authority lives in the ruled, exact visuals. From s01: the gauge (scale ticks, arc, tabular readout) is a graphic device.

## 10.2 Icon families in scope

UI icons (16 to 24 px), process and tank icons (32 to 48 px), document icons (certificate, sticker, AMC, ISO document), contact icons, site pictograms (spec now, build later), app icon and favicon (10.18). Marketing duotone icons are not applicable to Clean Tank because s01 allows only flat ruled graphics and one saturated colour.

## 10.3 Base library decision

| Option | Licence | Style | Strengths | Concerns | Verdict |
|---|---|---|---|---|---|
| **Lucide** | ISC | One outline weight, 24 px canvas, stroke, caps and joins adjustable by attribute | Permissive, consistent, simple construction rules, one weight prevents filled temptation | Smaller domain coverage (we draw the gaps); upstream defaults are round caps and 2 px, overridden below | **Chosen** |
| Phosphor | MIT | Six weights, 1,512 icons per weight in core v2.1.1 | Wide coverage | Fill and duotone weights invite glossy or filled looks that s01 bans; more choices, more drift | Not chosen |
| Tabler | MIT | Outline, 24 px, large catalogue | Very wide coverage | Default 2 px stroke is heavier; large catalogue encourages mixing | Not chosen |

Decision: **Lucide, ISC licence**, pinned to an exact version in the repo (record name, version and licence in the s19 licence register; version number Open until the package is installed). Keep the ISC licence text in the repository notice file. No second library may be mixed in. **House render override on every Lucide icon: `stroke-linecap="square"`, `stroke-linejoin="miter"`, `stroke-miterlimit="4"`, stroke 1.75 at 24 px.** Brand glyphs (WhatsApp) are the one exception, governed by that owner's rules (10.6).

## 10.4 Construction grid

Values follow s05 (square caps and miter joins on every line, icon stroke 1.75 px at 24, the one stroke outside the three line tokens).

| Property | Value | Why | How to check |
|---|---|---|---|
| Artboard | 24 x 24 px, `viewBox="0 0 24 24"` | Lucide master grid | Read viewBox |
| Padding | 1 px each side | Square caps extend half a stroke (0.875 px) past path ends; 1 px keeps them inside | Nothing within 1 px of edge, caps included |
| Live area | 22 x 22 px | Uncrowded | Bounding box fits |
| Stroke width | **1.75 px at 24 px** (house override of Lucide's 2 px, geometry unchanged) | Exact, lab-sheet line weight | Inspect `stroke-width` |
| Stroke alignment | Centred on path | Lucide default | n/a |
| Caps and joins | **Square caps, miter joins**, miterlimit 4 | Sharp, ruled, no soft ends | Inspect attributes |
| Corner radius (custom icons) | **0 px; 1 px maximum**, only where a sharp join under 60 degrees would spike. **No rounded rectangles.** | Quiet Utility: Sharp 4 of 5 | Measure; no `rx` on custom `rect` |
| Angles | 45 degrees, or 15 degree steps; no arbitrary angles | Ruled, exact | Overlay protractor guide |
| Minimum gap | 2 px between strokes | Legibility at 16 px | Measure |
| Fill | `none`; stroke only, `currentColor` | One colour source | Inspect |
| Circles | Only for literal round objects (gauge dial, manhole, pipe end). Badges, seals and status marks use a square keyline | s05: circles only for literal round objects | Review each circle: is the real object round? |

Upstream Lucide icons keep their shipped geometry, including the 2 px corner rounding on its rectangles; the override changes caps, joins and stroke only. Whether to patch those corners at build time is Open (10.28).

Keylines inside the live area: square 18 x 18 px (sticker, badge, status); portrait 16 x 20 px (certificate, ISO document, AMC page); landscape 20 x 16 px (tanks, equipment case); circle 22 px diameter reserved for the gauge dial. Deliver a construction page showing one icon at 4x with the grid, keylines and live area drawn.

## 10.5 Size ladder, stroke scaling and targets

Icons are drawn once at 24 px. The `stroke-width` attribute (viewBox units) is set per size so the rendered stroke never goes hair-thin or heavy.

| Size | Use | `stroke-width` (viewBox) | Rendered stroke | Touch target (interactive) |
|---|---|---|---|---|
| 16 px | Table cells, chips, inline with 14 to 15 px small text | 2 | 1.33 px | 32 px hit area, never below 24 x 24 px (WCAG 2.5.8) |
| 20 px | **Default**: buttons, inputs, inline with 16 px body | 1.85 | 1.54 px | 48 px touch (44 min); 32 px only in dense desktop tables |
| 24 px | Navigation, toolbars, master grid | **1.75** | 1.75 px | 48 px touch (44 min); 32 px only in dense desktop tables |
| 32 px | Feature rows, cards, empty states | 1.5 | 2.00 px | Not interactive |
| 48 px | Process diagram, certificate, site pictograms | 1.25 | 2.50 px | Not interactive |

Rules: small-size redraw rule: if an icon needs more than one inner detail below 16 px, drop the detail rather than thin the stroke (for example the sticker icon loses its text lines at 16 px). Icon-to-text gap: 8 px at 20 and 24 px, 6 px at 16 px. Print minimum for a meaningful icon: 5 mm (assumption, verify on first proof, s15).

Tokens: `ct.icon.size.16|20|24|32|48`, `ct.icon.stroke.16|20|24|32|48` (values above), `ct.icon.gap.sm|md` (6 px, 8 px), `ct.icon.linecap` = square, `ct.icon.linejoin` = miter.

## 10.6 Icon inventory

### Taken from Lucide unchanged in geometry (names to verify at the pinned version)

phone, map-pin, mail, calendar, clock, qr-code, download, share, menu, x, search, chevron-right, chevron-down, check, plus utility status icons triangle-alert (warning) and square-check (success). Status icons use square keylines rather than circle badges (10.8). Where a Lucide name changes between versions, the Clean Tank file name below stays stable.

### Custom icons to draw (19)

All custom icons follow 10.4 (square caps, miter joins, 0 to 1 px corners, no rounded rectangles). File names are noun first, kebab-case.

| # | File name | Meaning | Drawing brief |
|---|---|---|---|
| 1 | `process-dewatering` | Step 1 Dewatering | Square-cornered tank outline with a falling level line and a pump pipe leaving it |
| 2 | `process-high-pressure-cleaning` | Step 2 High-pressure cleaning | Straight nozzle with 3 parallel jet lines hitting a wall segment |
| 3 | `process-sludge-water-removal` | Step 3 Sludge & water removal | Hose entering a tank base with a flat settled layer line and an outward arrow |
| 4 | `process-disinfection` | Step 4 Disinfection | Dosing nozzle over a tank outline; no sparkles |
| 5 | `process-uv-treatment` | Step 5 UV treatment (where applicable) | Straight lamp tube with 2 short radiating ticks, inside a tank outline |
| 6 | `tank-domestic` | Domestic tank | Small rooftop tank on a stand, landscape keyline |
| 7 | `tank-overhead` | Commercial overhead tank | Larger tank on a tall frame with level ladder |
| 8 | `tank-underground` | Commercial underground tank | Ground line with tank below it and an access hatch |
| 9 | `tank-institutional` | Institutional site (hospital, school, campus tank) | Tank outline beside a simple building block; no cross symbol |
| 10 | `schedule-amc` | AMC / cleaning schedule | Portrait calendar with a repeating arc arrow and one marked date |
| 11 | `certificate` | Cleaning Certificate | Portrait sheet with a ruled data block and a tick-in-square seal; no ribbon or star |
| 12 | `sticker-dated` | Cleaning Date Sticker | Square label on a tank wall with two short date lines |
| 13 | `technician` | Technician in uniform | Bust with collar and name badge outline; no helmet unless confirmed (see Open items) |
| 14 | `equipment` | Equipment and instruments | Circular pressure gauge (literal round object): arc, 5 ticks, needle (ties to s01 device) |
| 15 | `provider-authorised` | Authorised Service Provider | Square badge with a check and a small pin below; no star, crown, shield or coin |
| 16 | `document-iso` | ISO certificate document | Portrait sheet with text lines and a check in a square; contains no letters or ISO mark |
| 17 | `site-water-off` | Water supply off at site | Tap outline with a closed handle and a short horizontal bar |
| 18 | `status-info` | Info state | Square keyline with a bar and a dot (square dot) |
| 19 | `status-error` | Error state | Square keyline with a cross of two 45 degree strokes |

WhatsApp, call and location: **call** uses Lucide `phone`, **location** uses Lucide `map-pin`, **WhatsApp** uses the official WhatsApp glyph, unmodified, one colour, at 24 px, used only where it opens a WhatsApp chat. It is a third-party mark: obey Meta's brand rules and do not redraw it in the Clean Tank stroke (verify current terms before use).

Large-capacity tanks have no separate icon: show capacity as a number in litres next to the tank-type icon.

## 10.7 Naming and metaphor rule

One concept, one symbol; synonyms are banned (schedule is always `schedule-amc`, never a clock or bell). Water is shown by the word "litres" and a number, not a droplet. Naming: `<noun>[-<qualifier>]`, kebab-case, grouped by prefix (`process-`, `tank-`, `schedule-`, `document-`, `site-`, `status-`); component `IconProcessDewatering`. Deprecation: never delete a file; mark deprecated for two releases with an alias, then remove with a changelog note.

## 10.8 Colour, state and contrast

Icons use `currentColor`, set by token. Outline only, in every state. **The icon itself never changes colour to show selection.** Selected or active is shown by an accent underline or marker placed with the label, while the icon stays Primary.

| State | Light token and HEX | On | Ratio | Dark token and HEX | On | Ratio |
|---|---|---|---|---|---|---|
| Default | `ct.icon.default` = Primary 700 `#20334B` | White | 12.83:1 | Primary 50 `#F1F4F9` | Primary 900 `#0F1824` | 16.19:1 |
| Default on stone | Primary 700 | Stone `#F5F4F1` | 11.67:1 | n/a | n/a | n/a |
| Muted, secondary | `ct.icon.muted` = Neutral 600 `#65655F` | White / Stone | 5.87:1 / 5.33:1 | Primary 200 `#BFCFE3` | Primary 900 | 11.26:1 |
| Disabled | `ct.icon.disabled` = Neutral 500 `#85847F` | White | 3.75:1 (exempt) | Primary 400 `#6289BC` | Primary 700 | 3.56:1 (exempt) |
| On primary band | White `#FFFFFF` | Primary 700 | 12.83:1 | White | Primary 700 | 12.83:1 |

### Active item marker

| Property | Spec |
|---|---|
| Marker | `ct.icon.marker`: **3 px accent line, square ends** (same weight as the Level Line) |
| Horizontal nav, tabs, steps | Underline spanning the label width, 4 px below the label baseline box |
| Vertical list, side nav | 3 px bar on the leading edge, full row height |
| Icon and label | Icon stays Primary 700; label stays Primary 700, weight 600 (default 500) |
| Colour of the marker | On White: Accent 600 `#C54826`, 4.85:1. On Stone: Accent 600 4.41:1 (passes 3:1). On Primary band: Accent 500 `#EE7555`, 4.47:1. Dark page: Accent 500 on Primary 900, 6.21:1 |
| Non-colour cue | The line itself (position and shape) plus `aria-current`; never colour alone |
| Limit | One marker per view. Coral never marks warning, error or urgency |

Accent 500 on White is **2.87:1 and fails** 3:1, so Accent 500 is not used for a marker on light surfaces.

### Status icons

Status icons always appear with a visible word, in the State fg shade on the soft background, with a square keyline icon: Success `#1E7A3C` on `#E6F4EA` 4.74:1 ("Service completed"); Info `#1B6A8F` on `#E4F2F8` 5.24:1 ("Next due 03 Jan 2027"); Warning `#8A5A00` on `#FFF4D6` 5.41:1 ("Due date has passed"); Error `#B01A45` on `#FCEBF0` 5.94:1. Tokens `ct.color.state.{info,error,warning,success}.{fg,bg,border}`. Warning is a muted ochre note, never a sales prompt; a passed due date is Warning with calm wording, never Error, never accent.

## 10.9 Icon plus label rule

Visible label beside every icon in navigation, buttons, process, contact and print; status icons always with a word. **Labels are IBM Plex Mono 500/600 UPPERCASE, tracking +0.08 to 0.1em, 11 to 13 px** (token `label`; source text in sentence case, caps by CSS). Button labels follow s04 (Anek 700 caps, +0.06em, 14 px). Indic labels use Anek Devanagari or Gurmukhi 600, no case change, no mono (Plex Mono has no Indic glyphs). Icon-only allowed for close, menu and search, with `aria-label`, tooltip and 44 px mobile target. Call and WhatsApp are never icon-only.

## 10.10 Banned icon styles

No emoji as icons, bullets or status marks in designed pieces (a customer's own words may contain emoji; we do not add them). No filled, glossy, gradient, shadowed, 3D or isometric icons. No round caps or round joins. No rounded rectangles in custom icons. No icon with a face. No bacteria, germ, virus or microbe icon, and no cartoon or magnified organism of any kind. No droplet-with-sparkle, splash or wave as decoration. No shield with a tick implying a health or safety guarantee. No cross-shaped health symbol (it can be confused with the protected Red Cross emblem; verify with legal). No money, coin or rupee-note icon in franchise material. No letters or text baked inside an icon (scripts differ; numerals and words are live text). No icon coloured accent or filled to show selection.

## 10.11 Export and pipeline

SVG with `viewBox="0 0 24 24"`, no width or height; `fill="none"`, `stroke="currentColor"`, `stroke-linecap="square"`, `stroke-linejoin="miter"`, `stroke-miterlimit="4"`; SVGO `preset-default` with `removeViewBox` disabled and `removeDimensions` enabled; one component per icon plus a sprite for static pages; no icon fonts; strokes stay strokes (outline only for print masters). File names `process-dewatering.svg`. Lint rejects fills, colours, filters, embedded raster, `stroke-linecap="round"`, `stroke-linejoin="round"` and `rx` on custom rects. The component wrapper sets caps and joins so upstream Lucide files render the house style without editing.

## 10.12 Number and unit presentation

Source of truth for typography is s04: Anek Latin digits support `tnum`; Anek Devanagari and Gurmukhi digits are equal-width by default; IBM Plex Mono for IDs, dates and values on records.

| Item | Format | Example | Note |
|---|---|---|---|
| Numerals | Western Arabic digits 0 to 9 in all scripts (house decision, owner to confirm) | `20,00,000 L` in Hindi text | Devanagari and Gurmukhi digits are not used |
| Tabular figures | `font-variant-numeric: tabular-nums lining-nums` (`ct.font.numeric.tabular`) in tables, stickers, certificates, charts | Column of dates lines up | Required for any column of numbers |
| Digit grouping | Indian (en-IN) | 20,000 L · 20,00,000 L · 1,00,00,000 L | Not 2,000,000 |
| Large capacity in words | After the full figure, once per page | 1,00,00,000 L (1 crore litres) | Words: lakh, crore; never K, M, B |
| Capacity unit | L, preceded by a non-breaking space | 20,000 L | Not kL or gallons |
| Pressure unit | bar, non-breaking space | up to 250 bar | Always with "up to" and "subject to site and equipment" |
| Dates | `DD Mon YYYY`; on records shown in capitals by CSS | 03 Oct 2026 (record: 03 OCT 2026) | No numeric-only dates (03/10/2026 is ambiguous) |
| Currency | ₹ before the figure, no space, en-IN grouping; lakh and crore in prose | ₹3 to 8 lakh | Franchise figures only from INFO-BANK §8 with the disclaimer beside them |
| Phone | `+91` then 5 + 5 digit groups, Plex Mono | +91 94535 17514 | Numbers only from INFO-BANK §1 |
| IDs and reference codes | IBM Plex Mono 500/600, caps | Q2A-2026-0401T118011; REF CT-PR-05 | Never wrap; never hyphen-break |

Formatter: use `Intl.NumberFormat('en-IN')` for full numbers (123456 gives 1,23,456). Do not use `notation: 'compact'` above 100 crore (it gives forms such as 150Cr); cap or use a custom formatter. Tested only in Node 22 and Chromium 141 per the blueprint, so spot check Firefox and Safari (verify before use).

### Stat tiles

A stat tile is a ruled cell (1 px `ct.color.border.rule`, radius 0 to 2) holding a mono caps label, a number with unit and a source line. Tiles show only facts that exist in INFO-BANK: capacity ranges, "up to 250 bar (subject to site and equipment)", "In business since 2008". Number `data-l` (Anek wdth 78, 700, `tnum`, 27.65 to 31.10 px), Primary 700; **one key figure per view may use Accent 700 (6.51:1 on White, 5.92:1 on Stone) or Accent 600 (4.85:1 on White)**. Unit 16 px. No count of tanks cleaned, customers or satisfaction figure until a source record exists (Open).

## 10.13 The 5-step process diagram

The signature graphic (s01 distinctive asset, geometry per s05.11). One diagram, two layouts, one text source.

| Property | Spec |
|---|---|
| Nodes | **Square mono nodes numbered 01 to 05**: 40 px (32 px at 360 px), radius 2, 2 px Primary 700 outline, White fill, numeral IBM Plex Mono 600 `tnum` Primary 700, 16 px |
| Active node (interactive or progress only) | Primary 700 fill, White numeral, 3 px accent underline (16 px, square ends) under the numeral. One active step at a time |
| Icons | 48 px process icon above (horizontal) or beside (vertical) each node, Primary 700, stroke 1.25 (2.50 px rendered) |
| Connector | 2 px Primary 700 line, square caps, miter elbows with no radius, 16 px minimum between node edge and line end; open chevron arrowhead (2 px, miter) only if direction is not obvious |
| Step 05 | Node outline **dashed** (4 px dash, 4 px gap), White fill, Primary numeral. Label carries an asterisk and the footnote "* WHERE APPLICABLE" in mono caps: the condition is shown by word and by dash, not colour |
| Label | IBM Plex Mono 600 UPPERCASE, 12 px / 16 px, tracking +0.08em, Primary 700, max 3 lines. Indic: Anek 600, 14 px, no case change |
| Sub-label | Anek 400, 14 px, Neutral 600 `#65655F` (5.87:1 on White, 5.33:1 on Stone), optional, from INFO-BANK only |
| Colour on light | Primary and White only. Accent only as the active underline |
| Colour on a primary band | Inverse: White outline and numerals and labels (12.83:1), active node White fill with Primary numeral, accent underline Accent 500 (4.47:1); step 05 dashed White |
| Horizontal layout | From 768 px up: five equal columns, nodes on one line, gap at least 24 px, on White, Stone or a primary emphasis band |
| Vertical layout | Below 768 px: nodes in a 40 px left column joined by a vertical line, text to the right |
| Print | Horizontal on A4 landscape or A3 poster; vertical in A5 leaflets; 48 px icons not below 10 mm |

Exact labels, in this order and spelling (caps are CSS only; the source text keeps the spelling below; sub-labels optional):

| Node | Label (source text) | Optional sub-label |
|---|---|---|
| 01 | Dewatering | Mechanical pumps |
| 02 | High-pressure cleaning | Jet up to 250 bar, subject to site and equipment |
| 03 | Sludge & water removal | Industrial vacuum |
| 04 | Disinfection | Antibacterial agent |
| 05 | UV treatment (where applicable) | |

Never show the old 6-step or HCl version, never add or merge a step, never reorder. Implementation: an ordered list `<ol>`, each item "Step 1: Dewatering"; step 5 reads "Step 5: UV treatment (where applicable)"; SVG connectors are decorative (`aria-hidden="true"`). The diagram is a statement of method, not a fear device: no dirty-tank imagery beside it.

## 10.14 Data tables and comparison

Tables are ruled cells: every cell has a 1 px rule, nothing is shaded to persuade.

| Property | Spec |
|---|---|
| Radius | 0 (outer frame and cells); 2 at most |
| Header row | **Primary 700 fill**, White text (12.83:1), Plex Mono 600 UPPERCASE caps, 12 px, tracking +0.08em; units in header |
| Frame | 1 px `ct.color.border.strong` (Primary 700) around the table |
| Cell rules | 1 px `ct.color.border.rule` (Neutral 300 `#C7C6C1`, decorative 1.71:1 on White, 1.56:1 on Stone; text carries meaning) on all cell edges, horizontal and vertical; no zebra |
| Row height | 48 px desktop, 56 px mobile, 8 mm minimum in print |
| Index column (optional) | Mono "01", "02", Accent 700 on White (6.51:1) or on Stone (5.92:1); otherwise Primary |
| Alignment | Text left (Anek 400 body), numbers right, dates left; numbers and dates in Plex Mono 500, 14 px, `tnum`, Neutral 900 `#25282A` (14.83:1 on White, 13.49:1 on Stone) |
| Mobile | Keep as a table with horizontal scroll inside the component, or stack rows as label-value pairs; never hide columns without a toggle |
| Highlight | None. No "recommended" or "popular" row tinting: respects the customer's right to decide |
| Source line | Mono caps caption under the table: "SOURCE: INFO-BANK §n" |

Example rows (from brand facts): Domestic, up to 20,000 L; Commercial overhead, up to 20,00,000 L; Commercial underground, up to 1,00,00,000 L (1 crore litres). Institutional and large-capacity capacities are not stated (Open).

## 10.15 Timelines: cleaning cycle and due date

No flat number: the interval belongs to the organisation (healthcare about 3 months, schools about 6 in the brand facts), and a customer's timeline shows only that customer's recommended date. Horizontal 2 px Primary 700 axis with square caps (vertical on mobile). Cleaned marker: solid Primary **square** 12 px, label "Cleaned" and date in mono. Due marker: hollow square 12 px, 2 px Primary outline, label "Next due (recommended)" and date. Between them: "Interval set for your organisation". Past due: Warning icon with "Due date has passed", never red, never accent. Sample data is marked "Illustrative" (03 Oct 2026 and 03 Jan 2027).

## 10.16 Charts

Palette comes from s03.10 and is used in this order. Accent 500 is not a chart fill on White (2.87:1); Accent 600 is. Secondary is TBD and not used in charts.

| Order | Name | Token | HEX | On White | Cue besides colour |
|---|---|---|---|---|---|
| 1 | Primary 700 | `ct.color.primary.700` | `#20334B` | 12.83:1 | Solid line, square marker, direct label |
| 2 | Accent 600 (highlight, one series only) | `ct.color.accent.600` | `#C54826` | 4.85:1 | Dashed line, diamond marker |
| 3 | Info border | `ct.color.state.info.border` | `#2A8DBA` | 3.74:1 | Dotted line, triangle marker |
| 4 | Warning border | `ct.color.state.warning.border` | `#B07400` | 3.93:1 | Dash-dot line, cross marker, hatch fill |
| 5 | Neutral 500 | `ct.color.neutral.500` | `#85847F` | 3.75:1 | Thin solid line, "Other" label |
| 6 | Success border | `ct.color.state.success.border` | `#2F9E55` | 3.42:1 | Sixth series only, with pattern and label |

| Rule | Spec |
|---|---|
| Max series | 5 by default; the sixth needs a pattern and direct label. Series 2 and 4 are never adjacent without markers (deuteranopia dE 11.2 per s03) |
| Shapes | Lines 2 px, square caps, miter joins; bars radius 0, no outline radius; gauge arc 3 px, square caps; markers are squares, diamonds, triangles or crosses (no circle markers) |
| Chart chooser | Change over time: line. Compare categories: horizontal bar. Part of whole: one stacked bar, 4 segments max. Distribution: dot strip made of small squares. No pie, donut, 3D, radar, dual axis |
| Baseline | Bars start at zero, always |
| Text | Title Anek 700 caps h4 scale, Primary 700; axis and labels Plex Mono 500 caps 11 to 12 px, `tnum`; units on axis, not repeated per label |
| Gridlines | Horizontal only, 1 px Neutral 300; zero line 1 px Neutral 500 |
| Labels | Direct labels on series; one plain-sentence annotation; legend only as fallback; highlight one series in Primary, others Neutral 500 |
| Graphic contrast | Lines and bars 3:1 against the ground; the lightest sequential step needs a 1 px border (s03) |
| Source and alternative | Mono source line under every chart, plus a data table or one-sentence summary beside it |

## 10.17 Map of state presence

Seven locations: Punjab, Delhi, Uttar Pradesh, Himachal Pradesh, Madhya Pradesh, Jharkhand, Maharashtra (Delhi is a Union Territory). Simplified India outline, Neutral 100 `#ECEBE7` fill with 1 px Neutral 500 outline (3.14:1 against the fill); present states Primary 700 fill (10.76:1 against the base). Names listed beside the map as text in mono caps; small areas get a straight leader line with a square end. Wording is "Service presence", never "coverage in all districts" or "pan-India". No city pins until districts are confirmed. Use only a boundary file matching the official map of India; verify source and licence (Open).

## 10.18 App icon and favicon

The logo does not exist yet (s02). Draw the app icon only from the approved s02 symbol, never the lockup. Per s05.10: app icon 1024 x 1024 px square full-bleed Primary 700 with White symbol, no baked radius (platforms apply their own mask), symbol inside the central 66% (verify before use for Android adaptive icons); favicon 32 px Primary 700 square with radius 4 and White symbol, 16 px with radius 2, plus SVG; 180 px Apple touch; 512 px master (verify before use).

## 10.19 Tank sticker information hierarchy

Physical size, stock and adhesive are owned by s14 and s16. The sticker reads as a spec sheet: a primary title band with the lockup, then a **ruled field grid** (1 px rules, mono caps labels above values), corners about 1.5 mm radius. Type follows s04: label mono 500 caps 7 pt (Indic labels Anek 600, 8 pt, no caps), key dates 20 pt Anek wdth 78 700 `tnum`, phone mono 600 9 pt.

| Rank | Field (mono caps label) | Value | Note |
|---|---|---|---|
| 1 | CLEANED ON | 03 OCT 2026, 20 pt, Primary | Label above in 7 pt mono caps |
| 2 | NEXT DUE (RECOMMENDED) | Date, 20 pt, Primary | Same size as rank 1, read together. **The 3 px accent underline sits under CERT NO. in the bottom reference row, not under this date**; it replaces the old coral band. Accent is the only marker colour on the sticker |
| 3 | TECHNICIAN / PROVIDER ID | Plex Mono 500 | Clean Tank lockup stays primary; franchisee name smaller |
| 4 | CONTACT | One phone number, mono 600 9 pt | Which of the two INFO-BANK numbers is printed is Open |
| 5 | RECORD NO. | Plex Mono, certificate number of this job | Not the ISO certificate number |
| 6 | QR (optional) | Black on White, minimum 20 x 20 mm with 4-module quiet zone (verify before use) | Print only if a record page exists |

The sticker carries no ISO line (partial wording is not allowed and the full line does not fit), no health claim and no urgency wording. Bilingual labels (draft, native review needed): Hindi "सफाई की तारीख", "अगली सफाई की तारीख"; Punjabi "ਸਫ਼ਾਈ ਦੀ ਤਾਰੀਖ਼", "ਅਗਲੀ ਸਫ਼ਾਈ ਦੀ ਤਾਰੀਖ਼".

## 10.20 Certificate data block

The certificate is a test-report page: square corners, a Primary 700 title band, then a ruled field grid of two columns of key and value pairs, 1 px rules (`ct.color.border.rule`), 8 mm minimum row height. Labels Plex Mono 500 caps 8 pt above values; values Plex Mono 500 10 pt `tnum` for numbers, dates and codes (certificate number, GSTIN 09LFS1473F5ZU), Anek 400 10 pt for names and addresses. Reference code in the band (for example REF CT-CERT-nn, format Open).

Fields in order: certificate no.; customer and site address; tank type and capacity (20,000 L style); cleaning date; next due date (recommended, not a promise); process record (5 steps 01 to 05 in order, each Done, step 05 Done or Not applicable); technician and Authorised Service Provider, name and ID; Clean Tank contact (INFO-BANK §1 only). Footer lines at 8 pt: the exact ISO wording ("ISO 9001:2015 certified (Q2A-UK Certification Board), Certificate No. Q2A-2026-0401T118011, valid to 31 March 2029.") and "Water quality also depends on source water, plumbing, tank condition and later maintenance, which are outside our service."

## 10.21 Site wayfinding and signage pictograms

Informational notices, not statutory safety signs: a rectangular Primary 700 panel (square corners, or a fixed 4 mm radius per s05) with White text (12.83:1), which cannot be mistaken for the red, yellow or blue geometric safety signs. Real hazard signs (confined space, electrical, no entry) use the standard statutory pictograms unmodified, never redrawn in brand style (check IS 9457 and ISO 7010 before site use, verify).

- Message: "Work in progress, water supply off" in Anek caps heading style. Hindi (draft): "काम जारी है, पानी की आपूर्ति बंद है". Punjabi (draft): "ਕੰਮ ਜਾਰੀ ਹੈ, ਪਾਣੀ ਦੀ ਸਪਲਾਈ ਬੰਦ ਹੈ".
- Pictogram: `site-water-off` drawn large beside the message; `technician` optional. A mono reference tag (for example REF CT-SITE-01) sits in a ruled footer strip.
- Three languages, equal size, English then Hindi then Punjabi. A3 portrait for stairwells, A4 for doors (assumption; s16 owns). Clean Tank lockup at the foot with s02 clear space.

## 10.22 Honest-claims rule for infographics

Every infographic needs a source line in mono caps. Internal facts cite INFO-BANK section; outside facts cite the publisher and year. Flag in the file notes any use of: Clean Tank Agent properties (non-toxic, eco-friendly, 3-month effect), CPWD DSR inclusion, the "60% of diseases" statistic, WHO, FDA or government approval, lab results. None of these may appear on a public graphic until evidence is on file. Health-adjacent graphics explain the process and carry the water-quality qualifier. No before and after "purity" gauges without a lab report. No invented counts.

## 10.23 Rules

```
RULE 10.1:     Use Lucide (ISC) as the only base icon set, plus the custom icons in 10.6, rendered with square caps and miter joins.
CLASS:         MUST
REASON:        Exact, Ordered: one stroke and one grid in every district.
EXACT SPEC:    Lucide pinned version; stroke-linecap="square", stroke-linejoin="miter", miterlimit 4; stroke 1.75 at 24; custom icons on 24 px grid, padding 1 px, live area 22 px, corners 0 to 1 px, no rounded rects.
EXAMPLE:       Navigation uses Lucide phone and map-pin beside custom tank-overhead, all with square caps.
ANTI-EXAMPLE:  A franchise brochure mixes a Font Awesome phone with a round-capped Lucide pin.
TEST:          Does every icon file come from the Lucide package or the custom folder, and does it render with square caps and miter joins?
EXCEPTION:     Third-party brand glyphs (WhatsApp), per owner rules. Gobind Galaxy approves.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 10.2:     Keep icons Primary and mark the single active item with an accent underline or marker, never by recolouring or filling the icon.
CLASS:         MUST
REASON:        Restrained: accent is a thin marker; it fails contrast on white at 500.
EXACT SPEC:    ct.icon.default Primary 700 #20334B; ct.icon.marker 3 px square-ended line: Accent 600 #C54826 on light (4.85:1 White, 4.41:1 Stone), Accent 500 on primary band (4.47:1); one per view.
EXAMPLE:       Current tab: Primary icon, Primary label, 3 px accent underline below the label.
ANTI-EXAMPLE:  A coral icon for the active tab, Accent 500 on white (2.87:1), or accent on a warning.
TEST:          Is there at most one accent marker per view, is the icon still Primary, and does the marker meet 3:1?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 10.3:     Show the 5-step diagram as square mono nodes 01 to 05 with the exact labels, in order.
CLASS:         MUST
REASON:        Exact, Documented: one method everywhere.
EXACT SPEC:    Labels: Dewatering, High-pressure cleaning, Sludge & water removal, Disinfection, UV treatment (where applicable); 40 px square nodes, radius 2, 2 px Primary outline; labels Plex Mono caps; horizontal from 768 px, vertical below; step 05 dashed with "* WHERE APPLICABLE".
EXAMPLE:       Website method band on Primary, five columns on desktop.
ANTI-EXAMPLE:  A 6-step version, round nodes, or step 05 shown as always performed.
TEST:          Do the five labels match the list character for character (before CSS caps), and is step 05 dashed with its footnote?
EXCEPTION:     Franchise partners may not change it. Gobind Galaxy.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 10.4:     Format numbers in Indian grouping with units, tabular figures and DD Mon YYYY dates.
CLASS:         MUST
REASON:        Exact: 20,00,000 L reads as built for India.
EXACT SPEC:    en-IN grouping; non-breaking space before L and bar; tabular-nums; 03 Oct 2026; ₹ before number, no space; no K, M, B.
EXAMPLE:       "Overhead tanks up to 20,00,000 L".
ANTI-EXAMPLE:  "2,000,000 liters" or "03/10/26".
TEST:          Does any figure use Western grouping or a numeric-only date?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 10.5:     Build data tables as ruled cells with a Primary header row and mono data.
CLASS:         MUST
REASON:        Ordered, Documented: tables read like a test report.
EXACT SPEC:    Radius 0; header Primary 700 fill, White Plex Mono 600 caps 12 px; 1 px Neutral 300 cell rules, 1 px Primary frame; rows 48 px (56 mobile); numbers right, Plex Mono 500 tnum; no zebra, no highlighted row.
EXAMPLE:       Capacity table: tank type, maximum capacity (L), source line.
ANTI-EXAMPLE:  Rounded table with a tinted "popular" row and a coral header.
TEST:          Is the header Primary with a White mono label, and is every cell ruled?
EXCEPTION:     None.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 10.6:     Lay out the sticker and certificate as ruled spec fields with mono labels and the Level Line under the due date.
CLASS:         MUST
REASON:        Documented: a record handed over looks like a report.
EXACT SPEC:    Primary title band; 1 px ruled field grid; labels Plex Mono caps 7 pt (sticker) or 8 pt (certificate); dates 20 pt Anek wdth 78 700 tnum on the sticker; 3 px accent underline under CERT NO. in the reference row; certificate corners square, sticker about 1.5 mm.
EXAMPLE:       Sticker: CLEANED ON and NEXT DUE side by side, accent line under NEXT DUE.
ANTI-EXAMPLE:  A coral band across the sticker, or a rounded ribbon seal on the certificate.
TEST:          Is the field order the same on sticker and certificate, and is there exactly one accent element?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

## 10.24 Do / Don't

| Do | Don't |
|---|---|
| Use outline Lucide and the custom set with square caps and miter joins at the size ladder | Mix icon sets, use round caps, or hand-scale strokes |
| Mark the active item with a 3 px accent underline, icon stays Primary | Recolour or fill the icon to show selection |
| Keep step 05 dashed with "* WHERE APPLICABLE" | Add a sixth step or hide the condition |
| Write 20,00,000 L and 03 Oct 2026 | Write 2,000,000 liters or 10/03/26 |
| Rule every table cell and use a Primary header row | Round table corners, zebra stripe or tint a "recommended" row |
| Set labels and codes in Plex Mono caps | Set labels in friendly sentence-case body type |
| Label chart lines directly and add a table and source line | Rely on a legend and colour alone |
| Show the next due date as "recommended" | Show a countdown or red "overdue" |
| Cite a source on every statistic | Quote a number you cannot prove |

## 10.25 Accessibility and India notes

- Graphics needed to understand content meet 3:1 (WCAG 2.2 SC 1.4.11); meaningful icons held to 4.5:1 where the palette allows (Primary 12.83:1, Neutral 600 5.87:1). Accent 600 marker 4.85:1 on White, 4.41:1 on Stone.
- Icon beside a visible word: `aria-hidden="true"`. Standalone interactive icon: `aria-label`. Decoration: hidden. Active item carries `aria-current`.
- Never colour alone: status is icon plus word; the active marker is a line with a position; charts use markers, dashes and hatches. Every chart and map has a text table or list.
- Targets 48 px touch (44 px minimum); 32 px only in dense desktop tables; never below 24 x 24 CSS px (WCAG 2.5.8). Focus ring 2 px Primary, 2 px offset, radius 4 (White ring on primary bands).
- Process diagram is an `<ol>` with text "Step 1: Dewatering"; SVG decoration is hidden. Caps are applied by CSS so screen readers read normal words.
- Mono caps tracking +0.08 to 0.1em at 11 to 13 px: check legibility on low-end phones. Hindi and Punjabi labels use Anek (no mono, no caps), run 20 to 30% longer: allow wrap, never truncate, keep the s04 size floor and line heights (1.65 Devanagari, 1.60 Gurmukhi), set `lang="hi"` or `lang="pa"`. Western digits throughout; the ₹ glyph is present in the s04 fonts.
- No hand gestures, animals or religious symbols in icons; calendar is Gregorian; maps use official boundaries only.

## 10.26 Day one versus later

Day one: Lucide pinned with the square-cap override, 5 process icons, 4 tank icons, certificate, sticker, schedule-amc, status icons, size ladder, tokens, number formats, 5-step diagram, ruled table component, one chart palette, certificate block and sticker hierarchy. Later: remaining icons, site pictogram family, QR record page, Hindi and Punjabi month names, PDF report templates.

## 10.27 Checklist

- [ ] Families and purpose (10.2); construction grid, keylines and live area drawn with square caps (10.4)
- [ ] Lucide override applied: square caps, miter joins, 1.75 at 24, per-size strokes (10.3, 10.5); lint rejects round caps and rx
- [ ] No rounded rectangles or decorative circles in custom icons (10.4, 10.10)
- [ ] States and contrast; active marker is an accent line, icon stays Primary (10.8)
- [ ] Metaphor and naming (10.6, 10.7); export pipeline (10.11)
- [ ] Labels in Plex Mono caps, Indic in Anek; non-colour cues (10.9, 10.25)
- [ ] App icon and favicon from the s02 symbol (10.18)
- [ ] Chart chooser, palette, square markers, text and gridline rules, source line (10.16)
- [ ] 5-step diagram as square mono nodes 01 to 05, step 05 dashed (10.13); ruled tables with Primary header row (10.14)
- [ ] Indian number format with tested formatter (10.12)
- [ ] Sticker and certificate as ruled spec fields, one Level Line, checked against INFO-BANK; signage checked (10.19 to 10.21)
- [ ] India-specific payment icons (rupee, UPI, GST): not applicable to Clean Tank because no payment flow is defined

## 10.28 Open items and evidence needed

1. Pin the Lucide version, verify icon names (square-check, triangle-alert) and record both in the s19 licence register. Decide whether to patch Lucide's rounded-rectangle corners at build or keep upstream geometry.
2. Confirm technician PPE (helmet, vest, safety shoes) before drawing `technician`.
3. Owner to confirm Western digits in Hindi and Punjabi, and `+91` phone grouping.
4. Native review of Hindi and Punjabi labels and the signage line.
5. Which INFO-BANK phone number goes on the sticker; whether a QR record page will exist; certificate reference-code format.
6. Capacity for institutional and large-capacity tanks is not in the brand facts.
7. Official-boundary India map file and licence.
8. IS 9457 and ISO 7010 check before statutory-style signage; Red Cross emblem check; WhatsApp glyph terms.
9. Claims still needing evidence: Clean Tank Agent properties, CPWD DSR, "60% of diseases", WHO/FDA/government approval, tank-cleaned counts, lab results.
10. Platform specs marked verify: favicon sizes, Android safe zone, QR size, `Intl` compact notation in Firefox and Safari.
11. Token name alignment: s03 lists `ct.color.border.subtle` (Neutral 300) while s05 and this sheet use `ct.color.border.rule`; s03 owner to confirm one name. Secondary colour is TBD and has no use in icons or charts until defined.
12. Mono caps labels at 11 px: confirm legibility on first print and low-end phone proof.
