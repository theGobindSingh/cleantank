import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { missingPages, pages } from "./pages";

/* WCAG 2.2 A and AA plus axe best practices, in light and dark mode. */
const tags = [
  "wcag2a",
  "wcag2aa",
  "wcag21a",
  "wcag21aa",
  "wcag22aa",
  "best-practice",
];
const themes = ["light", "dark"] as const;

// The site ignores the OS setting, so dark mode is set the way the toggle saves it.
const saveTheme = (theme: string) => {
  localStorage.setItem("theme", theme);
};

for (const path of [...pages, ...missingPages]) {
  for (const theme of themes) {
    test(`${path} has no axe violations (${theme})`, async ({ page }) => {
      await page.addInitScript(saveTheme, theme);
      await page.goto(path);
      const { violations } = await new AxeBuilder({ page })
        .withTags(tags)
        // /design shows forbidden colour pairs on purpose
        .exclude("[data-a11y-demo]")
        .analyze();
      expect(violations).toEqual([]);
    });
  }
}
