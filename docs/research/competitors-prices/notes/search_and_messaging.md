# Tricity water tank cleaning: search presence, AI answers and competitor messaging

All observations dated 2026-10-31. Legend for every ranking observation:

- **MUM-IP**: collected from this server (IP geolocates to [Mumbai, India, AS31898 Oracle](https://ipinfo.io/json)), with India settings (`cc=IN`, `kl=in-en`, `country=in`). An Indian IP, but 1,600 km from Chandigarh, on a datacentre, logged out, with no personal history. It is not what a phone in Mohali sees.
- **US-WS**: the WebSearch tool, which is US-located. Weakest for local intent.
- Positions are from one sample on one day. Treat them as "was present", not as a stable rank.
- Unlinked counts and technical figures are first-hand measurements from this session's stored fetches.
- Google organic results could not be tested at all (see first section).

## Who ranks in organic results, local pack and directories for 20 to 30 realistic queries?

### Takeaway
No single brand owns the Tricity. In the usable samples Justdial is the most frequent domain, and Busy Bucket is the strongest real business in organic results. On Google Maps a different set leads: small tank-only listings such as Shree Balaji, Welco and Axico. Clean Tank Services appeared in no organic sample and no Maps list, including a Maps search on its own name. Only 18 of the roughly 31 intended queries returned valid data, and none of it is Google organic.

### Cited Findings

**What worked and what did not (method limits)**
- 30 queries were sent to Bing, DuckDuckGo and Brave from MUM-IP. Bing gave relevant results for only the first 2 queries, then returned off-topic pages (Wikipedia on "water", drikpanchang, mail.google.com), which looked like it was keeping only the first word of the query. This also happened in a real browser, so those rows were discarded. They are not rankings.
- DuckDuckGo gave 8 clean result sets, then an anomaly/rate-limit page, and it was still limited about 25 minutes later. Brave gave 4 clean sets, then a CAPTCHA. Neither was bypassed.
- Google Search returned HTTP 429 and a `/sorry` CAPTCHA from this IP. Not bypassed. So no Google organic, Google local pack or AI Overview data exists in these notes.
- Google Maps loaded in its public "limited view", so it is the local pack proxy here. The limited view shows star ratings but no review counts or review text.
- The shared Playwright browser was being navigated by another process, so all browser work used a separate headless browser.

**Clean organic top results (MUM-IP unless marked)**

| Query | Engine | Top results in order |
|---|---|---|
| water tank cleaning chandigarh | Bing | [busybucket.in](https://busybucket.in/water-tank-cleaning-in-chandigarh/), [safaiwale.in](https://safaiwale.in/water-tank-cleaning-services-in-chandigarh/), [watertankcleaning.co.in](https://watertankcleaning.co.in/water-tank-cleaning-chandigarh-tricity/), justdial, indiamart, [fixomes](https://www.fixomes.com/Water-Tank-Cleaning.php), [tricitydrycleaner](https://tricitydrycleaner.com/water-tank-cleaning-in-chandigarh/) |
| water tank cleaning chandigarh | DDG | safaiwale, busybucket, watertankcleaning.co.in, justdial, fixomes, indiamart, tricitydrycleaner |
| water tank cleaning chandigarh | Brave | [sulekha](https://www.sulekha.com/water-tank-cleaning-services/chandigarh), indiamart, fixomes, justdial, busybucket, tricitydrycleaner, justdial, favorz |
| water tank cleaning mohali | Bing | [justdial](https://www.justdial.com/Mohali/Water-Tank-Cleaning-Services/nct-10532933), [gracecleaning](https://gracecleaning.in/water-tank-cleaning/), [busybucket](https://busybucket.in/water-tank-cleaning-in-mohali/), [gugaaviation](https://gugaaviation.com/services/water-tank-cleaning/mohali/), [tricitycleaners](https://www.tricitycleaners.in/service/water-tank-cleaning/), sulekha, indiamart, elitewinds |
| water tank cleaning mohali | DDG | justdial ×2, [cleantoday](https://www.cleantoday.co.in/water-tank-cleaning-mohali), gracecleaning, gugaaviation, busybucket, sulekha, abhicarecleaners |
| water tank cleaning mohali | Brave | justdial, indiamart, sulekha, busybucket, justdial, aonecleaningservice, vblue, tricitycleaners |
| water tank cleaning panchkula | DDG | justdial, [cleantoday](https://www.cleantoday.co.in/water-tank-cleaning-panchkula), gugaaviation, busybucket, [kps.co.in](https://kps.co.in/water-tank-cleaning-amc/chandigarh/panchkula), sulekha, elitewinds |
| water tank cleaning panchkula | Brave | [busybucket](https://busybucket.in/water-tank-cleaning-in-panchkula/), sulekha, justdial, tricitydrycleaner, justdial, sulekha, aajjo |
| water tank cleaning zirakpur | DDG | justdial, [cleantoday](https://www.cleantoday.co.in/water-tank-cleaning-zirakpur), justdial, busybucket, gugaaviation, mrserviceexpert, indaneservices, indiamart |
| water tank cleaning zirakpur | Brave | [busybucket](https://busybucket.in/water-tank-cleaning-in-zirakpur/), sulekha, justdial, indiamart, tricitydrycleaner, sulekha, justdial, findfix |
| water tank cleaning mohali price | DDG | justdial, facebook fb-answers, aweblist, urbancompany near-me, amazon, olx, adsandclassifieds, clee.in |
| water tank cleaning charges chandigarh | DDG | justdial, safaiwale, indaneservices, tradersind, favorz, justdial, watertankcleaning.co.in, cleantoday |
| tank cleaning near me mohali | DDG | justdial ×2, [mrserviceexpert](https://www.mrserviceexpert.com/mohali/tank-cleaning), justdial, mohali.idbf.in, gracecleaning, sulekha, gugaaviation |
| tank cleaning services near me chandigarh | DDG | justdial ×2, mrserviceexpert, favorz, busybucket, watertankcleaning.co.in, safaiwale, gugaaviation |
| society water tank cleaning amc mohali | US-WS | indiamart (Delhi firm), indiawaterportal, KPS pages, ICMR scope-of-work PDF, Welco Google profile. KPS AMC pages for [Morinda, Panchkula, Zirakpur, Mani Majra, Kurali](https://kps.co.in/water-tank-cleaning-amc/chandigarh/zirakpur) lead. No Mohali-based AMC page surfaced |
| best water tank cleaning company in chandigarh tricity | US-WS | blogspot posts ([deephomecleaning](https://deephomecleaning.blogspot.com/2024/09/best-water-tank-cleaning-company-in.html), [aksharhousekeeping](https://aksharhousekeeping.blogspot.com/2024/07/ensure-safe-and-clean-water-with.html), [smartcleaningind](https://smartcleaningind.blogspot.com/2026/05/water-tank-cleaners-in-chandigarh.html)), [issuu/tankcleaning](https://issuu.com/tankcleaning), KPS pages, [threebestrated](https://threebestrated.in/cleaning-services-in-chandigarh-ch) |
| पानी की टंकी की सफाई चंडीगढ़ मोहाली | US-WS | News and how-to ([Aaj Tak](https://www.aajtak.in/lifestyle/news/story/how-to-clean-home-water-tank-easily-at-home-without-entering-inside-summer-cleaning-tips-tricks-and-hacks-tvisx-dskc-2570179-2026-06-12), [Prabhat Khabar](https://www.prabhatkhabar.com/life-and-style/how-to-clean-water-tank-easy-cleaning-tips), [Amar Ujala](https://www.amarujala.com/photo-gallery/utility/clean-the-garbage-accumulated-in-the-water-tank-in-this-easy-way-in-hindi-2025-04-15)). No Tricity service provider in Hindi |
| ਪਾਣੀ ਦੀ ਟੈਂਕੀ ਦੀ ਸਫਾਈ ਮੋਹਾਲੀ | US-WS | Nothing local and nothing in Punjabi: [spam guides](https://fina-music.com/page/2) and a Delhi firm's syndicated post |
| pani ki tanki saaf karne wale ka number | US-WS | IndiaMART company pages and thin listings from other cities (Muzaffarpur, Bengaluru). Nothing Tricity |

**Google Maps lists, proxy for local pack (MUM-IP, limited view, ten results max; ratings not for use on the site)**

| Query | Listed in order |
|---|---|
| [water tank cleaning chandigarh](https://www.google.com/maps/search/water+tank+cleaning+chandigarh) | Tricity Water Tank Cleaning (links to tricitydrycleaner.com), Reyaan Services, Welco Cleaning, Bijay Water Tank Cleaners, Shree Balaji Water Tank Cleaning, Ramesh kumar, "Water tank cleaning" (Phase 8B), Watan Cleaning, Ket, Axico |
| [water tank cleaning mohali](https://www.google.com/maps/search/water+tank+cleaning+mohali) | A-One Cleaning Service, Welco, Axico, Shree Balaji, Darshan Singh Care, Clean Today, "Water tank cleaning", Wazara, Pure Shine, Watan |
| [water tank cleaning panchkula](https://www.google.com/maps/search/water+tank+cleaning+panchkula) | MK Services, VK, Santosh, City Care, Solanki, Sk, Shiv, BEST CLEANERS, Pk, Busy Bucket |
| [water tank cleaning zirakpur](https://www.google.com/maps/search/water+tank+cleaning+zirakpur) | Expert deep cleaning, Shiv, Krishna, CleanDIN, Fixomes, CleanDin (second listing), two RO service listings, Master In Cleaning, Busy Bucket |
| [water tank cleaning kharar](https://www.google.com/maps/search/water+tank+cleaning+kharar) | Wazara, A-One, Shree Balaji, three unnamed "water tank cleaning" listings, Solar panel and water tank cleaning, Jai guru ji, Kharar Home Water Tank Cleaning |
| [water tank cleaning dera bassi](https://www.google.com/maps/search/water+tank+cleaning+dera+bassi) | Only 3 results: Shiv, CleanDin, "Water tank cleaning" |
| [tank cleaning near me mohali](https://www.google.com/maps/search/tank+cleaning+near+me+mohali) | Welco, Axico, Sai Tank Clean (a [Navi Mumbai firm](https://saiwatertankcleaning.vercel.app/), so IP bias is visible), Shree Balaji, A-One, Busy Bucket, Mr.Jet, Pure Shine, Watan, Wazara |
| [पानी की टंकी की सफाई चंडीगढ़](https://www.google.com/maps/search/%E0%A4%AA%E0%A4%BE%E0%A4%A8%E0%A5%80%20%E0%A4%95%E0%A5%80%20%E0%A4%9F%E0%A4%82%E0%A4%95%E0%A5%80%20%E0%A4%95%E0%A5%80%20%E0%A4%B8%E0%A4%AB%E0%A4%BE%E0%A4%88%20%E0%A4%9A%E0%A4%82%E0%A4%A1%E0%A5%80%E0%A4%97%E0%A4%A2%E0%A4%BC) | Tricity Water Tank Cleaning, Bijay, Welco, Reyaan, Shree Balaji, "Water tank cleaning", Ket, Axico, Watan, Ramesh kumar: nearly the same as the English list |
| ਪਾਣੀ ਦੀ ਟੈਂਕੀ ਦੀ ਸਫਾਈ ਮੋਹਾਲੀ | Jumped straight to one place: Shree Balaji Water Tank Cleaning |
| [society water tank cleaning amc mohali](https://www.google.com/maps/search/society+water+tank+cleaning+amc+mohali) | Axico, "Water tank cleaning", Welco, Shree Balaji, Weston, Tricity Water Tank Cleaning, Busy Bucket, Tricity Cleaners, Grace Cleaning |
| [Clean Tank Services Gobind Galaxy](https://www.google.com/maps/search/Clean+Tank+Services+Gobind+Galaxy) (brand check) | No Clean Tank listing. Results were all other firms and centred on the Mumbai area. Repeat from a Tricity phone |

**Queries with no valid data**: underground water tank cleaning chandigarh, overhead tank cleaning mohali, mechanized water tank cleaning chandigarh, water tank cleaning amc chandigarh, sump cleaning chandigarh, hospital water tank cleaning chandigarh, commercial water tank cleaning punjab, water tank cleaning new chandigarh, tanki cleaning mohali, tanki saaf karne wale mohali, पानी की टंकी साफ करने वाले चंडीगढ़, पानी की टंकी सफाई मोहाली, टंकी सफाई का रेट.

- **cleantankservices.com** appeared in 0 of the clean organic samples (checked by searching all stored results for "cleantank").

### Inferences
- Maps and organic reward different things. Maps leaders are mostly tank-only names with no website, while organic leaders are multi-service cleaners with city pages. A launch plan needs both a Google Business Profile and city pages.
- Tank-related Maps names often match the search phrase exactly ("Water tank cleaning", "Axico Cleaning Services Water Tank Cleaning in Mohali"). Google's guidelines on keyword stuffing in names should be checked before copying this. Clean Tank's real name already contains "Tank".
- Hindi queries appear to reach the same Maps businesses, so a single profile can catch Hindi searches. Hindi organic is held by national news how-to articles, not by service firms.

### Gaps
- Google organic, local pack, AI Overviews and People Also Ask were not tested. Someone in Mohali should run the priority queries on a phone (or a paid SERP API with Chandigarh geolocation) before final keyword decisions.
- No search volume data was gathered. Nothing here shows which queries are actually searched most.
- The 13 queries listed above have no valid data.
- Maps viewport varied by query (some at whole-India zoom), which may have changed ordering.

## Which domains dominate: directories or real businesses?

### Takeaway
Directories and real businesses split the first page roughly evenly, and directories lead on "price", "charges" and "near me" wording. Justdial is by far the most frequent domain. Urban Company's own tank pages were not seen ranking in these samples, though it sells the service. IndiaMART and Sulekha are secondary.

### Cited Findings
- Across the 14 clean organic result sets (top 10 of each, 140 results, MUM-IP): directories and listing sites 71, real business sites 62, social 4, other 3. In the top 3 positions: directories 23, businesses 18, social 1. Counted from stored results, classification by hand.
- Domain frequency in those sets: justdial.com 28; busybucket.in 11; sulekha.com 11; dir.indiamart.com 8; gugaaviation.com 7; tricitydrycleaner.com 6; watertankcleaning.co.in 5; safaiwale.in, cleantoday.co.in, mrserviceexpert.com 4 each; fixomes.com, favorz.co.in, gracecleaning.in, elitewinds.com 3 each.
- Justdial has dedicated pages for [Chandigarh](https://www.justdial.com/Chandigarh/Water-Tank-Cleaning-Services/nct-10532933), [Mohali](https://www.justdial.com/Mohali/Water-Tank-Cleaning-Services/nct-10532933), [Zirakpur](https://www.justdial.com/Zirakpur/Water-Tank-Cleaning-Services/nct-10532933) and [Panchkula](https://www.justdial.com/Panchkula/Water-Tank-Cleaning-Services/nct-10532933), plus niche pages such as PVC tank, manual cleaning and sector-level pages, seen as result URLs (the pages themselves returned 403).
- Sulekha's [Mohali page](https://www.sulekha.com/water-tank-cleaning-services/mohali) lists Aqua Water Tank Cleaning Solutions (Kharar), Helpindoor, Epic Vila and MKN Constructions, and its first step asks tank capacity.
- [IndiaMART's Chandigarh directory page](https://dir.indiamart.com/chandigarh/water-tank-cleaning-services.html) puts Hindi words in its description: वाटर टैंक की सफाई सर्विस प्रोवाइडर, चंडीगढ़. It was one of the few Hindi strings seen on a ranking result.
- Urban Company has no dedicated tank page in the samples. The only URLs seen were [chandigarh-plumbers](https://www.urbancompany.com/chandigarh-plumbers) and near-me/plumbers. On that page, fetched from MUM-IP, tank cleaning is sold under plumbing: overhead open-placed from ₹949 (4.71, 16K reviews), loft-placed from ₹1,249 (4.63, 2K), underground from ₹1,699 (4.59, 1K). A US-WS snippet of the same page showed ₹799 and ₹1,099, and another showed ₹1,199 for underground, so prices are unstable or vary by city or date.
- Low-quality syndication shows up too: [postfreeonline](https://www.postfreeonline.com/services/other-services/professional-water-tank-cleaners-in-chandigarh-tricity_) and [adsandclassifieds](https://adsandclassifieds.com/ads/affordable-water-tank-cleaning-services-in-chandigarh-choose-true-shine-6088) for "True Shine", on the first page in the Bing and DDG Chandigarh rows.

### Inferences
- A Justdial, Sulekha and IndiaMART presence is likely to be cheap reach during the months a new site needs to earn rankings. Check the owner's rules first: a directory listing that shows ratings is not "on the site", but the team should decide.
- Since a real business holds positions 1 to 3 for the plain Chandigarh query, the head term is winnable with one strong page per city. "Price" terms are weakly served because almost no ranking page answers them.

### Gaps
- Directory shares come from Bing, DDG and Brave. Google may weigh directories differently.
- Justdial rankings of individual firms inside its lists could not be read.

## What do the top competitor websites look like, and what do they claim?

### Takeaway
Most competitor pages are WordPress-style city templates in English with thin, generic copy, stock or minimal photos and unsupported "100%" claims. None of the 11 tested pages has any Hindi or Punjabi. Three publish consumer prices. Fixomes has a useful re-clean promise, and Guga Aviation has the most complete local page. Clean Tank's live site has real ISO and client evidence but no city pages, no published prices and no Tricity mentions.

### Cited Findings

**Technical comparison** (HTML fetched directly from MUM-IP; response time is one sample; the keyless PageSpeed API returned a quota error, so no Lighthouse scores)

| Site (page tested) | Platform | Schema types | Words | First byte | City and tank URLs in sitemap | Contact on page | Price shown |
|---|---|---|---|---|---|---|---|
| [cleantankservices.com](https://www.cleantankservices.com/) | Vercel, Next.js | LocalBusiness, WebSite, WebPage | 912 | 0.03s (CDN hit) | 9 URLs total, no city pages | WhatsApp, tel, form | None |
| [Busy Bucket](https://busybucket.in/water-tank-cleaning-in-chandigarh/) | WordPress, Divi | WebPage, Breadcrumb, Organization, FAQPage | 1,248 | 0.05s | 870 URLs, 107 tank-related; Chandigarh 7, Mohali 7, Panchkula 3, Dera Bassi 2, Zirakpur 1 | Forms only in HTML | None |
| [Safaiwale](https://safaiwale.in/water-tank-cleaning-services-in-chandigarh/) | WordPress 7.1 | WebPage, Breadcrumb, Organization | 725, no H1 | 3.24s | 612 URLs, mostly blog tags | WhatsApp, tel, form | None |
| [Smart Cleaning](https://watertankcleaning.co.in/water-tank-cleaning-chandigarh-tricity/) | WordPress 6.9 | WebPage, Breadcrumb, FAQPage | 1,174 | 0.58s | 129 URLs, national; 1 Tricity page | WhatsApp, tel, form | None |
| [Grace Cleaning](https://gracecleaning.in/water-tank-cleaning/) | WordPress 6.9 | Breadcrumb only | 922 | 0.60s | 15 URLs total, 1 tank page | Forms | From ₹499 |
| [Clean Today](https://www.cleantoday.co.in/water-tank-cleaning-mohali) | Custom | LocalBusiness | 672 | 1.89s | 49 URLs; Chandigarh, Mohali, Panchkula, Zirakpur, Kharar, New Chandigarh | WhatsApp, tel | None |
| [Guga Aviation](https://gugaaviation.com/services/water-tank-cleaning/mohali/) | Custom | Organization, LocalBusiness, Service, FAQPage | 3,166 | 0.17s | No sitemap; 116 internal links with sector-level links | tel | Full table |
| [KPS](https://kps.co.in/water-tank-cleaning-amc/chandigarh/panchkula) | Custom | Service, Product | 1,956 | 0.26s | No sitemap; 117 internal links | WhatsApp, tel, form | AMC ranges |
| [Tricity Cleaners](https://www.tricitycleaners.in/service/water-tank-cleaning/) | WordPress 6.4 | WebPage, Organization, Product, LocalBusiness | 1,024 | 0.02s | 86 URLs, 2 tank pages | tel, forms | None |
| [Fixomes](https://www.fixomes.com/Water-Tank-Cleaning.php) | PHP | HomeAndConstructionBusiness | 1,143 | 0.27s | 55 URLs, 1 tank page | tel | From ₹499 / ₹699 |
| [Karan Sofa Drycleaner](https://tricitydrycleaner.com/water-tank-cleaning-in-chandigarh/) | WordPress, Elementor | Article, LocalBusiness, Person and others | 990 | 1.48s | 79 URLs, 12 tank pages including Dhanas and plastic tank | tel | None |
| [Elite Winds](https://elitewinds.com/water-tank-cleaning-service-in-mohali/) | WordPress | DryCleaningOrLaundry, Article, BlogPosting | 1,459 | 3.03s | 88 URLs, 11 tank pages, several near-duplicates for Mohali | WhatsApp, tel, form | None |

**Languages**
- 0 Devanagari and 0 Gurmukhi characters in the HTML of all 11 tested pages, including cleantankservices.com. No `hreflang` tags on any tested page. Counted directly from fetched HTML; only one page per site was tested, but no language links were found in that page.

**Claims made (quoted from the pages)**
- Guga Aviation: "[WHO-approved](https://gugaaviation.com/services/water-tank-cleaning/mohali/) process eliminates 99.99% of bacteria", "WHO-approved food-grade disinfectants", "150+ bar", "80% of diseases are waterborne", "500+ happy clients", "4.9/5", cleaning certificate issued, 20% off first service, 8-step process. It also lists Mohali phases and sectors by name. It is a general home services and manpower firm despite the aviation name.
- Busy Bucket: "[100% bacteria-free](https://busybucket.in/water-tank-cleaning-in-chandigarh/)", "never use any harmful chemical" and machine-spun English ("awfully reasonable value"). It has a Meta pixel.
- Safaiwale: "[100% professional](https://safaiwale.in/water-tank-cleaning-services-in-chandigarh/)", "100% satisfaction guaranteed", "1000+ professionals". Its Google ad copy says "[100+ Highly Trained Professional Cleaners](https://adstransparency.google.com/?region=IN&domain=safaiwale.in)", which conflicts. Its ads show a New Delhi address.
- Smart Cleaning: "[No Human Entry Required](https://watertankcleaning.co.in/water-tank-cleaning-chandigarh-tricity/)", "100% Mechanized & Safe", "Same-Day Service", 5 steps including UV. No office address, Tricity photos, clients or testimonials are shown. The page says residential tanks need cleaning every 3 to 6 months while its FAQ says 6. Its HTML also holds a hidden 1px link with the text "deneme bonusu", which looks like injected spam.
- KPS: "[386+ customers with an average rating of 4.4](https://kps.co.in/water-tank-cleaning-amc/chandigarh/zirakpur)" in Zirakpur on one fetch and 233+ customers on a second fetch the same day, so the number is not stable. Also "15987+ Happy Customers"; several counters show "0+". Three of the four testimonials on the page are about ETP or STP work, not tanks, though all are labelled for the AMC. MSME and ISO logos have no certificate number, and no office address is listed.
- Fixomes: "[100% Satisfaction Guarantee](https://www.fixomes.com/Water-Tank-Cleaning.php). Not happy? We'll return and re-clean, free of charge", "same-day service", food-grade eco-friendly disinfectants, every 6 months.
- Clean Today: "[UV & Anti-Bacterial Treatment](https://www.cleantoday.co.in/water-tank-cleaning-mohali)", "Food-Grade Disinfection", vacuum sludge extraction; "[On-Time Service](https://www.cleantoday.co.in/)", "Affordable & Transparent Pricing". Its domain was [registered 2026-08-18](https://rdap.org/domain/cleantoday.co.in), yet it already ranks on DDG, in Mohali Maps results and has six Tricity tank pages.
- Grace Cleaning: "[100% satisfaction guarantee](https://gracecleaning.in/water-tank-cleaning/)", "Certified Tank Cleaning Experts", from ₹499.
- Mr Service Expert: "[With over 15 years of experience](https://www.mrserviceexpert.com/mohali/tank-cleaning)", copy says "authorized provider" and "all brands", a template built for appliance repair.

**Prices published**

| Who | Price | Source |
|---|---|---|
| Guga Aviation | 500 L ₹999; 1,000 L ₹1,499; 2,000 L ₹1,999; 5,000 L ₹2,999; 10,000 L ₹4,999; underground ₹2,499+ | [Mohali page](https://gugaaviation.com/services/water-tank-cleaning/mohali/) |
| Grace Cleaning | From ₹499 | [Page](https://gracecleaning.in/water-tank-cleaning/) |
| Fixomes | Overhead from ₹499, underground from ₹699 | [Page](https://www.fixomes.com/Water-Tank-Cleaning.php) |
| Urban Company | Overhead ₹949, loft ₹1,249, underground ₹1,699 (see conflict above) | [Page](https://www.urbancompany.com/chandigarh-plumbers) |
| "Water Tank Cleaning Service" Meta ad | From ₹399, 500 to 2,000 L | [Meta Ad Library, ID 1407923478165926](https://www.facebook.com/ads/library/?id=1407923478165926) |
| KPS AMC, indicative per year | Individual building ₹6,000 to 15,000; housing society ₹15,000 to 50,000; commercial ₹30,000 to 1,00,000; quarterly, half-yearly or custom | [Page](https://kps.co.in/water-tank-cleaning-amc/chandigarh/zirakpur) |
| Servicesutra, national average | ₹800 to 1,200 typical, no city named | [Cost page](https://www.servicesutra.com/cost/water-tank-cleaning) |

None of these says clearly whether GST is included. Clean Tank's owner list, for comparison, is ₹600 to 500 L, ₹800 to 1,000 L, ₹1,000 to 2,000 L, ₹1,400 to 5,000 L, ₹2,000 to 10,000 L, before 18% GST (`docs/ref/INFO-BANK.md`, Home prices).

**Photos and trust**
- Stock or generic imagery is the norm: Smart Cleaning has 3 images and one generic graphic; Guga has only its logo in the HTML; Fixomes and Clean Today use a handful of service images. Grace Cleaning has a "Take a Look at Our Results" gallery. No tested page named Tricity clients. [A-One](https://aonecleaningservices.in/) refers in general terms to government institutions and hospitality properties.
- Live [cleantankservices.com](https://www.cleantankservices.com/): title "Water Tank Cleaning Services India | Clean Tank", "ISO 9001:2015 certified water storage tank cleaning across 7 Indian states", since 2008, with ISO certificate number on the page. The words Mohali, Chandigarh and Tricity appear 0 times in the homepage HTML, and ₹ appears 0 times. The testimonial block still shows placeholder text ("Customer testimonial coming soon"). Images come from images.pexels.com. Robots.txt [allows GPTBot, ClaudeBot, PerplexityBot and Google-Extended](https://www.cleantankservices.com/robots.txt).
- An earlier archived version (17 Sep 2026) said "[India's Most Trusted Water Tank Cleaning Service](https://web.archive.org/web/20260917022831/https://cleantankservices.com/)", "5000+ projects" and "100% satisfaction". Those phrases are gone from the live homepage.

**Good Life Future**
- [goodlifefuture.in](https://goodlifefuture.in/), the most active Meta advertiser, returned HTTP 500 at the time of checking, with a [sitemap index](https://goodlifefuture.in/sitemap.xml) of about 24,000 URLs and none containing "tank". Its ads point to WhatsApp, so it does not rely on the site.

### Inferences
- Competitors share one script: dirt, algae and bacteria fear, then a stage process, UV, "100%". Clean Tank's documents and named clients are a genuinely different proof. A claim such as a certificate number can be checked; most competitor claims can't.
- A site that names sectors and phases, as Guga does, is the local SEO bar. Clean Today shows a site just weeks old can appear for town queries, so waiting for domain age isn't necessary.
- Clean Tank's list price looks lower than Guga's at every listed size even after 18% GST (for example ₹944 against ₹1,499 at 1,000 L), and near or below Urban Company's overhead price. This assumes the competitor price is for a comparable service. Publishing it would stand out because most sites hide price. It needs no comparison language, which would risk the no-attacks rule.
- Avoid copying: 99.99%, 100% bacteria-free, WHO-approved, "guaranteed" and rating badges are all outside Clean Tank's claims rules.

### Gaps
- No Lighthouse or Core Web Vitals data. First-byte figures are one Mumbai sample and include CDN hits.
- Sites of Bijay, Watan and AbhiCare did not respond to fetch ([bijaytankclean.com](https://bijaytankclean.com/), [vatancleaningservices.in](https://www.vatancleaningservices.in/), [abhicarecleaners.com](https://abhicarecleaners.com/)).
- Whether images are the firm's own or stock was judged from filenames and alt text, not reverse image search.
- Competitor claims were not verified; they are reported as claims only.

## What backlink or authority signals are available for free?

### Takeaway
Real backlink numbers could not be obtained. Domain age is the only usable proxy. Clean Tank has an important surprise: the registry shows cleantankservices.com as newly created on 2026-09-16, which suggests the earlier registration lapsed, so past authority may be gone.

### Cited Findings
| Domain | Registered (RDAP) | First Wayback capture |
|---|---|---|
| [cleantankservices.com](https://rdap.verisign.com/com/v1/domain/cleantankservices.com) | **2026-09-16**, expires 2027-09-16, GoDaddy | [2018-08](https://web.archive.org/web/2018*/cleantankservices.com) |
| [kps.co.in](https://rdap.org/domain/kps.co.in) | 2012-12-12 | 2009-02 |
| [safaiwale.in](https://rdap.org/domain/safaiwale.in) | 2017-08-22 | 2017-09 |
| [mrserviceexpert.com](https://rdap.org/domain/mrserviceexpert.com) | 2018-12-08 | 2019-01 |
| [watertankcleaning.co.in](https://rdap.org/domain/watertankcleaning.co.in) | 2018-11-18 | 2017-09 |
| [busybucket.in](https://rdap.org/domain/busybucket.in) | 2020-07-08 | 2021-11 |
| [fixomes.com](https://rdap.org/domain/fixomes.com) | 2021-03-22 | 2021-12 |
| [elitewinds.com](https://rdap.org/domain/elitewinds.com) | 2021-06-24 | 2021-12 |
| [tricitycleaners.in](https://rdap.org/domain/tricitycleaners.in) | 2023-02-16 | 2023-02 |
| [tricitydrycleaner.com](https://rdap.org/domain/tricitydrycleaner.com) | 2024-04-07 | 2013-02 |
| [gugaaviation.com](https://rdap.org/domain/gugaaviation.com) | 2024-11-07 | 2025-07 |
| [gracecleaning.in](https://rdap.org/domain/gracecleaning.in) | 2024-11-02 | 2025-01 |
| [goodlifefuture.in](https://rdap.org/domain/goodlifefuture.in) | 2026-02-19 | none |
| [abhicarecleaners.com](https://rdap.org/domain/abhicarecleaners.com) | 2026-08-11 | none |
| [cleantoday.co.in](https://rdap.org/domain/cleantoday.co.in) | 2026-08-18 | none |

- Wayback shows cleantankservices.com served a "[Clean Tank | Home](https://web.archive.org/web/20241226115335/https://cleantankservices.com/)" site up to at least December 2024, then no HTTP 200 capture until September 2026.
- Low-value link building shows in US-WS results: Busy Bucket on [Academia](https://independent.academia.edu/httpsbusybucketin), Smart Cleaning on [Blogspot](https://smartcleaningind.blogspot.com/2026/05/water-tank-cleaners-in-chandigarh.html), a Zirakpur firm on [Issuu](https://issuu.com/tankcleaning), True Shine on free classifieds.
- [ThreeBestRated](https://threebestrated.in/cleaning-services-in-chandigarh-ch) lists Busy Bucket with an ISO 9001:2015 mention.

### Inferences
- Registration in September 2026 with earlier archive captures normally means the name dropped and was registered again, because a transfer keeps the original creation date. If backlinks existed, search engines may treat the site as new. The owner should confirm the 2026 registration is theirs and that nothing was lost. Old inbound links can be checked in a free Google Search Console account.
- Age is not decisive in this market: domains from 2024 to 2026 (Guga, Grace, Clean Today) already appear on page one.

### Gaps
- The [Ahrefs authority checker](https://ahrefs.com/website-authority-checker) page loaded but no result was obtained. Open PageRank needs an API key, which means an account, so it was not used. No DR, DA, referring-domain or traffic figures exist in these notes.
- Google Search Console for cleantankservices.com would answer the old-links question; it needs owner access.

## Are competitors running ads on Google or Meta?

### Takeaway
Yes on both. Good Life Future is the most active Tricity tank advertiser on Meta, using Hinglish WhatsApp ads. "Water Tank Cleaning Service" pushes ₹399. On Google, Busy Bucket, Safaiwale, Smart Cleaning, Tricity Cleaners and Fixomes ran ads as recently as 30 or 31 October. Most Tricity Meta ads run from September or October, so paid demand is current.

### Cited Findings

**Meta Ad Library** (keyword search, India, active ads, viewed logged out from MUM-IP, page shown in Marathi). About 50 unique ads across 10 keyword searches; ones naming the Tricity:

| Advertiser | Started | Language | Offer and message | Library ID |
|---|---|---|---|---|
| Good life future | 6 Apr 2026 | Hindi and English | "Attention Chandigarh, Zirakpur & Panchkula!" RO doesn't clean your tank. "Govt. Registered & GST Compliant: We are a trusted brand, not local laborers." 7-stage, no tank entry, "100% Disinfect", GST invoice ("पक्का बिल"), flat 20% off first booking. CTA WhatsApp | [26586607767617468](https://www.facebook.com/ads/library/?id=26586607767617468) |
| GLF Water tank cleaning | 9 Oct 2026 | Hinglish | "Tri-City ki sabse trusted Govt. Registered" company, 6-step process, UV, "100% Govt. Certified aur Chemical-Free". Flats, villas, commercial. Chandigarh, Mohali, Panchkula, Zirakpur, Kharar. CTA WhatsApp | [1139021821781403](https://www.facebook.com/ads/library/?id=1139021821781403) |
| GLF Water tank cleaning | 24 Oct 2026 | Hinglish | House, tank, sofa, office cleaning. "pakki safai ki guarantee" | [3553837858130094](https://www.facebook.com/ads/library/?id=3553837858130094) |
| Water Tank Cleaning Service | 20 Oct 2026 | Hindi | "टंकी की सफाई, परिवार की भलाई!" Pressure wash, 500 to 2,000 L, from ₹399. Five Tricity towns. Call and WhatsApp | [1407923478165926](https://www.facebook.com/ads/library/?id=1407923478165926) |
| AR Water Tank Cleaners | 23 Sep 2026 | Hindi and English | Word-for-word the Good Life Future ad, adding Delhi NCR, Prayagraj, Rohtak, Sonipat, Lucknow. 20% off for more than one tank | [3239467402916495](https://www.facebook.com/ads/library/?id=3239467402916495) |

- Elsewhere in India the same format appears: Hindi hook "आपकी पानी की टंकी आखिरी बार कब साफ हुई थी?" ([Cleaning Hero](https://www.facebook.com/ads/library/?id=1154098083852221), [Homexa](https://www.facebook.com/ads/library/?id=1396294906015501)), and fixed pricing such as [₹599 for 1,000 L in Karnal](https://www.facebook.com/ads/library/?id=1636765148038879) and [₹599 in Patna](https://www.facebook.com/ads/library/?id=1124084103505751).
- Good Life Future also targets [Ambala](https://www.facebook.com/ads/library/?id=2081821882757501).
- Tank makers run "self-cleaning tank" ads ([Plasto](https://www.facebook.com/ads/library/?id=1634411921651038), Tiara, Selzer), which compete for the same concern.

**Google Ads Transparency Center** (region India, by domain, logged out)

| Domain | Ads listed | Last shown | Notes |
|---|---|---|---|
| [fixomes.com](https://adstransparency.google.com/?region=IN&domain=fixomes.com) | 24 | 31 Oct 2026 | Verified advertiser, text format |
| [safaiwale.in](https://adstransparency.google.com/?region=IN&domain=safaiwale.in) | 28 | 30 Oct 2026 | Copy "Affordable & Sameday Service"; address New Delhi; several variants target Noida |
| [watertankcleaning.co.in](https://adstransparency.google.com/?region=IN&domain=watertankcleaning.co.in) | 15 | 30 Oct 2026 | Text format |
| [tricitycleaners.in](https://adstransparency.google.com/?region=IN&domain=tricitycleaners.in) | 11 | 30 Oct 2026 | Sofa and house cleaning copy seen; Mohali location extension |
| [busybucket.in](https://adstransparency.google.com/?region=IN&domain=busybucket.in) | 5 | 30 Oct 2026 | Text format |
| gracecleaning.in, cleantoday.co.in, gugaaviation.com, tricitydrycleaner.com, abhicarecleaners.com, goodlifefuture.in, elitewinds.com, [cleantankservices.com](https://adstransparency.google.com/?region=IN&domain=cleantankservices.com) | 0 | n/a | None listed for the domain |

### Inferences
- Meta is where Hindi and Hinglish tank messaging lives, while organic pages stay in English. That may mean Hindi messaging works well enough for firms to keep paying, but spend and results are not public.
- "Local labourers" is the Good Life line. Clean Tank must avoid it, because `docs/PRODUCT.md` says never to criticise the plumber or labourer.
- Being a GST-registered firm with a proper bill is already an advertised benefit in this market, so it is a fair, checkable message for Clean Tank too.

### Gaps
- Ads were found by keyword and domain. Advertisers with other destinations (for example WhatsApp only) don't appear in a domain search, so Google ad coverage is likely incomplete.
- Google ad targeting by city and the search terms bought are not public. Text of several Google ads did not render.
- Ad Library shows no spend or reach for commercial ads in India.
- Meta keyword match is loose, so some Tricity ads may have been missed.

## What do public search-integrated AI assistants cite for these questions?

### Takeaway
Almost nothing could be tested. Perplexity, ChatGPT and Phind blocked the automated browser, You.com required sign-in, Bing's Copilot Search returned no answer, and Google AI Overviews were unreachable. The only working evidence is the WebSearch assistant used for this research, a US-based proxy, which leaned on KPS location pages, blog posts and Google profile pages, and found no independent ranking.

### Cited Findings
- [Perplexity](https://www.perplexity.ai/search?q=best+water+tank+cleaning+service+in+chandigarh+mohali): Cloudflare 403 security check. Not bypassed.
- [ChatGPT](https://chatgpt.com/?q=best+water+tank+cleaning+service+in+chandigarh+mohali) and [Phind](https://www.phind.com/search?q=best+water+tank+cleaning+service+in+chandigarh+mohali): 403 security check.
- [You.com](https://you.com/search?q=best+water+tank+cleaning+service+in+chandigarh+mohali): redirected to sign-in; no account created.
- [Bing Copilot Search](https://www.bing.com/copilotsearch?q=best+water+tank+cleaning+service+in+chandigarh+mohali): "There are no results for this question". Bing was already in a degraded state for this IP, so this doesn't prove anything about real users.
- The WebSearch assistant (US-located, Claude-based) was asked "best water tank cleaning company in Chandigarh Tricity". It named Busy Bucket (via [ThreeBestRated](https://threebestrated.in/cleaning-services-in-chandigarh-ch)), [KPS](https://kps.co.in/single-tank-cleaning/chandigarh) ("most location-specific pages"), [Smart Cleaning](https://smartcleaningind.blogspot.com/2026/05/water-tank-cleaners-in-chandigarh.html) and [Akshar Housekeeping](https://aksharhousekeeping.blogspot.com/2024/07/ensure-safe-and-clean-water-with.html), and said it found no independent ranking.
- Asked about complaints, the same assistant cited the [Welco Google profile](https://business.google.com/v/welco-tank-cleaning-services/05022997511415029701/7d5e/_/rev), Urban Company and KPS. For society AMC it took KPS's indicative price ranges as a benchmark, showing that a published number gets repeated.
- Google's public `business.google.com/v/` profile pages are fetchable and contain review text, so AI tools can read them. [Welco's profile](https://business.google.com/v/welco-tank-cleaning-services/05022997511415029701/7d5e/_) showed 1,415 reviews live and 943 in a search snapshot.
- Robots.txt: [Safaiwale](https://safaiwale.in/robots.txt) disallows GPTBot, ClaudeBot, CCBot and Google-Extended. [Elite Winds](https://elitewinds.com/robots.txt) and [Clean Tank](https://www.cleantankservices.com/robots.txt) allow AI crawlers.
- Clean Tank was not named in any assistant answer collected.

### Inferences
- From this small sample, assistants favour pages with explicit facts: city names, price ranges, FAQs. Blog posts can be enough where there is no better source. A Tricity page with published prices and frequency answers should be an easy source for them, and `docs/AEO-GEO.md` already covers the checklist.
- A complete Google Business Profile with genuine reviews seems to matter for AI tools as well as Maps, since the profile text was quoted.

### Gaps
- No answers were read from Perplexity, ChatGPT, Gemini, Google AI Overviews, Copilot or Meta AI. Someone should run about 10 questions by hand on a normal logged-in device in the Tricity and record the citations.
- Whether the assistant answers would differ for an Indian user is unknown.

## What gaps exist in questions, languages, towns and tank types, and what do reviews reveal about customer pain?

### Takeaway
The clearest gaps are Hindi and Punjabi service pages (none found), real price answers in local languages, housing-society AMC pages for Mohali, and towns beyond the big four. Review evidence is thin because Justdial and Google review text were blocked. What is visible shows customers praise punctuality, polite staff and seeing the tank washed inside. No-shows, overcharging and chemical complaints could not be confirmed.

### Cited Findings

**Languages**
- No Hindi or Punjabi on any of the 11 tested pages (see competitor section). Hindi-language competition is in [Meta ads](https://www.facebook.com/ads/library/?id=1407923478165926) and national how-to news ([Aaj Tak](https://www.aajtak.in/lifestyle/news/story/how-to-clean-home-water-tank-easily-at-home-without-entering-inside-summer-cleaning-tips-tricks-and-hacks-tvisx-dskc-2570179-2026-06-12)). The Punjabi query returned [no local result at all](https://fina-music.com/page/2) (US-WS).

**Towns**
- Tank pages exist for Chandigarh, Mohali, Panchkula and Zirakpur across several firms. Only Clean Today covers [Kharar](https://www.cleantoday.co.in/water-tank-cleaning-kharar) and [New Chandigarh](https://www.cleantoday.co.in/water-tank-cleaning-new-chandigarh) among tested sites, and Busy Bucket has Dera Bassi URLs.
- Dera Bassi returned [only 3 Maps listings](https://www.google.com/maps/search/water+tank+cleaning+dera+bassi). Shiv's address is in Zirakpur, and the other two were not confirmed as local.
- KPS lists Kurali, Morinda, Pinjore, Kalka, Mani Majra (e.g. [Pinjore](https://kps.co.in/water-tank-cleaning-amc/chandigarh/pinjore)) as templates, with no local office. Karan has one Dhanas page.
- Landran, Banur, Lalru and Baddi: no dedicated tank page found, though only sitemaps of the tested sites were checked. Lalru, Banur and Baddi were not specifically queried.

**Tank and customer types**
- Society AMC: the [query](https://kps.co.in/water-tank-cleaning-amc/chandigarh/zirakpur) was answered by KPS templates, with none for Mohali in samples.
- Sector-level pages: Guga lists [Mohali phases and sectors](https://gugaaviation.com/services/water-tank-cleaning/mohali/), Justdial has sector pages, others don't.
- Commercial and hospital: Busy Bucket has [commercial URLs](https://busybucket.in/commercial-water-tank-cleaning-in-chandigarh/). No hospital-specific Tricity page was found in the sites tested. Bing data for this query was invalid.
- Karan has a [plastic tank page](https://tricitydrycleaner.com/plastic-water-tank-cleaning-in-mohali/). RCC, PVC and steel appear mainly as lines in lists or Justdial categories.

**Questions poorly answered**
- Price in plain terms is weak: the "mohali price" DDG row was [Justdial, Facebook, Amazon and OLX](https://www.justdial.com/Mohali/Water-Tank-Cleaning-Services-for-Manual-Cleaning-in-Mohali-Sector-91/nct-10532), and few pages say what's included or whether GST applies.
- Frequency advice varies: Smart Cleaning gives [3 to 6 months on one page and 6 in its FAQ](https://watertankcleaning.co.in/water-tank-cleaning-chandigarh-tricity/). Fixomes and Clean Today say [every 6 months](https://www.fixomes.com/Water-Tank-Cleaning.php).
- Rarely answered: how long water is off, whether the team enters the tank, what happens to the sludge, who cleans the society's shared tank, what paperwork a society or PG owner keeps.
- Local legal trigger: during the 2024 cholera outbreak, Mohali's District Magistrate cited "[laxity in cleaning storage tanks](https://www.tribuneindia.com/news/chandigarh/amid-cholera-outbreak-in-mohalis-kumbhra-fir-registered-against-2-pg-owners-for-violating-orders-643871)" and ordered regular cleaning of tanks of homes, shops, hotels and PGs, with FIRs against two PG owners (Tribune, 27 Jul 2024). No competitor page tested mentions this.
- Older local concerns: [contaminated supply complaints in Maloya](https://www.tribuneindia.com/news/chandigarh/mc-commissioner-gets-notice-over-dirty-water-supply-to-maloya) and [open tanks at a Sector 16 hospital](https://www.tribuneindia.com/2012/20120628/cth1.htm) (2012).

**Review themes (very limited public sample)**
- [Welco's public Google profile](https://business.google.com/v/welco-tank-cleaning-services/05022997511415029701/7d5e/_/rev), 10 reviews, all positive: "punctual", "very well-behaved", "polite and hardworking", "reasonable price", "entire tank was properly washed and cleaned from inside".
- Good Life Future sells on "[पक्का बिल](https://www.facebook.com/ads/library/?id=26586607767617468)", and Clean Today on "[On-Time Service](https://www.cleantoday.co.in/)" and transparent pricing. Fixomes offers a [free re-clean](https://www.fixomes.com/Water-Tank-Cleaning.php).
- Urban Company's service ratings: [overhead 4.71, underground 4.59](https://www.urbancompany.com/chandigarh-plumbers). The review text was not read.
- A search for complaints about overcharging or no-shows in the Tricity [returned none](https://business.google.com/v/welco-tank-cleaning-services/05022997511415029701/7d5e/_/rev).

### Inferences
- Positive reviews mention what the customer fears the opposite of, so punctuality, staff behaviour, a thorough inside wash and a fair price are likely the real concerns. This is an inference, not confirmed complaint data.
- Positioning space that is open and fits the claims rules:
  1. Hindi and Punjabi service pages with `hreflang`, which nobody has.
  2. Published home prices, with GST stated clearly.
  3. Paperwork proof: ISO certificate number, a GST bill and client work certificates, in a market of unsupported badges.
  4. A Mohali-focused society AMC page answering what residents' associations ask.
  5. A plain guide for PG, hotel and shop owners on tank cleaning. The 2024 order should be quoted accurately and without fear tactics, and its current status checked first.
- Keyword starting set, subject to volume data: `water tank cleaning [town]`, `water tank cleaning [town] price`, `society water tank cleaning amc mohali`, plus Hinglish and Hindi equivalents such as `पानी की टंकी की सफाई का रेट`.
- Before launch the fast wins would be a real Google Business Profile, real photos replacing Pexels images, real testimonials replacing the "coming soon" block (subject to the rule on ratings), and the Tricity office shown if one exists. `docs/ref/INFO-BANK.md` lists the approved addresses.

### Gaps
- Justdial returned 403 to the browser and to WebFetch (Akamai), so no Justdial reviews were read. Google Maps limited view hides review text. Reddit could not be queried by the search tool. No Tricity evidence of no-shows, overcharging, chemical use or mess was found, which does **not** mean these problems are absent.
- No check was made whether the 2024 Mohali order is still in force.
- The review sample is one firm, and its reviews may be selected by Google's default sort.
- Sector 4/Haripur in Panchkula holds [7 of the Panchkula Maps listings](https://www.google.com/maps/search/water+tank+cleaning+panchkula). Whether those are separate firms is unknown.
