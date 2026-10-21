# Clean Tank Services: Style Guide
# 03. Color

> Color is the quickest way a stranger recognises Clean Tank Services and the cheapest place to lose consistency. This pillar organises the owner's locked palette into five roles (Primary, Secondary, Accent, Neutral, State), keeps the 60/30/10 proportion (neutral 60 / primary 30 / accent 10), gives the codes for screen, print and paint, defines the tonal scales, dark mode and chart colors, and lists every approved and forbidden text pair with a computed contrast ratio. It exists so that "what color is a link, an error or a van stripe?" takes one lookup, and so that coral, which fails contrast on white, works only as a small marker and never as a button, text or alarm.

Sheet CT-SG-03 | v2.0 | 08 Oct 2026 (Quiet Utility revision) | Tier legend: LOCK = central brand owner approves any change · GUARD = varies inside stated limits · FLEX = judgment within principles

Not covered here: token pipeline and theme implementation (s12), print production and proofing (s15), chart construction (s10 handoff), logo colorways (s02), photo grade and scrim construction (s08). Ratios in this sheet are WCAG 2.2 relative-luminance ratios computed with Python, shown to two decimals and never rounded up.

## 03.1 Principle and inheritance

Big idea: **Quiet precision. One standard, every tank.** Color is specified like a test report: named roles, fixed values, computed ratios.

| Principle | Color behaviour | Spec |
|---|---|---|
| Exact | One value per token; ratios are computed, not judged by eye | Only tokens in this sheet; no eyedropped colors |
| Ordered | Each role has one job; proportion is fixed | Neutral 60 / Primary 30 / Accent 10, per-surface table in 03.8 |
| Restrained | Quiet palette; accent is a small marker | Accent never exceeds 10% of any surface and is never a fill for buttons |
| Documented | Every text pair and every surface has a published ratio | Matrix in 03.7 and 03.9 |
| Honest materials | Neutrals read as stone, concrete and graphite; primary reads as steel-navy | No gradients, no gloss, no shadows, no tinted glow |

Brand traits carried: Calm (low chroma, white and stone dominate), Disciplined (same tokens in every district), Knowledgeable (graphite text and navy structure, like a lab report), Responsible (every text pair passes AA; status never relies on hue alone). Voice stays humble and reassuring in words; authority lives in the visuals. Obsolete colors from persona.md, INFO-BANK and old collateral (yellow, red borders, bright blue, gradients, rays) are retired.

## 03.2 Palette by role

| Role | Job | Token root | Anchor | Share |
|---|---|---|---|---|
| Primary | Headings, primary buttons, header and footer bands, selected emphasis bands, rules, table headers | `ct.color.primary.*` | 700 = `#20334B` | 30% |
| Secondary | Reserved slot, **TBD (owner to decide)** | `ct.color.secondary.*` | none | 0% until chosen |
| Accent | **Marker only**: Level Line, active step, reference tags and index numbers, one key figure per view | `ct.color.accent.*` | 500 = `#EE7555` | max 10% |
| Neutral | Page grounds, surfaces, text, borders (white to graphite, slightly warm stone) | `ct.color.neutral.*` | 0 = `#FFFFFF`, 50 = `#F5F4F1`, 900 = `#25282A` | 60% (white + stone) |
| State | Info, error, warning, success; always icon plus word | `ct.color.state.<name>.<fg/bg/border>` | see 03.5 | status components only |

Core values:

| Name | Token | HEX | RGB | HSL | OKLCH (L C H) |
|---|---|---|---|---|---|
| White | `ct.color.neutral.0` | `#FFFFFF` | 255 255 255 | 0, 0%, 100% | 1.000 0.000 n/a |
| Stone | `ct.color.neutral.50` | `#F5F4F1` | 245 244 241 | 45, 17%, 95% | 0.967 0.004 91 |
| Primary | `ct.color.primary.700` | `#20334B` | 32 51 75 | 213, 40%, 21% | 0.317 0.050 255 |
| Accent | `ct.color.accent.500` | `#EE7555` | 238 117 85 | 13, 82%, 63% | 0.698 0.157 36 |
| Graphite | `ct.color.neutral.900` | `#25282A` | 37 40 42 | 204, 6%, 15% | 0.275 0.006 237 |

Stone is a neutral, so it counts inside the 60%. White and stone alternate by section; the page's larger area may be either, but white or stone together must stay the largest share. Photographs sit outside the 60/30/10 count (the share is of non-photo area).

Core facts: Primary on White 12.83:1 · Graphite on White 14.83:1 · Graphite on Stone 13.49:1 · Accent 500 on White 2.87:1 (fails text and 3:1 UI) · Accent 500 on Primary 4.47:1 (large text and UI only) · Graphite on Accent 500 5.16:1.

### Secondary slot (reserved, TBD)

Tokens `ct.color.secondary.50` to `ct.color.secondary.900` exist as names only. **No hex is assigned. Do not use, preview or invent a value until the owner selects one.**

| Step | Token | Value |
|---|---|---|
| 50 / 100 / 200 / 300 / 400 | `ct.color.secondary.50` ... `.400` | TBD |
| 500 / 600 / 700 / 800 / 900 | `ct.color.secondary.500` ... `.900` | TBD |

Selection criteria (all must hold; proposed, owner confirms):

| # | Criterion | Test |
|---|---|---|
| 1 | Passes contrast | A text-safe step reaches 4.5:1 on White and on Stone; a fill step takes a white label at 4.5:1; a border step reaches 3:1 on White |
| 2 | Does not compete with accent | Visibly different hue from coral (hue 13) and never more saturated than accent 500; accent stays the only warm color |
| 3 | Sits with navy | Reads as a quiet partner to Primary 700 side by side on White and Stone, in print and on screen |
| 4 | Stays clear of State | Distinguishable from info (teal-blue `#1B6A8F` family) and success (green) so a secondary fill is never read as a status |
| 5 | Works in dark mode | A step passes 4.5:1 on Primary 800 |
| 6 | Survives print and vinyl | Matchable on a physical swatch |

Families to evaluate (no value implied): a steel or slate family, a deep teal family. Until chosen, all layouts use Primary, Neutral and Accent only; the share of any secondary area will come out of the 30% (owner to confirm).

## 03.3 Codes per medium

