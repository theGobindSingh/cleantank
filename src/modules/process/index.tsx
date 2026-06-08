import HeroSection from "@layouts/hero-section";
import StandardSectionLayout from "@layouts/standard-section";
import { Fragment } from "react";
// import CleaningStepCard from "./cleaning-step-card";
import ImageCard from "@components/image-card";
import {
  technologyImages,
  technologyPoints,
  technologySectionMeta,
} from "@modules/about/constants";
import TechnologySection from "@modules/about/technology";
import { franchisePoints, franchiseSectionMeta } from "@modules/home/constants";
import FranchiseSection from "@modules/home/franchise";
import { ProcessCardsWrapper } from "@modules/process/styles";
import {
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

const Process = () => {
  return (
    <Fragment>
      <HeroSection {...processHeroProps} />
      <StandardSectionLayout {...processSectionProps}>
        <ProcessCardsWrapper>
          {processCardsData.map(processMapper)}
        </ProcessCardsWrapper>
      </StandardSectionLayout>
      <FranchiseSection {...franchiseSectionMeta} points={franchisePoints} />
      <TechnologySection
        {...technologySectionMeta}
        points={technologyPoints}
        images={technologyImages}
      />
    </Fragment>
  );
};

export default Process;
