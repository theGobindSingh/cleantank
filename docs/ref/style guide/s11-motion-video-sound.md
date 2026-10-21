# Clean Tank Services: Style Guide
# 11. Motion, Video & Sound

> This pillar governs the time-based layer of Clean Tank Services: how screens change, how the Level Line is drawn, how a job is filmed, and how the brand sounds. The big idea is "Quiet precision. One standard, every tank." In time, that means motion that is short and functional, video that is still and documentary, and sound that stays at one steady level. Speed and easing alone separate a specialist from a flyer, so every duration, curve, shot length and loudness number is fixed here. Humility lives in the words; authority lives in how little moves.

Sheet CT-SG-11 | v2.0 | 08 Oct 2026 (Quiet Utility revision) | Tier legend: LOCK = central brand owner approves any change · GUARD = varies inside stated limits · FLEX = judgment within principles

Not covered here: static layout (s07), UI component behaviour and states (s13), token pipeline and JSON export (s12), logo construction and colorways (s02), photography direction for stills (s08). The logo is not final, so the logo animation in 11.5 is a guideline that must be re-checked against the approved s02 lockup.

---

## 11.1 Principles and inheritance

Three motion principles, each tied to the v2 principles (Exact, Ordered, Restrained, Documented, Honest materials):

| Principle | Becomes this behaviour | Banned opposite |
|---|---|---|
| **Exact** | Straight paths; every move ends on the real layout position; one fixed token per job | Bouncy, floaty, wobbly, hand-tuned curves |
| **Brief** | Shortest duration that the eye can follow; 150 ms or less for almost everything; max travel 8 px | Slow reveals, theatrical entrances, staggered lists |
| **Still** | Most of a screen never moves; motion confirms a change and nothing else; the final frame is the real layout | Looping, pulsing, idle or ambient animation, parallax |

| Brand trait / dial | Motion and sound behaviour | Spec |
|---|---|---|
| Still/Lively 1, Quiet/Loud 1 (s01) | No ambient motion; no sound effects | No looping decoration; silent UI |
| Ordered | The 5 steps appear in numeric order, once | 5-step band is the only staggered sequence |
| Documented | Every state is readable in a still frame | Numeral, label and outline on every step |
| Restrained | One thing moves at a time | At most 2 elements in motion in UI |
| Honest materials | Real footage, real pump sound, no effects | Documentary video, natural sound |
| Responsible | State change never depends on motion; captions on all video | 11.4, 11.10 |
| Sound analogy (persona) | A pump running at a steady, even pressure | One steady level, no peaks, 11.8 |

**One mode only: functional.** Motion exists to confirm a change (press, open, close, arrive). There is no expressive mode and no showpiece moment. The one graphic exception is the **Level Line draw** (accent, 3 px): it is drawn once, left to right, like a level being marked on a scale, and ends exactly on its position. It is the only use of the `settle` duration and easing.

Banned words in any motion brief: bouncy, flashy, snappy, playful, glitchy, punchy, whoosh, pop, energetic, cinematic, delightful.

---

## 11.2 Motion tokens

Token scheme follows s03 and s12: `ct.motion.<group>.<name>`, CSS variable `--ct-motion-<group>-<name>`. The scale is IBM Carbon's published 70, 110, 150, 240, 400, 700 ms.

### Duration tokens

| Token | ms | Frames at 25 fps (video) | Use |
|---|---|---|---|
| `ct.motion.duration.instant` | 70 | 2 | Press feedback, checkbox, toggle, focus ring appearing |
| `ct.motion.duration.fast` | 110 | 3 | Hover colour change, small fades, link underline, exits |
| `ct.motion.duration.base` | 150 | 4 | Dropdown, tooltip, step node fade, page cross-fade, lower third in |
| `ct.motion.duration.moderate` | 240 | 6 | Toast, drawer, accordion body, video section dissolve |

Frame counts are rounded to the nearest whole frame. Video editors use frames; web uses ms.

**Duration follows size.** Small and near is fast; large is slower, but never past the table.

| Moving distance or element size | Token | Max travel |
|---|---|---|
| Colour or opacity only, any size | `fast` (110) | none |
| Under 48 px, or up to 16 px of movement | `base` (150) | 8 px |
| Card, panel, drawer | `moderate` (240) | 8 px |
| Page-level (full-width panel, full-screen menu) | `moderate` (240) | none (fade only) |
| Level Line draw | `moderate` (240) with `settle` easing | its own length, `scaleX` from the left |

Maximum travel for any entrance is **8 px**. Nothing slides in from off screen.

**Exits are faster than entrances:** an exit uses the next token down (400 enters, 240 exits; 240 enters, 150 exits; 150 enters, 110 exits).

**Limits:**

| Limit | Value |
|---|---|
| UI feedback (press, hover, focus, toggle) | 150 ms max |
| Page transition | 150 ms cross-fade, 240 ms max |
| Anything else in UI | 240 ms max |
| Stagger | Only the 5-step band: `ct.motion.stagger.steps` 120 ms, exactly 5 items. No list stagger |
| Elements in motion at once, UI | 2 (the 5-step band may move its 5 nodes and the Level Line) |

### Easing tokens

All curves keep both y values between 0 and 1, so no curve can overshoot. That is the technical meaning of "no bounce".

| Token | cubic-bezier | Use |
|---|---|---|
| `ct.motion.easing.standard` | `cubic-bezier(0.2, 0, 0.38, 0.9)` | Elements that stay on screen and change |
| `ct.motion.easing.entrance` | `cubic-bezier(0, 0, 0.38, 0.9)` | Elements arriving: decelerate to rest |
| `ct.motion.easing.exit` | `cubic-bezier(0.2, 0, 1, 0.9)` | Elements leaving: accelerate away |
| `ct.motion.easing.settle` | `cubic-bezier(0.4, 0.14, 0.3, 1)` | **Level Line draw only**: fast start, long arrival, ends exactly at 1.0 |

Linear easing is allowed only for a determinate progress bar that reports real progress. Spring, bounce and elastic curves are banned.

