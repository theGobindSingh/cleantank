import { isAllowedImageUrl } from "@utils/remote-image";
import type { Condition, Field, TextFieldSingleValidation } from "payload";

interface ImageSlotOptions {
  /** The upload field's name; `<name>Url` and `<name>Alt` sit beside it. */
  name: string;
  /** Whether the slot needs an upload or a URL. */
  required?: boolean;
  /** Admin description of the upload field. */
  description: string;
}

/** A photo slot: an uploaded image or an Unsplash or Pexels image URL. Read it with `toSlotImage`. */
export const imageSlotFields = ({
  name,
  required = false,
  description,
}: ImageSlotOptions): Field[] => {
  const urlName = `${name}Url`;

  const validateUrl: TextFieldSingleValidation = (value, { siblingData }) => {
    if (value) {
      return (
        isAllowedImageUrl(value) ||
        "Use an https image address from images.unsplash.com/photo-… or images.pexels.com/photos/…"
      );
    }
    const hasUpload = Boolean((siblingData as Record<string, unknown>)[name]);
    return !required || hasUpload || "Upload an image or add an image URL.";
  };

  const hasUrl: Condition = (_data, siblingData) => {
    return Boolean(siblingData[urlName]);
  };

  return [
    {
      name,
      type: "upload",
      relationTo: "media",
      admin: { description },
    },
    {
      name: urlName,
      type: "text",
      validate: validateUrl,
      admin: {
        description:
          "Optional. The image address of an Unsplash or Pexels photo. If an image is uploaded too, this URL is used.",
      },
    },
    {
      name: `${name}Alt`,
      type: "text",
      localized: true,
      admin: {
        condition: hasUrl,
        description:
          "What the photo at this URL shows, for screen readers. Left empty, the photo counts as decorative.",
      },
    },
  ];
};
