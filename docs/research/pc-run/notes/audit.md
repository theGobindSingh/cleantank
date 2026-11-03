Evidence notes behind `../report.md`. File paths such as `raw/...` point into the owner's research zip, which is not in the repo. Third-party phone numbers are removed.

# Audit of the PC research run against its own raw evidence

Audited 31 Oct 2026. All numbers below were recomputed from `raw/`, with my own scripts in this folder (`serp.py`, `s1` to `s10`, `m1` to `m3`, `p1` to `p5`, `x1` to `x4`, `l1`, `y1`, `png.py`). No RUN script was executed; `scripts/*` were read as text. `RUN` is `pc-run/ct-research-local`.

Reproduction check: my copy of the run's own logic gives exactly 467 positions, 248 directory, justdial 135/67/32, so the 08 table is a faithful output of `build_serp.py`. Where I disagree, the disagreement is about the logic.

## Summary of verdicts

| # | Check | Verdict |
|---|---|---|
| 1 | Domain summary, 53% of 467 | Partly. Arithmetic right, base wrong: 57 social results were silently dropped |
| 2 | Google location validity | Partly. 57 of 66 right, 9 wrong; the two Kharar generic pages are not both Kharar, and the Kharar "near me" is Chandigarh |
| 3 | Maps geolocation | Holds. Device dot at the requested centre in 28 of 28 lists. IP shows only as Delhi NCR rows low on Hindi lists |
| 4 | Clean Tank visibility | Holds, but selectively stated; GSTIN problem found |
| 5 | AI Overview, local pack rates | Holds on rate; brand pack count in 06 is wrong (2, should be 4) |
| 6 | Sponsored | New facts. 2 pack ads, 3 Justdial text ads that 19 and 99 ignore; Tricity Cleaners' ad is about tanks |
| 7 | Meta operators | 19 is misleading. At least 3 contact identities; AR is a Delhi firm |
| 8 | Prices | All rows hold on rupees. MSE "Plastic" label is invented, national template; CleanerKart caveats missed |
| 9 | Maps by town, Kurali, Ropar | Earlier claim holds and tightens to about 11 km and 26 km. "Distance-led" is wrong |
| 10 | Other claims | Welco "highest count" wrong; Bittu "not captured" wrong; Hindi claim needs a caveat |

---

## 1. 08-serp-domain-summary: partly

Proof: `raw/serp-signed-out/NNN.json` (`organic`) against `NNN.txt`; scripts `s2.py`, `s4.py`.

The script pairs DOM results with lines starting `https://`. Facebook, Instagram and YouTube results print a `Facebook · name` line with no URL, so they are skipped and every later result shifts up one rank. On pages where URLs are fewer than DOM results it falls back to URL order. `build_serp.py` has a `social` class that can never fire: 08 shows no social row at all.

Pairing each DOM title with its own source line instead:

| Measure | 08 says | Recomputed |
|---|---|---|
| Generic pages | 61 | 61 (holds) |
| Organic positions | 467 | 521 |
| Social positions | 0 | 57 (instagram 28, facebook 19, youtube 10) |
| Directory | 248, 53% | 245, 47.0% of 521. Excluding social: 52.8% of 464 |
| justdial.com | 135 / 67 / 32 | 132 / 63 / 31, on 57 of 61 pages; rank 1 on 46 pages |
| dir.indiamart.com | 55 / 41 / 28 | 55 / 42 / 28, on 53 pages, top 3 on 42 |
| sulekha.com | 41 / 11 / 15 | 41 / 11 / 15, on 30 pages |
| busybucket.in | 28 / 11 / 14 | 28 / 11 / 14, on 27 pages, never rank 1 |
| safaiwale.in | 25 / 17 / 16 | 25 / 18 / 16, on 25 pages, never rank 1 |

Other points:

- Brand queries were excluded: confirmed, `G=[a for a in A if a['tag']!='brand']`, 66 minus 5 equals 61.
- Inflation by repetition: 12 queries were run in three towns, so 61 pages are 35 unique queries. One page per unique query gives 298 positions: directory 133 (44.6%), social 47 (15.8%), justdial 73.
- "Top 3" counts positions, not pages. Justdial has several results per page. Pages with Justdial in the top 3: 56 of 61.
- Double count: indiamart.com (3) is split from dir.indiamart.com (55). Merged: 58. Share changes by nothing since both are directories, but "IndiaMART 55" in 99 should read 58.
- Labels that change the story:
  - tricitydrycleaner.com: "business" is right. It is Karan Sofa Drycleaner, and it is the website on the Maps listing "Tricity Water Tank Cleaning" (`maps-places/03.json`). Worth saying: a top Maps firm also has 24 organic positions.
  - vblue.in: "aggregator" is right. `raw/sites/vblue.in.json` is a multi-trade national helpline (handyman, cleaning, appliance, one number [phone removed]). Not a local firm. But the script's rule lists it by hand, so the label was luck.
  - Understated directories: exportersindia.com (4), quikr.com (1), magicpin.in (3), kaamgenie.com (1) are labelled business. Adds 9, so 254 of 521, 48.8%.
  - Not local firms under "business": watertankcleaning.co.in is Smart Cleaning, a Delhi NCR firm (`raw/sites`, titles and pages say Delhi). safaiwale.in is an online platform with city pages, its site timed out so unverified. Two domains, 40 positions.
  - `business-or-content` also holds sintexonline, aajtak, abplive, alberta.ca: how-to content, not rivals.

