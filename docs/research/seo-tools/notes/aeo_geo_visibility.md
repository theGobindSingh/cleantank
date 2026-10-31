# AEO/GEO visibility tools: free, open-source and cheap options, and what actually works

All prices and feature claims were checked on 2026-10-31 unless a different date is given. Prices are in USD. "Primary" means the vendor's own page or the original study was read. "Snippet only" means the page could not be opened and the claim rests on search-result text.

## Open-source trackers, audit CLIs, llms.txt generators and crawler checkers

### Takeaway
Self-hosted trackers are now real and free as software, but none of them is free to run: you pay per call for model APIs or scrapers. Elmo (MIT, active) and Limelit Open (one Go binary on SQLite, Apache-2.0) are the two worth trying. Most of the rest are weeks old, or audit "readiness" and not actual citations.

### Cited Findings

**Trackers.** Stars, licence, creation and push dates come from the GitHub API on 2026-10-31. Everything else comes from each README.

| Repo | Stars / licence / last push | Data method | Engines | Needs | Notes |
|---|---|---|---|---|---|
| [elmohq/elmo](https://github.com/elmohq/elmo) | 541 / MIT / 2026-10-30 | Scrapers for consumer surfaces; model APIs add Claude, Grok and others | ChatGPT, AI Mode, AI Overviews, Gemini, Perplexity, Copilot, plus API models | Docker Compose, Postgres, a scraper or model key, and a TypeSafe or OpenAI key for mention judging | Stores raw output; scoring code is public. [Cloud from $29/mo](https://www.elmohq.com/pricing) covers 50 prompts on ChatGPT only, 1x/day |
| [limelit-co/open](https://github.com/limelit-co/open) | 255 / Apache-2.0 / 2026-10-30 | Hybrid and labelled per metric: `api` or `scraped` targets, never averaged together | ChatGPT, Claude, Perplexity, Gemini, AI Overview, AI Mode, Bing Copilot | Go binary, SQLite, own keys | Created 2026-09-11. 6 of 11 providers are built. MCP server. AI Overview, AI Mode and Copilot need scrapers because they have no API |
| [danishashko/geo-aeo-tracker](https://github.com/danishashko/geo-aeo-tracker) | 313 / MIT / 2026-10-19 | Bright Data AI Scraper API, OpenRouter for analysis | ChatGPT, Perplexity, Gemini, Copilot, AI Mode | Bright Data key | Built around one sponsor. Geo-scoped by country |
| [oneglanse/oneglanse](https://github.com/oneglanse/oneglanse) | 241 / MIT / 2026-10-04 | Real websites through your own logged-in browser sessions | ChatGPT, Perplexity, Gemini, Claude, AI Overview | Desktop session for sign-in; a residential proxy for VPS runs | Most faithful to the UI, most fragile. See the terms note in the DIY section |
| [ansvisor/ansvisor](https://github.com/ansvisor/ansvisor) | 217 / MIT / 2026-10-30 | Cloro scraper plus model APIs | Multi-engine | Supabase, Cloro, optional DataForSEO | Heavier stack; BYO LLM keys still on its roadmap |
| [ai-search-guru/getcito…](https://github.com/ai-search-guru/getcito-worlds-first-open-source-aio-aeo-or-geo-tool) | 502 / NOASSERTION / 2026-09-28 | README not read | | | Licence is unclear on GitHub; check before use |
| [anyin-ai/aperture](https://github.com/anyin-ai/aperture) | 29 / MIT / 2026-07-21 | BYOK model APIs | LLM providers | SQLite | README says audits run "across models, languages, and markets". Keys are stored unencrypted and there is no auth, so local use only |
| [BuildMinimal/aeoscope](https://github.com/BuildMinimal/aeoscope) | 0 / MIT / 2026-10-27 | Official APIs, plus local models that have no web access | ChatGPT, Perplexity, Gemini, Claude | BYOK | Created 2026-10-26. README says MVP |
| [metaforismo/spotlightsai](https://github.com/metaforismo/spotlightsai) | 0 / MIT / 2026-10-25 | Scrapers plus APIs | Multi-engine | BrightData key and LLM key | Very new, no adoption |
| [moajez/omni_geo](https://github.com/moajez/omni_geo) | 35 / MIT / 2026-10-24 | "Zero-key" mode is a heuristic built on web scraping; live mode uses APIs | Four APIs | Optional keys | Created 2026-10-24. Zero-key mode does not query any AI engine, so it should not be read as measured visibility |

**Audit and readiness tools (these check the site, not whether it is cited)**

- [Auriti-Labs/geo-optimizer-skill](https://github.com/Auriti-Labs/geo-optimizer-skill): 1,244 stars, MIT, pushed 2026-10-30. CLI via `pip` or `uvx`, no telemetry. `geo citations --runs 5` samples each query five times and reports a confidence interval. Its README says Perplexity returns real source URLs while OpenAI, Anthropic and Groq "only reveal what the model already knows". The hosted version is [GeoReady](https://geoready.dev/pricing/): free tier of 5 audits/day and 1 Perplexity answer check/week; Pro $19/mo founding price, then $29. It automates only Perplexity. For ChatGPT and Google you paste answers by hand, and the score measures technical readiness only.
- [squirrelscan/squirrelscan](https://github.com/squirrelscan/squirrelscan): 301 stars, MIT, pushed 2026-10-31. Website QA for coding agents, 310+ rules.
- [seo-skills/geo-audit-skill](https://github.com/seo-skills/geo-audit-skill): 37 stars, MIT. Deterministic Python CLI.
- [puneetindersingh/open-seo-crawler](https://github.com/puneetindersingh/open-seo-crawler): 79 stars, MIT. Self-hosted crawler with an AI crawler checker.
- Marketing skill packs for Claude and similar agents top the GitHub topic pages ([coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) at 57.5k stars, [Ryze-AI-Adgent/open-seo-mcp-skills](https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills) at 8.2k). They are prompts, not measurement. [yaojingang/GEOFlow](https://github.com/yaojingang/GEOFlow) (3,975 stars, AGPL-3.0) is content distribution, not tracking.

**llms.txt generators.** [firecrawl/llmstxt-generator](https://github.com/firecrawl/llmstxt-generator) has 539 stars, no declared licence and a last push on 2025-06-17. For this site the docs already call for [generating it from `site` and the pages collection](../../docs/AEO-GEO.md), which makes a generator unnecessary.

**Crawler checkers (free, robots.txt level)**

- [Backlinko](https://backlinko.com/tools/robots-txt-ai-crawler-checker): 3 checks/day, no account.
- [GEO Toolbox](https://geotoolbox.ai/tools/ai-crawler-checker): 34 AI user-agents, no sign-up. Its own note says a WAF, Cloudflare bot-fight mode, rate limiting or a 403 can still block a crawler that robots.txt permits.
- [Surmado](https://www.surmado.com/tools/ai-crawler-checker), [Resolve247](https://resolve247.ai/tools/robots-txt-checker), [Growtika](https://growtika.com/tools/robots-txt-checker.md): free, no sign-up.
- [Vercel has an AI Bots managed ruleset](https://examples.vercel.com/kb/guide/how-to-utilize-vercels-bot-management-features) with Log and On (block) settings, so a robots.txt pass alone does not prove access on this host.

### Inferences
- For this project, Limelit fits better than Elmo: a single binary on SQLite suits the existing Oracle arm64 VPS, it labels API and scraped data separately, and it needs no Postgres. Its prebuilt arm64 support was not confirmed. Elmo is the more mature fallback.
- A plain readiness audit is a one-time launch check and is not worth a subscription. The free CLI covers it.
- On Vercel, a real test means requesting the site with each bot's user agent and checking for a 200 alongside a robots.txt check.

### Gaps
- No OSS tracker documents Hindi or Punjabi handling or India targeting well enough to rely on. See the language section.
- Star counts show interest, not accuracy. No independent accuracy test of any OSS tracker was found.
- GetCito's README, and the llms.txt tools other than Firecrawl's, were not reviewed.

## Free and cheap commercial trackers: current state and price

### Takeaway
A handful fit under about $30/mo: Otterly Lite, Rankscale Essentials, Elmo Cloud Starter, GeoReady Pro, and the rupee-priced Indian tools AITLAS, Presence Scout and Pallix, plus free snapshots from Ahrefs, Semrush, HubSpot, Mangools, Amplitude, Pallix and AthenaHQ. Rankscale Essentials ($17/mo on annual billing, up to 480 answers) is the only one whose volume comes near a 90-prompt set, though its language support is undocumented. Everything else on the list starts at $49 to $295/mo.

### Cited Findings

**Under about $30/mo, or free**

| Tool | Price and limits | Engines | Method | India, language | Accuracy notes |
|---|---|---|---|---|---|
| [Otterly](https://otterly.ai/pricing) | Lite $29/mo, or $25 (page does not label which is annual). 15 prompts, cannot add more. Trial available. Standard $189 for 100 prompts | ChatGPT, AI Overviews, Perplexity, Copilot. Add-ons on Lite: AI Mode $9, Gemini $9, Claude $29 | Not stated on pricing page | "Unlimited Countries & Languages". [Third-party list](https://depra.ai/best-ai-visibility-tools-india) says India is a location and [monitoring works in any language you write prompts in](https://depra.ai/best-ai-visibility-tools-india) | 15 prompts cannot cover 3 languages at any useful depth |
| [Rankscale](https://rankscale.ai/pricing) | Essentials $17/mo, yearly billing only: 120 credits (up to 480 answers), 2 dashboards, 10 page audits, no rollover. Pro $84. [Competitor pages](https://resources.rework.com/tools/aeo-ai-visibility/peec-ai-vs-otterly-vs-rankscale) quote $20 monthly | 17+ engines, not all named on the page | Not stated | Regions "All"; languages not mentioned | Trial is tied to Pro; a [competitor source](https://rankai.ai/articles/rankscale-alternatives) says there is none |
| [Elmo Cloud](https://www.elmohq.com/pricing) | Starter $29/mo or $290/yr: 50 prompts, 1 brand | ChatGPT only, 1x/day | Scraped consumer surface | Not stated | Basic ($99) adds 4 of 6 engines |
| [GeoReady](https://geoready.dev/pricing/) | Free tier; Pro $19 founding, then $29 | Perplexity through API; ChatGPT and Google by manual paste | API plus manual | Not stated | A readiness score, not visibility |
| [Ahrefs AI Visibility Checker](https://ahrefs.com/ai-visibility-checker) | Free, no signup, one-time, top 5 per section | ChatGPT, Gemini, Perplexity, Copilot, AI Overviews, AI Mode | Ahrefs prompt index | Country not stated | Index is [built from Ahrefs' keyword database](https://ahrefs.com/brand-radar), so a new local brand will likely show nothing |
| [Semrush Free](https://www.semrush.com/pricing/seo-ai-search/) | $0: AI Visibility features limited to 1 demo project and 10 reports/day. Free checker too | Google, ChatGPT, Perplexity, Gemini "and more" | Not stated | [One vendor's guide](https://aitlas.shiprocket.in/blog/best-ai-visibility-tools/) says no regional language support; unverified | Paid tier starts at $139/mo |
| [HubSpot AI Search Grader](https://www.hubspot.com/aeo-grader) | Free, no account, one-time. Monitoring is $50/mo | GPT-5.4 mini, Perplexity, Gemini | Asks each model about your brand "based on its training data" | Location is a free-text field | Not live data, and shows no real-time changes |
| [Mangools AI Search Grader](https://mangools.com/ai-search-grader) | Free with unnumbered limits; free account unlocks all models | GPT-5 Nano, Mistral, Llama, and logged-in: DeepSeek, Claude Haiku 4.5, Gemini 2.5 Flash Lite | Cheap model APIs | Not mentioned | Page says seven models, lists six. Different models from those people use |
| [Amplitude AI Visibility](https://amplitude.com/docs/amplitude-ai/ai-visibility/faq) | Free limited report with no signup; included in every Amplitude plan. [Coverage](https://www.amplitude.com/blog/amplitude-expands-ai-visibility) says the free report does not refresh, and [a search snippet of the FAQ](https://amplitude.com/docs/api/content/amplitude-ai/ai-visibility/faq) shows 500 prompts on the Free plan | ChatGPT and AI Overviews only | Not stated | Logged-in prompts can use any language, but [LLMs may reply in English](https://amplitude.com/docs/amplitude-ai/ai-visibility/faq) | The no-signup report and a free logged-in account may differ |
| [AthenaHQ Essential](https://www.athenahq.ai/pricing) | Free: 300 credits (1 credit = 1 response), "$25 free credit" | ChatGPT, Perplexity, AI Overviews, Gemini, Copilot | Not stated | Country-level from Starter; multi-language is Enterprise only | Not clear whether credits are one-off or monthly |
| [Presence Scout](https://presencescout.com/blog/best-ai-visibility-tools-india) | Free: 5 prompts, 10 keywords. Starter ₹2,499/mo. Prices checked by the author in Sept 2026 | AI Overviews and AI Mode "as they appear in India" | Not stated | India or a city as market; Hindi not mentioned | Source is the founder's own post, disclosed |
| [AITLAS by Shiprocket](https://aitlas.shiprocket.in/pricing) | Free: 3 manual scans of 15 prompts, 2 platforms, no citation tracking or history. Starter ₹999/mo (+18% GST): 5 scans, 20 prompts, manual | 2 platforms, not named on the page | Not stated | Indian vendor; Hindi content only on managed plans | Without citation tracking the free plan cannot show which sources are cited |
| [Pallix](https://www.24-7pressrelease.com/press-release/537568/pallix-launches-an-ai-visibility-tool-built-for-india-tracking-what-chatgpt-perplexity-and-google-ai-tell-buyers) | [Free one-time audit of 20 prompts, no signup](https://depra.ai/best-ai-visibility-tools-india). Starter ₹2,499/mo per an August 2026 press release, 30 prompts | ChatGPT, Perplexity, AI Overviews, Gemini, Copilot; Starter surface count conflicts between sources | Not stated | Built for India; Hinglish | [Slashdot lists $25/mo](https://slashdot.org/software/comparison/Pallix-vs-Writesonic/), which conflicts |
| [AnswerTrace](https://depra.ai/best-ai-visibility-tools-india) | ₹0 Free: one scan of 10 buyer questions on ChatGPT, no card (per Depra) | ChatGPT on Free; [ChatGPT, Gemini, Perplexity, Claude overall](https://f4.fund/startups/answertrace) | Not stated | India-first; see language table | Vendor page not seen |

**Over budget (for reference)**

| Tool | Entry price | Notes |
|---|---|---|
| [LLMrefs](https://llmrefs.com/pricing) | $79/mo for 500 prompts, 7-day trial, plus a free account with unstated limits | 11 engines. Geo claims conflict on its own site: 50+ or 20+ countries, 20+ or 10+ languages |
| [Geoptie](https://geoptie.com/pricing) | $49/mo, 15 prompts | Any 4 of 7 engines, 123 countries; each country counts as a prompt |
| [Knowatoa](https://knowatoa.com/pricing) | $59/mo | ChatGPT, AI Overviews, AI Mode on Starter. Multiple languages and locations |
| [Writesonic GEO](https://writesonic.com/pricing) | $79/mo on annual billing, 50 prompts | ChatGPT, Gemini, AI Overviews only. Meta description still says $99 |
| [Peec AI](https://peec.ai/pricing) | $95/mo, 50 prompts, 1 country | Page lists Perplexity under Enterprise only. Unlimited languages |
| [Ahrefs Brand Radar](https://ahrefs.com/brand-radar) | Custom prompts from $50/mo; AI Visibility Index from $199/mo; on top of [Ahrefs from $129/mo](https://ahrefs.com/pricing) | Over 519M prompts from its keyword database, re-tested monthly. Tiny brands will be absent from the index |
| [Semrush SEO + AI Search](https://www.semrush.com/pricing/seo-ai-search/) | $139/mo; $199 Starter for 50 prompts daily | |
| [AthenaHQ Starter](https://www.athenahq.ai/pricing) | $295/mo | 3,600 credits, 11 models |
| [Profound](https://www.tryprofound.com/pricing) | Custom. Free trial: 50 preset prompts for 7 days, 1 region, 1 language, 3 engines | No dollar prices on the page |
| [Track My Visibility](https://presencescout.com/blog/best-ai-visibility-tools-india), [Promptrack](https://presencescout.com/blog/best-ai-visibility-tools-india) | $50/mo; €99/mo | As listed in a competitor's post |

Independent reviews barely exist: a search for reviews of Otterly, Peec and Rankscale returned [vendor and competitor blogs almost exclusively](https://rankai.ai/articles/otterly-alternatives).

### Inferences
- With 90 prompt-language pairs, Otterly Lite (15), Geoptie (15) and Elmo Starter (50, ChatGPT only) are all too small. Rankscale Essentials could fund 90 prompts across about five engines once a month (450 of its 480 answers), but only if Hindi and Gurmukhi prompts work, which needs a trial.
- The free snapshot tools are useful one time, after launch, as a sanity check. Tools built on a keyword or prompt index have no reason to contain a new Tricity brand, so an empty result says little.
- For a business with zero citations today, a paid tracker measures a flat zero. Paying is premature until the site is indexed and has some off-site footprint.

### Gaps
- Most vendors do not say on their pricing pages whether they scrape or use APIs, and I did not get this for Otterly, Rankscale, Peec, LLMrefs or Semrush. LLMrefs says only "real-time".
- LLMrefs free-account limits, Knowatoa's free tier if any, and whether AthenaHQ's free credits renew all need a signup to confirm.
- Accuracy of any commercial tracker against a ground truth: no independent test found.
- BrightLocal's Local AI Visibility Tracker runs map-grid local prompts and is the closest fit by design, but its price and India coverage were not checked.

## First-party data: what is really available today

### Takeaway
Google and Bing now both give free first-party AI reporting, and it beats any third-party tracker for what it covers, though neither gives clicks. Google gives impressions with no queries. Bing gives citations with sampled queries. ChatGPT, Perplexity and Gemini app give site owners nothing, so referrers and bot logs are the only first-party signal there.

### Cited Findings

**Google Search Console**
- [Generative AI performance reports](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) launched on 2026-06-03 for a subset of sites, and Google's note on that post says they reached all websites worldwide as of 2026-08-31. One [blog claims August 11](https://chudi.dev/blog/search-console-generative-ai-report) for property-wide availability; Google's date should be used.
- There are separate Search and Discover reports. Impressions cover AI Overviews and AI Mode; Search Labs is [excluded](https://support.google.com/webmasters/answer/16984139?hl=en).
- Dimensions are [pages, countries, devices and dates](https://support.google.com/webmasters/answer/16984139?hl=en), with Web text and multimodal filters, a URL filter and export. The 1,000-row table limit applies. Countries are a dimension but there is no city data.
- The report [may not appear at all if a site has too few generative AI impressions](https://support.google.com/webmasters/answer/16984139?hl=en), and no threshold is published.
- The report has no clicks, and the help page lists no query dimension. First-hand accounts agree: [no queries, no clicks, no API access](https://chudi.dev/blog/search-console-generative-ai-report), [no query dimension](https://llmpulse.ai/blog/gsc-generative-ai-report/), and [no clicks or queries, with data going back to 18 May](https://suganthan.com/notes/google-ai-reports-search-console/). [Quattr](https://www.quattr.com/blog/search-console-generative-ai-report) confirms no clicks, CTR or referral traffic. One search snippet claimed query data exists; it could not be traced, and Google's help page does not support it.
- Eligibility now has a console condition: "[a site must be included in Search generative AI features in Search Console to be eligible for display](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)". The guide page was last updated 2026-07-10.

**Bing Webmaster Tools**
- [AI Performance](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview) has been in public preview since 2026-02-10. It covers Copilot, AI summaries in Bing and select unnamed partners. Metrics are total citations, average cited pages, sampled grounding queries, page-level citations and trends.
- Microsoft says citation counts do not indicate ranking, placement or authority.
- A [June 2026 update](https://www.practicalecommerce.com/bings-improved-ai-performance-section) added query intent, query topic, citation share per query, drill-downs and full export. There is no per-channel filter and partners are not named.
- [No click data](https://searchengineland.com/bing-webmaster-tools-testing-new-ai-performance-report-468039) (snippet only), and [ChatGPT is not covered](https://experienceleague.adobe.com/en/docs/brand-visibility-learn/tutorials/measurement/bing-webmaster-tools-ai-performance-report) per Adobe's guide. Bing's post does not mention ChatGPT.

**Referrer analytics**
- No official built-in PostHog AI channel was found. The method is to [match referring domains in pageview events](https://llmpulse.ai/features/web-analytics-integration/posthog) with HogQL. A [guide](https://authoritytech.io/blog/ai-traffic-attribution-how-to-track-chatgpt-perplexity-gemini) suggests chatgpt.com, chat.openai.com, perplexity.ai, claude.ai, gemini.google.com and copilot.microsoft.com.
- Referrers undercount. [Many AI apps send none or inconsistent hostnames](https://www.terminusapp.com/blog/tracking-ai-referral-traffic/). One analytics vendor claims [stripping removes 70% of AI attribution](https://clickport.io/blog/track-ai-search-traffic); that is a single vendor's figure and should not be cited as fact. [Seer also notes AI referrals arrive partly as direct](https://www.seerinteractive.com/insights/where-organic-search-ai-traffic-behave-the-same-and-where-they-diverge-a-study-of-2-years-of-blog-data).

**Bot and crawl data**
- [Cloudflare AI Crawl Control](https://developers.cloudflare.com/ai-crawl-control/) (formerly AI Audit) is available on all plans. It shows which AI services crawl, offers per-crawler allow or block, and monitors robots.txt compliance. Pay per crawl is in private beta. It requires traffic to go through Cloudflare.
- [Ahrefs Bot Analytics](https://docs.ahrefs.com/bot-analytics/docs/introduction.md) is server-side, with 12 bot categories and an AI filter. Its [Brand Radar page](https://ahrefs.com/brand-radar) calls it free in beta, while [a search snippet](https://ahrefs.com/bot-analytics) says free in beta "on all paid Ahrefs plans". This conflict is unresolved. The [Vercel connection requires Pro or Enterprise](https://docs.ahrefs.com/bot-analytics/docs/vercel.md). The Cloudflare Worker route works on any plan.
- [Vercel Drains are Pro and Enterprise only](https://vercel.com/docs/drains), priced at $0.50 per GB of drain volume. Hobby cannot use them.
- [Vercel's AI Bots ruleset in Log mode](https://examples.vercel.com/kb/guide/how-to-utilize-vercels-bot-management-features) records bot traffic in Firewall dashboards. Whether Hobby includes it was not confirmed.
- [A community-built middleware approach](https://community.vercel.com/t/i-built-a-small-tool-to-see-which-ai-bots-are-hitting-my-vercel-site-with-page-level-analytics/36919) records bot name, path and country on any plan.
- [OpenAI's crawler page](https://developers.openai.com/api/docs/bots) separates OAI-SearchBot (ChatGPT search; opt-outs leave only navigational links), GPTBot (training) and ChatGPT-User (user-initiated, robots.txt may not apply). A ChatGPT-User hit is therefore the closest available log signal that a real person's question reached a page.

**Prioritisation data.** [Statcounter India, September 2026](https://gs.statcounter.com/ai-chatbot-market-share/all/india): ChatGPT 77.32%, Gemini 16.01%, Perplexity 3.6%, Copilot 1.7%, Claude 1.37%. Statcounter measures referrals to sites, so this is not a count of users.

### Inferences
- The minimum measurement stack is free: Search Console AI report, Bing AI Performance, PostHog referrer classification, and a small server-side user-agent log in `src/proxy.ts`. The proxy route avoids the Vercel Pro requirement, and bot-only logging holds no personal data, so it should sit outside the DPDP consent question. That last point is my judgment and should be checked against docs/PRODUCT.md, Legal.
- Search Console will likely show no AI report for months on a new low-volume site. Absence of the report means too few impressions, not a fault.
- A Cloudflare proxy in front of Vercel is extra infrastructure for a small gain. The middleware log gets most of the value.
- ChatGPT holds about three quarters of India's measured AI referrals and is the engine with no first-party reporting, which is the one real reason to sample answers at all.

### Gaps
- Numeric threshold for the Search Console report, and data retention: not published on the page read.
- Whether Cloudflare's free plan limits AI Crawl Control history: not stated.
- Which Vercel plan the project uses was not checked.
- The reliability of referrer stripping per engine has no independent measurement.

## DIY tracker: cost for 30 prompts in 3 languages, and how far API output differs from the UI

### Takeaway
A DIY API tracker costs roughly $3 to $40 a month for 90 prompt-language pairs, depending on run count. Scraper APIs are even cheaper per call and closer to the real product. But API answers overlap with consumer UI answers only weakly (roughly 20 to 30% for brands, 5 to 27% for domains), so API results are a separate signal. Consumer UI scraping conflicts with OpenAI's terms as reported, so a manual sample or a labelled provider is the safer design.

### Cited Findings

**Current API prices**

| Provider | Search fee | Cheapest usable tokens (per 1M) | Source |
|---|---|---|---|
| OpenAI | $10 per 1,000 calls; search content tokens billed at model rates | gpt-5.4-nano $0.20 / $1.25; gpt-5.4-mini $0.75 / $4.50 | [OpenAI pricing](https://developers.openai.com/api/docs/pricing) |
| Anthropic | $10 per 1,000 searches, plus tokens | Haiku 5.5 $0.10 / $0.50; Sonnet 5.5 $2 / $10 | [Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing) |
| Google | Gemini 2.5: free tier 500 grounded requests/day shared by Flash and Flash-Lite; paid tier 1,500/day free, then $35 per 1,000. Gemini 3+: 5,000/month free, then $14 per 1,000, paid tier only | 2.5 Flash-Lite $0.10 / $0.40 | [Gemini pricing](https://ai.google.dev/gemini-api/docs/pricing) |
| Perplexity | Agent API `web_search` $2.50 per 1,000 invocations | `perplexity/sonar` $0.25 / $2.50 | [Perplexity pricing](https://docs.perplexity.ai/docs/getting-started/pricing.md), [models](https://docs.perplexity.ai/docs/agent-api/models.md) |

- Perplexity's [Sonar Chat Completions support ended 2026-09-27](https://docs.perplexity.ai/docs/sonar/models.md); requests are being reformulated as Agent API requests. Older published Sonar rates ($1/$1 plus [$5 to $12 per 1,000 requests](https://docs.perplexity.ai/guides/pricing)) should no longer be used for budgets.
- Free-tier Gemini content [may be used to improve Google's products](https://ai.google.dev/gemini-api/docs/pricing). For brand-related prompts that seems harmless, but it should be a choice.

**Scraper prices** ([Elmo's provider docs](https://www.elmohq.com/docs/user-guide/providers); figures assume 300 evaluations per prompt per month, so per-evaluation numbers below are my division)

| Provider | Per prompt/month | About per evaluation | Minimum | Coverage gaps |
|---|---|---|---|---|
| Oxylabs | $0.15 | $0.0005 | $49/mo | No Gemini or Copilot |
| BrightData | $0.45 | $0.0015 | $10, pay-as-you-go | None listed |
| Cloro | $0.65 | $0.0022 | $30/mo | None listed |
| SearchApi | $1.20 | $0.004 | $40/mo | None listed |
| DataForSEO | $1.20 | $0.004 | $50 top-up | No Copilot; Perplexity via API |
| Olostep | $2.25 | $0.0075 | Pay-as-you-go | None listed |

DataForSEO's own marketing lists its [LLM Scraper from $0.0012 per page, up to 45 minutes](https://dataforseo.com/apis/ai-optimization-api), and a [live request at $0.004](https://dataforseo.com/blog/llm-scraper-vs-llm-responses-how-to-choose-the-right-ai-data-solution). Its [pricing page path returned 404](https://dataforseo.com/pricing/ai-optimization/llm-scraper-api), so the full table was not seen.

**My cost model.** Assumes 30 prompts × 3 languages = 90 pairs; one search per call; 5,000 input tokens including search content; 500 output tokens. Per-call estimates:

| Engine | Calculation | Per call |
|---|---|---|
| OpenAI gpt-5.4-mini | $0.010 + $0.00375 + $0.00225 | $0.016 |
| Claude Haiku 5.5 | $0.010 + $0.0005 + $0.00025 | $0.011 |
| Perplexity sonar | $0.0025 + $0.00125 + $0.00125 | $0.005 |
| Gemini 2.5 Flash-Lite | Free-tier grounding | $0 |
| **All four** | | **$0.032** |

| Cadence | Runs per engine/mo | API cost/mo (4 engines) | 6 UI surfaces at BrightData rate |
|---|---|---|---|
| 1 run, monthly | 90 | about $3 | about $0.80, $10 minimum balance |
| 5 runs, monthly (recommended sampling) | 450 | about $14 | about $4 |
| 3 runs, weekly | 1,170 | about $37 | about $11 |

Multi-search answers would raise OpenAI and Claude costs; allow up to double. Hosting is $0 on the existing VPS. The Gemini free tier allows 500 grounded requests/day, so all of these fit.

**API versus UI, all from parties with a stake**

- [Surfer](https://surfer.ai/blog/llm-scraped-ai-answers-vs-api-results/): 1,000 prompts, 13,779 answers, collected 2026-08-04, one sample per prompt. Surfer sells UI-based tracking and notes some disagreement is simple non-determinism.

| Engine | Sources per answer, API | Sources per answer, UI | Search rate, API | Search rate, UI |
|---|---|---|---|---|
| ChatGPT | 3.1 | 12.1 | 83% | 88% |
| Perplexity | 19.5 | 10.3 | 100% | 100% |
| Gemini | 6.5 | 3.4 | 85% | 100% |
| AI Mode | 14.6 | 22.2 | 94% | 100% |
| AI Overviews | 14.6 | 10.3 | 94% | 100% |

- From the same study: brand Jaccard overlap 15.5 to 23.8% raw and 21.3 to 31.6% after canonicalising names. Domain overlap is highest on Perplexity at 26.7%, with Gemini, AI Mode and AI Overviews at 12.3 to 13.0%. ChatGPT is given as 4.8% in the text and 12.1% in a chart caption, an internal inconsistency. There is no real API for AI Overviews, so Surfer borrowed AI Mode's.
- [Promptwatch](https://promptwatch.com/blog/ui-vs-api-for-ai-search-visibility): UI cited 392 sources against 170 for the API; 70% of UI-found sources never appeared in API results (snippet only).
- [TRAIL Labs](https://www.traillabs.ai/blog/ai-visibility-api-vs-ui): brand visibility shifted 41% on average (snippet only). [Paprik](https://paprik.ai/blog/accurate-api-based-ai-visibility-tracking-chatgpt-ui): 35 prompts over 10 days, API without web search surfaced 84% fewer brands (snippet only).
- [Limelit's README](https://github.com/limelit-co/open) states the position plainly: API results and what a person sees "are different surfaces".
- [Elmo's docs](https://www.elmohq.com/docs/user-guide/providers) say direct API calls "don't reflect the real ChatGPT or Google AI Mode experience".

**Terms risk.** OpenAI's terms are [reported to bar automatic or programmatic extraction of Output from its individual services, with the API as the carve-out](https://www.itechguides.com/?p=866691). I could not open OpenAI's terms page (HTTP 403), so this rests on secondary text. Applying that to third-party scraper vendors is a legal question I did not resolve. [OneGlanse](https://github.com/oneglanse/oneglanse) lists browsers, authenticated sessions, residential proxies and bot-detection handling as the reason it offers no hosted app, which shows how brittle this route is.

**What must be sampled.** [BrightLocal](https://www.brightlocal.com/research/local-ai-visibility-study/) found a business reappears about half the time on repeat runs, and only 21 to 33% of results overlap. [SparkToro and Gumshoe](https://www.searchenginejournal.com/ai-recommendations-change-with-nearly-every-query-sparktoro/566242) (2,961 runs, 600 volunteers, January 2026, not peer reviewed) found less than a 1-in-100 chance that two runs give the same brand list, and called precise rank tracking a "fool's errand", while the set of brands considered was relatively stable (via [Search Engine Land](https://searchengineland.com/ai-recommendation-lists-rarely-repeat-study-468076), snippet only).

### Inferences
- Money is not the constraint. Validity is. A $14/mo API tracker yields a clean trend for a different surface from the one customers see. It still has value because it shows whether the engines' retrieval layer can find the site at all.
- A sensible design, in priority order:
  1. Keep a small manual panel: about 10 prompts × 3 languages, on ChatGPT and Gemini apps and Google AI Mode, repeated 3 times, in a fresh session from an Indian connection, monthly. Record presence and cited domains, never position.
  2. If that gets tedious, add Limelit with API targets (about $14/mo) and label it as an API signal.
  3. Consider a scraped target only after a decision on terms risk.
- The metric should be "share of runs that mention or cite us" per engine and language, plus which competitors and directories appear. Rank in an AI answer is noise.
- The cited-domain list has more value than the score. It tells you exactly which directories and pages to get onto.
- Brand matching needs aliases in three scripts (Latin, Devanagari, Gurmukhi) plus the domain. This is cheap to do but easy to forget.

### Gaps
- No study of API versus UI difference exists for Indian, Hindi or Punjabi prompts. Every study above is presumably English and largely US-based.
- Whether Haiku 5.5 supports the web search tool was not checked; if not, Sonnet 5.5 raises the Claude line to about $0.025 per call.
- Whether API web search can be location-targeted to Chandigarh per vendor was not checked. Consumer answers for "near me" depend on location, so an API call without location may answer for the wrong place.
- The per-evaluation scraper prices are estimates from one open-source project's docs, not rate cards.

## Evidence: what drives AI citations, and what does not

### Takeaway
The strongest evidence points to the same things as ordinary SEO plus off-site presence: being indexed and ranking, being mentioned elsewhere, and having original, specific content. llms.txt has no evidence behind it. Controlled data shows adding schema gives no measurable citation lift on already-cited pages, though nobody has tested it on an unknown local business. For local queries, business websites and Google Business Profile are the top sources, and AI answers are selective and unstable.

### Cited Findings

**Google's own guidance** ([AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), last updated 2026-07-10)
- "You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search." Google Search itself does not use them.
- "Structured data isn't required for generative AI search, and there's no special schema.org markup you need to add." It is still worth using for rich results.
- "There's no requirement to break your content into tiny pieces for AI to better understand it."
- Merchant Center and Google Business Profiles "can help your products and services to be visible in both AI responses and other Google Search results".
- Google treats AEO and GEO as "still SEO" and asks people to review third-party "AEO" or "GEO" advice carefully. This applies to Google Search only and [does not speak for other engines](https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/). Google has a stake in this message too.

**llms.txt**
- [SE Ranking](https://seranking.com/blog/llms-txt/), nearly 300,000 domains: 10.13% adoption, no measurable link to citation frequency, and the XGBoost model became more accurate when the variable was removed. The page does not state which LLMs or time window.
- [Ahrefs](https://ahrefs.com/blog/llmstxt-study/), 137K sites, published 2026-06-15: 97% of files received zero requests in May 2026 (snippet, confirmed across coverage). [Named AI bots were 19.5% of the requests that did occur; retrieval bots 1.1%](https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/). The study measures requests, not downstream use.
- No study showing a positive effect was found.

**Schema and FAQ schema**
- [Ahrefs](https://ahrefs.com/blog/schema-ai-citations/), the best-controlled test found: 1,885 pages that added JSON-LD between August 2025 and March 2026, matched to controls, using difference-in-differences. AI Overviews −4.6% (significant but small, and possibly a pre-existing trend), AI Mode +2.4% and ChatGPT +2.2% (both indistinguishable from zero).
- Limits of that test: all schema types were pooled, so FAQ was not isolated. Every page already had 100+ AI Overview citations. The window was 30 days. It does not address whether schema helps pages AI systems do not yet see. The same post cites a searchVIU experiment where none of five AI systems used schema in real-time retrieval.
- [SE Ranking](https://seranking.com/blog/chatgpt-citation-factors/): pages with FAQ schema averaged 3.6 ChatGPT citations against 4.2 without. Correlational, and FAQ content may be confounded with simpler pages. SHAP suggested a missing FAQ section is a slight negative.
- Higher claims (a 3.2x lift, a 44% BrightEdge figure) appear on [vendor blogs](https://www.frase.io/blog/faq-schema-ai-search-geo-aeo) and could not be traced to primary data.

**Brand and authority signals**
- [Ahrefs, 75K brands](https://ahrefs.com/blog/ai-overview-brand-correlation/): branded web mentions correlate 0.664 with AI Overview visibility, brand anchors 0.527, branded search volume 0.392, backlinks 0.218. 26% of brands had zero mentions. AI Overviews only; correlation, not causation. Other pages credit these figures to Seer in error.
- [SE Ranking](https://seranking.com/blog/chatgpt-citation-factors/), published 2025-11-24, 129,000 domains and 216,524 pages: referring domains were the strongest predictor. Up to 2,500 referring domains average 1.6 to 1.8 citations and 350K+ average 8.4. Pages updated within three months average 6.0 against 3.6. Pages with expert quotes 4.1 against 2.4, and 19+ statistics 5.4 against 2.8. Sections of 120 to 180 words 4.6 against 2.7 for sections under 50 words. Millions of Reddit or Quora mentions go with about 4x citation chances. Review-platform presence 4.6 to 6.3 against 1.8. Correlational, and scales are far beyond any local business.

**Rankings**
- [Ahrefs](https://ahrefs.com/blog/ai-overview-citations-top-10), March 2026, about 863,000 SERPs and 4M URLs: 37.9% of AI Overview citations appear in the first 10 blocks, down from 76% in July 2025. Ahrefs itself says it [improved its parsing since the earlier study](https://ahrefs.com/blog/ai-overview-citations-top-10), so the drop is not like-for-like.
- [Seer](https://www.seerinteractive.com/insights/where-organic-search-ai-traffic-behave-the-same-and-where-they-diverge-a-study-of-2-years-of-blog-data), 2026-03-19, 247 of its own blog posts: organic and AI referral performance correlate 0.47 at one month, rising to 0.82 over a lifetime. First-party research over-performed. Simple how-to posts under-performed, likely because AI answers absorb them. Small, single-site sample, and data dates in the post do not fully line up.

**Princeton GEO paper**
- [Aggarwal et al., KDD 2024](https://arxiv.org/abs/2311.09735): the abstract claims up to 40% visibility gains in generative engines, on its own GEO-bench.
- A [secondary write-up](https://blckalpaca.at/en/knowledge-base/seo-geo/geo-generative-engine-optimization/the-princeton-geo-study-methodology-results-and-critique.md) describes about 10,000 queries, nine methods and a Perplexity test where keyword stuffing lost about 10% of answer share. Per-tactic lifts quoted online (for example quotations +41%, statistics +32%) vary between write-ups and were not checked against the paper's own tables. Critics say [the benchmark was built by the authors, used only five sources per answer, and measures visibility and not outcomes](https://www.airops.com/blog/geo-tactics-citation-lift) (snippet only, and the exact page making each point was not confirmed). No independent replication on live engines was found.

**Local AI search** (mostly vendors selling local tools, and mostly US)
- [BrightLocal](https://www.brightlocal.com/research/local-ai-visibility-study/), 2026-09-16, about 200,000 local prompts, 1,300 locations, 1.9M citations, on ChatGPT, AI Mode, AI Overviews: business websites 42% of citations, Google Business Profile 28.6%, Yelp 9.5%, Facebook 2.2%. ChatGPT relied little on Business Profile and leaned on Yelp and Bing. Google Maps mentioned tracked businesses 66% of the time against 32 to 38% for AI surfaces. 90% of ChatGPT's recommendations fall within about 287 km, against 39 to 64 km on Google surfaces, which suggests much weaker local precision.
- [SOCi 2026 Local Visibility Index](https://searchengineland.com/ai-local-visibility-report-2026-468085) (snippet only; page returned 403): 1.2% of locations recommended by ChatGPT, 11% by Gemini, 7.4% by Perplexity. Business info about 68% accurate on ChatGPT and Perplexity, 100% on Gemini.
- [Steady Demand via Search Engine Land](https://searchengineland.com/business-websites-gemini-citations-local-ai-search-study-485506) (snippet only), 14,472 citations in 50 US metros: business websites 59.9% of Gemini's citations, 15.9% of ChatGPT's.

### Inferences
- Implications for docs/AEO-GEO.md, for the report writer to weigh:
  - Gap 1 calls missing JSON-LD "the largest gap". For AI citations the evidence does not support that ranking. Keep LocalBusiness and Organization markup because they are cheap, help rich results and may help entity resolution for an unknown business, but off-site confirmation (gaps 2 and 4) should rank above it.
  - Gap 2 says "Gemini and ChatGPT both pull from map data". BrightLocal shows that is true for Google surfaces and not for ChatGPT, so Bing Places and directories matter separately for ChatGPT.
  - Gap 3's claim that FAQ markup "labels question-and-answer pairs clearly for every other engine" has no supporting evidence; the visible Q&A is what matters. Still a few lines of code, so harmless.
  - Gap 5 (llms.txt): skipping it is justified. The doc's "low priority" is right and could become "skip".
  - Gap 7 (guides): Seer's finding suggests simple how-to answers may be absorbed without a click, while original data earns referrals. Local, first-hand facts (tank condition data from real jobs, Tricity water hardness observations, if owner-approved) are more defensible than generic how-tos. Note that for a local business the goal is being named, not traffic, so absorption matters less here.
  - Gap 10 should name the dedicated Search Console report and Bing AI Performance. The checklist should add the "included in Search generative AI features" setting.
- The SE Ranking and Ahrefs correlations are about big sites. They should inform direction only, and small-business thresholds cannot be read from them.

### Gaps
- No causal study was found on GEO tactics for local service businesses in any country.
- No study was found on citation effects measured in revenue or leads.
- The original SparkToro report, Ahrefs top-10 post, and SOCi and Steady Demand reports were not opened directly.
- The Princeton per-tactic figures and Perplexity test were not confirmed from the paper itself, only from its abstract and secondary write-ups.

## Sources LLMs cite for Indian local services

### Takeaway
There is one directly relevant test, small and from an agency: Justdial dominated Indian local answers on ChatGPT, Gemini and Perplexity, and Indian answers lean on third-party platforms far more than foreign ones. There is no usable data on IndiaMART, Sulekha, Quora, YouTube or Google Maps as cited sources in India.

### Cited Findings
- [NicoDigital test](https://www.nicodigital.com/seo/ai-engines-local-business-search-test/), 2026-09-01. Agency-run, 15 prompts (12 Indian, 3 international controls), 4 engines with live search via DataForSEO's API (so API output, not UI), one run each, 60 answers and 1,050 citations. No Punjab or Tricity cities. Internal counts vary slightly (45 and 48 Indian answers).
  - Justdial: 25 of 48 Indian answers against 0 of 12 international. Perplexity 10/12, Gemini 9/12, ChatGPT 6/12, Claude 0/12.
  - Third-party platforms: 37% of Indian citation slots against 6% internationally.
  - Business websites: 54% of Indian slots against 83% internationally.
  - Reddit: 13 of 48 Indian answers.
  - All four engines named the same business on only 4 of 15 questions.
  - Claude searched on 10 and declined on 5, pointing users to directories.
  - Google Maps, Sulekha and Quora appear only as places an answer told people to look. YouTube and IndiaMART are not mentioned.
- [Publive AXP and IAMAI's "India AI Visibility Benchmark 2026"](https://axp.thepublive.com/resources/whitepapers/can-ai-read-india-inc) surfaced late and was not read. It looks aimed at large companies, not local services.
- Articles saying IndiaMART or Sulekha are "weighted heavily" by AI ([example](https://magicworksitsolutions.com/blog/geo-for-indian-businesses-2026/)) give no data.

### Inferences
- The docs/AEO-GEO.md plan (Google Business Profile, then Bing Places, then JustDial) holds up, and JustDial should be more than an "after launch" nice-to-have. It is the single best-evidenced Indian listing. Since one of its checklist items waits until after launch, that is still consistent, but it should go first after launch.
- IndiaMART is plausible for the B2B audience (housing societies, hospitals) only on general reasoning; there is no citation evidence for it.
- Running 5 to 10 of the team's real prompts and reading which domains are cited would produce better evidence for the Tricity than anything published. It is a free exercise that can be done before launch, because it does not depend on the site being live. Competitors and directories are already answering these questions.

### Gaps
- No independent or large-sample study of Indian local citations was found.
- Nothing was found specific to Punjab, the Tricity or water tank cleaning.
- Citation patterns in Hindi or Punjabi answers: no data at all.
- Whether JustDial's cited pages are category listings or business pages, which decides how much a listing helps, was not reported.

## Tracker support for Hindi, Punjabi and India location

### Takeaway
Hindi prompts work as plain text in tools that accept any prompt language, and several India-built trackers name Hindi or Hinglish. Only one tracker is reported to name Punjabi (AnswerTrace, top plan, per a competitor's page), and nothing confirms Google AI Mode answers in Punjabi. India is usually available at country level; city level is rare. For Tricity-level intent, the prompt text itself ("in Mohali") has to carry the location.

### Cited Findings

| Tool | India | City level | Language |
|---|---|---|---|
| [Otterly](https://otterly.ai/pricing) | [Yes, as listed by a third party](https://depra.ai/best-ai-visibility-tools-india) | Not stated | "Unlimited"; any prompt language per the same source |
| [Peec](https://peec.ai/pricing) | 1 country on Starter; India not confirmed | No | Unlimited languages. A [Shiprocket guide](https://aitlas.shiprocket.in/blog/best-ai-visibility-tools/) (snippet only, and it sells a rival) says no regional support, which conflicts |
| [Geoptie](https://geoptie.com/pricing) | 123 markets; India not itemised | Country | Not stated |
| [Knowatoa](https://knowatoa.com/pricing) | "Multiple" | Set at account, site or question level | Multiple |
| [Amplitude](https://amplitude.com/docs/amplitude-ai/ai-visibility/faq) | Not addressed | No | Any language; replies may come in English |
| [AthenaHQ](https://www.athenahq.ai/pricing) | Starter ($295) | No | Multi-language on Enterprise only |
| [Profound](https://www.tryprofound.com/pricing) | Trial 1 region | | Trial 1 language |
| [Presence Scout](https://presencescout.com/blog/best-ai-visibility-tools-india) | Yes (Google surfaces) | Yes, e.g. Jaipur, Pune | Hindi not mentioned |
| [Depra AI](https://depra.ai/best-ai-visibility-tools-india) | Yes | No, country level | English, Hinglish, code-mixed and "most other major languages" on every plan (own claim) |
| [AnswerTrace](https://depra.ai/best-ai-visibility-tools-india) | India-first | Not stated | English on Free, Hinglish on Starter, Hindi on Growth, and Pro adds one of Tamil, Telugu, Bengali, Marathi, Kannada, Gujarati, Punjabi, Malayalam or German. Per Depra, checked 21 Oct 2026; I could not open AnswerTrace's own pricing |
| [AnsarAEO](https://depra.ai/best-ai-visibility-tools-india) | India-built | Not stated | English, Hindi, Hinglish; Tamil, Bengali, Marathi on higher plans. Per Depra, checked 8 Oct 2026 |
| [Pallix](https://www.24-7pressrelease.com/press-release/537568/pallix-launches-an-ai-visibility-tool-built-for-india-tracking-what-chatgpt-perplexity-and-google-ai-tell-buyers) | India-built | Not stated | Code-mixed Hinglish; [Hindi prompts marketed](https://depra.ai/best-ai-visibility-tools-india) |
| [AITLAS](https://aitlas.shiprocket.in/pricing) | India-built | Not stated | Hindi content (not prompts) only on managed plans, and the page contradicts itself on which |
| [Elmo](https://www.elmohq.com/docs/user-guide/providers) | Not documented; country localisation "intentionally not exposed" for DataForSEO | No | Not documented |
| [Cloro](https://cloro.dev/docs/api-reference/endpoint/countries.md) (scraper) | Country targeting for nearly all countries | No | Warns English prompts in non-English countries may affect quality |

- [Google added Hindi to AI Mode in September 2025](https://searchengineland.com/google-expands-ai-mode-beyond-english-461680), then [Bengali, Kannada, Malayalam, Marathi, Tamil, Telugu and Urdu in October 2025](https://blog.google/intl/en-in/products/supercharging-search-for-india-new-languages-in-ai-mode-search-live-debuts/). Punjabi is not in those announcements.
- [AI Overviews in India launched in English and Hindi](https://inc42.com/?p=473577).
- [Depra's comparison](https://depra.ai/best-ai-visibility-tools-india) is the fullest India-specific list found, with dated checks of each vendor's page, but Depra sells one of the tools it compares. It also says Otterly, Peec and Semrush accept prompts in many languages, which conflicts with Shiprocket's claim. AnsarAEO's ₹1,999/mo price and 14-day trial appeared only in a search snippet.
- [Google's AI features build from results for the searcher's location](https://presencescout.com/blog/best-ai-visibility-tools-india), so a US-based check differs from an Indian one. This is a vendor statement, and consistent with [BrightLocal's cross-location overlap of 36 to 47%](https://www.brightlocal.com/research/local-ai-visibility-study/).

### Inferences
- A tracker "supporting a language" most likely means only that it passes text through. Any tool with free-text prompts should accept Devanagari and Gurmukhi. The real tests are whether the engine replies in that language, and whether the mention detector matches a brand name written in that script.
- Punjabi is the weak link across the whole stack: uncertain Google AI Mode support, one secondhand tracker claim on a top plan, and no evidence on what gets cited. The team should test by hand whether ChatGPT and Gemini answer local Punjabi prompts with citations at all, before spending anything on it. It may be that users writing in Punjabi get English sources.
- Prompts should reflect how people type: Hinglish and romanised Punjabi are likely as common as native scripts. This is a reasoned guess. docs/AEO-GEO.md already says to use people's words.
- Manual checks from an Indian phone are currently the only reliable way to see India-located consumer answers without paying for residential-proxy tooling.

### Gaps
- No source confirms any tracker testing Hindi or Punjabi AI Overviews from an Indian IP.
- Current (late 2026) AI Mode and AI Overviews language lists were not found; sources date from 2025, so Punjabi may have been added since.
- Peec's India and Hindi status could not be confirmed from its docs.
- AnswerTrace's and Depra's own pricing could not be confirmed; neither appeared in searches for their pricing pages.
- City-level targeting for Chandigarh, Mohali or Panchkula specifically: not confirmed for any tool.
