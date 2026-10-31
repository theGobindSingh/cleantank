# AGENTS.md

The website of Clean Tank Services, an initiative of Gobind Galaxy: scientific, mechanized water tank cleaning. Next.js (App Router), TypeScript strict, Tailwind v4, Payload CMS, pnpm. English, Hindi and Punjabi.

`CLAUDE.md` is a symlink to this file (created by `scripts/link-agents.js` on install). Edit this file only.

## Commands

- `pnpm install` — install deps and create agent symlinks
- `pnpm dev` — dev server. Agents never start it, or any other server, on their own. Use the one already running on port 3000. If it isn't up and you need one, ask the user. `pnpm test:e2e` starting its own server is the one exception
- `pnpm build` — auto-fixes lint, then builds; the main quality gate
- `pnpm test` — unit tests (Vitest, `src/**/*.test.ts`)
- `pnpm test:e2e` — builds, then runs the Playwright browser and axe accessibility tests in `e2e/`
- `pnpm lint` / `pnpm lint:fix` — Prettier + ESLint on `src/` and `e2e/`
- `pnpm payload` — Payload CLI (type and import-map generation), on the direct database URL
- `pnpm migrate:create <name>` / `pnpm migrate` — create and run database migrations (Neon Postgres; schema push is off)
- `pnpm vercel-build` — what Vercel runs on deploy: `pnpm migrate`, then `pnpm build`

## Where things live

- `src/app` — routes and Next.js special files only. The site lives in `(frontend)/[lang]`, the Payload admin and API in `(payload)`. Route-only UI sits beside its route; shared code lives in the folders below
- `src/payload.config.ts`, `src/collections`, `src/globals` — Payload CMS config, collections and globals
- `src/blocks` — Payload blocks for page layouts: each block's `config.ts` beside the component that renders it, and `index.tsx` mapping block types to components
- `src/components` — shared components
- `src/utils` — small framework-agnostic helpers
- `src/i18n`, `src/proxy.ts` — languages, interface-string dictionaries and language routing
- `src/styles` — design tokens (`globals.css`), fonts, base styles, component CSS
- `src/site.ts` — site-wide constants: name, brand lines, URL, contacts, GSTIN, and `isLive`, which keeps Sentry and PostHog paused until launch
- `src/instrumentation.ts`, `src/instrumentation-client.ts` — Sentry and PostHog start-up (see docs/CONVENTIONS.md, Analytics and errors)
- `e2e/` — Playwright browser and accessibility tests; `e2e/pages.ts` lists the pages they visit
- `docs/` — product, design and convention docs (below), and `docs/LAUNCH.md`, the checklist to finish before going live. `docs/AEO-GEO.md` covers answer and generative engine optimization, with its own pre-launch checklist. `docs/CLIENT-LOGOS.md` lists the clients waiting for an SVG logo before they can join the clients band. `docs/ref/INFO-BANK.md` holds the owner-approved facts; nothing else in `docs/ref/` is used. `docs/research/seo-tools/` holds the SEO, AEO and GEO tools research, `docs/research/competitors-prices/` the Tricity competitor and price research, `docs/research/local-recheck/` the browser recheck of both, and `docs/research/pc-run/` the owner's run from Kharar, the only round that read Google Search, Justdial and IndiaMART

Discover the rest from the code; path aliases are in `tsconfig.json`.

## Rules

