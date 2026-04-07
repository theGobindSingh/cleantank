import { SvgIconComponent } from "@mui/icons-material";

interface HeroStripItem {
  icon: SvgIconComponent;
  title: string;
  subTitle: string;
}

export interface HeroStripProps {
  items: HeroStripItem[];
}
