# CT-444: funnel teardown of real franchise enquiry funnels

Captured 28 Nov 2026 (IST) with Playwright in one tab, desktop first, then a 375 px viewport. Part of CT-442. Builds on CT-409 (`docs/research/franchise/01` and `02`), which read these pages with curl. This round adds what only a browser shows: real form fields and their order, where each CTA goes, sticky bars on mobile, steps after the click. Not repeated here: page copy, investment and royalty figures, red flags (see CT-409). Screening benchmarks are in `04-screening-privacy.md`.

Rules followed: no form submitted, no personal data typed, no real values entered. I opened modals and read fields; I never pressed a submit button. Tags: [walked] I opened it in the browser; [read] I read the DOM or text only; [blocked] could not open; [not verified].

---

## 1. Comparison table

"Fields" = visible inputs on the first form, required ones in brackets where the page marks them. "Invest." = whether an investment figure is on the page the form sits on.

| Funnel | First CTA wording | Fields | Channels offered | Gating | Invest. shown | Mobile at 375 px | Language | Apply fee |
|---|---|---|---|---|---|---|---|---|
| Molly Maid (Neighborly), US [walked] | "Request more info" (top bar); also "Take Our Quiz", "Schedule a call", "Download Guide" | Guide form: first, last, email, phone (all required) + 2 checkboxes. Request form: same 4 | Form, phone, chat, booked call (HubSpot embed), quiz | Guide gated behind the form. Cost not gated | Yes: $139,900-$197,200, fee $14,900, high on page | Sticky in-page nav (Steps, Cost, Guide, About); CTA in first screen | English; India selectable in the phone country list | None |
| Jim's Group, AU [walked, partly] | "ENQUIRE NOW" (8 times) | Pop-up wizard; step 1 is "which franchise?" (about 40 divisions, searchable). Page copy says name, number, area | Form, phone 131 546 in the pop-up header, "Ask Jim Penman" chat box, trial day | None: "GET THE INFO PACK" is a direct PDF link | No amounts for the franchise fee; flat-fee model explained, sample job pay shown ($65 a lawn, $80 a dog wash) | Not tested (pop-up) | English | None |
| Exppress Car Wash, India [walked] | "GET FRANCHISE DETAILS" / "Check Investment & Requirements" | 6: name, phone, email, city, state, available space (5 required) | Form, phone 80-100-44000, email | None | Brackets from Rs 15 lakh; cost heads on the process page | Fixed bottom tab bar; phone in header; page 4 px wider than the screen | English | None |
| Chem-Dry, US [walked] | "REQUEST FRANCHISE INFORMATION" | 7: first, last, phone, email, city, state, free text | Form, phone, text message (SMS) number | None | Yes: fee $36,000, total $92,150-$249,500, liquid $50,000, net worth $250,000 | Sticky "CALL" bar and section nav | English | None |
| Jan-Pro, US [walked] | "Open A Cleaning Franchise" / "Let's Get Started" | 10 on a shared contact form: first, last, email, phone (optional), ZIP, "I am interested in..." (Buy a franchise / Commercial cleaning / Other), business name, details, SMS opt-in | Form, phone | None | No figure. Says "flexible pricing ranges"; only a $1,000 savings note | Sticky "Free Estimate / Franchising / Find Location" bar | English | None |
| TruBlue, US [walked] | "Let's Connect" (book a 10-minute call); also "Download Our Franchise Guide" | Guide form: first, last, email (required), phone optional, "what best describes you" (required, 4 options), marketing opt-in | Booked call, guide, on-demand videos (no form) | Guide gated; videos not | "A low-cost investment opportunity" with an Investment menu item; figure not checked | Not tested | English | None |
| Urban Company partner, India [walked] | "Join Us" | 1: a phone number ("Share your WhatsApp number and we'll reach out via our WhatsApp Business Account") | WhatsApp only | None | No (it is not a franchise: earn as a professional) | Page is one screen, one field | English only on this page (no Hindi switch found) | None |
| Franchise India directory (Detailing Devils listing), India [walked] | "Interested in DETAILING DEVILS Franchise? Apply here" and "View Contact" | 9 on the first form: name, email, mobile (OTP VERIFY step), state, city, pincode, address, investment range (11 bands from Rs 10,000 to Rs 5 crore+), newsletter and terms checkboxes. A second form adds a radio and a captcha | Form, OTP, login or register to see contact | Contact hidden behind login or register | Listing says INR 10-20 lakh | Not tested | English | None |
| 5K Car Care, India [walked] | Page headline "Detailing franchise model - Rs 35 lakhs"; form button "Next" | About 24 fields over 3 steps (Next, Previous, Submit): name, email, mobile, date of birth, address, gender, age band, education, occupation, years in industry, budget (Rs 20-30 L, 30-50 L, 50 L+), start timeline (immediate, 2 months, 6 months), city, country, property status, "heard from", "why do you want a franchise" | Form, two phone numbers, WhatsApp | None; investment is the headline | Yes, Rs 35 lakh model in a heading | Form works at 375 px, no overflow | English | None |
| CarzSpa, India [walked] | "Schedule A Free Call With Our Franchisee Expert" ("no strings attached") | About 6: name, phone, email, city, description (plus a separate email box) | Booked free call, phone | None | No. The page asks "not sure how much to invest?" and shows no figure | Slide-out menu, no sticky CTA | English | None |
| Tumbledry, India [walked] | "Contact Us For Franchise Details" (about 10 times); "Get Your Free Laundry Business Blueprint" | 4 plus consent: name, 10-digit phone, email, pincode; button "JOIN" | Form, phone | Blueprint is behind the form | Rs 20 lakh total, break-even, monthly profit shown (see CT-409 on its numbers) | Form at 375 px, no overflow, no sticky bar | English | None |
| GD Water Consult, India (tank) [walked] | "Fill the Form & Join us Today!" | 8, all required: name, email, phone, age, address, indicative investment (INR lakh, free text), time frame to start, convenient date and time to call. A second 2-field box (name, mobile) | Form, phone, WhatsApp link, floating "Book Now / Call us / Franchise" bar | None | No | Page 549 px wide on a 375 px screen (sideways scroll); 20 console errors | English | None |
| Glowtank, India (tank) [walked] | "Be A Glowtank Franchise" | 4: full name, address, mobile, email; "SEND MESSAGE" | Form, WhatsApp float (wa.me) | None | "5 lacs to 6 lacs" | Works at 375 px | English | None |
| Fastclean, India (tank) [walked] | "REQUEST FOR BUSINESS PLAN" (goes to the general contact form); "FRANCHISEE OF FASTCLEAN" downloads a pptx | General form: name, email, phone, message (CT-409) | Form only. No phone, no WhatsApp on the page | The pptx is ungated | "5lacs to 6lacs" | Fixed top menu; no overflow | English | None |
| Crystal Clean / Mr. TEMS, India (tank) [walked] | None. A state dropdown (36 options) is the only input | 1 select | None on the page | None | Setup fee Rs 4.9 lakh and 7 lakh | Not tested | English | None |

