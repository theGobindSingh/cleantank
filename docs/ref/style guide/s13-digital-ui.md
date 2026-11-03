# Clean Tank Services: Style Guide
# 13. Digital & UI Expression

> This pillar governs how the Clean Tank Services identity behaves on screens: the website (www.cleantankservices.com), WhatsApp Business, email, Google Business Profile, the digital Cleaning Certificate and e-sticker record, and a future customer and franchise portal. For most families the first and last contact with the brand is a phone screen, so this is where "Quiet precision. One standard, every tank." is either kept or lost. The screen should read like a well-run lab front desk: ruled, numbered, labelled, one next step. It consumes tokens from s03, s04, s05, s07, s10, s11 and s12 and never redefines a value; it names the token (s12 names, exactly) and shows how the parts combine. Authority lives in the visuals; humility lives in the words.

Sheet CT-SG-13 | v2.0 | 08 Oct 2026 (Quiet Utility revision) | Tier legend: LOCK = central brand owner approves any change · GUARD = varies inside stated limits · FLEX = judgment within principles

Not covered here: token architecture and dark-mode implementation (s12), social campaigns (s17), print certificate production (s14, s15), logo drawing (s02). Ratios are WCAG 2.2 relative-luminance values computed with Python. Platform specs not taken from the blueprint are marked "(verify before use)". Hex appears only for verification; builds read tokens.

## 13.1 Principles and inheritance

Intent line: **exact, ordered, on time.** One standard on every page, in every district.

| v2 principle | UI behaviour | Concrete consequence |
|---|---|---|
| Exact | Real numbers, tested states, no adjectives | Capacity ranges in mono tabular figures, 48 px controls, 1 px rules, contrast ratios on file |
| Ordered | One grid, numbered sections, fixed component set | 12-column grid (s07), sections `01` to `NN`, same header and footer on every page |
| Restrained | White and stone pages, few bands, no ornament, no shadow | Primary bands only for header, footer, 5-step band and one selected emphasis band; no gradients; slow and few reveals |
| Documented | The page shows its record | Mono reference tags (`REF CT-WEB-02`), sample certificate, source lines under tables |
| Honest materials | Concrete, steel, water, equipment in photos; square, flat UI | Documentary hero photo, ruled cells, no 3D, bubbles, splashes or stock handshakes |

| Brand trait (persona) | UI behaviour |
|---|---|
| Knowledgeable | Show the method: 5-step stepper, capacity ranges, sample certificate |
| Disciplined | Same grid, same ruled cells, same header and footer, every page |
| Humble (words only) | No superlatives, no "Book NOW", no countdowns, no "limited slots" |
| Responsible | Conditions beside claims: water-quality qualifier beside health lines, disclaimer beside franchise figures |
| Reassuring (words and clarity) | Explain, then offer one next step; one filled button per viewport; plain error messages |

Persona principle for UI: **simple for the customer, professional underneath.** The customer sees a headline, one line, one action and one photograph. Underneath: tokens, tested states and records (certificate, e-sticker, reminder) that prove the work.

## 13.2 Surfaces and expression levels

Level 0 = none, 1 = logo and tokens only, 2 = brand elements in set places, 3 = full brand expression. Even level 3 stays quiet: coral under 10% of area and only as a marker, no motion beyond s11.

| Surface | Level | Brand allowed | Not allowed | Owner (day one) |
|---|---|---|---|---|
| Website marketing pages | 3 | Photo hero, primary header, footer, 5-step band, ruled cells, mono ref tags, Level Line marker, documentary photos | Stock handshakes, autoplay video, carousels, fear imagery, full-page navy | Gobind |
| Enquiry form and contact | 1 | Logo in header, token colours, focus ring, ruled contact cells | Decoration, photo beside fields, countdowns | Gobind |
| Franchise pages | 2 | Franchise lockup (Phase 9), process diagram, disclaimer block | Coin or money imagery, hero ROI numbers | Gobind |
| WhatsApp Business profile, catalogue, status | 2 | Avatar tile, 1080 cards (13.15), short plain text | Emoji strings, stickers, forwarded chain style | Gobind |
| Quick replies and message cards | 2 | Card template 13.15, certificate and date as text | Image-only messages, urgency wording | Gobind |
| Transactional email | 2 | Primary band header, wordmark, ruled detail table, one button, mono footer | Image-only email, marketing blocks in transactional mail | Gobind |
| Google Business Profile | 1 | Logo, real photos (s08), services list | Keyword-stuffed name, stock photos, offers with timers | Gobind |
| Cleaning Certificate PDF and e-sticker record page | 2 | s10 data block, Plex Mono values, ref code, logo | Decorative borders, seals, ribbons | Gobind |
| Customer and franchise portal (later) | 1 | Logo, tokens, ruled tables | Dashboard gradients, charts without a text table | Later: developer |
| Push or OS notification (later) | 0 | Small monochrome symbol, plain text | Emoji, "URGENT", "Hurry" | Later |

## 13.3 Brand moments (6)

Everything else is functional UI. Each moment is static: no animation, no confetti.

| # | Moment | Trigger | Asset | Copy rule |
|---|---|---|---|---|
| 1 | Enquiry received | Form submitted | Check icon 32 px (square keyline), mono ref `REF CT-ENQ-nn` (format Open) | "Thank you, [Name]. We have your enquiry and will call you on [number]." No promised time until the owner sets one (Open) |
| 2 | Certificate delivered | Job closed | Certificate icon, certificate number in Plex Mono | "Your Cleaning Certificate for [date] is attached. Keep it with your tank records." |
| 3 | Due-date reminder | About 1 week before due date | Calendar icon, due date in Plex Mono 600 with 3 px accent underline (the one key figure) | "If your tank is due for cleaning, we can help you plan the service." |
| 4 | Empty state | No records, no results | Spot illustration 160 px (s09), ruled cell | One sentence, one button, no apology |
| 5 | 404 | Broken link | Symbol 48 px, mono `ERROR 404` | "We could not find that page." plus links to Home and Contact |
| 6 | Franchise enquiry received | Franchise form submitted | Check icon | "Thank you. Our franchise team will contact you to discuss the next steps." |

## 13.4 Boundary with the design system

Style guide owns the look, brand moments, templates and the brand attributes below. The design system (Tailwind configuration plus a small component library, likely Next.js with Radix or shadcn primitives, Open) owns code, ARIA wiring, hit areas and keyboard behaviour. **Single source of truth: tokens from s12.** The Tailwind theme reads CSS variables (`--ct-color-primary`, `--ct-color-band`, `--ct-space-5`, `--ct-radius-sm`, `--ct-motion-duration-base`); no hex repeated in components.

| Component | Brand attributes (this guide) | System attributes (design system) |
|---|---|---|
| Button | Fill, label colour, radius `ct.radius.sm` 4, Anek 700 caps, wording | Hit area, aria-busy, disabled handling, icon slot |
| Input | Border `ct.color.border`, radius 4, mono caps label above, error colours and wording | autocomplete, inputmode, aria-invalid, error summary wiring |
| Card (ruled cell) | 1 px rules, radius 0 in grid, padding `ct.space.inset.cell`, flat | Focus target, whole-card link, truncation |
| Alert | State tokens, icon plus word, radius 4 | role=status or alert, dismiss |
| Table | Primary header, 1 px rules, radius 0, mono data | Semantics, sorting, responsive stacking |

## 13.5 Website: structure, numbering, backgrounds

Domain: www.cleantankservices.com. Section order is fixed by INFO-BANK; the nav shows the shorter list in 13.9. Each section carries, in this order: a mono section number and reference tag line (`02  REF CT-WEB-02`, Plex Mono 500 caps 12 px, +0.1em, number and tag in `ct.color.accent-marker.text`, 6.51:1 on White, 5.92:1 on Stone), the H2 (Anek 700 caps, wdth 78), content, optional one link. A 1 px `ct.color.border.rule` zone rule runs full width between sections. Section gaps 64 / 80 / 96 px (s07). **Numbers are assigned to visible sections in order, with no gaps**: when Clientele is hidden, Pan-India takes the next number.

