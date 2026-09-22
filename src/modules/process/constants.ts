import { ImageCardProps } from "@components/image-card/types";
import { cleaningProcessSteps } from "@constants";
import heroImg from "@images/tank.png";
import { StandardSectionLayoutProps } from "@layouts/standard-section/types";
import { EquipmentItem, FrequencyExample } from "@modules/process/types";
import {
  BiotechOutlined,
  DeleteSweepOutlined,
  PlumbingOutlined,
  SpeedOutlined,
} from "@mui/icons-material";

export const processHeroProps = {
  chip: "Our Cleaning Process",
  title: {
    text: "Our 5-Step Scientific Cleaning Process",
    highlight: "5-Step",
  },
  subtitle:
    "We provide water storage tank cleaning by a mechanized and scientific method, covering cleaning, disinfection and maintenance for residential, commercial and industrial premises.",
  imgSrc: heroImg,
};

export const processSectionProps: StandardSectionLayoutProps = {
  title: "The Cleaning Cycle",
  description:
    "A systematic 5-step mechanized and scientific process, from de-watering to ultra-violet treatment.",
};

export const processCardsData: ImageCardProps[] = cleaningProcessSteps.map(
  ({ imageSrc, title, description, bottomIconText, bottomIcon }) => {
    return {
      imageSrc,
      title,
      description,
      bottomIconText,
      bottomIcon,
    } as ImageCardProps;
  },
);

// ─── Recommended Cleaning Frequency ────────────────────────────────────────

export const frequencySectionMeta: Pick<
  StandardSectionLayoutProps,
  "chip" | "title" | "description"
> = {
  chip: "How Often",
  title: "Recommended Cleaning Frequency",
  description:
    "Recommended cleaning frequency depends on the type of organisation, tank use and site conditions — there is no single fixed schedule.",
};

export const frequencyExamples: FrequencyExample[] = [
  { label: "Healthcare facilities", value: "Approximately every 3 months" },
  { label: "Schools", value: "Approximately every 6 months" },
];

export const frequencyGeneralGuidance =
  "As general guidance, most facilities benefit from cleaning every 3–6 months; facilities with higher hygiene requirements can adopt a quarterly schedule.";

export const frequencyFactors: string[] = [
  "Tank type & capacity",
  "Frequency of use",
  "Water quality",
  "Sediment build-up",
  "Surrounding conditions",
  "Type of facility",
  "Applicable hygiene requirements",
];

// ─── Equipment Used ─────────────────────────────────────────────────────────

export const equipmentSectionMeta: Pick<
  StandardSectionLayoutProps,
  "chip" | "title" | "description"
> = {
  chip: "Our Equipment",
  title: "Equipment Used",
  description:
    "Advanced equipment for cleaning, pumping, vacuum and disinfection, matched to each tank's size and condition.",
};

export const equipmentItems: EquipmentItem[] = [
  {
    icon: PlumbingOutlined,
    title: "Pumping Equipment",
    description: "Mechanical pumps for de-watering the tank before cleaning.",
  },
  {
    icon: SpeedOutlined,
    title: "High-Pressure Cleaning Equipment",
    description:
      "High-pressure water jet pump — up to 250 bar — for walls, floor and roof.",
  },
  {
    icon: DeleteSweepOutlined,
    title: "Vacuum Equipment",
    description: "Industrial vacuum cleaner for sludge and sediment removal.",
  },
  {
    icon: BiotechOutlined,
    title: "Disinfection & UV Equipment",
    description:
      "Anti-bacterial spraying equipment and, where applicable, ultra-violet treatment units.",
  },
];
