import type { PostingRule } from "./posting-rule.aggregate";

export interface PostingRuleListParams {
  eventType?: string;
  originModule?: string;
  isActive?: boolean;
}

export interface PostingRuleRepository {
  save(rule: PostingRule): Promise<void>;
  findById(id: string): Promise<PostingRule | null>;
  findByEvent(
    eventType: string,
    originModule: string,
  ): Promise<PostingRule | null>;
  findAll(params?: PostingRuleListParams): Promise<PostingRule[]>;
  findActiveRulesForDate(
    eventType: string,
    originModule: string,
    date: Date,
  ): Promise<PostingRule | null>;
}

export const POSTING_RULE_REPOSITORY = Symbol("PostingRuleRepository");
