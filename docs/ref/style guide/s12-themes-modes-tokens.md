# Clean Tank Services: Style Guide
# 12. Themes, Modes & Tokens

> This pillar is the single source of truth for every value in the style guide. It consolidates the colour, type, shape, layout and motion values from s03, s04, s05, s07 and s11 into one named token set, defines how the tokens are built, named, versioned and switched between light, dark, band scope and print, and states plainly what does not flex: there are no franchise sub-themes, no festive recolouring and no campaign palettes. It matters for Clean Tank because one national standard delivered by many district operators only stays one standard if a hex code lives in exactly one place, and because one wrong mapping (accent used as a fill or as text on white, 2.87:1) would otherwise be copied into every template.

Sheet CT-SG-12 | v2.0 | 08 Oct 2026 (Quiet Utility revision) | Tier legend: LOCK = central brand owner approves any change · GUARD = varies inside stated limits · FLEX = judgment within principles

Not covered here: choosing the colours and type (s03, s04), component design and states (s13), print proofing (s15). Values below are copied from s03, s04, s05, s07 and s11 and are not redefined. Contrast ratios are WCAG 2.2 relative-luminance ratios computed with Python for this sheet, shown to two decimals and never rounded up. Where the source pillars disagree, this sheet picks one value and lists the clash in 12.22.

## 12.1 Principle and inheritance

Big idea: **Quiet precision. One standard, every tank.** A token file is the most literal form of that sentence.

| v2 principle | Token behaviour | Spec |
|---|---|---|
| Exact | One value per decision, ratios computed and published; no eyedropped colour, no raw px | `/tokens`, semver, no hex outside it (12.17 rule 12.1) |
| Ordered | Three tiers, one naming grammar, one build; every district builds from the same release | 12.2, 12.3, 12.4 |
| Restrained | Radius 0, 2, 4 only; no shadow tokens; no gradient tokens; a trimmed motion set | 12.5, 12.17 |
| Documented | Every semantic pair has a ratio in light, dark and band scope; every change has a changelog line | 12.6, 12.14, 12.16 |
| Honest materials | Neutrals read as stone and graphite, primary as steel-navy; dark mode is primary-based, never black, never inverted | 12.6 |

Brand traits carried: Disciplined (one file), Calm (no theme is louder than light), Responsible (every text pair checked in every mode), Knowledgeable (the file reads like a spec sheet). Authority lives in the visuals; humility stays in the words (voice, p7).

Decision for v2.0: the token set carries **three dimensions only**: colour mode (light, dark, print), contrast preference (standard, more), and density (comfortable now, compact for tables, s07). Brand, segment and campaign are not dimensions. Light is the default and sits on White and Stone; dark is the primary-based alternative.

## 12.2 Token architecture

Three tiers. Each tier may reference only the tier below it.

| Tier | Holds | Names carry | Who may use it in a design or build |
|---|---|---|---|
| 1 Primitive | Raw values by role: `ct.color.primary.700`, `ct.color.neutral.50`, `ct.space.5` | Role and step, never a job | Only semantic and component token files (exception: charts and illustrations, rule 12.2) |
| 2 Semantic | Jobs per mode: `ct.color.text`, `ct.color.surface`, `ct.color.primary` | Job | Designers, developers, templates, agencies |
| 3 Component | Component overrides: `ct.button.primary.bg` | Component and part | The component's owner only |

Worked alias chain (primary button, light and dark):

```
ct.button.primary.bg          (component)
  -> ct.color.primary         (semantic)
    -> light: ct.color.primary.700 -> #20334B   (12.83:1 vs white label)
    -> dark:  ct.color.neutral.0   -> #FFFFFF   (17.85:1 vs Primary 900 page)
ct.button.primary.fg
  -> ct.color.on-primary      (semantic)
    -> light: ct.color.neutral.0   -> #FFFFFF
    -> dark:  ct.color.primary.700 -> #20334B   (12.83:1 on the white fill)
```

Source rule: a component that needs navy asks for `ct.color.primary`, never for `primary.700` and never for the hex. A rebrand then edits tier 1 once and every mode follows. **There is no accent button:** `ct.button.*` has no accent entry, and `accent-marker` is not allowed in any `*.bg` of a button or link (rule 12.9).

## 12.3 Naming grammar

Grammar: `ct.<category>.<item>.<variant>`, lower case, hyphens inside a segment, dots between segments. CSS variable: replace dots with hyphens and prefix `--`, so `ct.color.primary.700` becomes `--ct-color-primary-700`.

| Rule | Good | Bad |
|---|---|---|
| Role names are the only colour names | `ct.color.primary.700`, `ct.color.accent.600` | `ct.color.navy.700`, `ct.color.coral.500`, `ct.color.status.error` |
| Job, not value, in tiers 2 and 3 | `ct.color.text.muted` | `ct.color.grey-text`, `ct.color.light-navy` |
| Scale steps are numbers (50 to 900; neutral also 0) | `ct.color.neutral.600` | `ct.color.neutral.dark` |
| States are last | `ct.color.text.link-hover` | `ct.color.hover-link` |
| No colour name in components | `ct.button.primary.bg` | `ct.button.navy-bg` |
| No mode in a name | `ct.color.bg` (value changes per mode) | `ct.color.bg-dark` |
| Reserved characters | Segment may not start with `$` or contain `{`, `}` or `.` (DTCG rule) | `ct.color.accent.5.5` |

Categories in use: `color`, `font`, `space`, `radius`, `border`, `focus`, `motion`, `layout`, `size`, `opacity`, `z`. **There is no `shadow` category** (s05.6); CI fails on the string `shadow` in `/tokens`. Scheme matches s03 (`ct.color.*`), s04 (`ct.font.*`), s05 (`ct.radius.*`, `ct.border.*`, `ct.focus.*`), s07 (`ct.space.*`, `ct.layout.*`) and s11 (`ct.motion.*`).

## 12.4 File format, repo and build

| Item | Spec |
|---|---|
| Format | W3C Design Tokens Community Group (DTCG) JSON. Spec version pinned in the repo: **2025.10**. It is the first stable version but a Community Group Report, not a W3C Standard, so the format can still change: pin it and re-test on upgrade |
| Extension, media type | `.tokens.json`, `application/design-tokens+json` |
| Repo path | `/tokens` at the repo root |
| Colour authoring space | sRGB hex, because the owner supplied hex. Stored as `colorSpace: "srgb"` with components and `hex`. OKLCH (s03.2: Primary 700 0.317 0.050 255, Accent 500 0.698 0.157 36, Graphite 0.275 0.006 237) is reference only |
| Build tool | Style Dictionary (v4 or later reads DTCG; confirm on install) |
| Command | `npm run tokens` runs `style-dictionary build --config tokens/config.mjs` |
| Version | `tokens/package.json` private package `ct-tokens`, semver (12.16) |

Folder layout:

```
/tokens
  src/primitive/  color  type  space  radius  border  motion  layout  z  opacity  size  (*.tokens.json)
  src/semantic/   light  dark  band  more-contrast  print  (*.tokens.json, identical key structure)
  src/component/  button  link  input  card  sticker  step  (*.tokens.json)
  config.mjs   package.json   CHANGELOG.md   README.md
  dist/css/tokens.css  dist/css/themes.css  dist/tailwind/theme.css  dist/ts/tokens.ts  dist/json/figma.json
```

Build targets:

| Target | Output | Consumer |
|---|---|---|
| CSS variables | `dist/css/tokens.css` (primitives and light), `themes.css` (dark, band, more-contrast, print) | Website, email web version, PDF generator |
| Tailwind v4 | `dist/tailwind/theme.css` (`@theme inline`) | Next.js site |
| TypeScript | `dist/ts/tokens.ts` (typed constants, never for colour in components) | Charts, canvas, OG images |
| Figma | `dist/json/figma.json` | Figma Variables (12.15) |
| Print reference | CMYK table from s03.3 stored under `$extensions` and printed in the guide | Printer brief (verify with printer) |

DTCG limits worked around in the build: it has no `clamp()` and no `em` dimension, so fluid sizes are stored as min and max `dimension` tokens plus an `$extensions` block (`com.cleantank.fluid`: viewport 360 to 1280) that a custom transform turns into the s04 `clamp()` strings; tracking is stored as `number` plus an `em` unit extension; case (`uppercase`) and width (`wdth` 78) have no DTCG type and are carried as `number` tokens and a `textTransform` extension. The semantic file for a mode is a separate file, because DTCG 2025.10 has no built-in mode concept. **Secondary has no token files:** the `secondary` group exists with a description and a `status: TBD` extension and contains no token, because a DTCG token cannot exist without a `$value` and no value may be invented.

## 12.5 Primitive tokens

Colour primitives are exactly s03.2 to s03.5, grouped by role. Hex only appears in this tier.

**Colour scales**

| Role scale | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|---|
| `ct.color.primary.*` (navy) | `#F1F4F9` | `#DFE7F1` | `#BFCFE3` | `#94AED1` | `#6289BC` | `#42689A` | `#314D72` | `#20334B` | `#172436` | `#0F1824` |
| `ct.color.secondary.*` | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| `ct.color.accent.*` (coral, marker only) | `#FEF0EC` | `#FDE0D9` | `#F9C2B3` | `#F5A18A` | `#F1876A` | `#EE7555` | `#C54826` | `#A33C1F` | `#76311E` | `#4F2317` |

**Secondary is TBD (owner to decide).** The names `ct.color.secondary.50` to `.900` are reserved and carry no value, no preview and no alias. Nothing may reference them until the owner chooses (s03.2 lists the six selection criteria). The Tailwind and CSS builds leave them undefined on purpose (12.9, 12.10).

| Neutral (warm stone to graphite) | 0 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `ct.color.neutral.*` | `#FFFFFF` | `#F5F4F1` | `#ECEBE7` | `#DEDDD8` | `#C7C6C1` | `#A9A8A3` | `#85847F` | `#65655F` | `#4A4B48` | `#35383A` | `#25282A` |

