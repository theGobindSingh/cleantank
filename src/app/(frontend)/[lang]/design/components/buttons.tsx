import Button from "@components/button";
import type {
  ColorFamily,
  InteractionSize,
  InteractionVariant,
} from "@components/button/types";
import { H3, P, Span } from "@components/html";
import type { ReactNode } from "react";
import SchemePair from "./scheme-pair";
import Section from "./section";

const VARIANTS: InteractionVariant[] = ["filled", "outlined", "text"];
const SIZES: InteractionSize[] = ["sm", "md", "lg"];
const FAMILIES: ColorFamily[] = [
  "primary",
  "grey",
  "success",
  "caution",
  "info",
  "error",
];

const Label = ({ children }: { children: ReactNode }) => {
  return (
    <Span
      $size="caption"
      className="font-mono font-semibold tracking-[0.08em] text-fg-muted uppercase"
    >
      {children}
    </Span>
  );
};

const renderVariantRow = (variant: InteractionVariant) => {
  const renderSize = (size: InteractionSize) => {
    return (
      <Button key={size} variant={variant} size={size}>
        {variant} {size}
      </Button>
    );
  };
  return (
    <div key={variant} className="flex flex-col gap-2">
      <Label>{variant}</Label>
      <div className="flex flex-wrap items-center gap-3">
        {SIZES.map(renderSize)}
        <Button variant={variant} disabled>
          Disabled
        </Button>
      </div>
    </div>
  );
};

const Matrix = () => {
  return (
    <div className="flex flex-col gap-5">{VARIANTS.map(renderVariantRow)}</div>
  );
};

const renderFamily = (color: ColorFamily) => {
  return (
    <div key={color} className="flex flex-wrap items-center gap-3">
      <span className="w-20 font-mono text-(length:--fs-caption) text-fg-muted">
        {color}
      </span>
      <Button color={color} size="sm">
        Filled
      </Button>
      <Button color={color} size="sm" variant="outlined">
        Outlined
      </Button>
      <Button color={color} variant="text">
        Text
      </Button>
    </div>
  );
};

const SPECS = [
  "Heights: sm 44 px (dense desktop tables only), md 48 px (default), lg 56 px (the hero).",
  "Anek 700, uppercase, +0.06em; 14 px, 16 px at lg. Padding 0 24 px (16 at sm, 32 at lg), min width 120 px, radius 4 px.",
  "Hover 110 ms. Filled steps one stop lighter on hover and darker when pressed; outlined adds an 8% and 14% tint.",
  "Primary follows the mode and band by itself: navy with a white label on light grounds, white with a navy label in dark mode and in bands.",
  "One filled button per viewport. Labels from the approved list: Get a Service Quote, Explore Our Services, Send an Enquiry, Become a Franchise Partner. Never Submit, Book now, arrows or exclamation marks.",
  "No accent buttons and no secondary buttons: the color prop doesn't accept them.",
];

const renderSpec = (spec: string) => {
  return <li key={spec}>{spec}</li>;
};

const FamilyRows = () => {
  return (
    <div className="flex flex-col gap-3">{FAMILIES.map(renderFamily)}</div>
  );
};

/** Every button variant, size and colour, in light, dark and both band types. */
const Buttons = () => {
  return (
    <Section
      id="buttons"
      number={8}
      title="Buttons"
      intro="Button and Link share one style: variant (filled, outlined, text), size (sm, md, lg) and color. Button defaults to filled, Link to text. Hover, press and tab through them: focus shows the ring."
    >
      <SchemePair render={Matrix} />
      <div className="grid gap-4 lg:grid-cols-2">
        <div data-surface="band" className="flex flex-col gap-4 rounded-sm p-6">
          <Label>Navy band</Label>
          <Matrix />
        </div>
        <div
          data-surface="band"
          className="flex flex-col gap-4 rounded-sm p-6 [--color-band:var(--color-secondary-700)]"
        >
          <Label>Secondary band</Label>
          <Matrix />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <H3 $margin="0">Colour families</H3>
        <P $size="small" className="text-fg-muted">
          Other families use 700, 600 hover and 800 pressed with a white label
          on light grounds, and switch to 300, 200 and 100 with a navy label in
          dark mode and bands. Use them for status actions only, such as a
          destructive confirm.
        </P>
        <SchemePair render={FamilyRows} />
      </div>
      <ul className="flex max-w-[68ch] list-disc flex-col gap-2 pl-5">
        {SPECS.map(renderSpec)}
      </ul>
    </Section>
  );
};

export default Buttons;
