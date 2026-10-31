# Tricity tank cleaning prices, re-read in a real browser

Read on 31 Oct 2026 between 17:19 and 17:58 IST. Each page was loaded in an isolated headless Chromium context with en-IN, Asia/Kolkata and the geolocation of the town named.

**The server IP stayed in Mumbai. Only the browser location was Tricity.** A site that prices by IP would not show a Tricity result here. Urban Company did resolve these visits to its Chandigarh city, so its readings are local.

Nobody was contacted. There was no login, OTP, booking or form, and Justdial and IndiaMART were not tried. No site blocked or showed a CAPTCHA on any load, so nothing needed stopping. Loads were at least 4 seconds apart per site. "View Cart" was never clicked.

Times are IST. Screenshots and page text are in `/tmp/claude-1001/-home-ubuntu-Programming-ct/afd18c61-4948-46cb-8622-d934b17d163c/scratchpad/prices/shots/` and `.../prices/pages/`. That is scratch space, so copy anything worth keeping.

Clean Tank's list before and with 18% GST: to 500 L ₹600 / ₹708; to 1,000 L ₹800 / ₹944; to 2,000 L ₹1,000 / ₹1,180; to 5,000 L ₹1,400 / ₹1,652; to 10,000 L ₹2,000 / ₹2,360.

## Urban Company by town: sizes, tax, cover, and ₹949 vs ₹799 vs ₹1,099

### Takeaway
The upper bands are now read: overhead 1,000 to 2,000 L is ₹1,149, loft 1,000 to 2,000 L is ₹1,449, and underground 3,000 to 6,000 L is ₹1,899. Prices are identical in Chandigarh, Mohali, Panchkula, Zirakpur and Kharar. ₹949 is the live overhead price, ₹799 is Lucknow, and ₹1,099 does not exist as a Tricity cleaning price today. Tax treatment stays unresolved: the cart shows ₹949 with no tax line, but the terms say charges are subject to applicable taxes.

### Cited Findings

Location was set through Urban Company's own "Use current location", and its reverse geocoder named the place shown. Every request stayed on city key `city_chandigarh_v2`. All from [the Chandigarh plumbers page](https://www.urbancompany.com/chandigarh-plumbers):

| Town (place UC named) | Time | Overhead open | Loft | Underground |
|---|---|---|---|---|
| Mohali (Sector 71, 160059) | 17:32 | Upto 1000L ₹949; 1000L-2000L ₹1,149 | Upto 1000L ₹1,249; 1000L-2000L ₹1,449 | Upto 2999 L ₹1,699; 3000-6000 L ₹1,899 |
| Panchkula (Sector 4, 134112) | 17:34 | Same | Same | Same |
| Chandigarh (Sector 18, 160022) | 17:35 | Same | Same | Same |
| Zirakpur (140603) | 17:37 | Same | Same | Same |
| Kharar (140301) | 17:39 | Same | Same | Same |

