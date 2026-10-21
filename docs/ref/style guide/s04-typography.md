# Clean Tank Services: Style Guide
# 04. Typography

> This pillar governs every letter and number the brand sets: the typefaces, the scale, case, width, spacing, numerals, Indian number and date formats, bilingual setting, and how type is delivered on web, print and stickers. For Clean Tank it matters because the customer's trust is built from small readable facts (a capacity in litres, a cleaning date, a certificate number) in three scripts, set the same way by every franchise partner. Quiet Utility type is condensed capitals for headings, monospaced capitals for records, and plain sentence-case reading text.

Sheet CT-SG-04 | v2.0 | 08 Oct 2026 (Quiet Utility revision) | Tier legend: LOCK = central brand owner approves any change · GUARD = varies inside stated limits · FLEX = judgment within principles

Not covered here: wordmark lettering (s02), color values (s03), component specs (s13), print production (s15), copy voice (p7).

## 04.1 Principles / inheritance

Big idea: "Quiet precision. One standard, every tank." Authority lives in the visuals; humility stays in the words (voice, p7).

| v2 principle | Typographic behaviour |
|---|---|
| Exact | Condensed capital headings at line height 1.0 to 1.05, tabular figures, one fixed date and ID format on every record in every district. |
| Ordered | Fixed 1.2 scale, left-aligned ragged right, numbered sections and mono reference codes (REF, 02.1), no justified text. |
| Restrained | Two families only. Weights 400 to 700. No italics, no text gradients, no shadows or outlines on type. Capitals only for short headings, labels, refs, record values and button labels, never for reading text. |
| Documented | Records (sticker, certificate, job card) read like spec sheets: mono capital labels and values, serial or reference codes, a primary title band. |
| Honest materials | Width comes only from the font's real `wdth` axis, never from scaling or faux condensing. No synthetic bold or italic. Open-licence fonts any franchise partner can install in minutes. |
| Readable for every customer | 16 px body minimum on web, Indic scripts given extra leading and never condensed, tracked or capitalised. |

## 04.2 Candidate evaluation

Checked against the google/fonts files (fontTools, Oct 2026; Anek axes re-verified for v2) unless marked (verify).

| Criterion | **Anek** (Latin + Devanagari + Gurmukhi) | Mukta + Mukta Mahee | Noto Sans + Devanagari + Gurmukhi | IBM Plex Sans + Devanagari + Gurmukhi partner |
|---|---|---|---|---|
| Scripts | Latin, Devanagari, Gurmukhi, designed together by Ek Type; each file also carries Latin | Mukta: Latin + Devanagari. Mukta Mahee: Gurmukhi + Latin | All three, separate families | Latin + Devanagari only. No Plex Gurmukhi found on Google Fonts (verify) |
| Weights | 100 to 800 | 200 to 800 (7 static) | 100 to 900 | Sans 100 to 700 |
| Variable font | Yes, all three: `wght` 100 to 800, `wdth` 75 to 125 (default 100) | No, static only | Yes, all three (`wdth` 62.5 to 100) | Latin yes; Devanagari no |
| Condensed heading cut | Yes, a true cut from the same family via `wdth` (Latin, Devanagari and Gurmukhi all have the axis) | None | Narrow range only | Separate Condensed family, Latin only |
| Tabular figures | Yes: `tnum` in all three files; ₹ present | Yes: `tnum`; ₹ present | Latin only | Equal-width digits by default |
| x-height (em) | Latin 0.489; Devanagari 0.489; Gurmukhi file reports 0.247 (verify visually) | 0.468 | 0.536 | 0.516 |
| Fit for Quiet Utility | Neutral modern grotesk with a technical edge; one superfamily gives body and condensed headings. Best match | Rounded terminals, softer than Exact needs | Neutral to the point of generic. Safe fallback | Engineered and strong on data; used here only as IBM Plex Mono |
| Licence | SIL OFL 1.1 | SIL OFL 1.1 | SIL OFL 1.1 | SIL OFL 1.1 |
| Verdict | **Primary** | Rejected: static files | **Designated fallback** per script | Rejected: no matching Gurmukhi (Mono kept for records) |

Hind was not shortlisted (Gurmukhi coverage not confirmed, verify). IBM Plex Mono has no Devanagari or Gurmukhi glyphs: Indic labels therefore use Anek (04.7).

## 04.3 Roles, families and licences (LOCK)

| Role | Family | Weights / width | Licence | Files |
|---|---|---|---|---|
| Headings: display, h1 to h3, record titles, key figures | **Anek Latin**, condensed | 700, `wdth` 78 | SIL OFL 1.1 | Web: self-hosted variable WOFF2 subset with `wght` + `wdth`. Print: static TTF 700 instanced at wdth 78 (verify OFL reserved-name terms before renaming) |
| Body, h4, small, caption, button labels, UI | **Anek Latin** + **Anek Devanagari** + **Anek Gurmukhi**, normal width | 400, 500, 600, 700; `wdth` 100 | SIL OFL 1.1 | As above; static TTF 400/500/600/700 at wdth 100 |
| Indic headings | **Anek Devanagari**, **Anek Gurmukhi**, normal width | 700, `wdth` 100, no case | SIL OFL 1.1 | Weight-only web files (no `wdth` requested) |
| Labels, ref codes, record values, IDs | **IBM Plex Mono** | 500, 600 | SIL OFL 1.1 | WOFF2 web, TTF desktop |
| Secondary for long-form or print | None. Anek 400 at 10 to 10.5 pt covers brochures and tenders | n/a | n/a | n/a |
| Accent / display | None at launch | n/a | n/a | n/a |

