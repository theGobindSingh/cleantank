# Clean Tank Services: Style Guide
# 09. Illustration, 3D & AI Imagery

> This pillar governs every picture that is drawn, rendered or generated for Clean Tank Services: tank cross-sections, the 5-step process diagram, tank-type and capacity diagrams, the franchise support flow, sticker and certificate graphics, equipment explainers, and any use of AI image tools. s01 sets imagery as documentary photography first and technical diagrams second, with no cartoons and no 3D. Illustration here is one strict style, "Clean Tank Technical Line", built like an engineering drawing: square caps, miter joins, thin rules, mono caps labels on leader lines, dimension lines and reference codes. It explains what a camera cannot show (the inside of a tank, a sequence, a support flow). It also fixes who owns the artwork and where a machine may and may not help, because an invented technician, certificate or lab result would break the brand's central promise: a documented record, not just a clean tank.

Sheet CT-SG-09 | v2.0 | 08 Oct 2026 (Quiet Utility revision) | Tier legend: LOCK = central brand owner approves any change · GUARD = varies inside stated limits · FLEX = judgment within principles

Not covered here: photography (s08), icons and information design such as charts (s10), motion (s11), tokens and themes (s12), stickers and certificate layout (s14), print production (s15). Contrast ratios are WCAG 2.2 relative-luminance values computed with Python, shown to two decimals. Colour roles follow s03: Primary (navy), Secondary (TBD, not used here), Accent (coral, marker only), Neutral (white to graphite, slightly warm), State (not used in illustration).

## 09.1 Principles and inheritance

Big idea: **Quiet precision. One standard, every tank.** Drawn art is the clearest place to show it.

| v2 principle | Visual behaviour in drawn art | Spec |
|---|---|---|
| Exact | Right angles, uniform stroke, snapped grid, real parts | Angles 0 and 90 degrees (45 for hatching and leader bends only); no freehand line |
| Ordered | Numbered parts and steps, aligned leader labels, one idea per picture | Every part has a number tag or label; labels sit in one column |
| Restrained | No effects, no mascot, few colours, wide white space | No gloss, shadow, gradient, texture; Accent marks one thing |
| Documented | Each master carries a mono reference code and a title block | `REF CT-ILL-<ID>-<NN>`; "ILLUSTRATIVE, NOT TO SCALE" where true |
| Honest materials | Concrete, steel and water drawn as they are | Water is a pale tint and one level line; sludge is hatching; no invented equipment |

**Style name:** **Clean Tank Technical Line** (short: CT Technical Line). Line plus flat fill, flat orthographic views, engineering-drawing annotation.
**Three adjectives:** exact, ordered, documented.
**Never:** cartoonish, frightening, glossy, decorative.
Sliders (s01): Soft/Sharp 4, Organic/Geometric 5, Quiet/Loud 1, Still/Lively 1.

## 09.2 Style selection (why this one, why not the others)

| Style | Feels | Cost to scale | Decision | Reason |
|---|---|---|---|---|
| Line plus flat fill (CT Technical Line) | Exact, documented | Low | **Chosen** | Matches the gauge, the spec sheet and the test report. Anyone following 09.3 can draw a new diagram. |
| Soft rounded line (round caps, large radius) | Friendly, app-like | Low | Rejected | Contradicts Sharp 4 and the 4 px radius ceiling; reads as consumer software. |
| Flat colour shapes | Bold, promotional | Low | Rejected | Needs more colour than the 60/30/10 proportion allows. |
| Isometric | Technical, systemic | Medium | Rejected at launch | Implies 3D rendering and drifts toward toy-like tanks. Revisit only for a site-plan diagram with owner approval. |
| Editorial / hand-drawn | Expressive, irregular | High per piece | Rejected | Cannot be repeated exactly by franchise partners at asset 50. |
| Textured / grain / halftone / scanlines | Raw, noisy | Medium | Rejected | s01 rejects brutalist noise; Quiet 1 of 5. |
| 3D | Premium, tactile | High | Rejected at launch | See 09.9. |

## 09.3 Construction rules

**Views.** Flat orthographic only: front elevation, side elevation, vertical cutaway section, plan (top view). No perspective, no isometric, no vanishing points, no shadows. Angles are 0 and 90 degrees, plus 45 degrees for hatching, connectors and leader bends only.

**Stroke.** Three classes. Primary draws outlines and tank walls. Secondary draws internal parts, dimension lines, leader lines and connectors. Hairline draws extension lines, ticks and hatching. v2 rules are slightly thinner than v1.

| Artboard tier | Primary | Secondary | Hairline | Max corner radius |
|---|---|---|---|---|
| Spot 160 x 160 px | 1.5 px | 1 px | 0.75 px | 0 (2 px xs only per rule below) |
| Scene 720 x 480 px | 2 px | 1.25 px | 0.75 px | 2 px |
| Hero 1440 x 720 px | 3 px | 1.5 px | 1 px | 2 px |
| Print vector (A4 and inset graphics) | 1.25 pt | 0.75 pt | 0.35 pt | 0.5 mm |
| Sticker graphic | 1 pt minimum (verify with printer) | 0.5 pt | 0.35 pt | 0 |

Stroke scaling: the rendered primary stroke must land between 1.25 and 3 px. If placing a master at another size would leave that range, use the master of the next tier. Do not scale lines by eye. All strokes are real strokes (no outlined shapes pretending to be lines).

**Caps, joins, corners.** Square caps and miter joins on every stroke (miter limit 4). No round caps, no round joins. Corners are square (radius 0). The only exception: the outer corners of a tank body may take radius 2 px (xs) at Scene and Hero where the real tank is visibly moulded; never more, never on parts, labels, nodes or frames. Circles appear only for literal round objects: a manhole cover, a gauge dial, a pipe section, a UV lamp tube. Number tags, step nodes and badges are squares (node radius 2 at most).

