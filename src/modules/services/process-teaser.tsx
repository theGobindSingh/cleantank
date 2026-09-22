import Button from "@components/button";
import { Span } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import { ProcessTeaserCard, ProcessTeaserGrid } from "@modules/services/styles";
import {
  ProcessTeaserSectionProps,
  ProcessTeaserStep,
} from "@modules/services/types";

const stepMapper = ({ icon: Icon, title, description }: ProcessTeaserStep) => {
  return (
    <ProcessTeaserCard key={title}>
      <Icon className="icon" />
      <Span className="title">{title}</Span>
      <Span className="description">{description}</Span>
    </ProcessTeaserCard>
  );
};

const ProcessTeaserSection = ({
  chip,
  title,
  description,
  steps,
  ctaText,
  ctaHref,
}: ProcessTeaserSectionProps) => {
  return (
    <StandardSectionLayout chip={chip} title={title} description={description}>
      <ProcessTeaserGrid>{steps.map(stepMapper)}</ProcessTeaserGrid>
      <Button
        href={ctaHref}
        $variant="outlined"
        $size="lg"
        $color="primary"
        $colorWeight="400"
      >
        {ctaText}
      </Button>
    </StandardSectionLayout>
  );
};

export default ProcessTeaserSection;
