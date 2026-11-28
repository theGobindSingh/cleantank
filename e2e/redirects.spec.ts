import { expect, test } from "@playwright/test";

/** /franchise-guide became /franchise (CT-474); every language keeps its own, with the query. */
const guideRedirects: Record<string, string> = {
  "/franchise-guide?ref=a": "/franchise?ref=a",
  "/en/franchise-guide": "/franchise",
  "/hi/franchise-guide": "/hi/franchise",
  "/pa/franchise-guide": "/pa/franchise",
};

for (const [from, to] of Object.entries(guideRedirects)) {
  test(`${from} redirects to ${to}`, async ({ request }) => {
    const response = await request.get(from, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe(to);
  });
}
