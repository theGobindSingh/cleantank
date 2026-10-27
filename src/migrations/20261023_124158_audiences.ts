import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_audiences_doors" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_audiences_doors_locales" (
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_audiences" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_audiences_locales" (
  	"heading" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  ALTER TABLE "pages_blocks_audiences_doors" ADD CONSTRAINT "pages_blocks_audiences_doors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_audiences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_audiences_doors_locales" ADD CONSTRAINT "pages_blocks_audiences_doors_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_audiences_doors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_audiences" ADD CONSTRAINT "pages_blocks_audiences_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_audiences_locales" ADD CONSTRAINT "pages_blocks_audiences_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_audiences"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_audiences_doors_order_idx" ON "pages_blocks_audiences_doors" USING btree ("_order");
  CREATE INDEX "pages_blocks_audiences_doors_parent_id_idx" ON "pages_blocks_audiences_doors" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_audiences_doors_locales_locale_parent_id_unique" ON "pages_blocks_audiences_doors_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_audiences_doors_locales_parent_id_idx" ON "pages_blocks_audiences_doors_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_audiences_order_idx" ON "pages_blocks_audiences" USING btree ("_order");
  CREATE INDEX "pages_blocks_audiences_parent_id_idx" ON "pages_blocks_audiences" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_audiences_path_idx" ON "pages_blocks_audiences" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_audiences_locales_locale_parent_id_unique" ON "pages_blocks_audiences_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_audiences_locales_parent_id_idx" ON "pages_blocks_audiences_locales" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_audiences_doors" CASCADE;
  DROP TABLE "pages_blocks_audiences_doors_locales" CASCADE;
  DROP TABLE "pages_blocks_audiences" CASCADE;
  DROP TABLE "pages_blocks_audiences_locales" CASCADE;`)
}
