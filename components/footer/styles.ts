import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import styled from "@emotion/styled";
import { mediaQuery } from "@styles/global";

export const FooterOuterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-accent-1000);
  text-align: center;
`;

export const FooterContentSection = styled(CommonFullWidthWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0rem;
  gap: 1.5rem;
  .title {
    font-size: var(--fs-1xl);
    font-weight: 700;
  }
  .sub-title {
    max-width: 55%;
    font-size: var(--fs-1xs);
    word-spacing: 0.1em;
    letter-spacing: 0.01em;
    color: rgb(var(--color-accent-1000-base), 0.75);
    font-weight: 500;
  }
  ${mediaQuery.nonDesktop} {
    .sub-title {
      max-width: 85%;
    }
  }
`;

export const FooterMidSection = styled(CommonFullWidthWrapper)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 4rem 0;
  .footer-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    margin-bottom: auto;
    &.long {
      flex: 4;
      text-align: left;
      .title {
        font-size: var(--fs-m);
        font-weight: 600;
        color: var(--color-secondary-800);
      }
      .sub-title {
        font-size: var(--fs-3xs);
        max-width: 65%;
        color: rgb(var(--color-accent-1000-base), 0.75);
        font-weight: 500;
        word-spacing: 0.1em;
        letter-spacing: 0.01em;
        line-height: 1.5;
      }
      .icons-container {
        display: flex;
        gap: 0.5rem;
        & > * {
          aspect-ratio: 1 / 1;
          border: 1px solid var(--color-primary-300);
          padding: 0.5rem;
          font-size: var(--fs-s);
        }
      }
    }
    &.short {
      flex: 1;
      &.nav {
        .title {
          font-size: var(--fs-1xs);
          color: var(--color-secondary-800);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: inherit;
          font-size: var(--fs-3xs);
          .icon {
            font-size: var(--fs-2xs);
          }
        }
      }
    }
  }
  ${mediaQuery.nonDesktop} {
    flex-direction: column;
    .footer-section {
      &.long {
        flex: unset;
        .sub-title {
          max-width: 85%;
          margin: 0 0 0.75rem 0;
        }
      }
      &.short {
        flex: unset;
        margin-top: 1.5rem;
      }
    }
  }
`;
