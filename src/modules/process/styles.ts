import styled from "@emotion/styled";
import { mediaQuery } from "@styles/global";

export const ProcessCardsWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  list-style: none;
  padding: 2rem 0;
  margin: 0;
  & > li {
    width: 100%;
  }

  hr {
    border: 1px solid var(--color-neutral-700);
    width: 50%;
  }

  ${mediaQuery.nonDesktop} {
    hr {
      border: 1px solid var(--color-neutral-800);
      width: 75%;
    }
  }
`;

// ─── Recommended Cleaning Frequency ────────────────────────────────────────

export const FrequencyExampleGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;

  ${mediaQuery.phone} {
    grid-template-columns: 1fr;
  }
`;

export const FrequencyExampleCard = styled.li`
  padding: 1.25rem 1.5rem;
  border-radius: 0.5rem;
  background: var(--color-neutral-1000);
  border: 1px solid var(--color-neutral-800);

  .label {
    display: block;
    font-weight: 700;
    color: var(--color-primary-200);
  }

  .value {
    display: block;
    margin-top: 0.25rem;
    color: var(--color-neutral-500);
  }
`;

export const FrequencyFactorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    background: var(--color-secondary-1000);
    color: var(--color-secondary-100);
    font-size: var(--fs-3xs);
    font-weight: 600;
  }
`;

// ─── Equipment Used ──────────────────────────────────────────────────────────

export const EquipmentGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  list-style: none;
  padding: 0;
  margin: 0;

  ${mediaQuery.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQuery.phone} {
    grid-template-columns: 1fr;
  }
`;

export const EquipmentCard = styled.li`
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: var(--color-neutral-1000);
  border: 1px solid var(--color-neutral-800);

  .icon {
    font-size: 2rem;
    color: var(--color-secondary-400);
  }

  .title {
    display: block;
    margin: 0.75rem 0 0.25rem;
    font-weight: 700;
    color: var(--color-primary-200);
  }

  .description {
    display: block;
    color: var(--color-neutral-500);
    font-size: var(--fs-3xs);
  }
`;

export const EquipmentCtaWrapper = styled.div`
  margin: 2.5rem 0 0;
`;
