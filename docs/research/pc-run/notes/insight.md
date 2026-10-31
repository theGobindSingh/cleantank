Evidence notes behind `../report.md`. File paths such as `raw/...` point into the owner's research zip, which is not in the repo. Third-party phone numbers are removed.

# Insight notes: PC research run, 31 Oct 2026

Read-only analysis of the owner's Kharar-area run. Capture ids are three-digit ids in `raw/serp-signed-out/` and `07-ai-overviews.md`. All counts below are mine unless a file is named, and come from scripts in this folder (`aio.py`, `body.py`, `shape.py`, `final.py`, `rev.py`, `sites.py`, `misc.py`). Domain tallies were not recomputed.

## Limits that apply to everything

- One run, one evening. 66 signed-out pages, 40 unique queries. The 41 non-brand overviews come from 27 unique queries, because price, AMC, commercial and "best" were each repeated from three device towns. Overview text changes between repeats, so repeats are not independent but are not copies either.
- Device location did not always hold. 056 (Panchkula) and 066 (Kharar) show a Sector 22 Chandigarh footer, and 065 (Kharar) shows a Panchkula footer. So near-me pages 044, 056 and 066 are one Chandigarh result three times, and town-to-town near-me comparison is not supported.
- "Cited" means a source label printed in the overview. Real link targets were not captured (`aioLinks` nearly empty). Labels cannot show which sentence used which source except where a label follows the sentence.
- Firm counts use the prose of the overview only. I cut the source cards at the end, because a repeated IndiaMART card ("Providers: Fixomes ... Ketvi ...") otherwise inflates Fixomes and Ketvi from 1 or 0 to 19 and 21.
- Punjabi and Hindi rest on 3 and 5 pages, all from one Mohali location. Trends is too thin to rank any term (21). No search volume exists anywhere.
- Kurali and Ropar had no Google or Bing query in this run. Nothing below speaks to them.

## Corrections to the run's own summaries and earlier docs

- 05's "top domains" for Punjabi undercount the page. Most of what 038 and 039 show is short video and social posts, which the parser did not treat as organic. Read the raw .txt.
- 99-handoff finding 2 is right on rank but hides the page type: on "Gobind Galaxy water tank cleaning" the ranks 1 and 2 are `/terms` and `/privacy-policy` (005), not the home page.
- 23 says no Hindi on cleanerkart.in pages read, and docs/research/local-recheck/report.md says no tank page in its set has Hindi, hreflang or a language switcher. CleanerKart has an EN/HI switch, declares hreflang hi-IN, and has a Roman-Hindi Mohali tank page, "Mohali Mein Paani Ki Tanki Ki Safai — ₹699", dated 26 Oct 2026 (030, 036, 040). Only the English version was read. Treat "no rival has Hindi" as "no rival seen with a real Devanagari tank page, and CleanerKart unverified".
- The report's "Sponsored not seen" was Maps. In Google Search packs 2 of 66 pages had one: Welco on "water tank cleaning kharar" (010), Tricity Cleaners on "pani ki tanki saaf karne wala chandigarh" (029).
- Regexes that looked like NABL and "who" hits on sites were false positives. Case-sensitive, NABL appears on no site read, and "ISO" on Clean Tank alone.

## 1. AI Overviews

**What they name.** 43 overviews: 2 brand, 41 non-brand.

- 35 of 41 name actual providers. 6 are how-to led (027, 032, 033, 037, 038, 039). Of those 6, 027 and 037 mention Safaiwale in passing, 038 mentions the TankSeva app, 032, 033 and 039 name no firm. 032 and 033 are the same text. So on commercial queries overviews overwhelmingly name firms.
- Clean Tank: 0 of 41. It appears only on 005, the brand query, with correct phone, email and both addresses.
- Firms named in prose, out of 41: Welco 25, Shree Balaji 22, Busy Bucket 14, Tricity Water Tank Cleaning 13, CleanerKart 11, Ramesh 11, Safaiwale 10, Watan 9, A-One 8, Solanki 5, Elite Winds 5, Wazara 5, Tricity Cleaners 5, Urban Company 4, HouseTech Care 4, Tots Purahydro 4.
- 19 of the 27 English overviews embed Business Profile cards inside the answer (rating, distance, Call). 8 of the 9 price overviews do not. No Hindi, Hinglish or Punjabi overview does; they give names, phones and ratings as text, often the same Profile data.
- Reviews are not the whole story. Ramesh has 43 reviews and appears 11 times; A-One has 609 and appears 8 times. Ramesh's Justdial card carries specifics ("Mechanized", "college properties", "every 6 months", "2 hours", 023, 045, 050). MKN Constructions, a building restoration firm with 3.0 from 2 reviews, sits in 3 AMC overviews (023, 050, 062) because its listing says "water tank AMC". Inference, few examples: listing text with specific claims gets lifted.

