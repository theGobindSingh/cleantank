import Button, { ButtonProps } from "@components/button";
import { P } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import { FranchiseInquiryCtaRow } from "@modules/franchise/styles";
import { FranchiseInquirySectionProps } from "@modules/franchise/types";

const ctaMapper = (
  { text, ...props }: NonNullable<FranchiseInquirySectionProps["CTAs"]>[number],
  index: number,
) => {
  return (
    <Button key={`franchise-inquiry-cta-${index}`} {...(props as ButtonProps)}>
      {text}
    </Button>
  );
};

const FranchiseInquirySection = ({
  heading,
  body,
  CTAs = [],
}: FranchiseInquirySectionProps) => {
  return (
    <StandardSectionLayout
      title={heading}
      element="section"
      bg="var(--color-neutral-1000)"
    >
      <P
        $size="s"
        $color="neutral"
        $colorWeight="400"
        $margin="0"
        $lineHeight="1.65"
      >
        {body}
      </P>
      {CTAs.length > 0 && (
        <FranchiseInquiryCtaRow>{CTAs.map(ctaMapper)}</FranchiseInquiryCtaRow>
      )}
    </StandardSectionLayout>
  );
};

export default FranchiseInquirySection;