All print, Pantone, vinyl and paint values below are starting points. **Verify with printer / physical swatch** and a signed proof before any bulk order. Do not convert HEX to CMYK in software and call it final.

| Color | CMYK coated (start) | CMYK uncoated (start) | Nearest Pantone (verify) | Vinyl / paint note (verify) |
|---|---|---|---|---|
| Primary 700 `#20334B` | C100 M80 Y35 K45 | C90 M70 Y35 K40 | 534 C / 534 U | Van: gloss or satin cast vinyl, test against RAL 5013 Cobalt Blue. Uniform: dyed fabric, match to the approved navy swatch card, not to a screen. |
| Accent 500 `#EE7555` | C0 M62 Y65 K0 | C0 M58 Y62 K0 | 170 C / 7416 C (pick after swatch book) | Van stripe: test RAL 2012 Salmon Orange and a vinyl match. Uniform: embroidery thread or small print only. |
| Neutral 900 `#25282A` | K90 for text; C60 M50 Y45 K85 for solids | K90 | Black 6 C (cool black) | Van lettering: RAL 7021 Black Grey, satin. |
| Neutral 0 White | Paper white, no ink | Paper white | n/a | Van body: RAL 9016 Traffic White, gloss. |
| Neutral 50 Stone `#F5F4F1` | Warm paper stock or a light flat tint, no value fixed | same | n/a | Not used on vehicles or uniforms. Approve on the real stock. |
| Secondary | TBD | TBD | TBD | TBD |

Paper assumption: coated 130 gsm or heavier silk or gloss for brochures and certificates; uncoated 100 gsm for forms (verify). Accent and primary look duller on uncoated stock: approve proofs on the real stock. Fading: accent vinyl and sticker inks must be tested for outdoor UV before the tank sticker is ordered.

## 03.4 Tonal scales

### Primary scale (hue 213 to 217, saturation about 40%; 700 is locked)

| Step | Token | HEX | RGB | HSL | On White | Graphite on it |
|---|---|---|---|---|---|---|
| 50 | `ct.color.primary.50` | `#F1F4F9` | 241 244 249 | 217, 40%, 96% | 1.10:1 | 13.46:1 |
| 100 | `ct.color.primary.100` | `#DFE7F1` | 223 231 241 | 213, 39%, 91% | 1.25:1 | 11.89:1 |
| 200 | `ct.color.primary.200` | `#BFCFE3` | 191 207 227 | 213, 39%, 82% | 1.58:1 | 9.36:1 |
| 300 | `ct.color.primary.300` | `#94AED1` | 148 174 209 | 214, 40%, 70% | 2.27:1 | 6.52:1 |
| 400 | `ct.color.primary.400` | `#6289BC` | 98 137 188 | 214, 40%, 56% | 3.61:1 | 4.11:1 |
| 500 | `ct.color.primary.500` | `#42689A` | 66 104 154 | 214, 40%, 43% | 5.71:1 | 2.60:1 |
| 600 | `ct.color.primary.600` | `#314D72` | 49 77 114 | 214, 40%, 32% | 8.62:1 | 1.72:1 |
| 700 | `ct.color.primary.700` | `#20334B` | 32 51 75 | 213, 40%, 21% | 12.83:1 | 1.16:1 |
| 800 | `ct.color.primary.800` | `#172436` | 23 36 54 | 215, 40%, 15% | 15.65:1 | 1.05:1 |
| 900 | `ct.color.primary.900` | `#0F1824` | 15 24 36 | 214, 41%, 10% | 17.85:1 | 1.20:1 |

### Accent scale (hue 13; 500 is locked)

The scale desaturates as it darkens so dark accent reads as terracotta and stays away from error crimson.

| Step | Token | HEX | RGB | HSL | On White | Graphite on it |
|---|---|---|---|---|---|---|
| 50 | `ct.color.accent.50` | `#FEF0EC` | 254 240 236 | 13, 90%, 96% | 1.11:1 | 13.34:1 |
| 100 | `ct.color.accent.100` | `#FDE0D9` | 253 224 217 | 12, 90%, 92% | 1.25:1 | 11.90:1 |
| 200 | `ct.color.accent.200` | `#F9C2B3` | 249 194 179 | 13, 85%, 84% | 1.57:1 | 9.46:1 |
| 300 | `ct.color.accent.300` | `#F5A18A` | 245 161 138 | 13, 84%, 75% | 2.03:1 | 7.31:1 |
| 400 | `ct.color.accent.400` | `#F1876A` | 241 135 106 | 13, 83%, 68% | 2.50:1 | 5.94:1 |
| 500 | `ct.color.accent.500` | `#EE7555` | 238 117 85 | 13, 82%, 63% | 2.87:1 | 5.16:1 |
| 600 | `ct.color.accent.600` | `#C54826` | 197 72 38 | 13, 68%, 46% | 4.85:1 | 3.06:1 |
| 700 | `ct.color.accent.700` | `#A33C1F` | 163 60 31 | 13, 68%, 38% | 6.51:1 | 2.28:1 |
| 800 | `ct.color.accent.800` | `#76311E` | 118 49 30 | 13, 59%, 29% | 9.42:1 | 1.57:1 |
| 900 | `ct.color.accent.900` | `#4F2317` | 79 35 23 | 13, 55%, 20% | 13.25:1 | 1.12:1 |

Key accent shades (marker jobs only):

| Shade | HEX | Job | Proof |
|---|---|---|---|
| Accent 400 | `#F1876A` | Marker text and numbers on primary bands | 5.14:1 on Primary 700, 6.27:1 on Primary 800: PASS 4.5 |
| Accent 500 | `#EE7555` | Level Line, active-step underline, bars, rules, large figure on primary | 4.47:1 on Primary 700: PASS 3 (large/UI), FAIL 4.5 |
| Accent 600 | `#C54826` | One key figure at large size on white, chart highlight series | 4.85:1 on White, 4.41:1 on Stone: PASS 4.5 |
| Accent 700 | `#A33C1F` | Reference tags and index numbers as small text on white or stone | 6.51:1 on White, 5.92:1 on Stone: PASS 4.5 |

### Neutral scale (slightly warm stone to graphite, generated and checked in Python)

Hue about 45 to 80 in the light steps, fading to the cool graphite at 900. Step 0 is White, 50 is Stone, 900 is Graphite.

