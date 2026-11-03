# Clean Tank Services: Style Guide
# 18. Accessibility & Inclusion

> This pillar is the floor every other pillar must clear. It consolidates the accessibility numbers already set in s03 (color), s04 (type), s05 (shape), s07 (layout) and s11 (motion), and extends them to forms, PDFs, captions, alt text, print, signage, imagery, Indic scripts, low-literacy and low-bandwidth customers. Clean Tank serves families, apartment societies, hospitals, schools and government buyers across seven states, in English, Hindi, Punjabi and Hinglish, mostly on mid-range Android phones and WhatsApp. A Quiet Utility brand, built from condensed capitals, mono reference labels and ruled cells, has to be readable by everyone it serves, in sunlight, on a cracked screen, or at a tank in a basement. Authority lives in the visuals; plain, humble words live in the copy.

Sheet CT-SG-18 | v2.0 | 08 Oct 2026 (Quiet Utility revision) | Tier legend: LOCK = central brand owner approves any change · GUARD = varies inside stated limits · FLEX = judgment within principles

## 18.1 Principles / inheritance

Big idea: "Quiet precision. One standard, every tank." Accessibility is the clearest test of it.

| v2 principle | Accessibility behaviour |
|---|---|
| Exact | Every number is computed, not eyeballed. Ratios in this sheet come from the WCAG formula and are never rounded up. Sizes, ring, target and caps limits are stated in px or pt. |
| Ordered | One floor for every surface and every franchise district. DOM order equals the visual order of the strict grid; numbered sections and mono reference codes give screen-reader users the same map as sighted users. |
| Restrained | Zero flashes, no decorative reveals, no shadows or gradients to hide edges, one accent marker per view. Caps stay on short headings and labels. |
| Documented | Records (certificate, sticker) stay readable years later, in print, on screen and by screen reader. Exceptions are logged with owner and expiry. Test results are filed. |
| Honest materials | Live text, never text baked into images. Real photographs with consent, real technicians, matte stock. Alt text says what the image shows. |

Humility stays in the words: plain language, no jargon, no pressure, a phone and WhatsApp option always visible.

Inheritance: the numbers below are not new. They repeat s03 to s11 so a stranger can build from one page. If a value here differs from its source pillar, the source pillar wins and this sheet is corrected.

## 18.2 Conformance target and standards

| Standard | Status (from blueprint facts) | Clean Tank posture |
|---|---|---|
| WCAG 2.2 | W3C Recommendation, 5 Oct 2023 | **Floor: Level AA on web, email, PDFs and video.** |
| AAA adopted as brand defaults | Focus appearance (2.4.13), reduced motion (2.3.3), 7:1 body text | Neutral 900 and Primary 700 body text already exceed 7:1 (14.83 and 12.83). Focus ring and reduced motion are brand defaults. |
| GIGW 3.0 | Released 2023; conforms to WCAG 2.1 AA; STQC certification | Reference practice for government and PSU buyers. Not claimed. |
| IS 17802 | Part 1 (2021) adopts EN 301 549 v3.2.1 | Reference. A mandate is reported only in draft rules (verify against the Gazette). |
| RPwD Act 2016 | s.46 covers service providers, government or private, once accessibility rules are notified; Supreme Court (8 Nov 2024) told the Centre to frame mandatory rules | Design to its principles. Legal exposure to be confirmed by counsel (open item). |
| WCAG 3.0 | Working Draft | Watch only. |
| European Accessibility Act | Applies from 28 June 2025 | Not applicable: Clean Tank sells in India only. Revisit if that changes. |

Sign-off on legal compliance belongs to the owner's lawyer, not this guide. Component code belongs to s13.

## 18.3 Contrast pairings (computed)

All ratios computed with the WCAG 2.x relative-luminance formula in python3 from the v2 s03 hex values (warm-stone Neutral scale). Large text means 18 pt (24 px) or 14 pt bold (about 18.7 px). 2.999 fails. Roles: Primary (navy), Accent (coral, marker only), Neutral (white to graphite), State. Secondary is TBD and has no pairs; it cannot be used until it is defined and added here (s03).

### Light mode: text on neutral grounds

| Foreground | On | Ratio | Allowed use |
|---|---|---|---|
| Neutral 900 `#25282A` | Neutral 0 `#FFFFFF` | 14.83:1 | Body text, any size |
| Neutral 900 | Neutral 50 `#F5F4F1` (stone) | 13.49:1 | Body on stone |
| Neutral 900 | Neutral 100 `#ECEBE7` | 12.44:1 | Body on table stripe |
| Neutral 900 | Primary 50 `#F1F4F9` | 13.46:1 | Body on tinted panel |
| Neutral 900 | Accent 50 `#FEF0EC` | 13.34:1 | Body on soft accent chip |
| Neutral 800 `#35383A` | Neutral 0 | 11.81:1 | Strong secondary text |
| Primary 700 `#20334B` | Neutral 0 | 12.83:1 | Headings, links, body alternative |
| Primary 700 | Neutral 50 | 11.67:1 | Headings on stone |
| Primary 700 | Neutral 100 | 10.76:1 | Headings on stripe |
| Primary 700 | Primary 50 | 11.64:1 | Headings on tinted panel |
| Primary 700 | Primary 100 `#DFE7F1` | 10.29:1 | Outline button hover |
| Primary 500 `#42689A` | Neutral 0 | 5.71:1 | Visited link |
| Primary 500 | Neutral 50 | 5.19:1 | Visited link on stone |
| Neutral 600 `#65655F` | Neutral 0 | 5.87:1 | Muted text, captions, placeholders |
| Neutral 600 | Neutral 50 | 5.33:1 | Muted text on stone |
| Neutral 600 | Primary 50 | 5.32:1 | Muted text on tinted panel |
| Neutral 600 | Neutral 100 | 4.92:1 | Muted text on stripe (lowest allowed ground) |
| Neutral 500 `#85847F` | Neutral 0 | 3.75:1 | **Control borders and meaningful icons only. Fails body text.** |
| Neutral 500 | Neutral 50 | 3.41:1 | Control borders on stone (3:1 passes) |

Neutral 200 and 300 (1.36:1 and 1.71:1 on white) are decorative 1 px rules and ruled-cell lines only. A ruled grid that is also a form (the input boundary is the only cue) uses a Neutral 500 border, never a pale rule.

### Light mode: accent (marker only)

