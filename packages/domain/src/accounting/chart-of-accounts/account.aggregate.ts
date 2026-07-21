import {
  createEntityId,
  generateEntityId,
  type EntityId,
} from "../../common/entity-id";
import {
  AccountingValidationError,
  SystemAccountError,
} from "../../common/errors";
import type {
  CreateAccountCommand,
  UpdateAccountCommand,
} from "./account.commands";
import {
  type AccountingDomainEvent,
  accountActivatedEvent,
  accountCreatedEvent,
  accountDeactivatedEvent,
  accountDeletedEvent,
  accountUpdatedEvent,
} from "./account.events";
import {
  type AccountNature,
  isAccountNature,
} from "./account-nature.enum";
import { type AccountType, isAccountType } from "./account-type.enum";
import {
  validateHierarchy,
  validateTypeNature,
} from "./account.validator";

export interface AccountSnapshot {
  id: string;
  coaId: string;
  code: string;
  name: string;
  type: string;
  nature: string;
  parentId: string | null;
  level: number;
  isSystem: boolean;
  isActive: boolean;
  allowManualPosting: boolean;
  description: string | null;
  validFrom: string;
  validUntil: string | null;
  createdAt: string;
  updatedAt: string;
}

export class Account {
  private _events: AccountingDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly coaId: string,
    readonly code: string,
    private _name: string,
    readonly type: AccountType,
    readonly nature: AccountNature,
    readonly parentId: string | null,
    readonly level: number,
    readonly isSystem: boolean,
    private _isActive: boolean,
    private _allowManualPosting: boolean,
    private _description: string | null,
    readonly validFrom: Date,
    readonly validUntil: Date | null,
    readonly createdAt: Date,
    private _updatedAt: Date,
  ) {}

  get name(): string {
    return this._name;
  }
  get isActive(): boolean {
    return this._isActive;
  }
  get allowManualPosting(): boolean {
    return this._allowManualPosting;
  }
  get description(): string | null {
    return this._description;
  }
  get updatedAt(): Date {
    return this._updatedAt;
  }

  pullEvents(): AccountingDomainEvent[] {
    const e = [...this._events];
    this._events = [];
    return e;
  }

  static create(cmd: CreateAccountCommand): Account {
    if (!isAccountType(String(cmd.type))) {
      throw new AccountingValidationError(`Invalid account type: ${cmd.type}`);
    }
    if (!isAccountNature(String(cmd.nature))) {
      throw new AccountingValidationError(
        `Invalid account nature: ${cmd.nature}`,
      );
    }
    const type = cmd.type as AccountType;
    const nature = cmd.nature as AccountNature;
    validateTypeNature(type, nature);

    const code = cmd.code?.trim();
    const name = cmd.name?.trim();
    if (!code) throw new AccountingValidationError("Account code is required");
    if (!name) throw new AccountingValidationError("Account name is required");
    if (!cmd.coaId?.trim()) {
      throw new AccountingValidationError("coaId is required");
    }

    const parentId = cmd.parentId ?? null;
    const isSystem = cmd.isSystem ?? false;
    const level = parentId
      ? (cmd.parentLevel != null ? cmd.parentLevel + 1 : 2)
      : 1;

    validateHierarchy({
      level,
      parentId,
      isSystem,
      code,
      parentCode: cmd.parentCode,
      parentLevel: cmd.parentLevel,
    });

    const now = new Date();
    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();
    const account = new Account(
      id,
      cmd.coaId,
      code,
      name,
      type,
      nature,
      parentId,
      level,
      isSystem,
      true,
      cmd.allowManualPosting ?? !isSystem,
      cmd.description?.trim() || null,
      now,
      null,
      now,
      now,
    );
    account._events.push(
      accountCreatedEvent(account.id, {
        code: account.code,
        type: account.type,
        coaId: account.coaId,
      }),
    );
    return account;
  }

  /** Create child under this account (inherits type/nature). */
  createChild(codeSegment: string, name: string): Account {
    const segment = codeSegment.trim();
    if (!segment) {
      throw new AccountingValidationError("Child code segment is required");
    }
    const fullCode = segment.startsWith(this.code)
      ? segment
      : `${this.code}.${segment}`;
    return Account.create({
      coaId: this.coaId,
      code: fullCode,
      name,
      type: this.type,
      nature: this.nature,
      parentId: this.id,
      parentCode: this.code,
      parentLevel: this.level,
      isSystem: false,
      allowManualPosting: true,
    });
  }

  update(cmd: UpdateAccountCommand): void {
    if (cmd.name !== undefined) {
      if (!cmd.name.trim()) {
        throw new AccountingValidationError("Account name is required");
      }
      this._name = cmd.name.trim();
    }
    if (cmd.description !== undefined) {
      this._description = cmd.description?.trim() || null;
    }
    if (cmd.allowManualPosting !== undefined) {
      this._allowManualPosting = cmd.allowManualPosting;
    }
    this._updatedAt = new Date();
    this._events.push(accountUpdatedEvent(this.id));
  }

  deactivate(): void {
    if (!this._isActive) return;
    this._isActive = false;
    this._updatedAt = new Date();
    this._events.push(accountDeactivatedEvent(this.id));
  }

  activate(): void {
    if (this._isActive) return;
    this._isActive = true;
    this._updatedAt = new Date();
    this._events.push(accountActivatedEvent(this.id));
  }

  assertCanDelete(hasChildren: boolean, hasJournal: boolean): void {
    if (this.isSystem) {
      throw new SystemAccountError("System account cannot be deleted", {
        accountId: this.id,
        code: this.code,
      });
    }
    if (hasChildren) {
      throw new AccountingValidationError(
        "Account with children cannot be deleted",
        { accountId: this.id },
      );
    }
    if (hasJournal) {
      throw new AccountingValidationError(
        "Account with journal lines cannot be deleted",
        { accountId: this.id, code: "ACCOUNT_HAS_BALANCE" },
      );
    }
    this._events.push(accountDeletedEvent(this.id));
  }

  toSnapshot(): AccountSnapshot {
    return {
      id: this.id,
      coaId: this.coaId,
      code: this.code,
      name: this._name,
      type: this.type,
      nature: this.nature,
      parentId: this.parentId,
      level: this.level,
      isSystem: this.isSystem,
      isActive: this._isActive,
      allowManualPosting: this._allowManualPosting,
      description: this._description,
      validFrom: this.validFrom.toISOString(),
      validUntil: this.validUntil ? this.validUntil.toISOString() : null,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this._updatedAt.toISOString(),
    };
  }

  static rehydrate(s: AccountSnapshot): Account {
    return new Account(
      createEntityId(s.id),
      s.coaId,
      s.code,
      s.name,
      s.type as AccountType,
      s.nature as AccountNature,
      s.parentId,
      s.level,
      s.isSystem,
      s.isActive,
      s.allowManualPosting,
      s.description,
      new Date(s.validFrom),
      s.validUntil ? new Date(s.validUntil) : null,
      new Date(s.createdAt),
      new Date(s.updatedAt),
    );
  }
}