Capture notes: Jan-Pro www returned a Cloudflare 403, so I used jan-pro.com. Urban Company /partner is a 404; the real page is partner.urbancompany.com.

---

## 2. Per-funnel notes (only what is new)

### Molly Maid (franchise.neighborly.com/molly-maid) [walked]
- The brand domain mollymaidfranchise.com redirects to a shared Neighborly site, so one funnel serves about 19 brands.
- Five parallel entry points in the top bar and footer, each for a different readiness level: quiz, request info, guide, booked call, territories map.
- The quiz opens on location ("Where might you want your business to be located?" with a radius), not on contact details. I stopped after the first question; whether contact is asked at the end is [not verified].
- The "schedule a call" page tells the applicant what the first call covers: a preliminary look at motivation, skills, finances and funding, long-term goals; then "our mutual evaluation process and next steps"; "the opportunity to ask questions". This is a stated agenda, which Clean Tank can copy in plain words.
- Consent: one long optional box for "recurring marketing calls and messages ... automated SMS, MMS, artificial/prerecorded voices, and/or artificial intelligence", worded as "not required to obtain any good or service". A second, separate box for the blog.
- Legal footer lists the states with registration rules. Cost figure is on the main page and tied to a fee line.

### Jim's Group [walked, partly]
- Eight "ENQUIRE NOW" buttons open one pop-up that starts with a choice of division, then contact. I did not go past step 1. [not verified: later steps]
- "Start Here" block: "Takes 2 minutes. Name, number, area. No commitment, no obligation"; "A real local franchisor calls you back. Ask anything. No sales pressure"; "Come On A Trial Day". Closing line calls it "a 20 second enquiry form". Both time claims sit side by side (2 minutes and 20 seconds).
- "Not Ready To Enquire Yet?" is a heading on the page, with a direct PDF info pack and two quizzes ("Are you suited to be a Franchisee?", "Which Jim are you?"). The pack link goes straight to a file in the site's uploads folder, so it is not gated.
- A chat box "Ask Jim Penman a question" sits in the page (with a log-in button inside). I did not use it.
- Fee detail: flat monthly fee, no percentage royalty; the amounts stay off the page ("speak to a franchisor").