Locked core: `primary.700` `#20334B`, `accent.500` `#EE7555`, `neutral.0` `#FFFFFF`, `neutral.900` `#25282A`, Stone `neutral.50` `#F5F4F1`. Neutral 500 (3.75:1 on White) is the lightest grey for control borders and meaningful icons; 600 and darker are text-safe; 300 and lighter are decorative only.

**State** (`ct.color.state.<name>.*`, always icon plus word)

| `ct.color.state.<name>.*` | fg (700 value) | bg (100 value) | border (500 value) | dark text and border |
|---|---|---|---|---|
| success | `#1E7A3C` | `#E6F4EA` | `#2F9E55` | `#6FCF8E` |
| error | `#B01A45` | `#FCEBF0` | `#D0365F` | `#F28BA8` |
| warning | `#8A5A00` | `#FFF4D6` | `#B07400` | `#E8B84A` |
| info | `#1B6A8F` | `#E4F2F8` | `#2A8DBA` | `#7CC4E4` |

The four dark values are tier-1 tokens `ct.color.state.<name>.dark`. Dark status backgrounds use `primary.700`.

**Type** (s04)

| Token | Value |
|---|---|
| `ct.font.family.sans.latin` / `.devanagari` / `.gurmukhi` | "Anek Latin" / "Anek Devanagari" / "Anek Gurmukhi" (variable, OFL) |
| `ct.font.family.sans` | Anek stack, then Segoe UI, Noto Sans per script, Nirmala UI, Roboto, system-ui, sans-serif |
| `ct.font.family.heading` | Anek stack with Roboto Condensed and Arial Narrow fallbacks (s04.8) |
| `ct.font.family.mono` | IBM Plex Mono, ui-monospace stack. No Indic glyphs: Indic labels use Anek |
| `ct.font.width.condensed` / `.normal` | 78 / 100 (`font-stretch` %). Condensed for Latin headings only; Indic stays 100 |
| `ct.font.case.heading` / `.label` / `.button` | uppercase (Latin only) |
| `ct.font.case.body` / `.indic` | none |
| `ct.font.weight.regular / medium / semibold / bold` | 400 / 500 / 600 / 700 |
| `ct.font.tracking.heading / none / small / button / label / ref` | +0.01em / 0 / +0.01em / +0.06em / +0.08em / +0.10em (never on Devanagari or Gurmukhi) |
| `ct.font.numeric.tabular` | `tabular-nums lining-nums` |

| `ct.font.size.*` | 360 px | 1280 px | | `ct.font.size.*` | 360 px | 1280 px |
|---|---|---|---|---|---|---|
| display | 39.81 | 53.75 | | small | 14 | 15 |
| h1 | 33.18 | 37.32 | | caption | 12 | 13 |
| h2 (and data-l) | 27.65 | 31.10 | | label, value | 12 | 13 |
| h3 | 23.04 | 25.92 | | ref | 11 | 12 |
| h4 (and body-l) | 19.20 | 21.60 | | button | 14 | 14 |
| body (and data) | 16 | 18 | | | | |

Fluid between 360 and 1280 px, rem-based; `clamp()` strings are in s04.4. Heading roles (display, h1, h2, h3, record-title, data-l) are Anek Latin wdth 78, 700, UPPERCASE, +0.01em, max 8 words. h4 is sentence case, 600, wdth 100. Label, ref, value are Plex Mono 500 or 600, UPPERCASE, +0.08 to +0.10em, 11 to 13 px. Button is Anek 700 UPPERCASE, +0.06em, 14 px.

Line heights `ct.font.line-height.<role>.<script>` (Latin, Devanagari, Gurmukhi): display 1.00, 1.30, 1.25; h1 1.00, 1.35, 1.30; h2 1.02, 1.40, 1.35; h3 and record-title 1.05, 1.45, 1.40; h4 1.30, 1.50, 1.45; body-l and body 1.50, 1.65, 1.60; small 1.45, 1.60, 1.55; caption 1.40, 1.55, 1.50; label, ref, value 1.30, 1.50, 1.45; button 1.0, 1.4, 1.4; data 1.40; data-l 1.05 (Latin only). Indic values are starting points to test with native strings (s04).

**Space, radius, border, focus, size** (s07, s05)

| Token | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `ct.space.<n>` px | 0 | 4 | 8 | 12 | 16 | 24 | 32 | 40 | 48 | 64 | 80 | 96 | 128 |

Semantic space aliases (s07.2): `ct.space.inset.default` 16; `ct.space.inset.cell` 24 mobile and 40 desktop; `ct.space.stack.group` 24; `ct.space.section.sm / md / lg` 64 / 80 / 96.

| `ct.radius.*` | none | xs | sm (default) |
|---|---|---|---|
| px | 0 | 2 | 4 |
| Use | Rules, table cells, ruled grids, bands, full-bleed images, certificate paper | Step nodes, checkbox, radio, tracks, ruled-grid container | Buttons, inputs, cards, chips, alerts, menus, modals, image frames, on-screen stickers |

**Radius is 0, 2 and 4 only.** `md`, `lg`, `xl` and `full` are removed; no other value (1, 3, 6, 8) exists. Circles appear only on literal round objects (manhole, gauge dial) and are drawn as artwork, not as a radius token. Physical items are not tokens: sticker and badge corners about 1.5 mm, certificate folder 2 mm, certificate sheet square, van panels and signboards square or a fixed 4 mm (s05.13, vendor to confirm).

| Token | px | Token | px |
|---|---|---|---|
| `ct.border.width.thin` | 1 | `ct.focus.width` | 2 |
| `ct.border.width.base` | 2 | `ct.focus.offset` | 2 |
| `ct.border.width.bold` | 3 | `ct.size.hit.min` / `.target` | 44 / 48 |
| `ct.size.node.sm` / `.md` | 32 / 40 | `ct.size.control.height` | 48 (see 12.22 item 1) |
| `ct.layout.max` | 1200 | `ct.line.hairline` | 1 (alias of `border.width.thin`) |

Icon stroke is 1.75 px on the 24 px grid (s10), the one stroke outside these tokens. Lines and icons use square caps and miter joins (`stroke-linecap: square`, `stroke-linejoin: miter`, `stroke-miterlimit: 4`).

**No shadow tokens.** `ct.shadow.0` to `ct.shadow.3` are retired and deleted (s05.6). Depth is made from 1 px rules, ruled cells, solid primary bands and tonal steps. **No gradient tokens either** (s03.8).

**Motion** (s11, trimmed for v2: functional only, no showpiece)

| Token | Value |
|---|---|
| `ct.motion.duration.instant / fast / base / moderate` | 70 / 110 / 150 / 240 ms |
| `ct.motion.easing.standard` | `cubic-bezier(0.2, 0, 0.38, 0.9)` |
| `ct.motion.easing.entrance` | `cubic-bezier(0, 0, 0.38, 0.9)` |
| `ct.motion.easing.exit` | `cubic-bezier(0.2, 0, 1, 0.9)` |
| `ct.motion.easing.settle` | `cubic-bezier(0.4, 0.14, 0.3, 1)`. Easing only, kept for the Level Line draw |

Removed from v1: `duration.slow` 400, `duration.settle` 700 and `stagger.list` (open item 5). `ct.motion.stagger.steps` 120 ms is kept only until s11 v2 confirms whether the 5-step reveal remains. No decorative reveals. All curves keep both y values between 0 and 1, so nothing can overshoot.

**Breakpoints, z-index, opacity**

| Token | Value | Source |
|---|---|---|
| `ct.layout.breakpoint.sm / md / lg / xl / 2xl` | 360 / 768 / 1024 / 1280 / 1440 px (base 0, designed at 320) | s07 |
| `ct.layout.columns` | 4 (base, sm), 8 (md), 12 (lg, xl, 2xl) | s07 |
| `ct.layout.margin` / `ct.layout.gutter` | 16 / 16, then 32 / 24 at 768, 40 / 24 at 1024, auto / 24 at 1440 | s07 |
| `ct.z.base / raised / sticky / dropdown / scrim / modal / toast / tooltip / skip` | 0 / 10 / 100 / 200 / 300 / 400 / 500 / 600 / 700 | New in s12 |
| `ct.opacity.scrim.modal` | 0.60 (Primary 900, flat, no blur) | s05.6 |
| `ct.opacity.scrim.photo` | 0.70 (Primary 900, floor for text on photographs; 6.64:1 worst case) | s03.8 |
| `ct.opacity.scrim.caption` | 0.80 (video caption bar) | s11, to confirm |

Opacity is never used to fade text or to signal disabled; disabled uses colour tokens. There is no semi-transparent accent.

## 12.6 Modes

| Mode | Status | Selector | Source |
|---|---|---|---|
| Light | **Default**, day one. White page, Stone alternate sections | `:root` | `semantic/light.tokens.json` |
| Dark | Day one in tokens; UI ships when the site needs it. Primary-based | `[data-theme="dark"]` | `semantic/dark.tokens.json` |
| Band scope | Day one (a scope, not a mode): inside any primary band | `[data-surface="band"]` | `semantic/band.tokens.json` |
| More contrast | Deferred to v1.1 of the file; `forced-colors` supported day one | `@media (prefers-contrast: more)` | `semantic/more-contrast.tokens.json` |
| Print | Day one reference; applied in PDF and print CSS | `@media print`, `[data-theme="print"]` | `semantic/print.tokens.json` |
| Dim (a third dark level) | Not planned | n/a | n/a |

### Dark rules (LOCK)

1. Dark is a re-mapping of semantic tokens, never an inversion of colours, and it is **primary-based**: page Primary 900 `#0F1824`, never black.
2. Elevation by lightness plus a 1 px rule, no shadows: bg Primary 900, bg.subtle Primary 800, surface Primary 700, and a 1 px `border.rule` (Primary 600) edge on cards and ruled cells.
3. Body text is Primary 50 `#F1F4F9`; White is for headings and the focus ring (17.85:1).
4. Accent keeps the same 10% cap and marker-only jobs. Marker text steps to Accent 400, lines and figures stay Accent 500. Accent is still never a button fill.
5. The dark primary button is the on-primary pattern: White fill, Primary 700 label (12.83:1).
6. Photographs are not inverted or dimmed by filter; the 70% scrim is unchanged. The logo uses its reversed colourway (s02).
7. Status uses the dark text shade on Primary 700 or 800 with border, icon and label.

