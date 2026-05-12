import { P, Span } from "@components/html";
import { ValuesBannerWrapper } from "@modules/about/styles";
import { ValuesBannerProps } from "@modules/about/types";

const ValuesBanner = ({ statement, attribution }: ValuesBannerProps) => {
  return (
    <ValuesBannerWrapper element="section" bg="var(--color-primary-100)">
      <P
        $size="l"
        $weight="400"
        $color="neutral"
        $colorWeight="800"
        $margin="0"
        $lineHeight="1.6"
        style={{ fontFamily: "var(--font-cursive)", maxWidth: "52rem" }}
      >
        {statement}
      </P>
      {attribution && (
        <Span
          $size="4xs"
          $weight="500"
          $color="secondary"
          $colorWeight="600"
          $letterSpacing="0.08em"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {attribution}
        </Span>
      )}
    </ValuesBannerWrapper>
  );
};

export default ValuesBanner;
