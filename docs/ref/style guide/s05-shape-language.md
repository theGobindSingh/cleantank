# Clean Tank Services: Style Guide
# 05. Shape Language & Form

> Shape is read before text. This pillar fixes the small, closed set of geometric rules that make everything Clean Tank Services draws look like it came from one hand: the primitives, one corner family with three radius values, stroke weights, line ends, containers, dividers, photo crops, depth without shadow, the diagram shapes for the 5-step process, and how the same rules translate to a sticker, a van panel and a sign. It exists so that a button, a certificate and a tank sticker share the same squared, ruled, exact character, and so that nobody reaches for a water splash, droplet, pill or soft shadow to say "tank cleaning".

Sheet CT-SG-05 | v2.0 | 08 Oct 2026 (Quiet Utility revision) | Tier legend: LOCK = central brand owner approves any change · GUARD = varies inside stated limits · FLEX = judgment within principles

Not covered here: icon drawing (s10), motif artwork (s06), component layout (s13), spacing grid (s07), logo drawing (s02). Ratios are WCAG 2.2 values computed with Python. Colour roles follow v2: Primary (navy `#20334B`), Secondary (TBD, owner to decide, no value assigned), Accent (coral `#EE7555`, marker only), Neutral (white to graphite, slightly warm), State.

## 05.1 Principle and inheritance

**Principle:** Clean Tank shapes are drawn like a spec sheet or a test report: squared rectangles on a strict grid, separated by 1 px rules, one small 4 px corner, no ornament.
**A stranger should feel:** exact, ordered, restrained. **Never:** wet, glossy, soft, decorative.

| Source (v2 principle or slider) | Shape consequence |
|---|---|
| Exact (Soft/Sharp 4) | Corners are 4 px at most and the same everywhere. Not pill, not blob. Edges and rules align to the grid |
| Ordered (Organic/Geometric 5) | Only rectangles, straight lines, ticks and 90 degree elbows. Circles only for literal round objects (manhole, gauge dial). No wavy or hand-drawn contours |
| Restrained (Quiet/Loud 1, Still/Lively 1) | No effects: no shadow, gloss, bevel, glow, glass or gradient shape. Depth is a rule or a band |
| Documented (Human/Technical 4) | Ruled cells, mono reference codes and numbered sections. The sticker, the certificate and the job card are the hero shapes |
| Honest materials | Flat primary and neutral fields on flat edges, like concrete, steel and paper. Nothing imitates another material |

Authority lives in the visuals; humility lives in the words (voice unchanged). Shape does not try to be friendly. It tries to be correct and legible.

## 05.2 Shape vocabulary from the brand's real world

| Real object | Shape primitive | Where it appears |
|---|---|---|
| Tank cross-section, tank label, test report, document | **Rectangle** with 4 px corners (dominant) | Cards, buttons, inputs, stickers, certificates, image frames |
| Manhole lid seen from above, gauge dial | **Circle** (literal only) | Illustrations or diagrams of those objects. Never a UI shape, avatar or decoration |
| Water level in a tank | **Horizontal line** | Level Line (05.9), dividers, rules between zones |
| Gauge scale | **Tick marks**: short parallel lines at fixed spacing | Scale devices, progress tracks, chart axes |
| Pipe | **Straight 2 px line with a sharp 90 degree elbow** (miter, no radius) | Diagram connectors, flow between process steps |
| Dated sticker, certificate, job card | **Ruled field grid**: boxed fields with 1 px gaps | Cleaning Date Sticker, certificate date block, tender tables |

| Role | Primitive | Rule |
|---|---|---|
| Dominant | Rectangle (radius 0, 2 or 4) | At least 90% of shapes in any layout |
| Literal | Circle | Only where the real object is round: manhole, gauge dial. Never a number holder, avatar, status dot, radio or decoration |
| Line | Horizontal and vertical rule | Carries structure and the signature device |
| Avoid | Triangles, diagonals, hexagons, stars, pills, any curve that is not a literal circle or a corner radius | Exception: arrowheads and the gauge arc |

Logo derivation: no logo exists yet (placeholder only). The logo is to be drawn from this vocabulary, not the other way round. Constraints handed to s02: corners from the 05.3 scale (maximum 4 px at 32 px, 12.5%); counters rectangular, or circular only if the symbol depicts a manhole or gauge; stroke weights in multiples of 1/12 of symbol height (2 px at 24 px); square terminals and miter joins; no droplet, splash or wave. Open item 1.

## 05.3 Corner family and radius scale (LOCK)

**Family:** plain circular-arc corners, and only three values. One family everywhere. Squircles are not used: the same arc works in Figma, code and print. Mixed families (cut corners next to rounded) are forbidden. **`sm` 4 px is the default for every component.**

