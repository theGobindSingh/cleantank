import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mediaQuery } from "@styles/global";
import Link from "next/link";

export const headerWrapperStyles = css`
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.06);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: var(--color-white);
`;

export const HeaderLogo = styled(Link)`
  font-size: var(--fs-m);
  font-weight: 800;
  color: var(--color-primary-400);
  text-decoration: none;
  transition: all 0.3s ease;
  &:has(~ label input:checked) {
    opacity: 0;
  }
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

  ${mediaQuery.nonDesktop} {
    & > .contact-btn {
      display: none;
    }
  }

  &::before {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100%;
    background-color: rgba(var(--color-accent-100-base), 0.75);
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease;
    backdrop-filter: blur(4px);
  }

  &:has(label input:checked) {
    &::before {
      visibility: visible;
      opacity: 1;
    }
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
  ${mediaQuery.desktop} {
    .contact-btn {
      display: none;
    }
  }
  ${mediaQuery.nonDesktop} {
    position: absolute;
    height: 100dvh;
    width: 62.5%;
    flex-direction: column;
    top: 0;
    right: 0;
    background-color: var(--color-accent-1000);
    transform: translateX(101%);
    transition: all 0.3s ease;
    font-size: var(--fs-1xs);
    padding: 0 1.5rem;
    &:has(~ label input:checked) {
      transform: translateX(0);
    }
    .contact-btn {
      margin-top: 2.5rem;
      font-size: var(--fs-1xs);
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

export const HamburgerButton = styled.label`
  /* ============ CUSTOMIZATION ============ */
  --burger-size: 1.5rem;
  --burger-line-color: var(--color-primary-200);
  --line-thickness: 2.5;
  --animation-duration: 0.5s;
  --animation-easing: cubic-bezier(0.645, 0.045, 0.355, 1);

  /* ============ PATH CONSTANTS (don't change) ============ */
  --path-length-curved: 126.64;
  --path-length-straight: 70;
  --line-visible-length: 24;
  --line-start-offset: -38;
  --x-line-length: 22.63;
  --x-line-offset: -94.11;
  --middle-hidden-offset: -50;

  /* ============ BUTTON RESET & STYLES ============ */
  all: unset;
  box-sizing: border-box;
  position: relative;
  width: var(--burger-size);
  height: var(--burger-size);
  cursor: pointer;
  display: block;
  z-index: 999;

  input {
    /* ============ HIDDEN CHECKBOX ============ */
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    /* ============ CHECKED STATE (X shape) ============ */
    &:checked {
      & ~ svg .burger-line--top,
      & ~ svg .burger-line--bottom {
        stroke-dasharray: var(--x-line-length) var(--path-length-curved);
        stroke-dashoffset: var(--x-line-offset);
      }
      & ~ svg .burger-line--middle {
        stroke-dasharray: 0 var(--path-length-straight);
        stroke-dashoffset: var(--middle-hidden-offset);
      }
    }
  }
  ${mediaQuery.nonDesktop} {
    &:has(input:checked) ~ .nav-wrapper {
      transform: translateX(0);
    }
  }

  /* ============ SVG - fills container ============ */
  svg {
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: visible;
  }

  /* ============ LINE STYLES ============ */
  .burger-line {
    fill: none;
    stroke: var(--burger-line-color);
    stroke-width: var(--line-thickness);
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: all var(--animation-duration) var(--animation-easing);
  }

  .burger-line--top,
  .burger-line--bottom {
    stroke-dasharray: var(--line-visible-length) var(--path-length-curved);
    stroke-dashoffset: var(--line-start-offset);
  }

  .burger-line--middle {
    stroke-dasharray: var(--line-visible-length) var(--path-length-straight);
    stroke-dashoffset: var(--line-start-offset);
  }

  ${mediaQuery.desktop} {
    display: none;
  }
`;
