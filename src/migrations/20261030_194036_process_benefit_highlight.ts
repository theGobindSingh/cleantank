import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_process_locales" ADD COLUMN "highlight" varchar;
  ALTER TABLE "process_steps_locales" ADD COLUMN "benefit" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_process_locales" DROP COLUMN "highlight";
  ALTER TABLE "process_steps_locales" DROP COLUMN "benefit";`)
}