| Step | Token | HEX | RGB | HSL | On White | On Stone 50 | Graphite on it |
|---|---|---|---|---|---|---|---|
| 0 | `ct.color.neutral.0` | `#FFFFFF` | 255 255 255 | 0, 0%, 100% | 1.00:1 | 1.10:1 | 14.83:1 |
| 50 | `ct.color.neutral.50` | `#F5F4F1` | 245 244 241 | 45, 17%, 95% | 1.10:1 | 1.00:1 | 13.49:1 |
| 100 | `ct.color.neutral.100` | `#ECEBE7` | 236 235 231 | 48, 12%, 92% | 1.19:1 | 1.08:1 | 12.44:1 |
| 200 | `ct.color.neutral.200` | `#DEDDD8` | 222 221 216 | 50, 8%, 86% | 1.36:1 | 1.24:1 | 10.91:1 |
| 300 | `ct.color.neutral.300` | `#C7C6C1` | 199 198 193 | 50, 5%, 77% | 1.71:1 | 1.56:1 | 8.67:1 |
| 400 | `ct.color.neutral.400` | `#A9A8A3` | 169 168 163 | 50, 3%, 65% | 2.38:1 | 2.17:1 | 6.23:1 |
| 500 | `ct.color.neutral.500` | `#85847F` | 133 132 127 | 50, 2%, 51% | 3.75:1 | 3.41:1 | 3.96:1 |
| 600 | `ct.color.neutral.600` | `#65655F` | 101 101 95 | 60, 3%, 38% | 5.87:1 | 5.33:1 | 2.53:1 |
| 700 | `ct.color.neutral.700` | `#4A4B48` | 74 75 72 | 80, 2%, 29% | 8.78:1 | 7.98:1 | 1.69:1 |
| 800 | `ct.color.neutral.800` | `#35383A` | 53 56 58 | 204, 5%, 22% | 11.81:1 | 10.74:1 | 1.26:1 |
| 900 | `ct.color.neutral.900` | `#25282A` | 37 40 42 | 204, 6%, 15% | 14.83:1 | 13.49:1 | 1.00:1 |

Neutral jobs: 0 and 50 are page grounds and section grounds. 100 is disabled fill and table stripe. 200 and 300 are dividers and 1 px rules (decorative, never text, never a control boundary). 400 is decoration only. **500 is the lightest grey allowed for control borders and meaningful icons (3.75:1 on White, 3.41:1 on Stone, both at least 3:1).** **600 and darker are text-safe for muted text (5.87:1 on White, 5.33:1 on Stone, both at least 4.5:1).** 900 is body text.

## 03.5 State colors

State colors are separate from accent. Each has a text-safe shade (fg, the 700 value), a soft background (bg, the 100 value), a border and icon shade (border, the 500 value, at least 3:1 on White) and a dark-mode text shade. Values are unchanged from v1.0. The soft backgrounds were checked against Stone: all four stay distinct from Stone (dE76 6.6 to 14.3, against 4.1 for Stone vs White) and every fg keeps 4.5:1 on its bg, so no tint was changed.

| State | Token root | fg | bg | border | Dark text | fg on White | fg on bg | fg on Stone | border on White |
|---|---|---|---|---|---|---|---|---|---|
| Success | `ct.color.state.success.*` | `#1E7A3C` | `#E6F4EA` | `#2F9E55` | `#6FCF8E` | 5.38:1 | 4.74:1 | 4.89:1 | 3.42:1 |
| Error | `ct.color.state.error.*` | `#B01A45` | `#FCEBF0` | `#D0365F` | `#F28BA8` | 6.82:1 | 5.94:1 | 6.20:1 | 4.80:1 |
| Warning | `ct.color.state.warning.*` | `#8A5A00` | `#FFF4D6` | `#B07400` | `#E8B84A` | 5.93:1 | 5.41:1 | 5.39:1 | 3.93:1 |
| Info | `ct.color.state.info.*` | `#1B6A8F` | `#E4F2F8` | `#2A8DBA` | `#7CC4E4` | 5.99:1 | 5.24:1 | 5.45:1 | 3.74:1 |

State colors appear only inside status components (alerts, form messages, chart series), so accent stays the only warm brand color in layouts. Success is a calm green for "service done, record issued". Warning is a muted ochre for "check this" notes, never a badge. Info is a teal-blue distinct from navy. Error is a raspberry crimson. Warning and info are never used for sales urgency.

Error versus accent (tested side by side):

| Pair | Hue | Lightness | Lab difference (dE76) | Verdict |
|---|---|---|---|---|
| Error fg `#B01A45` vs Accent 700 `#A33C1F` | 343 vs 13 | 40% vs 38% | 29.6 | Distinct hue (raspberry vs terracotta) |
| Error border `#D0365F` vs Accent 500 `#EE7555` | 344 vs 13 | 51% vs 63% | 34.7 | Distinct hue, lighter accent |
| Error fg vs Accent 600 `#C54826` | 343 vs 13 | 40% vs 46% | 33.1 | Distinct |

Error is cooler and pinker (about 30 degrees of hue away) and appears only inside an error component: soft pink bg, border, a circle-exclamation icon and the word "Error" or the specific message. Accent appears as a flat marker, never inside an alert. Error and accent never touch in the same component. Because they are only moderately apart under colour-blindness, icon plus label is mandatory.

## 03.6 Semantic tokens

Token scheme: `ct.color.<role>.<step>` with CSS variable `--ct-color-<role>-<step>` (dots become hyphens). Semantic tokens point to scale tokens and are the only tokens components may use.

