import {
  LocationConcurrencyError,
  LocationValidationError,
} from "../common/errors";
import { createEntityId, generateEntityId, type EntityId } from "../common/entity-id";
import type { ConfigureWarehouseLevelsCommand } from "./warehouse-location.commands";
import {
  type WarehouseLocationDomainEvent,
  warehouseLevelsConfiguredEvent,
} from "./warehouse-location.events";
import {
  validateMaxLevels,
  validateLevelName,
  validateUseFlagsConsistent,
} from "./warehouse-location.validator";

export const DEFAULT_LEVEL_NAMES = {
  level1Name: "Zona",
  level2Name: "Rua",
  level3Name: "Rack",
  level4Name: "Nível",
  level5Name: "Posição",
} as const;

export interface WarehouseLocationConfigSnapshot {
  id: string;
  warehouseId: string;
  maxLevels: number;
  level1Name: string;
  level2Name: string;
  level3Name: string;
  level4Name: string;
  level5Name: string;
  useLevel2: boolean;
  useLevel3: boolean;
  useLevel4: boolean;
  useLevel5: boolean;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export class WarehouseLocationConfig {
  private _events: WarehouseLocationDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly warehouseId: string,
    private _maxLevels: number,
    private _level1Name: string,
    private _level2Name: string,
    private _level3Name: string,
    private _level4Name: string,
    private _level5Name: string,
    private _useLevel2: boolean,
    private _useLevel3: boolean,
    private _useLevel4: boolean,
    private _useLevel5: boolean,
    private _version: number,
    readonly createdAt: Date,
    private _updatedAt: Date,
  ) {}

