# CT-409 research, thread 4: our own business audit for `/franchise`

Read-only audit of what the repo and our public footprint say about Clean Tank Services and its franchise offer. Dated 20 Nov 2026. Paths are relative to `/home/ubuntu/Programming/cleantank`.

Source weight. Approved sources are `src/site.ts`, `docs/ref/INFO-BANK.md` and `docs/PRODUCT.md` (AGENTS.md:31 says "nothing else in `docs/ref/` is used"). Anything taken from `docs/ref/brand guide/`, `docs/ref/brand persona.md` or `docs/ref/style guide/` is marked **[background]**: useful for the interview, not approved copy.

---

## 0. Headline findings

1. **The franchise offer is a figures table with no product behind it.** INFO-BANK §8 gives price, royalty, ROI, payback, office size and term, then lists what nobody has written down: what ROI and royalty are calculated on, what the ₹3 lakh and ₹8 lakh models include, territory, renewal, and what "All in package" covers (INFO-BANK.md:315-317). PRODUCT.md:138 then bans the page from saying any of it. A buyer's first five questions have no approved answer.
2. **ROI and payback contradict each other.** "40% or above" ROI (INFO-BANK.md:286) and a "4–6 months" payback (INFO-BANK.md:287) can't both describe the same yearly return. A 4–6 month payback implies roughly 200–300% a year; 40% a year implies about 2.5 years. A careful buyer will spot this in seconds. The competitor notes already flagged that "3.5% per month" is ambiguous (national_players.md:191-192).
3. **Starting investment differs between sources:** "From approximately ₹3 lakh" (INFO-BANK.md:284) against "₹5 lakh starting investment, including the planned operating materials/setup" [background] (p04-market-and-audience.md:365-369). The retired figure "4–5 lakh" (INFO-BANK.md:445) sits between them.
4. **Partner network: rules and copy disagree.** PRODUCT.md:66 forbids implying the network is empty and forbids claiming one exists. INFO-BANK's own long copy speaks of "our committed franchisees spread across the wide, ever-increasing network laid down by us" (INFO-BANK.md:201). The old GitHub Pages draft, still in search snippets, claimed a "Clean Tank Franchise Programme" launched in 2017 "with 10 territories operational in the first year". Nobody has written down how many partners exist today, if any.
5. **Our public footprint is thin, and parts of it would worry a buyer.** We have no Google Business Profile, no Justdial listing and no franchise-directory listing. The domain was registered on 16 Sep 2026, after a gap in captures from Dec 2024. An IndiaMART "Gobind Galaxy, Kanpur" profile sits under a laundry-machine category with a different GSTIN. There is a 1.0-rated "Govind Galaxy" tank business in Kanpur, and Maps resolves "Gobind Galaxy" to an electronics shop. The live `/franchise` is a noindexed "Coming soon" page whose WhatsApp button pre-fills a request for a tank-cleaning price.
6. **Stale franchise phone references in INFO-BANK.** The franchise number was removed on 19 Nov 2026 (commit 6f7b82d; PRODUCT.md:67). INFO-BANK.md:28 and :54 still say "the main and franchise phones" live in `src/site.ts`.
7. **Strong proof exists, but on the organisations side.** We have 21 work completion certificates from IITs, NITs, IIMs, AIIMS, BHEL, BSNL, CRPF and IREL (INFO-BANK.md:226-248), plus ISO 9001:2015, Udyam, GeM, EPFO/ESI and 2008. Nothing proves the franchise system itself: no partner, no pilot, no training manual, no agreement, no unit P&L.

---

## 1. Fact sheet: what the franchise page may say

### 1a. Programme (INFO-BANK §8; PRODUCT.md:138 limits figures to this table and its qualifiers)

