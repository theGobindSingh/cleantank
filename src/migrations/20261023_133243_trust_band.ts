import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_trust_band_figures" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_trust_band_figures_locales" (
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_trust_band" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_trust_band_locales" (
  	"heading" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  ALTER TABLE "pages_blocks_trust_band_figures" ADD CONSTRAINT "pages_blocks_trust_band_figures_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_trust_band"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_trust_band_figures_locales" ADD CONSTRAINT "pages_blocks_trust_band_figures_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_trust_band_figures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_trust_band" ADD CONSTRAINT "pages_blocks_trust_band_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_trust_band_locales" ADD CONSTRAINT "pages_blocks_trust_band_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_trust_band"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_trust_band_figures_order_idx" ON "pages_blocks_trust_band_figures" USING btree ("_order");
  CREATE INDEX "pages_blocks_trust_band_figures_parent_id_idx" ON "pages_blocks_trust_band_figures" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_trust_band_figures_locales_locale_parent_id_uni" ON "pages_blocks_trust_band_figures_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_trust_band_figures_locales_parent_id_idx" ON "pages_blocks_trust_band_figures_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_trust_band_order_idx" ON "pages_blocks_trust_band" USING btree ("_order");
  CREATE INDEX "pages_blocks_trust_band_parent_id_idx" ON "pages_blocks_trust_band" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_trust_band_path_idx" ON "pages_blocks_trust_band" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_trust_band_locales_locale_parent_id_unique" ON "pages_blocks_trust_band_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_trust_band_locales_parent_id_idx" ON "pages_blocks_trust_band_locales" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_trust_band_figures" CASCADE;
  DROP TABLE "pages_blocks_trust_band_figures_locales" CASCADE;
  DROP TABLE "pages_blocks_trust_band" CASCADE;
  DROP TABLE "pages_blocks_trust_band_locales" CASCADE;`)
}
