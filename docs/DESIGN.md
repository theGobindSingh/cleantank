# Design

The visual system for Clean Tank Services. Read it before any visual work. The code in `src/styles` follows it; when you change one, change the other. `/design` on the running site shows all of it rendered from the live CSS: every ramp and role with measured hex and contrast, the type scale at the current width, fonts, both modes side by side, and every component.

## Brand & style

"Quiet precision. One standard, every tank." Pages should read like a lab report or a spec sheet with room to breathe: ruled, numbered, exact and calm. Authority comes from the visuals and humility from the words.

The test: cover the logo and the page should still read as a ruled spec sheet with a navy band, one coral marker and a lot of white space.

References: a hospital lab bench, a calibrated pressure gauge, test reports, dated inspection tags, Swiss technical signage (navy plus one marker color), technicians in pressed navy uniforms.

Never: gradients (one exception: the hero scrim, below), shadows, gloss, glass or blur, glow; water splashes, droplets, waves, bubbles; sun rays, bokeh, lens flare; cartoon bacteria, mascots, 3D tanks; red or orange urgency badges, starbursts, seals, shields; countdowns; money imagery on franchise pages; stock handshakes and posed smiles; pills or any radius above 4 px; tricolour layouts or festival motifs; fake ISO or approval marks.

## Tokens

`src/styles/colors.css` holds the color ramps as HSL triplets (`--color-primary-700-base: 213 40% 21%`), plus the dark-mode and band overrides. `src/styles/globals.css` turns each triplet into a color in `@theme static` (`--color-primary-700: hsl(var(--color-primary-700-base))`) and defines the semantic roles on top, so every one is also a Tailwind utility. Tailwind's own palette, radii, shadows and breakpoints are removed; only the brand values exist.

- Ramps. Every family has stops 50 to 950 and they are the same in every mode:
  - `primary`: steel-navy, 700 = `#20334B` (locked).
  - `accent`: coral, 500 = `#EE7555` (locked).
  - `secondary`: indigo slate, 700 = `#484474`. 700 is text, rules and fills, 100 soft fill, 500 border, 300 text in dark mode.
  - `grey`: warm stone (50 `#F5F4F1`) to graphite (900 `#25282A`). 500 is the lightest control border and 600 the lightest text; 400 and lighter are decorative only.
  - `success`, `caution`, `info`, `error`: 700 is text, 100 soft fill, 500 border and icon, 300 text in dark mode.
  - `white` on its own. There is no black.
- Semantic roles. Components use these; dark mode and bands re-map them:

| Utility | Light | Job |
|---|---|---|
| `bg` / `bg-subtle` | white / grey 50 | Page ground, alternate sections |
| `surface` | white | Cards, panels, inputs |
| `band` | primary 700 | Header, footer, emphasis bands, table headers |
| `fg` / `fg-muted` | grey 900 / grey 600 | Body text / muted text |
| `heading` | primary 700 | Headings |
| `link`, `link-hover` | primary 700 / 800 | Links, always underlined |
| `border` | grey 300 | Decorative 1 px rules, `Hr` |
| `border-control` | grey 500 | Input and control borders (3:1) |
| `border-strong` | primary 700 | Structural rules, table frames |
| `primary`, `primary-hover`, `primary-active`, `on-primary` | primary 700 / 600 / 800, white | Button fill and label |
| `marker` / `marker-text` | accent 500 / 700 | Level Line and bars / small marker text and the one key figure |
| `secondary`, `secondary-bg`, `secondary-border` | secondary 700 / 100 / 500 | Category tags, heading rules, chart series, soft panels |
| `focus` | primary 700 | Focus ring |
| `disabled`, `disabled-bg` | grey 500 / 100 | Disabled controls |
| `success`, `caution`, `info`, `error` (+ `-bg`, `-border`) | 700 / 100 / 500 | Status components only |

So `bg-bg`, `text-fg-muted`, `border-border-control`, `bg-primary`, `text-heading`.