| Fact | Exact approved wording / value | Source |
|---|---|---|
| Heading | "FRANCHISE & BUSINESS OPPORTUNITY — START YOUR OWN BUSINESS. STEP BEYOND JOBS." | INFO-BANK.md:258 |
| Pitch | "CLEAN TANK SERVICES is expanding its franchise network across India … structured training, marketing assistance, lead-generation support and operational guidance." | INFO-BANK.md:259 |
| Closing | "BUILD YOUR OWN SERVICE BUSINESS … Service Industry. Professional Opportunity. Scalable Business." | INFO-BANK.md:261 |
| Why tank cleaning | Recurring need across societies, apartments, commercial, hospitals, hotels, education, government, industry; "opportunities for repeat business and Annual Maintenance Contracts" | INFO-BANK.md:263-265 |
| 7 benefits | Low Infrastructure Requirement; Training & On-Site Support; Marketing & Advertising Support; Lead Generation & Sales Assistance ("may be provided … according to the applicable franchise model"); Flexible Office Model; Recurring Business Potential; Scalable Market | INFO-BANK.md:267-277 |
| Franchise investment | ₹3 lakh – ₹8 lakh depending on model | INFO-BANK.md:283 |
| Suggested startup level | From approximately ₹3 lakh | INFO-BANK.md:284 |
| Royalty | 3.5% per month, as applicable to the selected model | INFO-BANK.md:285 |
| Indicative ROI | 40% or above, subject to actual business performance | INFO-BANK.md:286 |
| Indicative payback | 4–6 months, subject to actual business performance | INFO-BANK.md:287 |
| Office | Approx. 150 sq ft or suitable home-based setup (small office / home / shop) | INFO-BANK.md:288 |
| Agreement period | 3 years | INFO-BANK.md:289 |
| Market | Residential, commercial, institutional & industrial | INFO-BANK.md:290 |
| Business support | Training, marketing, lead generation, sales & operational support | INFO-BANK.md:291 |
| Support flow | Training → On-Site Service Training → Marketing Support → Lead Generation → Sales Assistance → Operational Guidance → Business Growth Support | INFO-BANK.md:295 |
| Financial disclaimer (mandatory beside figures) | "All investment, revenue, ROI and payback figures are indicative business projections and are not guaranteed returns unless specifically stated in the executed franchise agreement. Actual results may vary depending on territory, customer acquisition, sales volume, pricing, operating expenses, manpower, local competition and other business conditions." | INFO-BANK.md:309 |
| T&C item 10 | "Franchise opportunities are governed by a separate franchise agreement. Website information regarding investment, ROI, payback or business potential is indicative unless expressly incorporated into the executed agreement." | INFO-BANK.md:313, :416 |
| CTAs | "Become a Franchise Partner"; enquiry block "Franchise Enquiry: Get details about available franchise models, investment, territory, training and support." + "Send an Enquiry" | INFO-BANK.md:303-304; PRODUCT.md:93 |
| Phone | Main number only (`phone`, src/site.ts:9), for calls and WhatsApp | PRODUCT.md:67; src/site.ts:7-9, :31 |
| New cities open through partners | "new cities open as franchise partners join" | PRODUCT.md:50 |
| Audience | "Local entrepreneurs with a service mindset and limited capital who want a proven system, training and support." Structured tone. | PRODUCT.md:64, :104 |
| What to sell | "the system, the track record since 2008 and the client work (the same documents as Organisations)" | PRODUCT.md:66 |
| Approved example line | "A structured service business you can build in your district, with training and support." | PRODUCT.md:116 |
| Print lines (website must soften them) | All-in package, ready to operate · No hidden charges · Pan India · Training & technical support as required · Operation plan support · Execution plan for big orders · Recruitment support as required, and others | INFO-BANK.md:297-299 |

### 1b. Company facts and credentials

| Fact | Value / where | Source |
|---|---|---|
| Brand / legal entity | Clean Tank Services, "An Initiative of Gobind Galaxy" | src/site.ts:6, :18-23 |
| Proprietor, Founder & CEO | Mr. Gurdev Singh; signs "Proprietor"; also "Mr G D Singh" in franchise material | INFO-BANK.md:15, :56 |
| Founder bio (measured) | 35+ years; began at Godrej in business and sales; mentor style | INFO-BANK.md:66 |
| Established | 2008; "15+ years" safe | src/site.ts:25; PRODUCT.md:128 |
| Offices | Regd. Kanpur (hidden on site); Correspondence/Marketing office B-3/26 Jamuna Apartments, Kharar | src/site.ts:33-45, :64-69 |
| GSTIN | `site.gstin` | src/site.ts:46; INFO-BANK.md:440 |
| Udyam (MSME) | `site.udyam`, registered to Gobind Galaxy | src/site.ts:48 |
| Other registrations | EPFO, ESI; GeM "Registered seller", ID never shown | src/site.ts:49-51; PRODUCT.md:89 |
| ISO | ISO 9001:2015, Q2A-UK Certification Board, cert no., valid to 2029-03-31, verify URL; scope covers mechanized tank cleaning for residential, commercial and industrial premises | src/site.ts:53-61; INFO-BANK.md:38-48 |
| Operating states | Punjab, Delhi, UP, HP, MP, Jharkhand, Maharashtra | PRODUCT.md:130 |
| Technical support | "Technical representatives in all major cities in India" | INFO-BANK.md:22, :396 |
| Process | 5 named steps, fixed order; jet 150–250 bar as a range; "Clean Tank agent", food-grade, non-toxic; UV "where applicable" | PRODUCT.md:30-40; INFO-BANK.md:137-145, :449 |
| Customer deliverables | Cleaning Certificate, Cleaning Date Sticker, follow-up a week before next due date | PRODUCT.md:40 |
| Capacities | Domestic to 20,000 L; commercial overhead to 20,00,000 L; underground to 1 crore L | PRODUCT.md:21 |
| AMC | Scheduled cleanings, reminders, service history; terms per customer | PRODUCT.md:22; INFO-BANK.md:112 |
| Clients (permission given for all) | 5 groups, about 60 names | INFO-BANK.md:214-220 |
| Work certificates | 21 rows, 2014–2026, IIT Bhubaneswar, IIT Ropar, IIM Lucknow, NIT Jalandhar/Trichy/Hamirpur, AIIMS Vijaypur, BHEL, BSNL Chandigarh, CRPF, IREL (via GeM), SMVDU, IIIM Jammu; amounts never shown | INFO-BANK.md:222-248 |
| Equipment (categories) | Cleaning, pumping, vacuum and treatment equipment; mechanical pumps, high-pressure jet, industrial vacuum, UV | INFO-BANK.md:118, :139-143 |
| Training (company-level) | "periodic training/workshops under senior service executives" | INFO-BANK.md:118, :189 |
| Home price list | Exists, in the `homePrices` global; home tank sizes only | PRODUCT.md:51; INFO-BANK.md:450 |