**Arrowheads and ticks.** Flow arrowheads on connectors are solid triangles (closed path, miter join), length 4 x primary, width 3 x primary. Dimension lines end in 45 degree ticks, 6 px long at Scene, in the secondary stroke.

**Annotation system (engineering drawing feel).**

| Element | Spec |
|---|---|
| Leader line | Secondary stroke, Neutral 600. One horizontal run, one bend at 45 or 90 degrees at most, ends on the part in a 4 px filled square terminal. Never crosses another leader or a label. Length at least 16 px |
| Label | IBM Plex Mono 500, UPPERCASE, tracking +0.08em, 11 px minimum (Scene), 12 px (Hero). Primary 700 text. Labels sit in one aligned column, left or right of the drawing, baseline on the leader's horizontal run |
| Number tag | Square box 20 px (Scene) or 24 px (Hero), 1 px Primary 700 outline, radius 0, mono 600 numeral "01" to "08". Used instead of a text label at Spot and on narrow layouts, with the legend as an HTML list |
| Dimension line | Secondary stroke, Neutral 600, 45 degree ticks, extension lines in hairline with 2 px gap from the object and 2 px overshoot. Marks a named relationship (for example SLUDGE LAYER, WATER LEVEL), not a number |
| Dimension values | No numeric dimension is drawn unless it comes from INFO-BANK or is signed off by the operations reviewer (open item 5). Capacities are volumes and appear only as in 09.5 |
| Reference code | `REF CT-ILL-<ID>-<NN>` in mono caps 11 px, Neutral 600, bottom-right of the frame. Example `REF CT-ILL-D2-01`. `NN` equals the master version in the file name (09.11) |
| Title block (Scene, Hero) | Ruled cells under the drawing, 1 px `ct.color.border.rule`, 28 px (Scene) or 32 px (Hero) tall: FIG number (follows the page section, for example `FIG 03.2`), title in Anek condensed caps, reference code, note cell ("ILLUSTRATIVE, NOT TO SCALE" or "VIEW: CUTAWAY SECTION"). On web it may be an HTML caption in the same style. Spot has no title block |
| Frame | 1 px `ct.color.border.rule`, radius 0 (2 px at most for an image frame inside a UI card, per s05) |

**Fill rules.** Tank walls and equipment are outlined, filled white (Neutral 0). Water is filled Primary 100. Sludge is Primary 700 hatching at 45 degrees (hairline, 6 px spacing at Spot, 8 px at Scene, 10 px at Hero), never a brown or dirty colour. Uniforms are Primary 700 solid. No gradients, no shadows, no glow, no transparency, no blur.

**Grid and margins.** 8 px base grid (verify against s07); every anchor point snaps to 4 px at Spot and 8 px at Scene and Hero. Safe margin: 16 px Spot, 40 px Scene, 80 px Hero. Hero art follows the 12-column grid of s07.

**Detail ceiling.** Max shapes per piece: Spot 16, Scene 60, Hero 120 (in a 5-step strip, 20 per step). Max 8 labels or number tags per scene. Gap between parallel lines at least 2 x primary stroke. Smallest closed shape 6 px at its smallest rendered size (print: 1.5 mm). One idea per picture.

**Texture.** None. No paper grain, no halftone, no noise, no blueprint-paper grid or cyan blueprint ground.

**Space.** White ground at least 60% of the artboard area (Japandi space: empty on purpose). Accent at most 5% of the artboard (stricter than the 10% brand cap, because there is one marker).

**Water.** Clear and still: a single horizontal level line, no wave, no ripple, no droplet, no splash. The level line is the Accent marker in D2.

## 09.4 Palette for illustration

Maximum **3 colour roles per piece**: Primary, Neutral, Accent (marker). Values: Primary 700, Primary 100, Neutral 0, Neutral 600, one Accent. Hatching and dashes are patterns, not extra colours. Secondary (TBD) is not used in illustration; if the owner assigns it, this pillar is revised before it enters any drawing.

| Role | Token | HEX | Use |
|---|---|---|---|
| Primary: line, text, uniform | `ct.color.primary.700` | `#20334B` | Outlines, labels, number tags, hatching, uniforms |
| Primary: tint (water) | `ct.color.primary.100` | `#DFE7F1` | Water body only. Decorative: never the only carrier of a fact |
| Neutral: ground, knock-out | `ct.color.neutral.0` | `#FFFFFF` | Page ground, wall fill |
| Neutral: annotation | `ct.color.neutral.600` | `#65655F` | Leader lines, dimension lines, reference codes |
| Neutral: panel ground (optional) | `ct.color.neutral.50` | `#F5F4F1` | Ground when the page section is stone; walls stay white |
| Accent: marker (max one per picture) | `ct.color.accent.500` | `#EE7555` | Fill behind one number tag or step: the active step, one franchise stage |
| Accent: marker line on white | `ct.color.accent.600` | `#C54826` | The Level Line (water level), the underline under the active item |

Accent 500 and 600 count as one family. Primary 200 `#BFCFE3` is not allowed inside diagrams (hatching instead). Neutral 900 `#25282A` is the numeral colour on an Accent 500 fill.

