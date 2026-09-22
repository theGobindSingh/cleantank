import Button from "@components/button";
// import CleaningStepCard from "./cleaning-step-card";
import { H3, P, Span } from "@components/html";
import ImageCard from "@components/image-card";
import HeroSection from "@layouts/hero-section";
import StandardSectionLayout from "@layouts/standard-section";
import {
  technologyImages,
  technologyPoints,
  technologySectionMeta,
} from "@modules/about/constants";
import TechnologySection from "@modules/about/technology";
import {
  EquipmentCard,
  EquipmentCtaWrapper,
  EquipmentGrid,
  FrequencyExampleCard,
  FrequencyExampleGrid,
  FrequencyFactorsList,
  ProcessCardsWrapper,
} from "@modules/process/styles";
import { EquipmentItem, FrequencyExample } from "@modules/process/types";
import { Fragment } from "react";
import {
  equipmentItems,
  equipmentSectionMeta,
  frequencyExamples,
  frequencyFactors,
  frequencyGeneralGuidance,
  frequencySectionMeta,
  processCardsData,
  processHeroProps,
  processSectionProps,
} from "./constants";

const processMapper = (
  props: (typeof processCardsData)[number],
  index: number,
  arr: typeof processCardsData,
) => {
  return (
    <Fragment key={props.title}>
      <li>
        <ImageCard
          {...props}
          number={index + 1}
          $isReversed={index % 2 === 1}
        />
      </li>
      {index !== arr.length - 1 && <hr />}
    </Fragment>
  );
};

const frequencyExampleMapper = ({ label, value }: FrequencyExample) => {
  return (
    <FrequencyExampleCard key={label}>
      <Span className="label">{label}</Span>
      <Span className="value">{value}</Span>
    </FrequencyExampleCard>
  );
};

const frequencyFactorMapper = (factor: string) => {
  return (
    <li key={factor}>
      <Span>{factor}</Span>
    </li>
  );
};

const equipmentMapper = ({ icon: Icon, title, description }: EquipmentItem) => {
  return (
    <EquipmentCard key={title}>
      <Icon className="icon" />
      <Span className="title">{title}</Span>
      <Span className="description">{description}</Span>
    </EquipmentCard>
  );
};

const Process = () => {
  return (
    <Fragment>
      <HeroSection {...processHeroProps} />
      <StandardSectionLayout {...processSectionProps}>
        <ProcessCardsWrapper>
          {processCardsData.map(processMapper)}
        </ProcessCardsWrapper>
      </StandardSectionLayout>
      {/* Professional execution note — trained technicians, systematic procedures, equipment matched to tank size/condition/site */}
      <TechnologySection
        {...technologySectionMeta}
        points={technologyPoints}
        images={technologyImages}
      />
      <StandardSectionLayout {...frequencySectionMeta}>
        <FrequencyExampleGrid>
          {frequencyExamples.map(frequencyExampleMapper)}
        </FrequencyExampleGrid>
        <P $size="s" $color="neutral" $colorWeight="400" $margin="0 0 1.25rem">
          {frequencyGeneralGuidance}
        </P>
        <H3
          $size="1xs"
          $weight="700"
          $color="primary"
          $colorWeight="200"
          $margin="0 0 0.75rem"
        >
          What decides the schedule
        </H3>
        <FrequencyFactorsList>
          {frequencyFactors.map(frequencyFactorMapper)}
        </FrequencyFactorsList>
      </StandardSectionLayout>
      <StandardSectionLayout {...equipmentSectionMeta}>
        <EquipmentGrid>{equipmentItems.map(equipmentMapper)}</EquipmentGrid>
        <EquipmentCtaWrapper>
          <Button
            href="/contact"
            $variant="filled"
            $size="lg"
            $color="primary"
            $colorWeight="400"
          >
            Request a Service Quote
          </Button>
        </EquipmentCtaWrapper>
      </StandardSectionLayout>
    </Fragment>
  );
};

export default Process;