---

## 2. Rules sheet: constraints on franchise copy

| Rule | Source |
|---|---|
| Figures only from the INFO-BANK §8 model table, with qualifiers; disclaimer **directly beside** them | PRODUCT.md:138; INFO-BANK.md:307 |
| Don't state what ROI or royalty is calculated on, what each model includes, or territory exclusivity | PRODUCT.md:138; INFO-BANK.md:315-317 |
| Retired copy never appears: guaranteed ₹1 lakh/month, "4–5 lakh", event offers (₹50K discount, 3 months zero royalty, ₹50K marketing), "ambitious house ladies", "06-stage", the four tiles (Rapid Growth, High Demand…, Steady Income, Limitless Potential), "Remember business is for PROFIT!", "Low headache, low investment, high returns" | INFO-BANK.md:445; PRODUCT.md:138 |
| Print-only lines are softened on the web ("Small investment, high profit" → the structured-business line) | INFO-BANK.md:299, :445; PRODUCT.md:116 |
| Never say how many partners there are, never imply the network is empty or new, no "be among the first partners", and don't claim an existing network | PRODUCT.md:66 |
| Main number only for calls and WhatsApp; no franchise number; no other phones or emails | PRODUCT.md:67, :142; INFO-BANK.md:441 |
| No public price for franchise: quote only | PRODUCT.md:26; INFO-BANK.md:450 |
| Partners appear as "Authorised Service Provider" under the master brand, name and city in a text slot; never a primary brand or sub-brand | PRODUCT.md:16; p09:46-58 [background] |
| Structured tone; calm; no exclamation marks, urgency or fear; banned words: cheap, best, #1, guaranteed, 100% bacteria-free, revolutionary, international, global | PRODUCT.md:103-107 |
| No sales pressure: countdowns, limited slots, discount badges, festive offers | PRODUCT.md:164 |
| No "international"/"accredited"/UKAS/IAF; ISO line only in the fixed form | PRODUCT.md:129, :165; INFO-BANK.md:48 |
| Never invent a certification, client, statistic or legal status; leave a marked gap and ask | PRODUCT.md:124 |
| Needs a document first: biodegradable, eco-friendly, CPWD DSR listing, "60% of diseases", Delhi Railway Station story | PRODUCT.md:134 |
| "Safe"/"bacteria-free" always with the water-quality qualifier | PRODUCT.md:136 |
| Don't name or run down competitors; ASCI on comparatives; no "better than" we can't prove | PRODUCT.md:77, :166 |
| No money imagery on franchise pages; no gradients, seals, shields or urgency badges | DESIGN.md:13; s13:40, :361 [background] |
| Figures in a ruled table, never as stat tiles, never in the hero or sticky bar; disclaimer in the same viewport in a bordered note, never collapsed | s13-digital-ui.md:349-361 [background] |
| Approved CTA labels only; never "Submit" or "Book now" | PRODUCT.md:93 |
| All content in Payload in EN/HI/PA, written together; franchise figures go in Payload, not components | PRODUCT.md:95-97; AGENTS.md rules |
| DPDP: nothing new may collect personal data (forms, tracking) until checked against the DPDP list; enquiry form needs purpose, unticked consent where consent is the basis, privacy link, retention, processors listed; lawyer review | PRODUCT.md:144-158; LAUNCH.md:11-33 |
| Franchise form fields [background]: Name, Location (district), Phone, optional email and message; investment range and experience **not collected until the owner decides** | s13-digital-ui.md:245 |
| Process discipline principle [background]: "The process promised to the customer must be the process delivered" | p02-purpose.md:101-107 |
| Clients' names and logos: permission given; keep INFO-BANK spellings; Kanha/Kanak Galaxy are unrelated | PRODUCT.md:17, :140; INFO-BANK.md:214 |
| Work certificates: hidden for now (`showClientCertificates: false`); blur names, signatures, amounts | src/site.ts:15-17; PRODUCT.md:89 |
| Testimonial lines quoted word for word from certificates are permitted, credited to role and organisation, never the name | PRODUCT.md:81 |
| No job durations published | INFO-BANK.md:452 |