| Pair in art | Ratio | Result |
|---|---|---|
| Primary 700 line on White | 12.83:1 | PASS 3:1 graphics, PASS 4.5 text |
| Primary 700 on Neutral 50 | 11.67:1 | PASS |
| Primary 700 on Primary 100 (label over water) | 10.29:1 | PASS |
| Neutral 600 annotation on White | 5.87:1 | PASS 4.5 |
| Neutral 600 annotation on Neutral 50 | 5.33:1 | PASS 4.5 |
| Neutral 600 on Primary 100 | 4.70:1 | PASS 4.5 |
| Neutral 900 numeral on Accent 500 | 5.16:1 | PASS |
| Accent 600 line on White | 4.85:1 | PASS 3:1 |
| Accent 600 line on Primary 100 (Level Line over water) | 3.89:1 | PASS 3:1 graphics |
| Accent 600 on Neutral 50 | 4.41:1 | PASS 3:1 graphics, no text |
| Accent 500 on White | 2.87:1 | FAIL 3:1: never alone, always outlined in Primary 700 and labelled |
| Accent 500 on Primary 900 (dark variant) | 6.21:1 | PASS |
| Accent 500 on Primary 700 | 4.47:1 | PASS 3:1 graphics |
| Primary 50 `#F1F4F9` line on Primary 900 `#0F1824` (dark variant) | 16.19:1 | PASS |

**Forbidden in illustration:** the retired colours (bright blue, yellow, red, green water), any gradient, cartoon skin tones, State colours as decoration, Accent for warnings or urgency. Technician figures carry no skin-tone fill (09.7).

**Dark variants** (screen only): ground Primary 900 `#0F1824`, line Primary 50 `#F1F4F9`, annotation Primary 50 at the secondary stroke, water Primary 700 `#20334B` (decorative), marker Accent 500, numeral on Accent 500 Neutral 900. Every Scene and Hero ships a dark variant, used on Primary 900 grounds. A light master is never placed directly on a Primary band: put it in a white panel with a 1 px frame, or use the dark variant. Spot gets a dark variant when used in dark UI.

## 09.5 Diagram catalogue (the asset set)

Illustration is used where a photo cannot show the thing. Each starter asset is drawn once as a master and reused.

| ID | Asset | Tier | What it shows | Accent marker |
|---|---|---|---|---|
| D1 | 5-step process diagram (horizontal, vertical) | Hero, narrow | The five steps in order, numbered 01 to 05 | Active step underline (step pages only) |
| D2 | Tank cross-section | Scene | Inlet, outlet, overflow, access hatch, water level, sludge layer, in cutaway, numbered 01 to 06 | Water level (Level Line) |
| D3 | Tank types: domestic, commercial overhead, commercial underground | Scene | Three physical forms side by side with capacity labels | None, or the one type being discussed |
| D4 | How-it-works: steps in the cutaway | Scene | Steps 1 to 5 as small cutaways, one per step | Active step |
| D5 | Cleaning Date Sticker graphic | Spot / sticker | Two date fields and a small tank mark (layout in s14) | 3 px accent underline by the due date |
| D6 | Certificate inset | Spot | Small process strip or tank cutaway on the Cleaning Certificate | None |
| D7 | Franchise support flow | Hero, narrow | Seven stages in order (09.6) | One stage when presenting that stage |
| D8 | AMC cycle | Scene | Scheduled cleaning, reminder, service history as a loop of three | None |
| D9 | Equipment explainers: pump, pressure jet, industrial vacuum, antibacterial applicator, UV unit | Spot | One object each, no model, no specifications drawn | None |
| D10 | Technician at work | Scene | Faceless figure in uniform with gauge or checklist | None |

**Day-one set: D1, D2, D3, D5, D7 and D8.** D4, D6, D9, D10 follow.

### D1: the five steps

| Step | Label (exact) | Object drawn |
|---|---|---|
| 01 | Dewatering | Pump and hose drawing water from the tank |
| 02 | High-pressure cleaning | Jet lance toward the wall, no spray cloud |
| 03 | Sludge & water removal | Vacuum hose at the tank floor |
| 04 | Disinfection (antibacterial) | Applicator, no microbes drawn |
| 05 | UV treatment (where applicable) | UV unit, drawn with a **dashed outline** and the note "* WHERE APPLICABLE" |

Always these 5 steps, never the old 6-step version. Step nodes match the process component (s13): square, radius 2, outlined Primary 700, mono numeral "01" to "05"; node 28 px at Scene. The active step is filled Primary 700 with a white numeral and a 3 px Accent 600 underline, plus the page text "STEP 2 OF 5". Default view highlights nothing. A pressure figure ("up to 250 bar, subject to site and equipment") appears only if a text label carries that whole qualifier. The disinfection step makes no claim about the agent (non-toxic, eco-friendly, 3-month effect need evidence).

### D3: capacities

| Type | Capacity label (INFO-BANK) | Drawing |
|---|---|---|
| Domestic | up to 20,000 L | Rooftop overhead tank, elevation |
| Commercial overhead | up to 20,00,000 L | Large overhead tank, elevation |
| Commercial underground | up to 1 crore L | Underground tank, cutaway with hatch |

Institutional and large-capacity tanks are categories, not new shapes: they reuse these forms. Never draw the three to scale: the capacities differ by a factor of 500, so a true scale would erase the domestic tank. Every capacity diagram carries "ILLUSTRATIVE, NOT TO SCALE" in the title block note cell. Numerals use Indian grouping, a non-breaking space before the unit, tabular figures.

## 09.6 Franchise support flow (D7)

Seven stages, numbered, in this order: **01 Training · 02 On-Site Service Training · 03 Marketing Support · 04 Lead Generation · 05 Sales Assistance · 06 Operational Guidance · 07 Business Growth Support.**

| Property | Spec |
|---|---|
| Layout | One row of 7 at Hero (1440 px, node 160 x 96 px, gap 40 px); two rows of 4 and 3 at 720 px; vertical column at 328 px |
| Node | Rectangle, white fill, Primary 700 primary stroke, radius 0 (2 at most), square number tag 28 px top-left, mono label below the number |
| Connector | Secondary stroke, arrowhead per 09.3, flows left to right, then down. Straight lines only |
| Highlight | One stage with an Accent 500 number-tag fill (Neutral 900 numeral) when a page discusses that stage. None by default |
| Never in the art | Rising bars, upward arrows, coins, money stacks, handshakes, trophies, numbers. Figures from INFO-BANK section 8 appear in text with the full financial disclaimer beside them, never baked into a diagram |
| Lockup | "Authorised Service Provider" lockup stays in s02 and s14, not in the diagram |

