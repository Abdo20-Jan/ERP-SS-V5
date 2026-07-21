export class DomainError extends Error {
  readonly code: string;
  readonly details?: Record<string, unknown>;

  constructor(
    message: string,
    code: string,
    details?: Record<string, unknown>,
  ) {
    super(message);
    this.name = new.target.name;
    this.code = code;
    this.details = details;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class InvalidMoneyError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "INVALID_MONEY", details);
  }
}

export class CurrencyMismatchError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "CURRENCY_MISMATCH", details);
  }
}

export class InvalidCurrencyCodeError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "INVALID_CURRENCY_CODE", details);
  }
}

export class InvalidDateRangeError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "INVALID_DATE_RANGE", details);
  }
}

export class InvalidEntityIdError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "INVALID_ENTITY_ID", details);
  }
}
