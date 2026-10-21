import { defineConfig } from "vitest/config";

// Unit tests sit beside the code as *.test.ts(x); browser tests live in e2e/ (Playwright).
export default defineConfig({
  resolve: { tsconfigPaths: true },
  // tsconfig keeps JSX for Next ("preserve"); tests compile it themselves
  oxc: { jsx: { runtime: "automatic" } },
  test: { include: ["src/**/*.test.{ts,tsx}"] },
});
