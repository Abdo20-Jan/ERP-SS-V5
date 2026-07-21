import {
  createEntityId,
  generateEntityId,
  type EntityId,
} from "../common/entity-id";
import {
  ProductInactiveError,
  ProductValidationError,
} from "../common/errors";
import { Certification } from "./certification.vo";
import { NcmCode } from "./ncm.vo";
import type { CreateProductCommand, UpdateProductCommand } from "./product.commands";
import {
  productActivatedEvent,
  productCreatedEvent,
  productDeactivatedEvent,
  productUpdatedEvent,
  type ProductDomainEvent,
} from "./product.events";
import { isProductType, type ProductType } from "./product-type.enum";
import { validateProductInvariants } from "./product.validator";
import { TireSpecifications } from "./tire-specs.vo";

export interface ProductSnapshot {
  id: string;
  organizationId: string;
  sku: string;
  name: string;
  brand: string;
  productType: string;
  description: string | null;
  categoryId: string | null;
  ncm: ReturnType<NcmCode["toJSON"]>;
  unitOfMeasure: string;
  originCountry: string;
  tireSpecs: ReturnType<TireSpecifications["toJSON"]> | null;
  weight: number | null;
  weightNet: number | null;
  weightGross: number | null;
  packagingLength: number | null;
  packagingWidth: number | null;
  packagingHeight: number | null;
  certifications: ReturnType<Certification["toJSON"]>[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export class Product {
  private _events: ProductDomainEvent[] = [];

  private constructor(
    readonly id: EntityId,
    readonly organizationId: string,
    readonly sku: string,
    private _name: string,
    private _brand: string,
    private _productType: ProductType,
    private _description: string | null,
    private _categoryId: string | null,
    private _ncm: NcmCode,
    private _unitOfMeasure: string,
    private _originCountry: string,
    private _tireSpecs: TireSpecifications | null,
    private _weight: number | null,
    private _weightNet: number | null,
    private _weightGross: number | null,
    private _packagingLength: number | null,
    private _packagingWidth: number | null,
    private _packagingHeight: number | null,
    private _certifications: Certification[],
    private _isActive: boolean,
    readonly createdAt: Date,
    private _updatedAt: Date,
  ) {}

  get name(): string { return this._name; }
  get brand(): string { return this._brand; }
  get productType(): ProductType { return this._productType; }
  get description(): string | null { return this._description; }
  get categoryId(): string | null { return this._categoryId; }
  get ncm(): NcmCode { return this._ncm; }
  get unitOfMeasure(): string { return this._unitOfMeasure; }
  get originCountry(): string { return this._originCountry; }
  get tireSpecs(): TireSpecifications | null { return this._tireSpecs; }
  get weight(): number | null { return this._weight; }
  get weightNet(): number | null { return this._weightNet; }
  get weightGross(): number | null { return this._weightGross; }
  get packagingLength(): number | null { return this._packagingLength; }
  get packagingWidth(): number | null { return this._packagingWidth; }
  get packagingHeight(): number | null { return this._packagingHeight; }
  get certifications(): readonly Certification[] { return this._certifications; }
  get isActive(): boolean { return this._isActive; }
  get updatedAt(): Date { return this._updatedAt; }

  pullEvents(): ProductDomainEvent[] {
    const e = [...this._events];
    this._events = [];
    return e;
  }

  static create(cmd: CreateProductCommand): Product {
    if (!isProductType(String(cmd.productType))) {
      throw new ProductValidationError(`Invalid productType: ${cmd.productType}`);
    }
    const ncm = new NcmCode(cmd.ncm);
    const tireSpecs = cmd.tireSpecs
      ? new TireSpecifications(cmd.tireSpecs)
      : null;
    const certifications = (cmd.certifications ?? []).map(
      (c) => new Certification(c),
    );

    validateProductInvariants({
      sku: cmd.sku,
      name: cmd.name,
      brand: cmd.brand,
      productType: cmd.productType as ProductType,
      unitOfMeasure: cmd.unitOfMeasure,
      tireSpecs,
      weight: cmd.weight ?? null,
      weightNet: cmd.weightNet ?? null,
      weightGross: cmd.weightGross ?? null,
    });

    const now = new Date();
    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();
    const product = new Product(
      id,
      cmd.organizationId?.trim() || "org_001",
      cmd.sku.trim().toUpperCase(),
      cmd.name.trim(),
      cmd.brand.trim(),
      cmd.productType as ProductType,
      cmd.description?.trim() || null,
      cmd.categoryId ?? null,
      ncm,
      cmd.unitOfMeasure.trim(),
      (cmd.originCountry ?? "AR").trim() || "AR",
      tireSpecs,
      cmd.weight ?? null,
      cmd.weightNet ?? null,
      cmd.weightGross ?? null,
      cmd.packagingLength ?? null,
      cmd.packagingWidth ?? null,
      cmd.packagingHeight ?? null,
      certifications,
      true,
      now,
      now,
    );
    product._events.push(
      productCreatedEvent(product.id, {
        sku: product.sku,
        brand: product.brand,
        productType: product.productType,
      }),
    );
    return product;
  }

  update(cmd: UpdateProductCommand): void {
    if (!this._isActive) {
      throw new ProductInactiveError(
        "Inactive product cannot be updated (reactivate first)",
        { productId: this.id },
      );
    }
    if (cmd.name !== undefined) {
      if (!cmd.name.trim()) throw new ProductValidationError("name is required");
      this._name = cmd.name.trim();
    }
    if (cmd.brand !== undefined) {
      if (!cmd.brand.trim()) throw new ProductValidationError("brand is required");
      this._brand = cmd.brand.trim();
    }
    if (cmd.description !== undefined) {
      this._description = cmd.description?.trim() || null;
    }
    if (cmd.categoryId !== undefined) {
      this._categoryId = cmd.categoryId;
    }
    if (cmd.ncm) {
      this._ncm = new NcmCode(cmd.ncm);
    }
    if (cmd.unitOfMeasure !== undefined) {
      if (!cmd.unitOfMeasure.trim()) {
        throw new ProductValidationError("unitOfMeasure is required");
      }
      this._unitOfMeasure = cmd.unitOfMeasure.trim();
    }
    if (cmd.originCountry !== undefined) {
      this._originCountry = cmd.originCountry.trim() || "AR";
    }
    if (cmd.tireSpecs !== undefined) {
      this._tireSpecs = cmd.tireSpecs
        ? new TireSpecifications(cmd.tireSpecs)
        : null;
    }
    if (cmd.weight !== undefined) this._weight = cmd.weight;
    if (cmd.weightNet !== undefined) this._weightNet = cmd.weightNet;
    if (cmd.weightGross !== undefined) this._weightGross = cmd.weightGross;
    if (cmd.packagingLength !== undefined)
      this._packagingLength = cmd.packagingLength;
    if (cmd.packagingWidth !== undefined)
      this._packagingWidth = cmd.packagingWidth;
    if (cmd.packagingHeight !== undefined)
      this._packagingHeight = cmd.packagingHeight;
    if (cmd.certifications) {
      this._certifications = cmd.certifications.map((c) => new Certification(c));
    }

    validateProductInvariants({
      sku: this.sku,
      name: this._name,
      brand: this._brand,
      productType: this._productType,
      unitOfMeasure: this._unitOfMeasure,
      tireSpecs: this._tireSpecs,
      weight: this._weight,
      weightNet: this._weightNet,
      weightGross: this._weightGross,
    });

    this._updatedAt = new Date();
    this._events.push(productUpdatedEvent(this.id));
  }

  activate(): void {
    if (this._isActive) return;
    this._isActive = true;
    this._updatedAt = new Date();
    this._events.push(productActivatedEvent(this.id));
  }

  deactivate(reason: string): void {
    if (!reason?.trim()) {
      throw new ProductValidationError("Deactivation reason is required");
    }
    if (!this._isActive) return;
    this._isActive = false;
    this._updatedAt = new Date();
    this._events.push(productDeactivatedEvent(this.id, reason.trim()));
  }

  toSnapshot(): ProductSnapshot {
    return {
      id: this.id,
      organizationId: this.organizationId,
      sku: this.sku,
      name: this._name,
      brand: this._brand,
      productType: this._productType,
      description: this._description,
      categoryId: this._categoryId,
      ncm: this._ncm.toJSON(),
      unitOfMeasure: this._unitOfMeasure,
      originCountry: this._originCountry,
      tireSpecs: this._tireSpecs ? this._tireSpecs.toJSON() : null,
      weight: this._weight,
      weightNet: this._weightNet,
      weightGross: this._weightGross,
      packagingLength: this._packagingLength,
      packagingWidth: this._packagingWidth,
      packagingHeight: this._packagingHeight,
      certifications: this._certifications.map((c) => c.toJSON()),
      isActive: this._isActive,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this._updatedAt.toISOString(),
    };
  }

  static rehydrate(s: ProductSnapshot): Product {
    return new Product(
      createEntityId(s.id),
      s.organizationId,
      s.sku,
      s.name,
      s.brand,
      s.productType as ProductType,
      s.description,
      s.categoryId,
      new NcmCode(s.ncm),
      s.unitOfMeasure,
      s.originCountry,
      s.tireSpecs
        ? new TireSpecifications({
            width: Number(s.tireSpecs.width),
            profile: Number(s.tireSpecs.profile),
            rimDiameter: Number(s.tireSpecs.rimDiameter),
            loadIndex: (s.tireSpecs.loadIndex as number | null) ?? null,
            speedIndex: (s.tireSpecs.speedIndex as string | null) ?? null,
            tireType: (s.tireSpecs.tireType as string | null) ?? null,
            season: (s.tireSpecs.season as string | null) ?? null,
            dot: (s.tireSpecs.dot as string | null) ?? null,
          })
        : null,
      s.weight,
      s.weightNet,
      s.weightGross,
      s.packagingLength,
      s.packagingWidth,
      s.packagingHeight,
      s.certifications.map(
        (c) =>
          new Certification({
            certificateNumber: String(c.certificateNumber),
            type: String(c.type),
            issuingBody: String(c.issuingBody),
            issueDate: String(c.issueDate),
            expiryDate: String(c.expiryDate),
          }),
      ),
      s.isActive,
      new Date(s.createdAt),
      new Date(s.updatedAt),
    );
  }
}