| Token | px | rem (16 px root) | Use |
|---|---|---|---|
| `ct.radius.none` | 0 | 0 | Rules, dividers, table cells, ruled grids, bands, full-bleed images and heroes, certificate paper, inner fields of a sticker |
| `ct.radius.xs` | 2 | 0.125 | Step nodes, progress and level tracks, checkbox and radio, nested elements with a small gap, inline code |
| `ct.radius.sm` | 4 | 0.25 | **Default.** Buttons, inputs, selects, cards, chips, tags, alerts, menus, popovers, modals, image frames, on-screen stickers, signage |

Retired in v2: `md` 8, `lg` 12, `xl` 16, `full` 9999 and every mapping to them. No other value (no 1, 3, 6, 8) is allowed.

Component map (digital, LOCK):

| Component | Token | Notes |
|---|---|---|
| Button (primary, secondary, inverse) | `sm` 4 | Rectangle, never pill. Label uppercase, height 48 |
| Text input, select, textarea | `sm` 4 | |
| Card (service, price, testimonial) | `sm` 4 | 1 px rule edge, no shadow |
| Chip, tag, date chip, status label | `sm` 4 | Pill chips are not used |
| Checkbox, radio | `xs` 2 | Radio is a square with a filled square dot, see open item 8 |
| Toggle | Track `sm` 4, knob `xs` 2 | Both rectangles |
| Image frame, photo crop | `sm` 4 | Full-bleed hero and bleed edges 0 |
| Modal, dialog | `sm` 4 | 1 px primary rule, flat scrim |
| Alert, toast | `sm` 4 | |
| Menu, popover, tooltip | `sm` 4 | |
| Sticker (on screen) | `sm` 4 | Print value in 05.13 |
| Avatar (UI) | `sm` 4 | A square or 3:4 frame, never a circle. Printed badge photo is a rectangle (05.10) |
| Process step node | `xs` 2 | Square, 05.11 |
| Table, ruled grid | `none` 0 | Cells and container are square |
| Progress / level track | `xs` 2 | |
| Header, footer, primary band | `none` 0 | Full-width bands are square |

**Pill vs rectangle:** buttons, cards and chips are never pills, and no radius above 4 px exists. Large radii read soft and casual (Soft/Sharp 4 and the v2 principle Exact say no).

**Nesting formula:** inner radius = max(outer radius minus gap, 0), applied when the gap is smaller than the outer radius. At a gap of 4 px or more the inner element uses its own component token.

| Case | Outer | Gap | Inner |
|---|---|---|---|
| Image inset in a card | `sm` 4 | 2 px | 2 px (`xs`) |
| Image inset in a card | `sm` 4 | 4 px or more | `sm` 4 (own token) |
| Button inside a modal | `sm` 4 | 24 px | `sm` 4 (own token) |
| Tag flush to a card corner | `sm` 4 | 0 | 4 (inherits, clipped) |

Padding follows radius: container padding is at least 4 px; real spacing is owned by s07 (16 px on 360 px screens, 24 px from 768 px).

**Fallback:** none needed. If a platform ignores `border-radius`, the element is a plain rectangle and still correct.

## 05.4 Border width, stroke, line ends and focus (LOCK)

| Token | px | Print (start values, verify with printer) | Use |
|---|---|---|---|
| `ct.border.width.thin` | 1 | 0.25 pt on paper, 0.5 mm minimum on vinyl or sticker | Dividers, card outline, input at rest, table rules, ruled-cell gaps, secondary button |
| `ct.border.width.base` | 2 | 0.75 pt on paper, 0.75 mm on vinyl | Diagram strokes, connectors, step-node outline, input error and focus-within state, strong divider |
| `ct.border.width.bold` | 3 | 1 pt on paper, 1 mm on vinyl | Level Line, gauge arc, certificate header rule, active-step underline |
| `ct.focus.width` | 2 | n/a | Focus ring |

Icon stroke is 1.75 px on the 24 px grid (s10 owns it); it is the one stroke outside the three tokens.

**Line ends: square caps and miter joins** on every rule, tick, connector, diagram, chart line, gauge arc and icon (`stroke-linecap: square`, `stroke-linejoin: miter`, `stroke-miterlimit: 4`). No round caps, no round joins. Outline shapes use inside-aligned strokes so a 2 px border never changes a 40 px box size.

Border colour (3:1 where the border is the only cue):

| Border job | Token | Light | Ratio on White | Ratio on Stone `#F5F4F1` | Dark | Verdict |
|---|---|---|---|---|---|---|
| Input and control edge | `ct.color.border` | Neutral 500 `#85847F` | 3.75:1 | 3.41:1 | Primary 400 `#6289BC` on Primary 900 4.95:1, on Primary 800 4.34:1, on Primary 700 3.56:1 | PASS 3:1 |
| Structural rule, record grid, table header | `ct.color.border.strong` | Primary 700 `#20334B` | 12.83:1 | 11.67:1 | White on Primary 900 17.85:1 | PASS |
| Divider, card outline, ruled-cell gap | `ct.color.border.rule` | Neutral 300 `#C7C6C1` | 1.71:1 | 1.56:1 | Primary 600 | Decorative: cell text carries meaning |

