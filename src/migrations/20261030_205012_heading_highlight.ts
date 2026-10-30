import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_audiences_locales" ADD COLUMN "highlight" varchar;
  ALTER TABLE "pages_blocks_trust_band_locales" ADD COLUMN "highlight" varchar;
  ALTER TABLE "pages_blocks_clients_band_locales" ADD COLUMN "highlight" varchar;
  ALTER TABLE "pages_blocks_testimonials_locales" ADD COLUMN "highlight" varchar;
  ALTER TABLE "pages_blocks_page_intro_locales" ADD COLUMN "highlight" varchar;
  ALTER TABLE "pages_blocks_ruled_list_locales" ADD COLUMN "highlight" varchar;
  ALTER TABLE "pages_blocks_compare_gallery_locales" ADD COLUMN "highlight" varchar;
  ALTER TABLE "pages_blocks_faq_locales" ADD COLUMN "highlight" varchar;
  ALTER TABLE "pages_blocks_cta_band_locales" ADD COLUMN "highlight" varchar;
  ALTER TABLE "pages_blocks_story_locales" ADD COLUMN "highlight" varchar;
  ALTER TABLE "pages_blocks_credentials_locales" ADD COLUMN "highlight" varchar;
  ALTER TABLE "pages_blocks_client_list_locales" ADD COLUMN "highlight" varchar;
  ALTER TABLE "pages_blocks_service_area_locales" ADD COLUMN "highlight" varchar;
  ALTER TABLE "pages_blocks_price_list_locales" ADD COLUMN "highlight" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_audiences_locales" DROP COLUMN "highlight";
  ALTER TABLE "pages_blocks_trust_band_locales" DROP COLUMN "highlight";
  ALTER TABLE "pages_blocks_clients_band_locales" DROP COLUMN "highlight";
  ALTER TABLE "pages_blocks_testimonials_locales" DROP COLUMN "highlight";
  ALTER TABLE "pages_blocks_page_intro_locales" DROP COLUMN "highlight";
  ALTER TABLE "pages_blocks_ruled_list_locales" DROP COLUMN "highlight";
  ALTER TABLE "pages_blocks_compare_gallery_locales" DROP COLUMN "highlight";
  ALTER TABLE "pages_blocks_faq_locales" DROP COLUMN "highlight";
  ALTER TABLE "pages_blocks_cta_band_locales" DROP COLUMN "highlight";
  ALTER TABLE "pages_blocks_story_locales" DROP COLUMN "highlight";
  ALTER TABLE "pages_blocks_credentials_locales" DROP COLUMN "highlight";
  ALTER TABLE "pages_blocks_client_list_locales" DROP COLUMN "highlight";
  ALTER TABLE "pages_blocks_service_area_locales" DROP COLUMN "highlight";
  ALTER TABLE "pages_blocks_price_list_locales" DROP COLUMN "highlight";`)
}
