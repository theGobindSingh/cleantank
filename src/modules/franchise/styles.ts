import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mediaQuery, shouldForwardProp } from "@styles/global";

// ─── Hero Trust Panel ──────────────────────────────────────────────────────────

export const FranchiseHeroTrustPanel = styled.aside`
  width: 100%;
  max-width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.6rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(var(--color-secondary-700-base), 0.24);
  background: linear-gradient(
    160deg,
    rgba(var(--color-primary-100-base), 0.84) 0%,
    rgba(var(--color-primary-200-base), 0.78) 100%
  );
  box-shadow: 0 1.25rem 2.5rem rgba(var(--color-primary-100-base), 0.24);

  ${mediaQuery.phone} {
    padding: 1.2rem;
  }

  .hero-footnote {
    font-family: var(--font-mono);
  }
`;

export const FranchiseHeroTrustHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FranchiseHeroStatGrid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;

  ${mediaQuery.phone} {
    grid-template-columns: 1fr;
  }
`;

export const FranchiseHeroStatItem = styled("li", { shouldForwardProp })<{
  $isPlaceholder?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid
    ${({ $isPlaceholder }) => {
      return $isPlaceholder
        ? "rgba(var(--color-secondary-800-base), 0.42)"
        : "rgba(var(--color-neutral-1000-base), 0.1)";
    }};
  background-color: ${({ $isPlaceholder }) => {
    return $isPlaceholder
      ? "rgba(var(--color-secondary-900-base), 0.12)"
      : "rgba(var(--color-primary-200-base), 0.42)";
  }};
`;

export const FranchiseHeroHighlightList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FranchiseHeroHighlightItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;

  .highlight-icon {
    color: var(--color-secondary-700);
    font-size: var(--fs-s);
    margin-top: 0.1rem;
  }

  .highlight-copy {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`;

// ─── Benefits Grid ─────────────────────────────────────────────────────────────

export const FranchiseBenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  width: 100%;
  margin-top: 2.75rem;

  ${mediaQuery.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${mediaQuery.phone} {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }
`;

const benefitCardHoverStyles = css`
  border-color: rgba(var(--color-secondary-700-base), 0.45);
  background-color: rgba(var(--color-primary-100-base), 0.74);

  .benefit-icon {
    color: var(--color-secondary-700);
    background: rgba(var(--color-secondary-800-base), 0.2);
  }
`;

export const FranchiseBenefitCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  border: 1px solid rgba(var(--color-primary-300-base), 0.24);
  border-radius: 0.5rem;
  padding: 1.3rem;
  background-color: rgba(var(--color-primary-200-base), 0.46);
  transition: all 0.3s ease;

  * {
    transition: all 0.3s ease;
  }

  .benefit-icon {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 0.45rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-secondary-600);
    background: rgba(var(--color-primary-100-base), 0.5);

    svg {
      font-size: var(--fs-s);
    }
  }

  ${mediaQuery.desktop} {
    &:hover {
      ${benefitCardHoverStyles}
    }
  }

  ${mediaQuery.tablet} {
    &:hover {
      ${benefitCardHoverStyles}
    }
  }

  &.active {
    ${benefitCardHoverStyles}
  }
