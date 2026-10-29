/** "919453517514" as "+91 94535 17514", the house style for phone numbers. */
export const formatPhone = (digits: string): string => {
  return `+${digits.slice(0, 2)} ${digits.slice(2, 7)} ${digits.slice(7)}`;
};

/** A WhatsApp chat with `digits`, the message box pre-filled with `text`. */
export const whatsappHref = (digits: string, text: string): string => {
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
};

/** A `tel:` link to `digits` (country code first, no plus). */
export const telHref = (digits: string): string => {
  return `tel:+${digits}`;
};