Neutral hex values above are the v1 values; s03 v2 may shift them slightly warm. Re-run the ratios if they change. Neutral 300 and lighter are never used for a control boundary. A clickable card must show visible link text with a chevron icon; its subtle border is not the cue.

**Focus ring (LOCK):** 2 px solid `ct.color.focus.ring` (Primary 700), 2 px offset (`ct.focus.offset`), ring radius 4 px, drawn with `outline`, never clipped by `overflow: hidden` on a parent. Primary 700 on White 12.83:1, on Stone 11.67:1. On primary bands and photos the ring is White: White on Primary 700 12.83:1, on Primary 900 17.85:1. The offset leaves page ground between ring and element, so a primary button still shows a ring. Focus is visible on keyboard focus (`:focus-visible`), never removed.

Error state: input border changes to 2 px `ct.color.state.error.border` (`#D0365F`, 4.80:1 on White, 4.36:1 on Stone), plus icon and the word "Error" or the message. Never colour alone.

## 05.5 Containers and dividers (GUARD)

Separation order, use the first that works: white space, then a 1 px rule, then a ruled cell, then a stone tint, then a solid primary band. There is no shadow step.

| Container | Fill | Edge | Radius |
|---|---|---|---|
| Page section | White, alternating Stone `#F5F4F1` | none, or a 1 px rule between zones | 0 |
| Card | White on Stone, or Stone on White | 1 px Neutral 200 | `sm` 4 |
| Ruled grid (record, spec table) | White or Stone cells | 1 px gaps showing a Primary 700 or Neutral 300 background | 0 |
| Primary band (header, footer, emphasis section) | Primary 700, white text | none | 0 |
| Note panel | Stone | 1 px Neutral 200, plus 3 px Primary 700 rule on the left edge | `sm` 4 |
| Menu, popover | White | 1 px Primary 700 | `sm` 4 |
| Modal | White | 1 px Primary 700, over a flat scrim | `sm` 4 |

Primary bands are used for header, footer, selected emphasis sections (for example the 5-step process band), table headers and buttons. Never a whole page.

| Divider | Spec |
|---|---|
| Standard (`ct.divider.thin`) | 1 px Neutral 200, full container width, square ends |
| Strong (`ct.divider.strong`) | 2 px Primary 700, under table headers and certificate header |
| Signature | Level Line (05.9), only under a page's top heading |
| Forbidden | Wave dividers, torn edges, diagonal section cuts, dotted ornament lines |

## 05.6 Depth without shadow (LOCK)

**There are no shadows.** The tokens `ct.shadow.0` to `ct.shadow.3` are retired and removed. Depth is made from four flat devices:

| Device | Spec | Use |
|---|---|---|
| 1 px rule | Neutral 200 (quiet) or Primary 700 (strong) | Card edge, menu and modal edge, zone separators |
| Ruled cells | Grid with `gap: 1px` over a Primary 700 or Neutral 300 background, cells White or Stone | Records, spec tables, sticker and certificate fields |
| Solid primary band | Primary 700 fill, square, full width | Header, footer, emphasis section, table header, modal title strip |
| Tonal step | White to Stone, or Primary 800 to 700 in dark mode | Surface vs page |

Hover on a clickable card: the edge changes from Neutral 200 to Primary 700 (1 px). Sticky header: a 1 px rule on scroll. Modal scrim: Primary 900 `#0F1824` at 60% opacity, flat, no blur.

Dark mode: page Primary 900, surface Primary 800, raised Primary 700 (s03), plus a 1 px Primary 600 edge on cards.

Never: drop shadow, inner shadow, glow, glass, blur, translucency, neumorphism (light-on-light fields fail 3:1 and hide what is clickable), gradient shapes, bevels, embossing, lens flares.

## 05.7 Shape and colour combinations (LOCK)

Accent (coral) is a **marker only**: Level Line, active-step underline, a reference tag or index number, one key figure per view. It is never a button fill, never a panel, never a warning. At most 10% of area (s03), and no solid coral shape with a short side above 3 px on screen except marker bars that are 3 px tall.

| Shape | Fill / stroke | Content | Ratio | Verdict |
|---|---|---|---|---|
| Primary button | Primary 700 fill | White uppercase label | 12.83:1 | Pass |
| Secondary button | 1 px Primary 700 stroke on White | Primary 700 label | 12.83:1 | Pass |
| Inverse button (on primary band or photo scrim) | White fill | Primary 700 label | 12.83:1 | Pass |
| Step node 01 to 04 (static) | 2 px Primary 700 stroke, White fill | Primary 700 mono numeral | 12.83:1 | Pass |
| Step node active | Primary 700 fill, 3 px Accent underline | White mono numeral | 12.83:1 text, 4.47:1 underline | Pass 3:1 UI |
| Step node 05 (where applicable) | 2 px dashed Primary 700 stroke, White fill | Primary 700 mono numeral | 12.83:1 | Pass |
| Date chip | Primary 50 `#F1F4F9` fill, `sm` 4 | Primary 700 mono text | 11.64:1 | Pass |
| Level Line on White | Accent 500, 3 px | none (marker) | 2.87:1 | Allowed: nothing depends on it |
| Level Line on Primary | Accent 500, 3 px | none | 4.47:1 | Pass 3:1 UI |
| Sticker "Next due" field marker | Accent 500, 3 px underline | none | 2.87:1 on White | Allowed: the date is also written as text |
| Card | White or Stone, 1 px Neutral 200 | Neutral 900 `#25282A` | 14.83:1 on White, 13.49:1 on Stone | Pass |

