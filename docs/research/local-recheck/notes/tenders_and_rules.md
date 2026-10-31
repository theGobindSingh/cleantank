# Tricity tenders, schedules of rates, GST and tank-cleaning rules: real-browser recheck

Research date: 31 Oct 2026, in an isolated local Chromium (en-IN, Asia/Kolkata), with at least 4 seconds between loads. No login, no CAPTCHA solving, no retries after a block. Tags: **[Estimate]** buyer's estimate or schedule rate, **[Quoted]** vendor listing, **[Awarded]** contract or L1 result, **[Calc]** my arithmetic. No per-litre figure appears below for any Tricity job, because no Tricity document read states capacity.

## What was reachable, and what earlier notes got wrong or missed

### Takeaway
The NIC portals (CPPP, Chandigarh, Punjab) put a CAPTCHA on every list and search page, so they stay closed. The real gains came from elsewhere: Panjab University's public tender archive, NABI's published notice and BOQ, Punjab PWD's relocated CSR-2020, GeM bid PDFs, and official SAC and rate texts.

### Cited Findings

**Access log**
| Site | Result on 31 Oct 2026 |
|---|---|
| [etenders.chd.nic.in](https://etenders.chd.nic.in/nicgep/app), [eproc.punjab.gov.in](https://eproc.punjab.gov.in/nicgep/app) | Home page opens. Search, Active Tenders, Results of Tenders, Tenders in Archive, Tender Status and Tenders by Organisation all carry a CAPTCHA image and field. Stopped there |
| [eprocure.gov.in](https://eprocure.gov.in/eprocure/app) | Active Tenders and Results of Tenders carry a CAPTCHA. Stopped. Older `/cppp/latestactivetendersnew` and `/cppp/resultoftendersnew` paths return 404 |
| [GePNIC MIS reports](https://gepnicreports.gov.in/eprocreports/chd/) | Redirects to login. Stopped |
| [GeM all-bids](https://bidplus.gem.gov.in/all-bids) | Public, no CAPTCHA, keyword and consignee-state search work. Bid PDFs at `showbidDocument/<id>` download without login. The one result URL tried, `bidding/bid/getBidResultView/9812373`, redirected to the GeM home page, so no award price was seen |
| [tenders.puchd.ac.in](https://tenders.puchd.ac.in/) | Full public archive back to about 2011, with PDFs |
| [nabi.res.in/site/tender](https://nabi.res.in/site/tender) | Notice and BOQ published openly |
| [pwd.punjab.gov.in/CSR](https://pwd.punjab.gov.in/CSR) | CSR-2020 and 14 correction slips open. The old `pwdpunjab.gov.in` host still does not resolve |
| [cbic-gst.gov.in](https://cbic-gst.gov.in/) | Opens now. Its [rates page](https://cbic-gst.gov.in/gst-goods-services-rates.html) only sends you elsewhere, but PDFs open |
| [tenders.infralens.in](https://tenders.infralens.in/tender/annual-rate-contract-for-water-tank-cleaning-of-hbchrc-2026-tmc-911111-1) | Cloudflare 403. Stopped |
| [India Code](https://www.indiacode.nic.in/handle/123456789/10540?locale=en) | Access Denied 403. Stopped |
| publicservicesmap.in, mcmohali.gov.in, pwdpunjab.gov.in, tmc.gov.in (guessed path) | Did not resolve |
| mcmohali.org/tenders, ISB and IISER `/tenders`, sasnagar.nic.in guessed order paths | 404. These were guessed URLs, so they prove nothing about the content |

**Corrections to the earlier notes and report**
- Report says no tender surfaced for Panjab University: wrong. PU has tendered this work repeatedly since 2014, see below — [PU archive](https://tenders.puchd.ac.in/)
- Earlier note could not check Punjab PWD CSR-2020: now read, and it has no tank-cleaning item — [CSR-2020](https://pwd.punjab.gov.in/UploadDocs/CSR%202020/csr2020.pdf)
- Earlier inference that NABI was "probably near ₹5.7 lakh": confirmed at ₹5,70,896 — [NABI NIT](https://nabi.res.in/backend/web/img/tenders/tenders-619-Tendernotice_110526.pdf)
- Earlier note said GeM bid details were unreachable: bid PDFs are public — [example](https://bidplus.gem.gov.in/showbidDocument/9812373)
- The 2024 Mohali order, "status unchecked" in the report: see the last section.

**Re-confirmed in the browser**
- CCET award: L1 M/s Dinesh Pandey ₹2,63,738, L2 M/S Kite Elevators ₹3,16,973 "Rejected", 2 bids, result 28 Aug 2026, ID 2026_CHD_94014_1, ref PH3/2026/323, EMD ₹6,504 — [TenderShark](https://www.tendershark.com/details/chandigarh-tender/administration/3292226b-dd9b-47f4-8242-d44ef3b442d1)
- Jandpur raw water tank ₹3.83 lakh, closes 4 Nov 2026 — [TenderDetail](https://www.tenderdetail.com/Indian-Tenders/TenderNotice/58245353/23ea1004201e3eab6379b3bfb4d7c33f); BSNL Jalandhar ₹25,339 and Court Complex Bhulath ₹45,000 — [TenderDetail Punjab list](https://www.tenderdetail.com/State-tenders/punjab-tenders/cleaning-of-water-tank-tenders)
- MES 3 BRD: 2026_MES_793307_1, ₹35 lakh composite, EMD ₹70,000, closes 31 Oct 2026 — [TenderShark](https://www.tendershark.com/details/chandigarh-tender/engineer-in-chief-branch-military-engineer-services/d20bc2ff-7713-49a0-8c44-de03d12dce26)
- CUP Bathinda BOQ read directly: 4,836.14 sqm at ₹82.55, 43,600 L at ₹0.48, 2,62,000 L at ₹0.35, total ₹5,11,851.36 — [CUP](https://cup.edu.in/sites/default/files/NITWTC.pdf)
- DSR 2021 item 14.78 at ₹71.30 per sqm and item 14.75A's ₹0.10/L deduction read directly — [DSR 2021 Vol II](https://cpmgsupune.in/wp-content/uploads/2025/05/DSR2021-Vol-II.pdf)

### Inferences
- Without a person solving the CAPTCHA, NIC award pages stay closed to any honest automated check. Aggregators and institutes' own sites are the practical route.

### Gaps
- IIT Delhi, IIM Lucknow, ACTREC, BHEL, MAKAUT and the other out-of-region documents in the earlier notes were not re-fetched.
- HBCHRC's ₹2,65,274 stays unconfirmed: the TenderDetail page no longer showed it and infralens blocked.
- The earlier leads on the UT State Guest House (about ₹74,725) and MCPH Sub Division 16 reservoirs (about ₹2.43 lakh) did not appear in the listing pages read. A search summary on TenderShark also named the guest house as closing 29 Sep 2026, but I never opened that page.

## Tender lists: who buys tank cleaning in the Tricity and Punjab

### Takeaway
Panjab University, NABI, the Chandigarh Public Health divisions, MC Chandigarh and IISER Mohali all buy this work in public. Panjab University is the largest repeat buyer found, at ₹3.4 lakh for underground tanks plus ₹4.75 lakh for overhead tanks in houses in 2024. No tank tender turned up for PEC, GMCH-32, GMADA, PGIMER, NIPER, CHB, ISB or MC Mohali.

### Cited Findings

**Panjab University, Construction Office (Mtc), all [Estimate], no capacity stated**
| Advertised | Work | Estimate | EMD | Time |
|---|---|---|---|---|
| [29 Oct 2024](https://tenders.puchd.ac.in/tenders/2024/20241029105614-cleaningofundergroundwatertanksofv.pdf) | Underground tanks, Campus Sectors 14 and 25 | ₹3,40,000 | ₹6,800 | 1 month |
| [29 Oct 2024](https://tenders.puchd.ac.in/tenders/2024/20241029105356-cleanignofwatertanks-houses.pdf) | Overhead tanks of various houses, Sector 14 | ₹4,75,000 | ₹9,600 | 2 months |
| [23 Sep 2024](https://tenders.puchd.ac.in/tenders/2024/20240923130240-cleaningofundergroundwatertanksofv.pdf) | Same underground work | ₹3,40,000 | ₹6,800 | 1 month |
| [23 Sep 2024](https://tenders.puchd.ac.in/tenders/2024/20240923125515-cleanignofwatertanks-houses.pdf) | Same overhead work | ₹4,75,000 | ₹9,600 | 2 months |
| [12 Aug 2024, scan](https://tenders.puchd.ac.in/tenders/2024/20240812141322-anyscanner08122024.pdf) | Same overhead work | ₹4,75,000 | ₹9,600 | 2 months |
| [6 Aug 2024](https://tenders.puchd.ac.in/tenders/2024/20240806163953-cleaningofundergroundwatertanksofv.pdf) | Same underground work | ₹3,40,000 | ₹6,800 | 1 month |
| [5 Jun 2024](https://tenders.puchd.ac.in/tenders/2024/20240605162544-cleaningofugwt.pdf) | Same underground work | ₹3,40,000 | ₹6,800 | 1 month |
| [Feb 2020](https://tenders.puchd.ac.in/tenders/2020/20200203144422-cleaningofoverheadwatertanks-hoste.pdf) | Cleaning and treatment, overhead tanks, hostels | ₹4,97,988 | ₹10,000 | 2 months |
| [Dec 2019](https://tenders.puchd.ac.in/tenders/2019/20191119160253-cleaningofoverheadwatertanks-depart.pdf) | Cleaning and treatment, overhead tanks, departments | ₹4,97,988 | ₹10,000 | See notice |
| [Nov 2018](https://tenders.puchd.ac.in/tenders/2018/20181127095335-cleaningofundergroundwatertanks.pdf) | Underground tank, main pump house | ₹93,852 | Nil | 30 days |
| [Sep 2018](https://tenders.puchd.ac.in/tenders/2018/20180907130031-cleaningofoverheadwatertanks.pdf) | Overhead tanks, Sectors 14 and 25 | ₹4,87,800 | ₹9,756 | 1 month |
| [Mar 2014](https://tenders.puchd.ac.in/tenders/2014/20140325100629-cleaning-of-water-tanks,brc-fabric-tf.pdf) | Tanks plus BRC fabric grill, teachers' flats | ₹3,80,000 | ₹7,000 | 2 months |

- PU terms in 2024: percentage-rate bid; contractors "on the approved list of P.W.D. Building and Roads Branch/Central P.W.D. M.E.S. Boards, Corporation, HUDA, PUDA Institutions, C.H.B."; three similar works at 40%, two at 60% or one at 80% in seven years; GST and PAN copies; no-blacklisting affidavit; ₹50 tender form; physical submission — [PU NIT](https://tenders.puchd.ac.in/tenders/2024/20241029105614-cleaningofundergroundwatertanksofv.pdf)
- No tank-cleaning tender appears on the PU list after Oct 2024 — [PU archive](https://tenders.puchd.ac.in/). The PU quotations list shows only tank repair and installation — [PU quotations](https://tenders.puchd.ac.in/quotations.php)

**NABI Mohali, NABI/ENGG/07(121)/2025-26, read from the buyer's own files**
- ₹5,70,896 "inclusive of taxes & labour cess", for 3 years, [Estimate]; item-rate e-tender, EMD ₹11,418, closed 11 May 2026 — [NIT](https://nabi.res.in/backend/web/img/tenders/tenders-619-Tendernotice_110526.pdf)
- BOQ: one item, quantity 12 nos, unit rate left to the bidder. Rates are "frozen for a period of 03 years, during which the tanks shall be cleaned a total of 12 times". Bidders must check tank quantity themselves, and no extra is paid for any tank on campus — [BOQ](https://nabi.res.in/backend/web/img/tenders/tenders-570-BOQ_482210%20-110526.xls)
- That is about ₹47,575 per whole-campus clean, inclusive of tax, cleaned quarterly [Calc]
- The method copies DSR 14.78 and adds PVC tanks and scaffolding: pump out, wire brush and pressure wash, liquid chlorine, air-jet dry, UV — [BOQ](https://nabi.res.in/backend/web/img/tenders/tenders-570-BOQ_482210%20-110526.xls)
- Eligibility: three works at 40%, two at 60% or one at 80% in seven years in the Government sector; average turnover at least 30% of estimate; a text search found no ISO or NABL requirement — [NIT](https://nabi.res.in/backend/web/img/tenders/tenders-619-Tendernotice_110526.pdf)

**Other Tricity buyers**
| Buyer | Work | Figure | Date | Tag |
|---|---|---|---|---|
| [Chandigarh Admin Engineering, 2026_CHD_93525_1](https://tender18.com/tenders-details/15948422) and [_3](https://www.tender18.com/tenders-details/16331907) | Overhead PVC tanks and underground drinking water reservoir, Punjab and Haryana High Court, Sector 1 | "1L", EMD ₹2.01K | Published 24 Jun 2026, then 20 Jul 2026 | [Estimate], aggregator rounding |
| [IISER Mohali, 2026_IISRM_930532_1](https://www.tendershark.com/details/punjab-tender/indian-institute-of-science-education-and-research/1cdf9b1a-7c2d-411f-8562-ffb896a497d3) | Cleaning and servicing of STPs along with underground tanks, ref IISERM/EE/26-27/Tender-23(02) | ₹7.67 lakh, EMD ₹16,000, composite | Closes 31 Oct 2026 | [Estimate] |
| [CHB, GEM/2026/B/8184736](https://bidplus.gem.gov.in/showbidDocument/10062860) | Housekeeping for CHB office, Sector 9. The bid document has no tank wording | ₹90,91,620 incl. taxes | Oct 2026 | [Estimate], not tank work |

**Searched, nothing on tanks**
- PEC: 42 archive pages, only curing tanks for concrete — [PEC archive](https://pec.ac.in/tenders/archive)
- GMCH-32: up to 13 archive pages and the [tender and supply orders page](https://gmch.gov.in/public-forum/tendersupply-orders) — [GMCH archive](https://gmch.gov.in/tenders-archive)
- GMADA: 25 list pages — [GMADA tenders](https://gmada.gov.in/en/tenders)
- PGIMER: current list only, tank pedestals and a sump pump — [PGIMER list](https://pgimer.edu.in/PGIMER_PORTAL/PGIMERPORTAL/Tender/JSP/Tender_Catg_View.jsp?countt=0)
- NIPER: current page only — [NIPER tenders](https://www.niper.gov.in/tenders)
- CHB: latest list only — [CHB tenders](https://chbonline.in/tenders/)
- MC Chandigarh: its notice page lists no tank item, so its tank work appears only through the e-tender route — [MC notices](https://mcchandigarh.gov.in/nt.aspx)
- IIT Ropar: live list only, no tank item, closed list did not load — [IIT Ropar](https://www.iitrpr.ac.in/tenders)

**GeM**
- Full-text "water tank cleaning" returned 1,610 ongoing bids, 334 of them services, most unrelated, such as tankers and AC units — [GeM all-bids](https://bidplus.gem.gov.in/all-bids)
- By consignee state, GeM lists 329 ongoing bids for Chandigarh and 1,195 for Punjab, but titles are cut short. I matched 952 Chandigarh and Punjab bids against the tank titles from the keyword search and found no overlap — [GeM advance search](https://bidplus.gem.gov.in/advance-search)
- Real tank bids elsewhere, estimated value inclusive of all taxes, no capacity in the PDF [Estimate]: [KVS Raipur No. 2, GEM/2026/B/8220671](https://bidplus.gem.gov.in/showbidDocument/10104317) ₹2,00,000; [NLC Chennai office, 8186626](https://bidplus.gem.gov.in/showbidDocument/10065068) ₹5,61,328 biennial; [BHEL Noida township, 7966519](https://bidplus.gem.gov.in/showbidDocument/9812373) ₹7,81,896; [WCL Umrer, 7964169](https://bidplus.gem.gov.in/showbidDocument/9809578) ₹16,50,263; [IOCL Gujarat Refinery township, 8223499](https://bidplus.gem.gov.in/showbidDocument/10107582) ₹33,98,633.17

### Inferences
- PU advertised the same underground job four times and the same overhead job three times between June and October 2024, with estimates unchanged. That suggests bids failed or were rejected, or no one qualified. No document says why. It is worth asking the Executive Engineer-II's office in person.
- PU's approved-list rule matters. BSNL enlistment is not on it, and the firm's listed registrations in the earlier notes do not include those bodies. Unless "Institutions" is read widely, Clean Tank may need PWD, CPWD, MES or CHB enlistment to bid there. The owner should check.
- PU's 2024 job spend, ₹8.15 lakh if both were awarded at estimate [Calc], makes it a bigger Tricity account than any other single campus found, though it may be a one-off cycle.
- NABI's ₹47,575 per clean is a useful Tricity benchmark for a research campus on a quarterly plan, though without capacity it cannot be turned into a rate per litre.

### Gaps
- No PU award, winner, tank count or capacity is public. The NIT says details can be seen in the office.
- No NABI winner found. No capacity in NIT or BOQ.
- MC Mohali and Punjab WSS tenders sit behind the eproc.punjab CAPTCHA. No MC Mohali tank tender surfaced in any search, and ISB's procurement page was not found.
- GeM's keyword walk covered four queries for ongoing bids and only the first 50 pages of two "Bid Awarded" queries, so a Tricity GeM tank bid could have been missed. The state walk was capped at 80 pages for Punjab.

## Awarded rates, per-litre or per-sqm figures, winners

### Takeaway
CCET Chandigarh remains the only Tricity award with a named winner and price. No Tricity or Punjab per-litre or per-sqm award exists in anything reachable, and no public award-of-contract page was found outside the CAPTCHA.

### Cited Findings
- CCET: estimate ₹3,25,201 per the earlier notes, shown as ₹3.25 L, L1 ₹2,63,738 [Awarded], 18.9% below estimate [Calc] — [TenderShark](https://www.tendershark.com/details/chandigarh-tender/administration/3292226b-dd9b-47f4-8242-d44ef3b442d1)
- TenderShark shows a result panel with L1 and L2 names without login, though the full table sits behind "Login to view". Other aggregator pages opened showed no result: [NABI](https://www.tendershark.com/details/punjab-tender/national-agri-food-biotechnology-institute/59d69b8f-8b4b-4213-a5ae-8eea6ff108b3)
- Nearest per-unit estimates remain CUP at ₹82.55/sqm and ₹0.48 and ₹0.35/L [Estimate] — [CUP](https://cup.edu.in/sites/default/files/NITWTC.pdf)

### Inferences
- GeM bids with an award status exist, but the price is not on the bid PDF. Expect a seller or buyer view, or the CAPTCHA pages, to be the only route to award prices.

### Gaps
- Results of Tenders on all three NIC portals needs a human to pass the CAPTCHA. A person searching "tank" there for CHD and Punjab would likely close this gap in minutes.

## Punjab PWD CSR and CPWD DSR

### Takeaway
Punjab's CSR-2020 has no item for cleaning a water tank, so Punjab public estimates must borrow from DSR or use non-schedule rates. DSR 2023 with its correction slip is the latest edition I can evidence, and I found no DSR 2025 or 2026.

### Cited Findings
- CSR-2020, 834 pages, fourth edition, issued by Chief Engineer (HQ), Punjab PWD (B&R). Text search found 61 "clean" and 46 "tank" hits and no item that cleans a water tank — [CSR-2020](https://pwd.punjab.gov.in/UploadDocs/CSR%202020/csr2020.pdf)
- Nearest items: disinfecting water mains with bleaching powder at 0.5 gm per litre, repeated three times, with a sample test, p. 553 of the PDF; inside painting of steel tanks; HDPE tank supply per litre — [CSR-2020](https://pwd.punjab.gov.in/UploadDocs/CSR%202020/csr2020.pdf)
- Of the 14 correction slips, AC5, AC6, AC12 and AC14 hold enough text to search, and none mentions a tank. The other ten are scans without text — [slip index](https://pwd.punjab.gov.in/CSR)
- CPWD's publications page, as served, lists civil DSR volumes to 2018 and a Hindi DSR file labelled 2022; 2021 and 2023 are not on it — [CPWD publications](https://cpwd.gov.in/Documents/cpwd_publication.aspx)
- CUP's July 2026 estimate is "Based on DSR-2023 and Market Rates", remark "14.78 CS1" — [CUP](https://cup.edu.in/sites/default/files/NITWTC.pdf)
- DSR 2021: ₹0.40/L up to 2,000 L per earlier notes and ₹71.30/sqm confirmed — [DSR 2021 Vol II](https://cpmgsupune.in/wp-content/uploads/2025/05/DSR2021-Vol-II.pdf)

### Inferences
- Punjab Government buyers using CSR cannot price this from their own book. That may be why Rupnagar WSS and Bhulath use small lump estimates, and why CUP and NABI cite or copy DSR wording.

### Gaps
- Ten CSR slips were not machine-readable, so a later addition cannot be ruled out. OCR was not available here.
- DSR 2023's ₹84.85 was not re-read directly, and CUP's ₹82.55 against it stays unexplained, as does its "13.62.1" reference.

## Society, hotel and hospital rates

### Takeaway
Still nothing. No Tricity RWA, society, hotel or hospital rate or AMC is public in anything reachable. The only number with a Tricity label is a templated national vendor range.

### Cited Findings
- KPS Zirakpur page: individual building ₹6,000 to ₹15,000 per year, housing society ₹15,000 to ₹50,000, commercial or institutional ₹30,000 to ₹1,00,000 [Quoted] — [KPS Zirakpur](https://kps.co.in/water-tank-cleaning-amc/chandigarh/zirakpur). Same numbers as its Gurgaon, Pune and Mumbai pages in the earlier notes.
- A Bengaluru vendor says AMC is about 25 to 30% cheaper per visit than ad hoc, with a society tank every 3 to 4 months [Quoted], search summary only, not opened — [Aquashield](https://aquashield-cleaners-cmo6o26.pages.dev/)

### Inferences
- The 12 cleans in 3 years at NABI, and two to three a year in the earlier sample, are the only hard frequency data near a society scale. A society quote would be better evidence than anything public.

### Gaps
- Three searches on RWA minutes, Facebook groups, ApnaComplex, MyGate and NoBrokerHood returned no thread or rate. Those sites and Facebook groups were not browsed, since they need login. Real figures exist only as private quotes.

## GST: official source for SAC, rate and exemptions

### Takeaway
SAC 998534 is confirmed from official sources, and 18% stands via heading 9985(iii). Three Nil-rate entries are confirmed on official texts, though Entry 3 has since been narrowed.

### Cited Findings
- SAC 998534, "Specialised cleaning services for reservoirs and tanks", row 424 of the Scheme of Classification of Services — [CBIC annexure](https://cbic-gst.gov.in/hindi/pdf/central-tax-rate/Notification11-CGST-Annexure.pdf); also in the GST portal's master, sheet SAC_MSTR — [HSN_SAC.xlsx](https://tutorial.gst.gov.in/downloads/HSN_SAC.xlsx)
- Heading 9985 "(iii) Support services other than (i) and (ii) above", 9% CGST, so 18% with SGST or UTGST — [GST Council consolidated text to 1 Apr 2019](https://www.gstcouncil.gov.in/sites/default/files/2024-02/11-rate_notification-cgst-01.04.2019.pdf)
- Notification 15/2025-CT(R) of the September 2025 revision: no "9985" string in the extracted text, while 9988 and 9997 appear — [gazette copy](https://bcasonline.org/wp-content/uploads/2025/09/No.15-2025-Central-Tax-Rate.pdf)
- 12/2017 Entry 3 as first issued: pure services to Central or State Government, UT, local authority or Governmental authority for Article 243G or 243W functions, Nil — [GST Council](https://gstcouncil.gov.in/sites/default/files/2024-05/download_6_0.pdf). "Governmental authority" was later removed per earlier notes, on a secondary source — [TaxGuru](https://taxguru.in/goods-and-service-tax/pure-services-gst-detailed-analysis.html)
- Entry 3B: services to a Governmental Authority by way of water supply, public health, sanitation conservancy, solid waste management, slum improvement, Nil — [13/2023-CT(R)](https://gstcouncil.gov.in/sites/default/files/2024-05/13-2023-ctr-eng.pdf)
- Entry 66(b)(iii): "security or cleaning or house-keeping services performed in such educational institution", up to higher secondary — [12/2017](https://gstcouncil.gov.in/sites/default/files/2024-05/download_6_0.pdf)
- Notification 16/2025 has no "3B" or "Governmental Authority" string in the extracted text — [gazette copy](https://bcasonline.org/wp-content/uploads/2025/09/No.16-2025-Central-Tax-Rate.pdf)

### Inferences
- The earlier GST treatment holds. NABI's BOQ prices "Inclusive of GST", matching the tender practice already noted.

### Gaps
- I could not reach a post-2019 official consolidation of 11/2017 or 12/2017. [taxinformation.cbic.gov.in](https://taxinformation.cbic.gov.in/content-page/explore-notification) loads, but its notification browser did not show results. The [GST Council list](https://www.gstcouncil.gov.in/cgst-rate-notification) as served stopped at 08/2025. The two 2025 PDFs are mirrors, not official hosts.
- Those string tests on gazette PDFs are weaker than reading a consolidated table. A CA should confirm before any Nil claim.

## Rules on periodic tank cleaning, including the 2024 cholera order

### Takeaway
The July 2024 Mohali order was a temporary emergency order and has lapsed by law; nothing replaced it that I can find. No standing Chandigarh, Punjab or Mohali rule sets a cleaning interval. FSSAI's "periodically, with a register" remains the only binding text read, and only for food businesses.

### Cited Findings
- Mohali DM Aashika Jain directed strict compliance with preventive orders under section 163(1) BNSS, which "clearly stated regular cleaning of water storage tanks of houses, rented accommodations". Two PG owners got an FIR under section 223 BNS on 27 Jul 2024, and all owners were told to clean underground tanks at once — [Tribune, 27 Jul 2024](https://www.tribuneindia.com/news/chandigarh/amid-cholera-outbreak-in-mohalis-kumbhra-fir-registered-against-2-pg-owners-for-violating-orders-643871)
- Tribune adds that many PGs had underground tanks "not been cleaned even once after construction" — same source
- Same month, Mohali DC told DEOs to ensure school water tanks "were cleaned in time" — [Tribune, 19 Jul 2024](https://www.tribuneindia.com/news/chandigarh/gear-up-to-tackle-diarrhoea-cholera-outbreak-mohali-dc-641101). People in the affected area were asked to clean underground tanks and use chlorine tablets — [Babushahi, 23 Jul 2024](https://babushahi.com/regional-news.php?id=188238)
- BNSS section 163(4): "No order under this section shall remain in force for more than two months from the making thereof", with a State extension by notification of up to six further months per the proviso — [text reproduced by Vidhi Judicial](https://vidhijudicial.com/section-163-of-the-bharatiya-nagarik-suraksha-sanhita,-2023.html)
- A standing power exists in outbreaks only. Punjab Municipal Corporation Act 1976, s. 310: if tank water may spread disease the Commissioner can prohibit its use or require steps by the owner, and in an outbreak the Health Officer may inspect and disinfect any tank without notice — [mirror on amritsarcorp.com](https://www.amritsarcorp.com/punjact/act14.htm). The bye-law list on the Act's bye-law page (s. 399) covers "wells, tanks and cisterns" for drinking water and "maintenance of pipes, cisterns" — [same mirror](https://amritsarcorp.com/punjact/act19.htm)
- FSSAI Schedule 4, Part II, 4.1.3: "Water storage tanks shall be cleaned periodically and records of the same shall be maintained in a register" — [FSSAI compendium, 2021](https://fssai.gov.in/docs/food-law/regulations/Compendium_Licensing_Regulations_04_08_2021.pdf). A 2022 direction reworded this as storage "cleaned periodically... Records of the same shall be maintained", with enforcement only after final Gazette notification — [FSSAI direction](https://www.fssai.gov.in/upload/advisories/2022/12/638edf17bdbb2Direction_Licensing_28_11_2022_.pdf)

### Inferences
- If the Mohali order was made around July 2024, it ended by about September 2024, or by about March 2025 at the very latest if Punjab extended it. No extension was found. So copy must not say it is in force. It can be cited as history: "in 2024, Mohali's District Magistrate ordered regular cleaning during the cholera outbreak".
- That is still the strongest local sales fact found: a real enforcement case, with an FIR, against landlords over unclean tanks.
- PG, hostel and rented-accommodation owners are the audience that case speaks to.

### Gaps
- The order's own text, number and date were not found. Only press reports were read, and sasnagar.nic.in's order pages were not located.
- Whether any bye-law was made under s. 399, and how the Act applies in Chandigarh, was not checked. The Chandigarh Water Supply Bye-Law 2011 sits on India Code, which refused access.
- NBC 2016, the CPHEEO manual, NABH text and Punjab building rules were not read. No 2025 or 2026 order surfaced in three searches, but search coverage of district orders is thin.
