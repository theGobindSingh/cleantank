import type { Block } from "payload";

/**
 * Registrations and certificates a buyer can check, as a ruled spec sheet.
 * The facts live in src/site.ts (shared with the footer); only the words around
 * them are edited here.
 */
export const credentials: Block = {
  slug: "credentials",
  interfaceName: "CredentialsBlock",
  labels: { singular: "Credentials", plural: "Credentials" },
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    { name: "text", type: "textarea", localized: true },
  ],
};
