import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_value_prop" ADD COLUMN "link_pending" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_value_prop_locales" ADD COLUMN "link_note" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_value_prop" DROP COLUMN "link_pending";
  ALTER TABLE "pages_blocks_value_prop_locales" DROP COLUMN "link_note";`)
}