Plain restatement for the report: about half of generic Google results are directories, a further 11% are social posts, and Justdial sits in the top 3 on nearly every page.

Screenshots are viewport only (1366x900), so 02's note that "the screenshots are the check" for ads covers only the top of a page.

## 2. Google location validity: partly

Proof: last line block of every `raw/serp-signed-out/NNN.txt` after `Footer links`; `s1_loc.py`, `l1.py`.

The stored `footer` JSON field is itself broken on 6 pages (019, 020, 028, 034, 047, 059): the regex `India\n(.+)\n` caught a page title or a rating line, because result text ended in "India". 02 to 05 print those wrong values. All 66 pages do have a true footer in the text.

Result: 57 of 66 show the intended town, 9 a different town, 0 none.

| Intended | Right | Wrong |
|---|---|---|
| Mohali (34+1) | 34 | 1 |
| Chandigarh (11+1) | 11 | 1 |
| Panchkula (8+4) | 8 | 4 |
| Kharar (4+3) | 4 | 3 |

The nine:

| ID | Query | Intended | Footer |
|---|---|---|---|
| 001 | Clean Tank Services | Kharar | Mohali |
| 006 | water tank cleaning chandigarh | Mohali | Kharar |
| 041 | water tank cleaning chandigarh | Chandigarh | Mohali |
| 053 | water tank cleaning chandigarh | Panchkula | Mohali |
| 054 | water tank cleaning mohali | Panchkula | Chandigarh |
| 055 | water tank cleaning panchkula | Panchkula | Chandigarh |
| 056 | water tank cleaning near me | Panchkula | Chandigarh |
| 065 | water tank cleaning kharar | Kharar | Panchkula |
| 066 | water tank cleaning near me | Kharar | Chandigarh |

The lag is one to four pages after each town switch (053 to 056 is four; the switch to Kharar at 065 and 066 never landed), so the footer is not cosmetic: 056 and 066 have the same pack as 044 (Tricity, Reyaan, Shree Balaji), a Chandigarh result. Device location also moves the pack on named-town queries: with a real Panchkula footer, Solanki leads several "chandigarh" queries (058, 060, 062, 064).

Unsafe comparisons:

- Any "near me" claim for Kharar. There is none: 066 is Chandigarh. 013/014 Mohali, 044/045 Chandigarh, 057 Panchkula are the only valid unlabelled-town pages; 056 is not Panchkula.
- "Clean Tank Services" rank 3 "from Kharar" (001) was Mohali. 002 to 005 were really Kharar.
- Town rows for "water tank cleaning chandigarh" (006, 041, 053): the three labels are Kharar, Mohali, Mohali, so no Chandigarh or Panchkula device page exists for that query.
- 054, 055: Panchkula labels are Chandigarh. 065: Kharar label is Panchkula.
- All 14 Hinglish, Hindi and Punjabi pages (027 to 040) are Mohali and correctly so. There is no language comparison by town at all.
- Zirakpur, New Chandigarh, Dera Bassi, Kurali, Ropar: no device-located Google page exists, only named-town queries from Mohali.

Sonipat: no sign. `s6.py` found 0 hits for Sonipat, Sonepat, Panipat, Rohtak, Karnal, Bahadurgarh, Kundli, Noida, Gurgaon, in English or Hindi. "Haryana" appears only for Panchkula. Delhi appears 11 times: AR Water Tank Cleaners' Instagram reels (008, 043, 055), a Delhi reel on Hinglish and Hindi no-town queries (027, 028, 034), and a KaamGenie Delhi page (034, 037). That is thin national filler on queries with no town, not IP localisation. The packs are all Tricity. Device location beat the IP on all 66.

## 3. Maps geolocation: holds

Proof: `raw/dir-signed-out/map-*.txt` (URL line) and `map-*.png`; `m1.py`, `png.py`.

