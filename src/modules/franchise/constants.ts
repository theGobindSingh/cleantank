import { brand, franchise, iso } from "@constants";
import {
  FranchiseBenefitsSectionProps,
  FranchiseBusinessModelSectionProps,
  FranchiseHeroSectionProps,
  FranchiseInquirySectionProps,
  FranchiseSupportTrainingSectionProps,
  FranchiseWhySectionProps,
} from "@modules/franchise/types";
import {
  AutorenewOutlined,
  BuildOutlined,
  CampaignOutlined,
  EngineeringOutlined,
  HomeWorkOutlined,
  PublicOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";

export const franchiseHeroProps: FranchiseHeroSectionProps = {
  chip: "FRANCHISE & BUSINESS OPPORTUNITY",
  title: {
    text: "START YOUR OWN BUSINESS. STEP BEYOND JOBS.",
    highlight: "STEP BEYOND JOBS.",
  },
  subtitle:
    "CLEAN TANK SERVICES is expanding its franchise network across India and offers an opportunity for entrepreneurs to establish a professional water-storage-tank cleaning and hygiene service business in their territory. Our franchise concept combines a specialized service, mechanized and scientific cleaning methodology, structured training, marketing assistance, lead-generation support and operational guidance.",
  imgSrc:
    "https://images.pexels.com/photos/6476174/pexels-photo-6476174.jpeg?auto=compress&w=1800",
  CTAs: [
    {
      text: "Become a Franchise Partner",
      href: "/contact",
      $variant: "filled",
      $color: "secondary",
      $colorWeight: "800",
      $textColor: "accent",
      $textColorWeight: "100",
      $fontWeight: "600",
    },
    {
      text: "Talk to Us",
      href: "/contact",
      $variant: "glass",
      $withBorder: true,
      $color: "secondary",
      $colorWeight: "800",
      $textColor: "secondary",
      $textColorWeight: "800",
      $fontWeight: "600",
    },
  ],
  trustCardTitle: "A Trusted Franchise Brand",
  trustCardDescription: `${brand.name}, ${brand.brandLine}, established ${brand.established}.`,
  stats: [
    {
      label: "Quality System",
      value: iso.standard,
      supportingText: iso.safeWording,
    },
    {
      label: "Experience",
      value: brand.experience,
      supportingText: `Serving customers since ${brand.established}.`,
    },
  ],
};

export const franchiseWhySectionProps: FranchiseWhySectionProps = {
  chip: "WHY TANK CLEANING",
  title: "A Recurring Maintenance Requirement",
  description:
    "Water storage tank cleaning is a recurring maintenance requirement across a wide range of property types.",
  sectors: [
    "Residential societies",
    "Apartment complexes",
    "Commercial buildings",
    "Hospitals",
    "Hotels",
    "Educational institutions",
    "Government establishments",
    "Industrial and institutional facilities",
  ],
  note: "The recurring nature of cleaning requirements also creates opportunities for repeat business and Annual Maintenance Contracts.",
};

export const franchiseBenefitsSectionMeta: Pick<
  FranchiseBenefitsSectionProps,
  "chip" | "title" | "description"
> = {
  chip: "KEY FRANCHISE BENEFITS",
  title: "Why Partner With Clean Tank Services",
  description:
    "A franchise model designed around a specialized service, structured support and a recurring maintenance need.",
};

export const franchiseBenefitItems: NonNullable<
  FranchiseBenefitsSectionProps["items"]
> = [
  {
    icon: HomeWorkOutlined,
    title: "Low Infrastructure Requirement",
    description:
      "Can be operated with a comparatively lean office and operational setup depending on the selected franchise model and territory.",
  },
  {
    icon: EngineeringOutlined,
    title: "Training & On-Site Support",
    description:
      "Structured training and practical on-site guidance in service operations and business processes.",
  },
  {
    icon: CampaignOutlined,
    title: "Marketing & Advertising Support",
    description:
      "Marketing, promotional and advertising assistance to help franchise partners develop their local market.",
  },
  {
    icon: TrendingUpOutlined,
    title: "Lead Generation & Sales Assistance",
    description:
      "Support may be provided for lead generation and sales development according to the applicable franchise model.",
  },
  {
    icon: BuildOutlined,
    title: "Flexible Office Model",
    description:
      "Depending on the model, small office or suitable home-based setup.",
  },
  {
    icon: AutorenewOutlined,
    title: "Recurring Business Potential",
    description:
      "Periodic cleaning and AMC services can help develop repeat customers and recurring revenue.",
  },
  {
    icon: PublicOutlined,
    title: "Scalable Market",
    description:
      "Can be developed in metros as well as smaller cities and towns, depending on local market conditions.",
  },
];

export const franchiseBusinessModelSectionMeta: Pick<
  FranchiseBusinessModelSectionProps,
  "chip" | "title" | "description"
> = {
  chip: "FRANCHISE BUSINESS MODEL",
  title: "Indicative Franchise Terms",
  description: "An indicative overview of the franchise business model.",
};

export const franchiseBusinessModelRows: NonNullable<
  FranchiseBusinessModelSectionProps["rows"]
> = [
  { label: "Franchise investment", value: franchise.investmentRange },
  { label: "Suggested startup level", value: franchise.suggestedStartupLevel },
  { label: "Royalty", value: franchise.royalty },
  { label: "Indicative ROI", value: franchise.indicativeRoi },
  {
    label: "Indicative payback period",
    value: franchise.indicativePaybackPeriod,
  },
  { label: "Office requirement", value: franchise.officeRequirement },
  { label: "Agreement period", value: franchise.agreementPeriod },
  { label: "Market", value: franchise.market },
  { label: "Business support", value: franchise.businessSupport },
];

export const franchiseBusinessModelDisclaimer = franchise.financialDisclaimer;

export const franchiseSupportTrainingSectionMeta: Pick<
  FranchiseSupportTrainingSectionProps,
  "chip" | "title" | "description"
> = {
  chip: "FRANCHISE SUPPORT SYSTEM",
  title: "Structured Support, Start to Growth",
  description:
    "Every franchise partner is guided through the same structured support flow.",
};

export const franchiseSupportSteps: NonNullable<
  FranchiseSupportTrainingSectionProps["steps"]
> = [
  "Training",
  "On-Site Service Training",
  "Marketing Support",
  "Lead Generation",
  "Sales Assistance",
  "Operational Guidance",
  "Business Growth Support",
];

export const franchiseInquiryProps: FranchiseInquirySectionProps = {
  heading: "Build Your Own Service Business",
  body: "With a specialized service concept, professional methodology and structured support system, CLEAN TANK SERVICES aims to help franchise partners establish and develop their own local service businesses. Service Industry. Professional Opportunity. Scalable Business.",
  CTAs: [
    {
      text: "Become a Franchise Partner",
      href: "/contact",
      $variant: "filled",
      $color: "secondary",
      $colorWeight: "800",
      $textColor: "accent",
      $textColorWeight: "100",
      $fontWeight: "600",
    },
    {
      text: "Send an Enquiry",
      href: "/contact",
      $variant: "glass",
      $withBorder: true,
      $color: "secondary",
      $colorWeight: "800",
      $textColor: "secondary",
      $textColorWeight: "800",
      $fontWeight: "600",
    },
  ],
};
