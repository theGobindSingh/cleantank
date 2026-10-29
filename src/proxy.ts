import {
  defaultLocale,
  hasLocale,
  localeCookie,
  localePath,
  preferredLocale,
  type Locale,
} from "@i18n/config";
import { NextResponse, type NextRequest } from "next/server";

const ONE_YEAR = 60 * 60 * 24 * 365;

const remember = (response: NextResponse, locale: Locale): NextResponse => {
  response.cookies.set(localeCookie, locale, {
    path: "/",
    maxAge: ONE_YEAR,
    sameSite: "lax",
  });
  return response;
};

/*
 * Language routing. Pages live under app/(frontend)/[lang], but English has no
 * prefix: `/amc` is rewritten to `/en/amc` internally, and `/en/amc` redirects
 * to `/amc`. Hindi and Punjabi URLs (`/hi/amc`, `/pa/amc`) pass through.
 *
 * The `lang` cookie remembers the visitor's language. On a first visit to an
 * unprefixed URL it comes from the browser's `Accept-Language`; the language
 * switcher's links carry `?lang=` to change it. A remembered Hindi or Punjabi
 * sends unprefixed URLs to their prefixed version; prefixed URLs never move.
 */
export const proxy = (request: NextRequest) => {
  const { pathname, searchParams } = request.nextUrl;
  const [, first = ""] = pathname.split("/");
  const url = request.nextUrl.clone();
  const path = hasLocale(first)
    ? pathname.slice(first.length + 1) || "/"
    : pathname;

  const chosen = searchParams.get(localeCookie);
  if (chosen !== null && hasLocale(chosen)) {
    url.searchParams.delete(localeCookie);
    url.pathname = localePath(chosen, path);
    return remember(NextResponse.redirect(url, 307), chosen);
  }

  if (first === defaultLocale) {
    url.pathname = path;
    return NextResponse.redirect(url, 308);
  }
  if (hasLocale(first)) return NextResponse.next();

  const saved = request.cookies.get(localeCookie)?.value ?? "";
  const locale = hasLocale(saved)
    ? saved
    : preferredLocale(request.headers.get("accept-language"));

  let response: NextResponse;
  if (locale === defaultLocale) {
    url.pathname =
      pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
    response = NextResponse.rewrite(url);
  } else {
    url.pathname = localePath(locale, pathname);
    response = NextResponse.redirect(url, 307);
  }
  return saved === locale ? response : remember(response, locale);
};

export const config = {
  // Skip the admin, the API, Next internals, metadata images, the analytics and
  // error-tracking proxies (/ingest, /monitoring) and any file with an extension.
  matcher: [
    "/((?!admin|api|_next|ingest|monitoring|.*opengraph-image|.*\\..*).*)",
  ],
};
