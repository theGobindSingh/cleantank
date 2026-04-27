import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import styled from "@emotion/styled";
import { mediaQuery } from "@styles/global";

export const HeroStripWrapper = styled(CommonFullWidthWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mediaQuery.nonDesktop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 2.5rem 0;
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    padding: 2.5rem 0;
  }
`;

export const HeroStripItemWrapper = styled.div`
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
  }

  .title {
    letter-spacing: 0.05em;
  }

  .sub-title {
    font-family: var(--font-mono);
    letter-spacing: 0.1em;
  }

  ${mediaQuery.nonDesktop} {
    padding: 0 0;
  }
  @media (max-width: 400px) {
    padding: 0 0;
  }
`;