- Dark mode. The meta tag described in docs/CONVENTIONS.md switches the roles to a navy set: `bg` primary 900, `bg-subtle` 800, `surface` 700, `fg` primary 50, headings white, primary buttons white with a navy label, state and secondary text at 300. It is never black and never an inverted ramp. Light is the default, even when the OS prefers dark; dark mode applies only after the visitor picks it.
- Band scope. Put `data-surface="band"` on any navy band. It fills the band and re-maps the roles inside it (white text and links, white focus ring, white-fill buttons with navy labels), in either mode. Components inside need no changes. For the secondary emphasis band, also set the fill: `data-surface="band"` with `className="[--color-band:var(--color-secondary-700)]"`.
- Preview scopes. `data-scheme="light"` or `data-scheme="dark"` on any element shows that mode inside it, whatever the page theme. `/design` uses them to put both modes side by side. The light scope repeats the light roles, and `src/styles/colors.test.ts` fails if the copies differ.
- Alpha. Tailwind modifiers (`bg-primary-900/70`) or `hsl(var(--color-primary-900-base) / 0.7)` in CSS. The only translucent colors are the photo scrim (primary 900 at 80%, fading out) and the modal scrim (primary 900 at 60%). No translucent accent.
- Radius. `rounded-none` 0 (tables, bands, ruled cells, full-bleed images), `rounded-xs` 2 px (step nodes, checkbox, radio, grid containers), `rounded-sm` 4 px (buttons, inputs, cards, alerts, menus, image frames). Nothing else exists, including `rounded-full`.
- Shadows. None. `shadow-*` generates nothing. Depth comes from 1 px rules, ruled cells, solid bands and white-to-stone steps.
- Breakpoints. `sm` 360, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1440. Mobile first.
- Fonts (`src/styles/fonts.ts`, loaded with `next/font`):
  - `font-sans`: Anek Latin, for body, buttons and UI.
  - `font-heading`: Anek Latin at `font-stretch: 78%`, for display to h3.
  - `font-mono`: IBM Plex Mono 500 and 600, for labels, reference codes and record values.
  - `font-serif`: IBM Plex Serif. Reserved, not in the launch pages; for long-form reading such as a certificate or legal text.
  - `font-cursive`: Caveat. Reserved, not in the launch pages; for a signature or a handwritten note, never headings or body.
  - Any face may change later, so components use only these tokens, never a family name.
  - Anek Devanagari and Anek Gurmukhi follow Anek Latin in the sans, heading and mono stacks, so Hindi and Punjabi text picks its own face. A page downloads an Indic font only when it has text in that script.
- Type scale. `--fs-*` in `globals.css`, fluid between 360 and 1280 px (below). The text components in `src/components/html` take these names as `$size`.
- Spacing. Tailwind's 4 px unit, restricted to the brand steps: 0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128 px (`1 2 3 4 6 8 10 12 16 20 24 32`). Other steps (5, 7, 9, 14) are off-scale.

### Color rules

- Proportion: neutral (white and stone) about 60%, navy about 30%, accent at most 10% of non-photo area. On the website, navy is only the header, footer, at most two emphasis bands and buttons. Never a whole navy page.
- Accent is a marker only: the Level Line, the active step, reference tags and index numbers, one key figure per view. Never a button fill, link, body text, alert, error, warning or urgency signal. `#EE7555` on white is 2.87:1 and fails; small accent text uses `marker-text`.
- Secondary is navy's quiet partner: category tags (`bg-secondary-bg text-secondary border-secondary-border`), the rule beside a heading, the second chart series after navy, soft panels, and at most one emphasis band per page. Its area comes out of navy's 30%. Never a button, link, focus ring, status or alert, and never beside a state color in a way that could read as one.
- Every state color comes with an icon and a word.
- Text on photos only in the hero, white, over an accent 950 scrim at 50% that stays solid behind the text.

## Typography

Anek for everything, IBM Plex Mono for labels and codes. No italics anywhere (Anek has none; emphasis is weight 600) and no synthetic bold. Two widths only: 78% for display to h3, 100% for everything else. Always set `font-weight` and `font-stretch` explicitly, because Anek's default instance is 500.

Fluid between 360 and 1280 px, ratio 1.2. The `--fs-*` token is the `$size` name in `src/components/html`:

