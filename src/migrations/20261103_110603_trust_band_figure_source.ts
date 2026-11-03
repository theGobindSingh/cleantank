import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_trust_band_figures_source" AS ENUM('typed', 'isoStandard');
  ALTER TABLE "pages_blocks_trust_band_figures_locales" ALTER COLUMN "value" DROP NOT NULL;
  ALTER TABLE "pages_blocks_trust_band_figures" ADD COLUMN "source" "enum_pages_blocks_trust_band_figures_source" DEFAULT 'typed' NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_trust_band_figures_locales" ALTER COLUMN "value" SET NOT NULL;
  ALTER TABLE "pages_blocks_trust_band_figures" DROP COLUMN "source";
  DROP TYPE "public"."enum_pages_blocks_trust_band_figures_source";`)
}
