import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_process_locales" (
  	"heading" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"where_applicable" boolean
  );
  
  CREATE TABLE "process_steps_locales" (
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "process" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "pages_blocks_process" ADD CONSTRAINT "pages_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process_locales" ADD CONSTRAINT "pages_blocks_process_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "process_steps" ADD CONSTRAINT "process_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "process_steps" ADD CONSTRAINT "process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "process_steps_locales" ADD CONSTRAINT "process_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."process_steps"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_process_order_idx" ON "pages_blocks_process" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_parent_id_idx" ON "pages_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_process_path_idx" ON "pages_blocks_process" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_process_locales_locale_parent_id_unique" ON "pages_blocks_process_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_process_locales_parent_id_idx" ON "pages_blocks_process_locales" USING btree ("_parent_id");
  CREATE INDEX "process_steps_order_idx" ON "process_steps" USING btree ("_order");
  CREATE INDEX "process_steps_parent_id_idx" ON "process_steps" USING btree ("_parent_id");
  CREATE INDEX "process_steps_image_idx" ON "process_steps" USING btree ("image_id");
  CREATE UNIQUE INDEX "process_steps_locales_locale_parent_id_unique" ON "process_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "process_steps_locales_parent_id_idx" ON "process_steps_locales" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_process" CASCADE;
  DROP TABLE "pages_blocks_process_locales" CASCADE;
  DROP TABLE "process_steps" CASCADE;
  DROP TABLE "process_steps_locales" CASCADE;
  DROP TABLE "process" CASCADE;`)
}