- Two widths only, set through tokens: `ct.font.width.condensed` = 78 (headings) and `ct.font.width.normal` = 100 (everything else). No other `wdth` value, no expanded cut, no scaleX tricks. 78 sits inside Anek's 75 to 125 range, just off the minimum so strokes do not touch at 700 (confirm visually, open item 3).
- Indic fonts do have the `wdth` axis (75 to 125, checked), but it is never used: Devanagari and Gurmukhi stay at 100 so matras and conjuncts keep their shape.
- The variable default instance is 500, so always declare `font-weight` and `font-stretch` explicitly.
- No synthetic bold or italic. Anek has no italic: emphasis is weight 600 only. Indic scripts have no italic at all.
- Anek's Latin file has no `→` or `✓`; use icons (s10). It does have ₹, −, ×, ², ³, °, ·, •.
- Why a mono for records: Plex Mono digits are all 600/1000 em wide and its `zero` feature gives a slashed zero, so 0/O and 1/l/I cannot be confused in a GSTIN or certificate number. Inline mono is set at 95% of the surrounding size.

## 04.4 Type scale

Base 16 px at 360 px, 18 px at 1280 px. Ratio 1.2 at both ends. Fluid between 360 and 1280 px, `rem`-based so browser zoom works to 200%. Colour: headings Primary 700 `#20334B`, body Neutral 900 `#25282A`, text on primary bands or photo scrim Neutral 0 `#FFFFFF`. Sizes are unchanged from v1; only width, weight, case and tracking changed for headings.

| Token (ct.font.size.*) | Role | 360 px | 1280 px | clamp() | Face, weight | Tracking | Case | Max width | Colour |
|---|---|---|---|---|---|---|---|---|---|
| display | Hero, website only | 39.81 | 53.75 | `clamp(2.488rem, 2.077rem + 1.515vw, 3.359rem)` | Anek Latin wdth 78, 700 | +0.01em | UPPERCASE | 8 words, about 16ch | Primary 700, or white on photo |
| h1 | Page title | 33.18 | 37.32 | `clamp(2.074rem, 1.972rem + 0.451vw, 2.333rem)` | wdth 78, 700 | +0.01em | UPPERCASE | 8 words, about 22ch | Primary 700 |
| h2 | Section | 27.65 | 31.10 | `clamp(1.728rem, 1.643rem + 0.376vw, 1.944rem)` | wdth 78, 700 | +0.01em | UPPERCASE | 8 words, about 26ch | Primary 700 |
| h3 | Sub-section | 23.04 | 25.92 | `clamp(1.440rem, 1.370rem + 0.313vw, 1.620rem)` | wdth 78, 700 | +0.01em | UPPERCASE | 8 words, about 32ch | Primary 700 |
| record-title | Certificate, sticker, job card title | h2 size on web; 22 pt print | | same as h2 | wdth 78, 700 | +0.01em | UPPERCASE | 5 words | White on primary band |
| h4 | Card title, run-in subhead | 19.20 | 21.60 | `clamp(1.200rem, 1.141rem + 0.261vw, 1.350rem)` | wdth 100, 600 | 0 | Sentence | 40ch | Primary 700 |
| body-l | Lead paragraph | 19.20 | 21.60 | same as h4 | wdth 100, 400 | 0 | Sentence | 60ch | Neutral 900 |
| body | Default text | 16 | 18 | `clamp(1rem, 0.951rem + 0.217vw, 1.125rem)` | wdth 100, 400 | 0 | Sentence | 45 to 75ch (target 66) | Neutral 900 |
| small | Helper, table text | 14 | 15 | `clamp(0.875rem, 0.851rem + 0.109vw, 0.938rem)` | wdth 100, 400 | +0.01em | Sentence | 60ch | Neutral 900 |
| caption | Photo credit, fine print | 12 | 13 | `clamp(0.75rem, 0.726rem + 0.109vw, 0.813rem)` | wdth 100, 400 | +0.01em | Sentence | 60ch | Neutral 900 |
| label | Field names, tags, table headers | 12 | 13 | same as caption | Plex Mono, 500 | +0.08em | UPPERCASE, Latin only | 4 words | Primary 700 or Neutral 900 |
| ref | Reference codes, section numbers, index tags | 11 | 12 | `clamp(0.6875rem, 0.663rem + 0.109vw, 0.75rem)` | Plex Mono, 500 | +0.10em | UPPERCASE | one line | Neutral 900; Accent 700 `#A33C1F` allowed |
| value | Record values: dates, IDs, capacities on records | 12 | 13 | same as caption | Plex Mono, 600 | +0.08em | UPPERCASE | no wrap | Neutral 900 |
| button | Button and link-button labels | 14 | 14 | `0.875rem` | Anek wdth 100, 700 | +0.06em | UPPERCASE, Latin only | 3 words | White on primary; primary on white |
| data | Numbers in tables, forms | 16 | 18 | same as body | Anek wdth 100, 500, `tnum` | 0 | n/a | n/a | Neutral 900 |
| data-l | Key figure (capacity, date), one per view | 27.65 | 31.10 | same as h2 | wdth 78, 700, `tnum` | +0.01em | UPPERCASE (months) | n/a | Primary 700; Accent 700 allowed for the one key figure |

Decisions and floors:
- **h4 stays sentence case, 600, normal width.** It carries phrases and card titles that are read, not scanned, and a fourth caps level would blur hierarchy. Caps stop at h3.
- Mono labels, refs and values run 11 to 13 px. 11 px is allowed only for `ref`; nothing else on web goes below 12 px. Display jumps to step 6 on desktop on purpose, for the hero only.
- Condensed caps at 700 read larger than sentence case at the same px, so sizes are not increased.
- Max width for caps headings is counted in words first (8 maximum); the `ch` figures are starting points to verify on real strings.

Line height and script (unitless; set via `:lang()`):

| Role | Latin | Devanagari (hi) | Gurmukhi (pa) |
|---|---|---|---|
| display | 1.00 | 1.30 | 1.25 |
| h1 | 1.00 | 1.35 | 1.30 |
| h2 | 1.02 | 1.40 | 1.35 |
| h3, record-title | 1.05 | 1.45 | 1.40 |
| h4 | 1.30 | 1.50 | 1.45 |
| body-l, body | 1.50 | 1.65 | 1.60 |
| small | 1.45 | 1.60 | 1.55 |
| caption | 1.40 | 1.55 | 1.50 |
| label, ref, value | 1.30 | 1.50 | 1.45 (Anek Indic labels) |
| button | 1.0 | 1.4 | 1.4 |
| data, data-l | 1.40 / 1.05 | n/a | n/a |

