import type { CreatePostingRuleLineInput } from "./posting-rule-line.vo";

export interface CreatePostingRuleCommand {
  id?: string;
  name: string;
  description?: string | null;
  eventType: string;
  originModule: string;
  validFrom?: Date | string;
  validUntil?: Date | string | null;
  lines: CreatePostingRuleLineInput[];
  createdById?: string | null;
}

export interface UpdatePostingRuleCommand {
  name?: string;
  description?: string | null;
  validUntil?: Date | string | null;
  lines?: CreatePostingRuleLineInput[];
}

export interface DeactivatePostingRuleCommand {
  id: string;
}