- 28 of 28 list URLs keep the requested `@lat,lng` and zoom after load.
- 28 of 28 screenshots show the blue device-location dot at the exact map centre (pixels 678 to 687, 445 to 454; I viewed Panchkula, Kurali, Ropar and Dera Bassi by eye). The dot is the device location, so Maps took the geolocation on every list.
- Captures do not print a location line. The dot plus the URL is all the proof there is.
- Hindi lists carry 16 to 22 far rows out of 50, all at rank 19 or lower. Of the 136 far rows, 82 sit in Delhi NCR, 42 elsewhere in north India (Alwar, Jaipur, western UP) and 12 further (one Chhattisgarh CleanDIN pin at about 1,230 km). None is in the Mumbai area. Bare and near-me lists carry 0 rows over 50 km in every town, including Kurali and Ropar.
- This is the one place where the IP shows. The Mumbai server pulled in Mumbai firms where supply was thin; this connection, which ipinfo puts at Sonipat beside Delhi, pulls in Delhi NCR firms on the thin Hindi query. It fits the earlier IP-artefact theory. It is IP-region spill, not Sonipat firms: no listing is in Sonipat. It sits below rank 19, so the top-10 leaders are not affected, and Google Search shows none of it.

## 4. Clean Tank visibility: holds, with omissions

Exact ranks (`s10.py`; 06 is right where it speaks):

| ID | Query | Footer | cleantankservices.com |
|---|---|---|---|
| 001 | Clean Tank Services | Mohali | 3 |
| 002 | Clean Tank Services Kharar | Kharar | absent |
| 003 | cleantankservices | Kharar | 5, and Google rewrote the query ("These are results for clean tank services") |
| 004 | Gobind Galaxy | Kharar | absent |
| 005 | Gobind Galaxy water tank cleaning | Kharar | 1 and 2, the /terms and /privacy-policy pages, not the homepage |

99 lists only the three good ones. Absent on brand-plus-town, and rank 5 on its own domain name, are the facts that matter most.

Generic queries: `s9.py` greps all raw captures. On Google the domain occurs on 001, 003 and 005 only; 002 has only related-search text. Zero on all 61 generic pages. Bing: zero in `raw/signed-in/bing.txt` (21 lines, 210 entries) and `dir-signed-out/bing-01.txt`. But bing.txt is a hand transcription of domains, not a page capture, and only one Bing page has real text. No brand query was run on Bing, so "Clean Tank absent from Bing" is untested for its own name. Signed-in Google has no raw file at all.

Overview 005: holds. Phone +91 8699339947, both emails, Punjab office B-3/26 and Kanpur registered office all match INFO-BANK §1 and `src/site.ts`. Two notes. It gives only the Punjab number, while `site.phone` is 919453517514. It shows the registered office, which the new site leaves out by the owner's call. Its sources are the old `/terms` and `/privacy-policy`, so if those URLs change at launch this overview loses its source.

Wrong or confusing facts:

- 004 overview: says Govind Galaxy "refers to a few notable commercial locations", mixing a Sector 22-B mobile market in Chandigarh and a Panvel real-estate project with the Kanpur firm. Nothing false about Clean Tank, but it never mentions tank cleaning as the core, and it does not name Clean Tank.
- 004 also shows: an IndiaMART profile "Gobind Galaxy, Kanpur - Laundry Washing Machine and Washing Machine" and two Tenderkart profiles. 99 says no listing exists; true of Google and Justdial, but there is an IndiaMART listing with the wrong category.
- Maps "Gobind Galaxy" resolves to Gobind Electronics, Kharar. Confirmed. Earlier report said the same.

**GSTIN flag, outside the brief but important.** `src/site.ts` and INFO-BANK give `09LFS1473F5ZU`, 13 characters. A GSTIN has 15: state code, 10-character PAN, entity digit, Z, check character. INFO-BANK's own PAN is ALFPS1473F. Inserting it gives `09ALFPS1473F5ZU`, and that string passes the standard GSTIN check-digit calculation (I computed U). The IndiaMART snippet in 004 shows `09ALFPS1473F3ZW`, which also passes and has the same PAN with entity digit 3. So the published value looks truncated by two letters, and a second registration may exist. INFO-BANK rules the 13-character form "correct", so this needs the owner's eye. Settled 3 Nov 2026: the owner confirmed `09ALFPS1473F5ZU`.

Maps listing: none. `map-brand-cleantankservicesk` and `-c` return 50 rows each with no Clean Tank row. No Sponsored text. No knowledge panel on 001 to 005.

Justdial:

- `raw/signed-in/jd-brand-*.txt` are hand notes of a top 10, not page captures. The clean-window page (`jd-clean-tank-services.txt`) failed with "Unable to Load data". So the claim rests on 20 transcribed rows.
- "Clean Tank", Maloya Colony: one transcribed row with no rating, phone or category. Plausibly unrelated: the name is generic (5 of the other rows are "Clean Tank Service(s)" in Gujarat and Maharashtra), Maloya is not in INFO-BANK, and the name appears on no other captured source. Not proven. Only the owner or a call can settle it.
- Two rows 11 glosses over. "Govind Galaxy", Harjinder Nagar, Kanpur, category Water Tank Construction and Water Tank Repair, 1.0 from 1 rating: a tank business in the firm's home city with a one-letter name variant. Worth asking the owner; the address is not Nehru Nagar. And "Saoo Water Tank Cleaning Services' Clean Tank Pure Water Healthy Life", Sector 14 Chandigarh: tagline close to "Clean Tank, Healthy Life".

