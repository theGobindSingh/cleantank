# Tricity search visibility and competitor advertising: local-browser recheck

Collected 31 Oct 2026, 17:19 to 17:41 IST. Every load came from a headless Chromium context set to en-IN and Asia/Kolkata, with browser geolocation on the town named in each row. The server IP stays in Mumbai (Oracle). Times are IST.

Legend:
- **Town-set browser**: geolocation set to that town, IP still Mumbai.
- **US-WS**: the WebSearch tool, US-only. Weakest evidence for anything local.
- All rankings are single samples. Read them as "was present", never as a stable rank.

Raw evidence: JSONL logs, page text and screenshots are in `/tmp/claude-1001/-home-ubuntu-Programming-ct/afd18c61-4948-46cb-8622-d934b17d163c/scratchpad/search/out/`. That is a session folder and will not last.

## What do Bing, Bing Maps, Bing AI, DuckDuckGo, Brave and Yandex show for about 30 queries, and are results localised?

### Takeaway
This question is almost entirely unanswered. Only one valid result set was collected from any engine: Bing, "water tank cleaning mohali". DuckDuckGo, Brave and Yandex blocked the first load. Bing then served off-topic pages to the next 8 queries, so the batch was stopped. Nothing here shows any Tricity localisation, and the near-me test never produced a usable result.

### Cited Findings

**Engine status**

