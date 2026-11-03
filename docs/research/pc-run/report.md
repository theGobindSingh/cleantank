# Search from Kharar: Clean Tank ranks on its name and nothing else

The owner ran the research prompt from a real connection in the Kharar area on 31 October 2026. This was the first time Google Search, the local pack, AI Overviews, Justdial and IndiaMART could be read at all. The run produced 30 Markdown files and about 420 raw captures. Every number below was recomputed from the raw captures, and that audit changed several of the run's own summaries.

Clean Tank appeared on none of the 61 generic Google pages and none of the 21 Bing queries. It ranks only for its own name, and the two best results there are its `/terms` and `/privacy-policy` pages. AI Overviews answer 43 of 66 Google pages, name real firms on most of them, and take those firms from Business Profiles, Justdial and IndiaMART.

Evidence: [notes/audit.md](notes/audit.md) checks the numbers. [notes/insight.md](notes/insight.md) reads what they mean. The raw zip stays out of the repo.

## One fact needed the owner (settled)

The GSTIN in `src/site.ts:40` and INFO-BANK §1, `09LFS1473F5ZU`, has 13 characters. A GSTIN has 15. INFO-BANK §1 gives the PAN as `ALFPS1473F`, and the middle of the published number is that PAN with the `A` and `P` missing.

- Restoring them gives `09ALFPS1473F5ZU`, which passes the GSTIN check digit.
- IndiaMART's "Gobind Galaxy, Kanpur" profile shows `09ALFPS1473F3ZW`, which also passes.

Settled 3 Nov 2026: the owner confirmed `09ALFPS1473F5ZU`. INFO-BANK and `src/site.ts` now carry it (CT-292).

## What Google shows

| Query type | Pages | What appears |
|---|---|---|
| Bare commercial, such as "water tank cleaning Mohali" | 14 | Local pack on all, AI Overview on 1, directories below |
| Price | 9 | AI Overview on all. 2 of 27 top-3 places are firm sites |
| AMC | 6 | AI Overview on all. No firm site in the top 3 |
| Commercial or hospital | 4 | AI Overview on all |
| "Best" | 3 | AI Overview on all |
| Hinglish, Hindi | 11 | AI Overview on all. Pack on 6 of 6 Hinglish, 4 of 5 Hindi |
| Punjabi | 3 | AI Overview on all. No pack. 3 pages from one location, so a small sample |

Directories hold 47% of the true 521 organic positions, or 53% if social results are left out. The run's parser dropped 57 Facebook, Instagram and YouTube results, so its "53% of 467" counts a smaller field. justdial.com appears on 57 of 61 pages and is first on 46. The 61 pages cover 35 unique queries.

Paid results are thin: 2 sponsored pack slots (Welco, Tricity Cleaners) and 3 Justdial text ads, on 4 of 66 pages. Maps lists showed no Sponsored result in 28 lists.

## AI Overviews

- 35 of 41 non-brand overviews name real firms. Clean Tank is in none of them. The brand overview gives its contact details correctly.
- Firms named most often in overview text: Welco 25, Shree Balaji 22, Busy Bucket 14, Tricity Water Tank Cleaning 13, CleanerKart 11, Ramesh 11.
- Sources printed most often: Justdial 31, IndiaMART 30, Busy Bucket 13, Safaiwale 9, Sulekha 8. Hindi overviews also lean on Instagram and YouTube.
- 19 of 27 English overviews embed Business Profile cards. Hindi, Hinglish and Punjabi overviews have none but give firm details as text.
- Review count does not decide it. Ramesh with 43 reviews is named more often than A-One with 609.
- Sized prices, numbered steps, town pages and plain-text phone numbers each appear to earn citation, from a few examples each. FAQ text alone does not: Clean Today has nine answers and appears in none.
- Engines repeat ₹0.20 to ₹0.60 a litre on 17 of 41 overviews, and ₹699 on 11. They repeat "every 6 months" on 13, which fits Clean Tank's 3 to 6 months.

## Town pages

These are the weakest organic fields, and the evidence is a sample of a few queries each. A town page helps organic rank only. Packs and overview cards need a Business Profile. `docs/PRODUCT.md` says the service area page lists no towns, so this needs the owner's ruling.

| Town | Field |
|---|---|
| Kharar | No firm site in the top 8 on two queries |
| New Chandigarh | 2 of 8 results name the town |
| Dera Bassi | Busy Bucket plus directories |
| Zirakpur | A free Google Sites page at 5 |

Kurali and Ropar had no Google or Bing query. On Maps the earlier finding holds and is firmer: no tank listing within 10 km of either. The nearest listing of any kind is about 11 km and 26 km away; the nearest with reviews is about 13 km and 28 km.

## Maps

| Town | Leaders | Against the recheck |
|---|---|---|
| Kharar | A-One, Wazara, Shree Balaji | Holds |
| Mohali | A-One, Wazara, Shree Balaji | Wazara in, Welco out of the top 3 |
| Chandigarh | Shree Balaji, then Welco, Wazara, Axico, Tricity | Shree Balaji holds |
| Panchkula | Bare lists: A-One or Wazara from 20 km away. Hindi: VK, Solanki | Sector 4 cluster holds only in part, and partly reflects where the test pin was placed |
| Zirakpur | Watan, then Welco, Wazara, VK | Holds |
| Dera Bassi | Bare lists: A-One, Wazara. Hindi: Shiv, Axico | Earlier leaders replaced |
| New Chandigarh | Wazara, A-One, Tricity | Weakened |
| Kurali, Ropar | A-One, Wazara, all 13 km or more away | Holds |