### Semantic tokens, light and dark

Values are s03.6, consolidated exactly. "Ratio" is the strongest everyday partner on the listed grounds. Light grounds: White (bg, surface) and Stone (bg.subtle). Dark grounds: Primary 900 (bg), 800 (bg.subtle), 700 (surface).

| Token | Light | Dark | Ratio (light on White / Stone; dark on 900 / 800 / 700) |
|---|---|---|---|
| `ct.color.bg` | Neutral 0 `#FFFFFF` | Primary 900 `#0F1824` | Ground |
| `ct.color.bg.subtle` | Neutral 50 `#F5F4F1` | Primary 800 `#172436` | Alternate sections |
| `ct.color.surface` | Neutral 0 `#FFFFFF` | Primary 700 `#20334B` | Cards, panels, inputs; on bg.subtle it carries a 1 px border |
| `ct.color.band` | Primary 700 `#20334B` | Primary 700 `#20334B` | Header, footer, emphasis bands, table headers |
| `ct.color.on-band` | Neutral 0 `#FFFFFF` | Neutral 0 `#FFFFFF` | 12.83:1 on band |
| `ct.color.text` | Neutral 900 `#25282A` | Primary 50 `#F1F4F9` | 14.83 / 13.49 ; 16.19 / 14.19 / 11.64 |
| `ct.color.text.heading` | Primary 700 `#20334B` | Neutral 0 `#FFFFFF` | 12.83 / 11.67 ; 17.85 on 900 |
| `ct.color.text.muted` | Neutral 600 `#65655F` | Primary 200 `#BFCFE3` | 5.87 / 5.33 ; 11.26 / 9.87 / 8.10 |
| `ct.color.text.link` | Primary 700 `#20334B` | Primary 200 `#BFCFE3` | 12.83 / 11.67 ; as muted. Always underlined |
| `ct.color.text.link-hover` | Primary 800 `#172436` | Neutral 0 `#FFFFFF` | 15.65 on White ; 17.85 on 900. Underline to 2 px |
| `ct.color.text.link-visited` | Primary 500 `#42689A` | Primary 300 `#94AED1` | 5.71 on White ; 7.85 on 900, 5.64 on 700 |
| `ct.color.border` | Neutral 500 `#85847F` | Primary 400 `#6289BC` | UI 3:1: 3.75 / 3.41 ; 4.95 / 4.34 / 3.56. Controls and meaningful edges |
| `ct.color.border.strong` | Primary 700 `#20334B` | Neutral 0 `#FFFFFF` | Structural rules, record grids, table header edge: 12.83 / 11.67 ; 17.85 on 900 |
| `ct.color.border.rule` | Neutral 300 `#C7C6C1` | Primary 600 `#314D72` | Decorative 1 px rules, ruled-cell gaps: 1.71 / 1.56 ; 2.07 / 1.81 / 1.49. Never a control edge |
| `ct.color.primary` | Primary 700 `#20334B` | Neutral 0 `#FFFFFF` | Button fill, outline, rules: 12.83 on White ; 17.85 on 900 |
| `ct.color.primary.hover` | Primary 600 `#314D72` | Neutral 100 `#ECEBE7` | White label on light 8.62 ; Primary 700 label on dark 10.76 |
| `ct.color.primary.active` | Primary 800 `#172436` | Neutral 200 `#DEDDD8` | White label on light 15.65 ; Primary 700 label on dark 9.43 |
| `ct.color.on-primary` | Neutral 0 `#FFFFFF` | Primary 700 `#20334B` | 12.83 on fill, both modes |
| `ct.color.accent-marker` | Accent 500 `#EE7555` | Accent 500 `#EE7555` | Level Line, bars, rules, active-step underline. 2.87 on White (decorative only) ; 6.21 on 900, 5.45 on 800, 4.47 on 700 |
| `ct.color.accent-marker.text` | Accent 700 `#A33C1F` | Accent 400 `#F1876A` | Reference tags, index numbers: 6.51 / 5.92 ; 7.15 on 900, 6.27 on 800, 5.14 on 700 |
| `ct.color.accent-marker.figure` | Accent 600 `#C54826` | Accent 500 `#EE7555` | One large key figure per view: 4.85 on White, 4.41 on Stone (large only) ; as marker |
| `ct.color.focus` | Primary 700 `#20334B` | Neutral 0 `#FFFFFF` | 2 px ring, 2 px offset: 12.83 / 11.67 ; 17.85 / 15.65 / 12.83 |
| `ct.color.disabled.fg` / `.bg` | Neutral 500 / Neutral 100 | Primary 400 / Primary 700 | Exempt from contrast; never live text |
| `ct.color.state.<s>.fg / bg / border` | 700 / 100 / 500 values | dark text / Primary 700 / dark text | s = info, error, warning, success |
| `ct.color.secondary.*` | TBD | TBD | Reserved; not usable |

`ct.color.fixed.*` (new in s12, same in every mode, for physical records shown on screen): `paper` Neutral 0, `ink` Neutral 900, `band` Primary 700, `on-band` Neutral 0, `rule` Primary 700, `marker` Accent 500, `marker-text` Accent 700. A printed sticker or certificate does not go dark.

Status semantic tokens `ct.color.state.<s>.fg | bg | border`:

| State | Light fg on White / on its bg | Light border on White | Dark text on Primary 700 / on Primary 800 |
|---|---|---|---|
| success | 5.38:1 / 4.74:1 | 3.42:1 | 6.72:1 / 8.19:1 |
| error | 6.82:1 / 5.94:1 | 4.80:1 | 5.52:1 / 6.73:1 |
| warning | 5.93:1 / 5.41:1 | 3.93:1 | 6.96:1 / 8.48:1 |
| info | 5.99:1 / 5.24:1 | 3.74:1 | 6.64:1 / 8.10:1 |

All pass 4.5:1 for text and 3:1 for border and icon in both modes. Status always carries icon and word. Accent never appears inside a state component.

### Band scope

A Primary 700 band (header, footer, process band, table header) sits inside a light page, so tokens inside it must follow the dark column or the Primary 700 focus ring disappears. `[data-surface="band"]` re-maps these tokens on `ct.color.band`:

| Token | Value in scope | Ratio on Primary 700 |
|---|---|---|
| `text`, `text.heading`, `text.link` | White (`on-band`) | 12.83:1 |
| `text.muted` | Primary 200 | 8.10:1 |
| `primary` / `on-primary` | White fill / Primary 700 label (the on-dark button) | 12.83:1 |
| `focus` | White | 12.83:1 |
| `border` | Primary 400 | 3.56:1 |
| `border.strong` | White | 12.83:1 |
| `border.rule` | Primary 500 | 2.25:1 (decorative) |
| `accent-marker` / `.text` | Accent 500 / Accent 400 | 4.47:1 (lines, large figures) / 5.14:1 |

### High-contrast stance

v2.0 ships standard contrast plus full `forced-colors` support (12.13). A named `more-contrast` set is **deferred to v1.1** of the token file because the standard set already passes AA everywhere. Proposed values, ready for that release (ratios computed):

| Token | Light more | Ratio | Dark more | Ratio |
|---|---|---|---|---|
| `text.muted` | Neutral 800 `#35383A` | 11.81:1 on White | Primary 100 `#DFE7F1` | 12.55:1 on 800 |
| `border` | Neutral 700 `#4A4B48` | 8.78:1 on White | Primary 300 `#94AED1` | 7.85:1 on 900 |
| `border.rule` | Neutral 500 `#85847F` | 3.75:1 on White | Primary 400 `#6289BC` | 4.95:1 on 900 |

### Print mode

Print uses the light set on white paper with these overrides: links underlined with the URL printed after them, backgrounds only where a template needs them (certificate and brochure PDFs set `print-color-adjust: exact`; ordinary web pages print on white). CMYK is a reference table, not a conversion: values are s03.3 starting points, all marked **verify with printer / physical swatch** before any bulk order.

| Token | Coated start | Uncoated start | Pantone (verify) |
|---|---|---|---|
| `primary.700` `#20334B` | C100 M80 Y35 K45 | C90 M70 Y35 K40 | 534 C / 534 U |
| `accent.500` `#EE7555` | C0 M62 Y65 K0 | C0 M58 Y62 K0 | 170 C or 7416 C |
| `neutral.900` `#25282A` | K90 text; C60 M50 Y45 K85 solids | K90 | Black 6 C |
| `neutral.0` White | Paper | Paper | n/a |
| `neutral.50` Stone `#F5F4F1` | Warm stock or light flat tint, no value fixed | same | n/a |
| `secondary.*` | TBD | TBD | TBD |

## 12.7 Component tokens

Component tokens are created only when a component needs its own override. Day one has these groups. All radius values are 0, 2 or 4 px; there is no shadow entry anywhere.

**Button** (height `ct.size.control.height`, radius `sm` 4, label `ct.font.*.button`: Anek 700 uppercase +0.06em 14 px)

| Token | Points to | Light | Dark | Ratio (light / dark) |
|---|---|---|---|---|
| `ct.button.primary.bg` | `color.primary` | Primary 700 | Neutral 0 | 12.83 vs White ground / 17.85 vs 900 |
| `ct.button.primary.fg` | `color.on-primary` | White | Primary 700 | 12.83 / 12.83 |
| `ct.button.primary.bg-hover` | `color.primary.hover` | Primary 600 | Neutral 100 | 8.62 / 10.76 |
| `ct.button.primary.bg-active` | `color.primary.active` | Primary 800 | Neutral 200 | 15.65 / 9.43 |
| `ct.button.outline.border` | `color.primary` | 1 px Primary 700 | 1 px Neutral 0 | 12.83 / 17.85 |
| `ct.button.outline.fg` | `color.primary` | Primary 700 | Neutral 0 | 12.83 / 17.85 |
| `ct.button.outline.bg-hover` | none (primitive-free) | Primary 50 | Primary 600 | Label 11.64 / White label 8.62 |
| `ct.button.outline.bg-active` | none | Primary 100 | Primary 500 | Label 10.29 / White label 5.71 |
| `ct.button.on-dark.bg` | `color.on-band` | White | White | Fill vs band 12.83 |
| `ct.button.on-dark.fg` | `color.primary` of band's light value | Primary 700 | Primary 700 | 12.83 |
| `ct.button.on-dark.bg-hover` | none | Neutral 50 | Neutral 50 | 11.67 |
| `ct.button.on-dark.bg-active` | none | Neutral 100 | Neutral 100 | 10.76 |
| `ct.button.radius` | `radius.sm` | 4 | 4 | s05 |

