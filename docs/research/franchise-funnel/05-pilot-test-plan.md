# CT-447: pilot and test plan for the /franchise entry paths

Part 2 of CT-442, written 28 Nov 2026. Research and proposals only. Nothing here is approved, and every threshold, time and rule below is a proposal for the owner to accept, change or reject.

Builds on, and does not repeat:

- `01-channel-behaviour.md` (CT-443): mobile first, email a minority skill, WhatsApp opened by the prospect rather than pushed, call-backs from unknown numbers often ignored.
- `02-funnel-teardown.md` (CT-444): real forms, several entry points per page, guides gated mainly where a US-style CRM sits behind them.
- `03-psychology-and-worksheet.md` (CT-445): the guide, preview and worksheet stay ungated; reciprocity works for unconditional gifts, not gated ones.
- `04-screening-privacy.md` (CT-446): stages S0 to S6, the gates and rubric (§2), the SLA (§3), the DPDP checklist (§7), the analytics rules (§7.4) and the doc conflicts (§10).
- CT-409 in `docs/research/franchise/`, `docs/CONVENTIONS.md` (Analytics and errors), `docs/PRODUCT.md` (Franchise, Claims), `docs/LAUNCH.md`, `src/site.ts`.

## 0. Short version

1. **Don't pilot email-first as a gate.** Putting the guide behind an email address breaks the ungated design in CT-445, is "forced action" under the CCPA Dark Patterns Guidelines 2023 (CT-446 §8), and asks for the contact detail that only 38.4% of Punjab adults can use (CT-443). Email stays in the pilot as one of the channels a visitor can pick, so the pilot still tells James how many people want email.
2. **Compare two paths: channel choice (B) and direct application (C).** Both keep the guide, preview and worksheet open to everyone. They differ only in the page's main action.
3. **A randomised per-visitor A/B test isn't feasible here.** To detect a doubling from 2% to 4% at the usual 80% power needs about 1,140 eligible visitors per arm. At tens to low hundreds of franchise visitors a month, that takes from about eight months to four years. PostHog also can't randomise reliably: it sends nothing until the visitor answers the consent banner, and visitors who decline get a new anonymous ID every day.
4. **Run a switchback instead.** Alternate the whole page between B and C in two-week blocks, with the order shuffled within each four-week pair. Leads are assigned to the block they first contacted us in. This needs no cookies and no feature flags, and it covers WhatsApp and phone leads, which analytics can't see.
5. **Decide with simple Bayesian rules, and expect an unclear result.** Minimum 16 weeks, at least 300 eligible visitor-days per arm and 10 qualified applications in total; stop at 26 weeks whatever happens. Adopt an arm only if the chance it is better is 90% or more. If the result is unclear, keep channel choice, the path with more evidence behind it and the one that includes email.
6. **The pilot can't start yet.** It needs `/franchise` on production (CT-424), analytics on (`site.isLive`, LAUNCH.md), a place to store leads, named staff for the SLA, and the owner's call on the "no franchise form" rule (CT-446 §10). Without a form, only arm B can run, and the pilot becomes a measured rollout of B.
7. **The benchmarks warn against reading opt-ins as sales.** In FranConnect's 2025 data (US-weighted, 460+ brands), 0.6% of franchise-website leads became signed agreements, about 170 leads per agreement. No Indian benchmark exists in public.

## 1. The three paths compared

