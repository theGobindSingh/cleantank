# CT-446: two-way screening, rubric, SLA, privacy and dependencies

Part 4 of CT-442, written 28 Nov 2026. Research and proposals only. Nothing here is approved, and nothing here goes on the site until it is in`src/site.ts`, INFO-BANK or PRODUCT.md. Every rubric weight, threshold, time and retention period below is a proposal for the owner to accept, change or reject.

Read with: CT-409 research in`docs/research/franchise/`, the owner's answers on CT-409 (20 Nov 2026), PRODUCT.md (Franchise, Claims, Legal), LAUNCH.md (Legal and DPDP), CONVENTIONS.md (Analytics and errors).

## 0. Short version

1. A fair screening process for us has six stages: enquiry, intro call, readiness worksheet, meeting at Kharar with an observation day, review by two people, decision. Nobody pays anything until a signed agreement and a GST invoice, and the written terms reach the applicant at least 14 days before that.
2. The criteria are published in plain words on the page. The weights and red flags stay internal, but every applicant can ask why they were put on hold or declined, and gets a real reason.
3. Three outcomes: accept, hold (a named thing is missing, with a date to look again), decline (with the reason and when they may apply again). No outcome is "you qualify" before a person has read the application.
4. The process only works if the owner can staff it. The first thing to confirm is who answers enquiries and calls back, in which hours, and how many partners a year head office can train and support. The SLA below is a proposal sized for one or two people.
5. DPDP: the Act's main duties and Rules 3 and 5 to 16 start on **13 May 2027** (18 months after the Rules were published on 13 Nov 2025). No amendment to that date was found as of 28 Nov 2026. Until then the IT Act s.43A and the 2011 SPDI Rules apply. Build the enquiry path to the full DPDP standard now.
6. California's CCPA does not apply to us. India's other CCPA, the Central Consumer Protection Authority, does: its dark pattern and misleading ad guidelines govern how the funnel may persuade.
7. Two current doc rules conflict with CT-442's direction and need the owner's call before any build: PRODUCT.md says "There is no franchise form" and "Never say how many partners there are". See §10.

## 1. The process

### 1.1 Diagram

```
 Visitor reads /franchise (no gate, all three models and the disclaimer visible)
        |
        v
 [S0] Enquiry: WhatsApp, call, or a short form (name, mobile, town; optional model, budget band, timeframe)
        |  instant acknowledgement: who will call, from which number, by when; "we never ask for money to apply"
        v
 [S1] Intro call (15 to 20 min, a named person)  ------> not a fit now? -> polite close or HOLD (S5h)
        |  both sides ask questions; applicant hears the criteria and the steps
        v
 [S2] Readiness worksheet (applicant's own plan: town, customer types, owner role, budget band, start time)
        |  we read it and reply with written feedback within the SLA, useful even if they stop here
        v
 [S3] Meeting at Kharar (or video), family welcome; optional observation day on a real job
        |  applicant sees the work; we see the applicant; written summary of terms handed over
        v
 [S4] Review by two people against the rubric; territory check; reasons written down
        |
        +--> ACCEPT  -> written offer + full agreement -> at least 14 days to read, with their CA or lawyer
        |                -> sign -> pay only to the firm's account against a GST invoice -> training -> first job
        +--> HOLD    -> the one or two things missing, a review date (max 90 days), what they can do meanwhile
        +--> DECLINE -> the reason in plain words, what would change it, when they may apply again
```

Any stage can end from either side. The applicant can stop at any point without a reason, and their data is handled as in §7.6.

### 1.2 Stage table

