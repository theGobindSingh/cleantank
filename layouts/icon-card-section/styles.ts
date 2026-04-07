import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints, mediaQuery } from "@styles/global";

export const iconCardSectionCss = css`
  padding: 3.75rem 0;

  @media (max-width: 1300px) and (min-width: ${breakpoints.tablet.max}px) {
    .title,
    .desc,
    .chip {
      transform: translateX(10vw);
    }
  }
`;

export const IconCardList = styled.ol`
  margin: 2.5rem 0 0;
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
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    width: 100%;
    justify-content: flex-start;
    scroll-snap-type: x mandatory;
  }
`;

const iconCardHoverStyles = css`
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

export const IconCard = styled.li`
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

  .numbers-visible &::before {
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
    ${iconCardHoverStyles}
  }
  ${mediaQuery.desktop} {
    &:hover {
      ${iconCardHoverStyles}
    }
  }
  ${mediaQuery.tablet} {
    &:hover {
      ${iconCardHoverStyles}
    }
  }
  ${mediaQuery.phone} {
    flex-shrink: 0;
    width: 75vw;
    padding: 2.5rem 2rem;
    scroll-snap-align: center;
  }
`;
