import type { Condition, Field } from "payload";

const showsPendingNote: Condition = (_data, siblingData) => {
  return Boolean(siblingData.linkPending);
};

/** The value prop's optional button, its not-ready state and the raised panel trial switch. */
export const linkFields: Field[] = [
  {
    type: "row",
    fields: [
      {
        name: "href",
        type: "text",
        admin: {
          description:
            "Optional. A site path, such as /process. Shown only with a link label, unless the button is marked not ready.",
        },
      },
      { name: "linkLabel", type: "text", localized: true },
    ],
  },
  {
    name: "linkPending",
    type: "checkbox",
    defaultValue: false,
    admin: {
      description:
        "Not ready yet: the button shows greyed out, does nothing, and the note below explains why. No link needed.",
    },
  },
  {
    name: "linkNote",
    type: "text",
    localized: true,
    admin: {
      condition: showsPendingNote,
      description: "One short line under the greyed-out button.",
    },
  },
  {
    name: "raisedPanel",
    type: "checkbox",
    defaultValue: false,
    admin: {
      description:
        "Trial, dev and staging only (CT-473): the section sits on stone and its content becomes one raised panel. Untick to bring back the flat white section.",
    },
  },
];
