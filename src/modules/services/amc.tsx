import Button from "@components/button";
import { P } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import { AmcFeaturesList } from "@modules/services/styles";
import { AmcSectionProps } from "@modules/services/types";

const featureMapper = (feature: string) => {
  return <li key={feature}>{feature}</li>;
};

const AmcSection = ({
  chip,
  title,
  features,
  closingNote,
  ctaText,
  ctaHref,
}: AmcSectionProps) => {
  return (
    <StandardSectionLayout
      chip={chip}
      title={title}
      wrapperProps={{ id: "amc" }}
    >
      <AmcFeaturesList>{features.map(featureMapper)}</AmcFeaturesList>
      <P $size="s" $color="neutral" $colorWeight="400" $margin="0 0 1.5rem">
        {closingNote}
      </P>
      <Button
        href={ctaHref}
        $variant="filled"
        $size="lg"
        $color="primary"
        $colorWeight="400"
      >
        {ctaText}
      </Button>
    </StandardSectionLayout>
  );
};

export default AmcSection;