**Sources printed.** Across 43: Justdial 31, IndiaMART 30, Busy Bucket 13, Safaiwale 9, Sulekha 8, cleanerkart.in 6, Instagram 6, Tricity Cleaners 5, Facebook 4, Urban Company 4, YouTube 4, Sintex 4.

- Hindi, 5 pages: Justdial 4, Instagram 3, Safaiwale 3, Sintex 2, YouTube 2, then Astral Pipes, IndiaMART, Sulekha, Amazon.
- Hinglish, 6 pages: Justdial 4 (plus www.justdial 1), Sintex 2, YouTube 2, then AajTak, Amazon, Facebook, Safaiwale, Tricity Cleaners, Busy Bucket, IndiaMART, CleanerKart, Astral.
- Punjabi, 3 pages: ABP Sanjha 2, Jagbani 1, Google Play 1 (TankSeva), Instagram 1 (Local Helper), and on the Mohali query IndiaMART, Justdial and cleanerkart.in. The Mohali overview (040) built its price from CleanerKart's Roman-Hindi page, in Punjabi. No Gurmukhi firm page exists for it to cite.

**Claims repeated, of 41 overviews.**

| Claim | Count | Ids or note |
|---|---|---|
| Any rupee figure | 28 | |
| ₹0.20 to ₹0.60 per litre | 17 | IndiaMART listing; 016 to 064 |
| ₹699 up to 1,000 L | 11 | CleanerKart |
| ₹0.04 per litre | 4 | 020, 022, 040, 061 |
| UV | 18 | |
| Eco-friendly or herbal | 19 | |
| Food-grade | 7 | |
| Non-toxic | 7 | |
| Hydrogen peroxide or silver peroxide | 7 | |
| Chlorine or bleach | 8 | mostly DIY |
| Every 6 months or twice a year | 13 | |
| 2 to 4 visits a year (AMC) | 2 | 022, 023 |
| Quarterly | 3 | |
| A duration | 14 | "2,000 L in about 15 minutes" from a Shree Balaji review (017, 026, 035, 052); "1.5 to 2 hrs" CleanerKart; "40 minutes to 1.5 hours" Sulekha (012) |
| Named stage count | 5 | 6-stage or 4-to-6, 9-step on 037 |
| Pressure in bar | 3 | 150 or 150-200 bar, all Tots Purahydro via Sulekha (022, 049, 061) |
| Final rinse | 9 | |
| Water test as a step | 3 | 022, 049, 061 |

**Against INFO-BANK.**

- Frequency: no direct conflict, but the engines' single number is 6 months and Clean Tank's general guidance is 3 to 6 months, with no flat interval allowed. "2 to 4 visits a year" is the same range in the words AMC overviews use. Busy Bucket's FAQ says "once or twice a year", once a year "also fine".
- Process: the overview's standard list is dewatering, sludge removal, high-pressure scrubbing, vacuum, antibacterial, UV. That is Clean Tank's five steps with sludge split out. The real gap is the end. 9 overviews close on rinsing, and DIY text says bleach must be washed out 2 or 3 times. INFO-BANK says the tank can be used straight away and refill is not described. Expect "do you rinse after the chemical?". INFO-BANK has no answer, so this is a marked gap.
- Duration: INFO-BANK publishes none; 14 of 41 overviews state one. Engines will quote someone else's. The ruling stands, and this is its cost.
- Safety words: food-grade and non-toxic match the 26 Oct ruling. Eco-friendly (19 overviews) is the most repeated safety word, and Clean Tank may not use it until the document exists.
- Price: for 1,000 L, overviews give ₹500-700, ₹400-699, ₹599-949, ₹699-899 depending on page. Clean Tank's ₹800 sits inside the last two and above the first two; ₹0.20/L for 10,001 to 30,000 L is the bottom of the range engines repeat. The audit agent has the numbers.
- Overviews make errors: "Panchkrypto" (020), Safaiwale given Wazara's rating card and an Urban Company card at 2.7 from a health-care listing (016). Anything that reads a bare Profile can misattribute.

