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

export class InvalidAccountTypeError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "INVALID_ACCOUNT_TYPE", details);
  }
}

export class InvalidHierarchyError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "INVALID_HIERARCHY", details);
  }
}

export class InvalidAccountCodeError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "INVALID_CODE", details);
  }
}

export class SystemAccountError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "SYSTEM_ACCOUNT", details);
  }
}

export class AccountingValidationError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "VALIDATION_ERROR", details);
  }
}

export class InvalidRateError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "INVALID_RATE", details);
  }
}

export class DuplicateFunctionalCurrencyError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "DUPLICATE_FUNCTIONAL", details);
  }
}

export class DuplicatePresentationCurrencyError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "DUPLICATE_PRESENTATION", details);
  }
}

export class CurrencyInactiveError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "CURRENCY_INACTIVE", details);
  }
}

export class InvalidDimensionTypeError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "INVALID_DIMENSION_TYPE", details);
  }
}

export class InvalidRestrictionError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "INVALID_RESTRICTION", details);
  }
}

export class InvalidDimensionHierarchyError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "INVALID_DIMENSION_HIERARCHY", details);
  }
}

export class UnbalancedEntryError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "UNBALANCED_ENTRY", details);
  }
}

export class InvalidLineError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "INVALID_LINE", details);
  }
}

export class InvalidJournalStateError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "INVALID_STATE", details);
  }
}

export class ReversalRequiresReasonError extends DomainError {
  constructor(
    message = "Reversal requires a non-empty reason",
    details?: Record<string, unknown>,
  ) {
    super(message, "REVERSAL_REQUIRES_REASON", details);
  }
}

export class InvalidJournalTypeError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "INVALID_JOURNAL_TYPE", details);
  }
}

export class DuplicateCorrelationError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "DUPLICATE_CORRELATION", details);
  }
}

// Posting rules (MS-01-SS8)
export class MissingDebitCreditError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "MISSING_DEBIT_CREDIT", details);
  }
}

export class InvalidPlaceholderError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "INVALID_PLACEHOLDER", details);
  }
}

export class InvalidSequenceError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "INVALID_SEQUENCE", details);
  }
}

export class DuplicatePostingRuleError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "DUPLICATE_RULE", details);
  }
}

// Inventory warehouses (PR-INVENTORY-01-S01)
export class WarehouseValidationError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "VALIDATION_ERROR", details);
  }
}

export class WarehouseInactiveError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "WAREHOUSE_INACTIVE", details);
  }
}

export class WarehouseConcurrencyError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "VERSION_CONFLICT", details);
  }
}

// Inventory warehouse locations (PR-INVENTORY-01-S02)
export class LocationValidationError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "VALIDATION_ERROR", details);
  }
}

export class LocationInactiveError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "LOCATION_INACTIVE", details);
  }
}

export class LocationConcurrencyError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "VERSION_CONFLICT", details);
  }
}

export class LocationHasChildrenError extends DomainError {
  constructor(message: string, details?: Record<string, unknown>) {
    super(message, "LOCATION_HAS_ACTIVE_CHILDREN", details);
  }
}
