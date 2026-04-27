import { SvgIconComponent } from "@mui/icons-material";

export interface HomeProps {
  className?: string;
}

export interface HomeProcessSectionProps {
  title: string;
  description?: string;
  items?: {
    icon: SvgIconComponent;
    title: string;
    description: string;
  }[];
}

export interface IndustryItem {
  title: string;
  subTitle: string;
  imgSrc: string;
}

export interface IndustriesSectionProps {
  chip?: string;
  title?: string;
  description?: string;
  items?: IndustryItem[];
}

export interface FranchisePoint {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export interface FranchiseSectionProps {
  chip?: string;
  title?: string;
  points?: FranchisePoint[];
  ctaText?: string;
  ctaHref?: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  organization: string;
}

export interface TestimonialsSectionProps {
  chip?: string;
  title?: string;
  description?: string;
  items?: TestimonialItem[];
}
