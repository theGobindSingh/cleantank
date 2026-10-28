import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_price_list_tiers_per" AS ENUM('tank', 'litre');
  CREATE TABLE "pages_blocks_price_list_tiers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"up_to" numeric,
  	"price" numeric NOT NULL,
  	"per" "enum_pages_blocks_price_list_tiers_per" DEFAULT 'tank' NOT NULL,
  	"discount" boolean DEFAULT true
  );
  
  CREATE TABLE "pages_blocks_price_list_discounts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tanks" numeric NOT NULL,
  	"percent" numeric NOT NULL
  );
  
  CREATE TABLE "pages_blocks_price_list_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_price_list_actions_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_price_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"gst" numeric DEFAULT 18 NOT NULL,
  	"is_subtle" boolean,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_price_list_locales" (
  	"heading" varchar NOT NULL,
  	"text" varchar,
  	"note" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  ALTER TABLE "pages_blocks_price_list_tiers" ADD CONSTRAINT "pages_blocks_price_list_tiers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_price_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_price_list_discounts" ADD CONSTRAINT "pages_blocks_price_list_discounts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_price_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_price_list_actions" ADD CONSTRAINT "pages_blocks_price_list_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_price_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_price_list_actions_locales" ADD CONSTRAINT "pages_blocks_price_list_actions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_price_list_actions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_price_list" ADD CONSTRAINT "pages_blocks_price_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_price_list_locales" ADD CONSTRAINT "pages_blocks_price_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_price_list"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_price_list_tiers_order_idx" ON "pages_blocks_price_list_tiers" USING btree ("_order");
  CREATE INDEX "pages_blocks_price_list_tiers_parent_id_idx" ON "pages_blocks_price_list_tiers" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_price_list_discounts_order_idx" ON "pages_blocks_price_list_discounts" USING btree ("_order");
  CREATE INDEX "pages_blocks_price_list_discounts_parent_id_idx" ON "pages_blocks_price_list_discounts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_price_list_actions_order_idx" ON "pages_blocks_price_list_actions" USING btree ("_order");
  CREATE INDEX "pages_blocks_price_list_actions_parent_id_idx" ON "pages_blocks_price_list_actions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_price_list_actions_locales_locale_parent_id_uni" ON "pages_blocks_price_list_actions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_price_list_actions_locales_parent_id_idx" ON "pages_blocks_price_list_actions_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_price_list_order_idx" ON "pages_blocks_price_list" USING btree ("_order");
  CREATE INDEX "pages_blocks_price_list_parent_id_idx" ON "pages_blocks_price_list" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_price_list_path_idx" ON "pages_blocks_price_list" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_price_list_locales_locale_parent_id_unique" ON "pages_blocks_price_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_price_list_locales_parent_id_idx" ON "pages_blocks_price_list_locales" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_price_list_tiers" CASCADE;
  DROP TABLE "pages_blocks_price_list_discounts" CASCADE;
  DROP TABLE "pages_blocks_price_list_actions" CASCADE;
  DROP TABLE "pages_blocks_price_list_actions_locales" CASCADE;
  DROP TABLE "pages_blocks_price_list" CASCADE;
  DROP TABLE "pages_blocks_price_list_locales" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_price_list_tiers_per";`)
}
