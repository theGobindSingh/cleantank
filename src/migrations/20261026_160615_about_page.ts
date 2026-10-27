import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_story" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_story_locales" (
  	"heading" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_founder" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"portrait_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_founder_locales" (
  	"role" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"bio" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_credentials_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"document_id" integer
  );
  
  CREATE TABLE "pages_blocks_credentials_rows_locales" (
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_credentials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_credentials_locales" (
  	"heading" varchar NOT NULL,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_client_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_client_list_locales" (
  	"heading" varchar NOT NULL,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  ALTER TABLE "pages_blocks_ruled_list" ADD COLUMN "anchor" varchar;
  ALTER TABLE "pages_blocks_story" ADD CONSTRAINT "pages_blocks_story_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_story" ADD CONSTRAINT "pages_blocks_story_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_story_locales" ADD CONSTRAINT "pages_blocks_story_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_story"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_founder" ADD CONSTRAINT "pages_blocks_founder_portrait_id_media_id_fk" FOREIGN KEY ("portrait_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_founder" ADD CONSTRAINT "pages_blocks_founder_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_founder_locales" ADD CONSTRAINT "pages_blocks_founder_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_founder"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_credentials_rows" ADD CONSTRAINT "pages_blocks_credentials_rows_document_id_media_id_fk" FOREIGN KEY ("document_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_credentials_rows" ADD CONSTRAINT "pages_blocks_credentials_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_credentials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_credentials_rows_locales" ADD CONSTRAINT "pages_blocks_credentials_rows_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_credentials_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_credentials" ADD CONSTRAINT "pages_blocks_credentials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_credentials_locales" ADD CONSTRAINT "pages_blocks_credentials_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_credentials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_client_list" ADD CONSTRAINT "pages_blocks_client_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_client_list_locales" ADD CONSTRAINT "pages_blocks_client_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_client_list"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_story_order_idx" ON "pages_blocks_story" USING btree ("_order");
  CREATE INDEX "pages_blocks_story_parent_id_idx" ON "pages_blocks_story" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_story_path_idx" ON "pages_blocks_story" USING btree ("_path");
  CREATE INDEX "pages_blocks_story_image_idx" ON "pages_blocks_story" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_story_locales_locale_parent_id_unique" ON "pages_blocks_story_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_story_locales_parent_id_idx" ON "pages_blocks_story_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_founder_order_idx" ON "pages_blocks_founder" USING btree ("_order");
  CREATE INDEX "pages_blocks_founder_parent_id_idx" ON "pages_blocks_founder" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_founder_path_idx" ON "pages_blocks_founder" USING btree ("_path");
  CREATE INDEX "pages_blocks_founder_portrait_idx" ON "pages_blocks_founder" USING btree ("portrait_id");
  CREATE UNIQUE INDEX "pages_blocks_founder_locales_locale_parent_id_unique" ON "pages_blocks_founder_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_founder_locales_parent_id_idx" ON "pages_blocks_founder_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_credentials_rows_order_idx" ON "pages_blocks_credentials_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_credentials_rows_parent_id_idx" ON "pages_blocks_credentials_rows" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_credentials_rows_document_idx" ON "pages_blocks_credentials_rows" USING btree ("document_id");
  CREATE UNIQUE INDEX "pages_blocks_credentials_rows_locales_locale_parent_id_uniqu" ON "pages_blocks_credentials_rows_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_credentials_rows_locales_parent_id_idx" ON "pages_blocks_credentials_rows_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_credentials_order_idx" ON "pages_blocks_credentials" USING btree ("_order");
  CREATE INDEX "pages_blocks_credentials_parent_id_idx" ON "pages_blocks_credentials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_credentials_path_idx" ON "pages_blocks_credentials" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_credentials_locales_locale_parent_id_unique" ON "pages_blocks_credentials_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_credentials_locales_parent_id_idx" ON "pages_blocks_credentials_locales" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_client_list_order_idx" ON "pages_blocks_client_list" USING btree ("_order");
  CREATE INDEX "pages_blocks_client_list_parent_id_idx" ON "pages_blocks_client_list" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_client_list_path_idx" ON "pages_blocks_client_list" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_client_list_locales_locale_parent_id_unique" ON "pages_blocks_client_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_client_list_locales_parent_id_idx" ON "pages_blocks_client_list_locales" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_story" CASCADE;
  DROP TABLE "pages_blocks_story_locales" CASCADE;
  DROP TABLE "pages_blocks_founder" CASCADE;
  DROP TABLE "pages_blocks_founder_locales" CASCADE;
  DROP TABLE "pages_blocks_credentials_rows" CASCADE;
  DROP TABLE "pages_blocks_credentials_rows_locales" CASCADE;
  DROP TABLE "pages_blocks_credentials" CASCADE;
  DROP TABLE "pages_blocks_credentials_locales" CASCADE;
  DROP TABLE "pages_blocks_client_list" CASCADE;
  DROP TABLE "pages_blocks_client_list_locales" CASCADE;
  ALTER TABLE "pages_blocks_ruled_list" DROP COLUMN "anchor";`)
}
