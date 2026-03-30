import Button from "@components/button";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import {
  HeaderLink,
  HeaderLinksWrapper,
  HeaderLogo,
  HeaderNav,
  headerWrapperStyles,
} from "@components/header/styles";
import { useRouter } from "next/router";
import { useCallback } from "react";

const headerLinks = [
  { name: "Home", path: "/" },
  { name: "Clients", path: "/clients" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about-us" },
  { name: "Franchise", path: "/franchise" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const { pathname } = useRouter();
  const linkMapper = useCallback(
    ({ name, path }: (typeof headerLinks)[number]) => {
      const linkPath = name === "Home" ? "/" : path;
      return (
        <HeaderLink
          key={name}
          href={linkPath}
          className={pathname === linkPath ? "active" : undefined}
        >
          {name}
        </HeaderLink>
      );
    },
    [pathname],
  );
  return (
    <CommonFullWidthWrapper element="header" wrapperCss={headerWrapperStyles}>
      <HeaderNav>
        <HeaderLogo href="/">CLEANTANK SERVICES</HeaderLogo>
        <HeaderLinksWrapper>{headerLinks.map(linkMapper)}</HeaderLinksWrapper>
        <Button $size="sm" href={"/contact"} className="contact-btn">
          Get a Quote
        </Button>
      </HeaderNav>
    </CommonFullWidthWrapper>
  );
};

export default Header;
