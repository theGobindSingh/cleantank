# AGENTS.md

The website of Clean Tank Services, an initiative of Gobind Galaxy: scientific, mechanized water tank cleaning. Next.js (App Router), TypeScript strict, Tailwind v4, Payload CMS, pnpm. English, Hindi and Punjabi.

`CLAUDE.md` is a symlink to this file (created by `scripts/link-agents.js` on install). Edit this file only.

## Commands

- `pnpm install` — install deps and create agent symlinks
- `pnpm dev` — dev server
- `pnpm build` — auto-fixes lint, then builds; the main quality gate
- `pnpm test` — unit tests (Vitest, `src/**/*.test.ts`)
- `pnpm test:e2e` — builds, then runs the Playwright browser and axe accessibility tests in `e2e/`
- `pnpm lint` / `pnpm lint:fix` — Prettier + ESLint on `src/` and `e2e/`
- `pnpm payload` — Payload CLI (type and import-map generation), on the direct database URL
- `pnpm migrate:create <name>` / `pnpm migrate` — create and run database migrations (Neon Postgres; schema push is off)
- `pnpm vercel-build` — what Vercel runs on deploy: `pnpm migrate`, then `pnpm build`

## Where things live

- `src/app` — routes and Next.js special files only. The site lives in `(frontend)/[lang]`, the Payload admin and API in `(payload)`. Route-only UI sits beside its route; shared code lives in the folders below
- `src/payload.config.ts`, `src/collections` — Payload CMS config and collections
- `src/components` — shared components
- `src/utils` — small framework-agnostic helpers
- `src/i18n`, `src/proxy.ts` — languages, interface-string dictionaries and language routing
- `src/styles` — design tokens (`globals.css`), fonts, base styles, component CSS
- `src/site.ts` — site-wide constants: name, brand lines, URL, contacts, GSTIN
- `src/instrumentation.ts`, `src/instrumentation-client.ts` — Sentry and PostHog start-up (see docs/CONVENTIONS.md, Analytics and errors)
- `e2e/` — Playwright browser and accessibility tests; `e2e/pages.ts` lists the pages they visit
- `docs/` — product, design and convention docs (below). `docs/ref/INFO-BANK.md` holds the owner-approved facts; nothing else in `docs/ref/` is used

Discover the rest from the code; path aliases are in `tsconfig.json`.

## Rules

- Read [docs/CONVENTIONS.md](docs/CONVENTIONS.md) before writing code, [docs/DESIGN.md](docs/DESIGN.md) before visual work and [docs/PRODUCT.md](docs/PRODUCT.md) before writing copy or planning pages.
- All content goes in Payload: page text, images, posts, SEO fields. Two exceptions: site-wide constants in `src/site.ts`, and the `/design` reference page, which documents the code (see docs/CONVENTIONS.md). Add a collection or global for it and read it with the Local API; never hardcode content in components.
- Style through the tokens in `src/styles/globals.css`; no raw colors in components.
- No anonymous functions: name every callback/handler as a `const` before passing it.
- Never use `suppressHydrationWarning`; fix the cause.
- ESLint enforces a file-size limit. When it flags a file, split it into a folder (`index` + focused siblings) instead of disabling the rule.
- Never read, print or commit `.env` files or secrets. Ask the user to set them; document new variables in `.env.example`.
- When a change makes any doc wrong, update that doc in the same change.
- Never credit Claude, Anthropic or any AI in commits or PRs: no `Co-Authored-By` trailers, no "Generated with" lines. `.husky/commit-msg` strips Claude and Anthropic ones anyway.
- Don't edit `src/app/(payload)` or `src/payload-types.ts`; Payload generates them. After changing collections or config, run `pnpm generate:types`, `pnpm migrate:create <name>` for any schema change, and `pnpm generate:importmap` if you added admin components. Don't run `pnpm migrate` against a database without asking; it changes shared data.

## Deciding and committing

- Decide on your own from these docs and INFO-BANK. Ask the user only when the docs are silent, contradict each other or no longer match the code. Write the answer into the right doc so nobody has to ask again.
- The user co-owns the business; their decisions are final on brand, copy and claims.
- Don't commit as you go. When the work is done and passes the checks, list the commits you propose (message and files, small and one concern each) and wait. Commit and push to `master` only after the user approves. If they ask for changes instead, make them and propose again.

## Every code change

Use the `ponytail` skill at level `full` (project default; `lite` or `ultra` only if the user asks): smallest complete change, reuse before writing. Use `ponytail-review` to review a change and `ponytail-audit` for the whole repo.

## Writing content

Use the `human-writing` skill whenever you write content people will read: UI copy, metadata, docs, READMEs, commit messages and PR descriptions.

## Done means

`pnpm build` passes with no lint errors and `pnpm test` passes. After UI or routing changes, `pnpm test:e2e` passes too. If they can't, report the full error output instead of marking the task complete.

## Tools and skills

- Playwright MCP is a project dependency, configured for Claude Code (`.mcp.json`, pre-approved in `.claude/settings.json`) and opencode (`opencode.jsonc`). Use it to check UI changes in a real browser. If it reports a missing browser, ask the user to run `pnpm browser:install`.
- Before writing code against a library, framework or CLI, fetch its current docs with the Context7 CLI (`npx ctx7@latest`) — see the `find-docs` skill. Don't rely on memory for APIs.
- Claude Code replies in the terse `caveman` output style (`.claude/output-styles/caveman.md`, set in `.claude/settings.json`). Switch it in `/config`.
- Skills live in `.agents/skills` (linked to `.claude/skills`). If a skill relevant to the task is available — here or in your environment — use it.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
