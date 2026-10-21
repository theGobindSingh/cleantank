import { site } from "@/site";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { Span } from "@components/html";
import Link from "@components/link";
import { getDictionary, localePath, type Locale } from "@i18n";
import HeaderNav from "./nav";

interface HeaderProps {
  locale: Locale;
}

/** Sticky navy band holding the one nav: logo, links, language and theme. */
const Header = ({ locale }: HeaderProps) => {
  const dictionary = getDictionary(locale);

  return (
    <CommonFullWidthWrapper
      element="header"
      className="sticky top-0 z-40"
      wrapperProps={{ "data-surface": "band" }}
    >
      <HeaderNav
        locale={locale}
        links={dictionary.header.links}
        labels={{
          ...dictionary.header,
          language: dictionary.language.label,
          theme: dictionary.theme.toggle,
        }}
        logo={
          // lang="en" keeps the lockup in caps on Hindi and Punjabi pages
          <Link
            href={localePath(locale, "/")}
            lang="en"
            className="flex flex-col items-start gap-0.5 no-underline hover:no-underline"
          >
            <Span
              $size="h4"
              $weight="700"
              $lineHeight="1"
              className="uppercase"
            >
              {site.name}
            </Span>
            <Span $size="caption" className="text-fg-muted">
              {site.descriptor}
            </Span>
          </Link>
        }
      />
    </CommonFullWidthWrapper>
  );
};

export default Header;
