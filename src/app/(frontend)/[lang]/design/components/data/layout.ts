export const SPACING = [0, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 32] as const;

export const BREAKPOINTS = [
  { name: "base", min: 0, columns: 4 },
  { name: "sm", min: 360, columns: 4 },
  { name: "md", min: 768, columns: 8 },
  { name: "lg", min: 1024, columns: 12 },
  { name: "xl", min: 1280, columns: 12 },
  { name: "2xl", min: 1440, columns: 12 },
] as const;