Latin caps headings have almost no descenders, so 1.0 to 1.05 is safe; Indic keeps its own taller values because matras clip otherwise. Test every real heading at 360 px with native strings. Body 1.5 or more satisfies WCAG 1.4.12.

Text rules: left-aligned always, ragged right, never justified. Paragraph spacing 1em. `hyphens: manual`. Headings `text-wrap: balance`, body `text-wrap: pretty` (progressive enhancement, verify). Indic measure 35 to 60 characters. No letter-spacing on Devanagari or Gurmukhi, ever.

Quotes and marks: curly quotes “ ” ‘ ’; no em dashes in brand copy; ranges written "to" ("₹3 to 8 lakh"); en dash only inside compact data tables; no single-glyph ellipsis in headlines; bullets are CSS list markers. Hindi and Punjabi sentences end with the danda "।" (confirm with a native reviewer).

## 04.5 Case and width rules

| Where | Rule |
|---|---|
| display, h1, h2, h3, record titles, data-l months | UPPERCASE, Anek Latin wdth 78, 700, +0.01em, line height 1.0 to 1.05, 8 words maximum. Write the source text in sentence case and apply `text-transform: uppercase` in CSS |
| h4, body, small, caption | Sentence case, wdth 100, never caps |
| label, ref, value | Plex Mono UPPERCASE, +0.08 to +0.10em, 11 to 13 px |
| Button labels | Anek 700 UPPERCASE, wdth 100, +0.06em, 14 px |
| Never capitalised | Paragraphs, lists, captions, quotes, URLs, e-mail addresses, any Hindi or Punjabi text, the descriptor line |
| Indic headings | Anek Devanagari or Gurmukhi 700, wdth 100, no case, no tracking, Indic line heights |
| Wordmark CLEAN TANK SERVICES | Caps is part of the logo artwork (s02). Do not retype it live except in the interim lockup below |
| In sentences | "Clean Tank Services" in title case |
| Descriptor, tagline | "Scientific & Mechanized Water Tank Cleaning" and "Clean Tank, Healthy Life" as written, title case, in body or lockup; if a heading style turns the tagline to caps in a banner, no other change |

Interim text-only lockup (email signatures, plain documents only; s02 overrides): CLEAN TANK SERVICES in Anek 700, caps, wdth 100, +0.06em, Primary 700; descriptor beneath in Anek 500 at 0.45 times that size.

## 04.6 Numerals, numbers, units, dates (LOCK)

| Item | Rule | Example |
|---|---|---|
| Digits | Western Arabic 0 to 9 in all three languages | 20,00,000 L in a Hindi sentence |
| Figure style | Lining by default (verify). Tabular (`tabular-nums lining-nums`) for capacities, dates, tables, forms, records. Proportional is fine in prose | table column aligns |
| Slashed zero | `font-feature-settings: "zero"` on all IDs and code strings (Anek and Plex Mono both have `zero`) | Q2A-2026-0401T118011 |
| Grouping | Indian: `new Intl.NumberFormat("en-IN")` | 20,000 · 2,00,000 · 20,00,000 |
| Capacity words | Digits on records; "lakh" and "crore" allowed in prose | "up to 20 lakh litres" |
| Units | One non-breaking space (U+00A0) between number and unit. U+202F is absent from Anek. `L`, `bar`, `kg`, `m³` | 250 bar, 20,000 L |
| ₹ | Before the number, no space, never "Rs" in UI | ₹3 to 8 lakh |
| Negatives, percent | True minus U+2212; no space before % | −5 · 3.5% |
| Phone | +91, then 5 + 5 grouping, only numbers in INFO-BANK §1 | +91 94535 17514 |
| GSTIN, certificate no. | Mono, no spaces, `white-space: nowrap` | GSTIN 09LFS1473F5ZU |
| Date in prose, invoices, UI | DD Mon YYYY, two-digit day, English three-letter month, no comma | 03 Oct 2026 |
| Date on records (sticker, certificate, job card) | Same source text, shown in capitals by CSS in Plex Mono (`value`) or Anek wdth 78 (`data-l`) | 03 OCT 2026 |
| Date in Hindi or Punjabi running prose | Month may be written in script | 03 अक्टूबर 2026 |
| Never | 03/10/2026, two-digit years, "Oct 3rd" | |
| Filenames and data | ISO 2026-10-03 | |
| Time | 12-hour, lower-case am/pm in prose; capitals only on records | 10:30 am |

Cleaning frequency is never printed as one flat number. A sticker date is a recommended next date set for the organisation (healthcare about 3 months, schools about 6), not a house default.

## 04.7 Scripts, bilingual and Hinglish setting

| Script | Font | Heading setting | Line height | Tracking |
|---|---|---|---|---|
| Latin | Anek Latin | Headings wdth 78, 700, caps; body wdth 100 | per 04.4 | per role |
| Devanagari | Anek Devanagari | 700, wdth 100, no case. Same px as the Latin line | +0.15 to +0.20 over Latin | 0 |
| Gurmukhi | Anek Gurmukhi | 700, wdth 100, no case. Same px as the Latin line | +0.10 to +0.15 over Latin | 0 |

Rules:
- English first, then Hindi or Punjabi. In Punjab-state material the local language MAY lead (GUARD, brand owner approves the template).
- Pairs sit at the same size and weight. A heading pair is a condensed caps Latin line over a normal-width Indic line, both Primary 700 at the same px. The Indic line will look wider; do not shrink or condense it to match.
- Labels in Indic: Plex Mono has no Indic glyphs, so the Indic label sits beside or under the mono label in Anek Devanagari or Gurmukhi 600, same size, no caps, no tracking, no mono.
- Buttons in Indic: Anek 700, 14 px minimum, no caps, no tracking.
- Side-by-side: two equal columns with a 24 px gutter (A4: 8 mm), English left. On mobile, stack English above the Indic line with 8 px between.
- Hinglish and mixed lines such as "Tank साफ करवाना है": keep each word in its own script, wrap the Indic part in `lang="hi"` or `lang="pa"` so it drops caps, tracking and condensing, and set the line with the single `--ct-font-family-sans` stack. In a caps heading only the Latin words become caps. Line height takes the script with the larger value.
- Never fake bold or italic, never letter-space, never apply caps, never stretch or condense an Indic line.
- Keep matras and nuktas intact: no `overflow: hidden` with tight line height on Indic text.

