import { ButtonProps } from "@components/button";
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

export type FranchiseCTA = Omit<ButtonProps, "children"> & { text: string };

export interface FranchiseHeroStat {
  label: string;
  value: string;
  supportingText: string;
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
}

export interface FranchiseWhySectionProps extends FranchiseSectionMeta {
  sectors?: string[];
  note?: string;
}

export interface FranchiseBenefitItem {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export interface FranchiseBenefitsSectionProps extends FranchiseSectionMeta {
  items?: FranchiseBenefitItem[];
}

export interface FranchiseModelRow {
  label: string;
  value: string;
}

export interface FranchiseBusinessModelSectionProps extends FranchiseSectionMeta {
  rows?: FranchiseModelRow[];
  disclaimer: string;
}

export interface FranchiseSupportTrainingSectionProps extends FranchiseSectionMeta {
  steps?: string[];
}

export interface FranchiseInquirySectionProps {
  heading: string;
  body: string;
  CTAs?: FranchiseCTA[];
}
