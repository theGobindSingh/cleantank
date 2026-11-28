"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

interface FitLineProps {
  children: ReactNode;
}

const measure = (element: Element) => {
  return element.getBoundingClientRect().width;
};

/**
 * A heading line whose font size grows until its width matches the line
 * before it (James's call, CT-465). Size and tracking scale together, so the
 * type is never stretched; the size is set in em, so it follows the heading's
 * responsive size, and it is measured again when the fonts load or that line
 * resizes. Before hydration the line shows at the heading's own size.
 */
const FitLine = ({ children }: FitLineProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const line = ref.current;
    const previous = line?.previousElementSibling;
    if (!line || !previous) return;

    const fit = () => {
      line.style.fontSize = "";
      // two passes: the second takes up any rounding the first leaves
      let scale = measure(previous) / measure(line);
      line.style.fontSize = `${scale}em`;
      scale *= measure(previous) / measure(line);
      line.style.fontSize = `${scale}em`;
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(previous);
    void document.fonts.ready.then(fit);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <span ref={ref} className="block w-fit">
      {children}
    </span>
  );
};

export default FitLine;
