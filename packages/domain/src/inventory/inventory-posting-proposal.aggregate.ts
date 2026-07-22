import { Decimal } from "../common/decimal.vo";
import { createEntityId, generateEntityId, type EntityId } from "../common/entity-id";
import { validatePostingBalance, validateAmountFunctional } from "./inventory-posting-proposal.validator";
import { PostingProposalStatus, PostingSourceType } from "./inventory-posting-proposal.enums";
import type {
  CreatePostingProposalCommand, ValidatePostingProposalCommand,
  ReversePostingProposalCommand, CancelPostingProposalCommand,
} from "./inventory-posting-proposal.commands";
import {
  type PostingProposalDomainEvent,
  postingProposalCreatedEvent, postingProposalValidatedEvent,
  postingProposalReversedEvent, postingProposalCancelledEvent,
} from "./inventory-posting-proposal.events";

export interface PostingLineSnapshot {
  accountCode: string;
  debit: string;
  credit: string;
  memo: string | null;
  dimensionRefs: string[];
}

export interface PostingProposalSnapshot {
  id: string;
  organizationId: string;
  sourceType: string;
  sourceId: string;
  status: string;
  postingDate: string;
  description: string;
  correlationId: string;
  idempotencyKey: string | null;
  currencyOriginal: string | null;
  amountOriginal: string | null;
  fxRate: string | null;
  amountFunctional: string;
  lines: PostingLineSnapshot[];
  reversalOfId: string | null;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export interface PostingLine {
  accountCode: string;
  debit: Decimal;
  credit: Decimal;
  memo: string | null;
  dimensionRefs: string[];
}

export class InventoryPostingProposal {
  private _events: PostingProposalDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly organizationId: string,
    readonly sourceType: PostingSourceType,
    readonly sourceId: string,
    private _status: PostingProposalStatus,
    readonly postingDate: Date,
    readonly description: string,
    readonly correlationId: string,
    readonly idempotencyKey: string | null,
    readonly currencyOriginal: string | null,
    readonly amountOriginal: Decimal | null,
    readonly fxRate: Decimal | null,
    readonly amountFunctional: Decimal,
    readonly lines: readonly PostingLine[],
    private _reversalOfId: string | null,
    private _version: number,
    readonly createdAt: Date,
    private _updatedAt: Date,
  ) {}

  get status(): PostingProposalStatus { return this._status; }
  get version(): number { return this._version; }
  get reversalOfId(): string | null { return this._reversalOfId; }

  pullEvents(): PostingProposalDomainEvent[] {
    const events = [...this._events];
    this._events = [];
    return events;
  }

  static create(cmd: CreatePostingProposalCommand): InventoryPostingProposal {
    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();
    const postingDate = cmd.postingDate instanceof Date ? cmd.postingDate : new Date(cmd.postingDate);
    const orgId = cmd.organizationId?.trim() || "org_001";
    const amountFunctional = new Decimal(0);
    const lines: PostingLine[] = (cmd.lines ?? []).map((l) => ({
      accountCode: l.accountCode.trim(),
      debit: new Decimal(l.debit),
      credit: new Decimal(l.credit),
      memo: l.memo?.trim() || null,
      dimensionRefs: l.dimensionRefs ?? [],
    }));
    const proposal = new InventoryPostingProposal(
      id, orgId,
      cmd.sourceType as PostingSourceType, cmd.sourceId?.trim() || "",
      PostingProposalStatus.DRAFT, postingDate,
      cmd.description?.trim() || "", cmd.correlationId?.trim() || "",
      cmd.idempotencyKey?.trim() || null,
      cmd.currencyOriginal?.trim() || null,
      cmd.amountOriginal ? new Decimal(cmd.amountOriginal) : null,
      cmd.fxRate ? new Decimal(cmd.fxRate) : null,
      amountFunctional, lines, null,
      1, new Date(), new Date(),
    );
    proposal._events.push(postingProposalCreatedEvent(id, { sourceType: cmd.sourceType, lineCount: lines.length }));
    return proposal;
  }

  validate(cmd: ValidatePostingProposalCommand): void {
    if (this._status !== PostingProposalStatus.DRAFT) {
      throw new Error(`Cannot validate proposal in status ${this._status}`);
    }
    if (cmd.expectedVersion !== this._version) {
      throw new Error(`Version conflict: expected ${cmd.expectedVersion}, actual ${this._version}`);
    }
    if (this.lines.length < 2) {
      throw new Error("Requires at least two lines");
    }
    const lineEntries = this.lines.map((l) => ({ debit: l.debit.toFixed(2), credit: l.credit.toFixed(2) }));
    validatePostingBalance(lineEntries);
    this._status = PostingProposalStatus.VALIDATED;
    this._updatedAt = new Date();
    this._events.push(postingProposalValidatedEvent(this.id, { actorId: cmd.actorId }));
  }

