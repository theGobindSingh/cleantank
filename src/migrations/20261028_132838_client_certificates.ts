import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "clients_certificates" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"file_id" integer NOT NULL,
  	"date" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "clients_certificates_locales" (
  	"work" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  ALTER TABLE "clients" DROP CONSTRAINT "clients_certificate_id_media_id_fk";
  
  DROP INDEX "clients_certificate_idx";
  ALTER TABLE "clients_certificates" ADD CONSTRAINT "clients_certificates_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "clients_certificates" ADD CONSTRAINT "clients_certificates_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "clients_certificates_locales" ADD CONSTRAINT "clients_certificates_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."clients_certificates"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "clients_certificates_order_idx" ON "clients_certificates" USING btree ("_order");
  CREATE INDEX "clients_certificates_parent_id_idx" ON "clients_certificates" USING btree ("_parent_id");
  CREATE INDEX "clients_certificates_file_idx" ON "clients_certificates" USING btree ("file_id");
  CREATE UNIQUE INDEX "clients_certificates_locales_locale_parent_id_unique" ON "clients_certificates_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "clients_certificates_locales_parent_id_idx" ON "clients_certificates_locales" USING btree ("_parent_id");
  ALTER TABLE "clients" DROP COLUMN "certificate_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "clients_certificates" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "clients_certificates_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "clients_certificates" CASCADE;
  DROP TABLE "clients_certificates_locales" CASCADE;
  ALTER TABLE "clients" ADD COLUMN "certificate_id" integer;
  ALTER TABLE "clients" ADD CONSTRAINT "clients_certificate_id_media_id_fk" FOREIGN KEY ("certificate_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "clients_certificate_idx" ON "clients" USING btree ("certificate_id");`)
}