---

## 3. Assets inventory

### 3a. Proof material (inferred from code and docs; the database was not queried)

| Asset | Status | Source | Franchise use |
|---|---|---|---|
| 5 process step images | In Payload media, AI-made, approved | DESIGN.md:240; src/globals/process.ts:54 | Show "the system" |
| Before/after pairs (home hero, `/homes` hero, `/process` pair) | In Payload | PRODUCT.md:87; SECTIONS.md:27 | Proof of result |
| Rooftop team photo `ct-photo-team-rooftop-v01.webp` | Payload, AI-made | DESIGN.md:240 | Team image (AI, so weak as proof) |
| Founder portrait | Payload (about page founder block) | PRODUCT.md:89; SECTIONS.md:75 | Who is accountable |
| Client logos | Payload (fetched or uploaded); many still missing; `IIT Delhi.png` in public | docs/CLIENT-LOGOS.md; public/assets/images/clients/institutional/ | Clients strip |
| Work completion certificate scans | Payload under each client, hidden site-wide | INFO-BANK.md:224; src/site.ts:17 | Strongest proof; needs owner's call to show on `/franchise` |
| Testimonials | Collection exists; whether real quotes with permission exist is **unconfirmed**; LAUNCH says placeholders vanish when live | collections/clients/testimonials.ts; LAUNCH.md:56 | Certificate remarks ("Completely satisfactory, on time") can be quoted |
| ISO certificate image | **Missing** (`iso.certificate: null`) | src/site.ts:60; LAUNCH.md:59 | "View certificate" |
| GeM, Udyam, GST documents | Owner has them; not uploaded | PRODUCT.md:60 | Credentials |
| Stock photos (Unsplash/Pexels) | Allowed until our own | DESIGN.md:240 | Filler only |
| `public/assets/images/general/tank.png`, `water_gun.png` | Exist; use unknown | public/ | ? |
| Videos | **None** found anywhere | — | — |
| Franchise brochure, flyer, standee | Print material exists (INFO-BANK quotes it) but no file is in the repo | INFO-BANK.md:260, :297 | Source of retired claims |
| Photos of real equipment, van, kit, uniforms, training | **None** | — | Buyers want to see what they buy |
| Press (40+ newspapers, Delhi Railway Station) | Story only; needs a document | p01:88-94 [background]; PRODUCT.md:134 | Credibility, if clippings exist |
| CPWD DSR item (process in tender schedules) | Story only; needs edition and item | p01:135 [background]; PRODUCT.md:134 | Strong institutional proof, if documented |

### 3b. Blocks (src/blocks/index.tsx:35-54; all in `pages.layout`, src/collections/pages.ts)

| Block | Renders | Fit for `/franchise` |
|---|---|---|
| `hero` | Heading, text, before/after slider, actions | Reuse (hero) |
| `pageIntro` | H1, line, ≤2 buttons | Reuse as an inner-page top |
| `valueProp` | Rich text + 2 photos, or a numbered list (title + line), optional link | Reuse: why tank cleaning / 7 benefits |
| `ruledList` | Ruled cells (title + text), optional second list beside it, small `note` | Reuse: benefits, support flow, eligibility, "what we look for". Its `note` is plain small muted text, **not** the bordered disclaimer the style guide wants |
| `story` | Text (+ second text) and optional photo | Reuse: founder's story / why we franchise |
| `process` | The 5-step cleaning track from the `process` global only | Reuse as-is for the method. **Can't** show the 7-stage support flow (hard-wired to the global) |
| `founder` | Name, role, bio, portrait | Reuse |
| `credentials` | Registrations and ISO from `src/site.ts` | Reuse |
| `clientsBand` / `clientList` | Logo marquee / all cleared clients by sector | Reuse |
| `testimonials` | Up to 3 quote cards | Reuse if real quotes exist |
| `trustBand` | 2–4 figures (15+ years, ISO) | Reuse for company figures only; franchise figures must not become stat tiles |
| `faq` | Q&A accordion | Reuse; the main home for buyer questions |
| `ctaBand` | Navy band, heading, line, 2 buttons | Reuse |
| `audiences` | The three doors (exactly 3) | Optional |
| `compareGallery` | Several before/after sliders | Reuse |
| `serviceArea` | Tri-city map only (fixed fields) | Not usable for territories |
| `priceList` | Home price calculator | Not for franchise |

