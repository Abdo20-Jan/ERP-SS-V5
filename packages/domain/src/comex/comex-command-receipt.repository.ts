export const ComexCommandName = {
  ALERT_CREATE: "comex.alert.create.v1",
  ALERT_ACKNOWLEDGE: "comex.alert.acknowledge.v1",
  ALERT_RESOLVE: "comex.alert.resolve.v1",
  PROFORMA_REGISTER: "comex.proforma.register.v1",
  PROFORMA_CONFIRM: "comex.proforma.confirm.v1",
} as const;

export type ComexCommandName =
  (typeof ComexCommandName)[keyof typeof ComexCommandName];

export type ComexAlertCommandName =
  | typeof ComexCommandName.ALERT_CREATE
  | typeof ComexCommandName.ALERT_ACKNOWLEDGE
  | typeof ComexCommandName.ALERT_RESOLVE;

export type ComexProformaCommandName =
  | typeof ComexCommandName.PROFORMA_REGISTER
  | typeof ComexCommandName.PROFORMA_CONFIRM;

interface ComexCommandReceiptBase {
  readonly id: string;
  readonly organizationId: string;
  readonly orderId: string;
  readonly keyHash: string;
  readonly requestHash: string;
  readonly actorId: string;
  readonly correlationId: string;
  readonly recordedAt: string;
}

export interface ComexAlertCommandReceipt extends ComexCommandReceiptBase {
  readonly commandName: ComexAlertCommandName;
  readonly alertId: string;
  readonly proformaVersionId?: never;
}

export interface ComexProformaCommandReceipt extends ComexCommandReceiptBase {
  readonly commandName: ComexProformaCommandName;
  readonly alertId?: never;
  readonly proformaVersionId: string;
}

/** A receipt exists only for a command whose mutation committed successfully. */
export type ComexCommandReceipt =
  | ComexAlertCommandReceipt
  | ComexProformaCommandReceipt;

export interface ComexCommandReceiptLookup {
  readonly organizationId: string;
  readonly commandName: ComexCommandName;
  readonly keyHash: string;
}

export type ComexCommandReceiptTransaction = unknown;

export interface ComexCommandReceiptRepository {
  find(
    lookup: ComexCommandReceiptLookup,
    tx?: ComexCommandReceiptTransaction,
  ): Promise<ComexCommandReceipt | null>;

  append(
    receipt: ComexCommandReceipt,
    tx?: ComexCommandReceiptTransaction,
  ): Promise<void>;
}

export function isComexCommandReplay(
  receipt: ComexCommandReceipt,
  requestHash: string,
): boolean {
  return receipt.requestHash === requestHash;
}

export const COMEX_COMMAND_RECEIPT_REPOSITORY = Symbol(
  "ComexCommandReceiptRepository",
);