`on-dark` is the button on photographs (over the 70% scrim) and on primary bands. Outline hover and active steps reference scale primitives through the semantic layer in the generated file (12.8); the table lists the values. **There is no accent button token.**

**Link**

| Token | Points to | Light | Dark | Ratio |
|---|---|---|---|---|
| `ct.link.color` | `color.text.link` | Primary 700, underline 1 px | Primary 200, underline 1 px | 12.83 / 11.26 on 900 |
| `ct.link.color-hover` | `color.text.link-hover` | Primary 800, underline 2 px | White, underline 2 px | 15.65 / 17.85 |
| `ct.link.color-visited` | `color.text.link-visited` | Primary 500 | Primary 300 | 5.71 / 7.85 |

**Input** (height `control.height`, radius `sm` 4)

| Token | Points to | Light | Dark | Ratio (light / dark) |
|---|---|---|---|---|
| `ct.input.bg` | `color.surface` | White | Primary 700 | n/a |
| `ct.input.fg` | `color.text` | Graphite | Primary 50 | 14.83 / 11.64 |
| `ct.input.border` | `color.border`, `border.width.thin` | Neutral 500, 1 px | Primary 400, 1 px | 3.75 / 3.56 on 700 |
| `ct.input.border-error` | `color.state.error.border`, `border.width.base` | `#D0365F`, 2 px | `#F28BA8`, 2 px | 4.80 / 5.52 on 700 |
| `ct.input.label` | `ct.font.*.label` | Plex Mono caps, `text.heading` | same, White | 12.83 / 17.85 |

Error text is `state.error.fg` (dark: dark text) with icon and the word "Error" or the message (6.82 on White; 5.52 on Primary 700).

**Card as ruled cell** (s05.5, s07.4): the card is a cell of a ruled grid, not a floating box.

| Token | Points to | Light | Dark | Note |
|---|---|---|---|---|
| `ct.card.bg` | `color.surface` | White (cell on Stone) or Stone | Primary 700 | Cell fill |
| `ct.card.gap` | `border.width.thin` | 1 px | 1 px | Grid `gap`, shows the grid background as the line |
| `ct.card.grid-bg` | `color.border.rule` | Neutral 300 | Primary 600 | Use `border.strong` for the strongest division (record grids) |
| `ct.card.padding` | `space.inset.cell` | 24 mobile, 40 desktop | same | s07 |
| `ct.card.radius` | `radius.none` | 0 | 0 | Cell is square |
| `ct.card.container-radius` | `radius.xs` | 2 | 2 | Outer grid container (0 to 2 in s07) |
| `ct.card.standalone-radius` | `radius.sm` | 4 | 4 | A single card outside a grid, 1 px `border.rule` edge, no shadow (s05) |
| `ct.card.border-hover` | `color.border.strong` | Primary 700, 1 px | White, 1 px | Clickable card only; needs visible link text and chevron |

**Sticker** (Cleaning Date Sticker, on-screen preview; a printed object, never themed, so it reads `color.fixed.*`)

| Token | Points to | Value | Ratio |
|---|---|---|---|
| `ct.sticker.bg` | `color.fixed.paper` | White | n/a |
| `ct.sticker.band-bg`, `.band-fg` | `color.fixed.band`, `color.fixed.on-band` | Primary 700, White (title band, heading style) | 12.83:1 |
| `ct.sticker.grid` | `color.fixed.rule`, `border.width.thin` | 1 px Primary 700 gaps, white cells, inner corners 0 | n/a |
| `ct.sticker.value` | `color.fixed.ink`, `ct.font.*.value` | Plex Mono 600 caps, Graphite | 14.83:1 |
| `ct.sticker.ref` | `color.fixed.marker-text`, `ct.font.*.ref` | Accent 700, Plex Mono caps | 6.51:1 |
| `ct.sticker.underline` | `color.fixed.marker`, `border.width.bold` | 3 px Accent 500 under the "Next due" value (replaces the v1 coral band) | 2.87:1, decorative; date also written as text |
| `ct.sticker.radius` | `radius.sm` on screen | 4 px; print about 1.5 mm | s05.13 |

**Step node** (5-step process, s05.11)

| Token | Points to | Value | Ratio |
|---|---|---|---|
| `ct.step.size` | `size.node.md` / `.sm` | 40 px / 32 px at 360 | Hit area stays 48 |
| `ct.step.radius` | `radius.xs` | 2 px, square | s05 |
| `ct.step.border` | `color.border.strong`, `border.width.base` | 2 px Primary 700 (dark: White), surface fill | 12.83 / 17.85 |
| `ct.step.numeral` | `ct.font.*.ref`, `color.text.heading` | Plex Mono 600, "01" to "05", tabular | 12.83 |
| `ct.step.active-bg`, `.active-fg` | `color.primary`, `color.on-primary` | Primary 700 fill, White numeral | 12.83 |
| `ct.step.active-underline` | `color.accent-marker`, `border.width.bold` | 3 px Accent 500, 16 px long, square ends | 4.47 on Primary 700 (UI) |
| `ct.step.optional-border` | `border.width.base` | Step 05 dashed, 4 px dash and gap, label "* WHERE APPLICABLE" in mono caps | Shape carries the meaning |
| `ct.step.connector` | `color.border.strong`, `border.width.base` | 2 px, square caps, 90 degree miter elbows | n/a |

Notes: the primary button gets a 2 px focus ring from the page ground (offset 2 px leaves ground between ring and element), so it needs no extra token. The sticker never changes in dark mode; the screen preview sits on a surface cell. In dark mode the active node is a White fill, so its Accent underline is 2.87:1 against White and decorative only (item 12.22.9).

## 12.8 DTCG JSON excerpt

`/tokens/src/primitive/color.tokens.json` (tier 1), `semantic/light.tokens.json` and `dark.tokens.json` (tier 2), `component/button.tokens.json` (tier 3). Token `$root` lets a name be both a token and a group (`ct.color.primary` is a job and also a scale); alias syntax to `$root` and the name transform must be verified on the pinned versions (12.22 item 3).

```json
{
  "ct": { "color": {
    "$type": "color",
    "primary": {
      "50":  { "$value": { "colorSpace": "srgb", "components": [0.9451, 0.9569, 0.9765], "hex": "#F1F4F9" } },
      "700": { "$value": { "colorSpace": "srgb", "components": [0.1255, 0.2, 0.2941], "hex": "#20334B" },
               "$description": "Primary navy. LOCK.",
               "$extensions": { "com.cleantank": { "oklch": "0.317 0.050 255", "cmykCoated": "C100 M80 Y35 K45 (verify)" } } },
      "900": { "$value": { "colorSpace": "srgb", "components": [0.0588, 0.0941, 0.1412], "hex": "#0F1824" } }
    },
    "secondary": {
      "$description": "TBD, owner to decide. No tokens and no values until chosen.",
      "$extensions": { "com.cleantank": { "status": "TBD" } }
    },
    "accent": {
      "500": { "$value": { "colorSpace": "srgb", "components": [0.9333, 0.4588, 0.3333], "hex": "#EE7555" },
               "$description": "Marker only. Never a button fill, never text on white (2.87:1). LOCK." },
      "700": { "$value": { "colorSpace": "srgb", "components": [0.6392, 0.2353, 0.1216], "hex": "#A33C1F" },
               "$description": "Reference tags and index numbers on white, 6.51:1." }
    },
    "neutral": {
      "0":   { "$value": { "colorSpace": "srgb", "components": [1, 1, 1], "hex": "#FFFFFF" } },
      "50":  { "$value": { "colorSpace": "srgb", "components": [0.9608, 0.9569, 0.9451], "hex": "#F5F4F1" },
               "$description": "Stone. Alternate ground, counts inside the 60% neutral." },
      "500": { "$value": { "colorSpace": "srgb", "components": [0.5216, 0.5176, 0.4980], "hex": "#85847F" },
               "$description": "Lightest grey allowed for control borders, 3.75:1 on white." },
      "600": { "$value": { "colorSpace": "srgb", "components": [0.3961, 0.3961, 0.3725], "hex": "#65655F" },
               "$description": "Muted text, 5.87:1 on white." },
      "900": { "$value": { "colorSpace": "srgb", "components": [0.1451, 0.1569, 0.1647], "hex": "#25282A" } }
    },
    "state": { "error": {
      "fg":     { "$value": { "colorSpace": "srgb", "components": [0.6902, 0.102, 0.2706], "hex": "#B01A45" } },
      "bg":     { "$value": { "colorSpace": "srgb", "components": [0.9882, 0.9216, 0.9412], "hex": "#FCEBF0" } },
      "border": { "$value": { "colorSpace": "srgb", "components": [0.8157, 0.2118, 0.3725], "hex": "#D0365F" } },
      "dark":   { "$value": { "colorSpace": "srgb", "components": [0.9490, 0.5451, 0.6588], "hex": "#F28BA8" } }
    } }
  } }
}
```