```css
:root {
  --ct-motion-duration-instant: 70ms;
  --ct-motion-duration-fast: 110ms;
  --ct-motion-duration-base: 150ms;
  --ct-motion-duration-moderate: 240ms;
  --ct-motion-easing-standard: cubic-bezier(0.2, 0, 0.38, 0.9);
  --ct-motion-easing-entrance: cubic-bezier(0, 0, 0.38, 0.9);
  --ct-motion-easing-exit: cubic-bezier(0.2, 0, 1, 0.9);
  --ct-motion-easing-settle: cubic-bezier(0.4, 0.14, 0.3, 1); /* Level Line draw only */
  --ct-motion-stagger-steps: 120ms;   /* 5-step band only */
}
```

Performance: animate only `opacity` and `transform`. Never animate width, height, top, left or margin (there are no shadows to animate). Test on a mid-range Android phone with 3x CPU throttle (see checklist).

---

## 11.3 What animates, and what never does

### What animates

| Element | Motion | Token and curve | Reduced-motion fallback |
|---|---|---|---|
| Hover, focus, press | Colour or underline change; focus ring (2 px primary, white on primary bands) appears at once | `fast` 110 or `instant` 70, `standard` | Same (colour only) |
| Toggle, checkbox, radio | State change | `instant` 70, `standard` | Same |
| Dropdown, tooltip, accordion | Fade, up to 8 px rise | `base` 150 or `moderate` 240, `entrance` in, `exit` out | Opacity only at `fast` 110 |
| Form validation message | Fade in; icon, label and colour (State tokens) appear together | `base` 150, `entrance` | Instant |
| Toast / status banner | Fade, 8 px rise; stays until dismissed or 6 s minimum for read time | `moderate` 240 in, `base` 150 out | Fade at `fast` 110 |
| Page transition | New content cross-fades; no old-page exit animation | `base` 150, `entrance`, max 240 | None: instant swap |
| Loading | Linear bar; after 1 s add the text "Loading" | linear, real progress if known | Static bar plus text |
| **5-step band** | Plays once when 50% in view. Nodes 01 to 05 fade in order; Level Line (accent, 3 px) draws under them | nodes `base` 150 with `ct.motion.stagger.steps` 120; line `moderate` 240 with `settle` easing, `scaleX` from left; total about 840 ms | All five steps and the line shown at once |
| Active step (hover or tracker) | Node fills primary, 3 px accent underline appears | `fast` 110, `standard` | Same |
| "Certificate issued" confirmation | Check icon, label and date appear together | `base` 150, `entrance` | Static |
| Logo | See 11.5 | `settle` for the Level Line only | Static lockup |

**The 5-step band.** The band (navy, per s07 and s10) is the one place a sequence is shown in time. Steps are square nodes (radius 2), outlined primary, numbered "01" to "05" in mono, in the 5-step order: Dewatering, High-pressure cleaning, Sludge & water removal, Disinfection (antibacterial), UV treatment (where applicable). Step 05 is dashed and carries "* Where applicable" at all times. A step's state is never carried by motion alone: every node has numeral, label and outline, so a still screenshot is complete. The band never loops and never replays on scroll.

**Numbers and counters.** Numbers appear complete. There are **no counting-up animations**. A counted stat invites doubt, and the "60% of diseases" figure, years in business and any client count are unverified or permission-bound (see 11.15). A live value the user typed or selected updates instantly.

### What never moves

| Never | Why |
|---|---|
| Bounce, spring, elastic or overshoot on any element | Exact; the Level Line ends on its mark and does not rebound |
| Shake, wobble, jiggle (including "wrong password" shakes) | Reads as alarm; errors use icon, label and State error tokens (s03) |
| Flashing, blinking, strobing, pulsing the accent | Urgency device; also a seizure risk (11.10) |
| Spinning, rotating or flipping logo | Logo moves only per 11.5 |
| Water splash, ripple, wave, droplet or particle-bubble effects | Persona avoid list; no decorative water |
| Counters that count up; ticking clocks; countdown timers | Pressure; unverified stats |
| Parallax, scroll-jacking, zoom-on-scroll, background video loops | Vestibular triggers; Still |
| Auto-advancing carousels, marquees, tickers | Nothing advances without the user |
| Looping decorative animation of any kind | Still |
| Showpiece reveals: staged section entrances, staggered cards or lists, scroll-triggered fly-ins | Brief; only the 5-step band is sequenced |
| Gradient animation, shimmer, glow, light sweep, shadow animation | No gradients, no shadows (s03, s05) |

---

## 11.4 Reduced motion

Honour `prefers-reduced-motion: reduce` on every surface. Design the reduced state first so state changes stay visible.

| Pattern | Reduced-motion behaviour |
|---|---|
| Hover, focus, press, toggle | Unchanged (colour and underline only) |
| Entrances (dropdown, toast, accordion) | Opacity only, `fast` 110 ms; no translate |
| Page transition | None |
| 5-step band | All steps and the Level Line visible at once; no draw |
| Logo animation | Static lockup |
| Autoplay video | Does not autoplay; poster frame with a visible Play button |
| Scroll behaviour | `scroll-behavior: auto` |

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: var(--ct-motion-duration-fast) !important;
    scroll-behavior: auto !important;
  }
  [data-ct-motion="translate"] { transform: none !important; }
}
```

The global rule is a safety net. Components should still define their own reduced state (opacity or instant).

---

## 11.5 Logo animation (guideline: the logo is not final)

There is no approved logo yet. This is the brief the logo must support and the spec to apply once s02 is signed off. Concept: the **Level Line draws once**, then the lockup is at rest. It is a line, not a splash. If the chosen s02 route has no Level Line, keep the principle (one short move, a static end frame) and adapt beat 2.

| Spec | Value |
|---|---|
| Length, full version | **1.2 s** at 25 fps = **30 frames** |
| End-frame hold | 1.0 s = 25 frames (after the 1.2 s) |
| Short version | **0.4 s** = 10 frames (bumper): Level Line already drawn, lockup fades in over `moderate` 240 ms (6 frames), then rests |
| Loop | **Never.** Plays once, then rests on the static lockup |
| End frame | **Identical to the approved standard lockup** (s02): CLEAN TANK SERVICES, descriptor "Scientific & Mechanized Water Tank Cleaning"; tagline "Clean Tank, Healthy Life" only if the lockup includes it |
| Allowed backgrounds | White `ct.color.neutral.0` `#FFFFFF`, Stone `ct.color.neutral.50` `#F5F4F1`, Primary 700 `#20334B` (reversed lockup), Primary 900 `#0F1824` |
| Forbidden backgrounds | Photographs, accent fills, gradients, busy footage |
| Formats | Lottie JSON (web, under 150 KB, own limit to verify), SVG, MP4 (H.264) on solid ground, WebM with alpha, static PNG and SVG of the end frame |
| Sound | Silent by default. Optional sonic logo is a later item (11.8) |

