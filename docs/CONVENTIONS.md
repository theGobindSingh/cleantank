# Conventions

How code in this repo is shaped. Principles only — the code is the reference for specifics.

## Files and folders

- Everything on disk is `kebab-case`. Identifiers keep normal TS/React casing.
- One folder per unit: `button/index.tsx`, plus `types.ts`, `styles.ts` or helpers beside it when needed.
- Shared components go in `src/components/`. Components used by one route live in that route's folder (`src/app/<route>/components/`). Promote a component to `src/components/` only when a second route needs it.
- `src/app` has two root layouts in route groups: `(frontend)/[lang]` for the site and `(payload)` for the admin. Every site page lives under `[lang]` (see Languages). `(frontend)` itself holds only the favicon (`icon.svg`) and `apple-icon.png`; `public/favicon.ico` is the same mark for crawlers. The social preview image is `[lang]/opengraph-image.tsx`: it has to sit beside the layout that sets `openGraph`, or that object drops the image. It draws with the static fonts in `public/assets/fonts`, since `next/font` and variable fonts don't work there. The `src/app` root holds only files that cover both: `global-not-found.tsx`, `global-error.tsx`, `robots.ts` and `sitemap.ts`. Keep route files thin: compose, don't implement. Shared UI goes in `src/components`, fonts in `src/styles`.

## Code

- Components are `const` arrow functions with a default export.
- Server Components by default. Add `"use client"` only at the smallest leaf that needs state, effects or browser APIs.
- Name every function, including callbacks and handlers (`useEffect(syncTheme, [])`, `onClick={handleToggle}`).
- Types are strict (`@tsconfig/strictest`). No `any`, no `!` assertions, no lint-disables without a written reason.
- Every link is `Link` from `@components/link`; never `next/link` or a bare `<a>` (ESLint blocks both outside that folder). It uses `next/link` for routes and a plain `<a>` for external links (new tab, `rel="noopener noreferrer"`), `mailto:`, `tel:` and other schemes. Pass `native` to force a plain `<a>` and a full page load.
- Import with path aliases (`@components/*`, `@utils/*`, …) rather than `../..` chains.

## Styling

- Tailwind utilities first. Prefer the semantic role classes (`bg-bg`, `text-fg-muted`, `text-heading`, `bg-primary`) over ramp stops (`bg-primary-700`), and never use raw hex. Tailwind's built-in palette is removed. Roles follow dark mode; ramp stops don't.
- Build or merge class strings with `tw` from `@utils/tw`, as a tag (``tw`flex gap-2` ``) or a call (`tw("flex", isActive && "text-accent-600", className)`). It drops falsy values, and the editor and ESLint check classes in both forms.
- For typography, use the text components in `@components/html` (`H1`–`H3`, `P`, `Span`, `Hr`), whose `$size` takes the `--fs-*` names (`h1`, `body`, `small`, …), or plain elements with utilities. Pick one style per project.
- Every outermost block of a page (header, hero, each section, footer) is a `CommonFullWidthWrapper` from `@components/common-full-width-wrapper`. The wrapper is the block: set its tag with `element` (default `section`) and never nest it inside another `<section>`. Don't hand-roll `mx-auto max-w-*` containers.
  - The outer element spans the screen. It takes the background, position and height through `wrapperClassName`, and attributes such as `data-surface="band"` through `wrapperProps`.
  - The inner div holds the children at 90% of the width, never wider than 1800 px (`containerSize`, `maxContentWidth`). Style it with `className`.
  - Full-width layers such as a scrim or a full-bleed image go in `beforeContainer` or `afterContainer`, which render in the outer element around the inner div. The hero block (`src/blocks/hero`) is the example.
- When a component's CSS outgrows utilities, put it in a co-located `<name>.css` written with `@utility`, and register it in `src/styles/components.css`. `button/button.css` is the example.
- Dark mode comes from the theme (below); components don't branch on theme in JS. Use the `dark:` variant only for things tokens can't express (e.g. swapping icons). Navy bands take `data-surface="band"`, which re-maps the tokens inside them the same way.

## Languages

The site is in English, Hindi and Punjabi (`src/i18n/config.ts`). English has no prefix (`/amc`); the others do (`/hi/amc`, `/pa/amc`).