Domain facts in 99 hold: `free/rdap.json` registration 2026-09-16, GoDaddy, expiry 2027-09-16. `free/cdx.json`: last capture before the gap 2024-12-26, next 2026-09-17. So the current site has been indexed for about six weeks, which matters when reading its rank.

## 5. AI Overview and local pack rates: holds

Proof: exact-line `AI Overview` count and `More places` / `More businesses`, rating lines; `s8.py`.

| Tag | Pages | AI Overview | Local pack |
|---|---|---|---|
| English | 47 | 27 | 47 |
| Hinglish | 6 | 6 | 6 |
| Hindi | 5 | 5 | 4 |
| Punjabi | 3 | 3 | 0 |
| Brand | 5 | 2 | 4 |
| All | 66 | 43 | 61 |

- 43 of 66 holds. All Hinglish, Hindi and Punjabi pages holds.
- No pack on any Punjabi query holds: 038 to 040 have no pack, no rating line. Sample is 3 queries, one device town. The Hindi miss is 037.
- 06 says pack on 2 of 5 brand pages; it is 4. The parser looks for `Places` or `Local results` and misses the `Businesses` heading on 001 and 003. Both packs matter: 001 shows Shree Balaji, Welco, Weston; 003 shows A-One, Shree Balaji, Wazara.
- Repetition inflates English. By unique query: 13 of 21 English, 27 of 35 generic. English overviews follow intent: price, AMC, commercial, hospital, mechanized queries get one; bare town queries mostly do not (Dera Bassi is the exception). `tank cleaning service near me` varied by run (no on 014, 057; yes on 045).

## 6. Sponsored: new facts, thin sample

Every line containing Sponsored or Ad variants across all 66 pages (`s7.py`), English, Hindi, Punjabi forms:

| ID | Query | Device | Type | Advertiser | Ad text |
|---|---|---|---|---|---|
| 010 | water tank cleaning kharar | Mohali | Local pack | Welco Cleaning | "Best Water Tank Cleaning In Mohali With Reasonable Rate And Great Staff" |
| 029 | pani ki tanki saaf karne wala chandigarh | Mohali | Local pack | Tricity Cleaners | "Tricity Cleaners provides Water Tank Cleaning Services in Mohali..." |
| 027 | pani ki tanki saaf karne wale | Mohali | Text ad | Justdial | "Water Tank Cleaning Services in Chandigarh - Safe & Affordable" |
| 029 | as above | Mohali | Text ad | Justdial | same |
| 032 | pani ki tanki ki safai | Mohali | Text ad | Justdial | same |

Totals: 2 Sponsored pack slots, 3 organic-area text ads, on 4 of 66 pages. The same "kharar" query at 065 had no Sponsored slot. None in 28 Maps lists (0 `Sponsored` strings).

What changes:

- Welco's 0 in 98 Maps searches still stands for Maps. Welco does buy, on Search, 1 of 2 tries on that query. "Welco's Sponsored slot did not appear once" must not be read as "Welco stopped advertising".
- "Only Fixomes had a Tricity tank Google ad" is weakened. Tricity Cleaners ran a tank-worded ad in a Search pack, and the earlier report filed it as "home and sofa". Justdial also buys Tricity tank terms; it is a directory, not a rival cleaner. Fixomes appeared in 0 of 66 SERPs.
- 19-ads never mentions any of this. 99 "Unknown: Google ad text" is wrong: five ad texts are in raw. 99 row "Welco; Tricity Cleaners" is right but omits Justdial. 02 to 04 record the Justdial text ads per page, then nothing rolls them up.

Ads Transparency: `gatc-*.txt` hold counts and advertiser names only: fixomes 24, tricitycleaners.in 11, busybucket.in 5, gracecleaning.in 0, urbancompany.com "~2k ads" (19 says NOT CAPTURED, count not parsed; it is in the text). These text files do not show tank or Tricity relevance, and no capture shows geographic targeting.

The screenshots show more, and 19 says "only counts and advertisers were read":

- Fixomes: "Mohali Tank Cleaners - Same Day Service", `fixomes.com/tank_cleaning/services`. A tank ad naming Mohali. Others are house, chimney, bathroom.
- Tricity Cleaners: sofa, general budget cleaning, and one Sponsored local format reading "House cleaning service ₹1,000–3,000". One tile is a Google 500 error. No tank creative in the visible tiles.
- Busy Bucket: sofa, bathroom (Ludhiana), home. No tank ad visible.
- Only the first 4 tiles are visible. So: Fixomes is tank-related; the others are unproven either way; targeting is unknown for all.

