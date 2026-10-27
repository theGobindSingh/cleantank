import { site } from "@/site";
import Footer from "@components/footer";
import Header from "@components/header";
import NotFoundContent from "@components/not-found-content";
import { defaultLocale, getDictionary } from "@i18n";
import { fontVariables } from "@styles/fonts";
import "@styles/globals.css";
import { THEME_INIT_SCRIPT } from "@utils/theme";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: getDictionary(defaultLocale).notFound.title,
};

/**
 * 404 for unmatched URLs. The site and the admin have separate root layouts, so
 * it renders its own document, with the site header and footer. It sits
 * outside [lang], so it is in English.
 */
const GlobalNotFound = () => {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <script>{THEME_INIT_SCRIPT}</script>
      </head>
      <body>
        <Header locale={defaultLocale} />
        <NotFoundContent locale={defaultLocale} />
        <Footer locale={defaultLocale} />
      </body>
    </html>
  );
};

export default GlobalNotFound;
