import { H1, P } from "@components/html";
import Link from "@components/link";
import type { Metadata } from "next";
import Accessibility from "./components/accessibility";
import Buttons from "./components/buttons";
import Fonts from "./components/fonts";
import Icons from "./components/icons";
import Indic from "./components/indic";
import Layout from "./components/layout";
import Links from "./components/links";
import Motifs from "./components/motifs";
import Motion from "./components/motion";
import Overview from "./components/overview";
import Ramps from "./components/ramps";
import Roles from "./components/roles";
import States from "./components/states";
import Surfaces from "./components/surfaces";
import Typography from "./components/typography";

// An internal reference for the team, not a public page
export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

const CONTENTS = [
  ["direction", "Direction"],
  ["ramps", "Colour ramps"],
  ["roles", "Semantic roles"],
  ["surfaces", "Surfaces and modes"],
  ["typography", "Type scale"],
  ["fonts", "Fonts"],
  ["languages", "Hindi and Punjabi"],
  ["buttons", "Buttons"],
  ["links", "Links"],
  ["states", "Status and forms"],
  ["motifs", "Motifs"],
  ["layout", "Layout"],
  ["icons", "Icons"],
  ["motion", "Motion"],
  ["accessibility", "Contrast and access"],
];

const renderEntry = ([id, title]: string[], index: number) => {
  return (
    <li key={id}>
      <Link href={`#${id ?? ""}`} className="no-underline hover:underline">
        <span className="font-mono text-(length:--fs-caption) text-fg-muted">
          {String(index + 1).padStart(2, "0")}
        </span>{" "}
        {title}
      </Link>
    </li>
  );
};

/** The live design reference: every token and component, rendered from the real CSS. */
const DesignPage = () => {
  return (
    // the reference is written in English under every language
    <main lang="en">
      <header className="bg-bg">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 pt-16 pb-12 md:px-8 lg:px-10">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-(length:--fs-ref) font-medium tracking-widest text-marker-text uppercase">
              00&nbsp;&nbsp;REF CT-DS
            </span>
            <H1 $size="display" $margin="0">
              Design system
            </H1>
            <span aria-hidden="true" className="block h-[3px] w-12 bg-marker" />
          </div>
          <P $size="body-l" className="max-w-[60ch] text-fg-muted">
            Every colour, type size, font, component and rule on the Clean Tank
            Services website, rendered from the live CSS. Values are measured in
            your browser, so this page is never out of date. Switch the theme to
            see the whole page in dark mode; most sections also show both modes
            side by side. The written source is docs/DESIGN.md.
          </P>
          <nav aria-label="Contents">
            <ol className="grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {CONTENTS.map(renderEntry)}
            </ol>
          </nav>
        </div>
      </header>
      <Overview />
      <Ramps />
      <Roles />
      <Surfaces />
      <Typography />
      <Fonts />
      <Indic />
      <Buttons />
      <Links />
      <States />
      <Motifs />
      <Layout />
      <Icons />
      <Motion />
      <Accessibility />
    </main>
  );
};

export default DesignPage;
