import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import Link from "@components/link";
import Logo from "@components/logo";
import { getDictionary, localePath, type Locale } from "@i18n";
import HeaderNav from "./nav";

interface HeaderProps {
  locale: Locale;
}

/** Fixed navy band holding the one nav: logo, links and language. */
const Header = ({ locale }: HeaderProps) => {
  const dictionary = getDictionary(locale);

  return (
    <CommonFullWidthWrapper
      element="header"
      wrapperClassName="fixed inset-x-0 top-0 z-60"
      wrapperProps={{ "data-surface": "band" }}
    >
      <HeaderNav
        locale={locale}
        links={dictionary.header.links}
        labels={{
          ...dictionary.header,
          language: dictionary.language.label,
        }}
        logo={
          // lang="en": the logo's label is English on every page
          <Link
            href={localePath(locale, "/")}
            lang="en"
            className="block no-underline hover:no-underline"
          >
            <Logo className="block" />
          </Link>
        }
      />
    </CommonFullWidthWrapper>
  );
};

export default Header;