### Exppress Car Wash [walked]
- Confirmed the form is short and asks for city, state and "available space" up front, which is the only qualifying field.
- FAQ Q15 on what happens after you submit: a confirmation email, then "soon you will be contacted by our Channel Development Team". No hours or days given. The page also says to complete all fields "so that we can get back to you as soon as possible".
- Q2: "The application lists capital brackets starting at Rs. 15 lakh". Q3 lists a minimum of 1,000 sq ft "in the application", so the application collects both, yet the form I saw only asked for space.
- No application fee, no financing.

### Chem-Dry [walked]
- Investment box is on the home page, not behind the form. The form appears several times on the page.
- Phone and SMS numbers are both given; the SMS number is a real texting channel for sales.
- Forms ask for "city, state" and a free-text field, not money.

### Jan-Pro [walked]
- The franchise form is the company's general contact form. The "I am interested in..." menu has three options, including "Buying a franchise business of your own". So one form serves customers and prospects, and the prospect self-identifies.
- Seven required fields including "Business Name" and "Add Details". Phone is optional. SMS is a separate opt-in.
- No amounts anywhere on the page (the only figure is a $1,000 savings note with an asterisk).

### TruBlue [walked]
- Three ways in, matched to readiness: a 10-minute booked call, a downloadable guide, and on-demand videos that need no form (the video page opens without a form in the link I followed; I did not play any).
- Guide form: 3 required text fields, phone optional, one required "what best describes you" menu (first-time owner, experienced entrepreneur, senior or medical experience, home improvement background), and an unticked marketing box.

### Urban Company partner [walked]
- One field. The promise is in the sentence under it: "we'll reach out via our WhatsApp Business Account". The page is a single screen with a headline ("Earn More. Earn Respect. Safety Ensured."), a proof line ("Join 50,000+ service professionals* across India, KSA, Singapore, UAE", footnoted "as on December 31, 2024") and the field.
- It is not a franchise and it needs no capital, so it shows how little a first step can ask for in India. It tells us nothing about how a Rs 5 lakh-plus buyer behaves.

### Franchise India listing form [walked]
- The listing form asks for a pincode, full address and an investment band before the brand ever sees the person. Mobile is verified with an OTP step.
- The brand's contact is hidden behind login or register ("View Contact"). So the directory owns the first touch; the brand gets a lead later.
- The newsletter checkbox is there and so is a terms box; I did not check whether the newsletter box is pre-ticked.

### 5K Car Care [walked]
- The heaviest funnel in India that I found: three steps (Next, Next, Submit). Collects date of birth, home address, gender, age band, education, occupation and years in industry before any human contact.
- Budget floor is Rs 20-30 lakh; the model is advertised at Rs 35 lakh, so the lowest option is below the price. Timeline options are immediate, 2 months, 6 months.
- No fee or follow-up promise on the page.
- [inference] This is the opposite of Urban Company on every axis: many fields, high ticket, all gates in one form.

