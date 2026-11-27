import type { Access, CollectionConfig } from "payload";
import {
  now,
  requireDecisionDate,
  setEraseAfter,
  showDecisionDate,
} from "./retention";

/*
 * Franchise leads, logged by staff from WhatsApp and calls. Personal data under
 * the DPDP Act, so only logged-in staff can read or change it, never the site or
 * the public API. KYC (PAN, Aadhaar, bank) belongs to the agreement, not here.
 */
const isStaff: Access = ({ req }) => {
  return Boolean(req.user);
};

/** Franchise enquiries, entered by hand in the admin. Staff only. */
export const franchiseEnquiries: CollectionConfig = {
  slug: "franchise-enquiries",
  labels: { singular: "Franchise enquiry", plural: "Franchise enquiries" },
  admin: {
    group: "Franchise",
    useAsTitle: "name",
    defaultColumns: ["name", "town", "model", "status", "eraseAfter"],
    description:
      "Logged by hand from WhatsApp and calls. Delete an enquiry on its erase-after date. Never store PAN, Aadhaar or bank details here.",
  },
  access: {
    read: isStaff,
    create: isStaff,
    update: isStaff,
    delete: isStaff,
  },
  hooks: { beforeChange: [setEraseAfter] },
  fields: [
    { name: "name", type: "text", required: true },
    {
      type: "row",
      fields: [
        { name: "mobile", type: "text", required: true },
        {
          name: "onWhatsApp",
          type: "checkbox",
          label: "This number is on WhatsApp",
          defaultValue: true,
        },
      ],
    },
    { name: "town", type: "text", required: true },
    {
      type: "row",
      fields: [
        {
          name: "channel",
          type: "select",
          required: true,
          options: [
            { label: "WhatsApp", value: "whatsapp" },
            { label: "Call", value: "call" },
          ],
        },
        {
          name: "language",
          type: "select",
          options: [
            { label: "English", value: "en" },
            { label: "Hindi", value: "hi" },
            { label: "Punjabi", value: "pa" },
          ],
        },
        {
          name: "model",
          type: "select",
          label: "Model of interest",
          defaultValue: "undecided",
          options: [
            { label: "Standard FOFO", value: "standardFofo" },
            { label: "Classic FOCS", value: "classicFocs" },
            { label: "Premium FOCO", value: "premiumFoco" },
            { label: "Undecided", value: "undecided" },
          ],
        },
      ],
    },
    {
      name: "notes",
      type: "textarea",
      admin: {
        description:
          "What screening needs: their current work, why this, the plan for their town. The reason for a decline, if they asked.",
      },
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "new",
      options: [
        { label: "New", value: "new" },
        { label: "First call done", value: "firstCall" },
        { label: "Video call or visit done", value: "met" },
        { label: "Accepted", value: "accepted" },
        { label: "On hold", value: "onHold" },
        { label: "Declined", value: "declined" },
        { label: "Withdrawn", value: "withdrawn" },
        { label: "No reply", value: "noReply" },
      ],
      admin: {
        position: "sidebar",
        description:
          "No reply means two attempts went unanswered. Withdrawn means stop using the record at once.",
      },
    },
    {
      name: "firstContact",
      type: "date",
      required: true,
      defaultValue: now,
      admin: { position: "sidebar" },
    },
    {
      name: "lastContact",
      type: "date",
      required: true,
      defaultValue: now,
      admin: { position: "sidebar" },
    },
    {
      name: "decisionDate",
      type: "date",
      label: "Decision or withdrawal date",
      validate: requireDecisionDate,
      admin: { position: "sidebar", condition: showDecisionDate },
    },
    {
      name: "eraseAfter",
      type: "date",
      admin: {
        position: "sidebar",
        readOnly: true,
        description:
          "Set on save. No reply or open: 6 months after the last contact. Declined or withdrawn: 12 months after the decision. On hold: 15 months after the hold began. Accepted: kept under the agreement and tax law.",
      },
    },
  ],
};
