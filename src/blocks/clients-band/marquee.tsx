"use client";

import { iconButtonStyles } from "@components/button/styles";
import { iconProps } from "@components/icon";
import { PauseIcon, PlayIcon } from "lucide-react";
import { useState, type ReactNode } from "react";

interface MarqueeProps {
  pauseLabel: string;
  playLabel: string;
  children: ReactNode;
}

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
          <PlayIcon {...iconProps} className="size-5" />
        ) : (
          <PauseIcon {...iconProps} className="size-5" />
        )}
      </button>
    </div>
  );
};

export default Marquee;