## 09.7 People in illustration

| Property | Spec |
|---|---|
| Where | D10 and Scene-tier diagrams only, at most one or two figures per picture. Spot never carries a person except D10 variants |
| Construction | Faceless, like an architectural scale figure: a plain rectangular head outline (radius 0), no eyes, nose or mouth, so no expression or skin tone is drawn. Gender-neutral build. Square caps, miter joins |
| Proportion | Head to body 1:7, simple torso and limbs, primary stroke |
| Technician | Primary 700 solid uniform, white name-badge rectangle, safety shoes, torch or checklist. Never a hard-hat cliche unless the site calls for it |
| Customer or visitor | White fill, Primary 700 outline, one clothing line |
| Head coverings | Outline-only parts library (cap, turban, dupatta, hijab, plain head) used when the scene calls for it, chosen from real references, never as a regional costume |
| Pose set (launch) | Carrying equipment, reading a gauge, holding a hose, handing over a certificate, pointing at the sticker, kneeling at the hatch (6). People are shown working, not posing |
| Reference rule | Poses and clothing are drawn from real photographs of Clean Tank technicians (with written consent) from the s08 shoot, not from the illustrator's own face or stock |
| Never | Exaggerated features, caricature, a figure inside a tank (no entry procedure is documented in the brand files), a figure in distress, children near tanks as props |

Franchise partners are one brand, so figures do not change per district.

## 09.8 Never list

| Banned | Why |
|---|---|
| Cartoon bacteria, germ monsters, microbes of any kind | Frightens; persona avoid list |
| Splashes, crowns, droplet decoration, waves | Persona avoid list; Organic/Geometric 5 |
| Mascots, smiling droplets, animated characters | s01; no budget or use for one |
| Glossy or 3D tanks, bevels, highlights, reflections | s01 forbids 3D renders and gloss |
| Rounded corners above 2 px, pills, round caps, soft or hand-drawn lines | Exact; Sharp 4 |
| Blueprint clichés: cyan blueprint ground, drafting grid texture, ASCII or scanline effects | s01 rejects gimmicks; no texture |
| Fear visuals: filthy tanks as shock, skulls, warning triangles, red marks | Explain, never frighten |
| Sun rays, bokeh, glow | Persona avoid list |
| Seals, rosettes, medals or badges that resemble certification marks | ISO wording is text only; no invented approvals |
| Invented dimensions, tolerances, ratings or model numbers in dimension lines or labels | Never invent technical specs |
| Gold coins, money, graphs trending up on franchise art | s01 forbidden |
| Real client logos or names drawn into diagrams | Needs permission |

## 09.9 3D policy

**Not used at launch.** Reason: s01 sets "no 3D renders", the persona avoids glossy effects, and a 3D set costs more than it explains. Decision for "later":

| Property | Spec if ever approved |
|---|---|
| Allowed for | Equipment explainers only (pump, jet, vacuum, UV unit) where a flat drawing fails. Honest materials: steel and plastic shown matte |
| Never for | Tanks, people, water, bacteria, mascots, hero images |
| Render | Flat-shaded, three tones only: Primary 700, Primary 200 `#BFCFE3` (3D only), Neutral 0, plus one Accent 500 marker |
| Light and camera | Orthographic camera, no depth of field, one fixed top-front light, no cast shadow of any kind (v2: no shadows) |
| Edges | Hard edges, no bevel, no rounded edge above 2 px equivalent |
| Output | SVG-style flat PNG at @1x and @2x on white, plus a dark variant, same file naming as 09.11, same title block and reference code as 09.3 |
| Gate | Owner approval, a written reason, and the equipment must be real and shown with an operator in the page |

## 09.10 Sizes, ratios and surfaces

| Tier | Artboard | Ratio | Surface |
|---|---|---|---|
| Spot | 160 x 160 px | 1:1 | Empty or error state, one concept, equipment explainer, certificate inset |
| Scene | 720 x 480 px | 3:2 | How-it-works section, WhatsApp card, email header, tank-type panel |
| Hero / process | 1440 x 720 px | 2:1 | Website 5-step band, franchise brochure spread, tender document figure |
| Narrow process | 328 x 600 px (five rows of 120 px) | tall | 360 px phones (16 px side gutters, verify against s07) |
| Social square | 1080 x 1080 px | 1:1 | Instagram post (verify before use) |
| Social portrait | 1080 x 1350 px | 4:5 | Instagram post (verify before use) |
| Print | A4 landscape 297 x 210 mm, 12 mm margin | n/a | Brochure, tender figure |
| Certificate inset | 80 x 50 mm | 8:5 | Cleaning Certificate (layout in s14) |
| Sticker graphic | Per s14 (open) | n/a | Cleaning Date Sticker |

No ambient or pattern tier exists: backgrounds stay white or stone (s01, s03). Drawings sit on white or light stone panels, or use the dark variant on Primary 900.

**Illustration, photo or icon**

| Question | Use |
|---|---|
| Does the picture have to prove a real job, person, site, certificate or sticker? | **Photo** (s08) |
| Does it show the inside of a tank, a sequence, a flow, or a capacity comparison? | **Illustration** (this pillar) |
| Is it a single concept at 48 px or smaller (button, nav, list)? | **Icon** (s10) |
| Is it 49 to 119 px? | Not used: step up to Spot (120 px render minimum) or down to icon |
| Does a customer story need a before and after? | Neither: show the process diagram and the dated record instead |

## 09.11 Files, formats and naming

