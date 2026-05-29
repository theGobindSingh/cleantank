# Franchise Page Design Spec

Date: 2026-05-29  
Project: CleanTank website (`/franchise` route)

## 1) Objective

Create a new Franchise page that is conversion-focused, premium, and original while staying tightly consistent with CleanTank's existing enterprise design system used across Home and About.

The page must communicate trust, scalability, operational support, and technology-led differentiation, then convert visitors into franchise inquiries.

## 2) Confirmed Decisions

- Form submission uses existing `useEasyGoogleForm` pattern.
- Use current hardcoded Google Form ID flow for now (no new backend/API route in this phase).
- Primary CTA scrolls to in-page inquiry form (`/franchise#franchise-inquiry`).
- Hero trust/stats card uses blended content:
  - verified existing credentials/stats from current site
  - plus franchise KPI placeholders for later replacement
- Success stories are a distinct franchise-owner dataset (not institutional client quotes).
- Investment range options ship as placeholder ranges and are expected to be updated later.
- Visual direction priority: premium + consistent + original (this is the highest-priority business page).

## 3) Design Strategy (Selected)

Use a hybrid approach between reuse and custom composition:

- Reuse shared foundations (`HeroSection`, `StandardSectionLayout`, typography primitives, Button/Chip/icon patterns).
- Add targeted, page-specific structure for originality:
  - a two-column hero variant with trust card stack
  - a custom support/training bento grid
  - a structured comparison ledger section
- Keep all visuals inside existing token system (no new colors/tokens/fonts).

This provides strong consistency with Home/About while giving Franchise a distinct premium signature.

## 4) Route + Module Architecture

### 4.1 New route

- Add `src/pages/franchise.tsx`.
- Page remains thin and only renders `FranchiseModule`.

### 4.2 Module implementation

Replace placeholder scaffold in `src/modules/franchise/` with full module convention:

- `src/modules/franchise/index.tsx` (composition only)
- `src/modules/franchise/constants.ts` (all static copy/data)
- `src/modules/franchise/types.ts` (all interfaces/types)
- `src/modules/franchise/styles.ts` (all Emotion styles)
- Section files:
  - `src/modules/franchise/hero.tsx`
  - `src/modules/franchise/benefits.tsx`
  - `src/modules/franchise/support-training.tsx`
  - `src/modules/franchise/technology-comparison.tsx`
  - `src/modules/franchise/success-stories.tsx`
  - `src/modules/franchise/inquiry-cta.tsx`

## 5) Shared Layout Extension

To satisfy "reuse hero with a two-column update" without regressions:

- Extend `src/layouts/hero-section` with an optional split variant.
- Backward compatibility is mandatory: existing Home/About/Process hero usage remains unchanged.

Planned API extension:

- `layout?: "default" | "split"` (defaults to `"default"`)
- `rightPanel?: ReactNode` (rendered only for split layout)

Result:

- Existing pages keep current hero rendering.
- Franchise hero can render left content + right trust panel with same visual language.

## 6) Page Information Architecture

### 6.1 Section 1 - Hero (split layout)

Purpose: immediate credibility + high-intent CTA.

Left column:

- chip, franchise headline, supporting copy
- primary CTA to `#franchise-inquiry`
- secondary CTA to `/contact`

Right column (trust/statistics card cluster):

- verified stats/credentials (e.g., `ISO 9001:2015`, `5000+ Projects`, `Government Grade`, `100% Satisfaction`)
- franchise KPI placeholders (clearly represented as configurable content)
- compact "why now" micro-copy for urgency

### 6.2 Section 2 - Benefits Grid

Purpose: explain franchise upside in scannable format.

- 6-card grid using icon + title + compact body text.
- Themes: recurring demand, brand trust transfer, territory growth, process standardization, faster launch, central support.

### 6.3 Section 3 - Support and Training Bento

Purpose: prove operational de-risking.

Custom bento/grid for the 5 required support pillars:

- training
- equipment
- marketing
- operations
- supply chain

Layout behavior:

- desktop: asymmetric bento spans for premium visual rhythm
- tablet: balanced 2-column grid
- phone: single-column stack with clear hierarchy

