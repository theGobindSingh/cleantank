import { hasRemoteMatch } from "next/dist/shared/lib/match-remote-pattern";
import { describe, expect, it } from "vitest";
import nextConfig from "../../next.config.js";
import { isAllowedImageUrl } from "./remote-image";
import { pexels, unsplash } from "./stock-photo";

const urls = [
  unsplash("1507525428034-b723cf961d3e"),
  pexels("2014422"),
  "https://images.unsplash.com/photo-123/extra",
  "http://images.unsplash.com/photo-123",
  "https://images.unsplash.com:8443/photo-123",
  "https://images.unsplash.com/premium_photo-123",
  "https://images.pexels.com/videos/2014422/a.jpeg",
  "https://example.com/photo-123",
  "https://evil.images.unsplash.com/photo-123",
];

describe("isAllowedImageUrl", () => {
  it("takes the URLs the stock photo helpers build", () => {
    expect(isAllowedImageUrl(unsplash("1507525428034-b723cf961d3e"))).toBe(
      true,
    );
    expect(isAllowedImageUrl(pexels("2014422"))).toBe(true);
  });

  it("refuses other protocols, hosts, ports and paths", () => {
    expect(urls.slice(2).filter(isAllowedImageUrl)).toEqual([]);
  });

  it("refuses text that is not a URL", () => {
    expect(isAllowedImageUrl("photo-123")).toBe(false);
    expect(isAllowedImageUrl("/photo-123")).toBe(false);
  });

  it.each(urls)("agrees with next.config.js on %s", (value) => {
    const remotePatterns = nextConfig.images?.remotePatterns ?? [];
    expect(isAllowedImageUrl(value)).toBe(
      hasRemoteMatch([], remotePatterns, new URL(value)),
    );
  });
});
