import { HeroSectionProps } from "@layouts/hero-section/types";
import { SvgIconComponent } from "@mui/icons-material";

export interface FranchiseModuleProps {
  className?: string;
}

export interface FranchiseSectionMeta {
  chip?: string;
  title: string;
  description?: string;
}

export interface FranchiseHeroStat {
  label: string;
  value: string;
  supportingText: string;
  isPlaceholder?: boolean;
}

export interface FranchiseHeroHighlight {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export interface FranchiseHeroSectionProps {
  chip?: string;
  title: HeroSectionProps["title"];
  subtitle?: string;
  imgSrc: HeroSectionProps["imgSrc"];
  CTAs?: NonNullable<HeroSectionProps["CTAs"]>;
  trustCardTitle: string;
  trustCardDescription: string;
  stats?: FranchiseHeroStat[];
  highlights?: FranchiseHeroHighlight[];
  footnote?: string;
}

export interface FranchiseBenefitItem {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export interface FranchiseBenefitsSectionProps extends FranchiseSectionMeta {
  items?: FranchiseBenefitItem[];
}

export type FranchiseSupportCardSize = "default" | "wide" | "tall";

export interface FranchiseSupportItem {
  icon: SvgIconComponent;
  label: string;
  title: string;
  description: string;
  size?: FranchiseSupportCardSize;
}

export interface FranchiseSupportTrainingSectionProps extends FranchiseSectionMeta {
  items?: FranchiseSupportItem[];
}

export interface FranchiseComparisonRow {
  criteria: string;
  cleanTank: string;
  traditional: string;
}

export interface FranchiseTechnologyComparisonSectionProps extends FranchiseSectionMeta {
  cleanTankLabel: string;
  traditionalLabel: string;
  rows?: FranchiseComparisonRow[];
}

export interface FranchiseSuccessStory {
  quote: string;
  name: string;
  role: string;
  region: string;
  outcome: string;
}

export interface FranchiseSuccessStoriesSectionProps extends FranchiseSectionMeta {
  items?: FranchiseSuccessStory[];
}

export interface FranchiseInquiryFieldIds {
  name: string;
  email: string;
  cityRegion: string;
  investmentRange: string;
  cityInvestment: string;
}

export interface FranchiseInquiryField {
  id: string;
  label: string;
  placeholder: string;
  type: "email" | "text";
  autoComplete?: string;
  required?: boolean;
}

export interface FranchiseGoogleFormConfig {
  gFormId: string;
  links: {
    entryId: string;
    formId: string;
    type: "dropdown" | "textarea" | "text";
  }[];
}

export interface FranchiseInquirySectionProps extends FranchiseSectionMeta {
  formTitle: string;
  formDescription: string;
  submitText: string;
  investmentRangeLabel: string;
  investmentRangePlaceholder: string;
  fields?: FranchiseInquiryField[];
  investmentRanges?: string[];
  assurances?: string[];
  fieldIds: FranchiseInquiryFieldIds;
  gFormConfig: FranchiseGoogleFormConfig;
}
