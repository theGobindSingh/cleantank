import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_credentials_rows" CASCADE;
  DROP TABLE "pages_blocks_credentials_rows_locales" CASCADE;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_credentials_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"document_id" integer
  );
  
  CREATE TABLE "pages_blocks_credentials_rows_locales" (
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  ALTER TABLE "pages_blocks_credentials_rows" ADD CONSTRAINT "pages_blocks_credentials_rows_document_id_media_id_fk" FOREIGN KEY ("document_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_credentials_rows" ADD CONSTRAINT "pages_blocks_credentials_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_credentials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_credentials_rows_locales" ADD CONSTRAINT "pages_blocks_credentials_rows_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_credentials_rows"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_credentials_rows_order_idx" ON "pages_blocks_credentials_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_credentials_rows_parent_id_idx" ON "pages_blocks_credentials_rows" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_credentials_rows_document_idx" ON "pages_blocks_credentials_rows" USING btree ("document_id");
  CREATE UNIQUE INDEX "pages_blocks_credentials_rows_locales_locale_parent_id_uniqu" ON "pages_blocks_credentials_rows_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_credentials_rows_locales_parent_id_idx" ON "pages_blocks_credentials_rows_locales" USING btree ("_parent_id");`)
}