- Read [docs/CONVENTIONS.md](docs/CONVENTIONS.md) before writing code, [docs/DESIGN.md](docs/DESIGN.md) before visual work and [docs/PRODUCT.md](docs/PRODUCT.md) before writing copy or planning pages.
- All content goes in Payload: page text, images, posts, SEO fields. Two exceptions: site-wide constants in `src/site.ts`, and the `/design` reference page, which documents the code (see docs/CONVENTIONS.md). Add a collection or global for it and read it with the Local API; never hardcode content in components.
- Style through the tokens in `src/styles/globals.css`; no raw colors in components.
- No anonymous functions: name every callback/handler as a `const` before passing it.
- Never use `suppressHydrationWarning`; fix the cause.
- ESLint enforces a file-size limit. When it flags a file, split it into a folder (`index` + focused siblings) instead of disabling the rule.
- The site must comply fully with India's DPDP Act (docs/PRODUCT.md, Legal). Anything that collects personal data gets checked against that section first.
- Never read, print or commit `.env` files or secrets. Ask the user to set them; document new variables in `.env.example`.
- When a change makes any doc wrong, update that doc in the same change.
- Never credit Claude, Anthropic or any AI in commits or PRs: no `Co-Authored-By` trailers, no "Generated with" lines. `.husky/commit-msg` strips Claude and Anthropic ones anyway.
- Don't edit `src/app/(payload)` or `src/payload-types.ts`; Payload generates them. After changing collections or config, run `pnpm generate:types`, `pnpm migrate:create <name>` for any schema change, and `pnpm generate:importmap` if you added admin components. Until the site is live (`isLive` in `src/site.ts` is false), the owner has approved migrations and content writes without asking; after launch, ask first. The `content-updater` subagent never needs approval to seed or update Payload content, before or after launch.

## Deciding and committing

- Decide on your own from these docs and INFO-BANK. Ask the user only when the docs are silent, contradict each other or no longer match the code. Write the answer into the right doc so nobody has to ask again.
- The user co-owns the business; their decisions are final on brand, copy and claims.
- Don't run the test suites after every change. Show the result and ask the user whether they want changes; make them and ask again. Run `pnpm test` and `pnpm test:e2e` only once the user says there's nothing more. Lint and type checks while working are fine.
- Work in the main checkout on `master`, one task at a time; no worktrees or branches.
- Commit as soon as the work passes the checks, small and one concern each, without waiting for approval.
- Push to `master` only after the user approves.
- All work tracking lives in Track Suru, project `CT` (https://tracksuru.letmecome.in/p/CT), through the `track-suru` MCP server. Find or create the issue under its epic before starting and set it In Progress. Set it Done when it's committed, and file follow-ups there.

## Every code change

Use the `ponytail` skill at level `full` (project default; `lite` or `ultra` only if the user asks): smallest complete change, reuse before writing. Use `ponytail-review` to review a change and `ponytail-audit` for the whole repo.

## Writing content

Use the `human-writing` skill whenever you write content people will read: UI copy, metadata, docs, READMEs, commit messages and PR descriptions.

To change, seed or translate site content, hand it to the `content-updater` subagent (`.claude/agents/content-updater.md`), Opus. Tell it which content and what should change; it writes English, Hindi and Punjabi and saves them to Payload. Use it for any page, block, global, client or testimonial text, rather than writing Payload content yourself. Schema and code changes stay with you: finish those first, then send it the content.

## Done means

`pnpm build` passes with no lint errors and `pnpm test` passes. After UI or routing changes, `pnpm test:e2e` passes too. If they can't, report the full error output instead of marking the task complete.

## Tools and skills

- Playwright MCP is a project dependency, configured for Claude Code (`.mcp.json`, pre-approved in `.claude/settings.json`) and opencode (`opencode.jsonc`). Use it to check UI changes in a real browser. If it reports a missing browser, ask the user to run `pnpm browser:install`.
- Before writing code against a library, framework or CLI, fetch its current docs with the Context7 CLI (`npx ctx7@latest`) — see the `find-docs` skill. Don't rely on memory for APIs.
- `track-suru` is the MCP server for the work tracker. It's configured per machine, and its token never goes in the repo.
- Claude Code replies in the terse `caveman` output style (`.claude/output-styles/caveman.md`, set in `.claude/settings.json`). Switch it in `/config`.
- Skills live in `.agents/skills` (linked to `.claude/skills`). If a skill relevant to the task is available — here or in your environment — use it.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