**Background rule (s07.7).** The page is white and stone (`ct.color.bg`, `ct.color.bg.subtle`), alternating. Primary bands (`ct.color.band`, tokens re-mapped by `[data-surface="band"]`, s12) are used for four things only: header, footer, the 5-step band, and **at most one selected emphasis band per page** (default: Franchise on the home page, owner to confirm). Never a full navy page, never two emphasis bands.

| # | Section | Zone | Notes |
|---|---|---|---|
| 01 | Hero | Photo + flat scrim | 13.6; headline, one line, CTAs, photo, brand mark in header (5 elements, s07) |
| 02 | About | White | Who we are, in business since 2008 (safe), descriptor |
| 03 | Services | Stone, white ruled cells | Four or five tank-type cells (A3), capacity range in mono; [Explore Our Services] as the section link |
| 04 | 5-Step Process | **Primary band** | Band version of 13.12; step 05 "where applicable" |
| 05 | Recommended Cleaning Frequency | White | Ruled table by organisation type (healthcare about 3 months, schools about 6); no flat number; qualifier line |
| 06 | AMC | Stone | "Never Miss Your Tank Cleaning Schedule." Reminders, history; schedule table (A4) |
| 07 | Why Choose Us | White | INFO-BANK facts only; no superlatives |
| 08 | Water Hygiene | Stone | Explain, never frighten; water-quality qualifier mandatory |
| 09 | Clientele | White | **Hidden until written permission** per client (13.17) |
| 10 | Pan-India Presence | Stone | s10 state map: Punjab, Delhi, Uttar Pradesh, Himachal Pradesh, Madhya Pradesh, Jharkhand, Maharashtra, with a text list |
| 11 | Aims | White | Mantra: Knowledge. Discipline. Humility. Trust. |
| 12 | Founder | Stone | Mr. Gurdev Singh; origin story hidden until the Lucknow or Kanpur question is settled |
| 13 | Franchise | **Primary band (selected emphasis)** | [Become a Franchise Partner] as on-dark button; figures only on the franchise page, with disclaimer (13.18) |
| 14 | Contact | White, ruled cells | Only phones, emails and addresses from INFO-BANK §1 |
| 15 | Enquiry | Stone | Service / AMC / Franchise (13.10) |
| | Footer | Primary band | 13.9 |

Reference tag grammar follows s06 and s07: `REF CT-<FAMILY>-<NN>`. This pillar proposes families `WEB` (page sections), `WA` (WhatsApp cards) and `EM` (emails); registration in s19 is Open.

## 13.6 Hero

Full-bleed background photo, flat scrim, condensed-caps headline and CTAs on top (s07 A1, s08.10). One photo, three art-directed crops; `object-fit: cover` alone is never enough.

| Item | Desktop (1024 and up) | Tablet portrait (480 to 767) | Phone (below 480) |
|---|---|---|---|
| Crop (s08) | 16:9, 2400 x 1350 | 4:5, 1080 x 1350 | 9:16, 1080 x 1920 |
| Hero box | Min height 640, full-bleed, padding 96 | Min height 560 | Min height 560, padding 16 / 64 |
| Text zone | Left 58% (cols 1 to 7), left-aligned, vertically centred or bottom-aligned | Lower 50% | Lower 50%, 16 px gutter |
| `srcset` widths | 1600 / 2400 | 768 / 1080 | 480 / 720 / 1080 |

**Stack, top to bottom:** mono ref tag `REF CT-WEB-01` (White, Plex Mono 500 caps 12 px, +0.1em; no accent text on photos, s08) · 16 px · H1 · 16 px · one supporting line (Anek 400, `ct.font.size.body-l`, White) · 24 px · CTAs (row on desktop, stacked full-width on phone, 8 px gap).

**Headline** (draft, from the persona rewrite table): "When was your water tank last cleaned?" set by CSS as caps: Anek Latin wdth 78, 700, `ct.font.size.display` (39.81 to 53.75 px), line-height 1.00, +0.01em, White, 8 words or fewer. Hindi and Punjabi headlines use Anek Devanagari or Gurmukhi 700, wdth 100, no case change, line-height 1.30 or 1.25, and may wrap to 2 or 3 lines. **Supporting line** (draft): "A documented five-step cleaning, with a dated record left on your tank."

**CTAs.** Primary: on-dark button (White fill, Primary 700 label, 12.83:1) **[Get a Service Quote]**. Secondary: on-dark outline (1 px White border, White label) **[See the process]**. Accent is never a CTA fill. Labels are written sentence case in markup and set uppercase by CSS.

**Scrim.** One flat layer, `ct.color.primary.900` at `ct.opacity.scrim.photo` **0.70**, over the whole photo, and under the header zone when the header floats (13.9). No gradient, no blur. White text over it: 6.64:1 on the lightest possible photo (pure white), 6.96:1 over Stone (s08). Below 60% is never allowed. Because 30% of the photo shows, choose plates with strong structure (tank edge, hose, gauge, concrete joints), P24 to P26 (s08).

**Image delivery.** Real `<img>` (not CSS background) with `srcset` and `sizes`, `fetchpriority="high"`, never lazy-loaded, explicit width and height, AVIF with WebP fallback, **120 KB or less per served variant** (design choice; a heavily scrimmed photo compresses hard, confirm with field data). Alt text describes the action ("Technician in a navy uniform checking a rooftop water tank with a torch and checklist"), never "image of" and never keywords. A still poster only; no carousel, no autoplay video. Under Save-Data the photo is replaced by the Primary 700 ground with the same text.

**Frame.** Full-bleed, radius 0. Focus ring on hero CTAs is White (13.8). Nothing else sits on the photo: no ISO badge, client logo, phone strip or banner (s07 above-fold limit).

## 13.7 Core components (exact specs)

Tokens: radius `ct.radius.sm` 4 default, `xs` 2 and `none` 0 only; spacing `ct.space.*`; borders `ct.border.width.thin|base|bold` 1 / 2 / 3; focus `ct.focus.width` 2, `ct.focus.offset` 2; control height `ct.size.control.height` 48. **No shadows, no gradients, no pill or round shapes.**

### Buttons

Height **48 px**, padding 0 24 px, min width 120 px, radius 4, label Anek 700 **uppercase**, tracking +0.06em (`ct.font.tracking.button`), 14 px; icon 20 px, gap 8 px. Indic labels: Anek 700, no case change, no tracking. Neighbouring targets 8 px apart. Compact variant for dense desktop tables only: 44 px (`ct.size.hit.min`). No trailing arrows or exclamation marks.

| Variant | Fill | Label | Border | Use | Ratio (label) |
|---|---|---|---|---|---|
| Primary `ct.button.primary.*` | `ct.color.primary` (Primary 700 `#20334B`) | `ct.color.on-primary` (White) | none | Form submit, sticky bar Call, the page's one filled action on light ground | 12.83:1 |
| Outline `ct.button.outline.*` | none | Primary 700 | 1 px Primary 700 | [Explore Our Services], WhatsApp, alternatives | 12.83:1 |
| On-dark `ct.button.on-dark.*` | White | Primary 700 | none | Over a primary band or the hero photo | 12.83:1 |
| On-dark outline | none | White | 1 px White | Secondary over a band or hero photo | 12.83:1 on band, 6.64:1 on scrim worst case |
| Tertiary (text link style) | none | Primary 700, underlined 1 px | none | In-text actions | 12.83:1 |

**There is no accent button.** Coral never fills a button, link or CTA, and never carries button text (s12 rule 12.9). The label is the identifier; the 1 px outline (12.83:1) and fill carry the control edge.

**One filled button per viewport** (rule 13.1). In the hero, the White-fill on-dark button is the filled one; the outline is not counted. The mobile sticky bar is a separate fixed layer.

### Links

