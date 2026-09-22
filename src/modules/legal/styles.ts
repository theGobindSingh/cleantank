import styled from "@emotion/styled";

export const ClauseList = styled.ol`
  counter-reset: clause-counter;
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const ClauseItem = styled.li`
  counter-increment: clause-counter;

  .clause-heading {
    &::before {
      content: counter(clause-counter) ". ";
      color: var(--color-secondary-500);
    }
  }
`;
