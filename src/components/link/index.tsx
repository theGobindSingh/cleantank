import { colorStyleVars, interactionStyles } from "@components/button/styles";
import NextLink from "next/link";
import type { LinkProps } from "./types";

const isExternal = (href: string): boolean => {
  return /^(https?:)?\/\//.test(href);
};

// mailto:, tel:, whatsapp: and the like aren't routes
const hasScheme = (href: string): boolean => {
  return /^[a-z][a-z\d+.-]*:/i.test(href);
};

/**
 * next/link for routes. A plain <a> for external links (opened in a new tab
 * safely), other schemes, and anything marked `native`.
 */
const Link = ({
  variant = "text",
  size = "md",
  color = "primary",
  native = false,
  href,
  className,
  style,
  children,
  ...rest
}: LinkProps) => {
  const sharedProps = {
    href,
    style: { ...colorStyleVars(color), ...style },
    className: interactionStyles({ variant, size, className }),
  };

  if (native || isExternal(href) || hasScheme(href)) {
    // next/link-only options aren't valid on <a>
    const {
      prefetch,
      replace,
      scroll,
      onNavigate,
      transitionTypes,
      ...anchorProps
    } = rest;
    const externalProps = isExternal(href)
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <a {...sharedProps} {...externalProps} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <NextLink {...sharedProps} {...rest}>
      {children}
    </NextLink>
  );
};

export default Link;
