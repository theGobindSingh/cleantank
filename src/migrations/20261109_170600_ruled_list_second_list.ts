import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_ruled_list_second_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_ruled_list_second_items_locales" (
  	"title" varchar NOT NULL,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  ALTER TABLE "pages_blocks_ruled_list_locales" ADD COLUMN "label" varchar;
  ALTER TABLE "pages_blocks_ruled_list_locales" ADD COLUMN "second_label" varchar;
  ALTER TABLE "pages_blocks_ruled_list_second_items" ADD CONSTRAINT "pages_blocks_ruled_list_second_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_ruled_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_ruled_list_second_items_locales" ADD CONSTRAINT "pages_blocks_ruled_list_second_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_ruled_list_second_items"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_ruled_list_second_items_order_idx" ON "pages_blocks_ruled_list_second_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_ruled_list_second_items_parent_id_idx" ON "pages_blocks_ruled_list_second_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_ruled_list_second_items_locales_locale_parent_i" ON "pages_blocks_ruled_list_second_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_ruled_list_second_items_locales_parent_id_idx" ON "pages_blocks_ruled_list_second_items_locales" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_ruled_list_second_items" CASCADE;
  DROP TABLE "pages_blocks_ruled_list_second_items_locales" CASCADE;
  ALTER TABLE "pages_blocks_ruled_list_locales" DROP COLUMN "label";
  ALTER TABLE "pages_blocks_ruled_list_locales" DROP COLUMN "second_label";`)
}
