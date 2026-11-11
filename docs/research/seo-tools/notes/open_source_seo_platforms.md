# Open-source and self-hosted SEO platforms, suites and crawlers

All GitHub stars, licences, commit dates, release dates and image architectures in these notes were checked live on 2026-10-31 through the GitHub API, GHCR and Docker Hub unless a line says otherwise. Prices were read from vendor pages the same day. INR uses USD 1 = INR 95.07 ([open.er-api.com, 2026-10-31](https://open.er-api.com/v6/latest/USD)), so $1 = ₹95, $10 = ₹951, $20 = ₹1,901, $50 = ₹4,754.

VPS facts, measured on the box itself on 2026-10-31: aarch64, 2 vCPU, 11 GiB RAM (about 8.6 GiB available), 90 GB free disk, 4,096-byte page size, Docker not installed, Playwright Chromium and snap Chromium present.

## What exactly is every-app/open-seo, and why might rankme.fast be weak?

### Takeaway
OpenSEO is a very active, MIT-licensed workflow layer over DataForSEO: real product, real shipping pace, but nearly every data feature costs DataForSEO money and it has one open bug that hides page-2 rankings. RankMeFast has a wider feature list but is a five-week-old, one-person public beta with a heavier stack, no prebuilt images and audit findings its own issue tracker reports as false.

### Cited Findings

**OpenSEO: identity and activity**
- [every-app/open-seo](https://github.com/every-app/open-seo): MIT, 25,824 stars, 3,529 forks, created 2026-02-27, last commit 2026-10-31, latest release v0.1.22 on 2026-10-31 (at least five releases between 26 and 31 October). Pre-1.0.
- Contributions are concentrated: bensenescu 691 commits, carterwsmith 191, next highest 15 ([contributors API](https://github.com/every-app/open-seo/graphs/contributors)).
- Star growth: an HN submission said 1.6k on [2026-04-27](https://news.ycombinator.com/item?id=47926567); a comparison repo showed [23,897 at its last refresh](https://github.com/CorgiCorner/open-source-rank-trackers); it is 25,824 now. HN itself shows almost no discussion: that submission had 2 points and 0 comments, and [another](https://news.ycombinator.com/item?id=49491048) 1 point.

**OpenSEO: features**
- Workflows: keyword research, rank tracking, competitor insights, backlinks, site audits, AI visibility, plus MCP and agent skills for Claude Code, ChatGPT, Codex, Cursor ([README](https://github.com/every-app/open-seo)).
- MCP covers keyword and SERP research, domains, backlinks, local (Maps grids, Business Profile audits, reviews), AI visibility including scheduled prompt tracking, Search Console and IndexNow; rank tracking through MCP is read-only as listed ([MCP docs](https://openseo.so/docs/mcp)). A [September review](https://ryandoser.com/openseo-review/) said no MCP tools covered AI visibility; current docs supersede that.
- Site audit uses its own crawler, `OpenSEO-Audit/1.0`, about 1 request per second, respects robots.txt ([crawler docs](https://github.com/every-app/open-seo/blob/main/web/content/docs/crawler.md)). Self-hosted Docker audits go up to 10,000 pages (1,000 with JS rendering) ([Docker docs](https://github.com/every-app/open-seo/blob/main/docs/SELF_HOSTING_DOCKER.md)). This settles a conflict: a [listing site](https://www.opensourcealternatives.to/item/open-seo) says it has no crawler; the repo shows it does.

**OpenSEO: data sources and cost**
- A DataForSEO key is required; OpenRouter powers the SAM assistant; Google OAuth (optional) links Search Console and GA4; Context API key (optional) gives JS rendering; Google Maps key (optional) ([Docker docs](https://github.com/every-app/open-seo/blob/main/docs/SELF_HOSTING_DOCKER.md)).
- Self-hosting means paying providers directly with no OpenSEO markup; DataForSEO gives $1 trial credit and a $50 minimum top-up (₹4,754) ([DataForSEO key docs](https://github.com/every-app/open-seo/blob/main/docs/DATAFORSEO_API_KEY.md)). The README's DataForSEO links carry an affiliate code, `aff=255379` ([README](https://github.com/every-app/open-seo)).
- Hosted: Base $10/mo (₹951) with $10 usage, Pro $30/mo, Agency $200/mo; every action is data cost plus 28%; no permanent free plan, $0.50 trial credit, and an active subscription is required even with top-up credits ([pricing](https://openseo.so/pricing)). That contradicts the README's "No subscriptions" for the hosted case. Estimates there: keyword search about $0.05, backlink check about $0.08, AI prompt check about $0.002.
- Code constants: DataForSEO rank check first page $0.0006 queued or $0.002 live, each extra page 75% of base ($0.00045 or $0.0015) ([rank-tracking.ts](https://github.com/every-app/open-seo/blob/main/src/shared/rank-tracking.ts)).
- Independent test: 150 keyword ideas, a backlink overview, a live SERP and two AI lookups cost about 70 cents direct, about 89 cents with the markup. The author read the code and did not use the app, is a disclosed DataForSEO affiliate and sells a competing product ([Ryan Doser](https://ryandoser.com/openseo-review/)).

**OpenSEO: deployment**
- Two paths: Docker Compose, or Cloudflare ([README](https://github.com/every-app/open-seo)). Docker needs at least 4 GiB for Docker, and runs five services (runtime capped at 2 GiB, RustFS storage, crawl gateway, nginx, init) ([compose.yaml](https://github.com/every-app/open-seo/blob/main/deploy/standalone/compose.yaml)).
- `ghcr.io/every-app/open-seo-standalone` publishes amd64 and arm64 (manifest checked live). It crash-loops on 16 KiB page kernels such as Raspberry Pi 5 ([#475](https://github.com/every-app/open-seo/issues/475)); this VPS uses 4 KiB pages, so that bug does not apply.
- Cloudflare free plan: audits read about 40 pages then fail, because of 50-subrequest and 10 ms CPU limits ([#377](https://github.com/every-app/open-seo/issues/377)).

**OpenSEO: India coverage**
- India (location 2356) offers `en` and `hi`, with no Punjabi, from the DataForSEO Labs locale list ([keyword-locations.ts](https://github.com/every-app/open-seo/blob/main/src/shared/keyword-locations.ts)). SERP location search includes City, County, Municipality and Region ([serp-locations.ts](https://github.com/every-app/open-seo/blob/main/src/server/lib/dataforseo/serp-locations.ts)).

**OpenSEO: open problems that matter here**
- [#362](https://github.com/every-app/open-seo/issues/362) (open): live rank checks silently report no position for anything below about organic 12, whatever `serpDepth` is, and the blank looks the same as "not in top 100".
- [#335](https://github.com/every-app/open-seo/issues/335) and [#408](https://github.com/every-app/open-seo/issues/408) (open): memory retained per HTTP request on the older self-host image, measured at about 90 MiB per 1,000 requests.
- No DataForSEO-free mode yet: [#294](https://github.com/every-app/open-seo/issues/294) (DataForSEO-free degradation) and [#210](https://github.com/every-app/open-seo/issues/210) (pluggable SERP provider) are open. [#99](https://github.com/every-app/open-seo/issues/99) (AEO checks in site audit) is also open.
- 131 open issues and PRs at last count ([repo](https://github.com/every-app/open-seo)).

**RankMeFast**
- [SelmiAbderrahim/rankme.fast](https://github.com/SelmiAbderrahim/rankme.fast): AGPL-3.0, 792 stars, 32 forks, created 2026-09-22, last push 2026-10-28, no GitHub releases, version badge 0.1.0, labelled public beta with "breaking changes between releases". One contributor, 125 commits ([contributors API](https://github.com/SelmiAbderrahim/rankme.fast/graphs/contributors)).
- It does not crawl or scrape itself: everything calls vendors with your keys (DataForSEO, Google APIs, Firecrawl, optional LLM), and each provider defaults to a `fake` backend ([README](https://github.com/SelmiAbderrahim/rankme.fast)). Site audits have 26 checks.
- Stack is MongoDB 7, Redis 7, PostgreSQL 17, API, worker and web, with the three app services built from source (`build:` in [docker-compose.yml](https://github.com/SelmiAbderrahim/rankme.fast/blob/main/docker-compose.yml)); the guide says `docker compose up -d --build` ([self-hosting guide](https://github.com/SelmiAbderrahim/rankme.fast/blob/main/docs/self-hosting.en.md)). A grep of its docs and workflows found no mention of arm64.
- Audit correctness problems filed against itself in late October: [#54](https://github.com/SelmiAbderrahim/rankme.fast/issues/54) lists assets returning HTTP 200 as broken (the only "Fix now" item), [#53](https://github.com/SelmiAbderrahim/rankme.fast/issues/53) marks a reachable sitemap as not evaluated, [#55](https://github.com/SelmiAbderrahim/rankme.fast/issues/55) shows contradictory change badges, [#56](https://github.com/SelmiAbderrahim/rankme.fast/issues/56) ranks the only "Fix now" below four warnings, [#57](https://github.com/SelmiAbderrahim/rankme.fast/issues/57) drops a finding from the AI summary. Some were being fixed in the [last commits](https://github.com/SelmiAbderrahim/rankme.fast/commits).
- UI is in seven languages (English, Arabic, French, German, Spanish, Russian, Chinese), no Hindi or Punjabi ([README](https://github.com/SelmiAbderrahim/rankme.fast)).

### Inferences
- The user's verdicts look fair. OpenSEO's advantage is a prebuilt arm64 image, a much bigger contributor base and shipping speed; RankMeFast's breadth (Bing, Amazon, ASO, white-label reports) is aimed at agencies, not one local business.
- RankMeFast's AGPL licence is harmless for internal use. The real weakness is maturity and that "self-hosted" still means paying the same vendors with more containers to run. It has some nice ideas, such as a shared vendor-response cache and plain-language findings.
- For OpenSEO on this VPS: use Docker, not Cloudflare free. Docker would have to be installed first, which is a server-level change under the repo's `~/vps` rules. Memory is fine.
- #362 matters more than usual: a new site spends months below position 12, which is exactly where the tracker can go blank on live checks. Verify blanks with a manual SERP until the issue closes. The issue covers the live endpoint; #334, mentioned there, is a separate failure in scheduled checks.
- "Open-source Semrush" is marketing shorthand. It has no independent keyword or link index; data quality equals DataForSEO's.

### Gaps
- Could not measure star authenticity. GitHub's GraphQL `stargazers` edges came back empty for every repo tried, so the jump from 1.6k to 25k+ in six months is unexplained, not proven organic or inflated.
- No hands-on test of OpenSEO or RankMeFast was run; nothing was installed. No independent accuracy test of OpenSEO rank tracking or audits was found.
- RankMeFast on arm64 is untested. Its base images are likely multi-arch but the app build was not tried.
- Reddit could not be read: the search tool refuses reddit.com, and general searches returned no threads. Sentiment here comes only from GitHub issues, HN and blogs.

## What are the closest alternatives?

### Takeaway
For a small local site the best value is a mix of free pieces, not a single suite: crawlseo for Search Console plus crawl plus vitals with no paid API, SerpBear with Serper for rank tracking, SiteOne or squirrelscan for CLI audits, and Limelit or Canonry only if AI-answer tracking is wanted. Every "all-in-one" here (OpenSEO, Bisibility, RankMeFast, AutoSEO) resells or wraps DataForSEO-style data.

### Cited Findings

Table columns: stars / last commit / latest release. BYOK means your own paid key. Links in the first column are the source for that row unless noted.

**All-in-one platforms**

| Tool | Stats | Licence | Data dependency | Running cost | arm64 / Docker | Honest limits |
|---|---|---|---|---|---|---|
| [OpenSEO](https://github.com/every-app/open-seo) | 25,824 / 2026-10-31 / v0.1.22 | MIT | DataForSEO required, OpenRouter for assistant | VPS plus $50 top-up, then usage. Hosted $10/mo plus 28% | Yes, GHCR multi-arch | See section above |
| [Bisibility](https://github.com/CorgiCorner/bisibility) | 591 / 2026-10-27 / v0.44.0 | AGPL-3.0 | BYOK DataForSEO or SerpApi ([integrations](https://github.com/CorgiCorner/open-source-rank-trackers)) | Provider usage; paid hosted tier | Yes, GHCR multi-arch | Scheduling needs a worker and Temporal, PostgreSQL 16+. Audit only "a small sample of pages". Its maintainer also runs the comparison repo cited here |
| [RankMeFast](https://github.com/SelmiAbderrahim/rankme.fast) | 792 / 2026-10-28 / none | AGPL-3.0 | DataForSEO, Google, Firecrawl, LLM | Vendors; six containers | Not documented, builds from source | See section above |
| [AutoSEO](https://github.com/codextde/autoseo) | 19 / 2026-10-31 / v0.1.0 | Non-standard (API reports NOASSERTION) | Not verified | Free self-host, cloud $50/mo | Not checked | Five weeks old, licence needs reading |
| [All-In-One-Free-SEO-Tool](https://github.com/IamRamgarhia/All-In-One-Free-SEO-Tool) | 105 / 2026-10-30 / v0.10.1 | MIT | Claims "no paid APIs required", free Gemini or Groq keys | Free AI keys | Not checked | README claims 92 tools (description says 99) and replacing ₹25,000+/mo. Indian author, INR pricing. See overhyped section |
| [SEO Playground](https://github.com/paulmassen/seo-playground) | 82 / 2026-10-28 / v0.6.3 | None stated | DataForSEO | Usage | Not checked | No licence on the repo. Strong local features (geo-grid, review velocity). Offers an affiliate link at setup |
| [SEO Command Center](https://github.com/testedmedia/seo-command-center) | 24 / 2026-07-16 / v1.0.0 | MIT | DataForSEO (`aff=` link in README) | Claims about $4/mo | Not checked | Silent since July |
| [OpenGSC](https://github.com/fenjo26/OpenGSC) | 52 / 2026-10-30 / none | MIT | Search Console, AI keys | VPS | Not checked | Installer is `curl \| sudo bash`; includes a "private indexing network", which deserves caution |
| [Citelens](https://github.com/Manavarya09/citelens) | 10 / 2026-06-13 / none | MIT | Not verified | Not verified | Not checked | Pushed for two days, then stopped |

**Search Console-first monitors (no paid data needed)**

| Tool | Stats | Licence | Data dependency | Running cost | arm64 / Docker | Honest limits |
|---|---|---|---|---|---|---|
| [crawlseo](https://github.com/crawlseo/crawlseo) | 659 / 2026-10-27 / v0.3.5 | MIT | Search Console, PageSpeed, own crawler. DataForSEO optional; Google Autocomplete as free keyword fallback; Bing key optional | VPS only | Yes, GHCR multi-arch; Docker Compose, PostgreSQL | Crawl default 2,000 pages. Read-only MCP. No competitor rank data without DataForSEO. Young |
| [iannuttall/seo](https://github.com/iannuttall/seo) | 603 / 2026-10-30 / none | Apache-2.0 | Search Console, GA4, Clicky, Bing, own crawl | Free | MCP and CLI, not a dashboard | For agents only |
| [SEOMonster](https://github.com/avansaber/seo-monster) | 559 / 2026-10-29 / v0.9.3 | MIT | Search Console, Analytics, PageSpeed | Free | Local MCP | Chat interface, no dashboard |
| [gsc-hub](https://github.com/izzipizzy/gsc-hub) | 22 / 2026-10-27 | MIT | Search Console | VPS | Not checked | Portfolio focus, small |

**Rank trackers**

| Tool | Stats | Licence | Data dependency | Running cost | arm64 / Docker | Honest limits |
|---|---|---|---|---|---|---|
| [SerpBear](https://github.com/towfiqi/serpbear) | 2,153 / 2026-10-30 / v3.1.2 | MIT | Serper, SerpApi, SearchApi, HasData, Serply, ValueSERP, CrazySERP or your proxies; Search Console; Google Ads test account for volumes | About $1/1,000 pages on Serper | Yes, Docker Hub amd64 and arm64 | See notes below |
| [SerpTrail](https://github.com/serpapi/serptrail) | 50 / 2026-09-28 / none | MIT | SerpApi only | SerpApi plan | Rails + SQLite, arm64 not checked | Made by SerpApi as a funnel. Tracks AI Overview citations, up to five pages |
| [SearchMirror](https://github.com/databluedev/searchmirror) | 110 / 2026-10-01 / none | AGPL-3.0 | DataBlue credits only | Vendor credits | Not checked | Vendor lock-in, 0 forks |
| [Serposcope](https://github.com/serphacker/serposcope) | 755 / last commit 2022-01-15 per [comparison](https://github.com/CorgiCorner/open-source-rank-trackers) | MIT | Own scraping | Dead | n/a | Archived, "LEGACY CODE" |
| [OpenGMB](https://github.com/synectus/OpenGMB) | 9 / 2026-10-29 / none | MIT | Official Business Profile API, Maps rank tracking | VPS | Docker Compose, arch not checked | Created 2026-10-24. Worth watching since Google Business Profile drives local leads |

SerpBear notes:
- The default "basic" strategy scrapes page 1 only. "Custom" scrapes up to 10 pages, "smart" scrapes around the last known position ([scraper.ts](https://github.com/towfiqi/serpbear/blob/main/utils/scraper.ts)), which limits Serper cost for a new site.
- City-level tracking works for Serper, SerpApi, SearchApi, HasData and CrazySERP (`allowsCity: true` in [scrapers](https://github.com/towfiqi/serpbear/tree/main/scrapers/services)). City-level scraping and a later fix for Serper's city filter are in the [changelog](https://github.com/towfiqi/serpbear/blob/main/CHANGELOG.md). Older reviews saying it has no city targeting are out of date.
- Language comes from a per-country table, not per keyword ([serper.ts](https://github.com/towfiqi/serpbear/blob/main/scrapers/services/serper.ts)). India is hard-coded to `hi` in [countries.ts](https://github.com/towfiqi/serpbear/blob/main/utils/countries.ts), so on Serper every India check sends `gl=IN&hl=hi`. English-interface results (`hl=en`), which are likely what most Tricity searchers see, cannot be chosen per keyword without patching that table.
- The README contradicts itself: step 4 says get a free ScrapingRobot key while its table marks ScrapingRobot, ScrapingAnt and SpaceSerp "Doesn't work Anymore" ([README](https://github.com/towfiqi/serpbear)). The [docs](https://docs.serpbear.com/integrations) still advertise ScrapingRobot's 5,000/month.
- Activity: it went quiet after v3.1.0 (2026-03-27), then v3.1.1 and v3.1.2 landed on 2026-10-29 and 30, the first fixing unauthenticated access to `/api/notify` ([changelog](https://github.com/towfiqi/serpbear/blob/main/CHANGELOG.md)). 78 open issues, including [#79](https://github.com/towfiqi/serpbear/issues/79) (cron broken) and [#216](https://github.com/towfiqi/serpbear/issues/216) (Google Ads integration broken).
- Keyword research requires a Google Ads test account, which is its own hassle ([README](https://github.com/towfiqi/serpbear)).

**Crawlers and audit tools**

| Tool | Stats | Licence | Data dependency | Running cost | arm64 / Docker | Honest limits |
|---|---|---|---|---|---|---|
| [SiteOne Crawler](https://github.com/janreges/siteone-crawler) | 989 / 2026-09-27 / v2.5.1 (2026-06-27) | MIT | Own crawler | Free | Yes, native Linux arm64 binary, deb, rpm, apk | CLI with an interactive wizard, no history dashboard. Rewritten in Rust. HTML report, sitemap generation, CI quality gate (`--ci`), Markdown export |
| [SEOnaut](https://github.com/StJudeWasHere/seonaut) | 847 / 2026-10-08 / none | MIT | Own crawler, MySQL 8.4 | Free on VPS | GHCR `latest` is amd64 only, so build from source on arm64 | Scheduled crawls and webhooks are unmerged PRs ([#55](https://github.com/StJudeWasHere/seonaut/pull/55), [#56](https://github.com/StJudeWasHere/seonaut/pull/56)). Hosted version at seonaut.org, price not checked |
| [LibreCrawl](https://github.com/PhialsBasement/LibreCrawl) | 1,086 / 2026-09-29 / none | MIT | Own crawler, PageSpeed optional, JS rendering | Free | Dockerfile in repo, arch not checked | Flask app, no tagged releases, demo withdrawn |
| [squirrelscan](https://github.com/squirrelscan/squirrelscan) | 301 / 2026-10-31 / v0.0.148 | MIT | Own crawler; JS rendering needs sign-in to its cloud, AI analysis is a cloud feature | CLI free when signed out | Yes, `linux-arm64` binary | 300+ rules including llms.txt and AI crawler checks. Open-core: scheduled audits on Pro/Team |
| [Open SEO Crawler](https://github.com/puneetindersingh/open-seo-crawler) | 79 / 2026-10-23 / mcp-v1.0.0 | MIT | Own crawler | Free | Linux installer, arch not checked | Requests a sample as Googlebot, GPTBot and others to compare what bots get. Small, one author |
| [Crawlie](https://github.com/spronta/crawlie) | 116 / 2026-10-26 / v0.5.3 | Non-standard (NOASSERTION) | Own crawler | Free | npm | MCP, llms.txt checks ([Show HN](https://news.ycombinator.com/item?id=48592731), 20 points) |
| [Unlighthouse](https://github.com/harlan-zw/unlighthouse) | 4,928 / 2026-10-27 / v0.19.1 | MIT | Lighthouse on your machine | Free | Needs an arm64 Chromium, see below | Lighthouse scores across all pages; pair with a crawler for link and canonical checks. [148-point HN thread](https://news.ycombinator.com/item?id=35868447) in 2023 |
| [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) | 7,122 / 2026-10-31 / v0.15.1 (2025-06-26) | Apache-2.0 | Lighthouse | Free; server optional | Same Chromium caveat | No release in 16 months, though commits continue |
| [Lighthouse](https://github.com/GoogleChrome/lighthouse) | 30,988 / 2026-10-30 | Apache-2.0 | Local Chrome | Free | Same | Single page |
| [sitespeed.io](https://github.com/sitespeedio/sitespeed.io) | 5,047 / 2026-10-30 | MIT | Own | Free | Not checked | Performance, overkill here |
| [linkinator](https://github.com/JustinBeckwith/linkinator) | 1,282 / 2026-10-29 / v8.1.0 | MIT | Own | Free | npm | Broken links only |
| [python-seo-analyzer](https://github.com/sethblack/python-seo-analyzer) | 1,489 / 2026-10-26 / 2025.4.3 | Non-standard | Own | Free | Not checked | Basic on-page |
| [advertools](https://github.com/eliasdabbas/advertools) | 1,493 / 2026-06-30 | MIT | Own; Python library | Free | Not checked | Library, not an app. Needs Python skills |
| [site-audit-seo](https://github.com/viasite/site-audit-seo) | 306 / 2026-10-27 / v6.0.1 (2025-06-24) | Non-standard | Own + Lighthouse | Free | Not checked | Web service plus CLI |
| [Web-Check](https://github.com/lissy93/web-check) | 35,312 / 2026-10-30 | MIT | Own | Free | Not checked | OSINT summary, not SEO |
| [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/pricing/) (proprietary, benchmark) | n/a, v24.3 | Proprietary | Own | Free to 500 URLs; £199/year | Yes, Ubuntu arm64 .deb, Fedora aarch64 .rpm | Has an Ubuntu arm64 build. Log File Analyser v7.1 also ships for arm64 |

Chromium on arm64:
- Chrome for Testing has no Linux arm64 build, so Puppeteer's default download fails ([puppeteer #10054](https://github.com/puppeteer/puppeteer/issues/10054)). This VPS already has Playwright Chromium and snap Chromium, so a system Chromium path is the likely fix.

**AI visibility, AEO and GEO trackers** (overlaps with other researchers; only self-hosted options listed)

| Tool | Stats | Licence | Data dependency | Running cost | arm64 / Docker | Honest limits |
|---|---|---|---|---|---|---|
| [Limelit Open](https://github.com/limelit-co/open) | 255 / 2026-10-30 / v0.1.0-rc.14 | Apache-2.0 | BYOK keys | LLM or API usage | Yes, GHCR multi-arch; "one binary" | Release candidates. Open core of hosted product. 171 forks on 255 stars is unusual |
| [Elmo](https://github.com/elmohq/elmo) | 541 / 2026-10-30 / v0.7.7 | MIT | Not fully verified, tracks ChatGPT, Claude, Perplexity, Gemini, AI Overviews | Provider usage | GHCR path not confirmed | Live demo exists |
| [Canonry](https://github.com/Canonry/canonry) | 196 / 2026-10-30 / v7.50.0 | MIT | BYOK providers, optional DataForSEO; SQLite | Provider usage | Node, arch not checked | Agent-first (CLI, MCP, API) plus web UI. Lightest stack of the group |
| [OneGlanse](https://github.com/oneglanse/oneglanse) | 241 / 2026-10-04 / none | MIT | Runs prompts on the real AI websites with your accounts | Analysis-model key | Not checked | Avoids the API-versus-UI gap, but automating consumer accounts may hit terms and captchas |
| [GEO/AEO Tracker](https://github.com/danishashko/geo-aeo-tracker) | 313 / 2026-10-19 / v1.6.0 | MIT | Bright Data AI Scraper API | Bright Data usage | Next.js | "Built with Bright Data", sponsor funnel |
| [Ansvisor](https://github.com/ansvisor/ansvisor) | 217 / 2026-10-30 / v0.3.0 | MIT | Not verified | Not verified | Not checked | 106 forks on 217 stars; broad scope for its age |
| [GetCito](https://github.com/ai-search-guru/getcito-worlds-first-open-source-aio-aeo-or-geo-tool) | 502 / 2026-09-28 / v9.1.0 | Non-standard | Not verified | Not verified | Not checked | "World's first" in the repo name; licence needs reading |
| [GEO Optimizer](https://github.com/Auriti-Labs/geo-optimizer-skill) | 1,244 / 2026-10-30 / v4.19.9 | MIT | Own crawl, no key | Free | `uvx` CLI | Scores crawlability and citation readiness. The 0 to 100 score is the tool's own model |
| [GEOFlow](https://github.com/yaojingang/GEOFlow) | 3,975 / 2026-10-25 | AGPL-3.0 | Content engineering | Not verified | Not checked | Mass content distribution, wrong tool for a local site |

**Keyword, backlink and adjacent tools**

| Tool | Stats | Licence | Data dependency | Notes |
|---|---|---|---|---|
| [Keyword Pro](https://github.com/AgriciDaniel/keywordpro) | 282 / 2026-10-30 / v1.0.0-rc.1 | Apache-2.0 | DataForSEO | Local keyword console, guided report, exports |
| [trends-checker](https://github.com/akvise/trends-checker) | 399 / 2026-04-08 | MIT | Google Trends | Python CLI, free |
| [people-also-ask](https://github.com/sundios/people-also-ask) | 143 / 2026-01-04 | None stated | Scrapes Google | Free, fragile |
| [openlink](https://github.com/0xshaikh/openlink) | 1 / 2026-10-25 | MIT | Bing, DuckDuckGo, Common Crawl, RDAP | The only keyless backlink option found. "DR-lite" is homemade. Rank data is DuckDuckGo and Bing, not Google |
| [Open PageRank](https://keywordseverywhere.com/openpagerank) | Service | Free API | Common Crawl web graph | 30,000 domains/month free, 0 to 10 authority score, history to 2018, now run by Keywords Everywhere. Sample shows `as_of` 2026-06-01 |
| [dataforseo/mcp-server-typescript](https://github.com/dataforseo/mcp-server-typescript) | 256 / 2026-10-02 | Apache-2.0 | DataForSEO | Direct agent access; skips any app |
| [claude-seo](https://github.com/AgriciDaniel/claude-seo) | 24,678 / 2026-10-22 | MIT | Agent skills | Not a platform |
| [squirrelscan/skills](https://github.com/squirrelscan/skills), [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 105; 57,574 | MIT | Agent skills | Not platforms |

No true open-source backlink index was found. Searching GitHub for backlink checkers returned one repo with 0 stars ([search result: VeMeV/backlink-checker](https://github.com/VeMeV/backlink-checker)). Everything real buys data.

**Log and bot analysis**

| Tool | Stats | Licence | Data dependency | arm64 / Docker | Limits |
|---|---|---|---|---|---|
| [GoAccess](https://github.com/allinurl/goaccess) | 21,102 / 2026-10-28 / tag v1.12 | MIT | Access logs | Yes, Docker Hub arm64 | Needs logs. See Vercel below |
| [Screaming Frog Log File Analyser](https://www.screamingfrog.co.uk/seo-spider/pricing/) | v7.1 | Proprietary | Access logs | Ubuntu arm64 | Free limits not checked |

- Vercel Drains are Pro or Enterprise only. Hobby and Pro Trial cannot use them. Price is $0.50 per GB, measured on uncompressed JSON. Logs can go to any custom HTTP endpoint ([Vercel docs, updated 2026-09-01](https://vercel.com/docs/drains)).
- Third-party Vercel AI-bot tools exist ([Profound](https://vercel.com/integrations/profound), [a community Next.js middleware tool](https://community.vercel.com/t/i-built-a-small-tool-to-see-which-ai-bots-are-hitting-my-vercel-site-with-page-level-analytics/36919)), but no established self-hosted one was found.

**Analytics**

| Tool | Stats | Licence | Store | arm64 / Docker | Idle RAM |
|---|---|---|---|---|---|
| [Umami](https://github.com/umami-software/umami) | 39,814 / 2026-10-31 / v3.4.1 | MIT | Postgres | Yes, GHCR multi-arch | About 400 MB ([blog](https://web-aon.pages.dev/blog/self-hosted-analytics-compared)) |
| [Plausible](https://github.com/plausible/analytics) CE | 29,730 / 2026-10-30; [CE repo](https://github.com/plausible/community-edition) last push 2026-05-15 | AGPL-3.0 | Postgres + ClickHouse | Yes, GHCR `v3` multi-arch | About 1.8 GB ([blog](https://web-aon.pages.dev/blog/self-hosted-analytics-compared)) |
| [Rybbit](https://github.com/rybbit-io/rybbit) | 13,193 / 2026-10-26 / v2.9.2 | AGPL-3.0 | ClickHouse, Postgres, Redis | Yes, GHCR multi-arch; ClickHouse image has arm64 | 2 GB minimum, per sources in [Railway listing](https://railway.com/deploy/rybbit-analytics) |
| [Matomo](https://github.com/matomo-org/matomo) | 21,989 / 2026-10-30 | GPL-3.0 | PHP app, store not checked | Not checked | Not checked; 2,561 open issues |

The repo already ships PostHog (paused until launch) per `/home/ubuntu/Programming/cleantank/CLAUDE.md`, so any of these would be a second analytics tool.

**Lists and discovery sources**
- [i365dev/awesome-seo](https://github.com/i365dev/awesome-seo) (2,837 stars), [serpapi/awesome-seo-tools](https://github.com/serpapi/awesome-seo-tools) (1,137, by a vendor), [Suganthan-Mohanadasan/awesome-seo-tools](https://github.com/Suganthan-Mohanadasan/awesome-seo-tools) (54), [opensourceseotools.com](https://opensourceseotools.com) (same creator as Bisibility), [CorgiCorner/open-source-rank-trackers](https://github.com/CorgiCorner/open-source-rank-trackers).

### Inferences
- Suggested order for Clean Tank: (1) now, free: Search Console, then SiteOne or squirrelscan against staging; (2) at launch: crawlseo on the VPS for ongoing monitoring; (3) SerpBear with Serper when there are keywords worth tracking; (4) buy the $50 DataForSEO top-up only when competitor research or backlinks are actually needed, then OpenSEO or the DataForSEO MCP becomes worthwhile. Going straight to the MCP avoids running a suite.
- crawlseo plus SerpBear covers most of what a local site needs at ₹0 for software. The gaps are competitor keyword data and backlinks, which need paid data anyway.
- Google Business Profile is likely worth more to a local business than any crawler. Local SERP data is where OpenSEO, SEO Playground and OpenGMB differentiate, and all need checking against actual Tricity results.
- All these Docker tools would be the VPS's first containers. Each needs a subdomain and auth; follow `~/vps/README.md`.

### Gaps
- arm64 not checked for tools marked "Not checked"; elmo's GHCR path returned denied, which may just mean a different image name.
- Elmo, Ansvisor and GetCito data dependencies and prices were not read in full.
- Screaming Frog headless use under the free licence on a server was not verified.
- SerpBear's locale limit was read from code, not tested live. How much `hl=hi` versus `hl=en` changes positions for Tricity queries is unknown.

## What cheap data APIs power these tools, what do they cost and how is India coverage?

### Takeaway
DataForSEO is cheapest per SERP ($0.60 per 1,000 standard queue) and the broadest, but needs a $50 (₹4,754) top-up. Serper is the easiest start, with 2,500 free queries. SerpApi's 250 free searches a month are useful and it has verified Chandigarh and Mohali targeting. Google Custom Search is not an option, and Brave is not Google data.

### Cited Findings

| API | Free | Paid entry | Per 1,000 | Notes |
|---|---|---|---|---|
| [DataForSEO SERP](https://dataforseo.com/pricing/serp/google-organic-serp-api) | $1 trial credit, usable with no time limit ([help centre](https://dev_wp.dataforseo.com/help-center/how-does-your-free-unlimited-trial-work)) | $50 (₹4,754) minimum top-up, balance does not expire ([pricing](https://dataforseo.com/pricing)) | $0.60 standard (₹57), $1.20 priority, $2.00 live | Location, language and device do not change price |
| [Serper](https://serper.dev/) | 2,500 one-time, no card | $50 for 50,000 credits | $1.00 (₹95) | Credits expire after 6 months; excludes tax. Larger packs to $0.30 |
| [SerpApi](https://serpapi.com/pricing) | 250/month | $25/mo for 1,000 (over budget) | $25.00 Starter, $15.00 Developer | Free tier is the only useful part here |
| [ValueSERP](https://trajectdata.com/pricing/value-serp-api) | Trial, limit not stated | $50/mo for 25,000 credits, annual billing | $1.60; headline "PAYG from $2.50" | Now under Traject Data; page gives conflicting numbers ($0.50 elsewhere on the page) |
| HasData (formerly served from Scrape-it.Cloud) | 100 free per [SerpBase's list](https://github.com/serpbase-dev/serp-api-comparison) | $29/mo for 10,000 per [SerpBear README](https://github.com/towfiqi/serpbear) | From $0.83 per that list | SerpBear's `hasdata.ts` still calls `api.scrape-it.cloud` ([code](https://github.com/towfiqi/serpbear/blob/main/scrapers/services/hasdata.ts)). [TrustRadius](https://www.trustradius.com/compare-products/scrape-it-cloud-web-scraping-api-vs-serpapi) lists Scrape-It at $30 to $200/mo, age unknown |
| [Brave Search](https://brave.com/search/api/) | $5 monthly credits, about 1,000 requests | Prepaid, card required | $5.00 | Own index, not Google. Free plan [ended February 2026](https://www.implicator.ai/brave-drops-free-search-api-tier-puts-all-developers-on-metered-billing/). The page also says "up to $20 in free calls", unexplained |
| [Google Custom Search JSON](https://developers.google.com/custom-search/v1/overview) | Was 100/day | $5 | Closed to new customers; existing users have until 2027-01-01 | Unavailable |
| [SerpBase](https://github.com/serpbase-dev/serp-api-comparison) | n/a | $3 for 10,000 (valid 1 month) | $0.30 to $0.50 | Vendor's own table ranks itself first; treat as a claim. Scrapingdog, SERPHouse, AvesAPI and others are also listed there |

**DataForSEO beyond SERP** (current live pages)
- Keywords Data from $0.0012/task; DataForSEO Labs $0.012/task + $0.00012/item; On-Page from $0.00015/page ([pricing](https://dataforseo.com/pricing)). Google Ads search volume was reported at [$0.06 per task for up to 1,000 keywords](https://dataforseo.com/keyword-planner-api); this may predate the July rise.
- Backlinks $0.024/task + $0.000036/row, so about $0.06 for 1,000 rows ([pricing](https://dataforseo.com/pricing/backlinks/backlinks)).
- On 2026-07-01 DataForSEO raised most of Labs, Backlinks, Keywords Data, On-Page and others by about 20% and removed the $100 monthly minimum for Backlinks and LLM Mentions ([announcement](https://dataforseo.com/update/pricing-update-in-dataforseo-apis)). Older pages and reviews citing the $100 minimum are out of date.
- Add-ons: `load_async_ai_overview` +$0.0006, keywords with operators like `site:` cost 5x ([docs](https://docs.dataforseo.com/v3/serp/google/organic/task_post/)).
- Extra-page billing conflicts: the [pricing page](https://dataforseo.com/pricing/serp/google-organic-serp-api) says one base price per extra 10 results; OpenSEO's [constants](https://github.com/every-app/open-seo/blob/main/src/shared/rank-tracking.ts) say 75% of base.
- AI Optimization API has LLM Responses (ChatGPT, Claude, Gemini, Perplexity), LLM Scraper, AI Keyword Data and LLM Mentions; the last two are Live only ([docs](https://docs.dataforseo.com/v3/ai_optimization/overview/)). OpenSEO's code uses $0.0012 per AI record, $0.004 live ([ai-visibility.ts](https://github.com/every-app/open-seo/blob/main/src/shared/ai-visibility.ts)). LLM Mentions reads a stored database, so young brands can show near zero ([Doser](https://ryandoser.com/openseo-review/)).

**num=100**
- Google disabled `&num=100` around mid-September 2025, so 100 results take about 10 page requests instead of one, per [Keyword Insights via Seo Sherpa](https://seosherpa.com/google-just-killed-num-100-what-seos-need-to-know/) and [Scrapingdog](https://www.scrapingdog.com/blog/building-a-google-keyword-rank-tracker-using-google-serp-api-and-n8n/). Sources are vendors; Google has not confirmed permanence. SerpBear still sends `num=100` to SerpApi and SearchApi ([serpapi.ts](https://github.com/towfiqi/serpbear/blob/main/scrapers/services/serpapi.ts)), so those paths may return fewer results than that suggests.

**India, Hindi and Punjabi**
- SerpApi, read live from its public JSON: Chandigarh is a City target ([locations](https://serpapi.com/locations.json?q=Chandigarh&limit=5)), Mohali, Punjab is a Municipality ([locations](https://serpapi.com/locations.json?q=Mohali&limit=3)), `gl=in`, and `hl` includes `hi` and `pa` ([languages](https://serpapi.com/google-languages.json)).
- DataForSEO Google Ads locations match Google Geographical Targeting ([docs](https://docs.dataforseo.com/v3/keywords_data/google_ads/overview/)). SERP tasks take `location_code`, `location_name` or a coordinate plus radius ([docs](https://docs.dataforseo.com/v3/serp/google/organic/task_post/)), so a lat/long around Tricity should work.
- DataForSEO Labs: India is `en` and `hi` only, per OpenSEO's copy of the Labs list ([keyword-locations.ts](https://github.com/every-app/open-seo/blob/main/src/shared/keyword-locations.ts)). No Punjabi in Labs, so no Punjabi difficulty or ideas from that source.
- Serper accepts `gl`, `hl` and `location`, as SerpBear's URL shows ([serper.ts](https://github.com/towfiqi/serpbear/blob/main/scrapers/services/serper.ts)), so a direct call can choose `hl=en`, `hi` or `pa`, while SerpBear itself fixes India to `hi` ([countries.ts](https://github.com/towfiqi/serpbear/blob/main/utils/countries.ts)). Not tested live.
- Brave: India and Hindi support is not stated on the [query page](https://api-dashboard.search.brave.com/app/documentation/web-search/query).

### Inferences
- Rank-tracking cost for a realistic plan: 40 keywords × 3 cities (Chandigarh, Mohali, Panchkula) × weekly × 3 pages deep = about 520 checks per month. DataForSEO standard: about $0.78/mo (₹74), up to $0.94 on the higher reading of page billing. Serper at 1 credit per page: about 1,560 credits, $1.56/mo (₹148), so the free 2,500 lasts about 7 weeks. Daily tracking is about 7 times these. Double if every keyword is also tracked in Hindi.
- So tracking is pennies; the real barrier is the $50 up-front payment on both. DataForSEO's non-expiring balance beats Serper's 6-month expiry for a small user.
- SerpApi's free 250 monthly searches can spot-check about 20 keywords a week at three pages deep, or more through a single `num=100` request if SerpApi still returns that depth.
- Google Keyword Planner volumes for Tricity will be small or bucketed, and Hindi or Punjabi terms typed in Latin script will not match "hi" corpus tools well. Search Console queries after launch will be better data than any API for this niche.
- A lone Oracle VPS IP scraping Google directly through SerpBear's proxy mode is likely to get blocked quickly. Use an API.

### Gaps
- Did not confirm DataForSEO SERP supports `hl=pa`, or its exact Chandigarh and Mohali location codes; the location endpoints need an account. The Labs CSV was not opened.
- Current LLM Mentions per-unit price not found. The announcement sends users to the dashboard.
- Scrape-it.Cloud's current own pricing not found. The link to HasData is inferred from code.

## Which tools are abandoned or overhyped?

### Takeaway
Serposcope, Greenflare and several older audit kits are dead. The new generation's risk is the opposite: many weeks-old repos with big claims, sponsor funnels and thin DataForSEO wrappers, so stars alone are a poor signal this year.

### Cited Findings

**Abandoned or stale**
- [Serposcope](https://github.com/serphacker/serposcope): archived, "LEGACY CODE".
- [Greenflare](https://github.com/beb7/gflare-tk): last push 2023-07-07, last release 2021-02-15. The brief's "Greenflare" lives at this repo, not under a Greenflare org.
- [seo-audits-toolkit](https://github.com/StanGirard/seo-audits-toolkit): 824 stars, last push 2023-02-06.
- [SEO Macroscope](https://github.com/nazuke/SEOMacroscope): 267 stars, last push 2024-03-31.
- [google-indexing-script](https://github.com/goenning/google-indexing-script): 7,722 stars, last push 2024-10-10.
- [rendertron](https://github.com/GoogleChrome/rendertron): 5,950 stars, last push 2022-10-06. [curatedseotools](https://github.com/sneg55/curatedseotools): last push 2020. [openrush](https://github.com/Givemeweb/openrush): 10 stars, 2023. [eliquid/awesome-seo-rank-trackers](https://github.com/eliquid/awesome-seo-rank-trackers): last README commit 2018 per [comparison](https://github.com/CorgiCorner/open-source-rank-trackers).
- Slowing: Lighthouse CI's last release is 2025-06-26, though commits continue. [SEO Command Center](https://github.com/testedmedia/seo-command-center) and [Citelens](https://github.com/Manavarya09/citelens) stopped soon after launch.

**Overhyped or be careful**
- [Ryze-AI-Adgent/open-seo-mcp-skills](https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills): 8,221 stars in two months, but the "free SEO MCP" is a hosted Ryze connector and the first link is a UTM-tagged sign-up. Its README criticises DataForSEO wrappers while routing competitor data through DataForSEO itself.
- [All-In-One-Free-SEO-Tool](https://github.com/IamRamgarhia/All-In-One-Free-SEO-Tool): "replace ₹25,000 to ₹65,000 per month" with 92 tools and free AI keys, which cannot supply real keyword volume or backlink data on its own terms.
- [lucasveneno/trafficbot](https://github.com/lucasveneno/trafficbot) (fake traffic via Tor proxies) and [flaqai/backlink_skills](https://github.com/flaqai/backlink_skills) (847 stars, automated URL submission) appear under `topic:seo-tools`.
- Sponsor funnels: [geo-aeo-tracker](https://github.com/danishashko/geo-aeo-tracker) (Bright Data), [SerpTrail](https://github.com/serpapi/serptrail) (SerpApi), [SearchMirror](https://github.com/databluedev/searchmirror) (DataBlue), [Decodo rank-tracker](https://github.com/Decodo/rank-tracker).
- Re-uploads of OpenSEO under new names: [fallencolors/open-seo](https://github.com/fallencolors/open-seo), [enesbala5/openseo](https://github.com/enesbala5/openseo), [PlaybookMediaLLC/relay](https://github.com/PlaybookMediaLLC/relay) all reuse its tagline with 0 stars.
- Affiliate links in READMEs: OpenSEO, SEO Command Center, and SEO Playground (disclosed). Reviews of these tools are often by affiliates too ([example, disclosed](https://ryandoser.com/openseo-review/)).
- Most press on SerpBear and SERP APIs comes from vendors ([Serpent](https://apiserpent.com/blog/self-hosted-rank-tracking-serpbear), [Railway](https://railway.com/deploy/serpbear), [Hostinger](https://www.hostinger.com/applications/serpbear)). One directory calls SerpBear slow-moving ([selfhostyourself](https://selfhostyourself.com/services/serpbear)); the repo shows releases this week.
- High fork-to-star ratios worth a second look: [Limelit Open](https://github.com/limelit-co/open) (171 of 255), [Ansvisor](https://github.com/ansvisor/ansvisor) (106 of 217).

### Inferences
- Better signals than stars: closed issues with real user reports, independent contributors, prebuilt multi-arch images, tagged releases, a named data source. SerpBear, SiteOne, SEOnaut and crawlseo pass on most; many GEO repos do not.
- GEO scores (0 to 100 "AI readiness") are each tool's own rubric. Use them as checklists. Nothing here proves a higher score earns more citations.
- Tools that submit links or generate traffic can harm a real business site. Skip them, and skip "private indexing networks".

### Gaps
- No proof of star manipulation for any repo; the ratios above are prompts to look, not findings. The stargazer sampling returned no data.
- The r/SEO, r/TechSEO and r/selfhosted view is missing, since Reddit was not reachable. HN has very little on any of these tools.
