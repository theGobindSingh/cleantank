import type { Process } from "@/payload-types";
import { pad } from "@utils/pad";

export type Step = Process["steps"][number];

/** The id of a step's full section, which the track links to. */
export const stepId = (index: number) => {
  return `step-${pad(index + 1)}`;
};
