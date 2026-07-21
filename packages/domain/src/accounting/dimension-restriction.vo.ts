import { InvalidRestrictionError } from "../common/errors";

export type RestrictionType = "REQUIRED" | "PROHIBITED" | "OPTIONAL";

export const KNOWN_RESTRICTION_TYPES: RestrictionType[] = [
  "REQUIRED",
  "PROHIBITED",
  "OPTIONAL",
];

export function isRestrictionType(value: string): value is RestrictionType {
  return KNOWN_RESTRICTION_TYPES.includes(value as RestrictionType);
}

export interface AccountDimensionRestrictionSnapshot {
  accountId: string;
  dimensionId: string;
  restriction: RestrictionType;
}

export class AccountDimensionRestriction {
  private constructor(
    readonly accountId: string,
    readonly dimensionId: string,
    readonly restriction: RestrictionType,
  ) {}

  static create(
    accountId: string,
    dimensionId: string,
    restriction: string,
  ): AccountDimensionRestriction {
    const acc = accountId?.trim();
    const dim = dimensionId?.trim();
    if (!acc) {
      throw new InvalidRestrictionError("accountId is required");
    }
    if (!dim) {
      throw new InvalidRestrictionError("dimensionId is required");
    }
    if (!isRestrictionType(restriction)) {
      throw new InvalidRestrictionError(
        `Invalid restriction: ${restriction}`,
        { restriction },
      );
    }
    return new AccountDimensionRestriction(acc, dim, restriction);
  }

  toSnapshot(): AccountDimensionRestrictionSnapshot {
    return {
      accountId: this.accountId,
      dimensionId: this.dimensionId,
      restriction: this.restriction,
    };
  }

  static rehydrate(
    s: AccountDimensionRestrictionSnapshot,
  ): AccountDimensionRestriction {
    return AccountDimensionRestriction.create(
      s.accountId,
      s.dimensionId,
      s.restriction,
    );
  }
}