`ct.color.text.link` (Primary 700), underlined always, 1 px at 3 px offset; hover `ct.color.text.link-hover` (Primary 800 `#172436`, 15.65:1 on White) with 2 px underline; visited `ct.color.text.link-visited` (Primary 500 `#42689A`, 5.71:1). In bands, links are White underlined (12.83:1). Never coral text for links.

### Inputs, selects, textareas

| Property | Value |
|---|---|
| Height | 48 px (textarea min 120 px) |
| Radius | 4 (`ct.input.*`, `radius.sm`) |
| Border | 1 px `ct.color.border` Neutral 500 `#85847F` (3.75:1 on White, 3.41:1 on Stone) |
| Fill | White (`ct.color.surface`), also on Stone sections |
| Label | **Above** the field, Plex Mono 500 caps 12 to 13 px, +0.08em, `ct.color.text.heading` (12.83:1); always visible; never placeholder-only. Indic labels use Anek 500 (Plex Mono has no Indic glyphs) |
| Helper | 14 px, `ct.color.text.muted` Neutral 600 `#65655F` (5.87:1 on White, 5.33:1 on Stone) |
| Required | Write "(required)" or "(optional)" in the label, in words |
| Text | 16 px minimum (also prevents iOS zoom); numbers in Plex Mono 500 tabular where numeric |
| Select | Native `<select>` styled, chevron-down 20 px at right, 48 px |
| Radio cards (tank type) | Ruled cell, radius 4, tank icon 32 px, 1 px Neutral 500 border; selected: 2 px Primary 700 border plus check icon |
| Focus | Ring 2 px Primary 700, 2 px offset, radius 4, plus border to Primary 700 |

### Form validation

Error colours from `ct.color.state.error.*`: text `#B01A45` (6.82:1 on White, 6.20:1 on Stone, 5.94:1 on `#FCEBF0`), border `#D0365F` (4.80:1 on White, 4.36:1 on Stone), never coral. Pattern: field border becomes 2 px error border (`ct.input.border-error`); below it an `alert-circle` 16 px icon (square keyline, s10) plus message in 14 px 500 error text, linked with `aria-describedby`, `aria-invalid="true"`. Messages say what to do, in plain sentence case: "Enter a 10-digit mobile number." Never "Invalid input", never capitals, never exclamation marks. On submit an error summary (State error alert, links to each field) takes focus; the first invalid field is not scrolled behind sticky layers (13.9). Validate on blur and on submit, not per keystroke. Do not disable the submit button to hint at errors.

### Cards (ruled cells)

A card is a **ruled cell**: a grid container with `gap: ct.card.gap` (1 px) on `ct.card.grid-bg` (`ct.color.border.rule`, Neutral 300) shows the grid background as the line; each cell is square (`ct.card.radius` 0) with fill `ct.card.bg` and padding `ct.card.padding` (`ct.space.inset.cell`, 24 mobile, 40 desktop). The outer container radius is 2 (`ct.card.container-radius`). Cells on a Stone section are White; on a White section, Stone. A single card outside a grid uses `ct.card.standalone-radius` 4 and a 1 px `ct.color.border.rule` edge. **No shadow in any state.**

Contents: mono ref tag or number top (accent-marker.text), icon 48 px (s10, square caps, miter), H3 (Anek 700 caps), two-line text, optional tertiary link. Interactive card: the title is the link, the whole cell clickable via the stretched target, a visible link text plus chevron-right; hover/focus: 1 px `ct.card.border-hover` (Primary 700) drawn inset with `outline-offset: -1px`, no shadow, no lift. Dark mode: cell `ct.color.surface` (Primary 700), rules Primary 600.

### Alerts

Radius 4, 1 px `ct.color.state.<s>.border`, background `...bg`, icon 20 px (square keyline) plus bold title plus text, padding 16. Pairs from s12: success `#1E7A3C` on `#E6F4EA` 4.74:1; warning `#8A5A00` on `#FFF4D6` 5.41:1; info `#1B6A8F` on `#E4F2F8` 5.24:1; error `#B01A45` on `#FCEBF0` 5.94:1. Icon always with words. Accent never appears inside an alert. `role="alert"` only for errors that block the task; otherwise `role="status"`. An overdue due date in a portal is a calm Warning with the text "Recommended date has passed", never coral or red (s10).

### Tables

Ruled table (s10.14): radius 0; 1 px `ct.color.border.strong` frame; **header row `ct.color.band` fill (Primary 700) with White Plex Mono 600 caps 12 px, +0.08em** (12.83:1; units in the header); body cells 1 px `ct.color.border.rule` rules, cell padding 12 x 16, rows 48 px min (56 mobile, s10), data in Plex Mono 500 `tnum` with numbers right-aligned, labels in Anek 400; no zebra, no highlighted row. `<caption>` and `scope` required; a mono source line under the table ("SOURCE: INFO-BANK §n"). Below 768 px tables stack into labelled rows (mono label above value) instead of scrolling sideways. A chart never ships without a text table beside it (s10).

### Empty states and loading

Empty state: ruled cell, spot illustration 160 px (s09), H3, one helper line (90 characters max), one button; example "No cleaning records yet." / "Your certificates and due dates will appear here after your first service." / [Get a Service Quote]. Illustration dropped under Save-Data.

Loading: no spinners, bouncing dots, full-screen loader or logo animation. Use **static skeleton blocks** (`ct.color.neutral.100` `#ECEBE7`, radius 2, no shimmer), reserve image aspect ratios, and let a submitting button keep its width with the text "Sending your enquiry" and `aria-busy="true"`.

### Toasts

Rare and functional. Bottom-left on desktop, bottom-centre on mobile **above the sticky bar** (bottom offset 80 px). Width 360 px max, radius 4, `ct.color.band` fill, White text 16 px, 1 px border Primary 400, no shadow, optional state icon with words. Stays 8 seconds minimum, pauses on hover and focus, has a 48 px dismiss button, `role="status"`. Enters by opacity only, `ct.motion.duration.fast` 110 ms, `entrance` easing; no travel, no sound, no shake. Never used for the enquiry confirmation (inline, moment 1) or any error needing action.

## 13.8 States and focus

| State | Primary | Outline | On-dark | Link | Input | Card (ruled cell) |
|---|---|---|---|---|---|---|
| Default | Primary 700 fill, White label | 1 px Primary 700, Primary 700 label | White fill, Primary 700 label | Primary 700 underlined | 1 px Neutral 500 | White or Stone cell |
| Hover | Primary 600 `#314D72` (label 8.62:1) | Fill Primary 50 `#F1F4F9` (label 11.64:1) | Fill Neutral 50 `#F5F4F1` (label 11.67:1) | Primary 800, 2 px underline | Border Primary 700 | 1 px inset Primary 700 outline |
| Focus-visible | Ring 2 px, offset 2, radius 4 | same | same, **White ring** | same | Ring plus border Primary 700 | Ring on the link or cell |
| Active (pressed) | Primary 800 `#172436` (15.65:1) | Fill Primary 100 `#DFE7F1` (10.29:1) | Fill Neutral 100 `#ECEBE7` (10.76:1) | Primary 800 | Border Primary 700 | same as hover |
| Disabled | `ct.color.disabled.bg` Neutral 100, `.fg` Neutral 500, `aria-disabled`, label stays in words | same | same | Not applicable | same fill, no text colour change in value | Not applicable |
| Loading | Label "Sending...", width kept, `aria-busy` | same | same | Not applicable | Not applicable | Static skeleton |
| Error | Not applicable | Not applicable | Not applicable | Not applicable | 2 px error border, icon, message | Not applicable |

On-dark outline hover: fill White with Primary 700 label (12.83:1), active Neutral 100; there is no s12 token yet (open item 14). Transitions: colour and border over `ct.motion.duration.fast` 110 ms, `standard` easing; no scale, no lift, no bounce (s11).

