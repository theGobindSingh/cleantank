/** "919453517514" as "+91 94535 17514", the house style for phone numbers. */
export const formatPhone = (digits: string): string => {
  return `+${digits.slice(0, 2)} ${digits.slice(2, 7)} ${digits.slice(7)}`;
};
