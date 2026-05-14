import { IconType } from "@/icons/types";
import type { SvgIconComponent } from "@mui/icons-material";

export interface ImageCardProps {
  title: string;
  imageSrc: string;

  number?: number | string;
  chip?: string;
  description?: string;
  bottomIcon?: SvgIconComponent | IconType;
  bottomIconText?: string;

  $isReversed?: boolean;

  className?: string;
}