**Storyboard (full version, 25 fps):**

| Beat | Time (s) | Frames | Action | Curve |
|---|---|---|---|---|
| 1 | 0.00 to 0.12 | 0 to 3 | Clean ground only. Nothing moves | n/a |
| 2 | 0.12 to 0.84 | 3 to 21 | Level Line draws left to right, ends on its position | `settle` easing, 0.72 s (video sting timing, not a UI token) |
| 3 | 0.84 to 1.00 | 21 to 25 | Wordmark and descriptor fade in together, no rise | `entrance`, `base` 150 |
| 4 | 1.00 to 1.20 | 25 to 30 | At rest, final lockup in place | n/a |
| Hold | 1.20 to 2.20 | 30 to 55 | Static lockup | n/a |

The accent appears only where the s02 lockup places it (the Level Line) and only in its final colour. The mark never changes colour during the animation. Storyboard values are the brief: re-time to the real mark and record the final timecodes in this table.

---

## 11.6 Video style

### Look and camera

**Documentary, still frame.** Real technicians, real sites, real equipment, in daylight where possible. It follows s01 and s08: composed, muted neutral grade, honest materials (concrete, steel, water, equipment), generous negative space. People are shown working, not posing or smiling at the lens. Hands, gauges, hoses, checklists, dated stickers and certificates are the main shots. Water is clear and still, never a splash.

| Topic | Spec |
|---|---|
| Camera | **Tripod, locked off.** Level horizon, framed to the grid (s08 crop rules). Handheld only when a site makes a tripod impossible: owner approval, stabilised, still-as-possible |
| Camera moves | **None by default.** No pan, push-in, slide, zoom or Ken Burns. A single slow pan (max 6 s) is allowed only when the owner approves it for a specific shot |
| Shot length | Minimum 2 s (50 frames); typical 4 to 8 s; talking head up to 12 s. Let a hand finish its gesture before cutting |
| Pacing | Unhurried: no more than 6 cuts in any 30 s |
| Transitions | **Hard cut (default).** Optional dissolve of `moderate` 240 ms (6 frames) between sections. Nothing else |
| Forbidden transitions | Whip, spin, zoom, glitch, flash, slide wipes, water or bubble reveals, speed ramps, shake, light leaks |
| Sound | Natural: the real pump and hose at their real level, under the voice (11.8) |
| Grade | Neutral, natural daylight, accurate navy uniforms. No teal-orange grade, no vignette, no glow, no stylised filter, no film grain |
| Frame rate | **25 fps** project, shot at 25 fps with 1/50 shutter. India mains power is 50 Hz, and 25 fps with 1/50 reduces indoor light flicker (verify on the first shoot). 30 fps allowed only if the entire project is 30 |

### Canvases and safe areas

| Use | Ratio | Size (px) | Notes |
|---|---|---|---|
| YouTube, website, tenders, presentations | 16:9 | 1920 x 1080 | Master format |
| Reels, Shorts, WhatsApp Status | 9:16 | 1080 x 1920 | Primary social format |
| Instagram or Facebook feed | 1:1 | 1080 x 1080 | Re-cut from the master, do not crop captions |
| Optional feed | 4:5 | 1080 x 1350 | FLEX; platform support to verify |

| Safe area | Value |
|---|---|
| 16:9 | All text and logos inside the centre 90% (5% margin on every side) |
| 9:16 and 1:1 vertical | 6% left and right; top 10% clear; **bottom 20% clear** of text, captions and logos |
| Text size minimum on video | 3% of the short side (32 px at 1080) |

The platform overlay zones are starting values and are not confirmed platform specs (verify by measuring real Reels, Shorts and WhatsApp Status on three devices). A caption sitting in a platform's UI zone is a defect.

### Lower thirds

A lower third reads like a spec-sheet label: a primary bar, a mono caps label, a short accent marker.

| Spec | Value |
|---|---|
| Content | Name and role only, e.g. "Name" / "TECHNICIAN" or "SITE SUPERVISOR" (as real roles exist). No claims, no slogans |
| Bar | Primary 700 `#20334B` solid, radius 0, height 11% of frame height, 1 px rule none |
| Name | Anek Latin condensed (wdth 78) 700, caps, 44 px (1080 canvas), white `#FFFFFF` (12.83:1 on Primary 700) |
| Label (role) | IBM Plex Mono 500, caps, tracking +0.08em, 32 px, Primary 100 `#DFE7F1` (10.29:1). Hindi or Punjabi labels use Anek 600 in the script, no case change (Plex Mono has no Indic glyphs) |
| Accent marker | One short horizontal bar, 64 px wide x 3 px high, Accent 500 `#EE7555`, on the top edge of the bar at the left text margin. 4.47:1 on Primary 700; the marker carries no information |
| Position, 16:9 | Left aligned at 5%; bottom edge 15% up from the bottom |
| Position, 9:16 | Left at 6%; bottom edge at 26% up from the bottom (clears the 20% zone) |
| In | `base` 150 ms, `entrance`, fade only (4 frames) |
| Hold | Minimum **3 s** (75 frames), 5 s for longer names |
| Out | `fast` 110 ms, `exit`, fade (3 frames) |

### Captions and subtitles (mandatory)

**Every video has captions. No exceptions** (WCAG 1.2.2). Videos are watched muted, in noisy places, and in three languages.

