import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// The value proposition's text moves from plain text to Lexical rich text.
// Up: each blank-line paragraph becomes a paragraph node holding one text node
// (single line breaks inside a paragraph become spaces, as the page showed them).
// Down: the text of each paragraph, joined with blank lines. Bold is lost.
// Postgres allows no subquery in ALTER COLUMN ... USING, hence the temp column.

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "pages_blocks_value_prop_locales" ADD COLUMN "text_lexical" jsonb;
  UPDATE "pages_blocks_value_prop_locales" SET "text_lexical" = jsonb_build_object(
    'root', jsonb_build_object(
      'type', 'root', 'format', '', 'indent', 0, 'version', 1, 'direction', 'ltr',
      'children', (
        SELECT coalesce(jsonb_agg(jsonb_build_object(
          'type', 'paragraph', 'format', '', 'indent', 0, 'version', 1,
          'direction', 'ltr', 'textFormat', 0, 'textStyle', '',
          'children', jsonb_build_array(jsonb_build_object(
            'type', 'text', 'text', regexp_replace(btrim(p, E' \\t\\r\\n'), '\\s*\\n\\s*', ' ', 'g'),
            'format', 0, 'style', '', 'mode', 'normal', 'detail', 0, 'version', 1
          ))
        ) ORDER BY n), '[]'::jsonb)
        FROM regexp_split_to_table("text", '\\n\\s*\\n') WITH ORDINALITY AS s(p, n)
        WHERE btrim(p, E' \\t\\r\\n') <> ''
      )
    )
  )
  WHERE "text" IS NOT NULL;
  ALTER TABLE "pages_blocks_value_prop_locales" DROP COLUMN "text";
  ALTER TABLE "pages_blocks_value_prop_locales" RENAME COLUMN "text_lexical" TO "text";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "pages_blocks_value_prop_locales" ADD COLUMN "text_plain" varchar;
  UPDATE "pages_blocks_value_prop_locales" SET "text_plain" = (
    SELECT string_agg(
      (SELECT string_agg(coalesce(t->>'text', ''), '' ORDER BY m)
        FROM jsonb_array_elements(p->'children') WITH ORDINALITY AS c(t, m)),
      E'\\n\\n' ORDER BY n)
    FROM jsonb_array_elements("text"->'root'->'children') WITH ORDINALITY AS s(p, n)
  )
  WHERE "text" IS NOT NULL;
  ALTER TABLE "pages_blocks_value_prop_locales" DROP COLUMN "text";
  ALTER TABLE "pages_blocks_value_prop_locales" RENAME COLUMN "text_plain" TO "text";`)
}
