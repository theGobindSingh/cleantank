# Franchise funnel: strategy report

CT-442, synthesis written for CT-448 on 28 Nov 2026. James, read this first. It pulls together the five research files listed at the end and doesn't repeat their evidence; each section links to the file that holds the detail.

Everything here is a proposal. Nothing goes on the site until it is in `src/site.ts`, INFO-BANK or PRODUCT.md, and no page, content or production change was made for this work. Figures on the page stay exactly as approved (INFO-BANK §8): **Standard FOFO ₹5.5 lakh, Classic FOCS ₹8.5 lakh and Premium FOCO ₹20 lakh, each including machinery**, with the financial disclaimer directly beside them:

> All investment, revenue, ROI and payback figures are indicative business projections and are not guaranteed returns unless specifically stated in the executed franchise agreement. Actual results may vary depending on territory, customer acquisition, sales volume, pricing, operating expenses, manpower, local competition and other business conditions.

Other files in this round: [06-draft-copy.md](06-draft-copy.md) (en, hi, pa) and the wireframes at https://www.letmecome.in/ct-franchise-funnel-wireframes.html.

## 1. The recommendation in one paragraph

Give everything away first, then talk. The `/franchise` page, the starter guide, a "what running it looks like" preview and a private local-plan worksheet are open to every visitor, with no phone number, email or OTP asked. The page's main action stays **Become a Franchise Partner** on WhatsApp, with **Call Us** second, and a third option to book a call at a time the visitor picks. Email is offered as one channel among three, never as a gate. When a prospect wants something only a person can give (feedback on their plan, a call, a visit), they send their answers on WhatsApp or, if you allow a form, through a short send step with two separate unticked consents. A named person replies within a promised time, and the screening runs on the call, the worksheet feedback and a visit to Kharar, ending in accept, hold or decline with a real reason. Success is measured as qualified applications per eligible visitor-day, never as opt-ins.

## 2. Recommended acquisition architecture

```
Search, ads, WhatsApp forwards, visiting-card QR
        |
        v
/franchise (en, hi, pa), all ungated
  hero -> models with totals and disclaimer -> what running it looks like
  -> what you get -> who it suits -> how it works (S0 to S6) -> questions
        |                     |                         |
        |                guide (page + small PDF)   worksheet (runs in the browser,
        |                forwardable on WhatsApp    nothing sent or stored)
        |                                               |
        v                                               v
 [S0] Contact, by the prospect's choice:        "Send my plan for review" (optional)
      WhatsApp | call at a time I pick | email    WhatsApp pre-filled, or a form if allowed
        |                                               |
        +-------------------+---------------------------+
                            v
   instant acknowledgement: who calls, from which number, by when; "we never ask for money to apply"
                            v
 [S1] intro call (named person)  ->  [S2] written feedback on the plan  ->  [S3] Kharar visit,
      family welcome, observation day  ->  [S4] review by two people  ->  [S5] accept / hold / decline
      ->  [S6] full agreement, at least 14 days to read, pay only against a GST invoice
```

What each piece rests on:

| Piece | Why | Detail |
| --- | --- | --- |
| No gate on the guide, preview, worksheet or totals | Field evidence for reciprocity holds only for unconditional gifts; promised (conditional) incentives did not move response. A gate is "forced action" under the CCPA Dark Patterns Guidelines 2023 | 03 §0, §2; 04 §8 |
| WhatsApp and calls first, email optional | 38.4% of Punjab adults can use email against 59.7% who can send a message with an attachment; 84% of Indian web traffic is mobile | 01 summary 2, 3 |
| A call slot the prospect picks, from the main number, after a WhatsApp saying who will call | 95% get unwanted calls daily; unknown numbers get ignored | 01 rows 15, 16 |
| Mobile number as the one required contact field, with an "on WhatsApp" tick | Franchise India verifies only the mobile; Urban Company asks for one WhatsApp number | 01 summary 8; 02 §1 |
| A realistic preview of the work, including what is hard | Realistic job previews raise trust and help people rule themselves out; imagining the work beats imagining success | 03 §1 P1, P2; §4 |
| The worksheet as information for both sides, with no score | Co-creation backfires after a decline; scores invite overconfidence | 03 §0 point 5; §6 |
| Public criteria, named stages, three outcomes, nothing paid before the agreement | The programmes with the best reputations screen on the call and the visit; fraud in this market follows the "registration fee" pattern | 04 §1, §4, §5 |
| Separate unticked consent for any updates, STOP to withdraw, no PII in PostHog or Sentry | DPDP s.6, Rule 3; main duties start 13 May 2027 | 04 §7 |
| One family summary to forward (CT-421) | The family is the co-decider and the real "belonging" group | 03 §0 point 6 |

