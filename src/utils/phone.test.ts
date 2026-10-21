import { describe, expect, it } from "vitest";
import { formatPhone } from "./phone";

describe("formatPhone", () => {
  it("groups an Indian number in the house style", () => {
    expect(formatPhone("919453517514")).toBe("+91 94535 17514");
  });
});
