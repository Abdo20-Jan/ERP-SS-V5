import {
  createEntityId,
  generateEntityId,
  type EntityId,
} from "../common/entity-id";
import {
  createCurrencyCode,
  type CurrencyCode,
} from "../common/currency-code.vo";
import { AccountingValidationError } from "../common/errors";
import type { CreateCurrencyCommand } from "./currency.commands";
import {
  type CurrencyDomainEvent,
  currencyCreatedEvent,
} from "./currency.events";
import {
  validateDecimalPlaces,
  validateFunctionalPresentationFlags,
} from "./currency.validator";

export interface CurrencySnapshot {
  id: string;
  code: string;
  name: string;
  symbol: string;
  decimalPlaces: number;
  isFunctional: boolean;
  isPresentation: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export class Currency {
  private _events: CurrencyDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly code: CurrencyCode,
    private _name: string,
    private _symbol: string,
    readonly decimalPlaces: number,
    readonly isFunctional: boolean,
    readonly isPresentation: boolean,
    private _isActive: boolean,
    readonly createdAt: Date,
    private _updatedAt: Date,
  ) {}

  get name(): string {
    return this._name;
  }
  get symbol(): string {
    return this._symbol;
  }
  get isActive(): boolean {
    return this._isActive;
  }
  get updatedAt(): Date {
    return this._updatedAt;
  }

  pullEvents(): CurrencyDomainEvent[] {
    const e = [...this._events];
    this._events = [];
    return e;
  }

  static create(cmd: CreateCurrencyCommand): Currency {
    const code = createCurrencyCode(cmd.code);
    const name = cmd.name?.trim();
    const symbol = cmd.symbol?.trim();
    if (!name) throw new AccountingValidationError("Currency name is required");
    if (!symbol) {
      throw new AccountingValidationError("Currency symbol is required");
    }

    const decimalPlaces = cmd.decimalPlaces ?? 2;
    validateDecimalPlaces(decimalPlaces);

    const isFunctional = cmd.isFunctional ?? code === "ARS";
    const isPresentation = cmd.isPresentation ?? false;
    validateFunctionalPresentationFlags({
      code,
      isFunctional,
      isPresentation,
    });

    const now = new Date();
    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();
    const currency = new Currency(
      id,
      code,
      name,
      symbol,
      decimalPlaces,
      isFunctional,
      isPresentation,
      true,
      now,
      now,
    );
    currency._events.push(
      currencyCreatedEvent(currency.id, {
        code: currency.code,
        isFunctional: currency.isFunctional,
        isPresentation: currency.isPresentation,
      }),
    );
    return currency;
  }

  deactivate(): void {
    if (!this._isActive) return;
    this._isActive = false;
    this._updatedAt = new Date();
  }

  activate(): void {
    if (this._isActive) return;
    this._isActive = true;
    this._updatedAt = new Date();
  }

  equals(other: Currency): boolean {
    return this.code === other.code;
  }

  toSnapshot(): CurrencySnapshot {
    return {
      id: this.id,
      code: this.code,
      name: this._name,
      symbol: this._symbol,
      decimalPlaces: this.decimalPlaces,
      isFunctional: this.isFunctional,
      isPresentation: this.isPresentation,
      isActive: this._isActive,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this._updatedAt.toISOString(),
    };
  }

  static rehydrate(s: CurrencySnapshot): Currency {
    return new Currency(
      createEntityId(s.id),
      createCurrencyCode(s.code),
      s.name,
      s.symbol,
      s.decimalPlaces,
      s.isFunctional,
      s.isPresentation,
      s.isActive,
      new Date(s.createdAt),
      new Date(s.updatedAt),
    );
  }
}
