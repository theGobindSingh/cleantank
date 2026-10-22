import { useEffect, useState, type RefObject } from "react";

// Ratios round below 1 at fractional sizes, so "fully" allows a sliver.
const FULL = 0.99;

/**
 * True once the element has been wholly on screen, below the fixed header
 * (--header-height, defaults.css). Stays true after that.
 */
export const useFullyVisible = (ref: RefObject<HTMLElement | null>) => {
  const [isVisible, setIsVisible] = useState(false);

  const watch = () => {
    const element = ref.current;
    if (!element) return;
    const root = document.documentElement;
    const headerPx =
      parseFloat(getComputedStyle(root).getPropertyValue("--header-height")) *
      parseFloat(getComputedStyle(root).fontSize);
    const handleIntersect = ([entry]: IntersectionObserverEntry[]) => {
      if (!entry || entry.intersectionRatio < FULL) return;
      setIsVisible(true);
      observer.disconnect();
    };
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: FULL,
      rootMargin: `-${headerPx || 0}px 0px 0px 0px`,
    });
    const stop = () => {
      observer.disconnect();
    };
    observer.observe(element);
    return stop;
  };
  useEffect(watch, [ref]);

  return isVisible;
};
