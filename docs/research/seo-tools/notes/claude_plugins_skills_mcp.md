# Claude Code plugins, agent skills and MCP servers for SEO, AEO and GEO

Checked 2026-10-31. All star counts, last-push dates, licences and archive flags come from live GitHub API calls made that day (`gh api repos/...`) unless stated otherwise; each repo link is the source for its row. Nothing was installed. For 14 skill repos I downloaded the source tarball to a scratch directory and ran static greps without executing anything; findings marked "static scan" come from that. A grep is not a security audit: a clean result means only that the patterns did not match.

Not independently tested: output quality. Verdicts below rest on repo structure, docs, and third-party reports.

## Claude Code plugins and marketplaces: what SEO/marketing plugins exist?

### Takeaway
The official Anthropic marketplace has no plugin dedicated to SEO. SEO lives in the Anthropic community marketplace and in authors' own marketplaces, and Anthropic disclaims all of it. The best-known packs are AgriciDaniel/claude-seo and coreyhaines31/marketingskills, but the only public benchmark found shows a no-skill baseline scoring within a few points of real SEO skills, so skills are checklists, not magic, and the value comes from the data connected to them.

### Cited Findings

**Marketplaces and what they hold**
- The official marketplace `anthropics/claude-plugins-official` (45,482 stars, pushed 2026-10-31) has 315 plugins. A regex for seo/search console/keyword/backlink/aeo across its `marketplace.json` found no SEO plugin; the single hit was an unrelated Convex plugin — [marketplace.json](https://github.com/anthropics/claude-plugins-official/blob/main/.claude-plugin/marketplace.json).
- Adjacent official entries that are useful: `firecrawl`, `exa`, `tavily`, `youdotcom-agent-skills`, `zyte-web-data`, `posthog`, `vercel`, `sanity`, `windsor-ai` (325+ marketing data sources) — [marketplace.json](https://github.com/anthropics/claude-plugins-official/blob/main/.claude-plugin/marketplace.json).
- The community marketplace `anthropics/claude-plugins-community` (4,796 stars, read-only mirror) has 2,283 plugins, including roughly 25 SEO/GEO ones listed in the table below — [marketplace.json](https://raw.githubusercontent.com/anthropics/claude-plugins-community/main/.claude-plugin/marketplace.json).
- Add it with `/plugin marketplace add anthropics/claude-plugins-community`, then install with the `@claude-community` suffix — [Anthropic's marketplaces](https://code.claude.com/docs/en/plugins/anthropic-marketplaces.md).
- Official lists Anthropic-maintained plus partner plugins; community holds third-party plugins submitted by authors; Anthropic does not review third-party marketplaces — [Anthropic's marketplaces](https://code.claude.com/docs/en/plugins/anthropic-marketplaces.md).
- claude.com/marketplace search for "seo" showed SearchFit SEO and SearchAtlas Toolkit, the latter with an "Anthropic verified" badge — [Claude Marketplace](https://claude.com/marketplace/plugins?q=seo). Conflict: no plugin named SearchAtlas appears in the official or community `marketplace.json` I read, and I could not find its repo.
- Community catalog entries are pinned to a commit SHA for nearly every entry, and Claude Code refuses a different commit — [Plugin security](https://code.claude.com/docs/en/plugins/security.md).
- Auto-update is on by default for official marketplaces and off for community and third-party ones — [Install plugins](https://code.claude.com/docs/en/discover-plugins).

**Directories and lists**
| List | Stars / push | SEO relevance |
|---|---|---|
| [RankSpotAI/awesome-seo-agent-skills](https://github.com/RankSpotAI/awesome-seo-agent-skills) | 44 / 2026-10-26, CC0 | Best focused list; stars refreshed weekly. Maintainer sells an AI-visibility product |
| [RankSpotAI/awesome-seo-mcp](https://github.com/RankSpotAI/awesome-seo-mcp) | 27 / 2026-10-26, CC0 | Best MCP list, marks official vs community, same maintainer conflict |
| [UnderleveledBuilder/awesome-seo-geo-skills](https://github.com/UnderleveledBuilder/awesome-seo-geo-skills) | 43 / 2026-10-30, CC0 | Chinese-language list |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 36,654 / 2026-10-30 | Lists vendor skills incl. `sanity-io/seo-aeo-best-practices`, Addy Osmani web quality |
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 56,950 / 2026-10-31 | One SEO entry: SuperSEO Skills |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 78,380 / 2026-09-18 | One relevant entry (rampstackco); low value here |
| [travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills) | 15,647 / 2026-04-28 | Six months stale |
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | 97,105 / 2026-10-23 | General |
| [sharozdawa/awesome-seo-mcp-servers](https://github.com/sharozdawa/awesome-seo-mcp-servers) | 5 / 2026-03-21 | Stale |
| [skills.sh](https://skills.sh/topic/marketing) | n/a | Marketing topic shows coreyhaines31 `seo-audit`, `programmatic-seo`, `ai-seo`, `schema-markup`; install counts did not render for my fetcher |
| [vercel-labs/skills](https://github.com/vercel-labs/skills) (`npx skills`) | 37,355 / 2026-10-30, MIT | The installer used by most packs |
| [SkillsMP](https://skillsmp.com), [SkillHub](https://agentskillshub.dev) | n/a | Named in [awesome-seo-agent-skills](https://github.com/RankSpotAI/awesome-seo-agent-skills); not checked |

**Major packs: catalogue**

Static-scan counts are SKILL.md / Python files / shell files in the default branch. All are free to use with a Claude plan; data extensions cost extra where noted.

| Pack | Stars, created, push, licence | Install | What it does | Keys | Security notes (static scan unless cited) | Verdict |
|---|---|---|---|---|---|---|
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | 24,680; 2026-02-07; 2026-10-22; MIT | `/plugin marketplace add AgriciDaniel/claude-seo` then `/plugin install claude-seo@agricidaniel-claude-seo`; also in `@claude-community` | 26 sub-skills, 19 subagents: technical, schema, E-E-A-T, local, hreflang, maps, GEO, sitemap | None needed; optional free Google APIs, paid DataForSEO/Firecrawl/Ahrefs extensions | 35 SKILL / 144 py / 20 sh. PostToolUse hook runs `validate-schema.py` after every Edit/Write, outside the sandbox. Skills can start Playwright. Claims no telemetry ([PRIVACY](https://github.com/AgriciDaniel/claude-seo/blob/main/PRIVACY.md)). Has a real threat model including SSRF and DNS rebinding ([SECURITY](https://github.com/AgriciDaniel/claude-seo/blob/main/SECURITY.md)) and an "untrusted content" rule for fetched pages ([CHANGELOG](https://github.com/AgriciDaniel/claude-seo/blob/main/CHANGELOG.md)). Upsells a paid Skool community with a private version | Strong. Most complete and the only one with visible security engineering. Heavy; read the hook. Best single pick for a local site |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 57,574; push 2026-10-31; MIT | `npx skills add coreyhaines31/marketingskills --skill seo-audit ai-seo schema`; or `/plugin marketplace add coreyhaines31/marketingskills` | 53 skills; relevant: `seo-audit`, `ai-seo`, `schema`, `programmatic-seo`, `site-architecture` | None for skills | Markdown-led, no hook found for skills. Paid "Verified Partners" incl. AIsa (SEO data) and Omnia (AEO), disclosed ([REGISTRY](https://github.com/coreyhaines31/marketingskills/blob/main/tools/REGISTRY.md)); Omnia appears in the `ai-seo` tool table alongside neutral tools | Strong and selective install keeps it small. SaaS-leaning, `seo-audit` covers hreflang well. `ai-seo` is 37 KB: context cost |
| [zubair-trabzada/geo-seo-claude](https://github.com/zubair-trabzada/geo-seo-claude) | 11,383; 2026-02-18; 2026-10-31; MIT | README: `curl -fsSL .../install.sh \| bash` | GEO-first audits, citability, brand, PDF reports; 16 skills | None | README pipes curl to bash. Installer adds a venv and Chromium under `~/.claude`. Skills allow `Bash`, `WebFetch`, `Write`. Pitches a Skool community on selling GEO agency services at $2K to $12K a month | Usable after reading, but agency-funnel framing; claims need care. Do not use the pipe install |
| [TheCraigHewitt/seomachine](https://github.com/TheCraigHewitt/seomachine) | 7,562; 2025-10-29; 2026-10-23; MIT | `git clone`, then `pip install -r data_sources/requirements.txt` | Clone-as-workspace for long-form articles; 26 skills, 39 py | Optional GA/GSC, DataForSEO | No hooks; no curl-pipe match | Good for blog production; a workspace, not something to add into this repo |
| [aaron-he-zhu/aaron-marketing-skills](https://github.com/aaron-he-zhu/aaron-marketing-skills) (supersedes [seo-geo-claude-skills](https://github.com/aaron-he-zhu/seo-geo-claude-skills), 231 stars, now a signpost) | 3,041; 2025-12-18; 2026-10-31; Apache-2.0 | `/plugin marketplace add aaron-he-zhu/aaron-marketing-skills` then `/plugin install aaron-marketing@aaron` | 120 skills, 16 SEO/GEO | None for tier 1 | 120 SKILL / 158 py / 16 sh. Hooks on SessionStart, UserPromptSubmit, Pre/PostToolUse (incl. `mcp__.*`), Stop. Privacy says hooks make no network calls ([PRIVACY](https://github.com/aaron-he-zhu/aaron-marketing-skills/blob/main/PRIVACY.md)) | Largest hook surface here; PreToolUse can block tool calls. Prefer installing single skills. The old URL the brief names is no longer the real location |
| [Ryze-AI-Adgent/open-seo-mcp-skills](https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills) | 8,220; 2026-08-29; 2026-10-27; MIT | `claude plugin marketplace add Ryze-AI-Adgent/open-seo-mcp-skills`, `claude plugin install open-seo-mcp-skills@ryze` | 8 thin skills calling a hosted connector | Your GSC, GA4, ads accounts via OAuth to Ryze | Only 14 files. Plugin bundles remote MCP `connector.get-ryze.ai`, so installing wires a third party into Google data. Ryze docs give a different URL, `mcp.get-ryze.ai/mcp/unified/` ([docs](https://docs.get-ryze.ai/connect/claude)). No pricing found | Avoid. Marketing funnel presented as open source |
| [irinabuht12-oss/marketing-skills](https://github.com/irinabuht12-oss/marketing-skills) | 6,349; 2026-01-21; 2026-10-27; **no licence** | Ryze connector | 49 skills, personal account, same Ryze funnel | Ryze | No licence means default copyright | Avoid |
| [nowork-studio/notfair-plugin](https://github.com/nowork-studio/notfair-plugin) | 4,087; 2026-03-27; 2026-10-30; MIT | `/plugin marketplace add nowork-studio/notfair-plugin`, `/plugin install notfair@nowork-studio` | 48 skills: SEO, GEO, ads, WordPress, GA4/GSC | OAuth to hosted NotFair | `.mcp.json` registers `notfair.co/api/mcp/notfair`, a hosted middleman for ad and analytics accounts; can update WordPress and ad accounts | Skills may be useful; skip the MCP unless reviewed. Pricing not checked |
| [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | 29,040; push 2026-10-31; MIT | Not checked | 380+ skills, about 43 marketing per [search summary](https://claudefa.st/blog/tools/skills/claude-code-seo-skills) | n/a | Not scanned | General; not SEO-first |
| [AgriciDaniel/claude-blog](https://github.com/AgriciDaniel/claude-blog) | 2,595; push 2026-10-30; MIT | In `@claude-community` | 30 sub-skills, blog production | n/a | Not scanned | Sibling of claude-seo, optional |
| [zubair-trabzada/ai-marketing-claude](https://github.com/zubair-trabzada/ai-marketing-claude) | 2,833; push 2026-03-02; MIT | Not checked | 15 marketing skills | n/a | Not scanned | Stale 8 months |
| [gooseworks-ai/goose-skills](https://github.com/gooseworks-ai/goose-skills) | 1,275; push 2026-10-27; MIT | Not checked | GTM skills plus data APIs | n/a | Not scanned | Not SEO-first |
| [kostja94/marketing-skills](https://github.com/kostja94/marketing-skills) | 1,070; push 2026-10-26; MIT | Not checked | 172 SKILL.md, no scripts | None | Pure Markdown, no py/sh/js | Low execution risk; breadth over depth |
| [rampstackco/claude-skills](https://github.com/rampstackco/claude-skills) | 1,012; push 2026-10-27; MIT | Not checked | 59 website lifecycle skills | n/a | Not scanned | Optional |
| [Bhanunamikaze/Agentic-SEO-Skill](https://github.com/Bhanunamikaze/Agentic-SEO-Skill) | 1,012; push 2026-10-14; MIT | Not checked | 16 sub-skills, 10 agents | n/a | Not scanned | Scored 75.4 in the benchmark below |
| [JeffLi1993/seo-audit-skill](https://github.com/JeffLi1993/seo-audit-skill) | 775; push 2026-06-17; MIT | Not checked | Tiered audits | n/a | Not scanned | Fine; four months quiet |
| [OpenClaudia/openclaudia-skills](https://github.com/OpenClaudia/openclaudia-skills) | 723; push 2026-10-29; MIT | Not checked | 77 marketing skills per its repo description | n/a | Not scanned | Optional |
| [inhouseseo/superseo-skills](https://github.com/inhouseseo/superseo-skills) | 376; push 2026-09-03; Apache-2.0 | Not checked | 11 skills: page audits, link building, articles | n/a | Not scanned | Small; listed in awesome-claude-code |
| [seranking/seo-skills](https://github.com/seranking/seo-skills) | 192; push 2026-06-25; MIT | `/plugin marketplace add seranking/seo-skills`, `/plugin install seo-skills@seranking` | Vendor pack, 32 SKILL.md | SE Ranking; plugin auto-registers remote MCP | Official vendor. `install.sh` has a curl-pipe alternative; `seo-google` uses free Google APIs | Good if on SE Ranking trial |
| [addyosmani/web-quality-skills](https://github.com/addyosmani/web-quality-skills) | 3,015; push 2026-08-24; MIT | Not checked | Lighthouse and Core Web Vitals skills | None | Not scanned; author on Google Chrome team per [VoltAgent list](https://github.com/VoltAgent/awesome-agent-skills) | Strong for technical side |
| [sanity-io/agent-toolkit](https://github.com/sanity-io/agent-toolkit) | 194; push 2026-10-27; MIT | `sanity` plugin in official marketplace | Includes `seo-aeo-best-practices` skill (EEAT, JSON-LD) ([README](https://github.com/sanity-io/agent-toolkit)) | None for skill | Vendor | Read for ideas; targets Sanity, not Payload |
| [huifer/claude-code-seo](https://github.com/huifer/claude-code-seo) | 111; push 2026-01-04; MIT | Not checked | Next.js SEO audit, 100-point score | n/a | Not scanned | Stale, but matches the stack |
| [mvstepanek/nextjs-ecommerce-seo-skills](https://github.com/mvstepanek/nextjs-ecommerce-seo-skills) | Not checked | `@claude-community` | 10 Next.js e-commerce skills ([catalog](https://raw.githubusercontent.com/anthropics/claude-plugins-community/main/.claude-plugin/marketplace.json)) | n/a | Not scanned | E-commerce focused |

Other community-marketplace SEO entries, none checked in depth: `searchfit-seo` ([13 stars](https://github.com/searchfit/searchfit-seo)), `ultimate-seo-geo` ([95](https://github.com/mykpono/ultimate-seo-geo)), `seo-geo-consultant` ([6](https://github.com/AndreasH96/seo-geo-consultant)), `claude-seo-and-geo-site-audit` ([0, no licence](https://github.com/rjspence3/claude-site-audit)), `local-seo-audit-system` (repo `mshahiddigital/local-seo-audit` returned 404 today), `seo-assistant-silverbee` ([0, no licence](https://github.com/silverbee-ai/claude-silverbee-marketplace)), `magpie` ([1](https://github.com/jezweb/magpie)), `web-vitals-auditor` ([0](https://github.com/mohitkale/web-vitals-auditor)), `gsc-pap` ([0](https://github.com/aliarifsoydas/gsc-pap-claude-plugin)), `search-console-mcp` (packages [AminForou/mcp-gsc](https://github.com/AminForou/mcp-gsc)), arturseo-geo's Cowork plugins ([1](https://github.com/arturseo-geo/cowork-geo-plugin)) — [catalog](https://raw.githubusercontent.com/anthropics/claude-plugins-community/main/.claude-plugin/marketplace.json).

**Independent quality evidence**
- [aleclindz/seo-skill-bench](https://github.com/aleclindz/seo-skill-bench) (48 stars, push 2026-10-19) runs skills headless against a fixture site with 10 planted defects and 5 traps, 3 runs each. On 2026-07-07: SEOAgent 84.9, lhitches/claude-seo-skills 76.0, Agentic SEO Skill 75.4, **vanilla no-skill baseline 73.0**, mangollc 70.4. Stated run-to-run variance is about ±8 points, so gaps below that are ties. Maintained by SEOAgent, an entrant, which it discloses — [README](https://raw.githubusercontent.com/aleclindz/seo-skill-bench/main/README.md).
- The tested set did not include claude-seo or marketingskills in the 2026-07-07 table I read — [README](https://raw.githubusercontent.com/aleclindz/seo-skill-bench/main/README.md).
- A forum user argues data quality matters more than the skill — [BlackHatWorld](https://www.blackhatworld.com/posts/21297572/). An agency says teams jumping straight to Claude Code with integrations got unreliable skills — [StudioHawk](https://studiohawk.com.au/blog/claude-code-for-seo/). A reviewer who tested for two weeks says hype is largely earned with human review — [mejba.me](https://www.mejba.me/blog/claude-code-marketing-powerhouse). These are anecdotes.

### Inferences
- For a local Tricity business: install `claude-seo` or a handful of `marketingskills` skills, not several packs. Overlapping skills raise context cost and compete for triggering.
- Popularity is a weak signal here. Most large repos are under a year old, and two of the highest-starred "SEO" repos are funnels into one vendor's connector.
- marketingskills' selective `npx skills add` fits this project's `.agents/skills` layout better than a plugin with hooks.
- Everything skill-based is tuned for English SaaS sites; a Hindi/Punjabi local service needs human judgement on top.

### Gaps
- Install counts on skills.sh did not render; `npx skills find` was not run because the brief forbids installing anything.
- Could not verify star quality: the GitHub stargazers endpoint returned 404 for all repos tried, so the idea that Ryze's stars are inflated stays unproven. 8,220 stars in two months for 14 files is odd but not evidence on its own.
- Rows marked "Not scanned" or "Not checked" were not examined beyond repo metadata.
- awesome-claude-code was checked by grep only.

## Agent skills for AEO/GEO specifically: audits, schema, llms.txt, citation optimisation

### Takeaway
AEO/GEO skills are mostly checklists around crawl access, structure, schema and entity signals. Auriti's geo-optimizer and onvoyage's audit skill stand out because they run deterministic checks, while llms.txt has weak evidence and should be low priority. Schema validation is the real gap: no dedicated, trustworthy validator MCP turned up.

### Cited Findings

| Tool | Stars, push, licence | Install | What it does | Cost/keys | Notes | Verdict |
|---|---|---|---|---|---|---|
| [Auriti-Labs/geo-optimizer-skill](https://github.com/Auriti-Labs/geo-optimizer-skill) | 1,244; 2026-10-30; MIT | `pip install "geo-optimizer-skill[mcp]"`, `claude mcp add geo-optimizer -- geo-mcp` | Scores AI-engine visibility; CLI plus MCP; `geo citations` with your own keys | Free; AI keys optional | README: no phone-home in CLI. `telemetry.py` is for the web demo, local SQLite. Has an injection detector and tests. Promotes hosted GeoReady and a book | Good, and a deterministic check is worth more than prose |
| [onvoyage-ai/gtm-engineer-skills](https://github.com/onvoyage-ai/gtm-engineer-skills) | 1,343; 2026-10-11; MIT | `git clone`, symlink skills | `audit-website-aeo` (16 scripted pass/fail checks plus 6 judged dimensions), `improve-aeo-geo`, `geo-content-research`, `write-seo-geo-content`, `build-backlinks`, `reddit-opportunity-research` | Free; SerpApi referenced in code | 12 SKILL.md, no hooks | Good design; pick single skills |
| [leopard627/fire-your-seo-agency](https://github.com/leopard627/fire-your-seo-agency) | 986; 2026-09-25; MIT | `/plugin marketplace add leopard627/fire-your-seo-agency`, `/plugin install fire-your-seo-agency@fire-your-seo-agency` | One skill: audit, fix, publish gate, measure | Free | No hooks. "1.54M impressions" is the author's self-reported Korean stock site | Readable; ignore the numbers |
| [yaojingang/GEOHub](https://github.com/yaojingang/GEOHub) | 167; 2026-08-31; **AGPL-3.0** | Not checked | "Evidence-bounded" GEO skills | n/a | AGPL | Skills read at dev time carry little risk; check before copying into the repo |
| [Houseofmvps/claude-rank](https://github.com/Houseofmvps/claude-rank) | 148; 2026-07-08; MIT | Not checked | Claude Code plugin on why a site is not cited | n/a | Not scanned | Unknown |
| [akii-technologies-ltd/akii-seo-ai-search-optimizer](https://github.com/akii-technologies-ltd/akii-seo-ai-search-optimizer) | 78; 2026-10-15; MIT | `/plugin install akii-seo-ai-search-optimizer@claude-community` | 12 skills | Free | SessionEnd hook runs a CTA script and POSTs telemetry to `akii.com` daily. Opt out: `AKII_PLUGIN_DISABLE_CTA=1` | Skip, or set the opt-out |
| [local-falcon/local-visibility-skill](https://github.com/local-falcon/local-visibility-skill) | 9; 2026-02-02; MIT | Not checked | Local SEO and AI visibility guidance | Free | Vendor | One of few local-first skills; read it |
| [SNLabat/SEO-GEO-AEO-Skill](https://github.com/SNLabat/SEO-GEO-AEO-Skill) | 268; 2026-03-13; **none** | n/a | Audit skill | n/a | No licence, seven months stale | Skip |
| `aeo-brand-scan`, `geo-audit-by-alignment-ai`, `botsee-skill` | [3](https://github.com/WannabDad/aeo-brand-scan), n/a, [1](https://github.com/RivalSee/botsee-skill) | `@claude-community` | Brand perception scans | BotSee is a paid API | Vendor lead-gen likely | Skip |
| alphaparkinc `genpark-*` skills, e.g. [llms-txt generator](https://github.com/alphaparkinc/genpark-technical-llms-txt-generator-skill) | 8–9; **none** | n/a | Many near-identical single skills | n/a | No licence; a [duplicate org](https://github.com/Alpha-Park/genpark-dynamic-jsonld-rich-snippet-generator-skill) | Skip; looks like template spam |
| [kashiflashari/llms.txt-generator](https://github.com/kashiflashari/llms.txt-generator) | 0; 2026-08-26; MIT | n/a | Generates and validates llms.txt | Free | Unknown author | Skip: trivial to do by hand |

**Schema**
- [Theycallmeholla/schema-org-mcp](https://github.com/Theycallmeholla/schema-org-mcp) (24 stars, 2026-09-20, MIT, on npm): explore schema.org types, generate JSON-LD, validate structured data.
- [marketingskills `schema`](https://github.com/coreyhaines31/marketingskills/tree/main/skills/schema) and claude-seo's `seo-schema` plus its validation hook cover generation.
- RankSpot's list names JSON-LD validation as a gap with no dedicated server — [awesome-seo-mcp](https://raw.githubusercontent.com/RankSpotAI/awesome-seo-mcp/main/README.md).
- Low-signal alternatives: [MojoRohjo/seo-auditor-mcp](https://github.com/MojoRohjo/seo-auditor-mcp) (1 star, no licence), [hanselhansel/context-cli](https://github.com/hanselhansel/context-cli) (4 stars, LLM-readiness linter).

**llms.txt**
- claude-seo's evidence file says llms.txt is "not currently consumed by any major AI search system", cites Google's AI optimisation guide (note added 2026-06-15) saying no special AI text files are needed for Google Search, Mueller calling it a "dead end", an SE Ranking 300k-domain study finding one of the 50 most-cited domains had the file, and OtterlyAI logs showing 0.1% of AI-bot requests hit it. It still advises generating one as low-cost optionality — [llmstxt-evidence.md](https://github.com/AgriciDaniel/claude-seo/blob/main/skills/seo-geo/references/llmstxt-evidence.md). This is a secondary compilation; I did not check each primary source.
- [langchain-ai/mcpdoc](https://github.com/langchain-ai/mcpdoc) (1,030 stars) is **archived**. [janwilmake/LLMTEXT-mcp](https://github.com/janwilmake/LLMTEXT-mcp) (51) and [thedaviddias/mcp-llms-txt-explorer](https://github.com/thedaviddias/mcp-llms-txt-explorer) (78, 2026-01-15) read such files; neither is needed here.

### Inferences
- Priority for this site: crawl access, content answers, LocalBusiness/Service JSON-LD and entity consistency. An llms.txt is a five-minute optional extra, not a workstream.
- Validate JSON-LD with Google's Rich Results Test and the Schema Markup Validator by hand or in a Playwright e2e check (already a project dependency) rather than trusting an LLM-driven "validator". Any schema skill's output is LLM-generated and can be plausibly wrong. Whether these public web tools can be scripted within their terms was not checked.
- A small repo-specific skill derived from these, in `.agents/skills`, may beat any pack, since it can know Payload, the `[lang]` routes and INFO-BANK facts.

### Gaps
- No evidence found that any AEO/GEO skill improves citations in controlled conditions, and none for Hindi or Punjabi content.
- Validation accuracy of schema-org-mcp was not tested.

## MCP servers: which exist, which are official, which are free to run?

### Takeaway
Google has official MCPs for GA4 and Google Ads, but none confirmed for Search Console, Business Profile or Bing. A free stack is achievable: a community GSC server, the official GA4 server, Chrome DevTools MCP, plus free tiers of search APIs. Ahrefs and Semrush need paid plans, so DataForSEO's pay-as-you-go is the cheap route for third-party keyword and SERP data.

### Cited Findings

**Google Search Console (no official server)**
- Vendor pages say Google has not shipped one as of early October 2026 — [Enrich Labs](https://www.enrichlabs.ai/blog/google-search-console-mcp-2026). No primary Google statement found.

| Server | Stars, push, licence | Install | Scope | Notes | Verdict |
|---|---|---|---|---|---|
| [AminForou/mcp-gsc](https://github.com/AminForou/mcp-gsc) | 2,073; 2026-09-15; MIT | `uvx mcp-search-console` (PyPI name differs from repo; verify) | ~20 tools; analytics, URL inspection, sitemaps | Desktop OAuth or service account. Destructive tools gated by `GSC_ALLOW_DESTRUCTIVE=false`; `manage_sitemaps` can write. Promotes hosted upgrade ([README](https://raw.githubusercontent.com/AminForou/mcp-gsc/main/README.md)) | Default choice |
| [Suganthan-Mohanadasan/Suganthans-GSC-MCP](https://github.com/Suganthan-Mohanadasan/Suganthans-GSC-MCP) | 169; 2026-09-27; Apache-2.0 | `npx -y suganthan-gsc-mcp setup` | 29 tools: quick wins, cannibalisation, decay, `verify_claim` | Local. Set `GSC_SCOPES=readonly`; docs conflict on the default ([README](https://raw.githubusercontent.com/Suganthan-Mohanadasan/Suganthans-GSC-MCP/main/README.md)) | Best analysis layer; `verify_claim` guards against invented numbers |
| [saurabhsharma2u/search-console-mcp](https://github.com/saurabhsharma2u/search-console-mcp) | 319; 2026-10-21; MIT | `npx search-console-mcp setup` | GSC, Bing, GA4, AdSense | Keychain storage. Read-only until first write tool ([README](https://raw.githubusercontent.com/saurabhsharma2u/search-console-mcp/main/README.md)) | Good all-in-one incl. Bing |
| [FlorianBruniaux/google-search-console-mcp](https://github.com/FlorianBruniaux/google-search-console-mcp) | 21; 2026-10-18; MIT | `uvx gsc-mcp-tools` | 96 tools; GSC, Bing, GA4, CrUX | Writes need explicit confirmation; `GSC_MCP_TOOL_FAMILIES` limits tools ([README](https://raw.githubusercontent.com/FlorianBruniaux/google-search-console-mcp/main/README.md)) | Thoughtful, but few users; 96 tools bloat context |
| [ahonn/mcp-server-gsc](https://github.com/ahonn/mcp-server-gsc) | 282; 2026-09-04; **none** | n/a | Basic | No licence | Avoid |
| [guchey/mcp-server-google-search-console](https://github.com/guchey/mcp-server-google-search-console) | 2; 2025-04-07; MIT | n/a | n/a | Unmaintained | Avoid |

**Multi-source local suites**
- [avansaber/seo-monster](https://github.com/avansaber/seo-monster) (559 stars, 2026-10-29, MIT): `uvx seo-monster`, then `uvx --from seo-monster seo-monster auth`. GSC, GA4, PSI/CrUX, Cloudflare, IndexNow, citation tracking. Local, claims no telemetry; destructive tools gated by `SEO_MCP_ALLOW_DESTRUCTIVE`. Tool count conflicts: 70 vs 52 — [README](https://raw.githubusercontent.com/avansaber/seo-monster/main/README.md). Verdict: most promising free one-stop; code not reviewed.
- [Akxan/google-seo-mcp](https://github.com/Akxan/google-seo-mcp) (24, 2026-10-26, MIT), [Rachit8484/geoseo-mcp](https://github.com/Rachit8484/geoseo-mcp) (3, 2026-10-23, MIT), [Raffaele86/seo-stack-mcp](https://github.com/Raffaele86/seo-stack-mcp) (1): too new.
- [every-app/open-seo](https://github.com/every-app/open-seo) (25,825 stars, 2026-10-31, MIT, 131 open issues): self-hosted Semrush alternative with an MCP. Docker or Cloudflare self-host; needs a DataForSEO key; hosted is $10 a month with 28% added to each request; README DataForSEO link is an affiliate link — [README](https://github.com/every-app/open-seo).
- [houtini-ai/seo-audit](https://github.com/houtini-ai/seo-audit) (88, 2026-10-30, Apache-2.0): audit MCP that stores raw crawl data. API key per [awesome-seo-mcp](https://raw.githubusercontent.com/RankSpotAI/awesome-seo-mcp/main/README.md).

**Google Analytics and Ads (official)**
- [googleanalytics/google-analytics-mcp](https://github.com/googleanalytics/google-analytics-mcp) (3,599; 2026-10-29; Apache-2.0): `claude mcp add analytics-mcp --scope user -e GOOGLE_APPLICATION_CREDENTIALS=... -e GOOGLE_CLOUD_PROJECT=... -- pipx run analytics-mcp`. 9 tools, 8 read-only; `create_property_annotation` needs `--allow-write`. Free; needs Admin and Data APIs enabled — [README](https://raw.githubusercontent.com/googleanalytics/google-analytics-mcp/main/README.md). Verdict: use once GA4 exists. Project uses PostHog today per CLAUDE.md, so check whether GA4 is planned at all.
- [googleads/google-ads-mcp](https://github.com/googleads/google-ads-mcp) (1,101; 2026-10-26; Apache-2.0): `pipx run --spec "google-ads-mcp==X.Y.Z" google-ads-mcp`. Three retrieval tools (`search`, `get_resource_metadata`, `list_accessible_customers`), no writes listed. README does not mention Keyword Planner — [README](https://raw.githubusercontent.com/googleads/google-ads-mcp/main/README.md).

**Keyword Planner**
- [ncosentino/google-keyword-planner-mcp](https://github.com/ncosentino/google-keyword-planner-mcp) (53; 2026-10-11; MIT): prebuilt binaries incl. Linux ARM64, tools `generate_keyword_ideas`, `get_historical_metrics`, `get_keyword_forecast`, `search_geo_targets`. Needs OAuth, GCP project and a billing-enabled Google Ads account; no spend needed but without spend volumes show as ranges — [README](https://raw.githubusercontent.com/ncosentino/google-keyword-planner-mcp/main/README.md). Verdict: good fit for arm64; verify the binary or build from source.
- [GroMarketing/keyword-planner-mcp](https://github.com/GroMarketing/keyword-planner-mcp) (2; 2026-10-05; MIT), [getmcpads-com/google-ads-mcp-server](https://github.com/getmcpads-com/google-ads-mcp-server) (1), [smacient/Keyword-Planner-MCP](https://github.com/smacient/Keyword-Planner-MCP) (5; 2025-06): low signal.
- [cohnen/mcp-google-ads](https://github.com/cohnen/mcp-google-ads) (717; 2025-10-16; MIT): a year stale, superseded by Google's server.
- Google sunset developer tokens in September 2026; access now attaches to Cloud projects; brand verification required for new Basic and Standard applications — [PPC Land](https://ppc.land/google-drops-developer-tokens-from-ads-api-access-decisions/), [Google docs](https://developers.google.com/google-ads/api/docs/first-call/dev-token?authuser=3). Whether Basic suffices for Keyword Planner post-change is unconfirmed.

**Bing Webmaster (no official server found)**
- [isiahw1/mcp-server-bing-webmaster](https://github.com/isiahw1/mcp-server-bing-webmaster) (31; 2026-02-10; MIT), [zizzfizzix/mcp-server-bwt](https://github.com/zizzfizzix/mcp-server-bwt) (7; 2026-09-25; MIT), [ncosentino/bing-webmaster-mcp](https://github.com/ncosentino/bing-webmaster-mcp) (2; 2026-08-05; MIT, 22 tools per [Dev Leader](https://www.devleader.ca/projects/bing-webmaster-mcp)), `bing-webmaster-mcp` on PyPI has opt-out telemetry — [PyPI](https://pypi.org/project/bing-webmaster-mcp/). Free with a Bing API key. All low-star. The GSC suites above cover Bing, so a separate server is unnecessary.
- [sharozdawa/indexnow-mcp](https://github.com/sharozdawa/indexnow-mcp) (2; 2026-03-22): unnecessary, IndexNow is one HTTP POST.

**Google Business Profile (no official server found; API access is the real barrier)**
- Google reviews access requests within 14 days and wants a legitimate business need, business-domain email and a live website — [Google FAQ](https://developers.google.com/my-business/content/faq). New projects start at zero quota — [Google prereqs](https://developers.google.com/my-business/content/prereqs?authuser=4).
- Community servers, all tiny: [A1-x-Tech/mcp-google-business](https://github.com/A1-x-Tech/mcp-google-business) (4; 2026-10-04), [synectus/OpenGMB](https://github.com/synectus/OpenGMB) (9; 2026-10-29), [Insightful-Pipe/google-my-business-mcp-server](https://github.com/Insightful-Pipe/google-my-business-mcp-server) (4; 2026-10-10), [amirjahfar1/Google-Business-Profile-GBP-MCP](https://github.com/amirjahfar1/Google-Business-Profile-GBP-MCP) (4; 2026-07-13), [satheeshds/gbp-review-agent](https://github.com/satheeshds/gbp-review-agent) (11; 2025-12-03). These hold write access to the public listing and reviews. Verdict: no; manage GBP by hand.
- [local-falcon/mcp](https://github.com/local-falcon/mcp) (25; 2026-10-29; MIT): official, geo-grid local rank; paid product, pricing not checked.
- [cablate/mcp-google-map](https://github.com/cablate/mcp-google-map) (487; 2026-10-22; MIT): Maps tools, needs a Maps key.

**PageSpeed, Lighthouse, browser**
- [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) (54,523; 2026-10-30; Apache-2.0): `/plugin marketplace add ChromeDevTools/chrome-devtools-mcp`, `/plugin install chrome-devtools-mcp@chrome-devtools-plugins`. `lighthouse_audit` covers accessibility, SEO, best practices and agentic browsing but **excludes performance**; use `performance_start_trace` — [tool reference](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/tool-reference.md). Usage stats on by default (`--no-usage-statistics`); traces may send URLs to CrUX (`--no-performance-crux`) — [README](https://raw.githubusercontent.com/ChromeDevTools/chrome-devtools-mcp/main/README.md). Verdict: official and the best pick.
- [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) (38,884; 2026-10-31; Apache-2.0): official, and already in this project per CLAUDE.md.
- [priyankark/lighthouse-mcp](https://github.com/priyankark/lighthouse-mcp) (215; 2026-10-26; MIT), [danielsogl/lighthouse-mcp-server](https://github.com/danielsogl/lighthouse-mcp-server) (73; 2026-10-27; MIT), [ruslanlap/pagespeed-insights-mcp](https://github.com/ruslanlap/pagespeed-insights-mcp) (77; 2026-10-26; Apache-2.0): community, fine. Stale: [enemyrr/mcp-server-pagespeed](https://github.com/enemyrr/mcp-server-pagespeed) (2025-02), [PhialsBasement/Pagespeed-MCP-Server](https://github.com/PhialsBasement/Pagespeed-MCP-Server) (2025-09).
- PSI API works without a key, a key is advised for automation, and Google plans to remove CrUX field data from it in favour of the CrUX API — [Google](https://developers.google.com/speed/docs/insights/v5/get-started). The page gave no quota figures.

**Paid SEO data**
| Vendor | Official? | Endpoint / install | Free? | Price |
|---|---|---|---|---|
| [DataForSEO](https://github.com/dataforseo/mcp-server-typescript) (256; 2026-10-02; Apache-2.0) | Yes | `npx dataforseo-mcp-server@latest`, or hosted `https://mcp.dataforseo.com/v3/mcp` with OAuth ([README](https://raw.githubusercontent.com/dataforseo/mcp-server-typescript/master/README.md)) | $1 trial, free sandbox | No subscription; $50 minimum top-up, no expiry; SERP from $0.0006, keyword data from $0.0012 per task ([pricing](https://dataforseo.com/pricing)) |
| [SE Ranking](https://github.com/seranking/seo-skills) | Yes | `claude mcp add --transport http se-ranking https://api.seranking.com/mcp` | 14 days, 100K credits, no card, credits expire | $50 a month wallet option; third-party figures vary ([pricing](https://seranking.com/api-pricing.html)) |
| [Ahrefs](https://help.ahrefs.com/en/articles/13913559-getting-started-with-ahrefs-mcp) | Yes, remote only. [GitHub repo](https://github.com/ahrefs/ahrefs-mcp-server) **archived** | `https://api.ahrefs.com/mcp/mcp` per [list](https://raw.githubusercontent.com/RankSpotAI/awesome-seo-mcp/main/README.md) | None | Lite and up, 200,000 units a month, minimum 50 units per call. Lite about $129 a month per [third party](https://contextbolt.com/blog/ahrefs-mcp-pricing/) |
| [Semrush](https://developer.semrush.com/api/basics/semrush-mcp/) | Yes | `claude mcp add semrush https://mcp.semrush.com/v1/mcp -t http` | None | Paid plans; sources conflict on tiers. Third-party guides show `/v2/mcp` too. [KB](https://semrush.com/kb/1618-mcp) lists Semrush One Starter, Pro+, SEO Classic Pro/Guru |
| [SerpApi](https://github.com/serpapi/serpapi-mcp) | Yes (182; 2026-10-30; MIT) | API key | 100 lookups a month per [citation-intelligence README](https://raw.githubusercontent.com/AutomateLab-tech/citation-intelligence/main/README.md) | Not checked |
| Screaming Frog | [Official in v24](https://raw.githubusercontent.com/RankSpotAI/awesome-seo-mcp/main/README.md); community [bzsasson](https://github.com/bzsasson/screaming-frog-mcp) (93; 2026-10-17) | Paid licence | Crawl limit free tier not checked | Not checked |

**Search and scrape (free tiers, prices dated 2026-10-31)**
| Tool | Repo | Install | Free | Paid |
|---|---|---|---|---|
| Exa | [exa-labs/exa-mcp-server](https://github.com/exa-labs/exa-mcp-server) (5,204; 2026-10-30; MIT) | `claude plugin install exa@claude-plugins-official` | Hosted `mcp.exa.ai/mcp` works anonymously with rate limits ([README](https://raw.githubusercontent.com/exa-labs/exa-mcp-server/main/README.md)); $10 credit resetting monthly ([pricing](https://exa.ai/pricing)) | $4–7 per 1k searches |
| Tavily | [tavily-ai/tavily-mcp](https://github.com/tavily-ai/tavily-mcp) (2,467; 2026-10-29; MIT) | `tavily` plugin in official marketplace | 1,000 credits a month, no card ([docs](https://docs.tavily.com/documentation/api-credits)) | $0.008 per credit |
| Firecrawl | [firecrawl/firecrawl-mcp-server](https://github.com/firecrawl/firecrawl-mcp-server) (7,730; 2026-10-29; MIT) | `firecrawl` plugin in official marketplace | 1,000 credits a month ([pricing](https://www.firecrawl.dev/pricing)); [SE Ranking README](https://github.com/seranking/seo-skills) says 500, so it may have changed | From $19 a month |
| Brave | [brave/brave-search-mcp-server](https://github.com/brave/brave-search-mcp-server) (1,547; 2026-10-30; MIT) | Not checked | $5 monthly credit; hero text says "up to $20"; card required ([pricing](https://brave.com/search/api/)) | $5 per 1k |
| Serper | Community only: [marcopesani](https://github.com/marcopesani/mcp-server-serper) (171; **2025-03**), [garylab](https://github.com/garylab/serper-mcp-server) (39; no licence) | n/a | 2,500 queries, no card ([site](https://serper.dev/)) | About $1 per 1k at $50; expiry disputed ([third party](https://apiserpent.com/blog/serper-pricing-credits-explained)) |
| Perplexity | [perplexityai/modelcontextprotocol](https://github.com/perplexityai/modelcontextprotocol) (2,600; 2026-10-21; MIT) | See next section | None confirmed | Search $5 per 1k, Fast $1 per 1k ([docs](https://docs.perplexity.ai/getting-started/pricing)) |
| Self-hosted | [ihor-sokoliuk/mcp-searxng](https://github.com/ihor-sokoliuk/mcp-searxng) (1,341; 2026-10-27; MIT) with [SearXNG](https://github.com/searxng/searxng) (AGPL); [karust/openserp](https://github.com/karust/openserp) (1,524; 2026-10-28; MIT); [nickclyde/duckduckgo-mcp-server](https://github.com/nickclyde/duckduckgo-mcp-server) (1,560; 2026-09-04; MIT) | n/a | Free | Scraping engines may breach their terms and break often |
| Crawlers | [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) (86,624; 2026-10-30; Apache-2.0); [apify/apify-mcp-server](https://github.com/apify/apify-mcp-server) (14,010; MIT); [brightdata/brightdata-mcp](https://github.com/brightdata/brightdata-mcp) (2,697; MIT); [jina-ai/MCP](https://github.com/jina-ai/MCP) (899; Apache-2.0) | n/a | Crawl4AI free; others not priced here | n/a |
| Trends | [andrewlwn77/google-trends-mcp](https://github.com/andrewlwn77/google-trends-mcp) (34; 2025-07-13) | n/a | No key | Stale |
| Sitemaps | [mugoosse/sitemap-mcp-server](https://github.com/mugoosse/sitemap-mcp-server) (7; 2026-08-08) | n/a | No key | Unneeded |

**Registries**
- A `search=seo` query on the official registry returned 50 entries, many with no repository URL, several irrelevant (Seoul apartments), and many SaaS vendors — [registry](https://registry.modelcontextprotocol.io/v0/servers?search=seo&limit=50). Examples with some relevance: `com.crakseo/search-console`, `com.didyouseo/mcp`, `com.calmseo/seo-mcp`, `com.errandkit/seo-ai-audit`.

### Inferences
- Suggested free stack, in order: Chrome DevTools MCP now; AminForou or Suganthan GSC after launch; DataForSEO with a $50 top-up only when keyword data is needed; Keyword Planner MCP as the free alternative if an Ads account exists.
- For a pre-launch site, GSC, GA4 and Bing servers return nothing useful yet. GBP API access needs a live website. Only auditing tools help today.
- For Tricity Hindi or Punjabi keyword volume, Google's own Keyword Planner is the most relevant source; its exact coverage for Punjabi queries was not tested.
- A hosted connector means a third party holds Google OAuth tokens; prefer local stdio with read-only scopes.

### Gaps
- Smithery, Glama and PulseMCP were not queried directly; findings rest on the official registry, GitHub search and RankSpot's list.
- The AminForou PyPI name `mcp-search-console` differs from the repo; confirm it is the author's own before running.
- No official Bing or GBP statement found; absence is based on searches.
- Semrush's plan table could not be reconciled.
- Licence and terms of Serper, Brave and Perplexity for rank-style monitoring were not read.

## Can an MCP query LLMs for brand visibility?

### Takeaway
Yes, cheaply. Self-hosted Limelit Open and citation-intelligence both expose MCP tools that query ChatGPT, Claude, Gemini and Perplexity through their APIs, and Perplexity has an official MCP. API answers are not the same as what consumers see, so treat results as directional.

### Cited Findings
- **Perplexity official MCP:** remote `claude mcp add --transport http perplexity https://api.perplexity.ai/mcp --header "Authorization: Bearer YOUR_API_KEY"`, or local `claude mcp add perplexity --env PERPLEXITY_API_KEY=... -- npx -y @perplexity-ai/mcp-server`, or plugin. Tools: search, ask, research, reason — [README](https://raw.githubusercontent.com/perplexityai/modelcontextprotocol/main/README.md). Simplest manual check, needs a paid API key. Sonar token prices could not be read from the docs I reached.
- **[limelit-co/open](https://github.com/limelit-co/open)** (255; 2026-10-30; Apache-2.0): one binary with SQLite and dashboard; `limelit mcp` serves 14 read tools over stdio; runs need user approval. ChatGPT, Claude, Perplexity and Gemini via APIs; AI Overview, AI Mode and Copilot via scrapers (DataForSEO etc.). BYO keys, or `limelit login` for a free cloud allowance that routes prompts through Limelit. No markup — [README](https://raw.githubusercontent.com/limelit-co/open/main/README.md). Verdict: best free option; early.
- **[AutomateLab-tech/citation-intelligence](https://github.com/AutomateLab-tech/citation-intelligence)** (8; 2026-10-13; MIT): `npx -y @automatelab/citation-intelligence`. No backend. Own estimate: 20–30 weekly queries for about $0.20–0.60. Labels each engine as `api_proxy` or `consumer_scrape` and says results are directional — [README](https://raw.githubusercontent.com/AutomateLab-tech/citation-intelligence/main/README.md). Honest design, but very few users.
- **[avansaber/seo-monster](https://github.com/avansaber/seo-monster)** has `ai_citation_track` using Perplexity/OpenAI/Anthropic/Gemini keys, described as paid — [README](https://raw.githubusercontent.com/avansaber/seo-monster/main/README.md).
- **[Auriti-Labs/geo-optimizer-skill](https://github.com/Auriti-Labs/geo-optimizer-skill)**: `geo citations` with your own key.
- **Self-hosted platforms,** MCP not verified: [elmohq/elmo](https://github.com/elmohq/elmo) (541; 2026-10-30; MIT), [ansvisor/ansvisor](https://github.com/ansvisor/ansvisor) (217; 2026-10-30; MIT), [yaojingang/GEORank](https://github.com/yaojingang/GEORank) (528; Apache-2.0), [ai-search-guru/getcito](https://github.com/ai-search-guru/getcito-worlds-first-open-source-aio-aeo-or-geo-tool) (502; licence NOASSERTION).
- **Small or unverified:** [sharozdawa/ai-visibility](https://github.com/sharozdawa/ai-visibility) (11; 2026-03-22), [mukul-dutt/mentionsapi-mcp](https://github.com/mukul-dutt/mentionsapi-mcp) (1; needs paid-account key), [SerpstatGlobal/llm-brand-monitor-mcp](https://github.com/SerpstatGlobal/llm-brand-monitor-mcp) (1; 2026-04-22), [estevecastells/llmpulse-mcp](https://github.com/estevecastells/llmpulse-mcp) (1), [stefan-white/ai-visibility-audit](https://github.com/stefan-white/ai-visibility-audit) (1).
- **Paid:** Waikay from $69.95 a month ([PyPI](https://pypi.org/project/waikay-mcp/)); Peec AI, RankSpot remote MCPs ([list](https://raw.githubusercontent.com/RankSpotAI/awesome-seo-mcp/main/README.md)); DataForSEO AI Optimization API with LLM Mentions, rate not shown ([pricing](https://dataforseo.com/pricing)).
- **Avoid for measurement:** the npm `ai-visibility-mcp` readme says it simulates AI platform responses, so it reports no real answers — [pkgstats](https://www.pkgstats.com/pkg:ai-visibility-mcp).
- **OpenAI and Gemini:** search found only community Gemini servers with grounded search, e.g. one with `include_citations` off by default — [Glama](https://glama.ai/mcp/servers/c1p5jj6lsp). No official OpenAI or Google "ask the model" MCP found. citation-intelligence and Limelit cover both via APIs.
- **Passive measurement:** Ryze's own skill rests on a sound idea that GA4 referrals show real AI clicks rather than sampled prompts — [skill](https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills/blob/main/skills/ai-visibility/SKILL.md). The official GA4 MCP or PostHog can do this without Ryze.

### Inferences
- A monthly panel of 20 to 30 buyer prompts ("water tank cleaning Mohali", Hindi and Punjabi versions) via citation-intelligence or Limelit should cost under a dollar or so per run, based on citation-intelligence's estimate. Sample sizes that small are noisy, and answers vary by run.
- Pre-launch there is nothing to measure beyond a baseline. A one-time baseline before launch is the sensible use.
- Referral data is the honest long-term measure; prompt panels are diagnostic.

### Gaps
- Exact current Sonar, OpenAI and Gemini prices were not verified, and Gemini and Perplexity free allowances come only from one README.
- No source established how well API answers match consumer answers, or how any of these behave for Hindi or Punjabi queries or Indian locations.

## Which are low quality, unmaintained or risky? What must be read before installing?

### Takeaway
The main risks are hosted connectors that hold Google OAuth tokens, plugin hooks that run outside the sandbox, curl-to-bash installers, scrapers using CAPTCHA solvers, and unpinned `npx` servers. None of the 14 repos I scanned matched the malicious patterns I grepped for, but that is a shallow check, and every skill must be read before use.

### Cited Findings

**Platform facts**
- "A Claude Code plugin you install can execute arbitrary code on your machine with your user privileges." Hooks, monitors, MCP and LSP servers run outside the sandbox and outside permission rules — [Plugin security](https://code.claude.com/docs/en/plugins/security.md).
- The install warning says Anthropic "does not control what MCP servers, files, or other software are included in plugins and cannot verify that they will work as intended or that they won't change" — [Plugin security](https://code.claude.com/docs/en/plugins/security.md). So a community listing is not an endorsement.
- Review steps from Anthropic: read `hooks/hooks.json`, `.mcp.json`, and every file in `bin/`; run `claude --plugin-dir <dir> plugin details <name>` on a clone for a component inventory without starting a session. Skills influence Claude as instructions. Files remain cached 14 days after uninstall — [Plugin security](https://code.claude.com/docs/en/plugins/security.md).
- Marketplaces can pin a tag: `/plugin marketplace add your-org/plugins#v1.2.0` — [Install plugins](https://code.claude.com/docs/en/discover-plugins).

**Ecosystem incidents**
- Snyk ToxicSkills (2026-02-05): of 3,984 skills from ClawHub and skills.sh, 534 (13.4%) had critical issues, 1,467 (36.82%) any issue, 76 confirmed malicious after human review — [Snyk](https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub). Secondary summaries disagree on share of hybrid attacks: 91% vs 100%; one source could not verify the report URL ([Forkast](https://forkast.news/ai-agent-skills-are-the-new-supply-chain-attack-vector-and-most-have-never-been-vetted)). The Snyk page itself was not fetched.
- OWASP Agentic Skills Top 10 v0.5 (June 2026, draft): malicious skills reach API keys and SSH credentials and can persist by writing into memory or identity files after uninstall; recommends sandboxing, logging, hash-pinning — [OWASP](https://owasp.org/www-project-agentic-skills-top-10/docs/OWASP-Agentic-Skills-Top10-v0.5.pdf).
- postmark-mcp: version 1.0.16 (September 2025) added one line BCCing every email to an attacker, showing a clean package can turn malicious in an update — [ThaiCERT](https://www.thaicert.or.th/?p=9695).
- @antv/mcp-server-antv shipped malicious code via a compromised npm account (May 2026), part of Mini Shai-Hulud — [GitLab advisory](https://advisories.gitlab.com/npm/@antv/mcp-server-antv/GMS-2026-292/).
- Axios npm compromise (2026-03-31): one analysis says exa-mcp-server and tavily-mcp depend on axios directly — [dev.to](https://dev.to/michael_onyekwere/what-the-axios-npm-compromise-means-for-mcp-server-maintainers-50bm). Not confirmed whether they were affected.

**Red flags by repo**
| Item | Issue | Action |
|---|---|---|
| [cnych/seo-mcp](https://github.com/cnych/seo-mcp) (260; 2025-04-14) | Pays CapSolver to clear Cloudflare Turnstile and pulls Ahrefs data; Ahrefs' terms not read but this bypasses a bot check | Avoid |
| [egebese/dataseo-mcp](https://github.com/egebese/dataseo-mcp) (193; 2026-07-06) | Same approach, README says it automates third-party services and compliance is on you | Avoid |
| [Ryze](https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills), [irinabuht12-oss](https://github.com/irinabuht12-oss/marketing-skills) | Funnels to hosted connector with Google account access; conflicting endpoints; no pricing | Avoid |
| [notfair-plugin](https://github.com/nowork-studio/notfair-plugin) | `.mcp.json` auto-registers hosted server with write-capable integrations | Read; disable MCP |
| [akii](https://github.com/akii-technologies-ltd/akii-seo-ai-search-optimizer) | SessionEnd hook telemetry and CTA | Opt out or skip |
| [geo-seo-claude](https://github.com/zubair-trabzada/geo-seo-claude) | `curl \| bash`, installs venv and Chromium, allows Bash | Read install.sh; clone manually |
| [aaron-marketing-skills](https://github.com/aaron-he-zhu/aaron-marketing-skills) | Hooks on nearly every event including all MCP calls | Read `hooks/claude-hook.sh` |
| [claude-seo](https://github.com/AgriciDaniel/claude-seo) | Hook after each Edit/Write; 144 Python files; extension installers | Read hook; skip extensions |
| [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Telemetry default on; browser content exposed to client | Set opt-outs |
| [ahrefs-mcp-server](https://github.com/ahrefs/ahrefs-mcp-server), [mcpdoc](https://github.com/langchain-ai/mcpdoc) | Archived | Do not use; a stale npm package is a supply-chain risk |
| [marcopesani/mcp-server-serper](https://github.com/marcopesani/mcp-server-serper), [cohnen/mcp-google-ads](https://github.com/cohnen/mcp-google-ads), [pskill9/web-search](https://github.com/pskill9/web-search) (2024, no licence), [enemyrr/mcp-server-pagespeed](https://github.com/enemyrr/mcp-server-pagespeed), [guchey](https://github.com/guchey/mcp-server-google-search-console) | Over a year or near a year without a push | Avoid |
| [ahonn/mcp-server-gsc](https://github.com/ahonn/mcp-server-gsc), [SNLabat](https://github.com/SNLabat/SEO-GEO-AEO-Skill), alphaparkinc, irinabuht12-oss | No licence: default copyright, cannot legally copy | Avoid |
| [gbp community servers](https://github.com/A1-x-Tech/mcp-google-business) | Tiny; write access to public reviews and listing | Avoid |
| Tiny 0–5 star GEO packs from [awesome-seo-agent-skills](https://github.com/RankSpotAI/awesome-seo-agent-skills) | No track record; includes a same-named `geo-seo-claude` by [hmzainjamil](https://github.com/hmzainjamil/geo-seo-claude) (0 stars), easy to mistake for the popular one | Avoid |
| Registry SaaS MCPs ([list](https://registry.modelcontextprotocol.io/v0/servers?search=seo&limit=50)) | Unknown operators, usually no repo | Avoid unless vetted |

**Prompt injection specific to SEO tools**
- SEO skills fetch and read untrusted pages, including competitors', so a page can carry instructions. claude-seo treats fetched content as data ([CHANGELOG](https://github.com/AgriciDaniel/claude-seo/blob/main/CHANGELOG.md)); marketingskills' ads guardrails do too ([audit-guardrails](https://github.com/coreyhaines31/marketingskills/blob/main/skills/ads/references/audit-guardrails.md)).
- Static scan, SKILL.md files matching "untrusted" or "data, not instructions" style wording: aaron-marketing-skills 94, claude-seo 35, marketingskills 8, the other 11 repos 0. So most packs give Claude no written defence against instructions planted in a page they audit. Crude grep; synonyms would be missed.
- Static scan, 14 repos: no match in code or SKILL.md for `~/.ssh`, `.aws/credentials` or `id_rsa`. The only match for exfiltration hosts (webhook.site, pastebin, ngrok, Discord webhooks, requestbin) was a CSV in marketingskills' directory-submission template, not checked further but not code.

**Pre-install checklist** (derived from [Plugin security](https://code.claude.com/docs/en/plugins/security.md) and [OWASP](https://owasp.org/www-project-agentic-skills-top-10/docs/OWASP-Agentic-Skills-Top10-v0.5.pdf))
1. Read every `SKILL.md` you will use, plus `hooks/hooks.json`, `.mcp.json`, `bin/` and any scripts it runs.
2. Prefer copying single skill folders into `.agents/skills` at a reviewed commit, over installing a plugin.
3. Do not pipe curl to bash. Download and read.
4. Pin versions: `pipx run --spec "x==1.2.3"`, `npx pkg@1.2.3`, commit SHAs. Avoid `@latest` for anything with credentials.
5. Use read-only Google scopes, and a dedicated Google Cloud project per tool. Keep write flags off.
6. Prefer local stdio over hosted middlemen; keep keys out of the repo.
7. Install at local or project scope, not user scope, and leave auto-update off.
8. Grep for `curl`, `fetch(`, `subprocess`, `eval`, unknown domains.

### Inferences
- The project rule against reading `.env` files matters more with these tools: a stdio MCP or hook runs as the user and can read them regardless of Claude's permissions. This VPS hosts other services, so a compromised plugin's blast radius extends beyond this repo.
- Running any third-party MCP inside a container or a separate user on the VPS is worthwhile for anything beyond official vendor servers.
- Google OAuth credentials for GSC and Ads are the most sensitive items in this stack, more so than search API keys.

### Gaps
- No full code audit was done on any repo. Python and JS in claude-seo, aaron-marketing-skills and seo-monster were not read line by line.
- Other than the tarballs scanned, dependencies (`requirements.txt`, `package.json`) were not audited.
- No CVEs were searched per repo.
- r/ClaudeAI and r/SEO were reached only via a snapshot mirror with no thread specifically reviewing claude-seo.
