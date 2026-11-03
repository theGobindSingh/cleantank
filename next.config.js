import { withPayload } from "@payloadcms/next/withPayload";
import { withSentryConfig } from "@sentry/nextjs/config";

const isDev = process.env.NODE_ENV === "development";
const posthogRegion = process.env.NEXT_PUBLIC_POSTHOG_REGION ?? "us";

// Static CSP (no nonces), so pages stay statically rendered. 'unsafe-inline'
// is needed for Next's inline bootstrap scripts and the theme script. For a
// stricter policy, see node_modules/next/dist/docs/01-app/02-guides/content-security-policy.md.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  ...(isDev
    ? []
    : [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000",
        },
      ]),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  allowedDevOrigins: [process.env.DEV_SERVER_ORIGIN].filter(Boolean),
  images: {
    // Stock photos (@utils/stock-photo). Browsers get them from /_next/image,
    // so the CSP needs no entry for these hosts.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-*",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
    ],
    // 75 is the default; 100 is for the hero's before and after photos.
    qualities: [75, 100],
    // Payload serves uploads from its API; the rest come from public/.
    localPatterns: [
      { pathname: "/api/media/file/**" },
      { pathname: "/assets/images/**" },
    ],
  },
  experimental: {
    // One 404 for the site and the admin, which have separate root layouts.
    globalNotFound: true,
  },
  // PostHog through our own origin (/ingest), so ad blockers and the CSP
  // allow it. Its API uses trailing slashes, which Next must not redirect.
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: `https://${posthogRegion}-assets.i.posthog.com/static/:path*`,
      },
      {
        source: "/ingest/array/:path*",
        destination: `https://${posthogRegion}-assets.i.posthog.com/array/:path*`,
      },
      {
        source: "/ingest/:path*",
        destination: `https://${posthogRegion}.i.posthog.com/:path*`,
      },
    ];
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default withSentryConfig(
  withPayload(nextConfig, { devBundleServerPackages: false }),
  {
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
    // Uploads source maps at build when set (Vercel), for readable stack traces.
    authToken: process.env.SENTRY_AUTH_TOKEN,
    // Sentry through our own origin, like PostHog above.
    tunnelRoute: "/monitoring",
    silent: !process.env.CI,
    // Errors only, so leave tracing and its route manifest out of the bundle.
    bundleSizeOptimizations: { excludeTracing: true, excludeDebugStatements: true },
    routeManifestInjection: false,
  },
);