**What earns citation.** Few examples each.

- Sized or fixed prices. The field is starved. A Busy Bucket Facebook post from March 2021 supplies the litre ladder for "price list" (048, 060). CleanerKart's one number carries 11 overviews. HouseTech Care's ₹100 visit fee and before/after photos carry 4 (018, 020, 046, 058).
- Numbered process steps. Elite Winds' page is six bare STEP lines, and overviews cite it on each step (024, 051, 063). It has no FAQ schema.
- Town pages. Busy Bucket's Dera Bassi page leads 012. CleanerKart's Mohali page leads 040.
- FAQ text. Justdial's "typical cost in Mohali" answer (036), Safaiwale's booking Q&A (034). Clean Today has nine plain FAQ answers on its Chandigarh page and is in 0 of 41, so FAQ alone is not enough.
- Short social posts with phone and price: Busy Bucket on Instagram (036) and Facebook (048, 060), AR Water Tank Cleaners on Instagram (045).
- Phone in page text. On number-intent queries the overview named firms with websites stating a phone: Tricity Cleaners, tricitydrycleaner.com, Elite Winds (028), Busy Bucket (034). Two overviews only.
- Words that recur in overview prose: dewatering, sludge, high-pressure, vacuum, anti-bacterial, UV, food-grade, overhead and underground, mechanized (17), per litre, up to 1,000 L.

## 2. Query shapes

| Shape | Pages | Overview | Pack | Directories and aggregators in top 3 | Firm or content in top 3 |
|---|---|---|---|---|---|
| Bare "water tank cleaning + town" | 14 | 1 (012) | 14 | 31 | 11 |
| "near me" | 7 | 1 (045) | 7 | 14 | 7 |
| Attribute: underground, Sintex, mechanized, overhead | 4 | 3 | 4 | 8 | 4 |
| Price | 9 | 9 | 9 | 25 | 2 |
| AMC | 6 | 6 | 6 | 18 | 0 |
| Commercial, hospital | 4 | 4 | 4 | 8 | 4 |
| Best | 3 | 3 | 3 | 6 | 3 |
| Hinglish or Hindi with town, number or near me | 7 | 7 | 7 | 12 | 9 |
| Hinglish, Hindi generic and "wala" no town | 4 | 4 | 3 | 4 | 8 (how-to content) |
| Punjabi | 3 | 3 | 0 | 2 | 4 |

Type labels are the run's rule-based ones.

Commercial: a bare town query gives a pack and directories, no overview. Add any qualifier (price, AMC, commercial, best, an attribute) and an overview appears. A pack appears on every English page. Price and AMC are the most directory-heavy: 63 of 77 and 45 of 51 positions, and no firm site in the AMC top 3 on any of 6 pages. Justdial is the only text advertiser detected, on 3 of 6 Hinglish pages.

How-to: "pani ki tanki ki safai", "पानी की टंकी की सफाई", and "wala/wale" with no town or number get DIY answers. Google reads "saaf karne wale" as how-to in 3 of 3 (027, 037, 039). Adding a town or "ka number" flips it to providers (028, 029, 030, 034). The rivals are Sintex, Astral, AajTak, Amazon and video with view counts in crores (1.3Cr, 89.8L, 43.9L). A service site will not displace these. A how-to page would be a long-term guide, already deferred.

Towns, weakest first, for a town page:

