import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_value_prop_photo_shape" AS ENUM('portrait', 'landscape');
  ALTER TABLE "pages_blocks_value_prop" ADD COLUMN "photo_shape" "enum_pages_blocks_value_prop_photo_shape" DEFAULT 'portrait';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_value_prop" DROP COLUMN "photo_shape";
  DROP TYPE "public"."enum_pages_blocks_value_prop_photo_shape";`)
}