```json
{ "ct": { "color": {
    "$type": "color",
    "bg":      { "$root": { "$value": "{ct.color.neutral.0}" }, "subtle": { "$value": "{ct.color.neutral.50}" } },
    "surface": { "$value": "{ct.color.neutral.0}" },
    "text":    { "$root": { "$value": "{ct.color.neutral.900}" },
                 "muted": { "$value": "{ct.color.neutral.600}" },
                 "link":  { "$value": "{ct.color.primary.700}", "$description": "Always underlined." } },
    "border":  { "$root": { "$value": "{ct.color.neutral.500}" },
                 "strong": { "$value": "{ct.color.primary.700}" },
                 "rule":   { "$value": "{ct.color.neutral.300}" } },
    "primary":    { "$root": { "$value": "{ct.color.primary.700}" }, "hover": { "$value": "{ct.color.primary.600}" } },
    "on-primary": { "$value": "{ct.color.neutral.0}" },
    "accent-marker": { "$root": { "$value": "{ct.color.accent.500}" },
                       "text": { "$value": "{ct.color.accent.700}" },
                       "figure": { "$value": "{ct.color.accent.600}" } },
    "focus":   { "$value": "{ct.color.primary.700}" }
} } }
```

Dark file (same keys, only values change): `bg` `{ct.color.primary.900}`, `bg.subtle` `{ct.color.primary.800}`, `surface` `{ct.color.primary.700}`, `text` `{ct.color.primary.50}`, `text.muted` and `text.link` `{ct.color.primary.200}`, `border` `{ct.color.primary.400}`, `border.strong` `{ct.color.neutral.0}`, `border.rule` `{ct.color.primary.600}`, `primary` `{ct.color.neutral.0}`, `on-primary` `{ct.color.primary.700}`, `accent-marker.text` `{ct.color.accent.400}`, `accent-marker.figure` `{ct.color.accent.500}`, `focus` `{ct.color.neutral.0}`.

```json
{ "ct": {
  "button": { "primary": {
    "bg": { "$type": "color", "$value": "{ct.color.primary}" },
    "fg": { "$type": "color", "$value": "{ct.color.on-primary}" },
    "radius": { "$type": "dimension", "$value": "{ct.radius.sm}" } } },
  "radius": {
    "none": { "$type": "dimension", "$value": { "value": 0, "unit": "px" } },
    "xs":   { "$type": "dimension", "$value": { "value": 2, "unit": "px" } },
    "sm":   { "$type": "dimension", "$value": { "value": 4, "unit": "px" } } },
  "font": {
    "width": { "condensed": { "$type": "number", "$value": 78 }, "normal": { "$type": "number", "$value": 100 } },
    "weight": { "bold": { "$type": "fontWeight", "$value": 700 } },
    "tracking": { "heading": { "$type": "number", "$value": 0.01, "$extensions": { "com.cleantank": { "unit": "em" } } },
                  "label":   { "$type": "number", "$value": 0.08, "$extensions": { "com.cleantank": { "unit": "em" } } } },
    "style": { "h2": { "$type": "typography", "$value": {
        "fontFamily": "{ct.font.family.heading}", "fontWeight": "{ct.font.weight.bold}",
        "fontSize": "{ct.font.size.h2.max}", "letterSpacing": { "value": 0.01, "unit": "em" }, "lineHeight": 1.02 },
      "$extensions": { "com.cleantank": { "fontStretch": 78, "textTransform": "uppercase", "maxWords": 8 } } } } },
  "motion": {
    "duration": { "base": { "$type": "duration", "$value": { "value": 150, "unit": "ms" } } },
    "easing":   { "standard": { "$type": "cubicBezier", "$value": [0.2, 0, 0.38, 0.9] } } },
  "space": { "5": { "$type": "dimension", "$value": { "value": 24, "unit": "px" } } }
} }
```

There is no `shadow` object in any file. Deprecation example: `"$deprecated": "Use ct.color.border.rule. Removed in 3.0.0."`. If the `typography` composite does not accept `em` letter-spacing in the pinned Style Dictionary, the build falls back to the `number` plus `em` extension (12.4).

## 12.9 CSS variables excerpt

Generated, never hand-edited. Light on `:root`; dark applies to the attribute and, for no-JavaScript visitors, to the system preference. Secondary is intentionally undefined.

```css
:root {
  --ct-color-neutral-0:#FFFFFF; --ct-color-neutral-50:#F5F4F1; --ct-color-neutral-300:#C7C6C1;
  --ct-color-neutral-500:#85847F; --ct-color-neutral-600:#65655F; --ct-color-neutral-900:#25282A;
  --ct-color-primary-50:#F1F4F9; --ct-color-primary-600:#314D72; --ct-color-primary-700:#20334B;
  --ct-color-primary-800:#172436; --ct-color-primary-900:#0F1824;
  --ct-color-accent-500:#EE7555; --ct-color-accent-700:#A33C1F;
  /* --ct-color-secondary-*: intentionally undefined (TBD, owner to decide) */
  --ct-color-bg:var(--ct-color-neutral-0);
  --ct-color-bg-subtle:var(--ct-color-neutral-50);
  --ct-color-surface:var(--ct-color-neutral-0);
  --ct-color-band:var(--ct-color-primary-700);
  --ct-color-on-band:var(--ct-color-neutral-0);
  --ct-color-text:var(--ct-color-neutral-900);
  --ct-color-text-muted:var(--ct-color-neutral-600);
  --ct-color-text-link:var(--ct-color-primary-700);
  --ct-color-border:var(--ct-color-neutral-500);
  --ct-color-border-strong:var(--ct-color-primary-700);
  --ct-color-border-rule:var(--ct-color-neutral-300);
  --ct-color-primary:var(--ct-color-primary-700);
  --ct-color-primary-hover:var(--ct-color-primary-600);
  --ct-color-on-primary:var(--ct-color-neutral-0);
  --ct-color-accent-marker:var(--ct-color-accent-500);
  --ct-color-accent-marker-text:var(--ct-color-accent-700);
  --ct-color-focus:var(--ct-color-primary-700);
  --ct-color-state-error-fg:#B01A45; --ct-color-state-error-bg:#FCEBF0; --ct-color-state-error-border:#D0365F;
  --ct-radius-none:0; --ct-radius-xs:2px; --ct-radius-sm:4px;
  --ct-border-width-thin:1px; --ct-border-width-base:2px; --ct-border-width-bold:3px;
  --ct-focus-width:2px; --ct-focus-offset:2px;
  --ct-space-4:1rem; --ct-space-5:1.5rem;
  --ct-font-width-condensed:78%; --ct-font-width-normal:100%;
  --ct-font-tracking-heading:0.01em; --ct-font-tracking-button:0.06em; --ct-font-tracking-label:0.08em; --ct-font-tracking-ref:0.1em;
  --ct-motion-duration-base:150ms; --ct-motion-easing-standard:cubic-bezier(0.2,0,0.38,0.9);
  color-scheme: light;
}
:root[data-theme="dark"] {
  --ct-color-bg:var(--ct-color-primary-900);
  --ct-color-bg-subtle:var(--ct-color-primary-800);
  --ct-color-surface:var(--ct-color-primary-700);
  --ct-color-text:var(--ct-color-primary-50);
  --ct-color-text-muted:var(--ct-color-primary-200);
  --ct-color-text-link:var(--ct-color-primary-200);
  --ct-color-border:var(--ct-color-primary-400);
  --ct-color-border-strong:var(--ct-color-neutral-0);
  --ct-color-border-rule:var(--ct-color-primary-600);
  --ct-color-primary:var(--ct-color-neutral-0);
  --ct-color-primary-hover:var(--ct-color-neutral-100);
  --ct-color-on-primary:var(--ct-color-primary-700);
  --ct-color-accent-marker-text:var(--ct-color-accent-400);
  --ct-color-focus:var(--ct-color-neutral-0);
  color-scheme: dark;
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) { /* same declarations as the dark block, generated */ }
}
[data-surface="band"] {
  --ct-color-text:var(--ct-color-on-band); --ct-color-text-muted:var(--ct-color-primary-200);
  --ct-color-text-link:var(--ct-color-on-band); --ct-color-border:var(--ct-color-primary-400);
  --ct-color-border-strong:var(--ct-color-on-band); --ct-color-border-rule:var(--ct-color-primary-500);
  --ct-color-primary:var(--ct-color-neutral-0); --ct-color-on-primary:var(--ct-color-primary-700);
  --ct-color-accent-marker-text:var(--ct-color-accent-400); --ct-color-focus:var(--ct-color-neutral-0);
}
:focus-visible { outline: var(--ct-focus-width) solid var(--ct-color-focus); outline-offset: var(--ct-focus-offset); border-radius: var(--ct-radius-sm); }
.ct-ruled { display:grid; gap:var(--ct-border-width-thin); background:var(--ct-color-border-rule); border-radius:var(--ct-radius-xs); }
.ct-ruled > * { background:var(--ct-color-surface); padding:var(--ct-space-5); border-radius:var(--ct-radius-none); }
svg.ct-line { stroke-linecap:square; stroke-linejoin:miter; stroke-miterlimit:4; }
```

## 12.10 Tailwind v4 @theme excerpt

Components use semantic utilities only (`bg-primary text-on-primary`), so they need no `dark:` colour variants. Role scales are mapped for charts, illustrations and print preview (rule 12.2 exception). Eight role names are mapped: primary, secondary, accent, neutral, info, success, warning, error.