- **Kharar** ("water tank cleaning kharar", 010, 065). No firm website in the top 8 on either page: Justdial, mrserviceexpert template, IndiaMART, Sulekha, aajjo, magicpin, quikr. No overview. Pack: Wazara, A-One, Shree Balaji, with Welco Sponsored on 010. Bing has Justdial, cleanhub4u, Guga. Google suggests "water tank cleaning services in kharar punjab price", and "Water Tank Cleaning Services in Kharar Punjab" is a related search on 22 pages. Clean Tank has a real office here and is absent even from "Clean Tank Services Kharar" (002), while the bare name reaches rank 3 (001). Best candidate.
- **New Chandigarh** ("water tank cleaning new chandigarh", 011). Only 2 of 8 results name the town: a Justdial listing and Clean Today's page at 6. The rest are Chandigarh pages. Bing is junk: free classifieds at 1, 2 and 5, Instagram, Amazon. Autocomplete has the phrase in en, hi and pa.
- **Dera Bassi** ("water tank cleaning dera bassi", 012). Busy Bucket at 2 and 8, otherwise directories. The only bare town with an overview, and it names firms. Bing: Busy Bucket, two local directories, OLX, YouTube. Check it against the 20 km service limit.
- **Zirakpur** (009). tricitydrycleaner at 4, a free Google Sites page at 5, Busy Bucket at 6, zoopgo at 7. A free page at 5 says the field is thin. Bing has an indane-services domain at 6.
- **Panchkula** (008, 043, 055). Harder. Busy Bucket 3, tricitydrycleaner 5, Elite Winds 6 or 7, all with town pages. Pack is all-local (MK, Solanki, Sk), and none of the Mohali leaders. A Kharar address will not help there.
- **Chandigarh** (006, 041, 053). A free UENI site at 7 and a Delhi firm at 8 are the soft spots, but Safaiwale and Busy Bucket hold 3 and 5.
- **Mohali** (007). Most contested by firm sites. Not a first target.

Not town-specific but equally weak: "hospital water tank cleaning chandigarh" (025, one query, firm sites thin; Bing is classifieds) and AMC. Clean Tank has named hospital clients and nobody in 025 shows any.

A town page helps organic rank. It does not by itself reach the pack or the overview cards, which need a Profile (see action 3).

## 3. Punjabi

Sample: 3 pages, one location, one run. Very small.

- No pack on any of the 3. Overview on all 3, in Punjabi.
- 038 and 039 (no town): how-to. Rank-holders are ABP Sanjha (punjabi.abplive.com, 3 of 3 pages), Jagbani, and a run of social video: Bharti Plumbing Works (12 mentions in raw), Local Helper, a Bathinda Facebook post with phone numbers, YouTube.
- 040 (Mohali): Justdial, IndiaMART, ABP, Justdial, CleanerKart. Maps tab present; on 038 and 039 it is not.
- 039's overview tells the reader to call a local plumber or cleaning service and asks if they want a Mohali or Chandigarh service. So it is asking for a local answer and has none.
- Local Helper is the only firm with Gurmukhi tank copy seen, and its ad targets Fazilka and Abohar per the report.

Is the opening real? On supply, yes: not one Gurmukhi firm page exists for Google to use, and a Roman-Hindi page was cited for a Gurmukhi query. On demand, unknown: Gurmukhi autocomplete returned nothing on all 3 queries, and hl=pa suggestions are Roman English or Hinglish. So a Punjabi page is likely to win what little there is, at low cost since the routes exist. It should not be sized as a channel. Local Helper's paid and organic Gurmukhi posts are a small sign that someone finds it worth doing.

Words in the raw pages: ਪਾਣੀ ਵਾਲੀ ਟੈਂਕੀ (27) against ਪਾਣੀ ਦੀ ਟੈਂਕੀ (22), so the informal form is at least as common. ਸਫਾਈ 31 against ਸਫ਼ਾਈ 8; ਸਾਫ਼ 26 against ਸਾਫ 16. ਟੈਂਕੀ 78 against ਟੈਂਕ 7. Also ਕਰਵਾਓ, ਚਿੱਕੜ, ਗੰਦਗੀ. Titles mix English: "Water Tank Cleaning: ਪਾਣੀ ਦੀ ਟੈਂਕੀ ..." (ABP), and "Water Tank Cleaning" appears 26 times.

## 4. Hinglish and Hindi vocabulary

