# Launch checklist

Work through this before the site goes public. Sentry and PostHog stay paused until the last section flips `site.isLive` in `src/site.ts`. This list defines what must be true at launch. Status lives in Track Suru, project `CT` (https://tracksuru.letmecome.in/p/CT), so the boxes here stay unticked.

The legal requirements come from docs/PRODUCT.md (Legal: DPDP Act). Where this list mentions a deadline or duty under the Act or the DPDP Rules 2025, confirm the exact wording with the lawyer; don't take it from here.

## Legal and DPDP

- [ ] A lawyer has reviewed the privacy policy, the terms, the consent notice and the forms against the DPDP Act 2023 and the DPDP Rules 2025.
- [ ] Privacy policy page in English, Hindi and Punjabi, built from INFO-BANK §11 and the lawyer's changes. It names Gobind Galaxy as the data fiduciary and covers:
  - what is collected and why, form by form
  - every processor (below) and what each one receives
  - how long each kind of data is kept
  - the visitor's rights: access, correction, erasure and nominating someone
  - how to withdraw consent, and the grievance contact
  - the right to complain to the Data Protection Board
- [ ] Terms page in all three languages, from INFO-BANK §11.
- [ ] The footer links to both pages on every page, and the consent banner links to the privacy policy.
- [ ] A grievance contact (name or role, email and phone) is published, and someone is responsible for answering within the period the Rules set.
- [ ] A written process for rights requests: how identity is checked, who handles them, and how data is found and deleted in Payload, PostHog and Sentry.
- [ ] Retention is set and written down: enquiry data in Payload, PostHog's data retention, Sentry's event retention. Old enquiries get deleted on that schedule.
- [ ] A data-breach response plan: who decides, and how the Board and affected people are told within the Rules' deadlines.
- [ ] Children: no page or form targets them or asks for their data.
- [ ] Every processor is listed, with its terms or DPA accepted and its data location noted: Vercel, Neon, PostHog, Sentry, and any form or email service added later.

## Consent and forms

- [ ] The consent banner says what is collected, why and how to withdraw, in all three languages, and links to the privacy policy.
- [ ] The footer's "Cookie settings" button (built; hidden while analytics is paused) clears the answer and reopens the banner, so withdrawing is as easy as agreeing. Check it works once live.
- [ ] Before the visitor answers, nothing but the theme and language choices is stored: no PostHog cookies or `ph_*` local storage.
- [ ] Each form asks only for what it needs, shows its purpose next to the fields, has an unticked consent checkbox where consent is the basis, and links to the privacy policy.

## Sentry

- [ ] Project `gs-org/clean-tank` settings: EU region, IP storage off, data scrubbing on, retention matches the privacy policy.
- [ ] `NEXT_PUBLIC_SENTRY_DSN` and `SENTRY_AUTH_TOKEN` are set for Production in Vercel. Decide whether Preview deploys report too.
- [ ] After the go-live deploy: throw a test error and check it arrives with a readable stack trace, and that no `.map` files are served publicly.
- [ ] An alert emails the owners on new issues.

## PostHog

- [ ] `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_REGION` are set for Production in Vercel, and the region matches the project.
- [ ] Project settings: session replay off, client IP discarded, retention matches the privacy policy.
- [ ] After the go-live deploy, in each language:
  - [ ] the banner shows on a first visit
  - [ ] Accept sends events
  - [ ] Decline leaves only cookieless counts
  - [ ] the banner doesn't come back after either answer
  - [ ] the settings link reopens it
- [ ] Nothing loads on `/admin`.

## Going live

- [ ] The home page testimonials block has real quotes with permission picked, or you accept that the section disappears: its placeholder cards stop showing once `isLive` is on.
- [ ] All seven header pages exist; no nav link leads to a 404. Then remove the `_rsc=` exception in the language test in `e2e/site.spec.ts`.
- [ ] Contacts, GSTIN and brand lines match INFO-BANK.
- [ ] `iso.certificate` in `src/site.ts` points to the ISO certificate image in `public/`.
- [ ] `SITE_URL` is set to the production domain in Vercel; the domain serves HTTPS and the www and bare hosts redirect to one of them.
- [ ] Set `site.isLive` to `true` in `src/site.ts` and update the "paused" note in docs/CONVENTIONS.md (Analytics and errors).
- [ ] Fix the contrast of the value proposition button (white on accent 500, 2.88:1) and its heading highlight (accent 500 on white, 2.87:1). Both fail WCAG AA and will fail the axe checks in `pnpm test:e2e`. See docs/DESIGN.md.
- [ ] `pnpm build`, `pnpm test` and `pnpm test:e2e` pass.
- [ ] After deploy: `robots.txt` and `sitemap.xml` list the pages in all three languages; submit the sitemap to Google Search Console.
- [ ] Every item in the checklist in docs/AEO-GEO.md is done, except those marked "after launch". That includes structured data, FAQ answers, the AI crawler policy, the Google Business Profile and Bing.
