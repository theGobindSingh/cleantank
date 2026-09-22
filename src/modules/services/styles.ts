import styled from "@emotion/styled";
import { mediaQuery } from "@styles/global";

// ─── Tank Capacities ────────────────────────────────────────────────────────

export const CapacitiesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
`;

export const CapacityListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  background: var(--color-neutral-1000);
  border: 1px solid var(--color-neutral-800);

  .label {
    font-weight: 700;
    color: var(--color-primary-200);
  }

  .value {
    color: var(--color-neutral-500);
    text-align: right;
  }

  ${mediaQuery.phone} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;

    .value {
      text-align: left;
    }
  }
`;

// ─── Process Teaser ─────────────────────────────────────────────────────────

export const ProcessTeaserGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;

  ${mediaQuery.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQuery.phone} {
    grid-template-columns: 1fr;
  }
`;

export const ProcessTeaserCard = styled.li`
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

// ─── AMC ─────────────────────────────────────────────────────────────────────

export const AmcFeaturesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;

  li {
    position: relative;
    padding: 0 0 0 1.25rem;
    color: var(--color-neutral-400);
    font-size: var(--fs-2xs);

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.55em;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
      background: var(--color-secondary-400);
    }
  }

  ${mediaQuery.phone} {
    grid-template-columns: 1fr;
  }
`;
