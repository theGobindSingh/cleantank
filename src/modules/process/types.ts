import { SvgIconComponent } from "@mui/icons-material";

export interface ProcessProps {
  className?: string;
}

export interface FrequencyExample {
  label: string;
  value: string;
}

export interface EquipmentItem {
  icon: SvgIconComponent;
  title: string;
  description: string;
}