- Struck-through price: none. List and charged figures match in the page data (for example 949/949 and 1149/1149), so no discount is hidden in these figures — [UC](https://www.urbancompany.com/chandigarh-plumbers), all five towns.
- Duration: 1 hr 30 mins overhead and loft, 2 hrs underground. Quantity cap 5, as earlier notes said — [UC](https://www.urbancompany.com/chandigarh-plumbers), Chandigarh, 17:23.
- The underground "Upto 2999 L" card merges two internal items, 1499 L and 1500-2999 L, both ₹1,699 — [UC](https://www.urbancompany.com/chandigarh-plumbers), Panchkula, 17:34.
- Reviews by band: overhead to 1,000 L 13K, overhead to 2,000 L 3K, underground to 2,999 L 1K, underground 3,000 to 6,000 L only 29 — [UC](https://www.urbancompany.com/chandigarh-plumbers), Panchkula and Chandigarh.
- The 4.71 (16K reviews) on overhead cleaning appears unchanged on the [Lucknow](https://www.urbancompany.com/lucknow-plumbers), [Ludhiana](https://www.urbancompany.com/ludhiana-plumbers), [Jaipur](https://www.urbancompany.com/jaipur-plumbers) and [Bhopal](https://www.urbancompany.com/bhopal-plumbers) pages, 17:45 to 17:53.

What is covered, overhead, loft and underground alike — [UC](https://www.urbancompany.com/chandigarh-plumbers), Chandigarh 17:23, Panchkula 17:34:
- Process: inspection and drainage; sludge removal and scrubbing; "Bleach powder clean"; rinse and refill; 30-day warranty.
- Free re-visit within 30 days if not satisfied. Warranty covers damage or malfunction of fittings procured by UC up to ₹10,000.
- Cementing, if needed to re-install, costs extra on the invoice.
- **Underground only: "Are the helper charges included in this service? No. Helpers cost extra and will be hired at transparent market rates."** No rupee figure is given.
- A big tank will not be removed. The FAQ says the service covers plastic Sintex tanks and flat loft tanks, and the same answer sits on the underground item, so it looks copied. RCC is not mentioned.

Fees and tax:
- A ₹99 visitation fee exists, waived on orders above ₹499 — [UC page data](https://www.urbancompany.com/chandigarh-plumbers), 17:19. If no service is taken, a visiting charge applies — [same page](https://www.urbancompany.com/chandigarh-plumbers).
- With one overhead to 1,000 L in the side cart, the panel showed "₹99 visitation fee waived off", then ₹949 and "View Cart", with no tax line — [UC](https://www.urbancompany.com/chandigarh-plumbers), Chandigarh, 17:44. I stopped there.
- No "tax" or "GST" string appears in the item data for any tank service — [UC](https://www.urbancompany.com/chandigarh-plumbers).
- "All Charges and Fees are subject to applicable taxes", and UC "shall notify you of the applicable Charges, Fees" at the time of booking — [UC terms](https://www.urbancompany.com/terms), 17:44. This corrects the earlier note that the terms did not render.

The price conflict:
- ₹949 live on [www](https://www.urbancompany.com/chandigarh-plumbers), [non-www](https://urbancompany.com/chandigarh-plumbers) and [Arabic](https://www.urbancompany.com/ar/chandigarh-plumbers) copies, 17:19 to 17:48. Loft was ₹1,249 and underground ₹1,699 on all three, so the ₹299 and ₹499 loft figures from search copies do not reproduce.
- ₹799 overhead is [Lucknow](https://www.urbancompany.com/lucknow-plumbers), where loft is ₹1,099 and underground ₹1,699, 17:45. [Bhopal](https://www.urbancompany.com/bhopal-plumbers) is ₹899 today, not the ₹799 an earlier snippet showed, with loft ₹1,199 and underground ₹1,649, 17:53.
- [Ludhiana](https://www.urbancompany.com/ludhiana-plumbers) ₹899, ₹1,199, ₹1,649 and [Jaipur](https://www.urbancompany.com/jaipur-plumbers) ₹949, ₹1,249, ₹1,699 are unchanged from earlier notes, 17:46 to 17:47.
- ₹1,099 in the Tricity today is only tank installation: "Overhead water tank installation" is Upto 500L ₹599 and 500 to 2000L ₹1,099 — [UC](https://www.urbancompany.com/chandigarh-plumbers), Chandigarh, 17:44.
- "Combo for water tank & motor, starts at ₹599" is installation, repair and motor work, not cleaning. Its options are the same installation prices plus cover change +₹99, overflow +₹169, connection leakage +₹199 and motor installation +₹349 — [UC](https://www.urbancompany.com/chandigarh-plumbers), Mohali 17:32 and Chandigarh 17:41.

### Inferences
- Tricity pricing at UC is one city-wide card.
- The review count is pooled nationally. The report said "probably"; five city pages showing the same 4.71 and 16K makes that close to certain.
- The ₹1,099 search copy most likely came from Lucknow's loft price or the installation band. I cannot prove which, and an old real price is also possible.
- UC's ₹1,699 understates an underground job when a helper is needed. Clean Tank's list has no such add-on, so the real gap could be wider than ₹519.
- Against ₹949 and ₹1,149, Clean Tank with GST is ₹5 under and ₹31 over. If UC adds 18% on top, UC becomes ₹1,120 and ₹1,356, and Clean Tank is well under at both. The fair statement is "level at worst".
- Clean Tank's band edges matter against UC. A 6,000 L sump falls in Clean Tank's ₹2,360 band and costs ₹1,899 at UC, ₹461 less at face value. A 2,500 L sump is ₹1,652 against ₹1,699.

### Gaps
- Whether ₹949 includes tax. It would take the cart page, which is the door to login and checkout, so I stopped. A real booking or a phone check would settle it.
- UC's rupee rate for underground helpers is not published.
- Other cities' upper bands were not read, only their "starts at" figures.

## Competitor prices on their own sites, with JS rendering

### Takeaway
No competitor page holds a sized price that fetches missed. The rendered sites confirm the earlier figures, with four corrections: HomeTriangle hides its price behind a city picker that has no Chandigarh, Safaiwale's list is a Vasundhara page, Favorz's ₹245 is a site-wide placeholder, and Grace's "up to 15% off" is gone. No page mentions GST, and only Urban Company states a real add-on or fee. The one new local figure is a Welco customer's ₹1,500.

### Cited Findings

Times are the Chandigarh-context load.

| Firm | Page and time | Published today | Size | Type | GST | Minimum |
|---|---|---|---|---|---|---|
| Fixomes | [Page](https://www.fixomes.com/Water-Tank-Cleaning.php), 17:37 | Starting at ₹499 overhead, ₹699 underground | Not stated | Overhead, underground | Not stated | Not stated |
| Grace | [Page](https://gracecleaning.in/water-tank-cleaning/), 17:37 | Start at ₹499, "no hidden charges" | Not stated | Home tanks | Not stated | Not stated |
| Guga Aviation | [Chandigarh](https://gugaaviation.com/services/water-tank-cleaning/chandigarh/), 17:37 | Full card below | 500 to 20,000 L | Overhead, sump | Not stated | Not stated |
| Busy Bucket | [Mohali](https://busybucket.in/water-tank-cleaning-in-mohali/), [Chandigarh](https://busybucket.in/water-tank-cleaning-in-chandigarh/), [Panchkula](https://busybucket.in/water-tank-cleaning-in-panchkula/), [Zirakpur](https://busybucket.in/water-tank-cleaning-in-zirakpur/), 17:39 to 17:40; [service page](https://busybucket.in/water-tank-cleaning-services/), 17:52 | No price, "very affordable cost" | None | None | Not stated | Not stated |
| Welco | [Google profile](https://business.google.com/v/welco-tank-cleaning-services/05022997511415029701/7d5e/_/rev), 17:40 | No list. A review states a charge | See below | See below | Not stated | Not stated |
| ServiceSutra | [Chandigarh](https://www.servicesutra.com/chandigarh/water-tank-cleaning), 17:40; [cost guide](https://www.servicesutra.com/cost/water-tank-cleaning), 17:41 | "Rs. 500 onwards"; guide ladder below | Guide only | Overhead, sump in guide | Not stated | Not stated |
| Safaiwale | [Chandigarh](https://safaiwale.in/water-tank-cleaning-services-in-chandigarh/), 17:42 | No price | None | None | Not stated | Final quote after inspection |
| KPS | [Single tank](https://kps.co.in/single-tank-cleaning/chandigarh), 17:42; [AMC Panchkula](https://kps.co.in/water-tank-cleaning-amc/chandigarh/panchkula), [Zirakpur](https://kps.co.in/water-tank-cleaning-amc/chandigarh/zirakpur), 17:43 | Single tank none; AMC bands unchanged | Building type | AMC | Not stated | Not stated |
| Crystal Clean | [Home](https://www.crystalcleanindia.com/), 17:43 | No price; no price link | None | None | Not stated | Not stated |
| Clean Today | [Chandigarh](https://www.cleantoday.co.in/water-tank-cleaning-chandigarh), 17:52; [Mohali](https://www.cleantoday.co.in/water-tank-cleaning-mohali), [Panchkula](https://www.cleantoday.co.in/water-tank-cleaning-panchkula), 17:44 | "Get a Free Quote", no price | None | None | Not stated | Not stated |
| Favorz | [Chandigarh](https://www.favorz.co.in/commercial-cleaning/water-tank-cleaning-service-chandigarh), [Mohali](https://www.favorz.co.in/commercial-cleaning/water-tank-cleaning-service-mohali), 17:45 | "Price Starts @245/-" | Not stated | Not stated | Not stated | Not stated |
| HomeTriangle | [Chandigarh](https://hometriangle.com/chandigarh/water-tank-cleaning), 17:46 and 17:49 | See below | Page data only | Overhead, RCC, sump | Not stated | Not stated |
| Sulekha | [Chandigarh](https://www.sulekha.com/water-tank-cleaning-services/chandigarh), [Mohali](https://www.sulekha.com/water-tank-cleaning-services/mohali), [Panchkula](https://www.sulekha.com/water-tank-cleaning-services/panchkula), 17:47 to 17:48 | No price | None | None | Not stated | Not stated |

Detail behind the table:
- Guga overhead: 500 L ₹999, 1,000 L ₹1,499, 2,000 L ₹1,999, 5,000 L ₹2,999, 10,000 L ₹4,999. Sump: 2,000 L ₹2,499, 5,000 L ₹3,499, 10,000 L ₹4,999, 20,000 L ₹7,999, custom "Get Quote". "All prices include cleaning, disinfection, water testing, and compliance certificate. Contact us for exact quote." The banner offers 20% off a first service — [Guga](https://gugaaviation.com/services/water-tank-cleaning/chandigarh/), 17:37.
- Welco: a Google reviewer, "5 months ago", with one underground tank and two 1,000 L rooftop tanks, wrote that "the fixed charge of ₹1500 for the underground tank cleaning felt a bit expensive", about 15 minutes' work, and asked for pricing by tank size — [Welco reviews](https://business.google.com/v/welco-tank-cleaning-services/05022997511415029701/7d5e/_/rev), 17:40. Another review says "reasonable price". No size is given. This line is new and did not appear in earlier notes.
- HomeTriangle: on load a modal asks "Where do you need Water Tank & Sump Cleaning service". Its lists hold 19 cities and no Chandigarh, and typing Chandigarh, Mohali or Panchkula into its search returned nothing. The package panel reads "Select your city to see price". The only visible figures are an FAQ line, "starts at ₹779" and "₹1,449", and a cashback line — [HomeTriangle](https://hometriangle.com/chandigarh/water-tank-cleaning), 17:49.
- HomeTriangle's page data still holds the unchanged ladder. Overhead ₹779, ₹1,099, ₹1,499, ₹2,549 for to 1,000, to 3,000, to 6,000 and to 10,000 L. RCC overhead ₹1,199, ₹1,499, ₹1,949, ₹2,949 on the same bands. Sump ₹1,449, ₹1,949, ₹2,399, ₹3,949 for to 5,000, to 8,000, to 12,000 and to 20,000 L. Its reviews on all three URLs are Hyderabad localities such as Banjara Hills and Uppal — [Chandigarh](https://hometriangle.com/chandigarh/water-tank-cleaning), [Mohali](https://hometriangle.com/mohali/water-tank-cleaning), [Panchkula](https://hometriangle.com/panchkula/water-tank-cleaning), 17:49.
- Safaiwale: the page cited for "Chandigarh" is titled "Best Water Tank Cleaning Services In Vasundhara". It lists Upto 500L 600/- (45 min), Upto 1000L 700/- (60 min), Upto 1500L 800/- (90 min), says a specialist inspects to "give you a final quote", and names Chandigarh only in a city list — [Safaiwale](https://safaiwale.in/?p=10170), 17:41. [Gurgaon](https://safaiwale.in/water-tank-cleaning-services-in-gurgaon/) shows the same ladder. The [Chandigarh page](https://safaiwale.in/water-tank-cleaning-services-in-chandigarh/) has none.
- Favorz: its [service listing](https://www.favorz.co.in/single-listing/commercial-cleaning/water-tank-cleaning-service) shows "From: ₹ 245/-" for water tanks and also for hotel, restaurant, showroom, blind and carpet cleaning, beside "₹ 0/-" and a blank "₹ /-" on others. It returned HTTP 500 and still rendered, 17:53. The office is E-120, Sector 57, Gurgaon — [Favorz](https://www.favorz.co.in/commercial-cleaning/water-tank-cleaning-service-mohali).
- Grace: the rendered page has no "15%" or discount text today, which the earlier notes recorded — [Grace](https://gracecleaning.in/water-tank-cleaning/).
- ServiceSutra guide. Sump: to 2,000 L Rs. 1,000-1,200; 2,000 to 3,000 L Rs. 1,300-1,500; 3,000 to 6,000 L Rs. 1,800-2,000; 6,000 to 10,000 L Rs. 2,700-3,000. Overhead: under 1,000 L Rs. 800-1,000; 1,000 to 2,000 L Rs. 1,000-1,200; 2,000 to 3,000 L Rs. 1,200-1,500; 3,000 to 5,000 L Rs. 1,500-1,800. Average Rs. 800-1,200, low Rs. 500-800, high Rs. 1,200-1,800. The same page also says "start from Rs. 650 onwards" — [guide](https://www.servicesutra.com/cost/water-tank-cleaning), 17:41. Its [Mohali](https://www.servicesutra.com/mohali/water-tank-cleaning) and [Panchkula](https://www.servicesutra.com/panchkula/water-tank-cleaning) URLs show "Error 404" with HTTP 200.
- KPS AMC, yearly: individual building ₹6,000 to ₹15,000; society ₹15,000 to ₹50,000; commercial ₹30,000 to ₹1,00,000. Identical on [Panchkula](https://kps.co.in/water-tank-cleaning-amc/chandigarh/panchkula) and [Zirakpur](https://kps.co.in/water-tank-cleaning-amc/chandigarh/zirakpur). Its FAQ says "an online estimate and final quote after brief site details" — [KPS](https://kps.co.in/single-tank-cleaning/chandigarh), 17:58. The [estimator](https://kps.co.in/online-estimate.html) asks for company and contact details and covers STP, ETP and other tanks, so I did not use it.

JS-rendered prices:
- I compared each server HTML with its rendered text. No competitor's tank price appeared only after rendering. The JS-only strings were KPS counters (₹25, ₹0), Favorz's listing, and Welco's review ₹1,500 — [KPS](https://kps.co.in/single-tank-cleaning/chandigarh), [Favorz](https://www.favorz.co.in/single-listing/commercial-cleaning/water-tank-cleaning-service), [Welco](https://business.google.com/v/welco-tank-cleaning-services/05022997511415029701/7d5e/_/rev).
- Urban Company is the exception: its size options exist only in the responses its own page requests when a service is opened — [UC](https://www.urbancompany.com/chandigarh-plumbers).
- The word "GST" appears on none of the 13 firms' pages read here. Fixomes' full-page screenshot shows only the two text prices, with none in images — [Fixomes](https://www.fixomes.com/Water-Tank-Cleaning.php).

### Inferences
- The Tricity's sized public cards are effectively two: Urban Company and Guga. HomeTriangle should move from "reaches the Tricity" to "national benchmark nobody here can buy from its page".
- ₹245 should be dropped as a local floor. It is a template default and not a tank price.
- Safaiwale's ₹600, ₹700, ₹800 are a national template and should not be described as a Chandigarh list.
- Welco's ₹1,500 sits close to Clean Tank's ₹1,652 and ₹1,180 sump prices, and it suggests the Maps leader is not a cheap operator. It is one customer's undated-to-the-day account of an unknown size, so it is a hint only.
- Guga's first-service 20% off, if real, would put 1,000 L at about ₹1,199, still above Clean Tank's ₹944. That is my arithmetic.

### Gaps
- Fixomes ₹0.60/L, Busy Bucket ₹350 and ₹399, A-One and Crystal Clean ₹700/day are IndiaMART snippets. I did not try IndiaMART, so they stay unconfirmed.
- Whether HomeTriangle serves the Tricity at all. Its picker says not, its URLs say yes, and only a call would settle it.
- Whether Guga delivers locally. Its page is identical in every town.
- Sulekha's profiles were read at list level only.

## Do prices differ by location?

### Takeaway
No. Across Chandigarh, Mohali, Panchkula, Zirakpur and Kharar, no competitor showed a different price by browser location or by town URL. Prices differ between cities such as Lucknow and Chandigarh, not within the Tricity.

### Cited Findings
- Urban Company: five town readings were identical on all six cleaning options — [UC](https://www.urbancompany.com/chandigarh-plumbers), 17:32 to 17:39.
- With geolocation set to Chandigarh, Mohali and Panchkula, rendered text of the same URL was byte-identical for [Fixomes](https://www.fixomes.com/Water-Tank-Cleaning.php), [Grace](https://gracecleaning.in/water-tank-cleaning/), [Guga](https://gugaaviation.com/services/water-tank-cleaning/chandigarh/), [ServiceSutra](https://www.servicesutra.com/chandigarh/water-tank-cleaning), [Favorz](https://www.favorz.co.in/commercial-cleaning/water-tank-cleaning-service-chandigarh), [HomeTriangle](https://hometriangle.com/chandigarh/water-tank-cleaning) and [Safaiwale](https://safaiwale.in/water-tank-cleaning-services-in-chandigarh/), 17:37 to 17:57.
- [KPS](https://kps.co.in/single-tank-cleaning/chandigarh) text changed by 52 lines between loads, with no price in it, 17:42 to 17:57.
- Town URLs: Guga's card is the same on [Chandigarh](https://gugaaviation.com/services/water-tank-cleaning/chandigarh/), [Mohali](https://gugaaviation.com/services/water-tank-cleaning/mohali/), [Panchkula](https://gugaaviation.com/services/water-tank-cleaning/panchkula/), [Zirakpur](https://gugaaviation.com/services/water-tank-cleaning/zirakpur) and [Kharar](https://gugaaviation.com/services/water-tank-cleaning/kharar). HomeTriangle's three town URLs give identical text, and KPS's AMC bands match on two towns.
- Between cities, UC's overhead "starts at" is ₹799 Lucknow, ₹899 Ludhiana and Bhopal, ₹949 Chandigarh and Jaipur — [Lucknow](https://www.urbancompany.com/lucknow-plumbers), [Ludhiana](https://www.urbancompany.com/ludhiana-plumbers), [Bhopal](https://www.urbancompany.com/bhopal-plumbers), [Jaipur](https://www.urbancompany.com/jaipur-plumbers).

### Inferences
- A single Tricity-wide price for Clean Tank matches what the market shows. No town premium needs to be defended.

### Gaps
- IP-based pricing was not tested, because the IP stayed in Mumbai. Phone quotes could still differ by town, and no published page would show it.

## Rebuilt tables, marked against the report

### Takeaway
Four table cells changed, all Urban Company upper bands now read or now confirmed, and every Guga figure held. The two medians with new inputs moved a little: overhead 2,000 L to ₹1,074 and sump 5,000 L to ₹1,950. No verdict flips.

### Cited Findings

Marks: **U** unchanged, **C** changed, **X** unconfirmed today. Readings are from [UC](https://www.urbancompany.com/chandigarh-plumbers) at 17:32 to 17:39 in five towns, [Guga](https://gugaaviation.com/services/water-tank-cleaning/chandigarh/) at 17:37 and [HomeTriangle page data](https://hometriangle.com/chandigarh/water-tank-cleaning) at 17:49. HomeTriangle is marked U for the figures, but none of them is visible as a package price.

| Overhead | Before GST | With GST | Urban Company | Guga | HomeTriangle (hidden) | Median |
|---|---|---|---|---|---|---|
| To 500 L | ₹600 | ₹708 | ₹949, smallest band to 1,000 L, **U** | ₹999 **U** | ₹779 **U** | ₹700, not recalculated |
| To 1,000 L | ₹800 | ₹944 | ₹949 **U** | ₹1,499 **U** | ₹779 **U** | ₹779, not recalculated |
| To 2,000 L | ₹1,000 | ₹1,180 | **₹1,149 C**, was not readable | ₹1,999 **U** | ₹1,099 **U** | **₹1,074 C**, was ₹1,050 |
| To 5,000 L | ₹1,400 | ₹1,652 | Not sold, **U** | ₹2,999 **U** | ₹1,499 **U** | ₹1,125, not recalculated |
| To 10,000 L | ₹2,000 | ₹2,360 | Not sold, **U** | ₹4,999 **U** | ₹2,549 **U** | ₹2,549, not recalculated |

Loft is not in the report table. Clean Tank has no loft surcharge: ₹944 against UC ₹1,249 to 1,000 L, and ₹1,180 against ₹1,449 to 2,000 L.

| Sump | Before GST | With GST | Urban Company | Guga | HomeTriangle (hidden) | Median |
|---|---|---|---|---|---|---|
| 2,000 L | ₹1,000 | ₹1,180 | ₹1,699 **U** | ₹2,499 **U** | ₹1,449 **U** | ₹1,699, not recalculated |
| 5,000 L | ₹1,400 | ₹1,652 | **₹1,899 C**, was not readable | ₹3,499 **U** | ₹1,449 **U** | **₹1,950 C**, was ₹2,000 |
| 10,000 L | ₹2,000 | ₹2,360 | Not sold, **U**; stops at 6,000 L | ₹4,999 **U** | ₹2,399 **U** | ₹1,949, not recalculated |
| 15,000 L | ₹3,000 | ₹3,540 | Not sold, **U** | No card, **U** | ₹3,949 **U** | ₹1,750, not recalculated |
| 20,000 L | ₹4,000 | ₹4,720 | Not sold, **U** | ₹7,999 **U** | ₹3,949 **U** | ₹2,400, not recalculated |

Median recalculation, using the report's method and its [cited inputs](https://kaamgenie.com/delhi/water-tank-cleaning) with only Urban Company's new figure added:

| Band | Inputs | Old median | New median | Before GST vs median | With GST vs median |
|---|---|---|---|---|---|
| Overhead to 2,000 L | 649, 674, 699, 700, 1,049.5, 1,099, **1,149**, 1,399, 1,500, 1,999 (n=10) | ₹1,050 (n=9) | ₹1,074 | ₹1,000: -7%, was -5% | ₹1,180: +10%, was +12% |
| Sump 5,000 L | 1,249, 1,449, **1,899**, 2,000, 2,400, 3,499 (n=6) | ₹2,000 (n=5) | ₹1,950 | ₹1,400: -28%, was -30% | ₹1,652: -15%, was -17% |

Other report lines:

| Item | Report said | Today | Mark |
|---|---|---|---|
| Fixomes | From ₹499, ₹699 | [Same](https://www.fixomes.com/Water-Tank-Cleaning.php) | U |
| Grace | From ₹499, up to 15% off | [₹499 same; 15% not found](https://gracecleaning.in/water-tank-cleaning/) | C (offer only) |
| ServiceSutra | From ₹500 | [Same](https://www.servicesutra.com/chandigarh/water-tank-cleaning) | U |
| Favorz | ₹245 | [Same figure, but site-wide default](https://www.favorz.co.in/single-listing/commercial-cleaning/water-tank-cleaning-service) | C (meaning) |
| Safaiwale | Lists Chandigarh at ₹600, ₹700, ₹800 | [Same figures, Vasundhara page](https://safaiwale.in/?p=10170) | C (attribution) |
| HomeTriangle | Chandigarh page shows starts-at; own list omits Chandigarh | [Picker has no Chandigarh; price gated](https://hometriangle.com/chandigarh/water-tank-cleaning) | C (visibility) |
| KPS AMC bands | ₹6,000 to ₹1,00,000 | [Same](https://kps.co.in/water-tank-cleaning-amc/chandigarh/panchkula) | U |
| Busy Bucket, Welco, Crystal Clean, Clean Today on own sites | No price | [Busy Bucket](https://busybucket.in/water-tank-cleaning-in-mohali/), [Crystal Clean](https://www.crystalcleanindia.com/), [Clean Today](https://www.cleantoday.co.in/water-tank-cleaning-mohali) same; [Welco review ₹1,500](https://business.google.com/v/welco-tank-cleaning-services/05022997511415029701/7d5e/_/rev) new | U, plus one new figure |
| ₹399 Meta ad, ₹500 OLX, IndiaMART snippets | As listed | Not re-read | X |
| "Search copies showed ₹799 and ₹1,099" | Re-check before leaning on ₹949 | [₹949 live in five towns](https://www.urbancompany.com/chandigarh-plumbers) | C (resolved) |

### Inferences
- The report's "matches Urban Company at 1,000 L" holds. Against UC at 2,000 L overhead, Clean Tank is ₹180 cheaper before GST and ₹31 dearer with it, a 2.7% gap.
- On a 5,000 L sump, Clean Tank with GST is ₹247 under UC, or 13%. The report's warning that it sits 14% over HomeTriangle's ₹1,449 now matters less, since nobody here can buy at that visible price.
- The 5,000 L overhead band stays the weakest against the median at +47%, but UC does not sell it, so it is unaffected.
- Report text needing change: the "Not readable" cells, "Urban Company also moves", "three sized cards reach the Tricity", the ₹245 floor, and the Safaiwale sentence.

### Gaps
- Inputs not re-read today, because they were out of this brief: KaamGenie, SP, KBS, LoklFix, ProEazy and Omkar. Each median above rests on their earlier readings.
- Only Urban Company's Tricity figure was added to the two medians. The report's input lists exclude UC city cards above 1,000 L, and I kept that for consistency.
- HomeTriangle stays in the medians because its numbers did not change. Removing it is a judgement for the report writer, and I did not recalculate it.
