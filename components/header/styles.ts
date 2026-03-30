import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";

export const headerWrapperStyles = css`
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--color-white);
`;

export const HeaderLogo = styled(Link)`
  font-size: var(--fs-m);
  font-weight: 800;
  color: var(--color-primary-400);
  text-decoration: none;
`;

export const HeaderNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  .contact-btn {
    font-weight: 700;
  }
`;

export const HeaderLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  font-size: var(--fs-3xs);
  color: var(--color-accent-300);
  font-weight: 700;
  & > a {
    &.active {
      color: var(--color-primary-400);
      &::after {
        width: 100%;
      }
    }
    &:hover {
      color: var(--color-primary-400);
      &::after {
        width: 100%;
      }
    }
  }
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  position: relative;
  &::after {
    transition: all 0.3s ease;
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0%;
    height: 2px;
    background-color: var(--color-primary-400);
  }
`;
