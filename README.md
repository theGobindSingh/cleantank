# Clean Tank Services

The website of Clean Tank Services, an initiative of Gobind Galaxy (Kanpur): scientific and mechanized cleaning and disinfection of water storage tanks. In English, Hindi and Punjabi.

## What's inside

- Next.js 16 (App Router) and React 19
- TypeScript in strict mode (`@tsconfig/strictest`)
- Tailwind CSS v4 with the brand tokens and light/dark themes
- English, Hindi and Punjabi routes (`/`, `/hi`, `/pa`) with Anek Latin, Devanagari and Gurmukhi
- ESLint ([`@webadeva/eslint-config`](https://www.npmjs.com/package/@webadeva/eslint-config)) and Prettier
- Husky and commitlint check commit messages against Conventional Commits
- [Lucide](https://lucide.dev/) icons and [Lenis](https://lenis.darkroom.engineering/) smooth scrolling
- [Payload CMS](https://payloadcms.com/) on Neon Postgres, with uploads in Neon's S3-compatible storage; admin at `/admin`
- Error and 404 pages, SEO basics (metadata, sitemap, robots, generated Open Graph image) and security headers
- Rules, skills and tools for AI coding agents (see [AI agents](#ai-agents))

## Requirements

Node.js and pnpm versions are pinned in `package.json` (`engines`, `packageManager`). With [Corepack](https://nodejs.org/api/corepack.html) enabled, the right pnpm is picked up automatically.

## Getting started

```bash
pnpm install
cp .env.example .env   # then set PAYLOAD_SECRET, e.g. from `openssl rand -hex 32`
pnpm dev
```

Before the first run, fill in the database and storage variables in `.env` and create the tables with `pnpm migrate`. Then open [http://localhost:3000](http://localhost:3000) for the site and [http://localhost:3000/admin](http://localhost:3000/admin) to create the first Payload user.

| Command                | What it does                                  |
| ---------------------- | --------------------------------------------- |
| `pnpm dev`             | Start the dev server                          |
| `pnpm build`           | Auto-fix lint, then production build          |
| `pnpm start`           | Serve the production build                    |
| `pnpm lint`            | Check formatting and lint                     |
| `pnpm lint:fix`        | Fix formatting and lint                       |
| `pnpm test`            | Unit tests (Vitest)                           |
| `pnpm test:e2e`        | Build, then browser and accessibility tests   |
| `pnpm browser:install` | Download Chromium for Playwright              |
| `pnpm generate:types`  | Regenerate Payload types after schema changes |
| `pnpm migrate`         | Run pending database migrations               |
| `pnpm migrate:create`  | Create a migration after a schema change      |
| `pnpm payload`         | Payload CLI, on the direct database URL       |

## AI agents

`AGENTS.md` holds the rules every agent follows. `pnpm install` links `CLAUDE.md` to it and `.claude/skills` to `.agents/skills`, so Claude Code, GitHub Copilot and opencode all read the same files.

What comes with it:

- [Playwright MCP](https://github.com/microsoft/playwright-mcp), so agents can check pages in a real browser (Claude Code and opencode). Run `pnpm browser:install` once to download Chromium for it and for the browser tests.
- Skills in `.agents/skills`: `find-docs` fetches current library docs from [Context7](https://context7.com/), [`ponytail`](https://github.com/dietrichgebert/ponytail) keeps code changes small (with `ponytail-review` and `ponytail-audit`), and [`human-writing`](https://github.com/webadeva/webadeva-skills) keeps docs, copy and commit messages from reading like a chatbot wrote them.
- A terse [caveman](https://github.com/juliusbrussee/caveman) output style for Claude Code replies, set in `.claude/settings.json`. Pick another one with `/config`.

Context7 works without an account. For higher rate limits, run `npx ctx7@latest login` or set `CONTEXT7_API_KEY` in your shell.

## Before launch

Set `SITE_URL` and `PAYLOAD_SECRET` in production (see `.env.example`). Add remote image hosts to `images.remotePatterns`, and any third-party origins to the CSP, in `next.config.js`.

## Docs

- [AGENTS.md](AGENTS.md): commands and rules for people and AI agents
- [docs/CONVENTIONS.md](docs/CONVENTIONS.md): how code is structured
- [docs/DESIGN.md](docs/DESIGN.md): tokens and visual system
- [docs/PRODUCT.md](docs/PRODUCT.md): the business, audiences, voice and what the site may claim
- [docs/ref/INFO-BANK.md](docs/ref/INFO-BANK.md): owner-approved facts and copy
