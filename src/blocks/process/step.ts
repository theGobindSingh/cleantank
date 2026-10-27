import type { Process } from "@/payload-types";

export type Step = Process["steps"][number];

export const pad = (value: number) => {
  return String(value).padStart(2, "0");
};

/** The id of a step's full section, which the track links to. */
export const stepId = (index: number) => {
  return `step-${pad(index + 1)}`;
};
