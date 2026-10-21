import { site } from "@/site";
import SmoothScroll from "@components/smooth-scroll";
import { locales, toLocale } from "@i18n";
import { fontVariables } from "@styles/fonts";
import "@styles/globals.css";
import { THEME_INIT_SCRIPT } from "@utils/theme";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
};

const toParams = (lang: string) => {
  return { lang };
};

// Every language is prerendered; any other first segment is a 404.
export const generateStaticParams = () => {
  return locales.map(toParams);
};

export const dynamicParams = false;

const RootLayout = async ({ children, params }: LayoutProps<"/[lang]">) => {
  const locale = toLocale((await params).lang);

  return (
    <html lang={locale} className={fontVariables}>
      <head>
        <script>{THEME_INIT_SCRIPT}</script>
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
