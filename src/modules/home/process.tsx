import IconCardSectionLayout from "@/src/layouts/icon-card-section";
import { HomeProcessSectionProps } from "@/src/modules/home/types";

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
