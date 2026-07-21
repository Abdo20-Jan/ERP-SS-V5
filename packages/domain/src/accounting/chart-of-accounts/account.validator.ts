import {
  InvalidAccountCodeError,
  InvalidAccountTypeError,
  InvalidHierarchyError,
} from "../../common/errors";
import { AccountNature } from "./account-nature.enum";
import { AccountType } from "./account-type.enum";

export const TYPE_NATURE_MAP: Record<AccountType, AccountNature> = {
  [AccountType.ASSET]: AccountNature.DEBITOR,
  [AccountType.LIABILITY]: AccountNature.CREDITOR,
  [AccountType.EQUITY]: AccountNature.CREDITOR,
  [AccountType.REVENUE]: AccountNature.CREDITOR,
  [AccountType.EXPENSE]: AccountNature.DEBITOR,
  [AccountType.CONTROL]: AccountNature.DEBITOR,
};

export function expectedNature(type: AccountType): AccountNature {
  return TYPE_NATURE_MAP[type];
}

export function validateTypeNature(type: AccountType, nature: AccountNature): void {
  const expected = TYPE_NATURE_MAP[type];
  if (expected !== nature) {
    throw new InvalidAccountTypeError(
      `Account type ${type} must have nature ${expected}, got ${nature}`,
      { type, nature, expected },
    );
  }
}

export function validateHierarchy(input: {
  level: number;
  parentId?: string | null;
  isSystem: boolean;
  code: string;
  parentCode?: string | null;
  parentLevel?: number | null;
}): void {
  if (input.level < 1) {
    throw new InvalidHierarchyError("Level must be >= 1");
  }
  if (input.parentId) {
    if (input.level === 1) {
      throw new InvalidHierarchyError("Level 1 cannot have parent");
    }
    if (input.parentLevel == null) {
      throw new InvalidHierarchyError("parentLevel is required when parentId is set");
    }
    if (input.level !== input.parentLevel + 1) {
      throw new InvalidHierarchyError(
        `Level must be parent.level + 1 (expected ${input.parentLevel + 1}, got ${input.level})`,
      );
    }
    if (input.parentCode && !input.code.startsWith(input.parentCode)) {
      throw new InvalidAccountCodeError(
        `Account code '${input.code}' must start with parent code '${input.parentCode}'`,
        { code: input.code, parentCode: input.parentCode },
      );
    }
    if (input.isSystem) {
      throw new InvalidHierarchyError("Only level 1 can be system");
    }
  } else if (input.level !== 1) {
    throw new InvalidHierarchyError("Only level 1 can have no parent");
  }
  if (input.isSystem && input.level !== 1) {
    throw new InvalidHierarchyError("Only level 1 can be system");
  }
}
