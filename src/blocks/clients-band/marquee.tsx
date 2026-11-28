"use client";

import { iconButtonStyles } from "@components/button/styles";
import { iconProps } from "@components/icon";
import { PauseIcon, PlayIcon } from "lucide-react";
import { useRef, useState, type PointerEvent, type ReactNode } from "react";

interface MarqueeProps {
  pauseLabel: string;
  playLabel: string;
  children: ReactNode;
}

// a full stop or start takes this long; a partial change takes its share
const RAMP_MS = 500;

const easeInOut = (t: number) => {
  return 0.5 - Math.cos(Math.PI * t) / 2;
};

/**
 * Holds the scrolling track and the button that stops it (WCAG 2.2.2). A
 * mouse or pen over it brakes the track to a stop and leaving speeds it back
 * up, from whatever speed it has, so it never jumps (James's call, CT-465).
 * The pause button and focus still stop it at once (clients-band.css); under
 * reduced motion the track has no animation, so there is nothing to ramp.
 */
const Marquee = ({ pauseLabel, playLabel, children }: MarqueeProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);

  const getAnimation = () => {
    return wrapperRef.current?.getAnimations({ subtree: true })[0];
  };

  const rampTo = (target: number) => {
    const animation = getAnimation();
    // a paused track with playbackRate 0 is drawn at its start in Chromium,
    // so no ramps while paused
    if (!animation || isPaused) return;
    cancelAnimationFrame(frameRef.current);
    const from = animation.playbackRate;
    const duration = RAMP_MS * Math.abs(target - from);
    const start = performance.now();
    const step = (now: number) => {
      const t = duration ? Math.min((now - start) / duration, 1) : 1;
      // setting playbackRate keeps currentTime, so the logos never jump
      animation.playbackRate = from + (target - from) * easeInOut(t);
      if (t < 1) frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
  };

  // touch has no hover, so a tap must not leave the track braked
  const handlePointerEnter = (event: PointerEvent) => {
    if (event.pointerType !== "touch") rampTo(0);
  };

  const handlePointerLeave = (event: PointerEvent) => {
    if (event.pointerType !== "touch") rampTo(1);
  };

  // the button acts at once: any ramp stops and the track keeps full speed,
  // so pausing never holds a rate of 0 and play moves straight away
  const handleToggle = () => {
    cancelAnimationFrame(frameRef.current);
    const animation = getAnimation();
    if (animation) animation.playbackRate = 1;
    setIsPaused(!isPaused);
  };

  return (
    <div
      ref={wrapperRef}
      data-paused={isPaused ? "" : undefined}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
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
