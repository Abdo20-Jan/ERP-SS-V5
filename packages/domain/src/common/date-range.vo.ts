import { InvalidDateRangeError } from "./errors";

export class DateRange {
  private readonly _validFrom: Date;
  private readonly _validUntil: Date | undefined;

  constructor(validFrom: Date, validUntil?: Date) {
    if (!(validFrom instanceof Date) || Number.isNaN(validFrom.getTime())) {
      throw new InvalidDateRangeError("validFrom must be a valid Date");
    }
    if (validUntil !== undefined) {
      if (!(validUntil instanceof Date) || Number.isNaN(validUntil.getTime())) {
        throw new InvalidDateRangeError("validUntil must be a valid Date when provided");
      }
      if (validFrom.getTime() > validUntil.getTime()) {
        throw new InvalidDateRangeError(
          "validFrom must be less than or equal to validUntil",
          {
            validFrom: validFrom.toISOString(),
            validUntil: validUntil.toISOString(),
          },
        );
      }
    }

    this._validFrom = new Date(validFrom.getTime());
    this._validUntil =
      validUntil === undefined ? undefined : new Date(validUntil.getTime());
  }

  get validFrom(): Date {
    return new Date(this._validFrom.getTime());
  }

  get validUntil(): Date | undefined {
    return this._validUntil === undefined
      ? undefined
      : new Date(this._validUntil.getTime());
  }

  get isValid(): boolean {
    return true;
  }

  get isInfinite(): boolean {
    return this._validUntil === undefined;
  }

  contains(date: Date): boolean {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
      return false;
    }
    const t = date.getTime();
    if (t < this._validFrom.getTime()) {
      return false;
    }
    if (this._validUntil !== undefined && t > this._validUntil.getTime()) {
      return false;
    }
    return true;
  }

  overlaps(other: DateRange): boolean {
    const aStart = this._validFrom.getTime();
    const aEnd = this._validUntil?.getTime() ?? Number.POSITIVE_INFINITY;
    const bStart = other._validFrom.getTime();
    const bEnd = other._validUntil?.getTime() ?? Number.POSITIVE_INFINITY;
    return aStart <= bEnd && bStart <= aEnd;
  }
}
