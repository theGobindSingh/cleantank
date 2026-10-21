import { defaultLocale, hasLocale } from "@i18n/config";
import { NextResponse, type NextRequest } from "next/server";

/*
 * Language routing. Pages live under app/(frontend)/[lang], but English has no
 * prefix: `/amc` is rewritten to `/en/amc` internally, and `/en/amc` redirects
 * to `/amc`. Hindi and Punjabi URLs (`/hi/amc`, `/pa/amc`) pass through.
 */
export const proxy = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const [, first = ""] = pathname.split("/");
  const url = request.nextUrl.clone();

  if (first === defaultLocale) {
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }
  if (hasLocale(first)) return NextResponse.next();

  url.pathname =
    pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
};

export const config = {
  // Skip the admin, the API, Next internals, metadata images, the analytics and
  // error-tracking proxies (/ingest, /monitoring) and any file with an extension.
  matcher: [
    "/((?!admin|api|_next|opengraph-image|ingest|monitoring|.*\\..*).*)",
  ],
};
