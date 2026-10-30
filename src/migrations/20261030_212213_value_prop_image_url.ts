import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_value_prop" ALTER COLUMN "image_id" DROP NOT NULL;
  ALTER TABLE "pages_blocks_value_prop" ADD COLUMN "image_url" varchar;
  ALTER TABLE "pages_blocks_value_prop" ADD COLUMN "second_image_url" varchar;
  ALTER TABLE "pages_blocks_value_prop_locales" ADD COLUMN "image_alt" varchar;
  ALTER TABLE "pages_blocks_value_prop_locales" ADD COLUMN "second_image_alt" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_value_prop" ALTER COLUMN "image_id" SET NOT NULL;
  ALTER TABLE "pages_blocks_value_prop" DROP COLUMN "image_url";
  ALTER TABLE "pages_blocks_value_prop" DROP COLUMN "second_image_url";
  ALTER TABLE "pages_blocks_value_prop_locales" DROP COLUMN "image_alt";
  ALTER TABLE "pages_blocks_value_prop_locales" DROP COLUMN "second_image_alt";`)
}