| Semantic token | Light value | Dark value | Note |
|---|---|---|---|
| `ct.color.bg` | Neutral 0 `#FFFFFF` | Primary 900 `#0F1824` | Page ground |
| `ct.color.bg.subtle` | Neutral 50 `#F5F4F1` | Primary 800 `#172436` | Alternate sections |
| `ct.color.surface` | Neutral 0 `#FFFFFF` | Primary 700 `#20334B` | Cards, panels, inputs; sits on bg.subtle with a 1 px border |
| `ct.color.band` | Primary 700 `#20334B` | Primary 700 `#20334B` | Header, footer, selected emphasis bands, table headers |
| `ct.color.on-band` | Neutral 0 `#FFFFFF` | Neutral 0 `#FFFFFF` | Text and icons on band |
| `ct.color.text` | Neutral 900 `#25282A` | Primary 50 `#F1F4F9` | Body |
| `ct.color.text.heading` | Primary 700 `#20334B` | Neutral 0 `#FFFFFF` | Headings |
| `ct.color.text.muted` | Neutral 600 `#65655F` | Primary 200 `#BFCFE3` | Secondary text |
| `ct.color.text.link` | Primary 700 `#20334B` | Primary 200 `#BFCFE3` | Always underlined |
| `ct.color.text.link-hover` | Primary 800 `#172436` | Neutral 0 `#FFFFFF` | Underline thickens to 2 px |
| `ct.color.text.link-visited` | Primary 500 `#42689A` | Primary 300 `#94AED1` | |
| `ct.color.border` | Neutral 500 `#85847F` | Primary 400 `#6289BC` | Inputs, control edges (3:1) |
| `ct.color.border.rule` | Neutral 300 `#C7C6C1` | Primary 600 `#314D72` | 1 px rules, ruled cells (decorative) |
| `ct.color.primary` | Primary 700 `#20334B` | Neutral 0 `#FFFFFF` | Button fill, rules, outline |
| `ct.color.primary.hover` | Primary 600 `#314D72` | Neutral 100 `#ECEBE7` | |
| `ct.color.primary.active` | Primary 800 `#172436` | Neutral 200 `#DEDDD8` | |
| `ct.color.on-primary` | Neutral 0 `#FFFFFF` | Primary 700 `#20334B` | Label on primary fill |
| `ct.color.accent-marker` | Accent 500 `#EE7555` | Accent 500 `#EE7555` | Level Line, bars, rules, active-step underline |
| `ct.color.accent-marker.text` | Accent 700 `#A33C1F` | Accent 400 `#F1876A` | Reference tags, index numbers, small marker text |
| `ct.color.accent-marker.figure` | Accent 600 `#C54826` | Accent 500 `#EE7555` | One large key figure per view |
| `ct.color.focus` | Primary 700 `#20334B` | Neutral 0 `#FFFFFF` | 2 px ring, 2 px offset |
| `ct.color.disabled.fg` / `.bg` | Neutral 500 / Neutral 100 | Primary 400 / Primary 700 | Exempt from contrast, never live text |
| `ct.color.state.<s>.fg / bg / border` | 700 / 100 / 500 values | dark text / Primary 700 / dark text | s = success, error, warning, info |
| `ct.color.secondary.*` | TBD | TBD | Reserved; not yet usable |

CSS snippet (light; dark values swap under `[data-theme="dark"]` and `prefers-color-scheme: dark`):

```css
:root {
  --ct-color-neutral-0:#FFFFFF; --ct-color-neutral-50:#F5F4F1;
  --ct-color-neutral-300:#C7C6C1; --ct-color-neutral-500:#85847F;
  --ct-color-neutral-600:#65655F; --ct-color-neutral-900:#25282A;
  --ct-color-primary-700:#20334B; --ct-color-accent-500:#EE7555;
  --ct-color-accent-700:#A33C1F;
  --ct-color-bg:var(--ct-color-neutral-0);
  --ct-color-bg-subtle:var(--ct-color-neutral-50);
  --ct-color-text:var(--ct-color-neutral-900);
  --ct-color-text-muted:var(--ct-color-neutral-600);
  --ct-color-border:var(--ct-color-neutral-500);
  --ct-color-primary:var(--ct-color-primary-700);
  --ct-color-on-primary:var(--ct-color-neutral-0);
  --ct-color-accent-marker:var(--ct-color-accent-500);
  --ct-color-focus:var(--ct-color-primary-700);
  --ct-color-state-error-fg:#B01A45;
  /* --ct-color-secondary-*: intentionally undefined (TBD) */
}
```

### Buttons

Height 44 to 48 px, radius 4 px, label Anek 700 uppercase. **Accent is never a button fill.**

| Button | Default | Hover | Active | Where |
|---|---|---|---|---|
| Primary | Primary 700 fill, white label (12.83:1) | Primary 600 fill (8.62:1) | Primary 800 fill | White or Stone grounds |
| Outline | 1 px Primary 700 border, Primary 700 label | Primary 50 fill | Primary 100 fill | Secondary action on white or stone |
| On photo or primary band | White fill, Primary 700 label (12.83:1) | Stone fill (11.67:1) | Neutral 100 fill (10.76:1) | Hero over scrim, header, footer, emphasis bands |

### Links and focus

| Element | Default | Hover | Active | Visited |
|---|---|---|---|---|
| Text link | Primary 700, underlined 1 px | Primary 800, underline 2 px | Primary 900 | Primary 500 |

Links are underlined always: Primary 700 against Graphite body text is 1.16:1, so the underline (not hue) carries the difference.

| Focus ring surface | Ring | Ratio |
|---|---|---|
| White | Primary 700 | 12.83:1 |
| Stone | Primary 700 | 11.67:1 |
| Accent 50 | Primary 700 | 11.54:1 |
| Primary 700 band | White | 12.83:1 |
| Primary 900 (dark page) | White | 17.85:1 |
| Photo with scrim | White | 6.64:1 or more (worst case, 03.8) |

## 03.7 Contrast matrix (WCAG 2.2, computed)

Columns: ratio, then verdict as "4.5 body / 3 large text and UI". Large text means 18 pt (24 px) or 14 pt bold (about 18.7 px bold).

