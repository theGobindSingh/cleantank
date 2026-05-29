import { ButtonProps } from "@components/button";
import { ImageProps } from "next/image";
import { ReactNode } from "react";

export interface HeroSectionProps {
  imgSrc: ImageProps["src"];
  chip?: string;
  title:
    | string
    | {
        text: string;
        highlight: string;
      };
  subtitle?: string;
  CTAs?: (Omit<ButtonProps, "children"> & { text: string })[];
  layout?: "default" | "split";
  rightPanel?: ReactNode;
}