Rules of the combination: coral never fills a card, panel, section or button; never sits in an alert, badge or error state; never outlines a control on white (2.87:1); never carries body text on white. Coral text on any surface follows s03.

## 05.8 Photo crops and masks (GUARD)

| Crop | Spec |
|---|---|
| Frame | Rectangle, `ct.radius.sm` 4 px; full-bleed heroes 0 on bleed edges |
| Ratios | 16:9 (hero, video), 4:3 (service), 1:1 (social), 3:4 (portrait) |
| People | Never cropped into circles, blobs or the logo shape. UI avatars are square 32, 40 or 56 px frames at 4 px. Printed technician badge photo: 3:4 rectangle, 1.5 mm corners |
| Website hero | Full-bleed photo, 0 radius, headline and CTAs on top, flat Primary 900 scrim (s08), fixed or floating header (owner TBD) |
| Overlays | Flat Primary 900 scrim at 70% minimum behind text (s03), never a gradient fade |
| Borders | None on photos. No frames, drop shadows, tilt or polaroid effects |
| Forbidden masks | Water splash, droplet, blob, wave, cloud, hexagon, diagonal cut, circle masks on tanks or equipment |

Documentary photographs (s08) are the hero. A mask never covers a technician's face or hands at work.

## 05.9 Signature shape candidate: the Level Line

**Status: candidate** (s01 section 01.7: no asset is fame-tested). A horizontal accent rule, drawn like the water level in a tank gauge. Pair with the CLEAN TANK SERVICES name until measured. Geometry owned here, artwork and usage owned by s06 (motifs).

| Property | Spec |
|---|---|
| Stroke | `ct.border.width.bold` 3 px, **square caps**, Accent 500 `#EE7555` |
| Short form | 48 px long, placed 12 px below a heading, left aligned |
| Long form | Container width, used under a certificate header and as a van stripe |
| Scale option | Ticks beneath the line at 8 px spacing, 1 px wide, 6 px tall, square ends; every fifth tick 12 px tall (five divisions echo the five process steps); tick colour Primary 700 |
| Position | Always below or beside text, never above Devanagari or Gurmukhi headings (05.16) |
| Meaning | Marker. A due date or step is always also written as text |
| Limit | One Level Line per view; counts toward the 10% accent cap |

Handoff to s06: name, artwork, tick numerals, animation (s11, the Level Line draw is the one place an easing "settle" is kept), and whether the line is used on the sticker. If the owner does not adopt it, the shape system works without it.

## 05.10 App icon, sticker and badge shapes

| Item | Spec |
|---|---|
| App icon / PWA | Square 1024 x 1024 px full-bleed Primary 700 with symbol, no baked corner radius: iOS applies its own mask (Apple HIG states the system rounds the icon). Keep the symbol inside the central 66% (verify before use for Android adaptive icons) |
| Favicon | 32 x 32 px Primary 700 square, radius 4 px, symbol in White. 16 x 16 px uses radius 2 px |
| WhatsApp profile image | Square source; platform crops to a circle: keep the symbol inside the central 80% (verify before use) |
| Cleaning Date Sticker | Landscape rectangle, outer radius per 05.13. Built like a test label: primary title band (white uppercase heading), then a ruled field grid with 1 px Primary 700 gaps and square inner corners. Fields "Cleaned on" and "Next due" side by side, values in mono caps, a mono serial or reference code, and a 3 px accent underline marking the "Next due" value. Size and stock decided in s14 |
| Name badge | Rectangle, portrait photo 3:4, name in Primary 700 on White, mono ID code |
| Seal, stamp, rosette, badge-burst | **Not used.** The sticker is a record, not a medal |

## 05.11 Diagrams: the 5-step process and data shapes

The process diagram (Dewatering, High-pressure cleaning, Sludge & water removal, Disinfection (antibacterial), UV treatment (where applicable)) is the hero diagram and a candidate distinctive asset. It is often set on a primary band (inverse colours: White outline and numerals).

