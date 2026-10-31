import { H3, P } from "@components/html";
import { BREAKPOINTS } from "./data";
import Viewport from "./viewport";

const renderBreakpoint = (breakpoint: (typeof BREAKPOINTS)[number]) => {
  return (
    <tr key={breakpoint.name} className="border-b border-border">
      <th scope="row" className="p-3 text-left font-mono font-semibold">
        {breakpoint.name}
      </th>
      <td className="p-3 text-right font-mono tabular-nums">
        {breakpoint.min} px
      </td>
      <td className="p-3 text-right font-mono tabular-nums">
        {breakpoint.columns}
      </td>
    </tr>
  );
};

/** The breakpoint table with the live window width. */
const Breakpoints = () => {
  return (
    <div className="flex flex-col gap-3">
      <H3 $margin="0">Breakpoints</H3>
      <P $size="small">
        Your window: <Viewport />
      </P>
      {/* focusable so keyboard users can scroll it */}
      <div
        role="region"
        aria-label="Breakpoints table"
        tabIndex={0}
        className="overflow-x-auto rounded-sm border border-border"
      >
        <table className="w-full border-collapse text-(length:--fs-small)">
          <thead>
            <tr className="bg-band text-white">
              <th
                scope="col"
                className="p-3 text-left font-mono text-(length:--fs-caption) uppercase"
              >
                Name
              </th>
              <th
                scope="col"
                className="p-3 text-right font-mono text-(length:--fs-caption) uppercase"
              >
                From
              </th>
              <th
                scope="col"
                className="p-3 text-right font-mono text-(length:--fs-caption) uppercase"
              >
                Columns
              </th>
            </tr>
          </thead>
          <tbody className="bg-surface">
            {BREAKPOINTS.map(renderBreakpoint)}
          </tbody>
        </table>
      </div>
      <P $size="small" className="text-fg-muted">
        Margins 16, 32 and 40 px; gutters 16 then 24 px. Section gaps 32, 40 and
        48 px. The tables here follow the table rule: navy header row in mono
        caps, 1 px lines, numbers right-aligned in tabular figures, no zebra
        stripes.
      </P>
    </div>
  );
};

export default Breakpoints;
