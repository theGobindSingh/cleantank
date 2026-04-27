import IconCardSectionLayout from "@layouts/icon-card-section";
import { HomeProcessSectionProps } from "@modules/home/types";

const HomeProcessSection = ({
  title,
  description,
  items = [],
}: HomeProcessSectionProps) => {
  return (
    <IconCardSectionLayout
      title={title}
      description={description}
      items={items}
    />
  );
};

export default HomeProcessSection;
