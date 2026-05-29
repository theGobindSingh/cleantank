import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { H1 } from "@components/html";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mediaQuery, shouldForwardProp } from "@styles/global";
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
      rgba(var(--color-primary-100-base), 0.65),
      rgba(var(--color-primary-200-base), 0.25)
    );
  }
`;

export const splitHeroSectionWrapperStyles = css`
  ${mediaQuery.nonDesktop} {
    height: auto;
    min-height: 100svh;
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
  padding-top: calc(var(--_height-var) + (2 * 1rem) + 2rem);
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

  &.split-layout {
    ${mediaQuery.nonDesktop} {
      justify-content: flex-start;
      height: auto;
      padding-bottom: 2.25rem;
    }
  }
`;

export const HeroSectionSplitGrid = styled("div", { shouldForwardProp })<{
  $hasRightPanel: boolean;
}>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ $hasRightPanel }) => {
    return $hasRightPanel ? "minmax(0, 1.1fr) minmax(17rem, 0.9fr)" : "1fr";
  }};
  gap: ${({ $hasRightPanel }) => {
    return $hasRightPanel ? "2.25rem" : "0";
  }};
  align-items: center;

  .content-wrapper {
    max-width: 44rem;

    .sub-title {
      width: 100%;
      max-width: 34rem;
    }
  }

  .right-panel-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  ${mediaQuery.nonDesktop} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    align-items: stretch;

    .content-wrapper {
      .btns-container {
        width: 100%;
        flex-direction: column;
        align-items: stretch;
      }
    }

    .right-panel-wrapper {
      justify-content: flex-start;

      > * {
        width: 100%;
        max-width: none;
      }
    }
  }

  ${mediaQuery.phone} {
    gap: 1rem;

    .content-wrapper {
      max-width: 100%;

      .btns-container {
        width: 100%;
        flex-direction: column;
        align-items: stretch;
      }
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

  ${mediaQuery.nonDesktop} {
    font-size: var(--fs-3xl);
  }
`;
