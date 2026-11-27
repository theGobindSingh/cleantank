import { actionsField } from "@/blocks/actions/config";
import { highlightField } from "@/blocks/highlight";
import type { Block } from "payload";

/** The top of a page: heading, one line, up to two actions, over a before/after comparison. */
export const hero: Block = {
  slug: "hero",
  interfaceName: "HeroBlock",
  fields: [
    { name: "heading", type: "text", required: true, localized: true },
    highlightField,
    { name: "text", type: "textarea", required: true, localized: true },
    {
      type: "row",
      fields: [
        {
          name: "before",
          type: "upload",
          relationTo: "media",
          required: true,
          admin: {
            description:
              "Left of the divider, such as the tank before cleaning.",
          },
        },
        {
          name: "after",
          type: "upload",
          relationTo: "media",
          required: true,
          admin: {
            description:
              "Right of the divider, framed the same way, such as the same tank after cleaning.",
          },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Slider labels",
      admin: {
        initCollapsed: true,
        description:
          "Optional. What screen readers call the slider and its two sides. Leave empty for “Before and after cleaning”, “Before” and “After”.",
      },
      fields: [
        {
          type: "row",
          fields: [
            { name: "sliderLabel", type: "text", localized: true },
            { name: "beforeLabel", type: "text", localized: true },
            { name: "afterLabel", type: "text", localized: true },
          ],
        },
      ],
    },
    actionsField,
  ],
};
