import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_value_prop_media" AS ENUM('photos', 'list');
  CREATE TABLE "pages_blocks_value_prop_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_value_prop_items_locales" (
  	"title" varchar,
  	"line" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  ALTER TABLE "pages_blocks_value_prop" ADD COLUMN "media" "enum_pages_blocks_value_prop_media" DEFAULT 'photos' NOT NULL;
  ALTER TABLE "pages_blocks_value_prop_items" ADD CONSTRAINT "pages_blocks_value_prop_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_value_prop"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_value_prop_items_locales" ADD CONSTRAINT "pages_blocks_value_prop_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_value_prop_items"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_value_prop_items_order_idx" ON "pages_blocks_value_prop_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_value_prop_items_parent_id_idx" ON "pages_blocks_value_prop_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_value_prop_items_locales_locale_parent_id_uniqu" ON "pages_blocks_value_prop_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_value_prop_items_locales_parent_id_idx" ON "pages_blocks_value_prop_items_locales" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_value_prop_items" CASCADE;
  DROP TABLE "pages_blocks_value_prop_items_locales" CASCADE;
  ALTER TABLE "pages_blocks_value_prop" DROP COLUMN "media";
  DROP TYPE "public"."enum_pages_blocks_value_prop_media";`)
}
