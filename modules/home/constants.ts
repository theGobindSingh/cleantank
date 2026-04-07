import { HeroSectionProps } from "@layouts/hero-section/types";
import { HeroStripProps } from "@layouts/icon-info-strip-section/types";
import {
  FranchiseSectionProps,
  HomeProcessSectionProps,
  IndustriesSectionProps,
  TestimonialsSectionProps,
} from "@modules/home/types";
import {
  CleaningServicesOutlined,
  DeleteSweepOutlined,
  FlareOutlined,
  GavelRounded,
  MonetizationOnOutlined,
  PrecisionManufacturingOutlined,
  SecurityRounded,
  TaskAltRounded,
  VerifiedOutlined,
  VerifiedRounded,
  WaterDropOutlined,
} from "@mui/icons-material";

export const HeroCTAs: NonNullable<HeroSectionProps["CTAs"]> = [
  {
    text: "Get a quote",
    href: "/quote",
    $variant: "filled",
    $color: "secondary",
    $colorWeight: "800",
    $textColor: "accent",
    $textColorWeight: "100",
    $fontWeight: "600",
  },
  {
    text: "Our Technology",
    href: "/about-us",
    $variant: "glass",
    $withBorder: true,
    $color: "secondary",
    $colorWeight: "800",
    $textColor: "secondary",
    $textColorWeight: "800",
    $fontWeight: "600",
  },
];

export const heroStripItems: HeroStripProps["items"] = [
  {
    icon: VerifiedRounded,
    title: "ISO 9001:2015",
    subTitle: "Quality Certified",
  },
  {
    icon: TaskAltRounded,
    title: "5000+",
    subTitle: "Projects Completed",
  },
  {
    icon: GavelRounded,
    title: "Government Grade",
    subTitle: "Compliance Standard",
  },
  {
    icon: SecurityRounded,
    title: "100%",
    subTitle: "Satisfaction Guaranteed",
  },
];

export const processItems: NonNullable<HomeProcessSectionProps["items"]> = [
  {
    icon: WaterDropOutlined,
    title: "Water Removal",
    description:
      "Full evacuation using high-capacity industrial pumps to eliminate all liquid residues.",
  },
  {
    icon: CleaningServicesOutlined,
    title: "Jetting",
    description:
      "High-pressure hydro- jetting to strip biofilm and mineral deposits without abrasive damage.",
  },
  {
    icon: DeleteSweepOutlined,
    title: "Sludge Removal",
    description:
      "Specialized filtration and removal of heavy sediment and organic particulates.",
  },
  {
    icon: FlareOutlined,
    title: "UV Sterilization",
    description:
      "Deployment of UVC spectrum technology to neutralize 99.9% of bacterial pathogens.",
  },
  {
    icon: VerifiedOutlined,
    title: "Final Polish",
    description:
      "Visual inspection and certification of tank surfaces to clinical grade standards.",
  },
];

export const industriesSectionMeta: Pick<
  IndustriesSectionProps,
  "chip" | "title" | "description"
> = {
  title: "Industries We Serve",
  description:
    "Purpose-built tank hygiene protocols for every sector — from critical healthcare to large-scale civic infrastructure.",
};

export const industryItems: NonNullable<IndustriesSectionProps["items"]> = [
  {
    title: "Hospitals & Healthcare",
    subTitle: "Sterile-grade compliance for patient safety",
    imgSrc:
      "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&w=900",
  },
  {
    title: "Schools & Universities",
    subTitle: "Safe drinking water for thousands of students",
    imgSrc:
      "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&w=900",
  },
  {
    title: "Government Institutions",
    subTitle: "Regulatory compliance and audit-ready documentation",
    imgSrc:
      "https://images.pexels.com/photos/351264/pexels-photo-351264.jpeg?auto=compress&w=900",
  },
  {
    title: "Commercial Buildings",
    subTitle: "Uninterrupted operations for high-occupancy properties",
    imgSrc:
      "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&w=900",
  },
];

export const franchiseSectionMeta: Omit<FranchiseSectionProps, "points"> = {
  chip: "FRANCHISE PROGRAMME",
  title: "Launch Your Own CleanTank Franchise",
  ctaText: "Explore Franchise",
  ctaHref: "/franchise",
};

export const franchisePoints: NonNullable<FranchiseSectionProps["points"]> = [
  {
    icon: MonetizationOnOutlined,
    title: "Guaranteed Earnings From Month 1",
    description:
      "Our proven operations model ensures positive cash flow from your very first project — backed by our lead generation and territory support.",
  },
  {
    icon: PrecisionManufacturingOutlined,
    title: "Turnkey Equipment & Training",
    description:
      "We supply industrial-grade cleaning machinery, full operational training, and ongoing technical support — zero guesswork on day one.",
  },
];

export const testimonialsSectionMeta: Omit<TestimonialsSectionProps, "items"> =
  {
    chip: "CLIENT VOICES",
    title: "Trusted by Institutions Across India",
    description:
      "Facility managers and procurement heads from hospitals, government bodies, and large residential complexes share their experience.",
  };

export const testimonialItems: NonNullable<TestimonialsSectionProps["items"]> =
  [
    {
      quote:
        "CleanTank's team completed a full sterilization cycle across our 14 overhead tanks within a single weekend — zero operational disruption to our ICU or OT water lines. Their documentation was audit-ready.",
      name: "Dr. Meera Nambiar",
      role: "Chief of Facility Management",
      organization: "Apollo Hospitals, Chennai",
    },
    {
      quote:
        "After switching to CleanTank, our municipal authority's quarterly lab reports showed a 93% reduction in coliform count across all cleaned reservoirs. The process is genuinely industrial-grade.",
      name: "Suresh Rajan IAS",
      role: "Deputy Commissioner, Urban Development",
      organization: "Greater Hyderabad Municipal Corporation",
    },
  ];
