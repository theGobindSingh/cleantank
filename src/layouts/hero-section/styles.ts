import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H1 } from "@components/html";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mediaQuery } from "@styles/global";
import Image from "next/image";

export const heroSectionWrapperStyles = css`
  overflow: hidden;
  height: 100svh;
  position: relative;
  &::after {
    content: "";
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(var(--color-primary-100-base), 0.9),
      rgba(var(--color-primary-200-base), 0.6)
    );
  }
`;

export const HeroSectionWrapper = styled(CommonFullWidthWrapper)`
  display: flex;
  flex-direction: column;
  z-index: 2;
  color: var(--color-accent-1000);
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  --_height-var: 2.25rem;
  padding-top: calc(var(--_height-var) + (2 * 1rem));
  ${mediaQuery.nonDesktop} {
    --_height-var: 1.5rem;
  }

  .content-wrapper {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .chip {
      margin-bottom: 0.75rem;
    }

    .title {
      width: 100%;
    }

    .sub-title {
      width: 90%;
    }

    .btns-container {
      display: flex;
      gap: 1rem;
    }
  }
`;

export const HeroSectionImage = styled(Image)`
  width: 100%;
  height: 110%;
  object-fit: cover;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  user-select: none;
`;

export const HeroSectionTitle = styled(H1)`
  width: 100%;
  margin: 0;
  * {
    color: var(--color-secondary-800);
  }
`;
