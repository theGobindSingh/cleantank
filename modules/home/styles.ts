import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mediaQuery } from "@styles/global";
import Image from "next/image";

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
