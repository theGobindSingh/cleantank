"use client";

import { tw } from "@utils/tw";
import { useRef } from "react";
import type { ScaleStep } from "./data";
import { useLive } from "./live";

// Mirrors the h1 to h3 base style in defaults.css, on a <p> so the page keeps one h1
const FACE_CLASS: Record<ScaleStep["face"], string> = {
  heading:
    "font-heading leading-none font-bold tracking-[0.01em] text-heading uppercase [font-stretch:78%]",
  body: "font-sans",
  mono: "font-mono font-medium tracking-[0.1em] uppercase",
};

interface Reading {
  size: string;
  lineHeight: string;
  formula: string;
  family: string;
}

const px = (value: string) => {
  return `${Number.parseFloat(value).toFixed(2)} px`;
};

/** A type-scale step rendered for real, with its computed size at this viewport. */
const TypeSample = ({ token, face, sample, use }: ScaleStep) => {
  const ref = useRef<HTMLParagraphElement>(null);

  const read = (element: Element): Reading => {
    const style = getComputedStyle(element);
    const formula = getComputedStyle(document.documentElement)
      .getPropertyValue(`--fs-${token}`)
      .trim();
    return {
      size: px(style.fontSize),
      lineHeight:
        style.lineHeight === "normal" ? "normal" : px(style.lineHeight),
      formula,
      family: style.fontFamily.split(",")[0]?.replaceAll('"', "") ?? "",
    };
  };

  const reading = useLive(ref, read);

  return (
    <div className="grid gap-3 border-b border-border py-5 md:grid-cols-[12rem_1fr]">
      <div className="flex flex-col gap-1 font-mono text-(length:--fs-caption)">
        <span className="font-semibold">--fs-{token}</span>
        <span className="text-fg-muted">{use}</span>
        <span className="text-fg-muted">
          {reading ? `${reading.size} / ${reading.lineHeight}` : "…"}
        </span>
      </div>
      <div className="flex min-w-0 flex-col gap-2">
        <p
          ref={ref}
          className={tw(
            "m-0",
            token === "h4" && "font-semibold",
            FACE_CLASS[face],
          )}
          style={{ fontSize: `var(--fs-${token})` }}
        >
          {sample}
        </p>
        <code className="font-mono text-(length:--fs-ref) break-all text-fg-muted">
          {reading?.formula}
        </code>
      </div>
    </div>
  );
};

export default TypeSample;
