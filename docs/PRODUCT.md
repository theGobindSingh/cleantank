# Product

What this site is, who it serves and what it may say. Agents read this before deciding pages, copy or structure.

Facts the code uses (brand lines, contacts, offices, GSTIN, Udyam, ISO details) come from `src/site.ts`. Other facts, figures, legal text, client names and website-safe long copy come from `docs/ref/INFO-BANK.md`. When this file disagrees with either, the source wins.

## The business

Clean Tank Services does scientific and mechanized cleaning and disinfection of water storage tanks for homes, housing societies, institutions, commercial sites and industry. It is an initiative of Gobind Galaxy, the parent firm and legal entity, based in Kanpur. Founded 2008; founder and CEO is Mr. Gurdev Singh.

Naming:

- Brand: Clean Tank Services ("Clean Tank" in running text). Formal lockup: the name with the endorsement (`src/site.ts`).
- Descriptor: `site.descriptor` in `src/site.ts`. It is not the tagline and the two are never swapped. "Mechanized" always takes a z.
- Tagline: `site.tagline` in `src/site.ts`.
- Franchise operators appear as "Authorised Service Provider" under the master brand, with their name and city in a text slot. They never become the primary brand and get no sub-brand.
- Clients named "Kanha Galaxy" and "Kanak Galaxy" have nothing to do with Gobind Galaxy.

### Services

- Tank cleaning by type: domestic (up to 20,000 L), commercial overhead (up to 20,00,000 L), commercial underground (up to 1 crore L), institutional, large-capacity.
- AMC (Annual Maintenance Contract): scheduled cleanings, advance reminders and a service history. Terms are agreed per customer.
- 24×7 emergency service, always with "subject to location, manpower and operational availability".
- Franchise and business opportunity (see Claims below for the only figures allowed).