## 7. Meta operators: 19 is misleading

Proof: `raw/ads/meta-*.txt`; 62 unique library IDs parsed.

| Page | IDs | Phone | Web, email |
|---|---|---|---|
| Good life future | 26586607767617468, 2081821882757501 (Ambala) | [phone removed] | goodlifefuture.in, [email removed] |
| GLF Water tank cleaning | 1139021821781403, 3553837858130094 | [phone removed] | calls itself Good Life Future |
| AR Water Tank Cleaners | 3239467402916495 | [phone removed] | arwatertankcleaners.in, [email removed] |
| Water Tank Cleaning Service | 1407923478165926 | [phone removed] | none; link caption "Home Care" |

- Good Life Future and GLF: same operator. Same phone, self-named.
- AR: not shown to be the same. The ad copies Good Life Future's words, name included, but has its own phone, domain and email, and its service list reads "Delhi NCR, Prayagraj, Rohtak, Sonipat, Lucknow, Chandigarh, Dhakoli, Peer Muchalla, Zirakpur, Panchkula". The phone matches the Maps listing "A.R. Water Tank Cleaners", 4.9 from 3,673 reviews, at north-west Delhi in north-west Delhi (`map-*-hi.json`, 7 lists). So AR is a large Delhi firm. Whether it copied, licensed or partners with Good Life Future is not in the captures. 19's row, "Good Life Future text; WhatsApp; Chandigarh, Zirakpur, Panchkula", hides all of this.
- ₹399 ad: separate on all evidence. Different phone, no shared text, Hindi only, different format. The number appears nowhere else in raw.
- Earlier "may be two operators": replace with at least three contact identities in the Tricity feed: Good Life Future/GLF; AR (Delhi firm); the ₹399 page. A fourth reading of AR as a Good Life partner would bring it back to two, but nothing shows that.
- Pool size holds: ~12 and ~9 results, and 1 is a chopper ad, other unrelated. Of the 62 IDs I found 5 Tricity tank-cleaner ads plus the Good life Ambala ad.

## 8. Prices: rupee rows hold; labels and caveats do not

| Firm | Rows in 15 | Verdict | Raw |
|---|---|---|---|
| Urban Company | 6 | All hold: 949, 1149, 1249, 1449, 1699, 1899 | `urbancompany/detail-*.txt` lines ~2236 |
| Guga Aviation | 9 | All hold, identical on Chandigarh, Mohali, Panchkula | `sites/gugaaviation.com.json` |
| CleanerKart | 4 | All hold: 699, 1349, 1949, 2499 | `sites/cleanerkart.in.json` |
| Mr. Service Expert | 5 | Rupees hold, label wrong | `sites/mrserviceexpert.com.json` |
| Grace | 1 | Holds, from ₹499, size unstated | `sites/gracecleaning.in.json` |

**Urban Company.** Header on the priced captures reads "Sector 5 panchkula macabbi, Mubarakpur- Sanauli- Punjab- India". So 15's "attempts ... did not change the header address" is wrong: the header did change, to a mangled address, and the prices were read there. Still `chandigarh-plumbers`. 15 omits: "Get visitation fee off on orders above ₹499" is in raw.

**Guga.** 15 omits "Special Offer: Book Today & Get 20% OFF on First Service!" and "All prices include cleaning, disinfection, water testing, and compliance certificate". With 20% off, ₹999 is ₹799 for a first booking. Still above our ₹708.

**CleanerKart.** ₹699 is for the Tricity. The tank page reads "Chandigarh Tri-City", header "Chandigarh, Mohali, Panchkula, Zirakpur, Kalka", and SERP snippets show separate Chandigarh and Mohali pages dated Oct 2026. Three things 15 and 16 miss:
- Kharar is not on its area list. New Chandigarh, Dera Bassi, Kurali, Ropar neither.
- "Disinfectant and water are provided by you." It is a lower-scope product than ours.
- Covers overhead and underground at the same price, up to 1,000 L per tank; "Underground sump above 3000 L" excluded.
It has no Maps listing in any of the 28 lists, unlike every other priced firm except Mr. Service Expert. 16 sets it directly against ₹944 with no such caveat.

**Mr. Service Expert.** National template. `/tank-cleaning` copy says "your India property", "1500+ cities". Chandigarh appears only as one of 28 links under "Tank Cleaning in popular cities". SERP snippets for its Mohali and Kharar pages show identical prices. So 15's "Chandigarh named" oversells it. Corrections:
- "Plastic" appears nowhere on the page. Rows are "500 Litre", "1000 Litre", "2000 Litre". 15 invented that tank type.
- Rows omitted: 1,200 L ₹800, 1,500 L ₹1,000, "Tank cleaning" ₹2,000, size measurement ₹199.
- Every price has a struck price ₹100 higher.
- The GST column holds "visit charges included". That is not a GST statement.

