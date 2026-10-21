/*
 * Site languages. English lives at `/`, the others under their code (`/hi`, `/pa`).
 * The same codes are Payload's locales (src/payload.config.ts).
 * To add one: add it here, add a dictionary, add it to Payload, add its font in @styles/fonts.
 */
export const locales = ["en", "hi", "pa"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Each language named in its own script, for the language switcher. */
export const localeNames: Record<Locale, string> = {
  en: "EN",
  hi: "हिंदी",
  pa: "ਪੰਜਾਬੀ",
};

export const hasLocale = (value: string): value is Locale => {
  return (locales as readonly string[]).includes(value);
};

/** A route's `lang` param as a Locale; anything unknown becomes English. */
export const toLocale = (value: string | undefined): Locale => {
  return value && hasLocale(value) ? value : defaultLocale;
};

/** The public URL of `path` in `locale`: `localePath("hi", "/amc")` is `/hi/amc`. */
export const localePath = (locale: Locale, path: string): string => {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
};

/** `hreflang` alternates for metadata and the sitemap. */
export const localeAlternates = (path: string): Record<Locale, string> => {
  const toEntry = (locale: Locale): [Locale, string] => {
    return [locale, localePath(locale, path)];
  };
  return Object.fromEntries(locales.map(toEntry)) as Record<Locale, string>;
};