| Engine | Town-set browser | Time | Result |
|---|---|---|---|
| [Bing, cc=in](https://www.bing.com/search?q=water%20tank%20cleaning%20mohali&cc=in&setlang=en-IN) | Mohali | 17:19 | Valid. 10 organic results, see below |
| [Bing, 8 more queries](https://www.bing.com/search?q=water%20tank%20cleaning%20chandigarh&cc=in&setlang=en-IN) | Chandigarh | 17:20 to 17:22 | HTTP 200, no challenge page, but off-topic results. Treated as a soft block and stopped |
| [DuckDuckGo, kl=in-en](https://duckduckgo.com/?q=water%20tank%20cleaning%20mohali&kl=in-en&ia=web) | Mohali | 17:19 | Redirected to `static-pages/home-error/418.html` on the first load. Stopped |
| [Brave, country=in](https://search.brave.com/search?q=water%20tank%20cleaning%20mohali&country=in&source=web) | Mohali | 17:19 | HTTP 429, "Verifying you're not a bot" slider. Stopped |
| [Yandex](https://yandex.com/search/?text=water%20tank%20cleaning%20mohali&lr=10558) | Mohali | 17:19 | Redirected to `showcaptcha`, "Please confirm that you are not a robot". Stopped |
| [Mojeek](https://www.mojeek.com/search?q=Clean%20Tank%20Services&lb=en&arc=in) (added, outside the brief, as an independent index) | Mohali | 17:24 | HTTP 403 on the first load. Stopped |
| Bing Maps, Bing AI Mode, Copilot Search | n/a | n/a | **Not attempted.** Once Bing was degraded, moving to another surface of the same site would have been retrying a block in another form. Bing's interface does show an "AI MODE" tab and a "MAPS" tab |
| Google Search | n/a | n/a | Not used, per the brief |

**The one valid result set.** Bing, Mohali, 17:19, "water tank cleaning mohali", URLs decoded from Bing's redirect links:
1. [justdial.com Mohali list](https://www.justdial.com/Mohali/Water-Tank-Cleaning-Services/nct-10532933)
2. [gracecleaning.in](https://gracecleaning.in/water-tank-cleaning/)
3. [busybucket.in Mohali](https://busybucket.in/water-tank-cleaning-in-mohali/)
4. [gugaaviation.com Mohali](https://gugaaviation.com/services/water-tank-cleaning/mohali/)
5. [tricitycleaners.in](https://www.tricitycleaners.in/service/water-tank-cleaning/)
6. [sulekha.com Mohali](https://www.sulekha.com/water-tank-cleaning-services/mohali)
7. [dir.indiamart.com Mohali](https://dir.indiamart.com/mohali/water-tank-cleaning-services.html)
8. [elitewinds.com Mohali](https://elitewinds.com/water-tank-cleaning-service-in-mohali/)
9. [justdial.com Sector 91 manual cleaning](https://www.justdial.com/Mohali/Water-Tank-Cleaning-Services-for-Manual-Cleaning-in-Mohali-Sector-91/nct-10532933-att-PSCH5)
10. [indiamart.com Mohali](https://www.indiamart.com/water-tank-cleaning-services-mohali/)

The script found no ads, AI answer or local pack in this page, but the screenshot showed a blank area under the tabs and the titles came back empty. So "none found" here does not prove none were shown.

**Degraded Bing sets, recorded so nobody reads them as rankings** (Chandigarh-set browser, first domains returned):
- 17:20, water tank cleaning chandigarh: blackmagicdesign.com, davinciresolveclub.com, techspot.com
- 17:20, water tank cleaning near me: jw.org, iteslj.org, bibleinfo.com
- 17:21, water tank cleaners near me: jw.org, iteslj.org, bibleinfo.com
- 17:21, water tank cleaning charges chandigarh: web.whatsapp.com, forum.lowyat.net, answers.microsoft.com
- 17:21, water tank cleaning amc chandigarh: no results extracted
- 17:21, underground water tank cleaning chandigarh: an adult video site
- 17:21, mechanized water tank cleaning chandigarh: dictionary.cambridge.org, merriam-webster.com, wikipedia.org
- 17:22, sump cleaning chandigarh: wikipedia.org, dir.indiamart.com, sintexonline.com
- 17:22, hospital water tank cleaning chandigarh: no data, because I stopped the script during this load

Across the 8 sets with a response, only 1 result had tank or cleaning wording in its title or URL. Titles were often empty in the page, so that count may be low. The domain list above is the stronger evidence.

**Recheck of earlier notes** ([search_and_messaging.md](../../docs/research/competitors-prices/notes/search_and_messaging.md)):
- The earlier Mohali Bing row matches closely. Justdial, Grace, Busy Bucket, Guga and Tricity Cleaners hold positions 1 to 5 in the same order, and Sulekha, IndiaMART and Elite Winds are also present. Those two samples are the only repeat in this research.
- Bing degrading after a few queries was seen again. The earlier notes said it seemed to keep only the first word. That fits "mechanized" and "sump", but not the Blackmagic, jw.org or adult-site sets, so the first-word explanation is unproven.
- DuckDuckGo and Brave gave 8 and 4 clean sets earlier the same day. Both now block from the first load. Yandex was not tested earlier.
- The 13 queries the earlier notes listed as having no valid data still have none.

**Localisation evidence**
- Meta Ad Library rendered in Marathi ("मराठी") from a browser set to en-IN and Chandigarh coordinates ([Meta Ad Library](https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=IN&media_type=all&q=water%20tank%20cleaning&search_type=keyword_unordered)). The earlier Mumbai run also got Marathi, so the setting made no difference there.
- Google suggest is a plain HTTP endpoint, so browser geolocation can't reach it. Its output included Nagpur and Pune for "water tank cleaning" ([suggest](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=in&oe=utf8&q=water%20tank%20cleaning)).
- The near-me test was planned across Mohali, Kharar, Panchkula, Zirakpur, New Chandigarh, Dera Bassi and Ropar. It never ran with valid results.

### Inferences
- The services tested so far seem to place this browser by IP. Meta is the one direct evidence of that. A phone in Mohali is likely to see different results from anything here.
- Bing's degradation could come from this research's own pace or from other researchers' scripts on the same IP, which were running at the time. It can't be attributed to either.
- The Mohali match between two runs suggests Bing's real ranking for a town-named query is reasonably steady on the same day, on a sample of two.

### Gaps
- About 29 of the 30 queries have no valid data on any engine. That includes all the Hinglish, Hindi and Punjabi ones.
- No answer was read from Bing Maps, Bing AI Mode or Copilot Search.
- Whether near-me results are localised is untested. This needs a real phone in the Tricity, or a paid SERP API with Chandigarh geolocation.

## What do Google autocomplete and Google Trends show, by language?

### Takeaway
Autocomplete worked for all 30 seeds and confirms the earlier test. People search for a phone number in Hinglish and Hindi, for a price list in English, and for almost nothing in Gurmukhi. Trends gave no data: the page shell loaded with no chart, then returned a 429.

### Cited Findings
All autocomplete rows: 17:23 to 17:26, HTTP 200, `gl=in`, Mumbai IP. These are suggestion lists, not volumes.

**English** ([example](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=in&oe=utf8&q=water%20tank%20cleaning%20mohali))
- Chandigarh: price list; service; services near chandigarh; services in new chandigarh; best services in chandigarh
- Mohali: service; commercial water tank cleaning mohali; services in mohali price list; best services in mohali
- Panchkula: services; commercial; near panchkula haryana; best services
- Zirakpur: cleaner near zirakpur punjab; services in zirakpur; best services
- Kharar: services kharar; cleaner near kharar punjab; services in kharar punjab; services in kharar punjab price; also "water tank 1000 ltr cleaning price"
- "tank cleaning services in": delhi, bangalore, **kharar**, patna, chennai, gurgaon, faridabad, hyderabad, dehradun, indore
- near: near me; near me prices; near me within 1.6 km; near me open now; near me contact number
- price: price list; price near me; price in delhi, ahmedabad, bangalore, chennai
- society water tank: cleaning services near me; cleaning charges; cleaning frequency
- amc: "water tank cleaning amc" returned only 2 other suggestions, both about cost and need
- underground: near me; price; services near me cost; machine; "underground water tank cleaning urban company"
- Question forms that keep recurring: cost of cleaning a water tank; how do I clean my water tank without removing water; water tank cleaning period; do I need to clean my water tank; water tank cleaner contact number

**Hinglish** ([example](https://suggestqueries.google.com/complete/search?client=firefox&hl=hi&gl=in&oe=utf8&q=pani%20ki%20tanki%20saaf))
- pani ki tanki saaf karne wale ka number; ...number near me; ...ka tarika; ...ka chemical; ...ki machine price
- `paani ki tanki saaf` respells to `pani`
- pani ki tanki ki safai near me; ...karne wale; ...price; ...karne wale ka number; ...hetu prathna patra (application letter)
- tanki saaf karne wala; ...wala near me; ...wala ka number; ...wale ka number
- tanki cleaning: resolves to English "tank cleaning services near me"

**Hindi** ([example](https://suggestqueries.google.com/complete/search?client=firefox&hl=hi&gl=in&oe=utf8&q=%E0%A4%AA%E0%A4%BE%E0%A4%A8%E0%A5%80%20%E0%A4%95%E0%A5%80%20%E0%A4%9F%E0%A4%82%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A5%80%20%E0%A4%B8%E0%A4%AB%E0%A4%BE%E0%A4%88))
- पानी की टंकी: mostly DIY, vastu, medicine and product price (दवा, किस दिशा में, 1000 लीटर कीमत)
- पानी की टंकी साफ: करने वाली दवा; पाउडर; मशीन; केमिकल; करने वाले का नंबर; करने का तरीका
- पानी की टंकी की सफाई: कैसे करें; की कीमत; नियर में; सेवाएं; हेतु प्रार्थना पत्र; करने वाले का नंबर
- टंकी साफ करने वाले: का नंबर; then Roman "tank saaf karne wale ka number near me"
- टंकी सफाई चंडीगढ़: **no suggestions**

**Punjabi** ([example](https://suggestqueries.google.com/complete/search?client=firefox&hl=pa&gl=in&oe=utf8&q=%E0%A8%AA%E0%A8%BE%E0%A8%A3%E0%A9%80%20%E0%A8%A6%E0%A9%80%20%E0%A8%9F%E0%A9%88%E0%A8%82%E0%A8%95%E0%A9%80))
- ਪਾਣੀ ਦੀ ਟੈਂਕੀ: itself, then Roman "pani di tanki" Pahari song lyrics
- ਪਾਣੀ ਦੀ ਟੈਂਕੀ ਸਾਫ, ਟੈਂਕੀ ਦੀ ਸਫਾਈ, ਟੈਂਕੀ ਸਾਫ਼ ਕਰਨ, ਪਾਣੀ ਦੀ ਟੈਂਕੀ ਦੀ ਸਫਾਈ: **no suggestions**

**Brand** ([suggest](https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=in&oe=utf8&q=clean%20tank%20services)): "clean tank services" returned generic phrases plus "saharsh tank clean services reviews" and "mm water tank clean services". Nothing pointed to this business.

**Recheck of the [seo-tools report](../../docs/research/seo-tools/report.md)**: all its autocomplete findings held: the `paani` respelling, "करने वाले का नंबर", "price list" for Chandigarh and Mohali, "commercial water tank cleaning mohali", and the Gurmukhi result.

**Google Trends**
- [Classic Explore, IN-CH](https://trends.google.com/trends/explore?geo=IN-CH&q=water%20tank%20cleaning&hl=en), 17:22 and 17:26: HTTP 200, with geo and category pickers returning 200, but no chart ever appeared and no data call was made. [IN-PB](https://trends.google.com/trends/explore?geo=IN-PB&q=water%20tank%20cleaning&hl=en), 17:22: same shell. The page says "Classic Explore is expiring soon".
- At 17:29, a further load to reach the new Explore page returned Google's **429**, "you have sent too many requests". Stopped, so the new Explore page was never seen.

### Inferences
- A page and listing built around "number", "near me" and "price list" matches what people type. "Price list" appears for Chandigarh, Mohali and Kharar.
- Generic Hindi searches lean DIY and chemical, so a generic Hindi page will compete with how-to content. Hindi service intent shows up as "करने वाले का नंबर", "की कीमत" and "नियर में".
- "Commercial" appears for Mohali and Panchkula, while AMC barely registers. Society buyers may not use the word AMC, though that rests on suggestions alone.
- Application-letter searches ("हेतु प्रार्थना पत्र") suggest some people asking an institution to clean a tank, not hiring directly. That is a small, unverified signal.
- The Nagpur and Pune suggestions are consistent with Maharashtra IP bias. "Kharar" appearing among large cities may be real or a local quirk.

### Gaps
- No volume data of any kind. Keyword Planner remains the way to get it.
- Trends gave nothing for Chandigarh or Punjab. Open it by hand on a normal device; low volume may also leave it empty there.

## Does cleantankservices.com appear for its own name or any query?

### Takeaway
It could not be tested on any engine in the Tricity-set browser, because every brand query was queued after the Bing block. It did not appear in the one valid Bing set. In the US search tool the live domain did not appear for its own domain name, but a GitHub Pages copy of the site did.

### Cited Findings
- Bing, Mohali, 17:19: not in the top 10 for "water tank cleaning mohali" (list above).
- Mojeek returned 403 on the brand query, so nothing was learned.
- US-WS, about 17:25, "cleantankservices.com": no page from the domain. Results were [Kleen Tank](https://kleentank.com/what-we-do/page/24), [Envtech](https://curbwaste.com/company-profiles-network/envtech-tank-cleaning-services) and other firms.
- US-WS, about 17:25, "Clean Tank Services Gobind Galaxy": the top results were [thegobindsingh.github.io/cleantank/about-us](https://thegobindsingh.github.io/cleantank/about-us) and [thegobindsingh.github.io/cleantank/](https://thegobindsingh.github.io/cleantank/). The live domain did not appear. The tool's summary said that site calls itself "India's Most Trusted" and cites "government-grade compliance". I did not open those pages.
- The tool's summary also says that site claims government contracts since 2017, while the live site says "15+ years" ([cleantankservices.com](https://www.cleantankservices.com/)). Not verified further.
- [Rendered live homepage](https://www.cleantankservices.com/), Mohali-set browser, 17:31: Mohali, Chandigarh and Tricity appear 0 times. Kharar and Kurali appear once each, both in the Punjab office address. No ₹ price. Schema: LocalBusiness, WebSite, WebPage. 0 Devanagari, 0 Gurmukhi, no hreflang. This confirms the earlier notes.
- [Google Ads Transparency](https://adstransparency.google.com/?region=IN&domain=cleantankservices.com), 17:37: 0 ads.

### Inferences
- The GitHub Pages username matches this repo's git user, so the copy is probably the team's own old draft. If so, it may be competing with the real domain and carrying claims the owner has dropped. Worth removing or redirecting before launch. That rests on one US-located search.
- The domain's re-registration in September 2026 (earlier notes) could explain the lack of indexing, but nothing here tests that.

### Gaps
- No Tricity-set brand search succeeded. Search Console and `site:cleantankservices.com` by hand from a normal device would settle this quickly.

## Who advertises on Google, per the Ads Transparency Center?

### Takeaway
Ad counts match the earlier notes exactly, but reading the ad copy changes the picture. Of the firms checked, Fixomes is the only Tricity-serving advertiser seen with a tank-specific ad naming the Tricity. Smart Cleaning's visible ads target Delhi NCR, and Busy Bucket and Tricity Cleaners show home and sofa cleaning. No Google tank advertiser in the Tricity was found beyond these.

### Cited Findings
All rows: Chandigarh-set browser, region India, logged out, 17:24 to 17:41. "Last shown" comes from individual ad pages.

| Domain | Ads | Verified advertiser | Last shown | What the ads read were |
|---|---|---|---|---|
| [fixomes.com](https://adstransparency.google.com/?region=IN&domain=fixomes.com) | 24 | fixomes | 31 Oct | **"Tank Deep Cleaning Services In Chandigarh Tricity"**: "Remove dirt, sludge & buildup from your water tank... Overhead & underground tank cleaning... 4.8 + Google Rating. Same-day Service. 4000+ Happy Customer." Others: pest control, house deep cleaning, geyser, microwave and washing machine repair |
| [busybucket.in](https://adstransparency.google.com/?region=IN&domain=busybucket.in) | 5 | Dasharath Lal Maurya; Horus Services B.V. | 30 Oct | Sofa and home cleaning with a "Home Cleaning Service Mohali" sitelink; bathroom cleaning in Ludhiana; home cleaning Dehradun, which mentions water tanks in passing ("Your Home, Sofa, Bathroom and Water Tank Cleaning"). "India's #no1 Home Cleaning Services". No tank-led ad |
| [watertankcleaning.co.in](https://adstransparency.google.com/?region=IN&domain=watertankcleaning.co.in) | 15 | Soni Pandey | not read | Tank-specific, but **Delhi NCR**: "Water Tank Cleaning in Delhi", "100% Bacteria Free Tank", "Book Now & Get 20% Discount", "Rated #1 ... provider in Delhi" |
| [tricitycleaners.in](https://adstransparency.google.com/?region=IN&domain=tricitycleaners.in) | 11 | SACHIN KUMAR | 30 Oct | Sofa, bathroom and housekeeping for Chandigarh, Mohali and Panchkula. Maps ad: 4.7 from 377 to 381 reviews, ₹1,000 to 3,000, "Call 097794 82050". No tank ad among those seen |
| [safaiwale.in](https://adstransparency.google.com/?region=IN&domain=safaiwale.in) | 28 | PRASHANT kumar | 30 Oct | One read: a Maps-style ad under the name **Divtech Facilities**, 4.6 from 124 reviews. Earlier notes saw Noida and New Delhi targeting. The list view was not captured |
| [urbancompany.com](https://adstransparency.google.com/?region=IN&domain=urbancompany.com) | not parsed | Urban Company Limited | 31 Oct | One ad is a video. Not reviewed for tank content |
| goodlifefuture.in, [aonecleaningservices.in](https://adstransparency.google.com/?region=IN&domain=aonecleaningservices.in), cleantoday.co.in, gracecleaning.in, gugaaviation.com, tricitydrycleaner.com, elitewinds.com, kps.co.in, cleantankservices.com | 0 | none | n/a | No ads listed for the domain |

**Searches by advertiser name** (dropdown matches, 17:37 to 17:39, top entries only)
- [Welco](https://adstransparency.google.com/?region=IN): no Indian cleaning advertiser. Only Junior Welcome, welcome-tec and similar.
- A-One Cleaning: only A One Bond Cleaning, Australia.
- Shree Balaji: many unrelated Indian firms (traders, travels, paints, fashions), no tank firm listed.
- Good Life Future: the dropdown returned nothing.
- "Water Tank Cleaning" as an advertiser name: Excellent Water Tank Cleaning (about 17 ads), SGS Water Tank and Sump (14), Preethi (5), Guru Electrical and Plumbing (3), Star, Devi, Blue Whale, Chennai Pro, Crystal (Hyderabad). None names the Tricity.
- "Tank Cleaning": KR Septic (33), Excellent (17), Balaji Tank Cleaning Services (3), SSP (2), Anjali Septic (3), Nesara (2), Brighter Septic (2). Earlier notes place a Balaji Tank Cleaning Services in Sector 45 and a similarly named firm in Gurgaon. Which one this is was not checked.

**Conflicts**
- Fixomes says 4000+ customers and a 4.8+ rating in its ad, but [its site](https://www.fixomes.com/) says 2500+ customers, and earlier notes record 4.9 on the site and 4.5 on Google.
- Earlier notes said Welco pays for Sponsored Maps slots, yet the name search doesn't find it. Other firms here advertise under a person's name, which could explain that.
- [Grace](https://gracecleaning.in/water-tank-cleaning/) and [KPS](https://kps.co.in/water-tank-cleaning-amc/chandigarh/panchkula) pages carry Google Ads-style tags in the rendered page, yet both show 0 ads. This was a simple text match for tag patterns, so it may only be a leftover tag.

### Inferences
- The earlier reading, that Busy Bucket, Safaiwale, Smart Cleaning, Tricity Cleaners and Fixomes all compete on tank ads here, should be narrowed. Being active on Google doesn't mean bidding on tanks in the Tricity. Only Fixomes shows that directly.
- Paid search for tank cleaning in the Tricity may be thinner than assumed. Targeting and keywords aren't public, and most ads weren't read, so this needs checking with Keyword Planner and a Tricity phone.
- Fixomes is the Google benchmark to watch. Its line is "same-day" plus a rating and a customer count.
- Advertiser identity is often a person's name, so a name search can't rule out a firm. Domain search can't find WhatsApp-only or Maps-only advertisers.

### Gaps
- Only some of the 83 listed ads across the five firms were seen: 4 list screenshots, each showing part of the list. Safaiwale's list wasn't captured, and some cards showed a Google "500" error in place of the ad.
- City targeting, search terms and spend aren't public.
- Why Horus Services B.V. shows an ad pointing to busybucket.in is unknown.

## Who advertises on Meta in the Tricity?

### Takeaway
Four advertiser names ran five Tricity tank ads, and all of them were in the earlier notes. There is no new Tricity advertiser. Three of the names are tied to the same Good Life Future message, so the Tricity field may be smaller than it looks. The one new thing is Punjabi: a Fazilka and Abohar tank ad, the first Punjabi service ad seen in either run.

### Cited Findings
11 keyword searches, India, active ads, logged out, Chandigarh-set browser, 17:22 to 17:30. Two pages returned HTTP 403 on the document but still rendered full results, so these aren't treated as a block. 94 unique ads were read. Text is in Marathi around the ads.

| Keyword | Library estimate | Cards read |
|---|---|---|
| water tank cleaning | ~1,900 | 35 |
| पानी की टंकी | ~1,300 | 26 |
| टंकी की सफाई | ~330 | 23 |
| tanki safai | ~14 | 8 |
| ਟੈਂਕੀ | ~13 | 3 |
| tank cleaning chandigarh / water tank cleaning chandigarh | ~12 each | 5 each |
| tank cleaning zirakpur | ~10 | 5 |
| tank cleaning mohali / water tank cleaning mohali | ~9 each | 3 each |
| tank cleaning panchkula | ~7 | 4 |

**Every Tricity tank ad found**

| Advertiser | Start | Language | Offer and message | Regions in the text | ID |
|---|---|---|---|---|---|
| Good life future | 6 Apr 2026 | Hindi and English | "Attention Chandigarh, Zirakpur & Panchkula!" RO doesn't clean the tank. "Govt. Registered & GST Compliant: We are a trusted brand, not local laborers." 7-stage, no tank entry, "100% Disinfect", पक्का बिल | Dhakoli, Peer Muchalla, Zirakpur, Panchkula, Chandigarh | [26586607767617468](https://www.facebook.com/ads/library/?id=26586607767617468) |
| GLF Water tank cleaning | 9 Oct 2026 | Hinglish | "Tri-City ki sabse trusted Govt. Registered" company, 6 steps, UV, "100% Govt. Certified aur Chemical-Free". Flats, villas, commercial | Chandigarh, Mohali and others | [1139021821781403](https://www.facebook.com/ads/library/?id=1139021821781403) |
| GLF Water tank cleaning | 24 Oct 2026 | Hinglish | House, tank, sofa, office cleaning. "pakki safai ki guarantee". Call or WhatsApp 8796088056. Headline "House Cleaning TriCity Zirakpur Mohali Ambala" | Tricity, Ambala | [3553837858130094](https://www.facebook.com/ads/library/?id=3553837858130094) |
| Water Tank Cleaning Service | 20 Oct 2026 | Hindi | "टंकी की सफाई, परिवार की भलाई!" Pressure wash, 500 to 2,000 L, **from ₹399**. Call 99154 24506 and WhatsApp. Page category Home Care | Chandigarh, Mohali, Zirakpur, Panchkula, Kharar | [1407923478165926](https://www.facebook.com/ads/library/?id=1407923478165926) |
| AR Water Tank Cleaners | 23 Sep 2026 | Hindi and English | Same text as Good Life Future, including the name "Good Life Future" and "not local laborers". WhatsApp | Chandigarh, Zirakpur, Panchkula | [3239467402916495](https://www.facebook.com/ads/library/?id=3239467402916495) |

**Other findings**
- Good Life Future also runs a Hindi ad for [Ambala](https://www.facebook.com/ads/library/?id=2081821882757501), started 27 Jun 2026.
- [Local Helper](https://www.facebook.com/ads/library/?id=1084733997802837), 18 Oct 2026: a tank cleaning ad in **Punjabi**, mixed with English terms, for Fazilka and Abohar. It opens by asking how clean the tank is inside. Pressure washing and vacuum, call or WhatsApp.
- [guru Enterprises](https://www.facebook.com/ads/library/?id=2177144766234719), a Home Care page, started 31 Oct 2026 and matched ਟੈਂਕੀ. The ad text wasn't readable.
- The third ਟੈਂਕੀ result, [Wel N Wil Naturals](https://www.facebook.com/ads/library/?id=1425842502281017), is an Ayurveda ad that only uses a water tank as a Bathinda landmark.
- New tank cleaners elsewhere include RS Water Tank Cleaning Bhopal (30 Oct), Water Tank Cleaner Nagpur, Orange City, [R2Solutions](https://www.facebook.com/ads/library/?id=1599980251656391) in Nagpur and Gondia, Lucknow Water Tank Cleaning, and [Safe Water tank cleaning](https://www.facebook.com/ads/library/?id=879640551832031) in Sitapur. Cleaning Hero and Homexa are still active. Most of these started in the last two months.
- Self-cleaning tank makers still advertise on the same concern: Tiara (10 ads seen), RC Plasto, Selzer and [Aquatech](https://www.facebook.com/ads/library/?id=1639699700730697).
- Neither ad library result shows spend, or regional targeting for these Indian ads, so regions above come only from the ad text.
- Busy Bucket, Fixomes, Welco, Safaiwale, Smart Cleaning, Tricity Cleaners, A-One, Shree Balaji and Urban Company did not appear as Tricity tank advertisers in the 94 ads read. This was a keyword search, not a search by page.

### Inferences
- Good Life Future and AR Water Tank Cleaners share copy word for word, so AR is likely a partner, franchise or copy. "GLF Water tank cleaning" states it is Good Life Future. So the Tricity Meta field may be two operators: Good Life Future and the ₹399 "Water Tank Cleaning Service".
- ₹399 and "Govt. Registered" are the two messages a Clean Tank ad would sit next to. "Not local laborers" must stay off Clean Tank's copy, per `docs/PRODUCT.md`.
- "Govt. Certified" for a cleaning service is a vague claim that Clean Tank's real certificate and paperwork can beat, without naming anyone.
- Local Helper shows Punjabi tank ads exist in Punjab, so a Punjabi creative for the Tricity would be the first there, on this evidence, but would not be without precedent.

### Gaps
- Cards read are a small share of the broad keywords (35 of about 1,900). The town keywords were read more fully, but even these showed 3 to 5 cards for estimates of 7 to 12, so some Tricity ads may be hidden or grouped.
- Library keyword matching is loose, and an ad with its Tricity town only in the image or video would be missed by the text filter.
- No spend, reach or results.

## What do the top competitor sites look like when rendered, and does JavaScript change the language finding?

### Takeaway
JavaScript does not change the finding. Across 13 loaded competitor sites and 24 pages, no tank service page has Hindi or Punjabi text, no page has hreflang, and none has a language switcher. The single exception is the Hindi hero on Elite Winds' homepage, so the correct figure is 1 of 13 sites with any Hindi, 0 with Punjabi.

### Cited Findings
Mohali-set browser, 17:22 to 17:31, each page scrolled to trigger lazy content. "Tank links" counts on-page links to tank URLs that name a town. WhatsApp counts real links, and "none" may still mean a chat widget or a mention in code.

| Site (tank page) | Words | Hindi / Punjabi chars visible | Schema types | Tank links | WhatsApp link | tel link | Prices | Trust claims seen |
|---|---|---|---|---|---|---|---|---|
| [Busy Bucket](https://busybucket.in/water-tank-cleaning-in-chandigarh/) | 980 | 0 / 0 | WebPage, Breadcrumb, Organization, FAQPage | 7 | Home only | Home only | None | Home: "15000+ homes cleaned", "100% Satisfaction Guarantee", "7-step certified sanitization" |
| [Safaiwale](https://safaiwale.in/water-tank-cleaning-services-in-chandigarh/) | 655 | 0 / 0 | WebPage, Breadcrumb, Organization | 3 | Yes | Yes | None for tanks; home cleaning from ₹2,500 on [homepage](https://safaiwale.in/) | "1000+ professionals", "100% satisfaction guaranteed". Says it is based in Delhi NCR |
| [Smart Cleaning](https://watertankcleaning.co.in/water-tank-cleaning-chandigarh-tricity/) | 1,152 | 0 / 0 | WebPage, Breadcrumb, FAQPage | 3 | Yes | Yes | None | Homepage: "100% satisfaction" |
| [Grace](https://gracecleaning.in/water-tank-cleaning/) | 806 | 0 / 0 | Breadcrumb only | 0 | Yes | Home only | From ₹499 | "Certified Tank Cleaning Experts", "over 10 years", "30+ skilled professionals" |
| [Clean Today](https://www.cleantoday.co.in/water-tank-cleaning-mohali) | 617 | 0 / 0 | LocalBusiness | 5 | Yes | Yes | None | Home: "100% Satisfaction Guarantee", counters 500+, 1000+, 25+ |
| [Guga Aviation](https://gugaaviation.com/services/water-tank-cleaning/mohali/) | 2,530 | 0 / 0 | WebSite, Organization, LocalBusiness, Service, FAQPage | 39 | None | Yes | Full table, ₹999 to ₹2,999, underground ₹2,499+ | "WHO-approved", "99.99%", "Certificate Issued", home "5,000+ families" vs "500+ Happy Clients" |
| [KPS](https://kps.co.in/water-tank-cleaning-amc/chandigarh/panchkula) | 1,811 | 0 / 0 | Service, Product | 29 | Yes | Yes | AMC ₹6,000 to ₹1,00,000 a year; [home](https://kps.co.in/) "Single Tank Cleaning" Rs 3,700, 5,100, 6,400 | "455+ customers" |
| [Tricity Cleaners](https://www.tricitycleaners.in/service/water-tank-cleaning/) | 735 | 0 / 0 | WebPage, Organization, Product, LocalBusiness | 0 | None | Yes | None | "guarantee 100% satisfaction" |
| [Fixomes](https://www.fixomes.com/Water-Tank-Cleaning.php) | 1,016 | 0 / 0 | HomeAndConstructionBusiness | 0 | Home only | Yes | ₹499, ₹699 | "100% Satisfaction Guarantee", same-day, "2500+" |
| [Karan](https://tricitydrycleaner.com/water-tank-cleaning-in-chandigarh/) | 561 | 0 / 0 | Article, LocalBusiness, Person and others | 6 | None | Yes | None | Home: "20 Years Of Experience" |
| [Elite Winds](https://elitewinds.com/water-tank-cleaning-service-in-mohali/) | 1,337 | 0 / 0 (**home 113 / 0**) | DryCleaningOrLaundry, Article, BlogPosting and others | 7 | Yes | Yes | None | "Cleanliness perfected, satisfaction guaranteed" |
| [A-One](https://aonecleaningservices.in/) (home) | 1,256 | 0 / 0 | None | 0 | Yes | None | None | "4500+ Happy Clients". Kharar once; other towns absent |
| [Mr Service Expert](https://www.mrserviceexpert.com/mohali/tank-cleaning) | 1,651 | 0 / 0 | Breadcrumb | 3 | Yes | Yes | RCC tank ₹600, 500 L ₹500, 1,000 L ₹600, another line ₹2,000; "prices include visit charges" | "With over 15 years", "4.5 (30K+ reviews)" |

- [goodlifefuture.in](https://goodlifefuture.in/): HTTP 500 again, about 17:30. The biggest Meta advertiser's website is down on both checks today.
- Elite Winds' homepage has a Hindi hero: "हर जगह सफाई, Better Living की शुरुआत", "हम घर, ऑफिस और कमर्शियय स्पेस के लिए Professional Cleaning Services देते हैं" (spelled that way on the page), and "अभी कॉल करें". It is mixed Hindi-English and sits on a general cleaning homepage, with `lang="en-US"`.
- Tricity Cleaners has 13 Devanagari characters in its code, but they come from a phone-country dropdown ("India (भारत)", "Nepal (नेपाल)"), not content.
- All pages declare `en`, `en-US` or nothing. No site uses a translate widget that the check detected.
- Clean Tank's own live page has 0 Hindi and 0 Punjabi too.

**Recheck of earlier claims**
- "0 of 14 with Hindi or Punjabi": the earlier notes actually tested 11 pages. On tank pages it holds at 0. Testing homepages found Elite Winds.
- Earlier schema findings held. Rendering added only minor types, such as WebSite on Guga.
- KPS's customer figure keeps moving: 386+ and 233+ on Zirakpur earlier, 455+ on the Panchkula page today. Different pages, so this may be page-level templating.
- Earlier: "Three publish consumer prices". Today at least 5 firms do: Guga, Grace, Fixomes, Mr Service Expert and KPS (Single Tank Cleaning on its homepage, labelled as India-wide approximate charges). Mr Service Expert's ₹500 and ₹600 are not in the price table in `search_and_messaging.md`.
- Guga's "5,000+ families" on its homepage vs "500+ Happy Clients" is a new internal conflict.

### Inferences
- Hindi and Punjabi service pages with hreflang remain open in this market. Elite Winds shows someone has begun thinking about it, on one homepage hero. That the Hindi is on a homepage rather than a tank page means this is about page choice, not JavaScript. I did not separately confirm its presence in the raw HTML.
- Mr Service Expert and Grace set a floor near ₹499 to ₹600, and the ₹399 Meta ad undercuts that. Clean Tank's list of ₹600 for 500 L before GST (`docs/ref/INFO-BANK.md`, via the earlier notes) sits at or above these floors. Comparing like with like needs a scope check.
- Few sites give both a working WhatsApp link and a tank price: Grace, KPS and Mr Service Expert did on these checks.

### Gaps
- One sample per page, one tank page per site. A site with Hindi on some other page would be missed.
- Trust claims come from a text filter, so the table lists examples, not a complete list. None was verified.
- Welco and Shree Balaji weren't inspected: no site of their own is known, and Justdial was excluded by the brief.
- Lighthouse and Core Web Vitals not measured.
