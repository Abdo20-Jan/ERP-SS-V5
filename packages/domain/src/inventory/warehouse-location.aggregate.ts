import {
  LocationHasChildrenError,
  LocationInactiveError,
  LocationConcurrencyError,
  LocationValidationError,
} from "../common/errors";
import { createEntityId, generateEntityId, type EntityId } from "../common/entity-id";
import {
  defaultVirtualCode,
  type VirtualLocationType,
} from "./virtual-location-type.enum";
import type {
  CreateLocationCommand,
  UpdateLocationCommand,
} from "./warehouse-location.commands";
import {
  type WarehouseLocationDomainEvent,
  locationActivatedEvent,
  locationCreatedEvent,
  locationDeactivatedEvent,
  locationUpdatedEvent,
} from "./warehouse-location.events";
import {
  LOCATION_ROOT_PARENT_KEY,
  LOCATION_VIRTUAL_LEVEL,
  validateCapacity,
  validateLocationCode,
  validateLocationName,
  validatePhysicalLevel,
  validateVirtualType,
} from "./warehouse-location.validator";

export interface LocationParentRef {
  id: string;
  level: number;
  path: string;
  isVirtual: boolean;
  isActive: boolean;
}

export interface LocationConfigRef {
  allowsLevel: (level: number) => boolean;
  maxLevels: number;
}

export interface WarehouseLocationSnapshot {
  id: string;
  warehouseId: string;
  parentId: string | null;
  parentKey: string;
  level: number;
  code: string;
  name: string;
  path: string;
  isVirtual: boolean;
  virtualType: string | null;
  isActive: boolean;
  capacity: number | null;
  capacityUnit: string | null;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export class WarehouseLocation {
  private _events: WarehouseLocationDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly warehouseId: string,
    readonly parentId: string | null,
    readonly parentKey: string,
    readonly level: number,
    readonly code: string,
    private _name: string,
    readonly path: string,
    readonly isVirtual: boolean,
    readonly virtualType: VirtualLocationType | null,
    private _isActive: boolean,
    private _capacity: number | null,
    private _capacityUnit: string | null,
    private _version: number,
    readonly createdAt: Date,
    private _updatedAt: Date,
  ) {}

  get name(): string {
    return this._name;
  }
  get isActive(): boolean {
    return this._isActive;
  }
  get capacity(): number | null {
    return this._capacity;
  }
  get capacityUnit(): string | null {
    return this._capacityUnit;
  }
  get version(): number {
    return this._version;
  }
  get updatedAt(): Date {
    return this._updatedAt;
  }

  pullEvents(): WarehouseLocationDomainEvent[] {
    const events = [...this._events];
    this._events = [];
    return events;
  }

  static normalizeCode(code: string): string {
    return code.trim().toUpperCase();
  }

  static buildPath(parentPath: string | null, code: string): string {
    const normalized = WarehouseLocation.normalizeCode(code);
    if (!parentPath) {
      return normalized;
    }
    return `${parentPath}>${normalized}`;
  }

  static createPhysical(
    cmd: CreateLocationCommand,
    opts: { parent: LocationParentRef | null; config: LocationConfigRef },
  ): WarehouseLocation {
    const warehouseId = cmd.warehouseId?.trim();
    if (!warehouseId) {
      throw new LocationValidationError("warehouseId is required");
    }

    const level = Number(cmd.level);
    validatePhysicalLevel(level);

    if (!opts.config.allowsLevel(level)) {
      throw new LocationValidationError(
        `Level ${level} is not allowed by warehouse location config (maxLevels=${opts.config.maxLevels})`,
        { level, maxLevels: opts.config.maxLevels, warehouseId },
      );
    }

    if (level === 1) {
      if (opts.parent !== null || cmd.parentId) {
        throw new LocationValidationError(
          "Level 1 location must not have a parent",
          { level, parentId: cmd.parentId ?? opts.parent?.id },
        );
      }
    } else {
      if (!opts.parent) {
        throw new LocationValidationError(
          `Level ${level} location requires a parent`,
          { level },
        );
      }
      if (opts.parent.isVirtual) {
        throw new LocationValidationError(
          "Virtual location cannot be a parent of a physical location",
          { parentId: opts.parent.id },
        );
      }
      if (!opts.parent.isActive) {
        throw new LocationValidationError(
          "Parent location must be active",
          { parentId: opts.parent.id },
        );
      }
      if (opts.parent.level !== level - 1) {
        throw new LocationValidationError(
          `Parent level must be ${level - 1}, got ${opts.parent.level}`,
          {
            level,
            parentLevel: opts.parent.level,
            parentId: opts.parent.id,
          },
        );
      }
    }

    const code = WarehouseLocation.normalizeCode(
      validateLocationCode(cmd.code ?? ""),
    );
    const name = validateLocationName(cmd.name ?? "");
    const capacity = validateCapacity(cmd.capacity);
    const capacityUnit = cmd.capacityUnit?.trim() || null;

    const parentId = level === 1 ? null : opts.parent!.id;
    const parentKey = parentId ?? LOCATION_ROOT_PARENT_KEY;
    const parentPath = level === 1 ? null : opts.parent!.path;
    const path = WarehouseLocation.buildPath(parentPath, code);

    const now = new Date();
    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();

    const location = new WarehouseLocation(
      id,
      warehouseId,
      parentId,
      parentKey,
      level,
      code,
      name,
      path,
      false,
      null,
      true,
      capacity,
      capacityUnit,
      0,
      now,
      now,
    );

    location._events.push(
      locationCreatedEvent(location.id, location.warehouseId, {
        code: location.code,
        level: location.level,
        path: location.path,
        isVirtual: false,
        parentId: location.parentId,
      }),
    );
    return location;
  }

