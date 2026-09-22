// ─── Hero ─────────────────────────────────────────────────────────────────────

import { clientGroupLabels } from "@constants";
import { ClientsCategoryData } from "@modules/clients/types";

export const clientsHeroProps = {
  chip: "Scale & Reliability",
  title: {
    text: "The Infrastructure Behind India's Leaders",
    highlight: "India's Leaders",
  },
  subtitle:
    "Clean Tank Services has cleaned and maintained water storage tanks for government bodies, hospitals, hotels, residential communities and leading academic institutions across India.",
  imgSrc:
    "https://images.pexels.com/photos/31403876/pexels-photo-31403876.jpeg?auto=compress&w=1600",
};

export const clientsCategoryData: ClientsCategoryData = {
  government: {
    title: clientGroupLabels.government,
    description:
      "Serving government bodies, municipal corporations and public-sector institutions.",
    chip: clientGroupLabels.government,
  },
  healthcare: {
    title: clientGroupLabels.healthcare,
    description:
      "Maintaining hygienic water storage for hospitals across India.",
    chip: clientGroupLabels.healthcare,
  },
  industrial: {
    title: clientGroupLabels.industrial,
    description: "Supporting industrial and commercial facilities.",
    chip: clientGroupLabels.industrial,
  },
  hospitalityAndResidential: {
    title: clientGroupLabels.hospitalityAndResidential,
    description:
      "Serving hotels, hospitality establishments and many apartment and residential communities across India, including TDI and MR.",
    chip: clientGroupLabels.hospitalityAndResidential,
  },
  institutional: {
    title: clientGroupLabels.institutional,
    description:
      "Serving universities, IITs, NITs, CSIR institutions and schools across India.",
    chip: clientGroupLabels.institutional,
  },
};