**Grace.** 15 says Mohali, Chandigarh, Zirakpur. Same page also says same-day in Panchkula.

**GST.** Search of all raw (`p2.py`):
- No price-inclusive-of-GST statement exists anywhere, so 15's finding broadly holds.
- Missed by 15: CleanerKart `/pricing` says "Pay what you saw. Travel is included. The price you book is the price you pay." Closest thing to a tax-inclusive promise, without saying tax. Grace and Guga: "no hidden charges".
- Missed by 15: homeserivces.in snippet "All prices include labour, equipment, chemicals ..." (cut off, on 2 pages).
- Good Life Future claims "GST Compliant" and "GST Invoicing" with no price. Worth noting as the one competitor selling on GST.
- Justdial snippets show GST numbers for some IndiaMART-style sellers, unrelated to price.

**Also missing from 15**, all in SERP snippets: homeserivces.in from ₹499 same day in Chandigarh and Mohali; HouseTech Care ₹100 visit fee, price after checking.

**Conflicts with earlier reports:**

| Topic | Earlier | This run | Reading |
|---|---|---|---|
| Sized local cards | "Only two public sized cards" (recheck) | CleanerKart adds a third, one size | Earlier weakened |
| Floors | ₹399, ₹499, ₹500 only | Adds ₹699 fixed, homeserivces ₹499 | Addition |
| "Level with Urban Company at worst" | True of UC | CleanerKart ₹245 under at 1,000 L, on lower scope, not Kharar | Weakened, scope matters |
| No page has hreflang or switcher | Recheck | CleanerKart declares hi-IN and has EN/HI toggle | Overturned for one site |
| Fixomes ₹499 | "Every Fixomes figure matched" | No ₹ anywhere in this capture's Fixomes text; IndiaMART ₹0.60/L; ₹500/hour snippet | Unresolved; 99's "not re-confirmed" is right |
| Favorz ₹245 | Shown as tank price, then corrected | "From ₹245" sits on sidebar cards for hotel and restaurant cleaning | 15 is right |
| MSE | ₹500, ₹600, "unverified" | Full ladder, still national | Extended |
| UC town differences | Identical in 5 towns (recheck) | 99 lists as unknown | 99 regressed; recheck stands |
| UC tax wording | Terms: "subject to applicable taxes", no tax line in side cart | 99: "not found" | 99 regressed; this run did not read terms |
| Grace areas | Includes Panchkula | 15 omits | Earlier right |

No rupee figure conflicts on UC, Guga or Grace.

16 arithmetic holds: ₹5, ₹31, ₹309, band counts under 5. Add that ₹399 and CleanerKart scope are unlike ours.

## 9. Maps by town: earlier table mostly holds; Kurali and Ropar holds

Proof: `raw/dir-signed-out/map-*.json`. Each row's href carries exact coordinates, so distance from each town point is exact (`m1.py`, `m2.py`, `m3.py`). 09 never used these.

| Town | Earlier leaders | New top 3 (wtc / near me / Hindi) | Verdict |
|---|---|---|---|
| Kharar | A-One, Shree Balaji, Wazara | A-One, Wazara, Shree Balaji / Wazara, A-One, Shree Balaji / A-One, Shree Balaji, Wazara | Holds |
| Mohali | A-One, Welco, Shree Balaji | A-One, Wazara, Shree Balaji / Wazara, A-One, Shree Balaji / A-One, Shree Balaji, Wazara | Partly. Wazara in, Welco out of top 3 (rank 5, 9, outside top 8) |
| Chandigarh | Shree Balaji, Welco | Shree Balaji, Welco, Tricity / Shree Balaji, Wazara, Star / Shree Balaji, Axico, Tricity | Shree Balaji holds, 3 of 3 at rank 1. Welco partly |
| Panchkula | Sector 4 cluster | A-One, Solanki, VK / Wazara, A-One, Reyaan / VK, Solanki, Brother | Partly. Cluster holds on Hindi and pack; on bare lists A-One is 1st from 21.6 km and Wazara 1st from 19.4 km |
| Zirakpur | Watan, Welco, Clean Today | Watan, Welco, A-One / Watan, Wazara, Welco / Watan, VK, Solanki | Holds. Watan 1st on all 3 |
| Kurali | Wazara, A-One, Shree Balaji | A-One, Wazara, Shree Balaji / Wazara, A-One, Fateh | Holds |
| Dera Bassi | Shiv, Safai guru, B Two | A-One, Shree Balaji, Wazara / Wazara, A-One, Axico / Shiv, Axico, J.K | Overturned on bare lists, IP-polluted earlier |
| New Chandigarh | Tricity first on all six | Wazara, A-One, Tricity / same / Tricity, Wazara, Ket | Weakened |
| Ropar | No local leader | A-One, Wazara, Shree Balaji, 28 to 31 km | Holds |

