import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import styled from "@emotion/styled";

export const HeroStripWrapper = styled(CommonFullWidthWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