## 3. Two alternative funnels

| | A. Recommended: channel choice | B. Direct application | C. Visit first (open day) |
| --- | --- | --- | --- |
| Main action | Become a Franchise Partner (WhatsApp), Call Us, book a call; email as an option | "Send your plan for review": the worksheet's send step or a 3-field form | "Come to an open day in Kharar": a fixed day each month, booked by WhatsApp or call |
| What we learn before the first call | Little, unless they send the worksheet | Town, model, budget band, start time, owner role | Who turns up, often with family |
| Strengths | Fits today's PRODUCT.md rule; meets people on their own channel; the channel they pick is our best preference data; includes email | Structured answers for the reviewer; easy to count; suits people who are ready | Strongest screening signal (US discovery days close at 77% to 85%); answers "can I trust them?" in person; fits the family decision |
| Weaknesses | More channels to staff; WhatsApp chats are hard to count and lose the source unless the greeting carries a code | Typing on a phone (enquiry forms complete at 37.7% on mobile against 47.7% on desktop); effort before trust; needs the "no franchise form" rule changed and a lead store | Heavy on the CEO's and crews' time; distance for prospects outside Punjab; needs CT-418 answered, a safety briefing and insurance for visitors; slow |
| Rule changes needed | None for WhatsApp and calls; a call-slot picker and email field collect data, so they need the DPDP items | PRODUCT.md "There is no franchise form"; CT-130 | PRODUCT.md "How it works" section; CT-418 |
| Role | Default and fallback | Arm C of the pilot, if you allow a form | A step inside A and B (S3), not the entry point. Worth a test later if visits prove the strongest stage |

Email-first was assessed and dropped as a gate (05 §1). It stays as a channel option, so the pilot still shows how many people want email.

## 4. Findings that contradict the starting thesis

The brief started from email-first capture, gated educational reciprocity, foot-in-the-door commitment and a sense of belonging. The evidence goes against all four as written.

1. **Email-first doesn't fit this buyer.** Email is a minority skill in Punjab (38.4% of adults, rural women 29.9%), family co-deciders are lower still, and no channel survey puts email first. No public data on Indian franchise buyers' channels exists at all; our own past enquiries are the only local evidence (01).
2. **Gating the guide works against reciprocity.** The causal field studies (Falk 2007; Church 1993) give first and ask later. A guide behind a form is a trade, and trades did not lift response. No controlled study shows gated content raises lead quality; the support is vendor blogs (03 R1, R2, G1). Jim's, Exppress and Fastclean all give their information away and still collect enquiries (02 §4).
3. **Foot-in-the-door is weak evidence.** Pooled effect about r = .17, mostly for favours to strangers, and a 2013 direct replication found no effect (03 F1). Small steps are still right, because they are easy and reversible, not because they build commitment.
4. **Belonging is the riskiest idea.** The evidence comes from US college students, gains of about two points, only where real belonging existed (03 B1). "Join the Clean Tank family" reads like MLM and the fraud cases in CT-409, and PRODUCT.md forbids network claims. Serve the prospect's own family instead (CT-421).
5. **Co-creation can backfire.** A prospect who builds a plan and is then declined ends up more dissatisfied than one who never took part (Heidenreich 2015). Keep the worksheet to about 10 minutes, publish the criteria first, and make every decline name what was good and what would change it (03 C3).
6. **Opt-ins are the wrong measure.** US franchise-website leads turn into signed agreements at about 0.6% (FranConnect 2025). The primary KPI has to be qualified applications, and the human steps decide quality (05 §7).
7. **A normal A/B test is out of reach.** Detecting 2% against 4% needs about 1,140 eligible visitors per arm, which is months to years at our traffic, and PostHog can't keep people who decline cookies in one arm (05 §0).
8. **The page matters less than the staffing.** Every strong programme puts the call and the visit at the centre. If nobody answers within the promised time, no layout will help (04 §5).

