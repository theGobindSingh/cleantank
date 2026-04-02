import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints, mediaQuery } from "@styles/global";

export const HeroStripWrapper = styled(CommonFullWidthWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroStripItemWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.75rem 0;
  gap: 0.25rem;
  text-align: center;

  .icon {
    font-size: var(--fs-l);
    margin-bottom: 0.5rem;
  }

  .title {
    letter-spacing: 0.05em;
  }

  .sub-title {
    font-family: var(--font-mono);
    letter-spacing: 0.1em;
  }
`;

export const HomeProcessSectionWrapper = styled(CommonFullWidthWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3.75rem 0;

  .desc {
    max-width: 45vw;
    line-height: 1.5;
  }

  @media (max-width: 1300px) and (min-width: ${breakpoints.tablet.max}px) {
    .title,
    .desc {
      transform: translateX(10vw);
    }
  }
`;

export const HomeProcessSectionItemWrapper = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  height: auto;
  counter-reset: hero-process-item-counter;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }
  ${mediaQuery.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mediaQuery.phone} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const itemHoverStyles = css`
  background-color: var(--color-primary-200);
  .card-title {
    color: var(--color-accent-1000);
  }
  .card-desc {
    color: var(--color-neutral-700);
  }
  .icon {
    background-color: var(--color-secondary-700);
    color: var(--color-primary-200);
  }
  &::before {
    color: rgba(var(--color-neutral-700-base), 0.25);
  }
`;

export const HomeProcessSectionItem = styled.li`
  counter-increment: hero-process-item-counter;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgba(var(--color-neutral-900-base), 0.5);
  height: 100%;
  width: 100%;
  border-radius: 0.25rem;
  padding: 2.25rem 1.75rem 2.25rem 1.75rem;
  padding: 3vw 2.5vw;
  position: relative;
  transition: all 0.3s ease;
  * {
    transition: all 0.3s ease;
  }

  @media (max-width: 1300px) and (min-width: ${breakpoints.tablet.max}px) {
    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(3) {
      transform: translateX(calc(50%));
    }
    &:nth-of-type(4),
    &:nth-of-type(5) {
      transform: translateX(calc(-50% - 0.5rem));
    }
    &:nth-of-type(4) {
      grid-column: 3 / 4;
      grid-row: 2;
    }
    &:nth-of-type(5) {
      grid-column: 4 / 5;
      grid-row: 2;
    }
  }

  &::before {
    content: "0" counter(hero-process-item-counter);
    position: absolute;
    --_pos: 5%;
    top: var(--_pos);
    right: var(--_pos);
    font-size: 450%;
    font-weight: 800;
    color: rgba(var(--color-neutral-800-base), 0.5);
    font-family: var(--font-sans);
    line-height: 0.7em;
    letter-spacing: -0.01em;
  }

  p {
    line-height: 1.75;
  }

  .icon {
    background-color: var(--color-primary-200);
    color: var(--color-neutral-1000);
    font-size: var(--fs-2xl);
    padding: 0.5rem;
    border-radius: 0.25rem;
  }
  &.active {
    ${itemHoverStyles}
  }
  ${mediaQuery.desktop} {
    &:hover {
      ${itemHoverStyles}
    }
  }
  ${mediaQuery.tablet} {
    &:hover {
      ${itemHoverStyles}
    }
  }
`;
