// Token names and notes only; swatches read the live values.

export const STOPS = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "950",
] as const;

export interface Family {
  name: string;
  label: string;
  anchor: (typeof STOPS)[number];
  note: string;
}

export const FAMILIES: Family[] = [
  {
    name: "primary",
    label: "Primary · steel-navy",
    anchor: "700",
    note: "700 is the locked brand navy: headings, buttons, links, the header and footer bands. About 30% of the non-photo area.",
  },
  {
    name: "secondary",
    label: "Secondary · indigo slate",
    anchor: "700",
    note: "Navy's quiet partner: category tags, heading rules, the second chart series, soft panels and at most one emphasis band. Never a button, link or status.",
  },
  {
    name: "accent",
    label: "Accent · coral",
    anchor: "500",
    note: "500 is the locked coral, a marker only: the Level Line, the active step, one key figure. It fails as text on white (2.87:1), so small accent text uses 700.",
  },
  {
    name: "grey",
    label: "Grey · stone to graphite",
    anchor: "900",
    note: "50 is stone, the alternate section ground; 900 is graphite body text. 500 is the lightest control border and 600 the lightest text. 400 and lighter are decorative.",
  },
  {
    name: "success",
    label: "Success",
    anchor: "700",
    note: "Status only, always with an icon and a word. 700 text, 100 fill, 500 border, 300 text in dark mode.",
  },
  {
    name: "caution",
    label: "Caution",
    anchor: "700",
    note: "Status only. The soft fill is the pale 100; the caution button fills with 700, or 300 in dark mode.",
  },
  {
    name: "info",
    label: "Info",
    anchor: "700",
    note: "Status only. Its teal-blue is why the secondary colour had to stay away from blue-green.",
  },
  {
    name: "error",
    label: "Error",
    anchor: "700",
    note: "Status only. Never beside coral in one component, and never the only difference from success.",
  },
];

export interface Role {
  name: string;
  job: string;
  kind: "fill" | "text" | "border";
}

export const ROLES: Role[] = [
  { name: "bg", job: "Page ground", kind: "fill" },
  { name: "bg-subtle", job: "Alternate sections (stone)", kind: "fill" },
  { name: "surface", job: "Cards, panels, inputs", kind: "fill" },
  { name: "band", job: "Header, footer, emphasis bands", kind: "fill" },
  { name: "fg", job: "Body text", kind: "text" },
  { name: "fg-muted", job: "Muted text, captions", kind: "text" },
  { name: "heading", job: "Headings", kind: "text" },
  { name: "link", job: "Links (always underlined)", kind: "text" },
  { name: "link-hover", job: "Link hover", kind: "text" },
  { name: "border", job: "Decorative 1 px rules", kind: "border" },
  {
    name: "border-control",
    job: "Input and control edges (3:1)",
    kind: "border",
  },
  {
    name: "border-strong",
    job: "Structural rules, table frames",
    kind: "border",
  },
  { name: "primary", job: "Button fill", kind: "fill" },
  { name: "primary-hover", job: "Button hover", kind: "fill" },
  { name: "primary-active", job: "Button pressed", kind: "fill" },
  { name: "on-primary", job: "Label on a filled button", kind: "text" },
  { name: "marker", job: "Level Line, active step", kind: "fill" },
  { name: "marker-text", job: "Reference tags, key figure", kind: "text" },
  { name: "secondary", job: "Tags, heading rules", kind: "text" },
  { name: "secondary-bg", job: "Tag and panel fill", kind: "fill" },
  { name: "secondary-border", job: "Tag edge", kind: "border" },
  { name: "focus", job: "Focus ring", kind: "border" },
  { name: "disabled", job: "Disabled label", kind: "text" },
  { name: "disabled-bg", job: "Disabled fill", kind: "fill" },
];

export const STATES = ["success", "caution", "info", "error"] as const;
