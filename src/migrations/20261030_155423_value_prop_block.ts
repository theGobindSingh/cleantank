import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_value_prop" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_value_prop_locales" (
  	"heading" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  ALTER TABLE "pages_blocks_value_prop" ADD CONSTRAINT "pages_blocks_value_prop_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_value_prop" ADD CONSTRAINT "pages_blocks_value_prop_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_value_prop_locales" ADD CONSTRAINT "pages_blocks_value_prop_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_value_prop"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_value_prop_order_idx" ON "pages_blocks_value_prop" USING btree ("_order");
  CREATE INDEX "pages_blocks_value_prop_parent_id_idx" ON "pages_blocks_value_prop" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_value_prop_path_idx" ON "pages_blocks_value_prop" USING btree ("_path");
  CREATE INDEX "pages_blocks_value_prop_image_idx" ON "pages_blocks_value_prop" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_value_prop_locales_locale_parent_id_unique" ON "pages_blocks_value_prop_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_value_prop_locales_parent_id_idx" ON "pages_blocks_value_prop_locales" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_value_prop" CASCADE;
  DROP TABLE "pages_blocks_value_prop_locales" CASCADE;`)
}