Distance does not decide rank on most bare lists. The run's "distance-led" finding is wrong: A-One ranks first in Panchkula from 21.6 km. Local packs on Google differ from Maps lists: Shree Balaji 50 slots, Welco 34, Tricity 21, A-One 11, Wazara 2.

No Clean Tank listing appeared on Maps or Justdial. Three lookalikes need the owner to confirm: "Clean Tank" at Maloya Colony, an IndiaMART "Gobind Galaxy, Kanpur" profile, and "Govind Galaxy" at Harjinder Nagar, Kanpur.

## Prices

All rupee figures held. New or changed:

- CleanerKart sells 1,000 L and under at ₹699 in Chandigarh, Mohali, Panchkula, Zirakpur and Kalka. The customer supplies disinfectant and water, Kharar is not served, and it has no Maps listing. It's a lower scope than ours.
- The ₹399 Meta ad covers 500 to 2,000 L across the Tricity and Kharar, from ₹399. Nothing shows what it includes.
- Guga offers 20% off a first booking. Its ₹999 becomes ₹799, still above our ₹708.
- Mr. Service Expert is a national template with Chandigarh as one footer link, so it's not local evidence.
- No firm says its price includes GST. CleanerKart comes closest with "the price you book is the price you pay". Good Life Future sells on GST invoicing.
- IndiaMART rates are per litre, hour or day, and can't be read as a tank price.

Urban Company's price held on a Panchkula address. Its tax treatment is still unknown.

## Ads

Good Life Future and GLF are one operator. AR Water Tank Cleaners copies their text but has its own phone and domain and matches a Delhi firm. The ₹399 page is separate. So the Tricity Meta field has at least three contact identities, against the recheck's "maybe two". Any link between AR and Good Life is unproven.

Ads Transparency shows ad counts for fixomes.com 24, tricitycleaners.in 11 and busybucket.in 5. Those counts cover all ads for the domain. Screenshots show one Fixomes "Mohali Tank Cleaners" ad and no tank ad in the tiles visible for the other two. Targeting wasn't captured.

## Language

- Words seen in Hindi and Hinglish: पानी की टंकी, टंकी साफ करने वाला, pani ki tanki saaf karne wale ka number, रेट, कौन सी दवा, फिटकरी, काई, बदबू. जल टंकी appears almost only in machine-translated titles.
- ਪਾਣੀ ਵਾਲੀ ਟੈਂਕੀ is at least as common as ਪਾਣੀ ਦੀ ਟੈਂਕੀ in Punjabi results.
- Gurmukhi autocomplete returned nothing on three queries. Punjabi supply is empty, and demand is unknown.
- CleanerKart has an English and Hindi switch and a Hinglish Mohali tank page, so "no rival has a language switcher" is out of date. Real Hindi remains rare: 22 "Translated by Google" labels sit on English pages from four firm sites.
- Trends has too little data to rank any of this. Punjab sits at the reporting floor and Chandigarh returned a 429.

## Reviews

Keyword matching on 5 reviews per firm, cut at 220 characters, so this is a rough read. Of 55 tank reviews: professional 35%, thorough 31%, on time 29%, polite 25%, fast 16%, hygiene 15%, equipment 13%, price 11%, chemicals 4%, proof 2%. All 4 complaints among the 70 excerpts concern no-shows, rudeness, overcharging or impatient crews. No owner replied to any of them. Customers praise reliability and conduct, and rarely mention chemistry.

## The old site and the move

No generic ranking exists to lose. The risk is brand and business facts.

- `/terms` and `/privacy-policy` are what Google's brand overview cites. Keep those URLs working at launch.
- The old site has LocalBusiness schema and the new site has no JSON-LD. Launching as is would be a step back (CT-133).
- Old-site wording that conflicts with INFO-BANK: "up to 250 bar", "biodegradable, eco-friendly", "no fixed public price list", and a meta line implying ISO since 2008.
- The old contact form collects name, phone and city, so it needs the DPDP check while it stays live.
- Certificates show work in Odisha, Tamil Nadu and Jammu and Kashmir, outside the seven listed states. The owner should say if that list is out of date.

## Pacing and browser notes

The owner lifted the 40-pages-an-hour limit at about 18:55 IST. About 28 Google pages and 11 Maps places then ran 8 to 15 seconds apart with no block. The owner solved one Google CAPTCHA by hand. Justdial and Bing went blank in the clean browser window, and the run then loaded them in the owner's own browser. No evasion tool was used. That is a change of browser after a soft block, so treat those two sources as thinner evidence: their data is hand notes, with few screenshots.

## Not known

- Search volumes: no Keyword Planner, as the account has no Google Ads account.
- Search Console, Bing Webmaster and Business Profile data: skipped, as they sit on another account.
- ChatGPT, Gemini, Perplexity, Copilot and AI Mode answers. The hand-run prompts are in CT-199.
- Prices actually paid, and whether any competitor price includes GST.
- Google's signed-in results here assumed Andhra Pradesh, so they aren't Tricity evidence.
- Town comparisons of "near me" on Google: 9 of 66 pages show a different town in the footer, including the Kharar and one Panchkula near-me page, and the brand "rank 3" came from a Mohali page. Maps lists are fine: 28 of 28 sat at the requested point.
- Tenders here are aggregator snippets. A BSNL (CGMT Chandigarh) tank tender dated 29 October 2026 may be open and needs a hand check on etenders.gov.in.
