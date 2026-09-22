import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import styled from "@emotion/styled";
import { mediaQuery, shouldForwardProp } from "@styles/global";
import Image from "next/image";

// ─── Simple Text Sections ─────────────────────────────────────────────────────

export const TextSectionBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 55rem;

  p {
    line-height: 1.75;
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

// ─── Credentials & Compliance ─────────────────────────────────────────────────

export const CredentialsList = styled.dl`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.5rem 1.5rem;
  margin: 1.5rem 0 0;
  padding: 0;
  max-width: 40rem;

  dt {
    font-family: var(--font-mono);
    letter-spacing: 0.05em;
  }

  dd {
    margin: 0;
  }

  ${mediaQuery.phone} {
    grid-template-columns: 1fr;
    gap: 0.25rem 0;

    dt {
      margin-top: 0.75rem;
    }
  }
`;

export const RegistrationsList = styled.ul`
  list-style: disc;
  padding-left: 1.25rem;
  margin: 1.5rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

// ─── Pan-India Presence ───────────────────────────────────────────────────────

export const PresenceChipRow = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

// ─── Our Message ──────────────────────────────────────────────────────────────

export const MessageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