There is no public price list for organisations or franchise. Say prices depend on scope, capacity, location and site. AMC pages may publish the structure (visit frequency, paperwork, what the rate includes), but the rupees stay on quote (user's call, 31 Oct 2026). Homes get a published price list with a calculator (see Homes below).

How often to clean depends on the organisation; INFO-BANK §4 has the examples and the general guidance. Never publish a single flat interval.

### The 5-step process

The process is the product. Always show five steps, in this order, with these names (they match the process step images in Payload media):

1. De-watering: water removed with mechanical pumps.
2. High-pressure cleaning: walls, floor and roof cleaned with a high-pressure water jet at the pressure range in INFO-BANK §12 (Jet pressure). Always state it as a range, "depending on the tank and the work": different machines are used for different tanks and jobs (owner's call, 28 Oct 2026).
3. Sludge & water removal: with an industrial vacuum.
4. Disinfection: the Clean Tank agent, a food-grade, non-toxic antibacterial agent (owner's call, 26 Oct 2026). Call it "Clean Tank agent"; never name the product.
5. UV treatment: marked "where applicable".

The track on the home and homes pages uses one plain line and one benefit per step, in words a homeowner uses. It avoids the word "safe", which would need the qualifier below, and leaves the pressure figure to the process page's equipment row. No job duration is published, for any step or tank size (owner's call). The old 6-step version is retired. After the service the customer gets a Cleaning Certificate and a Cleaning Date Sticker on the tank with the cleaning date and the next due date. Follow-up comes about a week before that date. The system recommends and the customer decides.

## Audiences

The site serves three groups, all equally important. Each gets its own dedicated home page, complete on its own so an ad or a search can land there directly. The shared home page at `/` is the gateway.

### Homes (`/homes`)

Individual homeowners and families with their own tank. This group is new for the business. Often a joint decision, triggered by dirt, smell, insects or a long gap since the last cleaning. They want the process explained simply and they worry whether the chemicals are safe for drinking water. They find the service through Google, referrals and social media, and many think in Hindi or Punjabi. Warm tone, WhatsApp first.

- Service area for homes: the tri-city as one area, and anywhere within 20 km of its edge (owner's calls, 23 and 28 Oct 2026). The tri-city is Chandigarh, Mohali and Panchkula, with Zirakpur, Kharar and New Chandigarh, which have grown into them. The page says this in one line and shows a rough map of the area, and asks people outside the obvious core to call or WhatsApp to confirm; it lists no towns. Never promise home service anywhere else; new cities open as franchise partners join.
- Prices: the owner's price list for homes (28 Oct 2026), in the `priceList` block with a calculator. The figures live only in that block; change them there (owner's call, 3 Nov 2026). The rules behind them are in docs/ref/INFO-BANK.md (§12, Home prices). Prices are by tank size alone and the same across the service area. The lower per-litre rate of the largest band is intentional: past that threshold the bigger job gets the lower rate on the whole tank (user's call, 31 Oct 2026). The calculator shows the before-GST price first (same call). They are before GST, which the calculator adds on top. A very hard-to-reach tank may get a small extra charge, told before the visit. Booking and forms come later.
- After the cleaning, the family can use the tank again straight away (owner's call, 28 Oct 2026). Don't describe how it is refilled; homes fill their tanks in different ways.
- The homes page may show client logos and names, the same as the other pages.
- The page (`/homes`) is built for visitors from Google and Meta ads, so it answers the buyer's questions first. Top to bottom: the hero ("Water tank cleaning for homes.", with "homes" highlighted (user's call, 3 Nov 2026), the before/after comparison, "Get a Price on WhatsApp" and "Call Us", no links away from the page); the value proposition ("Clean tank, healthy life.", with "healthy" highlighted: why a clean tank matters for the family's health, with a numbered list beside it; user's call, 3 Nov 2026); what it costs (the price list and calculator; user's call, 4 Nov 2026); a second value proposition on why to choose Clean Tank, with photos and no button (user's call, 3 Nov 2026); the 5-step track; where we clean, with the map; what goes into the tank (the Clean Tank agent, with the qualifier); before we arrive; the clients band; questions; a closing band with the same two buttons; the track record, last (user's call, 3 Nov 2026). WhatsApp opens with a short form already typed (area, tank size, overhead or underground), so the first message can be priced; the phone contact bar adds Call.

### Organisations (`/organisations`)

Companies, institutions and government: hospitals, schools, colleges and universities, hotels, offices, factories, PSUs, government departments, and housing societies, RWAs and apartment associations that contract for the whole building. This is the established business and where the bigger contracts are. The buyer is usually engineering or maintenance staff, with admin and procurement. They need the method, trained teams, documentation, multi-tank scheduling and reliability, usually under an AMC. Government work comes through tenders and GeM. Formal and precise tone.

- Credentials to show when this page is built: GeM and MSME registration, work orders, the ISO certificate, the client list. The owner has the documents; ask for them then.

### Franchise (`/franchise`)

Local entrepreneurs with a service mindset and limited capital who want a proven system, training and support. This group is new. Structured tone.

- Sell the system, the track record since 2008 and the client work (the same documents as Organisations). Never say how many partners there are, never imply the network is empty or new, and never use lines like "be among the first partners". Don't claim an existing partner network either.

### Shared home page (`/`)

What markets well to all three: the brand line, the before/after tank images, the 5-step process, ISO, 15+ years, client logos and testimonials. Detail lives on the dedicated pages, not here.

Top to bottom (owner's call): the hero; the value proposition, which ties a clean tank to the family's health and links on to the process; the process; Let's get started, the three doors to homes, organisations and franchise; our clients; testimonials; the track record strip, with its 15+ years figure; the footer.

### All groups

The real competitor is the local plumber or labourer, and doing nothing. Never criticise either. The question every page should answer is "What difference will your service actually make?"

Each group gets its own enquiry form, asking only what planning needs. Where submissions go is not decided yet (Google Forms was tried and dropped); until then `/contact` lists the phone, WhatsApp, email and the correspondence office (the Kanpur registered office is left out, owner's call). Channels are phone, WhatsApp, the website and the forms. Separate WhatsApp numbers, emails and lead handling per group are planned but not set up; until then everything uses the contacts in `src/site.ts`.

Testimonials: the organisations' staff have praised the work; collect quotes with the person's name, role and permission before using them. Lines quoted word for word from the work completion certificates count as permitted (owner's call, 28 Oct 2026); they are credited to the signer's role and organisation, never the name. Add each under Clients, then Testimonials in the admin, tick "Permission to publish" with the date, and pick it in the home page's testimonials block, just above the track record strip. No Google Business profile yet; it follows the launch (docs/AEO-GEO.md).

## Site structure

Pages: `/` (gateway), `/homes`, `/organisations`, `/franchise`, plus shared pages for the process, about and contact that link back to the three.

The process page (`/process`) explains the work for all three groups: the intro with a quote button, the step track as an index to each step in full (photo, what we do, why it matters, equipment), the before/after gallery, what to prepare before the visit, what the customer gets after it, how often to clean, questions, a closing band and the three doors. INFO-BANK §10 has the source copy per section (About Us, Our Services, Our Scientific Cleaning Process, Recommended Cleaning Frequency, AMC, Why Choose Us, Water Hygiene, Our Clientele, Pan-India Presence, Aims & Objectives, Founder & CEO, Our Brand, Our Message, Franchise & Business Opportunity, Contact, Enquiry); place each section on the page whose audience it serves.

The about page (`/about`) tells who stands behind the work: the intro with a quote button, why we started (with the rooftop team photo), the founder with his photo and the measured bio from INFO-BANK §2, the track record figures, why choose us (`#why-choose-us`), registrations and certificates, every cleared client by name (`#clients`). Their work completion certificates are hidden for now (owner's call, 28 Oct 2026); `showClientCertificates` in `src/site.ts` turns them back on (blur officials' names, signatures and personal contacts on every scan before upload, and every amount, rate or value that hints at what the work cost; owner's calls, 28 Oct 2026), aims and objectives (kept for now; the owner may drop it), the three doors and a closing band. Registrations and certificates (ISO, GSTIN, MSME, GeM and the rest) live only in `src/site.ts`, which the credentials block and the footer both read; Payload holds just the section's heading and line (owner's call, 27 Oct 2026: one source for facts that rarely change). The GeM row says "Registered seller" and never shows the seller ID: owner's call (27 Oct 2026), the ID goes only to clients who ask. When the ISO certificate image arrives, it goes in `public/` and in `iso.certificate` in `src/site.ts`, which turns on the "View certificate" window.

Navigation (at most seven items in the header): Home, For Homes, For Organisations, For Franchise, Process, About, Contact (owner's call). Footer adds Why Choose Us (`/about#why-choose-us`), Clients (`/about#clients`), Privacy Policy (`/privacy`) and Terms & Conditions (`/terms`); the full legal text is in INFO-BANK §11.

Approved CTA labels: "Get a Service Quote", "Explore Our Services", "Send an Enquiry", "Become a Franchise Partner", and for WhatsApp and phone buttons "Get a Price on WhatsApp" and "Call Us" (28 Oct 2026, for `/homes`). Never "Submit" or "Book now".

Languages: English at `/`, Hindi at `/hi`, Punjabi at `/pa`. Routing, fonts, Payload locales and the interface strings for all three are in place. Whoever adds or changes English content writes the Hindi and Punjabi versions in the same change; no review is needed before they go live. If a translation is still missing, the page shows English with a short note, never a half-translation. Hindi and Punjabi sentences end with the danda (।); a question ends with a question mark.

Page content, client lists and franchise figures go into Payload, not into components. Site-wide constants (name, brand lines, URL, phone, WhatsApp, email, offices, GSTIN) live in `src/site.ts`, so one edit changes them everywhere.

## Voice

The persona is "The Humble Expert": a Sage/Expert (about 70%) with some Caregiver (about 30%). Traits: knowledgeable, disciplined, humble, responsible, reassuring. Write like a specialist who wants the customer to understand the work, explaining technical detail simply instead of hiding it or making it sound complicated.

- Calm and plain. No exclamation marks, no urgency, no fear.
- Formal and precise with institutions, warm with families, structured with franchise partners.
- Words that fit: clean, scientific, process, professional, hygiene, treatment, method, system, properly, documented, specialist, care, trust.
- Use carefully and only with evidence: health, safe, non-toxic, protection.
- Don't use: cheap, best, #1, guaranteed, 100% bacteria-free, revolutionary, international, global.

Examples:

| Avoid | Write |
|---|---|
| YOUR WATER COULD BE DANGEROUS! | When was your water tank last cleaned? |
| We are the BEST tank cleaners! | Professional tank cleaning built around a disciplined process. |
| Book NOW before it's too late! | If your tank is due for cleaning, we can help you plan the service. |
| Small investment, high profit! | A structured service business you can build in your district, with training and support. |

Before publishing a line, ask: would the Humble Expert say this face to face, can we prove it, and does it respect the customer's right to decide?

Reusable lines: master message "Clean Tank Services provides scientific and mechanized water-storage-tank cleaning through knowledgeable people, disciplined processes and professional execution." Purpose "To make hygiene a part of everyday life." Vision "Clean & Healthy Nation". Website-safe long copy for About, Gobind Galaxy, Water Hygiene and Look Inside Your Tank is in INFO-BANK §6; prefer it over the flyer copy.

## Claims

Never invent a certification, approval, lab result, health claim, client, statistic or legal status. If a page needs a fact that isn't in INFO-BANK, leave a marked gap and ask.

Safe to state:

- Established 2008, "15+ years".
- The ISO line: "{standard} certified ({issuer}), Certificate No. {number}, valid to {validTo}.", filled from `site.iso` in `src/site.ts` (the credentials block's `isoValue`). Never "accredited", "internationally recognised", UKAS or IAF.
- Operating states: Punjab, Delhi, Uttar Pradesh, Himachal Pradesh, Madhya Pradesh, Jharkhand, Maharashtra.
- The GSTIN in `src/site.ts`.
- The LIC tank story happened in Kanpur.

Needs a document before use: biodegradable, eco-friendly, how long the treatment lasts, the CPWD DSR listing (exact edition and item), the "60% of diseases are water-borne" figure, the Delhi Railway Station story.

Every "safe" or "bacteria-free" line carries the qualifier that water quality also depends on source water, plumbing, tank condition and upkeep after the service.

Franchise pages may use only these figures, with the financial disclaimer from INFO-BANK §8 directly beside them: the franchise business model table in INFO-BANK §8, with its qualifiers. Don't state what ROI or royalty is calculated on, what each model includes, or territory exclusivity. The retired franchise copy listed in INFO-BANK (guaranteed income, event offers, "06-stage", "Remember business is for PROFIT!") never appears.

Clients have given permission to show their names and logos. The list is in INFO-BANK; keep its spellings. IIT Delhi is a client (INFO-BANK lists it under "IITs across India"), and its logo is in `public/assets/images/clients/institutional/`.

Contact details come only from `src/site.ts`. WhatsApp uses the main phone number for now.

## Legal: DPDP Act

The site must comply fully with India's Digital Personal Data Protection Act 2023 and the DPDP Rules 2025, with no gaps. This is a hard requirement, not a nice-to-have. Not built yet; it gets its own piece of work. Until then, nothing new may collect personal data (forms, analytics, tracking) without checking it against the list below.

What that piece of work covers at least:

- A privacy policy and terms (source text in INFO-BANK §11, reviewed against the Act), linked from the footer and the consent banner.
- Consent notices that say what is collected, why, and how to withdraw, in English, Hindi and Punjabi. Withdrawing must be as easy as giving: the cookie choice needs a "change cookie settings" link that reopens the banner (missing today).
- A grievance contact and the visitor's rights: access, correction, erasure and nominating someone.
- Retention limits and deletion for enquiry data, and a data-breach response plan.
- No children's data without verifiable parental consent; the forms should not target or collect it.
- The cookie notice lists the `lang` cookie: a language preference with no personal data, kept a year, needing no consent.
- Every processor listed and covered: Vercel, Neon, PostHog, Sentry and any form backend.

Get a lawyer to review it before it goes live. docs/LAUNCH.md turns this list into the checklist to finish before launch.

## Avoid

- Looking like a generic cleaning company, a plumber's flyer or a trade-show standee.
- Fear and shock: dead animals, filthy-tank close-ups as scare tactics, disease talk. The before/after tank and wall photos in Payload media are evidence, so show them calmly.
- Sales pressure: countdowns, limited slots, discount badges, festive offers.
- Corporate distance or claims to be international.
- Attacks on competitors.
