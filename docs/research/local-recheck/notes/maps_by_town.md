# Google Maps competitor recheck by town, Chandigarh Tricity (2026-10-31)

**How this was gathered.** All observations are dated 2026-10-31, between about 17:10 and 18:30 IST (a Saturday). Each town ran in its own Chromium context with that town's geolocation, locale en-IN and timezone Asia/Kolkata, using Maps URLs with the town's coordinates at zoom 13. **The server IP stayed in Mumbai; only the browser location was Tricity.** No sign-in, stealth tooling, proxy or changed user agent was used. Maps showed no block or CAPTCHA on any load, so nothing had to be stopped. Scripts waited at least 4.2 seconds between page loads, but the first town sweep and the by-name run overlapped for about 3 minutes, so loads from the two scripts together may have come closer than 4 seconds apart. Earlier findings means `docs/research/competitors-prices/report.md` and `docs/research/competitors-prices/notes/tricity_competitors.md`.

Load counts: 4 probe loads, 54 town and query searches, 20 by-name searches, 24 follow-up searches, 91 listing pages, 2 Welco Business Profile pages. Raw data is in `/tmp/claude-1001/-home-ubuntu-Programming-ct/afd18c61-4948-46cb-8622-d934b17d163c/scratchpad/maps/out/` (`sweep.jsonl`, `byname.jsonl`, `followup.jsonl`, `followup2.jsonl`, `places.jsonl`), which is temporary.

## Who ranks in the top 10, per town and query?

### Takeaway
Five towns (Chandigarh, Mohali, Panchkula, Zirakpur, Kharar) gave clean local lists from a browser set to the town. New Chandigarh and Dera Bassi were partly polluted, and Kurali and Ropar mostly so, by Mumbai firms that appear to follow the server IP. No result was marked Sponsored on any load, which changes the earlier finding about Welco.

### Cited Findings

**Reading the tables.** Each cell gives name, rating, then distance from the town's coordinates, which I computed from the listing's map pin. **[far]** means more than 50 km away, nearly always Navi Mumbai or Thane, with a few Delhi and one Uttar Pradesh. Column headers link to the exact search. Phone, category and hours are in the listing directory below, because they do not vary by query. No row in any table was Sponsored. Ratings and order were read from the list; each list showed 9 rows on load and 18 after one scroll. Hindi-query loads displayed categories in Hindi (वाटर टैंक क्लीनिंग सर्विस, सफाई वाला); the listings are the same.

#### Chandigarh (viewport 30.7333,76.7794,13z, loaded 17:22 to 17:24 IST, 2026-10-31)

| # | [water tank cleaning](https://www.google.com/maps/search/water+tank+cleaning/@30.7333,76.7794,13z?hl=en&gl=in) | [water tank cleaning near me](https://www.google.com/maps/search/water+tank+cleaning+near+me/@30.7333,76.7794,13z?hl=en&gl=in) | [tank cleaning service](https://www.google.com/maps/search/tank+cleaning+service/@30.7333,76.7794,13z?hl=en&gl=in) | [पानी की टंकी की सफाई](https://www.google.com/maps/search/%E0%A4%AA%E0%A4%BE%E0%A4%A8%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%9F%E0%A4%82%E0%A4%95%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%B8%E0%A4%AB%E0%A4%BE%E0%A4%88/@30.7333,76.7794,13z?hl=en&gl=in) | [pani ki tanki saaf](https://www.google.com/maps/search/pani+ki+tanki+saaf/@30.7333,76.7794,13z?hl=en&gl=in) | [society water tank cleaning](https://www.google.com/maps/search/society+water+tank+cleaning/@30.7333,76.7794,13z?hl=en&gl=in) |
|---|---|---|---|---|---|---|
| 1 | Shree Balaji Water Tank Cleaning 4.8 7.8 km | Welco Cleaning 5.0 8 km | Welco Cleaning 5.0 8 km | Shree Balaji Water Tank Cleaning 4.8 7.8 km | Shree Balaji Water Tank Cleaning 4.8 7.8 km | Welco Cleaning 5.0 8 km |
| 2 | Welco Cleaning 5.0 8 km | Shree Balaji Water Tank Cleaning 4.8 7.8 km | Shree Balaji Water Tank Cleaning 4.8 7.8 km | VK Water Tank Cleaner 5.0 9.2 km | Welco Cleaning 5.0 8 km | Shree Balaji Water Tank Cleaning 4.8 7.8 km |
| 3 | Watan Cleaning services 5.0 6 km | Watan Cleaning services 5.0 6 km | Watan Cleaning services 5.0 6 km | Solanki Water Tank Cleaner 4.9 9.1 km | Solanki Water Tank Cleaner 4.9 9.1 km | Tricity Water Tank Cleaning 4.9 5.2 km |
| 4 | Tricity Water Tank Cleaning 4.9 5.2 km | Tricity Water Tank Cleaning 4.9 5.2 km | Tricity Water Tank Cleaning 4.9 5.2 km | Watan Cleaning services 5.0 6 km | Watan Cleaning services 5.0 6 km | Axico Cleaning Services Water Tank… 5.0 8.1 km |
| 5 | Solanki Water Tank Cleaner 4.9 9.1 km | MK Services 4.9 9.1 km | Axico Cleaning Services Water Tank… 5.0 8.1 km | Tricity Water Tank Cleaning 4.9 5.2 km | VK Water Tank Cleaner 5.0 9.2 km | Watan Cleaning services 5.0 6 km |
| 6 | Axico Cleaning Services Water Tank… 5.0 8.1 km | Axico Cleaning Services Water Tank… 5.0 8.1 km | Star Cleaning Services 5.0 7.3 km | Axico Cleaning Services Water Tank… 5.0 8.1 km | Tricity Water Tank Cleaning 4.9 5.2 km | VK Water Tank Cleaner 5.0 9.2 km |
| 7 | VK Water Tank Cleaner 5.0 9.2 km | VK Water Tank Cleaner 5.0 9.2 km | Reyaan Services 5.0 2.5 km | Bijay Water Tank Cleaners 5.0 4.6 km | Ramesh kumar 5.0 2.9 km | Ramesh kumar 5.0 2.9 km |
| 8 | Tots Purahydro 5.0 7.2 km | Solanki Water Tank Cleaner 4.9 9.1 km | MK Services 4.9 9.1 km | Ket Water tank cleaning service 4.4 4.2 km | Bijay Water Tank Cleaners 5.0 4.6 km | Solanki Water Tank Cleaner 4.9 9.1 km |
| 9 | Reyaan Services 5.0 2.5 km | Star Cleaning Services 5.0 7.3 km | Solanki Water Tank Cleaner 4.9 9.1 km | Water tank cleaning 4.9 9 km | Axico Cleaning Services Water Tank… 5.0 8.1 km | Tots Purahydro 5.0 7.2 km |
| 10 | MK Services 4.9 9.1 km | Tots Purahydro 5.0 7.2 km | Weston Tank Cleaning 5.0 8.8 km | Reyaan Services 5.0 2.5 km | Santosh water tank cleaning 5.0 9 km | MK Services 4.9 9.1 km |

#### Mohali (viewport 30.7046,76.7179,13z, loaded 17:24 to 17:26 IST, 2026-10-31)

| # | [water tank cleaning](https://www.google.com/maps/search/water+tank+cleaning/@30.7046,76.7179,13z?hl=en&gl=in) | [water tank cleaning near me](https://www.google.com/maps/search/water+tank+cleaning+near+me/@30.7046,76.7179,13z?hl=en&gl=in) | [tank cleaning service](https://www.google.com/maps/search/tank+cleaning+service/@30.7046,76.7179,13z?hl=en&gl=in) | [पानी की टंकी की सफाई](https://www.google.com/maps/search/%E0%A4%AA%E0%A4%BE%E0%A4%A8%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%9F%E0%A4%82%E0%A4%95%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%B8%E0%A4%AB%E0%A4%BE%E0%A4%88/@30.7046,76.7179,13z?hl=en&gl=in) | [pani ki tanki saaf](https://www.google.com/maps/search/pani+ki+tanki+saaf/@30.7046,76.7179,13z?hl=en&gl=in) | [society water tank cleaning](https://www.google.com/maps/search/society+water+tank+cleaning/@30.7046,76.7179,13z?hl=en&gl=in) |
|---|---|---|---|---|---|---|
| 1 | A-One Cleaning Service 5.0 8 km | Welco Cleaning 5.0 2.8 km | Welco Cleaning 5.0 2.8 km | Shree Balaji Water Tank Cleaning 4.8 3.4 km | A-One Cleaning Service 5.0 8 km | Welco Cleaning 5.0 2.8 km |
| 2 | Shree Balaji Water Tank Cleaning 4.8 3.4 km | A-One Cleaning Service 5.0 8 km | A-One Cleaning Service 5.0 8 km | A-One Cleaning Service 5.0 8 km | Wazara Cleaning Services 5.0 6.6 km | A-One Cleaning Service 5.0 8 km |
| 3 | Welco Cleaning 5.0 2.8 km | Shree Balaji Water Tank Cleaning 4.8 3.4 km | Wazara Cleaning Services 5.0 6.6 km | Watan Cleaning services 5.0 4.9 km | Shree Balaji Water Tank Cleaning 4.8 3.4 km | Wazara Cleaning Services 5.0 6.6 km |
| 4 | Pure Shine Cleaning 4.9 5.7 km | Wazara Cleaning Services 5.0 6.6 km | Pure Shine Cleaning 4.9 5.7 km | Axico Cleaning Services Water Tank… 5.0 2.4 km | Clean Today 5.0 5.1 km | Shree Balaji Water Tank Cleaning 4.8 3.4 km |
| 5 | Wazara Cleaning Services 5.0 6.6 km | Pure Shine Cleaning 4.9 5.7 km | Shree Balaji Water Tank Cleaning 4.8 3.4 km | Bijay Water Tank Cleaners 5.0 2.1 km | Welco Cleaning 5.0 2.8 km | Axico Cleaning Services Water Tank… 5.0 2.4 km |
| 6 | Watan Cleaning services 5.0 4.9 km | Watan Cleaning services 5.0 4.9 km | Watan Cleaning services 5.0 4.9 km | Ket Water tank cleaning service 4.4 6 km | Watan Cleaning services 5.0 4.9 km | Clean Today 5.0 5.1 km |
| 7 | Clean Today 5.0 5.1 km | Axico Cleaning Services Water Tank… 5.0 2.4 km | B Two Cleaning Service 4.9 6.8 km | Water tank cleaning 4.9 2.8 km | Axico Cleaning Services Water Tank… 5.0 2.4 km | Watan Cleaning services 5.0 4.9 km |
| 8 | Axico Cleaning Services Water Tank… 5.0 2.4 km | B Two Cleaning Service 4.9 6.8 km | Clean Today 5.0 5.1 km | Brother Water Tank Cleaning 5.0 6.2 km | Ramesh kumar 5.0 8.3 km | Pure Shine Cleaning 4.9 5.7 km |
| 9 | B Two Cleaning Service 4.9 6.8 km | Clean Today 5.0 5.1 km | Axico Cleaning Services Water Tank… 5.0 2.4 km | Tricity Water Tank Cleaning 4.9 7.9 km | Bijay Water Tank Cleaners 5.0 2.1 km | B Two Cleaning Service 4.9 6.8 km |
| 10 | Tots Purahydro 5.0 3.8 km | Star Cleaning Services 5.0 5.2 km | Star Cleaning Services 5.0 5.2 km | Weston Tank Cleaning 5.0 2.3 km | Welco tank cleaning 5.0 5.8 km | Ramesh kumar 5.0 8.3 km |

#### Panchkula (viewport 30.6942,76.8606,13z, loaded 17:26 to 17:28 IST, 2026-10-31)

