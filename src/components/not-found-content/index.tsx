import Link from "@components/link";
import StatusPage from "@components/status-page";
import { getDictionary, localePath, type Locale } from "@i18n";

interface NotFoundContentProps {
  locale: Locale;
}

/** Shared body of `global-not-found.tsx` and `(frontend)/[lang]/not-found.tsx`. */
const NotFoundContent = ({ locale }: NotFoundContentProps) => {
  const { notFound } = getDictionary(locale);

  return (
    <StatusPage
      code={notFound.code}
      title={notFound.title}
      description={notFound.description}
    >
      <Link href={localePath(locale, "/")} variant="filled">
        {notFound.home}
      </Link>
    </StatusPage>
  );
};

export default NotFoundContent;
