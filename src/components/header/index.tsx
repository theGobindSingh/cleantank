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
import { siteLinks } from "@constants";
import { useRouter } from "next/router";
import {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useRef,
} from "react";

const Header = () => {
  const { pathname, push } = useRouter();
  const toggleInputRef = useRef<HTMLInputElement>(null);

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

  const linkMapper = useCallback(
    ({ name, path }: (typeof siteLinks)[number]) => {
      const linkPath = name === "Home" ? "/" : path;
      const clickHandler: MouseEventHandler<HTMLAnchorElement> = (e) => {
        e.preventDefault();
        const toggleInput = toggleInputRef.current;
        if (toggleInput) {
          toggleInput.checked = false;
          toggleBodyScroll({ isScrollEnabled: true });
        }
        setTimeout(() => {
          void push(linkPath);
        }, 75);
      };
      return (
        <HeaderLink
          key={name}
          href={linkPath}
          className={pathname === linkPath ? "active" : undefined}
          scroll={false}
          onClick={clickHandler}
        >
          {name}
        </HeaderLink>
      );
    },
    [pathname, push, toggleBodyScroll],
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
          {siteLinks.map(linkMapper)}{" "}
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
            ref={toggleInputRef}
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
