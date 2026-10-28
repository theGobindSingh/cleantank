import type { ServiceAreaBlock } from "@/payload-types";
import {
  BOUNDARY,
  CHANDIGARH_UT,
  CORE,
  MEASURE,
  PLACES,
  RIVERS,
  ROADS,
  VIEW_BOX,
} from "./map-data";

type MapLabels = ServiceAreaBlock["map"];

const [[measureX, measureTop], [, measureBottom]] = MEASURE;
const [chdX, chdY] = PLACES.chandigarh;
const [mohX, mohY] = PLACES.mohali;
const [pklX, pklY] = PLACES.panchkula;

/**
 * The tri-city from OpenStreetMap data: built-up land as one shaded area, the
 * Chandigarh UT boundary, main roads and rivers, inside a dashed line 20 km
 * beyond the area's edge. North is up. Decorative to screen readers: the
 * caption says the same in words.
 */
const AreaMap = ({ chandigarh, mohali, panchkula, radius }: MapLabels) => {
  return (
    <svg
      viewBox={VIEW_BOX}
      aria-hidden="true"
      // larger in viewBox units where the map is drawn smaller (phones, and five columns from lg)
      className="h-auto w-full font-sans text-[20px] font-semibold md:text-[14px] lg:text-[17px]"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d={BOUNDARY}
        className="stroke-border-strong"
        strokeWidth="1.5"
        strokeDasharray="6 6"
      />
      <path
        d={CORE}
        // dark mode's secondary-bg is the panel's own colour, so the area takes a darker step
        className="fill-secondary-bg stroke-border-strong dark:fill-primary-800"
        strokeWidth="2"
      />
      <path d={RIVERS} className="stroke-secondary-border" strokeWidth="1.25" />
      <path d={ROADS} className="stroke-border" strokeWidth="1.5" />
      <path
        d={CHANDIGARH_UT}
        className="stroke-secondary-border"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      {/* 20 km, from the area's south edge to the dashed boundary */}
      <g className="stroke-heading" strokeWidth="1.5" strokeLinecap="square">
        <line x1={measureX} y1={measureTop} x2={measureX} y2={measureBottom} />
        <line
          x1={measureX - 7}
          y1={measureBottom}
          x2={measureX + 7}
          y2={measureBottom}
        />
      </g>
      <rect
        x={chdX - 6}
        y={chdY - 6}
        width="12"
        height="12"
        className="fill-marker"
      />
      <rect
        x={mohX - 4.5}
        y={mohY - 4.5}
        width="9"
        height="9"
        className="fill-heading"
      />
      <rect
        x={pklX - 4.5}
        y={pklY - 4.5}
        width="9"
        height="9"
        className="fill-heading"
      />
      {/* labels sit on a halo in the panel's colour, so lines under them don't cut through */}
      <g
        className="fill-heading stroke-surface"
        strokeWidth="5"
        paintOrder="stroke"
      >
        <text x={chdX + 10} y={chdY - 10}>
          {chandigarh}
        </text>
        <text x={mohX - 10} y={mohY + 18} textAnchor="end">
          {mohali}
        </text>
        <text x={pklX + 10} y={pklY + 16}>
          {panchkula}
        </text>
        <text
          x={measureX + 10}
          y={(measureTop + measureBottom) / 2 + 6}
          className="text-[18px] md:text-[12px] lg:text-[15px]"
        >
          {radius}
        </text>
      </g>
      <g className="fill-fg-muted text-[18px] md:text-[12px] lg:text-[15px]">
        <text x="24" y="28" textAnchor="middle">
          N
        </text>
        <path d="M24 34 L19 48 L29 48 Z" />
      </g>
    </svg>
  );
};

export default AreaMap;
