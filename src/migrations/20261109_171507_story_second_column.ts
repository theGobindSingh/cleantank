import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_story_locales" ADD COLUMN "label" varchar;
  ALTER TABLE "pages_blocks_story_locales" ADD COLUMN "second_label" varchar;
  ALTER TABLE "pages_blocks_story_locales" ADD COLUMN "second_text" varchar;
  ALTER TABLE "pages_blocks_story_locales" ADD COLUMN "note" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_story_locales" DROP COLUMN "label";
  ALTER TABLE "pages_blocks_story_locales" DROP COLUMN "second_label";
  ALTER TABLE "pages_blocks_story_locales" DROP COLUMN "second_text";
  ALTER TABLE "pages_blocks_story_locales" DROP COLUMN "note";`)
}
