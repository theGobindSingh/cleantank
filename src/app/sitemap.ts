import { site } from "@/site";
import { localeAlternates, localePath, locales, type Locale } from "@i18n";
import type { MetadataRoute } from "next";

// Add an entry per public route, without a language prefix.
const ROUTES = ["/", "/process", "/about", "/contact"];

const toUrl = (path: string): string => {
  return new URL(path, site.url).href;
};

const toAbsolute = ([locale, path]: [string, string]): [string, string] => {
  return [locale, toUrl(path)];
};

const toEntries = (route: string): MetadataRoute.Sitemap => {
  const languages = Object.fromEntries(
    Object.entries(localeAlternates(route)).map(toAbsolute),
  );
  const toEntry = (locale: Locale): MetadataRoute.Sitemap[number] => {
    return {
      url: toUrl(localePath(locale, route)),
      lastModified: new Date(),
      alternates: { languages },
    };
  };
  return locales.map(toEntry);
};

const sitemap = (): MetadataRoute.Sitemap => {
  return ROUTES.flatMap(toEntries);
};

export default sitemap;
