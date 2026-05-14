import LeafIcon from "@/icons/leaf";
import { IconType } from "@/icons/types";
import {
  AssessmentOutlined,
  BiotechOutlined,
  CleaningServicesOutlined,
  DeleteSweepOutlined,
  PrecisionManufacturingOutlined,
  SvgIconComponent,
  VerifiedOutlined,
  VolunteerActivismOutlined,
  WaterDropOutlined,
} from "@mui/icons-material";
import { StaticImageData } from "next/image";

export const siteLinks = [
  { name: "Home", path: "/" },
  { name: "Clients", path: "/clients" },
  { name: "Process", path: "/process" },
  { name: "About Us", path: "/about-us" },
  { name: "Franchise", path: "/franchise" },
  { name: "Contact", path: "/contact" },
];

export const cleaningProcessSteps: {
  mainIcon: SvgIconComponent | IconType;
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
  smallDescription: string;
  bottomIconText?: string;
  bottomIcon?: SvgIconComponent | IconType;
}[] = [
  {
    mainIcon: WaterDropOutlined,
    imageSrc:
      "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&w=600",
    title: "Water\nRemoval",
    description:
      "Utilizing high-volume vacuum systems to extract existing fluids without cross-contamination. Our systems monitor flow rates in real-time to ensure zero-residue evacuation of the primary basin.",
    smallDescription:
      "Full evacuation using high-capacity industrial pumps to eliminate all liquid residues.",
    bottomIconText: "Volume Displacement Tracking",
    bottomIcon: AssessmentOutlined,
  },
  {
    mainIcon: CleaningServicesOutlined,
    imageSrc:
      "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&w=600",
    title: "High-Pressure\nJetting",
    description:
      "Multi-directional scouring using calibrated 20,000 PSI hydro-jets. This phase eliminates calcified deposits and biofilm at a molecular level without damaging the tank's structural lining.",
    smallDescription:
      "High-pressure hydro- jetting to strip biofilm and mineral deposits without abrasive damage.",
    bottomIconText: "Robotic Scouring Head",
    bottomIcon: PrecisionManufacturingOutlined,
  },
  {
    mainIcon: DeleteSweepOutlined,
    imageSrc:
      "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&w=600",
    title: "Sludge\nRemoval",
    description:
      "Proprietary centrifugal recovery systems separate solid waste from greywater on-site. We minimize waste disposal costs by concentrating contaminants for compliant ecological disposal.",
    smallDescription:
      "Centrifugal separation of sludge from greywater, minimizing waste volume and disposal costs.",
    bottomIconText: "Waste Compliance",
    bottomIcon: LeafIcon,
  },
  {
    mainIcon: VerifiedOutlined,
    imageSrc:
      "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&w=600",
    title: "Chemical\nTreatment",
    description:
      "Application of EPA-registered, biodegradable agents to neutralize residual contaminants. Our formulations are engineered for maximum efficacy while ensuring the tank environment is safe for sensitive materials or potable water storage.",
    smallDescription:
      "Body friendly chemicals to neutralize contaminants while ensuring safety.",
    bottomIconText: "100% Body-Safe Formulations",
    bottomIcon: VolunteerActivismOutlined,
  },
  {
    mainIcon: BiotechOutlined,
    imageSrc:
      "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&w=600",
    title: "UV\nSterilization",
    description:
      "Application of SpectraSterile UV-C arrays to neutralize 99.9% of microbial threats. Our process ensures the tank environment is clinically safe for sensitive materials or potable water storage.",
    smallDescription:
      "Deployment of UVC spectrum technology to neutralize 99.9% of bacterial pathogens.",
    bottomIconText: "UV-C Array Monitoring",
    bottomIcon: BiotechOutlined,
  },
];