| Foreground | Background | Ratio | 4.5 / 3 | Use |
|---|---|---|---|---|
| Neutral 900 `#25282A` | Neutral 0 `#FFFFFF` | 14.83:1 | PASS / PASS | Body text |
| Neutral 900 `#25282A` | Neutral 50 `#F5F4F1` | 13.49:1 | PASS / PASS | Body on stone |
| Neutral 900 `#25282A` | Primary 50 `#F1F4F9` | 13.46:1 | PASS / PASS | Body on tinted panel |
| Neutral 800 `#35383A` | Neutral 0 `#FFFFFF` | 11.81:1 | PASS / PASS | Strong secondary text |
| Primary 700 `#20334B` | Neutral 0 `#FFFFFF` | 12.83:1 | PASS / PASS | Headings, links |
| Primary 700 `#20334B` | Neutral 50 `#F5F4F1` | 11.67:1 | PASS / PASS | Headings on stone |
| Primary 700 `#20334B` | Neutral 100 `#ECEBE7` | 10.76:1 | PASS / PASS | Heading on stripe |
| Neutral 600 `#65655F` | Neutral 0 `#FFFFFF` | 5.87:1 | PASS / PASS | Muted text |
| Neutral 600 `#65655F` | Neutral 50 `#F5F4F1` | 5.33:1 | PASS / PASS | Muted text on stone |
| Neutral 500 `#85847F` | Neutral 0 `#FFFFFF` | 3.75:1 | FAIL / PASS | Control borders, icons only |
| Neutral 500 `#85847F` | Neutral 50 `#F5F4F1` | 3.41:1 | FAIL / PASS | Control borders on stone |
| Neutral 0 `#FFFFFF` | Primary 700 `#20334B` | 12.83:1 | PASS / PASS | On-primary label, band text |
| Neutral 50 `#F5F4F1` | Primary 700 `#20334B` | 11.67:1 | PASS / PASS | Stone text on band |
| Neutral 0 `#FFFFFF` | Primary 600 `#314D72` | 8.62:1 | PASS / PASS | Button hover |
| Primary 500 `#42689A` | Neutral 0 `#FFFFFF` | 5.71:1 | PASS / PASS | Visited link |
| Accent 700 `#A33C1F` | Neutral 0 `#FFFFFF` | 6.51:1 | PASS / PASS | Reference tag, index number |
| Accent 700 `#A33C1F` | Neutral 50 `#F5F4F1` | 5.92:1 | PASS / PASS | Reference tag on stone |
| Accent 700 `#A33C1F` | Accent 50 `#FEF0EC` | 5.86:1 | PASS / PASS | Tag on soft accent chip |
| Accent 600 `#C54826` | Neutral 0 `#FFFFFF` | 4.85:1 | PASS / PASS | Key figure, chart highlight |
| Accent 600 `#C54826` | Neutral 50 `#F5F4F1` | 4.41:1 | FAIL / PASS | Large figure only on stone |
| Neutral 900 `#25282A` | Accent 500 `#EE7555` | 5.16:1 | PASS / PASS | Label on an accent marker chip |
| Primary 700 `#20334B` | Accent 500 `#EE7555` | 4.47:1 | FAIL / PASS | Large or bold only |
| Accent 500 `#EE7555` | Primary 700 `#20334B` | 4.47:1 | FAIL / PASS | Level Line, large figure, icon on band |
| Accent 400 `#F1876A` | Primary 700 `#20334B` | 5.14:1 | PASS / PASS | Marker text on band |
| Success fg `#1E7A3C` | Neutral 0 `#FFFFFF` | 5.38:1 | PASS / PASS | Success text |
| Success fg `#1E7A3C` | Success bg `#E6F4EA` | 4.74:1 | PASS / PASS | Success text in alert |
| Success fg `#1E7A3C` | Neutral 50 `#F5F4F1` | 4.89:1 | PASS / PASS | Success text on stone |
| Error fg `#B01A45` | Neutral 0 `#FFFFFF` | 6.82:1 | PASS / PASS | Error text |
| Error fg `#B01A45` | Error bg `#FCEBF0` | 5.94:1 | PASS / PASS | Error text in alert |
| Error fg `#B01A45` | Neutral 50 `#F5F4F1` | 6.20:1 | PASS / PASS | Error text on stone |
| Warning fg `#8A5A00` | Neutral 0 `#FFFFFF` | 5.93:1 | PASS / PASS | Warning text |
| Warning fg `#8A5A00` | Warning bg `#FFF4D6` | 5.41:1 | PASS / PASS | Warning text in alert |
| Warning fg `#8A5A00` | Neutral 50 `#F5F4F1` | 5.39:1 | PASS / PASS | Warning text on stone |
| Info fg `#1B6A8F` | Neutral 0 `#FFFFFF` | 5.99:1 | PASS / PASS | Info text |
| Info fg `#1B6A8F` | Info bg `#E4F2F8` | 5.24:1 | PASS / PASS | Info text in alert |
| Info fg `#1B6A8F` | Neutral 50 `#F5F4F1` | 5.45:1 | PASS / PASS | Info text on stone |

State borders on their own bg: success 3.01:1, error 4.18:1, warning 3.59:1, info 3.27:1 (all at least 3:1); on Stone: 3.11, 4.36, 3.57, 3.40. The icon is always paired with a fg text label.

**Forbidden pairs (never use):**

| Pair | Ratio | Why forbidden |
|---|---|---|
| Accent 500 `#EE7555` on Neutral 0 `#FFFFFF` | 2.87:1 | Accent text or thin icon on white: fails text and 3:1 UI |
| Neutral 0 `#FFFFFF` on Accent 500 `#EE7555` | 2.87:1 | White label on accent fill: same fail, and accent is never a button fill |
| Accent 500 `#EE7555` on Neutral 50 `#F5F4F1` | 2.61:1 | Accent text on stone |
| Accent 500 `#EE7555` on Accent 50 `#FEF0EC` | 2.58:1 | Accent text on soft accent |
| Accent 400 `#F1876A` on Neutral 0 `#FFFFFF` | 2.50:1 | Light accent text on white |
| Accent 500 `#EE7555` on Primary 700 `#20334B` | 4.47:1 | Accent body text on primary below 18 pt |
| Primary 700 `#20334B` on Accent 700 `#A33C1F` | 1.97:1 | Primary on dark accent |
| Neutral 400 `#A9A8A3` on Neutral 0 `#FFFFFF` | 2.38:1 | Neutral 400 as text or control border |
| Neutral 400 `#A9A8A3` on Neutral 50 `#F5F4F1` | 2.17:1 | Same, on stone |
| Neutral 0 `#FFFFFF` on Neutral 400 `#A9A8A3` | 2.38:1 | White text on light grey |
| Neutral 500 `#85847F` as text on White | 3.75:1 | Below 4.5 for text; muted text is Neutral 600 |
| Warning border `#B07400` on White | 3.93:1 | Ochre as small text (text uses fg) |
| Success border `#2F9E55` on White | 3.42:1 | Green as small text (text uses fg) |
| Neutral 900 `#25282A` on Primary 700 `#20334B` | 1.16:1 | Graphite on navy |

Also forbidden regardless of ratio: accent as a button fill or CTA; accent beside error red in one component; accent text over photographs; yellow or orange fills for warnings; red-and-green as the only difference; any use of `ct.color.secondary.*`.