| Spec | Value |
|---|---|
| Languages | English, Hindi (Devanagari), Punjabi (Gurmukhi). Burn in the spoken language; supply sidecar SRT or VTT in all three for web, YouTube and tenders |
| Font | Anek Latin, Anek Devanagari or Anek Gurmukhi, normal width, weight 500, sentence case (s04). Fallback Noto Sans per script. Install static instances in the editor if variable fonts do not render (verify) |
| Size | 5% of the short side (54 px at 1080); Hindi and Punjabi 5.5% (59 px) for matra and conjunct legibility (verify) |
| Bar and colour | White `#FFFFFF` text on **Primary 900 `#0F1824`** bar at 80% opacity, radius 4 (sm). Worst case, over a pure white shot: 9.53:1 (17.85:1 at full opacity). Never less than 70% opacity (6.64:1 worst case) |
| Lines | Max 2 lines; 38 characters per line in English; 32 in Hindi and Punjabi |
| Position | Centred horizontally. 16:9: bottom edge 8% from the bottom. 9:16: bottom edge 22% from the bottom (above the 20% clear zone) |
| Timing | Min 1.0 s on screen; 17 characters per second maximum reading speed (own starting value); do not split a step name across cards. Captions cut in and out, no fade |
| Accent | None in captions |
| Review | A native speaker reads every Hindi and Punjabi caption before release. No unreviewed machine translation |
| Terms | Step names, "Cleaning Certificate" and "Cleaning Date Sticker" stay identical across languages |

### Title cards

Title cards are condensed caps on a plain ground, like a section header in a spec sheet.

| Spec | Value |
|---|---|
| Ground | Primary 700 `#20334B` with white text, or Stone `#F5F4F1` / white with Primary 700 text (11.67:1 / 12.83:1) |
| Heading | Anek Latin condensed (wdth 78) 700, caps, tracking +0.01em, line-height 1.0 to 1.05, max 8 words, max 2 lines, e.g. "STEP 2: HIGH-PRESSURE CLEANING" |
| Reference line | Optional IBM Plex Mono 500 caps label, e.g. "REF CT-PR-02 / 05", in Neutral 600 on light ground or Primary 100 on navy |
| Accent | One 3 px Level Line under the heading at most, static |
| Length | 2 s (50 frames) minimum; enters on a hard cut or `base` 150 ms fade |
| Flash safety | Never cut a white or stone card to a navy card within 1 s (11.10); use the `moderate` 240 dissolve |

### End card

| Spec | 16:9 | 9:16 and 1:1 |
|---|---|---|
| Length | 4 s (100 frames) | 3 s (75 frames) |
| Ground | White `#FFFFFF`, one clear frame (0.4 s) before text | Same |
| Content | Lockup (CLEAN TANK SERVICES, descriptor, tagline), phones, website, one email | Lockup, one phone, website |
| Contacts (brand-context only) | 9453517514, 8699339947; www.cleantankservices.com; admin@cleantankservices.com | 9453517514; www.cleantankservices.com |
| Text | Contacts in IBM Plex Mono 500 (zero feature on), Primary 700 on white (12.83:1); one static 3 px accent Level Line under the lockup | Same |
| In | `base` 150 ms `entrance` fade | Same |

Digits are exactly as in the brand context; a space after the fifth digit (94535 17514) is allowed for legibility if s07 adopts a phone format (open). No other phone number, email or address appears on any end card. The ISO line is not on end cards by default; if used, only the exact wording (11.15). Franchise end cards use the Phase 9 lockup (Authorised Service Provider, [Franchisee Name] | [City / District]), with Clean Tank primary and the central contacts above. Local operator numbers are an open decision.

### Export

| Spec | Value |
|---|---|
| Container, codec | MP4, H.264 High Profile, closed GOP, 2 B-frames, fast start (YouTube recommended) |
| Video bitrate | 8 Mbps for 1080p SDR at 24, 25 or 30 fps (YouTube recommended); 9:16 1080 x 1920 same (verify) |
| Audio | AAC-LC, 48 kHz stereo, 384 kbps (verify against YouTube help) |
| WhatsApp share copy | 720 x 1280 version, about 2.5 Mbps (own starting value), aim under 16 MB (verify) |
| Captions | Burned-in version plus SRT and VTT sidecars |
| Poster frame | Always export a still: white or Stone ground, no mid-gesture face |
| File naming | `ct_<topic>_<ratio>_<lang>_v<major><minor>.mp4`, e.g. `ct_5-step-explainer_16x9_en_v20.mp4`; logo animation `ct_logo-anim_16x9_v20.mp4` |

---

## 11.7 Voice-over, templates and on-camera conduct

### Voice-over persona

The voice is the Humble Expert: calm, mature, clear, without a sales smile. It explains rather than persuades. (Voice and copy humility are unchanged in v2.)

| Spec | Value |
|---|---|
| Casting | **Gender-neutral choice:** cast on tone, calm and maturity, not on gender. Keep one voice per series |
| Languages | English, Hindi, Punjabi; one voice per language, same tone; Hinglish only where a natural customer phrase is meant ("Tank साफ करवाना है") |
| Pace | About 130 to 150 words per minute English; 120 to 140 Hindi and Punjabi (own starting values, verify with a first recording) |
| Delivery | Even level, no ad shout, no rising "offer" ending. Pauses after each step |
| Script voice | Simple for families, formal for institutions; "explain, never frighten"; no "best", "#1", "guaranteed", "100% bacteria-free" |
| Own voices | A real technician or supervisor speaking on camera is preferred over a narrator; consent in 11.9 |
| Synthetic voice | Scratch tracks only until the owner decides (open). Never clone a real person's voice without written consent |

### Template A: Reel (9:16), 25 s (625 frames)

| Time (s) | Frames | Content |
|---|---|---|
| 0 to 3 | 0 to 75 | **Hook as a question, never fear.** A locked-off shot of the technician and tank, caption: "When was your tank last cleaned?" |
| 3 to 9 | 75 to 225 | One calm sentence of context, voice-over |
| 9 to 20 | 225 to 500 | One idea only: one step, or the sticker and certificate being handed over |
| 20 to 22 | 500 to 550 | Next step, offered not pushed: "If it is due, we can help you plan the service." |
| 22 to 25 | 550 to 625 | End card, 3 s |