| Token | Size px (360 to 1280) | `clamp()` | Style |
|---|---|---|---|
| `display` (hero only) | 39.81 to 53.75 | `clamp(2.488rem, 2.077rem + 1.515vw, 3.359rem)` | heading face, 78%, 700, uppercase, +0.01em, line height 1.00 |
| `h1` | 33.18 to 37.32 | `clamp(2.074rem, 1.972rem + 0.451vw, 2.333rem)` | same as display |
| `h2` | 27.65 to 31.10 | `clamp(1.728rem, 1.643rem + 0.376vw, 1.944rem)` | same, line height 1.02 |
| `h3` | 23.04 to 25.92 | `clamp(1.44rem, 1.37rem + 0.313vw, 1.62rem)` | same, line height 1.05 |
| `h4` | 19.20 to 21.60 | `clamp(1.2rem, 1.141rem + 0.261vw, 1.35rem)` | 100%, 600, sentence case, line height 1.30 |
| `body-l` | 19.20 to 21.60 | same as h4 | 400, line height 1.50 |
| `body` | 16 to 18 | `clamp(1rem, 0.951rem + 0.217vw, 1.125rem)` | 400, line height 1.50 |
| `small` | 14 to 15 | `clamp(0.875rem, 0.851rem + 0.109vw, 0.938rem)` | 400, +0.01em |
| `caption` | 12 to 13 | `clamp(0.75rem, 0.726rem + 0.109vw, 0.813rem)` | 400, +0.01em; also label and value (Plex Mono 500 / 600, uppercase, +0.08em) |
| `ref` | 11 to 12 | `clamp(0.6875rem, 0.663rem + 0.109vw, 0.75rem)` | Plex Mono 500, uppercase, +0.10em |
| button | 14 (fixed) | `0.875rem` | Anek 700, uppercase, +0.06em |

`h1` to `h3` get the heading face, 78% width, caps, tracking and `heading` color from `src/styles/defaults.css`. Headings use caps down to h3 only, at most 8 words; write the source text in sentence case and uppercase it with CSS. Never uppercase paragraphs, lists, captions, URLs, email addresses, the descriptor line or Indic text. Line length 60 to 68ch (45 to 75 for body). Left-aligned, ragged right, never justified; `text-wrap: balance` on headings and `pretty` on body. Nothing smaller than 12 px except `ref`. Curly quotes, no em dashes in brand copy, ranges written "to" ("₹3 to 8 lakh").

Hindi and Punjabi:

- Anek Devanagari and Anek Gurmukhi, at 100% width, with no caps and no letter-spacing ever. `defaults.css` enforces this on anything inside `lang="hi"` or `lang="pa"`, and it beats utilities like `uppercase`.
- Indic headings are 700 at the same px size as the Latin one. Line height: body 1.65 (hi) and 1.60 (pa), headings 1.35 (hi) and 1.30 (pa). Indic measure 35 to 60 characters.
- Plex Mono has no Indic glyphs, so an Indic label falls back to Anek at the same size.
- Mixed lines ("Tank साफ करवाना है"): keep each word in its own script and wrap the Indic part in `lang="hi"` or `lang="pa"`. On a Hindi or Punjabi page, wrap Latin words that should keep their caps (the brand name, reference codes) in `lang="en"`.
- Digits are Western Arabic (0 to 9) in all three languages.

Numbers: Indian grouping (`20,00,000`), a non-breaking space before units (`20,000 L`, `250 bar`), `₹` with no space, tabular figures in tables and records. Dates as "03 Oct 2026". Phone as "+91 94535 17514".

## Layout

