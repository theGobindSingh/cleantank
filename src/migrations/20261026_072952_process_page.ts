import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_page_intro_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_page_intro_actions_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_page_intro" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_page_intro_locales" (
  	"heading" varchar NOT NULL,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_ruled_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_ruled_list_items_locales" (
  	"title" varchar NOT NULL,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_ruled_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"is_subtle" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_ruled_list_locales" (
  	"heading" varchar NOT NULL,
  	"text" varchar,
  	"note" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_compare_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"before_id" integer NOT NULL,
  	"after_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_blocks_compare_gallery_items_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_compare_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"is_subtle" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_compare_gallery_locales" (
  	"heading" varchar NOT NULL,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_faq_items_locales" (
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_locales" (
  	"heading" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_cta_band_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_cta_band_actions_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_cta_band" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_band_locales" (
  	"heading" varchar NOT NULL,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_locales" (
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "pages_blocks_process" ADD COLUMN "detailed" boolean;
  ALTER TABLE "process_steps_locales" ADD COLUMN "purpose" varchar;
  ALTER TABLE "process_steps_locales" ADD COLUMN "equipment" varchar;
  ALTER TABLE "pages_blocks_page_intro_actions" ADD CONSTRAINT "pages_blocks_page_intro_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_page_intro"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_page_intro_actions_locales" ADD CONSTRAINT "pages_blocks_page_intro_actions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_page_intro_actions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_page_intro" ADD CONSTRAINT "pages_blocks_page_intro_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_page_intro_locales" ADD CONSTRAINT "pages_blocks_page_intro_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_page_intro"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_ruled_list_items" ADD CONSTRAINT "pages_blocks_ruled_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_ruled_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_ruled_list_items_locales" ADD CONSTRAINT "pages_blocks_ruled_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_ruled_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_ruled_list" ADD CONSTRAINT "pages_blocks_ruled_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_ruled_list_locales" ADD CONSTRAINT "pages_blocks_ruled_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_ruled_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_compare_gallery_items" ADD CONSTRAINT "pages_blocks_compare_gallery_items_before_id_media_id_fk" FOREIGN KEY ("before_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_compare_gallery_items" ADD CONSTRAINT "pages_blocks_compare_gallery_items_after_id_media_id_fk" FOREIGN KEY ("after_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_compare_gallery_items" ADD CONSTRAINT "pages_blocks_compare_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_compare_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_compare_gallery_items_locales" ADD CONSTRAINT "pages_blocks_compare_gallery_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_compare_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_compare_gallery" ADD CONSTRAINT "pages_blocks_compare_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_compare_gallery_locales" ADD CONSTRAINT "pages_blocks_compare_gallery_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_compare_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_items" ADD CONSTRAINT "pages_blocks_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_items_locales" ADD CONSTRAINT "pages_blocks_faq_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq" ADD CONSTRAINT "pages_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_locales" ADD CONSTRAINT "pages_blocks_faq_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_band_actions" ADD CONSTRAINT "pages_blocks_cta_band_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta_band"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_band_actions_locales" ADD CONSTRAINT "pages_blocks_cta_band_actions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta_band_actions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_band" ADD CONSTRAINT "pages_blocks_cta_band_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_band_locales" ADD CONSTRAINT "pages_blocks_cta_band_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta_band"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_page_intro_actions_order_idx" ON "pages_blocks_page_intro_actions" USING btree ("_order");
  CREATE INDEX "pages_blocks_page_intro_actions_parent_id_idx" ON "pages_blocks_page_intro_actions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_page_intro_actions_locales_locale_parent_id_uni" ON "pages_blocks_page_intro_actions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_page_intro_actions_locales_parent_id_idx" ON "pages_blocks_page_intro_actions_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_page_intro_order_idx" ON "pages_blocks_page_intro" USING btree ("_order");
  CREATE INDEX "pages_blocks_page_intro_parent_id_idx" ON "pages_blocks_page_intro" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_page_intro_path_idx" ON "pages_blocks_page_intro" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_page_intro_locales_locale_parent_id_unique" ON "pages_blocks_page_intro_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_page_intro_locales_parent_id_idx" ON "pages_blocks_page_intro_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_ruled_list_items_order_idx" ON "pages_blocks_ruled_list_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_ruled_list_items_parent_id_idx" ON "pages_blocks_ruled_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_ruled_list_items_locales_locale_parent_id_uniqu" ON "pages_blocks_ruled_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_ruled_list_items_locales_parent_id_idx" ON "pages_blocks_ruled_list_items_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_ruled_list_order_idx" ON "pages_blocks_ruled_list" USING btree ("_order");
  CREATE INDEX "pages_blocks_ruled_list_parent_id_idx" ON "pages_blocks_ruled_list" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_ruled_list_path_idx" ON "pages_blocks_ruled_list" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_ruled_list_locales_locale_parent_id_unique" ON "pages_blocks_ruled_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_ruled_list_locales_parent_id_idx" ON "pages_blocks_ruled_list_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_compare_gallery_items_order_idx" ON "pages_blocks_compare_gallery_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_compare_gallery_items_parent_id_idx" ON "pages_blocks_compare_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_compare_gallery_items_before_idx" ON "pages_blocks_compare_gallery_items" USING btree ("before_id");
  CREATE INDEX "pages_blocks_compare_gallery_items_after_idx" ON "pages_blocks_compare_gallery_items" USING btree ("after_id");
  CREATE UNIQUE INDEX "pages_blocks_compare_gallery_items_locales_locale_parent_id_" ON "pages_blocks_compare_gallery_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_compare_gallery_items_locales_parent_id_idx" ON "pages_blocks_compare_gallery_items_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_compare_gallery_order_idx" ON "pages_blocks_compare_gallery" USING btree ("_order");
  CREATE INDEX "pages_blocks_compare_gallery_parent_id_idx" ON "pages_blocks_compare_gallery" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_compare_gallery_path_idx" ON "pages_blocks_compare_gallery" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_compare_gallery_locales_locale_parent_id_unique" ON "pages_blocks_compare_gallery_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_compare_gallery_locales_parent_id_idx" ON "pages_blocks_compare_gallery_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_items_order_idx" ON "pages_blocks_faq_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_items_parent_id_idx" ON "pages_blocks_faq_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_faq_items_locales_locale_parent_id_unique" ON "pages_blocks_faq_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_faq_items_locales_parent_id_idx" ON "pages_blocks_faq_items_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_order_idx" ON "pages_blocks_faq" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_parent_id_idx" ON "pages_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_path_idx" ON "pages_blocks_faq" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_faq_locales_locale_parent_id_unique" ON "pages_blocks_faq_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_faq_locales_parent_id_idx" ON "pages_blocks_faq_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_band_actions_order_idx" ON "pages_blocks_cta_band_actions" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_band_actions_parent_id_idx" ON "pages_blocks_cta_band_actions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_cta_band_actions_locales_locale_parent_id_uniqu" ON "pages_blocks_cta_band_actions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_cta_band_actions_locales_parent_id_idx" ON "pages_blocks_cta_band_actions_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_band_order_idx" ON "pages_blocks_cta_band" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_band_parent_id_idx" ON "pages_blocks_cta_band" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_band_path_idx" ON "pages_blocks_cta_band" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_cta_band_locales_locale_parent_id_unique" ON "pages_blocks_cta_band_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_cta_band_locales_parent_id_idx" ON "pages_blocks_cta_band_locales" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_locales_parent_id_idx" ON "pages_locales" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_page_intro_actions" CASCADE;
  DROP TABLE "pages_blocks_page_intro_actions_locales" CASCADE;
  DROP TABLE "pages_blocks_page_intro" CASCADE;
  DROP TABLE "pages_blocks_page_intro_locales" CASCADE;
  DROP TABLE "pages_blocks_ruled_list_items" CASCADE;
  DROP TABLE "pages_blocks_ruled_list_items_locales" CASCADE;
  DROP TABLE "pages_blocks_ruled_list" CASCADE;
  DROP TABLE "pages_blocks_ruled_list_locales" CASCADE;
  DROP TABLE "pages_blocks_compare_gallery_items" CASCADE;
  DROP TABLE "pages_blocks_compare_gallery_items_locales" CASCADE;
  DROP TABLE "pages_blocks_compare_gallery" CASCADE;
  DROP TABLE "pages_blocks_compare_gallery_locales" CASCADE;
  DROP TABLE "pages_blocks_faq_items" CASCADE;
  DROP TABLE "pages_blocks_faq_items_locales" CASCADE;
  DROP TABLE "pages_blocks_faq" CASCADE;
  DROP TABLE "pages_blocks_faq_locales" CASCADE;
  DROP TABLE "pages_blocks_cta_band_actions" CASCADE;
  DROP TABLE "pages_blocks_cta_band_actions_locales" CASCADE;
  DROP TABLE "pages_blocks_cta_band" CASCADE;
  DROP TABLE "pages_blocks_cta_band_locales" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  ALTER TABLE "pages_blocks_process" DROP COLUMN "detailed";
  ALTER TABLE "process_steps_locales" DROP COLUMN "purpose";
  ALTER TABLE "process_steps_locales" DROP COLUMN "equipment";`)
}