### 6.4 Section 4 - Technology Advantage Comparison

Purpose: make differentiation measurable.

- Structured comparison between CleanTank vs traditional cleaning.
- Criteria rows include: process control, contamination risk, documentation/compliance, turnaround, repeatability, outcome confidence.
- Desktop uses a ledger/table-like layout; phone collapses to stacked comparison cards.

### 6.5 Section 5 - Franchisee Success Stories

Purpose: social proof for entrepreneur audience.

- Dedicated franchisee story dataset (not reused institutional client quotes).
- 3 premium testimonial/story cards with:
  - founder/partner name
  - city/region
  - concise growth outcome narrative
- Tone remains credible and enterprise-level.

### 6.6 Section 6 - Inquiry CTA + Lead Form

Purpose: final conversion block.

- Strong CTA heading + supporting assurance text.
- In-page anchor target id: `franchise-inquiry`.
- Required fields:
  - full name
  - email
  - city/region
  - investment range (select)

Investment range placeholders (editable later):

- `INR 10-15L`
- `INR 15-25L`
- `INR 25-40L`
- `INR 40L+`

## 7) Form Data Flow (Current Google Form Constraint)

Current known Google Form config from existing franchise implementation:

- `gFormId`: `10_RNU0U5WCSnjPnWOyFzAvuULvgIsQsHNvB874olga0`
- known entry mappings currently available in codebase:
  - `entry.1259236425`
  - `entry.2064195984`
  - `entry.1131631286`

Given the requirement for 4 visible fields but current 3 known mappings, phase-1 compatibility behavior:

- `name` maps to `entry.1259236425`
- `email` maps to `entry.2064195984` (temporary reuse)
- `city/region` submission payload is composed with investment range and mapped to `entry.1131631286`, format:
  - `"<city-region> | Investment: <selected-range>"`

This preserves the requested UX and ensures all captured intent reaches Google Form within current mapping constraints. Later, when final franchise form entry IDs are available, mappings can be normalized 1:1.

## 8) Styling + Originality Guidelines for This Page

Hard constraints:

- Use only existing design tokens and typography primitives.
- No new color tokens, no hardcoded hex/rgb/hsl values.
- Keep `StandardSectionLayout` for non-hero section wrappers unless custom structure is truly required.

Originality levers (within system):

- asymmetric hero split with premium trust card layering
- bento-grid support architecture
- ledger-style comparison section
- stronger section rhythm (dense -> airy -> dense progression)
- subtle motion and hover polish using existing transition patterns

## 9) Accessibility, Responsiveness, and UX

- Maintain semantic sectioning (`section`, `article`, `blockquote`, lists where appropriate).
- Preserve readable heading hierarchy and contrast through existing tokens.
- Ensure all interactive controls remain keyboard reachable.
- Hero split collapses to a single column on non-desktop with trust card beneath headline.
- Grid-heavy sections degrade cleanly to tablet and phone patterns without horizontal clipping.

## 10) Error Handling + Fallback Behavior

- Form uses `useEasyGoogleForm` with success toast and form reset.
- If submission fails, show non-blocking toast with fallback to direct contact CTA.
- Retain visible contact path (`/contact`) as secondary safety net.

## 11) Verification Plan

Implementation acceptance checks:

1. Route `/franchise` is reachable from nav and direct URL.
2. Hero primary CTA scrolls correctly to `#franchise-inquiry`.
3. All 6 required sections render in intended order.
4. Form validates required fields and submits through current Google Form pipeline.
5. Page remains consistent with Home/About typography, spacing, and color system.
6. Lint passes with `pnpm run lint`.

## 12) Scope Boundaries

In scope:

- franchise page route + full module implementation
- shared hero layout extension for split variant (backward-compatible)
- section content/components/styles and form wiring

Out of scope (phase 1):

- new backend lead API
- CMS-driven franchise content model
- replacing contact/franchise Google Form infrastructure globally

---

This spec is approved in direction: premium, original, and conversion-focused while preserving strict CleanTank system consistency.
