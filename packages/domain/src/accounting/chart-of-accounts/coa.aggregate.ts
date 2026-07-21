import {
  createEntityId,
  generateEntityId,
  type EntityId,
} from "../../common/entity-id";
import { AccountingValidationError } from "../../common/errors";
import type { CreateChartOfAccountsCommand } from "./account.commands";
import {
  type AccountingDomainEvent,
  coaCreatedEvent,
} from "./account.events";

export interface ChartOfAccountsSnapshot {
  id: string;
  name: string;
  description: string | null;
  version: number;
  validFrom: string;
  validUntil: string | null;
  isActive: boolean;
  createdAt: string;
}

export class ChartOfAccounts {
  private _events: AccountingDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    private _name: string,
    private _description: string | null,
    readonly version: number,
    readonly validFrom: Date,
    readonly validUntil: Date | null,
    private _isActive: boolean,
    readonly createdAt: Date,
  ) {}

  get name(): string {
    return this._name;
  }
  get description(): string | null {
    return this._description;
  }
  get isActive(): boolean {
    return this._isActive;
  }

  pullEvents(): AccountingDomainEvent[] {
    const e = [...this._events];
    this._events = [];
    return e;
  }

  static create(cmd: CreateChartOfAccountsCommand): ChartOfAccounts {
    const name = cmd.name?.trim();
    if (!name) {
      throw new AccountingValidationError("COA name is required");
    }
    const validFrom =
      cmd.validFrom == null
        ? new Date()
        : cmd.validFrom instanceof Date
          ? cmd.validFrom
          : new Date(cmd.validFrom);
    if (Number.isNaN(validFrom.getTime())) {
      throw new AccountingValidationError("Invalid validFrom");
    }
    let validUntil: Date | null = null;
    if (cmd.validUntil != null && cmd.validUntil !== "") {
      validUntil =
        cmd.validUntil instanceof Date
          ? cmd.validUntil
          : new Date(cmd.validUntil);
      if (Number.isNaN(validUntil.getTime())) {
        throw new AccountingValidationError("Invalid validUntil");
      }
      if (validUntil.getTime() < validFrom.getTime()) {
        throw new AccountingValidationError(
          "validUntil must be >= validFrom",
        );
      }
    }
    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();
    const coa = new ChartOfAccounts(
      id,
      name,
      cmd.description?.trim() || null,
      1,
      validFrom,
      validUntil,
      true,
      new Date(),
    );
    coa._events.push(coaCreatedEvent(coa.id, { name: coa.name }));
    return coa;
  }

  toSnapshot(): ChartOfAccountsSnapshot {
    return {
      id: this.id,
      name: this._name,
      description: this._description,
      version: this.version,
      validFrom: this.validFrom.toISOString(),
      validUntil: this.validUntil ? this.validUntil.toISOString() : null,
      isActive: this._isActive,
      createdAt: this.createdAt.toISOString(),
    };
  }

  static rehydrate(s: ChartOfAccountsSnapshot): ChartOfAccounts {
    return new ChartOfAccounts(
      createEntityId(s.id),
      s.name,
      s.description,
      s.version,
      new Date(s.validFrom),
      s.validUntil ? new Date(s.validUntil) : null,
      s.isActive,
      new Date(s.createdAt),
    );
  }
}
