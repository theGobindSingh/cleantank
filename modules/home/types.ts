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