  reverse(cmd: ReversePostingProposalCommand): InventoryPostingProposal {
    if (this._status !== PostingProposalStatus.VALIDATED) {
      throw new Error(`Cannot reverse proposal in status ${this._status}`);
    }
    const reversalDate = cmd.reversalDate instanceof Date ? cmd.reversalDate : new Date(cmd.reversalDate);
    const inverted: PostingLine[] = this.lines.map((l) => ({
      accountCode: l.accountCode,
      debit: l.credit,
      credit: l.debit,
      memo: `${l.memo ?? ""} (estorno)`.trim() || "Estorno",
      dimensionRefs: l.dimensionRefs,
    }));
    const reversalId = generateEntityId();
    const reversal = new InventoryPostingProposal(
      reversalId, this.organizationId,
      this.sourceType, this.sourceId,
      PostingProposalStatus.VALIDATED, reversalDate,
      `Estorno: ${this.description} — ${cmd.reason}`,
      cmd.reversalCorrelationId?.trim() || "", null,
      this.currencyOriginal, this.amountOriginal, this.fxRate,
      new Decimal(0), inverted, this.id,
      1, new Date(), new Date(),
    );
    this._status = PostingProposalStatus.REVERSED;
    this._reversalOfId = reversal.id;
    this._version += 1;
    this._updatedAt = new Date();
    reversal._events.push(postingProposalCreatedEvent(reversalId, { reversedFromId: this.id }));
    reversal._events.push(postingProposalReversedEvent(this.id, { reversedFromId: this.id, reason: cmd.reason }));
    return reversal;
  }

  cancel(cmd: CancelPostingProposalCommand): void {
    if (this._status !== PostingProposalStatus.DRAFT) {
      throw new Error(`Cannot cancel proposal in status ${this._status}`);
    }
    if (cmd.expectedVersion !== this._version) {
      throw new Error(`Version conflict: expected ${cmd.expectedVersion}, actual ${this._version}`);
    }
    this._status = PostingProposalStatus.CANCELLED;
    this._version += 1;
    this._updatedAt = new Date();
    this._events.push(postingProposalCancelledEvent(this.id, { actorId: cmd.actorId, reason: cmd.reason }));
  }

  toSnapshot(): PostingProposalSnapshot {
    return {
      id: this.id,
      organizationId: this.organizationId,
      sourceType: this.sourceType,
      sourceId: this.sourceId,
      status: this._status,
      postingDate: this.postingDate.toISOString(),
      description: this.description,
      correlationId: this.correlationId,
      idempotencyKey: this.idempotencyKey,
      currencyOriginal: this.currencyOriginal,
      amountOriginal: this.amountOriginal?.toFixed(2) ?? null,
      fxRate: this.fxRate?.toFixed(6) ?? null,
      amountFunctional: this.amountFunctional.toFixed(2),
      lines: this.lines.map((l) => ({
        accountCode: l.accountCode,
        debit: l.debit.toFixed(2),
        credit: l.credit.toFixed(2),
        memo: l.memo,
        dimensionRefs: l.dimensionRefs,
      })),
      reversalOfId: this._reversalOfId,
      version: this._version,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this._updatedAt.toISOString(),
    };
  }

  static rehydrate(s: PostingProposalSnapshot): InventoryPostingProposal {
    return new InventoryPostingProposal(
      createEntityId(s.id), s.organizationId,
      s.sourceType as PostingSourceType, s.sourceId,
      s.status as PostingProposalStatus,
      new Date(s.postingDate), s.description, s.correlationId,
      s.idempotencyKey,
      s.currencyOriginal,
      s.amountOriginal ? new Decimal(s.amountOriginal) : null,
      s.fxRate ? new Decimal(s.fxRate) : null,
      new Decimal(s.amountFunctional),
      s.lines.map((l) => ({
        accountCode: l.accountCode,
        debit: new Decimal(l.debit),
        credit: new Decimal(l.credit),
        memo: l.memo,
        dimensionRefs: l.dimensionRefs,
      })),
      s.reversalOfId,
      s.version, new Date(s.createdAt), new Date(s.updatedAt),
    );
  }
}
