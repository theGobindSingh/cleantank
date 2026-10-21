/** Site-wide identity, used by metadata, robots, sitemap and the OG image. */
export const site = {
  name: "Clean Tank Services",
  // Brand lines, always written exactly like this.
  descriptor: "Scientific & Mechanized Water Tank Cleaning",
  tagline: "Clean Tank, Healthy Life",
  description:
    "Scientific and mechanized cleaning and disinfection of water storage tanks for homes, housing societies, institutions and industry. An initiative of Gobind Galaxy, Kanpur.",
  // Set SITE_URL in production so canonical and social URLs are absolute.
  url: process.env.SITE_URL ?? "http://localhost:3000",
};