  static createVirtual(
    cmd: CreateLocationCommand,
    warehouseId: string,
  ): WarehouseLocation {
    const wid = (warehouseId ?? cmd.warehouseId)?.trim();
    if (!wid) {
      throw new LocationValidationError("warehouseId is required");
    }

    const virtualType = validateVirtualType(cmd.virtualType ?? "");
    const codeRaw = cmd.code?.trim()
      ? cmd.code
      : defaultVirtualCode(virtualType);
    const code = WarehouseLocation.normalizeCode(validateLocationCode(codeRaw));
    const name = validateLocationName(
      cmd.name?.trim() ? cmd.name : virtualType,
    );
    const capacity = validateCapacity(cmd.capacity);
    const capacityUnit = cmd.capacityUnit?.trim() || null;

    if (cmd.parentId) {
      throw new LocationValidationError(
        "Virtual location must not have a parent",
        { parentId: cmd.parentId },
      );
    }

    const now = new Date();
    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();

    const location = new WarehouseLocation(
      id,
      wid,
      null,
      LOCATION_ROOT_PARENT_KEY,
      LOCATION_VIRTUAL_LEVEL,
      code,
      name,
      WarehouseLocation.buildPath(null, code),
      true,
      virtualType,
      true,
      capacity,
      capacityUnit,
      0,
      now,
      now,
    );

    location._events.push(
      locationCreatedEvent(location.id, location.warehouseId, {
        code: location.code,
        level: location.level,
        path: location.path,
        isVirtual: true,
        virtualType: location.virtualType,
      }),
    );
    return location;
  }

  update(cmd: UpdateLocationCommand): void {
    if (!this._isActive) {
      throw new LocationInactiveError(
        "Inactive location cannot be updated (reactivate first)",
        { locationId: this.id },
      );
    }

    if (
      cmd.expectedVersion !== undefined &&
      cmd.expectedVersion !== this._version
    ) {
      throw new LocationConcurrencyError(
        `Version mismatch: expected ${cmd.expectedVersion}, current ${this._version}`,
        {
          locationId: this.id,
          expectedVersion: cmd.expectedVersion,
          currentVersion: this._version,
        },
      );
    }

    if (cmd.name !== undefined) {
      this._name = validateLocationName(cmd.name);
    }

    if (cmd.capacity !== undefined) {
      this._capacity = validateCapacity(cmd.capacity);
    }

    if (cmd.capacityUnit !== undefined) {
      this._capacityUnit = cmd.capacityUnit?.trim() || null;
    }

    this._version += 1;
    this._updatedAt = new Date();
    this._events.push(
      locationUpdatedEvent(this.id, this.warehouseId, {
        version: this._version,
      }),
    );
  }

  deactivate(reason: string, hasActiveChildren: boolean): void {
    if (!reason?.trim()) {
      throw new LocationValidationError("Deactivation reason is required");
    }
    if (hasActiveChildren) {
      throw new LocationHasChildrenError(
        "Cannot deactivate location with active children",
        { locationId: this.id },
      );
    }
    if (!this._isActive) {
      return;
    }
    this._isActive = false;
    this._version += 1;
    this._updatedAt = new Date();
    this._events.push(
      locationDeactivatedEvent(this.id, this.warehouseId, reason.trim()),
    );
  }

  activate(): void {
    if (this._isActive) {
      return;
    }
    this._isActive = true;
    this._version += 1;
    this._updatedAt = new Date();
    this._events.push(locationActivatedEvent(this.id, this.warehouseId));
  }

  toSnapshot(): WarehouseLocationSnapshot {
    return {
      id: this.id,
      warehouseId: this.warehouseId,
      parentId: this.parentId,
      parentKey: this.parentKey,
      level: this.level,
      code: this.code,
      name: this._name,
      path: this.path,
      isVirtual: this.isVirtual,
      virtualType: this.virtualType,
      isActive: this._isActive,
      capacity: this._capacity,
      capacityUnit: this._capacityUnit,
      version: this._version,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this._updatedAt.toISOString(),
    };
  }

  static rehydrate(snapshot: WarehouseLocationSnapshot): WarehouseLocation {
    return new WarehouseLocation(
      createEntityId(snapshot.id),
      snapshot.warehouseId,
      snapshot.parentId,
      snapshot.parentKey,
      snapshot.level,
      snapshot.code,
      snapshot.name,
      snapshot.path,
      snapshot.isVirtual,
      snapshot.virtualType as VirtualLocationType | null,
      snapshot.isActive,
      snapshot.capacity,
      snapshot.capacityUnit,
      snapshot.version,
      new Date(snapshot.createdAt),
      new Date(snapshot.updatedAt),
    );
  }
}