## 04.8 Web delivery (GUARD)

```css
:root {
  --ct-font-family-sans: "Anek Latin", "Anek Devanagari", "Anek Gurmukhi",
    "Segoe UI", "Noto Sans", "Noto Sans Devanagari", "Noto Sans Gurmukhi",
    "Nirmala UI", Roboto, system-ui, sans-serif;
  --ct-font-family-heading: "Anek Latin", "Anek Devanagari", "Anek Gurmukhi",
    "Roboto Condensed", "Arial Narrow", "Noto Sans Devanagari", "Noto Sans Gurmukhi",
    "Nirmala UI", sans-serif;
  --ct-font-family-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular,
    Menlo, Consolas, monospace;
  --ct-font-width-condensed: 78%;
  --ct-font-width-normal: 100%;
  --ct-font-case-heading: uppercase;
  --ct-font-case-label: uppercase;
  --ct-font-case-button: uppercase;
  --ct-font-tracking-heading: 0.01em;
  --ct-font-tracking-button: 0.06em;
  --ct-font-tracking-label: 0.08em;
  --ct-font-tracking-ref: 0.1em;
  --ct-font-size-body: clamp(1rem, 0.951rem + 0.217vw, 1.125rem);
  --ct-font-line-height-body: 1.5;
}
html:lang(hi) { --ct-font-line-height-body: 1.65; }
html:lang(pa) { --ct-font-line-height-body: 1.6; }
body { font: 400 var(--ct-font-size-body)/var(--ct-font-line-height-body) var(--ct-font-family-sans);
  font-stretch: var(--ct-font-width-normal); font-variant-numeric: lining-nums; color: var(--ct-color-neutral-900); }

h1, h2, h3, .ct-display, .ct-record-title {
  font-family: var(--ct-font-family-heading); font-weight: 700;
  font-stretch: var(--ct-font-width-condensed);
  text-transform: var(--ct-font-case-heading);
  letter-spacing: var(--ct-font-tracking-heading);
  line-height: 1.05; text-wrap: balance; color: var(--ct-color-primary-700); }
.ct-display, h1 { line-height: 1; }
h4 { font-weight: 600; font-stretch: var(--ct-font-width-normal); text-transform: none; letter-spacing: 0; line-height: 1.3; }

/* Indic text drops caps, tracking, condensing and gets Indic leading */
:lang(hi), :lang(pa) { text-transform: none; letter-spacing: 0; font-stretch: var(--ct-font-width-normal); }
:is(h1,h2,h3,.ct-display):lang(hi) { line-height: 1.35; }
:is(h1,h2,h3,.ct-display):lang(pa) { line-height: 1.3; }

.ct-label, .ct-ref, .ct-value { font-family: var(--ct-font-family-mono); text-transform: uppercase; font-feature-settings: "zero"; }
.ct-label { font-size: 0.75rem; font-weight: 500; letter-spacing: var(--ct-font-tracking-label); }
.ct-ref   { font-size: 0.6875rem; font-weight: 500; letter-spacing: var(--ct-font-tracking-ref); }
.ct-value { font-size: 0.75rem; font-weight: 600; letter-spacing: var(--ct-font-tracking-label); white-space: nowrap; }
.ct-button { font: 700 0.875rem/1 var(--ct-font-family-sans); font-stretch: 100%;
  text-transform: var(--ct-font-case-button); letter-spacing: var(--ct-font-tracking-button); }
.ct-num { font-variant-numeric: tabular-nums lining-nums; font-weight: 500; }
```

Next.js (`next/font/google`; confirm export names and that the generated CSS carries `font-stretch: 75% 125%`):

```ts
const anekLatin = Anek_Latin({ subsets: ["latin", "latin-ext"], axes: ["wdth"], display: "swap", variable: "--font-anek-latin" });
const anekDevanagari = Anek_Devanagari({ subsets: ["devanagari"], display: "swap", variable: "--font-anek-deva" }); // no wdth axis requested
const anekGurmukhi = Anek_Gurmukhi({ subsets: ["gurmukhi"], display: "swap", variable: "--font-anek-guru" });   // no wdth axis requested
const plexMono = IBM_Plex_Mono({ weight: ["500", "600"], subsets: ["latin", "latin-ext"], display: "optional", variable: "--font-plex-mono" });
```

| Item | Spec |
|---|---|
| Hosting | Self-hosted WOFF2; no third-party font request at runtime (`next/font` self-hosts at build) |
| Axes | Anek Latin: `wght` + `wdth` (wdth used at 78 and 100 only). Devanagari and Gurmukhi: weight only, `wdth` not requested, so Indic cannot be condensed even by mistake. Plex Mono: static 500 and 600 |
| Subsets | Latin: `latin` + `latin-ext` (₹ U+20B9 sits in latin-ext, verify in served CSS). Devanagari: `devanagari`. Gurmukhi: `gurmukhi` |
| Size control | The `wdth` axis enlarges the Latin file. If the 150 KB cap is missed, instance two files with fontTools: body (wdth 100, wght 400 to 600) and heading (wdth 78, wght 700), declared under the same family name with different `font-stretch` descriptors |
| Source sizes (raw TTF) | Latin 405 KB, Devanagari 2.19 MB, Gurmukhi 357 KB: never ship raw; subset first |
| `unicode-range` | One CSS family, three faces, split by script |
| Preload | Latin variable file only. Devanagari and Gurmukhi only on pages whose `lang` is hi or pa. Plex Mono not preloaded |
| `font-display` | `swap` for Anek; `optional` for Plex Mono. Never `block` |
| Fallback face | Body: size-adjusted local Arial, `size-adjust: 94%` (tune by visual diff, verify). Headings: local Roboto Condensed or Arial Narrow with caps and tracking kept, so the layout holds if the web font fails |
| Payload cap | Target 150 KB WOFF2 critical path (Latin + one Indic script per page); measure in Lighthouse on mid-range Android (verify) |
| Per-script fallback | Latin: Segoe UI, Roboto, Arial. Devanagari: Noto Sans Devanagari, Nirmala UI, Mangal. Gurmukhi: Noto Sans Gurmukhi, Nirmala UI, Raavi |

