import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints, mediaQuery } from "@styles/global";
import Image from "next/image";

export const HeroStripWrapper = styled(CommonFullWidthWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mediaQuery.nonDesktop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 2.5rem 0;
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    padding: 2.5rem 0;
  }
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

  ${mediaQuery.nonDesktop} {
    padding: 0 0;
  }
  @media (max-width: 400px) {
    padding: 0 0;
  }
`;

export const processExtraCss = css`
  padding: 3.75rem 0;

  @media (max-width: 1300px) and (min-width: ${breakpoints.tablet.max}px) {
    .title,
    .desc {
      transform: translateX(10vw);
    }
  }
`;

export const HomeProcessSectionItemWrapper = styled.ol`
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
  ${mediaQuery.phone} {
    flex-shrink: 0;
    width: 75vw;
    padding: 2.5rem 2rem;
    scroll-snap-align: center;
  }
`;

// ─── Industries We Serve ──────────────────────────────────────────────────────

export const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  width: 100%;
  margin-top: 2.75rem;

  ${mediaQuery.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
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

const industryCardHoverStyles = css`
  .industry-img {
    transform: scale(1.07);
  }
`;

export const IndustryCardImage = styled(Image)`
  position: absolute !important;
  inset: 0;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

export const IndustryCard = styled.article`
  --_card-height: 25rem;

  position: relative;
  border-radius: 0.375rem;
  overflow: hidden;
  height: var(--_card-height);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: default;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(
      to top,
      rgba(var(--color-primary-100-base), 0.97) 0%,
      rgba(var(--color-primary-100-base), 0.6) 40%,
      transparent 100%
    );
  }

  .industry-content {
    position: relative;
    z-index: 2;
    padding: 2rem 1.75rem;
  }

  ${mediaQuery.desktop} {
    &:hover {
      ${industryCardHoverStyles}
    }
  }

  ${mediaQuery.tablet} {
    --_card-height: 22rem;

    &:hover {
      ${industryCardHoverStyles}
    }
  }

  ${mediaQuery.phone} {
    --_card-height: 18rem;
    flex-shrink: 0;
    width: 75vw;
    scroll-snap-align: center;
  }
`;

// ─── Franchise Section ────────────────────────────────────────────────────────

export const FranchiseSectionWrapper = styled(CommonFullWidthWrapper)`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  ${mediaQuery.tablet} {
    padding: 3.5rem 0;
  }

  ${mediaQuery.phone} {
    padding: 2.5rem 0;
  }

  ${mediaQuery.nonDesktop} {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const FranchiseLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.75rem;
`;

export const FranchisePointList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FranchisePointItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;

  .point-icon {
    color: var(--color-secondary-600);
    font-size: var(--fs-l);
    flex-shrink: 0;
    margin-top: 0.15rem;
  }

  .point-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const FranchiseFormCard = styled.form`
  background-color: rgba(var(--color-primary-200-base), 0.5);
  border: 1px solid rgba(var(--color-neutral-1000-base), 0.1);
  border-radius: 0.5rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  ${mediaQuery.phone} {
    padding: 1.75rem;
  }
`;

export const FranchiseFormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FranchiseFormLabel = styled.label`
  font-family: var(--font-sans);
  font-size: var(--fs-3xs);
  font-weight: 500;
  color: var(--color-neutral-700);
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const FranchiseFormInput = styled.input`
  background-color: rgba(var(--color-neutral-1000-base), 0.07);
  border: 1px solid rgba(var(--color-neutral-700-base), 0.25);
  border-radius: 0.375rem;
  color: var(--color-neutral-1000);
  font-family: var(--font-sans);
  font-size: var(--fs-2xs);
  padding: 0.875rem 1rem;
  outline: none;
  width: 100%;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: rgba(var(--color-neutral-700-base), 0.5);
  }

  &:focus {
    border-color: var(--color-secondary-700);
  }
`;

// ─── Testimonials Section ─────────────────────────────────────────────────────

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;
  margin-top: 2.75rem;

  ${mediaQuery.phone} {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialCard = styled.blockquote`
  margin: 0;
  padding: 2.25rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(var(--color-neutral-800-base), 0.5);
  background-color: rgba(var(--color-neutral-900-base), 0.4);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;

  &::before {
    content: "\u201C";
    position: absolute;
    top: 1.25rem;
    right: 1.75rem;
    font-size: 5rem;
    line-height: 1;
    font-family: var(--font-cursive);
    color: rgba(var(--color-secondary-700-base), 0.35);
    pointer-events: none;
  }

  ${mediaQuery.phone} {
    padding: 1.75rem;
  }
`;

export const TestimonialAttribution = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  border-top: 1px solid rgba(var(--color-neutral-800-base), 0.5);
  padding-top: 1.25rem;
`;
