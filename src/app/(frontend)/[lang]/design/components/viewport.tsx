"use client";

import { useRef } from "react";
import { BREAKPOINTS } from "./data";
import { useLive } from "./live";

/** The current window width and which breakpoint it falls in. */
const Viewport = () => {
  const ref = useRef<HTMLSpanElement>(null);

  const read = () => {
    const width = window.innerWidth;
    const isActive = (breakpoint: (typeof BREAKPOINTS)[number]) => {
      return width >= breakpoint.min;
    };
    const current = BREAKPOINTS.findLast(isActive);
    return `${width} px · ${current?.name ?? "base"} · ${current?.columns ?? 4} columns`;
  };

  const value = useLive(ref, read);

  return (
    <span
      ref={ref}
      aria-live="polite"
      className="font-mono text-(length:--fs-small) font-semibold"
    >
      {value ?? "…"}
    </span>
  );
};

export default Viewport;
