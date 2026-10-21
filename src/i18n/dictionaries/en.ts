/*
 * Interface strings that must work without the CMS: error and 404 pages,
 * control labels. Page content belongs in Payload, never here.
 * hi.ts and pa.ts need a native-speaker review before launch.
 */
export const en = {
  notFound: {
    code: "Error 404",
    title: "Page not found",
    description: "We could not find that page.",
    home: "Go to home",
  },
  error: {
    code: "Error",
    title: "Something went wrong",
    description: "An unexpected error occurred. Try again, or come back later.",
    retry: "Try again",
    home: "Go to home",
  },
  theme: {
    toggle: "Switch color theme",
  },
  language: {
    label: "Language",
  },
};

export type Dictionary = typeof en;