## 04.9 Print, sticker and signage sizes

Print minimum: Latin 7 pt, Indic 8 pt, weight 400 or heavier (mono 500 or heavier), Neutral 900 or Primary 700 on white or stone, or white on a solid primary band. Left-aligned, never justified. Headings in print use the same condensed caps spec (wdth 78, 700, +0.01em, line height 1.0 to 1.05).

| Artifact | Heading / title | Body | Labels, refs, values | Notes |
|---|---|---|---|---|
| Cleaning Certificate (A4) | Record title 22 pt, caps, white on primary band | 10.5 pt, leading 15.5 pt (Indic 17.5) | Label Plex Mono 500, 8 pt; value 600, 9.5 pt; ref 7.5 pt | Fine print 8 pt (ISO line, disclaimer). Certificate no. and GSTIN mono 9.5 pt |
| Cleaning Date Sticker | Key date 20 pt condensed 700 caps `tnum` (cap height about 5 mm; read from about 1 m, verify on first print) | Phone mono 600, 9 pt | Label mono 500, 7 pt (Latin); Indic labels Anek 600, 8 pt | Corners about 1 to 2 mm radius; size, stock and adhesive owned by s14/s16 (open) |
| Letterhead (A4) | n/a | 10 pt, leading 14.5 pt | GSTIN and address footer: label + value mono 8 pt | Left-aligned, 25 mm margins (s07 may refine) |
| Franchise brochure (A4 or A5) | H1 28 pt, H2 20 pt, caps | 9.5 to 10 pt, leading 14 pt | Ref and section numbers mono 7.5 pt | Financial disclaimer 8 pt beside every figure, never below |
| Tender / institutional doc | H1 20 pt, H2 14 pt, caps | 10.5 pt | Ref codes mono 8 pt | Plain, no decorative type |
| Signage, van | Headline condensed 700 caps, 4 words maximum; cap height about 25 mm per 3 m of reading distance (rule of thumb, verify with signmaker) | n/a | Phone mono 600 | Condensed letters lose weight at distance: signmaker proof required |

Indian-script stickers and certificates always print at the stated Indic minimum, even if the English line could go smaller.

## 04.10 Hierarchy on real artifacts

**Website hero, 1280 px (full-bleed photo, headline and CTAs on top; header fixed or floating, owner TBD)**

| Zone | Content | Style |
|---|---|---|
| Ref tag | 01 / REF illustrative index | `ref` 12 px, white, +0.10em |
| Headline | WHEN WAS YOUR WATER TANK LAST CLEANED? (source text in sentence case) | display, wdth 78, 700, 53.75 px, line 1.0, +0.01em, white, 7 words, max about 16ch |
| Lead | "A five-step documented process, a dated sticker on your tank and a certificate for your records." | body-l 21.6 px, white, Anek 400 |
| CTAs | TALK TO A SPECIALIST (primary on photo: white fill, primary label), a second 1 px white outline button | button 14 px, 700, +0.06em, height 44 to 48, radius 4 |
| Trust line | small 15 px, white | sentence case |

Text sits on the scrim set in s08; contrast of white text against the worst photo pixel under the scrim must reach 4.5:1 for body-l and 3:1 for display. Hindi and Punjabi variants: Anek Devanagari or Gurmukhi 700, wdth 100, no caps, same px, line height 1.30 or 1.25.

**Cleaning Date Sticker** (specimen; wording illustrative, physical size open)

| Zone | Content | Style |
|---|---|---|
| Top | Logo | s02 |
| Label | CLEANED ON · सफ़ाई की तारीख़ · ਸਫ਼ਾਈ ਦੀ ਮਿਤੀ | `label` mono 500 caps, 7 pt; Indic Anek 600, 8 pt, no caps |
| Key figure | 03 OCT 2026 | `data-l` 20 pt, condensed 700 caps, tabular, Primary 700 (accent 700 allowed, this is the one key figure) |
| Label | NEXT CLEANING DUE (RECOMMENDED) | `label` |
| Value | [DD MON YYYY, set per organisation] | `value` mono 600, 9 pt |
| Ref | [serial or reference code, format to be set by owner] | `ref` mono 500, 7 pt |
| Footer | +91 94535 17514 in mono; www.cleantankservices.com in Anek 400 sentence case | small, Neutral 900 |

**Cleaning Certificate:** primary title band with record title "CLEANING CERTIFICATE" (22 pt, wdth 78, 700, white), Hindi "सफ़ाई प्रमाणपत्र" and Punjabi "ਸਫ਼ਾਈ ਸਰਟੀਫਿਕੇਟ" beneath at the same size, Anek 700, white, no caps (native review pending). Below, a ruled 1 px field grid: label (mono 500 caps, Primary 700) over value (mono 600 caps, Neutral 900); reference code top right (`ref`); the five process steps as a numbered list at 10.5 pt with mono numerals 01 to 05; ISO line at 8 pt exactly as: "ISO 9001:2015 certified (Q2A-UK Certification Board), Certificate No. Q2A-2026-0401T118011, valid to 31 March 2029." in sentence case, not capitalised; any "safe" or water-quality line carries the qualifier that water quality also depends on source water, plumbing, tank condition and later maintenance, outside our service.

**WhatsApp card (image):** 1080 px canvas so text reads at about 300 px display width (verify). Heading condensed caps 72 px, 700, line 1.0, white on a primary band or Primary 700 on stone; body 48 px 400; label and ref mono 40 px minimum (about 11 px on screen); contacts mono 600, 44 px. English then Hindi or Punjabi stacked, same px, Indic uncapitalised.

## 04.11 Rules