| Element | Spec |
|---|---|
| Node | **Square**, 40 px (`ct.size.node.md`), 32 px on 360 px screens (`ct.size.node.sm`); radius 2 (`xs`); 2 px Primary 700 outline, White fill. Numeral in IBM Plex Mono 600, "01" to "05", Primary 700, tabular |
| Active node | Primary 700 fill, White numeral, 3 px Accent underline under the numeral (16 px long, square ends). One active step at a time, only where progress or focus is shown |
| Step 05 | Dashed outline (4 px dash, 4 px gap, 2 px Primary 700 stroke), White fill, Primary numeral, with the label "* WHERE APPLICABLE" in mono caps. The dashed outline shows "where applicable" by shape, not colour |
| Connector | 2 px Primary 700 line, square caps, sharp 90 degree miter elbows (no radius), 16 px minimum between node edge and connector end |
| Direction | Horizontal from 768 px, vertical on narrow screens. Arrowheads are open 2 px chevrons with miter joins, only if direction is not obvious |
| Label | Below (horizontal) or beside (vertical) each node, Primary 700 text, step name in full |
| Interactive node | 48 x 48 px hit area even where the visual is 32 px |
| Charts | Bars `none` 0; lines 2 px with square caps and miter joins; gauge arc 3 px with square caps; no 3D, no shadow, no gradient fill. Colours per s03 chart palette (s10 owns construction) |

## 05.12 Hit targets and form sizing

| Item | Spec |
|---|---|
| Minimum target | 24 x 24 CSS px (`ct.size.hit.min` is set to 44 as our floor), WCAG 2.5.8 |
| Recommended | 48 x 48 px (`ct.size.hit.target`) for every button, input, icon button and chip; 44 x 44 px is the absolute minimum |
| Button height | 48 px at every width (s07, s13) |
| Gap between targets | 8 px minimum |
| Visual smaller than target | Extend the hit area with padding, not by enlarging the shape |

## 05.13 Physical translation

Rule: physical corners are **small fixed radii**, not proportional ones. Edges are square wherever a vendor allows. Matte finish only. All values are starting points: **verify with vendor and a signed proof**.

| Item | Corner radius | Finish and edge |
|---|---|---|
| Tank sticker (any size, size in s14) | About 1.5 mm | Matte laminate, UV-stable ink, no emboss, no kiss-cut shapes |
| Name badge / ID card | About 1.5 mm | Matte, no hologram shine as decoration |
| Certificate sheet (A4) | 0 (square) | Uncoated or matte stock, header rule 1 pt Primary 700 |
| Certificate folder | 2 mm | Matte, die-line in s14 |
| Brochure / WhatsApp card panel | 1.5 mm on print panels, `sm` 4 on screen | Matte |
| Van lettering panel (short side about 500 mm) | Square, or a fixed 4 mm if the vendor needs a radius | Satin or matte vinyl, no chrome, no outline glow |
| Signboard 600 x 900 mm | Square, or a fixed 4 mm if the vendor needs a radius | Matte or satin, flat primary, no bevelled frame |
| Van stripe | Level Line form, 25 mm tall minimum (verify), square ends | Flat accent vinyl, UV-tested (s03 open item) |

Rule of thumb: the radius does not grow with the object. A van panel gets the same 4 mm-ish corner as a sign, not a larger one. Nothing glossy, bevelled, embossed or domed. Primary and neutral are flat colours on flat edges.

## 05.14 Rules

