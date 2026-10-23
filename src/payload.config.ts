import { media } from "@/collections/media";
import { pages } from "@/collections/pages";
import { users } from "@/collections/users";
import { processGlobal } from "@/globals/process";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildConfig } from "payload";
import sharp from "sharp";

const dirname = path.dirname(fileURLToPath(import.meta.url));

/*
 * Neon Postgres. The app uses the pooled URL, because serverless functions open
 * many short connections. The Payload CLI (`pnpm payload`, which sets
 * PAYLOAD_DB_DIRECT) uses the direct URL, since migrations shouldn't run
 * through the pooler.
 */
const connectionString = process.env.PAYLOAD_DB_DIRECT
  ? process.env.DATABASE_URL
  : (process.env.DATABASE_URL_POOLED ?? process.env.DATABASE_URL);

export default buildConfig({
  admin: {
    user: users.slug,
    importMap: { baseDir: dirname },
  },
  collections: [users, media, pages],
  globals: [processGlobal],
  editor: lexicalEditor(),
  // Same codes as src/i18n/config.ts. Mark a field `localized: true` to translate it;
  // a missing translation falls back to English.
  localization: {
    locales: [
      { code: "en", label: "English" },
      { code: "hi", label: "हिंदी" },
      { code: "pa", label: "ਪੰਜਾਬੀ" },
    ],
    defaultLocale: "en",
    fallback: true,
  },
  // Payload refuses to start without it; set PAYLOAD_SECRET in .env.
  secret: process.env.PAYLOAD_SECRET ?? "",
  db: postgresAdapter({
    pool: { connectionString },
    // Schema changes always go through migrations, never an automatic push,
    // so the shared Neon database is never altered by a dev server.
    push: false,
    migrationDir: path.resolve(dirname, "migrations"),
  }),
  // Uploads go to Neon's S3-compatible storage and are served through
  // /api/media/file/..., so access control still applies. Without S3_BUCKET
  // (e.g. a quick local run) they fall back to the local /media folder.
  plugins: [
    s3Storage({
      enabled: Boolean(process.env.S3_BUCKET),
      collections: { media: true },
      bucket: process.env.S3_BUCKET ?? "",
      config: {
        endpoint: process.env.AWS_ENDPOINT_URL_S3 ?? "",
        region: process.env.AWS_REGION ?? "",
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? "",
        },
      },
    }),
  ],
  sharp,
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
});