| Foreground | On | Ratio | Allowed use |
|---|---|---|---|
| Accent 700 `#A33C1F` | Neutral 0 | 6.51:1 | Reference tag, index number (mono 11 px passes) |
| Accent 700 | Neutral 50 | 5.92:1 | Reference tag on stone |
| Accent 700 | Neutral 100 | 5.46:1 | Reference tag on stripe |
| Accent 700 | Accent 50 | 5.86:1 | Tag on soft accent chip |
| Accent 600 `#C54826` | Neutral 0 | 4.85:1 | The one key figure at large size, chart highlight |
| Accent 600 | Neutral 50 | 4.41:1 | **Large figure only on stone (fails 4.5)** |
| Neutral 900 | Accent 500 `#EE7555` | 5.16:1 | Label on an accent marker chip |
| Primary 700 | Accent 500 | 4.47:1 | Large or bold only (fails 4.5) |
| **Accent 500 `#EE7555`** | **Neutral 0** | **2.87:1** | **Fails text and fails 3:1 UI. Level Line, rules and fills only, never the only cue, never text.** |
| Neutral 0 | Accent 500 | 2.87:1 | **Forbidden: white label on an accent fill. Accent is never a button fill.** |
| Primary 700 | Accent 600 | 2.65:1 | **Forbidden** (kept from v1, same hex pair) |

### Primary bands, buttons and hero scrim

| Foreground | On | Ratio | Allowed use |
|---|---|---|---|
| Neutral 0 | Primary 700 | 12.83:1 | Primary button label, band text, header and footer |
| Neutral 50 | Primary 700 | 11.67:1 | Stone text on band |
| Neutral 0 | Primary 600 `#314D72` | 8.62:1 | Primary button hover |
| Neutral 0 | Primary 800 `#172436` | 15.65:1 | Primary button active |
| Primary 700 | Neutral 0 | 12.83:1 | Label on white-fill button (on photo and bands) |
| Primary 700 | Neutral 50 | 11.67:1 | Label on stone hover fill |
| Primary 700 | Neutral 100 | 10.76:1 | Label on active fill |
| Accent 400 `#F1876A` | Primary 700 | 5.14:1 | Marker text and numbers on a band (mono 11 px passes) |
| Accent 400 | Primary 800 | 6.27:1 | Marker text on a darker band |
| Accent 500 | Primary 700 | 4.47:1 | Level Line, active-step underline, large figure on band (UI 3:1 only) |
| Neutral 0 | Primary 900 `#0F1824` | 17.85:1 | Text on the unfiltered darkest band |

**Hero scrim.** Flat Primary 900 `#0F1824` at 70% (`ct.scrim.hero`, s08), worst case a pure white photo area. Composite ground `#575D66` (70% over white), computed:

| Foreground | On scrim at 70% over white | Ratio | Use |
|---|---|---|---|
| Neutral 0 | `#575D66` | **6.64:1** | Headline, nav text, mono ref tags, white 1 px outline button edge (UI) |
| Neutral 50 | `#575D66` | 6.04:1 | Secondary line on hero |
| Neutral 200 `#DEDDD8` | `#575D66` | 4.88:1 | Lowest allowed grey on hero (avoid; use white) |
| Accent 400 | `#575D66` | 2.66:1 | **Forbidden: no accent text on photos** |

Scrim opacity floor from s08: 60% gives `#6F747C` and 4.70:1, so 60% is the minimum; 70% is the default for the margin Devanagari and Gurmukhi thin strokes need. Gradients are not used. White-fill buttons on the hero are Primary 700 on White, 12.83:1. Every chosen hero image is re-tested after grade and scrim by sampling pixels behind each letter.

### Mono caps, 11 px checks (IBM Plex Mono 500, caps, +0.10em, `ref` role)

11 px is allowed only for the `ref` role (s04); `label` and `value` start at 12 px. At 11 px, 4.5:1 is required and these are the only approved grounds:

| Text | On | Ratio | Verdict |
|---|---|---|---|
| Neutral 900 | White / Stone / Stripe | 14.83 / 13.49 / 12.44:1 | PASS |
| Primary 700 | White / Stone / Stripe | 12.83 / 11.67 / 10.76:1 | PASS |
| Accent 700 | White / Stone / Stripe / Accent 50 | 6.51 / 5.92 / 5.46 / 5.86:1 | PASS |
| Neutral 0 | Primary 700 / scrim 70% | 12.83 / 6.64:1 | PASS |
| Accent 400 | Primary 700 / Primary 800 | 5.14 / 6.27:1 | PASS |
| Neutral 600 | White / Stone | 5.87 / 5.33:1 | PASS, but muted refs are not used; refs stay Neutral 900 or Primary 700 |
| Accent 600 | Stone | 4.41:1 | **FAIL at 11 px** |
| Accent 500 | White | 2.87:1 | **FAIL** |

### State colors (light; values unchanged)

Tokens `ct.color.state.<info|error|warning|success>.fg / bg / border`. Always icon plus word.

| State | fg (700) on White | fg on its bg (100) | fg on Stone | border (500) on White |
|---|---|---|---|---|
| Success | `#1E7A3C` 5.38:1 | `#E6F4EA` 4.74:1 | 4.89:1 | `#2F9E55` 3.42:1 |
| Error | `#B01A45` 6.82:1 | `#FCEBF0` 5.94:1 | 6.20:1 | `#D0365F` 4.80:1 |
| Warning | `#8A5A00` 5.93:1 | `#FFF4D6` 5.41:1 | 5.39:1 | `#B07400` 3.93:1 |
| Info | `#1B6A8F` 5.99:1 | `#E4F2F8` 5.24:1 | 5.45:1 | `#2A8DBA` 3.74:1 |

### Dark mode (page Primary 900 `#0F1824`, subtle Primary 800 `#172436`, surface and band Primary 700 `#20334B`)

| Foreground | On | Ratio | Allowed use |
|---|---|---|---|
| Primary 50 `#F1F4F9` | Primary 900 | 16.19:1 | Body text |
| Primary 50 | Primary 800 | 14.19:1 | Body on subtle ground |
| Primary 50 | Primary 700 | 11.64:1 | Body on surface |
| Neutral 0 | Primary 900 | 17.85:1 | Headings, focus ring |
| Primary 200 `#BFCFE3` | Primary 900 / 800 / 700 | 11.26 / 9.87 / 8.10:1 | Muted text, links |
| Accent 400 | Primary 900 / 800 / 700 | 7.15 / 6.27 / 5.14:1 | Marker text |
| Accent 500 | Primary 900 / 800 | 6.21 / 5.45:1 | Level Line, large figure |
| Primary 400 `#6289BC` | Primary 900 / 800 | 4.95 / 4.34:1 | Control borders (3:1) |
| Primary 600 `#314D72` | Primary 800 | 1.81:1 | Decorative 1 px edge only. Surfaces are told apart by tone and text, so no meaning depends on it. |
| Success dark `#6FCF8E` | Primary 800 / 700 | 8.19 / 6.72:1 | Success text |
| Error dark `#F28BA8` | Primary 800 / 700 | 6.73 / 5.52:1 | Error text |
| Warning dark `#E8B84A` | Primary 800 / 700 | 8.48 / 6.96:1 | Warning text |
| Info dark `#7CC4E4` | Primary 800 / 700 | 8.10 / 6.64:1 | Info text |