```
RULE 05.1:     Use one corner family with three values: ct.radius.none 0, xs 2 and sm 4, and nothing else.
CLASS:         MUST
REASON:        Exact: the same standard in every district; mixed or large corners are the first sign of a patchwork brand.
EXACT SPEC:    ct.radius.none 0, xs 2, sm 4. Default sm 4 for every component. md 8, lg 12, xl 16 and full 9999 are removed. No squircles, no cut corners, no values outside the scale (no 1, 3, 6, 8).
EXAMPLE:       Button 4 px, card 4 px, modal 4 px, table 0 on the website.
ANTI-EXAMPLE:  A franchise flyer with 12 px soft cards beside a pill button.
TEST:          Does every rounded element resolve to none, xs or sm? No: reject.
EXCEPTION:     Native OS masks (iOS app icon, WhatsApp circle crop) are applied by the platform. Owner approves any new value.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 05.2:     Apply the component map and the nesting formula; never use pills, soft cards or circles for UI.
CLASS:         MUST
REASON:        Exact and Ordered: squared shapes on a grid read as measured; pills and circles read casual.
EXACT SPEC:    Button, input, card, chip, alert, menu, modal, image frame, avatar, sticker on screen: sm 4. Step node, checkbox, radio, track: xs 2. Tables, rules, bands, grids: none 0. Inner radius = max(outer minus gap, 0) when gap is under 4 px.
EXAMPLE:       A photo inset 2 px inside a 4 px card gets a 2 px radius.
ANTI-EXAMPLE:  A pill "Get a quote" button, or a circular avatar and round status dot.
TEST:          Is any UI element a circle, or any radius above 4 px? Yes: reject.
EXCEPTION:     None for UI. Circles allowed only for a literal manhole or gauge dial in an illustration.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 05.3:     Draw controls with a border that passes 3:1, and never remove or clip the focus ring.
CLASS:         MUST
REASON:        Documented and responsible: WCAG 1.4.11 and 2.4.7; customers may use cheap phones in sunlight.
EXACT SPEC:    Control border 1 px Neutral 500 #85847F (3.75:1 on White, 3.41:1 on Stone); error 2 px state.error.border plus icon and label. Focus 2 px solid Primary 700, 2 px offset, ring radius 4, outline not clipped; White ring on primary bands and photos.
EXAMPLE:       Phone number input with a 1 px grey border and a 2 px navy ring on keyboard focus.
ANTI-EXAMPLE:  Input with a 1 px Neutral 300 border (1.65:1) and outline: none.
TEST:          Sample the border against its background: 3:1 or more? Tab to it: is a ring visible and unclipped?
EXCEPTION:     Disabled controls are exempt, never carry live text.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 05.4:     Use no shadows at all; make depth from 1 px rules, ruled cells and solid primary bands.
CLASS:         NEVER (shadow, glass, blur, neumorphism) / MUST (flat devices)
REASON:        Restrained and Honest materials: no effects; contrast must not depend on the background.
EXACT SPEC:    ct.shadow.* tokens removed. Edge = 1 px rule (Neutral 200 or Primary 700). Ruled cells = gap 1px over Primary 700 or Neutral 300. Band = Primary 700 square. Scrim = Primary 900 at 60%, flat. Dark mode: tonal surfaces plus 1 px Primary 600 edge.
EXAMPLE:       Card flat on Stone with a 1 px outline; the menu with a 1 px Primary 700 edge.
ANTI-EXAMPLE:  A soft drop shadow under a card, a frosted-glass header, or an embossed "button".
TEST:          Is there a box-shadow, filter: drop-shadow, blur or translucent surface anywhere? Yes: reject.
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 05.5:     Never use water splashes, droplets, waves, swooshes, starbursts, badges, rays, bevels, gloss, soft cards, pills, drop shadows or large radii as shapes, frames or masks.
CLASS:         NEVER
REASON:        Persona avoid list; Restrained. These shapes shout, soften or imitate and are the category cliche.
EXACT SPEC:    Allowed primitives: rectangle (0, 2, 4 px), straight line, tick, 90 degree miter elbow, gauge arc, literal circle (manhole, gauge dial). Anything else needs approval.
EXAMPLE:       A flat primary rectangle with a 3 px accent Level Line.
ANTI-EXAMPLE:  A photo cropped into a droplet, a starburst reading "Offer", a 16 px rounded shadowed card.
TEST:          Does any outline contain a wavy, pointed, teardrop, pill or large-radius form, or any shadow? Yes: reject.
EXCEPTION:     None. Client logos placed as supplied are not redrawn.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 05.6:     Use accent (coral) as a marker only: thin bars, underlines, index tags; never a button, panel, badge or alert fill.
CLASS:         MUST
REASON:        Documented: accent marks where to look, never an alarm (s03 Rule 03.3); 2.87:1 on White.
EXACT SPEC:    Accent solid shapes: Level Line (3 px), active-step underline (3 px), CERT NO. underline on the sticker, ticks. Max 10% of area. Primary button = Primary 700 fill, White label.
EXAMPLE:       One Level Line under the page heading; a primary navy button.
ANTI-EXAMPLE:  A coral button, or a coral circle badge reading "Only 3 slots left".
TEST:          Is accent a fill larger than a 3 px bar, a button, an alert or panel, or above 10%? Yes: reject.
EXCEPTION:     Technician uniform trim, s16. Owner approves.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 05.7:     Draw the 5-step process as square outlined nodes numbered 01 to 05 in mono, joined by 2 px connectors; show step 05 as dashed.
CLASS:         MUST
REASON:        Exact and Documented: the process is the hero diagram; step 5 is "where applicable".
EXACT SPEC:    Node 40 px (32 px on 360), radius 2, 2 px Primary 700 outline, Plex Mono 600 numeral 12.83:1; active node Primary fill plus 3 px accent underline; connectors 2 px, square caps, sharp elbows; step 05 dashed 2 px 4/4 with "* WHERE APPLICABLE"; always exactly these 5 steps in order.
EXAMPLE:       Website "How we clean" strip with 01 to 05 and full step names below.
ANTI-EXAMPLE:  Six steps, round numbered nodes, or tank-shaped icons with water drops in place of numbers.
TEST:          Five square nodes, mono numbered, labelled in full, step 05 dashed? No: reject.
EXCEPTION:     Print one-colour: Primary or black only.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 05.8:     Make every target 48 x 48 px; never below 44 x 44 px (24 x 24 px is the WCAG floor, not our standard).
CLASS:         MUST (24) / SHOULD (44)
REASON:        Responsible: WCAG 2.5.8 and real thumb use on rooftops and in basements.
EXACT SPEC:    ct.size.hit.min 44, ct.size.hit.target 48, 8 px gaps. Buttons 48 px high at every width.
EXAMPLE:       WhatsApp and Call buttons 48 px high, 8 px apart.
ANTI-EXAMPLE:  A 16 px close icon with no padding.
TEST:          Measure the hit area: 48 px? Anything under 44 px fails.
EXCEPTION:     Inline text links.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 05.9:     Keep physical corners to a small fixed radius (or square) and finishes matte and flat.
CLASS:         SHOULD
REASON:        Exact and Honest materials: print matches screen; no glossy or bevelled edges.
EXACT SPEC:    Sticker and badge about 1.5 mm, folder 2 mm, van panel and signboard square or fixed 4 mm, certificate paper square. Radius does not scale with size. Verify with vendor proof.
EXAMPLE:       Tank sticker with 1.5 mm corners and a matte laminate.
ANTI-EXAMPLE:  A droplet-shaped die-cut sticker with a glossy dome, or a 24 mm rounded signboard.
TEST:          Radius at or under 4 mm and matte? Die-line approved in a proof?
EXCEPTION:     Vendor tooling limits, owner approves.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 05.10:    Use square line caps and miter joins on every rule, connector, diagram, chart line and icon.
CLASS:         MUST
REASON:        Exact: square ends read as measured and survive thin print.
EXACT SPEC:    stroke-linecap: square; stroke-linejoin: miter; miterlimit 4. Strokes 1, 2 or 3 px (icons 1.75 px at 24, s10). No round caps or joins.
EXAMPLE:       Level Line, ticks and connectors with flat square ends.
ANTI-EXAMPLE:  A round-capped icon set, or a pipe connector with a rounded elbow.
TEST:          Zoom to 400%: are all line ends square and corners sharp?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

## 05.15 Do / Don't

| Do | Don't |
|---|---|
| Do use rectangles at 4 px as the default for every component. | Don't use pill buttons, soft cards or any radius above 4 px. |
| Do separate containers with white space, a 1 px rule or a ruled cell. | Don't add drop shadows, glow or glass to anything. |
| Do crop photos as 4 px rectangles or full-bleed. | Don't mask photos into droplets, splashes, hexagons or circles. |
| Do keep accent to a thin line, an underline or an index tag. | Don't fill cards, buttons or badges with coral. |
| Do draw step nodes square, numbered 01 to 05 in mono, step 05 dashed. | Don't use round nodes, six steps or an old HCl step. |
| Do end lines square and join them with miters. | Don't use round caps or rounded pipe elbows. |
| Do give focus a 2 px primary ring with 2 px offset. | Don't remove the outline or clip it. |
| Do keep stickers and van panels matte with small fixed corners. | Don't bevel, emboss, gloss or scale up the radius. |
| Do use circles only for a literal manhole or gauge dial. | Don't use circles for avatars, dots, badges or buttons. |

## 05.16 Accessibility & India notes

- Borders that are the only cue meet 3:1 (1.4.11); focus ring 2 px (2.4.7, 2.4.11); targets 48 px standard, 44 px minimum (WCAG 2.5.8 floor is 24 px). Status shapes are paired with icon and label, never colour alone (1.4.1). Status dots are square and always carry a word.
- Radio is a square with a square dot, so selection must also be exposed through role and state (`role="radio"`, `aria-checked`) and the selected option gets a visible 2 px outline, not shape alone.
- Devanagari and Gurmukhi headlines carry a headline stroke (shirorekha, sirorekha) on top. A decorative rule above such a heading reads as a second headline stroke, so the Level Line sits below or beside, with at least 8 px gap from the lowest matra.
- Do not rely on thin strokes on cheap print or sun-glare screens: 1 px is the floor on screen, 0.5 mm on vinyl and sticker.
- No shape morphing in the brand. If s11 adds any, honour `prefers-reduced-motion`.
- No religious or national symbols as shapes; keep circles and coral away from round-and-orange compositions that could read as a flag or festival mark (s01 culture notes).
- Dense data (tender tables, franchise sheets) uses square cells and 1 px rules so rows stay legible in Indian-script lines.

## 05.17 Tokens in code

```css
:root {
  --ct-radius-none: 0;     --ct-radius-xs: 2px;   --ct-radius-sm: 4px;
  --ct-radius-default: var(--ct-radius-sm);
  /* md, lg, xl, full and all --ct-shadow-* tokens are removed in v2 */
  --ct-border-width-thin: 1px; --ct-border-width-base: 2px; --ct-border-width-bold: 3px;
  --ct-focus-width: 2px;   --ct-focus-offset: 2px;
  --ct-size-hit-min: 44px; --ct-size-hit-target: 48px;
  --ct-size-node-sm: 32px; --ct-size-node-md: 40px;
  --ct-divider-thin: 1px solid var(--ct-color-border-rule);
  --ct-divider-strong: 2px solid var(--ct-color-primary-700);
  --ct-rule-grid-gap: 1px;
}
:focus-visible {
  outline: var(--ct-focus-width) solid var(--ct-color-focus-ring);
  outline-offset: var(--ct-focus-offset);
  border-radius: var(--ct-radius-sm);
}
.ct-on-primary :focus-visible { outline-color: #FFFFFF; }
.ct-ruled-grid { display: grid; gap: var(--ct-rule-grid-gap); background: var(--ct-color-primary-700); }
.ct-ruled-grid > * { background: var(--ct-color-neutral-0); border-radius: var(--ct-radius-none); }
svg.ct-line { stroke-linecap: square; stroke-linejoin: miter; stroke-miterlimit: 4; }
* { box-shadow: none; }
```

Dark mode (`[data-theme="dark"]` and `prefers-color-scheme: dark`): add `border: 1px solid var(--ct-color-primary-600)` to cards; surfaces are tonal (s03). There is no shadow to switch off. s12 owns the token pipeline.

## 05.18 Day one vs later

| Day one | Later |
|---|---|
| Three radii (0, 2, 4), component map, default 4 | Squircles via CSS `corner-shape`: not planned |
| Border thin, base, bold; 3:1 control border; 2 px focus ring | Dark-mode edge fully tested (s12) |
| No shadows; rules, ruled cells, primary bands | Ruled-grid component library in code (s13) |
| Square caps and miter joins; forbidden-shape list | Sticker and certificate die-lines (s14) |
| 5-step square-node process diagram | Level Line scale device adopted after owner decision and fame test |
| Physical small-radius rule | Vendor-tested van, signboard and uniform patch shapes (s15, s16) |

## 05.19 Handoffs

| To | What |
|---|---|
| s02 Logo | Vocabulary, radius family, stroke multiples, square terminals, 12.5% icon ratio (05.2) |
| s03 Color | `border.strong` and `border.rule` tokens, accent marker-only uses (05.7); confirm warm neutral values |
| s06 Motifs | Level Line geometry (05.9), tick scale, sticker field structure, gauge arc |
| s07 Layout | Ruled-grid gap 1 px; padding at least 4 px; spacing in multiples of 4 px; hit targets 05.12 |
| s10 Icons and charts | Square caps and miter joins, 1.75 px stroke on 24 px grid; chart shapes 05.11 |
| s12 Tokens | `ct.radius.{none,xs,sm}`, `ct.border.width.*`, `ct.focus.*`, `ct.size.*`; remove `ct.shadow.*` and `md/lg/xl/full` |
| s13 Digital | Component map 05.3, focus, hit targets |
| s14, s15, s16 | Physical radius table 05.13, matte finish, die-lines, sticker field grid |

## 05.20 Checklist

- [ ] One-sentence shape principle and 3 adjectives published (exact, ordered, restrained)
- [ ] Logo constraints handed to s02; derivation reviewed once the logo exists
- [ ] Radius tokens none 0, xs 2, sm 4 with component mapping in Figma and in code; no md, lg, xl, full left anywhere
- [ ] Nesting rule applied in one tested card with an inset photo
- [ ] Stroke widths thin 1, base 2, bold 3 set as tokens; square caps and miter joins set on all line assets
- [ ] Container, mask and crop rules with Do/Don't present
- [ ] No box-shadow anywhere; depth made from rules, ruled cells and bands; dark mode tonal
- [ ] "No glass, no neumorphism, no soft cards, no pills" stated and enforced
- [ ] Control border 3:1 verified (Neutral 500 on White 3.98:1, on Stone 3.62:1) and focus ring 2 px, 2 px offset, radius 4 checked on every surface, white ring on primary bands
- [ ] Copy-paste tokens match s12
- [ ] Process diagram built with 5 square nodes 01 to 05, step 05 dashed with "* WHERE APPLICABLE"
- [ ] Sticker, van and signboard radius checked with vendor proof
- [ ] Handoff notes to s03, s06, s07, s10 sent
- [ ] A button, input, card, modal and avatar row tested at 1x and 3x, light and dark

## 05.21 Open items & evidence needed

| # | Item | Needed |
|---|---|---|
| 1 | Logo geometry | No logo exists. The 12.5% icon ratio and stroke multiples are provisional until s02 routes are drawn |
| 2 | Level Line | Candidate only: owner decision, then fame test. Align with s06 on name and tick numerals |
| 3 | Physical radii | Sticker (about 1.5 mm), van panel and signboard (square or 4 mm), folder (2 mm) need vendor die-lines and signed proofs (s14 to s16) |
| 4 | Sticker size and band | Size set in s14. v1 coral due-date band is replaced here by a 3 px accent underline; s06, s14 and s16 must be aligned |
| 5 | Print stroke minimums | 0.25 pt paper and 0.5 mm vinyl are starting values: confirm with printer and vinyl supplier |
| 6 | Platform icon safe zones | Android adaptive (66%) and WhatsApp circle crop (80%) are marked verify before use |
| 7 | Neutral and border values | s03 v2 warm neutral scale not yet applied here; Neutral 200, 300, 500 hex and ratios use v1 values and Stone `#F5F4F1`. Re-run contrast once s03 is final. Secondary colour is TBD and has no shape role yet |
| 8 | Square radio | Radio as a square with a square dot follows the "circles only for literal objects" decision; owner to confirm, and test comprehension on low-end Android |
| 9 | Hero header | Fixed or floating header over the full-bleed photo is an owner decision (s13); focus ring on the header uses the white ring |
| 10 | Dark-mode card edge | Primary 600 edge (1.81:1 on Primary 800) is decorative; confirm legibility on low-end screens |
