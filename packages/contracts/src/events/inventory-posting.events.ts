export const POSTING_EVENT_TYPES = {
  CREATED: "inventory.posting.created",
  VALIDATED: "inventory.posting.validated",
  REVERSED: "inventory.posting.reversed",
  CANCELLED: "inventory.posting.cancelled",
} as const;

export type PostingEventType = (typeof POSTING_EVENT_TYPES)[keyof typeof POSTING_EVENT_TYPES];
