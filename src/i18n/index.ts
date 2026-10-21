import { toLocale, type Locale } from "./config";
import { en, type Dictionary } from "./dictionaries/en";
import { hi } from "./dictionaries/hi";
import { pa } from "./dictionaries/pa";

export * from "./config";
export type { Dictionary };

// Small enough to import statically, so client error pages can use them too.
const dictionaries: Record<Locale, Dictionary> = { en, hi, pa };

/** The dictionary for `locale`, falling back to English for anything unknown. */
export const getDictionary = (locale: string | undefined): Dictionary => {
  return dictionaries[toLocale(locale)];
};
