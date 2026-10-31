# Re-check of research page sections 3, 7 and 8: tools, AI answer facts, Business Profile rules

Checked 31 Oct 2026 against https://www.letmecome.in/ct.html (source file `~/public-files/ct.html`) and `docs/research/seo-tools/report.md`.

Method: headless Chromium through `local-browser.cjs` (en-IN, Asia/Kolkata, Chandigarh geolocation), from this VPS, whose IP geolocates to Mumbai, India ([ipinfo](https://ipinfo.io/)). GitHub through `gh api`. WebSearch was used only to find URLs and leads. Page text was saved twice: `innerText` first, then all DOM text, because Google help pages hide content in collapsed sections. That second pass produced the biggest finding here (Punjabi, below). Scripts and raw text are in the scratchpad at `/tmp/claude-1001/-home-ubuntu-Programming-ct/afd18c61-4948-46cb-8622-d934b17d163c/scratchpad/tools/evid/`.

Access record: about 65 page loads, 4.5 seconds or more between loads in each list. One block: searchengineland.com returned 403 "Just a moment..." on a single load, so I stopped on that site and did not retry. No sign-in, account, form, CAPTCHA, proxy or faked user agent. Cookie banners were left unclicked. Three lists ran in parallel on different hosts; Ahrefs appeared in two of them at different list positions, and load times were not logged, so the per-site gap there is by position and not measured.

## What changes the page

### Takeaway
Five things need editing. Punjabi is listed by Google for AI Mode, AI Overviews and Gemini, so the "weak link" paragraph is out of date. Business Profile search terms need no API and no 60-day wait. Search Console verification can verify a profile instantly in some cases, so it should come first. Video verification is not a free choice. The report's Presence Scout rupee price no longer matches its pricing page.

### Cited Findings
- **Changed, page section 8.** The page says "Google's AI Mode announcements didn't name it" and calls Punjabi the weak link. Google's AI Mode help page lists Punjabi under "Supported languages" and India under "Supported countries & territories" — [AI Mode help](https://support.google.com/websearch/answer/16011537?hl=en-IN). The list sits in a collapsed section, which is how it was missed.
- **Changed, same point.** Google's AI Overviews help page lists Punjabi under "Languages" and India under "Countries and territories" — [AI Overviews help](https://support.google.com/websearch/answer/14901683?hl=en-IN).
- **Changed, same point.** The Gemini web app lists Punjabi, among "more than 70 languages" — [Gemini web app](https://support.google.com/gemini/answer/13575153?hl=en-IN). The Android app lists "Punjabi*", and the asterisk means no "Hey Google" voice commands and some Gemini action features missing — [Gemini mobile app](https://support.google.com/gemini/answer/14579026?hl=en-IN&co=GENIE.Platform%3DAndroid). India is listed there too.
- The page's literal sentence about announcements still holds for the 2025 India post, which names Bengali, Kannada, Malayalam, Marathi, Tamil, Telugu and Urdu — [Google India blog](https://blog.google/intl/en-in/products/supercharging-search-for-india-new-languages-in-ai-mode-search-live-debuts/). AI Mode later gained 53 more languages, reaching just under 100 — [Search Engine Roundtable](https://www.seroundtable.com/google-expands-ai-mode-to-53-new-languages-40958.html). That secondary page did not show a language list that I could read, so Punjabi's date of addition is unknown.
- **Changed, page section 3.** The page says the 60-day clock opens the Performance API, which "shows the real searches that found you", and that money can't shorten that. Google's help says verified profiles already get the Searches metric: "The search terms that people used to find your business", updated at the start of each month, up to five days late — [Business Profile performance](https://support.google.com/business/answer/9918094?hl=en-IN). The 60-day rule applies only to API access — [API prerequisites](https://developers.google.com/my-business/content/prereqs).
- **Changed, page section 3 (incomplete).** API access also needs a website listed on the profile, an Organization account and a submitted application, which can be rejected — [API prerequisites](https://developers.google.com/my-business/content/prereqs).
- **New, sequencing.** Google says a profile can be verified instantly "in some cases", including when "You verify your website with Google Search Console" — [Verify your business](https://support.google.com/business/answer/7107242?hl=en-IN). The page lists both as Today tasks with no order.
- **Changed, page section 3 (nuance).** The page presents the video as the method. Google says "Verification methods are automatically determined by Google and can't be changed", depend on business type, public info, region or hours, and may need more than one method. The listed options are phone or text, email, live video call and mail. Google recommends video where the business is eligible, and the review takes up to five working days — [Verify your business](https://support.google.com/business/answer/7107242?hl=en-IN).
- **Changed, report only.** Report table: Presence Scout ₹2,499 a month. Its pricing page now reads "Simple pricing in US dollars": Free $0 (5 prompts), Starter $29 (50 prompts), Growth $99 — [Presence Scout pricing](https://presencescout.com/pricing). Its own blog still says ₹2,499 for Starter and claims rupee pricing — [Presence Scout blog](https://presencescout.com/blog/best-ai-visibility-tools-india). At ₹94.95 to the dollar, $29 is about ₹2,754.
- **Changed, report only.** Report: Semrush "$165 a month". That is the annual-billing price of SEO + AI Search; monthly billing is $199. A cheaper SEO-only plan exists at $117.33 billed annually or $139 monthly — [Semrush pricing](https://www.semrush.com/pricing/). The verdict to skip it stands.

### Inferences
- Replace the Punjabi paragraph with something like this: Google lists Punjabi for AI Mode, AI Overviews and Gemini, but no data exists on how often answers appear for Punjabi queries or what they cite, so the hand test remains the way to find out.
- Listing is not the same as quality. A language list says the product accepts the language. It says nothing about Gurmukhi versus Roman script, how often an AI answer triggers, or how good it is. The hand panel in three languages should stay, and it now has a firmer reason.
- Order the Today column so that Search Console domain verification comes before the Business Profile. It costs nothing and may skip the video.
- Rewrite the "Why now" card so reviews and monthly search terms start on verification, and leave the API out, since no one here needs it.
- Reword "Verification video" to "If Google offers video".

### Gaps
- Could not check whether the instant route applies to a service-area business or to this site; it needs a real attempt.
- Could not check which verification methods Google offers this business without creating a profile.

## Prices and limits read live with India locale

### Takeaway
All prices on the page hold. Only AITLAS shows rupees. Every other vendor showed dollars, or pounds for Screaming Frog, to an Indian IP with en-IN locale, so there is no cheaper India tier to use. The dollar-to-rupee conversions also hold at ₹94.95.

### Cited Findings
Page claims:
- **Confirmed.** DataForSEO "$50 balance doesn't expire": "$50 minimum top-up", "Balance never expires" — [DataForSEO pricing](https://dataforseo.com/pricing).
- **Confirmed.** ₹4,750 is $50 at ₹94.95 = ₹4,747.5, rate dated 30 Oct 2026 — [Frankfurter](https://api.frankfurter.dev/v1/latest?base=USD&symbols=INR). Excludes any card forex fee or tax, which I could not check.
- **Confirmed.** OpenSEO "$10/mo + 28%": "$10/mo", "plus a flat 28%", and "you need an active subscription in order to use OpenSEO" — [OpenSEO pricing](https://openseo.so/pricing). Add for fairness: the $10 includes $10 of usage each month.
- **Confirmed.** Screaming Frog free crawl of 500 URLs; paid £199 a year — [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/pricing/). The currency switch offers $, £ and €, no rupee.
- **Confirmed.** Ahrefs Free Site Audit: 5K crawl credits a month per project, verified sites only — [Ahrefs Free](https://ahrefs.com/webmaster-tools). The product is now called Ahrefs Free.
- **Confirmed.** Geogrid.dev scans at ₹0: 3×3 grid, three checks a day with no account; a free account gets 200 credits once, then 50 a month — [Geogrid](https://geogrid.dev/tools/local-rank-check). India is still not named. Paid plans start at $24 a month ([Geogrid home](https://geogrid.dev/)); `/pricing` returns 404.
- **Could not check.** "~₹1,330/mo" for Limelit Open is the report's own estimate of model API cost ($14 × ₹95), not a vendor price.

Report-only claims:
- **Confirmed.** DataForSEO SERP $0.0006 standard ($0.60 per 1,000), $0.0012 priority, $0.002 live — [SERP pricing](https://dataforseo.com/pricing/serp/google-organic-serp-api).
- **Refined.** DataForSEO search volume: $0.06 per task standard, $0.09 live, up to 1,000 keywords, with $1 free credit. The report's $0.05 did not appear on this page — [Keyword Planner API](https://dataforseo.com/keyword-planner-api).
- **Confirmed.** Keywords Everywhere Bronze $7 a month, $84 billed annually, 100,000 credits a year, credits expire after one year — [Keywords Everywhere](https://keywordseverywhere.com/pricing.html). ₹7,976 still holds.
- **Confirmed.** Local Falcon pay-as-you-go credits $0.05 and never expire, bought from the dashboard; 100 free credits at sign-up; subscriptions from $24.99 a month — [Local Falcon](https://www.localfalcon.com/pricing). A 5×5 scan is 25 credits, $1.25, ₹119. Works "everywhere in the world" in "any language", vendor's claim — [Local Falcon KB](https://www.localfalcon.com/knowledge-base/kb4-what-localities-does-this-rank-scanner-work-in).
- **Confirmed.** Rankscale Essentials $17 a month, yearly only (list $20), 120 credits, up to 480 answers; Pro is $99 — [Rankscale](https://rankscale.ai/pricing).
- **Confirmed.** Otterly Lite $29 a month, 15 prompts, 15% off annually (about $25, my arithmetic); AI Mode and Gemini are paid add-ons; "Unlimited Countries & Languages" — [Otterly](https://otterly.ai/pricing).
- **Confirmed.** Ahrefs Starter $29 — [Ahrefs pricing](https://ahrefs.com/pricing). 250 rows per report, no exports, 25 rows in Top pages — [Ahrefs help](https://help.ahrefs.com/en/articles/9419051-about-ahrefs-starter-plan).
- **Confirmed.** AITLAS ₹999 a month plus 18% GST (₹7,999 billed yearly), and a ₹0 free plan — [AITLAS](https://aitlas.shiprocket.in/pricing). The free and Starter plans track only 2 AI platforms.
- **Confirmed.** Serper 2,500 free queries; $50 for 50,000 credits ($1 per 1,000), credits valid for six months — [Serper](https://serper.dev/).
- **Confirmed.** SerpApi 250 free searches a month; Starter $25 for 1,000 — [SerpApi](https://serpapi.com/pricing).

India pricing: rupee amounts appeared only on AITLAS and on the Presence Scout blog. No other saved page in the set contained ₹, INR or Rs.

### Inferences
- Budget in dollars. The page's ₹0 and ₹4,750 rows do not move.
- Ahrefs' listed paid plans start at Lite $129, so Starter at $29 is shown lower on the page and not in the main table. That does not change the advice to skip it.

### Gaps
- Checkout may localise currency or add tax. Not tested, since accounts and forms were out of bounds.
- GST treatment of foreign SaaS bought by this business is unchecked.

## GitHub facts

### Takeaway
The page's OpenSEO warnings stand. #362 and #377 are both open. Star counts moved only slightly and no project was archived.

### Cited Findings
- **Confirmed.** [#362](https://github.com/every-app/open-seo/issues/362) live checks report no position below about organic 12: open, last updated 8 Oct 2026.
- **Confirmed.** [#377](https://github.com/every-app/open-seo/issues/377) Cloudflare free plan fails after about 40 pages: open, last updated 20 Oct 2026.
- **Confirmed.** [#294](https://github.com/every-app/open-seo/issues/294) DataForSEO-free mode: still open, so "front end to DataForSEO" holds.

| Repo | Stars (report) | Stars now | Forks | Licence | Latest release | Archived |
|---|---|---|---|---|---|---|
| [open-seo](https://github.com/every-app/open-seo) | 25,824 | 25,853 to 25,856 | 3,529 | MIT | v0.1.22, 31 Oct 2026 | No |
| [crawlseo](https://github.com/crawlseo/crawlseo) | 659 | 659 | 94 | MIT | v0.3.5, 26 Oct 2026 | No |
| [SiteOne](https://github.com/janreges/siteone-crawler) | 989 | 989 | 92 | MIT | v2.5.1, 27 Jun 2026 | No |
| [squirrelscan](https://github.com/squirrelscan/squirrelscan) | 301 | 301 | 32 | MIT | v0.0.149, 31 Oct 2026 | No |
| [SerpBear](https://github.com/towfiqi/serpbear) | 2,153 | 2,153 | 316 | MIT | v3.1.2, 30 Oct 2026 | No |
| [Limelit Open](https://github.com/limelit-co/open) | 255 | 261 | 171 | Apache-2.0 | v0.1.0-rc.14, 1 Oct 2026 | No |
| [marketingskills](https://github.com/coreyhaines31/marketingskills) | not given | 57,604 | 8,484 | MIT | v2.14.0, 30 Oct 2026 | No |
| [claude-seo](https://github.com/AgriciDaniel/claude-seo) | not given | 24,758 | 3,291 | MIT | v2.5.0, 22 Oct 2026 | No |
| [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) | not given | 54,535 | 5,886 | Apache-2.0 | v1.12.0, 22 Oct 2026 | No |
| [Suganthans-GSC-MCP](https://github.com/Suganthan-Mohanadasan/Suganthans-GSC-MCP) | not given | 169 | 40 | Apache-2.0 | v2.5.1, 27 Aug 2026 | No |

- **Confirmed.** `seo-audit`, `ai-seo` and `schema` all exist in [marketingskills/skills](https://github.com/coreyhaines31/marketingskills/tree/main/skills).
- **Confirmed.** Benchmark on the page: no-skill baseline 73.0, best entrant 84.9, variance about ±8, medians of 3 runs — [seo-skill-bench](https://raw.githubusercontent.com/aleclindz/seo-skill-bench/main/README.md).

### Inferences
- SiteOne's last release is four months old while the rest shipped this month. Its last push was 27 Sep 2026, so it is quieter, not abandoned.
- Limelit Open is still at release candidates, with an odd fork-to-star ratio. The page's "once AI cites us" timing leaves room to re-check.

### Gaps
- Code was not read or run. These are metadata only.
- The page's claims about rankme.fast, Ryze, notfair and cnych/seo-mcp were outside this list and were not re-checked.

## Business Profile rules

### Takeaway
The page's rules are correct as global rules. No India-specific rule turned up: en-IN differs from en in wording and spelling only, on the points that matter here. India is a supported country. Three limits are missing from the page: 20 service areas, about two hours' drive, and no radius.

### Cited Findings
- **Confirmed.** "Google asks for a phone number or a website": "Provide a phone number ... or provide a website" — [Guidelines](https://support.google.com/business/answer/3038177?hl=en-IN).
- **Confirmed.** Plain name, no keywords: the name should reflect the real-world name, and details belong in other fields — [Guidelines](https://support.google.com/business/answer/3038177?hl=en-IN).
- **Confirmed.** Hide the address for service-area businesses: "you should hide your business address from customers" — [Guidelines](https://support.google.com/business/answer/3038177?hl=en-IN). Stronger on the video page: "do not add your business address" — [Video](https://support.google.com/business/answer/14271705?hl=en-IN).
- **Confirmed.** Virtual offices don't qualify. A rented postal address not operated from is ineligible, and service-area businesses "can't list a 'virtual' office unless that office is staffed during opening hours" — [Guidelines](https://support.google.com/business/answer/3038177?hl=en-IN).
- **Confirmed.** Video rules: captured live, unedited with no breaks, at least 30 seconds, from a mobile device through the profile. No bank, tax or ID numbers, no private info, no other people's faces — [Video](https://support.google.com/business/answer/14271705?hl=en-IN).
- **Confirmed.** Video content for a service-area business: landmarks at the address, then tools, equipment or branded apparel, then doing a service or showing a document such as a permit, invoice or utility bill matching the profile name — [Video](https://support.google.com/business/answer/14271705?hl=en-IN). Running from home is allowed, using neighbourhood landmarks.
- **Confirmed.** "We found no India-specific rules." The name, address, verification and video pages were compared at hl=en-IN and hl=en. A search of the en-IN text found no mention of India, GST, PAN or Aadhaar. India is on the [supported countries list](https://support.google.com/business/answer/6270107?hl=en-GB). The two versions differ in wording: en-IN says a business with no "permanent on-site signage" should be a Service Area Business, while en says one with no "physical location" should.
- **Confirmed.** 60 days for the API, in the sense above — [API prerequisites](https://developers.google.com/my-business/content/prereqs).
- **New.** Up to 20 service areas, set by city, postcode or other area. No radius. Overall area should be no more than about two hours' drive from base. "Cleaning services" is Google's own example of a Service Area Business, and such a business gets one profile for the whole area — [Service areas](https://support.google.com/business/answer/9157481?hl=en-IN).
- **New.** Google's guide says Business Profiles "can help your products and services to be visible in both AI responses and other Google Search results" — [AI guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).
- Reported, not official: a local knowledge panel appearing as an AI Overview, 17 Sep 2026 — [Search Engine Roundtable](https://www.seroundtable.com/google-local-knowledge-panel-ai-overview-42105.html).

### Inferences
- Nine Tricity towns fit well inside 20 service areas and two hours from Kharar.
- The en-IN signage wording suggests Clean Tank should be a service-area business unless the Kharar office has permanent signage and serves visitors.

### Gaps
- The en-IN and en help texts appear to be different versions, so "no India difference" rests on the sections compared.
- Whether Google enforces anything differently in India is not knowable from help pages.
- Tests of government ID verification came only from a search summary of Search Engine Roundtable, unread at source, so treat as unconfirmed.

## Search Console and Keyword Planner

### Takeaway
All page claims hold. Google's eligibility line is still in the guide, word for word as the report quotes it. The low-spend ranges claim has no Google source.

### Cited Findings
- **Confirmed.** Generative AI report: rolled out to all sites by 31 Aug 2026, with impressions by pages, countries, dates and devices. No clicks or query dimension are listed. "Not seeing the report?" is usually too few impressions — [GSC help](https://support.google.com/webmasters/answer/16984139?hl=en-IN). The page's "that's normal" is fair. Covers AI Overviews and AI Mode.
- **Add.** A missing report may also mean the site was excluded from Search generative AI features — [GSC help](https://support.google.com/webmasters/answer/16984139?hl=en-IN). The control is site-wide in Search Console — [Control what you share](https://developers.google.com/search/docs/crawling-indexing/control-what-you-share).
- **Confirmed.** Eligibility line: "a site must be included in Search generative AI features in Search Console to be eligible for display in generative AI features on Google Search" — [AI guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), last updated 10 Jul 2026.
- **Confirmed.** Domain property advice: the branded filter is limited to top-level properties with enough query volume, and was extended to all eligible sites on 11 Mar 2026. Classification is by an internal AI-assisted system — [Search Central blog](https://developers.google.com/search/blog/2025/11/search-console-branded-filter). URL path and subdomain properties are excluded. Definition of branded queries: [GSC tasks help](https://support.google.com/webmasters/answer/17010961?hl=en-IN).
- **Confirmed.** Keyword Planner billing: "You must enter your billing information and complete your account setup" — [Keyword Planner help](https://support.google.com/google-ads/answer/7337243?hl=en-IN).
- **Could not check.** Low-spend accounts seeing ranges: neither [Keyword Planner help](https://support.google.com/google-ads/answer/7337243?hl=en-IN) nor [forecast help](https://support.google.com/google-ads/answer/3022575?hl=en-IN) mentions it. The source stays the old Search Engine Land article, which I did not open because that site blocked me. The page's "nobody knows the threshold" is consistent with this.
- **Partly confirmed.** "API access is gated": developer tokens sunset on 9 Sep 2026, keyword research depends on permissible use, and brand verification is required before Basic access — [Access levels](https://developers.google.com/google-ads/api/docs/api-policy/access-levels). The page text lists the planning services, but I did not confirm from the table which access level blocks them.

### Inferences
- Search Console inclusion is worth checking at launch as the page says. Nothing read states what the default is for a new property.

### Gaps
- Default state of the generative AI control is undocumented in pages read.
- Hindi 1023, Punjabi 1110 and the geo IDs were not re-checked.

## Evidence claims in section 8

### Takeaway
All six numbers match their sources. Three need a caveat: 97% and 300,000 come from different studies, the brand correlation is from May 2025, and "mostly US" is not stated by BrightLocal.

### Cited Findings
- **Confirmed.** 300,000 domains: "nearly 300,000 domains", "no correlation between AI citations and LLMs.txt", page dated 15 Oct 2026 — [SE Ranking](https://seranking.com/blog/llms-txt/). Only 10.13% had the file.
- **Confirmed, with scope.** 97%: of about 38,000 valid files among 137,210 domains, 97% saw no requests in May 2026 — [Ahrefs](https://ahrefs.com/blog/llmstxt-study/). The sample is Ahrefs Web Analytics users. The page's single table row reads as one study; it is two.
- **Confirmed.** 0.664 vs 0.218: Spearman, 75,000 brands, AI Overviews only, published 26 May 2025 — [Ahrefs](https://ahrefs.com/blog/ai-overview-brand-correlation/). It is about 17 months old. I found no update.
- **Confirmed, with detail.** Schema: 1,885 pages against 4,000 controls; AI Overviews −4.6%, statistically significant; AI Mode +2.4%; ChatGPT +2.2% — [Ahrefs](https://ahrefs.com/blog/schema-ai-citations/). "No lift" is correct, and the AI Overviews move was a small real drop that Ahrefs could not explain.
- **Confirmed.** 28.6%: google.com (Google Business Profile) 28.63% of citations, in 94.17% of businesses. 42%: business sites. 1,967,762 citations, 200,875 non-branded prompts, 1,342 locations — [BrightLocal](https://www.brightlocal.com/research/local-ai-visibility-study/), dated 16 Sep 2026.
- **Could not confirm.** "Mostly US": BrightLocal's methodology gives no country mix. The source list (Yelp, Mapquest, BBB, Angi) points that way, but that is inference.
- **Confirmed.** "ChatGPT relies little on it": "it's hardly used by ChatGPT", with ChatGPT's "relationships with Yelp and Bing" — [BrightLocal](https://www.brightlocal.com/research/local-ai-visibility-study/).
- **Confirmed.** "Reappears about half the time": 50% persistence for ChatGPT and AI Mode, 58% for AI Overview — [BrightLocal](https://www.brightlocal.com/research/local-ai-visibility-study/).
- **Confirmed.** 77%: ChatGPT 77.32%, Gemini 16.01%, Perplexity 3.6%, Copilot 1.7%, Claude 1.37%, September 2026, the latest month published — [StatCounter](https://gs.statcounter.com/ai-chatbot-market-share/all/india).
- **Confirmed.** Report's search share: Google 96.69%, Bing 1.89%, September 2026 — [StatCounter](https://gs.statcounter.com/search-engine-market-share/all/india).
- **Confirmed.** Justdial 25 of 48 Indian answers, 0 of 12 international: Perplexity 10, Gemini 9, ChatGPT 6, Claude 0; 1 Sep 2026 through DataForSEO's API — [Nico Digital](https://www.nicodigital.com/seo/ai-engines-local-business-search-test/).
- **Confirmed.** FAQ rich results: "will no longer appear in Google Search starting May 7, 2026" — [Search updates](https://developers.google.com/search/updates).
- **Confirmed.** "Google says it's still SEO": "optimizing for generative AI search is optimizing for the search experience, and thus still SEO" — [AI guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).
- **Could not check.** "Engines lift direct answers" has no source in the set read. Google's guide says chunking content isn't required and you can ignore it — [AI guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).
- **Add to Brand mentions.** Google says seeking inauthentic mentions "isn't as helpful as it might seem" — [AI guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).
- **Add to llms.txt.** Google says Search ignores these files, and they "neither harm nor help" — [AI guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide). Skip stands.

### Inferences
- The "Plain-sentence facts" row is the weakest row on the table. Its verdict is harmless, but its evidence cell should be softened or sourced.
- Split the llms.txt row's wording: "no link to citations across about 300,000 domains (SE Ranking); 97% of files got no requests in a month (Ahrefs)".
- Change "mostly US" to "US-style directories" or similar, unless the original report writer holds a source for it.

### Gaps
- No study of Hindi or Punjabi citations was found.
- StatCounter's October 2026 data is not out yet.

## AEO and GEO news from October 2026

### Takeaway
Nothing changes a recommendation. The one item to act on is small: do not add a blanket AI-training opt-out to robots.txt, because of a Gemini side effect.

### Cited Findings
- 30 Oct 2026: Google plans to support a shared AI training control in robots.txt, aiming for 2027. A policy-token opt-out would count as disallowing Google-Extended unless Google-Extended is explicitly specified, and "Websites that specifically allow Google-Extended are eligible to appear in responses and receive clicks via grounding in Gemini Apps" — [Search Central blog](https://developers.google.com/search/blog/2026/10/ai-training-control).
- 21 Oct 2026: the control documentation now lists the Search generative AI control — [Search updates](https://developers.google.com/search/updates).
- 24 Sep 2026: web multimodal Search performance reporting added; the generative AI report filters by it — [Search Central blog](https://developers.google.com/search/blog), [GSC help](https://support.google.com/webmasters/answer/16984139?hl=en-IN).
- No confirmed ranking update in October. The latest entries are the September 2026 spam update (24 Sep, 13 days 16 hours) and the May 2026 core update — [Search Status](https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history). Volatility around 24 Oct is reported but unconfirmed — [Search Engine Roundtable](https://www.seroundtable.com/video-10-30-2026-42418.html).
- Other October documentation changes (spam, URL structure, Indexing API quota, UGC data, gen AI content) carry nothing for this page — [Search updates](https://developers.google.com/search/updates).
- The same Roundtable recap has the headline "Over 80% Of Google Searches Have AI Overviews & Growing" — [Search Engine Roundtable](https://www.seroundtable.com/video-10-30-2026-42418.html). Headline only, not read at source, so do not use it.

### Inferences
- When robots.txt is reviewed for launch, keep Google-Extended allowed if Gemini citations matter, which they do given Gemini's 16% of India's measured AI referrals.

### Gaps
- Coverage of October news relied on Google's own pages plus Search Engine Roundtable. Search Engine Land was blocked and vendor newsletters were not used.
- A search result mentioned Google's Q3 earnings coverage on AI Mode monetisation; it could not be read because Search Engine Land blocked the load.