Dark buttons follow the on-primary rule: white fill, Primary 700 label (12.83:1). Dark state colours are now defined in s03; the state border and bg pairs for dark banners (surface with a 3:1 border) still need a computed check before dark status UI ships (open item 4).

## 18.4 Color independence (WCAG 1.4.1, Level A)

| State | Color | Plus icon | Plus words |
|---|---|---|---|
| Success | `state.success` fg on bg | check-circle | "Done", "Booking received" |
| Error | `state.error` fg on bg, 2 px border | circle-exclamation | "Error:" plus the specific fix |
| Warning, overdue | `state.warning` fg on bg | triangle-alert | "Cleaning due 12 Oct 2026" |
| Info | `state.info` fg on bg | info | "Note" |
| Selected (tab, filter, step) | Primary 700 fill, white label | Number or check inside a square node | Label plus `aria-current` or `aria-selected`. The 3 px accent underline is a marker, never the only cue |
| Link in running text | Primary 700 | n/a | Always underlined 1 px (Primary 700 against Neutral 900 body is only 1.16:1, so the underline carries the difference) |
| Process step done / current / to do | Primary outline, filled when active | "01" to "05" in mono inside the node | Step name; step 05 dashed outline plus "* Where applicable" |
| Table row state | Stone stripe | Mono status word in a cell | Cell text, not stripe tone |
| Chart series | s03 palette | Marker shapes, dashes | Direct labels plus a data table |

**Colour-blind check.** Colour blindness affects roughly 1 in 12 men and 1 in 200 women worldwide (blueprint facts). Reported India school surveys give about 3% in boys and some community samples 5% to 11%; no single India figure is confirmed (open item). From the s03 Machado 2009 simulation (recomputed for v2), minimum pairwise dE76 across the five chart series is 36.0 normal, 21.8 protanopia, **11.2 deuteranopia** (series 2 and 4, Accent 600 and the warning ochre), 33.4 tritanopia. Accent 600 against Warning border `#B07400` is only 1.23:1 in luminance. Consequences:

- Accent never signals a state, so no accent-versus-warning confusion can carry meaning.
- Chart series 2 and 4 are never adjacent without direct labels and different markers.
- Run a simulation (protanopia, deuteranopia, tritanopia, achromatopsia) on the logo once final, every chart template and the state set before launch.

## 18.5 Focus ring, targets and keyboard

| Item | Spec | WCAG |
|---|---|---|
| Ring | 2 px solid `ct.color.focus.ring` (Primary 700), 2 px offset (`ct.focus.offset`), **ring radius 4 px** (the `sm` token, for every element, whether its own radius is 0, 2 or 4), drawn with `outline` on `:focus-visible`. No shadow glow | 2.4.7, 2.4.11, 2.4.13 (AAA) |
| Light surfaces | Primary 700 on White 12.83:1, on Stone 11.67:1 | 1.4.11 |
| Primary bands, dark mode | **White ring** on Primary 700 12.83:1, on Primary 900 17.85:1 | 1.4.11 |
| Photo hero | White ring on the scrim, 6.64:1 worst case | 1.4.11 |
| On primary buttons | The 2 px offset leaves page ground between ring and fill, so a Primary 700 button still shows a Primary 700 ring (12.83:1 on White). On a band, the ring is white | 1.4.11 |
| Ruled cells and tables | Cells with focusable content use `outline-offset: -2px` so the ring stays inside the 1 px grid and is not clipped by the neighbour cell (proposed, confirm in s13) | 2.4.7 |
| Hidden by fixed or floating header | `scroll-padding-top` equals header height (64 px fixed, 72 px floating, s08); focused element never fully covered | 2.4.11 |
| Target size | **48 px brand standard, 8 px apart; 44 px absolute minimum (s03 buttons run 44 to 48); 24 px WCAG AA floor** | 2.5.8 (AA), 2.5.5 (AAA) |
| Call and WhatsApp | In header or sticky bar, 48 px, never inside a menu | 2.5.8 |
| Order | DOM order equals visual order; skip link first; no keyboard trap | 2.4.3, 2.1.2 |

The 44 px figure is the Level AAA and Apple convention; 48 px is the Clean Tank house standard.

## 18.6 Type floors, spacing and reflow

| Item | Spec | Source |
|---|---|---|
| Web body | **16 px at 360 px viewport**, 18 px at 1280; never below 14 px for small, 12 px for caption (not for key facts) | s04 |
| Line height | Body 1.50 Latin, 1.65 Devanagari, 1.60 Gurmukhi. Condensed caps headings 1.0 to 1.05 (Latin only) | s04 |
| Weight | 400 minimum for body; no light weights on Indic | s04 |
| Measure | Latin 68 characters or fewer; Indic 55 or fewer | s07 |
| Print minimum | **7 pt Latin, 8 pt Indic** (legal lines only); body 10 pt recommended (house choice) | s04 |
| Text spacing | Survives line height 1.5, paragraph spacing 2x, letter spacing 0.12x, word spacing 0.16x with no clipping or overlap. Caps headings, mono labels and buttons wrap or grow; no fixed-height boxes | 1.4.12 |
| Reflow | No two-dimensional scroll at 320 CSS px; 200% zoom works at 360 px; spacing in `rem`. Ruled grids collapse to one column; cells never force sideways scroll | 1.4.10, 1.4.4 |
| IDs | IBM Plex Mono with slashed zero for GSTIN and certificate numbers, so 0/O and 1/l/I differ | s04 |
| Dyslexia | No special font is used as a fix. Clear sans, generous spacing, left-aligned, no justified text, no all-caps paragraphs (18.6a) | blueprint |

The 16 px body minimum is a convention, not a WCAG requirement (open item to confirm against a primary source).

### 18.6a All-caps, condensed and mono readability

Capitals slow reading and lose word shape; v2 uses them on purpose, so the limits are fixed here (they restate s04 and add minimum sizes).

