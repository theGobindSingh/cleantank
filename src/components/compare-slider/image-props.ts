// The hero's photos are the page's largest paint; inline ones wait their turn.
export const HERO_IMAGE = {
  sizes: "100vw",
  loading: "eager",
  fetchPriority: "high",
  quality: 100,
} as const;

export const INLINE_IMAGE = {
  sizes: "(min-width: 768px) 50vw, 100vw",
  loading: "lazy",
} as const;
