"use client";

import { useRef } from "react";
import type { Pair } from "./data";
import { contrast, formatRatio, resolveColor, useLive } from "./live";

const verdict = (ratio: number, large: boolean | undefined) => {
  if (ratio >= 7) return "AAA";
  if (ratio >= 4.5) return "AA";
  if (ratio >= 3) return large ? "AA large" : "Large and UI only";
  return "Fails";
};

/** A text sample on its ground with the live WCAG ratio. */
const PairSample = ({ fg, bg, label, large }: Pair) => {
  const ref = useRef<HTMLDivElement>(null);

  const read = (element: Element) => {
    const ratio = contrast(
      resolveColor(element, fg),
      resolveColor(element, bg),
    );
    return `${formatRatio(ratio)} · ${verdict(ratio, large)}`;
  };

  const result = useLive(ref, read);

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <div
        className="flex h-16 items-center rounded-xs border border-border px-4"
        style={{ backgroundColor: bg, color: fg }}
      >
        {/* large-only pairs are shown large, the only way they may be used */}
        <span
          className={
            large
              ? "text-(length:--fs-h3) font-bold"
              : "text-(length:--fs-body) font-semibold"
          }
        >
          Clean Tank 20,000 L
        </span>
      </div>
      <span className="text-(length:--fs-small) font-semibold">{label}</span>
      <span className="font-mono text-(length:--fs-caption) text-fg-muted">
        {result ?? "…"}
      </span>
    </div>
  );
};

export default PairSample;