| Item | Rule | Check |
|---|---|---|
| Where caps are allowed | Display, h1 to h3, record titles, key-figure months, mono labels, refs and values, button labels. Nothing else | s04 case table |
| Caps headings | **Short: 8 words maximum** (3 words maximum on buttons). h4, cards' running text, captions, URLs, email addresses and legal lines stay in sentence case | Count words per heading |
| Paragraphs | **Never caps.** No all-caps body, quote, caption, alert, form message or disclaimer | Search CSS for `text-transform: uppercase` outside the heading, label and button classes |
| Indic scripts | **Never caps** (no case exists, and fake caps such as bold-stretched or spaced Devanagari are forbidden). Indic headings: Anek Devanagari or Gurmukhi 700, normal width (wdth 100), no tracking, no case change. Indic labels use Anek, because Plex Mono has no Indic glyphs | Indic strings render with `letter-spacing: 0` |
| Source text | Written in sentence case; caps applied in CSS (`text-transform`), so screen readers read words, not letters, and copy-paste returns sentence case. Abbreviations that are real capitals (UV, AMC, GSTIN) stay as typed | Read heading in NVDA and TalkBack |
| Mixed Hinglish | Wrap Devanagari or Gurmukhi runs in `lang="hi"` or `lang="pa"` so the caps rule and tracking do not reach them | Inspect the span |
| Condensed caps (Anek Latin wdth 78, 700) minimum | **Web 18 px** (the lowest scale step in use is h3 at 23.04 px; 18 px guards ad-hoc components); **print 10 pt**; signage per signmaker proof. Tracking never below +0.01em, weight never below 700, `wdth` never below 78 | Measure smallest condensed string per template |
| Condensed contrast | All heading pairs in 18.3 exceed 10:1, so even text under the 18.66 px bold "large" line is held to 4.5:1 and passes | 18.3 |
| Mono caps (IBM Plex Mono 500 or 600) minimum | **`ref` 11 px, one line, grounds per the 11 px table in 18.3. `label` and `value` 12 px.** Print: 7 pt Latin minimum (sticker labels 7 pt, certificate refs 7.5 pt, s04), weight 500 or heavier, Neutral 900 or Primary 700. Tracking +0.08 to +0.10em; no tracking in Indic | Measure; pair is on the 11 px table |
| Mono caps length | One line, no wrap, no truncation. A value that does not fit is set in two labelled cells, not shrunk | Test with the longest real certificate number |
| Social images | At a 1080 px canvas shown about 300 px wide, mono label and ref are 40 px minimum (about 11 px on screen) and condensed heading 72 px (s04) | Preview at phone size |
| Large-print versions | Labels and refs scale with the 18 pt body and none is below 14 pt (house choice, verify with a low-vision reader) | Proof |

## 18.7 Indic scripts: Hindi and Punjabi

| Item | Spec |
|---|---|
| Fonts | Anek Devanagari, Anek Gurmukhi (OFL), weights 400 to 700; normal width only, `wdth` not requested |
| Fallback | Noto Sans Devanagari and Noto Sans Gurmukhi, then Nirmala UI (Windows). Self-host WOFF2 with `font-display: swap`. |
| Line height | Body 1.65 Devanagari, 1.60 Gurmukhi. Headings 1.25 to 1.45 by role (s04); never below 1.25 |
| Case and width | **No caps, no condensing, no scaleX.** Indic headings sit beside condensed Latin caps at the same px and look wider; do not shrink to match |
| Letter spacing | **Never applied to Indic.** Brand CSS sets `letter-spacing: 0` under `:lang(hi)` and `:lang(pa)`, including on mono-label and button classes |
| Size | Indic runs about one step larger than Latin in the same role. Print 8 pt minimum, captions 5.5% of frame height. Indic buttons Anek 700, 14 px minimum, no caps |
| Language attributes | `lang="hi"` and `lang="pa"` on pages and on inline fragments, so screen readers pick the right voice and `:lang()` rules apply. |
| Heading wrap | Allow 2 to 3 lines for Hindi headings. No fixed-height text boxes. |
| Mixed text | English words inside Hindi sentences wrapped in `lang="en"` where practical. |

**Conjunct clipping test (run on every template and under the 1.4.12 override).** Set these strings at body and display sizes and check that no ascender, matra or conjunct is cut at the top or bottom of a box, button, ruled cell or table cell:

| Script | Test string | Why |
|---|---|---|
| Devanagari | `टैंक की सफाई`, `स्वच्छ जल, स्वस्थ जीवन`, `प्रमाण पत्र`, `क्षत्रिय`, `श्रृंखला` | Matras above and below, long conjuncts (क्ष, त्र, श्र, स्त) |
| Devanagari | `Tank साफ करवाना है` | Hinglish mix, baseline alignment with Latin |
| Gurmukhi | `ਟੈਂਕ ਦੀ ਸਫ਼ਾਈ`, `ਸਾਫ਼ ਪਾਣੀ, ਸਿਹਤਮੰਦ ਜ਼ਿੰਦਗੀ`, `ਪ੍ਰਮਾਣ ਪੱਤਰ` | Subscript conjuncts, nukta forms, tippi and bindi |

Native-speaker review of every printed Hindi and Punjabi item is required before release. The tagline translation is a brand wording matter owned by p7 voice; here it is only a rendering test string.

## 18.8 Plain language and Hinglish

| Rule | Spec |
|---|---|
| Families | Short sentences, about 15 to 20 words. Everyday words. One idea per line. Target a general reader, roughly school grade 6 to 8 (house target, to be measured). |
| Institutions | Formal and precise, still plain. Define terms once ("sludge: settled silt at the tank floor"). |
| Process | Always the 5 steps by name, each with a one-line plain explanation. |
| Numbers | Say "20,000 litres", not "20 kL". en-IN grouping. Dates as "03 Oct 2026". |
| Hinglish | Allowed in WhatsApp and social, keeping customer phrases natural ("Tank साफ करवाना है"). Latin words stay Latin; do not transliterate brand terms inconsistently. Same facts and qualifiers as the English. |
| Voice | Explain, never frighten. No urgency. "If your tank is due for cleaning, we can help you plan the service." |
| Acronyms | Spell out on first use (AMC: annual maintenance contract). |
| Health lines | Always carry the water-quality qualifier, in every language. |

## 18.9 Motion and flashes (from s11)

| Item | Rule |
|---|---|
| Flashes | **Zero.** WCAG 2.3.1 allows 3 per second; Clean Tank allows none. No full-frame white or stone to navy cuts within 1 s; cards hold 2 s minimum; 240 ms dissolve (`moderate`) joins light and navy cards. |
| Reduced motion | `prefers-reduced-motion: reduce` gives opacity at 110 ms or nothing. Autoplay video becomes poster plus Play. All five process steps shown at once, step nodes static. |
| Autoplay | No looping video. Muted autoplay over 5 s has a visible pause (2.2.2). No audio autoplay (1.4.2). |
| Banned | Bounce, shake, spin, parallax, counters, pulsing the accent, decorative reveals. |
| Durations | `ct.motion.duration.*` instant 70, fast 110, base 150, moderate 240 ms. UI feedback 150 ms maximum. The Level Line draw is the only eased motion and is static under reduced motion. |

## 18.10 Captions, subtitles, transcripts and audio

| Item | Spec |
|---|---|
| Captions | On every video (1.2.2). Anek normal width, weight 500, sentence case, white on a Primary 900 bar at 80%, radius 4 (9.53:1 worst case over white; never below 70%, 6.64:1). No accent in captions. Burned-in plus a sidecar `.srt` file where the platform allows. |
| Languages | English, Hindi, Punjabi. Native-speaker check. Do not machine-translate without review. |
| Transcript | Text transcript beside every video and every voice note published on the web (1.2.1, 1.2.3). |
| Audio description | Write voice-over so it names the action ("the technician is draining the tank"). On-screen text is read aloud or in the transcript (1.2.5). |
| Sound | No information carried by sound alone. Sound is optional. |
| Social | Reels and Stories carry burned-in captions inside the safe zone, because most viewers watch muted. |
| WhatsApp | Send a 720p copy and a one-line text summary with every video. |

