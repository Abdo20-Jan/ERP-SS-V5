import {
  createEntityId,
  generateEntityId,
  type EntityId,
} from "../common/entity-id";
import {
  AccountingValidationError,
  InvalidDateRangeError,
} from "../common/errors";
import type {
  CreatePostingRuleCommand,
  UpdatePostingRuleCommand,
} from "./posting-rule.commands";
import {
  type PostingRuleDomainEvent,
  postingRuleActivatedEvent,
  postingRuleCreatedEvent,
  postingRuleDeactivatedEvent,
  postingRuleUpdatedEvent,
} from "./posting-rule.events";
import {
  PostingRuleLine,
  type PostingRuleLineSnapshot,
} from "./posting-rule-line.vo";
import { validatePostingRuleLines } from "./posting-rule.validator";

export interface PostingRuleSnapshot {
  id: string;
  name: string;
  description: string | null;
  eventType: string;
  originModule: string;
  validFrom: string;
  validUntil: string | null;
  isActive: boolean;
  createdById: string | null;
  lines: PostingRuleLineSnapshot[];
  createdAt: string;
}

export class PostingRule {
  private _events: PostingRuleDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    private _name: string,
    private _description: string | null,
    readonly eventType: string,
    readonly originModule: string,
    readonly validFrom: Date,
    private _validUntil: Date | null,
    private _isActive: boolean,
    private _lines: readonly PostingRuleLine[],
    readonly createdById: string | null,
    readonly createdAt: Date,
  ) {}

  get name(): string {
    return this._name;
  }
  get description(): string | null {
    return this._description;
  }
  get validUntil(): Date | null {
    return this._validUntil;
  }
  get isActive(): boolean {
    return this._isActive;
  }
  get lines(): readonly PostingRuleLine[] {
    return this._lines;
  }

  pullEvents(): PostingRuleDomainEvent[] {
    const e = [...this._events];
    this._events = [];
    return e;
  }

  static create(cmd: CreatePostingRuleCommand): PostingRule {
    const name = cmd.name?.trim() ?? "";
    const eventType = cmd.eventType?.trim() ?? "";
    const originModule = cmd.originModule?.trim() ?? "";
    if (!name) {
      throw new AccountingValidationError("Posting rule name is required");
    }
    if (!eventType) {
      throw new AccountingValidationError("eventType is required");
    }
    if (!originModule) {
      throw new AccountingValidationError("originModule is required");
    }

    const validFrom =
      cmd.validFrom instanceof Date
        ? cmd.validFrom
        : cmd.validFrom
          ? new Date(cmd.validFrom)
          : new Date();
    if (Number.isNaN(validFrom.getTime())) {
      throw new InvalidDateRangeError("Invalid validFrom");
    }

    let validUntil: Date | null = null;
    if (cmd.validUntil !== undefined && cmd.validUntil !== null) {
      validUntil =
        cmd.validUntil instanceof Date
          ? cmd.validUntil
          : new Date(cmd.validUntil);
      if (Number.isNaN(validUntil.getTime())) {
        throw new InvalidDateRangeError("Invalid validUntil");
      }
      if (validFrom.getTime() >= validUntil.getTime()) {
        throw new InvalidDateRangeError("validFrom must be before validUntil");
      }
    }

    const lines = (cmd.lines ?? []).map((l) => PostingRuleLine.create(l));
    validatePostingRuleLines(lines);

    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();
    const rule = new PostingRule(
      id,
      name,
      cmd.description?.trim() || null,
      eventType,
      originModule,
      validFrom,
      validUntil,
      true,
      lines,
      cmd.createdById?.trim() || null,
      new Date(),
    );
    rule._events.push(
      postingRuleCreatedEvent(rule.id, {
        eventType: rule.eventType,
        originModule: rule.originModule,
        name: rule.name,
      }),
    );
    return rule;
  }

  update(cmd: UpdatePostingRuleCommand): void {
    if (cmd.name !== undefined) {
      const name = cmd.name.trim();
      if (!name) {
        throw new AccountingValidationError("Posting rule name is required");
      }
      this._name = name;
    }
    if (cmd.description !== undefined) {
      this._description = cmd.description?.trim() || null;
    }
    if (cmd.validUntil !== undefined) {
      if (cmd.validUntil === null) {
        this._validUntil = null;
      } else {
        const until =
          cmd.validUntil instanceof Date
            ? cmd.validUntil
            : new Date(cmd.validUntil);
        if (Number.isNaN(until.getTime())) {
          throw new InvalidDateRangeError("Invalid validUntil");
        }
        if (this.validFrom.getTime() >= until.getTime()) {
          throw new InvalidDateRangeError(
            "validFrom must be before validUntil",
          );
        }
        this._validUntil = until;
      }
    }
    if (cmd.lines !== undefined) {
      const lines = cmd.lines.map((l) => PostingRuleLine.create(l));
      validatePostingRuleLines(lines);
      this._lines = lines;
    }
    this._events.push(postingRuleUpdatedEvent(this.id));
  }

  deactivate(): void {
    if (!this._isActive) return;
    this._isActive = false;
    this._events.push(postingRuleDeactivatedEvent(this.id));
  }

  activate(): void {
    if (this._isActive) return;
    this._isActive = true;
    this._events.push(postingRuleActivatedEvent(this.id));
  }

  isEffectiveAt(date: Date): boolean {
    if (!this._isActive) return false;
    if (date.getTime() < this.validFrom.getTime()) return false;
    if (this._validUntil && date.getTime() >= this._validUntil.getTime()) {
      return false;
    }
    return true;
  }

  toSnapshot(): PostingRuleSnapshot {
    return {
      id: this.id,
      name: this._name,
      description: this._description,
      eventType: this.eventType,
      originModule: this.originModule,
      validFrom: this.validFrom.toISOString(),
      validUntil: this._validUntil ? this._validUntil.toISOString() : null,
      isActive: this._isActive,
      createdById: this.createdById,
      lines: this._lines.map((l) => l.toSnapshot()),
      createdAt: this.createdAt.toISOString(),
    };
  }

  static rehydrate(s: PostingRuleSnapshot): PostingRule {
    return new PostingRule(
      createEntityId(s.id),
      s.name,
      s.description,
      s.eventType,
      s.originModule,
      new Date(s.validFrom),
      s.validUntil ? new Date(s.validUntil) : null,
      s.isActive,
      s.lines.map((l) => PostingRuleLine.rehydrate(l)),
      s.createdById,
      new Date(s.createdAt),
    );
  }
}