Sources: people-also-ask and related searches on 03 and 04, autocomplete in 26. These show that a phrase exists, not how often. Trends cannot rank them: most of 261 weeks are zero in Punjab, and Chandigarh was blocked.

Terms for copy:

- Core noun: पानी की टंकी, टंकी की सफाई, pani ki tanki ki safai. "जल टंकी" appears almost only in titles Google machine-translated from English, so it is not how people write.
- Who: टंकी साफ करने वाला / वाले, पानी की टंकी साफ करने वाले का नंबर, pani ki tanki saaf karne wale ka number, ...contact number, ...mobile number, ...number chahiye, ...near me, tanki ki safai near me.
- Price: pani ki tanki saaf karne wale price, tanki ki safai near me price list, price list in English after any town, "water tank 1000 ltr cleaning price", "1000 ltr". Hindi overviews use कीमत, खर्च, and PAA uses रेट.
- Chemicals, the worry the audience brief predicts: टंकी साफ करने के लिए कौन सा केमिकल है?, पानी की टंकी साफ करने के लिए कौन सी दवा अच्छी है?, पानी की टंकी में डालने वाली दवा, कौन सा पाउडर अच्छा है?, टंकी के पानी को साफ करने के लिए क्या डालें?, स्प्रे. English: "water tank cleaning chemical" is a related search on 20 pages. YouTube: "water tank cleaning medicine".
- Alum: फिटकरी को पानी की टंकी में डाल सकते हैं क्या?, पानी की टंकी में फिटकरी डालने से क्या होता है? (2 pages). INFO-BANK has no line on this, so it needs an owner-approved answer.
- Machine: टंकी साफ करने की मशीन का क्या नाम है?, कौन सी मशीन अच्छी है?, pani ki tanki saaf karne ki machine. A fair place to say what Clean Tank's machines do.
- Tank type: छत की पानी की टंकी, प्लास्टिक की टंकी, ओवरहेड and अंडरग्राउंड, छत पर and ज़मीन के नीचे (from overviews).
- Dirt: काई, मिट्टी, गाद, बदबू.
- DIY hook to answer calmly: बिना खाली किए, बिना अंदर उतरे, तरीका, जुगाड़. Competing with these videos is not the aim.
- Worth excluding: "prathna patra" (YouTube, application letters) and "500 लीटर की पानी की टंकी कितने की आती है" (buying a tank).
- Septic confusion: "How much will it cost to clean a septic tank?" is on 29 English pages, सेप्टिक टैंक की सफाई का रेट on 031. A one-line "we clean water storage tanks, not septic tanks" would stop mis-enquiries, if true of the business; INFO-BANK lists only water storage.

Real Hindi is rare. 22 "Translated by Google" labels on pages 027 to 037 belong to English pages from tricitydrycleaner, safaiwale, tricitycleaners and elitewinds shown in Hindi by Google. So the Hindi results seen are mostly English pages machine-translated. Justdial carries the "Translate this page" tag, a sign of real Hindi. Rival firm sites do not, CleanerKart unverified.

## 5. Competitor sites

Read: 16 sites, home plus up to 3 pages. Safaiwale not captured, A-One and Welco not read. Town counts are links seen.

What they have that Clean Tank's plan lacks:

| Feature | Who | Clean Tank plan |
|---|---|---|
| Town pages | Guga 32, Busy Bucket 16, CleanerKart 16, tricitydrycleaner 15, Tricity Cleaners 13, Elite Winds 12, Clean Today 7 | None. PRODUCT says `/homes` lists no towns |
| Service + FAQPage + LocalBusiness | Guga, CleanerKart. FAQPage also Busy Bucket (Mohali), Smart Cleaning, Mr Service Expert | No JSON-LD in `src/` today; old site has LocalBusiness |
| Inclusions and exclusions | CleanerKart: "What's not included" (repairs, sumps over 3,000 L, water testing) and quantity table with time | Has "after the visit"; no not-included list |
| Water test before and after | Guga only. Pure Tank and KPS mention certificates or reports | None in INFO-BANK |
| Time stated | CleanerKart, Clean Today, Fixomes | Barred by owner |
| Social proof numbers | Busy Bucket 15,000+ homes, Guga 500+ clients, Fixomes 2,500+ | None |
| Re-clean or guarantee | Busy Bucket "We re-clean for free", Urban Company 30-day re-visit | None; "guaranteed" barred, a stated re-visit policy would be an owner call |
| Same-day | Fixomes, Grace, Guga, tricitydrycleaner, Pure Tank | Not stated |