## 18.11 Alt text guide

Owner writes at export; reviewer checks in pull request or content QA. Alt text states what the image shows and why it is there, in one sentence, usually under 125 characters. Decorative images get `alt=""`. No "image of". No text baked into images without the same text in alt or in the page.

| Image | Alt text |
|---|---|
| Hero photo, technician at overhead tank | "Technician in navy uniform checking an overhead water tank before cleaning." |
| Cleaning Date Sticker on a tank | "Clean Tank cleaning date sticker on a tank, showing the cleaning date and the next due date." |
| Cleaning certificate | "Sample Cleaning Certificate with the cleaning date, tank details and next due date." |
| 5-step process diagram | "Five-step process: dewatering, high-pressure cleaning, sludge and water removal, disinfection, UV treatment where applicable." plus the text list on the page |
| Before and after pair | "Inside of a tank before cleaning." and "The same tank after cleaning, same angle." |
| Logo in header | "Clean Tank Services, home" (link purpose, not appearance) |
| WhatsApp button icon | "Chat on WhatsApp" |
| Level Line, gauge scale ticks, rules, section numbers used as ornament | `alt=""` (decorative) |
| Chart | Summary sentence in alt or caption, plus a data table beside it |

In Hindi and Punjabi pages, write alt text in that language with `lang` set. The hero photo carries the page headline as live text over the scrim, never baked in.

## 18.12 Forms

| Item | Spec | WCAG |
|---|---|---|
| Labels | Visible label above every field, never placeholder-only. Label may be the mono caps `label` role (12 px, Latin only); Indic labels are Anek sentence case 14 px or more. Body-size help text 16 px minimum. | 1.3.1, 3.3.2 |
| Field boundary | 1 px Neutral 500 border (3.75:1 on White, 3.41:1 on Stone), radius 4. Never a pale ruled line alone. | 1.4.11 |
| Placeholder | Example only, Neutral 600 or darker (5.87:1 on White, 5.33:1 on Stone). Never light grey. | 1.4.3 |
| Required | Marked with the word "required", not an asterisk alone. | 3.3.2 |
| Errors | `state.error` text, icon, 2 px border, specific words: "Error: enter a 10-digit phone number." Linked to the field with `aria-describedby`. Summary at top on long forms. Focus moves to first error. Sentence case, never caps. | 3.3.1, 3.3.3 |
| Redundant entry | Do not ask twice for what was already given in the same session (address, phone). Offer a "same as" choice. | 3.3.7 (A) |
| Authentication | No cognitive tests. Phone enquiry uses plain fields; paste allowed. | 3.3.8 |
| Field types | `type="tel"`, `inputmode="numeric"` and `autocomplete` values, so Android shows the right keypad. | 1.3.5 |
| Time | No timed forms. | 2.2.1 |
| Alternatives | Every form page also shows Call and WhatsApp. A form is never the only way to book. | inclusion |

## 18.13 PDFs and documents

| Item | Spec |
|---|---|
| Certificate PDF | Tagged. Real headings (the primary title band is a heading, not an image), a reading order that follows the ruled field grid row by row, table header cells, language set (`en`, or `hi`, `pa` per version), document title in metadata, alt text for logo and sticker artwork. Built from a tagged source, not a flattened image. |
| Text | Live text only, no scanned images of text. Fonts embedded (Anek, Plex Mono). Caps applied by the source style, with sentence-case text underneath where the tool allows. |
| Contrast | Neutral 900 on White 14.83:1; white on the Primary 700 title band 12.83:1. Accent only as a Level Line (artifact) or an Accent 700 reference tag (6.51:1). |
| Fields | Certificate number and dates in Plex Mono with slashed zero, selectable text, 7.5 pt minimum for refs and 9.5 pt for values (s04). |
| Check | Run the Acrobat or PAC accessibility checker plus a screen reader read-through on the first template. |
| Large-print | Offer an 18 pt body version of the certificate and service summary on request (APH says nothing below 18 pt is large print; RNIB says 16 pt or higher). |
| Contacts | Only the phones, email and addresses from `src/site.ts`. |
| ISO line | Only the approved ISO wording, where the document is the right place for it. Never on the sticker. |

## 18.14 Print, signage and physical

| Item | Spec |
|---|---|
| Print contrast | Neutral 900 or Primary 700 on White or Stone; white on a solid Primary 700 band. No accent text except an Accent 700 ref tag. Minimum 7 pt Latin, 8 pt Indic; certificate body 10.5 pt (s04). |
| Finish | Matte stock and matte lamination, no gloss glare (s15). |
| Tank sticker 100 x 70 mm | Primary title band with white condensed caps; ruled field grid; cleaning date and next due date at 20 pt condensed caps (s04) in Primary 700 or Neutral 900 on White; mono labels 7 pt minimum (Indic labels Anek 8 pt); 3 px (1 mm on vinyl) Level Line under the next due date as a marker, not the only cue. Weatherproof matte vinyl. Corners about 1 to 2 mm. Numbers readable at arm's length. |
| Uniform name badge | White on Primary 700 (12.83:1), name at 14 pt or larger, role beneath (face and size per s16 and s04). Matte. |
| Van and signboard | Letter height sized to the distance: stroke and height set by the signage vendor from a viewing-distance check (verify before use). Condensed caps lose weight at distance, so a signmaker proof is required. Primary 700 on White or White on Primary 700 only; accent as a Level Line stripe, never as lettering. |
| Signage contrast | Reported MoHUA harmonised guideline figures: luminance difference about 30% adequate, 70% better for low vision. Clean Tank pairs exceed 70% (verify against the 2021 edition). |
| Site safety signage | Follows applicable site and statutory signs, not brand styling. Brand adds only the lockup. Icon plus words plus a number, e.g. `site-water-off` with "Water supply off for tank cleaning". Never accent for warning. |
| Large-print | Certificate, service summary and AMC schedule available in 18 pt on request (labels per 18.6a). |
| Braille | Not applicable to Clean Tank at launch: no packaged consumer product needs it (the EU Braille rule covers medicine packaging only). Revisit for the certificate folder. |

## 18.15 Inclusive representation

