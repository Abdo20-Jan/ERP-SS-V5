import DecimalJs from "decimal.js";

export enum RoundingMode {
  ROUND_HALF_UP = "ROUND_HALF_UP",
  ROUND_DOWN = "ROUND_DOWN",
  ROUND_UP = "ROUND_UP",
}

const ROUNDING_MAP: Record<RoundingMode, DecimalJs.Rounding> = {
  [RoundingMode.ROUND_HALF_UP]: DecimalJs.ROUND_HALF_UP,
  [RoundingMode.ROUND_DOWN]: DecimalJs.ROUND_DOWN,
  [RoundingMode.ROUND_UP]: DecimalJs.ROUND_UP,
};

/**
 * Exact decimal value object. Never use binary float for money/rates (D-003.11 / D-007).
 */
export class Decimal {
  private readonly value: DecimalJs;

  constructor(value: number | string | Decimal | DecimalJs) {
    if (value instanceof Decimal) {
      this.value = value.value;
    } else if (value instanceof DecimalJs) {
      this.value = value;
    } else {
      this.value = new DecimalJs(value);
    }

    if (!this.value.isFinite()) {
      throw new Error(`Invalid decimal value: ${String(value)}`);
    }
  }

  add(other: Decimal | number | string): Decimal {
    return new Decimal(this.value.plus(new Decimal(other).value));
  }

  subtract(other: Decimal | number | string): Decimal {
    return new Decimal(this.value.minus(new Decimal(other).value));
  }

  multiply(other: Decimal | number | string): Decimal {
    return new Decimal(this.value.times(new Decimal(other).value));
  }

  divide(other: Decimal | number | string): Decimal {
    const divisor = new Decimal(other).value;
    if (divisor.isZero()) {
      throw new Error("Division by zero");
    }
    return new Decimal(this.value.div(divisor));
  }

  round(
    precision: number,
    mode: RoundingMode = RoundingMode.ROUND_HALF_UP,
  ): Decimal {
    return new Decimal(
      this.value.toDecimalPlaces(precision, ROUNDING_MAP[mode]),
    );
  }

  equals(other: Decimal | number | string): boolean {
    return this.value.equals(new Decimal(other).value);
  }

  greaterThan(other: Decimal | number | string): boolean {
    return this.value.greaterThan(new Decimal(other).value);
  }

  lessThan(other: Decimal | number | string): boolean {
    return this.value.lessThan(new Decimal(other).value);
  }

  isZero(): boolean {
    return this.value.isZero();
  }

  isPositive(): boolean {
    return this.value.isPositive() && !this.value.isZero();
  }

  isNegative(): boolean {
    return this.value.isNegative();
  }

  toNumber(): number {
    return this.value.toNumber();
  }

  toString(): string {
    return this.value.toString();
  }

  toJSON(): string {
    return this.value.toString();
  }

  /** Internal access for Money formatting without exposing decimal.js. */
  toFixed(precision: number, mode: RoundingMode = RoundingMode.ROUND_HALF_UP): string {
    return this.value.toFixed(precision, ROUNDING_MAP[mode]);
  }

  /** @internal */
  unwrap(): DecimalJs {
    return this.value;
  }
}