## 03.8 60/30/10 usage by surface

Percentages are of visible non-photo area. Neutral (white + stone) is the 60. Primary is the 30. Accent is a hard cap, never a target. Graphite text and 1 px rules are not counted.

| Surface | Neutral (white / stone) | Primary | Accent | Guidance |
|---|---|---|---|---|
| Website | 65 to 75 | 20 to 30 | 1 to 5 | Mostly white and stone. Primary only for header, footer, selected emphasis bands (e.g. the 5-step band) and buttons. Hero is a full-bleed photo with scrim, headline and white-fill CTAs on top. Accent: Level Line, active step, ref tags |
| WhatsApp message card | 60 | 30 | 1 to 5 | White card, primary title strip, accent thin rule or ref tag |
| Flyer | 60 to 70 | 25 to 30 | 1 to 5 | White or stone ground, primary panel for contact block, no full-bleed accent |
| Tank sticker | 70 | 25 | 1 to 3 | White base, primary title band and text, accent only as the due-date index marker (verify UV fade) |
| Cleaning certificate | 70 to 80 | 15 to 25 | 1 to 3 | White paper, primary title band, ruled field grid, mono values, accent ref tag or thin rule |
| Technician uniform | Name badge and trim only | 85 to 95 | 0 to 3 | The one exception to 60/30/10: pressed navy uniform; accent only as small logo detail or thread |
| Service van | 60 to 65 | 25 to 30 | 3 to 8 | White body, primary lower band and lettering, one accent stripe as Level Line |
| Social post | 55 to 65 | 25 to 35 | 1 to 5 | Photo or white ground with primary text block |
| Franchise brochure / tender document | 65 to 75 | 20 to 30 | 1 to 3 | Formal: white and stone pages, primary headings and table headers, accent rule or index numbers only |

Worked right and wrong. Right: a website hero photo with a Primary 900 scrim, white headline, a white-fill "Book a cleaning" button with Primary 700 label, then white and stone sections below with a navy footer. Wrong: an accent-fill "Call us" button, a full-width accent hero, or three accent elements on one screen.

Overlays: no semi-transparent accent. Text on photographs needs a flat Primary 900 `#0F1824` scrim at 70% opacity or more: white over a 70% scrim on a worst-case white photo composites to `#575D66`, 6.64:1 PASS (60% gives `#6F747C`, 4.70:1, the floor). Print the scrim as a flat tint, not a gradient.

Gradients: policy is **none**. No gradients, glow, rays or gloss; bands are solid primary. (v1.0 allowed one "Navy Depth" gradient; removed in v2 because the hero is a photo and depth comes from 1 px rules and solid bands.)

## 03.9 Dark mode palette

Dark is primary based, not black. Roles: bg Primary 900, bg.subtle Primary 800, surface and band Primary 700. Pairs verified:

| Foreground | Background | Ratio | 4.5 / 3 | Use |
|---|---|---|---|---|
| Neutral 0 `#FFFFFF` | Primary 900 `#0F1824` | 17.85:1 | PASS / PASS | Headings on bg; focus ring |
| Primary 50 `#F1F4F9` | Primary 800 `#172436` | 14.19:1 | PASS / PASS | Body on bg.subtle |
| Primary 50 `#F1F4F9` | Primary 700 `#20334B` | 11.64:1 | PASS / PASS | Body on surface |
| Primary 200 `#BFCFE3` | Primary 800 `#172436` | 9.87:1 | PASS / PASS | Muted text, links |
| Primary 200 `#BFCFE3` | Primary 700 `#20334B` | 8.10:1 | PASS / PASS | Muted on surface |
| Accent 400 `#F1876A` | Primary 800 `#172436` | 6.27:1 | PASS / PASS | Marker text |
| Accent 400 `#F1876A` | Primary 700 `#20334B` | 5.14:1 | PASS / PASS | Marker text on surface |
| Accent 500 `#EE7555` | Primary 800 `#172436` | 5.45:1 | PASS / PASS | Level Line, figure |
| Accent 500 `#EE7555` | Primary 900 `#0F1824` | 6.21:1 | PASS / PASS | Level Line on page |
| Primary 400 `#6289BC` | Primary 800 `#172436` | 4.34:1 | FAIL / PASS | Control border (3:1) |
| Primary 400 `#6289BC` | Primary 900 `#0F1824` | 4.95:1 | PASS / PASS | Control border on page |
| Primary 700 `#20334B` | Neutral 0 `#FFFFFF` | 12.83:1 | PASS / PASS | Dark primary button: white fill, primary label |
| Success dark `#6FCF8E` | Primary 800 `#172436` | 8.19:1 | PASS / PASS | Success text |
| Error dark `#F28BA8` | Primary 800 `#172436` | 6.73:1 | PASS / PASS | Error text |
| Warning dark `#E8B84A` | Primary 800 `#172436` | 8.48:1 | PASS / PASS | Warning text |
| Info dark `#7CC4E4` | Primary 800 `#172436` | 8.10:1 | PASS / PASS | Info text |

Dark rules: accent keeps the same 10% cap and marker-only jobs. Do not invert photos. Status banners use the surface with the dark text shade, a 3:1 border and icon plus label. Dark buttons follow the "on primary" rule: white fill, primary label.

## 03.10 Data visualisation palette

Handoff to s10. Categorical order (use in this order; direct-label every series):

| Order | Name | Token | HEX | On White | Role |
|---|---|---|---|---|---|
| 1 | Primary 700 | `ct.color.primary.700` | `#20334B` | 12.83:1 | Main series |
| 2 | Accent 600 | `ct.color.accent.600` | `#C54826` | 4.85:1 | Highlight series (one only) |
| 3 | Info border | `ct.color.state.info.border` | `#2A8DBA` | 3.74:1 | Third series |
| 4 | Warning border | `ct.color.state.warning.border` | `#B07400` | 3.93:1 | Fourth series |
| 5 | Neutral 500 | `ct.color.neutral.500` | `#85847F` | 3.75:1 | Other, baseline |
| 6 | Success border | `ct.color.state.success.border` | `#2F9E55` | 3.42:1 | Sixth only, with label or pattern (reads as "good") |

Use five series by default; a sixth needs a pattern or direct labels. Accent 500 is not a chart fill on white (2.87:1); Accent 600 is. Secondary is not used in charts until defined.