**Focus ring.** 2 px solid, 2 px offset, radius 4 (`ct.focus.*`, `ct.color.focus`), never `outline: none` without a replacement. Light surfaces: Primary 700 (12.83:1 on White, 11.67:1 on Stone). **On primary bands and on the hero photo: White** (12.83:1 on Primary 700, 6.64:1 on the scrim worst case), applied by `[data-surface="band"]` and `[data-surface="photo"]` (the photo scope reuses the band mapping; s12 to confirm, open item 14). Dark theme: White on Primary 900 (17.85:1).

**Dark mode.** Follows s12: page Primary 900 `#0F1824`, surface Primary 700, text Primary 50. The primary button becomes White fill with Primary 700 label (`ct.color.primary` flips to White, 12.83:1). The header and footer bands stay Primary 700 in both modes. Day one: website is light only with `color-scheme: light`; dark ships later with the portal, follows the system setting, with a manual toggle. Email, certificate and e-sticker stay light (`ct.color.fixed.*`). Browser `theme-color` is `#20334B` in both modes (the header band colour).

## 13.9 Header, sticky mobile bar, footer, language

**Header: two options, owner TBD (s07 H1 / H2).** Contents are shared: reverse (White) horizontal logo top-left (200 px wide default on desktop; small-use version 140 px under 768, s02), nav, language switcher, Call, WhatsApp. Skip link "Skip to main content" first in tab order. The header is always a Primary 700 band once solid; links are Anek 700 caps 14 px, +0.06em, White; the current page has a 3 px `ct.color.accent-marker` underline bar (4.47:1 on Primary 700, a shape cue, plus `aria-current="page"`). Desktop nav (max 6): About, Services, Process, AMC, Franchise, Contact. Phone: logo, language, Call, menu (4 items maximum); menu is a 48 px button with icon plus the word, panel with 56 px rows, 18 px text, 48 px close button.

| | H1: fixed solid bar | H2: floating, transparent to solid |
|---|---|---|
| Height | 64 px desktop, 56 phone | 72 px desktop, 64 phone |
| Behaviour | Primary 700, fixed at top; hero starts below it | Transparent over the photo; becomes solid Primary 700 after 80 px of scroll |
| Over the photo | Photo clear of the bar, no scrim needed | The flat 70% scrim extends under the header zone; test every hero image for 4.5:1 behind the nav |
| Transition | None | Background colour only, `ct.motion.duration.base` 150 ms; no slide, no blur; under reduced motion it switches instantly |
| Rule | 1 px `primary.600` rule under the bar (s07) | Same, once solid |
| Pros / risks | Always legible, matches footer; uses 64 px of hero height | More photo; legibility depends on the image and scrim |
| Shared | `scroll-padding-top` equals header height; header never hides a focused element (2.4.11); z-index `ct.z.sticky` 100 | Same |

**Sticky mobile bar** (below 768 px). Height 64 px (8 px padding, 48 px buttons), White, 1 px `ct.color.border.rule` top rule, radius 0, flat. Two equal buttons, 8 px gap: **Call** (Primary, phone icon) and **WhatsApp** (Outline, official WhatsApp glyph unmodified, s10). Both labels in words. Which number each uses is Open (13.26). Safe-area inset respected (`env(safe-area-inset-bottom)`). Hidden while a text field is focused or the keyboard is open, and on the enquiry section. `scroll-padding-top` and `scroll-padding-bottom` of 88 px on the document so the bar never overlaps a focused control. The bar is a separate layer, not a second primary action.

**Footer.** `ct.color.band` (Primary 700), White text (12.83:1), links White underlined, focus ring White, padding 64 px top. Laid out as ruled cells (1 px `primary.500` rules, band scope) with a mono ref tag `REF CT-WEB-FT` in Accent 400 (5.14:1). Content: reverse horizontal logo with descriptor; contacts from INFO-BANK §1 only (two phones, two emails, Regd. Kanpur (U.P.) and Correspondence/Sales Kharar, SAS Nagar (Punjab)); GSTIN `09ALFPS1473F5ZU` in Plex Mono caps; the **exact ISO line** (13.17); "An Initiative of Gobind Galaxy" endorsement in text only, 14 px, below the lockup (s02); links to Privacy and Terms; language switcher. The same contact block sits in the same place on every page (WCAG 3.2.6).

**Language switcher.** Three text options **EN / हिंदी / ਪੰਜਾਬੀ**, each labelled in its own script (Anek, since mono has no Indic), `lang` and `hreflang` set (`en`, `hi`, `pa`). 48 px button group; active option 700 with a 2 px White underline in bands (2 px Primary 700 on light). No flags, no IP redirect; remember the choice (first-party, no tracking). URLs `/`, `/hi/`, `/pa/` (proposed). Untranslated pages show English with a short note, never a half-translation. Native-speaker review before publication (s04).

## 13.10 Enquiry form

One form, three types chosen first with radio cards: **Service enquiry**, **AMC enquiry**, **Franchise enquiry**. Submit label: **[Send an Enquiry]** (Primary, 48 px). Layout (s07 A7): form in cols 1 to 6, contact cells in cols 8 to 12 (phone, WhatsApp, address in ruled cells). Fields follow Phase 10.

| Field | Type and attributes | Notes |
|---|---|---|
| Enquiry type | Radio cards, default Service | Switching type keeps every value already entered (WCAG 3.3.7) |
| Name | text, `autocomplete="name"` | Required |
| Location | text, `autocomplete="address-level2"` | City or area, required; helper "City or area is enough." |
| Tank type | Radio cards with tank icons: Domestic, Commercial overhead, Commercial underground, Institutional, Large capacity, Not sure | Icons `tank-domestic`, `tank-overhead`, `tank-underground`, `tank-institutional` |
| Capacity | number plus unit (litres), `inputmode="numeric"`, mono `tnum` | Helper "An estimate is fine, for example 5,000 L." Plus a "Not sure" checkbox. Accepts en-IN grouping |
| Time since last cleaning | Select: Less than 3 months, 3 to 6 months, 6 to 12 months, More than a year, Never or not sure | Option wording is a proposal (Open) |
| Phone | `type="tel"`, `inputmode="numeric"`, `autocomplete="tel-national"`, fixed "+91" prefix shown | 10 digits, Latin or Devanagari or Gurmukhi digits accepted and normalised (verify) |
| Message | textarea, optional | Max 500 characters, counter in words |

AMC enquiry reuses the same fields plus an organisation type select. Franchise enquiry shows Name, Location (district), Phone, optional email and message; extra franchise fields (investment range, experience) are Open and not collected until the owner decides. Consent line under the button, 14 px: "We will use your details only to reply to this enquiry." with a link to Privacy (legal review, Open). Alongside the form: "Prefer to talk? Call or WhatsApp us." with the INFO-BANK numbers. Data entered can pre-fill a WhatsApp message on request. Success is an inline ruled-cell panel (moment 1), focus moved to its heading, never a toast. Spam control: honeypot field and server-side checks; no CAPTCHA puzzles (WCAG 3.3.8).

## 13.11 Microcopy tone

| Situation | Write | Never write |
|---|---|---|
| Hero | "When was your water tank last cleaned?" | "YOUR WATER COULD BE DANGEROUS!" |
| Primary CTA | [Get a Service Quote] | "Book NOW", "Call now!", "Hurry" |
| Reminder | "If your tank is due for cleaning, we can help you plan the service." | "Last chance", "Overdue, act now" |
| Error | "Enter a 10-digit mobile number." | "Invalid input!" |
| Empty | "No cleaning records yet." | "Oops! Nothing here" |

Copy is written in sentence case in the source; CSS sets headings, labels and buttons uppercase (Latin only), so screen readers and translators receive normal text. No emoji in UI text, exclamation marks only in rare thanks (default none), no countdowns, no scarcity. Health lines always carry: "Water quality also depends on source water, plumbing, tank condition and later maintenance, which are outside our service." Voice follows p7.

## 13.12 Process stepper