### CarzSpa [walked]
- The entire page is a call booking: "FREE ASSESSMENT", "Schedule A Free Call With Our Franchisee Expert", "This call is absolutely free, no strings attached", then a list of the buyer's likely questions ("What exactly is detailing?", "Is there enough demand for these services in my city?"). No figures.
- A second box takes only an email.

### Tumbledry [walked]
- Short form (name, phone, email, pincode, one consent box). Button says "JOIN", not "submit".
- The consent box's name is "remember", so its purpose is not in the DOM label; I did not read the visible text. [not verified]

### Tank brands (GD, Glowtank, Fastclean, Crystal Clean) [walked]
- GD's 8 required fields (age and address included) is the longest of the four, on the page with the least proof. It also has a sideways scroll on a phone and 20 console errors, and its form field for investment is free text.
- Glowtank, 4 fields with a WhatsApp float, is the lightest of the four.
- Fastclean has no phone or WhatsApp; Crystal Clean has no form at all. Both would drop a call-first buyer.
- None of the four states a response time, a next step or a training date.

### Not opened
- 3M Car Care franchise page (3mindia.in): Cloudflare block, 403 [blocked].
- Bumper to Bumper: I guessed a domain, it did not resolve, and I did not find an official franchise page [not verified].
- Detailing Devils own site, Molly Maid territory map, ServiceMaster, Jan-Pro www: not opened.

---

## 3. Patterns