Sequential scale (single series intensity): Primary 100 `#DFE7F1`, 200 `#BFCFE3`, 300 `#94AED1`, 400 `#6289BC`, 500 `#42689A`, 600 `#314D72`, 700 `#20334B`. Adjacent steps differ by dE 10.6 to 17.4 (Lab). Lightest step needs a 1 px border on white.

Colour-blind check (Machado 2009 simulation, minimum pairwise dE76, series 1 to 5 / 1 to 6; recomputed with the new Neutral 500):

| Vision | Min dE (5 series) | Closest pair | Min dE (6 series) |
|---|---|---|---|
| Normal | 36.0 | series 2 and 4 | 36.0 |
| Protanopia | 21.8 | series 2 and 4 | 19.4 |
| Deuteranopia | 11.2 | series 2 and 4 | 11.2 |
| Tritanopia | 33.4 | series 2 and 4 | 11.0 |

A dE below about 20 is distinguishable but not comfortable, so charts never rely on color alone: direct labels, markers or hatch patterns, and a data table alternative.

## 03.11 Rules

```
RULE 03.1:     Keep the 60/30/10 proportion: Neutral (white + stone) about 60%, Primary about 30%, Accent at most 10% of visible non-photo area.
CLASS:         MUST
REASON:        Ordered and Restrained: fixed roles, quiet palette.
EXACT SPEC:    Neutral ~60% · Primary #20334B ~30% · Accent #EE7555 <=10% · graphite #25282A is text, not counted. Per-surface ranges in 03.8. Website uses navy only for header, footer, selected bands and buttons.
EXAMPLE:       Website: white and stone sections, photo hero with scrim, navy header and footer, one accent Level Line.
ANTI-EXAMPLE:  A flyer with a full accent top half and white headline, or a whole-page navy site.
TEST:          Squint test or pixel count: is accent under 10% and neutral the largest area?
EXCEPTION:     Technician uniform (primary 85 to 95%). Owner approval for any other.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 03.2:     Accent is a marker only: never a button fill, CTA, body text on white, or large field of color.
CLASS:         NEVER
REASON:        Exact and Restrained: accent on white is 2.87:1, failing 4.5 and 3.
EXACT SPEC:    Allowed jobs: Level Line, active step, ref tags and index numbers (text Accent 700 6.51:1), one key figure per view (Accent 600 4.85:1). On primary: Accent 500 for lines and large figures, Accent 400 for small text. Buttons use primary (03.6).
EXAMPLE:       Mono tag "REF CT-PR-05" in Accent 700 on white.
ANTI-EXAMPLE:  A coral "Book now" button, or coral text link on white.
TEST:          Is accent a button fill, a link, or text under 18 pt on white in #EE7555? Yes: reject.
EXCEPTION:     Decorative non-informative rules in #EE7555 on white are allowed if nothing depends on seeing them.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 03.3:     Accent never signals warning, error, urgency, offer or sale.
CLASS:         NEVER
REASON:        Honest: explain, never frighten; persona bans red and orange urgency badges.
EXACT SPEC:    Errors use state.error (fg #B01A45, border #D0365F) with icon and label. Warnings use state.warning (fg #8A5A00). Accent is never inside an alert, badge or "limited time" device.
EXAMPLE:       Form error: pink bg, crimson border, exclamation icon, text "Enter a 10-digit phone number".
ANTI-EXAMPLE:  An accent "Only 3 slots left" badge.
TEST:          Is accent inside an alert, urgency badge or error state? Yes: reject.
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 03.4:     Pair every state color with an icon and a word.
CLASS:         MUST
REASON:        Exact and Documented: WCAG 1.4.1; error and accent are only moderately apart for colour-blind viewers.
EXACT SPEC:    fg on bg, border shade, 20 px minimum icon, visible label.
EXAMPLE:       Success: check icon, "Cleaning certificate issued".
ANTI-EXAMPLE:  A green dot beside a name with no text.
TEST:          Convert to greyscale: is the state still clear?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 03.5:     Use only tokens from this sheet; do not eyedrop or invent tints.
CLASS:         MUST
REASON:        Exact: same standard in every district.
EXACT SPEC:    ct.color.* tokens; scale steps 50 to 900 (neutral also 0). Components use semantic tokens only.
EXAMPLE:       A franchise flyer using primary 700, neutral 0 and 50, accent 500.
ANTI-EXAMPLE:  A franchisee's "slightly brighter" blue.
TEST:          Does every fill and text hex appear in the tables above?
EXCEPTION:     Photographs and client logos.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 03.6:     Primary buttons are primary fill with white label; outline is a 1 px primary border; on photos and primary bands use white fill with primary label.
CLASS:         MUST
REASON:        Ordered: one button system, readable at 12.83:1.
EXACT SPEC:    Fill #20334B, label #FFFFFF; hover #314D72; outline border and label #20334B; on-photo or on-band fill #FFFFFF, label #20334B. Height 44 to 48 px, radius 4 px. No accent fill.
EXAMPLE:       Hero over scrim: white "BOOK A CLEANING" with navy label.
ANTI-EXAMPLE:  Accent fill with white label (2.87:1).
TEST:          Is any button filled with accent or a color outside 03.6? Yes: reject.
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 03.7:     Underline all text links; hover darkens and thickens, never removes the underline.
CLASS:         MUST
REASON:        Exact and accessible: Primary 700 vs graphite is 1.16:1, so hue cannot carry the link.
EXACT SPEC:    Default Primary 700, hover Primary 800 with 2 px underline, visited Primary 500, underline 1 px minimum.
EXAMPLE:       "Read our 5-step process" underlined in Primary 700.
ANTI-EXAMPLE:  A link with no underline in body copy.
TEST:          Can the link be found with color removed?
EXCEPTION:     Navigation bars, buttons.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 03.8:     Do not use gradients, shadows or gloss; do not use ct.color.secondary.* until the owner defines it.
CLASS:         NEVER
REASON:        Honest materials: solid bands and 1 px rules only; Secondary has no value yet.
EXACT SPEC:    Solid fills; scrim is a flat Primary 900 tint at 70% or more. Secondary tokens are TBD and unassigned.
EXAMPLE:       Solid navy footer band over a stone section.
ANTI-EXAMPLE:  Blue-to-yellow banner with light rays; an invented "slate" hex.
TEST:          Is there a gradient, shadow or any hex not in this sheet? Yes: reject.
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

## 03.12 Do / Don't

| Do | Don't |
|---|---|
| DO: use white and stone as the largest area, navy for structure bands | DON'T: fill a page, flyer or whole site with navy or accent |
| DO: use Accent 700 for small marker text on white | DON'T: set #EE7555 text on white |
| DO: use primary fill with white label for buttons; white fill with primary label on photos and bands | DON'T: make any button accent, or put white text on #EE7555 |
| DO: show errors in raspberry crimson with icon and label | DON'T: use accent for errors, warnings or urgency |
| DO: use Neutral 500 for control borders, Neutral 600 for muted text | DON'T: use Neutral 400 or lighter for text or control edges |
| DO: label chart series directly | DON'T: rely on color alone in charts |
| DO: put hero text on a 70% Primary 900 scrim | DON'T: use gradients, rays, glow or glossy effects |
| DO: approve print colors from a physical proof | DON'T: print from a screen HEX conversion |

## 03.13 Accessibility and India notes

- Baseline WCAG 2.2 AA: 4.5:1 body, 3:1 large text and UI parts (1.4.3, 1.4.11). Ratios here are exact, never rounded up. APCA is not computed in v2.0.
- Never convey meaning by hue alone (1.4.1): icon plus word for state, patterns for charts, underline for links.
- Devanagari and Gurmukhi have thin headline strokes and matras: use Neutral 900 or Primary 700 on White or Stone, never accent body text, and set a minimum regular weight (s04).
- Text on photographs needs the 70% Primary 900 scrim.
- Saffron, green, white: the Indian flag colors carry national meaning, and saffron and green carry religious and political readings. Accent (hue 13, pinker and redder) is not saffron (about hue 30) and must not be described as saffron. Avoid orange-white-green bands, a tricolour layout, or accent beside Success green in banner order.
- White is the ground color; it is also worn for mourning in many communities, so the uniform is navy, not white.
- Navy and a warm orange family may recall Khalsa colours in Punjab. No religious meaning is intended; do not combine the palette with religious symbols. Test with local audiences (traditional association, not a verified rule).
- Colour-blind: accent 600 and ochre come close under deuteranopia (dE 11.2) and protanopia, so never place series 2 and 4 side by side without labels and different markers (see 03.10).
- Trademark: do not claim the colors as a registered mark; a color combination can be a mark under the Trade Marks Act 1999, so decide with an attorney (open item).

## 03.14 Day one vs later

| Day one | Later |
|---|---|
| Primary, Accent and Neutral scales; State tokens; Secondary slot named but TBD | Secondary colour chosen by owner, scale and contrast added |
| Semantic tokens, button and link rules, contrast matrix | Pantone and CMYK confirmed after physical swatch book and proof |
| Light theme tokens in code (HEX) | Dark mode implementation (s12) |
| 60/30/10 per-surface table | Vinyl and paint match samples for vans and uniforms |
| Forbidden-pair list | Swatch file (.ase) and token JSON download |
| | Chart palette applied in templates (s10); cultural review in new states; trademark advice |

## 03.15 Checklist

- [ ] Every color has a role (Primary, Secondary TBD, Accent, Neutral, State) and a token
- [ ] No retired names remain (Clean White, Uniform Navy, Care Coral, Checklist Ink, Mist White, ct.color.navy, ct.color.coral, ct.color.status)
- [ ] Every text pair has a computed ratio (03.7, 03.9)
- [ ] 60/30/10 = neutral / primary / accent, with per-surface percentages (03.8)
- [ ] Accent appears only as a marker, never as a button fill, link or body text
- [ ] Buttons follow 03.6: primary fill, outline primary, white fill on photo and bands
- [ ] State colors are distinct from accent and always carry icon plus label
- [ ] Codes for screen (HEX, RGB, HSL, OKLCH) and print (CMYK coated and uncoated, Pantone, vinyl and paint) are listed and marked verify
- [ ] Do and Don't table present
- [ ] Primary, accent and neutral scales published (neutral 0 to 900); Neutral 500 at least 3:1 and 600 at least 4.5:1 on White
- [ ] Focus ring color checked at 3:1 on every surface, including photo with scrim
- [ ] Link, hover and visited states defined, underline required
- [ ] Gradient and shadow policy stated (none)
- [ ] Dark mode pairs verified and roles renamed
- [ ] Chart palette and colour-blind notes present
- [ ] Cultural check and trademark note (03.13)
- [ ] Owner and change process: Gobind Galaxy approves any new color; three requests for the same exception change the rule
- [ ] Handoffs: dark mode and tokens to s12, charts to s10, print to s15, scrim and photo grade to s08
- [ ] Downloadable swatch and token file created (open)

## 03.16 Open items and evidence needed

- **Secondary colour TBD by owner.** Choose against the 03.2 criteria (contrast, no competition with accent, sits with navy, clear of state colors); no hex may be assigned or previewed before then. Owner to confirm whether its share comes out of the 30%.
- Stone `#F5F4F1` and the warm neutral steps need a check on real screens and printed on the real stock; confirm with owner.
- Pantone, CMYK and vinyl/paint values are estimates: verify with printer / physical swatch book (navy 534 C vs alternatives; accent 170 C or 7416 C). No print value is set for Stone.
- Outdoor UV fade of accent on tank stickers and van vinyl is untested; confirm with the sticker and vinyl supplier.
- Uniform fabric navy: needs a dye lot swatch approved against `#20334B`.
- Hero photo scrim: 70% Primary 900 is verified only against a worst-case white photo; test each chosen hero image (s08). Header fixed or floating is an owner decision and affects the header band treatment.
- Navy Depth gradient from v1.0 is retired; owner to confirm no gradient is wanted anywhere.
- Trademark: owner decision and attorney advice on colour combination claims; no mark registered.
- Cultural check: test accent and navy with Punjab, Uttar Pradesh and Delhi audiences; no religious reading is asserted.
- APCA values not yet recorded.
- Swatch file (.ase) and DTCG token JSON not yet produced.
- Error fg (raspberry) is a deliberate departure from a pure red to stay clear of accent; confirm with owner on seeing it beside real coral.
- Pillars s02, s10, s12, s15 must adopt the v2 role names and token roots from this sheet.