```
RULE 04.1:     Set all brand text in Anek (Latin, Devanagari, Gurmukhi); use IBM Plex Mono only for labels, refs, record values and IDs.
CLASS:         MUST
REASON:        Exact and Documented: one superfamily keeps three scripts harmonised and mono marks the record layer; the open licence lets every franchise partner install it.
EXACT SPEC:    ct.font.family.sans = Anek Latin / Devanagari / Gurmukhi; ct.font.family.mono = IBM Plex Mono 500 and 600. SIL OFL 1.1.
EXAMPLE:       Hindi certificate with Latin month and digits rendered in Anek, field values in Plex Mono.
ANTI-EXAMPLE:  Hindi text falling back to Arial or Mangal; Plex Mono used for a paragraph.
TEST:          Does every glyph render from an Anek or Plex Mono file (DevTools Rendered Fonts)?
EXCEPTION:     Email and plain Office fallback (Arial, Nirmala UI) flagged non-conforming; owner approves.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 04.2:     Use only Anek weights 400, 500, 600, 700 and Plex Mono 500, 600; use only widths 78 and 100; never fake bold, italic or width.
CLASS:         MUST
REASON:        Restrained and Honest materials: only real axis instances, no italics in any script.
EXACT SPEC:    400 body; 500 UI and data; 600 h4 and emphasis; 700 headings and buttons. ct.font.width.condensed = 78 (headings), ct.font.width.normal = 100 (all else).
EXAMPLE:       Emphasis "next cleaning due" in 600 at wdth 100.
ANTI-EXAMPLE:  transform: scaleX(0.8) on a heading; font-style: italic on a Hindi quote.
TEST:          Computed weight in the allowed set, font-style normal, font-stretch 78% or 100%?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 04.3:     Body text is at least 16 px on web and 10 pt in print; nothing below 12 px on web except ref at 11 px; print minimum 7 pt Latin, 8 pt Indic.
CLASS:         MUST
REASON:        Readable for families and institutions on low-end Android and print.
EXACT SPEC:    body 16 to 18 px; caption and label 12 to 13 px; ref 11 to 12 px; print minima per 04.9.
EXAMPLE:       Certificate ISO line at 8 pt.
ANTI-EXAMPLE:  6 pt Hindi disclaimer on a sticker; 10 px mono tag.
TEST:          Measure the smallest text of each role; at or above its minimum?
EXCEPTION:     Sticker label may go to 7 pt Latin only; Indic stays 8 pt. Brand owner approves.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 04.4:     Set display, h1 to h3, record titles and key-figure months in Anek Latin condensed, 700, UPPERCASE, +0.01em, line height 1.0 to 1.05, 8 words maximum.
CLASS:         MUST
REASON:        Exact and Ordered: a compact, authoritative heading voice with a quiet, disciplined rhythm.
EXACT SPEC:    font-stretch 78%; font-weight 700; text-transform uppercase; letter-spacing 0.01em; line height 1.0 (display, h1), 1.02 (h2), 1.05 (h3). h4 stays sentence case, 600, wdth 100.
EXAMPLE:       "WHEN WAS YOUR WATER TANK LAST CLEANED?" at 53.75 px, 7 words.
ANTI-EXAMPLE:  A 14-word caps heading wrapping to four lines; h4 in caps.
TEST:          Computed stretch 78%, caps, weight 700, word count 8 or fewer, no overlap between lines?
EXCEPTION:     Signage may use 4 words maximum; a longer legal title may be set in sentence case h4 style. Owner approves.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 04.5:     Never set paragraphs, lists, captions, quotes, URLs, e-mail addresses or any Hindi or Punjabi text in capitals, and never track or condense Indic text.
CLASS:         NEVER
REASON:        Readability and Restrained; Indic has no caps and its glyphs break when tracked or condensed.
EXACT SPEC:    Caps only for the roles in 04.5. :lang(hi), :lang(pa) reset text-transform none, letter-spacing 0, font-stretch 100%.
EXAMPLE:       Hindi heading in Anek Devanagari 700, normal width, same px as the English line.
ANTI-EXAMPLE:  "BOOK NOW BEFORE IT'S TOO LATE" in caps; a caps paragraph; WWW.CLEANTANKSERVICES.COM in caps.
TEST:          Any caps beyond headings, labels, refs, values and buttons? Any Indic text with tracking or width below 100?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 04.6:     Set labels, reference codes and record values in Plex Mono capitals, and button labels in Anek 700 capitals.
CLASS:         MUST
REASON:        Documented: records read as spec sheets; fields are checked at a glance.
EXACT SPEC:    label 500, +0.08em, 12 to 13 px; ref 500, +0.10em, 11 to 12 px; value 600, +0.08em, 12 to 13 px; all `zero` on. Button: Anek 700, wdth 100, +0.06em, 14 px, height 44 to 48, radius 4. Latin only; Indic labels and buttons use Anek, no caps.
EXAMPLE:       "NEXT CLEANING DUE" label above a mono value; "TALK TO A SPECIALIST" button.
ANTI-EXAMPLE:  Mono label with +0.02em tracking; a mono sentence; accent-filled button.
TEST:          Role, tracking and size inside the stated ranges; value never wraps?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 04.7:     Set numbers that must align or be verified in tabular lining figures.
CLASS:         MUST
REASON:        Exact: capacities, dates and IDs are checked at a glance.
EXACT SPEC:    font-variant-numeric: tabular-nums lining-nums; data 500; IDs and values: Plex Mono + "zero".
EXAMPLE:       Capacity column 20,000 L / 20,00,000 L right-aligned and level.
ANTI-EXAMPLE:  Proportional digits so a column of litres wobbles.
TEST:          Do digits in every row occupy the same width?
EXCEPTION:     Running prose may use proportional figures.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 04.8:     Format numbers Indian style and write dates as DD Mon YYYY (shown as DD MON YYYY on records).
CLASS:         MUST
REASON:        Indian readers parse lakh and crore grouping; one date format prevents sticker ambiguity.
EXACT SPEC:    en-IN grouping, NBSP before unit, ₹ prefix with no space, date source text 03 Oct 2026, never 03/10/2026.
EXAMPLE:       "Up to 20,00,000 L"; record shows 03 OCT 2026.
ANTI-EXAMPLE:  "2,000,000 litres", "Rs 3 lakh", "3/10/26".
TEST:          Grouping 3-2-2? Date has named month and four-digit year?
EXCEPTION:     System filenames use ISO 2026-10-03.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 04.9:     Give Hindi and Punjabi equal size and weight to English, at normal width, with the Indic line heights of 04.4.
CLASS:         MUST
REASON:        Respect for every customer; Indic marks clip with Latin leading or condensed width.
EXACT SPEC:    Headings Anek Devanagari/Gurmukhi 700, wdth 100, no case; Devanagari body 1.65, Gurmukhi 1.60; letter-spacing 0.
EXAMPLE:       Certificate title pair at 22 pt each, white on the primary band.
ANTI-EXAMPLE:  Hindi subtitle at 8 pt under a 22 pt English title; Hindi heading with font-stretch 78%.
TEST:          Is the Indic line the same size and weight, normal width, with no clipped matras?
EXCEPTION:     Space-limited stickers may reduce both languages together, not below the minimum.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 04.10:    Never set text in Accent coral on white or stone below large size; use Accent 700 for small accent text.
CLASS:         NEVER (coral #EE7555 on white), MUST (Accent 700 for small marker text)
REASON:        Accessibility; coral #EE7555 is 2.87:1 on white. Accent is a marker only (refs, index numbers, one key figure).
EXACT SPEC:    Primary 700 on white 12.83:1; Neutral 900 on white 14.83:1; on stone #F5F4F1 11.67:1 and 13.49:1; Accent 700 #A33C1F on white 6.51:1, on stone 5.92:1; Accent 600 #C54826 on white 4.85:1 but on stone 4.41:1 (not for small text); coral #EE7555 on Primary 4.47:1, large text only.
EXAMPLE:       Mono ref tag in Accent 700 on white.
ANTI-EXAMPLE:  Coral price line on white at 16 px.
TEST:          Text pair at or above 4.5:1 (3:1 large)?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 04.11:    Deliver fonts self-hosted and subset, with the wdth axis for Anek Latin only, font-display swap and a size-adjusted fallback.
CLASS:         MUST
REASON:        Fast on low-end Android; no layout jump; Indic never receives a width axis.
EXACT SPEC:    WOFF2; latin + latin-ext (₹), devanagari, gurmukhi; Latin axes wght + wdth; Indic weight only; display swap; fallback per 04.8.
EXAMPLE:       Hindi page preloads only the Devanagari file.
ANTI-EXAMPLE:  Runtime link to fonts.googleapis.com; wdth requested for Devanagari; font-display: block.
TEST:          Network panel: fonts from our domain, no text hidden during load, Latin heading renders condensed?
EXCEPTION:     Prototypes only; owner approves.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

## 04.12 Tokens

| Token | CSS variable | Value |
|---|---|---|
| ct.font.family.sans | --ct-font-family-sans | Anek stack (04.8) |
| ct.font.family.heading | --ct-font-family-heading | Anek stack with condensed fallbacks (04.8) |
| ct.font.family.sans.latin / .devanagari / .gurmukhi | --ct-font-family-sans-latin etc. | "Anek Latin" / "Anek Devanagari" / "Anek Gurmukhi" |
| ct.font.family.mono | --ct-font-family-mono | IBM Plex Mono stack |
| ct.font.width.condensed / .normal | --ct-font-width-condensed / -normal | 78% / 100% |
| ct.font.case.heading / .label / .button | --ct-font-case-* | uppercase |
| ct.font.case.body / .indic | --ct-font-case-body / -indic | none |
| ct.font.size.display, h1, h2, h3, h4, body-l, body, small, caption, label, ref, value, button, data, data-l | --ct-font-size-* | clamp values in 04.4 |
| ct.font.line-height.{role}.{latin, devanagari, gurmukhi} | --ct-font-line-height-* | table in 04.4 |
| ct.font.weight.regular / medium / semibold / bold | --ct-font-weight-* | 400 / 500 / 600 / 700 |
| ct.font.tracking.heading / none / small / button / label / ref | --ct-font-tracking-* | +0.01em / 0 / +0.01em / +0.06em / +0.08em / +0.10em |
| ct.font.numeric.tabular | --ct-font-numeric-tabular | tabular-nums lining-nums |
| Colour references | s03 | ct.color.primary.700 `#20334B` headings; ct.color.neutral.900 `#25282A` body; ct.color.neutral.0 `#FFFFFF`; ct.color.accent.700 `#A33C1F` small accent text; stone surface ~`#F5F4F1` (confirm token index in s03). Secondary colour is TBD and has no typographic role yet |