**Needed and missing:**
- A figures table block with the mandatory bordered disclaimer (ruled two-column table, disclaimer in the same viewport).
- A franchise enquiry form. No form exists anywhere; where submissions go is undecided (PRODUCT.md:79); it needs the DPDP work.
- A franchise WhatsApp greeting. `actions` with `whatsapp` falls back to `contact.whatsappText`, "Hello, I would like a price for cleaning my water tank." (src/blocks/actions/index.tsx:24-31; src/i18n/dictionaries/en/index.ts:42). Today a franchise button would send a tank-price request. The live holding page's footer and contact bar do the same.
- A generic numbered-steps block for the support flow and onboarding timeline (or a variant of `ruledList`).
- Possibly an "Authorised Service Provider" lockup component, needed later for partner pages, not for this page.
- Plumbing: remove `"franchise"` from `UNDER_DEVELOPMENT` (src/app/(frontend)/[lang]/[slug]/page.tsx:15) once the CMS page exists. The holding page is `noindex` (same file :67-69). Update SECTIONS.md:86.

---

## 4. Contradictions and stale items

| # | Item | Where it disagrees | Note |
|---|---|---|---|
| 1 | ROI 40%+ vs payback 4–6 months | INFO-BANK.md:286-287 | Internally inconsistent unless ROI is monthly or on a different base. Undefined (:317) |
| 2 | Royalty "3.5% per month" | INFO-BANK.md:285 | Of revenue? Of investment? Read literally against investment, it is 42% a year. Flagged in national_players.md:191 |
| 3 | Starting investment ₹3 lakh vs ₹5 lakh | INFO-BANK.md:284 vs p04:365 [background]; retired "4–5 lakh" INFO-BANK.md:445 | Which is current? |
| 4 | Network size | PRODUCT.md:66 (say nothing) vs INFO-BANK.md:201 ("committed franchisees spread across the wide, ever-increasing network") vs INFO-BANK.md:259 ("expanding its franchise network") vs old draft "2017 … 10 territories" (search snippet of thegobindsingh.github.io/cleantank/about-us) | "Expanding its network" presupposes a network |
| 5 | Franchise phone | PRODUCT.md:67 and src/site.ts (removed 19 Nov, commit 6f7b82d) vs INFO-BANK.md:28 and :54, which still say "main and franchise phones" | Stale INFO-BANK lines; the removed number was [retired number], which may still be on print collateral |
| 6 | Phone history | Old CEO number [retired number] ("no longer used", INFO-BANK.md:54) still served by Google's AI Overview from old `/terms` and `/privacy-policy` (pc-run/notes/audit.md:126-131); main number changed from [retired number] to 97795 40862 in git history | Print collateral and Google can show three different numbers |
| 7 | Lead generation hedge | INFO-BANK.md:274 "may be provided" vs :259, :291, :295, which state it flat | Decide whether lead gen is promised |
| 8 | Operating states | PRODUCT.md:130 (7 states) vs certificates in J&K (SMVDU, IIIM Jammu, AIIMS Vijaypur), Odisha (IREL, IIT Bhubaneswar), Tamil Nadu (NIT Trichy) and Chandigarh UT (BSNL) (INFO-BANK.md:240-248) | The approved list undersells; worth updating |
| 9 | LIC story city | PRODUCT.md:132 "Kanpur" vs p01:30 "LIC building in Lucknow" [background] | Owner to settle |
| 10 | Origin of the method | p01:48 [background]: in 2006 the founder studied a Mumbai, German-influenced system "taken forward through a franchise arrangement covering Delhi and parts of UP" | A buyer may ask whether we own the method or once held someone else's franchise. Not in INFO-BANK |
| 11 | Year of founding vs early story | 2008 (site.ts:25) vs Delhi demo "2006–08" and Mumbai trip 2006 (p01:48, :90) [background]; old draft "government contracts since 2017", "a decade" (local-recheck/notes/search_and_ads.md:149) | Old draft dates conflict with 2008 |
| 12 | Job duration | Banned (INFO-BANK.md:452) vs old draft "within 24 hours" (search snippet, /cleantank/process) and the persona's "about two hours" example (brand persona.md:191) [background] | Old claims still indexed |
| 13 | GSTIN | site.ts `…5ZU` vs IndiaMART "Gobind Galaxy, Kanpur" `…3ZW` (INFO-BANK.md:440; pc-run/report.md:14) | A buyer checking GST sees two numbers |
| 14 | Style guide figures table | s13:353-359 omits the "suggested startup level" and Market/support rows | Minor |
| 15 | Header nav in style guide | s13:212 (About, Services, Process, AMC, Franchise, Contact) vs built nav (PRODUCT.md:91) | Background doc is stale |
| 16 | "Pan India" / "technical representatives in all major cities" | INFO-BANK.md:22, :299, :396 vs no evidence of any outside office; the site shows one office (Kharar) | A buyer will ask who supports them locally |
| 17 | Disinfectant | "biodegradable, eco-friendly … Govt-approved laboratory certification" (INFO-BANK.md:142) vs "needs a document" (PRODUCT.md:134) | Supply-chain question for partners |
| 18 | Domain age | "since 2008" vs domain registered 2026-09-16, earlier captures to 2024-12-26 (pc-run/notes/audit.md:149) | WHOIS makes the brand look two months old |

