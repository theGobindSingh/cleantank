"use client";

import { tw } from "@utils/tw";
import { useRef } from "react";
import {
  contrast,
  formatRatio,
  readColor,
  resolveColor,
  useLive,
} from "./live";

export interface Check {
  label: string;
  /**
   * CSS color to compare with, resolved inside the swatch's own scope, or
   * "ground" for the background the swatch actually sits on.
   */
  css: string;
}

interface SwatchProps {
  /** Any CSS color, e.g. "var(--color-primary-700)". */
  css: string;
  name: string;
  checks?: Check[] | undefined;
  /** Draw as a thick border instead of a fill (for border roles). */
  asBorder?: boolean | undefined;
  highlight?: boolean | undefined;
}

interface Reading {
  hex: string;
  ratios: string[];
}

// the first ancestor with a solid background
const groundColor = (element: Element): string => {
  let node: Element | null = element;
  while (node) {
    const color = getComputedStyle(node).backgroundColor;
    if (!color.endsWith(", 0)") && color !== "transparent") return color;
    node = node.parentElement;
  }
  return "rgb(255, 255, 255)";
};

/** A color chip that prints its real computed hex and contrast ratios. */
const Swatch = ({
  css,
  name,
  checks = [],
  asBorder,
  highlight,
}: SwatchProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const read = (element: Element): Reading => {
    const { hex, rgb } = readColor(element, css);
    const toRatio = (check: Check) => {
      const other =
        check.css === "ground"
          ? groundColor(element)
          : resolveColor(element, check.css);
      const ratio = contrast(rgb, other);
      return `${check.label} ${formatRatio(ratio)}`;
    };
    return { hex, ratios: checks.map(toRatio) };
  };

  const reading = useLive(ref, read);

  const renderRatio = (ratio: string) => {
    return <li key={ratio}>{ratio}</li>;
  };

  return (
    <div ref={ref} className="flex min-w-0 flex-col gap-1.5">
      <div
        aria-hidden="true"
        className={tw(
          "h-14 rounded-xs border border-border",
          highlight && "outline-2 outline-offset-2 outline-fg",
        )}
        style={
          asBorder
            ? { borderColor: css, borderWidth: 4 }
            : { backgroundColor: css }
        }
      />
      <span className="font-mono text-(length:--fs-caption) font-semibold">
        {name}
      </span>
      <span className="font-mono text-(length:--fs-caption) text-fg-muted">
        {reading?.hex ?? "…"}
      </span>
      {checks.length > 0 && (
        <ul className="font-mono text-(length:--fs-ref) leading-snug text-fg-muted">
          {reading?.ratios.map(renderRatio)}
        </ul>
      )}
    </div>
  );
};

export default Swatch;
