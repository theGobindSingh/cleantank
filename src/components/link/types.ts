import type { InteractionProps } from "@components/button/types";
import type NextLink from "next/link";
import type { ComponentProps } from "react";

export interface LinkProps
  extends
    InteractionProps,
    // pages-router-only options dropped
    Omit<
      ComponentProps<typeof NextLink>,
      | "href"
      | "color"
      | "as"
      | "shallow"
      | "passHref"
      | "locale"
      | "legacyBehavior"
    > {
  href: string;
  /**
   * Render a plain <a>, so the browser loads the page in full instead of a
   * client navigation. External, mailto: and tel: links always do.
   */
  native?: boolean | undefined;
}
