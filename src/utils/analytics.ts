import type { PostHog } from "posthog-js";

let loading: Promise<PostHog | null> | undefined;

const init = ({ default: posthog }: { default: PostHog }) => {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return null;
  /* eslint-disable camelcase -- PostHog's option names */
  posthog.init(key, {
    // next.config.js proxies /ingest to PostHog, past ad blockers
    api_host: "/ingest",
    ui_host: `https://${process.env.NEXT_PUBLIC_POSTHOG_REGION ?? "us"}.posthog.com`,
    defaults: "2026-05-30",
    // Nothing is stored or captured until the visitor answers the consent
    // banner; after a "no", visits are only counted without cookies.
    cookieless_mode: "on_reject",
  });
  /* eslint-enable camelcase -- back to the house style */
  return posthog;
};

/**
 * PostHog, loaded once and after the page so it stays off the critical path.
 * Null when NEXT_PUBLIC_POSTHOG_KEY is unset or on the Payload admin.
 */
export const loadAnalytics = (): Promise<PostHog | null> => {
  if (window.location.pathname.startsWith("/admin")) {
    return Promise.resolve(null);
  }
  loading ??= import("posthog-js").then(init);
  return loading;
};
