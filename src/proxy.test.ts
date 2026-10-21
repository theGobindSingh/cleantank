import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";
import { proxy } from "./proxy";

const run = (path: string) => {
  return proxy(new NextRequest(new URL(path, "http://localhost")));
};

describe("proxy", () => {
  it("redirects /en paths to the unprefixed URL", () => {
    expect(run("/en").headers.get("location")).toBe("http://localhost/");
    expect(run("/en/amc").headers.get("location")).toBe("http://localhost/amc");
  });

  it("rewrites unprefixed paths to English", () => {
    expect(run("/").headers.get("x-middleware-rewrite")).toBe(
      "http://localhost/en",
    );
    expect(run("/amc").headers.get("x-middleware-rewrite")).toBe(
      "http://localhost/en/amc",
    );
  });

  it("passes Hindi and Punjabi through", () => {
    expect(run("/hi/amc").headers.get("x-middleware-next")).toBe("1");
  });

  it("does not treat a path that starts with a code as that language", () => {
    expect(run("/english").headers.get("x-middleware-rewrite")).toBe(
      "http://localhost/en/english",
    );
  });
});