## 04.13 Licence register

| Font | Foundry / authors | Licence | Desktop | Web | App | Seats | Renewal | Source |
|---|---|---|---|---|---|---|---|---|
| Anek Latin, Devanagari, Gurmukhi | Ek Type (Anek Project Authors) | SIL OFL 1.1 | Yes | Yes | Yes | Unlimited | None | fonts.google.com, github.com/google/fonts |
| IBM Plex Mono (500, 600) | IBM | SIL OFL 1.1 | Yes | Yes | Yes | Unlimited | None | fonts.google.com |
| Noto Sans (fallback only) | Google | SIL OFL 1.1 | Yes | Yes | Yes | Unlimited | None | fonts.google.com |

OFL allows commercial use, embedding and subsetting; the font may not be sold on its own. Store the OFL text and font files (including the wdth 78 and 100 instances) in a "Fonts" folder next to the logo files (location to be confirmed by the owner).

## 04.14 Do / Don't

| Do | Don't |
|---|---|
| Do set headings in condensed 700 capitals, 8 words or fewer | Don't set paragraphs, h4, captions or URLs in capitals |
| Do set Hindi and Punjabi headings at normal width, no case, same px | Don't condense, track or capitalise Indic text |
| Do set labels, refs and record values in Plex Mono caps, +0.08 to 0.10em | Don't use mono for sentences or tighten its tracking |
| Do set the date as 03 Oct 2026 (shown 03 OCT 2026 on records) in tabular figures | Don't write 03/10/2026 or 3rd October |
| Do group capacities 20,00,000 L | Don't write 2,000,000 or "Rs 5 lakh" |
| Do keep GSTIN and certificate numbers in mono, no wrap | Don't break an ID across two lines |
| Do use Primary 700 headings and Neutral 900 body | Don't use coral for text on white |
| Do emphasise with weight 600 | Don't use italics, underline for emphasis, faux bold or scaleX |
| Do label primary buttons in white 700 caps on primary navy | Don't fill a button with the accent |
| Do self-host WOFF2 with swap | Don't hot-link fonts or use font-display: block |

