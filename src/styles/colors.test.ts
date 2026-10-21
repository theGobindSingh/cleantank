import { readFileSync } from "node:fs";
import { expect, it } from "vitest";

const read = (file: string) => {
  return readFileSync(new URL(file, import.meta.url), "utf8");
};

const declarations = (block: string) => {
  return block.match(/--color-[\w-]+:\s*[^;]+;/g) ?? [];
};

// colors.css repeats the light roles for [data-scheme="light"]; they must not drift
it("the light preview scope matches the light roles", () => {
  const globals = read("./globals.css");
  const roles = globals.slice(
    globals.indexOf("/* semantic roles (light)"),
    globals.indexOf("}", globals.indexOf("/* semantic roles (light)")),
  );
  const colors = read("./colors.css");
  const start = colors.indexOf('[data-scheme="light"] {');
  const scope = colors.slice(start, colors.indexOf("}", start));

  expect(declarations(roles).length).toBeGreaterThan(30);
  expect(declarations(scope)).toEqual(declarations(roles));
});
