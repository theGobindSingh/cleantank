import { H3, P } from "@components/html";
import StandardSectionLayout from "@layouts/standard-section";
import { ClauseItem, ClauseList } from "@modules/legal/styles";
import { LegalPageModuleProps } from "@modules/legal/types";

const LegalPageModule = ({
  chip,
  title,
  description,
  intro,
  clauses,
}: LegalPageModuleProps) => {
  return (
    <StandardSectionLayout
      chip={chip}
      title={title}
      description={description}
      headingLevel="h1"
    >
      {intro && (
        <P $margin="1.5rem 0 0" $color="neutral" $colorWeight="400">
          {intro}
        </P>
      )}
      <ClauseList>
        {clauses.map(({ heading, body }) => {
          return (
            <ClauseItem key={heading}>
              <H3
                className="clause-heading"
                $weight="700"
                $color="neutral"
                $colorWeight="100"
              >
                {heading}
              </H3>
              <P $margin="0.5rem 0 0" $color="neutral" $colorWeight="400">
                {body}
              </P>
            </ClauseItem>
          );
        })}
      </ClauseList>
    </StandardSectionLayout>
  );
};

export default LegalPageModule;
