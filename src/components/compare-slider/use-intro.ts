import { useEffect, type RefObject } from "react";
import { clearOf, INTRO_MS, introAt, NARROW_START } from "./intro";

interface IntroOptions {
  isInline: boolean;
  isReady: boolean;
  widePeak: number | undefined;
  wideClear: string | undefined;
  wideGap: number;
}

/**
 * Once both photos have loaded and the whole comparison is on screen (after
 * hydration, so the server HTML and first render agree), the divider eases
 * from 0 past its start (from lg up `wideGap` px right of the `wideClear`
 * text, otherwise the centre), to `widePeak` if given, and settles
 * back on it. Reduced motion jumps straight there; dragging stops the glide.
 */
export const useIntro = (
  rootRef: RefObject<HTMLDivElement | null>,
  frameRef: RefObject<number>,
  setPosition: (position: number) => void,
  { isInline, isReady, widePeak, wideClear, wideGap }: IntroOptions,
) => {
  const playIntro = () => {
    if (isInline || !isReady) return;
    const isWide = window.matchMedia("(min-width: 1024px)").matches;
    const target = isWide
      ? (clearOf(rootRef.current, wideClear, wideGap) ?? NARROW_START)
      : NARROW_START;
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
  useEffect(playIntro, [
    rootRef,
    frameRef,
    setPosition,
    isInline,
    isReady,
    widePeak,
    wideClear,
    wideGap,
  ]);
};
