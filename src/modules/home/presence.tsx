import Chip from "@components/chip";
import StandardSectionLayout from "@layouts/standard-section";
import { PresencePillList } from "@modules/home/styles";
import { PresenceSectionProps } from "@modules/home/types";

const statePillMapper = (state: string) => {
  return (
    <li key={state}>
      <Chip
        $backgroundColor="primary"
        $backgroundColorWeight="200"
        $textColor="primary"
        $textColorWeight="900"
      >
        {state}
      </Chip>
    </li>
  );
};

const PresenceSection = ({
  chip,
  title,
  description,
  states,
}: PresenceSectionProps) => {
  return (
    <StandardSectionLayout
      chip={chip}
      title={title ?? ""}
      description={description}
      element="section"
    >
      <PresencePillList>{states.map(statePillMapper)}</PresencePillList>
    </StandardSectionLayout>
  );
};

export default PresenceSection;
