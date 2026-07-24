import type { OverrideStatus } from "./override-request.enums";

export const OverrideCommandName = {
  REQUEST: "override.request.v1",
  APPROVE: "override.approve.v1",
  REJECT: "override.reject.v1",
  CANCEL: "override.cancel.v1",
  EXECUTE: "override.execute.v1",
} as const;

export type OverrideCommandName =
  (typeof OverrideCommandName)[keyof typeof OverrideCommandName];

export const OverrideCommandOutcomeType = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
} as const;

export type OverrideCommandOutcomeType =
  (typeof OverrideCommandOutcomeType)[keyof typeof OverrideCommandOutcomeType];

export type OverrideCommandReceiptResult = Readonly<Record<string, unknown>>;

export interface OverrideCommandReceiptLookup {
  readonly organizationId: string;
  readonly commandName: OverrideCommandName;
  readonly keyHash: string;
}

export interface OverrideCommandReceipt {
  readonly id: string;
  readonly organizationId: string;
  readonly overrideRequestId: string;
  readonly commandName: OverrideCommandName;
  readonly keyHash: string;
  readonly requestHash: string;
  readonly actorId: string;
  readonly correlationId: string;
  readonly outcomeType: OverrideCommandOutcomeType;
  readonly resultStatus: OverrideStatus;
  readonly resultVersion: number;
  readonly httpStatus: number;
  readonly errorCode?: string;
  /** Optional non-sensitive metadata; canonical replay data is explicit above. */
  readonly result?: OverrideCommandReceiptResult;
  readonly recordedAt: string;
}

export type OverrideCommandReceiptTransaction = unknown;

export interface OverrideCommandReceiptRepository {
  find(
    lookup: OverrideCommandReceiptLookup,
    tx?: OverrideCommandReceiptTransaction,
  ): Promise<OverrideCommandReceipt | null>;

  append(
    receipt: OverrideCommandReceipt,
    tx?: OverrideCommandReceiptTransaction,
  ): Promise<void>;
}

export function isOverrideCommandReplay(
  receipt: OverrideCommandReceipt,
  requestHash: string,
): boolean {
  return receipt.requestHash === requestHash;
}

export const OVERRIDE_COMMAND_RECEIPT_REPOSITORY = Symbol(
  "OverrideCommandReceiptRepository",
);
