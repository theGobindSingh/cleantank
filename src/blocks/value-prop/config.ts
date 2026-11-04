import { highlightField } from "@/blocks/highlight";
import { imageSlotFields } from "@/blocks/image-slot";
import {
  BoldFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { Block, Condition } from "payload";

const showsPhotos: Condition = (_data, siblingData) => {
  return siblingData.media !== "list";
};

const showsList: Condition = (_data, siblingData) => {
  return siblingData.media === "list";
};

/** The core promise under the hero: a heading, a short paragraph, one or two photos or a numbered list, and an optional link onward. */
export const valueProp: Block = {
  slug: "valueProp",
  interfaceName: "ValuePropBlock",
  labels: { singular: "Value proposition", plural: "Value propositions" },
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    highlightField,
    {
      name: "text",
      type: "richText",
      required: true,
      localized: true,
      // Paragraphs and bold only: bold marks the key phrases for people who skim.
      editor: lexicalEditor({
        features: [
          BoldFeature(),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
      admin: {
        description:
          "Press Enter for a new paragraph. Bold a few key phrases for people who skim.",
      },
    },
    {
      name: "media",
      type: "radio",
      required: true,
      defaultValue: "photos",
      options: [
        { label: "Photos", value: "photos" },
        { label: "Numbered list", value: "list" },
      ],
      admin: {
        layout: "horizontal",
        description: "What sits beside the text.",
      },
    },
    {
      // Hidden fields skip validation, so the main image is required only here.
      type: "collapsible",
      label: "Photos",
      admin: { condition: showsPhotos },
      fields: [
        ...imageSlotFields({
          name: "image",
          required: true,
          description: "Upload the main image, or add its URL below.",
        }),
        ...imageSlotFields({
          name: "secondImage",
          description:
            "Optional. Shown left of the main image, at the same size.",
        }),
      ],
    },
    {
      name: "items",
      type: "array",
      required: true,
      labels: { singular: "Item", plural: "Items" },
      admin: { condition: showsList },
      fields: [
        { name: "title", type: "text", required: true, localized: true },
        {
          name: "line",
          type: "text",
          required: true,
          localized: true,
          admin: { description: "One plain sentence under the title." },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "href",
          type: "text",
          admin: {
            description:
              "Optional. A site path, such as /process. Shown only with a link label.",
          },
        },
        { name: "linkLabel", type: "text", localized: true },
      ],
    },
  ],
};