Local packs on Google tell a different story from Maps lists: Shree Balaji 50, Welco 34, Tricity 21, A-One 11 pack slots across generic pages. Wazara has 2.

The Panchkula point (30.6942, 76.8606) resolves to Sector 4, so "Sector 4 cluster" partly reflects where the pin was put. At least six listings sit within 0.6 km of it (Solanki, MK, Sk, City Care, VK, Santosh).

**Kurali and Ropar.** The earlier finding holds, and more firmly, because the far rows are gone (0 of 100 rows over 50 km, against 35 of 60 and 56 of 60 before). Union of all 148 listings in all 28 lists:

| | Kurali | Ropar |
|---|---|---|
| Nearest tank-category or tank-named listing | 11.1 km ("Water tank cleaning", Guru Teg Bahadur Nagar, Kharar, no reviews) | 26.2 km (same listing) |
| Next | 11.9 km, 12.5 km | 26.3 km, 27.8 km |
| Nearest with reviews, Water Tank Cleaners | Wazara 13.1 km | Wazara 27.8 km |
| Any listing within 5 km | Punjab Water Solutions, water treatment plant, 2.0 km | None |
| Tank listings within 10 km | 0 | 0 |

So the claim stands. Tighten the wording: about 11 km and 26 km for any listing, about 13 km and 28 km for a reviewed one, which is what the notes (12 and 26) and report (13 and 28) were each measuring.

Limits. Only 2 queries per town here, bare terms with no town name and no Hindi; the earlier town-name queries were not repeated. Lists cap at 50. A service-area firm with hidden address may have a pin elsewhere, so a Tricity pin does not prove where it works. It says nothing about unlisted firms. Earlier notes named Big State, Universal water tank cleaner's and North clean service as possible Ropar servers: this run does not test that.

**09 finding 2, "Results are distance-led": wrong.** Spearman of rank against distance over each list's top 20 runs from -0.40 to 0.75 and is near zero on most bare Tricity lists (Chandigarh wtc 0.10, Mohali wtc 0.12, Panchkula wtc 0.08, Zirakpur wtc -0.06). Panchkula: a firm 21.6 km away ranks above 13 tank listings within 5 km. Dera Bassi: first place from 24.8 km though Welco is 15.3 km with four times the reviews. The earlier report's "Ranks do not simply follow distance" is the right line. 99 decision 1, "Google shows competitors by distance from the searcher", should be softened to match. Prominence is doing much of the work, and the device dot rules out stale location as the cause.

09 top-10 table: holds, except two listings named "Water tank cleaning" are shown separately, correctly (17 + 12 = 29 by name).

## 10. Claims overturned or weakened, and 99 against its raw

Earlier reports:

- Round one "Busy Bucket leads organic search among real businesses": holds by count, weak on quality. Never rank 1 on 61 pages; safaiwale.in has 18 top-3 to its 11.
- Recheck "Fixomes only": weakened (§6).
- Recheck "the Meta field may be just two operators": weakened (§7).
- Recheck "Only two sized cards", "no switcher": weakened (§8).
- Recheck "Mumbai firms are an IP artefact": supported. No Mumbai-area row in any of the 25 town lists; bare lists clean; Hindi lists now fill with Delhi NCR firms, matching this connection's region.
- Recheck Dera Bassi and New Chandigarh leaders: replaced (§9).
- Recheck Kurali 35 of 60 and Ropar 56 of 60 polluted: now 0. The "usable only with town name" caveat can go.

99-handoff:

| Claim | Verdict |
|---|---|
| #1 No Google or Justdial listing | Holds on captures; Justdial is transcribed top 10; IndiaMART profile and a Kanpur "Govind Galaxy" not mentioned |
| #2 Ranks 3, 5, 1 | True but selective; 2 brand queries absent; rank 3 was a Mohali page |
| #3 Overview 005 correct | Holds |
| #4 53% of 467, IndiaMART 55 | 47% of 521 with social, or 53% without; IndiaMART 58 |
| #5, #6 | Hold |
| #7 UC | Holds |
| #8 ₹399 live; GLF most active | Holds. "Across the Tricity" is ad text, targeting not captured |
| #9 No band reaches 5 | Holds |
| #10 Hindi nearly absent | Partly. CleanerKart has a toggle, hi-IN hreflang and a Hinglish page ranking on 030, 036 and 040. Other Hindi titles in SERPs carry Google's "Translated" or "Translate this page" marks, so the rest holds |
| "Welco ... Still the highest count" | Wrong. Busy Bucket Services 4.7 (2,174) in Mohali outranks it (category Cleaning Services). True only among Water Tank Cleaners in the Tricity |
| "Darshan Singh, Bittu, Crystal Clean not on Justdial pages" | Wrong for Bittu: `dir-signed-out/jd-mohali.txt` line 187, Bittu Safety Tank Cleaning Services, 4.5, 171 ratings, Baltana (was 165). 11 repeats the error |
| "Unknown: Google ad text" | Wrong (§6) |
| A-One 662, Shree Balaji 471 | Hold (`jd-mohali.txt`). D K Dry Cleaning 191 rests on a transcription |
| Bing 117 of 210, 55% | Holds within definition; I get 115 with my list. Bing raw is a transcription |
| "Google footers ... check it for town comparisons" | Stored field is broken on 6 pages; true footer in text |
| Screenshots "the check" | Viewport only |
| Signed-in Andhra Pradesh, legal notice, 27 table | Cannot check: no raw for any signed-in Google page |
| Justdial real-browser town pages | Hand notes, not captures. Raw files for 4 towns are blank error pages |

