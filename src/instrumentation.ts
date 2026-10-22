import { site } from "@/site";
import * as Sentry from "@sentry/nextjs";

/**
 * Starts Sentry on the server: errors only, no tracing. Without
 * NEXT_PUBLIC_SENTRY_DSN, or before launch (site.isLive), it stays off.
 */
export const register = () => {
  if (!site.isLive) return;
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV,
  });
};

export const onRequestError = Sentry.captureRequestError;
