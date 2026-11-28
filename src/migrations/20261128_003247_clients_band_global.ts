import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "clients_band" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "clients_band_locales" (
  	"heading" varchar NOT NULL,
  	"highlight" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );

  -- copy the heading each page had (the home page's first) into the one global
  INSERT INTO "clients_band" ("id", "updated_at", "created_at") VALUES (1, now(), now());
  INSERT INTO "clients_band_locales" ("heading", "highlight", "_locale", "_parent_id")
  SELECT DISTINCT ON (l."_locale") l."heading", l."highlight", l."_locale", 1
  FROM "pages_blocks_clients_band_locales" l
  JOIN "pages_blocks_clients_band" b ON b."id" = l."_parent_id"
  JOIN "pages" p ON p."id" = b."_parent_id"
  ORDER BY l."_locale", (p."slug" = 'home') DESC, p."id";
  SELECT setval(pg_get_serial_sequence('clients_band', 'id'), 1);

  DROP TABLE "pages_blocks_clients_band_locales" CASCADE;
  ALTER TABLE "clients_band_locales" ADD CONSTRAINT "clients_band_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."clients_band"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "clients_band_locales_locale_parent_id_unique" ON "clients_band_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "clients_band_locales_parent_id_idx" ON "clients_band_locales" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_clients_band_locales" (
  	"heading" varchar NOT NULL,
  	"highlight" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  DROP TABLE "clients_band" CASCADE;
  DROP TABLE "clients_band_locales" CASCADE;
  ALTER TABLE "pages_blocks_clients_band_locales" ADD CONSTRAINT "pages_blocks_clients_band_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_clients_band"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "pages_blocks_clients_band_locales_locale_parent_id_unique" ON "pages_blocks_clients_band_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_clients_band_locales_parent_id_idx" ON "pages_blocks_clients_band_locales" USING btree ("_parent_id");`)
}