| Rule | Spec |
|---|---|
| Gender | Gender-neutral by default. Technicians shown including women where real; never staged for a quota or to look youthful. |
| Age | Mix ages: a senior site specialist, younger crew, customers of all ages. |
| Region | Show people and tanks from the states served (Punjab, Delhi, Uttar Pradesh and others) with real sites. No regional costume shorthand. |
| Religion and caste | Never use dress, name, symbol or setting as shorthand for religion or caste. No religious symbols with the brand palette. No assumption about who cleans or who owns a tank. |
| Disability | Include real people with visible and invisible disabilities only with consent and without framing as inspiration. |
| Class | Show homes, societies and institutions with dignity. No poverty imagery, no fear imagery. |
| Posing | People are shown working, documentary style (s08), not posing for lifestyle shots. |
| Faceless illustration | Gender-neutral figures, no skin-tone coding, no mascot (s09). |
| Consent | Written permission for every person and every client site (s08). |
| AI | No AI-generated people presented as real staff or customers. |
| Language | Examples and names in copy vary across communities. |

Never stereotype. Real technicians, real work, with consent, is the rule.

## 18.16 Low-literacy customers

| Need | Provision |
|---|---|
| Icons plus numbers | Process icons (s10) with step numbers "01" to "05" and a short label; prices, dates and capacities as numbers, not paragraphs. |
| Voice notes | Short WhatsApp voice notes (30 to 60 seconds) in Hindi or Punjabi explaining the 5 steps, price method and next steps, with a text version. Transcript stored for audit. |
| Call-first | The phone number is large, tappable and in the header. A person can always speak to someone. |
| Pictorial certificate | The certificate and sticker use icons and large dates, not dense text. |
| WhatsApp message card | 1080 x 1080, one idea, large numerals, Hindi or Punjabi variant. |
| Respect | Never talk down. Simple does not mean childish. No pressure to decide. |

## 18.17 Low bandwidth and low-end Android

| Item | Spec |
|---|---|
| Test device | A mid-range Android phone at 360 px with 3x CPU throttle and slow 4G (s11 test). |
| Weight | Full-bleed hero photo optimised (WebP or AVIF with a fallback); the scrim is a flat CSS tint, not a second image. Budget to be set in s13 and measured (open item). Fonts self-hosted WOFF2 subset per script. |
| Animation | Opacity and transform only; Lottie under 150 KB; none if reduced motion. |
| No text in images | All text live, so it scales, translates and is read by screen readers. |
| Works without JS enhancements | Core content, call and WhatsApp links work if scripts fail. |
| Data saver | Video never autoplays; poster plus Play. WhatsApp copy at 720p. |
| Sunlight | Primary 700 on White (12.83:1) and Neutral 900 on White (14.83:1) survive glare. Hero text is white on the scrim (6.64:1 worst case). No pale grey text. |

## 18.18 Testing plan

| Method | Tools | Cadence | Owner |
|---|---|---|---|
| Automated | axe DevTools and Lighthouse accessibility in CI per pull request | Every PR | Developer |
| Contrast audit | python3 WCAG script on all tokens, including the scrim composite; update this sheet | Quarterly and on any palette change | Founder |
| Hero image test | Sample pixels behind each letter after grade and scrim | Every hero image | Designer |
| Keyboard | Tab order, focus ring (including white ring on bands, ruled cells), skip link, no traps, fixed or floating header | Every release | Developer |
| Screen reader | NVDA on Windows with Chrome; TalkBack on Android; check caps headings are read as words | Every release | Developer, founder |
| Zoom and reflow | 320 px width, 200% text zoom, 1.4.12 override bookmarklet (caps headings, mono labels, buttons) | Every template | Designer |
| Scripts | Conjunct test strings on Windows and low-end Android | Every template | Designer, native speaker |
| Colour simulation | Protanopia, deuteranopia, tritanopia, achromatopsia | Logo, charts, state set | Designer |
| Motion | OS reduced-motion on; flash check on video | Every video | Editor |
| Real users | 5 to 8 people: older adults, a screen reader user, a low-literacy customer, Hindi and Punjabi readers | Before launch (later: yearly) | Founder |
| External audit | Third party | Later | Founder |

**Exception log format:** item, standard affected, reason, owner, date raised, expiry date, plan. An exception without an expiry date is rejected.

## 18.19 Accessibility statement (website)

Publish at `www.cleantankservices.com/accessibility` (proposed URL, confirm). Draft text:

```
Accessibility at Clean Tank Services

We want everyone to be able to use our website and read our documents.
We work towards WCAG 2.2 Level AA. Our pages are built to be read with a
keyboard, a screen reader, large text, and on a phone. This page was last
reviewed in [month year].

Known limits: [list any pages or PDFs not yet accessible].

If something does not work for you, tell us and we will help directly:
phone [either phone] or email [site email], both from `src/site.ts`.
You can also ask for a large-print or Hindi or Punjabi copy of your
certificate. We aim to reply within [x] working days.
```

Do not claim "fully compliant" until an audit supports it. The response time is an owner decision.

## 18.20 Governance and QA gate

| Gate | Check | Blocker? |
|---|---|---|
| Design review | Every text pair on the pairing list; no accent text on white or on photos; no all-caps paragraphs; caps headings 8 words or fewer | Yes |
| Build | axe and Lighthouse pass; focus ring present (white on bands); 48 px targets; minimum sizes in 18.6a | Yes |
| Content | Alt text, captions, plain language, qualifier on health lines | Yes |
| Scripts | Hindi and Punjabi rendered and reviewed; no caps or tracking on Indic | Yes for those languages |
| Print proof | Size, contrast, matte, Indic 8 pt, mono 7 pt | Yes |
| Franchise audit | Uniform badges, stickers, certificates match this sheet | Yes at audit |
| Change control | Palette, type, scrim or token changes re-run 18.3 | Yes |

Annual review at minimum, and on any new surface or script.

## 18.21 Rules