```css
@import "tailwindcss";
@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));

@theme inline {
  --color-*: initial;

  /* Role scales (fixed values, not mode-aware) */
  --color-primary-50: var(--ct-color-primary-50);   --color-primary-100: var(--ct-color-primary-100);
  --color-primary-200: var(--ct-color-primary-200); --color-primary-300: var(--ct-color-primary-300);
  --color-primary-400: var(--ct-color-primary-400); --color-primary-500: var(--ct-color-primary-500);
  --color-primary-600: var(--ct-color-primary-600); --color-primary-700: var(--ct-color-primary-700);
  --color-primary-800: var(--ct-color-primary-800); --color-primary-900: var(--ct-color-primary-900);
  /* --color-secondary-*: NOT declared. TBD (owner to decide). With --color-*: initial,
     a class such as bg-secondary-500 generates nothing, which is the intended guard. */
  --color-accent-400: var(--ct-color-accent-400);   --color-accent-500: var(--ct-color-accent-500);
  --color-accent-600: var(--ct-color-accent-600);   --color-accent-700: var(--ct-color-accent-700);
  --color-neutral-0: var(--ct-color-neutral-0);     --color-neutral-50: var(--ct-color-neutral-50);
  --color-neutral-100: var(--ct-color-neutral-100); --color-neutral-200: var(--ct-color-neutral-200);
  --color-neutral-300: var(--ct-color-neutral-300); --color-neutral-500: var(--ct-color-neutral-500);
  --color-neutral-600: var(--ct-color-neutral-600); --color-neutral-900: var(--ct-color-neutral-900);

  /* State: fg = text, -bg = soft background, -border = border and icon */
  --color-info: var(--ct-color-state-info-fg);       --color-info-bg: var(--ct-color-state-info-bg);       --color-info-border: var(--ct-color-state-info-border);
  --color-success: var(--ct-color-state-success-fg); --color-success-bg: var(--ct-color-state-success-bg); --color-success-border: var(--ct-color-state-success-border);
  --color-warning: var(--ct-color-state-warning-fg); --color-warning-bg: var(--ct-color-state-warning-bg); --color-warning-border: var(--ct-color-state-warning-border);
  --color-error: var(--ct-color-state-error-fg);     --color-error-bg: var(--ct-color-state-error-bg);     --color-error-border: var(--ct-color-state-error-border);

  /* Semantic (mode-aware) */
  --color-page: var(--ct-color-bg);         --color-subtle: var(--ct-color-bg-subtle);
  --color-surface: var(--ct-color-surface); --color-band: var(--ct-color-band);
  --color-on-band: var(--ct-color-on-band); --color-body: var(--ct-color-text);
  --color-heading: var(--ct-color-text-heading); --color-muted: var(--ct-color-text-muted);
  --color-link: var(--ct-color-text-link);
  --color-control: var(--ct-color-border);  --color-rule: var(--ct-color-border-rule);
  --color-rule-strong: var(--ct-color-border-strong);
  --color-primary: var(--ct-color-primary); --color-on-primary: var(--ct-color-on-primary);
  --color-marker: var(--ct-color-accent-marker); --color-marker-text: var(--ct-color-accent-marker-text);
  --color-focus: var(--ct-color-focus);

  --breakpoint-*: initial;
  --breakpoint-sm: 360px; --breakpoint-md: 768px; --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px; --breakpoint-2xl: 1440px;
  --radius-*: initial;
  --radius-none: var(--ct-radius-none); --radius-xs: var(--ct-radius-xs); --radius-sm: var(--ct-radius-sm);
  --shadow-*: initial;   /* no shadow utilities exist */
  --font-sans: var(--ct-font-family-sans); --font-heading: var(--ct-font-family-heading);
  --font-mono: var(--ct-font-family-mono);
  --ease-standard: var(--ct-motion-easing-standard);
}
```

`--shadow-*: initial` removes every `shadow-*` utility, so a stray `shadow-md` generates nothing. In the Tailwind map `primary` is both a semantic colour (`bg-primary`, mode-aware) and a scale (`bg-primary-700`, fixed); lint flags scale steps inside component files.

Spacing trap: Tailwind's `--spacing` is 0.25rem (4 px), so `p-6` is 24 px, but `ct.space.5` is also 24 px. Map by value, not by index:

| `ct.space.n` | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Tailwind number | 1 | 2 | 3 | 4 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 |

Other Tailwind numbers (5, 7, 9, 14 and so on) are off-scale and fail lint.

## 12.11 Theme layers: what changes and what stays

| Layer | May change | Locked | Clean Tank policy |
|---|---|---|---|
| Colour mode | Semantic-to-primitive map | Names, roles, layout, state meaning | Light (default), dark, print; more-contrast v1.1 |
| Surface scope | Text, link, focus, border and primary roles inside a primary band | Primitives | `band` only |
| Density | `ct.space.inset.*`, row heights | Contrast, type scale, hit targets | Comfortable at launch; compact for dense tables (s07.6) |
| Franchise or sub-brand | **Nothing** | Everything | **No franchise sub-themes** |
| Segment (families, RWAs, institutions, franchise partners) | **No tokens**; copy tone and imagery only | Everything | Voice differs, look does not |
| Seasonal | Content only | Everything | 12.12 |
| Campaign | Hero photo, headline, one CTA label | Everything | 12.12 |

**No franchise sub-themes (LOCK).** Phase 9 and Phase 11 set one national standard: a franchise operator uses the Authorised Service Provider lockup (s02), the same tokens and the same templates. The operator's name and city fill a text slot; no operator may carry a colour, font, radius or mode of their own. A namespace for a second brand (`ct.brand.<name>`) is **not reserved**; it would be created only by a new owner decision and a major version.

**Productive vs expressive.** The same palette serves both; the type set differs.

| Set | Type tokens | Surfaces |
|---|---|---|
| Expressive | `display`, `h1`, `body-l`, Level Line, photo hero with scrim | Website home hero, social posts, video, franchise brochure cover |
| Productive | `h2` to `h4`, `body`, `small`, `data`, `label`, `ref`, no display size | Booking form, AMC schedule, cleaning certificate, tender document, invoice, WhatsApp card, admin screens |

## 12.12 Seasonal, festive and campaign policy

Festivals (Diwali, Holi, Gurpurab, Eid, Independence Day, Republic Day) matter to customers across the states served. The brand responds with **content, not colour**.

| Allowed (FLEX, owner approves each) | Never |
|---|---|
| One short greeting line in plain text, in English, Hindi or Punjabi, reviewed by a native reader | Recolouring any token, the logo, the sticker or the site |
| At most **one** festive illustration, in the Clean Tank technical line style (s09), on the existing palette, in one slot (hero or footer, not both) | Saffron, green or orange-white-green bands; tricolour washes; any flag colour layout |
| Swapping the hero photo to a relevant real photograph | Religious symbols combined with the logo or palette; glitter, lamps, confetti, rays, bokeh |
| A calm "service hours may vary" notice where true | Festive offers, countdowns or urgency; accent used as a sale device |

Campaign limits (any named campaign, for example a pre-summer tank-cleaning awareness push):

1. Zero token overrides. A campaign uses existing tokens at their existing caps (accent 10%, accent only as a marker, no accent button).
2. Only the hero photo, headline copy and one CTA label may change; layout, type, state colours, contrast, wordmark, legal and qualifier text are locked.
3. A one-page brief names the owner (Gobind Galaxy), start date, end date and every claim; claims needing evidence are listed (Clean Tank Agent properties, CPWD DSR, the "60% of diseases" stat, any approval).
4. Festive and campaign assets carry an end date in the filename (`ct-campaign-<name>-<yyyymmdd-end>`); the release checklist removes expired files. Plan 4 to 6 weeks ahead.
5. State colours never flex, and accent never signals urgency or a sale (s03 rule 03.3).

## 12.13 Mode switching and OS settings

| Setting | Behaviour |
|---|---|
| Default | Light on White and Stone when the system gives no preference or the visitor chooses Light. Dark follows the system (`prefers-color-scheme`) when the choice is System |
| Manual toggle | Three choices in the footer or account menu: System, Light, Dark. Labelled in words, not just an icon |
| Attribute | `data-theme="light"` or `"dark"` on `<html>`, resolved from the choice. When the choice is System, the script writes the resolved value and updates it on the media-query change event |
| Persistence | `localStorage` key `ct-theme` with values `system`, `light`, `dark`. Read and write inside `try/catch`; the page renders correctly with storage blocked |
| No flash | Inline script in `<head>` before any CSS paints |
| Browser chrome | `<meta name="theme-color">` twice, `#FFFFFF` for light and `#0F1824` for dark; `color-scheme` set on `:root` |
| Print | `@media print` forces the light set regardless of mode |

```html
<script>
(function(){try{var k='ct-theme',p=localStorage.getItem(k)||'system',
d=matchMedia('(prefers-color-scheme: dark)').matches,
t=p==='system'?(d?'dark':'light'):p;
document.documentElement.setAttribute('data-theme',t);}catch(e){}})();
</script>
```

Forced colours and reduced motion:

```css
@media (forced-colors: active) {
  .ct-btn, .ct-input, .ct-card { border: var(--ct-border-width-base) solid CanvasText; }
  :focus-visible { outline: var(--ct-focus-width) solid Highlight; }
  .ct-node { border: var(--ct-border-width-base) solid CanvasText; forced-color-adjust: auto; }
}
```

Icons use `currentColor`; focus is an `outline`; no meaning is carried only by background colour (s03 state rule). Reduced motion follows s11.4.

## 12.14 Contrast gate (pass or fail grid)

Every semantic text pair is tested in every mode on each release. Minimums: 4.5:1 text, 3:1 large text and UI parts. Verified for this sheet:

| Mode | Pair | Ratio | Result |
|---|---|---|---|
| Light | `text` on `bg` | 14.83:1 | Pass |
| Light | `text` on `bg.subtle` | 13.49:1 | Pass |
| Light | `text.muted` on `bg.subtle` | 5.33:1 | Pass |
| Light | `text.link` on `bg.subtle` | 11.67:1 | Pass |
| Light | `on-primary` on `primary` (button) | 12.83:1 | Pass |
| Light | `primary` label on outline hover (Primary 50) | 11.64:1 | Pass |
| Light | `border` on `bg.subtle` | 3.41:1 | Pass (UI) |
| Light | `accent-marker.text` on `bg.subtle` | 5.92:1 | Pass |
| Light | `accent-marker` on `bg` (as text or UI) | 2.87:1 | Forbidden as text; decorative line only |
| Dark | `text` on `surface` | 11.64:1 | Pass |
| Dark | `text.muted` on `surface` | 8.10:1 | Pass |
| Dark | `on-primary` on `primary` (button) | 12.83:1 | Pass |
| Dark | `accent-marker.text` on `surface` | 5.14:1 | Pass |
| Dark | `border` on `surface` | 3.56:1 | Pass (UI) |
| Dark | `focus` on `bg.subtle` | 15.65:1 | Pass |
| Band | `on-band` on `band` | 12.83:1 | Pass |
| Band | `accent-marker` on `band` | 4.47:1 | Pass (UI, large only) |

## 12.15 Figma Variables structure

