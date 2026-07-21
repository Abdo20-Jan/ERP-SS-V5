import {
  AccountingValidationError,
  InvalidDimensionHierarchyError,
  InvalidDimensionTypeError,
} from "../common/errors";
import {
  type DimensionType,
  isValidDimensionType,
} from "./dimension-type.enum";

export function validateDimensionCode(code: string): string {
  const trimmed = code?.trim() ?? "";
  if (!trimmed) {
    throw new AccountingValidationError("Dimension code is required");
  }
  return trimmed;
}

export function validateDimensionName(name: string): string {
  const trimmed = name?.trim() ?? "";
  if (!trimmed) {
    throw new AccountingValidationError("Dimension name is required");
  }
  return trimmed;
}

export function validateDimensionType(type: string): DimensionType {
  if (!isValidDimensionType(type)) {
    throw new InvalidDimensionTypeError(`Unknown dimension type: ${type}`, {
      type,
    });
  }
  return type;
}

/** Parent must exist (caller loads it) and share the same type. */
export function validateDimensionHierarchy(input: {
  type: DimensionType;
  parentId: string | null | undefined;
  parentType?: DimensionType | string | null;
  parentExists?: boolean;
}): void {
  if (!input.parentId) return;
  if (input.parentExists === false) {
    throw new InvalidDimensionHierarchyError(
      "Parent dimension does not exist",
      { parentId: input.parentId },
    );
  }
  if (input.parentType != null && input.parentType !== input.type) {
    throw new InvalidDimensionHierarchyError(
      "Parent dimension must be the same type",
      {
        type: input.type,
        parentType: input.parentType,
        parentId: input.parentId,
      },
    );
  }
}