1. **Form length by ticket.** Cheap or no-capital (Urban Company: 1; Glowtank: 4; Tumbledry: 4; Exppress: 6) uses short forms. US brands at $90k-250k use 4-7 fields. The longest are not the biggest ticket: 5K Car Care (about 24) and GD (8, all required) are small Indian brands. [inference] Long forms in India are an attempt to filter, not a sign of a larger brand.
2. **Where qualifying happens.** US brands qualify on the phone (Molly Maid's stated first-call agenda) and keep forms short. Indian directories and 5K Car Care qualify in the form with money bands. Jim's qualifies with a trial day.
3. **Several entry points, not one.** Molly Maid (5), TruBlue (3), Jim's (info pack, quizzes, enquiry) each give a low-effort and a high-effort way in. Single-CTA pages (Fastclean, Tumbledry's 10 repeats of one CTA, GD) do not.
4. **Guides are gated where there is a US-style CRM** (Molly Maid, TruBlue guide, Tumbledry blueprint). They are free where the brand is small or confident (Jim's PDF, Fastclean pptx).
5. **The investment figure sits on the page for the brands with a legal duty to disclose** (Molly Maid, Chem-Dry) and for some Indian brands (Exppress, 5K, Tumbledry). It is absent for Jim's, Jan-Pro and CarzSpa.
6. **Mobile bars.** Chem-Dry, Jan-Pro, Exppress and GD pin a bottom or top bar (call, free estimate, apply, book now). Molly Maid pins a section nav instead of a call button.
7. **Phone + WhatsApp.** Indian pages (5K, GD, Glowtank, Exppress) put a number on the page; only Urban Company is WhatsApp-only. US pages add SMS (Chem-Dry). Nobody offers a language switch on the franchise page: every page I opened was English only.
8. **Response-time promises are rare.** Only Jim's ("a real local franchisor calls you back") and Exppress (email, then a call "soon") say what comes next; neither gives a time. Molly Maid describes the call, not the delay.
9. **Application fees.** None of the funnels I opened charged to apply.

---

## 4. Disconfirming examples

Against "gate the guide to capture a contact":
- Jim's gives its info pack as a plain PDF link and still collects enquiries (5,700 franchisees claimed). Fastclean's pptx is ungated too. Exppress puts cost heads on the page with no gate.
- TruBlue's videos open without a form.

Against "always ask for email first":
- Urban Company asks only for a WhatsApp number.
- CarzSpa and TruBlue lead with a booked call, not an email.

Against "keep the form short":
- 5K Car Care runs about 24 fields over three steps and still advertises its franchise heavily with a phone and WhatsApp link. I have no conversion data, so this is not proof it works; it only shows a brand chose to filter hard.

Against "call-first does not work for strangers":
- Molly Maid and TruBlue both lead with a call and list their agenda. Jim's puts its phone number inside the pop-up.

Against "show the investment high on the page to filter":
- Jim's and Jan-Pro show no amounts and still run large networks (by their own counts). Jim's pushes the money talk to a call with a franchisor.

Caveat for all of the above: I saw pages, not conversion rates. A funnel that looks sparse may be well-fed by other channels (directories, ads, referrals).

---

## 5. Implications for /franchise (proposals, not decisions)

- **Offer two or three ways in at once**, not one: an ungated look at the model and costs, a free guide, and a call. The ungated pieces are supported by Jim's, Exppress and Chem-Dry. Treat gating the guide as a test, not a default.
- **Collect only what the first conversation needs.** Four to six fields is the usual range among brands that do not hide a number. Do not copy 5K Car Care's date of birth, gender and home address, or GD's age and address; CT-446's DPDP checklist should veto them.
- **Make phone and WhatsApp optional contact choices, with email optional too.** Urban Company shows a WhatsApp-only path works at scale in India; phone numbers sit on every Indian page I opened. Sales calls need a number anyway, so ask for it but mark which channel the person prefers.
- **Write the first-call agenda on the page**, as Molly Maid does: what we ask, what they can ask, what happens next. Add a response time only if the owners can staff it (CT-446).
- **Self-select by money in plain bands, not by free text.** 5K and Franchise India both use bands. The Clean Tank bands could follow the approved Rs 5.5 lakh, Rs 8.5 lakh and Rs 20 lakh totals. This needs James's call on whether to ask at all.
- **Put the three approved totals on the page**, with the disclaimer. Our competitors (CT-409) are inconsistent; Exppress, Chem-Dry and Molly Maid are the models for stating a figure beside what it covers.
- **Do not copy:** Tumbledry's one CTA repeated 10 times, Jim's two time claims ("2 minutes" and "20 seconds"), Franchise India's login wall, GD's sideways scroll on phones.
- **Languages:** no franchise page I opened offers Hindi or Punjabi. A real hi and pa page is a gap, not a convention.
- **Mobile:** a pinned bottom bar with call and apply (Chem-Dry, Jan-Pro, Exppress) is the common pattern. It must stay out of the way of the one filled primary action per viewport rule in DESIGN.md.

---

## 6. Limitations

- One capture on 28 Nov 2026, one browser, desktop plus 375 px. Chat widgets and pop-ups that load later may have been missed.
- Never submitted a form, so I could not see what happens after submit (thank-you page, auto-reply, call timing, nurture emails). Everything about follow-up comes from FAQs and page copy, not from experience of the funnel.
- Jim's pop-up: only step 1 seen. Molly Maid quiz: only question 1 seen. 5K Car Care: all fields read from the DOM, steps not clicked through.
- Mobile checks were a width and element probe, not a screenshot review. The scroll-width reading was unreliable on some pages (Neighborly pages read 4,000 px from a layout quirk; I did not count that as overflow). Only GD (549 px) and Exppress (379 px) are clear overflows.
- Language check looked for visible switches and Hindi, Punjabi or Tamil text only.
- No conversion, traffic or franchisee-quality data for any brand. "Works" means the brand runs it at scale by its own claim, not that it converts.
- Blocked or missing: 3M Car Care, Bumper to Bumper, ServiceMaster, Detailing Devils' own site. Neighborly's other brands share one template, so Molly Maid stands for all of them [inference].
- Franchise terms of foreign brands come from US and Australian disclosure rules; the Indian market has no equivalent, so some contrasts (cost on page, mutual evaluation) may reflect the law, not buyer taste.
