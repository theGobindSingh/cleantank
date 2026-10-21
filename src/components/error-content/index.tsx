"use client";

import Button from "@components/button";
import Link from "@components/link";
import StatusPage from "@components/status-page";
import { getDictionary, localePath, toLocale } from "@i18n";
import { useParams } from "next/navigation";

export interface ErrorProps {
  error: unknown;
  retry: () => void;
}

// Server errors reach the client with only a digest; show it so users can
// quote it and you can match it in the server logs.
const getDigest = (error: unknown): string | undefined => {
  return error instanceof Error && "digest" in error
    ? String(error.digest)
    : undefined;
};

/** Shared body of `error.tsx` and `global-error.tsx`. */
const ErrorContent = ({ error, retry }: ErrorProps) => {
  const digest = getDigest(error);
  const locale = toLocale(useParams<{ lang?: string }>().lang);
  const dictionary = getDictionary(locale).error;

  const handleRetry = () => {
    retry();
  };

  return (
    <StatusPage
      code={digest ? `${dictionary.code} ${digest}` : dictionary.code}
      title={dictionary.title}
      description={dictionary.description}
    >
      <Button onClick={handleRetry}>{dictionary.retry}</Button>
      <Link href={localePath(locale, "/")} variant="outlined">
        {dictionary.home}
      </Link>
    </StatusPage>
  );
};

export default ErrorContent;
