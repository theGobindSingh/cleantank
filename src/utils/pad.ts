/** A step or item number as two digits: 1 becomes "01". */
export const pad = (value: number) => {
  return String(value).padStart(2, "0");
};