`;

// ─── Support Bento Grid ────────────────────────────────────────────────────────

export const FranchiseSupportGrid = styled.div`
  width: 100%;
  margin-top: 2.75rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: minmax(10.5rem, auto);
  gap: 1rem;

  ${mediaQuery.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${mediaQuery.phone} {
    margin-top: 2rem;
    grid-template-columns: 1fr;
  }
`;

const supportCardHoverStyles = css`
  border-color: rgba(var(--color-secondary-700-base), 0.48);
  background-color: rgba(var(--color-primary-100-base), 0.7);

  .support-icon {
    color: var(--color-secondary-800);
  }

  .support-label {
    color: var(--color-secondary-800);
  }
`;

export const FranchiseSupportCard = styled("article", {
  shouldForwardProp,
})<{
  $size?: "default" | "wide" | "tall";
}>`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(var(--color-primary-300-base), 0.3);
  background-color: rgba(var(--color-primary-200-base), 0.52);
  padding: 1.15rem;
  min-height: 100%;
  transition: all 0.3s ease;

  * {
    transition: all 0.3s ease;
  }

  ${({ $size }) => {
    if ($size === "wide") {
      return css`
        grid-column: span 2;
      `;
    }

    if ($size === "tall") {
      return css`
        grid-row: span 2;
      `;
    }

    return null;
  }}

  .support-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .support-icon {
    color: var(--color-secondary-600);
    font-size: var(--fs-s);
  }

  .support-label {
    font-family: var(--font-mono);
    font-size: var(--fs-4xs);
    font-weight: 700;
    color: rgba(var(--color-neutral-300-base), 0.88);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  ${mediaQuery.nonDesktop} {
    grid-column: auto;
    grid-row: auto;
  }

  ${mediaQuery.desktop} {
    &:hover {
      ${supportCardHoverStyles}
    }
  }

  ${mediaQuery.tablet} {
    &:hover {
      ${supportCardHoverStyles}
    }
  }

  &.active {
    ${supportCardHoverStyles}
  }
`;

// ─── Technology Comparison ─────────────────────────────────────────────────────

export const FranchiseComparisonTable = styled.div`
  width: 100%;
  margin-top: 2.75rem;
  border: 1px solid rgba(var(--color-primary-300-base), 0.28);
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: rgba(var(--color-primary-200-base), 0.44);

  ${mediaQuery.phone} {
    margin-top: 2rem;
  }
`;

export const FranchiseComparisonHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(10rem, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  gap: 0;
  background-color: rgba(var(--color-primary-100-base), 0.66);

  .header-cell {
    padding: 1rem 1.1rem;
    border-right: 1px solid rgba(var(--color-primary-300-base), 0.28);

    &:last-child {
      border-right: none;
    }
  }

  ${mediaQuery.phone} {
    display: none;
  }
`;

export const FranchiseComparisonList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FranchiseComparisonRow = styled.li`
  display: grid;
  grid-template-columns: minmax(10rem, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  border-top: 1px solid rgba(var(--color-primary-300-base), 0.24);

  &:first-of-type {
    border-top: none;
  }

  .cell {
    padding: 1rem 1.1rem;
    border-right: 1px solid rgba(var(--color-primary-300-base), 0.24);

    &:last-child {
      border-right: none;
    }

    &.criteria {
      background-color: rgba(var(--color-primary-100-base), 0.35);
    }
  }

  ${mediaQuery.phone} {
    display: flex;
    flex-direction: column;
    gap: 0;
    border-top: 1px solid rgba(var(--color-primary-300-base), 0.28);

    .cell {
      border-right: none;
      border-top: 1px solid rgba(var(--color-primary-300-base), 0.16);

      &:first-of-type {
        border-top: none;
      }

      &.criteria {
        background-color: rgba(var(--color-primary-100-base), 0.5);
      }
    }
  }
`;

export const FranchiseComparisonCellTitle = styled.span`
  display: block;
  font-family: var(--font-mono);
  font-size: var(--fs-4xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(var(--color-neutral-400-base), 0.86);
  margin-bottom: 0.45rem;

  ${mediaQuery.desktop} {
    display: none;
  }

  ${mediaQuery.tablet} {
    display: none;
  }
`;

// ─── Franchise Success Stories ─────────────────────────────────────────────────

export const FranchiseStoriesGrid = styled.div`
  width: 100%;
  margin-top: 2.75rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  ${mediaQuery.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${mediaQuery.phone} {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }
`;

const storyCardHoverStyles = css`
  border-color: rgba(var(--color-secondary-700-base), 0.45);
  transform: translateY(-0.15rem);
`;

export const FranchiseStoryCard = styled.blockquote`
  margin: 0;
  border: 1px solid rgba(var(--color-primary-300-base), 0.28);
  border-radius: 0.5rem;
  padding: 1.35rem;
  background-color: rgba(var(--color-primary-200-base), 0.45);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s ease;

  * {
    transition: all 0.3s ease;
  }

  ${mediaQuery.desktop} {
    &:hover {
      ${storyCardHoverStyles}
    }
  }

  ${mediaQuery.tablet} {
    &:hover {
      ${storyCardHoverStyles}
    }
  }

  &.active {
    ${storyCardHoverStyles}
  }
`;

export const FranchiseStoryFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  border-top: 1px solid rgba(var(--color-primary-300-base), 0.2);
  padding-top: 0.9rem;

  .story-region {
    font-family: var(--font-mono);
  }
`;

// ─── Inquiry CTA + Form ────────────────────────────────────────────────────────

export const FranchiseInquiryGrid = styled.div`
  width: 100%;
  margin-top: 2.75rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(18rem, 1.05fr);
  gap: 1.5rem;
  align-items: start;

  ${mediaQuery.nonDesktop} {
    grid-template-columns: 1fr;
  }

  ${mediaQuery.phone} {
    margin-top: 2rem;
  }
`;

export const FranchiseInquiryAssurancePanel = styled.aside`
  border: 1px solid rgba(var(--color-primary-300-base), 0.24);
  border-radius: 0.5rem;
  background-color: rgba(var(--color-primary-200-base), 0.4);
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FranchiseInquiryAssuranceList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const FranchiseInquiryAssuranceItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.55rem;
  align-items: start;

  .assurance-dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    margin-top: 0.42rem;
    background-color: var(--color-secondary-700);
  }
`;

export const FranchiseInquiryFormCard = styled.form`
  border: 1px solid rgba(var(--color-primary-300-base), 0.28);
  border-radius: 0.6rem;
  background-color: rgba(var(--color-primary-100-base), 0.65);
  padding: 1.45rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.95rem;

  .full-row {
    grid-column: 1 / -1;
  }

  .form-intro {
    padding-bottom: 0.5rem;
  }

  .form-actions {
    padding-top: 0.25rem;

    .form-note {
      display: block;
      margin-top: 0.7rem;
    }

    .contact-link-btn {
      margin-top: 0.35rem;
      align-self: flex-start;
    }
  }

  ${mediaQuery.phone} {
    grid-template-columns: 1fr;
    padding: 1.15rem;
  }
`;

export const FranchiseInquiryField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

export const FranchiseInquiryLabel = styled.label`
  font-family: var(--font-sans);
  font-size: var(--fs-3xs);
  font-weight: 600;
  color: var(--color-primary-1000);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const inquiryControlStyles = css`
  width: 100%;
  min-height: 2.7rem;
  border-radius: 0.4rem;
  border: 1px solid rgba(var(--color-primary-300-base), 0.32);
  background-color: rgba(var(--color-neutral-1000-base), 0.9);
  color: var(--color-neutral-100);
  font-family: var(--font-sans);
  font-size: var(--fs-2xs);
  padding: 0.8rem 0.9rem;
  outline: none;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease;

  &::placeholder {
    color: rgba(var(--color-neutral-500-base), 0.58);
  }

  &:focus {
    border-color: var(--color-secondary-700);
    box-shadow: 0 0 0 2px rgba(var(--color-secondary-700-base), 0.12);
  }
`;

export const FranchiseInquiryInput = styled.input`
  ${inquiryControlStyles}
`;

export const FranchiseInquirySelect = styled.select`
  ${inquiryControlStyles}
  cursor: pointer;
`;