What held up: value before commitment, two-way screening, human review and no fee to apply. The realistic-preview and two-sided-message evidence supports these more strongly than the reciprocity evidence does.

## 5. Top 15 sources

The full matrices are in each file: [01 source matrix](01-channel-behaviour.md#source-matrix) (26 rows), [02 comparison table](02-funnel-teardown.md#1-comparison-table) (15 funnels), [03 evidence table](03-psychology-and-worksheet.md#1-evidence-table) (19 claims), [04 benchmarks](04-screening-privacy.md#5-benchmarks-how-others-run-mutual-evaluation) and DPDP status (§7.1), [05 benchmarks](05-pilot-test-plan.md#7-benchmarks).

| # | Finding | Source, date | Strength | Limitation | File |
| --- | --- | --- | --- | --- | --- |
| 1 | Punjab adults who can email: 38.4% (Haryana 37.8%, Chandigarh 39.8%) | MoSPI CAMS 2022-23, NSS Report 590, Oct 2024 | Strong | Ability, not preference; 3 to 4 years old | 01 |
| 2 | Punjab: 59.7% can send a message with an attachment; 9.7% of homes have a computer | CAMS 2022-23, Tables 19, 22 | Strong | Messaging row groups email, WhatsApp and SMS | 01 |
| 3 | 84.2% of Indian web traffic on mobile (Oct 2026), swinging 65% to 84% | Statcounter, read 28 Nov 2026 | Medium | Page views, not people | 01 |
| 4 | 98% use Indic content; Indic use is 81% video, 19% search | IAMAI-Kantar Internet in India 2024 | Strong | No Punjab split | 01 |
| 5 | 95% get unwanted calls daily | LocalCircles, Sep 2024, 71,000 responses | Medium | Self-selected panel | 01 |
| 6 | 95% of WhatsApp users get unsolicited business messages daily; "earning offers" a main type | LocalCircles, Feb 2023 | Medium | Self-selected panel | 01 |
| 7 | Enquiry forms complete at 47.7% desktop, 37.7% mobile | Zuko benchmarks, 93 million sessions | Medium | Global, period not stated | 01 |
| 8 | Franchise India verifies only the mobile by OTP; newsletter box seen pre-ticked | Listing form, observed 28 Nov 2026 | Strong (form) | CT-444 did not re-check the tick | 01, 02 |
| 9 | Jim's: ungated info pack, "no commitment" enquiry, trial day before deciding | Live site, walked 28 Nov 2026 | Strong (observation) | Wizard seen to step 1 only; no conversion data | 02, 04 |
| 10 | Unconditional gifts raised donations 17% (small) to 75% (large) | Falk 2007, *Econometrica* 75(5) | Strong | Charity mail, not a purchase | 03 |
| 11 | Prepaid incentives raised response; promised ones didn't | Church 1993, *POQ* 57(1), 38 studies | Strong | Surveys | 03 |
| 12 | Realistic job previews work mainly by looking honest; people self-select | Earnest, Allen & Landis 2011, 52 studies | Medium | Jobs, not franchises; small effects | 03 |
| 13 | Co-created outcomes that fail leave people more dissatisfied | Heidenreich et al. 2015, *JAMS* 43(3) | Medium | Not independently replicated | 03 |
| 14 | Franchise-website leads to signed agreements: 0.6% | FranConnect 2025, 460+ brands | Medium | Vendor, US-weighted, period ratio | 05 |
| 15 | DPDP duties that bind us start 13 May 2027; dark patterns (false urgency, forced action, nagging) already barred | DPDP Rules 2025, G.S.R. 846(E); CCPA Dark Patterns Guidelines 2023 | Strong | Read from a third-party Gazette copy; lawyer to confirm | 04 |

Where the files disagreed, I checked: the pre-ticked newsletter box on Franchise India was observed by CT-443 and not re-checked by CT-444, so it stays as one observation. CT-409's `03-buyer-psychology.md` uses the retired ₹3 to 8 lakh figures, ROI and payback; INFO-BANK §8 wins and nothing here uses them. No other factual conflicts were found.

## 6. Test plan (from 05)

1. **Phase 0, now:** count past franchise enquiries by channel for the last two years, as far as memory and phones allow. Choose the lead store and dry-run the SLA and dedup on staging with made-up leads only.
2. **Pilot design:** a switchback between arm B (channel choice) and arm C (direct application), alternating the whole page in two-week blocks, order shuffled within each four-week pair. No cookies or per-visitor flags. Leads belong to the block of their first contact, by any channel, after phone and email dedup.
3. **Primary KPI:** qualified applications per eligible visitor-day. "Qualified" means every gate in 04 §2.1 is passed or plausibly pending after the S1 call, with no red flag. Secondary: lead, application, qualification, meeting and approval rates; cost per qualified application; time to first response; the channel people pick. Guardrails: SLA breaches, STOP and withdrawals, wrong expectations, budgets below ₹5.5 lakh.
4. **Decision rules, signed off before starting:** at least 16 weeks, 300 eligible visitor-days per arm and 10 qualified applications; stop at 26 weeks. Adopt an arm at a 90% chance of being better; otherwise keep B. Never decide on lead rate or on opt-ins.
5. **Fallback:** if the form rule stays, only B runs, as a measured rollout with the same KPIs.
6. **Can't start until:** `/franchise` is released (CT-424), `site.isLive` is on after the LAUNCH.md legal items, a lead store exists, the SLA is staffed and the CTA labels are approved.

Analytics carries only bare events (`franchise_engaged`, `franchise_worksheet_completed`, `franchise_contact_clicked` with channel and place, and so on) and no name, phone, town, answer, budget band or hash of any of them (05 §4).

## 7. Risks and assumptions

| # | Risk or assumption | Likelihood | Impact | Mitigation | Owner of the fix |
| --- | --- | --- | --- | --- | --- |
| R1 | Nobody can keep the reply-time promise | Medium | High: good prospects lost; the pilot measures staffing, not the page | Name the franchise lead and cover before launch; publish only a time you can keep; SLA guardrail pauses the pilot | Owner |
| R2 | Too few visitors for a clear result | High | Medium | Say so up front; default to B; the channel data is still useful | Gobind |
| R3 | Prospects read the totals as "everything" and are surprised by GST, vehicle or working capital | High | High: complaints, trust lost, "fees revealed late" under CCPA | Answer CT-415; until then the guide lists the questions to ask, with no figures | Owner |
| R4 | Copy drifts into income, demand or network claims | Medium | High: PRODUCT.md, ASCI, CCPA | Copy review against PRODUCT.md Claims; no calculators; no "join our network" | Whoever writes copy |
| R5 | A declined applicant who built a plan feels misled | Medium | Medium | Criteria shown before the worksheet; decline names a strong point and what would change it, with a re-apply date | Franchise lead |
| R6 | WhatsApp follow-ups read as "earning offer" spam | Medium | Medium | No message we start without the separate tick; at most two a month; STOP always works | Franchise lead |
| R7 | Personal data leaks into PostHog through `wa.me` links, URLs or autocapture | Medium | High: DPDP | `ph-no-capture` on forms and the send button; no PII in URLs; Sentry scrubbing | Developer |
| R8 | Enquiries live on one staff phone with personal backups | High today | High: DPDP security duty | Decide the lead store (04 Q17); lock the phone; no family groups or spreadsheets | Owner |
| R9 | A fraudster copies our page and takes "registration fees" | Low to medium | High | Anti-fraud line on every page and message (CT-419); the official number only from `src/site.ts` | Owner |
| R10 | A visitor is hurt on an observation day | Low | High | Safety briefing, insurance, no tank entry for visitors (CT-418) | Owner |
| A1 | Assumed: prospects are mostly on phones and prefer WhatsApp or calls | | | The pilot's channel-choice data tests it | |
| A2 | Assumed: the owner can train and support some partners in year one | | | 04 Q3 | Owner |
| A3 | Assumed: a town can be judged open or closed quickly | | | 04 Q4 | Owner |
| A4 | Assumed: DPDP main duties start 13 May 2027 | | | Lawyer confirms against the Gazette (LAUNCH.md) | Lawyer |
| A5 | Assumed: Hindi and Punjabi readers type in Latin letters | | | Forms accept Latin in every language | |
| A6 | Assumed: the rubric weights are a fair first guess | | | Compare after the first ten decisions | Owner |

## 8. Owner decisions

Built from every question on CT-443 to CT-447 and in 03 §8, 04 §6 and 05 §11, merged where they overlap. Ordered by how much each one blocks.

| # | Decision | Blocks | From |
| --- | --- | --- | --- |
| 1 | Keep "There is no franchise form", or allow a short form (or worksheet send step) for the pilot? | Arm C, CT-130, the worksheet's form route, PRODUCT.md and INFO-BANK CTA wording | 04 Q-§10.1, 03 Q1, 05 Q1 |
| 2 | Who answers franchise enquiries and calls back, in which hours and days, and who covers? Can they keep the SLA for 26 weeks? Calls come from the main number? | Every reply-time promise, the SLA, the pilot | 04 Q1, Q2; 01 Q3; 05 Q2 |
| 3 | Is any money taken before the signed agreement (token, registration, training deposit)? Proposal: none, paid only to the firm's account against a GST invoice. Terms given at least 14 days before signing? Any cooling-off or refund? | The anti-fraud line, "how it works", accept copy | 04 Q6, Q7; CT-418, CT-419 |
| 4 | May prospects visit Kharar, meet the CEO, bring family and join a crew for an observation day before paying? Who runs it, with what safety briefing and insurance? | S3, the preview's "see it yourself", the guide, hold and accept copy | 04 Q5; 03 Q5; CT-418 |
| 5 | Where will enquiries live and who can see them? Who is the grievance contact? Accept the proposed retention periods? | Any data collection (DPDP), the notice text, the lead store | 04 Q16, Q17, Q18 |
| 6 | How many partners can head office train and support in year one, per model? Who trains, where, for how long, and what support follows in the first 90 days? | Public criteria, the SLA, the guide's training section | 04 Q3, Q12; CT-417 |
| 7 | How is a territory judged, by whom, and how fast can we answer "is my town open?" | The town gate, worksheet feedback, hold copy | 04 Q4 |
| 8 | Does the partner clean tanks personally or run a crew? Full time? Any experience, education or vehicle requirement? | Public criteria, rubric gates, the worksheet's owner-role question | 04 Q9, Q10; CT-417 |
| 9 | GST, vehicle, working capital and running costs: what may the page and guide say? May the budget question say the totals don't cover running costs? | The funding gate, the budget band note, guide section 5 | 04 Q11; 03 Q4; CT-415 |
| 10 | Labels for the new actions: the guide, the worksheet, "call me at a time I pick", "send my plan for review" (all outside the approved CTA list) | Hero and every section's buttons | 03 Q3; 05 §2.2 |
| 11 | Which two or three hard things about the business may we say in public? | The preview and the guide | 03 Q2 |
| 12 | Accept or change the rubric weights, thresholds and red flags; name the two reviewers; always tell a declined applicant the real reason (proposal: yes) | S4, decline copy | 04 Q13, Q14, Q15 |
| 13 | Should the worksheet ask for a budget band at all? | Worksheet Q9, the funding gate | 02 §5 |
| 14 | Do we want an optional updates list at all? What would it send, and how often? | The second consent tick | 04 Q19 |
| 15 | Is a written agreement ready per model, and in Hindi and Punjabi? | S6, accept copy | 04 Q8 |
| 16 | For Premium FOCO, may "build your own team and travel for allocated work" be public? | Public criteria | 04 §1.3; CT-416 |
| 17 | How did past franchise enquiries reach you (phone, WhatsApp, email, IndiaMART, Justdial, word of mouth), roughly how many each, and did anyone ask for email? | The pilot baseline | 01 Q1, Q2 |
| 18 | Allow a plain answer on the call about existing partners, keeping it off the page? | Validation questions on S1 | 04 §10.2 |
| 19 | Pilot details: 26 weeks as the longest run; an hourly rate for staff time; a reference code in the WhatsApp greeting ("Ref F-B-PA"); any paid ads at a steady rate | Pilot sign-off | 05 Q3 to Q6 |
| 20 | Worth paying for a verified business caller ID or the WhatsApp Business API? | Later; cost not checked | 01 Q4, Q5 |
| 21 | A short founder video in Hindi or Punjabi? A fixed monthly open day? | The preview; alternative C | 01; 04 §5 |

## 9. Dependencies

State read from Track Suru on 28 Nov 2026.

| Issue | What it is | State | What it blocks in this funnel | Needs first |
| --- | --- | --- | --- | --- |
| CT-415 | GST, vehicle, working capital, other costs | To do | The funding gate, the budget band note, guide section 5 | Owner answers |
| CT-416 | What FOFO, FOCS and FOCO mean; what Premium includes | To do | Premium criteria, the team-plan weight, "what changes by model" in the preview | Owner answers |
| CT-417 | Training; who can become a partner | To do | Public criteria, rubric gates, the training promise | Owner answers |
| CT-418 | Steps from first call to first job; visit before paying; reply time; payment and refund terms | To do | The whole stage table, S3, the SLA, the 14-day reading period. The biggest blocker | Owner answers |
| CT-419 | Official channel and payment notice | To do | The anti-fraud line on the page and in every message | CT-418 payment answer |
| CT-420 | A disclaimer that fits a page with no ROI | To do | Every figure, the guide, the worksheet summary, accept copy. Until then the INFO-BANK text is used as is | Owner's call |
| CT-421 | One-page family summary with WhatsApp share | To do | The family version of the worksheet summary; S3 "family welcome" | Wording; no PII in the share |
| CT-424 | Hold `/franchise` off production | In Review | Any real traffic, so the whole pilot | James approves the page |
| CT-126 | The `/franchise` page | In Review | Where the preview, criteria, steps and notice go | Owner review, then SECTIONS.md update |
| CT-130 | Franchise enquiry form | To do | Arm C, the form route for the worksheet, the notice and ticks | Decision 1; a lead store; LAUNCH.md legal items |

Order: decisions 1 to 5 unblock CT-418, CT-419 and CT-130; CT-415 to CT-417 unblock the criteria and the guide; then CT-126 takes the new sections; then CT-424 releases the page; the pilot starts after that.

## 10. Proposed doc rule changes (flagged, not made)

None of these is made. Each needs your call, then the doc change in the same commit.

1. **PRODUCT.md, Franchise:** "There is no franchise form (owner's call, 20 Nov 2026)" and "Enquiry is by call or WhatsApp only, through the page's two buttons". Change only if decision 1 allows a form. Without a form, the worksheet still works through a pre-filled WhatsApp message, and that needs no change.
2. **PRODUCT.md, approved CTA labels:** add the labels from decision 10, in all three languages.
3. **PRODUCT.md, Franchise:** "Never say how many partners there are". Suggest allowing a plain answer on the call, kept off the page (decision 18).
4. **PRODUCT.md, Franchise, and SECTIONS.md:** add "What running it looks like" and "How it works" sections, with the "we never charge to apply" line, once CT-418 is answered. The page gets at most one new section's worth of buttons; it keeps the same two actions everywhere.
5. **PRODUCT.md, Legal:** franchise lead retention periods and the rule that analytics never carries form data, or a pointer to a new section in CONVENTIONS.md (Analytics and errors), which would also list the franchise events.
6. **INFO-BANK §8, CTAs:** the "Send an Enquiry" button and the "Franchise Enquiry" block conflict with call and WhatsApp only. Settle with item 1.
7. **INFO-BANK §11, Privacy Policy, and LAUNCH.md:** add the franchise purposes (itemised data, purpose, rights, grievance, retention, the pilot's "we try two layouts" line).
8. **DESIGN.md, one filled button per viewport, on phones:** the contact bar's filled Call button and the hero's filled first CTA already share the first phone screen on every page. The wireframes keep the hero action filled and show the bar's Call as filled too, flagged. Options: make the bar outline-only on `/franchise`, or record the bar as an exception. Your call.
9. **A home for the screening process:** once approved, the rubric, SLA and copy rules belong in a short ops note or a PRODUCT.md section, outside `docs/research/`.

## 11. The current route (checked 28 Nov 2026)

Port 3000 (https://nextjsdev.letmecome.in) was running another project, The Auto Detail Guy, so `/franchise` there returned that site's 404. Following the project rule, the check ran on staging, https://ct.letmecome.in, in one browser tab. Nothing was changed.

- `/franchise`, `/hi/franchise` and `/pa/franchise` all return 200 and render fully translated, with the same eleven sections in the order SECTIONS.md lists. No console errors.
- The three models show ₹5.5 lakh, ₹8.5 lakh and ₹20 lakh, each "including machinery", with the disclaimer directly under the cards (checked in en and hi; present in pa, position not checked).
- The only actions are Become a Franchise Partner (`wa.me` with the franchise greeting in the page's language) and Call Us (`tel:`), repeated after the models, process, registrations and closing band. No form, input or textarea anywhere.
- No sideways scroll at 320, 375 or 1440 px. The phone contact bar (Call, WhatsApp) shows below `md`.
- What the funnel would need that isn't there: the preview, guide, worksheet, "how it works", criteria and a call-slot option; any lead store.
- Notes, not blockers for this research: staging sends `X-Robots-Tag: noindex, nofollow` (expected on staging; production holds the page under CT-424 anyway); no JSON-LD on the page; the language switcher links add `?lang=` (the canonical is correct). Production was not checked, by design.

## 12. Files in this folder

| File | Issue | What it covers |
| --- | --- | --- |
| [01-channel-behaviour.md](01-channel-behaviour.md) | CT-443 | How Punjab, Haryana and Tricity prospects use WhatsApp, email, calls, mobile and Hindi or Punjabi; 26-row source matrix |
| [02-funnel-teardown.md](02-funnel-teardown.md) | CT-444 | 15 real franchise funnels walked in a browser: fields, CTAs, gating, investment shown, mobile, language |
| [03-psychology-and-worksheet.md](03-psychology-and-worksheet.md) | CT-445 | Evidence on reciprocity, foot-in-the-door, co-creation, autonomy and belonging; the preview, the 14-section guide and the 12-question worksheet |
| [04-screening-privacy.md](04-screening-privacy.md) | CT-446 | Stages S0 to S6, public criteria, rubric, SLA, accept/hold/decline principles, DPDP checklist, dependencies, rule conflicts |
| [05-pilot-test-plan.md](05-pilot-test-plan.md) | CT-447 | Email-first vs channel choice vs direct application; the switchback pilot, KPIs, events, dedup, decision rules |
| [06-draft-copy.md](06-draft-copy.md) | CT-448 | Draft copy in en, hi and pa for the hero, actions, preview, worksheet, screening steps and outcome messages |
| README.md | CT-448 | This report |
