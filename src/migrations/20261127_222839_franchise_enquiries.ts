import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_franchise_enquiries_channel" AS ENUM('whatsapp', 'call');
  CREATE TYPE "public"."enum_franchise_enquiries_language" AS ENUM('en', 'hi', 'pa');
  CREATE TYPE "public"."enum_franchise_enquiries_model" AS ENUM('standardFofo', 'classicFocs', 'premiumFoco', 'undecided');
  CREATE TYPE "public"."enum_franchise_enquiries_status" AS ENUM('new', 'firstCall', 'met', 'accepted', 'onHold', 'declined', 'withdrawn', 'noReply');
  CREATE TABLE "franchise_enquiries" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"mobile" varchar NOT NULL,
  	"on_whats_app" boolean DEFAULT true,
  	"town" varchar NOT NULL,
  	"channel" "enum_franchise_enquiries_channel" NOT NULL,
  	"language" "enum_franchise_enquiries_language",
  	"model" "enum_franchise_enquiries_model" DEFAULT 'undecided',
  	"notes" varchar,
  	"status" "enum_franchise_enquiries_status" DEFAULT 'new' NOT NULL,
  	"first_contact" timestamp(3) with time zone NOT NULL,
  	"last_contact" timestamp(3) with time zone NOT NULL,
  	"decision_date" timestamp(3) with time zone,
  	"erase_after" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "franchise_enquiries_id" integer;
  CREATE INDEX "franchise_enquiries_updated_at_idx" ON "franchise_enquiries" USING btree ("updated_at");
  CREATE INDEX "franchise_enquiries_created_at_idx" ON "franchise_enquiries" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_franchise_enquiries_fk" FOREIGN KEY ("franchise_enquiries_id") REFERENCES "public"."franchise_enquiries"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_franchise_enquiries_id_idx" ON "payload_locked_documents_rels" USING btree ("franchise_enquiries_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "franchise_enquiries" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "franchise_enquiries" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_franchise_enquiries_fk";
  
  DROP INDEX "payload_locked_documents_rels_franchise_enquiries_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "franchise_enquiries_id";
  DROP TYPE "public"."enum_franchise_enquiries_channel";
  DROP TYPE "public"."enum_franchise_enquiries_language";
  DROP TYPE "public"."enum_franchise_enquiries_model";
  DROP TYPE "public"."enum_franchise_enquiries_status";`)
}