- `src/proxy.ts` rewrites unprefixed URLs to `/en/...` internally and redirects `/en/...` to the unprefixed URL. It also picks the language: the `lang` cookie remembers it for a year. On a first visit to an unprefixed URL the cookie comes from the browser's `Accept-Language` (`preferredLocale`), and the language switcher's links carry `?lang=` to change it. A remembered Hindi or Punjabi redirects unprefixed URLs (307) to their prefixed version; prefixed URLs never redirect, so shared links open in the language they were shared in. Pages read the language from the `lang` param with `toLocale((await params).lang)`; client components use `useParams`.
- Page content comes from Payload, which has the same three locales. Mark a field `localized: true` to translate it and pass `locale` to the Local API. Missing translations fall back to English.
- `src/i18n/dictionaries` holds only interface strings that must work without the CMS (error and 404 pages, control labels, the header and footer labels, and for now the holding `/contact` page and the under-development page that `/organisations` and `/franchise` show until their CMS pages exist). The header and footer labels live there because both render in the root layout, on error pages too, and their routes are fixed in code. The footer's facts (contacts, offices, ISO details, GSTIN) come from `src/site.ts`. Add a key to `en.ts` first; the type makes `hi.ts` and `pa.ts` follow.
- Build links with `localePath(locale, path)`, and give each page `alternates: pageAlternates(locale, path)`: the canonical URL plus `localeAlternates(path)` (every language plus `x-default`, the unprefixed URL). Add new routes to `sitemap.ts` without a prefix; it lists every language.
- Links that change the language take `native` (`<Link native>`), so they load the page in full. `[lang]` is part of the root layout, and a client navigation would rebuild `<html>` and the theme script in the browser. `@components/language-switcher` does this.
- Set `lang` on any fragment in another script (see docs/DESIGN.md, Typography).

## Theme

An inline script in the root layout's `<head>` adds `<meta name="color-scheme">` before the page paints: the saved choice from localStorage, otherwise light. The OS preference is ignored, so the site is light until the visitor picks dark. CSS keys dark mode off that meta tag with `:root:has(...)`. Pages stay static because the server never reads the theme. It's an injected meta tag because React owns `<html>`, and any attribute change there before hydration causes a mismatch. `@utils/theme` holds that script and the helpers for changing the theme; reuse them rather than re-implementing.

## Pages, SEO and security

- Site-wide constants live in `src/site.ts`: name, brand lines, description, URL, phone, WhatsApp, email, offices and GSTIN. Read them from there, never retype them. Metadata, `robots.ts`, `sitemap.ts` and `opengraph-image.tsx` read from it. Give each page its own `metadata.title`, and add public routes to `sitemap.ts`.
- The 404 and error pages are thin wrappers around `@components/status-page`: `global-not-found.tsx` (unmatched URLs, English) and `(frontend)/[lang]/not-found.tsx` (`notFound()` calls) share `@components/not-found-content`, and `error.tsx` and `global-error.tsx` share `@components/error-content`. Every one of them shows the site header and footer: `not-found.tsx` and `error.tsx` get them from the `[lang]` layout, and `global-not-found.tsx` and `global-error.tsx`, which render their own document, add them directly.
- Security headers, including a static CSP, are set in `next.config.js`. When adding a third-party script, font, image host or API, allow its origin in the CSP.
- `/design` (`src/app/(frontend)/[lang]/design`) is the team's live design reference. It is the one page whose text lives in code rather than Payload, because it documents the code itself. It is `noindex` and not in the sitemap. Its swatches and samples read the rendered CSS, so token changes show up by themselves; when you add a token family, role or shared component, add it there too.
- Scrolling is smoothed by Lenis (`@components/smooth-scroll`). Mark nested scroll containers (modals, menus) with `data-lenis-prevent`.

## Analytics and errors

- Both are paused until launch: `site.isLive` in `src/site.ts` is `false`, which skips `Sentry.init` and `loadAnalytics()` even when their keys are set, so the consent banner doesn't show and feature flags stay `undefined`. Flip it to `true` only after working through [LAUNCH.md](LAUNCH.md).
- Sentry (`@sentry/nextjs`) reports errors from the server (`src/instrumentation.ts`), the browser (`src/instrumentation-client.ts`) and the error pages (`@components/error-content`). Errors only: no tracing and no session replay, so it needs no consent. Requests go through our own `/monitoring` route. It is off until `NEXT_PUBLIC_SENTRY_DSN` is set; `SENTRY_ORG`, `SENTRY_PROJECT` and `SENTRY_AUTH_TOKEN` upload source maps at build, then remove them from the public output. The project is `gs-org/clean-tank` (EU region), with IP storage turned off. Leave the DSN empty locally unless you are testing Sentry.
- PostHog (`posthog-js`) loads after the page from `@utils/analytics`, through the `/ingest` rewrites in `next.config.js`. It runs with `cookieless_mode: "on_reject"`: nothing is stored or captured until the visitor answers `@components/consent-banner`, and after a "no" visits are only counted without cookies. It and the banner are off until `NEXT_PUBLIC_POSTHOG_KEY` is set, and it never runs on `/admin`. Use `loadAnalytics()` to reach it; don't import `posthog-js` directly.
- PostHog does analytics and feature flags. Session replay is turned off in code (`disable_session_recording`) and isn't used. Read a flag in a client component with `useFeatureFlag(key)` from `@utils/use-feature-flag`; it is `undefined` until flags load, so render the default then.
- `src/proxy.ts` skips `/ingest` and `/monitoring`; keep it that way when changing its matcher.

## Testing