| Item | Spec |
|---|---|
| Master | Layered SVG (live text kept in a text layer) plus Figma source. Location: `/brand/illustration/` (to be created) |
| Web | Optimised SVG with live text. Labels and the legend are duplicated in HTML next to the art so they can resize and translate |
| Raster | PNG at @1x and @2x for WhatsApp and social, exported from the master; @3x on request. WebP lossless allowed on the website |
| Print | Vector PDF, fonts outlined, colour handled per s15 |
| Variants | `light`, `dark`; language `en`, `hi`, `pa` (a separate master per language, same drawing) |
| Naming | `ct-ill-<type>-<subject>-<lang>-<tier>-<variant>-v<NN>.<ext>` |
| Example | `ct-ill-process-5step-en-hero-light-v01.svg` (reference code `REF CT-ILL-D1-01`) |
| Types | `process`, `section`, `tanktype`, `explainer`, `sticker`, `cert`, `franchise`, `amc`, `equip`, `people` |
| AI drafts | Suffix `_aidraft`; never leaves the internal folder |
| Version | One current version; older versions moved to `/archive/` |

**Type in drawings.** Labels, number tags, reference codes and title block data: IBM Plex Mono 500 (numerals 600), UPPERCASE, tracking +0.08em, 11 px minimum Latin at Scene, 12 px at Hero; print 7 pt. Title block heading: Anek Latin condensed (wdth 78) 700 caps. Plex Mono has no Indic glyphs, so `hi` and `pa` labels use Anek Devanagari or Gurmukhi 500, no case change, 14 px minimum (print 8 pt), line height 1.65 and 1.60; numerals and reference codes stay in Plex Mono. Reserve 40% extra label width for Hindi and Punjabi (verify by test). Label text is Primary 700 or Neutral 600, never Accent.

## 09.12 AI imagery policy

Owner and approver: central brand owner (Gobind Galaxy). Review date: January 2027, then every six months, because tool terms and law move. This policy follows Phase 11: AI tools and agencies must not invent certifications, approvals, lab results, health claims, specs, client credentials or performance claims.

**Allowed (internal, and always labelled)**

| Use | Condition |
|---|---|
| Moodboards and concept exploration | Internal only. File suffix `_aidraft` |
| Diagram drafts (composition, step order) | A designer **redraws** from scratch in vector to 09.3. Auto-tracing the output is not redrawing. Layered file kept as proof |
| Text and layout ideas for a diagram | The facts come from INFO-BANK, not from the tool |

**Forbidden, no exception**

| Use | Why |
|---|---|
| Fake technicians, jobs, sites, customers or franchise partners presented as real | Real work over stock; a documented record is the promise |
| Fake or edited certificates, seals, stickers, stamps, ISO marks, reference codes or lab results | Never invent certifications or results |
| Equipment specs, ratings, dimensions, model drawings or "technical" diagrams not checked against real equipment | Never invent technical specs |
| Client sites, client logos, client names | Needs written permission |
| Before and after images, dirty-tank visuals, microbe images | Fear imagery banned; evidence claims |
| Real-person likeness, or "in the style of" a living artist | Rights and ethics |
| Generative fill, extension or face changes on documentary photographs | Photos must be real. Dust removal and standard colour correction are fine |
| Text inside generated images (labels, codes, numbers) | Generators invent text; real labels and codes are set by the designer in the master |
| Uploading customer details, client site photos or personal data to a public AI tool | Privacy |

**Tools.** None approved at launch. Adobe Firefly is a candidate: Adobe states its models are trained on licensed Adobe Stock and public-domain content and that outputs carry Content Credentials (vendor statement, October 2026). Its IP indemnity is reported to need an enterprise entitlement and have exclusions. Do not name it approved until the terms for the plan are read (open item 3).

**Ownership.** Purely AI-generated material may not be protectable (US Copyright Office, Part 2 report; Thaler v. Perlmutter, certiorari denied 2 March 2026). Treat unedited AI output as not exclusive to us. Final published artwork must be human-authored, with the designer's layered source.

**Disclosure.** Published artwork contains no AI-generated pixels at launch, so no label is printed. If a future approved exception publishes AI-generated or AI-edited imagery, the caption reads: "Image created with AI assistance and reviewed by Clean Tank Services." Where a platform offers an AI label, use it. Rules in the EU (Art 50 applies from 2 August 2026) may apply to material shown there. Take legal advice before targeting that market.

**Licence and rights check (per tool, per asset), recorded in `/brand/illustration/ai-log` (to be created):** tool and version, plan, terms version and date, commercial-use right, full prompt, seed, date, person who ran it, reference images and their licence, output file names, designer who redrew it, approver and date.

**Review step (all five must be yes before anything leaves the team):**

| # | Check |
|---|---|
| 1 | Palette: only the three roles of 09.4 (Primary, Neutral, one Accent marker), nothing else |
| 2 | Style: matches 09.3 (stroke, square caps, miter joins, radius, views, no effects), redrawn by a designer |
| 3 | Facts: every number, label, reference code and step matches INFO-BANK; no invented spec or dimension, no claim needing evidence |
| 4 | Safety of meaning: no fear device, no people shown inside a tank, no look-alike seal |
| 5 | Rights: log complete, no living-artist style, no real person or client |

**Old prompts.** The prompts in INFO-BANK section 9 and the v1 template of this pillar (round caps, coral circles, Navy 100 only palette) use retired colours, glossy styles or rounded construction. They are obsolete and must not be used, by staff, franchise partners or agencies.

### Locked prompt template

