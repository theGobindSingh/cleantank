import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mediaQuery } from "@styles/global";

// ─── Feature Card Grid ──────────────────────────────────────────────────────────

export const FeatureCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  width: 100%;
  margin-top: 2.75rem;

  ${mediaQuery.desktop} {
    &:has(.feature-card:hover) .feature-card:not(:hover) {
      scale: 0.95;
      opacity: 0.8;
    }
  }

  ${mediaQuery.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${mediaQuery.phone} {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }
`;

const featureCardHoverStyles = css`
  border-color: rgba(var(--color-secondary-700-base), 0.45);
  background-color: rgba(var(--color-primary-200-base), 1);
  .feature-title {
    color: var(--color-neutral-900);
  }
  .feature-description {
    color: var(--color-neutral-700);
  }

  .feature-icon {
    color: var(--color-secondary-700);
    background: rgba(var(--color-secondary-800-base), 0.2);
  }
`;

export const FeatureCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  border: 1px solid rgba(var(--color-neutral-800-base), 0.75);
  border-radius: 0.25rem;
  padding: 1.3rem;
  background-color: rgba(var(--color-neutral-900-base), 0.5);
  transition: all 0.3s ease;

  * {
    transition: all 0.3s ease;
  }

  .feature-title,
  .feature-description {
    transition: all 0.3s ease;
  }

  .feature-icon {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 0.45rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-secondary-600);
    background: rgba(var(--color-neutral-800-base), 0.5);

    svg {
      font-size: var(--fs-s);
    }
  }

  ${mediaQuery.desktop} {
    &:hover {
      ${featureCardHoverStyles}
    }
  }

  ${mediaQuery.tablet} {
    &:hover {
      ${featureCardHoverStyles}
    }
  }

  &.active {
    ${featureCardHoverStyles}
  }
`;

export const FeatureCardCta = styled.div`
  margin-top: 2rem;
`;
