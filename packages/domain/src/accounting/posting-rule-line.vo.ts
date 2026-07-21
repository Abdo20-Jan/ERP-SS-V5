import {
  createEntityId,
  generateEntityId,
  type EntityId,
} from "../common/entity-id";
import {
  AccountingValidationError,
  InvalidSequenceError,
} from "../common/errors";
import {
  PlaceholderRef,
  type PlaceholderRefSnapshot,
} from "./placeholder-ref.vo";

export type DimensionSource = "LITERAL" | "PARTY" | "PRODUCT" | "PROJECT";

export interface DimensionMapping {
  costCenterFrom?: DimensionSource;
  costCenterValue?: string;
  projectFrom?: DimensionSource;
  projectValue?: string;
}

export interface PostingRuleLineSnapshot {
  id: string;
  sequence: number;
  debitAccountCode: string;
  creditAccountCode: string;
  condition: string | null;
  dimensionMapping: DimensionMapping | null;
  placeholders: PlaceholderRefSnapshot[];
}

export interface CreatePostingRuleLineInput {
  id?: string;
  sequence: number;
  debitAccountCode: string;
  creditAccountCode: string;
  condition?: string | null;
  dimensionMapping?: DimensionMapping | null;
  placeholders?: Array<{
    placeholder: string;
    providedBy: string;
    valueType: string;
  }>;
}

export class PostingRuleLine {
  private constructor(
    readonly id: EntityId,
    readonly sequence: number,
    readonly debitAccountCode: string,
    readonly creditAccountCode: string,
    readonly condition: string | null,
    readonly dimensionMapping: DimensionMapping | null,
    readonly placeholders: readonly PlaceholderRef[],
  ) {}

  static create(input: CreatePostingRuleLineInput): PostingRuleLine {
    if (!Number.isInteger(input.sequence) || input.sequence < 1) {
      throw new InvalidSequenceError("Sequence must be an integer >= 1", {
        sequence: input.sequence,
      });
    }
    const debit = input.debitAccountCode?.trim() ?? "";
    const credit = input.creditAccountCode?.trim() ?? "";
    if (!debit && !credit) {
      throw new AccountingValidationError(
        "Line must have at least debit or credit account code",
      );
    }
    const placeholders = (input.placeholders ?? []).map((p) =>
      PlaceholderRef.create(p.placeholder, p.providedBy, p.valueType),
    );
    const id = input.id ? createEntityId(input.id) : generateEntityId();
    return new PostingRuleLine(
      id,
      input.sequence,
      debit,
      credit,
      input.condition?.trim() || null,
      input.dimensionMapping ?? null,
      placeholders,
    );
  }

  toSnapshot(): PostingRuleLineSnapshot {
    return {
      id: this.id,
      sequence: this.sequence,
      debitAccountCode: this.debitAccountCode,
      creditAccountCode: this.creditAccountCode,
      condition: this.condition,
      dimensionMapping: this.dimensionMapping,
      placeholders: this.placeholders.map((p) => p.toSnapshot()),
    };
  }

  static rehydrate(s: PostingRuleLineSnapshot): PostingRuleLine {
    return PostingRuleLine.create({
      id: s.id,
      sequence: s.sequence,
      debitAccountCode: s.debitAccountCode,
      creditAccountCode: s.creditAccountCode,
      condition: s.condition,
      dimensionMapping: s.dimensionMapping,
      placeholders: s.placeholders,
    });
  }
}
