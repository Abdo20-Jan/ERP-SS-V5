import { createCurrencyCode, type CurrencyCode } from "./currency-code.vo";
import { Decimal, RoundingMode } from "./decimal.vo";
import { CurrencyMismatchError, InvalidMoneyError } from "./errors";

const MONEY_SCALE = 2;

export class Money {
  private readonly _amount: Decimal;
  private readonly _currency: CurrencyCode;

  constructor(
    amount: Decimal | number | string,
    currency: CurrencyCode | string,
  ) {
    const dec = amount instanceof Decimal ? amount : new Decimal(amount);
    if (!dec.unwrap().isFinite()) {
      throw new InvalidMoneyError("Money amount must be a finite decimal", {
        amount: String(amount),
      });
    }

    this._amount = dec;
    this._currency = createCurrencyCode(String(currency));
  }

  get amount(): Decimal {
    return this._amount;
  }

  get currency(): CurrencyCode {
    return this._currency;
  }

  private assertSameCurrency(other: Money): void {
    if (this._currency !== other._currency) {
      throw new CurrencyMismatchError(
        `Currency mismatch: ${this._currency} vs ${other._currency}`,
        { left: this._currency, right: other._currency },
      );
    }
  }

  add(other: Money): Money {
    this.assertSameCurrency(other);
    return new Money(this._amount.add(other._amount), this._currency);
  }

  subtract(other: Money): Money {
    this.assertSameCurrency(other);
    return new Money(this._amount.subtract(other._amount), this._currency);
  }

  multiply(factor: Decimal | number): Money {
    const f = factor instanceof Decimal ? factor : new Decimal(factor);
    return new Money(this._amount.multiply(f), this._currency);
  }

  divide(divisor: Decimal | number): Money {
    const d = divisor instanceof Decimal ? divisor : new Decimal(divisor);
    if (d.isZero()) {
      throw new InvalidMoneyError("Cannot divide money by zero");
    }
    const result = this._amount
      .divide(d)
      .round(MONEY_SCALE, RoundingMode.ROUND_HALF_UP);
    return new Money(result, this._currency);
  }

  equals(other: Money): boolean {
    return (
      this._currency === other._currency && this._amount.equals(other._amount)
    );
  }

  isZero(): boolean {
    return this._amount.isZero();
  }

  isPositive(): boolean {
    return this._amount.isPositive();
  }

  isNegative(): boolean {
    return this._amount.isNegative();
  }

  convertTo(
    targetCurrency: CurrencyCode | string,
    rate: Decimal | number | string,
  ): Money {
    const target = createCurrencyCode(String(targetCurrency));
    const r = rate instanceof Decimal ? rate : new Decimal(rate);
    if (!r.isPositive()) {
      throw new InvalidMoneyError("FX rate must be positive", {
        rate: r.toString(),
      });
    }
    const converted = this._amount
      .multiply(r)
      .round(MONEY_SCALE, RoundingMode.ROUND_HALF_UP);
    return new Money(converted, target);
  }

  toJSON(): { amount: string; currency: string } {
    return {
      amount: this._amount.toFixed(MONEY_SCALE, RoundingMode.ROUND_HALF_UP),
      currency: this._currency,
    };
  }

  toString(): string {
    const json = this.toJSON();
    return `${json.amount} ${json.currency}`;
  }
}