| Collection | Modes | Contents |
|---|---|---|
| CT Primitives | One mode ("Value") | Colour scales (primary, accent, neutral, state; secondary left empty), number variables for space, radius (0, 2, 4), border, size, opacity, z, font size min and max, line height, weight, width; string variables for font families |
| CT Semantic | Light, Dark | All `ct.color.*` jobs |
| CT Component | Light, Dark | Added when components diverge (day one: optional) |

Variable path equals token path with slashes (`color/text/muted`). Figma has Color, Number, String and Boolean types. There is no shadow style in the library. Variable write access through the REST API and extended collections depend on the Figma plan: **check the plan before promising a one-click sync**. Fallback: the Tokens Studio plugin or a one-way import of `figma.json`, run on each release. Frames in Figma use variables only; hex fills in a component are a review failure.

## 12.16 Governance, versioning and changelog

| Item | Rule |
|---|---|
| Owner | Central brand owner, Gobind Galaxy, approves tier 1 and tier 2 changes. A developer implements. Component tokens (tier 3) are owned by the component's owner and reviewed by the token owner |
| Request flow | Issue with reason, surfaces affected, proposed value, contrast table in light, dark and band scope. Merge by pull request; CI must be green |
| Franchisees and agencies | May request, may not change. Three requests for the same exception change the rule (s03 policy) |
| Versioning | Semver on `ct-tokens`. MAJOR: rename or remove a token, change a LOCK value, or any change that lowers a contrast ratio. MINOR: add a token, a mode or a component token. PATCH: fix a typo or description, rebuild with no value change. **The v2 rename (navy, coral, status to primary, accent, state; radius md, lg, xl, full and shadow removed) is the first MAJOR: `ct-tokens` 2.0.0** |
| Changelog | `CHANGELOG.md` in Keep a Changelog form; each line names the token, old and new value, reason, sheet reference and approver. The guide's front page shows the current tokens version |
| Deprecation | Mark `$deprecated` with the replacement. Keep for at least one MINOR release and 60 days; remove only in the next MAJOR |
| Secondary | Assigning the first `secondary` value is a MINOR release with a full contrast table and owner approval; it may not be previewed earlier |
| CI gates | JSON validates against DTCG; contrast script passes every semantic pair in every mode; grep finds no hex or raw px outside `/tokens`; no `shadow`, `gradient`, radius above 4 or `secondary` value; changelog changed; expired campaign files absent |
| Guide sync | Values in s03, s04, s05, s07, s11 and the repo are checked against each other on every MINOR release |

## 12.17 Rules

