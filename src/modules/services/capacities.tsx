import { P, Span } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import { CapacitiesList, CapacityListItem } from "@modules/services/styles";
import { CapacitiesSectionProps, CapacityItem } from "@modules/services/types";

const capacityMapper = ({ label, value }: CapacityItem) => {
  return (
    <CapacityListItem key={label}>
      <Span className="label">{label}</Span>
      <Span className="value">{value}</Span>
    </CapacityListItem>
  );
};

const CapacitiesSection = ({
  chip,
  title,
  items,
  closingNote,
}: CapacitiesSectionProps) => {
  return (
    <StandardSectionLayout chip={chip} title={title}>
      <CapacitiesList>{items.map(capacityMapper)}</CapacitiesList>
      <P $size="s" $color="neutral" $colorWeight="400">
        {closingNote}
      </P>
    </StandardSectionLayout>
  );
};

export default CapacitiesSection;
