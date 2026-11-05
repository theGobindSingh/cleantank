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

const names = (block: string) => {
  return block.match(/--color-[\w-]+(?=:)/g) ?? [];
};

// the lg-only band unsets every role the band sets; a role added to one needs the other
it("the lg-only band resets every band role", () => {
  const colors = read("./colors.css");
  const band = colors.slice(
    colors.indexOf('[data-surface="band"] {'),
    colors.indexOf("}", colors.indexOf('[data-surface="band"] {')),
  );
  const start = colors.indexOf('[data-band-from="lg"] {');
  const reset = colors.slice(start, colors.indexOf("}", start));

  expect(names(band).length).toBeGreaterThan(10);
  expect(names(reset)).toEqual(names(band));
});
