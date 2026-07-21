import { Decimal } from "../common/decimal.vo";
import {
  createEntityId,
  generateEntityId,
  type EntityId,
} from "../common/entity-id";
import { InvalidLineError } from "../common/errors";

export interface LineItemSnapshot {
  id: string;
  accountId: string;
  debitAmount: string;
  creditAmount: string;
  originCurrency: string | null;
  originAmount: string | null;
  originExchangeRate: string | null;
  costCenterId: string | null;
  projectId: string | null;
  partyId: string | null;
  productId: string | null;
  description: string | null;
  reference: string | null;
}

export interface CreateLineItemInput {
  id?: string;
  accountId: string;
  debitAmount?: string | number | Decimal | null;
  creditAmount?: string | number | Decimal | null;
  originCurrency?: string | null;
  originAmount?: string | number | Decimal | null;
  originExchangeRate?: string | number | Decimal | null;
  costCenterId?: string | null;
  projectId?: string | null;
  partyId?: string | null;
  productId?: string | null;
  description?: string | null;
  reference?: string | null;
}

export class LineItem {
  private constructor(
    readonly id: EntityId,
    readonly accountId: string,
    readonly debitAmount: Decimal,
    readonly creditAmount: Decimal,
    readonly originCurrency: string | null,
    readonly originAmount: Decimal | null,
    readonly originExchangeRate: Decimal | null,
    readonly costCenterId: string | null,
    readonly projectId: string | null,
    readonly partyId: string | null,
    readonly productId: string | null,
    readonly description: string | null,
    readonly reference: string | null,
  ) {}

  static create(input: CreateLineItemInput): LineItem {
    const accountId = input.accountId?.trim();
    if (!accountId) {
      throw new InvalidLineError("accountId is required");
    }

    const debit = new Decimal(input.debitAmount ?? 0);
    const credit = new Decimal(input.creditAmount ?? 0);

    if (debit.isNegative() || credit.isNegative()) {
      throw new InvalidLineError("Amounts cannot be negative");
    }

    const hasDebit = debit.isPositive();
    const hasCredit = credit.isPositive();
    if (hasDebit && hasCredit) {
      throw new InvalidLineError("Line cannot have both debit and credit");
    }
    if (!hasDebit && !hasCredit) {
      throw new InvalidLineError("Line must have either debit or credit");
    }

    let originAmount: Decimal | null = null;
    let originExchangeRate: Decimal | null = null;
    let originCurrency: string | null = null;

    if (
      input.originAmount !== undefined &&
      input.originAmount !== null &&
      String(input.originAmount) !== ""
    ) {
      originAmount = new Decimal(input.originAmount);
      originCurrency = input.originCurrency?.trim().toUpperCase() || null;
      if (
        input.originExchangeRate === undefined ||
        input.originExchangeRate === null ||
        String(input.originExchangeRate) === ""
      ) {
        throw new InvalidLineError(
          "originAmount requires originCurrency and originExchangeRate",
        );
      }
      originExchangeRate = new Decimal(input.originExchangeRate);
      if (!originCurrency) {
        throw new InvalidLineError(
          "originAmount requires originCurrency and originExchangeRate",
        );
      }
      if (!originExchangeRate.isPositive()) {
        throw new InvalidLineError("originExchangeRate must be positive");
      }
    }

    const id = input.id ? createEntityId(input.id) : generateEntityId();
    return new LineItem(
      id,
      accountId,
      debit,
      credit,
      originCurrency,
      originAmount,
      originExchangeRate,
      input.costCenterId?.trim() || null,
      input.projectId?.trim() || null,
      input.partyId?.trim() || null,
      input.productId?.trim() || null,
      input.description?.trim() || null,
      input.reference?.trim() || null,
    );
  }

  /** Invert debit/credit for reversal entries. */
  reverse(): LineItem {
    return LineItem.create({
      accountId: this.accountId,
      debitAmount: this.creditAmount,
      creditAmount: this.debitAmount,
      originCurrency: this.originCurrency,
      originAmount: this.originAmount ?? undefined,
      originExchangeRate: this.originExchangeRate ?? undefined,
      costCenterId: this.costCenterId,
      projectId: this.projectId,
      partyId: this.partyId,
      productId: this.productId,
      description: this.description
        ? `Estorno: ${this.description}`
        : "Estorno",
      reference: this.reference,
    });
  }

  toSnapshot(): LineItemSnapshot {
    return {
      id: this.id,
      accountId: this.accountId,
      debitAmount: this.debitAmount.toFixed(2),
      creditAmount: this.creditAmount.toFixed(2),
      originCurrency: this.originCurrency,
      originAmount: this.originAmount ? this.originAmount.toFixed(2) : null,
      originExchangeRate: this.originExchangeRate
        ? this.originExchangeRate.toString()
        : null,
      costCenterId: this.costCenterId,
      projectId: this.projectId,
      partyId: this.partyId,
      productId: this.productId,
      description: this.description,
      reference: this.reference,
    };
  }

  static rehydrate(s: LineItemSnapshot): LineItem {
    return LineItem.create({
      id: s.id,
      accountId: s.accountId,
      debitAmount: s.debitAmount,
      creditAmount: s.creditAmount,
      originCurrency: s.originCurrency,
      originAmount: s.originAmount ?? undefined,
      originExchangeRate: s.originExchangeRate ?? undefined,
      costCenterId: s.costCenterId,
      projectId: s.projectId,
      partyId: s.partyId,
      productId: s.productId,
      description: s.description,
      reference: s.reference,
    });
  }
}