```
RULE 18.1:     Meet WCAG 2.2 Level AA on every digital surface and carry the pairing list as the only approved text pairs.
CLASS:         MUST
REASON:        Exact and Documented: contrast fixed in the palette, not patched in the UI.
EXACT SPEC:    4.5:1 body, 3:1 large text and UI (1.4.3, 1.4.11). Ratios exact, never rounded up. Pairs in 18.3.
EXAMPLE:       Neutral 900 #25282A on Neutral 0 #FFFFFF, 14.83:1, in the service page body.
ANTI-EXAMPLE:  Accent 500 #EE7555 headline on white, 2.87:1.
TEST:          Does every text pair appear in 18.3 or measure 4.5:1 (3:1 large)?
EXCEPTION:     Logo and inactive controls per WCAG. Logged exception only; central brand owner approves.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 18.2:     Never use Accent as text on white or photos, as a button fill or CTA, or as a state or urgency signal.
CLASS:         NEVER
REASON:        Restrained: accent is a marker; persona bans urgency badges; 2.87:1 fails text and UI.
EXACT SPEC:    Accent 500 is a Level Line, rule or marker chip (Neutral 900 label, 5.16:1). Accent text: Accent 700 reference tags only (6.51:1 on White, 5.92:1 on Stone), Accent 400 on primary bands (5.14:1). Buttons: Primary 700 fill with white label; white fill with Primary 700 label on bands and photos.
EXAMPLE:       "BOOK A CLEANING" button, Primary 700 fill, white label, 12.83:1.
ANTI-EXAMPLE:  White "Book now" text on #EE7555, or accent text over the hero photo.
TEST:          Measure the pair; is it listed in 18.3?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 18.3:     Every state carries an icon and a word as well as color.
CLASS:         MUST
REASON:        Exact and Honest materials: colour blindness (about 1 in 12 men) and sunlight; WCAG 1.4.1.
EXACT SPEC:    State fg on bg, 2 px border, icon from s10, specific wording. Overdue is Warning, never red or accent. Selected steps use fill plus number plus aria-current; the accent underline is never the only cue.
EXAMPLE:       Triangle icon, "Cleaning due 12 Oct 2026", Warning fg on Warning bg.
ANTI-EXAMPLE:  A red dot beside a date.
TEST:          Convert the screen to greyscale: is the state still clear?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 18.4:     Show a visible focus ring on every interactive element and never remove or clip it.
CLASS:         MUST
REASON:        Ordered: keyboard and TalkBack switch users need position at a glance.
EXACT SPEC:    2 px solid Primary 700 (white on primary bands, photo hero and dark mode), 2 px offset, ring radius 4, :focus-visible, no shadow glow, not clipped, not hidden by the fixed or floating header. Inside ruled cells: outline-offset -2px.
EXAMPLE:       Primary 700 ring around the Call button on keyboard focus; white ring on the hero CTA.
ANTI-EXAMPLE:  outline: none with no replacement.
TEST:          Tab through the page: is the ring visible on every stop, on every ground?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 18.5:     Make touch targets 48 px with 8 px gaps; never below 44 px.
CLASS:         MUST
REASON:        Practical: phones, gloved or tired hands, older users.
EXACT SPEC:    48 px standard; 44 px absolute minimum; 24 px WCAG AA floor (2.5.8).
EXAMPLE:       WhatsApp button 48 px high in the sticky bar.
ANTI-EXAMPLE:  Inline text links 20 px apart in a footer list.
TEST:          Measure the hit area in dev tools: 44 px or more?
EXCEPTION:     Inline text links in a sentence (WCAG exception).
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 18.6:     Set Hindi and Punjabi in Anek Devanagari and Anek Gurmukhi at normal width with the right line height, lang attribute, no caps and no letter spacing.
CLASS:         MUST
REASON:        Serves families and institutions in their language, and avoids clipped conjuncts.
EXACT SPEC:    Body line height 1.65 and 1.60; wdth 100; lang="hi" and lang="pa"; letter-spacing 0; no text-transform; Noto and Nirmala UI fallback; 8 pt print minimum; pass the 18.7 test strings.
EXAMPLE:       Hindi flyer headline set in three lines with no clipped matras.
ANTI-EXAMPLE:  Condensed width or Latin letter spacing applied to a Devanagari heading.
TEST:          Do all test strings render unclipped under the 1.4.12 override?
EXCEPTION:     None for body.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 18.7:     Use zero flashes, honor reduced motion, and never autoplay audio.
CLASS:         NEVER (flashing)
REASON:        Restrained; seizure and vestibular safety.
EXACT SPEC:    See 18.9. Cards hold 2 s; 240 ms dissolve between white or stone and navy; reduced motion = opacity or none.
EXAMPLE:       Video end card dissolves from navy to white over 240 ms.
ANTI-EXAMPLE:  Hard cut white to navy twice in one second.
TEST:          Watch the video with the flash tool or frame step: any pair of full-frame luminance swings inside 1 s?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 18.8:     Give every meaningful image alt text and every video captions in the page language, and mark decoration as empty alt.
CLASS:         MUST
REASON:        Documented and Honest materials: the record must be readable by all.
EXACT SPEC:    18.10 and 18.11: one sentence, under about 125 characters; captions Anek 500 white on Primary 900 80%; transcript on web.
EXAMPLE:       Sticker photo alt: "Clean Tank cleaning date sticker on a tank, showing the cleaning date and the next due date."
ANTI-EXAMPLE:  alt="IMG_2041.jpg".
TEST:          Does every img have alt text or alt=""; does every video have captions?
EXCEPTION:     Short social clips on platforms with no caption support carry burned-in captions.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 18.9:     Publish the certificate as a tagged PDF with live text and offer a large-print version.
CLASS:         MUST (tagged), SHOULD (large print available)
REASON:        Documented: "a record of the service, not just a cleaned tank."
EXACT SPEC:    Tags, reading order, table headers, language, title; 18 pt large-print option on request.
EXAMPLE:       Certificate opens in NVDA with sensible headings and fields.
ANTI-EXAMPLE:  A flattened JPEG pasted into a PDF.
TEST:          Does the accessibility checker pass and does a screen reader read the date and next due date?
EXCEPTION:     Franchise paper copies are filled by hand on the printed template; digital copy must be tagged.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 18.10:    Depict people inclusively and never use religion, caste, region or gender as shorthand.
CLASS:         NEVER (stereotyping)
REASON:        Honest materials and a gender-neutral, respectful brand.
EXACT SPEC:    See 18.15. Real technicians working, consent recorded, women included where real.
EXAMPLE:       A mixed-age crew at an apartment society tank.
ANTI-EXAMPLE:  Only young men, or religious costume as local colour.
TEST:          Could any image be read as assuming who does this work or who owns the tank?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 18.11:    Keep capitals to short headings, labels, refs, values and buttons, never on paragraphs or Indic, and hold the minimum sizes for condensed and mono caps.
CLASS:         MUST (limits), NEVER (paragraph caps, Indic caps)
REASON:        Exact and Restrained: capitals slow reading; Indic has no case and breaks when tracked or condensed.
EXACT SPEC:    Caps headings 8 words maximum, buttons 3 words. Condensed (Anek Latin wdth 78, 700, +0.01em): web 18 px, print 10 pt. Mono caps: ref 11 px (grounds in 18.3), label and value 12 px, print 7 pt, weight 500 or more, one line. Source text in sentence case, caps by CSS. Indic: no caps, wdth 100, letter-spacing 0.
EXAMPLE:       "WHAT HAPPENS ON SITE" in condensed 700 at 27.65 px over a sentence-case paragraph; "REF CT-PR-05" in Accent 700 mono 11 px on White (6.51:1).
ANTI-EXAMPLE:  An all-caps disclaimer paragraph; Accent 600 mono 11 px on Stone (4.41:1); tracked Devanagari label.
TEST:          Is every uppercase string a heading, label, ref, value or button within its word and size limits, and is every Indic string untouched by case and tracking?
EXCEPTION:     None. Signage sizes follow a signmaker proof.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

## 18.22 Do / Don't

| Do | Don't |
|---|---|
| Do use Neutral 900 or Primary 700 for body text, Primary 700 underlined for links. | Don't set body text in Accent or Neutral 500. |
| Do pair state color with an icon and a word. | Don't use color alone, or red and accent for urgency. |
| Do give focus a 2 px Primary 700 ring, white on bands and photos. | Don't write `outline: none` or swap the ring for a glow. |
| Do put white text on a 70% Primary 900 scrim over hero photos. | Don't place accent text or thin grey text on photos. |
| Do keep caps to headings of 8 words or fewer, labels, refs and buttons. | Don't set paragraphs, alerts or disclaimers in capitals. |
| Do set mono refs at 11 px or more on the approved grounds. | Don't set Accent 600 mono 11 px on stone, or wrap a mono value. |
| Do offer Call and WhatsApp beside every form. | Don't make a form the only way to book. |
| Do write plain sentences and Hinglish naturally. | Don't use jargon or fear language. |
| Do test conjuncts under the 1.4.12 override. | Don't capitalise, condense or letter-space Devanagari or Gurmukhi. |
| Do caption video in three languages, native review. | Don't machine-translate captions unreviewed. |
| Do send a voice note with a text copy. | Don't rely on long paragraphs for low-literacy customers. |
| Do show real, consenting, varied technicians working. | Don't use stock or AI faces as staff, or stereotype. |
| Do print on matte stock at 7 pt Latin, 8 pt Indic minimum. | Don't print legal lines in pale grey or in accent. |

## 18.23 Accessibility & India notes

- WCAG 2.2 AA is the floor. RPwD Act 2016 and GIGW 3.0 and IS 17802 are references as stated in 18.2; treat mandates as unconfirmed until verified.
- Mid-range Android at 360 px, glare, intermittent networks and WhatsApp as the main channel shape every choice here.
- Devanagari and Gurmukhi have thin strokes and stacked matras: heavier minimum weight, taller line height, larger size, normal width and no caps.
- Navy and a warm orange family may recall Khalsa colours in Punjab; no religious meaning intended and no religious symbols are combined with the palette (traditional association, not a verified rule).
- Accent 500 coral is not saffron and must not be described as saffron; avoid tricolour layouts.
- White is mourning colour in many communities; the uniform is navy and white is a ground and band-text colour only.

## 18.24 Day one vs later

| Day one | Later |
|---|---|
| WCAG 2.2 AA target, pairing list (including scrim and 11 px mono), color independence | Colour-blindness simulation sheet on final logo |
| 2 px focus ring (white on bands), 48 px targets, 16 px body | External audit with disabled users |
| Anek three-script setup, lang attributes, conjunct test, caps limits | Native-speaker QA on all print |
| Reduced motion, zero flash, captions on video | Audio description track |
| Alt text rule, tagged certificate PDF | Large-print template set |
| axe and Lighthouse in CI, accessibility statement | Dark-mode state border and bg pairs, APCA check |
| WhatsApp voice notes with text copy | Voice-note library in more languages |

## 18.25 Checklist

- [ ] Conformance target (WCAG 2.2 AA) stated on page one of the guide and the website statement
- [ ] Pairing table with a ratio for every palette token in use, light and dark (18.3); Secondary absent until defined
- [ ] Hero scrim 70% tested on the real image (white-photo worst case 6.64:1); no accent text on photos
- [ ] Colour-blindness simulations of palette, state set, charts and final logo run and filed
- [ ] A non-color cue (icon plus word) for every state, including overdue due dates
- [ ] Focus ring checked on white, stone, primary band, photo scrim and inside ruled cells; radius 4; white ring on bands
- [ ] 48 px targets with 8 px gaps; 44 px never breached
- [ ] Body 16 px, line height 1.5 / 1.65 / 1.60; survives 1.4.12 override and 320 px reflow
- [ ] Caps limited to headings (8 words), labels, refs, values, buttons (3 words); no caps paragraphs; no Indic caps
- [ ] Condensed caps 18 px web and 10 pt print minimum; mono ref 11 px, label and value 12 px, print 7 pt
- [ ] Motion limits, reduced-motion version and zero-flash check on every video
- [ ] Alt text owner and reviewer named; captions and transcripts for video
- [ ] Print: 7 pt Latin, 8 pt Indic, matte, 18 pt large-print option
- [ ] Hindi and Punjabi fonts, fallbacks, lang attributes and conjunct strings tested
- [ ] Accessibility statement published with contact
- [ ] Tools, cadence, owner and exception log set; accessibility check in QA gate
- [ ] Tagged certificate PDF passes checker and screen reader
- [ ] Low-end Android test at 360 px with throttle passed
- [ ] Imagery checked for representation and consent

## 18.26 Open items & evidence needed

| # | Item | Needs |
|---|---|---|
| 1 | Legal exposure under RPwD Act 2016 s.46 and any IS 17802 mandate | Lawyer, and Gazette of India notification (only draft found) |
| 2 | India colour-blindness figure | A national or multi-region primary study before quoting one number |
| 3 | 16 px body minimum | Primary source; WCAG 1.4.4 sets no size |
| 4 | Dark-mode state border and bg pairs (fg shades are defined in s03 and computed here) | Compute in s03 or s12 before dark state UI ships |
| 5 | Signage contrast and letter-height figures | MoHUA 2021 edition and the signage vendor's viewing-distance spec |
| 6 | Accessibility statement URL and response time | Owner decision |
| 7 | Hindi and Punjabi test strings and any translated tagline | Native-speaker review (p7 owns wording) |
| 8 | Reading-level target (grade 6 to 8) | Measure on real copy; house target only |
| 9 | Image weight budget and performance targets | Set in s13 and measure on a real device |
| 10 | Large-print and tagged PDF production | Template build and checker run |
| 11 | Accent 600 on Stone is 4.41:1 (fails 4.5) | Large figure only on stone, or use Accent 700; s03 may tighten |
| 12 | Written consent and permission for people and client sites in imagery | Owner process (see s08) |
| 13 | Public use of client names | Permission needed (brand-context) |
| 14 | Condensed caps minimums (18 px web, 10 pt print) and mono print 7 pt legibility | House choices: confirm with s04 on the first printed sticker and certificate, and with a low-vision reader |
| 15 | Hero scrim checked against a white photo only as the worst case | Test each chosen hero image (s08); header fixed or floating is an owner decision |
| 16 | Secondary colour is TBD | No pairs, no hex; add pairs to 18.3 once the owner decides |
| 17 | Focus ring inside ruled cells (outline-offset -2px) | Confirm in s13 component build |
| 18 | s05 Rule 05.3 still quotes the old Neutral 500 `#778188`; v2 Neutral 500 is `#85847F` (3.75:1 White, 3.41:1 Stone) | Correct in s05; this sheet follows s03 |

No claims in this pillar need health, ISO or franchise evidence.
