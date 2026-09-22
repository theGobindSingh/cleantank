import { P } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import {
  FranchiseDisclaimerNote,
  FranchiseModelRow,
  FranchiseModelTable,
} from "@modules/franchise/styles";
import { FranchiseBusinessModelSectionProps } from "@modules/franchise/types";

const rowMapper = ({
  label,
  value,
}: NonNullable<FranchiseBusinessModelSectionProps["rows"]>[number]) => {
  return (
    <FranchiseModelRow key={label}>
      <dt>
        <P
          $size="3xs"
          $weight="700"
          $color="neutral"
          $colorWeight="900"
          $margin="0"
        >
          {label}
        </P>
      </dt>
      <dd>
        <P
          $size="3xs"
          $color="neutral"
          $colorWeight="800"
          $margin="0"
          $lineHeight="1.6"
        >
          {value}
        </P>
      </dd>
    </FranchiseModelRow>
  );
};

const FranchiseBusinessModelSection = ({
  chip,
  title,
  description,
  rows = [],
  disclaimer,
}: FranchiseBusinessModelSectionProps) => {
  return (
    <StandardSectionLayout
      chip={chip}
      title={title}
      description={description}
      element="section"
      bg="var(--color-neutral-1000)"
    >
      {rows.length > 0 && (
        <FranchiseModelTable>{rows.map(rowMapper)}</FranchiseModelTable>
      )}
      <FranchiseDisclaimerNote>
        <P
          $size="4xs"
          $color="neutral"
          $colorWeight="400"
          $margin="0"
          $lineHeight="1.6"
        >
          {disclaimer}
        </P>
      </FranchiseDisclaimerNote>
    </StandardSectionLayout>
  );
};

export default FranchiseBusinessModelSection;
