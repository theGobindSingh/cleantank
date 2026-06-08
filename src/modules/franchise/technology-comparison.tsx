import { H3, P } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import {
  FranchiseComparisonCellTitle,
  FranchiseComparisonHeader,
  FranchiseComparisonList,
  FranchiseComparisonRow,
  FranchiseComparisonTable,
} from "@modules/franchise/styles";
import { FranchiseTechnologyComparisonSectionProps } from "@modules/franchise/types";

const comparisonRowMapper = ({
  row,
  index,
  cleanTankLabel,
  traditionalLabel,
}: {
  row: NonNullable<FranchiseTechnologyComparisonSectionProps["rows"]>[number];
  index: number;
  cleanTankLabel: string;
  traditionalLabel: string;
}) => {
  const { criteria, cleanTank, traditional } = row;

  return (
    <FranchiseComparisonRow key={`${criteria}-${index}`}>
      <div className="cell criteria">
        <H3
          $size="3xs"
          $weight="700"
          $color="var(--_criteria-text-color)"
          $margin="0"
        >
          {criteria}
        </H3>
      </div>
      <div className="cell">
        <FranchiseComparisonCellTitle>
          {cleanTankLabel}
        </FranchiseComparisonCellTitle>
        <P
          $size="3xs"
          $color="var(--_ct-text-color)"
          $margin="0"
          $lineHeight="1.65"
        >
          {cleanTank}
        </P>
      </div>
      <div className="cell">
        <FranchiseComparisonCellTitle>
          {traditionalLabel}
        </FranchiseComparisonCellTitle>
        <P
          $size="3xs"
          $color="var(--_text-color)"
          $margin="0"
          $lineHeight="1.65"
        >
          {traditional}
        </P>
      </div>
    </FranchiseComparisonRow>
  );
};

const FranchiseTechnologyComparisonSection = ({
  chip,
  title,
  description,
  cleanTankLabel,
  traditionalLabel,
  rows = [],
}: FranchiseTechnologyComparisonSectionProps) => {
  return (
    <StandardSectionLayout
      chip={chip}
      title={title}
      description={description}
      element="section"
      bg="var(--color-neutral-1000)"
    >
      {rows.length > 0 && (
        <FranchiseComparisonTable>
          <FranchiseComparisonHeader>
            <div className="header-cell">
              <H3
                $size="3xs"
                $weight="700"
                $color="var(--_criteria-text-color)"
                $margin="0"
              >
                Criteria
              </H3>
            </div>
            <div className="header-cell">
              <H3
                $size="3xs"
                $weight="700"
                $color="var(--_ct_heading-text-color)"
                $margin="0"
              >
                {cleanTankLabel}
              </H3>
            </div>
            <div className="header-cell">
              <H3
                $size="3xs"
                $weight="700"
                $color="var(--_heading-text-color)"
                $margin="0"
              >
                {traditionalLabel}
              </H3>
            </div>
          </FranchiseComparisonHeader>
          <FranchiseComparisonList>
            {rows.map((row, index) => {
              return comparisonRowMapper({
                row,
                index,
                cleanTankLabel,
                traditionalLabel,
              });
            })}
          </FranchiseComparisonList>
        </FranchiseComparisonTable>
      )}
    </StandardSectionLayout>
  );
};

export default FranchiseTechnologyComparisonSection;