Rules: one idea per reel; no countdown, no "only today", no before/after shock shot; the question may not imply danger. If any line says "safe" or "healthy", add the qualifier in the caption or the post text (11.15).

### Template B: 5-step explainer (16:9), 40 s (1,000 frames); 9:16 version cut the same

| Time (s) | Frames | Content |
|---|---|---|
| 0 to 3 | 0 to 75 | Title card: "HOW WE CLEAN A WATER TANK: FIVE STEPS" |
| 3 to 9 | 75 to 225 | Step 01, Dewatering (mechanical pumps) |
| 9 to 15 | 225 to 375 | Step 02, High-pressure cleaning (subject to site and equipment) |
| 15 to 21 | 375 to 525 | Step 03, Sludge & water removal |
| 21 to 27 | 525 to 675 | Step 04, Disinfection (antibacterial) |
| 27 to 32 | 675 to 800 | Step 05, UV treatment (where applicable) |
| 32 to 36 | 800 to 900 | The record: Cleaning Date Sticker and Cleaning Certificate. Qualifier line on screen |
| 36 to 40 | 900 to 1000 | End card, 4 s |

Each step: real footage of that step, locked off; a small step tracker in the corner (square nodes 01 to 05, mono, active node filled primary with a 3 px accent underline; it changes on the cut, no movement); one voice-over sentence (about 12 to 18 words). Step 05 shows "* Where applicable". No numeric claims (such as pressure figures) unless shown with "subject to site and equipment". The Clean Tank Agent is not described as non-toxic, eco-friendly or long-acting until evidence exists.

### Safety on camera (PPE realism)

| Rule | Spec |
|---|---|
| Show real PPE | Show only the PPE and procedure the team really uses on that job: uniform, safety shoes, and the task's real gear. The owner supplies the PPE and confined-space list (open); no film is released without that check |
| Never stage unsafe acts | No entering a tank without the real procedure, no hose or jet pointed at people, no hands in spray, no climbing without protection, no shortcuts for a nicer shot |
| No shock footage | No filthy-tank reveal as a fear device; show process and record, not disgust |
| Honest limits | Do not show or voice results the process cannot promise; no "safe water" without the qualifier |
| Uniform | Pressed navy uniform with name badge (s16) |

---

## 11.8 Sound

**Tone: steady. A pump running at one even pressure: present, level, never shrill.** Sound adds no emphasis of its own.

| Sound layer | Spec |
|---|---|
| Presence | Never fully silent: keep a low, steady bed (room tone, real pump hum at low level, or a plain music bed under the voice). Dead-silent cuts feel cold |
| Never shrill | No sharp high peaks, stings, alarms, sirens, beeps, whooshes, risers, impacts, bass drops, UI blips. Cut harsh sibilance; true peak limit below |
| Steady | One level through the piece; changes are gradual, bed fades 400 ms or longer |
| Hierarchy | Voice first. Music bed starts about 20 dB below the voice peak and ducks under speech (starting value, verify by ear). Real work sound sits at its natural level, never hyped |
| Silence in UI | No interface sounds on web in v2 |

### Music policy

Music is optional. A video with only voice and real site sound is correct and often preferred.

| Rule | Spec |
|---|---|
| Mood | Steady, plain, level, finished. No build, no climax |
| Tempo | 70 to 90 BPM, constant, no tempo change |
| Instruments | Soft keys or felt piano, low pad, light strings. One texture at a time |
| Never | Dramatic or tense scores, suspense, horror drones, fear music, risers, drops, trailer hits, EDM, film-song clips, lyrics, trending or viral platform sounds |
| Licence | Royalty-free commercial licence from a named library, licence stored with the file. No ripped audio |
| Record | Each video lists track title, source, licence ID and date in the delivery sheet |

Trending sounds are banned: they date the video and carry licence risk. The brand is not trendy or energetic.

### Sonic identity (later)

Status: **Not now.** Decide after the name and logo are stable and the first videos exist.

| Brief item | Value |
|---|---|
| Idea | One short, steady tone sequence, two soft notes at the same level, then rest. Not a jingle |
| Length | About 1.5 s full; 1 s short; silent version always available |
| Mood words | Steady, level, plain, finished |
| Instruments | Felt piano, soft mallet, light pad. No synth lead, no bright bells |
| Reverb tail | Under 1 s |
| Never | Water-drop plink, splash, bubble, alarm, ringtone-style melody |
| Deliverables when commissioned | Full, short, stems, WAV 48 kHz, written rights |
| Where used | End of the hero video only; never in UI, never looped |

### Messages, notifications and hold

| Channel | Guidance |
|---|---|
| WhatsApp messages and reminders | Use the platform's default sound. No custom tone or sound effects. Reminders (about 1 week before due date) are calm text with no pressure wording |
| WhatsApp voice notes | Real voice, 20 to 60 s, even pace, no music, in the customer's language |
| App or web notification sounds | None in v2. If a native app is built, one short tone under 400 ms; follows device silent mode |
| IVR and phone hold (if a line exists) | Not silence and not an advert: a low steady music bed (same policy), a recorded greeting in English, Hindi and Punjabi, repeating no more often than every 30 s (verify). No offers, no claims, no urgency. Draft: "Thank you for calling Clean Tank Services. We will be with you shortly." |
| Never | Audio autoplay on a web page; information carried by sound alone |

### Loudness targets

| Channel | Integrated | True peak | Source and status |
|---|---|---|---|
| Online video (YouTube, Instagram, Facebook, website) | **-14 LUFS** | **-1 dBTP** | Spotify publishes -14 LUFS and -1 dBTP; YouTube and Apple values are not confirmed (verify before mastering) |
| Presentations, tenders, in-room playback | -16 LUFS (own value) | -1 dBTP | Own starting value, verify on the room speakers |
| Broadcast TV, if ever bought | -23 LUFS (EBU R128) or as the broadcaster states | -1 dBTP | Broadcaster spec governs; ATSC A/85 is -24 LKFS |
| IVR, telephone | Per telephony vendor | Per vendor | Open |

