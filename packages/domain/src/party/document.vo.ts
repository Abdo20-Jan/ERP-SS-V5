import { InvalidCuitError, PartyValidationError } from "../common/errors";
import { DocumentType, isDocumentType } from "./document-type.enum";

export interface DocumentProps {
  type: DocumentType | string;
  value: string;
  isPrimary?: boolean;
  validatedAt?: Date | null;
}

/**
 * Argentine CUIT/CUIL check digit (módulo 11).
 * Multipliers: 5,4,3,2,7,6,5,4,3,2 on first 10 digits.
 */
export function normalizeTaxId(value: string): string {
  return value.replace(/\D/g, "");
}

export function isValidCuitMod11(value: string): boolean {
  const digits = normalizeTaxId(value);
  if (!/^\d{11}$/.test(digits)) {
    return false;
  }
  const multipliers = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += Number(digits[i]) * (multipliers[i] as number);
  }
  const mod = sum % 11;
  let check = 11 - mod;
  if (check === 11) check = 0;
  if (check === 10) check = 9;
  return check === Number(digits[10]);
}

export class Document {
  readonly type: DocumentType;
  readonly value: string;
  readonly isPrimary: boolean;
  readonly validatedAt: Date | null;

  constructor(props: DocumentProps) {
    if (!isDocumentType(String(props.type))) {
      throw new PartyValidationError(`Invalid document type: ${props.type}`, {
        type: props.type,
      });
    }
    this.type = props.type as DocumentType;

    const raw = props.value?.trim() ?? "";
    if (!raw) {
      throw new PartyValidationError("Document value is required");
    }

    if (this.type === DocumentType.CUIT || this.type === DocumentType.CUIL) {
      const normalized = normalizeTaxId(raw);
      if (!isValidCuitMod11(normalized)) {
        throw new InvalidCuitError(
          `Invalid ${this.type} check digit (módulo 11): ${raw}`,
          { type: this.type, value: raw },
        );
      }
      this.value = normalized;
      this.validatedAt = props.validatedAt ?? new Date();
    } else {
      this.value = raw;
      this.validatedAt = props.validatedAt ?? null;
    }

    this.isPrimary = props.isPrimary ?? false;
  }

  toJSON(): {
    type: string;
    value: string;
    isPrimary: boolean;
    validatedAt: string | null;
  } {
    return {
      type: this.type,
      value: this.value,
      isPrimary: this.isPrimary,
      validatedAt: this.validatedAt ? this.validatedAt.toISOString() : null,
    };
  }
}
