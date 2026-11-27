"use client";

import { loadAnalytics } from "@utils/analytics";
import type { PostHog } from "posthog-js";
import { useEffect } from "react";

const FRANCHISE_PAGES = new Set(["franchise", "franchise-guide"]);
const CONTACT_LINK = 'a[href^="https://wa.me/"], a[href^="tel:"]';

/** Where on the page a link sits: "footer", "contact-bar", its section's id, or "section-N" (the block's position in <main>, 1 is the hero). */
const placeOf = (link: Element): string => {
  if (link.closest("footer")) return "footer";
  if (link.closest("[aria-label][class*='fixed']")) return "contact-bar";
  const main = link.closest("main");
  let block: Element | null = link;
  while (block && block.parentElement !== main) block = block.parentElement;
  if (!main || !block) return "page";
  return block.id || `section-${[...main.children].indexOf(block) + 1}`;
};

/**
 * Counts WhatsApp and Call clicks on /franchise and /franchise-guide as
 * `franchise_contact_clicked` with a `channel` and a `place`, and nothing
 * else: never the link, its message or the number. One listener on the
 * document, so no link needs wiring. Renders nothing.
 */
const FranchiseContactTracker = () => {
  const listen = () => {
    const onClick = (event: MouseEvent) => {
      const slug = window.location.pathname.split("/").findLast(Boolean) ?? "";
      if (!FRANCHISE_PAGES.has(slug)) return;
      const link = (event.target as Element | null)?.closest(CONTACT_LINK);
      if (!link) return;
      const channel = link.getAttribute("href")?.startsWith("tel:")
        ? "call"
        : "whatsapp";
      const place = placeOf(link);
      const send = (posthog: PostHog | null) => {
        posthog?.capture("franchise_contact_clicked", { channel, place });
      };
      void loadAnalytics().then(send);
    };
    document.addEventListener("click", onClick);
    const stop = () => {
      document.removeEventListener("click", onClick);
    };
    return stop;
  };
  useEffect(listen, []);

  return null;
};

export default FranchiseContactTracker;
