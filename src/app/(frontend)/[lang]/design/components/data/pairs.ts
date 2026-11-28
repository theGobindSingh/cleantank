// Text and ground pairs; the ratios are computed live by pair.tsx.

export interface Pair {
  fg: string;
  bg: string;
  label: string;
  large?: boolean;
}

export const APPROVED_PAIRS: Pair[] = [
  {
    fg: "var(--color-primary-700)",
    bg: "var(--color-white)",
    label: "Navy on white",
  },
  {
    fg: "var(--color-grey-900)",
    bg: "var(--color-white)",
    label: "Graphite on white",
  },
  {
    fg: "var(--color-grey-900)",
    bg: "var(--color-grey-50)",
    label: "Graphite on stone",
  },
  {
    fg: "var(--color-grey-600)",
    bg: "var(--color-white)",
    label: "Muted text on white",
  },
  {
    fg: "var(--color-accent-700)",
    bg: "var(--color-white)",
    label: "Marker text on white",
  },
  {
    fg: "var(--color-secondary-700)",
    bg: "var(--color-white)",
    label: "Secondary on white",
  },
  {
    fg: "var(--color-white)",
    bg: "var(--color-primary-700)",
    label: "White on navy",
  },
  {
    fg: "var(--color-white)",
    bg: "var(--color-secondary-700)",
    label: "White on secondary",
  },
  {
    fg: "var(--color-primary-50)",
    bg: "var(--color-primary-900)",
    label: "Dark-mode text",
  },
  {
    fg: "var(--color-primary-200)",
    bg: "var(--color-primary-900)",
    label: "Dark-mode muted text",
  },
  {
    fg: "var(--color-secondary-300)",
    bg: "var(--color-primary-900)",
    label: "Dark-mode secondary",
  },
  {
    fg: "var(--color-accent-500)",
    bg: "var(--color-primary-700)",
    label: "Coral on navy (large and UI only)",
    large: true,
  },
];

export const FORBIDDEN_PAIRS: Pair[] = [
  {
    fg: "var(--color-accent-500)",
    bg: "var(--color-white)",
    label: "Coral text on white",
  },
  {
    fg: "var(--color-white)",
    bg: "var(--color-accent-500)",
    label: "White on coral",
  },
  {
    fg: "var(--color-grey-400)",
    bg: "var(--color-white)",
    label: "Grey 400 as text",
  },
  {
    fg: "var(--color-grey-500)",
    bg: "var(--color-white)",
    label: "Grey 500 as text",
  },
  {
    fg: "var(--color-primary-700)",
    bg: "var(--color-accent-700)",
    label: "Navy on accent 700",
  },
  {
    fg: "var(--color-grey-900)",
    bg: "var(--color-primary-700)",
    label: "Graphite on navy",
  },
  {
    fg: "var(--color-secondary-700)",
    bg: "var(--color-primary-700)",
    label: "Secondary on navy",
  },
  {
    fg: "var(--color-secondary-300)",
    bg: "var(--color-secondary-700)",
    label: "Secondary 300 on a secondary band",
  },
];
