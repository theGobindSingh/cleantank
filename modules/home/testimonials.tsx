import { P, Span } from "@components/html";
import HomeSectionLayout from "@layouts/home-section";
import {
  TestimonialAttribution,
  TestimonialCard,
  TestimonialsGrid,
} from "@modules/home/styles";
import { TestimonialsSectionProps } from "@modules/home/types";

const testimonialMapper = ({
  quote,
  name,
  role,
  organization,
}: NonNullable<TestimonialsSectionProps["items"]>[number]) => {
  return (
    <TestimonialCard key={name}>
      <P
        $size="2xs"
        $color="neutral"
        $colorWeight="600"
        $margin="0"
        $lineHeight="1.75"
      >
        {quote}
      </P>
      <TestimonialAttribution>
        <Span $size="2xs" $weight="700" $color="neutral" $colorWeight="300">
          {name}
        </Span>
        <Span $size="3xs" $color="neutral" $colorWeight="600">
          {role}
        </Span>
        <Span
          $size="3xs"
          $weight="500"
          $color="secondary"
          $colorWeight="700"
          $letterSpacing="0.04em"
        >
          {organization}
        </Span>
      </TestimonialAttribution>
    </TestimonialCard>
  );
};

const TestimonialsSection = ({
  chip,
  title,
  description,
  items = [],
}: TestimonialsSectionProps) => {
  return (
    <HomeSectionLayout
      chip={chip}
      title={title ?? ""}
      description={description}
      element="section"
    >
      {items.length > 0 && (
        <TestimonialsGrid>{items.map(testimonialMapper)}</TestimonialsGrid>
      )}
    </HomeSectionLayout>
  );
};

export default TestimonialsSection;