---

## 5. Gap list: what a serious buyer will ask that we can't answer

| Theme | Open question(s) | Why it matters to a buyer |
|---|---|---|
| **Models / tiers** | How many models? Names? Unit, district, master (p02:93 [background] mentions "larger or master-franchise structures")? What separates ₹3 lakh from ₹8 lakh? | They can't pick a model or budget without it |
| **What the money buys** | Exact kit list: pump(s), pressure washer (which bar rating, given 150–250 bar range needs "different machines"), industrial vacuum, UV unit, PPE, ladders, hoses, sprayers; vehicle or not; first stock of Clean Tank agent; uniforms; branding/signage; stickers and certificate books; software/CRM; website listing; launch marketing. What "All in package, ready to operate" covers (INFO-BANK.md:317) | The single biggest due-diligence item; competitors are attacked on this (Mr. TEMS ₹8 lakh machine vs ₹4 lakh entry, national_players.md:187) |
| **Split of the money** | Franchise fee vs equipment cost vs working capital; refundable deposit? GST on fee? Is equipment owned by the partner? | Determines what's recoverable and what's sunk |
| **Royalty** | Base (gross revenue? net? per job?), minimum guarantee, how it's reported and paid, whether institutional jobs routed by HO carry a different share, any marketing fund on top | "3.5%" is our best differentiator but meaningless without a base |
| **ROI / payback** | Definitions, assumptions, period; reconcile 40% with 4–6 months | Avoids looking misleading; ASCI and consumer-law exposure |
| **Territory** | Unit of territory (district? city? pin codes? population?), exclusivity, protection from other partners and from HO direct sales, what happens to the existing Tricity home business | No competitor defines territory (national_players.md:195); a defined one would be a real selling point |
| **Unit economics** | Jobs per team per day/month, average ticket (homes vs society vs institution), gross margin, consumables cost per job, staff needed (p04:385-388 [background] says 2–3 teams, 12–14 people "planning ambitions"), salaries, vehicle cost, break-even jobs | The page can't publish them (PRODUCT.md:138), but the sales call needs a credible sheet |
| **Pricing** | Can partners use the homes price list? Is pricing set by HO or local? GST registration needed? | Brand rule says prices are the same across the service area (INFO-BANK.md:450) |
| **First customers / leads** | Where do leads come from: HO website/ads, Google profile, IndiaMART, GeM tenders? How are leads routed and at what cost? "Lead generation may be provided" depends on what? | The limited-capital buyer's biggest fear is no work in month one |
| **Institutional / government work** | Will HO pass tenders and GeM orders in the territory to the partner, subcontract to them, or keep them? Can partners use HO's ISO, GeM, past-performance certificates to bid? Commission? | This is our unique asset (21 certificates); it's also where conflicts arise |
| **Training** | Where (Kharar? Kanpur? on site?), how long, who trains, cost included or not, how many staff trained, certification of technicians, refresher | "Training & On-Site Support" is promised with no detail |
| **Ongoing support** | Who is the partner's contact, response time, field visits, help with first big jobs ("Execution plan for big orders", INFO-BANK.md:299), language of support (Hindi/Punjabi/English?) | Post-sale abandonment is the category's reputation risk |
| **Supply** | Must partners buy the Clean Tank agent from HO? Price, margin, lead time; spares and servicing for machines; warranty | Recurring cost, and a lock-in |
| **Agreement** | 3-year term: renewal terms and fee, termination grounds, exit and resale/transfer, refund policy before launch, non-compete, dispute jurisdiction, governing law | Required for any serious investor; no draft agreement referenced anywhere |
| **Legal counterparty** | Who signs: Gobind Galaxy as a proprietorship (Mr. Gurdev Singh personally)? Any company or LLP planned? Trademark registration of "Clean Tank Services" and logo (p11 says IP "should be" protected, status unknown) | Buyers pay for a brand; unregistered marks and name collisions (Cleantank Systems Mumbai, a Hyderabad "CLEANTANK", Tanclean Thane) undermine it |
| **Eligibility** | Who qualifies: capital, background, vehicle, local presence, time commitment, women/home-based allowed? Selection process? | Qualifies leads and signals seriousness |
| **Onboarding timeline** | Days from signing to first job; steps (application → call → visit → agreement → training → kit → launch) | Buyers plan around income gaps |
| **Existing partners / pilots** | How many today (ever)? Any pilot unit? The 2006 Delhi/UP arrangement? Can a buyer talk to one? | Rule bans saying the count, but buyers will ask on the phone; the answer must be consistent |
| **Proof and references** | Verified documents: ISO image, GeM, Udyam, certificates (unhidden?), press clippings, CPWD DSR item, client contacts for reference | Our strongest card, mostly locked or undocumented |
| **Brand and marketing** | What marketing HO does (local ads? social? Google profile per partner?), local marketing obligations, brand kit, co-branded material approval | Benefit is promised with no content |
| **Software / reporting** | The AMC "computerised database" (INFO-BANK.md:112): do partners get it? Reporting obligations? | Ties to the AMC recurring-revenue pitch |
| **Insurance and safety** | Confined-space safety, worker insurance, liability for water quality (responsibility rule INFO-BANK.md:149) | Tank entry is hazardous; liability matters |
| **Quality control** | Audits, mystery checks, penalties for skipping steps (p02:101-107 [background]) | Protects the network; reassures good partners |
| **Language** | Will training, agreement and support be in Hindi/Punjabi? | Target buyers "think in Hindi or Punjabi" |
| **HO capacity** | Who in the company runs the franchise programme ("our franchise team", s13:60 [background])? | Who answers the enquiry, and how fast |

