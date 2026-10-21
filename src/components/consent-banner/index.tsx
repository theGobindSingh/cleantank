"use client";

import Button from "@components/button";
import { P } from "@components/html";
import { loadAnalytics } from "@utils/analytics";
import type { PostHog } from "posthog-js";
import { useEffect, useState } from "react";

interface ConsentBannerProps {
  text: string;
  accept: string;
  decline: string;
}

/**
 * Asks once whether PostHog may use cookies. Shown only while the answer is
 * pending, and never when analytics is off (no key set).
 */
const ConsentBanner = ({ text, accept, decline }: ConsentBannerProps) => {
  const [posthog, setPosthog] = useState<PostHog | null>(null);

  const showIfPending = (instance: PostHog | null) => {
    if (instance?.get_explicit_consent_status() === "pending") {
      setPosthog(instance);
    }
  };
  const checkConsent = () => {
    void loadAnalytics().then(showIfPending);
  };
  useEffect(checkConsent, []);

  if (!posthog) return null;

  const handleAccept = () => {
    posthog.opt_in_capturing();
    setPosthog(null);
  };
  const handleDecline = () => {
    posthog.opt_out_capturing();
    setPosthog(null);
  };

  return (
    <section
      aria-labelledby="consent-text"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4">
        <P id="consent-text" $size="small" className="max-w-[68ch]">
          {text}
        </P>
        <div className="flex gap-3">
          <Button variant="outlined" onClick={handleDecline}>
            {decline}
          </Button>
          <Button variant="outlined" onClick={handleAccept}>
            {accept}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsentBanner;
