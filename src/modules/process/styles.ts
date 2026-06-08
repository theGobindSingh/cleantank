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