---

## 6. Differentiators against the tank-cleaning franchise category

Category baseline from docs/research/competitors-prices/notes/national_players.md:153-199. Rivals mostly charge ₹2–6 lakh with 10% royalty, make unverified ROI claims (up to 140%), rarely define territory, and Fastclean's network has been flat for a decade.

| Differentiator | Rating | What proves it / what's needed |
|---|---|---|
| In business since 2008, 15+ years | **Provable now** (approved: site.ts:25, PRODUCT.md:128) | Stronger with a dated document (oldest work order, registration). The 2014 Apollo certificate is the oldest dated proof (INFO-BANK.md:228) |
| Institutional and government clients (IITs, NITs, IIMs, AIIMS, BHEL, BSNL, CRPF, IREL) | **Provable now** by name and logo; **with documents** for certificates (hidden today) | Unhiding certificates is an owner's call |
| ISO 9001:2015 with mechanized tank cleaning scope | **Provable now** (number, verify URL); image needed for "View certificate" | Never "accredited" |
| GeM registered seller, Udyam, EPFO, ESI | **Provable now** by statement; **with documents** for display | |
| 3.5% royalty against the common 10% | **Provable with a document from the owners**: the base must be defined first, and the page may not explain it under current rules (PRODUCT.md:138) | Comparison with competitors must not name them (PRODUCT.md:77) |
| Documented 5-step process, same everywhere | **Provable now** (process global, images, PRODUCT.md:30-40) | An SOP or training manual would make it provable for partners |
| Conservative, disclaimed claims | **Provable now**: it is how the page is written | |
| Process in CPWD DSR / tenders | **Not provable** until edition and item are documented (PRODUCT.md:134) | Possibly the strongest category moat |
| Lead and institutional work passed to partners | **Not provable**: not defined | |
| Equipment quality (150–250 bar, industrial vacuum, UV) | **Provable now** at the method level; **with documents** for the kit a partner gets | |
| Pan-India technical support | **Not provable** today | Avoid until named |
| Trained technicians, periodic workshops | **Provable with a document** (training records, syllabus) | |
| Founder 35+ years, Godrej background | **Provable now** as approved bio (INFO-BANK.md:66) | |
| Multilingual site (EN/HI/PA) | **Provable now**; no tank rival has Hindi or Punjabi pages (local-recheck/report.md:75) | Shows HO's marketing capability |

---

## 7. Open items that mention franchise

- SECTIONS.md:86: `/organisations` and `/franchise` have no sections yet.
- LAUNCH.md:57: all header pages must exist; Franchise is in the header (src/components/header/nav.tsx:23) and footer (src/components/footer/index.tsx:31), so the holding page blocks launch.
- LAUNCH.md:28-33 and PRODUCT.md:79, :146: forms, form backend and DPDP consent are not built; the franchise enquiry form depends on them.
- PRODUCT.md:79: separate WhatsApp numbers, emails and lead handling per group are planned but not set up.
- PRODUCT.md:60: credential documents (GeM, MSME, work orders, ISO) to be requested from the owner when Organisations is built; franchise shares them (PRODUCT.md:66).
- LAUNCH.md:59: ISO certificate image is missing.
- AEO-GEO.md:47-61: no Google Business Profile and nothing outside the site confirms the business.
- CONVENTIONS.md:39: the holding page lives in the i18n dictionaries until the CMS page exists.
- e2e/pages.ts:18-20: `/franchise` in all three languages is in the e2e page list.
- s13-digital-ui.md:555, :566 [background]: franchise form fields beyond the basics, and whether Franchise is the home page's emphasis band, are open owner decisions.
- INFO-BANK.md:28, :54: stale franchise-phone references to clean up (doc fix, not a decision).

