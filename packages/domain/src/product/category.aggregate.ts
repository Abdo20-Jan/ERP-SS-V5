import {
  createEntityId,
  generateEntityId,
  type EntityId,
} from "../common/entity-id";
import { ProductValidationError } from "../common/errors";
import type {
  CreateCategoryCommand,
  UpdateCategoryCommand,
} from "./product.commands";
import {
  categoryCreatedEvent,
  type ProductDomainEvent,
} from "./product.events";

export interface CategorySnapshot {
  id: string;
  code: string;
  name: string;
  parentId: string | null;
  level: number;
  path: string;
  isActive: boolean;
  createdAt: string;
}

export class Category {
  private _events: ProductDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly code: string,
    private _name: string,
    readonly parentId: string | null,
    readonly level: number,
    readonly path: string,
    private _isActive: boolean,
    readonly createdAt: Date,
  ) {}

  get name(): string {
    return this._name;
  }
  get isActive(): boolean {
    return this._isActive;
  }

  pullEvents(): ProductDomainEvent[] {
    const e = [...this._events];
    this._events = [];
    return e;
  }

  static create(cmd: CreateCategoryCommand): Category {
    const code = cmd.code?.trim();
    const name = cmd.name?.trim();
    if (!code) throw new ProductValidationError("Category code is required");
    if (!name) throw new ProductValidationError("Category name is required");

    let level = 1;
    let path = code;
    let parentId: string | null = null;

    if (cmd.parentId) {
      if (cmd.parentLevel == null || cmd.parentPath == null) {
        throw new ProductValidationError(
          "parentLevel and parentPath are required when parentId is set",
        );
      }
      parentId = cmd.parentId;
      level = cmd.parentLevel + 1;
      // hierarchical unique code is the path (e.g. 01.01)
      path = code.includes(".") ? code : `${cmd.parentPath}.${code}`;
    }

    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();
    const cat = new Category(
      id,
      code,
      name,
      parentId,
      level,
      path,
      true,
      new Date(),
    );
    cat._events.push(
      categoryCreatedEvent(cat.id, { code: cat.code, path: cat.path }),
    );
    return cat;
  }

  update(cmd: UpdateCategoryCommand): void {
    if (cmd.name !== undefined) {
      if (!cmd.name.trim()) {
        throw new ProductValidationError("Category name is required");
      }
      this._name = cmd.name.trim();
    }
    if (cmd.isActive !== undefined) {
      this._isActive = cmd.isActive;
    }
  }

  toSnapshot(): CategorySnapshot {
    return {
      id: this.id,
      code: this.code,
      name: this._name,
      parentId: this.parentId,
      level: this.level,
      path: this.path,
      isActive: this._isActive,
      createdAt: this.createdAt.toISOString(),
    };
  }

  static rehydrate(s: CategorySnapshot): Category {
    return new Category(
      createEntityId(s.id),
      s.code,
      s.name,
      s.parentId,
      s.level,
      s.path,
      s.isActive,
      new Date(s.createdAt),
    );
  }
}
