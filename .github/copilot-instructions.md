# Copilot Instructions for Clean Tank Services Web App

## 🧠 Project Overview

This project is a **high-conversion, industrial-grade business website** for **Clean Tank Services**, a company providing large-scale water tank cleaning solutions across India.

The website is not a generic service site. It must clearly position the company as a **premium, process-driven, and government-level service provider** that handles large contracts such as hospitals, schools, commercial buildings, residential societies, and government organizations.

The core objective of the website is:

- Generate high-quality leads for large-scale cleaning projects
- Establish strong trust through process transparency and certifications
- Clearly communicate the company’s **multi-step scientific cleaning process**
- Drive franchise conversions with a strong, convincing value proposition

The platform must highlight:

- Machine-based cleaning instead of manual labor
- A structured, step-by-step cleaning workflow (water removal → jet cleaning → vacuum → UV → chemical sterilization)
- Safe, certified chemical usage that does not harm workers or users
- Capability to handle large, professional, and government-level contracts

Special emphasis must be placed on the **Franchise page**, as it is a major business goal. It should strongly communicate:

- Guaranteed earnings from the first month
- Reliable support and onboarding
- A unique opportunity that differentiates from typical franchise models

Overall, the website should feel:

- Professional and structured
- Trustworthy and certification-driven
- Clean, minimal, and modern
- Focused on conversion rather than just visual appeal

Avoid any design or messaging that feels local, informal, or small-scale. This is a **serious industrial service brand**, not a household cleaning business.

---

## ⚙️ Tech Stack

- Next.js (Pages Router)
- TypeScript
- Emotion (styled)
- Material Symbols (icons via span)
- CSS Variables for theming

---

## 📁 Project Architecture (STRICT)

Follow this structure without deviation:

```

components/   → Small reusable UI units
layouts/      → Page layouts (composed using components)
modules/      → Feature-level sections and their assembly (page sections composed of components and layout)
pages/        → Next.js pages (use modules only)

```

### 🔁 Flow hierarchy

```

components → layouts → modules → pages

```

### ❌ Forbidden:

- Do NOT import components directly into pages
- Do NOT skip layers
- Do NOT create monolithic components

---

## 📦 Folder Structure (MANDATORY)

Every (Or most) folders MUST follow this folder structure:

```

components/button/
├── index.tsx
├── styles.ts
├── types.ts

```

### Rules:

- `index.tsx` → Component/Module/Layout logic
- `styles.ts` → Emotion styled components only
- `types.ts` → All TypeScript types
- No inline styles
- No logic inside styles/types files

---

## 🧩 Coding Conventions

### Functions

- Always use **const arrow functions**

```ts
const Button = () => {};
```

❌ Avoid:

```ts
function Button() {}
```

---

### DRY Principle (STRICT)

- Never duplicate logic or UI
- Extract reusable parts into components
- Reuse modules wherever possible

---

## 🎨 Styling Rules

### CSS Variables (STRICT USAGE)

Use ONLY predefined CSS variables for colors (100 is darkest, 1000 is lightest):

```
--color-primary-100 → 1000
--color-secondary-100 → 1000
--color-accent-100 → 1000
--color-neutral-100 → 1000
```

### Example:

```ts
color: var(--color-primary-500);
background: var(--color-neutral-100);
```

❌ Do NOT:

- Hardcode hex values
- Use rgb/hsl directly
- Introduce new color tokens

---

### Emotion Usage

- Use `@emotion/styled`
- Keep styles modular and reusable
- Avoid deeply nested styles

---

## 🧱 Pages (6 Total)

- Home
- Services
- About
- Clients
- Franchise
- Contact

### Rules:

- Pages must ONLY use layouts
- No business logic inside pages
- SEO must be configured per page

---

## 📈 SEO Requirements (STRICT)

Each page MUST include:

- Unique `<title>`
- Meta description
- Proper heading hierarchy (`h1 → h2 → h3`)
- Semantic HTML
- Open Graph tags
- Accessible links

---

## ♿ Accessibility (A11Y)

- All images must have `alt`
- Buttons must be semantic `<button>`
- Proper ARIA labels where required
- Keyboard navigation must work
- Maintain contrast using provided color scale

---

## 🧠 Design Philosophy

- Clean, minimal, structured
- Industrial and professional tone
- Avoid playful or overly colorful UI
- Focus on clarity and conversion

---

## 🧱 Module Guidelines

Modules represent sections like:

- Hero
- Process steps
- Testimonials
- Industries served
- Franchise CTA

### Rules:

- Modules are composed of components
- No duplicated layouts across modules
- Each module should be reusable if possible

---

## 🧩 Layout Guidelines

- Layouts combine modules into full pages
- Should handle spacing, structure, and flow
- No UI duplication across layouts

---

## 📞 Conversion Focus

The app should prioritize:

- Lead generation
- Contact form submissions
- Franchise inquiries

### Ensure:

- Clear CTA buttons
- Visible contact options
- Minimal friction in forms

---

## 🚫 Anti-Patterns (STRICTLY AVOID)

- Inline styles
- Hardcoded values
- Duplicate components
- Mixing layers (components inside pages directly)
- Unstructured folders
- Non-semantic HTML

---

## ✅ Code Quality Expectations

- Clean, readable, modular code
- Strong typing (no `any`)
- Reusable abstractions
- Consistent naming conventions

---

## 🧠 Copilot Behavior Guidelines

When generating code:

- Prefer modular structure over quick solutions
- Always create separate `styles.ts` and `types.ts`
- Follow folder conventions strictly
- Reuse existing components if available
- Avoid unnecessary complexity
- Optimize for maintainability and scalability

---

## 🎯 Goal

Deliver a scalable, maintainable, and high-conversion industrial website that reflects trust, professionalism, and technical excellence.
