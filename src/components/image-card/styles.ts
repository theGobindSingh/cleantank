import { ImageCardProps } from "@components/image-card/types";
import styled from "@emotion/styled";
import { mediaQuery } from "@styles/global";

export const ImageCardWrapper = styled.div<Pick<ImageCardProps, "$isReversed">>`
  width: 100%;
  display: flex;
  flex-direction: ${({ $isReversed = false }) => {
    return $isReversed ? "row-reverse" : "row";
  }};
  justify-content: space-between;
  gap: 2rem;
  position: relative;

  .img-container {
    position: relative;
    width: 45%;
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
    .content {
      align-items: ${({ $isReversed = false }) => {
        return $isReversed ? "flex-end" : "flex-start";
      }};
      text-align: ${({ $isReversed = false }) => {
        return $isReversed ? "right" : "left";
      }};
      .number {
        ${({ $isReversed = false }) => {
          return $isReversed ? "left: 0;" : "right: 0;";
        }}
      }
    }

    .img-container {
      width: 100%;
      aspect-ratio: 16 / 9;
    }
  }
`;

export const ImageCardContentWrapper = styled.div`
  position: relative;
  width: 45%;
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

  ${mediaQuery.nonDesktop} {
    width: 100%;
    .number {
      position: absolute;
      top: 0;
      transform: translateY(-25%);
      z-index: -1;
      font-size: clamp(var(--fs-l), 20vw, calc(var(--fs-4xl) + var(--fs-l)));
    }
    .title {
      display: flex;
      flex-direction: column;
    }
  }
`;
