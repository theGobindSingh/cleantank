export type Theme = "light" | "dark";

/** localStorage key holding the user's explicit choice. */
export const THEME_KEY = "theme";

/*
 * The active theme is a <meta name="color-scheme"> that the head script injects;
 * CSS selects on it with :root:has(...). React renders every attribute on <html>,
 * so a class or data-attribute set before hydration causes a hydration mismatch,
 * while React 19 skips extra <head> elements. The meta also sets the browser's
 * scheme for scrollbars and form controls.
 */
const getSchemeMeta = (): HTMLMetaElement | null => {
  return document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');
};

export const getActiveTheme = (): Theme => {
  return getSchemeMeta()?.content === "dark" ? "dark" : "light";
};

/** Switches the theme and remembers the choice. */
export const applyTheme = (theme: Theme): void => {
  const meta = getSchemeMeta();
  if (meta) meta.content = theme;
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Storage blocked (e.g. all cookies blocked): the switch still applies.
  }
};

/**
 * Inline script for <head>: runs before <body> paints, so there is no flash.
 * Saved choice, else light: the OS preference is ignored on purpose, so the
 * site is light until the visitor picks dark.
 */
export const THEME_INIT_SCRIPT = `(function initTheme() {
  let theme = "light";
  try {
    theme = localStorage.getItem("${THEME_KEY}");
  } catch {}
  if (theme !== "dark") theme = "light";
  let meta = document.createElement("meta");
  meta.name = "color-scheme";
  meta.content = theme;
  document.head.appendChild(meta);
})();`;