  get maxLevels(): number {
    return this._maxLevels;
  }
  get level1Name(): string {
    return this._level1Name;
  }
  get level2Name(): string {
    return this._level2Name;
  }
  get level3Name(): string {
    return this._level3Name;
  }
  get level4Name(): string {
    return this._level4Name;
  }
  get level5Name(): string {
    return this._level5Name;
  }
  get useLevel2(): boolean {
    return this._useLevel2;
  }
  get useLevel3(): boolean {
    return this._useLevel3;
  }
  get useLevel4(): boolean {
    return this._useLevel4;
  }
  get useLevel5(): boolean {
    return this._useLevel5;
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

  /**
   * Level 1 is always allowed when maxLevels >= 1.
   * Level N (N>1) requires useLevelN and maxLevels >= N.
   */
  allowsLevel(level: number): boolean {
    if (!Number.isInteger(level) || level < 1) {
      return false;
    }
    if (level === 1) {
      return this._maxLevels >= 1;
    }
    if (level > this._maxLevels) {
      return false;
    }
    switch (level) {
      case 2:
        return this._useLevel2;
      case 3:
        return this._useLevel3;
      case 4:
        return this._useLevel4;
      case 5:
        return this._useLevel5;
      default:
        return false;
    }
  }

  /**
   * Prevents reducing maxLevels below the highest existing physical location level.
   */
  assertCanReduceTo(
    maxLevels: number,
    highestExistingPhysicalLevel: number,
  ): void {
    validateMaxLevels(maxLevels);
    if (
      highestExistingPhysicalLevel > 0 &&
      highestExistingPhysicalLevel > maxLevels
    ) {
      throw new LocationValidationError(
        `Cannot reduce maxLevels to ${maxLevels}: highest existing physical level is ${highestExistingPhysicalLevel}`,
        {
          maxLevels,
          highestExistingPhysicalLevel,
          warehouseId: this.warehouseId,
        },
      );
    }
  }

  static createDefault(
    warehouseId: string,
    id?: string,
  ): WarehouseLocationConfig {
    const wid = warehouseId?.trim();
    if (!wid) {
      throw new LocationValidationError("warehouseId is required");
    }
    const now = new Date();
    const configId = id ? createEntityId(id) : generateEntityId();
    const config = new WarehouseLocationConfig(
      configId,
      wid,
      1,
      DEFAULT_LEVEL_NAMES.level1Name,
      DEFAULT_LEVEL_NAMES.level2Name,
      DEFAULT_LEVEL_NAMES.level3Name,
      DEFAULT_LEVEL_NAMES.level4Name,
      DEFAULT_LEVEL_NAMES.level5Name,
      false,
      false,
      false,
      false,
      0,
      now,
      now,
    );
    config._events.push(
      warehouseLevelsConfiguredEvent(config.id, config.warehouseId, {
        maxLevels: config.maxLevels,
        created: true,
      }),
    );
    return config;
  }

  configure(
    cmd: ConfigureWarehouseLevelsCommand,
    opts?: { highestExistingPhysicalLevel?: number; skipHighestLevelGuard?: boolean },
  ): void {
    if (
      cmd.expectedVersion !== undefined &&
      cmd.expectedVersion !== this._version
    ) {
      throw new LocationConcurrencyError(
        `Version mismatch: expected ${cmd.expectedVersion}, current ${this._version}`,
        {
          configId: this.id,
          warehouseId: this.warehouseId,
          expectedVersion: cmd.expectedVersion,
          currentVersion: this._version,
        },
      );
    }

    const maxLevels = Number(cmd.maxLevels);
    validateMaxLevels(maxLevels);

    const highest = opts?.highestExistingPhysicalLevel ?? 0;
    if (!opts?.skipHighestLevelGuard) {
    this.assertCanReduceTo(maxLevels, highest);
    }

    const useLevel2 = cmd.useLevel2 ?? false;
    const useLevel3 = cmd.useLevel3 ?? false;
    const useLevel4 = cmd.useLevel4 ?? false;
    const useLevel5 = cmd.useLevel5 ?? false;

    validateUseFlagsConsistent({
      maxLevels,
      useLevel2,
      useLevel3,
      useLevel4,
      useLevel5,
    });

    this._maxLevels = maxLevels;
    this._level1Name = validateLevelName(
      cmd.level1Name ?? this._level1Name,
      "level1Name",
    );
    this._level2Name = validateLevelName(
      cmd.level2Name ?? this._level2Name,
      "level2Name",
    );
    this._level3Name = validateLevelName(
      cmd.level3Name ?? this._level3Name,
      "level3Name",
    );
    this._level4Name = validateLevelName(
      cmd.level4Name ?? this._level4Name,
      "level4Name",
    );
    this._level5Name = validateLevelName(
      cmd.level5Name ?? this._level5Name,
      "level5Name",
    );
    this._useLevel2 = useLevel2 && maxLevels >= 2;
    this._useLevel3 = useLevel3 && maxLevels >= 3;
    this._useLevel4 = useLevel4 && maxLevels >= 4;
    this._useLevel5 = useLevel5 && maxLevels >= 5;

    this._version += 1;
    this._updatedAt = new Date();
    this._events.push(
      warehouseLevelsConfiguredEvent(this.id, this.warehouseId, {
        maxLevels: this._maxLevels,
        version: this._version,
        useLevel2: this._useLevel2,
        useLevel3: this._useLevel3,
        useLevel4: this._useLevel4,
        useLevel5: this._useLevel5,
      }),
    );
  }

  toSnapshot(): WarehouseLocationConfigSnapshot {
    return {
      id: this.id,
      warehouseId: this.warehouseId,
      maxLevels: this._maxLevels,
      level1Name: this._level1Name,
      level2Name: this._level2Name,
      level3Name: this._level3Name,
      level4Name: this._level4Name,
      level5Name: this._level5Name,
      useLevel2: this._useLevel2,
      useLevel3: this._useLevel3,
      useLevel4: this._useLevel4,
      useLevel5: this._useLevel5,
      version: this._version,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this._updatedAt.toISOString(),
    };
  }

  static rehydrate(
    snapshot: WarehouseLocationConfigSnapshot,
  ): WarehouseLocationConfig {
    return new WarehouseLocationConfig(
      createEntityId(snapshot.id),
      snapshot.warehouseId,
      snapshot.maxLevels,
      snapshot.level1Name,
      snapshot.level2Name,
      snapshot.level3Name,
      snapshot.level4Name,
      snapshot.level5Name,
      snapshot.useLevel2,
      snapshot.useLevel3,
      snapshot.useLevel4,
      snapshot.useLevel5,
      snapshot.version,
      new Date(snapshot.createdAt),
      new Date(snapshot.updatedAt),
    );
  }
}
