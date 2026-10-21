import * as Sentry from "@sentry/nextjs";
import { loadAnalytics } from "@utils/analytics";

// Errors only: no tracing (kept out of the bundle) and no session replay,
// so it needs no consent.
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? process.env.NODE_ENV,
});

void loadAnalytics();
