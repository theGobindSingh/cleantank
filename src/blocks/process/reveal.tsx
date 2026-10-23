"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  className?: string;
  children: ReactNode;
}

/**
 * Sets `data-shown` once its top rises above the bottom 15% of the screen, so
 * the CSS in process.css can play the step track's one sequence. Stays set after that.
 */
const Reveal = ({ className, children }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isShown, setIsShown] = useState(false);

  const watch = () => {
    const element = ref.current;
    if (!element) return;
    const handleIntersect = ([entry]: IntersectionObserverEntry[]) => {
      if (!entry?.isIntersecting) return;
      setIsShown(true);
      observer.disconnect();
    };
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "0px 0px -15% 0px",
    });
    const stop = () => {
      observer.disconnect();
    };
    observer.observe(element);
    return stop;
  };
  useEffect(watch, []);

  return (
    <div ref={ref} data-shown={isShown ? "" : undefined} className={className}>
      {children}
    </div>
  );
};

export default Reveal;
