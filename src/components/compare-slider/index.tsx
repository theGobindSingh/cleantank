"use client";

import { tw } from "@utils/tw";
import { ChevronsLeftRightIcon } from "lucide-react";
import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type CSSProperties,
} from "react";
import { countOneMore, INTRO_MS, introAt, NARROW_START } from "./intro";
import { useFullyVisible } from "./use-fully-visible";

export interface CompareImage {
  src: string;
  alt: string;
}

interface CompareSliderProps {
  before: CompareImage;
  after: CompareImage;
  /** Accessible name of the range control. */
  label: string;
  /** Names of the two photos, read out by screen readers with the position. */
  beforeLabel: string;
  afterLabel: string;
  /** Divider position (0 to 100) from `lg` up, where the hero text covers the left. */
  wideStart?: number | undefined;
  className?: string | undefined;
}

/**
 * Two aligned photos, the second clipped at a divider the visitor drags. A
 * transparent native range input does the work, so pointer, touch and arrow
 * keys all behave as a slider; the visible handle mirrors its focus.
 */
const CompareSlider = ({
  before,
  after,
  label,
  beforeLabel,
  afterLabel,
  wideStart = 0,
  className,
}: CompareSliderProps) => {
  const [position, setPosition] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const frameRef = useRef(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const isVisible = useFullyVisible(rootRef);
  const isReady = loadedCount >= 2 && isVisible;

  // Once both photos have loaded and the whole comparison is on screen (after
  // hydration, so the server HTML and first render agree), the divider eases
  // from 0 past its start (`wideStart` from lg up, the centre below) and
  // settles back on it. Reduced motion jumps straight there; dragging stops
  // the glide.
  const playIntro = () => {
    if (!isReady) return;
    const target = window.matchMedia("(min-width: 1024px)").matches
      ? wideStart
      : NARROW_START;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPosition(target);
      return;
    }
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      setPosition(introAt(elapsed, target));
      if (elapsed < INTRO_MS) {
        frameRef.current = requestAnimationFrame(step);
      }
    };
    const stop = () => {
      cancelAnimationFrame(frameRef.current);
    };
    frameRef.current = requestAnimationFrame(step);
    return stop;
  };
  useEffect(playIntro, [isReady, wideStart]);

  const countLoad = () => {
    setLoadedCount(countOneMore);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    cancelAnimationFrame(frameRef.current);
    setPosition(Number(event.target.value));
  };
  const rounded = Math.round(position);

  return (
    <div
      ref={rootRef}
      className={tw("relative overflow-hidden bg-primary-900", className)}
      style={{ "--split": `${position}%` } as CSSProperties}
    >
      <Image
        src={before.src}
        alt={before.alt}
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        onLoad={countLoad}
        className="object-cover"
      />
      <Image
        src={after.src}
        alt={after.alt}
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        onLoad={countLoad}
        className="object-cover [clip-path:inset(0_0_0_var(--split))]"
      />
      <input
        type="range"
        min={0}
        max={100}
        value={rounded}
        onChange={handleChange}
        aria-label={label}
        aria-valuetext={`${beforeLabel} ${rounded}%, ${afterLabel} ${100 - rounded}%`}
        className="peer absolute inset-0 size-full cursor-ew-resize touch-pan-y opacity-0"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-(--split) w-0.5 -translate-x-1/2 bg-white"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-(--split) flex size-11 -translate-x-1/2 items-center justify-center rounded-xs border-2 border-white bg-primary-900 text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white"
      >
        <ChevronsLeftRightIcon
          className="size-5"
          strokeWidth={1.85}
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </span>
    </div>
  );
};

export default CompareSlider;