Keep loudness consistent across a series: one level, no sudden peaks.

---

## 11.9 Consent, rights and privacy on camera

| Topic | Rule |
|---|---|
| Who | Anyone identifiable: customers, family members, staff, franchise partners, site staff |
| DPDP | India's Digital Personal Data Protection Act, 2023 treats a face and voice as personal data. Record clear consent for the stated purpose before filming and publishing, and keep it. Verify current rules and commencement dates with a lawyer |
| Release | Written, plain-language release in the person's language (English, Hindi, Punjabi): purpose, channels, duration, how to withdraw |
| Children | Do not film children for marketing unless a parent or guardian consents in writing (verify DPDP requirements for minors) |
| Withdrawal | A named contact; remove the video from owned channels on request and record the date |
| Sites | Owner or manager permission for every site. Hospitals, schools, offices and government sites need written permission |
| Client names and logos | Public use needs permission (brand-context). No LIC, MES, BSNL, AIIMS, IIT Kanpur or other client name in video without it |
| Private details | Blur or avoid house numbers, number plates, phone screens, documents, family photos |
| Testimonials | Real, consented, unscripted. Never staged, bought or invented |
| Footage ownership | Footage and music licences stored with the project file |

---

## 11.10 Accessibility and India notes (WCAG 2.2 AA)

| Check | Standard | Clean Tank rule |
|---|---|---|
| Flashing | WCAG 2.3.1 (A): no more than 3 flashes in any 1 s, or below the threshold | **Zero flashes.** Never cut between white/stone and navy full-frame cards, or bright and dark shots, more than once per second. Cards hold 2 s minimum; a `moderate` 240 dissolve joins light and navy. No flashbulb, strobe or camera-flash footage |
| Auto motion over 5 s | WCAG 2.2.2 (A): needs pause, stop or hide | No looping or autoplay video on web. Any video that autoplays muted has a visible pause control and does not loop |
| Reduced motion | WCAG 2.3.3 (AAA) | Honoured; see 11.4 |
| Captions | WCAG 1.2.2 (A) | On every video; Anek, 3 languages |
| Audio description | WCAG 1.2.3 (A) and 1.2.5 (AA) | Write voice-over so it describes the action; on-screen text is read aloud or in the transcript; give a text transcript on the web page |
| Audio only | WCAG 1.2.1 (A) | Transcript for any audio-only item |
| Audio control | WCAG 1.4.2 (A) | No web audio autoplay; always a visible audio control |
| Sound alone | Principle | No information only by sound; sound is optional |
| Contrast on video | 4.5:1 | Captions 9.53:1 worst case at 80% bar; lower third name 12.83:1, label 10.29:1 |
| Scripts | Devanagari and Gurmukhi | Anek Devanagari and Gurmukhi captions and labels tested on a phone; larger caption size (5.5%); native speaker review |
| Low-end devices | Network and CPU | Animate opacity and transform only; Lottie under 150 KB; supply a 720p WhatsApp copy |
| Vestibular | Motion sensitivity | No parallax, no zoom, no camera moves, no large travel |

---

## 11.11 Rules

