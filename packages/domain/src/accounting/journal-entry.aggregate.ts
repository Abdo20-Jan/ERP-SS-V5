import { Decimal } from "../common/decimal.vo";
import {
  createEntityId,
  generateEntityId,
  type EntityId,
} from "../common/entity-id";
import {
  AccountingValidationError,
  InvalidJournalStateError,
  InvalidLineError,
  ReversalRequiresReasonError,
} from "../common/errors";
import type {
  CreateJournalEntryCommand,
  PostJournalEntryCommand,
  ReverseJournalEntryCommand,
} from "./ledger.commands";
import {
  type LedgerDomainEvent,
  journalEntryCreatedEvent,
  journalEntryPostedEvent,
  journalEntryReversedEvent,
} from "./ledger.events";
import { JournalEntryStatus } from "./journal-entry-status.enum";
import { assertTransition } from "./journal-entry.state-machine";
import {
  sumCredits,
  sumDebits,
  validateDoubleEntry,
} from "./ledger.validator";
import { LineItem, type LineItemSnapshot } from "./line-item.vo";

export interface JournalEntrySnapshot {
  id: string;
  organizationId: string;
  journalId: string;
  entryNumber: string;
  entryDate: string;
  description: string;
  correlationId: string;
  originModule: string | null;
  originEntityType: string | null;
  originEntityId: string | null;
  status: string;
  createdById: string;
  postedById: string | null;
  postedAt: string | null;
  reversedById: string | null;
  reversedAt: string | null;
  reversedFromId: string | null;
  reversalReason: string | null;
  lines: LineItemSnapshot[];
  totalDebit: string;
  totalCredit: string;
  createdAt: string;
}