- Max content width 1800 px, set by `CommonFullWidthWrapper` (docs/CONVENTIONS.md, Styling): side margins are 5% of the width each, until the content reaches 1800 px. Columns 4 (base), 8 (`md`), 12 (`lg` up). Gutters 16 then 24.
- Sections alternate white and stone with a 1 px rule between them. Section gaps 64 / 80 / 96 px by breakpoint.
- Each section gets a number and a mono reference tag above its H2 (`02  REF CT-WEB-02`, `ref` style, `marker-text`). The number counts the sections after the hero, from 01, in page order. The 5-step track has no number, tag or visible heading (owner's call).
- Above the fold, at most five elements: headline, one line, CTAs, the before/after comparison, brand mark.
- Header (`src/components/header`): navy band, logo top-left (never centred), at most six nav links in button type, current page marked with a 3 px accent underline and `aria-current="page"`, then the language dropdown and theme toggle, all in one `<nav>`. Fixed to the top of the viewport, 64 px tall; the body is padded by the same amount. Below `lg` (1024 px, phones and tablets) the same link panel becomes a sidenav (styled in `header.css`) that slides in from the right over the modal scrim. One burger button opens and closes it, drawing its three lines into an X while open; Escape, a click on the scrim or following a link also close it. While it's open, Tab cycles between the burger and the panel's controls. The burger and the theme toggle are 36 px icon buttons (`iconButtonStyles`) with a 44 px hit area.
- Mobile (under 768): a sticky bottom bar with Call (filled) and WhatsApp (outline) buttons, respecting `env(safe-area-inset-bottom)`.
- Footer (`src/components/footer`): navy band of ruled cells. The first row holds the brand (lockup, Gobind Galaxy endorsement, ISO details as a definition list), the site map, the contacts (call, WhatsApp, email) and the legal links (Privacy Policy, Terms & Conditions, and Cookie settings while analytics runs). The second row is the correspondence office; the registered office is left out (owner's call). Under the grid: the copyright line and the GSTIN in mono. Cell headings are mono caps in `fg-muted`. Footer links drop the underline until hover; on phones the site map runs in two columns.

## Motifs

- Level Line: a 3 px `marker` rule, 48 px long, square ends, 12 px under the page H1 or the key figure. One per view, never on photos, buttons or alerts.
- Reference tag: plain mono caps text, no box. One accent tag per view at most; the rest use `fg-muted`.
- Step track (the 5-step process): five square 40 px nodes (32 px at 360), `rounded-xs`, 2 px outline, Plex Mono numerals 01 to 05, 2 px connectors with square elbows. Step 05 is dashed and labelled "* WHERE APPLICABLE". Active step: primary fill, white numeral, 3 px accent underline. Build it as an `<ol>`; decorative SVG is `aria-hidden`. The `process` block (`src/blocks/process`) shows the track on the page ground, with only each step's number, name and line (owner's call: no band, photos or visible heading; the H2 is for screen readers). The steps come from the `process` global. From `lg` up they run in five columns joined by one line; below that they stack, joined by a vertical line. The home page track has no active step.
- Ruled cells: `display: grid; gap: 1px` over a `border` background, cells filled `surface` at radius 0.

## Components

- Buttons (`src/components/button`, `src/components/link`): `variant` filled (default for Button), outlined or text (default for Link: an underlined link that takes the type of the text around it); `size` `md` 48 px (default), `sm` 44 px for dense desktop tables and the cookie consent banner only, `lg` 56 px for the hero; `color` `primary` (default) or a state or grey family. Filled and outlined are `rounded-sm`, Anek 700 uppercase 14 px (16 px at `lg`), +0.06em, padding 0 24 px, min width 120 px. Primary follows dark mode and bands by itself (white fill with a navy label there). Other families use 700 / 600 / 800 with a white label on light grounds and 300 / 200 / 100 with a navy label in dark mode and bands. One filled button per viewport. No accent buttons (the type doesn't allow it), no trailing arrows, no exclamation marks.
- Language switcher (`src/components/language-switcher`): a `<details>` dropdown showing the current language, listing EN / हिंदी / ਪੰਜਾਬੀ, each named in its own script with `lang` and `hreflang`, current one in bold with `aria-current`. The list is its own navy band. Escape or a click elsewhere closes it. No flags. A choice is remembered in the `lang` cookie; the first visit follows the browser's language, never the IP (docs/CONVENTIONS.md, Languages).
- Links: underlined 1 px at 3 px offset; hover darkens and thickens to 2 px. A text link keeps the size, weight and case of the text around it; nav links add button type with utilities. Never remove the underline in body copy.
- Inputs: 48 px, `rounded-sm`, 1 px `border-control` border, white fill, 16 px text minimum. Label above in label style with "(required)" or "(optional)" in words. Errors: 2 px `error-border`, icon, message in `error`, `aria-invalid` and `aria-describedby`. Never disable submit.
- Cards: cells of a ruled grid (radius 0, padding 24 / 40, container `rounded-xs`). A single standalone card is `rounded-sm` with a 1 px `border` edge. Clickable cards change the edge to `border-strong` on hover, no lift.
- Alerts: `rounded-sm`, 1 px state border, state background, 20 px icon, bold title.
- Tables: radius 0, navy header row in mono caps, 1 px `border` cell lines, numbers right-aligned in tabular figures, no zebra stripes.
- Loading: static skeletons in grey 100, no shimmer, no spinners.

## Imagery and icons

- Photos: real technicians at work, documentary, daylight, eye level, never looking at the camera. No stock people and no AI people. Inline frames `rounded-sm` with a 1 px grey 200 outline; full-bleed images radius 0; never circle crops.
- Hero (the `hero` block): at least the screen height minus the header and 1rem, so the next section peeks in. A drag-to-compare slider (`src/components/compare-slider`) of one tank before and after cleaning, the two photos framed identically. From `lg` up it fills the hero and the heading, line and CTAs sit in the left seven columns over an accent 950 scrim at 50%. The scrim is solid from the left edge to the end of column seven, then fades to clear by the end of column nine (owner's call; the only gradient on the site); the comparison stays clear on the right. Below `lg` the text sits on flat primary 900 with the comparison under it, divider centred. No visible before or after labels; the handle sits at the bottom of the divider. Both photos are real `<img>` elements with `fetchpriority="high"`, never lazy. The control is a native range input, so arrow keys work. No carousel and no autoplay video.
- Illustration: flat orthographic line drawings in navy with one accent marker. No 3D, no isometric, no mascots.
- Icons: Lucide only, with `stroke-linecap="square"`, `stroke-linejoin="miter"` and `currentColor`. Stroke 1.75 at 24 px (2 at 16, 1.85 at 20, 1.5 at 32). Icons always have a visible label except close, menu and search. No emoji, filled or 3D icons.
- Asset file names: lowercase letters, digits and hyphens only, no spaces or capitals, at most 80 characters: `ct-<family>-<subject>-<variant>-<colour or mode>-<lang>-<size>-v<NN>.<ext>`, dropping parts that don't apply. Families include `logo`, `photo`, `ill`, `icon`, `cert`, `sticker`, `social`. Some current files in `public/assets/images/` (such as `IIT Delhi.png`, `water_gun.png`) don't follow this yet.
- Logo: the text lockup CLEAN TANK SERVICES in Anek 700 caps (primary 700, white on bands), with the descriptor "Scientific & Mechanized Water Tank Cleaning" in small type below it, never in caps. Both come from `src/site.ts`.

## Motion

Functional only: exact, brief, still. Durations 70 / 110 / 150 / 240 ms (240 is the ceiling). Easing `cubic-bezier(0.2, 0, 0.38, 0.9)` standard, `cubic-bezier(0, 0, 0.38, 0.9)` entrance, `cubic-bezier(0.2, 0, 1, 0.9)` exit. Animate only opacity and transform, with at most 8 px of travel. One exception (owner's call): the header sidenav slides its full width in 240 ms with the entrance easing while the scrim fades in, and the burger's lines morph into an X in 500 ms with `cubic-bezier(0.645, 0.045, 0.355, 1)`, copied from the earlier site; and once both photos have loaded and the whole hero comparison is on screen below the header, its divider glides from the left edge 15 points past its start in 900 ms, easing out, then settles back on it in 500 ms (skipped under reduced motion, stopped by a drag).

The one sequence is the 5-step track: it plays once when the track rises above the bottom 15% of the screen, the nodes fading in with a 120 ms stagger.

Never: bounce, overshoot, shake, pulse, parallax, scroll fly-ins, staggered card lists, count-up numbers, carousels, shimmer, autoplay. `prefers-reduced-motion` is respected globally in `src/styles/defaults.css`.

## Accessibility

- WCAG 2.2 AA minimum. Every semantic role pair above passes (navy on white 12.83:1, graphite on white 14.83:1, `fg-muted` on white 5.87:1, `marker-text` on white 6.51:1, secondary 700 on white 8.92:1 and on stone 8.11:1, white on secondary 700 8.93:1, secondary 700 on 100 7.35:1, secondary 500 border on white 5.91:1, secondary 300 on primary 900 7.69:1).
- Never use these pairs: accent 500 or 400 as text or thin icons on white, stone or accent 50 (2.5 to 2.9:1); white on accent 500; accent 500 body text on primary 700 (large only); primary 700 on accent 700; grey 400 as text or control border, or white on grey 400; grey 500 as text (3.75:1, borders and icons only); caution 500 or success 500 as small text (use the 700 text color); graphite on navy (1.16:1); secondary 700 on navy (1.43:1); on a secondary band, secondary 300 text (3.85:1) or `marker-text` as small text (3.58:1). Also never: accent as a button fill or CTA, accent beside error red in one component, accent text over photos, red versus green as the only difference.
- Focus: 2 px solid `focus` outline at 2 px offset on `:focus-visible`. It turns white on bands, photos and dark mode through the tokens. Never `outline: none`.
- Targets 48 px, 44 px minimum, 8 px apart.
- Meaning never by color alone: state gets icon plus word, links get underlines, charts get direct labels.
- No horizontal scroll at 320 px; works at 200% zoom.
- `lang` on every page and on mixed-language fragments.
- `pnpm test:e2e` checks every page with axe in both modes, and checks for sideways scroll at 320 px (see docs/CONVENTIONS.md, Testing).
- Performance: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1, initial JS ≤ 150 KB gzipped.

## Still open

Which section gets the second emphasis band: decide it when building that part and write the choice here. Check the stone value on real screens.
