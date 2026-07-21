import { InvalidPlaceholderError } from "../common/errors";

export type PlaceholderValueType =
  | "account_id"
  | "account_code"
  | "dimension_value"
  | "party_id";

export const KNOWN_PLACEHOLDER_VALUE_TYPES: PlaceholderValueType[] = [
  "account_id",
  "account_code",
  "dimension_value",
  "party_id",
];

export function isPlaceholderValueType(
  value: string,
): value is PlaceholderValueType {
  return KNOWN_PLACEHOLDER_VALUE_TYPES.includes(value as PlaceholderValueType);
}

export interface PlaceholderRefSnapshot {
  placeholder: string;
  providedBy: string;
  valueType: PlaceholderValueType;
}

export class PlaceholderRef {
  private constructor(
    readonly placeholder: string,
    readonly providedBy: string,
    readonly valueType: PlaceholderValueType,
  ) {}

  static create(
    placeholder: string,
    providedBy: string,
    valueType: string,
  ): PlaceholderRef {
    const name = placeholder?.trim() ?? "";
    const module = providedBy?.trim() ?? "";
    if (!name) {
      throw new InvalidPlaceholderError("placeholder name is required");
    }
    if (!module) {
      throw new InvalidPlaceholderError("providedBy module is required");
    }
    if (!isPlaceholderValueType(valueType)) {
      throw new InvalidPlaceholderError(`Invalid valueType: ${valueType}`, {
        valueType,
      });
    }
    return new PlaceholderRef(name, module, valueType);
  }

  toSnapshot(): PlaceholderRefSnapshot {
    return {
      placeholder: this.placeholder,
      providedBy: this.providedBy,
      valueType: this.valueType,
    };
  }

  static rehydrate(s: PlaceholderRefSnapshot): PlaceholderRef {
    return PlaceholderRef.create(s.placeholder, s.providedBy, s.valueType);
  }
}
