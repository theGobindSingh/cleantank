import { Span } from "@components/html";
import styled from "@emotion/styled";

export const ClientCardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
`;

export const ClientCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  .img-wrapper {
    padding: 0.25rem;
    aspect-ratio: 1;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`;

export const ClientCardTitle = styled(Span)`
  font-weight: 600;
  font-size: var(--fs-2xs);
  text-align: center;
  width: 100%;
`;
