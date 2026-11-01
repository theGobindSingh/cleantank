import { expect, test, type ConsoleMessage, type Page } from "@playwright/test";
import { missingPages, pages } from "./pages";

// Below lg the language links sit in the header menu.
const openMenu = async (page: Page) => {
  const menu = page.getByRole("button", { name: "Menu" });
  if (await menu.isVisible()) await menu.click();
};

const saveDark = () => {
  localStorage.setItem("theme", "dark");
};

const langOf = (path: string) => {
  const [, first = ""] = path.split("/");
  return ["hi", "pa"].includes(first) ? first : "en";
};

for (const path of pages) {
  test(`${path} renders in its language`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("html")).toHaveAttribute("lang", langOf(path));
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("main")).toHaveCount(1);
  });
}

for (const path of missingPages) {
  test(`${path} is a 404`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBe(404);
  });
}

test("/en redirects to /", async ({ request }) => {
  const response = await request.get("/en", { maxRedirects: 0 });
  expect(response.status()).toBe(308);
  expect(response.headers().location).toMatch(/\/$/);
});

test("a first visit follows the browser's language", async ({ request }) => {
  const response = await request.get("/contact", {
    headers: { "accept-language": "hi-IN,hi;q=0.9,en;q=0.8" },
    maxRedirects: 0,
  });
  expect(response.status()).toBe(307);
  expect(response.headers().location).toMatch(/\/hi\/contact$/);
});

test.describe("with a Punjabi browser", () => {
  // The browser's locale sets its Accept-Language; an extra header loses to it.
  test.use({ locale: "pa-IN" });

  test("a chosen language is remembered over the browser's", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForURL("**/pa");

    const isPlainHome = (url: URL) => {
      return url.pathname === "/" && !url.search;
    };
    await page.goto("/?lang=en");
    await page.waitForURL(isPlainHome);
    await page.goto("/contact");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });
});

test("the language switcher marks the current language", async ({ page }) => {
  await page.goto("/hi");
  await expect(page.locator('a[aria-current="true"]')).toHaveAttribute(
    "hreflang",
    "hi",
  );
});

test("switching language keeps the theme and logs no errors", async ({
  page,
}) => {
  const errors: string[] = [];
  const collectError = (message: ConsoleMessage) => {
    if (message.type() !== "error") return;
    // Header links to pages not built yet 404 when Next prefetches them.
    // Drop this once every header page exists (docs/LAUNCH.md).
    if (message.location().url.includes("_rsc=")) return;
    errors.push(message.text());
  };
  page.on("console", collectError);

  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  await page.evaluate(saveDark);
  await openMenu(page);
  await page.getByLabel("Language: EN").click();
  await page.getByRole("link", { name: "ਪੰਜਾਬੀ" }).click();
  await page.waitForURL("**/pa");

  await expect(page.locator("html")).toHaveAttribute("lang", "pa");
  await expect(page.locator('meta[name="color-scheme"]')).toHaveAttribute(
    "content",
    "dark",
  );
  expect(errors).toEqual([]);
});

test("light is the default even when the OS prefers dark", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await expect(page.locator('meta[name="color-scheme"]')).toHaveAttribute(
    "content",
    "light",
  );
});

test("keyboard focus is visible", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const outline = await page.evaluate(() => {
    return document.activeElement
      ? getComputedStyle(document.activeElement).outlineStyle
      : "none";
  });
  expect(outline).not.toBe("none");
});

test("the header marks the current page", async ({ page }) => {
  await page.goto("/contact");
  await openMenu(page);
  await expect(
    page.getByRole("navigation", { name: "Main" }).getByRole("link", {
      name: "Contact",
    }),
  ).toHaveAttribute("aria-current", "page");
});

test("the hero comparison moves with the arrow keys", async ({ page }) => {
  await page.goto("/");
  const slider = page.getByRole("slider");
  await slider.focus();
  // the first key press stops the opening glide, so the value holds still
  await page.keyboard.press("ArrowRight");
  const start = Number(await slider.inputValue());
  await page.keyboard.press("ArrowLeft");
  await expect(slider).toHaveValue(String(start - 1));
});

// docs/DESIGN.md: no horizontal scroll at 320 px.
test.describe("at 320 px wide", () => {
  test.use({ viewport: { width: 320, height: 640 } });

  for (const path of pages) {
    test(`${path} does not scroll sideways`, async ({ page }) => {
      await page.goto(path);
      const overflow = await page.evaluate(() => {
        const root = document.documentElement;
        return root.scrollWidth - root.clientWidth;
      });
      expect(overflow).toBeLessThanOrEqual(0);
    });
  }
});
