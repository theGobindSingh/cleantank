import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_hero_locales" ADD COLUMN "slider_label" varchar;
  ALTER TABLE "pages_blocks_hero_locales" ADD COLUMN "before_label" varchar;
  ALTER TABLE "pages_blocks_hero_locales" ADD COLUMN "after_label" varchar;
  ALTER TABLE "pages_blocks_story" ADD COLUMN "anchor" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_hero_locales" DROP COLUMN "slider_label";
  ALTER TABLE "pages_blocks_hero_locales" DROP COLUMN "before_label";
  ALTER TABLE "pages_blocks_hero_locales" DROP COLUMN "after_label";
  ALTER TABLE "pages_blocks_story" DROP COLUMN "anchor";`)
}