| | (a) Email-first | (b) Channel choice | (c) Direct application |
| --- | --- | --- | --- |
| What the visitor does | Gives an email address to get the guide | Picks WhatsApp, a call at a time they choose, or email; the guide is open to all | Fills in a short application (S0 fields, or the worksheet's send step) for a person to review |
| Pros | Cheap per message; good for documents later (agreement drafts, invoices); the familiar pattern on US sites and Indian portals (CT-444) | Meets the visitor on the channel they already use; a pre-agreed call slot lifts answer rates; the choice itself is data on preference; works within today's call/WhatsApp rule | Gives the reviewer structured answers before the first call; filters out casual browsers; easy to count; fits people who are ready |
| Cons | A gate turns the guide into a trade, which did not lift response in Church 1993 (CT-445 R2); email skill is 38.4% in Punjab, lower for family co-deciders; Indian business email opens of "1-2%" quoted by an insurer (CT-443 row 14); a gate counts as forced action | More channels to staff; WhatsApp chats are harder to structure and count; source is lost unless the first message carries a reference; WhatsApp at scale needs Meta's opt-in rules | Typing on a phone: enquiry forms complete at 37.7% on mobile against 47.7% on desktop (Zuko, CT-443); asks for effort before trust; breaks PRODUCT.md's "no franchise form" until the owner changes it |
| Evidence for | MEF survey puts email second (41%), close behind WhatsApp (weak, undated); ex-corporate buyers may prefer it (inference) | CAMS messaging skill 59.7% against 38.4% email (strong); Truecaller/Kantar 2026: 49% would answer a call they scheduled (weak); Urban Company runs a WhatsApp-only partner funnel (CT-444) | US brands qualify on the phone and keep forms short (CT-444 §3); AFDR 2020: 27.7% of franchise applications became sales against 2.9% of all leads (§7) |
| Evidence against | Jim's, Exppress and Fastclean give their info ungated and still collect enquiries (CT-444 §4); no study shows gating raises lead quality (CT-445 G1) | Survey preferences contradict each other (CT-443 summary 5); WhatsApp spam fatigue, 95% get unsolicited business messages daily (LocalCircles 2023) | 5K Car Care's 24-field form shows hard filtering exists but gives no conversion data; long forms at small Indian brands look like filtering, not success (CT-444) |
| Fit with our rules | Gate: no (CT-445, CCPA). Email as one option: yes | Yes, today | Only after the owner changes the form rule |
| In the pilot? | No as a gate. Yes as the "email" option inside B, and on the send step in C | Arm B | Arm C |

So the real question for the pilot is narrower than "email or not": does a conversation-first page (B) or an application-first page (C) bring more qualified applications per eligible visitor, and at what staff cost?

## 2. The pilot design

### 2.1 What stays the same in both arms

- The ungated preview, the starter guide and the worksheet (CT-445), all three models with totals and the disclaimer (PRODUCT.md, Claims).
- The criteria, the "we never charge to apply" line and the steps (CT-446 §1.3).
- The main number from `src/site.ts` in the header and footer, as on every page.
- The SLA (CT-446 §3), the same staff, the same reply scripts, the same rubric.
- The language versions: `/franchise`, `/hi/franchise`, `/pa/franchise`.

### 2.2 What differs

| | Arm B: channel choice | Arm C: direct application |
| --- | --- | --- |
| Main action in the hero and after the models | "Talk to us": three equal buttons, WhatsApp, "Call me at a time I pick", Email | "Send your plan for review": the worksheet's send step, or the short S0 form for people who skip the worksheet |
| What we ask | Nothing on the page for WhatsApp. For a call: name, mobile, slot. For email: name, email. Each with the notice and unticked consent | Name, mobile with the "on WhatsApp" tick, town, optional model, budget band, timeframe; the reply channel; the notice and unticked consents (CT-445 §6.1) |
| Secondary action | "Send your plan for review" as a text link | None in the page body (header and footer contacts remain) |
| Counts as an application when | The intro call (S1) is held and the person says they want to be considered, or they send the worksheet | The form or worksheet is sent |

Button labels are placeholders. New CTA labels need the owner (PRODUCT.md, approved CTA list).

### 2.3 Assignment: a switchback by fortnight

- Each block is 14 days, starting Monday 00:00 IST. Blocks come in pairs; within each pair a coin toss, made before the pilot starts and written down, decides which arm goes first. This stops the arms lining up with pay days or month ends.
- The page serves the block's arm to everyone on that date. No cookie, no flag, no per-visitor ID. The page must switch on the hour and cached copies must be refreshed then (a build detail for later).
- A lead belongs to the block of its first contact with us, by any channel, after dedup (§6). A person who comes back in a later block keeps their first block.
- Returning visitors may see both arms. That blurs the difference and makes the test conservative; record it rather than try to stop it.
- Ads and outreach run at a steady rate across blocks. A burst (an expo, a newspaper piece, a new ad campaign) is marked, and that block is either dropped or reported separately (§5.4).

### 2.4 Why not the alternatives

| Design | Why not |
| --- | --- |
| Per-visitor A/B with PostHog flags | No events or flags before the banner is answered; decliners get a new ID daily, so they would flip arms; flags can't see WhatsApp or phone leads; PostHog's own engine needs 50 exposures and 5 conversions per variant, and our primary outcome sits in the lead store, not in PostHog |
| Before-and-after (eight weeks of B, then eight of C) | Time and season fully confounded with the arm: a harvest, wedding season or a single news story would look like an effect |
| Three arms (adding email-first) | Splits too few visitors three ways, and the email gate fails our rules anyway |
| No test, just launch B | Acceptable fallback if the form rule stays (§2.6), but it leaves James's question unanswered |

### 2.5 Phases

| Phase | When | What |
| --- | --- | --- |
| 0. Baseline | Now, before launch | Owner counts past franchise enquiries by channel for the last two years, as far as memory and phones allow (CT-443 Q1). Set up the lead store fields (§4.2). Dry-run the SLA and the dedup rules on staging with made-up leads only |
| 1. Burn-in | First 2 weeks on production, arm B | Staff learn the process; fix what breaks. Not counted |
| 2. Switchback | Weeks 3 to 18 at least, up to week 28 | Eight or more blocks, four or more per arm |
| 3. Follow-through | 45 days after the last block | Count meetings and decisions for leads from the last blocks |
| 4. Decide and write up | After phase 3 | Apply §5.3; record the result in PRODUCT.md and close the pilot |

### 2.6 Fallback if the owner keeps "no franchise form"

Arm C can't run. Run arm B alone through the same phases as a measured rollout: same KPIs, same dedup, same cohorts, no comparison. The question it answers changes to "is B good enough, and which channel do people pick?" That is still worth having.

## 3. KPI definitions

Every KPI uses the deduplicated person (§6) as the unit, and the person's first block as their arm.

### 3.1 Eligible visitor

An eligible visitor-day is one anonymous visitor on one calendar day (IST) who:

1. views `/franchise`, `/hi/franchise` or `/pa/franchise` on production;
2. answered the consent banner (either way), since PostHog sends nothing before that;
3. fires `franchise_engaged`: the models section has been on screen, or 30 seconds have passed on the page with the tab visible;
4. has a browser time zone of `Asia/Kolkata` (or `Asia/Calcutta`), as a coarse proxy for being in India; and
5. isn't internal (staff devices opted out of capture) or flagged as a bot by PostHog.

Why visitor-days: a visitor who declines cookies gets a new ID each day, so true unique visitors can't be counted for them. Visitor-days are counted the same way in both arms, so the comparison stays fair even though the absolute rate is off.

Known gap: people who never answer the banner, and people who phone or WhatsApp after seeing the number elsewhere, reach the lead store but not this count. The KPI's numerator is therefore a little too high in absolute terms. It's fine for comparing arms in the same weeks, and wrong as a number for the page or for ads.

### 3.2 Application

A person becomes an application when any of these happens first:

- they send the worksheet or the application form; or
- they complete the S1 intro call and say yes when asked "Would you like us to consider you for a franchise?"

A WhatsApp "hi", a brochure request or a call that ends at "just looking" is a lead, not an application.

### 3.3 Qualified application (primary KPI numerator)

An application is qualified when the franchise lead records, after the S1 call and within 2 working days of it, that every CT-446 gate is passed or plausibly pending, and no red flag is present:

| Gate (CT-446 §2.1) | Passed | Plausibly pending (still counts) | Fails |
| --- | --- | --- | --- |
| Adult | Says 18 or over | — | Under 18 |
| Town | In a town the owner says is open, or one that needs a territory check | Territory check not done yet | The owner has said the town is closed |
| Funding | Budget band at or above the chosen model's total | Bank loan being planned; "discuss on the call" resolved to a band at or above ₹5.5 lakh | Band below ₹5.5 lakh with no plan |
| Training and the five steps | Agrees on the call | — | Refuses |
| No conflicting brand | Confirms | — | Runs or holds another tank cleaning brand |
| Red flags (CT-446 §2.3) | None | — | Any one |

Plus one rubric check: the owner-role answer isn't "invest and leave it to a manager" for Standard FOFO or Classic FOCS, unless the call settled it.

This is a screening judgement, not the S4 score. Rubric points are given only at S4 by two people (CT-446 §2.2). Record the date qualified and who decided. The reviewer works from the lead record with the arm field hidden from their default view, since the channel itself will often give the arm away.

### 3.4 Primary KPI

**Qualified applications per eligible visitor-day**, per arm:

```
qualified applications whose first contact fell in the arm's blocks
--------------------------------------------------------------------
eligible visitor-days in the arm's blocks
```

Counted 21 days after each block ends, so slow S1 calls still land.

### 3.5 Secondary KPIs and guardrails

| KPI | Definition | Source | Read when |
| --- | --- | --- | --- |
| Lead rate | Deduplicated leads (any first contact) per eligible visitor-day | Lead store / PostHog | Every block; the fastest signal, but not the goal |
| Application rate | Applications per lead | Lead store | Every block |
| Qualification rate | Qualified applications per application | Lead store | Every block |
| Meeting rate | S3 meetings held (Kharar or video) per qualified application, within 45 days of qualifying | Lead store | Phase 3 |
| Approval rate | Accepts per S4 review | Lead store | Reported as counts only; too few to compare |
| Cost per qualified application | (ad spend + staff minutes × an hourly rate the owner sets + tool costs such as WhatsApp API messages and a scheduler) ÷ qualified applications, per arm | Lead store, ad accounts, staff log | Phase 4 |
| Time to first response | Working minutes from first contact to first human reply (auto-replies don't count); report the median and the share within 1 working hour | Lead store | Every block |
| Channel chosen | Share of arm B leads picking WhatsApp, call, email; and in C, the reply channel picked | Lead store | Every block; this is the answer to "do people want email?" |
| Guardrail: SLA breach | Share of leads not contacted within the SLA | Lead store | Every block |
| Guardrail: withdrawals and STOP | Share of leads that withdraw, reply STOP, or complain | Lead store | Every block |
| Guardrail: wrong expectations | Share of leads or calls where the person expected guaranteed income, leads or a buy-back | Call notes, tagged | Every block |
| Guardrail: budget mismatch | Share of applications with a band below ₹5.5 lakh | Lead store | Every block |

Opt-ins to nurture messages are a guardrail count at most, never a success measure, and never added to any KPI above.

## 4. Event spec (PostHog) and what goes in the lead store

### 4.1 Rules for every event

- No name, phone, email, town, free text, worksheet answer, budget band or timeframe, ever. No hashed versions either: a hashed Indian mobile number can be reversed by trying all ten-digit numbers.
- Never call `posthog.identify()` or set person properties from a lead.
- Every franchise form, the worksheet and the WhatsApp button sit inside a `ph-no-capture` element (CT-446 §7.4). `wa.me` links with pre-filled text must not reach analytics.
- No personal data in URLs. UTM values must never carry an email or phone (check ad templates).
- Use `loadAnalytics()` from `@utils/analytics`, as CONVENTIONS.md requires. Nothing fires before the banner is answered; that is how the site is built.
- PostHog and the lead store are joined only as totals by block, arm, language, device class and source. There is no shared ID.

### 4.2 Common properties on every franchise event

| Property | Values | Note |
| --- | --- | --- |
| `arm` | `b`, `c`, `burn_in` | From the block calendar |
| `block` | e.g. `2027-B03` | Block number |
| `lang` | `en`, `hi`, `pa` | From the route |
| `$device_type`, UTM, `$referring_domain` | PostHog's own | Captured automatically; no extra code |

### 4.3 Events

| Event | Fires when | Extra properties |
| --- | --- | --- |
| `franchise_engaged` | Models section on screen, or 30 s visible on the page; once per page view | `trigger`: `models_seen` or `time` |
| `franchise_guide_opened` | The guide page or PDF is opened | `format`: `page`, `pdf` |
| `franchise_guide_shared` | A share button on the guide or family summary is pressed | `method`: `whatsapp`, `native`, `copy`; `item`: `guide`, `family_summary` |
| `franchise_worksheet_started` | First worksheet answer given | none |
| `franchise_worksheet_completed` | Summary page reached | none (no answers) |
| `franchise_contact_clicked` | A WhatsApp, call-scheduler, email or phone button is pressed | `channel`: `whatsapp`, `call_slot`, `email`, `phone_tap`; `place`: `hero`, `models`, `footer`, `sticky` |
| `franchise_application_started` | First field of the arm C form or the send step is touched | `path`: `form`, `worksheet` |
| `franchise_application_sent` | The server accepts the form or send step | `path`; `channel_chosen` |
| `franchise_form_error` | A field fails validation | `field` (the field's name, not its value); `error`: `required`, `format` |

Not tracked in PostHog on purpose: consent ticks, nurture opt-ins, slot times, model interest. Those are counted from the lead store.

### 4.4 What goes in the lead store

The store is still undecided (CT-446 Q17). An admin-only Payload collection fits the stack and keeps leads out of personal phones and spreadsheets. Per person:

- Identity and contact: name, `phone_e164`, `email_norm` if given, original values as typed, "on WhatsApp" tick, town.
- Pilot fields: `first_contact_at`, `first_channel` (`form`, `worksheet`, `whatsapp`, `call`, `email`, `walk_in`), `arm` and `block` (derived from `first_contact_at`, hidden from the reviewer's default view), `lang`, `device_class` (`mobile`, `desktop`, `tablet`, from the form's user agent; "unknown" for WhatsApp and calls), `source`.
- Source: the UTM values from the page URL at the moment of sending (read from the URL, not stored in the browser beforehand, since nothing but theme and language may be stored before consent, LAUNCH.md). For WhatsApp, a short non-personal reference code in the pre-filled greeting, such as "Ref F-B-PA", gives arm and language. For calls and when the code is missing, ask "How did you hear about us?" and record the answer from a fixed list.
- Consent records: notice version, time of each tick, review consent, nurture consent and its channel, withdrawals (CT-446 §7.3).
- Process: channel and slot picked, `first_human_contact_at`, attempts, stage dates S0 to S6, gate outcomes, `qualified` (yes or no, date, by whom), S4 scores and reasons, decision and reason, withdrawal.
- Cost: staff minutes per lead (a rough log, rounded to 5 minutes), ad campaign.
- Housekeeping: `duplicate_of`, `possible_duplicate`, delete-by date (CT-446 §7.6).

## 5. Sample size and decision rules

### 5.1 What the numbers allow

Visitors needed per arm for a classic two-sided test at 5% significance and 80% power:

| Baseline rate | Rate to detect | Per arm |
| --- | --- | --- |
| 1% | 2% | 2,319 |
| 2% | 4% | 1,141 |
| 3% | 6% | 749 |
| 5% | 10% | 435 |
| 10% | 15% | 686 |
| 10% | 20% | 199 |

What to expect: FPG's rule of thumb is about 2% of site visitors becoming leads and 10% to 20% of leads qualifying (§7). Our eligible visitors are already engaged and in India, so a qualified rate of 1% to 5% per eligible visitor-day is a reasonable guess, with no data behind it. At 50 to 300 eligible visitor-days a month, split two ways, that gives roughly 25 to 150 per arm a month and maybe 1 to 10 qualified applications a month in total.

So: a per-visitor randomised test powered in the usual way would need from about eight months to four years. Even the switchback can only find a large difference, roughly double or more, inside 26 weeks. The pilot is honest only if we say that up front.

### 5.2 The method

- For each arm, a Beta(1, 1) prior on the qualified rate, updated with qualified applications and eligible visitor-days. Compute the chance that one arm's rate is higher than the other's by simulation; a spreadsheet or 20 lines of Python is enough.
- Worked examples (300 visitor-days per arm unless stated): 3 against 8 gives about 93%; 4 against 12 gives about 98%; 2 against 5 at 150 each gives about 86%.
- Look at the numbers at the end of each pair of blocks only, not daily. Write each look down.
- Write these rules down and sign them off before phase 2 starts, so nobody moves the goalposts.

### 5.3 Decision rules

| Situation | Decision |
| --- | --- |
| Minimum run met (16 weeks of switchback, 300 or more eligible visitor-days per arm, 10 or more qualified applications in total) and one arm's chance of being better is 90% or more, and its guardrails hold | Adopt that arm |
| Same, but the better arm costs more than twice as much per qualified application | Owner decides; show both numbers |
| A guardrail breaks: SLA missed for more than 25% of leads in two blocks in a row, a complaint about contact we didn't have consent for, or a spike in "wrong expectations" | Pause, fix, and drop the affected blocks; restart the count for that arm |
| Week 26 reached and neither arm reaches 90% | Call it unclear. Keep the arm with the lower staff time per qualified application; if that's also close, keep arm B |
| Both arms within two qualified applications of each other at week 26 | Treat as a tie; keep arm B |
| Lead rate differs strongly but the qualified rate doesn't | Don't decide on lead rate. More leads at the same qualified count is more work, not more partners |

Why 90% and not 95%: the choice is cheap to reverse (a page layout), the cost of waiting is real, and a fixed end date limits the risk of a lucky early run. Why arm B as the default: it fits today's PRODUCT.md rule, it includes email as an option, and it has more support in CT-443 to CT-446.

### 5.4 When not to conclude

- Before the minimum run, whatever the numbers look like.
- With fewer than 10 qualified applications in total, or fewer than 4 in either arm. A handful of people can swing it.
- If one block holds more than a third of all qualified applications (one expo, one article, one family that sent four relatives).
- If the SLA was broken in a block. Slow replies would measure staffing, not the page.
- If the page, the guide, the ad mix or the staff changed during the pilot. Restart the count after any change to either arm.
- From any one cohort (§5.5).
- From approvals or signed agreements. There will be too few within the pilot to compare. Report them as counts.
- About income, demand or territory, which the pilot doesn't measure.

### 5.5 Cohorts

Report every KPI by:

- **Source:** Google organic, Google Ads, Meta, YouTube, franchise portal, WhatsApp share (the guide or family summary forwarded), offline (visiting card or van QR with UTM), direct or unknown.
- **Language:** en, hi, pa.
- **Device:** mobile, desktop, tablet, unknown (WhatsApp and phone leads).
- **Channel chosen** (arm B) and reply channel (arm C).

Cohort figures are descriptive. Don't make a cohort-level decision until that cohort has 20 or more qualified applications. The one cohort result worth acting on early is a clear language problem, say Punjabi visitors engaging but almost never applying; that points to a copy or translation fix, not to an arm.

## 6. Dedup rules

The unit is a person, so dedup decides the numerator. Run it when a lead arrives and again weekly.

### 6.1 Phone

1. Remove spaces, dashes, dots, brackets and leading or trailing text.
2. Remove a leading `+91`, `0091`, `91` (only when 12 digits remain), or `0` (when 11 digits remain).
3. A valid Indian mobile is then 10 digits starting with 6, 7, 8 or 9. Store it as `+91XXXXXXXXXX`.
4. WhatsApp sender IDs already arrive as country code plus number; apply the same rule.
5. Anything else (landline, foreign number, too short) is kept as typed and flagged for a person to check. Never "fix" it by guessing.

### 6.2 Email

1. Trim and lowercase the whole address.
2. For `gmail.com` and `googlemail.com` only: remove dots and anything after `+` in the local part, and treat both domains as one. This is the matching key only; keep the address as typed for sending.
3. Don't strip `+` tags for other domains; some providers treat them as different mailboxes.

### 6.3 Matching across channels

| Match | Action |
| --- | --- |
| Same normalised phone | Same person: merge. Keep the earliest first contact, its block, arm and source |
| Same email key, different phones | Same person: merge, keep both numbers |
| Same phone, different names | Don't merge automatically. Could be a shared family phone (IAMAI: 18% of users go online on someone else's phone, CT-443). Flag `possible_duplicate`; a person decides. If two family members apply together, count one application |
| Similar name and same town, no shared contact | Flag only; never merge automatically |
| A WhatsApp chat and a form from the same number within 14 days | One lead; the first is the first contact |
| Back within 12 months after going quiet | Same lead, re-engaged; keeps the first block |
| Re-applies after a decline (6 months or more, CT-446 §4) | A new application, linked to the old one; outside the pilot's counts if the first was inside |

Every merge is logged with who did it and why. Merges happen only in the lead store, never in PostHog.

## 7. Benchmarks

None of these is Indian, none is about a ₹5.5 to ₹20 lakh service franchise, and the main ones come from companies that sell franchise sales software or services. Use them as rough ranges and as a warning, not as targets.

| # | Figure | Source and date | Sample and method | Limitations |
| --- | --- | --- | --- | --- |
| 1 | Lead-to-agreement: 0.76% (2023), 0.96% (2024), 1.50% (2025). Commercial & Residential Services 1.50% (2025). By source (2025): internal network 18.9%, trade show 13.5%, brokers 3.9%, internet 0.9%, franchise website 0.6% | [FranConnect, 2025 Franchise Growth Benchmarks](https://www.franconnect.com/en/?p=288623), read 28 Nov 2026 | 460+ brands, about 3.4 million tracked leads, 33,000+ signed agreements, 2023 to 2025; "signed agreements divided by tracked leads" in the same period | Vendor data, mostly US. Period ratio, not a cohort followed through. "Lead" means whatever each brand's CRM tracks. FranConnect says it is not sales guidance |
| 2 | Portal leads to deals: 0.3%, "an average of 350 leads to generate a single sale"; Commercial & Residential 0.3% | [Keith Gerson, FranConnect, on franchising.com, 16 Sep 2020](https://www.franchising.com/articles/the_strengths_and_limitations_of_franchise_portal_leads_pre__postcovid.html) | FranConnect Franchise Sales Index, Jan to Jun 2020 | Pandemic half-year; portal leads only |
| 3 | Leads to sales 2.9%; qualified leads to sales 15%; applications to sales 27.7%; discovery days to sales 76.7% | [2020 Annual Franchise Development Report, franchising.com, 3 Feb 2020](https://www.franchising.com/articles/2020_afdr_sales_closing_ratios_improved.html) | 122 franchisors, 30,119 units, online questionnaire, 2019 | Self-reported. "Qualified" is not defined. Six years old |
| 4 | 1% to 2% of website leads sign; 8% to 12% of leads submit applications; 85% of discovery days end in a signed agreement; site visitor to lead 2% or more | [Joe Mathews, Franchise Performance Group, 25 Feb 2021](https://franchiseperformancegroup.com/key-metrics-for-diagnosing-and-fixing-franchisee-recruitment-problems/) | Consultant's rules of thumb from 120+ client brands and FranConnect data | Not a study; the table on the page is garbled, so stage alignment is uncertain |
| 5 | Cost per lead: service (brick-and-mortar) $608; under 25 units $802. Cost per sale: service (brick-and-mortar) $15,721, service (not brick-and-mortar) $9,276, under 25 units $14,795 | [2026 AFDR, franchising.com, 23 Sep 2026](https://www.franchising.com/articles/20260923_tracking_average_costs_per_lead_and_costs_per_sale.html) | Online questionnaire, "dozens of organizations" | US costs; broker fees and portal prices that don't exist here in the same form. Sample size not given |
| 6 | 28% of brands never responded to a franchise web lead; average first reply 9.1 hours among those that did; 44% never sent a personal reply | [FranFunnel Response Time Study, fielded Mar to Apr 2025](https://www.franfunnel.com/franchise-sales-performance) | 530 brands; method not published | Vendor that sells fast response; no conversion data |
| 7 | Already in sibling reports, not repeated: Franchise Update's 2025 mystery shop (44% of 102 brands called back) and the 2026 AFDR source ranking | CT-443 rows 22 and 23; CT-444 | | |

Not found: any public lead-to-sale figure from FRANdata (its public work covers disclosure documents and unit data, as in CT-409 02) or from Franchise Business Review (which surveys franchisee satisfaction, not franchisor funnels); and any Indian figure from Franchise India, FAIFP or an Indian franchisor. Franchise India may hold this privately (CT-443 Q7).

What the benchmarks mean for us:

- Even on the most generous US figure (2.9% of leads becoming sales), a few dozen leads would give about one partner. On the website-lead figure (0.6%), it takes about 170. With our traffic, the pilot will not produce enough signed partners to compare arms, which is why the primary KPI stops at "qualified application".
- The US funnel narrows sharply at the human steps: applications close at about 28%, discovery days at 77% to 85%. That supports CT-446's view that the call and the visit do the screening, and that staffing them matters more than the page.
- If our qualified-to-accept rate ends up far above the US qualified-to-sale 15%, our "qualified" bar is probably too loose, or we accept too easily. If it is near zero after 20 qualified applications, the bar or the criteria page is wrong. Neither is a target.

## 8. Safeguards

Opt-ins and consent:

- No ticked boxes by default, anywhere. Franchise India's pre-ticked newsletter box (CT-443) is the example not to copy.
- Two separate, unticked consents: one to review and reply to this enquiry, one for optional updates, which names the channel. The enquiry works without the second.
- A choice of WhatsApp means the visitor starts the chat or asked us to reply there. No business-initiated WhatsApp to anyone who didn't opt in (Meta's rule, CT-446 §7.3).
- A call slot means we call in that slot, from the main number, after a WhatsApp or SMS saying who will call. No cold calls (TRAI TCCCPR, CT-446 §7.3).
- Withdrawal as easy as consent: STOP on WhatsApp, a link in every update, or a word on a call.
- Same notice and consent wording in both arms and all three languages, so the arms differ only in layout.

Not counting the wrong things:

- Nurture opt-ins, guide opens, shares and worksheet completions are activity, not results. They never appear as a success figure in reports to James, and never as "franchise sales".
- No report adds leads across channels without dedup.
- No "you qualify" or score shown to anyone before a person has reviewed them (CT-446 §4.1). The KPI's "qualified" label is internal.

Fairness and honesty during the pilot:

- Both arms get the same speed, staff and scripts. Staff should not know which arm is live where avoidable; the reply script doesn't mention it.
- No false urgency, scarcity or "limited territories" in either arm (CCPA guidelines, CT-445).
- The pilot is mentioned in the privacy notice in plain words: "we try two layouts of this page to see which is easier to use". No personal data is used to pick the layout.
- A change to either arm during the pilot restarts that arm's count.

Data:

- Analytics rules in §4.1 and CT-446 §7.4. Leads deleted on the CT-446 §7.6 schedule, which the pilot doesn't extend. The pilot's results are kept as totals only.

## 9. Risks

| Risk | Effect | Mitigation |
| --- | --- | --- |
| Too few visitors | The pilot ends unclear | Stated up front; default rule (§5.3); the channel-choice data is useful anyway |
| The page isn't live, or analytics stays paused | No pilot | Readiness checklist in §10; phase 0 work can start now |
| The form rule stays | No arm C | Fallback in §2.6 |
| SLA not staffed | Measures staffing, not the page; also loses good prospects | Name staff before phase 1; SLA guardrail; pause rule |
| Banner refusals or no answer | Denominator undercounts, possibly differently by language or device | Compare arms only within the same weeks; report banner answer rates per arm |
| Source lost on WhatsApp and calls | Weak source cohorts | Reference code in the greeting; fixed "how did you hear" list |
| Reviewer bias towards one arm | Qualified rates drift | Hide the arm field; gates are yes/no; spot-check 5 records per block with the second reviewer |
| Shared family phones | Wrong merges or double counts | Flag, don't auto-merge (§6.3) |
| Seasonality: harvest, weddings, Diwali, school admissions, exams | Bursty traffic | Paired blocks with shuffled order; drop or separate burst blocks |
| A single event (expo, press, a viral post) | One block dominates | The one-third rule in §5.4 |
| Opt-in numbers reported as success | Wrong decisions, pressure to push nurture | §8; the report template shows only the KPIs in §3 |
| WhatsApp API costs | Cost per qualified application understated | Log message costs per arm |
| Staff change mid-pilot | Breaks comparability | Restart count, note in the log |
| Benchmarks quoted as targets | Wrong expectations for James | §7 says they are US ranges and a warning |

## 10. Before the pilot can start

- [ ] `/franchise` released on production (CT-424; LAUNCH.md).
- [ ] `site.isLive` on, after the LAUNCH.md legal and DPDP items, including the privacy policy's franchise purposes (CT-446 §10 item 6).
- [ ] Owner's call on "There is no franchise form" (PRODUCT.md; CT-446 §10 item 1). Decides between the two-arm pilot and the B-only rollout.
- [ ] Lead store chosen and built with the §4.4 fields; access limited to named people (CT-446 Q17).
- [ ] Franchise lead and cover named, hours set, SLA accepted (CT-446 Q1 to Q3).
- [ ] Guide, preview and worksheet built (CT-445).
- [ ] CTA labels for both arms approved (PRODUCT.md).
- [ ] Block calendar and coin tosses written down; decision rules in §5.3 signed off.
- [ ] Staff hourly rate for the cost KPI set by the owner.
- [ ] Phase 0 baseline: the owner's rough count of past enquiries by channel.

## 11. Open questions for the owner

1. Keep "no franchise form", or allow one for the pilot? (Decides two arms or one.)
2. Who is the franchise lead and the second reviewer, and can they keep the SLA for 26 weeks?
3. Is 26 weeks acceptable as the longest run, knowing the result may still be unclear?
4. What hourly rate should we use for staff time in the cost KPI?
5. Is a short reference code in the WhatsApp greeting acceptable ("Ref F-B-PA")? It carries no personal data.
6. Is any paid advertising planned during the pilot, and can it run at a steady rate?

## Sources

Read 28 Nov 2026 unless stated.

- FranConnect, "Franchise Growth Benchmarks: What 460+ Brands' Real Data Shows for 2025": https://www.franconnect.com/en/?p=288623
- Gerson, K. (FranConnect), "The Strengths and Limitations of Franchise Portal Leads, Pre- & Post-Covid", franchising.com, 16 Sep 2020: https://www.franchising.com/articles/the_strengths_and_limitations_of_franchise_portal_leads_pre__postcovid.html
- Franchise Update Media, "2020 AFDR: Sales Closing Ratios Improved", 3 Feb 2020: https://www.franchising.com/articles/2020_afdr_sales_closing_ratios_improved.html
- Franchise Update Media, "Tracking Average Costs Per Lead and Costs Per Sale" (2026 AFDR), 23 Sep 2026: https://www.franchising.com/articles/20260923_tracking_average_costs_per_lead_and_costs_per_sale.html
- Mathews, J. (Franchise Performance Group), "Key Metrics for Diagnosing and Fixing Franchisee Recruitment Problems", 25 Feb 2021: https://franchiseperformancegroup.com/key-metrics-for-diagnosing-and-fixing-franchisee-recruitment-problems/
- FranFunnel, Franchise Lead Response Time Study, fielded Mar to Apr 2025: https://www.franfunnel.com/franchise-sales-performance
- PostHog docs, "Data collection: cookieless tracking" and "Cookieless tracking tutorial" (consent states, daily salt, flags without storage), via Context7: https://posthog.com/docs/privacy/data-collection, https://posthog.com/tutorials/cookieless-tracking
- PostHog docs, "Experiments: Bayesian statistics" (50 exposures and 5 conversions per variant minimum), via Context7: https://posthog.com/docs/experiments/statistics-bayesian
- Sample sizes in §5.1: standard two-proportion formula (two-sided α = 0.05, power 0.8); Bayesian examples in §5.2: Beta(1, 1) priors, 200,000 simulation draws. Computed 28 Nov 2026.
- Everything else is cited in the sibling reports listed at the top.
