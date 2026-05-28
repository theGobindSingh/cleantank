# Contact Page Module Plan

## Summary

Build a `/contact` page using the existing Next.js Pages Router architecture and the repo’s strict `components → layouts → modules → pages` layering. The page should skip a normal hero and open with a standard section layout containing a two-column contact experience: a larger business inquiry form and a smaller contact-info column. Follow it with one quiet visual/proof section so the page feels complete without becoming noisy.

Because this session is in Plan Mode, the implementation run should first create `docs/contact-page-plan.md` and save this plan there before coding.

## Key Changes

- Add `src/pages/contact.tsx` that imports and renders only `@modules/contact`.
- Rebuild `src/modules/contact` from the current stub into:
  - `index.tsx`: composition only.
  - `constants.ts`: section copy, contact methods, form fields, Google Form config placeholders, image/proof content.
  - `types.ts`: props and typed data contracts.
  - `styles.ts`: Emotion styled components only.
  - Optional subfiles: `reach-out.tsx`, `visual-proof.tsx`, and `contact-form.tsx` if the module becomes too large.
- Extend `StandardSectionLayout` with an optional `headingLevel?: "h1" | "h2"` prop, defaulting to `"h2"`, so the contact page can start with the standard layout while still rendering a valid page-level `H1`.
- Add contact-specific meta text through the existing `HeadMeta` flow, using `/contact` as the key and keeping existing behavior as fallback.

## Contact Page Layout

- First section uses `StandardSectionLayout` with:
  - chip: `CONTACT`
  - `headingLevel="h1"`
  - title: `Talk to CleanTank Services`
  - description: concise lead-focused copy for facility managers, societies, institutions, and commercial projects.
- Section body uses a desktop two-column grid:
  - Left column, larger: inquiry form.
  - Right column, smaller: business contact details.
- Form fields:
  - Full name, required.
  - Organization / facility name, required.
  - Phone number, required.
  - Email, required.
  - City / service location, required.
  - Project type select: Residential Society, Commercial Building, Hospital / Healthcare, School / Institution, Government Facility, Industrial Tank.
  - Message / tank details textarea, optional.
  - Submit CTA: `Request a Site Audit`.
- Contact-info column uses repo defaults (use the file src/constants/index.ts):
  - Phone: `+91 12345 67890`, `tel:+911234567890`.
  - Email: `cleantankservices@gmail.com`, `mailto:cleantankservices@gmail.com`.
  - Service area: `Serving commercial, residential, institutional, and government facilities across India`.
  - Hours: `Mon-Sat, 9:00 AM-7:00 PM IST`.
- Use only MUI icons, likely `PhoneRounded`, `EmailRounded`, `LocationOnRounded`, `AccessTimeRounded`, and `AssignmentTurnedInRounded`.
- Second section is a restrained visual/proof section:
  - Use `next/image`, not raw `img`.
  - Use existing local image asset, preferably `@images/tank.png`.
  - Pair it with a short proof strip: ISO 9001:2015, 5-step scientific protocol, government-grade compliance.
  - Keep it minimal: no landing-page hero treatment, no decorative blobs, no nested cards.

## Form Behavior

- Use `@webadeva/use-easy-google-form` and `react-toastify`, following the franchise form pattern.
- Store Google Form config in `constants.ts` with explicit placeholders:
  - `gFormId: "REPLACE_WITH_CONTACT_GOOGLE_FORM_ID"`
  - placeholder `entry.REPLACE_*` IDs for each field.
- Add a simple `isContactFormConfigured` guard:
  - If placeholders are still present, prevent submission and show a toast telling users to call or email.
  - Once real IDs are filled, submit through `useEasyGoogleForm`, reset the form, and show success toast.
- Do not hardcode static form labels or options inside render files; all field definitions live in `constants.ts`.

## Mobile Plan

- Desktop: two-column grid, form about 60-65%, contact column about 35-40%, with calm spacing.
- Tablet and phone: stack to one column using existing `mediaQuery.nonDesktop`.
- Mobile order:
  - Section heading.
  - Form.
  - Contact details.
  - Visual/proof image section.
- Inputs should be full width, touch-friendly, and not shift layout on focus.
- Contact methods become compact rows, not wide cards, to avoid visual heaviness.
- Image section uses a stable aspect ratio, `16 / 9` on smaller screens, with no text overlap.

## Assumptions

- Use repo default contact details from the footer plus restrained placeholders for service area and hours.
- Use a full contact form UI now, but leave Google Form IDs configurable before production.
- Keep the page quiet and conversion-focused: no hero section, no decorative-heavy design, no extra marketing blocks, but should not also feel incomplete or underdeveloped.
- Repo default constants are in `src/constants/index.ts` and can be imported into the module’s `constants.ts` for reuse.
