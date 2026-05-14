import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import styled from "@emotion/styled";
import { mediaQuery, shouldForwardProp } from "@styles/global";
import Image from "next/image";

// ─── Credentials Strip ────────────────────────────────────────────────────────

export const CredentialsStripWrapper = styled(CommonFullWidthWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQuery.nonDesktop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 2.5rem 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 2.5rem 0;
  }
`;

export const CredentialItem = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.75rem 0;
  gap: 0.25rem;
  text-align: center;

  .icon {
    font-size: var(--fs-l);
    margin-bottom: 0.5rem;
    color: var(--color-secondary-700);
  }

  .title {
    letter-spacing: 0.05em;
  }

  .sub-title {
    font-family: var(--font-mono);
    letter-spacing: 0.1em;
  }

  ${mediaQuery.nonDesktop} {
    padding: 0;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

// ─── Technology Section ───────────────────────────────────────────────────────

export const TechnologyWrapper = styled(CommonFullWidthWrapper)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  padding: 5rem 0;

  ${mediaQuery.tablet} {
    gap: 3rem;
    padding: 3.5rem 0;
  }

  ${mediaQuery.nonDesktop} {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 3rem 0;
  }
`;

export const TechnologyLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const TechnologyTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TechnologyPointList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TechnologyPointItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.25rem;

  .point-icon {
    color: var(--color-secondary-500);
    font-size: var(--fs-l);
    flex-shrink: 0;
    margin-top: 0.1rem;
  }

  .point-content {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
  }
`;

export const TechnologyRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const TechnologyImageWrapper = styled("div", { shouldForwardProp })<{
  $tall?: boolean;
}>`
  position: relative;
  width: 100%;
  height: ${({ $tall }) => {
    return $tall ? "22rem" : "14rem";
  }};
  overflow: hidden;
  border-radius: 4px;

  img {
    object-fit: cover;
    object-position: center 65%;
    transition: filter 0.4s ease;
  }

  ${mediaQuery.phone} {
    height: ${({ $tall }) => {
      return $tall ? "16rem" : "11rem";
    }};
  }
`;

export const TechnologyImage = styled(Image)``;

// ─── Company Timeline ─────────────────────────────────────────────────────────

export const TimelineWrapper = styled(CommonFullWidthWrapper)`
  padding: 5rem 0 6rem;

  ${mediaQuery.tablet} {
    padding: 3.5rem 0 4.5rem;
  }

  ${mediaQuery.phone} {
    padding: 3rem 0 4rem;
  }
`;

export const TimelineHeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 4rem;

  ${mediaQuery.phone} {
    margin-bottom: 3rem;
  }
`;

export const TimelineTrack = styled.ol`
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      transparent,
      var(--color-secondary-700) 10%,
      var(--color-secondary-700) 90%,
      transparent
    );
  }

  ${mediaQuery.nonDesktop} {
    &::before {
      left: 1.25rem;
      transform: none;
    }
  }
`;

export const TimelineEventItem = styled("li", { shouldForwardProp })<{
  $side: "left" | "right";
}>`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0 2.5rem;
  align-items: start;
  margin-bottom: 3.5rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  .event-year {
    grid-column: ${({ $side }) => {
      return $side === "left" ? "1" : "3";
    }};
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: ${({ $side }) => {
      return $side === "left" ? "flex-end" : "flex-start";
    }};
  }

  .event-dot {
    grid-column: 2;
    grid-row: 1;
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 50%;
    background-color: var(--color-secondary-600);
    border: 2.5px solid var(--color-secondary-400);
    margin-top: 0.35rem;
    flex-shrink: 0;
  }

  .event-content {
    grid-column: ${({ $side }) => {
      return $side === "left" ? "3" : "1";
    }};
    grid-row: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: ${({ $side }) => {
      return $side === "left" ? "left" : "right";
    }};
  }

  ${mediaQuery.nonDesktop} {
    grid-template-columns: auto 1fr;
    gap: 0 1.5rem;
    align-items: start;

    .event-year {
      grid-column: 2;
      grid-row: 1;
      justify-content: flex-start;
    }

    .event-dot {
      grid-column: 1;
      grid-row: 1 / 3;
      margin-top: 0.35rem;
      align-self: start;
    }

    .event-content {
      grid-column: 2;
      grid-row: 2;
      text-align: left;
    }
  }
`;

// ─── Values Banner ────────────────────────────────────────────────────────────

export const ValuesBannerWrapper = styled(CommonFullWidthWrapper)`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;

  ${mediaQuery.phone} {
    padding: 3.5rem 0;
  }
`;
