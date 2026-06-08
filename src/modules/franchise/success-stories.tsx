import { P, Span } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import {
  FranchiseStoriesGrid,
  FranchiseStoryCard,
  FranchiseStoryFooter,
} from "@modules/franchise/styles";
import { FranchiseSuccessStoriesSectionProps } from "@modules/franchise/types";

const storyMapper = ({
  quote,
  name,
  role,
  region,
  outcome,
}: NonNullable<FranchiseSuccessStoriesSectionProps["items"]>[number]) => {
  return (
    <FranchiseStoryCard key={`${name}-${region}`}>
      <P
        $size="2xs"
        $color="neutral"
        $colorWeight="400"
        $margin="0"
        $lineHeight="1.75"
        className="quote"
      >
        {quote}
      </P>
      <FranchiseStoryFooter>
        <Span
          $size="2xs"
          $weight="700"
          $color="primary"
          $colorWeight="100"
          className="name"
        >
          {name}
        </Span>
        <Span $size="3xs" $color="neutral" $colorWeight="500" className="role">
          {role}
        </Span>
        <Span
          $size="4xs"
          $weight="700"
          $color="secondary"
          $colorWeight="700"
          $letterSpacing="0.08em"
          className="story-region"
        >
          {region.toUpperCase()}
        </Span>
        <P
          $size="4xs"
          $color="neutral"
          $colorWeight="400"
          $margin="0.35rem 0 0"
          $lineHeight="1.65"
          className="outcome"
        >
          {outcome}
        </P>
      </FranchiseStoryFooter>
    </FranchiseStoryCard>
  );
};

const FranchiseSuccessStoriesSection = ({
  chip,
  title,
  description,
  items = [],
}: FranchiseSuccessStoriesSectionProps) => {
  return (
    <StandardSectionLayout
      chip={chip}
      title={title}
      description={description}
      element="section"
      bg="var(--color-neutral-900)"
    >
      {items.length > 0 && (
        <FranchiseStoriesGrid>{items.map(storyMapper)}</FranchiseStoriesGrid>
      )}
    </StandardSectionLayout>
  );
};

export default FranchiseSuccessStoriesSection;
