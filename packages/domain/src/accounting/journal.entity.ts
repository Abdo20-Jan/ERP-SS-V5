import {
  createEntityId,
  generateEntityId,
  type EntityId,
} from "../common/entity-id";
import {
  AccountingValidationError,
  InvalidJournalTypeError,
} from "../common/errors";
import type { CreateJournalCommand } from "./ledger.commands";
import {
  type LedgerDomainEvent,
  journalCreatedEvent,
} from "./ledger.events";
import { type JournalType, isJournalType } from "./journal-type.enum";

export interface JournalSnapshot {
  id: string;
  code: string;
  name: string;
  type: string;
  isActive: boolean;
  nextSequence: number;
  createdAt: string;
}

export class Journal {
  private _events: LedgerDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly code: string,
    private _name: string,
    readonly type: JournalType,
    private _isActive: boolean,
    private _nextSequence: number,
    readonly createdAt: Date,
  ) {}

  get name(): string {
    return this._name;
  }
  get isActive(): boolean {
    return this._isActive;
  }
  get nextSequence(): number {
    return this._nextSequence;
  }

  pullEvents(): LedgerDomainEvent[] {
    const e = [...this._events];
    this._events = [];
    return e;
  }

  static create(cmd: CreateJournalCommand): Journal {
    if (!isJournalType(String(cmd.type))) {
      throw new InvalidJournalTypeError(`Unknown journal type: ${cmd.type}`, {
        type: cmd.type,
      });
    }
    const code = cmd.code?.trim();
    const name = cmd.name?.trim();
    if (!code) throw new AccountingValidationError("Journal code is required");
    if (!name) throw new AccountingValidationError("Journal name is required");

    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();
    const journal = new Journal(
      id,
      code,
      name,
      cmd.type as JournalType,
      true,
      1,
      new Date(),
    );
    journal._events.push(
      journalCreatedEvent(journal.id, { code: journal.code, type: journal.type }),
    );
    return journal;
  }

  /** Peek next number without mutating (repo does atomic increment). */
  formatEntryNumber(sequence: number): string {
    return `${this.code}-${String(sequence).padStart(6, "0")}`;
  }

  /** Domain-side sequence bump after successful post allocation. */
  allocateSequence(): { sequence: number; entryNumber: string } {
    const sequence = this._nextSequence;
    this._nextSequence = sequence + 1;
    return { sequence, entryNumber: this.formatEntryNumber(sequence) };
  }

  deactivate(): void {
    this._isActive = false;
  }

  activate(): void {
    this._isActive = true;
  }

  toSnapshot(): JournalSnapshot {
    return {
      id: this.id,
      code: this.code,
      name: this._name,
      type: this.type,
      isActive: this._isActive,
      nextSequence: this._nextSequence,
      createdAt: this.createdAt.toISOString(),
    };
  }

  static rehydrate(s: JournalSnapshot): Journal {
    if (!isJournalType(s.type)) {
      throw new InvalidJournalTypeError(`Unknown journal type: ${s.type}`);
    }
    return new Journal(
      createEntityId(s.id),
      s.code,
      s.name,
      s.type,
      s.isActive,
      s.nextSequence,
      new Date(s.createdAt),
    );
  }
}