| # | [water tank cleaning](https://www.google.com/maps/search/water+tank+cleaning/@30.6942,76.8606,13z?hl=en&gl=in) | [water tank cleaning near me](https://www.google.com/maps/search/water+tank+cleaning+near+me/@30.6942,76.8606,13z?hl=en&gl=in) | [tank cleaning service](https://www.google.com/maps/search/tank+cleaning+service/@30.6942,76.8606,13z?hl=en&gl=in) | [पानी की टंकी की सफाई](https://www.google.com/maps/search/%E0%A4%AA%E0%A4%BE%E0%A4%A8%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%9F%E0%A4%82%E0%A4%95%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%B8%E0%A4%AB%E0%A4%BE%E0%A4%88/@30.6942,76.8606,13z?hl=en&gl=in) | [pani ki tanki saaf](https://www.google.com/maps/search/pani+ki+tanki+saaf/@30.6942,76.8606,13z?hl=en&gl=in) | [society water tank cleaning](https://www.google.com/maps/search/society+water+tank+cleaning/@30.6942,76.8606,13z?hl=en&gl=in) |
|---|---|---|---|---|---|---|
| 1 | Solanki Water Tank Cleaner 4.9 0.4 km | MK Services 4.9 0.4 km | City Care 5.0 0.5 km | VK Water Tank Cleaner 5.0 0.6 km | Solanki Water Tank Cleaner 4.9 0.4 km | City Care 5.0 0.5 km |
| 2 | City Care 5.0 0.5 km | City Care 5.0 0.5 km | MK Services 4.9 0.4 km | Solanki Water Tank Cleaner 4.9 0.4 km | VK Water Tank Cleaner 5.0 0.6 km | VK Water Tank Cleaner 5.0 0.6 km |
| 3 | VK Water Tank Cleaner 5.0 0.6 km | VK Water Tank Cleaner 5.0 0.6 km | Solanki Water Tank Cleaner 4.9 0.4 km | Shiv Water Tank Cleaning Services 4.5 3.9 km | Ramesh kumar 5.0 6 km | Shiv Water Tank Cleaning Services 4.5 3.9 km |
| 4 | MK Services 4.9 0.4 km | Solanki Water Tank Cleaner 4.9 0.4 km | VK Water Tank Cleaner 5.0 0.6 km | Brother Water Tank Cleaning 5.0 9 km | Santosh water tank cleaning 5.0 0.6 km | Solanki Water Tank Cleaner 4.9 0.4 km |
| 5 | Shiv Water Tank Cleaning Services 4.5 3.9 km | Santosh water tank cleaning 5.0 0.6 km | Ramesh kumar 5.0 6 km | Sk water tank cleaning service 5.0 0.4 km | Sai Tank Clean Services 5.0 **[far]** | Ramesh kumar 5.0 6 km |
| 6 | Ramesh kumar 5.0 6 km | Shiv Water Tank Cleaning Services 4.5 3.9 km | Shiv Water Tank Cleaning Services 4.5 3.9 km | CleanDin Water Tank Cleaning Servi… 4.3 1.8 km | Shiv Water Tank Cleaning Services 4.5 3.9 km | Santosh water tank cleaning 5.0 0.6 km |
| 7 | Santosh water tank cleaning 5.0 0.6 km | Sai Tank Clean Services 5.0 **[far]** | Santosh water tank cleaning 5.0 0.6 km | Pk tank cleaner 5.0 0.6 km | Sk water tank cleaning service 5.0 0.4 km | MK Services 4.9 0.4 km |
| 8 | Sk water tank cleaning service 5.0 0.4 km | Sk water tank cleaning service 5.0 0.4 km | Sk water tank cleaning service 5.0 0.4 km | Rehanshi water tank cleaning servi… 5.0 **[far]** | water tank clean (no rating) 3.2 km | Watan Cleaning services 5.0 9.6 km |
| 9 | Reyaan Services 5.0 10.9 km | Ramesh kumar 5.0 6 km | Reyaan Services 5.0 10.9 km | Bijay Water Tank Cleaners 5.0 12 km | Karan water tank sarvice 5.0 0.5 km | Sk water tank cleaning service 5.0 0.4 km |
| 10 | Brother Water Tank Cleaning 5.0 9 km | Brother Water Tank Cleaning 5.0 9 km | Watan Cleaning services 5.0 9.6 km | Ket Water tank cleaning service 4.4 13.1 km | Reyaan Services 5.0 10.9 km | Sai Tank Clean Services 5.0 **[far]** |

#### Zirakpur (viewport 30.6425,76.8173,13z, loaded 17:28 to 17:30 IST, 2026-10-31)

| # | [water tank cleaning](https://www.google.com/maps/search/water+tank+cleaning/@30.6425,76.8173,13z?hl=en&gl=in) | [water tank cleaning near me](https://www.google.com/maps/search/water+tank+cleaning+near+me/@30.6425,76.8173,13z?hl=en&gl=in) | [tank cleaning service](https://www.google.com/maps/search/tank+cleaning+service/@30.6425,76.8173,13z?hl=en&gl=in) | [पानी की टंकी की सफाई](https://www.google.com/maps/search/%E0%A4%AA%E0%A4%BE%E0%A4%A8%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%9F%E0%A4%82%E0%A4%95%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%B8%E0%A4%AB%E0%A4%BE%E0%A4%88/@30.6425,76.8173,13z?hl=en&gl=in) | [pani ki tanki saaf](https://www.google.com/maps/search/pani+ki+tanki+saaf/@30.6425,76.8173,13z?hl=en&gl=in) | [society water tank cleaning](https://www.google.com/maps/search/society+water+tank+cleaning/@30.6425,76.8173,13z?hl=en&gl=in) |
|---|---|---|---|---|---|---|
| 1 | Watan Cleaning services 5.0 6.9 km | Watan Cleaning services 5.0 6.9 km | Welco Cleaning 5.0 9.8 km | VK Water Tank Cleaner 5.0 6.6 km | Clean Today 5.0 8.2 km | Welco Cleaning 5.0 9.8 km |
| 2 | Clean Today 5.0 8.2 km | Welco Cleaning 5.0 9.8 km | Watan Cleaning services 5.0 6.9 km | Solanki Water Tank Cleaner 4.9 6.7 km | Solanki Water Tank Cleaner 4.9 6.7 km | Clean Today 5.0 8.2 km |
| 3 | Solanki Water Tank Cleaner 4.9 6.7 km | MK Services 4.9 6.8 km | B Two Cleaning Service 4.9 5.6 km | Watan Cleaning services 5.0 6.9 km | Watan Cleaning services 5.0 6.9 km | Watan Cleaning services 5.0 6.9 km |
| 4 | B Two Cleaning Service 4.9 5.6 km | B Two Cleaning Service 4.9 5.6 km | Clean Today 5.0 8.2 km | Shiv Water Tank Cleaning Services 4.5 4.9 km | VK Water Tank Cleaner 5.0 6.6 km | VK Water Tank Cleaner 5.0 6.6 km |
| 5 | VK Water Tank Cleaner 5.0 6.6 km | VK Water Tank Cleaner 5.0 6.6 km | MK Services 4.9 6.8 km | Brother Water Tank Cleaning 5.0 5.6 km | Welco Cleaning 5.0 9.8 km | Shiv Water Tank Cleaning Services 4.5 4.9 km |
| 6 | Tots Purahydro 5.0 8.2 km | Clean Today 5.0 8.2 km | Solanki Water Tank Cleaner 4.9 6.7 km | Axico Cleaning Services Water Tank… 5.0 10.6 km | Santosh water tank cleaning 5.0 6.5 km | B Two Cleaning Service 4.9 5.6 km |
| 7 | Welco Cleaning 5.0 9.8 km | Solanki Water Tank Cleaner 4.9 6.7 km | VK Water Tank Cleaner 5.0 6.6 km | Bijay Water Tank Cleaners 5.0 11.1 km | Brother Water Tank Cleaning 5.0 5.6 km | Solanki Water Tank Cleaner 4.9 6.7 km |
| 8 | MK Services 4.9 6.8 km | Tots Purahydro 5.0 8.2 km | Tots Purahydro 5.0 8.2 km | CleanDin Water Tank Cleaning Servi… 4.3 8.5 km | B Two Cleaning Service 4.9 5.6 km | Tots Purahydro 5.0 8.2 km |
| 9 | Shiv Water Tank Cleaning Services 4.5 4.9 km | Santosh water tank cleaning 5.0 6.5 km | Shiv Water Tank Cleaning Services 4.5 4.9 km | J.K Water Tank cleaning services 5.0 9.7 km | Sai Tank Clean Services 5.0 **[far]** | Axico Cleaning Services Water Tank… 5.0 10.6 km |
| 10 | City Care 5.0 6.6 km | Shiv Water Tank Cleaning Services 4.5 4.9 km | City Care 5.0 6.6 km | Shree Balaji Water Tank Cleaning 4.8 15 km | J.K Water Tank cleaning services 5.0 9.7 km | MK Services 4.9 6.8 km |

#### Kharar (viewport 30.7464,76.6456,13z, loaded 17:30 to 17:32 IST, 2026-10-31)

| # | [water tank cleaning](https://www.google.com/maps/search/water+tank+cleaning/@30.7464,76.6456,13z?hl=en&gl=in) | [water tank cleaning near me](https://www.google.com/maps/search/water+tank+cleaning+near+me/@30.7464,76.6456,13z?hl=en&gl=in) | [tank cleaning service](https://www.google.com/maps/search/tank+cleaning+service/@30.7464,76.6456,13z?hl=en&gl=in) | [पानी की टंकी की सफाई](https://www.google.com/maps/search/%E0%A4%AA%E0%A4%BE%E0%A4%A8%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%9F%E0%A4%82%E0%A4%95%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%B8%E0%A4%AB%E0%A4%BE%E0%A4%88/@30.7464,76.6456,13z?hl=en&gl=in) | [pani ki tanki saaf](https://www.google.com/maps/search/pani+ki+tanki+saaf/@30.7464,76.6456,13z?hl=en&gl=in) | [society water tank cleaning](https://www.google.com/maps/search/society+water+tank+cleaning/@30.7464,76.6456,13z?hl=en&gl=in) |
|---|---|---|---|---|---|---|
| 1 | A-One Cleaning Service 5.0 2.5 km | A-One Cleaning Service 5.0 2.5 km | A-One Cleaning Service 5.0 2.5 km | Shree Balaji Water Tank Cleaning 4.8 5.3 km | A-One Cleaning Service 5.0 2.5 km | A-One Cleaning Service 5.0 2.5 km |
| 2 | Shree Balaji Water Tank Cleaning 4.8 5.3 km | Shree Balaji Water Tank Cleaning 4.8 5.3 km | Wazara Cleaning Services 5.0 2 km | Bijay Water Tank Cleaners 5.0 9.4 km | Wazara Cleaning Services 5.0 2 km | Wazara Cleaning Services 5.0 2 km |
| 3 | Wazara Cleaning Services 5.0 2 km | Wazara Cleaning Services 5.0 2 km | Shree Balaji Water Tank Cleaning 4.8 5.3 km | Water tank cleaning 4.9 5.8 km | Shree Balaji Water Tank Cleaning 4.8 5.3 km | Shree Balaji Water Tank Cleaning 4.8 5.3 km |
| 4 | Star Cleaning Services 5.0 5.8 km | Star Cleaning Services 5.0 5.8 km | Star Cleaning Services 5.0 5.8 km | Axico Cleaning Services Water Tank… 5.0 9.8 km | Bijay Water Tank Cleaners 5.0 9.4 km | Axico Cleaning Services Water Tank… 5.0 9.8 km |
| 5 | Water tank cleaning 4.9 5.8 km | Welco Cleaning 5.0 10.5 km | Welco Cleaning 5.0 10.5 km | Ket Water tank cleaning service 4.4 9.3 km | Star Cleaning Services 5.0 5.8 km | Welco Cleaning 5.0 10.5 km |
| 6 | Welco Cleaning 5.0 10.5 km | Mr.Jet Watertank Cleaning Services. 5.0 **[far]** | Water tank cleaning 4.9 5.8 km | Tricity Water Tank Cleaning 4.9 10.1 km | Sai Tank Clean Services 5.0 **[far]** | Water tank cleaning 4.9 5.8 km |
| 7 | Crystal Clean India 4.4 9.1 km | Water tank cleaning 4.9 5.8 km | Busy Bucket Services 4.7 5.9 km | Weston Tank Cleaning 5.0 8.6 km | Axico Cleaning Services Water Tank… 5.0 9.8 km | Star Cleaning Services 5.0 5.8 km |
| 8 | Axico Cleaning Services Water Tank… 5.0 9.8 km | Sai Tank Clean Services 5.0 **[far]** | Weston Tank Cleaning 5.0 8.6 km | Life Line Services water tank Clea… 4.9 **[far]** | Water tank cleaning 4.9 5.8 km | Weston Tank Cleaning 5.0 8.6 km |
| 9 | Weston Tank Cleaning 5.0 8.6 km | Axico Cleaning Services Water Tank… 5.0 9.8 km | Crystal Clean India 4.4 9.1 km | Watan Cleaning services 5.0 13.2 km | Crystal Clean India 4.4 9.1 km | Tricity Water Tank Cleaning 4.9 10.1 km |
| 10 | Bijay Water Tank Cleaners 5.0 9.4 km | Crystal Clean India 4.4 9.1 km | Axico Cleaning Services Water Tank… 5.0 9.8 km | Rehanshi water tank cleaning servi… 5.0 **[far]** | Welco Cleaning 5.0 10.5 km | Sai Tank Clean Services 5.0 **[far]** |

