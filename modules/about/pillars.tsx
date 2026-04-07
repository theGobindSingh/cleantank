import IconCardSectionLayout from "@layouts/icon-card-section";
import { PillarsSectionProps } from "@modules/about/types";

const PillarsSection = ({
  chip,
  title,
  description,
  items = [],
}: PillarsSectionProps) => {
  return (
    <IconCardSectionLayout
      chip={chip}
      title={title ?? ""}
      description={description}
      items={items}
      areNumbersVisible={false}
    />
  );
};

export default PillarsSection;
