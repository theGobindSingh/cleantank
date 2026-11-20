import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_franchise_models_models_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_franchise_models_models_points_locales" (
  	"text" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_franchise_models_models" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_franchise_models_models_locales" (
  	"name" varchar NOT NULL,
  	"investment" varchar NOT NULL,
  	"investment_note" varchar,
  	"summary" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_franchise_models_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_franchise_models_actions_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_franchise_models" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"is_subtle" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_franchise_models_locales" (
  	"heading" varchar NOT NULL,
  	"highlight" varchar,
  	"text" varchar,
  	"investment_label" varchar,
  	"note" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  ALTER TABLE "pages_blocks_franchise_models_models_points" ADD CONSTRAINT "pages_blocks_franchise_models_models_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_franchise_models_models"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_franchise_models_models_points_locales" ADD CONSTRAINT "pages_blocks_franchise_models_models_points_locales_paren_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_franchise_models_models_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_franchise_models_models" ADD CONSTRAINT "pages_blocks_franchise_models_models_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_franchise_models"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_franchise_models_models_locales" ADD CONSTRAINT "pages_blocks_franchise_models_models_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_franchise_models_models"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_franchise_models_actions" ADD CONSTRAINT "pages_blocks_franchise_models_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_franchise_models"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_franchise_models_actions_locales" ADD CONSTRAINT "pages_blocks_franchise_models_actions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_franchise_models_actions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_franchise_models" ADD CONSTRAINT "pages_blocks_franchise_models_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_franchise_models_locales" ADD CONSTRAINT "pages_blocks_franchise_models_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_franchise_models"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_franchise_models_models_points_order_idx" ON "pages_blocks_franchise_models_models_points" USING btree ("_order");
  CREATE INDEX "pages_blocks_franchise_models_models_points_parent_id_idx" ON "pages_blocks_franchise_models_models_points" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_franchise_models_models_points_locales_locale_p" ON "pages_blocks_franchise_models_models_points_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_franchise_models_models_points_locales_pare_idx" ON "pages_blocks_franchise_models_models_points_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_franchise_models_models_order_idx" ON "pages_blocks_franchise_models_models" USING btree ("_order");
  CREATE INDEX "pages_blocks_franchise_models_models_parent_id_idx" ON "pages_blocks_franchise_models_models" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_franchise_models_models_locales_locale_parent_i" ON "pages_blocks_franchise_models_models_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_franchise_models_models_locales_parent_id_idx" ON "pages_blocks_franchise_models_models_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_franchise_models_actions_order_idx" ON "pages_blocks_franchise_models_actions" USING btree ("_order");
  CREATE INDEX "pages_blocks_franchise_models_actions_parent_id_idx" ON "pages_blocks_franchise_models_actions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_franchise_models_actions_locales_locale_parent_" ON "pages_blocks_franchise_models_actions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_franchise_models_actions_locales_parent_id_idx" ON "pages_blocks_franchise_models_actions_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_franchise_models_order_idx" ON "pages_blocks_franchise_models" USING btree ("_order");
  CREATE INDEX "pages_blocks_franchise_models_parent_id_idx" ON "pages_blocks_franchise_models" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_franchise_models_path_idx" ON "pages_blocks_franchise_models" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_franchise_models_locales_locale_parent_id_uniqu" ON "pages_blocks_franchise_models_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_franchise_models_locales_parent_id_idx" ON "pages_blocks_franchise_models_locales" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_franchise_models_models_points" CASCADE;
  DROP TABLE "pages_blocks_franchise_models_models_points_locales" CASCADE;
  DROP TABLE "pages_blocks_franchise_models_models" CASCADE;
  DROP TABLE "pages_blocks_franchise_models_models_locales" CASCADE;
  DROP TABLE "pages_blocks_franchise_models_actions" CASCADE;
  DROP TABLE "pages_blocks_franchise_models_actions_locales" CASCADE;
  DROP TABLE "pages_blocks_franchise_models" CASCADE;
  DROP TABLE "pages_blocks_franchise_models_locales" CASCADE;`)
}