Claims that recur:

- UV: Busy Bucket, Clean Today, Elite Winds, Guga, Pure Tank, Smart Cleaning, plus Tots via Sulekha. Common, so not a differentiator. "Where applicable" reads weaker but is honest.
- 6-step: Elite Winds, Pure Tank, overview default. 7-step: Busy Bucket home page, while its tank page lists 6. 8-step: Guga. 9-step: Safaiwale (037). 5-step: Clean Tank. A higher number is not better; a named, explained list is what got cited.
- No entry: on no tank page read. It lives in DIY video (बिना अंदर घुसे, ਬਾਹਿਰ ਖੜ ਕੇ) and on vblue's septic pages. Clean Tank should not adopt it; its process has people in the tank.
- "Certified": used for technicians or "certified sanitization" with no certificate named. KPS "Certified", Guga "WHO-approved", "99.99%", "80% of diseases". Clean Tank may not match those and should not.

What Clean Tank could honestly beat, from INFO-BANK:

- ISO 9001:2015 with certificate number and expiry: no other site read shows ISO at all. Keep the Q2A wording. AEO-GEO's "no ISO claim" in schema is a separate call.
- GSTIN, PAN, Udyam, GeM: no rival read shows them. GSTIN needs checking first (section 8).
- 2008 and paperwork: Busy Bucket 2020, Fixomes 4+ years. Not universal: Tricity Water Tank Cleaning is given as "since 1998" (046) and "over two decades" (017), tricitydrycleaner "20 years", Darshan Singh 20+ years.
- Named institutional clients with certificates: AIIMS, IIT Ropar, NIT Jalandhar, BSNL Chandigarh, and hospitals. No rival shows anything like this, and overviews on hospital and commercial queries have nothing to quote. Certificates are hidden for now by owner's call.
- 150 to 250 bar stated: the only other pressure in view is Tots' 150 and Guga's "150+".
- Capacity: 20 lakh L overhead, 1 crore L underground, against CleanerKart's 1,000 L and 3,000 L sump limit.
- Published ladder to 10,000 L and per-litre above, with GST stated: Guga is the only other wide ladder; GST appears on no rival.
- Agent brought by the team: CleanerKart says "Disinfectant and water are provided by you". Worth a check that Clean Tank's service includes the agent, which the process implies.
- Cleaning Certificate plus date sticker with next due date: only Pure Tank has a sticker line (Delhi); Guga has a certificate.
- Honesty on water quality: the qualifier is a difference, though a quiet one.

Quality bar: Busy Bucket's tank page is spun text ("doubly a year", "microorganism treatment") and it still carries 14 overviews. Age and town coverage beat prose here.

## 6. Review themes

Caveat: keyword matching, 5 reviews per firm, 70 excerpts cut at 220 characters, sort unconfirmed, firms self-selected by their rank. Not a measure of any firm.

About 15 of 70 are not tank work (water tanker delivery, sofa, carpet, house cleaning, other jobs), and some profiles carry reviews of unrelated jobs. The file's "staff behaviour 37" is inflated because it catches "professional". My hand-tuned recount on the 55 tank reviews, 52 of them five-star:

| Theme | Reviews of 55 | Share |
|---|---|---|
| Professional (generic) | 19 | 35% |
| Thorough, every corner, deep | 17 | 31% |
| On time, punctual, prompt | 16 | 29% |
| Polite, well-behaved | 14 | 25% |
| Fast | 9 | 16% |
| Hygiene | 8 | 15% |
| Equipment, machine | 7 | 13% |
| Price, affordable | 6 | 11% |
| Explained, knowledgeable | 3 | 5% |
| Chemicals, disinfectant | 2 | 4% |
| Before/after proof | 1 | 2% |