```
CT AI DRAFT PROMPT v2  (internal draft only; designer redraws)
Subject: [one concept, e.g. five numbered steps in a row]
Style: flat orthographic engineering line drawing, uniform thin stroke,
  SQUARE line caps, MITER (sharp) corner joins, all corners sharp 90 degrees,
  no rounded corners, front view / cutaway section, no perspective, strict grid.
Annotation: thin leader lines with small square end points, dimension lines
  with 45 degree tick marks, empty rectangular label boxes in one aligned
  column, empty square number boxes, empty reference-code box bottom right.
Palette: ground pure white #FFFFFF; line navy #20334B; annotation lines grey
  #65655F; water tint #DFE7F1; one marker coral #EE7555 on [one item]; nothing else.
Composition: [layout], at least 60% empty white space, shapes snapped to a grid,
  wide margins, one idea only.
Text: none. Leave every label box, number box and reference box blank.
People (if any): faceless, gender-neutral, plain rectangular head outline,
  simple outline figure in solid navy uniform.
Negative: rounded corners, round caps, round joins, soft edges, curves where
  not needed, pill shapes, circles badges, hand-drawn, sketch, wobbly line,
  gradient, shadow, gloss, 3D, isometric, perspective, bevel, reflection, glow,
  bokeh, rays, splash, droplets, waves, bacteria, germs, microbes, cartoon,
  mascot, face, text, letters, numbers, logo, seal, badge, stamp, red, yellow,
  bright blue, cyan blueprint background, green, pastel, texture, grain,
  halftone, scanlines, noise, photo, coins, money.
Record: tool, plan, date, seed, prompt, approver in the AI log.
```

### Filled example: process diagram draft (D1)

```
Subject: five numbered steps in a row showing water tank cleaning stages:
  (1) pump and hose removing water from a tank, (2) jet lance toward a tank wall,
  (3) vacuum hose at the tank floor, (4) hand applicator, (5) a UV unit drawn
  with a dashed outline.
Style: flat orthographic engineering line drawing, uniform thin stroke,
  SQUARE line caps, MITER (sharp) corner joins, all corners sharp 90 degrees,
  no rounded corners, front view / cutaway section, no perspective, strict grid.
Annotation: thin leader lines with small square end points, empty rectangular
  label boxes in one aligned column, empty square number boxes.
Palette: ground pure white #FFFFFF; line navy #20334B; annotation lines grey
  #65655F; water tint #DFE7F1; one marker coral #EE7555 on the number box of
  step 2; nothing else.
Composition: five equal panels left to right, 2:1 canvas, at least 60% empty
  white space, thin straight connector arrows between panels.
Text: none. Leave every label box, number box and reference box blank.
People: none.
Negative: [as in the template]
```

The designer then builds the real D1 in 09.5 and adds the exact labels, "* WHERE APPLICABLE", the step numbers and the reference code in Plex Mono.

## 09.13 Commissioning and rights

| Item | Spec |
|---|---|
| Brief fields | Asset ID, tier, subject and facts from INFO-BANK, view, label text per language, accent marker item, reference photos, deadline |
| Rights | Written assignment signed by the illustrator before work starts: all rights, **worldwide, in perpetuity**. India's Copyright Act s.19 treats an assignment with no stated period as 5 years and with no stated territory as India only, so state both. Counsel confirms the wording (open item 4) |
| Deliverables | Layered SVG masters, Figma source, PDF, light and dark PNG, `en`, `hi`, `pa` text layers, reference code and title block filled |
| Revisions | 3 rounds in the quote (budget open) |
| Credit | None on the public asset; author recorded in the asset log |
| Technical review | Each diagram checked by a named Clean Tank operations reviewer (open item 5) before release |
| Who makes the next one | The same designer or a second one briefed with this pillar and the master files. Franchise partners do not draw: they change only the text layer in a master, with central approval |

## 09.14 Rules

