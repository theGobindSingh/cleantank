"use client";

import { useRef, type ReactNode } from "react";
import { useLive } from "./live";

interface ComputedProps {
  children: ReactNode;
  /** CSS properties to print, read from the first child element. */
  properties: string[];
}

/** Renders its child and prints the child's computed styles under it. */
const Computed = ({ children, properties }: ComputedProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const read = (element: Element) => {
    const target = element.firstElementChild ?? element;
    const style = getComputedStyle(target);
    const toLine = (property: string) => {
      return `${property}: ${style.getPropertyValue(property)}`;
    };
    return properties.map(toLine);
  };

  const lines = useLive(ref, read);

  const renderLine = (line: string) => {
    return <li key={line}>{line}</li>;
  };

  return (
    <div className="flex min-w-0 flex-col gap-2">
      <div ref={ref}>{children}</div>
      <ul className="font-mono text-(length:--fs-ref) text-fg-muted">
        {lines?.map(renderLine)}
      </ul>
    </div>
  );
};

export default Computed;
