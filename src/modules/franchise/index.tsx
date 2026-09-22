import FeatureCardSection from "@layouts/feature-card-section";
import FranchiseBusinessModelSection from "@modules/franchise/business-model";
import {
  franchiseBenefitItems,
  franchiseBenefitsSectionMeta,
  franchiseBusinessModelDisclaimer,
  franchiseBusinessModelRows,
  franchiseBusinessModelSectionMeta,
  franchiseHeroProps,
  franchiseInquiryProps,
  franchiseSupportSteps,
  franchiseSupportTrainingSectionMeta,
  franchiseWhySectionProps,
} from "@modules/franchise/constants";
import FranchiseHeroSection from "@modules/franchise/hero";
import FranchiseInquirySection from "@modules/franchise/inquiry-cta";
import FranchiseSupportTrainingSection from "@modules/franchise/support-training";
import { FranchiseModuleProps } from "@modules/franchise/types";
import FranchiseWhySection from "@modules/franchise/why-tank-cleaning";
import { Fragment } from "react";

const FranchiseModule = (_: FranchiseModuleProps) => {
  return (
    <Fragment>
      <FranchiseHeroSection {...franchiseHeroProps} />
      <FranchiseWhySection {...franchiseWhySectionProps} />
      <FeatureCardSection
        {...franchiseBenefitsSectionMeta}
        items={franchiseBenefitItems}
        bg="var(--color-neutral-1000)"
      />
      <FranchiseBusinessModelSection
        {...franchiseBusinessModelSectionMeta}
        rows={franchiseBusinessModelRows}
        disclaimer={franchiseBusinessModelDisclaimer}
      />
      <FranchiseSupportTrainingSection
        {...franchiseSupportTrainingSectionMeta}
        steps={franchiseSupportSteps}
      />
      <FranchiseInquirySection {...franchiseInquiryProps} />
    </Fragment>
  );
};

export default FranchiseModule;