- Unit tests sit beside the code as `<name>.test.ts` and run with Vitest (`pnpm test`). Write one for logic with branches: helpers, parsers, `src/proxy.ts`.
- Browser tests live in `e2e/` and run with Playwright against a production build (`pnpm test:e2e`), on a desktop and a phone viewport. They cover routing, the theme toggle, keyboard focus and sideways scroll at 320 px.
- `e2e/a11y.spec.ts` runs axe (WCAG 2.2 A and AA plus best practices) on every page in every language, in light and dark mode, and fails on any violation. Add each new route to `e2e/pages.ts` so it gets checked.
- ESLint (`@webadeva/eslint-config`) runs the `jsx-a11y-x` rules on JSX, so `pnpm lint` and `pnpm build` catch static problems like missing alt text or labels. axe checks the rendered page.
- axe finds only part of what WCAG asks. Still check new UI by keyboard alone and at 200% zoom.

## Payload

Payload CMS runs inside the app: the admin is at `/admin` and the REST API under `/api`. It needs `PAYLOAD_SECRET` set before it starts. Data lives in Neon Postgres: the site connects through the pooled URL (`DATABASE_URL_POOLED`), and `pnpm payload` sets `PAYLOAD_DB_DIRECT` so the CLI and migrations use the direct one (`DATABASE_URL`). Uploads go to Neon's S3-compatible storage (`S3_BUCKET` and the `AWS_*` variables) and are served through `/api/media/file/...`, so Payload's access control still applies; with `S3_BUCKET` empty they stay in a local `/media` folder.

- All content lives in Payload, so editors can change it without a deploy. The exception is the site-wide constants in `src/site.ts`. Components get structure and styling; the words and images come from a collection (repeating things like posts) or a global (one-off things like the home page or footer).
- One file per collection in `src/collections` and per global in `src/globals`, registered in `src/payload.config.ts`. The `process` global holds the five steps that every page showing the process shares, with an optional benefit per step for the track and an optional purpose and equipment for the process page. The `clients` and `client-categories` collections sit under a Clients group in the admin; both are drag-ordered, and only clients ticked `cleared` (permission on file, INFO-BANK §7) show on the site. A client's `certificates` list holds its work completion certificates (scan, completion date, the work in one localized line), which the client list shows. The `testimonials` collection in the same group holds quotes with the person's name and role, which is personal data (quotes taken from work completion certificates leave the name empty and are credited to the role and organisation): anyone not logged in, including the public API, can read only quotes marked `permission`, and the block shows only those. Content that shows on several pages uses `revalidateSite` from `src/collections/revalidate-site.ts`. Use the types in `src/payload-types.ts`.
- Pages are documents in the `pages` collection, found by `slug` (`home` is `/`). `(frontend)/[lang]/[slug]` renders every other one, so a new page needs no route file: `/process` is the `process` document. Pages saved after a build render on first visit. Each page has optional localized `metaTitle` (falls back to `title`) and `metaDescription`. Add the route to `sitemap.ts` and `e2e/pages.ts`. Each page's `layout` is a list of blocks from `src/blocks`; add a block by writing its `config.ts` and component there, adding it to the `layout` field and to the map in `src/blocks/index.tsx`. A section with an H2 and an optional line uses `@components/section` for its heading and spacing (always the standard section header, `@components/section-headline`; strips such as the clients band set their own smaller heading and skip it). A heading takes `highlightField` from `src/blocks/highlight.ts` right after it, and the component passes `highlight` to `Section`, `SectionHeadline` or `@components/highlight`; CMS prose with blank-line paragraphs renders through `@components/paragraphs`. Pages are prerendered, so the collection's `afterChange` hook calls `revalidatePath` on save. Scripts that write pages outside Next pass `context: { disableRevalidate: true }`.
- Read data in Server Components with the Local API (`getPayload({ config })` from `payload`, with `config` from `@payload-config`), not over HTTP.
- Schema changes only go through migrations; automatic schema push is off, even in development, so a dev server never alters a shared database. After changing a collection or global, run `pnpm migrate:create <name>`, review the SQL in `src/migrations`, commit it, and run `pnpm migrate`. The files in `src/migrations` are generated: lint and the type check skip them.
- There is one database, production, and local development uses it too. Test entries are fine.

## Hosting

Until launch, the site is not on its domain: `https://www.cleantankservices.com` still serves the old site. The working preview is `https://nextjsdev.letmecome.in`, an nginx proxy to whatever `pnpm dev` runs on port 3000 of the dev server (`~/vps/docs/server.md`), so it is only up while a dev server runs there. Check UI and admin changes there. At launch the site moves to Vercel at `https://www.cleantankservices.com` (`SITE_URL`); the bare domain redirects to www. Vercel's build runs the `vercel-build` script (`pnpm migrate && pnpm build`), so each deploy migrates the database first and a failed migration stops the deploy. Uploads pass through the server, so Vercel caps each file at about 4.5 MB, which is enough.

## Git

Work on `master`. Conventional Commits (`feat:`, `fix:`, `docs:`, …), checked by commitlint in `.husky/commit-msg`. Keep commits small, one concern each, so any one can be reverted alone. The same hook strips Claude and Anthropic co-author trailers. Commit `pnpm-lock.yaml`.