```
RULE 12.1:     Keep every colour, type, space, radius and motion value in /tokens and nowhere else.
CLASS:         MUST
REASON:        Exact and Ordered: one national standard needs one source of truth.
EXACT SPEC:    /tokens/src/**/*.tokens.json, DTCG 2025.10. No hex, raw px or raw ms in component code. Generated files are never hand-edited.
EXAMPLE:       The primary button reads var(--ct-button-primary-bg); the value #20334B exists once, in color.tokens.json.
ANTI-EXAMPLE:  A landing page with background:#ee7555 pasted from a screenshot.
TEST:          Does grep find a hex code, a px value off the scale or a cubic-bezier outside /tokens? Yes: reject.
EXCEPTION:     Photographs and client logos. Central brand owner approves any other.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 12.2:     Components and templates use semantic tokens; primitives are referenced only by semantic and component token files.
CLASS:         MUST
REASON:        Ordered: dark mode, band scope and any future rebrand stay one edit.
EXACT SPEC:    Tier order primitive > semantic > component. No primary.700, neutral.500 or accent.500 in a component file.
EXAMPLE:       A button fill is ct.color.primary, which maps to primary.700 in light and neutral.0 in dark.
ANTI-EXAMPLE:  A link set to ct.color.accent.500 "because it is the brand accent" (2.87:1 on white).
TEST:          Does any component file reference a tier-1 colour name? Yes: reject.
EXCEPTION:     Charts and illustrations may use the s03.10 data palette tokens directly.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 12.3:     Name tokens ct.<category>.<item>.<variant>, by role, with the CSS variable --ct-<same-path>.
CLASS:         MUST
REASON:        A stranger must find a value without asking.
EXACT SPEC:    Lower case, hyphens inside a segment, dots between segments; role names primary, secondary, accent, neutral, state only; no value, mode or place in a name.
EXAMPLE:       ct.color.text.muted
ANTI-EXAMPLE:  ct.color.navy.700, ct.color.grey-text-dark
TEST:          Does the name use a role or job, and does the CSS variable follow mechanically? No: reject.
EXCEPTION:     None.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 12.4:     Build dark mode by re-mapping semantic tokens onto the primary scale, never by inverting colours.
CLASS:         MUST
REASON:        Restrained: glaring or black dark screens break the brand and the contrast. Light stays the default.
EXACT SPEC:    bg #0F1824, bg.subtle #172436, surface #20334B; text #F1F4F9; primary fill #FFFFFF with #20334B label; marker text #F1876A; no shadows; 1 px Primary 600 rule.
EXAMPLE:       Dark service page: Primary 900 ground, Primary 700 ruled cells, white fill button, 12.83:1.
ANTI-EXAMPLE:  A black page with pure white text and an accent-filled button.
TEST:          Is the page #0F1824 and does every pair in 12.14 pass in dark?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 12.5:     Do not create franchise, district, segment or sub-brand themes.
CLASS:         NEVER
REASON:        One national standard, many local operators (Phase 9, Phase 11).
EXACT SPEC:    Zero overrides of any ct.* token by a franchisee. Operator name and city are text in a lockup slot.
EXAMPLE:       A Kharar operator's flyer uses the standard template with the Authorised Service Provider lockup.
ANTI-EXAMPLE:  A franchisee's "slightly brighter" blue site theme.
TEST:          Does any file define a token value that differs from the central release? Yes: reject.
EXCEPTION:     None. A new brand needs a new owner decision and a MAJOR version.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 12.6:     Respond to festivals and campaigns with content, never with colour.
CLASS:         NEVER (recolour) / MAY (one festive line, one illustration)
REASON:        Restrained; avoids saffron, green and tricolour readings.
EXACT SPEC:    Max one festive illustration and one greeting line per surface; zero token overrides; no tricolour wash; end date on every asset; accent and state never flex.
EXAMPLE:       A footer greeting in Hindi, plain text, owner approved, removed three days after.
ANTI-EXAMPLE:  A saffron hero band with a green footer for Republic Day.
TEST:          Do all colours come from tokens, is there at most one festive illustration, and is there an end date? No: reject.
EXCEPTION:     None for colour. Extra festive content needs written owner approval.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 12.7:     Honour the user's system settings: colour scheme, contrast, reduced motion and forced colours.
CLASS:         MUST
REASON:        Documented and accessible: WCAG 2.2 AA and customers on low-end or older phones.
EXACT SPEC:    prefers-color-scheme for the System choice; manual toggle; ct-theme storage in try/catch; no-flash script; forced-colors keeps borders and outline; reduced motion per s11.
EXAMPLE:       A visitor with dark system mode gets dark without a flash and can switch to Light.
ANTI-EXAMPLE:  A theme toggle that ignores the system and flashes white on load.
TEST:          Switch the OS to dark, to forced colours and to reduced motion: is the page correct in each?
EXCEPTION:     None.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 12.8:     Change tokens only by pull request with a contrast table, a semver bump and a changelog line.
CLASS:         MUST
REASON:        Documented: no silent drift between the guide, Figma and code.
EXACT SPEC:    Semver 12.16; light, dark and band tested; MAJOR if a LOCK value moves or a ratio falls.
EXAMPLE:       "2.1.0: add ct.color.text.link-visited band value; 5.64:1; approved by Central brand owner."
ANTI-EXAMPLE:  Editing a hex in the generated CSS to fix a banner.
TEST:          Does the change have a PR, ratios in each mode, a version and a changelog entry? No: reject.
EXCEPTION:     Emergency contrast fix may merge first and be documented within 48 hours.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 12.9:     Accent is a marker token: no button, link or text-on-white token may point to accent-marker or accent.500; secondary stays empty.
CLASS:         NEVER
REASON:        Exact and Restrained: accent on white is 2.87:1, and s03 forbids accent fills and CTAs.
EXACT SPEC:    ct.button.*.bg and ct.link.* never alias accent. accent-marker.text (Accent 700) is allowed only for ref tags and index numbers. No ct.color.secondary.* value, alias or preview until the owner assigns one.
EXAMPLE:       Reference tag REF CT-PR-05 reads ct.color.accent-marker.text.
ANTI-EXAMPLE:  ct.button.accent.bg, or a secondary hex invented in a mock-up.
TEST:          Does any component token resolve to accent.500 as a fill, or is any secondary value present? Yes: reject.
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 12.10:    Radius tokens are 0, 2 and 4 only; there are no shadow or gradient tokens.
CLASS:         NEVER
REASON:        Honest materials: depth is rules, ruled cells and solid bands (s05.6, s03.8).
EXACT SPEC:    ct.radius.none 0, xs 2, sm 4 (default). No md, lg, xl, full, shadow.* or gradient.* token in any file. Reset: box-shadow none.
EXAMPLE:       A card is a ruled cell with a 1 px rule, radius 0 in a grid or 4 standalone.
ANTI-EXAMPLE:  A 12 px rounded card with a soft shadow.
TEST:          Does CI find a radius above 4, or the strings shadow or gradient, in /tokens? Yes: reject.
EXCEPTION:     Circles for literal round objects are artwork, not tokens.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

## 12.18 Do / Don't

| Do | Don't |
|---|---|
| DO: reference `ct.color.primary` for every button fill | DON'T: reference `accent.500` for a fill, link or text on white |
| DO: re-map dark mode onto Primary 900, 800 and 700 | DON'T: invert light colours or use pure black |
| DO: keep one set of tokens for every district | DON'T: give a franchisee a colour or font variant |
| DO: greet a festival in one plain line | DON'T: recolour the site or add a tricolour band |
| DO: test every pair in light, dark, band scope and print | DON'T: test contrast in light mode only |
| DO: add a semantic token before hard-coding a value | DON'T: paste a hex into a component |
| DO: leave `ct.color.secondary.*` empty until the owner decides | DON'T: preview, alias or invent a secondary hex |
| DO: draw depth with a 1 px rule or a ruled cell | DON'T: add a shadow, gradient or radius above 4 |
| DO: switch the focus ring to white inside a band | DON'T: leave a Primary 700 ring on a Primary 700 band |

## 12.19 Accessibility & India notes

- Every mode passes WCAG 2.2 AA on its own: 4.5:1 text, 3:1 large text and UI parts (1.4.3, 1.4.11). Light, dark and band scope are tested separately (12.14).
- Focus ring, all modes: 2 px solid, 2 px offset, radius 4. Primary 700 on White and Stone (12.83:1, 11.67:1); White on Primary 900, 800 and 700 (17.85:1, 15.65:1, 12.83:1) and on photo with scrim (6.64:1 or more). Inside a band it flips to White through the band scope.
- Forced-colours mode is supported on day one (12.13); `prefers-contrast: more` is deferred with a written stance and proposed values (12.6).
- State is never colour alone: icon plus word in every mode (1.4.1). Links are always underlined: Primary 700 against Graphite body is 1.16:1.
- Hindi and Punjabi: tokens carry line heights per script (`ct.font.line-height.*.devanagari`, `.gurmukhi`), and the `lang` attribute switches them. Indic headings stay at width 100 with no case change and no tracking. Plex Mono has no Indic glyphs: Indic labels use Anek. Dark mode keeps Indic text at Primary 50 or White, never accent body text (thin strokes).
- Festive caution: accent (hue 13) is not saffron; never describe it as saffron, and keep the tricolour ban (s03.13). Greetings are checked by a native Hindi or Punjabi reader.
- Low-end Android on patchy networks: the token build ships one small CSS file; dark mode is CSS variables only (no second stylesheet download).

## 12.20 Day one vs later

| Day one | Later |
|---|---|
| One DTCG set: about 130 primitives, about 30 semantic jobs, six component groups; secondary empty | Secondary scale and tokens once the owner chooses a colour |
| Light (default) and dark semantic files with the contrast table (12.14) | `more-contrast` set (v1.1) |
| CSS variables, Tailwind `@theme inline`, no-flash script, band scope | Compact density mode for dense tables |
| Owner (Gobind Galaxy), naming grammar, semver, changelog | Style Dictionary pipeline for Figma sync once a designer or second platform appears |
| Print reference table (verify with printer) | CI contrast gate and hex-grep (at a team of 3 or more; manual checklist before) |
| Rule: no sub-themes, no festive recolouring, no accent buttons | Swatch file (.ase) and downloadable token JSON on the brand portal; campaign kit templates (content slots only) |

## 12.21 Checklist

- [ ] Three tiers explained with the primary-button alias chain (12.2)
- [ ] Naming grammar with good and bad examples, role names only (12.3)
- [ ] Primitive colour by role: primary, secondary (TBD, no values), accent, neutral 0 to 900, state (12.5)
- [ ] Radius 0, 2, 4 only; no shadow or gradient tokens; trimmed motion set (12.5)
- [ ] Type tokens include width, case, tracking, weight, line height per script (12.5)
- [ ] Light (default) and dark semantic tables with contrast ratios (12.6)
- [ ] Dark rules: primary-based, no inversion, elevation by lightness and 1 px rule, accent at 10% cap
- [ ] Band scope table with ratios (12.6)
- [ ] Component tokens: button primary, outline, on-dark; input; card as ruled cell; sticker; step node (12.7)
- [ ] High-contrast stance written (deferred to v1.1, forced-colors on day one)
- [ ] Mode switching: system choice, manual toggle, `ct-theme` persistence, no-flash script (12.13)
- [ ] Campaign rules: what flexes, what is locked, end date, owner (12.12)
- [ ] Franchise, segment and sub-brand rule: no themes (12.11)
- [ ] DTCG excerpt, build command and file paths (12.4, 12.8)
- [ ] CSS and Tailwind snippets with the eight mapped roles; Figma collections (12.9, 12.10, 12.15)
- [ ] Governance, semver (2.0.0 for the rename), changelog, deprecation (12.16)
- [ ] Contrast checked in light, dark and band scope, with date and name of the checker
- [ ] Token values match s03, s04, s05, s07 and s11 (repo and guide diffed; clashes in 12.22)
- [ ] Print mode CMYK table marked verify with printer
- [ ] No retired names remain (Clean White, Uniform Navy, Care Coral, Checklist Ink, Mist White, ct.color.navy, ct.color.coral, ct.color.status)

## 12.22 Open items & evidence needed

| # | Item | Needed |
|---|---|---|
| 1 | Control height and hit target clash | Owner ruling and s03 say button height 44 to 48; s05 says 48 at every width and sets `ct.size.hit.min` 44 (WCAG floor is 24); s07 sets `ct.space.target.min` 48 with 44 as absolute minimum. This sheet sets `ct.size.control.height` 48, `ct.size.hit.min` 44, `ct.size.hit.target` 48 and makes `ct.space.target.min` an alias of hit.target. Owner to confirm 48 or 44 at 360 px |
| 2 | Border job names differ across pillars | s03.6 names the quiet rule `ct.color.border.subtle` and the control edge `ct.color.border`; the owner ruling adds `border.strong` and `border.rule`; s05 uses `border.default`, `border.subtle`, `border.rule`; s07 uses `neutral.200` for zone rules and ruled-cell grounds; s05 uses Neutral 200 for card edges and dividers. This sheet uses `border`, `border.strong`, `border.rule` (Neutral 300, 1.71:1 on White) and drops `subtle` and `default`. s03 must add `border.strong` and `border.rule`; s05 and s07 must rename and switch Neutral 200 to `border.rule` (or approve a lighter 200 value with a ratio) |
| 3 | Group-and-token names (`$root`) | `ct.color.primary` is a scale and a job (with `hover`, `active`); `bg`, `text`, `border` and `accent-marker` are token and group. s03 uses these names; DTCG needs `$root`. Verify alias syntax and the Style Dictionary name transform on the pinned versions, or rename the jobs (for example `primary.default`) in a MAJOR release. Also s03 `ct.color.focus` vs s05 `ct.color.focus.ring`: this sheet uses `focus` |
| 4 | s05 border table uses v1 neutral hex | s05.4 still lists Neutral 200 `#DFE1E2`, 300 `#C6CACD`, 500 `#778188` and a 3.98:1 control ratio; s03 v2 values are `#DEDDD8`, `#C7C6C1`, `#85847F` and 3.75:1 on White. s05 must be updated (its open item 7) |
| 5 | s11 still carries v1 motion and gradient | s11 lists `duration.slow` 400, `duration.settle` 700, `stagger.list` and a one-time 5-step reveal. s12 trims to instant, fast, base, moderate plus easing `settle` (Level Line draw only). Owner/s11 to set the Level Line draw duration (interim: `moderate` 240 ms) and decide whether `stagger.steps` stays |
| 6 | s06 and s05 residue of v1 | s06 still describes a coral Record Block band, a Navy 700 to 800 dark hero gradient and "Navy 900 scrim" wording; v2 uses the 3 px accent underline on the sticker and no gradients. s06, s14 and s16 must align with `ct.sticker.underline` and 12.7 |
| 7 | s07 `ct.line.hairline` and s05 `ct.divider.*` | Two names for the 1 px line and divider. s12 keeps `ct.border.width.thin` and the alias `ct.line.hairline`; s05 `ct.divider.thin / strong` are not in the primitive set (they would resolve to `border.rule` and `border.strong` at 1 px and 2 px). Confirm and add as component tokens if kept |
| 8 | New tokens defined here | `ct.color.fixed.*`, `ct.z.*`, `ct.opacity.*` (caption scrim 0.80 comes from v1 s11), `ct.size.control.height`, the band scope. No earlier pillar fixed them. Owner approval needed |
| 9 | Dark active step node | Active node is a White fill in dark, so the Accent underline is 2.87:1 and decorative. Confirm or use a Primary 600 fill for the dark active node |
| 10 | s04 colour reference | s04 notes "confirm token index in s03" for Stone: it is `ct.color.neutral.50`. s04 body CSS already uses `var(--ct-color-neutral-900)`; keep it pointing to `ct.color.text` in components |
| 11 | s07 columns token | Lists six values (4, 4, 8, 12, 12, 12) for five named breakpoints plus base; confirm base and sm both use 4 |
| 12 | Tailwind spacing | Index-to-number mapping (12.10) must be enforced by lint; check support for named spacing in the installed Tailwind version. Also confirm `--shadow-*: initial` removes all default shadow utilities in the installed version |
| 13 | DTCG version and typography composite | 2025.10 is stable but a Community Group Report, not a W3C Standard. Confirm the pinned Style Dictionary supports it, accepts `em` letter-spacing in `typography`, and handles the `textTransform` and `fontStretch` extensions |
| 14 | Secondary colour | Owner to decide (s03.2 criteria). Until then the token group is empty in JSON, CSS and Tailwind. Whether its share comes out of the 30% primary is also an owner call |
| 15 | Figma plan | Variables API and extended collections depend on the plan; confirm before promising sync |
| 16 | Print values | CMYK, Pantone, vinyl and paint are starting points: verify with printer and physical swatch; test accent UV fade on stickers. No print value exists for Stone |
| 17 | Dark mode scope and logo | Owner decides when dark UI ships; tokens exist from v2.0. No logo exists; the reversed file per s02 is needed before any dark page ships |
| 18 | Hero header | Fixed or floating over the photo is an owner decision (s07, s13); it changes which tokens the header band uses (`band` solid vs transparent-to-solid) and has no token yet |
| 19 | More-contrast values | Ratios in the high-contrast table were computed ad hoc for this sheet; re-run in the CI script before v1.1 |
| 20 | Cultural review and APCA | Festive greetings need a native Hindi and Punjabi reviewer (s03.13). APCA is not computed; WCAG 2.x only in v2.0 |