```
RULE 11.1:     Use only the motion tokens; no hand-tuned durations or curves.
CLASS:         MUST
REASON:        Exact and Brief: same timing in every district and every editor's timeline.
EXACT SPEC:    Durations 70, 110, 150, 240 ms (ct.motion.duration.instant, fast, base, moderate); moderate 240 is the ceiling, including page-level panels and the Level Line draw. Easings standard, entrance, exit; settle for the Level Line only. UI feedback max 150 ms; page transition max 240 ms; max travel 8 px.
EXAMPLE:       Dropdown fades in at 150 ms with `entrance`, leaves at 110 ms with `exit`.
ANTI-EXAMPLE:  A 500 ms ease-in-out on every button, or a page-level duration used for a card.
TEST:          Does every duration and curve in the CSS or timeline match a token, and is slow or settle used only where named?
EXCEPTION:     Platform-native transitions in a native app. Owner approval.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 11.2:     Never use bounce, overshoot, spring or shake; every move ends exactly on its position.
CLASS:         NEVER
REASON:        Exact; bounce reads as playful and shake as alarm.
EXACT SPEC:    Both y values of every cubic-bezier between 0 and 1. Maximum travel 8 px. No keyframe passes its end value.
EXAMPLE:       The Level Line draws in `moderate` 240 ms with `settle` easing and stops exactly under step 05.
ANTI-EXAMPLE:  A "wrong password" shake, or a button that springs on hover.
TEST:          Do any control points or keyframes exceed 0 to 1, or does any element pass its end position?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 11.3:     Never use showpiece or decorative motion: flashing, spinning logos, splashes, droplet or bubble particles, counters, parallax, looping decoration, staggered reveals outside the 5-step band.
CLASS:         NEVER
REASON:        Still and Restrained; persona bans water splashes and urgency devices.
EXACT SPEC:    Banned list in 11.3. The accent never pulses, blinks or animates to draw attention. The only sequence is the 5-step band (stagger 120 ms, 5 items).
EXAMPLE:       A still page with a fade-in dropdown and the 5-step band drawn once.
ANTI-EXAMPLE:  A hero with rising bubbles, cards that fly in one after another, and a counter reading "10,000+ tanks cleaned".
TEST:          Compare against the 11.3 "never" table: any match?
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 11.4:     Honour reduced motion and carry every state without motion.
CLASS:         MUST
REASON:        Responsible: WCAG 2.3.3 and 1.4.1; state is never motion alone.
EXACT SPEC:    prefers-reduced-motion: reduce gives opacity at 110 ms or none; final state shown with numeral, icon and label; autoplay video becomes poster plus Play.
EXAMPLE:       With reduced motion on, the 5-step band shows all five numbered steps and the Level Line at once.
ANTI-EXAMPLE:  A 240 ms slide that runs regardless of the setting.
TEST:          Turn on reduced motion in the OS: does anything translate, scale or loop?
EXCEPTION:     Essential motion (a loading bar reporting real progress), still stated in text.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 11.5:     The logo animation plays once, ends on the approved static lockup, and never spins or loops.
CLASS:         MUST
REASON:        Exact and Documented; the end frame is the brand, not the effect.
EXACT SPEC:    Full 1.2 s at 25 fps (30 frames) plus 1.0 s hold; short 0.4 s (10 frames); Level Line draw is the only `settle` use; end frame identical to the s02 lockup; on white, Stone, Primary 700 or Primary 900 only.
EXAMPLE:       Level Line draws in 0.7 s, wordmark fades in over 0.16 s, lockup rests.
ANTI-EXAMPLE:  A droplet that splashes into the logo with a glow.
TEST:          Is the last frame pixel-identical to the approved lockup? Is there a loop flag?
EXCEPTION:     None. Re-time once the logo is approved.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 11.6:     Every video carries captions in the spoken language, with English, Hindi and Punjabi files supplied.
CLASS:         MUST
REASON:        Responsible: families and institutions watch muted, in three languages.
EXACT SPEC:    Anek (script-matched) 5% of short side (Indic 5.5%); white on Primary 900 bar at 80%, radius 4; max 2 lines; 38 characters per line (32 Indic); bottom clear zones in 11.6.
EXAMPLE:       Reel with burned-in Hindi captions above the bottom 20% zone, plus SRT in English and Punjabi.
ANTI-EXAMPLE:  Captions inside Reels UI, or machine-translated Punjabi nobody checked.
TEST:          Is every spoken line captioned, in a script a native reader has checked, outside the platform UI zone?
EXCEPTION:     Music-only bumpers under 5 s with no speech or information. Owner approval.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 11.7:     Film real work from a locked-off tripod, in a documentary manner, with real PPE, and open with a question, never fear.
CLASS:         MUST
REASON:        Exact and Honest materials; persona: explain, never frighten.
EXACT SPEC:    Tripod, no camera moves; shot length 2 s min, typical 4 to 8 s; hard cuts, optional 240 ms dissolve between sections; people shown working; hook "When was your tank last cleaned?"; PPE as the real procedure. Lower third: Primary 700 bar, Plex Mono caps label, 64 x 3 px accent marker.
EXAMPLE:       Technician reads a gauge on a rooftop tank, in daylight, one locked-off 6 s shot.
ANTI-EXAMPLE:  A filthy-tank shock shot with a siren sting, a drone swoop, a speed ramp and "Your water is dangerous".
TEST:          Is there fear imagery, a camera move, staged unsafe acts, a speed ramp or a shake? Yes: reject.
EXCEPTION:     Handheld or one slow pan where the site requires it. Owner approves per shot. Placeholder footage while drafting, replaced before release.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 11.8:     Sound stays at one steady level: optional licensed music, no fear music, no trending sounds, never shrill.
CLASS:         MUST
REASON:        Restrained; the sound analogy is a pump at steady, even pressure.
EXACT SPEC:    70 to 90 BPM, no drops or risers; -14 LUFS integrated and -1 dBTP for online video (verify YouTube); licence recorded per file; no UI sounds.
EXAMPLE:       Soft keys at 78 BPM, 20 dB under the voice, faded over 400 ms.
ANTI-EXAMPLE:  A trending reel sound or a cinematic suspense drone.
TEST:          Does the file measure -14 LUFS, true peak at or below -1 dBTP, and have a licence ID?
EXCEPTION:     Broadcast or tender playback may use a different level; owner approves.
TIER / OWNER:  GUARD / Central brand owner (Gobind Galaxy)
```

