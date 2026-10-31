import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";
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

// Owner's call: text bigger than this may fail colour contrast. Everything else must pass.
const contrastExemptFontSize = 50;

type Violations = Awaited<ReturnType<AxeBuilder["analyze"]>>["violations"];
type Violation = Violations[number];
type ViolationNode = Violation["nodes"][number];

const isContrastViolation = (violation: Violation) => {
  return violation.id === "color-contrast";
};

const readFontSize = (element: Element) => {
  return parseFloat(getComputedStyle(element).fontSize);
};

const isExemptNode = async (page: Page, node: ViolationNode) => {
  const [selector, ...nested] = node.target;
  // axe nests the target for frames and shadow DOM; those get no exemption
  if (typeof selector !== "string" || nested.length > 0) return false;
  const fontSize = await page.locator(selector).evaluate(readFontSize);
  return fontSize > contrastExemptFontSize;
};

const dropExemptNodes = async (page: Page, violation: Violation) => {
  if (!isContrastViolation(violation)) return violation;
  const nodes: ViolationNode[] = [];
  for (const node of violation.nodes) {
    if (!(await isExemptNode(page, node))) nodes.push(node);
  }
  return { ...violation, nodes };
};

const withoutExemptNodes = async (page: Page, violations: Violations) => {
  const remaining: Violations = [];
  for (const violation of violations) {
    const kept = await dropExemptNodes(page, violation);
    if (kept.nodes.length > 0) remaining.push(kept);
  }
  return remaining;
};

// The site ignores the OS setting, so dark mode is set the way the toggle saves it.
const saveTheme = (theme: string) => {
  localStorage.setItem("theme", theme);
};

const isImageAltViolation = (violation: Violation) => {
  return violation.id === "image-alt";
};

const toTarget = (node: ViolationNode) => {
  return node.target;
};

const removeElement = (element: Element) => {
  element.remove();
};

for (const path of [...pages, ...missingPages]) {
  for (const theme of themes) {
    test(`${path} has no axe violations (${theme})`, async ({ page }) => {
      // the reference page is large; axe alone takes about 30 s there
      test.slow(path.endsWith("/design"));
      await page.addInitScript(saveTheme, theme);
      await page.goto(path);
      const { violations } = await new AxeBuilder({ page })
        .withTags(tags)
        // /design shows forbidden colour pairs on purpose
        .exclude("[data-a11y-demo]")
        .analyze();
      expect(await withoutExemptNodes(page, violations)).toEqual([]);
    });
  }
}

const lowContrast = "color: #999; background: #fff";

test("the contrast exemption covers only text over 50px", async ({ page }) => {
  await page.setContent(`
    <html lang="en"><title>Test</title><body>
      <main>
        <p id="big" style="${lowContrast}; font-size: 51px">Big</p>
        <p id="limit" style="${lowContrast}; font-size: 50px">Limit</p>
        <img src="" />
      </main>
    </body></html>
  `);
  const { violations } = await new AxeBuilder({ page }).analyze();
  const remaining = await withoutExemptNodes(page, violations);
  const contrast = remaining.find(isContrastViolation);
  expect(contrast?.nodes.map(toTarget)).toEqual([["#limit"]]);
  expect(remaining.some(isImageAltViolation)).toBe(true);

  await page.locator("#limit").evaluate(removeElement);
  const { violations: onlyBig } = await new AxeBuilder({ page }).analyze();
  const rest = await withoutExemptNodes(page, onlyBig);
  expect(rest.some(isContrastViolation)).toBe(false);
});
