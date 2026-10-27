/*
 * Site languages. English lives at `/`, the others under their code (`/hi`, `/pa`).
 * The same codes are Payload's locales (src/payload.config.ts).
 * To add one: add it here, add a dictionary, add it to Payload, add its font in @styles/fonts.
 */
export const locales = ["en", "hi", "pa"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Cookie that remembers the visitor's language, set by `src/proxy.ts`. */
export const localeCookie = "lang";

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

/**
 * `hreflang` alternates for metadata and the sitemap. `x-default` is the
 * unprefixed URL, where `src/proxy.ts` picks the visitor's language.
 */
export const localeAlternates = (
  path: string,
): Record<Locale | "x-default", string> => {
  const toEntry = (locale: Locale): [Locale, string] => {
    return [locale, localePath(locale, path)];
  };
  const entries = Object.fromEntries(locales.map(toEntry)) as Record<
    Locale,
    string
  >;
  return { ...entries, "x-default": path };
};

/**
 * Our best language for an `Accept-Language` header, by the browser's own
 * ranking: "pa-IN,hi;q=0.9,en;q=0.8" is "pa". English when none match.
 */
export const preferredLocale = (header: string | null): Locale => {
  const toEntry = (part: string) => {
    const [tag = "", ...params] = part.trim().split(";");
    const weight = params.find(isWeight);
    return {
      code: tag.split("-")[0]?.toLowerCase() ?? "",
      q: weight ? Number(weight.trim().slice(2)) : 1,
    };
  };
  const isWeight = (param: string) => {
    return param.trim().startsWith("q=");
  };
  const isAcceptable = ({ q }: { q: number }) => {
    return q > 0;
  };
  const byWeight = (a: { q: number }, b: { q: number }) => {
    return b.q - a.q;
  };
  const isSupported = ({ code }: { code: string }) => {
    return hasLocale(code);
  };
  const best = (header ?? "")
    .split(",")
    .map(toEntry)
    .filter(isAcceptable)
    .sort(byWeight)
    .find(isSupported);
  return toLocale(best?.code);
};
