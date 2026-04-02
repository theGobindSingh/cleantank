import { ButtonProps } from "@components/button";
import { ImageProps } from "next/image";

export interface HeroSectionProps {
  imgSrc: ImageProps["src"];
  imgAlt?: ImageProps["alt"];
  chip?: string;
  title:
    | string
    | {
        text: string;
        highlight: string;
      };
  subtitle?: string;
  CTAs?: (Omit<ButtonProps, "children"> & { text: string })[];
}