| Stage | What happens | Who on our side | What the applicant gives | What the applicant gets | Exit |
| --- | --- | --- | --- | --- | --- |
| S0 Enquiry | Message, call or form | Whoever answers the main number (owner to name) | Name, mobile, town. Optional: model, budget band, timeframe | Instant reply saying who calls back, from which number, by when; the anti-fraud line; link to the guide (CT-445) | They don't answer two attempts: one WhatsApp note, then close |
| S1 Intro call | Short call. We explain the models, the criteria, the steps and what we never promise. They ask anything | Franchise lead (owner to name) | Answers to a few open questions: current work, why this, which town | Honest picture; the worksheet; a date for the next step | Either side says it's not a fit |
| S2 Worksheet | They fill in their own local plan (CT-445 designs it) | Franchise lead reads it | Their plan, in their language | Written feedback on their plan, even if they go no further | They stop; or the plan shows a gate fails |
| S3 Meeting and observation day | Visit to Kharar (or video for distant towns). Family welcome. Half or full day with a crew on a real job | CEO or senior person; a crew lead | Their time and travel (owner to say if we contribute) | They see the real work, kit and office; a written summary of terms (not the whole agreement yet, owner's call) | Either side decides no |
| S4 Review | Two people score against the rubric, check the territory, write reasons | Owner plus one other | Nothing new | Nothing yet; told the date of the decision | — |
| S5 Decision | Accept, hold or decline, by call and in writing (WhatsApp or email) | Franchise lead | — | See §4 | Hold expires after 90 days unless renewed by both |
| S6 Agreement | Full agreement given; at least 14 days to read; questions answered in writing | Owner, lawyer | Signed agreement, KYC documents only now | Signed copy; GST invoice; training dates | They can walk away with nothing paid |

KYC (PAN, Aadhaar, bank details) is collected only at S6, when a contract needs it. Never at S0 to S4.

### 1.3 Public criteria (draft wording for the page, CT-448 to finalise)

These are the things we look for, said plainly. They are written so a reader can rule themselves out.

- You will run the business yourself and be involved every week. For Standard FOFO and Classic FOCS that usually means full time at the start. (Owner to confirm; CT-417.)
- You can fund the model you choose, including the costs of running it in the first months, from your own money or a loan you have planned. (The working capital figure is not approved; CT-415.)
- You live in, or will work from, the town you apply for, and that town is open. We decide territories by market and population after we talk (CT-409 owner answers).
- You will complete the full training and follow the five-step process and the safety rules on every job.
- You treat customers' homes and water as a responsibility.
- For Premium FOCO: you will build and manage your own team, and travel for work we allocate. (Agreement-level detail; owner to say if it may be public.)

What we do not look at: caste, religion, gender, marital status or age beyond being an adult. We do not need a degree or prior cleaning experience unless the owner says otherwise (CT-417).

What we never do: charge a fee to apply, meet or receive the guide; ask for payment before a signed agreement; ask for payment to a personal account or UPI ID; promise income, profit, a number of leads or a payback period.

## 2. Qualification rubric (proposal)

### 2.1 Gates (pass or fail, before any scoring)

| Gate | Evidence | When checked |
| --- | --- | --- |
| Adult (18 or over) | Self-declared at S1; verified at S6 KYC | S1, S6 |
| The chosen town is open, or can be | Territory check by the owner | S4 |
| A funding plan that covers the model's total and early running costs | Budget band at S0 or S1; a bank sanction letter or own-funds statement only at S6 | S1, S6 |
| Agrees to full training and the five-step process | Said at S1, shown at S3 | S1, S3 |
| No conflicting tank cleaning franchise or brand of their own | Asked at S1 | S1 |

### 2.2 Scored criteria (100 points)

| Criterion | Weight | Evidence | Strong | Weak |
| --- | --- | --- | --- | --- |
| Owner involvement and time | 20 | S1 call, worksheet "owner role" | Will run it day to day, named start date | Wants to invest and leave it to a manager (FOFO/FOCS) |
| Local plan quality | 20 | Worksheet | Names real customer types and places in their town (societies, schools, hospitals, hotels), a first-90-days list, how they will reach them | Blank, or copied market-size claims |
| Funding readiness | 15 | Budget band, source (own or loan), timeframe | Band matches the model with room for running costs | Band below the model, or relies on informal borrowing |
| Service and safety attitude | 15 | S3 observation day, questions they ask | Asks about safety, process, customer care; follows the crew lead | Wants to skip steps, dismisses safety |
| Relevant background or network | 10 | S1 | RO, plumbing, pest control, facility work, sales, ex-servicemen, an existing shop with customers | None (not a fail; training covers it) |
| Team plan | 10 | Worksheet, S3 | Knows who the first crew members are; for FOCO a real team plan | No idea who does the work |
| Reliability and openness | 10 | Whole process | Turns up when agreed, answers honestly, family has been part of it | Missed meetings, inconsistent answers |

Proposed thresholds: accept at 70 or more with every gate passed; hold at 50 to 69, or when a gate is pending (town not yet open, loan not yet sanctioned, family not yet met); decline below 50, or on any red flag below. Two reviewers score separately, then agree a final score and write the reasons. If they differ by more than 15 points, the CEO decides.

The weights are a starting guess. After the first ten decisions, compare scores with what happened and adjust. Record every score and reason so this is possible (and so an applicant who asks "why" gets an answer).

### 2.3 Red flags (each one is a decline or a hold until resolved)

- Wants or asks for guaranteed income, a buy-back, or a fixed number of jobs.
- Pushes to pay before meeting, or offers cash to "book" a territory.
- Gives information that turns out false (identity, location, conflicting business).
- Plans to sub-license the brand or run under a different name.
- Dismisses the safety rules or the five-step process on the observation day.
- Says the money is borrowed from informal lenders at high interest, or is the family's only savings and the family has not been part of the decision. (Handle with care: say why, offer a hold, don't lecture.)
- Wants exclusivity over an area far larger than they can serve.

