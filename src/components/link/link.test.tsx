import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import Link from ".";

describe("Link", () => {
  it("opens external links in a new tab safely", () => {
    const html = renderToStaticMarkup(
      <Link href="https://example.com">x</Link>,
    );
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener noreferrer"');
  });

  it("keeps mailto: and tel: links in the same tab", () => {
    const html = renderToStaticMarkup(<Link href="tel:+911234">x</Link>);
    expect(html).toContain('href="tel:+911234"');
    expect(html).not.toContain("target=");
  });

  it("drops next/link-only props from a native <a>", () => {
    const html = renderToStaticMarkup(
      <Link native href="/hi" prefetch={false} hrefLang="hi">
        x
      </Link>,
    );
    expect(html).toContain('href="/hi"');
    expect(html).toContain('hrefLang="hi"');
    expect(html).not.toContain("prefetch");
  });
});
