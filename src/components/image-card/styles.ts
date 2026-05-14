import { ImageCardProps } from "@components/image-card/types";
import styled from "@emotion/styled";
import { mediaQuery } from "@styles/global";

export const ImageCardWrapper = styled.div<Pick<ImageCardProps, "$isReversed">>`
  width: 100%;
  display: flex;
  flex-direction: ${({ $isReversed = false }) => {
    return $isReversed ? "row-reverse" : "row";
  }};
  gap: 2rem;

  .img-container {
    position: relative;
    width: 52.5%;
    aspect-ratio: 2;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 4px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  ${mediaQuery.nonDesktop} {
    flex-direction: column;
  }
`;

export const ImageCardContentWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  .number {
    font-size: var(--fs-3xl);
    font-weight: 800;
    color: rgba(var(--color-neutral-800-base), 0.625);
    font-family: var(--font-sans);
  }

  .description {
    line-height: 1.5;
  }

  .card-footer {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    font-size: var(--fs-3xs);
    font-weight: 500;
    color: var(--color-secondary-300);
    .icon {
      font-size: var(--fs-s);
      margin: auto 0;
      color: inherit;
    }
  }
`;
