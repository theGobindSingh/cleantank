import CommonFullWidthWrapper from "@components/common-full-width-wrapper";
import styled from "@emotion/styled";
import { mediaQuery } from "@styles/global";

export const HomeSectionWrapper = styled(CommonFullWidthWrapper)`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .desc {
    max-width: 45vw;
    line-height: 1.5;
  }

  ${mediaQuery.tablet} {
    padding: 3.5rem 0;

    .desc {
      max-width: 70vw;
    }
  }

  ${mediaQuery.phone} {
    padding: 2.5rem 0;

    .desc {
      max-width: 100%;
    }
  }
`;
