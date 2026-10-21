"use client";

import NotFoundContent from "@components/not-found-content";
import { getDictionary, toLocale } from "@i18n";
import { useParams } from "next/navigation";

/**
 * Shown when a page calls `notFound()`, e.g. for a missing post. Not-found pages
 * get no params, so the language comes from useParams.
 */
const NotFound = () => {
  const locale = toLocale(useParams<{ lang?: string }>().lang);

  return (
    <>
      <title>{getDictionary(locale).notFound.title}</title>
      <NotFoundContent locale={locale} />
    </>
  );
};

export default NotFound;
