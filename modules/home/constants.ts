import { HeroSectionProps } from "@components/hero-section/types";
import { HeroStripProps, HomeProcessSectionProps } from "@modules/home/types";
import {
  CleaningServicesOutlined,
  DeleteSweepOutlined,
  FlareOutlined,
  GavelRounded,
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
