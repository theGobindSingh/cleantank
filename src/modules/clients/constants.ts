// ─── Hero ─────────────────────────────────────────────────────────────────────

import { ClientsCategoryData } from "@modules/clients/types";

export const clientsHeroProps = {
  chip: "Scale & Reliability",
  title: {
    text: "The Infrastructure Behind India's Leaders",
    highlight: "India's Leaders",
  },
  subtitle:
    "Clean Tank Services provides mission-critical water hygiene for over 500+ major installations across the subcontinent. From central universities to industrial complexes.",
  imgSrc:
    "https://images.pexels.com/photos/31403876/pexels-photo-31403876.jpeg?auto=compress&w=1600",
};

export const clientsCategoryData: ClientsCategoryData = {
  institutional: {
    title: "Institutional Partnerships",
    description:
      "Empowering academic and research hubs with sterile water systems.",
    chip: "Academic Leaders",
  },
  industrial: {
    title: "Industrial Giants",
    description:
      "Supporting heavy manufacturing and high-throughput production lines.",
    chip: "Manufacturing & Core",
  },
  healthcare: {
    title: "Healthcare Networks",
    description:
      "Clinical-grade sanitation for India's most advanced medical facilities.",
    chip: "Medical & Clinical",
  },
  government: {
    title: "Government & Public Sector",
    description:
      "Managing public utility and administrative water infrastructure.",
    chip: "Public Sector",
  },
};
