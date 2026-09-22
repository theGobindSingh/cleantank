import { SvgIconComponent } from "@mui/icons-material";

export interface FeatureCardItem {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export interface FeatureCardSectionCta {
  text: string;
  href: string;
}

export interface FeatureCardSectionProps {
  chip?: string | undefined;
  title: string;
  description?: string | undefined;
  items?: FeatureCardItem[];
  bg?: string | undefined;
  cta?: FeatureCardSectionCta | undefined;
  className?: string | undefined;
}