Complaints: 4 of 70 under five stars, 2 of them on tank work.

- No one came, no answer to calls (1 star).
- Rude, and tank not properly clean (1 star).
- Overcharged, unskilled daily-wage workers, on a house job (1 star).
- Crew impatient (4 stars).
- Owner replies: 31 of 66 five-star, 0 of 4 lower. From the recheck, Welco's page also had water drained without warning and a broken ball valve.

Shape copy: "on time", "every corner", polite trained team, proper equipment. These are the words buyers use. Chemicals and proof hardly feature in reviews, although Clean Tank's plan leads on them; that is fine for pre-sale reassurance but they do not seem to be what earns five stars. Note also fast is praised, and Clean Tank can't publish duration.

Shape operations: confirm the slot, turn up, tell the customer before draining, check fittings, reply to every poor review. All 4 poor reviews are about conduct or reliability, none about chemistry. Asking for a review after each job is what the leaders' counts imply; the sticker visit is a natural moment.

## 7. Bing and signed-in

**Bing (14).** Worth acting on, because AEO-GEO notes ChatGPT search draws on Bing's index.

- Clean Tank: 0 of 21 queries.
- The field is weaker than Google. Free classifieds rank first on several commercial queries: adsandclassifieds on "water tank cleaning price chandigarh", "...price list" and new chandigarh; postfreeonline on hospital and mechanized. Pages from that tier should lose to any real page.
- Different winners: kps.co.in is at 1 on both AMC queries and "near me", Guga on 4 town queries, neither on Google's English pages. KPS is a Gurgaon-run template, so AMC on Bing is open to a local page.
- Instagram and Facebook posts take 12 positions. Clean Tank has no profiles.
- "near me" on Bing is not local (kps, freshtank, nobroker), and autosuggest is mostly other cities. So Bing will reward town-named pages, not location.

**Signed-in Google (27).** Placed the browser in Andhra Pradesh, 8 pages only. Queries naming a town looked much like signed-out, so nothing to act on.

- "Clean Tank Services" at rank 1 against 3 signed out is likely personalisation or the location. Do not rely on it.
- "Clean Tank Services Kharar" has no Clean Tank result either way.
- The legal-removal notice on 3 pages (5 to 7 results removed) has no explanation in the capture. Note only.
- Darshan Singh Care is a pack name worth adding to the watch list.

## 8. Old site

`raw/sites/cleantankservices.com.json`, 3 distinct pages, 200, LocalBusiness + WebSite + WebPage + BreadcrumbList, no hreflang, no Hindi or Punjabi, 0 town links. It is a Next.js build from about Sept 2026 (archive capture on 17 Sep with a Pexels stock image) on a re-bought domain. The earlier site in the archive (2024) had `/about`, `/customers`, `/process`.

Matches INFO-BANK: phone 8699339947, Kanpur phone 9453517514, B-3/26 address, both emails, ISO wording, founder bio, 5-step order, capacities, frequency.

Conflicts and stale items:

| Item on old site | Against |
|---|---|
| GSTIN 09LFS1473F5ZU | Same as INFO-BANK and `src/site.ts:40`, but it is 13 characters. A GSTIN is 15 (2 state + 10 PAN + 3). Its PAN part reads LFS1473F, while INFO-BANK's PAN is ALFPS1473F. IndiaMART shows 09ALFPS1473F3ZW (004), 15 characters with the PAN inside. INFO-BANK §12 calls variants wrong, so this needs the owner to check the registration certificate before it goes on any site or schema |
| "up to 250 bar" | Ruling: 150 to 250 bar, always a range |
| "biodegradable, eco-friendly", "Govt-approved laboratory certification" | Ruling: need the document; website wording is Clean Tank agent, food-grade, non-toxic |
| "no fixed public price list" | Home price list, 28 Oct |
| About meta: "has offered ISO 9001:2015 certified water tank cleaning across India since 2008"; home meta similar | Certificate registered 1 Apr 2026. Reads as ISO since 2008 |
| "24x7 Emergency Service" tile without qualifier on home | PRODUCT: always with "subject to..." |
| "NATIONWIDE", "all major cities in India" | INFO-BANK §1 has the line, §10 softens it; "Nationwide" is not INFO-BANK |
| Testimonial placeholders ("Customer testimonial coming soon", "Customer Name") on home and about | Live |
| "Ready to ensure your assets are truly pristine? Our engineers ... comprehensive audit of your sanitation protocols" in every footer | Not INFO-BANK; template leftover. Google's snippet shows it (card on 005) |
| Form: full name, phone, city | PRODUCT: nothing collects personal data before DPDP check. Live now |
| Regd. Office, Kanpur shown | Allowed by INFO-BANK; PRODUCT leaves it off `/contact` and markup. Overview 005 repeats it |
| WhatsApp button next to 8699339947 | `src/site.ts` WhatsApp is 919453517514. Link target not captured |

