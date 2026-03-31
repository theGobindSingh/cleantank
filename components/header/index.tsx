import Button from "@components/button";
import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import {
  HamburgerButton,
  HeaderLink,
  HeaderLinksWrapper,
  HeaderLogo,
  HeaderNav,
  headerWrapperStyles,
} from "@components/header/styles";
import { useRouter } from "next/router";
import { ChangeEventHandler, useCallback } from "react";

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

  const toggleBodyScroll = useCallback(
    ({ isScrollEnabled }: { isScrollEnabled: boolean }) => {
      if (isScrollEnabled) {
        document.body.style.removeProperty("overflow");
      } else {
        document.body.style.setProperty("overflow", "hidden");
      }
    },
    [],
  );

  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const isChecked = (e.currentTarget ?? e.target).checked;
      if (isChecked) {
        toggleBodyScroll({ isScrollEnabled: false });
      } else {
        toggleBodyScroll({ isScrollEnabled: true });
      }
    },
    [toggleBodyScroll],
  );
  return (
    <CommonFullWidthWrapper element="header" wrapperCss={headerWrapperStyles}>
      <HeaderNav>
        <HeaderLogo href="/">CLEANTANK SERVICES</HeaderLogo>
        <HeaderLinksWrapper>
          {headerLinks.map(linkMapper)}{" "}
          <Button $size="sm" href={"/contact"} className="contact-btn">
            Get a Quote
          </Button>
        </HeaderLinksWrapper>
        <Button $size="sm" href={"/contact"} className="contact-btn">
          Get a Quote
        </Button>
        <HamburgerButton htmlFor="nav-toggle" aria-label="Toggle menu">
          <input
            id="nav-toggle"
            type="checkbox"
            onChange={inputChangeHandler}
          />
          <svg viewBox="35 35 30 30" xmlns="http://www.w3.org/2000/svg">
            <path
              className="burger-line burger-line--top"
              d="M0 40h62c13 0 6 28-4 18L35 35"
            />
            <path className="burger-line burger-line--middle" d="M0 50h70" />
            <path
              className="burger-line burger-line--bottom"
              d="M0 60h62c13 0 6-28-4-18L35 65"
            />
          </svg>
        </HamburgerButton>
      </HeaderNav>
    </CommonFullWidthWrapper>
  );
};

export default Header;
