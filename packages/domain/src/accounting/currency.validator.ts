import {
  AccountingValidationError,
  InvalidRateError,
} from "../common/errors";
import { Decimal } from "../common/decimal.vo";

export function validateDecimalPlaces(decimalPlaces: number): void {
  if (
    !Number.isInteger(decimalPlaces) ||
    decimalPlaces < 0 ||
    decimalPlaces > 8
  ) {
    throw new AccountingValidationError(
      "Decimal places must be an integer between 0 and 8",
      { decimalPlaces },
    );
  }
}

export function validateFunctionalPresentationFlags(input: {
  code: string;
  isFunctional: boolean;
  isPresentation: boolean;
}): void {
  if (input.isFunctional && input.isPresentation) {
    throw new AccountingValidationError(
      "A currency cannot be both functional and presentation",
    );
  }
  if (input.code === "ARS" && !input.isFunctional) {
    throw new AccountingValidationError("ARS must be the functional currency");
  }
}

export function validatePositiveRate(rate: Decimal): void {
  if (!rate.isPositive()) {
    throw new InvalidRateError("Exchange rate must be positive", {
      rate: rate.toString(),
    });
  }
}

export function validateRateDateRange(
  validFrom: Date,
  validUntil: Date | null | undefined,
): void {
  if (validUntil && validFrom.getTime() >= validUntil.getTime()) {
    throw new AccountingValidationError(
      "validFrom must be before validUntil",
      {
        validFrom: validFrom.toISOString(),
        validUntil: validUntil.toISOString(),
      },
    );
  }
}