#### New Chandigarh (viewport 30.8167,76.7333,13z, loaded 17:32 to 17:33 IST, 2026-10-31)

| # | [water tank cleaning](https://www.google.com/maps/search/water+tank+cleaning/@30.8167,76.7333,13z?hl=en&gl=in) | [water tank cleaning near me](https://www.google.com/maps/search/water+tank+cleaning+near+me/@30.8167,76.7333,13z?hl=en&gl=in) | [tank cleaning service](https://www.google.com/maps/search/tank+cleaning+service/@30.8167,76.7333,13z?hl=en&gl=in) | [पानी की टंकी की सफाई](https://www.google.com/maps/search/%E0%A4%AA%E0%A4%BE%E0%A4%A8%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%9F%E0%A4%82%E0%A4%95%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%B8%E0%A4%AB%E0%A4%BE%E0%A4%88/@30.8167,76.7333,13z?hl=en&gl=in) | [pani ki tanki saaf](https://www.google.com/maps/search/pani+ki+tanki+saaf/@30.8167,76.7333,13z?hl=en&gl=in) | [society water tank cleaning](https://www.google.com/maps/search/society+water+tank+cleaning/@30.8167,76.7333,13z?hl=en&gl=in) |
|---|---|---|---|---|---|---|
| 1 | Tricity Water Tank Cleaning 4.9 5.3 km | Tricity Water Tank Cleaning 4.9 5.3 km | Tricity Water Tank Cleaning 4.9 5.3 km | Tricity Water Tank Cleaning 4.9 5.3 km | Tricity Water Tank Cleaning 4.9 5.3 km | Tricity Water Tank Cleaning 4.9 5.3 km |
| 2 | East cleaning 5.0 5.1 km | Sai Tank Clean Services 5.0 **[far]** | East cleaning 5.0 5.1 km | Ket Water tank cleaning service 4.4 7 km | Wazara Cleaning Services 5.0 10.3 km | Wazara Cleaning Services 5.0 10.3 km |
| 3 | Shree Balaji Water Tank Cleaning 4.8 10.3 km | East cleaning 5.0 5.1 km | Wazara Cleaning Services 5.0 10.3 km | Shree Balaji Water Tank Cleaning 4.8 10.3 km | Sai Tank Clean Services 5.0 **[far]** | Sai Tank Clean Services 5.0 **[far]** |
| 4 | A-One Cleaning Service 5.0 13.7 km | Wazara Cleaning Services 5.0 10.3 km | Ro service Tank cleaning Tri-City 4.9 6.5 km | Life Line Services water tank Clea… 4.9 **[far]** | Shree Balaji Water Tank Cleaning 4.8 10.3 km | Shree Balaji Water Tank Cleaning 4.8 10.3 km |
| 5 | Ro service Tank cleaning Tri-City 4.9 6.5 km | Mr.Jet Watertank Cleaning Services. 5.0 **[far]** | Reyaan Services 5.0 7.8 km | Rehanshi water tank cleaning servi… 5.0 **[far]** | A-One Cleaning Service 5.0 13.7 km | Ket Water tank cleaning service 4.4 7 km |
| 6 | Wazara Cleaning Services 5.0 10.3 km | Star Cleaning Services 5.0 7.8 km | Elite Winds Services 5.0 5.2 km | Sai Tank Clean Services 5.0 **[far]** | Ket Water tank cleaning service 4.4 7 km | Reyaan Services 5.0 7.8 km |
| 7 | Reyaan Services 5.0 7.8 km | Ro service Tank cleaning Tri-City 4.9 6.5 km | A-One Cleaning Service 5.0 13.7 km | Bijay Water Tank Cleaners 5.0 11.4 km | Reyaan Services 5.0 7.8 km | East cleaning 5.0 5.1 km |
| 8 | Ket Water tank cleaning service 4.4 7 km | Reyaan Services 5.0 7.8 km | Star Cleaning Services 5.0 7.8 km | Ro service Tank cleaning Tri-City 4.9 6.5 km | Star Cleaning Services 5.0 7.8 km | Star Cleaning Services 5.0 7.8 km |
| 9 | Sai Tank Clean Services 5.0 **[far]** | Elite Winds Services 5.0 5.2 km | Sai Tank Clean Services 5.0 **[far]** | SaniTank (Water Tank Cleaning Serv… 5.0 **[far]** | SaniTank (Water Tank Cleaning Serv… 5.0 **[far]** | A-One Cleaning Service 5.0 13.7 km |
| 10 | Star Cleaning Services 5.0 7.8 km | Rakesh Water Tank Cleaning Services 4.7 **[far]** | Ket Water tank cleaning service 4.4 7 km | Chkachk - Water Tank Cleaning 4.8 **[far]** | Ro service Tank cleaning Tri-City 4.9 6.5 km | Ro service Tank cleaning Tri-City 4.9 6.5 km |

#### Dera Bassi (viewport 30.5872,76.8428,13z, loaded 17:34 to 17:35 IST, 2026-10-31)

| # | [water tank cleaning](https://www.google.com/maps/search/water+tank+cleaning/@30.5872,76.8428,13z?hl=en&gl=in) | [water tank cleaning near me](https://www.google.com/maps/search/water+tank+cleaning+near+me/@30.5872,76.8428,13z?hl=en&gl=in) | [tank cleaning service](https://www.google.com/maps/search/tank+cleaning+service/@30.5872,76.8428,13z?hl=en&gl=in) | [पानी की टंकी की सफाई](https://www.google.com/maps/search/%E0%A4%AA%E0%A4%BE%E0%A4%A8%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%9F%E0%A4%82%E0%A4%95%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%B8%E0%A4%AB%E0%A4%BE%E0%A4%88/@30.5872,76.8428,13z?hl=en&gl=in) | [pani ki tanki saaf](https://www.google.com/maps/search/pani+ki+tanki+saaf/@30.5872,76.8428,13z?hl=en&gl=in) | [society water tank cleaning](https://www.google.com/maps/search/society+water+tank+cleaning/@30.5872,76.8428,13z?hl=en&gl=in) |
|---|---|---|---|---|---|---|
| 1 | Safai guru 5.0 7.5 km | Sai Tank Clean Services 5.0 **[far]** | B Two Cleaning Service 4.9 10.9 km | Shiv Water Tank Cleaning Services 4.5 8.3 km | Sai Tank Clean Services 5.0 **[far]** | Sai Tank Clean Services 5.0 **[far]** |
| 2 | B Two Cleaning Service 4.9 10.9 km | Mr.Jet Watertank Cleaning Services. 5.0 **[far]** | Welco Cleaning 5.0 15.3 km | Life Line Services water tank Clea… 4.9 **[far]** | Safai guru 5.0 7.5 km | Shiv Water Tank Cleaning Services 4.5 8.3 km |
| 3 | Sai Tank Clean Services 5.0 **[far]** | Safai guru 5.0 7.5 km | Sai Tank Clean Services 5.0 **[far]** | Rehanshi water tank cleaning servi… 5.0 **[far]** | Clean Today 5.0 13.2 km | B Two Cleaning Service 4.9 10.9 km |
| 4 | Shiv Water Tank Cleaning Services 4.5 8.3 km | B Two Cleaning Service 4.9 10.9 km | Safai guru 5.0 7.5 km | VK Water Tank Cleaner 5.0 11.4 km | J.K Water Tank cleaning services 5.0 11.9 km | Clean Today 5.0 13.2 km |
| 5 | Welco Cleaning 5.0 15.3 km | Rakesh Water Tank Cleaning Services 4.7 **[far]** | Shiv Water Tank Cleaning Services 4.5 8.3 km | Sai Tank Clean Services 5.0 **[far]** | Solanki Water Tank Cleaner 4.9 11.6 km | Welco Cleaning 5.0 15.3 km |
| 6 | Darshan Singh Care 5.0 13.1 km | Darshan Singh Care 5.0 13.1 km | Clean Today 5.0 13.2 km | SaniTank (Water Tank Cleaning Serv… 5.0 **[far]** | B Two Cleaning Service 4.9 10.9 km | Safai guru 5.0 7.5 km |
| 7 | VK Water Tank Cleaner 5.0 11.4 km | Shiv Water Tank Cleaning Services 4.5 8.3 km | Darshan Singh Care 5.0 13.1 km | Chkachk - Water Tank Cleaning 4.8 **[far]** | Shiv Water Tank Cleaning Services 4.5 8.3 km | Watan Cleaning services 5.0 13 km |
| 8 | Mr.Jet Watertank Cleaning Services. 5.0 **[far]** | Rehanshi water tank cleaning servi… 5.0 **[far]** | Watan Cleaning services 5.0 13 km | Solanki Water Tank Cleaner 4.9 11.6 km | Shree Balaji Water Tank Cleaning 4.8 21 km | Mr.Jet Watertank Cleaning Services. 5.0 **[far]** |
| 9 | Clean Today 5.0 13.2 km | Welco Cleaning 5.0 15.3 km | Axico Cleaning Services Water Tank… 5.0 16.1 km | Axico Cleaning Services Water Tank… 5.0 16.1 km | VK Water Tank Cleaner 5.0 11.4 km | Rehanshi water tank cleaning servi… 5.0 **[far]** |
| 10 | Axico Cleaning Services Water Tank… 5.0 16.1 km | Shree Swami Samarth Water Tank cle… (no rating) **[far]** | VK Water Tank Cleaner 5.0 11.4 km | VSH Digital Solutions Naaka Water … 4.5 **[far]** | SaniTank (Water Tank Cleaning Serv… 5.0 **[far]** | Axico Cleaning Services Water Tank… 5.0 16.1 km |

#### Kurali (viewport 30.8319,76.575,13z, loaded 17:36 to 17:37 IST, 2026-10-31)

| # | [water tank cleaning](https://www.google.com/maps/search/water+tank+cleaning/@30.8319,76.575,13z?hl=en&gl=in) | [water tank cleaning near me](https://www.google.com/maps/search/water+tank+cleaning+near+me/@30.8319,76.575,13z?hl=en&gl=in) | [tank cleaning service](https://www.google.com/maps/search/tank+cleaning+service/@30.8319,76.575,13z?hl=en&gl=in) | [पानी की टंकी की सफाई](https://www.google.com/maps/search/%E0%A4%AA%E0%A4%BE%E0%A4%A8%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%9F%E0%A4%82%E0%A4%95%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%B8%E0%A4%AB%E0%A4%BE%E0%A4%88/@30.8319,76.575,13z?hl=en&gl=in) | [pani ki tanki saaf](https://www.google.com/maps/search/pani+ki+tanki+saaf/@30.8319,76.575,13z?hl=en&gl=in) | [society water tank cleaning](https://www.google.com/maps/search/society+water+tank+cleaning/@30.8319,76.575,13z?hl=en&gl=in) |
|---|---|---|---|---|---|---|
| 1 | A-One Cleaning Service 5.0 13.4 km | Sai Tank Clean Services 5.0 **[far]** | A-One Cleaning Service 5.0 13.4 km | Life Line Services water tank Clea… 4.9 **[far]** | Sai Tank Clean Services 5.0 **[far]** | Sai Tank Clean Services 5.0 **[far]** |
| 2 | Shree Balaji Water Tank Cleaning 4.8 16.3 km | Mr.Jet Watertank Cleaning Services. 5.0 **[far]** | Wazara Cleaning Services 5.0 13.1 km | Rehanshi water tank cleaning servi… 5.0 **[far]** | A-One Cleaning Service 5.0 13.4 km | Wazara Cleaning Services 5.0 13.1 km |
| 3 | Sai Tank Clean Services 5.0 **[far]** | Rakesh Water Tank Cleaning Services 4.7 **[far]** | Sai Tank Clean Services 5.0 **[far]** | Shree Balaji Water Tank Cleaning 4.8 16.3 km | Wazara Cleaning Services 5.0 13.1 km | Mr.Jet Watertank Cleaning Services. 5.0 **[far]** |
| 4 | Wazara Cleaning Services 5.0 13.1 km | Wazara Cleaning Services 5.0 13.1 km | Welco Cleaning 5.0 22.1 km | Wazara Cleaning Services 5.0 13.1 km | Shree Balaji Water Tank Cleaning 4.8 16.3 km | Rehanshi water tank cleaning servi… 5.0 **[far]** |
| 5 | Mr.Jet Watertank Cleaning Services. 5.0 **[far]** | Rehanshi water tank cleaning servi… 5.0 **[far]** | Star Cleaning Services 5.0 15.4 km | Sai Tank Clean Services 5.0 **[far]** | SaniTank (Water Tank Cleaning Serv… 5.0 **[far]** | Shree Balaji Water Tank Cleaning 4.8 16.3 km |
| 6 | Rehanshi water tank cleaning servi… 5.0 **[far]** | Shree Swami Samarth Water Tank cle… (no rating) **[far]** | Shree Balaji Water Tank Cleaning 4.8 16.3 km | SaniTank (Water Tank Cleaning Serv… 5.0 **[far]** | Life Line Services water tank Clea… 4.9 **[far]** | Sunshine water tank cleaning 5.0 **[far]** |
| 7 | Welco Cleaning 5.0 22.1 km | A-One Cleaning Service 5.0 13.4 km | Water tank cleaning 4.9 17.4 km | A-One Cleaning Service 5.0 13.4 km | Rehanshi water tank cleaning servi… 5.0 **[far]** | SaniTank (Water Tank Cleaning Serv… 5.0 **[far]** |
| 8 | Axico Cleaning Services Water Tank… 5.0 21.4 km | Blue Jet Home Tank Cleaning Service (no rating) **[far]** | Rakesh Water Tank Cleaning Services 4.7 **[far]** | VSH Digital Solutions Naaka Water … 4.5 **[far]** | A.S.R.GROUP (no rating) **[far]** | A-One Cleaning Service 5.0 13.4 km |
| 9 | Rakesh Water Tank Cleaning Services 4.7 **[far]** | Shree Balaji Water Tank Cleaning 4.8 16.3 km | Mr.Jet Watertank Cleaning Services. 5.0 **[far]** | Chkachk - Water Tank Cleaning 4.8 **[far]** | Aqua Tank Clean 5.0 **[far]** | Rakesh Water Tank Cleaning Services 4.7 **[far]** |
| 10 | Star Cleaning Services 5.0 15.4 km | Sunshine water tank cleaning 5.0 **[far]** | Rehanshi water tank cleaning servi… 5.0 **[far]** | Rakesh Water Tank Cleaning Services 4.7 **[far]** | Bijay Water Tank Cleaners 5.0 20.2 km | Shree Swami Samarth Water Tank cle… (no rating) **[far]** |

#### Ropar (viewport 30.9664,76.5331,13z, loaded 17:37 to 17:39 IST, 2026-10-31)

| # | [water tank cleaning](https://www.google.com/maps/search/water+tank+cleaning/@30.9664,76.5331,13z?hl=en&gl=in) | [water tank cleaning near me](https://www.google.com/maps/search/water+tank+cleaning+near+me/@30.9664,76.5331,13z?hl=en&gl=in) | [tank cleaning service](https://www.google.com/maps/search/tank+cleaning+service/@30.9664,76.5331,13z?hl=en&gl=in) | [पानी की टंकी की सफाई](https://www.google.com/maps/search/%E0%A4%AA%E0%A4%BE%E0%A4%A8%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%9F%E0%A4%82%E0%A4%95%E0%A5%80+%E0%A4%95%E0%A5%80+%E0%A4%B8%E0%A4%AB%E0%A4%BE%E0%A4%88/@30.9664,76.5331,13z?hl=en&gl=in) | [pani ki tanki saaf](https://www.google.com/maps/search/pani+ki+tanki+saaf/@30.9664,76.5331,13z?hl=en&gl=in) | [society water tank cleaning](https://www.google.com/maps/search/society+water+tank+cleaning/@30.9664,76.5331,13z?hl=en&gl=in) |
|---|---|---|---|---|---|---|
| 1 | Sai Tank Clean Services 5.0 **[far]** | Sai Tank Clean Services 5.0 **[far]** | Sai Tank Clean Services 5.0 **[far]** | Life Line Services water tank Clea… 4.9 **[far]** | Sai Tank Clean Services 5.0 **[far]** | Sai Tank Clean Services 5.0 **[far]** |
| 2 | Mr.Jet Watertank Cleaning Services. 5.0 **[far]** | Mr.Jet Watertank Cleaning Services. 5.0 **[far]** | Rakesh Water Tank Cleaning Services 4.7 **[far]** | Rehanshi water tank cleaning servi… 5.0 **[far]** | SaniTank (Water Tank Cleaning Serv… 5.0 **[far]** | Mr.Jet Watertank Cleaning Services. 5.0 **[far]** |
| 3 | Rehanshi water tank cleaning servi… 5.0 **[far]** | Rakesh Water Tank Cleaning Services 4.7 **[far]** | Mr.Jet Watertank Cleaning Services. 5.0 **[far]** | Sai Tank Clean Services 5.0 **[far]** | Rehanshi water tank cleaning servi… 5.0 **[far]** | Rehanshi water tank cleaning servi… 5.0 **[far]** |
| 4 | Rakesh Water Tank Cleaning Services 4.7 **[far]** | Rehanshi water tank cleaning servi… 5.0 **[far]** | Rehanshi water tank cleaning servi… 5.0 **[far]** | SaniTank (Water Tank Cleaning Serv… 5.0 **[far]** | Life Line Services water tank Clea… 4.9 **[far]** | Sunshine water tank cleaning 5.0 **[far]** |
| 5 | Water tank cleaning P S Enterprises 5.0 **[far]** | Shree Swami Samarth Water Tank cle… (no rating) **[far]** | Shree Swami Samarth Water Tank cle… (no rating) **[far]** | VSH Digital Solutions Naaka Water … 4.5 **[far]** | Shree Balaji Water Tank Cleaning 4.8 30.7 km | Rakesh Water Tank Cleaning Services 4.7 **[far]** |
| 6 | Life Line Services water tank Clea… 4.9 **[far]** | Blue Jet Home Tank Cleaning Service (no rating) **[far]** | A-One Cleaning Service 5.0 28.7 km | Chkachk - Water Tank Cleaning 4.8 **[far]** | A.S.R.GROUP (no rating) **[far]** | SaniTank (Water Tank Cleaning Serv… 5.0 **[far]** |
| 7 | SaniTank (Water Tank Cleaning Serv… 5.0 **[far]** | Sunshine water tank cleaning 5.0 **[far]** | Welco Cleaning 5.0 36.7 km | Rakesh Water Tank Cleaning Services 4.7 **[far]** | Aqua Tank Clean 5.0 **[far]** | Shree Swami Samarth Water Tank cle… (no rating) **[far]** |
| 8 | Shree Swami Samarth Water Tank cle… (no rating) **[far]** | Samarth water tank cleaning Mumbai… 5.0 **[far]** | Blue Jet Home Tank Cleaning Service (no rating) **[far]** | Pani ki Tanki 5.0 **[far]** | Sunshine water tank cleaning 5.0 **[far]** | Water tank cleaning P S Enterprises 5.0 **[far]** |
| 9 | A-One Cleaning Service 5.0 28.7 km | SaniTank (Water Tank Cleaning Serv… 5.0 **[far]** | Sunshine water tank cleaning 5.0 **[far]** | Mr.Jet Watertank Cleaning Services. 5.0 **[far]** | Rakesh Water Tank Cleaning Services 4.7 **[far]** | SSE WATER TANK CLEANING SERVICES 4.9 **[far]** |
| 10 | Samarth water tank cleaning Mumbai… 5.0 **[far]** | Water tank cleaning P S Enterprises 5.0 **[far]** | RTC Solution 4.6 **[far]** | Sunshine water tank cleaning 5.0 **[far]** | Water tank cleaning P S Enterprises 5.0 **[far]** | Sanjeevani Water Tank Cleaning Tha… 4.9 **[far]** |


#### Listing directory: Tricity listings in any top 10 above

All rows read 2026-10-31. "Hours at load" is what the list showed around 17:20 to 17:40 IST on a Saturday, so "Closes 8 pm" means the listing was open then. "Vs earlier" compares rating and phone with the earlier notes. Names link to the listing page.

| Listing | Rating | Phone | Category | Hours at load | Address (listing page) | Website on listing | Top-10 slots, towns | Vs earlier |
|---|---|---|---|---|---|---|---|---|
| [Shree Balaji Water Tank Cleaning](https://www.google.com/maps/place/Shree+Balaji+Water+Tank+Cleaning/data=!4m7!3m6!1s0x390fef66a2bfa275:0x14c87b27b147099e!8m2!3d30.7294272!4d76.6976325!16s%2Fg%2F11qzzt8l9n!19sChIJdaK_ombvDzkRnglHsSd7yBQ?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 4.8 | 079018 40437 | Water Tank Cleaners | Closes 8 pm |  Shop No 15, near Old Gurudwara, Sector 119, Dashmesh Market, | none | 31 in 8 | unchanged |
| [Welco Cleaning](https://www.google.com/maps/place/Welco+Cleaning/data=!4m7!3m6!1s0x390feff35c89bf27:0x6e9909e5c30ba02b!8m2!3d30.6798022!4d76.7240642!16s%2Fg%2F11tsjx6t3t!19sChIJJ7-JXPPvDzkRK6ALw-UJmW4?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 077196 73774 | Water Tank Cleaners | Closes 9 pm |  SCO.67, near verka both, Sector 67, Sahibzada Ajit Singh Nag | none | 27 in 7 | unchanged |
| [Axico Cleaning Services Water Tank…](https://www.google.com/maps/place/Axico+Cleaning+Services+Water+Tank+Cleaning+in+Mohali/data=!4m7!3m6!1s0x390fef37fd23e0e7:0xe5f0c0bcb28e394a!8m2!3d30.6831554!4d76.7174673!16s%2Fg%2F11zd3xmm3d!19sChIJ5-Aj_TfvDzkRSjmOsrzA8OU?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 082889 95988 | Water Tank Cleaners | Closes 9 pm |  Sco No 82, Sector 79, Sahibzda, Sahibzada Ajit Singh Nagar | none | 25 in 6 | unchanged |
| [Watan Cleaning services](https://www.google.com/maps/place/Watan+Cleaning+services/data=!4m7!3m6!1s0x390fef366f5148ad:0xcd6e822fcceadae!8m2!3d30.6811776!4d76.761291!16s%2Fg%2F11w3clwmdx!19sChIJrUhRbzbvDzkRrq3O_CLo1gw?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 090263 38506 | Water Tank Cleaners | Closes 9 pm |  61, faida road, near PNB Bank, Jagatpura, Sahibzada Ajit Sin | vatancleaningservices.in | 23 in 6 | unchanged |
| [A-One Cleaning Service](https://www.google.com/maps/place/A-One+Cleaning+Service/data=!4m7!3m6!1s0x390fef2961f5b935:0x7f694a6046494c6e!8m2!3d30.7244789!4d76.6378048!16s%2Fg%2F11h3bgby2_!19sChIJNbn1YSnvDzkRbkxJRmBKaX8?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 094162 62120 | Water Tank Cleaners | Closes 8 pm |  Universal Infra City-1, Jtpl City, 27C, Kharar - Landran Rd, | aonecleaningservices.in | 23 in 5 | unchanged |
| [VK Water Tank Cleaner](https://www.google.com/maps/place/VK+Water+Tank+Cleaner/data=!4m7!3m6!1s0x390f93451b9bedfd:0x74e17cc44cfec55e!8m2!3d30.6885498!4d76.860776!16s%2Fg%2F11zd6fbc15!19sChIJ_e2bG0WTDzkRXsX-TMR84XQ?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 079861 51577 | Cleaning Services | Closes 7 pm |  near Govt. School, Haripur, Sector 4, Panchkula | none | 21 in 4 | unchanged |
| [Wazara Cleaning Services](https://www.google.com/maps/place/Wazara+Cleaning+Services/data=!4m7!3m6!1s0x390fef8c2c46cce9:0x491706cd03f3b95c!8m2!3d30.744129!4d76.6661415!16s%2Fg%2F11nhhz698d!19sChIJ6cxGLIzvDzkRXLnzA80GF0k?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 098770 77422 | Water Tank Cleaners | Closes 9:30 pm |  2nd Floor, Sunny Enclave, House no.93, Sector 125, Kharar | none | 21 in 4 | unchanged |
| [Solanki Water Tank Cleaner](https://www.google.com/maps/place/Solanki+Water+Tank+Cleaner/data=!4m7!3m6!1s0x390f9311f22988ad:0x9634cc52e1d10593!8m2!3d30.6903756!4d76.8603593!16s%2Fg%2F11x2bcvfq1!19sChIJrYgp8hGTDzkRkwXR4VLMNJY?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 4.9 | 098887 74240 | Water Tank Cleaners | Open 24 hours |  Shope No-44, Sector 4 Market Parking, Haripur, Sector 4, Cha | facebook.com | 20 in 4 | unchanged |
| [Shiv Water Tank Cleaning Services](https://www.google.com/maps/place/%F0%9D%97%A6%F0%9D%97%B5%F0%9D%97%B6%F0%9D%98%83+Water+Tank+Cleaning+%F0%9D%97%A6%F0%9D%97%B2%F0%9D%97%BF%F0%9D%98%83%F0%9D%97%B6%F0%9D%97%B0%F0%9D%97%B2%F0%9D%98%80/data=!4m7!3m6!1s0x390f95d73b61f633:0x9bac77e126b98510!8m2!3d30.6596613!4d76.8643825!16s%2Fg%2F11v3j0cbvd!19sChIJM_ZhO9eVDzkREIW5JuF3rJs?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 4.5 | 079862 72054 | Water Tank Cleaners | Open 24 hours |  Flat No. 403, Second Floor, GMS Home, Peer Muchalla Rd, near | none | 17 in 3 | unchanged; phone now complete |
| [Star Cleaning Services](https://www.google.com/maps/place/Star+Cleaning+Services/data=!4m7!3m6!1s0x390fef580937345b:0x3ee9ce880f08a032!8m2!3d30.750631!4d76.7060901!16s%2Fg%2F11zbq5vnnb!19sChIJWzQ3CVjvDzkRMqAID4jO6T4?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 076960 03111 | Water Tank Cleaners | Closes 7 pm |  Shop No. 18, Krishna Market, Jujhar Nagar, Sahibzada Ajit Si | none | 16 in 5 | unchanged |
| [Tricity Water Tank Cleaning](https://www.google.com/maps/place/Tricity+Water+Tank+Cleaning/data=!4m7!3m6!1s0x390ff21bffffffeb:0xc5028cfac75939cf!8m2!3d30.7706123!4d76.7470548!16s%2Fg%2F11clt7thnl!19sChIJ6____xvyDzkRzzlZx_qMAsU?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 4.9 | 093175 74609 | Water Tank Cleaners | Closes 8 pm |  H.No 437, Rehabilitation Colony, Dhanas | tricitydrycleaner.com | 15 in 4 | unchanged |
| [Clean Today](https://www.google.com/maps/place/Clean+Today/data=!4m7!3m6!1s0x390feb974474e81f:0x2ef1f2a1e21b2cb0!8m2!3d30.6612674!4d76.7347814!16s%2Fg%2F11nvbsmv_c!19sChIJH-h0RJfrDzkRsCwb4qHy8S4?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 099159 99323 | Water Tank Cleaners | Open 24 hours |  SCO - 6, Basement, Sector 82, JLPL Industrial Area, Sahibzad | cleantoday.co.in | 14 in 3 | in earlier report with no details; details new |
| [B Two Cleaning Service](https://www.google.com/maps/place/B+Two+Cleaning+Service/data=!4m7!3m6!1s0x390feb7496b76ce9:0x3a55e1c8b895c19f!8m2!3d30.6555194!4d76.7604725!16s%2Fg%2F11ywx9f0tc!19sChIJ6Wy3lnTrDzkRn8GVuMjhVTo?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 4.9 | 087289 71917 | Water Tank Cleaners | Closes 7 pm |  Shop No 1396, Auro City, JLPL Industrial Area, Sahibzada Aji | none | 14 in 3 | unchanged |
| [MK Services](https://www.google.com/maps/place/MK+Services/data=!4m7!3m6!1s0x390f93afbe11c069:0xfeceb8fa65b14c1a!8m2!3d30.6904084!4d76.8610412!16s%2Fg%2F11ft01l5lj!19sChIJacARvq-TDzkRGkyxZfq4zv4?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 4.9 | 099155 55631 | Water Tank Cleaners | Closes 8 pm |  Scf 85, 2 floor, Sector 4, Panchkula | none | 12 in 3 | unchanged |
| [Reyaan Services](https://www.google.com/maps/place/Reyaan+Services/data=!4m7!3m6!1s0x390ff317c1cb0fe3:0x2387330379a48cc6!8m2!3d30.7541062!4d76.770471!16s%2Fg%2F11h_b5sx7p!19sChIJ4w_LwRfzDzkRxoykeQMzhyM?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 090564 40440 | Water Tank Cleaners | Closes 8 pm |  15D, Sector 15 | water-tank-cleaning-services.ueniweb.com | 11 in 3 | unchanged |
| [Bijay Water Tank Cleaners](https://www.google.com/maps/place/Bijay+Water+Tank+Cleaners/data=!4m7!3m6!1s0x390fefa8027f2545:0xdf5d185eb2296078!8m2!3d30.7144422!4d76.7369069!16s%2Fg%2F11xp1dq2j6!19sChIJRSV_AqjvDzkReGApsl4YXd8?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 098772 83554 | Water Tank Cleaners | Closes soon |  Tiwana Complex, Kajheri, Kajheri Village, Sector 52 | bijaytankclean.com | 11 in 7 | unchanged |
| [Ket Water tank cleaning service](https://www.google.com/maps/place/Ket+Water+tank+cleaning+service/data=!4m7!3m6!1s0x390fefffdadb44eb:0xa2aaadee2bf96f5e!8m2!3d30.7538917!4d76.7425036!16s%2Fg%2F11zh5r5q9t!19sChIJ60Tb2v_vDzkRXm_5K-6tqqI?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 4.4 | not shown | Water Tank Cleaners | Open 24 hours |  near guru ravidass gurudwara, Daddu Majra Colony | none | 9 in 5 | unchanged |
| [Water tank cleaning](https://www.google.com/maps/place/Water+tank+cleaning/data=!4m7!3m6!1s0x390fef0e9c2b1c6b:0xe2e28b1d3c97afcd!8m2!3d30.710114!4d76.6892263!16s%2Fg%2F11v0xrlp7q!19sChIJaxwrnA7vDzkRza-XPB2L4uI?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 4.9 | 062044 06520 | Cleaning Services | Open 24 hours |  F341 PHASE, 8B, Phase 8B, Industrial Area, Sector 74, Sahibz | none | 9 in 4 | unchanged |
| [Ramesh kumar](https://www.google.com/maps/place/Ramesh+kumar/data=!4m7!3m6!1s0x390fed00292c1949:0x37ddf8dbf0ae6025!8m2!3d30.7172888!4d76.8035087!16s%2Fg%2F11zbk8d_yx!19sChIJSRksKQDtDzkRJWCu8Nv43Tc?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 078144 29949 | Water Tank Cleaners | Closes 7 pm |  Sector 28A, Sector 28 | none | 9 in 3 | unchanged |
| [Tots Purahydro](https://www.google.com/maps/place/Tots+Purahydro/data=!4m7!3m6!1s0x390fed29549a84a1:0xb8bd21852ba9f3f3!8m2!3d30.6773738!4d76.7413502!16s%2Fg%2F11kj2zysm_!19sChIJoYSaVCntDzkR8_OpK4Uhvbg?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 099150 95880 | Water Tank Cleaners | Closes 9:30 pm |  SCF 01, Phase 11, Sector 65, Sahibzada Ajit Singh Nagar | none | 8 in 3 | new vs earlier notes |
| [Santosh water tank cleaning](https://www.google.com/maps/place/Santosh+water+tank+cleaning/data=!4m7!3m6!1s0x390f931c652fb165:0x8fd330e7eb89d2df!8m2!3d30.6890753!4d76.8581086!16s%2Fg%2F11p19vbxv9!19sChIJZbEvZRyTDzkR39KJ6-cw048?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 098783 16350 | Cleaning Services | Closes 8 pm |  House No, near market, 914, Sector 4, Panchkula | none | 8 in 3 | unchanged |
| [Weston Tank Cleaning](https://www.google.com/maps/place/Weston+Tank+Cleaning/data=!4m7!3m6!1s0x390feff0309a8153:0x4459f823feae63f!8m2!3d30.6879746!4d76.7043826!16s%2Fg%2F11njw93qv4!19sChIJU4GaMPDvDzkRP-bqP4KfRQQ?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | not shown | Cleaning Services | not shown |  near Dera Sahib Gurudwara, Village Sohana, Sohana, Sahibzada | none | 6 in 3 | new vs earlier notes |
| [Brother Water Tank Cleaning](https://www.google.com/maps/place/Brother+Water+Tank+Cleaning/data=!4m7!3m6!1s0x390feb87cc3c56f3:0x9d0c85066cf85878!8m2!3d30.6718485!4d76.7700807!16s%2Fg%2F11zy0yc3rn!19sChIJ81Y8zIfrDzkReFj4bAaFDJ0?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 081950 00578 | Cleaning Services | Closes 7 pm |  Kandala, Sahibzada Ajit Singh Nagar | none | 6 in 3 | new vs earlier notes |
| [City Care](https://www.google.com/maps/place/City+Care/data=!4m7!3m6!1s0x390f931c2c4f2cf7:0x1520f3421ad4aa89!8m2!3d30.6894772!4d76.8598889!16s%2Fg%2F11zz59wcwr!19sChIJ9yxPLByTDzkRiarUGkLzIBU?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 074170 83239 | Water Tank Cleaners | Open 24 hours |  Sactor 4, Haripur, Market, Panchkula | none | 6 in 2 | unchanged |
| [Sk water tank cleaning service](https://www.google.com/maps/place/Sk+water+tank+cleaning+service/data=!4m7!3m6!1s0x8b5403b3a2a82d8d:0x96c942f09a09985c!8m2!3d30.6903282!4d76.8611168!16s%2Fg%2F11xlzhn05w!19sChIJjS2oorMDVIsRXJgJmvBCyZY?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 079863 73806 | Cleaning Services | Closes 7 pm |  SCF 82, Sector 4, Panchkula | none | 6 in 1 | unchanged |
| [Ro service Tank cleaning Tri-City](https://www.google.com/maps/place/Ro+service+Tank+cleaning+Tri-City/data=!4m7!3m6!1s0x390ff11700ea9d99:0x6fe65be413588ab6!8m2!3d30.7613424!4d76.7123719!16s%2Fg%2F11k3kh7n6g!19sChIJmZ3qABfxDzkRtopYE-Rb5m8?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 4.9 | 088470 23683 | Water Filter Supplier | Open 24 hours |  Flat no 2648, 3, HBC, Maloya | none | 6 in 1 | new vs earlier notes |
| [Safai guru](https://www.google.com/maps/place/Safai+guru/data=!4m7!3m6!1s0x390f95f48553d183:0x3fb7bb6067353831!8m2!3d30.6435551!4d76.8859442!16s%2Fg%2F11yt6p1pcj!19sChIJg9FThfSVDzkRMTg1Z2C7tz8?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 070092 15197 | Cleaning Services | Open 24 hours |  House number 6 Guru Nanak colony, Ramgarh, Panchkula, backsi | safaiguru.com | 5 in 1 | new second listing for Safai Guru |
| [Pure Shine Cleaning](https://www.google.com/maps/place/Pure+Shine+Cleaning/data=!4m7!3m6!1s0x390fe97acf35e8a5:0x61bd8bb76f5ae31c!8m2!3d30.6563193!4d76.6974469!16s%2Fg%2F11y8mvxk_4!19sChIJpeg1z3rpDzkRHONab7eLvWE?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 4.9 | 099886 94883 | Water Tank Cleaners | Closes 8 pm |  near Wave Estate, Sector 99, Sukhgarh, Sahibzada Ajit Singh  | none | 4 in 1 | CHANGED: earlier "not seen" on Maps |
| [Crystal Clean India](https://www.google.com/maps/place/Crystal+Clean+India/data=!4m7!3m6!1s0x390fee96c618bebb:0xe21d7d1277c609f1!8m2!3d30.698191!4d76.72259!16s%2Fg%2F11cnctyqs5!19sChIJu74YxpbuDzkR8QnGdxJ9HeI?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 4.4 | 098882 18889 | Cleaning service | Closes 8 pm |  SCO-503, Sector 70, Sahibzada Ajit Singh Nagar | crystalcleanindia.com | 4 in 1 | unchanged |
| [East cleaning](https://www.google.com/maps/place/East+cleaning/data=!4m7!3m6!1s0x390ff32b67678f89:0xb4fe9d871721e3a8!8m2!3d30.7729009!4d76.7497718!16s%2Fg%2F11y01prxs2!19sChIJiY9nZyvzDzkRqOMhF4ed_rQ?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 062800 04113 | Cleaning Services | Closes 9:30 pm |  Small flats, Rehabilitation Colony, Dhanas | none | 4 in 1 | new vs earlier notes |
| [J.K Water Tank cleaning services](https://www.google.com/maps/place/J.K+Water+Tank+cleaning+services/data=!4m7!3m6!1s0x390fe9d83442e497:0x2f1aa3c31853fcca!8m2!3d30.6121835!4d76.7221082!16s%2Fg%2F11nbj7cm6q!19sChIJl-RCNNjpDzkRyvxTGMOjGi8?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | not shown | Water Tank Cleaners | Closes 8 pm |  Ramana Complex, Sec 99, Sahibzada Ajit Singh Nagar | none | 3 in 2 | new vs earlier notes |
| [Darshan Singh Care](https://www.google.com/maps/place/Darshan+Singh+Care/data=!4m7!3m6!1s0x390fe9aa376e25ed:0x472c749ae7fcd65e!8m2!3d30.6420488!4d76.7216515!16s%2Fg%2F11qnq2705p!19sChIJ7SVuN6rpDzkRXtb855p0LEc?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 082888 18606 | Water Tank Cleaners | Closes 10 pm |  VPO Manauli, near SAS Nagar ,Mohali, Sector 83, Sahibzada Aj | none | 3 in 1 | unchanged |
| [CleanDin Water Tank Cleaning Servi…](https://www.google.com/maps/place/CleanDin+Water+Tank+Cleaning+Services/data=!4m7!3m6!1s0x390f95ac6f3e2e31:0xa7739f8d5c749bdc!8m2!3d30.6980009!4d76.878666!16s%2Fg%2F11f86s30cx!19sChIJMS4-b6yVDzkR3Jt0XI2fc6c?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 4.3 | 075083 97630 | Water Tank Cleaners | Open 24 hours | no street address shown | none | 2 in 2 | unchanged |
| [Elite Winds Services](https://www.google.com/maps/place/Elite+Winds+Services/data=!4m7!3m6!1s0x390ff30562eaee9d:0x35bc6bf37e3642a1!8m2!3d30.7719253!4d76.7498389!16s%2Fg%2F11w9w1p6xw!19sChIJne7qYgXzDzkRoUI2fvNrvDU?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 070872 87930 | Water Tank Cleaners | Open 24 hours |  Small flats, 2024, Dhanas | elitewinds.com | 2 in 1 | new on Maps; earlier site only |
| [Welco tank cleaning](https://www.google.com/maps/place/Welco+tank+cleaning/data=!4m7!3m6!1s0x390fe994122450d9:0x2c350a1ab25e7961!8m2!3d30.6553788!4d76.6973995!16s%2Fg%2F11z9w64xmx!19sChIJ2VAkEpTpDzkRYXleshoKNSw?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | 06284 876 563 | Cleaning Services | Closes 12 am |  Sector 100, near by old gurudwara, Sukhgarh, Sahibzada Ajit  | none | 1 in 1 | unchanged |
| [Pk tank cleaner](https://www.google.com/maps/place/Pk+tank+cleaner/data=!4m7!3m6!1s0x390f93002c945afd:0x2205782a4a6eb9de!8m2!3d30.6892241!4d76.8598292!16s%2Fg%2F11zx6pr66g!19sChIJ_VqULACTDzkR3rluSip4BSI?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | not shown | Water Tank Cleaners | not shown |  MVQ5+MWP, Haripur, Sector 4, Panchkula | none | 1 in 1 | new vs earlier notes |
| [water tank clean](https://www.google.com/maps/place/water+tank+clean/data=!4m7!3m6!1s0x390f936c17ce25b1:0x1a8c072c7cb764e7!8m2!3d30.7182711!4d76.8431443!16s%2Fg%2F11zfkmzfpl!19sChIJsSXOF2yTDzkR52S3fCwHjBo?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | none | 096468 08831 | Water Tank Cleaners | not shown |  Indira Colony Rd, New Indira Colony, Sector 13 | none | 1 in 1 | new vs earlier notes |
| [Karan water tank sarvice](https://www.google.com/maps/place/Karan+water+tank+sarvice/data=!4m7!3m6!1s0x390f9355ceac467d:0x2e885a3e52653d64!8m2!3d30.6899159!4d76.8608861!16s%2Fg%2F11zz0jkhlr!19sChIJfUaszlWTDzkRZD1lUj5aiC4?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 5.0 | not shown | Cleaning Services | Closes 8 pm |  Sector 4 Market Parking, near mittu jeweller, Sector 4, Panc | none | 1 in 1 | new vs earlier notes |
| [Busy Bucket Services](https://www.google.com/maps/place/Busy+Bucket+Services/data=!4m7!3m6!1s0x390fef8aaa6cac39:0xfb9103657010b298!8m2!3d30.7071641!4d76.6877578!16s%2Fg%2F11kl086x34!19sChIJOaxsqorvDzkRmLIQcGUDkfs?hl=en&g_ep=EgoyMDI2MTAyOC4wIJJjKgBIAVAD&gl=in) | 4.7 | 096159 20004 | Cleaning Services | Closes 8 pm |  5th Floor, Phase 8B, F-298, Phase 8B, Industrial Area, Secto | busybucket.in | 1 in 1 | unchanged |


Listings in the earlier notes that sat only in rows 11 to 18 or nowhere:

- Expert deep cleaning: best row 12 on bare queries, 5.0, 079060 73477, unchanged. It is #1 on the query with the town name, below.
- Safai Guru (Sector 125, Kharar): best row 16 on bare queries, 4.9, 070092 15197, unchanged. It also shows at #5 on the Kharar town-name query.
- Graduate Safai Wlaa, Fixomes, Guga Aviation, Tricity Cleaners, KPS, Smart Cleaning and Urban Company: in none of the 18-row lists. **Changed** for Graduate Safai Wlaa and Fixomes, which the earlier Zirakpur list had. Unchanged for Guga.

**Out-of-area listings in the top 10** (not real competitors, shown for honesty): Sai Tank Clean Services, Navi Mumbai, took 31 top-10 slots across 7 towns. Rehanshi (Kalyan) 18, Mr.Jet (Airoli) 14, Rakesh (Mumbra) 13, SaniTank (Kharghar) 12, Life Line (CBD Belapur) 8, Shree Swami Samarth (Rabale) 7, Sunshine (Kalwa) 7, others 4 or fewer, including Chkachk and VSH Digital Solutions in Delhi — [Ropar search](https://www.google.com/maps/search/water+tank+cleaning/@30.9664,76.5331,13z?hl=en&gl=in), [Sai Tank listing address via Dera Bassi search](https://www.google.com/maps/search/water+tank+cleaning+near+me/@30.5872,76.8428,13z?hl=en&gl=in).

Top-10 slots taken by listings over 50 km away, out of 60 per town: Chandigarh 0, Mohali 0, Panchkula 4, Zirakpur 1, Kharar 6, New Chandigarh 13, Dera Bassi 19, Kurali 35, Ropar 56. By query, out of 90: "tank cleaning service" 14, "water tank cleaning" 16, "pani ki tanki saaf" 22, "society water tank cleaning" 23, "water tank cleaning near me" 28, "पानी की टंकी की सफाई" 31. Counted from the tables above.

**Run-to-run stability.** I re-ran "water tank cleaning" about 30 minutes later. Mohali kept 9 of 10 names with 8 in the same position, Kharar 9 of 10 with 7 in place, Chandigarh 10 of 10 with 6 in place — [Mohali](https://www.google.com/maps/search/water+tank+cleaning/@30.7046,76.7179,13z?hl=en&gl=in), [Kharar](https://www.google.com/maps/search/water+tank+cleaning/@30.7464,76.6456,13z?hl=en&gl=in), [Chandigarh](https://www.google.com/maps/search/water+tank+cleaning/@30.7333,76.7794,13z?hl=en&gl=in).

**Sponsored.** 0 Sponsored results on 54 sweep searches, 20 by-name searches and 24 follow-ups. On the 24 follow-ups I also counted the word "Sponsored" across the whole page: 0 every time, including the exact earlier URLs — [Mohali](https://www.google.com/maps/search/water+tank+cleaning+service+Mohali), [Kharar](https://www.google.com/maps/search/water+tank+cleaning+service+Kharar). **Changed** from the earlier finding of a Welco Sponsored slot on those two queries.

**Same queries as the earlier report, with the town name, from a browser set to that town.** Top 10 in order:

- **Mohali**, **changed** in small ways: A-One, Welco, Axico, Shree Balaji, Busy Bucket, Crystal Clean, Wazara, Star, Clean Today, Darshan Singh — [Maps](https://www.google.com/maps/search/water+tank+cleaning+service+Mohali). Same firms as before, minus the Sponsored Welco row; Star and Clean Today are in. A second load with coordinates gave a slightly different order, with B Two and Pure Shine — [Maps](https://www.google.com/maps/search/water+tank+cleaning+service+Mohali/@30.7046,76.7179,13z?hl=en&gl=in).
- **Kharar**, **changed**: Wazara, A-One, Shree Balaji, "Water tank cleaning" (0.6 km, Guru Teg Bahadur Nagar, no reviews), Safai Guru, "water tank cleaning" (Sunny Enclave), Solar panel and water tank cleaning, "Water tank cleaning" (F341), Busy Bucket, Ap deep cleaning; then Jai guru ji and Kharar Home Water Tank Cleaning (Permanently closed). The list ended at 12 rows — [Maps](https://www.google.com/maps/search/water+tank+cleaning+service+Kharar). Welco's Sponsored row is gone.
- **Chandigarh**, largely unchanged: Tricity, Welco, Shree Balaji, Reyaan, Ramesh kumar, Watan, F341 listing, Axico, Crystal Clean, Star — [Maps](https://www.google.com/maps/search/water+tank+cleaning+service+Chandigarh/@30.7333,76.7794,13z?hl=en&gl=in).
- **Panchkula**, unchanged in membership, order differs: MK, VK, Busy Bucket, City Care, Solanki, Shiv, Santosh, Sk, BEST CLEANERS, Shri Krishna — [Maps](https://www.google.com/maps/search/water+tank+cleaning+service+Panchkula/@30.6942,76.8606,13z?hl=en&gl=in).
- **Zirakpur**, **changed**: Expert deep cleaning, Shiv, Clean Today, B Two, Watan, Welco, VK, City Care, Solanki, Busy Bucket — [Maps](https://www.google.com/maps/search/water+tank+cleaning+service+Zirakpur/@30.6425,76.8173,13z?hl=en&gl=in). Krishna, CleanDIN, Fixomes and Graduate Safai Wlaa left the top 10.
- **New Chandigarh**, **changed**: Tricity, East cleaning, Reyaan, Ro service Tank cleaning Tri-City, Ket, Wazara, Elite Winds, Shree Balaji, Deep Cleaning New Chandigarh, Star — [Maps](https://www.google.com/maps/search/water+tank+cleaning+New+Chandigarh/@30.8167,76.7333,13z?hl=en&gl=in). No closed Reyaan row showed in the top 10.
- **Dera Bassi**, **changed**: Jaisika cleaning service (2.5 km), Shiv, B Two, Safai guru, Busy Bucket, CleanDin, VK, Axico, Master In Cleaning Service, Expert deep cleaning — [Maps](https://www.google.com/maps/search/water+tank+cleaning+Dera+Bassi/@30.5872,76.8428,13z?hl=en&gl=in).

**Earlier method claims, rechecked:**

- "About 8 results per query": **changed**. 9 rows on load.
- "Lists could not be scrolled": **changed**. One scroll gave 18 rows, and five scrolls gave 40 — [Maps](https://www.google.com/maps/search/Clean+Tank+Services/@30.7464,76.6456,13z?hl=en&gl=in).
- "Limited view": **unchanged**. All 54 sweep searches carried the line "You're seeing a limited view of Google Maps". Pressing "See more" opened a sign-in prompt, which I did not use — [Maps](https://www.google.com/maps/search/water+tank+cleaning/@30.7046,76.7179,13z?hl=en&gl=in).

**Facts the earlier notes lacked or had open:**

- Bijay's town was unconfirmed; the listing says Tiwana Complex, Kajheri, Sector 52, Chandigarh, and links bijaytankclean.com — [Maps](https://www.google.com/maps/search/water+tank+cleaning/@30.7333,76.7794,13z?hl=en&gl=in) (see directory).
- Watan's town was unconfirmed; the listing says 61 Faida Road, Jagatpura, Mohali.
- Ramesh kumar had no address; the listing says Sector 28A, Chandigarh.
- Ket's listing says Daddu Majra Colony, Chandigarh.
- Shiv's phone, cut off earlier, reads 079862 72054.
- Safai Guru holds two listings on one phone: Sector 125 Kharar (4.9) and Ramgarh Panchkula (5.0). New duplicate.
- Elite Winds holds two listings on one phone: Bar Majra (4.7) and Dhanas (5.0). New duplicate.
- A listing for Universal water tank cleaner's exists (5.0, 099887 46027, no street address), though the earlier notes say its site does not resolve.
- "Crystal Clean Team" (EMAAR Mohali Hills, 5.0, 097819 12627, crystalcleanteam.in) is a separate listing from Crystal Clean India. Do not merge on name alone.

### Inferences
- The Mumbai listings are most likely an artifact of the server's IP, because they barely appear in Mohali or Chandigarh, where local supply is dense, and they crowd in where local supply is thin. "Near me" and Hindi queries are the worst hit. A real phone in Kurali or Ropar would probably see fewer of them, so treat their ranks as unreliable. That is a reasoned guess; I could not test it from a Tricity connection.
- Bare queries and town-name queries give different leaders, especially in Kharar, Zirakpur and Dera Bassi. A firm therefore needs both proximity and the town's name in its signals.
- Welco's missing ad may mean the campaign paused, was out of budget at that hour, or simply did not serve to this browser. One afternoon does not show it stopped.

### Gaps
- Results on a phone in each town on a mobile connection are unmeasured. The IP stayed Mumbai and the browser was desktop Chromium in limited view.
- Rank by time of day was tested only once, 30 minutes apart.
- Hours are as shown at one moment on a Saturday, not full weekly hours.

## Does Maps show review counts on each listing?

### Takeaway
No, not for any tank-cleaning firm. I opened 91 listing pages and got ratings but no counts or review text, with one informative exception. Welco's count is readable only on its paid Business Profile site: **1,419**, up from 1,415.

### Cited Findings
- None of 54 searches showed a count in the result rows. 90 of 91 listing pages showed none either: no count beside the rating, no Reviews tab, no review text. **Unchanged** from the earlier finding, now tested listing by listing — e.g. [A-One](https://www.google.com/maps/place/A-One+Cleaning+Service/data=!4m7!3m6!1s0x390fef2961f5b935:0x7f694a6046494c6e!8m2!3d30.7244789!4d76.6378048!16s%2Fg%2F11h3bgby2_!19sChIJNbn1YSnvDzkRbkxJRmBKaX8?hl=en&gl=in).
- The one exception was a control that shows the reading method works: Gurudwara Guru Gobind Singh Sahib, Kharar, showed 4.8, (202), a Reviews tab and review text in the same browser — [Maps search](https://www.google.com/maps/search/Gobind+Galaxy+Kharar/@30.7464,76.6456,13z?hl=en&gl=in).
- The sign-in prompt says "Reviews & photos: Read and search through every review and photo" — [Maps](https://www.google.com/maps/search/water+tank+cleaning/@30.7046,76.7179,13z?hl=en&gl=in).
- Welco: 5 out of 5 from **1,419 reviews** on both profile pages. **Changed** from 1,415 in the earlier notes — [reviews](https://business.google.com/v/welco-tank-cleaning-services/05022997511415029701/7d5e/_/rev), [profile](https://business.google.com/v/welco-tank-cleaning-services/05022997511415029701/7d5e/_). The footer says "Google is compensated by the merchant to create this listing". Its posts there are all dated 3 years ago, though Maps ranks it strongly.
- No other listing opened links to a business.google.com profile, so no other firm's count could be read this way (Website column above).
- Listing pages do show owner posts. Recent dated ones: A-One, Sep 5, 2026, on high-rise tower tank cleaning — [A-One](https://www.google.com/maps/place/A-One+Cleaning+Service/data=!4m7!3m6!1s0x390fef2961f5b935:0x7f694a6046494c6e!8m2!3d30.7244789!4d76.6378048!16s%2Fg%2F11h3bgby2_!19sChIJNbn1YSnvDzkRbkxJRmBKaX8?hl=en&gl=in). B Two, Jun 14, 2026. Safai Guru, Oct 19, 2026. 21 of 91 pages had a "From the owner" block.

### Inferences
- The block is not blanket: a place of worship showed its count and text while businesses did not. "Claim this business" does not explain it, since unclaimed-looking listings such as Pk tank cleaner also showed no count. The rule behind it is unknown.
- 1,415 to 1,419 between the two reads is small, but the earlier read was also dated today. If both dates are exact, that is four reviews within hours. The earlier read's time is not recorded, so this may mean little.

### Gaps
- **Review counts for every firm except Welco remain unknown.** Maps shows them only after sign-in, and I did not sign in or query Maps' internal data endpoints. A person signed in to Google could read them in minutes.

## Does a listing exist for Clean Tank Services, Gobind Galaxy or Clean Tank?

### Takeaway
**No listing was found on any test.** That covers name searches from Kharar and Mohali, both office phone numbers, a tight search around the Kharar office, and 40 rows deep. This is strong evidence but not proof, given limited view and the Mumbai IP. Unchanged from the earlier report, on a much harder test.

### Cited Findings
Ten searches, each from a Kharar and a Mohali browser, 20 loads in all:

| Search | Result in both browsers |
|---|---|
| [Clean Tank Services](https://www.google.com/maps/search/Clean+Tank+Services/@30.7464,76.6456,13z?hl=en&gl=in) | Only competitors: A-One, Shree Balaji, Wazara, Welco and others |
| [Clean Tank](https://www.google.com/maps/search/Clean+Tank/@30.7464,76.6456,13z?hl=en&gl=in) | Only competitors |
| [Clean Tank Services Kharar](https://www.google.com/maps/search/Clean+Tank+Services+Kharar/@30.7464,76.6456,13z?hl=en&gl=in) | Only competitors, Wazara first |
| [Clean Tank Services Gobind Galaxy](https://www.google.com/maps/search/Clean+Tank+Services+Gobind+Galaxy/@30.7464,76.6456,13z?hl=en&gl=in) | Only competitors |
| [Gobind Galaxy](https://www.google.com/maps/search/Gobind+Galaxy/@30.7464,76.6456,13z?hl=en&gl=in) | Maps jumped straight to **Gobind Electronics**, an electronics wholesaler in Jhungian |
| [Gobind Galaxy Kharar](https://www.google.com/maps/search/Gobind+Galaxy+Kharar/@30.7464,76.6456,13z?hl=en&gl=in) | 7 unrelated "Gobind" places: Electronics, Mart, Store, furniture, a gurudwara, enclave, Enterprises |
| [8699339947](https://www.google.com/maps/search/8699339947/@30.7464,76.6456,13z?hl=en&gl=in) (Punjab office phone) | "Google Maps can't find 8699339947" |
| [9453517514](https://www.google.com/maps/search/9453517514/@30.7464,76.6456,13z?hl=en&gl=in) (main phone) | "Google Maps can't find 9453517514" |
| [cleantankservices.com](https://www.google.com/maps/search/cleantankservices.com/@30.7464,76.6456,13z?hl=en&gl=in) | Competitors, plus Cleantank Systems of Mumbai |
| [Jamuna Apartments Khanpur Kharar](https://www.google.com/maps/search/Jamuna+Apartments+Khanpur+Kharar/@30.7464,76.6456,13z?hl=en&gl=in) (office building) | The condominium listing only, 4.1, Khanpur, Kharar |

The phones and address come from `src/site.ts`.

Deeper checks, all from a Kharar browser:

- [Clean Tank Services, five scrolls, 40 rows](https://www.google.com/maps/search/Clean+Tank+Services/@30.7464,76.6456,13z?hl=en&gl=in): no match in any row. The list had not ended at row 40.
- [Clean Tank Services at zoom 16 on Jamuna Apartments](https://www.google.com/maps/search/Clean+Tank+Services/@30.7626739,76.630917,16z?hl=en&gl=in), 20 rows: no match.
- [Water tank cleaning at zoom 15 on Jamuna Apartments](https://www.google.com/maps/search/water+tank+cleaning/@30.7626739,76.630917,15z?hl=en&gl=in), 20 rows: no match. Dhiman Water tanker, Khanpur, is the closest related listing seen (tanker supply, 5.0, 062830 05911).

Name collisions to know about: ✅Cleantank Systems, Mumbai (5.0, 098923 14077, cleantank.co) surfaces on a cleantankservices.com search from both towns. Clean Today (Mohali) and Crystal Clean rank high on "Clean Tank" — [Maps](https://www.google.com/maps/search/Clean+Tank/@30.7046,76.7179,13z?hl=en&gl=in).

Project context: `docs/AEO-GEO.md` records "No Google Business Profile" as a gap and says PRODUCT.md calls the profile in progress.

### Inferences
- A live public listing named Clean Tank Services at Kharar would very likely surface on an exact-name search from 2 km away, even in limited view, since the same view returned a 12-row Kharar list down to no-review listings. So the likeliest state is no public profile.
- A profile that exists but is unverified, pending or service-area-only with hidden address could still miss these tests. The phone search would normally catch a verified one.
- "Gobind Galaxy" has no brand presence on Maps at all, and Maps auto-resolves it to an electronics shop. Clean Tank Services is the name to register, with the endorsement line kept off the business name.
- Today, someone searching "Clean Tank Services" in Kharar sees A-One first. Its rivals are capturing this brand search.

### Gaps
- Only the owner's Google account can confirm whether a profile is pending or unverified. Checking that is a task for the owner.

## Which firms lead each town, and does Kurali and Ropar data now work?

### Takeaway
Shree Balaji has the widest reach, Welco the strongest top ranks, and A-One holds Kharar and Mohali. Panchkula belongs to its Sector 4 cluster. **Kurali and Ropar now give a partly usable answer: neither town has a Maps listing for a water tank cleaner that I could find.** The nearest real ones are about 12 km from Kurali and 26 km or more from Ropar.

### Cited Findings

Leaders from the six-query tables above. "6/6" means in the top 10 on all six queries; "avg" is mean rank when present; #1 is how many of the six it led.

| Town | Leaders on bare queries | Note |
|---|---|---|
| Chandigarh | Shree Balaji 6/6, avg 1.5, #1 ×3. Welco 5/6, avg 1.4, #1 ×3. Watan 6/6, avg 3.7. Tricity 6/6, avg 4.3 | Both leaders sit 8 km out in Mohali; nearest is Reyaan at 2.5 km. With "Chandigarh" in the query Tricity is #1 |
| Mohali | A-One 6/6, avg 1.7, #1 ×2. Welco 5/6, avg 2.2, #1 ×3. Shree Balaji 6/6, avg 3.0, #1 ×1. Wazara 5/6, avg 3.4 | A-One ranks first from 8 km |
| Panchkula | Solanki 6/6, avg 2.5, #1 ×2. VK 6/6, avg 2.5, #1 ×1. City Care 4/6, avg 1.5, #1 ×2. MK 4/6, avg 3.5, #1 ×1. Shiv 6/6, avg 4.8 | Sector 4 cluster, under 1 km from the centre point |
| Zirakpur | Watan 6/6, avg 2.2, #1 ×2. Welco 5/6, avg 3.2, #1 ×2. Clean Today 5/6, avg 3.0, #1 ×1. VK 6/6, avg 4.3, #1 ×1 | All are 6 to 10 km away; no leader is based in Zirakpur. With the town name, Expert deep cleaning is #1 |
| Kharar | A-One 5/6, avg 1.0, #1 ×5. Shree Balaji 6/6, avg 2.3, #1 ×1. Wazara 5/6, avg 2.4. Star 5/6, avg 4.8 | A-One led every query it appeared on |
| New Chandigarh | Tricity 6/6, avg 1.0, #1 ×6. Wazara 5/6, avg 3.4. East cleaning 4/6, avg 3.5 | Tricity holds it outright, from Dhanas 5.3 km away |
| Dera Bassi | Shiv 6/6, avg 4.3, #1 ×1. Safai guru 5/6, avg 3.2, #1 ×1. B Two 5/6, avg 3.2, #1 ×1 | Sai Tank (Navi Mumbai) is #1 on three queries: discount it |
| Kurali | Wazara 6/6, avg 3.2. A-One 6/6, avg 4.3, #1 ×2. Shree Balaji 6/6, avg 4.8 | All 13 to 16 km away. Sai Tank is #1 on three queries: discount it |
| Ropar | None local | 56 of 60 slots are far listings. Rows 9 and 6 on two queries are A-One at 28.7 km |

Across all towns, out of 540 top-10 slots: Shree Balaji 31 slots in 8 towns, Welco 27 in 7, Axico 25 in 6, Watan 23 in 6, A-One 23 in 5, VK 21 in 4, Wazara 21 in 4, Solanki 20 in 4 (directory table).

**Kurali and Ropar, in detail.** Earlier: "Mumbai-area and mixed results". **Unchanged** for a search with no coordinates — [Kurali](https://www.google.com/maps/search/water+tank+cleaning+Kurali), [Ropar](https://www.google.com/maps/search/water+tank+cleaning+Ropar). **Changed** with coordinates and the town name in the query:

- [water tank cleaning Kurali, at Kurali](https://www.google.com/maps/search/water+tank+cleaning+Kurali/@30.8319,76.575,13z?hl=en&gl=in): Wazara 13.1 km, Shree Balaji 16.3, Punjab Water Solutions 2 km (water treatment plant, Focal Point Chanalon, 5.0, panjabwatersolutions.com), A-One 13.4, Tricity 17.8, then more Tricity firms. No Mumbai row in the top 14.
- [water tank cleaning Morinda, at Kurali](https://www.google.com/maps/search/water+tank+cleaning+Morinda/@30.8319,76.575,13z?hl=en&gl=in): adds Northern Pest Control Service, Morinda (4.9, 090419 33007, northernpcs.com) and "water tanker", Saheri (5.0, 085669 40028).
- [water tank cleaning Ropar, at Ropar](https://www.google.com/maps/search/water+tank+cleaning+Ropar/@30.9664,76.5331,13z?hl=en&gl=in): Shiwalik home care solutions, Rupnagar 0.2 km (4.8, category Electronics Accessories Wholesaler), A-One 28.7, Wazara 27.8, Shree Balaji 30.7, J.K 43.3, Pure Shine 37.9, Universal water tank cleaner's 37.9, Ket 30.9, Eco Green Solar System 3.2 (Solar Energy Company, 5.0, 081460 25300), Big State Services 40.1 (Water Tank Cleaners, 4.8, 094658 61600).
- [tank cleaning Rupnagar Punjab, at Ropar](https://www.google.com/maps/search/tank+cleaning+Rupnagar+Punjab/@30.9664,76.5331,13z?hl=en&gl=in): Wash Kiya Ropar (dry cleaner, 1.7 km), Wazara, King Detailer Ropar (auto detailing, 2.5 km), "Overhead Water Tank" (a Shampura landmark, category Drinking water), then Tricity firms.
- At zoom 11 from each town, without the town name, the Tricity firms return: [Kurali](https://www.google.com/maps/search/water+tank+cleaning/@30.8319,76.575,11z?hl=en&gl=in) has no far row in its top 14, [Ropar](https://www.google.com/maps/search/water+tank+cleaning/@30.9664,76.5331,11z?hl=en&gl=in) has 2.

Earlier claims on Busy Bucket's reach, rechecked: it reached the top 10 only once on bare queries (Kharar, 5.9 km). It shows much more on town-name queries: Panchkula #3, Zirakpur #10, Dera Bassi #5, Mohali #5, Kharar #9 (links above).

Ratings: of 39 Tricity listings in the directory, 33 are 4.8 or above, 5 are below (Busy Bucket 4.7, Shiv 4.5, Crystal Clean 4.4, Ket 4.4, CleanDin 4.3) and 1 has none.

### Inferences
- With no tank-cleaning listing within about 12 km of Kurali or 26 km of Ropar, and Clean Tank's Kharar office on the Kurali highway, those two towns look like the easiest Maps positions to take. A Kharar address is unlikely to rank high in Ropar on distance alone, so plan on town pages and service areas there. The absence is a finding from Maps only; firms without listings may well work there.
- Ranks do not simply follow distance: A-One outranks closer Mohali firms from 8 km. With review counts hidden I cannot say why, though reviews are the obvious candidate.
- In Kharar, Clean Tank's home market, the top three are A-One, Shree Balaji and Wazara. These are the firms to beat.

### Gaps
- Whether Mumbai firms would appear for a real Kurali or Ropar searcher. Test from a phone there.
- Whether Big State Services, Universal water tank cleaner's or North clean service actually serve Ropar; those listings show no street address.

## What do readable reviews say?

### Takeaway
Only Welco's reviews could be read: 50 of its 1,419. They praise punctuality, staff and speed, and they are nearly all recent. No no-shows and almost no complaints appear, but this is one firm's own paid page, so it tells you little about the market.

### Cited Findings
Source for all of this section: [Welco reviews](https://business.google.com/v/welco-tank-cleaning-services/05022997511415029701/7d5e/_/rev), read 2026-10-31. Per-review star ratings were not in the page text. Tallies are keyword matches over the 50 reviews, so treat them as approximate.

| Theme | Reviews of 50 | What they say |
|---|---|---|
| Punctuality and speed | 25 | "arrived on time"; one says they came in 20 minutes after a 6 am call; two 1,000 L tanks in under 45 minutes |
| Staff behaviour | 13 | "well-behaved", "polite", named staff (Subhash, Varinder Singh, Ranjeet, Sonu) |
| Hygiene and disinfection | 11 | One lists "deep scrubbing, vacuuming, and anti-bacterial sanitization" |
| Mess and neatness | 10 | "without creating any mess"; "left the area spotless" |
| Equipment | 7 | Machinery to drain, "high pressure" |
| Chemicals | 4 | All favourable: "proper chemical cleaning", "high pressure and chemical washing", "tools and chemical" |
| Fair price | 4 | "reasonable rate", "Nominal Charge" |
| High price | 1 | Kamal Singh: flat **₹1,500 for an underground tank** felt expensive for about 15 minutes' work; suggests pricing by size |
| Damage or poor communication | 1 | Rohit Mankotia: water drained without asking, causing neighbour complaints and wet bags; tank ball broken and not reported |
| No-shows | 0 | None found |

Other details:

- Age: 48 of 50 are 8 months old or newer, with 1 at "a year ago" and 1 at "2 years ago".
- Out-of-area work: one review says Ambala City; another says Solan, at Shoolni University, HP.
- Identical wording under different names: "The entire tank was properly washed and cleaned from inside" and "punctual, polite and worked with full dedication" appear under both Roshan Sharma and Chirag Sharma. "Great service by Welco team" with "high pressure and chemical washing" appears under Gurpreet Singh Gurpreet, and most of it under rohit kaira.

### Inferences
- Reviewers talk about behaviour and speed far more than about method. Chemical use reads as a plus to them, so a chemical-free pitch may not land by itself.
- Repeated sentences under different names, plus the concentration of reviews in recent months, fit an organised push for reviews, possibly assisted. That is not proof of fakes, and the earlier notes reached a similar view.
- The ₹1,500 flat underground charge is one customer's report of a Welco price, not a published rate. It is a useful data point for the price work.

### Gaps
- Review text for every firm other than Welco. Maps needs sign-in for it, and earlier notes record Justdial as blocked, so I did not retry Justdial.
- Complaints elsewhere: one web search for no-show or overcharging complaints about Mohali tank cleaners found none, which is weak evidence because search tools index such complaints poorly.
- Complaints on Welco: Google shows a merchant's review page in its default order, and low-star reviews may sit far down. The 50 shown cannot represent all 1,419.
