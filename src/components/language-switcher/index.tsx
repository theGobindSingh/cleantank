import Link from "@components/link";
import { localeNames, localePath, locales, type Locale } from "@i18n";

interface LanguageSwitcherProps {
  locale: Locale;
  /** The current page's path without a language prefix, e.g. "/" or "/amc". */
  path: string;
  label: string;
}

/**
 * EN / हिंदी / ਪੰਜਾਬੀ, each named in its own script. No flags, no auto-redirect.
 * `native`: a client navigation would re-render the root layout (its `lang`
 * and theme script) in the browser.
 */
const LanguageSwitcher = ({ locale, path, label }: LanguageSwitcherProps) => {
  const renderOption = (option: Locale) => {
    const isCurrent = option === locale;
    return (
      <li key={option}>
        <Link
          native
          href={localePath(option, path)}
          lang={option}
          hrefLang={option}
          aria-current={isCurrent ? "true" : undefined}
          className={isCurrent ? "font-bold" : "font-normal"}
        >
          {localeNames[option]}
        </Link>
      </li>
    );
  };

  return (
    <nav aria-label={label}>
      <ul className="flex gap-4">{locales.map(renderOption)}</ul>
    </nav>
  );
};

export default LanguageSwitcher;
