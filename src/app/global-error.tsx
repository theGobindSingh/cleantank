"use client";

import ErrorContent, { type ErrorProps } from "@components/error-content";
import Footer from "@components/footer";
import Header from "@components/header";
import { getDictionary, toLocale } from "@i18n";
import { fontVariables } from "@styles/fonts";
import "@styles/globals.css";
import { THEME_INIT_SCRIPT } from "@utils/theme";
import { useParams } from "next/navigation";

/**
 * Replaces the root layout when it throws, so it renders its own document,
 * with the same header and footer as every page.
 */
const GlobalError = (props: ErrorProps) => {
  const locale = toLocale(useParams<{ lang?: string }>().lang);

  return (
    <html lang={locale} className={fontVariables}>
      <head>
        <title>{getDictionary(locale).error.title}</title>
        <script>{THEME_INIT_SCRIPT}</script>
      </head>
      <body>
        <Header locale={locale} />
        <ErrorContent {...props} />
        <Footer locale={locale} />
      </body>
    </html>
  );
};

export default GlobalError;