---

## 8. Public footprint: what a buyer doing due diligence finds today

| Where | What they find | Worry |
|---|---|---|
| www.cleantankservices.com/franchise | Live preview of this code: "Coming soon / We are still building this page", Contact us button; footer has the main number, email, Kharar office, ISO, GSTIN, Udyam, GeM; WhatsApp pre-fill asks for a tank price (fetched 20 Nov 2026) | Looks unfinished; wrong WhatsApp message for a franchise enquiry |
| Search "Clean Tank Services Gobind Galaxy" (web search, 20 Nov 2026) | Top results are the old GitHub Pages draft: [about-us](https://thegobindsingh.github.io/cleantank/about-us), [home](https://thegobindsingh.github.io/cleantank/), [process](https://thegobindsingh.github.io/cleantank/process). Snippets claim a "decade" of work, launch "with two industrial machines", a franchise programme from 2017 with "10 territories operational in the first year", government work "since 2017", and deployment "within 24 hours". The pages now 404 or show a README, but the snippets persist | Unapproved claims that contradict 2008 and PRODUCT.md:66; a buyer may quote "10 territories" back to us |
| Google / Maps / Justdial | No listing for Clean Tank Services; Maps sends "Gobind Galaxy" to Gobind Electronics, Kharar; rivals (A-One, Wazara) take the brand search (local-recheck/notes/maps_by_town.md:281-308; pc-run/report.md:72) | No reviews, no address proof, no social proof |
| Google ranking | Ranks only for its own name; best results are old `/terms` and `/privacy-policy`; AI Overview gives the retired number [retired number] (pc-run/notes/audit.md:119-131) | Wrong phone; thin presence |
| IndiaMART | "Gobind Galaxy, Kanpur", categorised as laundry and washing machines, GSTIN `…3ZW` (pc-run/notes/audit.md:136; INFO-BANK.md:440) | Wrong category, different GSTIN |
| Justdial | "Govind Galaxy", Harjinder Nagar, Kanpur, tank construction/repair, 1.0 from one rating (pc-run/notes/audit.md:147) | If it's ours, a 1-star record; if not, confusion |
| Tenderkart | Two "Gobind Galaxy" profiles (pc-run/notes/audit.md:136) | Neutral to positive (tender history), unchecked |
| Domain WHOIS | Registered 2026-09-16, GoDaddy; archive gap Dec 2024 to Sep 2026 (pc-run/notes/audit.md:149) | Looks like a new or lapsed business |
| Franchise directories (Franchise India, FranchiseBazar, Smergers) | No Clean Tank listing found (web search 20 Nov 2026); rivals TANKRO, Clean Revolution, Easy Tank Clean and Fastclean target Punjab and Chandigarh (national_players.md:163-170) | We're invisible where buyers compare; rivals set expectations |
| Name collisions | Cleantank Systems, Mumbai (cleantank.co) on Maps (maps_by_town.md:300); a Hyderabad "CLEANTANK" on Scribd using copy close to our long-form copy; Tanclean, Thane; "Saoo … Clean Tank Pure Water Healthy Life", Chandigarh (audit.md:147) | Brand confusion and trademark questions |
| Facebook, YouTube, Instagram | No profile found in this round, and INFO-BANK lists none (AEO-GEO.md:59) | Nothing shows real work, people or equipment |
| Ads | 0 Google ads for the domain (search_and_ads.md:151) | Neutral |

What would reassure a buyer and is missing: a Google Business Profile with reviews, real photos and videos of jobs, a findable franchise listing, consistent phone and GSTIN everywhere, and a registered trademark.

### Web sources used
- https://www.cleantankservices.com/franchise
- https://thegobindsingh.github.io/cleantank/ , /about-us (404 now), /process (snippet)
- https://www.franchiseindia.com/brands/cleanrevolution.9954 , https://www.franchiseindia.com/brands/tankro-services.108110 , https://www.franchiseindia.com/brands/Easy-Tank-Clean.19211 , https://www.smergers.com/franchise/fastclean/1h6j
- Search results for "Clean Tank Services" Gobind Galaxy; "Gobind Galaxy" Kanpur; "Clean Tank" Gurdev Singh (20 Nov 2026). The Wayback Machine could not be fetched from this environment.
