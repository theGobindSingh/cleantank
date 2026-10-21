"use client";

import { useRef } from "react";
import { useLive } from "./live";

interface FontFamilyProps {
  className: string;
}

/** Prints the resolved font stack of a font utility, as the browser sees it. */
const FontFamily = ({ className }: FontFamilyProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  const read = (element: Element) => {
    return getComputedStyle(element).fontFamily.replaceAll('"', "");
  };

  const stack = useLive(ref, read);

  return (
    <code className="font-mono text-(length:--fs-ref) break-all text-fg-muted">
      <span ref={ref} className={className} hidden />
      {stack ?? "…"}
    </code>
  );
};

export default FontFamily;
