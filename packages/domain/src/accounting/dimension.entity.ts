import {
  createEntityId,
  generateEntityId,
  type EntityId,
} from "../common/entity-id";
import { AccountingValidationError } from "../common/errors";
import type {
  CreateDimensionCommand,
  UpdateDimensionCommand,
} from "./dimension.commands";
import {
  type DimensionDomainEvent,
  dimensionActivatedEvent,
  dimensionCreatedEvent,
  dimensionDeactivatedEvent,
  dimensionUpdatedEvent,
} from "./dimension.events";
import {
  type DimensionType,
  isValidDimensionType,
} from "./dimension-type.enum";
import {
  validateDimensionCode,
  validateDimensionName,
  validateDimensionType,
  validateDimensionHierarchy,
} from "./dimension.validator";

export interface AccountingDimensionSnapshot {
  id: string;
  type: string;
  code: string;
  name: string;
  description: string | null;
  parentId: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export class AccountingDimension {
  private _events: DimensionDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly type: DimensionType,
    readonly code: string,
    private _name: string,
    private _description: string | null,
    readonly parentId: string | null,
    private _isActive: boolean,
    readonly createdAt: Date,
    private _updatedAt: Date,
  ) {}

  get name(): string {
    return this._name;
  }
  get description(): string | null {
    return this._description;
  }
  get isActive(): boolean {
    return this._isActive;
  }
  get updatedAt(): Date {
    return this._updatedAt;
  }

  pullEvents(): DimensionDomainEvent[] {
    const e = [...this._events];
    this._events = [];
    return e;
  }

  static create(cmd: CreateDimensionCommand): AccountingDimension {
    const type = validateDimensionType(String(cmd.type));
    const code = validateDimensionCode(cmd.code);
    const name = validateDimensionName(cmd.name);
    const parentId = cmd.parentId?.trim() || null;

    validateDimensionHierarchy({
      type,
      parentId,
      parentType: cmd.parentType,
      parentExists: cmd.parentExists,
    });

    const now = new Date();
    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();
    const dim = new AccountingDimension(
      id,
      type,
      code,
      name,
      cmd.description?.trim() || null,
      parentId,
      true,
      now,
      now,
    );
    dim._events.push(
      dimensionCreatedEvent(dim.id, {
        type: dim.type,
        code: dim.code,
        parentId: dim.parentId,
      }),
    );
    return dim;
  }

  /** Create child under this dimension (inherits type). */
  createChild(
    code: string,
    name: string,
    description?: string | null,
  ): AccountingDimension {
    return AccountingDimension.create({
      type: this.type,
      code,
      name,
      description,
      parentId: this.id,
      parentType: this.type,
      parentExists: true,
    });
  }

  update(cmd: UpdateDimensionCommand): void {
    if (cmd.name !== undefined) {
      this._name = validateDimensionName(cmd.name);
    }
    if (cmd.description !== undefined) {
      this._description = cmd.description?.trim() || null;
    }
    this._updatedAt = new Date();
    this._events.push(dimensionUpdatedEvent(this.id));
  }

  deactivate(): void {
    if (!this._isActive) return;
    this._isActive = false;
    this._updatedAt = new Date();
    this._events.push(dimensionDeactivatedEvent(this.id));
  }

  activate(): void {
    if (this._isActive) return;
    this._isActive = true;
    this._updatedAt = new Date();
    this._events.push(dimensionActivatedEvent(this.id));
  }

  toSnapshot(): AccountingDimensionSnapshot {
    return {
      id: this.id,
      type: this.type,
      code: this.code,
      name: this._name,
      description: this._description,
      parentId: this.parentId,
      isActive: this._isActive,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this._updatedAt.toISOString(),
    };
  }

  static rehydrate(s: AccountingDimensionSnapshot): AccountingDimension {
    if (!isValidDimensionType(s.type)) {
      throw new AccountingValidationError(
        `Unknown dimension type in snapshot: ${s.type}`,
      );
    }
    return new AccountingDimension(
      createEntityId(s.id),
      s.type,
      s.code,
      s.name,
      s.description,
      s.parentId,
      s.isActive,
      new Date(s.createdAt),
      new Date(s.updatedAt),
    );
  }
}
