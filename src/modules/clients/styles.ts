import { Span } from "@components/html";
import styled from "@emotion/styled";
import { mediaQuery } from "@styles/global";

export const ClientCardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;

  ${mediaQuery.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${mediaQuery.phone} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ClientCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  .img-wrapper {
    padding: 0.25rem;
    aspect-ratio: 1;
    width: 100%;
    height: auto;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
  &.text-only {
    justify-content: center;
    align-items: center;
    min-height: 96px;
    padding: 0.75rem;
    border: 1px solid var(--color-neutral-800);
    border-radius: 0.5rem;
    text-align: center;
  }
`;

export const ClientCardTitle = styled(Span)`
  font-weight: 600;
  font-size: var(--fs-2xs);
  text-align: center;
  width: 100%;

  .text-only & {
    font-weight: 700;
  }
`;