Uses the s10 diagram and `ct.step.*` tokens. Built as an ordered list (`<ol>`); each step: **square node** (`ct.step.size` 40 px, 32 px at 360, radius 2, 2 px Primary 700 border, White fill) holding the mono numeral **01 to 05** (Plex Mono 600, tabular); process icon 32 px; H4 (Anek 600, wdth 100, sentence case, 19.2 to 21.6 px); one line from INFO-BANK. Connectors: 2 px `ct.color.border.strong`, square caps, 90 degree miter elbows. Hit area stays 48 px.

| State | Look | Used where |
|---|---|---|
| Default | Outlined Primary 700 node, mono numeral | Website and certificate; all steps default (static) |
| Active | Primary 700 fill, White numeral, 3 px 16 px Accent 500 underline (`ct.step.active-underline`) | Current step in a job tracker or e-sticker record (later); on hover in an interactive diagram |
| Optional | Step 05 dashed border (4 px dash, 4 px gap), label "* Where applicable" in mono caps, always shown | Always |

Steps in order: Dewatering; High-pressure cleaning (jet up to 250 bar, subject to site and equipment); Sludge & water removal; Disinfection (antibacterial); UV treatment (where applicable). Horizontal at 1024 px and above (five columns); vertical below 1024 with a left connector. Never six steps, never the old HCl version.

**Band version (website section 04, s07 A2).** Full-bleed `ct.color.band`; five ruled cells in a 5-column sub-grid, 1 px gap in `primary.400`; each cell has the mono numeral (`ct.color.accent-marker.text`, Accent 400 `#F1876A`, 5.14:1 on Primary 700), icon, step name in White, one line. On mobile: five ruled rows, numeral left in a 48 px column. Band scope maps node border and text to White (12.83:1). Motion per s11: plays once at 50% in view, nodes fade in order, a 3 px accent Level Line draws under the row; reduced motion shows everything at once. A step's state is never carried by motion alone.

## 13.13 Email

**Shell.** One column, **600 px** container, fluid to 320 px. Tokens do not exist in email clients, so the build inlines the token values; they still come from s12.

| Part | Spec |
|---|---|
| Header band | Primary 700 `#20334B`, 72 px high, padding 24 px sides; White (reverse) wordmark 160 px wide (2x PNG, 320 px source), alt "Clean Tank Services"; at right, mono ref tag `REF CT-EM-01` (Accent 400 `#F1876A`, 5.14:1 on the band), 12 px caps, +0.1em |
| Body | White `#FFFFFF`, text `#25282A` 16 px, line height 1.5 (Indic 1.65 and 1.60, s04); headline 24 px 700 caps in the heading stack, Primary 700 |
| Detail table | Ruled: 1 px `#C7C6C1` cell rules, 1 px Primary 700 frame, radius 0; label column in mono caps 12 px `#65655F` (5.87:1), value column mono 600 14 px `#25282A`; row 48 px |
| Button | Bulletproof (table-based, VML fallback in Outlook), **48 px** high, Primary 700 fill, White label (12.83:1), Anek-stack bold caps 14 px, +0.06em, radius 4 (square in Outlook Word engine), left or centred |
| Footer | Stone `#F5F4F1` panel, 1 px rule above; **mono footer**: Plex Mono caps 12 px, `#65655F` (5.33:1): `CLEAN TANK SERVICES  |  REF CT-EM-nn`, then phone, email, address lines from INFO-BANK §1, and for reminders one unsubscribe line |

Font stacks (Anek and Plex Mono are not embedded in email): body `Arial, "Noto Sans", "Noto Sans Devanagari", "Noto Sans Gurmukhi", "Nirmala UI", sans-serif`; headings `"Arial Narrow", Arial, "Noto Sans", sans-serif` in caps (Latin only); mono `"IBM Plex Mono", "Courier New", monospace`. Images at 2x, alt text on every image, never an image-only email, plain-text part always sent. HTML under 102 KB to avoid Gmail clipping (figure from Mailchimp and Litmus, not Google; verify). Email stays flat: no shadows, no gradients, no rounded images.

**Dark mode.** Clients differ. The header band is Primary 700 so the reverse logo reads either way; no white-background-only logos on the body; text colours survive inversion; transparent PNGs get a 1 px safe edge; declare `color-scheme: light dark` and test Gmail iOS, Apple Mail and Outlook (Word engine on Windows desktop) for widths and buttons.

**Signature.** Name, role, "Clean Tank Services", descriptor, one INFO-BANK §1 phone, admin@cleantankservices.com, www.cleantankservices.com; symbol 48 px or wordmark 120 px minimum (s02); no banners, quotes or stacked taglines. Franchise operators use the Phase 9 lockup.

**Transactional templates.**

| Template | Trigger | Subject (max 60 characters) | Content fields |
|---|---|---|---|
| Booking confirmation `CT-EM-01` | Booking accepted | "Your tank cleaning is booked" | Detail table: name, site, tank type, capacity, date and time window, who to call (INFO-BANK §1), what to prepare (water supply off, access to the tank) |
| Reminder `CT-EM-02` | About 1 week before due date | "Your tank cleaning is coming up" | Last cleaned date, recommended date (the one key figure, 3 px accent underline), one button [Get a Service Quote], sentence "If your tank is due for cleaning, we can help you plan the service." No pressure, one unsubscribe line |
| Certificate delivery `CT-EM-03` | Job closed | "Your Cleaning Certificate" | Certificate number (mono), cleaning date, next recommended date, PDF attached, link to the record page, contact line |

## 13.14 Digital certificate, PDF and e-sticker record

**Cleaning Certificate PDF.** A4 portrait, 20 mm margins (s07), laid out as a spec sheet: Primary 700 title band with White reverse logo, ruled field grid (1 pt Primary frame, 0.25 pt cell rules), mono values, reference code. Content per s10 data block (certificate number, customer and site, tank type and capacity, cleaning date, next recommended date, 5-step process record, technician and provider, contact; exact ISO line in the footer). Square corners throughout. Fonts embedded Anek and Plex Mono, text selectable, tagged PDF with document title and language set. Target size 500 KB or less (design choice). File name `CT-<certificate-number>.pdf`. PDF/A (verify with the production tool). The next date is labelled "recommended", never a promise.

**E-sticker record page** (later, needs a records system). A public, unguessable URL (proposed `cleantankservices.com/r/<token>`), printed as the optional QR on the physical sticker (20 x 20 mm minimum, s10). The page is `noindex`, mobile first, and mirrors the sticker: a Primary 700 title band, a ruled field grid with mono values (certificate number, cleaning date, next recommended date with the 3 px accent underline, tank type and capacity), the 5 steps with Done or Not applicable (stepper, 13.12), the water-quality qualifier, and contact. It uses `ct.color.fixed.*`, so it stays light in dark mode. It shows no customer name, address or phone. The QR is printed only when the page exists.

## 13.15 WhatsApp Business

| Item | Spec |
|---|---|
| Profile photo | Avatar tile: symbol only, Primary 700 tile, symbol 56% of height, 640 x 640 px (verify). WhatsApp applies its own circle crop; the artwork stays square, symbol inside the central 70% |
| Business name | "Clean Tank Services" (no keywords added) |
| Description | "Scientific & Mechanized Water Tank Cleaning." Plus one plain line; fit the platform limit (verify). No health claim, no superlatives |
| Catalogue | One item per service, 1:1 images from s08 or s09 diagrams, title, 2-line text, no price until the owner sets one: Domestic tank cleaning, Commercial overhead tank cleaning, Underground tank cleaning, Institutional tank cleaning, Annual Maintenance Contract (AMC). Item images 1080 x 1080 (verify) |
| Greeting | "Thank you for contacting Clean Tank Services. Please share your name, location, tank type and approximate capacity." |
| Quick replies | `/quote` collect the six enquiry fields; `/process` the 5 steps; `/amc` AMC explained; `/due` reminder text; `/thanks` after service. Each is text, no emoji strings, no urgency, signed "Clean Tank Services" |
| Status | At most one post a week; 1080 x 1920 (s07); process photos or a tip; no offers, no timers |

**Message card template, 1080 x 1080 px (restyled).** Reads as a record slip.

