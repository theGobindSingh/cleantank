// CT-470 trial (franchise-models.css): separate cards on the warm stone
// section ground. "raised" molds them out of it (eeefe64), "recessed" presses
// them into it, "flat" restores CT-467's cards and the section's own background.
type Relief = "flat" | "raised" | "recessed";

export const CARD_RELIEF = "raised" as Relief;

export const IS_RAISED = CARD_RELIEF !== "flat";

export const CARD_RELIEF_CLASS = {
  flat: "",
  raised: "franchise-card-raised",
  recessed: "franchise-card-recessed",
}[CARD_RELIEF];
