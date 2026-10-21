"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

/*
 * Reads values from the rendered page, so /design shows what the CSS really
 * produces. Re-reads when the theme changes and on resize.
 */

const toHex = (rgb: string): string => {
  const parts =
    rgb
      .match(/[\d.]+/g)
      ?.slice(0, 3)
      .map(Number) ?? [];
  const toPair = (part: number) => {
    return Math.round(part).toString(16).padStart(2, "0");
  };
  return `#${parts.map(toPair).join("")}`;
};

const channel = (value: number) => {
  const c = value / 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
};

const luminance = (rgb: string): number => {
  const [r = 0, g = 0, b = 0] = rgb.match(/[\d.]+/g)?.map(Number) ?? [];
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};

/** WCAG contrast ratio between two computed rgb() colors. */
export const contrast = (a: string, b: string): number => {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => {
    return y - x;
  }) as [number, number];
  return (light + 0.05) / (dark + 0.05);
};

/** The computed rgb() of any CSS color, resolved inside `scope`. */
export const resolveColor = (scope: Element, css: string): string => {
  const probe = document.createElement("span");
  probe.style.color = css;
  probe.hidden = true;
  scope.appendChild(probe);
  const value = getComputedStyle(probe).color;
  probe.remove();
  return value;
};

export interface ColorReading {
  hex: string;
  rgb: string;
}

export const readColor = (scope: Element, css: string): ColorReading => {
  const rgb = resolveColor(scope, css);
  return { hex: toHex(rgb), rgb };
};

/** Runs `read` after mount, after every theme switch and on resize. */
export const useLive = <T>(
  ref: RefObject<Element | null>,
  read: (element: Element) => T,
): T | undefined => {
  const [value, setValue] = useState<T>();

  // the latest `read`, so the subscription below never has to restart
  const readRef = useRef(read);
  const syncRead = () => {
    readRef.current = read;
  };
  useEffect(syncRead);

  const subscribe = () => {
    const update = () => {
      if (ref.current) setValue(readRef.current(ref.current));
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.head, {
      subtree: true,
      childList: true,
      attributes: true,
    });
    window.addEventListener("resize", update);
    const unsubscribe = () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
    return unsubscribe;
  };

  useEffect(subscribe, [ref]);

  return value;
};

export const formatRatio = (ratio: number): string => {
  return `${ratio.toFixed(2)}:1`;
};