## 3. Operational SLA (proposal)

Sized for one franchise lead with the CEO for meetings. Working hours assumed Mon to Sat, 9:30 to 18:30 IST; the owner sets the real hours. Every time here is a promise the page will repeat, so the owner must accept it before it is published.

| Step | Proposed time | Why |
| --- | --- | --- |
| Acknowledgement after an enquiry | Instant (auto reply on WhatsApp or the thank-you screen) | Says who calls, from which number, by when |
| First human contact | Within 1 working hour in working hours; otherwise by 11:00 next working day | Speed of reply is the single strongest factor in franchise lead follow-up (CT-409, 02 §6; a 2025 mystery shop found 44% of US brands called back at all) |
| Second attempt if no answer | Same day, then one WhatsApp note next day; then stop | Two attempts and a note, no nagging (dark pattern guidelines) |
| Intro call held | Within 2 working days of the enquiry, at a time the applicant picks | |
| Feedback on the worksheet | Within 3 working days of receiving it | The feedback is the value we give back (CT-445) |
| Meeting or observation day offered | A date within 10 working days of the worksheet feedback | Depends on crew schedule; owner to confirm |
| Decision after the meeting | Within 5 working days | Long silences read as rejection or as a sales tactic |
| Hold review | On the date given, at most 90 days after the hold | After 90 days close it unless both want to continue |
| Agreement reading period | At least 14 calendar days before signing or any payment | Borrowed from the US FTC rule and Australia's code (§5); India has no rule, which is why stating ours builds trust |
| Rights or grievance request (DPDP) | Acknowledge in 2 working days; complete within 30 days | Rule 14(3) caps the grievance period at 90 days; 30 is a safer promise |

Measure each step from the first day: time to first contact, share contacted within the hour, share reaching each stage, decision times. CT-447 builds the pilot around these.

## 4. Accept, hold and decline: what the applicant hears

### 4.1 Principles for the copy

- A person decides, and the message says who. No automated "you qualify" or "you've been shortlisted" before S4. An auto reply only confirms receipt.
- Give the real reason in plain words. For a hold, name the one or two things missing and the review date. For a decline, say what would change it and when they may apply again (proposal: 6 months).
- Never imply scarcity or urgency that isn't true ("only 2 territories left", "offer ends Friday"). Never shame ("not everyone has what it takes"). Both are listed dark patterns.
- Don't blame the applicant's background, and never refer to anything in the "we do not look at" list.
- Thank them for the worksheet by name and point to one useful thing in it, even in a decline.
- The anti-fraud line goes in every message until the agreement is signed: we never ask for payment to apply, and never to a personal account or UPI ID (subject to CT-419).
- Every message is in the language the applicant used.
- A decline closes the data loop: say what we keep, for how long, and how to ask us to delete it (§7.6).

### 4.2 Draft lines (English only, for CT-448 to finish in hi and pa)

Accept: "Thank you for the time you and your family gave us. We would like to offer you the Classic FOCS franchise for [town]. The full agreement is attached. Please take at least 14 days to read it, with your CA or lawyer if you like, and send us any question in writing. Nothing is payable until you sign, and then only to Gobind Galaxy's account against a GST invoice."

Hold: "We'd like to keep talking. Two things are open: [the loan sanction] and [a meeting with your family]. We'll look again on [date]. Until then, nothing is needed from you, and you can stop at any time."

Decline: "Thank you for your plan for [town]; your list of housing societies was the most detailed we've seen. We aren't offering a franchise now because [reason]. If [what would change], you're welcome to apply again after [date]. We'll keep your enquiry for [period] and then delete it, or sooner if you ask."

Applicant withdraws: "Understood, and thank you. We won't contact you again about the franchise. [Retention line.]"

## 5. Benchmarks: how others run mutual evaluation

