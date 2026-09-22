import Button from "@components/button";
import { H3, P } from "@components/html";
import {
  FeatureCard,
  FeatureCardCta,
  FeatureCardGrid,
} from "@layouts/feature-card-section/styles";
import {
  FeatureCardItem,
  FeatureCardSectionProps,
} from "@layouts/feature-card-section/types";
import StandardSectionLayout from "@layouts/standard-section";

const featureCardMapper = ({
  icon: Icon,
  title,
  description,
}: FeatureCardItem) => {
  return (
    <FeatureCard key={title} className="feature-card">
      <div className="feature-icon">
        <Icon />
      </div>
      <H3
        $size="1xs"
        $weight="700"
        $color="primary"
        $colorWeight="200"
        $margin="0"
        className="feature-title"
      >
        {title}
      </H3>
      <P
        $size="3xs"
        $color="neutral"
        $colorWeight="400"
        $margin="0"
        $lineHeight="1.65"
        className="feature-description"
      >
        {description}
      </P>
    </FeatureCard>
  );
};

const FeatureCardSection = ({
  chip,
  title,
  description,
  items = [],
  bg,
  cta,
  className,
}: FeatureCardSectionProps) => {
  return (
    <StandardSectionLayout
      chip={chip}
      title={title}
      description={description}
      element="section"
      bg={bg}
      className={className}
    >
      {items.length > 0 && (
        <FeatureCardGrid>{items.map(featureCardMapper)}</FeatureCardGrid>
      )}
      {cta && (
        <FeatureCardCta>
          <Button
            href={cta.href}
            $variant="outlined"
            $color="secondary"
            $colorWeight="700"
            $fontWeight="600"
          >
            {cta.text}
          </Button>
        </FeatureCardCta>
      )}
    </StandardSectionLayout>
  );
};

export default FeatureCardSection;
