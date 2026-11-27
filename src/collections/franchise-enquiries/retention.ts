import type { CollectionBeforeChangeHook, Validate } from "payload";

type Status =
  | "new"
  | "firstCall"
  | "met"
  | "accepted"
  | "onHold"
  | "declined"
  | "withdrawn"
  | "noReply";

type Enquiry = Partial<{
  status: Status | null;
  lastContact: string | null;
  decisionDate: string | null;
}>;

const DECIDED: Status[] = ["onHold", "declined", "withdrawn"];

const isDecided = (data: Enquiry) => {
  return Boolean(data.status && DECIDED.includes(data.status));
};

const addMonths = (iso: string, months: number) => {
  const date = new Date(iso);
  date.setMonth(date.getMonth() + months);
  return date.toISOString();
};

// Retention periods (docs/CONVENTIONS.md, Payload). Accepted partners are kept
// under the agreement and tax law, so they get no date.
const eraseAfter = ({ status, lastContact, decisionDate }: Enquiry) => {
  if (status === "accepted") return null;
  if (status === "declined" || status === "withdrawn") {
    return decisionDate ? addMonths(decisionDate, 12) : null;
  }
  // The hold lasts at most 90 days, then 12 months.
  if (status === "onHold") {
    return decisionDate ? addMonths(decisionDate, 15) : null;
  }
  // No reply, or an open enquiry that went quiet.
  return lastContact ? addMonths(lastContact, 6) : null;
};

export const setEraseAfter: CollectionBeforeChangeHook = ({
  data,
  originalDoc,
}) => {
  const merged = { ...originalDoc, ...data } as Enquiry;
  return { ...data, eraseAfter: eraseAfter(merged) };
};

export const showDecisionDate = (data: Enquiry) => {
  return isDecided(data) || data.status === "accepted";
};

export const now = () => {
  return new Date().toISOString();
};

export const requireDecisionDate: Validate = (value, { siblingData }) => {
  return (
    Boolean(value) ||
    !isDecided(siblingData as Enquiry) ||
    "Add the date of the decision or withdrawal."
  );
};
