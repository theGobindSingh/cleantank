"use client";

import { tw } from "@utils/tw";
import { ChevronsLeftRightIcon } from "lucide-react";
import Image from "next/image";
import {
  useEffect,
  useState,
  type ChangeEvent,
  type CSSProperties,
} from "react";

export interface CompareImage {
  src: string;
  alt: string;
}

interface CompareSliderProps {
  before: CompareImage;
  after: CompareImage;
  /** Accessible name of the range control. */
  label: string;
  beforeLabel: string;
  afterLabel: string;
  /** Divider position (0 to 100) from `lg` up, where the hero text covers the left. */
  wideStart?: number | undefined;
  className?: string | undefined;
}

const LABEL_CLASS =
  "pointer-events-none absolute bottom-4 bg-primary-900/70 px-2 py-1 font-mono text-(length:--fs-caption) font-medium tracking-[0.08em] text-white uppercase";

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
  wideStart = 50,
  className,
}: CompareSliderProps) => {
  const [position, setPosition] = useState(50);

  // Runs once after hydration, so the server HTML and first render agree.
  const startWide = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setPosition(wideStart);
    }
  };
  useEffect(startWide, [wideStart]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPosition(Number(event.target.value));
  };

  return (
    <div
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
        className="object-cover"
      />
      <Image
        src={after.src}
        alt={after.alt}
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="object-cover [clip-path:inset(0_0_0_var(--split))]"
      />
      <span
        aria-hidden="true"
        className={tw(LABEL_CLASS, "right-[calc(100%-var(--split)+0.75rem)]")}
      >
        {beforeLabel}
      </span>
      <span
        aria-hidden="true"
        className={tw(LABEL_CLASS, "left-[calc(var(--split)+0.75rem)]")}
      >
        {afterLabel}
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={handleChange}
        aria-label={label}
        aria-valuetext={`${beforeLabel} ${position}%, ${afterLabel} ${100 - position}%`}
        className="peer absolute inset-0 size-full cursor-ew-resize touch-pan-y opacity-0"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-(--split) w-0.5 -translate-x-1/2 bg-white"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-(--split) flex size-11 -translate-1/2 items-center justify-center rounded-xs border-2 border-white bg-primary-900 text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white"
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
