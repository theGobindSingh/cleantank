import { SvgIconComponent } from "@mui/icons-material";

export interface HomeProps {
  className?: string;
}

interface HeroStripItem {
  icon: SvgIconComponent;
  title: string;
  subTitle: string;
}

export interface HeroStripProps {
  items: HeroStripItem[];
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
