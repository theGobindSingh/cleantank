import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "clients" ADD COLUMN "logo_url" varchar;
  ALTER TABLE "clients" ADD COLUMN "logo_fetch_error" varchar;
  ALTER TABLE "clients" ADD COLUMN "fetched_logo_id" integer;
  ALTER TABLE "clients" ADD COLUMN "fetched_logo_hash" varchar;
  ALTER TABLE "clients" ADD CONSTRAINT "clients_fetched_logo_id_media_id_fk" FOREIGN KEY ("fetched_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "clients_fetched_logo_idx" ON "clients" USING btree ("fetched_logo_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "clients" DROP CONSTRAINT "clients_fetched_logo_id_media_id_fk";
  
  DROP INDEX "clients_fetched_logo_idx";
  ALTER TABLE "clients" DROP COLUMN "logo_url";
  ALTER TABLE "clients" DROP COLUMN "logo_fetch_error";
  ALTER TABLE "clients" DROP COLUMN "fetched_logo_id";
  ALTER TABLE "clients" DROP COLUMN "fetched_logo_hash";`)
}
