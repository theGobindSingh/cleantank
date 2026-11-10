"use client";

import { tw } from "@utils/tw";
import Image from "next/image";
import { useRef, useState, type ChangeEvent, type CSSProperties } from "react";
import Divider from "./divider";
import { HERO_IMAGE, INLINE_IMAGE } from "./image-props";
import { countOneMore, NARROW_START } from "./intro";
import Scrim from "./scrim";
import { useDrag } from "./use-drag";
import { useFullyVisible } from "./use-fully-visible";
import { useIntro } from "./use-intro";

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
  /** Where the intro glides to (0 to 100) from `lg` up before settling. Defaults to 15 past the settle point. */
  widePeak?: number | undefined;
  /**
   * Selector, within the slider's parent, of the text laid over the photos
   * from `lg` up. The intro settles `wideGap` px right of where that text
   * ends, so it fits every language. Without it, the divider settles centred.
   */
  wideClear?: string | undefined;
  /** Gap in px between the end of the `wideClear` text and the settled divider. */
  wideGap?: number | undefined;
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
  /** Photos scroll slower than the page as it scrolls away (parallax.css). For the hero only. */
  hasParallax?: boolean | undefined;
  className?: string | undefined;
}

/**
 * Two aligned photos: before left of a divider the visitor drags, after
 * right of it (owner's call), the after photo clipped at the divider. A
 * transparent native range input does the work, so pointer, touch and arrow
 * keys all behave as a slider; the visible handle mirrors its focus. Both
 * photos are anchored at the bottom-right corner, so whatever the frame's
 * shape, that corner stays in view and only the other edges are cropped
 * (owner's call).
 */
const CompareSlider = ({
  before,
  after,
  label,
  beforeLabel,
  afterLabel,
  widePeak,
  wideClear,
  wideGap = 40,
  handleClassName = "bottom-4",
  scrimColor,
  isInline = false,
  hasParallax = false,
  className,
}: CompareSliderProps) => {
  const [position, setPosition] = useState(isInline ? NARROW_START : 0);
  const [loadedCount, setLoadedCount] = useState(0);
  const frameRef = useRef(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isVisible = useFullyVisible(rootRef);
  const isReady = loadedCount >= 2 && isVisible;

  useIntro(rootRef, frameRef, setPosition, {
    isInline,
    isReady,
    widePeak,
    wideClear,
    wideGap,
  });

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
  const imageProps = isInline ? INLINE_IMAGE : HERO_IMAGE;
  const photoClassName = tw(
    "object-cover object-bottom-right",
    hasParallax && "parallax-photo",
  );

  return (
    <div
      ref={rootRef}
      {...dragHandlers}
      className={tw(
        "group relative cursor-ew-resize touch-pan-y overflow-hidden bg-primary-900 select-none",
        hasParallax && "parallax-frame",
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
        className={photoClassName}
      />
      <Image
        src={after.src}
        alt={after.alt}
        fill
        {...imageProps}
        onLoad={countLoad}
        className={tw(photoClassName, "[clip-path:inset(0_0_0_var(--split))]")}
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