Not raised by 99, worth a look: A-One's newest reviews include a US-style liner job ("20,000 gal") and a Udaipur hotel job, and one "Water tank cleaning" listing's review names a different team. These suggest recycled or mismatched reviews (`maps-places/06.json`, `08.json`). Sample is 5 per firm.

## Should not be committed

Read `make_lanes.py`, `lanes.json`, `pw_common.js`, `jobs.json`, and every script by text search.

**Coordinates: clean.** Nine points only, the same in all three files, to four decimals. Each is a town-centre pin: reverse geocodes are Sector 22 Chandigarh, Phase 3B-2 Mohali, Pancheel Park Sector 4 Panchkula, Pathran Wala Khoo Kharar. The Kharar point is already in the repo in `local-recheck/report.md` URLs. None looks like a home. 00 says the owner's real coordinates were supplied but not recorded, and no other coordinate exists in scripts or Markdown. No `lat,lng` pairs in any Markdown.

**IP address:** none in Markdown or `free/log.jsonl`. 00 names the ISP, AS number and Sonipat city, fine but unneeded.

**Signed-in account details:** no email, name or account ID in any Markdown. Only references: 17 (no Google Ads account on the signed-in login), 18 ("another account"), 27 (location). `D:\Programming\ct-docs\...` appears in 00 and PROGRESS. Harmless; drop if publishing.

**Remove or redact before commit:**

| File | Line | Issue |
|---|---|---|
| 10-review-themes.md | 24 | Excerpt names a woman owner by name |
| 10-review-themes.md | 63 | Excerpt names a woman owner by name |
| 10-review-themes.md | 70 | Excerpt names two workers by first name |
| 10-review-themes.md | throughout | 70 verbatim third-party reviews; "reviewer names were never collected" is true, but excerpts can still identify, for example a resident's colony in a Clean Today row |
| 19-ads.md | 37, 38 | Personal names of two individuals as Google advertisers; verified public data, but private people |
| 19-ads.md | table | [phone removed] is a mobile from an anonymous page, may be personal |
| 09-maps-by-town.md | details table | Listings that look residential with phones: House no.93, H.No 437, Flat No. 403, and an unreviewed Kharar listing's mobile |
| 27-serp-signed-in.md, 02 to 07 | | Listing names that are a person's name with a mobile, for example Darshan Singh Care. Business listings, so low risk |
| 02-serp-en.md | | Titles and snippets with raw mobiles ([phone removed], [phone removed]) |
| 11-justdial.md | | 10 phone numbers, likely Justdial routing, not personal |
| 07-ai-overviews.md | | 69 phone strings, repeated from listings. Also `gobindgalaxy@gmail.com` and the owner's number, public on the old site |

Also leave out `scripts/__pycache__/`, and do not commit `raw/` without review: it holds the same data at larger scale.

Recommendation: commit 10 only as theme counts plus paraphrase, keep `raw/` out of the repo, and strip phones from 02 to 09 unless a doc needs one.

## Could not check

- Signed-in Google (27): no raw exists.
- Bing beyond query 1: domain transcription only, no titles or positions proof.
- Justdial for Chandigarh, Panchkula, Zirakpur, Kharar and both brand searches: hand notes. Clean-window captures are blank.
- Whether Sponsored ads recur: 66 pages, one run, one time of day.
- Google ad targeting and any tile past the first four in Transparency.
- Meta delivery regions.
- Whether AR and Good Life Future have a business link.
- Whether "Clean Tank", Maloya Colony or "Govind Galaxy", Kanpur is the firm's.
- Which GSTIN is real. Settled 3 Nov 2026: `09ALFPS1473F5ZU` (owner).
- Whether any price includes GST.
- Whether Fixomes still shows ₹499 in a place this capture missed; images were not checked.
- 25 tender rows, 21 trends, 26 autocomplete and 12 to 13 directory rows were not recomputed in depth. The IndiaMART ₹0.60 rows for Fixomes and Aaa were seen in raw; the ₹0.20 Panchkula row's price and seller are present, its "Hospital" label was not traced.
- 10 theme counts were not recomputed.
