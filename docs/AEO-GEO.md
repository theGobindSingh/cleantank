# AEO and GEO

How the site gets found and quoted by answer engines (Google's AI Overviews, featured snippets, voice assistants) and generative engines (ChatGPT, Claude, Perplexity, Gemini). Classic SEO is covered in docs/CONVENTIONS.md (Pages, SEO and security) and the style guide's §13.19.

These engines answer the question themselves and cite a few sources. To be one of them, a page has to be easy to crawl, say plainly who we are and where we work, and hold short, direct answers to the questions people ask. Everything below serves one of those three.

The audit was done on 29 Oct 2026 against commit`c40aaa2`. The checklist at the end is part of docs/LAUNCH.md: finish it before going live.

## What already works

Pages are prerendered on the server (`dynamicParams = false` on the language layout,`afterChange` revalidation on pages). Crawlers that don't run JavaScript, which includes most AI crawlers, get the full text.

The FAQ block (`src/blocks/faq/index.tsx`) renders each question and answer in a native`<details>` element. The answer is in the HTML even while it's collapsed, and the question-then-short-answer shape is what engines lift into a reply. The block is already on`/homes` and`/process`.

Every page has a canonical URL and hreflang links for`en`,`hi` and`pa`, plus`x-default` (`pageAlternates` in`src/i18n`). The sitemap lists every route in all three languages with the same alternates. That matters more for us than for most sites: many homeowners search in Hindi or Punjabi, and an engine answering in Hindi will look for a Hindi page to cite.

`robots.ts` allows every user agent on everything except`/admin` and`/api`, and keeps`/api/media/file/` open so images are indexable. So GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot and Google-Extended can all crawl the site. Nobody chose this; it's the default. It's the right default for a service business that wants to be recommended (see "AI crawler policy" below).

Each page has its own`metaTitle` and`metaDescription` in Payload, and each language has a social preview image (`[lang]/opengraph-image.tsx`).

The copy is a good base. The process page answers what buyers ask: how often to clean, what goes into the tank, what to do before the visit and what you get after it.`/homes` covers the price, the service area with a map, and when to clean. These are the questions people type into ChatGPT.

The content rules help too. INFO-BANK limits the claims to facts the owner approved, and the site avoids ratings, "guaranteed" and superlatives it can't back. Engines are increasingly wary of pages that oversell, and a page with checkable facts (since 2008, GSTIN, Udyam number, ISO 9001:2015 with the certificate number) is easier to trust.

## Gaps

In order of impact. Each has an item in the checklist below.

### 1. No structured data

The site has no JSON-LD on any page. This is the largest gap. Structured data is how an engine learns, without guessing, that Clean Tank Services is a local business in Punjab that cleans water tanks, with this phone number and this service area.

§13.19 of the style guide already specifies it: Organization and LocalBusiness JSON-LD from INFO-BANK facts only, with no rating and no ISO claim. It was never built.

What to add:

-`Organization` on every page, in the language layout: name,`legalName` (Gobind Galaxy), URL, logo (`/ct-logo-mark.svg` on the site URL, the square mark because Google needs at least 112 px in both directions; `/ct-logo.svg` is the wide lockup for everything else), description, email, telephone,`foundingDate` 2008, and`sameAs` once profiles exist (gap 4). Read every value from`src/site.ts`.
-`LocalBusiness` on the home pages and`/contact`. Use the Kharar correspondence office as the address. The Kanpur registered office is left off the site (owner's call), so it stays out of the markup too.`areaServed` lists the Tricity cities from the service-area block. Add opening hours only once the owner confirms them. The schema.org type:`LocalBusiness` is safe; check whether a more specific subtype fits before picking one.
-`Service` on`/homes`,`/process` and the other audience pages: service type "Water tank cleaning", the provider, the area served. Add`offers` with prices only if they match the price list block exactly.
-`BreadcrumbList` on inner pages.
-`WebSite` with`inLanguage` per language.

Never add`aggregateRating` or`review` markup. The site has no ratings, and Google penalises self-served review markup on a business's own site.

Build it as one small helper that turns`site` into JSON-LD objects, rendered as`<script type="application/ld+json">`. Check the current Next.js guide in`node_modules/next/dist/docs/` for the recommended way to do this before writing it.

### 2. No Google Business Profile

The owner's call (31 Oct 2026) is to finish the profile after the site is live: verifying the site in Search Console may verify the profile without a video, though Google doesn't guarantee it. For "near me" questions, Google's AI answers and Maps lean on the Business Profile more than on any website, and Gemini and ChatGPT both pull from map data for local queries. Set it up as a service area business with the address hidden, under the name Clean Tank Services. The name and phone on the profile must match`src/site.ts` character for character. Once it's live, its URL goes into`sameAs`.

### 3. FAQ answers have no schema

The FAQ block should output`FAQPage` JSON-LD built from the same Payload items it renders, so the markup and the visible text can't drift apart. Since 2023 Google shows FAQ rich results only for well-known government and health sites, so don't expect the snippet in Google results. The markup is still worth having: it labels question-and-answer pairs clearly for every other engine, and it's a few lines in one file.

The FAQ content matters more than the markup. Write each answer so its first sentence answers the question on its own, without "Yes," or "It depends". Engines quote that first sentence. Questions should use the words people actually type, in each language, not translations of our internal terms.

### 4. Nothing outside the site confirms the business

Engines check what the site says against other sources before they recommend a business. INFO-BANK lists no social profiles or directory listings, so today nothing outside our own domain says Clean Tank Services exists. Ways to build it, roughly in order:

- The Google Business Profile (gap 2), then Bing Places. ChatGPT's search draws on Bing's index, so Bing matters more than its market share suggests.
- Profiles on whichever social platforms the business will actually keep up (Instagram, Facebook, YouTube for before/after videos), with the same name, phone and descriptor.
- Listings on JustDial and IndiaMART, which rank for Indian local service queries and are cited by AI answers.
- Mentions from clients: a housing society newsletter, a hospital's vendor page, a local news piece. One real mention beats ten directory listings.

The domain lapsed and was bought back (registered again on 16 Sep 2026), so links to the older site may be gone. Search Console will show what's left.

Every one of these uses the same name, address and phone as`src/site.ts`. Mismatches split the business into several weaker entities.

### 5. No`llms.txt`

`llms.txt` is a proposed file at the site root that gives language models a short markdown summary of the site and links to its main pages. No major engine has confirmed it uses the file, so this is low priority. It costs one route file, though, and if we add it, generate it from`site` and the pages collection so it can't go stale.

### 6. The sitemap's dates are wrong

`sitemap.ts` sets`lastModified: new Date()` on every entry, so each build tells crawlers that every page changed today. Crawlers learn to ignore the field, and we lose a real freshness signal. Use each page's`updatedAt` from Payload instead.

### 7. Five pages, no long-tail content

The sitemap has five routes. Generative engines reward pages that answer one specific question in depth, and the questions people ask about water tanks are specific: how often to clean an overhead tank in Chandigarh, whether a Sintex tank can be cleaned without draining it, what the white layer at the bottom is, whether bleaching powder is safe. Each could be a short guide in all three languages, with the answer in the first paragraph and a link to the relevant service page.

This needs a new collection (guides or posts) and owner-approved facts for each one. It's the biggest long-term opportunity on this list, but it's content work, not a launch blocker. Decided on 31 Oct 2026: yes, but later, after the more pressing work.

### 8. AI crawler policy isn't written down

The site lets every AI crawler in because`robots.ts` allows`*`. For a business that wants engines to recommend it, that's right. Decided on 31 Oct 2026: allow them all, training crawlers included. The user wants AI engines encouraged, so nobody should block these bots. For the record, the two groups are:

- Search and answer crawlers (OAI-SearchBot, PerplexityBot, ClaudeBot's search use, Googlebot): allow. Blocking them takes us out of their answers.
- Training crawlers (GPTBot, Google-Extended, CCBot): allowing them puts our pages in future model training. That helps the brand be known, and the copy is public anyway. Blocking them doesn't affect Google Search.

Check each crawler's current user-agent name in its vendor's docs before writing rules for it; the names change.

### 9. Facts are spread across pages, not stated once

Engines extract facts more reliably from a sentence like "Clean Tank Services has cleaned water tanks in the Tricity since 2008" than from a stat tile reading "15+ years". The key facts (who, what, where, since when, how to book) should each appear once in plain sentences, on the about page and in each home page's intro, in all three languages. Mostly this means checking the existing Payload copy, not writing new copy.

### 10. Nothing measures it

Neither PostHog nor Search Console is live yet, so nobody will know whether any of this works. After launch, track referrals from`chatgpt.com`,`perplexity.ai`,`gemini.google.com` and`copilot.microsoft.com` in PostHog, and check Search Console's performance report, which counts AI Overview impressions with Search. Every month or so, ask the main engines "water tank cleaning in Mohali" and similar questions in all three languages, and note whether we're cited.

## Checklist

This list defines what must be true. Status lives in Track Suru, project `CT` (https://tracksuru.letmecome.in/p/CT), so the boxes here stay unticked. docs/LAUNCH.md asks for this checklist to be complete before going live; items marked "after launch" can wait.

### Structured data

- [ ] A helper builds JSON-LD from`src/site.ts`; no value is retyped.
- [ ]`Organization` and`WebSite` on every page, per language.
- [ ]`LocalBusiness` on the home pages and`/contact`, with the Kharar office and the Tricity service area. No Kanpur address, no rating, no ISO claim.
- [ ]`Service` on the audience pages, with`offers` only if it matches the price list.
- [ ]`BreadcrumbList` on inner pages.
- [ ] The FAQ block outputs`FAQPage` from its own items.
- [ ] Every page passes Google's Rich Results Test and the Schema.org validator with no errors.

### Content

- [ ] Each FAQ answer's first sentence answers the question alone, in all three languages.
- [ ] Who, what, where, since when and how to book are each stated in a plain sentence on the about page and each home page.
- [ ] The owner has decided whether to add a guides collection for long-tail questions. Record the decision in docs/PRODUCT.md.

### Crawling

- [ ] The AI crawler policy is decided and recorded in this file.`robots.ts` matches it.
- [ ]`sitemap.ts` uses each page's`updatedAt` for`lastModified`.
- [ ]`llms.txt` is added, generated from`site` and the pages collection, or deliberately skipped (say which here).

### Outside the site

- [ ] After launch: the Google Business Profile is live as a service area business, and its name and phone match`src/site.ts` exactly.
- [ ] The site is verified in Bing Webmaster Tools and the sitemap submitted. The business is on Bing Places.
- [ ] Each social profile the business will keep up exists, matches`src/site.ts`, and is in`sameAs`.
- [ ] After launch: JustDial and IndiaMART listings, with the same details.

### Measuring

- [ ] After launch: PostHog shows referrals from AI engines as their own channel.
- [ ] After launch: someone owns a monthly check of whether the main engines cite the site, in all three languages.
