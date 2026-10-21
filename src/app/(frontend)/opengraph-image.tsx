import { site } from "@/site";
import { ImageResponse } from "next/og";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ImageResponse can't read CSS variables, so these mirror the light theme in
// src/styles/colors.css (white, primary-700, grey-600, band).
const COLORS = {
  bg: "#ffffff",
  fg: "#20334b",
  muted: "#65655f",
  band: "#20334b",
};

/** Default social preview image, generated at build time. */
const OpengraphImage = () => {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 24,
        width: "100%",
        height: "100%",
        padding: 96,
        background: COLORS.bg,
        borderTop: `16px solid ${COLORS.band}`,
      }}
    >
      <div style={{ fontSize: 72, fontWeight: 700, color: COLORS.fg }}>
        {site.name}
      </div>
      <div style={{ fontSize: 36, color: COLORS.muted }}>{site.descriptor}</div>
    </div>,
    size,
  );
};

export default OpengraphImage;
