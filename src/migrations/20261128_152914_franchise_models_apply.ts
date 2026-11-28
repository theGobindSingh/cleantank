import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_franchise_models" ADD COLUMN "apply_href" varchar;
  ALTER TABLE "pages_blocks_franchise_models_locales" ADD COLUMN "apply_heading" varchar;
  ALTER TABLE "pages_blocks_franchise_models_locales" ADD COLUMN "apply_label" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_franchise_models" DROP COLUMN "apply_href";
  ALTER TABLE "pages_blocks_franchise_models_locales" DROP COLUMN "apply_heading";
  ALTER TABLE "pages_blocks_franchise_models_locales" DROP COLUMN "apply_label";`)
}
