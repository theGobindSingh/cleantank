import { H3, P } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import {
  FranchiseBenefitCard,
  FranchiseBenefitsGrid,
} from "@modules/franchise/styles";
import { FranchiseBenefitsSectionProps } from "@modules/franchise/types";

const benefitMapper = ({
  icon: Icon,
  title,
  description,
}: NonNullable<FranchiseBenefitsSectionProps["items"]>[number]) => {
  return (
    <FranchiseBenefitCard key={title} className="benefit-card">
      <div className="benefit-icon">
        <Icon />
      </div>
      <H3
        $size="1xs"
        $weight="700"
        $color="primary"
        $colorWeight="200"
        $margin="0"
        className="benefit-title"
      >
        {title}
      </H3>
      <P
        $size="3xs"
        $color="neutral"
        $colorWeight="400"
        $margin="0"
        $lineHeight="1.65"
        className="benefit-description"
      >
        {description}
      </P>
    </FranchiseBenefitCard>
  );
};

const FranchiseBenefitsSection = ({
  chip,
  title,
  description,
  items = [],
}: FranchiseBenefitsSectionProps) => {
  return (
    <StandardSectionLayout
      chip={chip}
      title={title}
      description={description}
      element="section"
      bg="var(--color-neutral-1000)"
    >
      {items.length > 0 && (
        <FranchiseBenefitsGrid>
          {items.map(benefitMapper)}
        </FranchiseBenefitsGrid>
      )}
    </StandardSectionLayout>
  );
};

export default FranchiseBenefitsSection;
