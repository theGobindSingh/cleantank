import FranchiseBenefitsSection from "@modules/franchise/benefits";
import {
  franchiseBenefitItems,
  franchiseBenefitsSectionMeta,
  franchiseComparisonRows,
  franchiseGoogleFormConfig,
  franchiseHeroProps,
  franchiseInquiryAssurances,
  franchiseInquiryFieldIds,
  franchiseInquiryFields,
  franchiseInquirySectionMeta,
  franchiseInvestmentRanges,
  franchiseSuccessStories,
  franchiseSuccessStoriesSectionMeta,
  franchiseSupportItems,
  franchiseSupportTrainingSectionMeta,
  franchiseTechnologyComparisonSectionMeta,
} from "@modules/franchise/constants";
import FranchiseHeroSection from "@modules/franchise/hero";
import FranchiseInquirySection from "@modules/franchise/inquiry-cta";
import FranchiseSuccessStoriesSection from "@modules/franchise/success-stories";
import FranchiseSupportTrainingSection from "@modules/franchise/support-training";
import FranchiseTechnologyComparisonSection from "@modules/franchise/technology-comparison";
import { FranchiseModuleProps } from "@modules/franchise/types";
import { Fragment } from "react";

const FranchiseModule = (_: FranchiseModuleProps) => {
  return (
    <Fragment>
      <FranchiseHeroSection {...franchiseHeroProps} />
      <FranchiseBenefitsSection
        {...franchiseBenefitsSectionMeta}
        items={franchiseBenefitItems}
      />
      <FranchiseSupportTrainingSection
        {...franchiseSupportTrainingSectionMeta}
        items={franchiseSupportItems}
      />
      <FranchiseTechnologyComparisonSection
        {...franchiseTechnologyComparisonSectionMeta}
        rows={franchiseComparisonRows}
      />
      <FranchiseSuccessStoriesSection
        {...franchiseSuccessStoriesSectionMeta}
        items={franchiseSuccessStories}
      />
      <FranchiseInquirySection
        {...franchiseInquirySectionMeta}
        fields={franchiseInquiryFields ?? []}
        investmentRanges={franchiseInvestmentRanges ?? []}
        assurances={franchiseInquiryAssurances ?? []}
        fieldIds={franchiseInquiryFieldIds}
        gFormConfig={franchiseGoogleFormConfig}
      />
    </Fragment>
  );
};

export default FranchiseModule;
