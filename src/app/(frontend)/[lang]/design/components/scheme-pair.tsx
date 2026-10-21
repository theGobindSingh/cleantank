import { Span } from "@components/html";
import type { ReactNode } from "react";

export type Scheme = "light" | "dark";

const SCHEMES: Scheme[] = ["light", "dark"];

interface SchemePairProps {
  /** Called once per mode; use the argument to keep ids unique. */
  render: (scheme: Scheme) => ReactNode;
  className?: string | undefined;
}

/** Shows the same content in light and dark mode side by side, whatever the page theme. */
const SchemePair = ({ render, className }: SchemePairProps) => {
  const renderScheme = (scheme: Scheme) => {
    return (
      <div
        key={scheme}
        data-scheme={scheme}
        className="flex min-w-0 flex-col gap-4 rounded-sm border border-border bg-bg p-4 text-fg md:p-6"
      >
        <Span
          $size="caption"
          className="font-mono font-semibold tracking-[0.08em] text-fg-muted uppercase"
        >
          {scheme} mode
        </Span>
        <div className={className}>{render(scheme)}</div>
      </div>
    );
  };

  return (
    <div className="grid gap-4 lg:grid-cols-2">{SCHEMES.map(renderScheme)}</div>
  );
};

export default SchemePair;