Pan-India and seven states: consistent with INFO-BANK §1, but title "Water Tank Cleaning Services India" and meta "across 7 Indian states" name no town. That matches the finding that the site ranks for its name and nothing else. The new site's home rule (Tricity plus 20 km) needs the two kept apart: organisations national, homes local. Also the certificates in §7 show work in Odisha (IIT Bhubaneswar, IREL), Tamil Nadu (NIT Trichy) and J&K (IIIM Jammu, AIIMS Vijaypur, SMVDU), none in the seven. "Seven states" understates or the list is stale. Owner to say.

For the move:

- There are no generic rankings to lose: 0 on Google 02 to 05, 0 on Bing. Exposure is brand only, plus the facts engines hold.
- Overview 005 reads `/terms` and `/privacy-policy`. The new routes are `/terms` and `/privacy`, and `/about-us`, `/services` also change. No redirects exist in `next.config` or `src/proxy.ts`. Needed at least: `/about-us` to `/about`, `/privacy-policy` to `/privacy`, `/services` to a chosen page, and the 2024 paths `/customers`. A full list needs Search Console or a crawl; the capture only lists these.
- The new site has no JSON-LD (`grep ld+json src/` empty), and the old has LocalBusiness. Going live without gap 1 fixed is a step back for the one thing that works today.
- Footer facts engines used: phone, email, Punjab office in plain text on every page. Keep a plain-text footer.
- Entity is weak: "Gobind Galaxy" resolves to a Sector 22 mobile market, a Panvel project and an OYO in Kanpur (004). Tenderkart's tender history and the IndiaMART page are the only third-party confirmations. Justdial has an unrelated "Clean Tank" at Maloya Colony to confirm (11).
- HTTP to www via 308 is the existing pattern; keep www as canonical if that remains the choice, and set `SITE_URL`.

Checked in the repo: `/homes` price list is a server-rendered `<table>` with the calculator beside it, so engines can read it.

## Ranked actions

1. Ship redirects and JSON-LD with the move. Strong.
2. Owner checks GSTIN against the certificate before launch. Strong on format; which value is right is unknown.
3. Treat the Profile date as the main cost driver for overviews, and fill Justdial, IndiaMART and Sulekha with specific text at launch. Strong. Owner has set Profile after launch; listing text can go the same day.
4. Put one plain price sentence per size near the table, in all three languages, plus the per-litre line. Strong that engines lack it, medium that they will use Clean Tank's.
5. Build an AMC and society page with structure, visit counts in "2 to 4 times a year" wording, paperwork. Medium to strong.
6. Owner to rule on town pages, starting with Kharar, New Chandigarh, Dera Bassi, Zirakpur. Medium. Conflicts with "lists no towns".
7. Hindi and Punjabi FAQ using real terms, covering chemical, दवा, machine, overhead and underground, with ਪਾਣੀ ਵਾਲੀ ਟੈਂਕੀ alongside ਪਾਣੀ ਦੀ ਟੈਂਕੀ; needs owner answers on फिटकरी and rinsing. Medium for Hindi, weak for Punjabi demand.
8. Hospital and institution proof in sentences; consider un-hiding certificates. Medium-weak, one query but no rival.
9. Bing Webmaster, Bing Places, and at least one social profile with phone and price posts. Medium.
10. Operations: slot confirmation, warn before draining, reply to poor reviews, ask for reviews at the sticker visit. Copy: on time, every corner. Weak to medium.