```
RULE 11.9:     No flashing, no autoplaying motion over 5 s without a pause, no audio autoplay.
CLASS:         NEVER
REASON:        Responsible: WCAG 2.3.1, 2.2.2, 1.4.2.
EXACT SPEC:    Zero flashes; never two full-frame light to navy swaps within 1 s; cards hold 2 s; muted autoplay needs a visible pause; web audio never autoplays.
EXAMPLE:       White title card dissolves over 240 ms into navy footage.
ANTI-EXAMPLE:  White and navy cards alternating every 0.5 s.
TEST:          Count luminance swaps of 10% or more in any 1 s window: more than zero full-frame? Reject.
EXCEPTION:     None.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

```
RULE 11.10:    Get consent before filming anyone, and use only the contacts in the brand context on end cards.
CLASS:         MUST
REASON:        Responsible and Documented; DPDP Act 2023; accuracy.
EXACT SPEC:    Written release per person; site permission; client names and logos only with permission. End card phones 9453517514 and 8699339947, www.cleantankservices.com, admin@cleantankservices.com.
EXAMPLE:       Release signed in Hindi by a customer before a sticker handover is filmed.
ANTI-EXAMPLE:  A client hospital's logo in a video with no permission, or a franchisee's personal number on the end card.
TEST:          Is there a release on file for every visible face and a permission for every named site? Does every contact match 11.6?
EXCEPTION:     Crowd shots where no person is identifiable. Owner approves.
TIER / OWNER:  LOCK / Central brand owner (Gobind Galaxy)
```

---

## 11.12 Do / Don't

| Do | Don't |
|---|---|
| Do use the duration and easing tokens, and keep most motion at 150 ms or less. | Don't invent a duration or curve, or use `slow` and `settle` outside their one job each. |
| Do end every move exactly on its position. | Don't bounce, overshoot or shake. |
| Do show the 5 steps in order, once, with a drawn Level Line. | Don't count up stats, stagger lists or animate unverified numbers. |
| Do film real technicians working, locked off, in daylight. | Don't use camera moves, shock footage, speed ramps or whip pans. |
| Do open with a calm question: "When was your tank last cleaned?" | Don't open with fear, a siren or a countdown. |
| Do caption every video in the spoken language. | Don't place captions inside platform UI zones. |
| Do keep one steady, low sound level under the voice. | Don't use trending sounds, risers or shrill stings. |
| Do put a visible Play button on any video that does not autoplay. | Don't autoplay audio on the web. |
| Do get written consent before filming a person or a site. | Don't use client names or logos without permission. |

---

## 11.13 Day one vs later

| Day one | Later |
|---|---|
| 3 motion principles (Exact, Brief, Still) and banned list | Third-party accessibility audit of motion |
| 4 duration tokens in use, `slow` and `settle` defined with one job each; 4 easing tokens in code | Haptics and notification sounds (if a native app is built) |
| Global `prefers-reduced-motion` override in CSS | Sonic logo with a composer, after logo is stable |
| 5-step band animation (once, with reduced-motion fallback) | UI sound set and a licensed music library |
| Logo: static lockup first; 1.2 s Level Line draw once logo is approved | Voice talent roster in English, Hindi, Punjabi |
| One 16:9 and one 9:16 template, caption style, end card, lower third, export preset | Franchise video kit with the Phase 9 lockup |
| One loudness number (-14 LUFS, -1 dBTP) | Per-channel loudness once confirmed for YouTube and Apple |
| Consent release in 3 languages | |
| Reel and 5-step explainer templates | |

---

## 11.14 Checklist

- [ ] Three motion principles tied to the brand (Exact, Brief, Still) and a banned list
- [ ] One functional mode; no showpiece or expressive moments
- [ ] Duration tokens with ms, frames and use; `slow` page-level only, `settle` Level Line only; max travel 8 px
- [ ] Easing curves as cubic-bezier, none able to overshoot
- [ ] What animates and what never moves, with ms and curve printed
- [ ] Logo animation spec with a static end frame equal to the approved lockup (open until the logo exists)
- [ ] Reduced-motion fallback for every pattern; global CSS override in place
- [ ] 5-step band built with a still equivalent; step 05 marked "* Where applicable"
- [ ] No staggered reveal anywhere except the 5-step band
- [ ] Video canvases (16:9, 9:16, 1:1), safe areas, end card, lower third, captions defined
- [ ] Footage locked off on a tripod; no unapproved camera moves
- [ ] Lower third: Primary 700 bar, Plex Mono caps label, 64 x 3 px accent marker; captions on Primary 900; title cards in condensed caps
- [ ] Captions in English, Hindi and Punjabi, checked by native speakers
- [ ] Export presets and loudness targets per channel recorded
- [ ] Music and voice-over policy signed off; licence records kept
- [ ] Sonic logo: explicit "not now" decision with mood words (steady, level, plain)
- [ ] Zero-flash and autoplay rules checked on every title card and cut
- [ ] PPE and unsafe-act review done by the owner before release
- [ ] Consent releases and DPDP check on file; client permissions recorded
- [ ] File naming, download folder, owner and approval route set (Gobind Galaxy)
- [ ] Tested on a mid-range Android phone with 3x CPU throttle, muted autoplay, silent mode and reduced motion on
- [ ] Claims reviewed: no "safe" or health line without the qualifier

---

## 11.15 Open items & evidence needed

| # | Item | Needed |
|---|---|---|
| 1 | Logo | None exists yet. Re-time and re-check 11.5 against the approved s02 lockup (Level Line) and update timecodes |
| 2 | YouTube and Apple loudness | -14 LUFS is Spotify's published target. Confirm YouTube, Instagram and Apple numbers before mastering |
| 3 | Platform safe zones | Bottom 20% and top 10% clear zones are starting values; measure Reels, Shorts and WhatsApp Status on real devices. Also confirm 4:5 and the WhatsApp 16 MB limit |
| 4 | Frame rate | 25 fps with 1/50 shutter chosen for 50 Hz mains in India. Confirm on the first indoor shoot; 30 fps only for a whole project |
| 5 | Hindi and Punjabi caption size and fonts | 5.5% Indic size, 32 characters per line and Anek in video editors (variable fonts) are untested. Check on a phone; install static instances if needed |
| 6 | Native-speaker review | Appoint a Hindi and a Punjabi reviewer for captions and voice-over |
| 7 | Voice-over | Cast English, Hindi and Punjabi voices; decide synthetic voice policy; pace figures are starting values |
| 8 | Music source | Pick a licensed library and record its commercial-use terms; decide whether any music is used at all |
| 9 | Sonic logo | Later; commission after logo and name are stable. Brief is in 11.8 |
| 10 | IVR and hold | Confirm whether a phone line with hold exists; write the greeting in the brand voice in three languages |
| 11 | PPE and confined-space procedure | Owner to supply the real list and SOP so on-camera PPE matches practice |
| 12 | DPDP and release forms | Lawyer to confirm current rules, minors' consent and the release wording |
| 13 | Client and site permissions | Written permission before any client name, logo or site appears (LIC, MES, BSNL, AIIMS, IIT Kanpur and others) |
| 14 | Franchise end cards | Decide whether local operator phone numbers may appear beyond the central contacts |
| 15 | Phone format on end card | Whether to group digits (94535 17514); decide with s04 and s07 |
| 16 | ISO line in video | If used, only the exact wording: "ISO 9001:2015 certified (Q2A-UK Certification Board), Certificate No. Q2A-2026-0401T118011, valid to 31 March 2029." Never "accredited" |
| 17 | Claims that must not appear in video until evidenced | Clean Tank Agent properties (non-toxic, eco-friendly, 3-month effect), CPWD DSR inclusion, the "60% of diseases" stat, any WHO, FDA or government approval. Health or "safe" lines carry the qualifier: water quality also depends on source water, plumbing, tank condition and later maintenance, which are outside our service |
| 18 | Origin story and dates | LIC Lucknow vs Kanpur and Delhi Railway Station 2006 to 08 must not appear in any video until confirmed |
| 19 | Logo file sizes | Lottie 150 KB limit is an own starting value; confirm against real file and page weight |
| 20 | Real footage | No footage exists yet: schedule a locked-off shoot of technician, gauge, steps 1 to 5, sticker and certificate |
| 21 | Device test | Run the low-end phone test (3x CPU throttle, muted, reduced motion) on the first build |
| 22 | Secondary colour | Secondary is TBD (owner). No motion or video use of it is defined; revisit if a value is chosen |
| 23 | Handheld exceptions | Owner to confirm the approval route for handheld or single-pan shots where a tripod is impossible |
