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
    width: 100%;
    aspect-ratio: 1;
    border: 1px solid #000;
  }
`;

export const ClientCardTitle = styled(Span)`
  font-weight: 500;
`;