```
RULE 09.1:     Draw every illustration in Clean Tank Technical Line.
CLASS:         MUST
REASON:        Exact and Ordered: one style, any designer can repeat it.
EXACT SPEC:    Flat orthographic views; primary stroke 1.5 / 2 / 3 px at Spot / Scene / Hero; square caps, miter joins; corners radius 0 (2 px max on moulded tank body corners); no gradient, shadow or texture; 3 colour roles max.
EXAMPLE:       Tank cross-section: Primary outline on white, Primary 100 water, one Accent 600 Level Line, mono caps labels on leader lines.
ANTI-EXAMPLE:  A soft rounded-line tank with a blue gradient and a smiling droplet.
TEST:          Open the SVG: stroke classes match 09.3, every stroke-linecap is square and stroke-linejoin is miter, no gradient or filter nodes, no rx above 2?
EXCEPTION:     None. Owner approves any new style.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 09.2:     Use at most one Accent marker per illustration, and never let it carry the meaning alone.
CLASS:         MUST
REASON:        Restrained; Accent 500 on White is 2.87:1 and fails 3:1.
EXACT SPEC:    Accent 500 `#EE7555` fill only behind a Neutral 900 numeral (5.16:1) with a Primary 700 outline; lines on white use Accent 600 `#C54826` (4.85:1); accent at most 5% of the artboard; the marked item also has a label. Never a warning or urgency signal.
EXAMPLE:       Step 02 underlined in Accent 600 with "STEP 2 OF 5" in the page.
ANTI-EXAMPLE:  Three coral steps and a coral arrow with no labels.
TEST:          Count accent items: one? Convert to greyscale: is the marked item still identifiable?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 09.3:     Show the 5 steps in order, numbered, with the exact step names.
CLASS:         MUST
REASON:        Documented and Ordered: one process, same in every district.
EXACT SPEC:    01 Dewatering · 02 High-pressure cleaning · 03 Sludge & water removal · 04 Disinfection (antibacterial) · 05 UV treatment (where applicable, dashed outline, "* WHERE APPLICABLE").
EXAMPLE:       Website band with five square numbered nodes 01 to 05.
ANTI-EXAMPLE:  A 6-step diagram, or UV drawn as a mandatory step.
TEST:          Five steps, these names, UV marked "where applicable"?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 09.4:     Never draw bacteria, filth, splashes, mascots, glossy or 3D tanks, or fear visuals.
CLASS:         NEVER
REASON:        Restrained and Honest materials: explain, never frighten.
EXACT SPEC:    Banned list 09.8. Sludge is shown as Primary hatching, water as a still tint with one level line.
EXAMPLE:       Cutaway with a hatched sludge layer labelled "SLUDGE LAYER".
ANTI-EXAMPLE:  A green cartoon germ pointing at a dirty tank.
TEST:          Does any item from 09.8 appear?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 09.5:     Mark capacity art "ILLUSTRATIVE, NOT TO SCALE" and use only INFO-BANK capacities.
CLASS:         MUST
REASON:        Honest and Documented: 20,000 L to 1 crore L cannot be drawn to scale.
EXACT SPEC:    Domestic up to 20,000 L; commercial overhead up to 20,00,000 L; commercial underground up to 1 crore L; Indian grouping, non-breaking space before the unit, tabular figures; note in the title block.
EXAMPLE:       Three tank forms side by side, same height, labelled with their capacities.
ANTI-EXAMPLE:  Bars sized by volume, or a made-up "50,000 L" tank.
TEST:          Is the note present and are all numbers in INFO-BANK?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 09.6:     Keep people faceless, gender-neutral and drawn from real references.
CLASS:         MUST
REASON:        People shown working; respect and no stereotype.
EXACT SPEC:    Rectangular head outline with no features, head to body 1:7, Primary 700 uniform with white name badge, 6 launch poses, no figure inside a tank.
EXAMPLE:       A technician figure reading a gauge beside a rooftop tank.
ANTI-EXAMPLE:  A cartoon plumber with a moustache and big smile.
TEST:          Any facial features, caricature or figure inside a tank?
EXCEPTION:     None.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 09.7:     Use no 3D at launch; if added later, equipment explainers only, flat-shaded.
CLASS:         NEVER
REASON:        s01: no 3D renders; no gloss, no shadows.
EXACT SPEC:    09.9 gate: owner approval, three tones plus one Accent marker, orthographic, no gloss, no cast shadow.
EXAMPLE:       Flat pump drawing in Technical Line.
ANTI-EXAMPLE:  A rendered 3D tank with reflections in a hero.
TEST:          Any render or perspective in a published asset?
EXCEPTION:     Owner-approved equipment explainers under 09.9.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 09.8:     Never publish AI-generated imagery as real work or as evidence.
CLASS:         NEVER
REASON:        Honest and Documented: Phase 11 and the "never invent" rule.
EXACT SPEC:    Forbidden list 09.12: fake technicians, sites, customers, certificates, seals, reference codes, specs, dimensions, client sites, before and after, microbe images, generative fill on photographs.
EXAMPLE:       A real photograph of a real technician, taken at a site with consent.
ANTI-EXAMPLE:  An AI "technician" on a rooftop captioned "our team".
TEST:          Is any published image or caption claiming a real thing that was generated?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 09.9:     Use AI only for internal drafts, label them, log them, and have a designer redraw before publishing.
CLASS:         MUST
REASON:        Ownership and accuracy: unedited AI output may not be protectable.
EXACT SPEC:    Suffix `_aidraft`; locked prompt template v2; AI log fields in 09.12; five-point review signed by the central brand owner.
EXAMPLE:       Draft process strip from the filled prompt, then redrawn in vector with exact labels.
ANTI-EXAMPLE:  An AI image pasted into a flyer, with no log.
TEST:          Is there a log row, a layered redraw and a signed review?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 09.10:    Annotate every informative drawing in the engineering-drawing system, and give it a text alternative.
CLASS:         MUST
REASON:        Ordered and Documented; WCAG 1.1.1 and 1.4.11; translatable, resizable labels.
EXACT SPEC:    Leader lines (secondary stroke, Neutral 600, square terminal), mono caps labels 11 px min in one column, max 8 labels or tags, reference code `REF CT-ILL-<ID>-<NN>`, title block on Scene and Hero, live SVG text, labels duplicated in an HTML list, alt text per 09.15, graphics 3:1 or better, meaning never by colour alone. No numeric dimensions unless sourced.
EXAMPLE:       D2 with six numbered leader labels, a title block "FIG 03.2 / REF CT-ILL-D2-01", alt text and an ordered list below.
ANTI-EXAMPLE:  A JPG with text baked in, curved callout bubbles and no alt text.
TEST:          Can a screen reader user get every label? Does the picture work in greyscale? Is the reference code present and unique?
EXCEPTION:     Certificate and sticker art on print, where text is part of the layout (s14); Spot art uses number tags and a legend only.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

## 09.15 Accessibility & India notes

| Topic | Spec |
|---|---|
| Alt text, Spot | One sentence. Example: "Pump and hose drawing water from a tank." |
| Alt text, Scene | Short alt (one sentence) plus a long description in the page text, or an adjacent ordered list matching the number tags |
| Alt text, Hero process | Alt: "The five-step Clean Tank process." Followed in HTML by an ordered list of the five steps with the UV qualifier |
| Decorative | None planned. If a drawing is purely decorative it is not used |
| Contrast | Information-bearing lines at least 3:1: Primary 700 on White 12.83:1, Neutral 600 on White 5.87:1, Accent 600 on White 4.85:1. Pale tints (Primary 100) are decorative only |
| Not by colour alone | Active step: filled node plus underline plus "STEP 2 OF 5" text. Sludge: hatching plus label. UV conditional: dashed outline plus words. Water: level line plus label |
| Numbered steps | Every sequence carries numbers 01 to N, visible and in the HTML list order |
| Label legibility | Mono caps at 11 px is the floor; test on real phones. Reference codes are decoration for screen readers: set `aria-hidden` on the code text when it repeats the caption |
| Motion | If a diagram is animated (s11), the final frame is complete and readable; honour reduced motion. No decorative reveals |
| Scripts | Separate `hi` and `pa` masters. Devanagari line height 1.65, Gurmukhi 1.60 in labels. Reserve 40% extra width and test long conjuncts at the smallest size |
| Indian sites | Draw rooftop overhead tanks, concrete overhead tanks and underground sumps with a hatch, as seen on Indian buildings, not overseas pressure tanks. Confirm forms with an operations reviewer |
| People | Varied age and build, never one stereotype; head coverings from real references; no festival or religious symbols in diagrams |
| Culture | No tricolour layout; Accent beside a green fill is avoided (s03) |
| Print and heat | Test sticker line weights and fine hatching on the real stock and in outdoor sun before ordering |

