import { Span } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import {
  FranchiseSupportFlow,
  FranchiseSupportFlowStep,
} from "@modules/franchise/styles";
import { FranchiseSupportTrainingSectionProps } from "@modules/franchise/types";

const stepMapper = (step: string) => {
  return (
    <FranchiseSupportFlowStep key={step}>
      <Span $size="2xs" $weight="700" $color="neutral" $colorWeight="100">
        {step}
      </Span>
    </FranchiseSupportFlowStep>
  );
};

const FranchiseSupportTrainingSection = ({
  chip,
  title,
  description,
  steps = [],
}: FranchiseSupportTrainingSectionProps) => {
  return (
    <StandardSectionLayout
      chip={chip}
      title={title}
      description={description}
      element="section"
      bg="var(--color-neutral-900)"
    >
      {steps.length > 0 && (
        <FranchiseSupportFlow>{steps.map(stepMapper)}</FranchiseSupportFlow>
      )}
    </StandardSectionLayout>
  );
};

export default FranchiseSupportTrainingSection;