## 04.15 Accessibility and India notes

- WCAG 2.2 AA: 4.5:1 normal text, 3:1 large (24 px, or 18.66 px bold). Published pairs are listed in Rule 04.10 (all run with the brief's python function).
- All-caps readability: capitals slow reading, so caps are limited to short headings (8 words maximum), labels, refs, record values and buttons. Never caps for paragraphs. Keep +0.01em minimum tracking on condensed caps and 700 weight so strokes do not merge.
- Write source text in sentence case and apply caps in CSS (`text-transform`). Some screen readers spell out text typed in capitals letter by letter; CSS capitals are read as words. Copy-paste then returns sentence case.
- Mono capitals at 11 to 13 px need Neutral 900 or Primary 700 on white or stone (11.67:1 or better) and stay one line.
- WCAG 1.4.12: layouts survive line height 1.5, paragraph spacing 2x, letter spacing 0.12x, word spacing 0.16x. Fixed-height headings and buttons must not clip when these overrides apply; test Devanagari. Brand CSS never applies letter spacing to Indic.
- `rem` units everywhere; 200% zoom must work at 360 px, including 53.75 px caps displays wrapping at 8 words.
- Hindi and Punjabi pages and inline fragments carry `lang="hi"` and `lang="pa"` so `:lang()` resets caps, tracking, width and line height.
- Windows and low-end Android: Nirmala UI and Noto cover both scripts as fallback; test on those, not only a Mac. Condensed fallback (Roboto Condensed, Arial Narrow) must be tested for wrap.

## 04.16 Day one vs later

| Day one | Later |
|---|---|
| Anek (3 scripts, wdth 78 and 100 for Latin) + Plex Mono 500/600 | A paid or custom display face only if distinctiveness justifies it |
| 15-role scale, clamp CSS, line heights per script | Print-specific kerning and optical tuning |
| Tabular figures, en-IN formats, date format, caps-on-records rule | More scripts (for example Urdu, Bengali, Tamil) |
| Self-hosted WOFF2, swap, fallback stacks | Instanced two-file heading/body split if payload demands |
| Static TTF kit (wdth 78 and 100) for franchise partners | Installer or portal download for the kit |
| Sticker, certificate, hero and WhatsApp examples | Signage and vehicle type specification |

## 04.17 Checklist

- [ ] Role table names Anek Latin (condensed and normal), Anek Devanagari, Anek Gurmukhi, IBM Plex Mono 500/600
- [ ] Full scale with exact px, rem and fluid clamp, including label, ref, value, button (04.4)
- [ ] Heading spec: wdth 78, 700, uppercase, +0.01em, line height 1.0 to 1.05, 8 words maximum; h4 decision stated
- [ ] Line height per script and measure rules set
- [ ] Indic headings at wdth 100, no case, no tracking; `wdth` not requested for Indic fonts
- [ ] `ct.font.width.*`, `ct.font.case.*` and tracking tokens defined (04.12)
- [ ] Next.js loading includes `axes: ["wdth"]` for Anek Latin and CSS shows `font-stretch` range (04.8)
- [ ] ₹, en-IN grouping, units, tabular figures, caps date on records documented (04.6)
- [ ] Hindi and Punjabi pairing and overrides documented (04.7)
- [ ] Licence register and file location noted (04.13)
- [ ] Print, sticker and signage notes in pt (04.9)
- [ ] Specimens on website photo hero, sticker, certificate, WhatsApp card (04.10)
- [ ] Accessibility minimums, all-caps limits and contrast pairs verified (04.15)
- [ ] Do/Don't table with word labels (04.14)
- [ ] Handoff: tokens to s12 and s13; hierarchy examples to s14, s15, s16, s17
- [ ] Hindi and Punjabi strings set in real layouts and reviewed by a native reader

## 04.18 Open items and evidence needed

1. Wordmark lettering and the interim text-only lockup (04.5) belong to s02; reconcile.
2. s03: confirm token index for stone and accent 700; Secondary colour is TBD, so no typographic use is assigned.
3. Visual check that wdth 78 at 700 with +0.01em does not collide on real headings (including digits and Q, J, W); adjust within 75 to 80 only with owner approval.
4. Confirm `next/font/google` export names, that `axes: ["wdth"]` emits `font-stretch: 75% 125%`, latin-ext carrying ₹, fallback `size-adjust`, and the 150 KB payload cap with Lighthouse now that the `wdth` axis is loaded.
5. Visual check of Anek Gurmukhi against Devanagari and Latin (OS/2 x-height reads 0.247) and of normal-width Indic headings beside condensed Latin at equal px.
6. Confirm Anek Latin default digit style (lining) and zero style; confirm OFL reserved-name terms before renaming instanced static TTFs; confirm Word and Canva can use them.
7. Native-reader review of Hindi and Punjabi sample strings, the danda in Punjabi and Indic line heights at 360 px.
8. Sticker physical size, stock and reading distance (s14, s16); 7 pt mono caps legibility on first print; signage cap-height rule and condensed legibility at distance (signmaker); WhatsApp display width.
9. Sticker serial or reference code format and the hero REF tag format are not defined; owner decision.
10. Nav-link type style depends on the header decision (fixed or floating, owner TBD); default is the button label style at weight 600, set in s13.
11. Any hero line pairing "Clean Tank, Healthy Life" with a health claim needs the water-quality qualifier on the page; Clean Tank Agent properties, CPWD DSR and the "60% of diseases" stat are not used here and need evidence before public use.
12. Hind was not evaluated for Gurmukhi coverage (verify).