## 09.16 Do / Don't

| Do | Don't |
|---|---|
| Do draw flat front or cutaway views with one clear idea | Don't use perspective, isometric or shadows |
| Do use square caps, miter joins and sharp corners | Don't round corners, caps or joins |
| Do label with mono caps on straight leader lines | Don't use speech bubbles, curved callouts or hand lettering |
| Do add a reference code and title block | Don't draw invented dimensions, tolerances or model numbers |
| Do keep water as one still level line and a pale tint | Don't draw splashes, droplets or waves |
| Do use exact step names and numbers | Don't invent a sixth step or drop "where applicable" |
| Do use faceless, plainly dressed figures at work | Don't draw caricatures or a figure inside a tank |
| Do mark capacity art "not to scale" | Don't scale tanks by volume or invent capacities |
| Do keep one Accent marker, outlined in Primary | Don't put Accent on warnings or use three markers |
| Do keep AI drafts internal and redraw them | Don't publish AI output as a technician, certificate or result |
| Do ship SVG master and alt text with every asset | Don't send flattened JPGs with baked-in text |

## 09.17 Day one vs later

| Day one | Later |
|---|---|
| CT Technical Line construction (09.3), annotation system and palette (09.4) | Second illustrator, kept to the same master files |
| Six starter assets: D1, D2, D3, D5, D7, D8 with `en` masters, reference codes and title blocks | D4, D6, D9, D10 and `hi`, `pa` masters for all |
| Illustration, photo, icon rule | Dark variants for every Scene and Hero |
| Written IP assignment, SVG and Figma source | Figma library and export presets (annotation components: leader, tag, title block) |
| Six-line AI rule: drafts only, human redraw, log, one approver | Prompt and reference library from owned art |
| No 3D, no mascot (permanent) | Equipment 3D explainers only if 09.9 gate is met |

## 09.18 Checklist

- [ ] One style named, with rationale and rejected styles (09.2)
- [ ] Three adjectives and a never list (09.1, 09.8)
- [ ] Construction rules with strokes per tier, square caps, miter joins, radius, fills, detail ceiling (09.3)
- [ ] Annotation system: leader lines, mono caps labels, number tags, dimension lines, reference code, title block (09.3)
- [ ] Palette from s03 role tokens, 3 roles max, one Accent marker (09.4)
- [ ] Size tiers with pixel sizes and surfaces (09.10)
- [ ] Illustration, photo, icon rule published (09.10)
- [ ] People rule and pose set (09.7); no mascot
- [ ] Do / Don't table (09.16)
- [ ] Commissioning brief and signed assignment, worldwide and in perpetuity, source files (09.13)
- [ ] AI policy with disclosure wording, review step, named approver, AI log and prompt template v2 (09.12)
- [ ] File and format table, naming, dark and language variants (09.11)
- [ ] Alt-text rule per tier and 3:1 contrast note (09.15)
- [ ] Capacity art marked "not to scale"; no unsourced dimension; every diagram technically reviewed
- [ ] Owner (central brand owner) and review date (January 2027)

## 09.19 Open items & evidence needed

| # | Item | Needed |
|---|---|---|
| 1 | Shape scale and tokens | Confirm with s05 and s12 that radius 0 and xs 2 are the only values, and that `ct.color.border.rule` value (s05 lists Neutral 300 `#C6CACD`, Wave A lists Neutral 300 `#C7C6C1`) is reconciled |
| 2 | Grid and gutters | Confirm 8 px base and 16 px gutters against s07 |
| 3 | AI tool approval | Read current Firefly terms and indemnity for the chosen plan; no tool is approved. DPIIT Part 2 (AI output and authorship) not found published as of 3 October 2026: confirm on the DPIIT site |
| 4 | Legal wording | Counsel to confirm the assignment clause under India Copyright Act s.19 and moral rights |
| 5 | Technical accuracy | Name an operations reviewer; confirm tank forms, parts (inlet, outlet, overflow, hatch) and step drawings against real equipment. No equipment specs or numeric dimensions are drawn until supplied |
| 6 | Pressure figure | "Up to 250 bar" only with its qualifier "subject to site and equipment" |
| 7 | Agent properties | Clean Tank Agent (non-toxic, eco-friendly, 3-month effect), CPWD DSR and the "60% of diseases" statistic need evidence before any visual use |
| 8 | Reference photos | Written consent from technicians for pose and clothing references |
| 9 | Sticker print limits | Printer's minimum line weight (1 pt assumed), gap, and UV fade of fine hatching and the accent underline (s14, s15) |
| 10 | Platform sizes | Instagram and WhatsApp sizes marked "verify before use" |
| 11 | Budget and illustrator | No budget or illustrator named; three revision rounds assumed |
| 12 | Label legibility | Test 11 px Plex Mono caps and 14 px Indic labels on real phones against s04 |
| 13 | Client names | Any client logo or name in art needs written permission |
| 14 | Reference-code scheme | `REF CT-ILL-<ID>-<NN>` to be registered with the asset register in s19 and aligned with other `REF CT-` families (s07) |
| 15 | Secondary colour | Role is TBD (owner). Illustration does not use it; revise 09.4 if a value is assigned |
