import { P, Span } from "@components/html";
import { iconProps } from "@components/icon";
import {
  Droplets,
  FileCheck,
  Gauge,
  Phone,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Section from "./section";

const SIZES = [
  { size: 16, stroke: 2 },
  { size: 20, stroke: 1.85 },
  { size: 24, stroke: 1.75 },
  { size: 32, stroke: 1.5 },
];

const SET: [LucideIcon, string][] = [
  [Gauge, "Pressure"],
  [Wrench, "Equipment"],
  [FileCheck, "Certificate"],
  [Phone, "Call"],
];

const renderIcon = ([Icon, label]: [LucideIcon, string]) => {
  const renderSize = ({ size, stroke }: (typeof SIZES)[number]) => {
    return (
      <Icon
        key={size}
        {...iconProps}
        size={size}
        strokeWidth={stroke}
        className="text-heading"
      />
    );
  };
  return (
    <div
      key={label}
      className="flex flex-col gap-3 rounded-sm border border-border bg-surface p-4"
    >
      <div className="flex items-end gap-4">{SIZES.map(renderSize)}</div>
      <Span $size="small" $weight="600">
        {label}
      </Span>
    </div>
  );
};

/** Lucide at each size with its stroke weight. */
const Icons = () => {
  return (
    <Section
      id="icons"
      number={13}
      title="Icons"
      intro="Lucide only, drawn in currentColor with square caps and mitred joins. Stroke weight drops as size grows so lines look equal: 2 at 16 px, 1.85 at 20, 1.75 at 24, 1.5 at 32. Every icon has a visible label except close, menu and search."
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {SET.map(renderIcon)}
      </div>
      <P $size="small" className="max-w-[68ch] text-fg-muted">
        Not allowed: emoji, filled or 3D icons, and water imagery such as{" "}
        <Droplets aria-hidden="true" className="inline size-4" /> droplets or
        splashes. Shields and seals like{" "}
        <ShieldCheck aria-hidden="true" className="inline size-4" /> read as
        fake approval marks and are also out.
      </P>
    </Section>
  );
};

export default Icons;
