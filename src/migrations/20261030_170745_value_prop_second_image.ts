import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_value_prop" ADD COLUMN "second_image_id" integer;
  ALTER TABLE "pages_blocks_value_prop" ADD CONSTRAINT "pages_blocks_value_prop_second_image_id_media_id_fk" FOREIGN KEY ("second_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_value_prop_second_image_idx" ON "pages_blocks_value_prop" USING btree ("second_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_value_prop" DROP CONSTRAINT "pages_blocks_value_prop_second_image_id_media_id_fk";
  
  DROP INDEX "pages_blocks_value_prop_second_image_idx";
  ALTER TABLE "pages_blocks_value_prop" DROP COLUMN "second_image_id";`)
}
