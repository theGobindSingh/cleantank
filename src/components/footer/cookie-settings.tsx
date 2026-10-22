"use client";

import { CONSENT_REOPEN_EVENT, loadAnalytics } from "@utils/analytics";
import type { PostHog } from "posthog-js";
import { useEffect, useState } from "react";

interface CookieSettingsProps {
  label: string;
  className?: string;
}

/**
 * Clears the visitor's cookie answer and shows the consent banner again, so
 * withdrawing consent is as easy as giving it (DPDP). A list item for the
 * footer's legal list; renders nothing while analytics is off.
 */
const CookieSettings = ({ label, className }: CookieSettingsProps) => {
  const [posthog, setPosthog] = useState<PostHog | null>(null);

  const findAnalytics = () => {
    void loadAnalytics().then(setPosthog);
  };
  useEffect(findAnalytics, []);

  if (!posthog) return null;

  const handleClick = () => {
    posthog.clear_opt_in_out_capturing();
    window.dispatchEvent(new Event(CONSENT_REOPEN_EVENT));
  };

  return (
    <li>
      <button type="button" onClick={handleClick} className={className}>
        {label}
      </button>
    </li>
  );
};

export default CookieSettings;
