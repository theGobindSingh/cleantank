import { H3, P, Span } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import {
  FranchiseSupportCard,
  FranchiseSupportGrid,
} from "@modules/franchise/styles";
import { FranchiseSupportTrainingSectionProps } from "@modules/franchise/types";

const supportCardMapper = ({
  icon: Icon,
  label,
  title,
  description,
  size,
}: NonNullable<FranchiseSupportTrainingSectionProps["items"]>[number]) => {
  return (
    <FranchiseSupportCard key={title} $size={size ?? "default"}>
      <div className="support-head">
        <Span className="support-label">{label}</Span>
        <Icon className="support-icon" />
      </div>
      <H3
        $size="1xs"
        $weight="700"
        $color="primary"
        $colorWeight="200"
        $margin="0"
      >
        {title}
      </H3>
      <P
        $size="3xs"
        $color="neutral"
        $colorWeight="400"
        $margin="0"
        $lineHeight="1.65"
      >
        {description}
      </P>
    </FranchiseSupportCard>
  );
};

const FranchiseSupportTrainingSection = ({
  chip,
  title,
  description,
  items = [],
}: FranchiseSupportTrainingSectionProps) => {
  return (
    <StandardSectionLayout
      chip={chip}
      title={title}
      description={description}
      element="section"
      bg="var(--color-neutral-900)"
    >
      {items.length > 0 && (
        <FranchiseSupportGrid>
          {items.map(supportCardMapper)}
        </FranchiseSupportGrid>
      )}
    </StandardSectionLayout>
  );
};

export default FranchiseSupportTrainingSection;