export class JournalEntry {
  private _events: LedgerDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly organizationId: string,
    readonly journalId: string,
    private _entryNumber: string,
    readonly entryDate: Date,
    readonly description: string,
    readonly correlationId: string,
    readonly lines: readonly LineItem[],
    private _status: JournalEntryStatus,
    readonly createdById: string,
    private _postedById: string | null,
    private _postedAt: Date | null,
    private _reversedById: string | null,
    private _reversedAt: Date | null,
    private _reversedFromId: string | null,
    private _reversalReason: string | null,
    readonly originModule: string | null,
    readonly originEntityType: string | null,
    readonly originEntityId: string | null,
    readonly createdAt: Date,
  ) {}

  get entryNumber(): string {
    return this._entryNumber;
  }
  get status(): JournalEntryStatus {
    return this._status;
  }
  get postedById(): string | null {
    return this._postedById;
  }
  get postedAt(): Date | null {
    return this._postedAt;
  }
  get reversedById(): string | null {
    return this._reversedById;
  }
  get reversedAt(): Date | null {
    return this._reversedAt;
  }
  get reversedFromId(): string | null {
    return this._reversedFromId;
  }
  get reversalReason(): string | null {
    return this._reversalReason;
  }

  get totalDebit(): Decimal {
    return sumDebits(this.lines);
  }
  get totalCredit(): Decimal {
    return sumCredits(this.lines);
  }

  pullEvents(): LedgerDomainEvent[] {
    const e = [...this._events];
    this._events = [];
    return e;
  }

  static createDraft(cmd: CreateJournalEntryCommand): JournalEntry {
    const journalId = cmd.journalId?.trim();
    const description = cmd.description?.trim();
    const correlationId = cmd.correlationId?.trim();
    const createdById = cmd.createdById?.trim();
    if (!journalId) {
      throw new AccountingValidationError("journalId is required");
    }
    if (!description) {
      throw new AccountingValidationError("description is required");
    }
    if (!correlationId) {
      throw new AccountingValidationError("correlationId is required");
    }
    if (!createdById) {
      throw new AccountingValidationError("createdById is required");
    }
    if (!cmd.lines?.length) {
      throw new InvalidLineError("Journal entry requires at least one line");
    }

    const lines = cmd.lines.map((l) => LineItem.create(l));
    // Draft may be unbalanced until post; still require valid XOR lines
    const entryDate =
      cmd.entryDate instanceof Date
        ? cmd.entryDate
        : new Date(cmd.entryDate);
    if (Number.isNaN(entryDate.getTime())) {
      throw new AccountingValidationError("Invalid entryDate");
    }

    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();
    const entry = new JournalEntry(
      id,
      cmd.organizationId?.trim() || "org_001",
      journalId,
      "",
      entryDate,
      description,
      correlationId,
      lines,
      JournalEntryStatus.DRAFT,
      createdById,
      null,
      null,
      null,
      null,
      null,
      null,
      cmd.originModule?.trim() || null,
      cmd.originEntityType?.trim() || null,
      cmd.originEntityId?.trim() || null,
      new Date(),
    );
    entry._events.push(
      journalEntryCreatedEvent(entry.id, {
        journalId: entry.journalId,
        correlationId: entry.correlationId,
        lineCount: entry.lines.length,
      }),
    );
    return entry;
  }

  post(cmd: PostJournalEntryCommand): void {
    assertTransition(this._status, JournalEntryStatus.POSTED);
    validateDoubleEntry(this.lines);
    const entryNumber = cmd.entryNumber?.trim();
    if (!entryNumber) {
      throw new AccountingValidationError("entryNumber is required on post");
    }
    if (!cmd.postedById?.trim()) {
      throw new AccountingValidationError("postedById is required");
    }
    this._status = JournalEntryStatus.POSTED;
    this._entryNumber = entryNumber;
    this._postedById = cmd.postedById.trim();
    this._postedAt = new Date();
    this._events.push(
      journalEntryPostedEvent(this.id, {
        entryNumber: this._entryNumber,
        totalDebit: this.totalDebit.toFixed(2),
        totalCredit: this.totalCredit.toFixed(2),
      }),
    );
  }

  /**
   * Mark this entry REVERSED and return a new auto-posted reversal entry
   * with inverted lines linked via reversedFromId.
   */
  reverse(cmd: ReverseJournalEntryCommand): {
    original: JournalEntry;
    reversal: JournalEntry;
  } {
    assertTransition(this._status, JournalEntryStatus.REVERSED);
    const reason = cmd.reason?.trim();
    if (!reason) {
      throw new ReversalRequiresReasonError();
    }
    if (!cmd.reversedById?.trim()) {
      throw new AccountingValidationError("reversedById is required");
    }
    if (!cmd.reversalCorrelationId?.trim()) {
      throw new AccountingValidationError(
        "reversalCorrelationId is required",
      );
    }
    if (!cmd.reversalEntryNumber?.trim()) {
      throw new AccountingValidationError("reversalEntryNumber is required");
    }

    const reversalDate =
      cmd.reversalDate instanceof Date
        ? cmd.reversalDate
        : new Date(cmd.reversalDate);
    if (Number.isNaN(reversalDate.getTime())) {
      throw new AccountingValidationError("Invalid reversalDate");
    }

    this._status = JournalEntryStatus.REVERSED;
    this._reversedById = cmd.reversedById.trim();
    this._reversedAt = new Date();
    this._reversalReason = reason;
    this._events.push(
      journalEntryReversedEvent(this.id, {
        reason,
        reversalCorrelationId: cmd.reversalCorrelationId,
      }),
    );

    const inverted = this.lines.map((l) => l.reverse());
    const reversal = new JournalEntry(
      generateEntityId(),
      this.organizationId,
      this.journalId,
      cmd.reversalEntryNumber.trim(),
      reversalDate,
      `Estorno: ${this.description} — ${reason}`,
      cmd.reversalCorrelationId.trim(),
      inverted,
      JournalEntryStatus.POSTED,
      cmd.reversedById.trim(),
      cmd.reversedById.trim(),
      new Date(),
      null,
      null,
      this.id,
      reason,
      this.originModule,
      this.originEntityType,
      this.originEntityId,
      new Date(),
    );
    reversal._events.push(
      journalEntryCreatedEvent(reversal.id, {
        reversedFromId: this.id,
        autoPosted: true,
      }),
      journalEntryPostedEvent(reversal.id, {
        entryNumber: reversal.entryNumber,
        reversedFromId: this.id,
      }),
    );

    return { original: this, reversal };
  }

  toSnapshot(): JournalEntrySnapshot {
    return {
      id: this.id,
      organizationId: this.organizationId,
      journalId: this.journalId,
      entryNumber: this._entryNumber,
      entryDate: this.entryDate.toISOString().slice(0, 10),
      description: this.description,
      correlationId: this.correlationId,
      originModule: this.originModule,
      originEntityType: this.originEntityType,
      originEntityId: this.originEntityId,
      status: this._status,
      createdById: this.createdById,
      postedById: this._postedById,
      postedAt: this._postedAt ? this._postedAt.toISOString() : null,
      reversedById: this._reversedById,
      reversedAt: this._reversedAt ? this._reversedAt.toISOString() : null,
      reversedFromId: this._reversedFromId,
      reversalReason: this._reversalReason,
      lines: this.lines.map((l) => l.toSnapshot()),
      totalDebit: this.totalDebit.toFixed(2),
      totalCredit: this.totalCredit.toFixed(2),
      createdAt: this.createdAt.toISOString(),
    };
  }

  static rehydrate(s: JournalEntrySnapshot): JournalEntry {
    if (
      s.status !== JournalEntryStatus.DRAFT &&
      s.status !== JournalEntryStatus.POSTED &&
      s.status !== JournalEntryStatus.REVERSED
    ) {
      throw new InvalidJournalStateError(`Unknown status: ${s.status}`);
    }
    return new JournalEntry(
      createEntityId(s.id),
      s.organizationId,
      s.journalId,
      s.entryNumber,
      new Date(s.entryDate),
      s.description,
      s.correlationId,
      s.lines.map((l) => LineItem.rehydrate(l)),
      s.status as JournalEntryStatus,
      s.createdById,
      s.postedById,
      s.postedAt ? new Date(s.postedAt) : null,
      s.reversedById,
      s.reversedAt ? new Date(s.reversedAt) : null,
      s.reversedFromId,
      s.reversalReason,
      s.originModule,
      s.originEntityType,
      s.originEntityId,
      new Date(s.createdAt),
    );
  }
}