| Source | What they do | What we take |
| --- | --- | --- |
| Jim's Group (AU), live page read 20 Nov 2026 (CT-409, 02) | Six steps; step 3 is a trial day working alongside a franchisee before deciding. FAQ: "it's not guaranteed income", "Leads are not guaranteed jobs". A scam warning page | The observation day; the plain FAQ. Not their "Pay for Work Guarantee", which is an income guarantee |
| Neighborly (Molly Maid, Mosquito Joe), same | Guide, call with a developer, research, visit HQ, training. Every figure footnoted | The HQ visit as a fixed step |
| Ovenclean (UK), same | Weekly open days | A fixed open day at Kharar could cut scheduling load (owner to consider) |
| Exppress Car Wash (India), same | Enquiry, evaluation, agreement ("confirm the fee and term before signing"), setup, training, launch; FAQ "What happens after I submit?" | Say what happens after the enquiry, in order |
| MBA Chai Wala (India), same | "We never ask for payments to personal bank accounts or UPI IDs" above the form | The anti-fraud line (CT-419) |
| US discovery day practice ([Entrepreneur](https://www.entrepreneur.com/franchises/heres-what-every-potential-franchisee-needs-to-do-during/375831); [PBA on UFG](https://www.pba.edu/academics/schools/centers-of-excellence/titus-franchising/news/the-recipe-of-a-successful-discovery-day-insights-from-ray-titus-ceo-of-united-franchise-group/), read 28 Nov 2026) | Discovery day near the end, meeting staff and owners and seeing operations; good practice is a follow-up call next day with no push to sign | Same; no signing on the meeting day |
| Validation calls ([Franchise Direct](https://www.franchisedirect.com/blog/franchise-validation-calls-what-to-ask-existing-owners); [Entrepreneur](https://www.entrepreneur.com/business-news/7-tips-for-franchise-validation-calls-before-you-sign-an-agreement), read 28 Nov 2026) | Prospects call existing franchisees to check what the franchisor said | We can't offer this until partners exist and agree, and PRODUCT.md's partner-count rule blocks talking about it (§10). The observation day with our own crew is the honest substitute |
| US FTC Franchise Rule, 16 CFR 436 ([eCFR](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-436), read 28 Nov 2026) | Disclosure document at least 14 calendar days before signing or any payment | The 14-day reading period |
| Australia Franchising Code 2024, in force 1 Apr 2025 ([ACCC](https://www.accc.gov.au/business/industry-codes/franchising-code-of-conduct/guidance-on-changes-to-the-franchising-code), read 28 Nov 2026) | 14 days to consider documents before signing; 14-day cooling-off after signing with refund within 14 days | A cooling-off period is an owner decision (CT-418); worth offering |
| India ([Mondaq comparative guide](https://www.mondaq.com/india/commercial/1501728/franchising-comparative-guide); [Legal500 2025](https://www.legal500.com/guides/wp-content/uploads/sites/1/2025/10/India-Franchise-Licensing.pdf), read 28 Nov 2026) | No franchise law, no disclosure duty. Contract Act 1872 governs. Common practice: meetings, a letter of intent, often with a booking or token amount, then the agreement | We don't take a token amount before the agreement. Fraud cases follow the "registration fee" pattern (CT-409, 03 §2.1), so a no-token rule is our clearest signal. Owner to confirm (CT-418, CT-419) |

What contradicts the CT-442 starting thesis: the strongest programmes we read put the human contact (call, visit, trial day) at the centre and treat the email list as secondary. Screening quality comes from the meeting and the observation day, not from the funnel's opt-in rate. A qualified-applications KPI (CT-447) only means something if S1 to S4 are staffed.

## 6. What the owner must confirm

Blocking the process (answer before anything is built):

1. Who answers franchise enquiries and makes callbacks, in which hours and days, and who covers when they're away? (CT-409 Q58, Q69)
2. Which number calls back: the main number in`src/site.ts`? A different number would need to be listed as official (CT-419).
3. How many new partners can head office train and support in the first year, per model? (The owner plans four Premium FOCO partners; FOFO and FOCS capacity is unknown.)
4. How is a territory judged and decided: by whom, using what (population, pin codes, district), and how fast can we answer "is my town open?" (CT-409 Q25 to Q28)
5. May prospects visit Kharar, meet the CEO, bring family, and join a crew for an observation day before paying? Who runs it, and is there a safety briefing and insurance cover for a visitor on site? (CT-418)
6. Is there any payment before the signed agreement (token, registration, training deposit)? Our proposal is none. (CT-418, CT-419)
7. Will the written terms be given at least 14 days before signing? Is there a cooling-off or refund rule? (CT-418)
8. Is there a written agreement ready per model, in Hindi and Punjabi as well? (CT-409 Q42, Q46)

Needed for the rubric and criteria:

9. Is the partner expected to clean tanks personally or run a crew, and is the business full time? (CT-417)
10. Any experience, education or vehicle requirement? (CT-415, CT-417)
11. What working capital should a partner plan for, so the funding gate is honest? (CT-415)
12. Who trains, where, for how long, and what support follows in the first 90 days, realistically? (CT-417; CT-409 Q37 to Q41)
13. Accept the rubric weights, thresholds and red flags, or change them.
14. Who are the two reviewers?
15. May we tell a declined applicant the real reason? (Proposal: yes, always.)

Needed for privacy:

16. Who is the grievance contact for personal data (name or role, email, phone)? (CT-409 Q77; Rule 9)
17. Where will enquiries live: WhatsApp Business app on a phone, a WhatsApp BSP, Payload, a CRM? Who can see them? (CT-409 Q76)
18. Accept the retention periods in §7.6.
19. Do we want an optional "send me updates" list at all? If yes, what will we send, and how often?

## 7. DPDP checklist for franchise lead capture

### 7.1 Status of the law (checked 28 Nov 2026)

| Instrument | Status | Source |
| --- | --- | --- |
| DPDP Act 2023 (Act 22 of 2023), assent 11 Aug 2023 | Board and definitions sections (1(2), 2, 18 to 26, 35, 38 to 43, 44(1) and (3)) in force since 13 Nov 2025. Ss. 6(9) and 27(1)(d) (consent managers) from 13 Nov 2026. Everything that binds us (ss. 3 to 17, including notice, consent, duties, children, rights) from 18 months after publication, which commentators put at 13 May 2027 (a few say 12 or 14 May, depending on the publication date) | [India Code](https://www.indiacode.nic.in/indiacode/handle/123456789/22037); [Taxmann on G.S.R. 843(E)](https://www.taxmann.com/post/blog/govt-notifies-commencement-dates-for-dpdp-act/); [TeamLease](https://teamleaseregtech.com/updates/article/49364/meity-issued-a-notification-regarding-the-commencement-of-the-dpdp-act-2023/) |
| DPDP Rules 2025, G.S.R. 846(E), dated 13 Nov 2025 | Rule 1(2): Rules 1, 2, 17 to 21 in force on publication. 1(3): Rule 4 one year after. 1(4): Rules 3, 5 to 16, 22, 23 eighteen months after. Read from the Gazette text | [Gazette text (third-party copy)](https://dpdpa.com/DPDP_Rules_2025_English_only.pdf); [PIB](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf) |
| Proposal to cut 18 months to 12 | MeitY consulted in Jan 2026 (feedback closed 4 Feb 2026). No amendment notified as of Sept to Nov 2026 trackers | [Business Standard, Jan 2026](https://www.business-standard.com/technology/tech-news/meity-may-cut-compliance-timeline-for-key-dpdp-rules-to-12-months-126012201293_1.html); [Consently, 29 Sep 2026](https://www.consently.in/blog/dpdp-13-november-2026-not-your-deadline) |
| DPDP (Removal of Difficulties) Order 2026, issued 5 Oct, Gazette 7 Oct 2026 | Wording only: s.9(1) "of a child or of a person with disability"; s.10(2)(c)(ii) "data audit". No date changes | [India Briefing](https://www.india-briefing.com/news/dpdp-removal-of-difficulties-order-2026-consent-data-audit-47274.html/) |
| Data Protection Board | Exists in law; no Chairperson or Members appointed as of 1 Nov 2026 (MeitY called for applications 6 May 2026) | [LiveLaw, Aug 2026](https://www.livelaw.in/articles/india-data-protection-board-established-law-543751); [PPC Land](https://ppc.land/a-year-after-india-fixed-its-data-board-at-4-members-none-are-appointed/) |
| Until 13 May 2027 | IT Act s.43A and the SPDI Rules 2011 still apply; s.44(2) of the DPDP Act removes s.43A on the 18-month date | Same commencement sources |

I could not open meity.gov.in (403 and 404 from both fetch and browser) or India Code (timeout). The Rules were read from a full Gazette copy hosted by a third party; the Act sections below are cited from the Act as enacted. A lawyer should confirm the exact dates against the Gazette (LAUNCH.md already requires this).

### 7.2 Does it apply to us?

Yes. Gobind Galaxy decides why and how enquiry data is processed, so it is the Data Fiduciary. The data is digital (WhatsApp, form, CRM) and processed in India (s.3). We are not a Significant Data Fiduciary, so no DPO, DPIA or audit duty (s.10, Rule 13). No startup exemption under s.17(3) has been notified that covers us. Penalties under the Schedule go up to ₹250 crore for failing to take security safeguards, ₹200 crore for failing to report a breach or for children's data duties, and ₹50 crore for other breaches.

### 7.3 Checklist

Lawful basis and purpose

- [ ] Responding to an enquiry the person started: they gave the data voluntarily for that purpose, which fits s.7(a) "legitimate use" as well as consent. Treat it as consent anyway for the form, with the notice beside it; it is the safer reading for a lawyer to confirm.
- [ ] Optional updates ("nurture"): consent only, under s.6. A separate, unticked checkbox, not bundled with the enquiry, worded for one purpose. The enquiry must work without it (s.6(1): free, specific, informed, unconditional, unambiguous, by clear affirmative action).
- [ ] One purpose per tick. "Contact me about my franchise enquiry" and "Send me occasional updates about the franchise programme" are two purposes.
- [ ] No other use: no service marketing to franchise leads, no sharing with partners, no lists sold or swapped.

Notice (s.5; Rule 3), shown beside the form and in the first WhatsApp reply, in the page's language

- [ ] Understandable on its own, without reading the privacy policy (Rule 3(a)).
- [ ] An itemised list of the data: name, mobile, town, and the optional model, budget band, timeframe, message (Rule 3(b)(i)).
- [ ] The specific purpose: to contact you about your franchise enquiry; and, only if ticked, updates (Rule 3(b)(ii)).
- [ ] A link and a simple way to withdraw consent, use your rights and complain to the Board (Rule 3(c)).
- [ ] The grievance contact (Rule 9), and the privacy policy link.
- [ ] Hindi and Punjabi at the same depth (s.5(3) lets a person ask for the notice in any Eighth Schedule language; we serve all three anyway).

Data minimisation

- [ ] S0 asks only name, mobile and town. Model, budget band and timeframe are optional bands, not exact figures. No email required, no date of birth, age, gender, address, caste, religion, income or photos.
- [ ] The worksheet (CT-445) asks for business plans, not personal finances. A budget band, not savings or salary.
- [ ] KYC and bank details only at the agreement stage, under the contract.
- [ ] A free-text "message" field invites oversharing; keep it optional and say "please don't share ID numbers or bank details here".

Withdrawal and rights (s.6(4), ss.11 to 14; Rule 14)

- [ ] Withdrawing is as easy as consenting: reply STOP on WhatsApp, a link in every update, or tell us on a call. Then we stop and confirm.
- [ ] Rights published on the site: access, correction, erasure, nomination, grievance, complaint to the Board (Rule 14(1)).
- [ ] Grievance period published; proposal 30 days, legal cap 90 (Rule 14(3)).
- [ ] A short written process: how we check identity (the same mobile number is usually enough), who handles it, where we delete (WhatsApp, CRM, Payload, spreadsheets, phones).

Retention and erasure (s.8(7); Rule 8)

- [ ] Erase when consent is withdrawn or the purpose is no longer served (s.8(7)), and make processors erase too.
- [ ] Rule 8(3) also requires keeping the personal data and processing logs for at least one year from the processing, for the narrow state purposes in the Seventh Schedule. In practice: stop using it at once, restrict access, erase after the year. A lawyer should confirm how 8(3) sits with s.8(7) for a withdrawn lead.
- [ ] The 48-hour pre-erasure notice in Rule 8(2) applies only to Third Schedule classes (large e-commerce, gaming and social media), not us. Telling people anyway is optional.
- See §7.6 for proposed periods.

Processors (s.8(2); Rule 6(1)(f))

- [ ] Every processor under a written contract with security terms: Vercel, Neon (form data), any CRM, any WhatsApp Business Solution Provider, any email or SMS sender. Check each DPA and data location; record it in the privacy policy (LAUNCH.md already lists this).
- [ ] WhatsApp: the free WhatsApp Business app on a staff phone keeps chats on that phone and in its backup. Decide who holds the phone, lock it, and turn off personal cloud backups or treat them as part of the system. A BSP (Cloud API) is a processor under contract, and Meta's own terms also apply. Meta's policy requires opt-in before business-initiated messages and a clear way to opt out ([Meta developer docs](https://developers.facebook.com/documentation/business-messaging/whatsapp/getting-opt-in), read 28 Nov 2026). Our nurture tick covers this if it names WhatsApp.
- [ ] Calls: callbacks a person asked for are fine. Promotional calls or SMS to leads who did not ask for them fall under TRAI's TCCCPR 2018, amended 12 Feb 2025, which bars telemarketing from ordinary 10-digit numbers ([TRAI PR 11/2025](https://cms.trai.gov.in/sites/default/files/2025-02/PR_No.11of2025.pdf)). No cold calling of franchise leads.
- [ ] Cross-border: allowed except to countries the government restricts (s.16; Rule 15). None restricted yet; note locations anyway.

Security (s.8(5); Rule 6)

- [ ] Access to leads limited to named people; no shared logins; no leads in personal spreadsheets or family WhatsApp groups.
- [ ] Encryption at rest and in transit (Neon and Vercel give this; a phone needs a passcode).
- [ ] Logs of who accessed what, kept one year (Rule 6(1)(c) and (e)); backups.
- [ ] Form spam protection that collects no extra personal data.

Children (s.9; Rule 10)

- [ ] The franchise is for adults; the page does not target children. Ask "Are you 18 or older?" only at S1 by voice, or as one unticked yes box on the form. No date of birth.
- [ ] If someone under 18 contacts us, don't process further; delete, and reply that the programme is for adults. Verifiable parental consent is not worth building for this audience.
- [ ] No tracking or targeted ads aimed at children (s.9(3)).

Breach (s.8(6); Rule 7)

- [ ] A one-page plan: who decides, how to contain it, how to tell each affected person without delay (what happened, likely effects, what we did, what they can do, who to contact; Rule 7(1)), and the Board without delay with a detailed report within 72 hours (Rule 7(2)). Also CERT-In's 6-hour reporting under its 2022 directions for listed incidents (not re-checked here; lawyer).
- [ ] The plan names the processors' breach contacts.

Records

- [ ] For each enquiry: time of consent, which notice version, which boxes were ticked, the source (UTM) and language. Store consent records with the lead, not in analytics.

### 7.4 No personal data in analytics (PostHog, Sentry)

Both are paused until launch (`site.isLive` is false; CONVENTIONS.md). When they come on:

- [ ] Never call`posthog.identify()` or`capture()` with a name, phone, town or free text. Events carry only non-personal facts:`franchise_form_started`,`franchise_form_sent` with`model`,`language`,`utm_source`,`device` type. Budget band and timeframe are business choices, not personal data on their own, but leave them out of analytics: CT-447 can measure from the lead store instead.
- [ ] Put the form in an element with`ph-no-capture`. PostHog autocapture already skips input values and takes only`name`,`id` and`class` from inputs ([PostHog privacy docs](https://posthog.com/docs/product-analytics/privacy), via Context7, 28 Nov 2026), but labels and button text around the form are captured otherwise.
- [ ] No personal data in URLs: the thank-you page or WhatsApp deep link must not carry the name or phone in a query string, since pageviews record the full URL. If unavoidable, strip it in`before_send`.
- [ ] The WhatsApp greeting text (CT-412) stays generic; it contains no personal data, and the click event should record only that a click happened.
- [ ] Sentry: errors only, IP storage off, data scrubbing on (LAUNCH.md). Form handlers must not log the submitted body; scrub`phone`,`name`,`message` keys in`beforeSend`.
- [ ] Session replay stays off (it is turned off in code today).
- [ ] Join analytics and leads only by counting, never by a shared ID that could re-identify a person, unless the notice says so.

### 7.5 Optional nurture: when it's allowed

Only with the separate tick, for the purpose stated, through the channel named. Content must be useful (the guide, worksheet feedback, an open-day date), not pressure. Proposal: at most two messages a month, stop after 6 months of no reply, every message ends with how to stop. No mandatory drip (CT-442).

### 7.6 Proposed retention periods (owner to approve, lawyer to check)

| Data | Keep for | Then |
| --- | --- | --- |
| Enquiry with no reply after two attempts | 6 months from last contact | Erase, except the Rule 8(3) one-year minimum record, kept restricted |
| Declined applicant | 12 months from the decision (lets them re-apply after 6 months, and covers Rule 8(3)) | Erase |
| Withdrawn applicant | Stop use at once; restricted record for the Rule 8(3) year | Erase |
| On hold | While the hold lasts (max 90 days) plus 12 months | Erase |
| Accepted, signed partner | Under the agreement and tax law (contracts, invoices) | Per the agreement and the CA's advice |
| Nurture list | Until withdrawal, or 6 months of no reply | Remove; keep the withdrawal record |
| Worksheets | Same as the applicant's status above | Erase with the lead |
| Analytics | No personal data in it, so the PostHog project's retention setting | — |

## 8. CCPA

California's CCPA (as amended by the CPRA) applies to for-profit businesses that do business in California and meet one of three tests: annual gross revenue above $26,625,000 (the 2025 CPI-adjusted figure), buying, selling or sharing the personal information of 100,000 or more California consumers or households, or earning half or more of revenue from selling or sharing personal information ([CPPA](https://www.cppa.ca.gov/regulations/cpi_adjustment.html), read 28 Nov 2026). We don't do business in California and meet none of the tests. The franchise is offered in India to people in India. It does not apply, and nothing in the design needs to change for it. If the site ever marketed franchises to the diaspora in the US, revisit.

The other CCPA does apply. India's Central Consumer Protection Authority issued the Misleading Advertisements Guidelines 2022 and the Dark Patterns Guidelines 2023 under the Consumer Protection Act 2019 (CT-409, 05 §6). For this funnel that rules out false urgency, confirm-shaming, forced action (making the guide or the price depend on giving a phone number), nagging, and fees revealed late. Whether a franchise buyer counts as a "consumer" is unsettled (CT-409, 05 §6), but the page is also read by homeowners, so assume the guidelines apply.

## 9. Dependencies

State read from Track Suru on 28 Nov 2026.

| Issue | What it is | State | What it blocks here | Still open |
| --- | --- | --- | --- | --- |
| CT-409 | Franchise research and owner interview | In Review | Base for everything; owner answers of 20 Nov 2026 set models, totals, wording and the private terms | 83-question interview not finished; unanswered items moved to CT-415 to CT-421 |
| CT-415 | GST, vehicle, working capital, other costs | To do | The funding gate and its "covers early running costs" wording; the worksheet's budget band | All four questions |
| CT-416 | FOFO, FOCS, FOCO meanings; what Premium includes | To do | Criteria for Premium (team, travel); rubric's team-plan weight for FOCO | All three questions |
| CT-417 | Training details; who can become a partner | To do | The public criteria (experience, owner role, crew size); rubric gates; the training promise in the SLA | All three questions |
| CT-418 | Steps from first call to first job; visit before paying; reply time; payment and refund terms | To do | The whole stage table, the observation day, the SLA, the 14-day reading period and cooling-off | All four questions. This is the main blocker for the process |
| CT-419 | Official-channel and payment notice | To do | The anti-fraud line in every message (§4.1) and on the form | Owner to confirm payment practice |
| CT-420 | A disclaimer that fits a page with no ROI | To do | Decline and accept copy reuse the disclaimer; any guide or worksheet output must carry it | Keep or shorten |
| CT-421 | One-page family summary with WhatsApp share | To do | S3 "family welcome"; the share must collect no personal data (§7.4) | Component and wording |
| CT-424 | Hold /franchise off production | In Review | Nothing can be tested with real traffic until released | Release after approval |
| CT-126 | The /franchise page | In Review | Where criteria, steps and the notice will show | Owner review |
| CT-130 | Franchise enquiry form | To do | S0 form path, the notice, the ticks, the retention rules | Conflicts with PRODUCT.md "no franchise form" (§10); also needs a place for submissions to go |
| CT-443 to CT-445, CT-447 | Sibling research: channels, funnel teardown, guide and worksheet, pilot | In progress (parallel) | CT-445 designs the worksheet used at S2; CT-447 measures the SLA steps | Their outputs |
| CT-448 | Synthesis | Waits for this file | Takes §1 to §4 into wireframes and hi/pa copy | — |
| LAUNCH.md Legal and DPDP | Privacy policy, grievance contact, processors, breach plan | Not done | Any form or nurture list | Lawyer review |

## 10. Proposed rule changes (flagged, not made)

These would change existing docs. None is made here. Each needs the owner's call, then the doc update in the same change.

1. **PRODUCT.md, Franchise: "There is no franchise form (owner's call, 20 Nov 2026)."** CT-442 asks for early voluntary capture and CT-130 is a form. If a form is approved, this line and "Enquiry is by call or WhatsApp only" change. Option without a form: the same S0 fields asked in the first WhatsApp reply, with the notice sent there.
2. **PRODUCT.md, Franchise: "Never say how many partners there are, never imply the network is empty or new."** A two-way process invites the question "can I speak to a partner?" The rule as written means we can neither offer validation calls nor explain why not. Suggest: allow a plain answer on the call (agreed wording from CT-409 Q55), keep it off the page.
3. **PRODUCT.md, Franchise and SECTIONS.md:** add a "How it works" section with the stages and the "we never charge to apply" line, once CT-418 is answered.
4. **PRODUCT.md, Legal:** add the franchise lead retention periods (§7.6) and the rule that analytics never carries form data (§7.4), or point to a new section in CONVENTIONS.md.
5. **INFO-BANK §8, CTAs:** the "Send an Enquiry" button and the "Franchise Enquiry" block conflict with call/WhatsApp-only today; settle together with item 1.
6. **INFO-BANK §11, Privacy Policy:** item 2 lists "service or franchise requirements" and item 8 says requests are handled "subject to applicable law". Both need the DPDP specifics (itemised data, purpose, rights, grievance, retention). Already on LAUNCH.md; flagging so the franchise purposes are included.
7. **A new doc for the screening process** (rubric, SLA, copy rules) should live outside`docs/research/` once approved, probably a short section in PRODUCT.md or an internal ops note, since it is a business process, not site code.

## 11. Limits

- No Indian study of franchise screening or applicant expectations was found; benchmarks are US, Australian and a few Indian brand pages.
- The rubric weights are untested. Treat them as a first draft.
- Official MeitY and India Code pages could not be opened from this machine; dates rest on the Gazette text of the Rules (third-party copy) and law-firm and tracker summaries. One tracker gives 13 March 2027 for ss.9 and 10, which disagrees with every other source and the Rules; treated as an error.
- CERT-In reporting duties and TCCCPR details were not re-read in full.
- Nothing here is legal advice. LAUNCH.md already requires a lawyer to review forms and notices before launch.