| Zone | Spec |
|---|---|
| Canvas | White `#FFFFFF`, 64 px margins, radius 0 (WhatsApp rounds the bubble itself) |
| Header band | Full-width Primary 700, 160 px high. White reverse horizontal logo left, **not under 124 px wide** (s02; default 220 px). Right: ref tag `REF CT-WA-nn` in Plex Mono 500 caps 28 px, Accent 400 (5.14:1) |
| Headline | Below the band, 48 px gap. Anek 700 caps, wdth 78, Primary 700, 64 px (56 px minimum), line-height 1.0, 3 lines maximum |
| Key value | The date or number, Plex Mono 600 `tnum` 72 px, Neutral 900, with a 3 px, 48 px Accent 500 underline below it. One key figure per card |
| Ruled field grid | Two columns, 1 px Primary 700 frame and 1 px Neutral 300 cell rules, radius 0. Label: Plex Mono 500 caps 28 px, Neutral 600 (5.87:1). Value: Anek 400 36 px minimum, Neutral 900 (14.83:1) |
| Footer | 1 px Primary 700 rule, then mono caps 28 px minimum: INFO-BANK §1 numbers only, `CLEAN TANK SERVICES` |
| Limits | Maximum 40 words. Card types: Booking confirmed, Reminder, Certificate delivered, Process explainer (5 ruled cells, step 05 dashed, "* Where applicable"). No navy full-bleed card |

**The same details are repeated as text in the message** (images are not read aloud and not searchable). Hindi or Punjabi cards match the message language (Anek Devanagari or Gurmukhi 700 headline, wdth 100, no caps; mono labels replaced by Anek 500). Export PNG, 300 KB or less (verify); alt text where the app allows.

## 13.16 Google Business Profile

Name exactly "Clean Tank Services", no keywords or city appended (platform policy, verify). Logo and cover from the s02 kit (platform sizes verify); cover is a documentary photo (s08) with no text on it. Category and service list from INFO-BANK services; description plain and under the limit (verify). Reviews: ask politely after the certificate; never incentivise; reply in 2 to 3 calm sentences, thank by name, move any complaint to a phone call, never argue, never attack a competitor. Q&A pre-seeded with the five process steps and the frequency answer (by organisation type, no flat number).

## 13.17 Trust elements, privacy and cookies

| Element | Rule |
|---|---|
| ISO | Only the exact line: "ISO 9001:2015 certified (Q2A-UK Certification Board), Certificate No. Q2A-2026-0401T118011, valid to 31 March 2029." Footer and Why Choose Us, set in a ruled cell with mono certificate number. Never "accredited", UKAS, IAF; no ISO logo or badge unless the certifying body supplies and permits one (Open) |
| Client names and logos | Hidden until written permission for each client; spellings kept as separate entries; permission register in s19; shown as name rows in ruled cells, greyscale, no logos until recorded (s07 A5) |
| Reviews and counts | No star rating, tank count or customer count until a source record exists; no review schema without real reviews |
| Franchise figures | Only on the franchise page, with the disclaimer (13.18) |
| Health lines | Water-quality qualifier always adjacent |
| Unproven claims | Clean Tank Agent properties, CPWD DSR inclusion, the "60% of diseases" statistic and any WHO, FDA or government approval stay off public pages until evidence is on file |
| Origin story | Hidden until the Lucknow or Kanpur question and early dates (Delhi Railway Station 2006 to 08) are confirmed |

**Cookies and privacy.** Launch with no advertising or cross-site tracking cookies and cookieless, first-party analytics (tool choice Open). If a consent banner is ever needed: non-modal, bottom, radius 0, one sentence, **Accept** and **Decline** at equal size and weight, no pre-ticked boxes, no dark patterns. Privacy page in English, Hindi and Punjabi after legal review (verify). Collect only the enquiry fields and state the purpose beside the form.

## 13.18 Franchise pages

Page title and CTA: [Become a Franchise Partner]. Show the Phase 9 franchise lockup on partner pages: CLEAN TANK SERVICES, descriptor, "Authorised Service Provider", then partner name and city; Clean Tank stays primary. One standard: no operator colours, fonts or radii (s12).

| Figure (INFO-BANK §8) | Display |
|---|---|
| Investment | ₹3 to 8 lakh depending on model |
| Royalty | 3.5% per month as applicable |
| Indicative ROI and payback | 40%+ and 4 to 6 months, indicative and subject to actual performance |
| Office | About 150 sq ft or home-based |
| Agreement | 3 years |

**Disclaimer** (mandatory, verbatim): "All investment, revenue, ROI and payback figures are indicative business projections and are not guaranteed returns unless specifically stated in the executed franchise agreement. Actual results may vary depending on territory, customer acquisition, sales volume, pricing, operating expenses, manpower, local competition and other business conditions." Placed **directly below the figures table, in the same viewport**, 14 px minimum in Neutral 600 (5.87:1 on White) inside a bordered note (1 px `ct.color.state.info.border`, radius 4, Info icon), never collapsed, never a tooltip, never in a footer link. Figures sit in the ruled table (13.7) at 19.2 px, never as large stat tiles, never in the hero, sticky bar or WhatsApp card without the disclaimer. On the home-page emphasis band the figures are not shown: only the headline and [Become a Franchise Partner]. Never write guaranteed income, zero royalty, "small investment high profit". No coin or money imagery (s01).

## 13.19 Favicon, app icon, SEO and sharing

| Asset | Spec |
|---|---|
| `favicon.svg` | Symbol with square corners; includes a `prefers-color-scheme: dark` variant (s02) |
| `favicon.ico` | 16, 32, 48 px in one file |
| Apple touch icon | 180 x 180, opaque Primary 700 ground, White symbol in central 80% (s10) |
| PWA icons (later) | 192 and 512; separate **maskable** 512 with the symbol inside a circle of radius 40% of the width (platform safe zone, verify) |
| Theme colour | `#20334B` in light and dark (the header band); manifest `theme_color` `#20334B`, `background_color` `#FFFFFF` |
| Manifest (later) | name "Clean Tank Services", short_name "Clean Tank", `display: standalone`, `lang: en-IN` |
| Splash (if native, later) | Opaque White background, symbol only, 1,000 ms or less, no animation |
| Titles and descriptions | Title "Page | Clean Tank Services", 60 characters or fewer; description 155 or fewer (verify) |
| Structured data | Organization and LocalBusiness JSON-LD from INFO-BANK facts only; no rating, no ISO claim |
| Languages | `hreflang` en, hi, pa plus `x-default`; canonical per language |

**OG image (restyled), 1200 x 630 px.** A split record sheet, flat, no gradient, no shadow.

| Zone | Spec |
|---|---|
| Safe area | 80 px margin; keep all text inside the central 1200 x 600 band because X crops toward 2:1 |
| Text panel | Left 696 px (58%), solid Primary 700. Mono ref tag top-left `REF CT-WEB-OG` (Accent 400, 5.14:1, 24 px caps). Headline Anek 700 caps wdth 78, White, 64 px minimum, 3 lines maximum, 8 words or fewer: "When was your water tank last cleaned?" Below it, descriptor "Scientific & Mechanized Water Tank Cleaning" in Anek 400 28 px, Primary 100 (10.29:1) |
| Logo | White reverse horizontal lockup, lower-left of the panel, 240 px wide |
| Photo panel | Right 504 px (42%), documentary photo, subject in the panel (s08 1.91:1 crop), no text, no scrim; 1 px White rule between panels. If no photo yet: Stone `#F5F4F1` cell with the symbol in Primary 700 |
| Corners | Radius 0 (platforms apply their own rounding) |
| Delivery | PNG or JPEG, 300 KB or less (verify); `og:image:alt` set; headline also live in the page |

## 13.20 Performance budget

Measured at p75 on a mid-range Android phone on 4G (a 3 GB RAM test device is a design assumption, verify against real analytics). Owner: Gobind now, later the engineer who owns the build.

