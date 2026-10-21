import { tw } from "@utils/tw";
import {
  Anek_Devanagari as AnekDevanagari,
  Anek_Gurmukhi as AnekGurmukhi,
  Anek_Latin as AnekLatin,
  Caveat,
  IBM_Plex_Mono as IbmPlexMono,
  IBM_Plex_Serif as IbmPlexSerif,
} from "next/font/google";

/*
 * The four font roles. Each sets a CSS variable that globals.css maps to a
 * Tailwind utility (font-sans, font-serif, font-mono, font-cursive), plus
 * font-heading, which is Anek Latin at `font-stretch: 78%` (so the width axis is loaded).
 * Hindi and Punjabi use Anek Devanagari and Anek Gurmukhi, which sit after
 * Anek Latin in every stack; their unicode-range means a page downloads one
 * only when it has text in that script.
 * To change a font, swap the loader here; nothing else moves.
 */

const sans = AnekLatin({
  variable: "--font-anek-latin",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});

// Indic text is never condensed, so no width axis.
const devanagari = AnekDevanagari({
  variable: "--font-anek-devanagari",
  subsets: ["devanagari"],
  preload: false,
});

const gurmukhi = AnekGurmukhi({
  variable: "--font-anek-gurmukhi",
  subsets: ["gurmukhi"],
  preload: false,
});

// Not preloaded: the browser still fetches them, but only on pages that use them.
const mono = IbmPlexMono({
  variable: "--font-ibm-plex-mono",
  weight: ["500", "600"],
  subsets: ["latin", "latin-ext"],
  preload: false,
});

const serif = IbmPlexSerif({
  variable: "--font-ibm-plex-serif",
  weight: ["400", "600"],
  subsets: ["latin", "latin-ext"],
  preload: false,
});

const cursive = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "latin-ext"],
  preload: false,
});

/** Class names that define every font variable; apply to <html>. */
export const fontVariables = tw(
  sans.variable,
  devanagari.variable,
  gurmukhi.variable,
  serif.variable,
  mono.variable,
  cursive.variable,
);
