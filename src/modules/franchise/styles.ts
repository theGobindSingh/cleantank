import styled from "@emotion/styled";
import { mediaQuery } from "@styles/global";

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
    max-width: 100%;
    padding: 1.2rem;
    gap: 1rem;
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
    gap: 0.65rem;
  }
`;

export const FranchiseHeroStatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(var(--color-neutral-1000-base), 0.1);
  background-color: rgba(var(--color-primary-200-base), 0.42);
`;

// ─── Why Tank Cleaning ─────────────────────────────────────────────────────────

export const FranchiseWhyList = styled.ul`
  list-style: none;
  margin: 2rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;

  ${mediaQuery.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${mediaQuery.phone} {
    grid-template-columns: 1fr;
  }

  li {
    padding: 0.75rem 1rem;
    border-radius: 0.4rem;
    border: 1px solid rgba(var(--color-neutral-800-base), 0.75);
    background-color: rgba(var(--color-neutral-900-base), 0.5);
  }
`;

// ─── Franchise Business Model ───────────────────────────────────────────────────

export const FranchiseModelTable = styled.dl`
  margin: 2.75rem 0 0;
  border: 1px solid rgba(var(--color-neutral-800-base), 0.75);
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: rgba(var(--color-primary-200-base), 1);

  ${mediaQuery.phone} {
    margin-top: 2rem;
  }
`;

export const FranchiseModelRow = styled.div`
  display: grid;
  grid-template-columns: minmax(12rem, 1fr) minmax(0, 1.4fr);
  border-top: 1px solid rgba(var(--color-neutral-800-base), 0.6);

  &:first-of-type {
    border-top: none;
  }

  dt,
  dd {
    margin: 0;
    padding: 0.9rem 1.1rem;
  }

  dt {
    background-color: rgba(var(--color-primary-100-base), 0.75);
  }

  ${mediaQuery.phone} {
    grid-template-columns: 1fr;

    dt {
      padding-bottom: 0.35rem;
    }

    dd {
      padding-top: 0;
    }
  }
`;

export const FranchiseDisclaimerNote = styled.aside`
  margin-top: 1.25rem;
  padding: 1rem 1.15rem;
  border-radius: 0.4rem;
  border: 1px solid rgba(var(--color-secondary-700-base), 0.45);
  background-color: rgba(var(--color-secondary-900-base), 0.12);
`;

// ─── Franchise Support Flow ─────────────────────────────────────────────────────

export const FranchiseSupportFlow = styled.ol`
  counter-reset: support-step;
  list-style: none;
  margin: 2.75rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  ${mediaQuery.phone} {
    margin-top: 2rem;
    flex-direction: column;
  }
`;

export const FranchiseSupportFlowStep = styled.li`
  counter-increment: support-step;
  flex: 1 1 12rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(var(--color-neutral-800-base), 0.75);
  background-color: rgba(var(--color-neutral-900-base), 0.5);

  &::before {
    content: counter(support-step, decimal-leading-zero);
    font-family: var(--font-mono);
    font-size: var(--fs-2xs);
    font-weight: 800;
    color: var(--color-secondary-600);
  }
`;

// ─── Closing / Inquiry CTA ──────────────────────────────────────────────────────

export const FranchiseInquiryCtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;
