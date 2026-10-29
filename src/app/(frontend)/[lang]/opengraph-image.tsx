import { site } from "@/site";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = `${site.name}: ${site.descriptor}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ImageResponse can't read CSS variables, so these mirror the light theme in
// src/styles/colors.css (white, primary-700, grey-600, accent-500, primary-200).
const COLORS = {
  bg: "#ffffff",
  fg: "#20334b",
  muted: "#65655f",
  marker: "#ee7555",
  onBand: "#ffffff",
  bandMuted: "#bfcfe3",
};

// Static instances of the site fonts: satori can't use variable fonts or next/font.
const loadFont = (file: string) => {
  return readFile(join(process.cwd(), "public/assets/fonts", file));
};

/** Default social preview image, generated at build time. */
const OpengraphImage = async () => {
  const [heading, sans, mono] = await Promise.all([
    loadFont("anek-latin-condensed-700.ttf"),
    loadFont("anek-latin-500.ttf"),
    loadFont("ibm-plex-mono-500.ttf"),
  ]);

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: COLORS.bg,
        fontFamily: "Anek",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexGrow: 1,
          padding: "0 88px",
        }}
      >
        <div
          style={{
            fontFamily: "Plex Mono",
            fontSize: 24,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: COLORS.muted,
          }}
        >
          {site.endorsement}
        </div>
        <div
          style={{
            marginTop: 12,
            fontFamily: "Anek Condensed",
            fontSize: 124,
            lineHeight: 1,
            textTransform: "uppercase",
            color: COLORS.fg,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 28,
            width: 120,
            height: 8,
            background: COLORS.marker,
          }}
        />
        <div style={{ marginTop: 28, fontSize: 44, color: COLORS.muted }}>
          {site.descriptor}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 120,
          padding: "0 88px",
          background: COLORS.fg,
        }}
      >
        <div style={{ fontSize: 44, color: COLORS.onBand }}>{site.tagline}</div>
        <div
          style={{
            fontFamily: "Plex Mono",
            fontSize: 24,
            letterSpacing: 2,
            color: COLORS.bandMuted,
          }}
        >
          {`${site.iso.standard} certified`}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Anek Condensed", data: heading, weight: 700 },
        { name: "Anek", data: sans, weight: 500 },
        { name: "Plex Mono", data: mono, weight: 500 },
      ],
    },
  );
};

export default OpengraphImage;
