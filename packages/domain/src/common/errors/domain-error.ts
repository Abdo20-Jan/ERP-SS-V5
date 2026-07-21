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

export class InvalidCuitError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "INVALID_CUIT", details);
  }
}

export class PartyValidationError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "VALIDATION_ERROR", details);
  }
}

export class PartyInactiveError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "PARTY_INACTIVE", details);
  }
}

export class InvalidNcmError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "INVALID_NCM", details);
  }
}

export class ProductValidationError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "VALIDATION_ERROR", details);
  }
}

export class ProductInactiveError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "PRODUCT_INACTIVE", details);
  }
}
