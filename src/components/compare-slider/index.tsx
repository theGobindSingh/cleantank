"use client";

import { tw } from "@utils/tw";
import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type CSSProperties,
} from "react";
import Divider from "./divider";
import { HERO_IMAGE, INLINE_IMAGE } from "./image-props";
import { countOneMore, INTRO_MS, introAt, NARROW_START } from "./intro";
import Scrim from "./scrim";
import { useDrag } from "./use-drag";
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
  /** Where the intro glides to from `lg` up before settling on `wideStart`. Defaults to 15 past it. */
  widePeak?: number | undefined;
  /** Edge the photos are cropped towards when the frame cuts their top and bottom. */
  cropEdge?: "top" | "bottom" | undefined;
  /** How far in from `cropEdge` the photos sit, in percent of the cropped-off height. */
  cropOffset?: number | undefined;
  /** Vertical position of the drag handle, so it can clear text laid over the photos. */
  handleClassName?: string | undefined;
  /**
   * Colour of a scrim laid over the photos, under the divider and handle, so
   * text on top stays readable. Any CSS colour, e.g. `var(--color-accent-950)`.
   * Leave it out for no scrim.
   */
  scrimColor?: string | undefined;
  /**
   * For comparisons inside a page rather than the hero: no opening glide,
   * divider centred, photos lazy-loaded at about half the screen width.
   */
  isInline?: boolean | undefined;
  className?: string | undefined;
}

/**
 * Two aligned photos: before left of a divider the visitor drags, after
 * right of it (owner's call), the after photo clipped at the divider. A
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
  widePeak,
  cropEdge = "bottom",
  cropOffset = 10,
  handleClassName = "bottom-4",
  scrimColor,
  isInline = false,
  className,
}: CompareSliderProps) => {
  const [position, setPosition] = useState(isInline ? NARROW_START : 0);
  const [loadedCount, setLoadedCount] = useState(0);
  const frameRef = useRef(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isVisible = useFullyVisible(rootRef);
  const isReady = loadedCount >= 2 && isVisible;

  // Once both photos have loaded and the whole comparison is on screen (after
  // hydration, so the server HTML and first render agree), the divider eases
  // from 0 past its start (`wideStart` from lg up, the centre below), to
  // `widePeak` if given, and settles back on it. Reduced motion jumps straight there; dragging stops
  // the glide.
  const playIntro = () => {
    if (isInline || !isReady) return;
    const isWide = window.matchMedia("(min-width: 1024px)").matches;
    const target = isWide ? wideStart : NARROW_START;
    const peak = isWide ? widePeak : undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPosition(target);
      return;
    }
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      setPosition(introAt(elapsed, target, peak));
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
  useEffect(playIntro, [isInline, isReady, wideStart, widePeak]);

  const countLoad = () => {
    setLoadedCount(countOneMore);
  };

  const moveTo = (next: number) => {
    cancelAnimationFrame(frameRef.current);
    setPosition(next);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    moveTo(Number(event.target.value));
  };
  const dragHandlers = useDrag(rootRef, inputRef, moveTo);
  const rounded = Math.round(position);
  const imageStyle = {
    objectPosition: `left 50% ${cropEdge} ${cropOffset}%`,
  };
  const imageProps = isInline ? INLINE_IMAGE : HERO_IMAGE;

  return (
    <div
      ref={rootRef}
      {...dragHandlers}
      className={tw(
        "group relative cursor-ew-resize touch-pan-y overflow-hidden bg-primary-900 select-none",
        className,
      )}
      style={
        { "--split": `${position}%`, "--scrim": scrimColor } as CSSProperties
      }
    >
      <Image
        src={before.src}
        alt={before.alt}
        fill
        {...imageProps}
        onLoad={countLoad}
        style={imageStyle}
        className="object-cover"
      />
      <Image
        src={after.src}
        alt={after.alt}
        fill
        {...imageProps}
        onLoad={countLoad}
        style={imageStyle}
        className="object-cover [clip-path:inset(0_0_0_var(--split))]"
      />
      {scrimColor && <Scrim />}
      {/* keyboard and screen readers only; the root handles pointers */}
      <input
        ref={inputRef}
        type="range"
        min={0}
        max={100}
        value={rounded}
        onChange={handleChange}
        aria-label={label}
        aria-valuetext={`${beforeLabel} ${rounded}%, ${afterLabel} ${100 - rounded}%`}
        className="peer pointer-events-none absolute inset-0 size-full opacity-0"
      />
      <Divider handleClassName={handleClassName} />
    </div>
  );
};

export default CompareSlider;
