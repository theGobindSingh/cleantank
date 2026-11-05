import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_process_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_process_actions_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  ALTER TABLE "pages_blocks_process_actions" ADD CONSTRAINT "pages_blocks_process_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process_actions_locales" ADD CONSTRAINT "pages_blocks_process_actions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_process_actions"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_process_actions_order_idx" ON "pages_blocks_process_actions" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_actions_parent_id_idx" ON "pages_blocks_process_actions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_process_actions_locales_locale_parent_id_unique" ON "pages_blocks_process_actions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_process_actions_locales_parent_id_idx" ON "pages_blocks_process_actions_locales" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_process_actions" CASCADE;
  DROP TABLE "pages_blocks_process_actions_locales" CASCADE;`)
}
