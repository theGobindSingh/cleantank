import { site } from "@/site";
import { H1, P } from "@components/html";
import LanguageSwitcher from "@components/language-switcher";
import ThemeToggle from "@components/theme-toggle";
import { getDictionary, localeAlternates, localePath, toLocale } from "@i18n";
import type { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> => {
  const locale = toLocale((await params).lang);
  return {
    alternates: {
      canonical: localePath(locale, "/"),
      languages: localeAlternates("/"),
    },
  };
};

/** Holding page until the home page content is modelled in Payload. */
const HomePage = async ({ params }: PageProps<"/[lang]">) => {
  const locale = toLocale((await params).lang);
  const dictionary = getDictionary(locale);

  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center gap-8 px-4 py-24">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <LanguageSwitcher
          locale={locale}
          path="/"
          label={dictionary.language.label}
        />
        <ThemeToggle label={dictionary.theme.toggle} />
      </div>

      <div className="flex flex-col gap-4">
        <H1 lang="en" $margin="0">
          {site.name}
        </H1>
        <P lang="en" $size="body-l" className="text-fg-muted">
          {site.descriptor}
        </P>
      </div>
    </main>
  );
};

export default HomePage;
