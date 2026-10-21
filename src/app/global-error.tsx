"use client";

import ErrorContent, { type ErrorProps } from "@components/error-content";
import { getDictionary, toLocale } from "@i18n";
import { fontVariables } from "@styles/fonts";
import "@styles/globals.css";
import { THEME_INIT_SCRIPT } from "@utils/theme";
import { useParams } from "next/navigation";

/** Replaces the root layout when it throws, so it renders its own document. */
const GlobalError = (props: ErrorProps) => {
  const locale = toLocale(useParams<{ lang?: string }>().lang);

  return (
    <html lang={locale} className={fontVariables}>
      <head>
        <title>{getDictionary(locale).error.title}</title>
        <script>{THEME_INIT_SCRIPT}</script>
      </head>
      <body>
        <ErrorContent {...props} />
      </body>
    </html>
  );
};

export default GlobalError;