| Metric | Budget |
|---|---|
| LCP | 2.5 s or less (the hero image is the LCP element) |
| INP | 200 ms or less |
| CLS | 0.1 or less |
| Initial JavaScript | 150 KB gzip or less (web.dev example is under 170 KB) |
| Fonts | 150 KB WOFF2 critical path (Latin plus one Indic script per page; Anek variable with the wdth axis, plus Plex Mono 500/600 subset), self-hosted, `font-display: swap`, size-adjusted fallback (s04); mono subset size to confirm |
| Hero image | 120 KB or less per variant, not lazy-loaded |
| Page weight (excluding video) | 1 MB initial (design choice) |
| Third-party scripts | None at launch except analytics (cookieless) |

If a brand asset breaks the budget, the asset is reduced, not the budget relaxed. Save-Data: drop spot illustrations and non-essential photos (hero becomes a flat Primary 700 ground), never autoplay video. Check Lighthouse on each release.

## 13.21 Rules

```
RULE 13.1:     Show one filled button per viewport, labelled from the INFO-BANK list; accent is never a fill.
CLASS:         MUST
REASON:        Exact and Restrained: one clear next step, no pressure.
EXACT SPEC:    Primary = Primary 700 fill + White label (12.83:1). On a primary band or the hero photo: White fill + Primary 700 label (12.83:1) plus optional 1 px White outline button. Height 48, radius 4, Anek 700 caps +0.06em 14 px. Labels: [Get a Service Quote], [Explore Our Services], [Send an Enquiry], [Become a Franchise Partner]. No "Book NOW", "Submit". Sticky mobile bar is a separate layer. No `accent` entry in `ct.button.*`.
EXAMPLE:       Hero shows White-fill [Get a Service Quote] plus outline [See the process].
ANTI-EXAMPLE:  A coral button, or a navy and a white filled button side by side with a "Limited slots" badge.
TEST:          Count filled buttons at 360 and 1280 px (outside the sticky bar). More than 1? Reject. Any button fill using accent? Reject.
EXCEPTION:     Confirmation step may show Primary plus Outline. Approved by Gobind.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```
```
RULE 13.2:     Give every interactive element a visible focus ring and a 48 px target.
CLASS:         MUST
REASON:        Ordered and Exact: keyboard, switch and thumb users must find and hit every control.
EXACT SPEC:    Ring 2 px solid, 2 px offset, radius 4: Primary 700 on White (12.83:1) and Stone (11.67:1); White on primary bands and the hero photo (12.83:1 / 6.64:1); White on Primary 900 in dark (17.85:1). Targets 48 px (44 px minimum on compact desktop), 8 px apart; WCAG 2.5.8 minimum is 24 px.
EXAMPLE:       Tab through the form: every stop shows a ring; sticky bar buttons 48 px; hero CTAs show a white ring.
ANTI-EXAMPLE:  Global outline reset; navy ring invisible on the navy header.
TEST:          Tab through at 360 px: ring visible on every surface and not under the sticky layers; any target under 44 px?
EXCEPTION:     Links inside running text.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```
```
RULE 13.3:     Show form errors in the state error colours with an icon and text, never coral.
CLASS:         MUST
REASON:        Honest: coral is a marker and never signals error or urgency.
EXACT SPEC:    Text `#B01A45` (6.82:1 on White, 6.20:1 on Stone), 2 px border `#D0365F` (4.80:1), alert-circle 16 px, 14 px 500 message via aria-describedby, error summary on submit.
EXAMPLE:       "Enter a 10-digit mobile number." under Phone.
ANTI-EXAMPLE:  A coral border and a toast saying "Invalid!"
TEST:          In greyscale, is the error still clear from icon and words?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```
```
RULE 13.4:     Place the full franchise disclaimer directly next to every franchise figure.
CLASS:         MUST
REASON:        Documented and Honest: projections must never read as promises.
EXACT SPEC:    Verbatim INFO-BANK §8 text, 14 px minimum, Neutral 600 (5.87:1), bordered note directly below the figures table in the same viewport; figures at 19.2 px in a ruled table, never stat tiles or hero.
EXAMPLE:       Franchise page: five-row ruled table, then the note.
ANTI-EXAMPLE:  "From ₹3 lakh, 40%+ ROI" in a hero, disclaimer in the footer.
TEST:          At 360 and 1280 px, is the full disclaimer visible whenever a figure is?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```
```
RULE 13.5:     Use the exact ISO wording or none; show client logos only with written permission.
CLASS:         MUST
REASON:        Documented: every trust element must be provable.
EXACT SPEC:    "ISO 9001:2015 certified (Q2A-UK Certification Board), Certificate No. Q2A-2026-0401T118011, valid to 31 March 2029." Clientele section stays hidden until permission per client.
EXAMPLE:       Footer carries the full line at 14 px.
ANTI-EXAMPLE:  "Internationally accredited ISO company" beside an unpermitted client logo.
TEST:          Is the string character-identical, and is there a permission record per logo?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```
```
RULE 13.6:     Ask once, keep entries, and make email and WhatsApp cards readable without images.
CLASS:         MUST
REASON:        Exact and Ordered; WCAG 3.3.7; low-end phones and dark-mode clients.
EXACT SPEC:    Switching enquiry type keeps values; autocomplete tokens set. Email 600 px, 48 px button, alt on every image, plain-text part. WhatsApp card 1080 x 1080, 64 px margin, logo 124 px minimum, details repeated as text.
EXAMPLE:       Certificate email lists number and dates as text in the ruled detail table.
ANTI-EXAMPLE:  A JPEG with the due date only inside the picture; a form that clears on type change.
TEST:          Images off: can you read what, when and whom to call? Fill three fields, switch type: still filled?
EXCEPTION:     Security-sensitive portal fields.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```
```
RULE 13.7:     Build the website hero as a full-bleed photo on a flat 70% scrim, with caps headline and the two CTA styles.
CLASS:         MUST
REASON:        Restrained and Honest materials: a real photograph, no decoration, legible text.
EXACT SPEC:    Scrim `ct.color.primary.900` at `ct.opacity.scrim.photo` 0.70 (60% floor), no gradient or blur. H1 Anek 700 caps wdth 78, White. CTAs: On-dark primary (White fill, Primary 700 label) and 1 px White outline. Ref tag in White mono. Header H1 (64 / 56 px solid) or H2 (72 px, transparent to solid after 80 px), owner TBD. Real `<img>`, `fetchpriority="high"`, 120 KB per variant, three crops (s08).
EXAMPLE:       Left 58% holds ref tag, headline, line, CTAs; subject sits in the right 42%.
ANTI-EXAMPLE:  Bright photo with white text and no scrim; accent CTA; blurred glass header; autoplay video.
TEST:          Sample pixels behind each letter and the nav: 4.5:1 body, 3:1 large. Any accent fill or gradient in the hero? Reject.
EXCEPTION:     Header option is an owner decision; other values are fixed.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```
```
RULE 13.8:     Build surfaces from ruled cells and white or stone grounds; use primary bands only for header, footer, the 5-step band and one emphasis band.
CLASS:         MUST
REASON:        Ordered and Restrained: structure comes from rules, not shadow or colour blocks.
EXACT SPEC:    Radius 0 in cells and tables, 2 on grid containers, 4 on buttons, inputs, standalone cards, alerts, toasts. 1 px rules (`ct.color.border.rule`, or `border.strong` for frames). No `box-shadow`, no gradient, no radius above 4, no circles except literal round objects. Sections numbered `01` upward with a mono ref tag.
EXAMPLE:       Services as three ruled white cells on a Stone section.
ANTI-EXAMPLE:  Floating cards with soft shadows and 16 px corners; a full navy home page.
TEST:          Grep the CSS for `box-shadow`, `gradient`, `border-radius` above 4px. Count bands per page: more than header, footer, 5-step and one emphasis? Reject.
EXCEPTION:     The platform's own crops (WhatsApp avatar, maskable icon). Approved by Gobind.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

## 13.22 Do / Don't

