import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_home_prices_tiers_per" AS ENUM('tank', 'litre');
  CREATE TABLE "home_prices_tiers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"up_to" numeric,
  	"price" numeric NOT NULL,
  	"per" "enum_home_prices_tiers_per" DEFAULT 'tank' NOT NULL,
  	"discount" boolean DEFAULT true
  );
  
  CREATE TABLE "home_prices_discounts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tanks" numeric NOT NULL,
  	"percent" numeric NOT NULL
  );
  
  CREATE TABLE "home_prices" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"gst" numeric DEFAULT 18 NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  -- Copy the figures from the /homes price list block before its columns go.
  INSERT INTO "home_prices" ("gst", "updated_at", "created_at")
  SELECT "gst", now(), now() FROM "pages_blocks_price_list" WHERE "id" = '6ae23310c59766e6598f8194';
  INSERT INTO "home_prices_tiers" ("_order", "_parent_id", "id", "up_to", "price", "per", "discount")
  SELECT t."_order", g."id", t."id", t."up_to", t."price", t."per"::text::"enum_home_prices_tiers_per", t."discount"
  FROM "pages_blocks_price_list_tiers" t CROSS JOIN "home_prices" g
  WHERE t."_parent_id" = '6ae23310c59766e6598f8194';
  INSERT INTO "home_prices_discounts" ("_order", "_parent_id", "id", "tanks", "percent")
  SELECT d."_order", g."id", d."id", d."tanks", d."percent"
  FROM "pages_blocks_price_list_discounts" d CROSS JOIN "home_prices" g
  WHERE d."_parent_id" = '6ae23310c59766e6598f8194';

  DROP TABLE "pages_blocks_price_list_tiers" CASCADE;
  DROP TABLE "pages_blocks_price_list_discounts" CASCADE;
  ALTER TABLE "home_prices_tiers" ADD CONSTRAINT "home_prices_tiers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_prices"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_prices_discounts" ADD CONSTRAINT "home_prices_discounts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_prices"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "home_prices_tiers_order_idx" ON "home_prices_tiers" USING btree ("_order");
  CREATE INDEX "home_prices_tiers_parent_id_idx" ON "home_prices_tiers" USING btree ("_parent_id");
  CREATE INDEX "home_prices_discounts_order_idx" ON "home_prices_discounts" USING btree ("_order");
  CREATE INDEX "home_prices_discounts_parent_id_idx" ON "home_prices_discounts" USING btree ("_parent_id");
  ALTER TABLE "pages_blocks_price_list" DROP COLUMN "gst";
  DROP TYPE "public"."enum_pages_blocks_price_list_tiers_per";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
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
  
  ALTER TABLE "pages_blocks_price_list" ADD COLUMN "gst" numeric DEFAULT 18 NOT NULL;

  -- Copy the figures back into every price list block before the global goes.
  UPDATE "pages_blocks_price_list" SET "gst" = (SELECT "gst" FROM "home_prices" ORDER BY "id" LIMIT 1)
  WHERE EXISTS (SELECT 1 FROM "home_prices");
  INSERT INTO "pages_blocks_price_list_tiers" ("_order", "_parent_id", "id", "up_to", "price", "per", "discount")
  SELECT t."_order", b."id", t."id" || '-' || b."id", t."up_to", t."price", t."per"::text::"enum_pages_blocks_price_list_tiers_per", t."discount"
  FROM "home_prices_tiers" t CROSS JOIN "pages_blocks_price_list" b;
  INSERT INTO "pages_blocks_price_list_discounts" ("_order", "_parent_id", "id", "tanks", "percent")
  SELECT d."_order", b."id", d."id" || '-' || b."id", d."tanks", d."percent"
  FROM "home_prices_discounts" d CROSS JOIN "pages_blocks_price_list" b;

  DROP TABLE "home_prices_tiers" CASCADE;
  DROP TABLE "home_prices_discounts" CASCADE;
  DROP TABLE "home_prices" CASCADE;
  ALTER TABLE "pages_blocks_price_list_tiers" ADD CONSTRAINT "pages_blocks_price_list_tiers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_price_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_price_list_discounts" ADD CONSTRAINT "pages_blocks_price_list_discounts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_price_list"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_price_list_tiers_order_idx" ON "pages_blocks_price_list_tiers" USING btree ("_order");
  CREATE INDEX "pages_blocks_price_list_tiers_parent_id_idx" ON "pages_blocks_price_list_tiers" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_price_list_discounts_order_idx" ON "pages_blocks_price_list_discounts" USING btree ("_order");
  CREATE INDEX "pages_blocks_price_list_discounts_parent_id_idx" ON "pages_blocks_price_list_discounts" USING btree ("_parent_id");
  DROP TYPE "public"."enum_home_prices_tiers_per";`)
}
