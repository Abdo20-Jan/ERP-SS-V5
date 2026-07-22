import {
  WarehouseConcurrencyError,
  WarehouseInactiveError,
  WarehouseValidationError,
} from "../common/errors";
import { createEntityId, generateEntityId, type EntityId } from "../common/entity-id";
import type {
  CreateWarehouseCommand,
  UpdateWarehouseCommand,
  WarehouseAddressInput,
} from "./warehouse.commands";
import {
  type WarehouseDomainEvent,
  warehouseActivatedEvent,
  warehouseCreatedEvent,
  warehouseDeactivatedEvent,
  warehouseUpdatedEvent,
} from "./warehouse.events";
import { isWarehouseType, type WarehouseType } from "./warehouse-type.enum";
import { validateWarehouseInvariants } from "./warehouse.validator";

export interface WarehouseSnapshot {
  id: string;
  organizationId: string;
  code: string;
  name: string;
  type: string;
  addressStreet: string | null;
  addressNumber: string | null;
  addressCity: string | null;
  addressProvince: string | null;
  addressCountry: string;
  addressPostalCode: string | null;
  zones: string[];
  capacity: number | null;
  capacityUnit: string | null;
  isActive: boolean;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export class Warehouse {
  private _events: WarehouseDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly organizationId: string,
    private _code: string,
    private _name: string,
    private _type: WarehouseType,
    private _addressStreet: string | null,
    private _addressNumber: string | null,
    private _addressCity: string | null,
    private _addressProvince: string | null,
    private _addressCountry: string,
    private _addressPostalCode: string | null,
    private _zones: string[],
    private _capacity: number | null,
    private _capacityUnit: string | null,
    private _isActive: boolean,
    private _version: number,
    readonly createdAt: Date,
    private _updatedAt: Date,
  ) {}

  get code(): string {
    return this._code;
  }
  get name(): string {
    return this._name;
  }
  get type(): WarehouseType {
    return this._type;
  }
  get addressStreet(): string | null {
    return this._addressStreet;
  }
  get addressNumber(): string | null {
    return this._addressNumber;
  }
  get addressCity(): string | null {
    return this._addressCity;
  }
  get addressProvince(): string | null {
    return this._addressProvince;
  }
  get addressCountry(): string {
    return this._addressCountry;
  }
  get addressPostalCode(): string | null {
    return this._addressPostalCode;
  }
  get zones(): readonly string[] {
    return this._zones;
  }
  get capacity(): number | null {
    return this._capacity;
  }
  get capacityUnit(): string | null {
    return this._capacityUnit;
  }
  get isActive(): boolean {
    return this._isActive;
  }
  get version(): number {
    return this._version;
  }
  get updatedAt(): Date {
    return this._updatedAt;
  }

  pullEvents(): WarehouseDomainEvent[] {
    const events = [...this._events];
    this._events = [];
    return events;
  }

  static normalizeCode(code: string): string {
    return code.trim().toUpperCase();
  }

  private static applyAddress(addr?: WarehouseAddressInput): {
    street: string | null;
    number: string | null;
    city: string | null;
    province: string | null;
    country: string;
    postalCode: string | null;
  } {
    return {
      street: addr?.street?.trim() || null,
      number: addr?.number?.trim() || null,
      city: addr?.city?.trim() || null,
      province: addr?.province?.trim() || null,
      country: addr?.country?.trim() || "AR",
      postalCode: addr?.postalCode?.trim() || null,
    };
  }

  static create(cmd: CreateWarehouseCommand): Warehouse {
    const code = Warehouse.normalizeCode(cmd.code ?? "");
    const name = (cmd.name ?? "").trim();
    const typeStr = String(cmd.type ?? "");
    const capacity =
      cmd.capacity === undefined || cmd.capacity === null
        ? null
        : Number(cmd.capacity);

    validateWarehouseInvariants({ code, name, type: typeStr, capacity });

    const address = Warehouse.applyAddress(cmd.address);
    const zones = (cmd.zones ?? []).map((z) => String(z).trim()).filter(Boolean);
    const now = new Date();
    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();

    const warehouse = new Warehouse(
      id,
      cmd.organizationId?.trim() || "org_001",
      code,
      name,
      typeStr as WarehouseType,
      address.street,
      address.number,
      address.city,
      address.province,
      address.country,
      address.postalCode,
      zones,
      capacity,
      cmd.capacityUnit?.trim() || null,
      true,
      0,
      now,
      now,
    );

    warehouse._events.push(
      warehouseCreatedEvent(warehouse.id, {
        code: warehouse.code,
        type: warehouse.type,
      }),
    );
    return warehouse;
  }

