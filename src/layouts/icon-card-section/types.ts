import { SvgIconComponent } from "@mui/icons-material";

export interface IconCardItem {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export interface IconCardSectionLayoutProps {
  chip?: string | undefined;
  title: string;
  description?: string | undefined;
  items?: IconCardItem[];
  areNumbersVisible?: boolean;
}
