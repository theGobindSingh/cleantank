/* eslint-disable camelcase -- fonts */
import { defaultLightTheme } from "@kami-ui/theme-shop";
import { ThemeObject } from "@kami-ui/types";
import { breakpoints } from "@styles/global";
import {
  DM_Mono,
  Inter,
  Nothing_You_Could_Do,
  Plus_Jakarta_Sans,
} from "next/font/google";

const fontSansSerif = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const fontMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const fontSans = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext", "cyrillic-ext", "vietnamese"],
  preload: true,
  display: "swap",
});

const fontCursive = Nothing_You_Could_Do({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const theme: ThemeObject = {
  colors: {
    ...defaultLightTheme.colors,
    primary: [
      "#001B3C",
      "#05305E",
      "#254776",
      "#3E5F90",
      "#5878AA",
      "#7292C6",
      "#8CACE2",
      "#A7C8FF",
      "#D5E3FF",
      "#ECF1FF",
    ],
    secondary: [
      "#00201C",
      "#003731",
      "#005047",
      "#006B5F",
      "#008677",
      "#00A391",
      "#36BEAC",
      "#59DBC7",
      "#79F7E3",
      "#B5FFF0",
    ],
    accent: [
      "#0E1E1E",
      "#233333",
      "#3A4A49",
      "#516161",
      "#697A7A",
      "#839493",
      "#9DAFAE",
      "#B8CAC9",
      "#D4E6E5",
      "#E2F4F3",
    ],
    neutral: [
      "#191C1D",
      "#2E3132",
      "#444748",
      "#5C5F60",
      "#747779",
      "#8E9192",
      "#A9ACAD",
      "#C4C7C8",
      "#E1E3E4",
      "#EFF1F2",
    ],
  },
  typography: {
    fontSizes: [
      {
        breakpoint: {
          min: `${breakpoints.desktop.min}px`,
          max: `${breakpoints.desktop.max}px`,
        },
        size: [
          "0.75rem", // 12px
          "0.875rem", // 14px
          "1rem", // 16px
          "1.125rem", // 18px
          "1.25rem", // 20px
          "1.5rem", // 24px
          "1.875rem", // 30px
          "2.25rem", // 36px
          "2.75rem", // 44px
          "3.25rem", // 52px
          "3.75rem", // 60px
        ],
      },
      {
        breakpoint: {
          min: `${breakpoints.phone.min}px`,
          max: `${breakpoints.tablet.max}px`,
        },
        size: [
          "0.68rem", // 11px
          "0.75rem", // 12px
          "0.875rem", // 14px
          "1rem", // 16px
          "1.125rem", // 18px
          "1.25rem", // 20px
          "1.5rem", // 24px
          "1.875rem", // 30px
          "2.25rem", // 36px
          "2.75rem", // 44px
          "3.25rem", // 52px
        ],
      },
    ],
    fontFamilies: {
      serif: fontSansSerif.style.fontFamily,
      sans: fontSans.style.fontFamily,
      mono: fontMono.style.fontFamily,
      cursive: fontCursive.style.fontFamily,
    },
  },
};

export default theme;
