"use client";

import { iconButtonStyles } from "@components/button/styles";
import { PauseIcon, PlayIcon } from "lucide-react";
import { useState, type ReactNode } from "react";

interface MarqueeProps {
  pauseLabel: string;
  playLabel: string;
  children: ReactNode;
}

const ICON_PROPS = {
  "aria-hidden": true,
  strokeWidth: 1.85,
  strokeLinecap: "square",
  strokeLinejoin: "miter",
} as const;

/** Holds the scrolling track and the button that stops it (WCAG 2.2.2). */
const Marquee = ({ pauseLabel, playLabel, children }: MarqueeProps) => {
  const [isPaused, setIsPaused] = useState(false);

  const handleToggle = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div
      data-paused={isPaused ? "" : undefined}
      className="flex min-w-0 grow items-center gap-4"
    >
      {children}
      <button
        type="button"
        onClick={handleToggle}
        aria-label={isPaused ? playLabel : pauseLabel}
        className={`${iconButtonStyles} shrink-0 motion-reduce:hidden`}
      >
        {isPaused ? (
          <PlayIcon {...ICON_PROPS} className="size-5" />
        ) : (
          <PauseIcon {...ICON_PROPS} className="size-5" />
        )}
      </button>
    </div>
  );
};

export default Marquee;
