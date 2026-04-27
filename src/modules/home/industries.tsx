import { H3, P } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import {
  IndustriesGrid,
  IndustryCard,
  IndustryCardImage,
} from "@modules/home/styles";
import { IndustriesSectionProps } from "@modules/home/types";

const industryCardMapper = ({
  title,
  subTitle,
  imgSrc,
}: NonNullable<IndustriesSectionProps["items"]>[number]) => {
  return (
    <IndustryCard key={title}>
      <IndustryCardImage
        src={imgSrc}
        alt={title}
        width={900}
        height={600}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="industry-img"
      />
      <div className="industry-content">
        <H3
          $size="l"
          $weight="700"
          $color="neutral"
          $colorWeight="1000"
          $margin="0 0 0.5rem"
          className="industry-title"
        >
          {title}
        </H3>
        <P $size="3xs" $color="neutral" $colorWeight="700" $weight="500">
          {subTitle}
        </P>
      </div>
    </IndustryCard>
  );
};

const IndustriesSection = ({
  chip,
  title,
  description,
  items = [],
}: IndustriesSectionProps) => {
  return (
    <StandardSectionLayout
      chip={chip}
      title={title ?? ""}
      description={description}
      element="section"
    >
      {items.length > 0 && (
        <IndustriesGrid>{items.map(industryCardMapper)}</IndustriesGrid>
      )}
    </StandardSectionLayout>
  );
};

export default IndustriesSection;
