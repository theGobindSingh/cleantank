# AGENTS.md

## Overview

- **Framework:** Next.js (Pages Router) with TypeScript, Emotion, MUI, kami-ui, and strict folder structure.
- **Purpose:** Industrial-grade, lead-gen web for large-scale water tank cleaning—maintain trust, consistent UX, and strict professionalism.
- **Source of truth:** If in doubt, executable config/scripts and `.github/instructions/*.instructions.md` always take precedence over prose.

---

## Agent Skills

Agents can load capabilities known as **skills**—modular, auto-discoverable packages providing expert workflows for specific domains (AI SDKs, Next.js, design, skill discovery, etc).

- **Skills live at:** `.agents/skills/<skill-name>/SKILL.md`
- **Add new skills:** Place in this folder, following current structure. Document purpose in a SKILL.md.
- **Update this section:** Only when the discovery workflow or policy changes (not when individual skills are added/removed).

### Skill discovery (automatic)

- **No hardcoded inventory:** Do not maintain a fixed "Current available skills" list in this file.
- **Source of truth:** Treat the directories in `.agents/skills/` as the live inventory of installed skills.
- **New request/session bootstrap:** Always discover the current skills from `.agents/skills/` at the start of each new request/session before taking action.
- **Zero-maintenance behavior:** When a skill is added or removed under `.agents/skills/`, no AGENTS.md update is required.

For details on each skill, see the corresponding `SKILL.md` under `.agents/skills/<name>/`.

### Session-start requirement

- **Always load first:** For every new request/session, first discover currently available skills, then invoke the `using-superpowers` skill before any clarification, planning, tool call, or implementation action.
- **Subagent exception:** If operating as a dispatched subagent, follow the `using-superpowers` `<SUBAGENT-STOP>` rule.

---

## Commands (pnpm required)

- **Dev server:**  
  `pnpm run dev`
- **Build:**  
  `pnpm run build`
- **Start (after build):**  
  `pnpm run start`
- **Lint & format:**  
  `pnpm run lint`
- **Lint + autofix:**  
  `pnpm run lint:fix`
- **GraphQL codegen:**  
  `pnpm run gql:codegen`
- **Dev with codegen watch:**  
  `pnpm run dev:all`  
  (Equivalent to: concurrently run dev + codegen watcher)

> **NOTE:**  
> Codegen (`src/codegen.ts`) requires valid Contentful env vars. Always re-run codegen before build/dev if schema or docs have changed.

---

## Architecture and Conventions

- **Layer Order:**  
  `components → layouts → modules → pages`  
  (Never skip layers; never import or define business logic in `pages/`.)
- **Module structure:**  
  Each `modules/<name>/` must have:
  - `index.tsx` (composition only, NO static data/logic)
  - section files (e.g. `process.tsx`)
  - `styles.ts` (all Emotion styles for the module)
  - `types.ts` (types/interfaces only)
  - `constants.ts` (static data for props, typed)
- **Do NOT:**
  - Put static data or logic in `index.tsx`
  - Mix component/layout code across folders or import raw HTML elements—always use wrapped primitives (`H1`/`P`/`Span`, always from `@components/html`)
  - Use raw `<img>`, `<a>`, `<button>`, or direct icons—use `next/image`, `Button`, `@mui/icons-material` only
  - Use inline styles, hardcoded CSS variables, or hex/rgb color values.
    - Use only CSS variables defined in the color system.
  - Place mapper functions inline in render: define outside, unless closure needed.
- **Section wrappers:**
  - Use `StandardSectionLayout` for nearly every non-hero section.
  - Never wrap a section in a custom layout if `StandardSectionLayout` suffices.

---

## Testing and CI

- **No dedicated test/integration commands found** — If adding tests, follow Next.js/TypeScript ecosystem, and register all new scripts in `package.json`.
- **CI (`.github/workflows/deploy-pages.yml`):**
  - Runs `pnpm install --frozen-lockfile`
  - Lints (`pnpm lint`) _before_ deploying
  - Deploy only from `main` or `master` branches
  - Deploys via GitHub Pages with Contentful and other API env vars set via repository secrets

---

## Codegen & Env

- **Codegen config:** `/src/codegen.ts` (uses environment variables for Contentful schema fetch)
- **Required ENV:**
  - `CONTENTFUL_SPACE_ID`, `CONTENTFUL_ACCESS_TOKEN`, `CONTENTFUL_PREVIEW_ACCESS_TOKEN`, `BASE_URL`, `IS_GITHUB_ACTIONS`
  - Present in `.env` (not committed); required for local dev and build!
  - All secrets are loaded via `dotenv` for local and via workflow secrets for CI

---

## Style, Patterns, and Special Rules

- **Styling:**
  - Only use Emotion + kami-ui provided CSS vars and scales.
  - All patterns/rules enforced in `.github/instructions/styling.instructions.md` and `component-patterns.instructions.md`.
- **Strict file and prop patterns:**
  - See `.github/instructions/module-conventions.instructions.md` for how to compose each module correctly.
  - All static arrays/config must live in `constants.ts`, typed via types in `types.ts`.
- **Typography, Buttons, Layouts:**
  - Always use provided typography and `Button` components – see `component-patterns.instructions.md`.

---

## Where to find the rules

- **Styling:** `.github/instructions/styling.instructions.md`
- **Component patterns:** `.github/instructions/component-patterns.instructions.md`
- **Module & layout:** `.github/instructions/module-conventions.instructions.md`
- **Copilot/Stringent overview:** `.github/copilot-instructions.md`
- **Other:** If you’re unsure, search for `*.instructions.md` or check `README.md` for high-level stack overview.

---

## Miscellaneous Quirks

- **Prefer sub-agents:** Use sub-agents as much as possible. Always try to break problems into smaller parts and delegate work to sub-agents to leverage parallelization, specialization, and improved autonomy.
- **pnpm only:** Project is locked to `pnpm@10.33.0`; never use npm/yarn.
- **Codegen is required** before any build/dev that touches queries/types.
- **No monorepo/ sub-packages**—all code is single-package in `src/`.
- **Public assets** live in `/public/assets/`—do not write to this folder from code or scripts.
- **Do not add new color tokens or font variables.**

---

> Update this file ONLY if you uncover a new workflow quirk or repo-specific convention that would not be obvious from config, scripts, or `.github/instructions/`.
