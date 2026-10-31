# Free and cheap classic SEO tools for Clean Tank Services (Chandigarh Tricity / Punjab)

Check date for everything below: 2026-10-31. INR conversions use ECB-based rates of 30 Oct 2026: US$1 = ₹94.95, £1 = ₹127.22, €1 = about ₹106 — [Frankfurter API](https://api.frankfurter.dev/v1/latest?base=USD&symbols=INR,GBP,EUR). INR figures are my arithmetic, before GST and card FX fees.

Evidence labels used in the tables:
- **[V]**: read from the vendor's own live page or docs today.
- **[3P]**: third-party source only. The vendor page would not load or did not state it. Treat as unconfirmed.
- **[Test]**: my own live test from this server, which geolocates to [India](https://ipinfo.io/country).

## First-party Google and Microsoft tools: what are the limits, and how do you get exact Keyword Planner volumes cheaply?

### Takeaway
Everything first-party is free, and for one local site none of the API quotas will ever bind. Keyword Planner is the weak spot. Google publishes no spend threshold for exact volumes, Ads API keyword services now need Basic access with brand verification, and a pay-as-you-go API or a US$7/month extension is the cheapest legitimate route to numbers. FAQ rich results are gone (since May 2026), which matters for any schema plan.

### Cited Findings

**Search Console (GSC)**
- API quotas: Search Analytics 1,200 queries/min per site and per user, 30M/day per project. URL Inspection 2,000/day and 600/min per site. Other resources 20 QPS and 200 QPM per user — [Google, usage limits](https://developers.google.com/webmaster-tools/limits) [V]
- Search Analytics returns at most 25,000 rows per request (page with `startRow`) and exposes a maximum of 50K rows per day per search type, sorted by clicks. Data is typically available after 2 to 3 days — [Google, Getting all your data](https://developers.google.com/webmaster-tools/v1/how-tos/all-your-data) [V]
- Bulk export to BigQuery: the export itself is free and BigQuery usage is billed — [Google Search Central blog](https://developers.google.com/search/blog/2023/02/bulk-data-export). It includes all performance data except anonymized queries — [Search Console Help](https://support.google.com/webmasters/answer/12918484?hl=en) [V]. Anonymized rows arrive aggregated per site or URL per day, with an empty query field — [AWR](https://www.advancedwebranking.com/blog/access-more-anonymized-google-search-console-data), [Search Engine Journal](https://www.searchenginejournal.com/get-started-bigquery-queries/505149/) [3P]
- BigQuery sandbox: no card or billing account, 10 GiB lifetime storage (deleting data does not restore it), 1 TiB of queries per month, tables expire after 60 days — [Google Cloud](https://docs.cloud.google.com/bigquery/docs/sandbox) [V]. Third-party guides quote different free query allowances ([2 TiB](https://advancedwebranking.com/blog/gsc-bulk-data-export-bigquery-basics-for-better-data), 10 TB). Prefer Google's 1 TiB figure.
- Generative AI performance report launched June 2026 — [Search Central](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports). It covers impressions from AI Overviews and AI Mode by page, country, date and device, is available for all sites worldwide as of 31 Aug 2026, may not appear with too few AI impressions — [Search Console Help](https://support.google.com/webmasters/answer/16984139?hl=en) [V]. It has no query data — [Search Engine Roundtable](https://www.seroundtable.com/google-search-console-ai-mode-queries-41821.html)
- AI Mode has counted in the main Performance totals since 16 June 2025 and cannot be broken out there — [Search Engine Land](https://searchengineland.com/google-ai-mode-traffic-data-search-console-457076), [Search Engine Land](https://searchengineland.com/google-search-console-to-show-ai-mode-performance-but-you-wont-be-able-to-break-it-out-455992)
- Branded queries filter was announced Nov 2025 — [Search Central](https://developers.google.com/search/blog/2025/11/search-console-branded-filter). It expanded to all eligible sites in 2026, works on domain properties only and needs enough query volume. Dates conflict: [Search Engine Land](https://searchengineland.com/google-search-console-branded-queries-filter-expands-471387) and [SEO Sherpa](https://seosherpa.com/google-expands-search-console-branded-queries-filter-to-all-eligible-sites/) say March 2026, another secondary source says April.
- Other recent additions: [custom annotations](https://developers.google.com/search/blog/2025/11/custom-chart-annotations) (Nov 2025), [platform properties for social and video](https://developers.google.com/search/blog/2026/07/platform-properties-social-video-guide) (Jul 2026), [web multimodal reporting](https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc) (Sep 2026)

**Keyword Planner and Ads API**
- Google's help says you must complete account setup with billing information to access basic features like keyword ideas — [Google Ads Help](https://support.google.com/google-ads/answer/7337243) [V]. So billing details are needed; I found no Google statement that a purchase is.
- Low-spend or heavy-use accounts can see buckets: 0, 1–100, 100–1K, 1K–10K, 10K–100K, 100K–1M, 1M+. Google never said what counts as low spend — [Search Engine Journal](https://www.searchenginejournal.com/googles-keyword-planner-tool-providing-limited-data-low-spending-advertisers/170837/), [Search Engine Land](https://searchengineland.com/google-officially-throttling-keyword-planner-data-low-spending-adwords-accounts-255795). Both date from about 2016.
- Current thresholds are blog estimates only: "$100+/month" and "$1-5/day" appear with no Google source — [search summary sources: thestacc](https://thestacc.com/blog/google-keyword-planner-guide/), [shoutmeloud](https://www.shoutmeloud.com/find-exact-google-keyword-planner-search-volume.html) [3P, low confidence]. A claim that 3 to 4 months of continuous history is needed was an unverified user comment — [Social Media Today](https://www.socialmediatoday.com/news/googles-keyword-planner-is-changing-and-not-necessarily-for-the-better/449835/)
- Google's own suggested workaround was the forecasting feature — [Search Engine Land](https://searchengineland.com/google-keyword-planner-forecasting-258053), [Google Ads Help](https://support.google.com/google-ads/answer/3022575?hl=en)
- Close variants are merged ("car" and "cars") and volumes are approximate, updated monthly, with up to 4 years of monthly history and up to 10 locations and one language per request — [Google Ads API docs](https://developers.google.com/google-ads/api/docs/keyword-planning/generate-historical-metrics) [V]
- Punjabi is a supported Ads language: Hindi = 1023, Punjabi = 1110 — [Google language codes CSV](https://developers.google.com/static/google-ads/api/data/tables/languagecodes.csv) [V]
- Geo targets for the service area, from the 2026-10-06 file. Chandigarh city 1007801, Sahibzada Ajit Singh Nagar city 9050511, Mohali sub-district 9181709, Panchkula city 9299157, Kharar city 9299196, Ludhiana 1007802, Jalandhar 9040175, Amritsar 1007800, Patiala 9040173, Punjab state 20466, Chandigarh UT 21342. I found no entry named Zirakpur — [Google geo targets CSV](https://developers.google.com/static/google-ads/api/data/geo/geotargets-2026-10-06.csv) [V]
- The language setting reflects the user's Google language setting, not the language of the keyword text — [Google Ads Help](https://support.google.com/google-ads/answer/6325025) (via search summary; confirm)
- Ads API: developer tokens were sunset on 9 Sep 2026 and access is now managed per Google Cloud project. Test 15,000 ops/day on test accounts only; Explorer 2,880/day on production; Basic 15,000/day; Standard unlimited. Explorer **blocks** KeywordPlanService and KeywordPlanIdeaService, so keyword data needs Basic, which requires Cloud brand verification first — [Google Ads API access levels](https://developers.google.com/google-ads/api/docs/api-policy/access-levels) [V]

| Route to volumes | Cost | Notes |
|---|---|---|
| Keyword Planner, no spend | Free, billing details on file | Ranges likely. City and Punjabi targeting available |
| Keywords Everywhere Bronze | US$7/mo, billed annually at US$84 (₹7,976), 100,000 credits/yr, 1 credit per keyword, credits expire after a year — [V](https://keywordseverywhere.com/pricing.html) | Volume, CPC, competition, 12-month trend |
| DataForSEO | US$50 minimum top-up (₹4,748), balance never expires — [V](https://dataforseo.com/apis/serp-api/pricing), [FAQ](https://dev_wp.dataforseo.com/faq). Google Ads volume is US$0.05 to 0.09 per task of up to 1,000 keywords; DataForSEO's own pages disagree — [V](https://dataforseo.com/keyword-planner-api) | Cheapest bulk route. Live endpoint capped at 12 requests/min — [docs](https://docs.dataforseo.com/v3/keywords_data/google_ads/search_volume/live.md) |
| Own Ads API (Basic) | Free | Needs brand verification. Poor effort-to-value for one site |

**Trends**
- Trends API is alpha: applications open, not open to everyone, prioritising a specific use case. Five-year rolling window; daily, weekly, monthly and yearly aggregation; countries and sub-regions; consistent scaling; dozens of terms versus eight on the website. No published quota or price — [Google](https://developers.google.com/search/apis/trends) [V]. Access is called invite-only in one June 2026 source — [Trends MCP](https://www.trendsmcp.ai/google-trends-api-pricing-comparison). [pytrends is reported dead](https://dev.to/esteban_ortega/pytrends-is-dead-heres-how-to-get-google-trends-data-in-2026-1a18) [3P]

**Business Profile APIs**
- All Performance, Account Management and related APIs 300 QPM; Business Information 300 QPM, edits 10/min per profile. Quota 0 means not approved — [Google](https://developers.google.com/my-business/content/limits) [V]
- Eligibility: profile verified and active for 60+ days, a website on the profile, applicant is listed owner or manager, Organization account, Cloud project, contact form — [Google](https://developers.google.com/my-business/content/prereqs) [V]
- Performance API offers daily metric time series plus **monthly search keyword impressions** ("the search keywords used to find a business in search or maps") — [Google](https://developers.google.com/my-business/reference/performance/rest) [V]

**Speed and structured data**
- PageSpeed Insights API works with or without a key; a key is recommended for automated use — [Google](https://developers.google.com/speed/docs/insights/v5/get-started) [V]. Quota 25,000/day and 400 per 100 seconds — [PostHog docs](https://posthog.com/docs/data-warehouse/sources/google-pagespeed-insights), [Unlighthouse](https://unlighthouse.dev/learn-lighthouse/pagespeed-insights-api/rate-limits) [3P; Google's page does not state it]
- CrUX API: free, 150 queries/min per project, quota cannot be bought up, key required, 28-day rolling data updated daily around 04:00 UTC, about two days behind — [Chrome docs](https://developer.chrome.com/docs/crux/api) [V]
- Supported rich results include Local business, Review snippet, Organization, Breadcrumb, Article and Video. **FAQ, HowTo and Service are not listed** — [Google](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) [V]. FAQ rich results ended on 7 May 2026 and the docs were removed on 15 June 2026. A review snippet guideline on fake and undisclosed incentivized reviews was added on 24 July 2026 — [Google updates log](https://developers.google.com/search/updates) [V]
- [Schema Markup Validator](https://validator.schema.org/) is live [V]. The updates log shows no 2026 change to the Rich Results Test — [Google](https://developers.google.com/search/updates) [V]

**Bing, Yandex, market share**
- India search share, Sept 2026: Google 96.69%, Bing 1.89%, DuckDuckGo 0.62%, Yahoo 0.56%, Yandex 0.16% — [StatCounter](https://gs.statcounter.com/search-engine-market-share/all/india) [V]
- Bing Webmaster Tools is free. Keyword Research shows impressions and trends with related keywords and a country filter — [Rank Math glossary](https://rankmath.com/?p=1217437), [Ahrefs glossary](https://ahrefs.com/seo/glossary/bing-webmaster-tools) [3P; Bing's help URL returned 404]
- Bing's AI Performance report: beta Feb 2026 with citations and grounding queries — [Search Engine Land](https://searchengineland.com/bing-webmaster-tools-ai-performance-report-468751). Intents, Topics, Citation Share and Compare came in June 2026 — [Bing blog](https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/). Topics Portfolio arrived Oct 2026 — [Search Engine Land](https://searchengineland.com/bing-webmaster-tools-ai-performance-report-new-topics-portfolio-495584). It has no click data — [Momentic](https://momenticmarketing.com/blog/bing-wmt-ai-performance-report)
- IndexNow: POST up to 10,000 URLs, key file at root recommended — [IndexNow docs](https://www.indexnow.org/documentation) [V]. Listed endpoints are Amazon, Bing, Naver, Seznam, Yandex, Yep; Google is not listed; limits undisclosed, 429 means back off; submission does not guarantee indexing — [IndexNow FAQ](https://www.indexnow.org/faq) [V]
- Yandex Wordstat defaults to a global view and is web-login only; its API is in preview — [Yandex Cloud](https://yandex.cloud/en/docs/search-api/concepts/wordstat), [Yandex](https://yandex.com/support/direct/en/keywords/wordstat.md). I found nothing India-specific.

**Analytics alternatives to GA4**

| Tool | Free tier | Cheapest paid | Note |
|---|---|---|---|
| PostHog (already in this repo) | 1M analytics events, 5K recordings monthly — [V](https://posthog.com/pricing) | Usage-based | Paused until `isLive` per `CLAUDE.md` |
| Microsoft Clarity | "Free forever", no traffic limits — [V](https://clarity.microsoft.com/) | None | Session replay and heatmaps |
| Umami Cloud | 100K events/mo, 1 site, 6 months retention — [V](https://umami.is/pricing) | US$20/mo (₹1,899) | |
| Plausible | No free hosted tier seen | US$9/mo (₹855), 10k pageviews — [V](https://plausible.io/) | |
| Vercel Web Analytics | 50,000 events/mo on Hobby — [V](https://vercel.com/docs/analytics/limits-and-pricing) | US$0.03 per 1K on Pro | |

### Inferences
- For a pre-launch local site, the GSC API or UI is enough. BigQuery export solves a scale problem this site will not have, and it does not reveal anonymized queries. The 60-day sandbox expiry also defeats long-term history.
- Set up GSC as a **domain property** from day one so the branded filter can apply later.
- The best free keyword source after launch may be the GBP Performance API's monthly search keywords, because it shows real Maps and Search demand. It needs a profile 60+ days old, so the clock starts at GBP verification.
- Spending on a small Search campaign is worth doing only if the ads are wanted anyway. It would also yield real search terms, but no source confirms a safe minimum that unlocks exact volumes.
- Remove any FAQ rich result expectation from plans. FAQ content may still help readers and AI answers, but it earns no Google rich result. Use LocalBusiness, Organization, Breadcrumb and genuine Review markup as the priority set.
- Bing and IndexNow are a one-time setup with small returns (under 2% share in India), though Bing's report is the only free source of grounding-query data in this list. Skip Yandex Webmaster as a priority; IndexNow reaches Yandex anyway.

### Gaps
- No current Google source on the spend threshold, or on whether Ads API results are bucketed for inactive accounts. Only a live account test will settle it, including on India INR billing.
- I could not confirm whether Keyword Planner's location picker accepts every geo type above, such as sub-districts.
- GSC help on anonymized-query thresholds and the UI row cap did not load. Hourly data appears in secondary sources but is not in the API page I read.
- Whether GSC bulk export runs on a sandbox project is unconfirmed; one [guide](https://trevorfox.com/2023/03/google-search-console-bulk-export-for-bigquery/) points to billing-enabled projects.
- Bing's official help pages for keyword research and backlinks were unreachable.

## Freemium keyword tools: current free limits and cheap plans

### Takeaway
Under US$20/month, the practical set is Keyword Surfer (free, covers India), Keywords Everywhere Bronze (US$7), Answer Socrates (3 free a day), Keyword Tool's free autocomplete and AlsoAsked Basic (US$12). Ahrefs Starter (US$29) and Mangools sit above budget. Semrush and Keyword Tool Pro are far above it, and several low-priced figures in circulation are stale.

### Cited Findings

| Tool | Free | Cheap paid | India / language notes | Evidence |
|---|---|---|---|---|
| Ahrefs Free | Unlimited verified sites, Site Audit 5K crawl credits per project per month, Site Explorer 1K backlinks and keywords visible, Web Analytics 1M events per project, 1 AI Content Helper doc/mo. **Own verified sites only. No Keywords Explorer listed** — [ahrefs.com/free](https://ahrefs.com/free), [webmaster-tools](https://ahrefs.com/webmaster-tools) | Starter US$29/mo (₹2,754) | Keyword Generator form covers Google, Bing, YouTube, Amazon and "hundreds of locations", limits not stated — [V](https://ahrefs.com/keyword-generator). 20 ideas per search per one review — [3P](https://rankdots.com/blog/free-keyword-research-tools) | V |
| Ahrefs Starter | n/a | 200 credits/mo, 1 unverified project, 1 month of history, 250 rows per report, no exports, 50 tracked keywords, monthly renewal only — [help](https://help.ahrefs.com/en/articles/9419051-about-ahrefs-starter-plan). A search excerpt said 100 credits, so the plan may have changed. Lite is US$129/mo — [pricing](https://ahrefs.com/pricing) | Over budget | V, with conflict |
| Semrush | 1 demo project, 10 reports/day, no card | US$165.17/mo annual, US$199 monthly — [V](https://www.semrush.com/pricing/) | `in` database exists — [Apify, 3P](https://apify.com/bovi/semrush-keyword-scraper?fpr=97nrp4) | V |
| Ubersuggest | Vendor says there is a free plan, a 7-day trial and a Lifetime option; no numbers given — [V](https://neilpatel.com/ubersuggest/) | About US$29/mo, ranging to US$12 by source — [aiproductivity](https://aiproductivity.ai/pricing/ubersuggest/), [Temperstack](https://www.temperstack.com/plans/ubersuggest/) | No INR price found | 3P on limits |
| Mangools | 5 KWFinder lookups per 24h, 10 tracked keywords; 10-day trial | Basic US$49/mo, about US$29.90 annual, 100 lookups/day — [Spike](https://getspike.ai/blog/mangools-pricing-plans-costs/), [tracker](https://ai-price-tracker.pages.dev/pricing/mangools) | Official page renders no prices to a fetcher | 3P |
| KeySearch | 7-day trial, no free plan — [V](https://www.keysearch.co/) | US$24/mo and 200 searches/day in most sources, US$17 in others — [Toolradar](https://toolradar.com/tools/keysearch/pricing), [discount page](https://seo-bargains.pages.dev/keysearch-discount) | | 3P, conflict |
| Keyword Surfer | Free, volume and CPC in Google SERP, ideas with overlap, no caps stated — [V](https://surfer.ai/keyword-surfer-extension/) | n/a | 70 countries, **India included** — [Surfer docs](https://docs.surferseo.com/en/articles/6679368-keyword-surfer-extension-explained) | V |
| Keywords Everywhere | Free tier shows related and PASF widgets and trend charts, volume needs credits — [review](https://www.nichepursuits.com/?p=43603), [Chrome store](https://chrome.google.com/webstore/detail/hbapdpeemoojbophdfndmlgdhppljgmp). Firefox listing implies otherwise | Bronze US$7/mo annual; Silver US$14 (₹1,329) adds SEO Minion — [V](https://keywordseverywhere.com/pricing.html) | When credits end, PASF and related widgets keep working — [V](https://keywordseverywhere.com/pricing.html) | V for paid, 3P for free |
| AnswerThePublic | About 3 searches/day — [wildandfreetools](https://wildandfreetools.com/blog/answer-the-public-alternative-free), [3P] | Starter US$20/mo or US$120/yr (₹11,394) — [V](https://answerthepublic.com/pricing); 100 searches — [help](https://answerthepublic.zendesk.com/hc/en-us/articles/48103194840091) | | V for paid |
| Answer Socrates | 3 searches/day, 500 cluster credits/mo, no card | US$19/mo (₹1,804), 100 searches — [V](https://www.answersocrates.com/) | Not tested for Hindi | V |
| AlsoAsked | Free monthly credits, count unstated | Basic US$12/mo (₹1,139), 100 credits; annual US$144 — [V](https://alsoasked.com/pricing) | "All regions and languages", plus API and MCP | V |
| Glimpse | 10 searches/mo, per a Glimpse-hosted page — [Glimpse](https://meetglimpse.com/software-guides/trend-spotting-websites-tools/) | US$99/mo, $29 and $49 also reported — [OutlierKit](https://outlierkit.com/resources/glimpse-pricing/) | Over budget | 3P mix |
| Keyword Tool.io | Up to 750+ autocomplete suggestions, 120+ languages; volume only sometimes — [V](https://keywordtool.io/) | Starter US$88/mo or US$68 annual, no trial — [V](https://keywordtool.io/pro) | Language selector useful | V |
| Moz | About 10 Keyword Explorer and 10 Link Explorer queries/mo — [Toolsurf and others](https://www.toolsurf.com/moz-pricing-plan-2025-which-moz-pro-plan-is-right-for-you-2026-plans-features-best-deals-compared/). Reset date varies — [Moz Q&A](https://mozdev.nodebb.com/community/q/post/51035) | Moz blocked my fetch | | 3P |

**Autocomplete and People Also Ask data**
- Google's suggest endpoint needs no key and accepts `hl` and `gl`. My run below used `client=firefox`, `gl=in` — [Test](https://suggestqueries.google.com/complete/search?client=firefox&hl=hi&gl=in&oe=utf8&q=pani%20ki%20tanki). It is undocumented, so use it lightly by hand.
- SERP APIs for PAA: Serper 2,500 credits appear to be a one-time sign-up bonus — [Serpent](https://apiserpent.com/blog/free-google-search-api-tested). SerpApi is about 250 searches/month at 50/hour, with one source saying 100 — [Costbench](https://costbench.com/software/web-scraping/serpapi/free-plan/). DataForSEO SERP at about US$0.60 per 1,000 on the standard queue — [3P](https://apiserpent.com/blog/dataforseo-pricing-explained).

### Inferences
- Autocomplete tools matter more than volume tools for this site, because volume data is thinnest for Hindi and Hinglish terms (see the Hindi section). A free stack of Surfer, suggest and AlsoAsked's free credits covers ideation; US$7/month adds usable numbers.
- Do not buy Ahrefs Starter yet. It locks in monthly billing with no exports, and competitor checks can be done with Bing's data and Justdial reading.

### Gaps
- Ubersuggest's official numbers and INR price could not be read. The pricing URL returned 403 and then 404.
- No independent test of Ahrefs, Semrush or Mangools coverage for Tricity Hindi or Punjabi keywords. r/SEO and r/localseo were blocked to my tools, so no community evidence is included anywhere in these notes.
- Whether Keywords Everywhere and DataForSEO return city-level figures for these terms is unconfirmed.

## Technical audit tools: which free tiers are enough?

### Takeaway
The site should stay under 500 URLs across three languages unless area pages multiply, so Screaming Frog free plus Ahrefs Free Site Audit covers crawling at no cost. Seobility's free crawl is now only 100 pages per crawl.

### Cited Findings

| Tool | Free | Paid | Evidence |
|---|---|---|---|
| Screaming Frog | 500 URLs per crawl; the listed difference from paid is the crawl limit | £199/yr per licence (₹25,317) — [V](https://www.screamingfrog.co.uk/seo-spider/pricing/) | V |
| Ahrefs Site Audit | 5K crawl credits per project/mo; only 200-status HTML pages consume credits — [V](https://ahrefs.com/webmaster-tools) | n/a | V |
| Seobility | 1 project, 100 pages per crawl, 10 keywords, 5 daily tool credits | €59.90/mo (₹6,354) — [V](https://www.seobility.net/en/pricing/) | V |
| Sitebulb | No free plan, 14-day Pro trial; Lite 10,000 URLs — [V](https://sitebulb.com/pricing/) | Lite about US$18/mo (₹1,709), Pro about US$42; one source differs — [Capterra](https://www.capterra.com/p/169089/Sitebulb/pricing/), [Subger](https://subger.com/en/service/sitebulb) | Price 3P |
| SEO Minion | v3.20 updated Feb 2026. Reported free tier is mixed, and the Firefox listing ties it to Keywords Everywhere Silver or higher — [Firefox](https://addons.mozilla.org/addon/seo-minion/), [Chrome](https://chromewebstore.google.com/detail/giihipjfimkajhlcilipnjeohabimjhi?hl=gu) | Bundled in KE Silver US$14/mo — [V](https://keywordseverywhere.com/pricing.html) | Mixed |

### Inferences
- Use PSI and Lighthouse before launch, since CrUX will likely have no field data for a new low-traffic origin. Vercel Web Analytics or PostHog would provide real-user signals later.
- Run a Screaming Frog crawl with hreflang checks across en, hi and pa at launch. That matters more here than any paid crawler.

### Gaps
- WebPageTest free limits are unverified. webpagetest.org returned 403, its signup page redirects to Catchpoint pricing, and that now redirects to LogicMonitor. Ownership and free tier need a manual check.
- The Detailed extension and Lighthouse returned no fresh limits data. I have no sourced 2026 facts, so neither is listed in the table.

## Backlinks and competitor research: what is usable for free?

### Takeaway
Bing Webmaster Tools is the only free option found that shows competitor link data without verifying the site. Everything else is capped or domain-level. Local competitors are driven by directory reviews more than links, so this job is low priority.

### Cited Findings
- Bing's Backlinks report shows linking URLs and anchor text. Its Similar Sites tab compares your profile to rivals, and no verification of the competitor site is needed — [Search Engine Land](https://searchengineland.com/bing-webmaster-tools-now-gives-you-competitive-link-data-335485), [Kevin Indig](https://www.kevin-indig.com/a-free-hidden-link-database-in-the-bing-webmaster-tools/), [Search Engine Journal](https://searchenginejournal.com/bing-backlink-research-tool/371054). Depth is below Ahrefs — [review via search](https://ahrefs.com/seo/glossary/bing-webmaster-tools)
- Ahrefs Backlink Checker lists backlink and referring-domain counts for any target, and a free account unlocks DR and UR in the extension. Row and daily caps are not stated — [V](https://ahrefs.com/backlink-checker). Unverified sites in Site Explorer need a paid plan — [V](https://ahrefs.com/webmaster-tools)
- Moz free is about 10 Link Explorer queries/mo — [3P](https://www.toolsurf.com/moz-pricing-plan-2025-which-moz-pro-plan-is-right-for-you-2026-plans-features-best-deals-compared/)
- Common Crawl's web graph is domain-to-domain only, with no page, anchor or nofollow data, published about quarterly — [Indie Hackers](https://www.indiehackers.com/post/how-i-did-backlink-gap-analysis-for-free-with-common-crawl-duckdb-cafa669c54). Free or cheap wrappers exist: [Tom's Link Authority](https://groups.google.com/g/common-crawl/c/hqowTlnTh4w), and [CrawlGraph](https://mcpmarket.com/server/crawlgraph) with 15 free calls/mo or US$99 lifetime [3P]

### Inferences
- Local tank-cleaning sites and small domains may be missing from Common Crawl's useful data. Bing and manual review of who cites competitors are a better fit.

### Gaps
- OpenLinkProfiler: I found no evidence either way on its 2026 status. Treat it as unverified and do not recommend it.
- Semrush's free backlink allowance beyond the 10 daily reports is unconfirmed.

## Local SEO: rank grids, citations, scrapers, reviews and Indian directories

### Takeaway
Rank grids work worldwide at low cost. Geogrid.dev's free tier and Local Falcon's never-expiring pay-as-you-go credits fit best. In the Tricity, Justdial is the directory that visibly matters, with competitors holding hundreds of reviews. IndiaMART comes second. Urban Company is a direct competitor, and it is not a citation source. I found no Sulekha, NoBroker or TradeIndia tank-cleaning pages for the area.

### Cited Findings

**Rank grids**

| Tool | Free | Paid | India |
|---|---|---|---|
| Geogrid.dev | 3 no-account checks/day on a 3×3 grid at 3 km spacing. Free account: 200 credits once, then 50/mo, 5×5 and 7×7, 1 scheduled scan — [V](https://geogrid.dev/tools/local-rank-check) | 13×13 needs a paid plan | Any country with Google Maps; India not named |
| Local Falcon | 100 free credits, no card; 1 credit per pin | US$24.99/mo for 7,500 credits (₹2,373). PAYG US$0.05 per credit (₹4.75), **never expires**; a 5×5 is US$1.25 — [V](https://www.localfalcon.com/pricing) | "Everywhere in the world", any language — [V](https://www.localfalcon.com/knowledge-base/kb4-what-localities-does-this-rank-scanner-work-in) |
| Map Ranking | 200 credits monthly, no card — [V search excerpt](https://mapranking.com/local-rank-tracker/) | | Not stated |
| GTrack | 200 credits, no card | US$19.99/mo — [Wiremo's own review](https://wiremo.co/blog/google-maps-rank-checker/) | Not stated |
| Whitespark Grids | 200 trial credits | US$0.005 per pin (5×5 = ₹12) — [Wiremo](https://wiremo.co/blog/google-maps-rank-checker/) [competitor's review] | Not stated |
| LocalMapRanks | 25 tokens, one 5×5 — [site](https://www.localmapranks.com/) | | Not stated |
| Localo | Free single-position rank checker, 14-day trial; no free plan | US$39/mo annual (₹3,703) — [V](https://localo.com/pricing) | Not stated |
| BrightLocal | 14-day trial, free tools: Local Search Results Checker, AI Visibility Checker, Review Link and Place ID Generator | From US$31/mo annual — [V](https://www.brightlocal.com/pricing/) | Not stated |

- GMB Everywhere: 200K+ users on Chrome. Vendor says category discovery is always free — [gmbeverywhere.com](https://gmbeverywhere.com/alternatives/). A directory claims 5 views/mo across audits — [stork.ai](https://www.stork.ai/en/gmb-everywhere). The conflict is unresolved.

**Citations**
- Whitespark Local Citation Finder free: 1 campaign, 3 searches/day, limited results — [Whitespark](https://www.whitespark.ca/local-citation-finder/). Paid from US$33/mo — [V](https://whitespark.ca/pricing/); other sources say US$39.
- BrightLocal Citation Builder covers about 20 countries; India was not named in what I could read — [BrightLocal blog](https://www.brightlocal.com/blog/citation-builder-launching-ten-new-countries/)

**Scrapers and review data**
- Outscraper: first 500 places and first 500 reviews free every 30 days, then US$3 per 1,000 (₹285) — [V](https://outscraper.com/pricing/)
- Apify: US$5 of usage free each month, recurring, no rollover. Paid from US$19/mo — [V](https://apify.com/pricing). This settles the third-party disagreement on monthly versus one-time.
- Google Places API replaced the US$200 credit with per-SKU free thresholds in March 2025 — [Serpent](https://apiserpent.com/blog/free-google-maps-api) [3P]
- Free review helpers: Localo Review Poster and Response Generator — [V](https://localo.com/pricing); BrightLocal Review Link generator — [V](https://www.brightlocal.com/pricing/)

**Indian directories for this business**

| Directory | Evidence for tank cleaning in the Tricity | Cost signal |
|---|---|---|
| Justdial | Dedicated category pages for [Mohali](https://www.justdial.com/Chandigarh/Water-Tank-Cleaning-Services-in-Mohali/nct-10532933), [Sector 22](https://www.justdial.com/Chandigarh/Water-Tank-Cleaning-Services-in-Chandigarh-Sector-22/nct-10532933) and [mechanised cleaning](https://www.justdial.com/Chandigarh/Mechanised-Water-Tank-Cleaning-Services/nct-11268541). Competitors: A-One about 616–632 reviews, [Shree Balaji 392](https://www.justdial.com/Chandigarh/Shree-Balaji-Water-Tank-Cleaning-Near-Old-Gurudwara-Balongi/0172PX172-X172-210202161101-P8Z8_BZDET), Darshan Singh about 191 | Free listing is default, paid positions by location and category — [Markhub24](https://www.markhub24.com/post/justdial-s-local-search-monetization-model). 54.7M listings, 157.1M reviews, 631,530 paid campaigns at 31 Mar 2026 — [investor deck](https://nsearchives.nseindia.com/corporate/chintan_13042026222656_Investor_Presentation.pdf). Sales pressure and paid-listing complaints exist but are old — [Outlook Business](https://www.outlookbusiness.com/markets/feature/wait-dont-justdial-379), [Voxya](https://voxya.com/consumer-complaints/paid-listing-just-dail/109814) |
| IndiaMART | [Chandigarh category page](https://dir.indiamart.com/chandigarh/water-tank-cleaning-services.html) lists Fixomes, Ketvi; [Busy Bucket listing](https://www.indiamart.com/proddetail/water-tank-cleaning-servicing-22745689891.html) | B2B fit; useful for hospitals, hotels, housing societies. Pricing not checked |
| Urban Company | **Competitor.** Tank cleaning from ₹799, 14K reviews on the overhead listing — [search excerpt](https://www.urbancompany.com/chandigarh-plumbers); listed under plumbers — [UC](https://urbancompany.com/chandigarh-plumbers) | Partner marketplace, not a citation |
| Aajjo | [Chandigarh category page](https://www.aajjo.com/chandigarh/housekeeping-and-cleaning-services/water-tank-cleaning-services) surfaced in search | Unverified |
| Sulekha, NoBroker, TradeIndia | A domain-restricted search found **no** Tricity tank-cleaning pages. Generic lists rate Sulekha for home services, stronger in South India — [Crawlvision and others](https://crawlvision.com/blog/local-citation-building-seo-2026/) [weak, commercially motivated] | Try later |

Local competitors with their own sites include [Safaiwale](https://safaiwale.in/water-tank-cleaning-services-in-chandigarh/), [Grace Cleaning](https://gracecleaning.in/water-tank-cleaning/), [watertankcleaning.co.in](https://watertankcleaning.co.in/water-tank-cleaning-chandigarh-tricity/), [Busy Bucket](https://busybucket.in/water-tank-cleaning-in-chandigarh/), and [KPS](https://kps.co.in/water-tank-cleaning-amc/chandigarh/panchkula), which runs per-town AMC pages.

### Inferences
- Priority order: GBP, Justdial free listing, IndiaMART for B2B, then consistent NAP elsewhere. Evaluate any Justdial paid package on leads, and resist bundled upsells. Sources stress NAP consistency, though most are sellers of citation services.
- A monthly routine fits free tools: one Geogrid 5×5 scan per town (Chandigarh, Mohali, Panchkula, Zirakpur) uses 100 credits, double the 50 free. Rotate towns, or top up with Local Falcon PAYG at about ₹119 per 5×5.
- Avoid incentivised review drives given Google's July 2026 review guideline.

### Gaps
- Justdial 2026 package prices, and independent lead-quality data for it, were not found.
- Sulekha, NoBroker and TradeIndia absence comes from one search and is not proof. Check manually.
- No independent accuracy test of any grid tool in India.
- Citation Finder coverage of Indian sites is unconfirmed.

## Content, briefs, and Hindi, Punjabi and Hinglish keyword research

### Takeaway
Live autocomplete shows that Roman-script Hinglish and Devanagari Hindi both carry "cleaner's phone number" intent, while Gurmukhi shows almost nothing for cleaning. Spelling normalises to "pani". Paid brief tools start above budget apart from thruuu and NeuronWriter, and a manual SERP review will do for a site with this few pages.

### Cited Findings

**Autocomplete test, 31 Oct 2026, `gl=in`** [Test]. Suggestion lists are not volumes. The query was run from an Indian IP with no personalisation.

| Input (hl) | Top signals returned |
|---|---|
| `paani ki tanki saaf` (hi) | Respelled to **pani**: "pani ki tanki saaf karne wale ka number", "...karne wala contact number", "...wala near me", "...ka tarika", "...wala chemical", "...wala powder" |
| `pani ki tanki` (hi) | Mostly purchase noise: "1000 litre price", "500 litre price"; also "kaise saaf karen" |
| `पानी की टंकी साफ` (hi) | "...करने वाले का नंबर", "...करने की मशीन", "...वाली दवा", "...वाला पाउडर", "...का तरीका", "साफ कैसे करें" |
| `water tank cleaning` (en) | "services near me", "tablets", "machine", "liquid"; Nagpur and Pune appear, Tricity does not |
| `water tank cleaning chandigarh` (en) | "price list", "service chandigarh", "services in new chandigarh", "best ... in chandigarh" |
| `water tank cleaning mohali` (en) | "commercial water tank cleaning mohali", "services in mohali price list", "best ... in mohali" |
| `ਪਾਣੀ ਦੀ ਟੈਂਕੀ` (pa) | Roman results dominated by "pani di tanki" Pahari **song lyrics** |
| `ਪਾਣੀ ਦੀ ਟੈਂਕੀ ਸਾਫ` (pa) | **No suggestions** |
| `paani di tanki` (pa) | Same song results |

**Sources on regional keyword data**
- Many Hindi queries are typed in Roman script and may be classified as English, so Keyword Planner alone misses them; research both scripts — [Marketing SEO India](https://www.marketingseo.in/post/seo-for-hindi-websites-strategies-that-truly-work-in-india-s-regional-digital-space) [vendor blog]
- Volume data is thinnest for transliterated, code-switched and regional-script queries; use Trends filtered to India plus GSC query data — [PALVDM](https://palvdm.com/blog/regional-keyword-research-india/) [vendor blog]
- Hinglish research means finding what users actually type, not textbook English equivalents — [DESENO](https://deseno.co.in/keyword-research-india-hinglish/) [vendor blog]
- A claim that Hindi voice search grew 270% could not be traced to Google — [Juno](https://www.junoschool.org/article/voice-search-optimization-india-guide/). Do not reuse it.
- [ContentSERP](https://contentserp.in/keyword-research-tool-india/) advertises a free India keyword tool in 11 languages. Untested vendor claim.

**Brief tools**

| Tool | Free | Cheapest | Evidence |
|---|---|---|---|
| thruuu | One-time 10 credits: up to 10 SERP analyses, 2 briefs | US$13 or US$19/mo by source — [thruuu](https://thruuu.com/blog/thruuu-pricing-explained/), [Toolradar](https://toolradar.com/tools/thruuu/pricing) | 3P on price |
| NeuronWriter | Trial reports conflict | Bronze US$23/mo or about US$19 annual (₹1,804), 2 projects, 25 analyses — [Costbench](https://www.costbench.com/software/ai-seo-tools/neuronwriter/) | 3P |
| Frase | 7-day trial, no card | US$39/mo annual (₹3,703), 10 articles — [V](https://www.frase.io/pricing) | V |
| Surfer | Buttons say "Start for Free", terms unstated | Discovery US$49/mo annual (₹4,653) — [V](https://surfer.ai/pricing) | V |
| Clearscope | No free tier | US$129 to US$189/mo by source — [Rankability](https://www.rankability.com/blog/clearscope-alternatives/index.md) | 3P |

### Inferences
- Priority demand is English plus Hinglish and Devanagari with "number", "contact number" and "near me" modifiers, and English with town plus "price list". Those are lead intent. Content on the site should use the words "pani ki tanki", "tanki saaf karne wala" and "पानी की टंकी साफ करने वाला" naturally, in owner-approved copy.
- "Price list" appearing for both Chandigarh and Mohali suggests price transparency could capture real demand, which needs checking against approved pricing facts.
- Gurmukhi keyword research looks like a dead end at present. Keep Punjabi pages for trust and reach, and measure real demand through GSC after launch before investing further.
- "How to clean", "chemical", "powder" and "tablet" are DIY intents that fit a guide page and possibly the commercial upsell.
- Keyword filters should exclude tank purchase and song terms.

### Gaps
- No published volume for any of these terms was found, including Punjabi. Keyword Planner must be run by the user with Punjabi 1110, Hindi 1023 and the geo IDs above.
- Google's hreflang doc URL returned 404, so `pa-IN` and `hi-IN` handling and Romanised page variants were not checked here.
- Hindi and Punjabi support in NeuronWriter, Frase and Surfer is unverified.

## Next.js and Payload: native Metadata API or next-seo, schema-dts, Payload SEO plugin, next-sitemap, IndexNow on Vercel

### Takeaway
Stay native. The repo already has `generateMetadata`, `sitemap.ts` and `robots.ts`, so next-sitemap adds nothing and next-seo would be only a JSON-LD helper. The real gaps are JSON-LD (no `application/ld+json` found in `src/`) and CMS SEO fields. `schema-dts` and `@payloadcms/plugin-seo` are the additions that make sense.

### Cited Findings
- Repo state checked 31 Oct 2026: Next ^16.4.2, Payload ^3.91.0. `src/app/sitemap.ts` and `src/app/robots.ts` exist; `generateMetadata` is used in `[lang]/page.tsx`, `contact/page.tsx`, `[slug]/page.tsx`. `@payloadcms/plugin-seo`, `next-seo`, `next-sitemap` and `schema-dts` are not in `package.json`; a grep for `application/ld+json` in `src` found nothing — local repo inspection.
- Next's sitemap convention supports `alternates.languages`, output as `xhtml:link` per URL, and `generateSitemaps` exists for splitting — `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/sitemap.md`. `generateMetadata` supports `alternates.languages` for hreflang — `.../04-functions/generate-metadata.md` [V, installed version]
- Next recommends JSON-LD as a `<script>` in `layout` or `page`, and warns that `JSON.stringify` needs `<` replaced with `<` — `.../02-guides/json-ld.md` [V]
- next-seo 7.3.0 (published July 2026). Its README positions it as JSON-LD components and sends standard meta tags to Next's `generateMetadata`; components take a `nonce` prop for strict CSP — [npm](https://www.npmjs.com/package/next-seo) [V via `npm view`]
- next-sitemap 4.2.3 last changed Sep 2023 — [npm](https://www.npmjs.com/package/next-sitemap) [V via `npm view`]
- schema-dts 2.1.0, updated Oct 2026, provides Schema.org TypeScript typings — [npm](https://www.npmjs.com/package/schema-dts) [V via `npm view`]
- `@payloadcms/plugin-seo` 3.92.1, published 30 Oct 2026 — [npm](https://www.npmjs.com/package/@payloadcms/plugin-seo). It offers `generateTitle`, `generateURL`, `uploadsCollection` for the meta image, and `OverviewField` with `titlePath`, `descriptionPath`, `imagePath` and length overrides — [Payload docs](https://payloadcms.com/docs/plugins/seo) [via Context7]
- IndexNow implementation: key text file in `public/`, key in `INDEXNOW_KEY`, optional `app/api/indexnow/route.ts` — [dev.to](https://dev.to/iurii_rogulia/indexnow-in-nextjs-instant-indexing-after-every-deploy-41am), [p0stman](https://p0stman.com/guides/indexnow-guide.html). Errors: 403 key unreachable, 422 URL/host mismatch, 429 back off. Check that a URL is a published page before submitting — [Sight AI](https://www.trysight.ai/blog/automated-indexnow-integration). Payload `afterChange` is a natural trigger — [Build with Matija](https://www.buildwithmatija.com/blog/how-to-speed-up-your-payload-cms-site-with-unstable_cache). No published guide wires these two together.

### Inferences
- Recommended: native metadata and sitemap; `schema-dts` as a dev-only types dependency; a small JSON-LD component using Next's `<` escape; `@payloadcms/plugin-seo` if SEO fields are not already modelled. Check existing page collections first, since `generateMetadata` already reads something.
- Each language URL needs reciprocal `alternates.languages` in both the `<head>` and sitemap; a Screaming Frog crawl can validate them.
- IndexNow is low value but cheap: a key file plus one hook, sending `/en`, `/hi`, `/pa` URLs on publish, gated on `isLive` and on published status so pre-launch content is never submitted.
- The repo's rule that all content lives in Payload argues for building JSON-LD from Payload data and `src/site.ts`, with no hardcoded strings.

### Gaps
- Whether the existing collections already have SEO fields was not checked, as it was outside this research scope.
- `next-seo`'s date comes from npm's modified field, which can reflect metadata changes as well as code releases.