  update(cmd: UpdateWarehouseCommand): void {
    if (!this._isActive) {
      throw new WarehouseInactiveError(
        "Inactive warehouse cannot be updated (reactivate first)",
        { warehouseId: this.id },
      );
    }

    if (
      cmd.expectedVersion !== undefined &&
      cmd.expectedVersion !== this._version
    ) {
      throw new WarehouseConcurrencyError(
        `Version mismatch: expected ${cmd.expectedVersion}, current ${this._version}`,
        {
          warehouseId: this.id,
          expectedVersion: cmd.expectedVersion,
          currentVersion: this._version,
        },
      );
    }

    if (cmd.name !== undefined) {
      if (!cmd.name.trim()) {
        throw new WarehouseValidationError("name is required");
      }
      this._name = cmd.name.trim();
    }

    if (cmd.type !== undefined) {
      const typeStr = String(cmd.type);
      if (!isWarehouseType(typeStr)) {
        throw new WarehouseValidationError(`Invalid warehouse type: ${typeStr}`);
      }
      this._type = typeStr as WarehouseType;
    }

    if (cmd.address !== undefined) {
      const address = Warehouse.applyAddress(cmd.address);
      this._addressStreet = address.street;
      this._addressNumber = address.number;
      this._addressCity = address.city;
      this._addressProvince = address.province;
      this._addressCountry = address.country;
      this._addressPostalCode = address.postalCode;
    }

    if (cmd.zones !== undefined) {
      this._zones = cmd.zones.map((z) => String(z).trim()).filter(Boolean);
    }

    if (cmd.capacity !== undefined) {
      const capacity =
        cmd.capacity === null ? null : Number(cmd.capacity);
      if (capacity != null && capacity < 0) {
        throw new WarehouseValidationError("capacity must be >= 0");
      }
      this._capacity = capacity;
    }

    if (cmd.capacityUnit !== undefined) {
      this._capacityUnit = cmd.capacityUnit?.trim() || null;
    }

    validateWarehouseInvariants({
      code: this._code,
      name: this._name,
      type: this._type,
      capacity: this._capacity,
    });

    this._version += 1;
    this._updatedAt = new Date();
    this._events.push(
      warehouseUpdatedEvent(this.id, { version: this._version }),
    );
  }

  activate(): void {
    if (this._isActive) {
      return;
    }
    this._isActive = true;
    this._version += 1;
    this._updatedAt = new Date();
    this._events.push(warehouseActivatedEvent(this.id));
  }

  deactivate(reason: string): void {
    if (!reason?.trim()) {
      throw new WarehouseValidationError("Deactivation reason is required");
    }
    if (!this._isActive) {
      return;
    }
    this._isActive = false;
    this._version += 1;
    this._updatedAt = new Date();
    this._events.push(warehouseDeactivatedEvent(this.id, reason.trim()));
  }

  toSnapshot(): WarehouseSnapshot {
    return {
      id: this.id,
      organizationId: this.organizationId,
      code: this._code,
      name: this._name,
      type: this._type,
      addressStreet: this._addressStreet,
      addressNumber: this._addressNumber,
      addressCity: this._addressCity,
      addressProvince: this._addressProvince,
      addressCountry: this._addressCountry,
      addressPostalCode: this._addressPostalCode,
      zones: [...this._zones],
      capacity: this._capacity,
      capacityUnit: this._capacityUnit,
      isActive: this._isActive,
      version: this._version,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this._updatedAt.toISOString(),
    };
  }

  static rehydrate(snapshot: WarehouseSnapshot): Warehouse {
    return new Warehouse(
      createEntityId(snapshot.id),
      snapshot.organizationId,
      snapshot.code,
      snapshot.name,
      snapshot.type as WarehouseType,
      snapshot.addressStreet,
      snapshot.addressNumber,
      snapshot.addressCity,
      snapshot.addressProvince,
      snapshot.addressCountry,
      snapshot.addressPostalCode,
      [...snapshot.zones],
      snapshot.capacity,
      snapshot.capacityUnit,
      snapshot.isActive,
      snapshot.version,
      new Date(snapshot.createdAt),
      new Date(snapshot.updatedAt),
    );
  }
}
