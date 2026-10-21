import type { PostHog } from "posthog-js";
import { useEffect, useState } from "react";
import { loadAnalytics } from "./analytics";

/**
 * A PostHog feature flag, for client components. `undefined` until PostHog
 * has loaded the flags, and always when analytics is off, so render the
 * default for `undefined`. Pages are prerendered: keep flagged UI small, or
 * reserve its space, to avoid layout shift.
 */
export const useFeatureFlag = (key: string): boolean | undefined => {
  const [enabled, setEnabled] = useState<boolean | undefined>();

  const subscribe = () => {
    let active = true;
    let unsubscribe: (() => void) | undefined;

    const watch = (posthog: PostHog | null) => {
      if (!posthog || !active) return;
      const update = () => {
        setEnabled(posthog.isFeatureEnabled(key));
      };
      unsubscribe = posthog.onFeatureFlags(update);
    };
    void loadAnalytics().then(watch);

    const stop = () => {
      active = false;
      unsubscribe?.();
    };
    return stop;
  };
  useEffect(subscribe, [key]);

  return enabled;
};