| DO | DON'T |
|---|---|
| DO use one filled button per view, primary or white-on-dark | DON'T make any button coral, or stack filled buttons |
| DO write "Send an Enquiry" | DON'T write "Submit" or "Book NOW" |
| DO use ruled cells with 1 px rules | DON'T add shadows, glass or soft rounded cards |
| DO show errors in the error colours with icon and words | DON'T use coral for errors or urgency |
| DO put the disclaimer beside franchise figures | DON'T put ROI in the hero |
| DO put hero text on the 70% flat scrim | DON'T put text on a bare photo or a gradient wash |
| DO use white and stone grounds with a few primary bands | DON'T make whole pages navy |
| DO use skeleton blocks for loading | DON'T use bouncing spinners or logo animation |
| DO repeat card details as text | DON'T send image-only WhatsApp or email |
| DO print the exact ISO line | DON'T say "accredited" |

## 13.23 Accessibility & India notes

WCAG 2.2 AA is the floor. Contrast pairs are computed in this pillar; hero text on the scrim 6.64:1 worst case. Reflow at 320 px, 200% resize, no horizontal scroll (1.4.4, 1.4.10); line heights 1.5 / 1.65 / 1.60 survive text-spacing changes (1.4.12), and hero text boxes grow with content. Uppercase is applied by CSS, so assistive tech reads normal words; Latin condensed caps are limited to 8 words. **2.4.11 focus not obscured:** fixed or floating header and sticky bar never cover a focused control, scroll padding equals header height (88 px with the bar). **2.5.8:** 48 px targets, 8 px gaps. **3.2.6:** contact block and call buttons in the same place on every page. **3.3.7:** rule 13.6. **3.3.8:** future portal OTP can be pasted, no puzzle. **4.1.3:** confirmations use role status or alert. **2.2.1:** toasts stay 8 seconds and pause on hover and focus. **1.4.11:** control borders Neutral 500 reach 3.75:1 on White (3.41:1 on Stone); ruled-cell lines (Neutral 300) are decorative and never the only edge of a control. State is never colour alone. Forced-colors: borders become 2 px `CanvasText` (s12.13). Reduced motion removes the band draw and all fades; nothing flashes.

India notes. Set `lang` per page and phrase. Anek Devanagari and Gurmukhi are self-hosted and subset (s04), Noto fallback. **Plex Mono has no Indic glyphs:** Indic labels, ref-tag captions and button text use Anek; ref codes and digits stay Latin mono. No case change, no tracking, no condensed width on Indic. Hindi and Punjabi strings run 20 to 40% longer than English: no fixed-width buttons, no truncation, hero headlines may take 2 or 3 lines. Latin digits in every language with en-IN grouping (native review Open). Visitors often use a low-cost Android on 4G through WhatsApp links: keep pages light, Call and WhatsApp in thumb reach, no app or account needed to enquire. No online payment at launch; if added, UPI screens stay neutral with official logos unmodified. Test Hindi and Punjabi at 360 px and 200% zoom.

## 13.24 Day one vs later

| Day one (before the first public URL) | Later |
|---|---|
| Favicon set, 180 touch icon, OG image, theme colour | PWA manifest, maskable and adaptive icons, native splash |
| Header (H1 or H2), footer, sticky bar, language switcher | Dark mode with toggle, portal UI in regional languages |
| Buttons, links, inputs, validation, focus ring, alerts, ruled tables and cells | Customer and franchise portal, e-sticker page, notifications |
| Enquiry form (3 types), confirmation, 404, empty state | Local franchise pages (`/locations/<district>`) |
| Photo hero, 5-step band and stepper, frequency table, AMC, franchise page with disclaimer | Clientele (after permissions), reviews (after a real source) |
| Three transactional emails and signature | Dark-mode email variants, SMS reminders |
| WhatsApp profile, catalogue, 5 quick replies, 4 card types; GBP with real photos | WhatsApp API automation (verify), CI performance audit |

## 13.25 Checklist

- [ ] Expression level set per surface (13.2); brand moments 6 or fewer (13.3)
- [ ] Tokens are the single source (s12 names), no repeated hex; boundary with design system stated
- [ ] Website sections in INFO-BANK order, numbered without gaps, each with a mono ref tag; Clientele and origin story hidden
- [ ] Backgrounds white and stone; bands only header, footer, 5-step band, at most one emphasis band
- [ ] Hero: full-bleed photo, flat 70% scrim, caps headline, White-fill primary CTA and White outline CTA, three crops, 120 KB per variant, header option chosen and built
- [ ] One filled button per viewport; no accent button anywhere; CTA labels match INFO-BANK
- [ ] No `box-shadow`, gradient or radius above 4 in the CSS; cards are ruled cells; tables ruled with primary header
- [ ] State table complete for button, link, input, card; focus ring checked on White, Stone, band, hero photo and dark
- [ ] Targets 48 px with 8 px gaps; fixed or floating header and sticky bar do not obscure focus (2.4.11)
- [ ] Errors in state error colours plus icon plus text; coral used only as marker
- [ ] Enquiry fields per Phase 10; no redundant entry (3.3.7)
- [ ] Header logo at or above s02 minimums (200 px desktop default, 140 px small-use phone)
- [ ] Stepper: square nodes, mono 01 to 05, step 05 dashed with "* Where applicable"
- [ ] Franchise figures from INFO-BANK §8 with disclaimer beside; ISO line identical; no unpermitted logo
- [ ] Email 600 px with primary band header and mono footer tested in Gmail, Apple Mail, Outlook; WhatsApp cards 1080 x 1080 reviewed; OG image 1200 x 630 checked in a link preview; GBP checked
- [ ] LCP, INP, CLS, font budgets measured on a mid-range Android
- [ ] EN, Hindi, Punjabi tested at 360 px; every state screenshotted; keyboard-only pass done

## 13.26 Open items & evidence needed

1. Which INFO-BANK phone number is used for Call, WhatsApp, GBP and the sticker; hours for WhatsApp and GBP.
2. Enquiry response-time promise (none stated until the owner sets one).
3. Final logo route (s02); favicon, avatar, header and OG artwork wait for it.
4. Franchise form fields beyond Phase 10; "Time since last cleaning" option wording.
5. Written permission per client before the Clientele section goes live.
6. Evidence for Clean Tank Agent properties, CPWD DSR reference, "60% of diseases" statistic, any WHO, FDA or government approval: none appear in UI until on file.
7. Origin story location (Lucknow vs Kanpur) and early dates before About and Founder use them.
8. Legal review of privacy, consent and cookie text (Digital Personal Data Protection Act, 2023).
9. Platform specs to verify: WhatsApp and Google Business Profile image sizes, text limits and name policy; LinkedIn and X preview sizes; Gmail 102 KB clipping; Outlook rendering; PDF/A; maskable safe zone.
10. Real analytics to confirm the 3 GB RAM test device and the 120 KB hero and 150 KB JS budgets; whether a scrimmed hero can stay under 120 KB at 1600 px wide.
11. Native review of Hindi and Punjabi UI strings and digit preference.
12. Records system and token scheme for the e-sticker page; whether the QR is printed (s10).
13. Component library choice (shadcn or Radix) and footer legal-name line need owner confirmation.
14. **Owner decision:** header H1 fixed solid or H2 floating (s07). Token gaps to raise with s12: `ct.button.on-dark-outline.*`, a `[data-surface="photo"]` scope, and a hero scrim token name (s08 writes `ct.scrim.hero`; s12 defines `ct.opacity.scrim.photo`, used here).
15. Which section is the single selected emphasis band (default proposed: Franchise on the home page).
16. Reference code families `WEB`, `WA`, `EM`, `ENQ` and grammar to be registered in s19 (s06 open item 5).
17. Row height clash: s07 comfortable 56 px vs s10 table rows 48 px (56 mobile); this pillar follows s10.
18. Resolved: the Level Line draws in `moderate` 240 ms with `settle` easing (s06, s11, s12 agree).
