import { P } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import { FranchiseWhyList } from "@modules/franchise/styles";
import { FranchiseWhySectionProps } from "@modules/franchise/types";

const sectorMapper = (sector: string) => {
  return <li key={sector}>{sector}</li>;
};

const FranchiseWhySection = ({
  chip,
  title,
  description,
  sectors = [],
  note,
}: FranchiseWhySectionProps) => {
  return (
    <StandardSectionLayout
      chip={chip}
      title={title}
      description={description}
      element="section"
      bg="var(--color-neutral-900)"
    >
      {sectors.length > 0 && (
        <FranchiseWhyList>{sectors.map(sectorMapper)}</FranchiseWhyList>
      )}
      {note && (
        <P $size="3xs" $color="neutral" $colorWeight="400" $margin="1.5rem 0 0">
          {note}
        </P>
      )}
    </StandardSectionLayout>
  );
};

export default FranchiseWhySection;
