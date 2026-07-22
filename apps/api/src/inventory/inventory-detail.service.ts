import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import type {
  DetailHistoryItemDto,
  DetailTabDto,
  InventoryDocumentDto,
  LocationDetailDto,
  LocationPathDto,
  OverrideRequestDto,
  ProgressiveValidationIssueDto,
  ProgressiveValidationResultDto,
  ValidateLocationDto,
  ValidateWarehouseDto,
  WarehouseDetailDto,
  WarehouseDto,
  WarehouseLocationConfigDto,
  WarehouseLocationDto,
} from "@sunset/contracts";
import {
  DomainError,
  INVENTORY_DOCUMENT_REPOSITORY,
  type InventoryDocumentRepository,
  LOCATION_ROOT_PARENT_KEY,
  OVERRIDE_REQUEST_REPOSITORY,
  type OverrideRequestRepository,
  OverrideResourceType,
  OverrideStatus,
  WAREHOUSE_LOCATION_REPOSITORY,
  WAREHOUSE_REPOSITORY,
  Warehouse,
  WarehouseLocation,
  WarehouseLocationConfig,
  type WarehouseLocationRepository,
  type WarehouseRepository,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger } from "@sunset/observability";

const PREVIEW_LIMIT = 10;
const HISTORY_LIMIT = 20;

@Injectable()
export class InventoryDetailService {
  private readonly logger = createLogger({ name: "api.inventory.detail" });

  constructor(
    @Inject(WAREHOUSE_REPOSITORY)
    private readonly warehouseRepository: WarehouseRepository,
    @Inject(WAREHOUSE_LOCATION_REPOSITORY)
    private readonly locationRepository: WarehouseLocationRepository,
    @Inject(INVENTORY_DOCUMENT_REPOSITORY)
    private readonly documentRepository: InventoryDocumentRepository,
    @Inject(OVERRIDE_REQUEST_REPOSITORY)
    private readonly overrideRepository: OverrideRequestRepository,
  ) {}

  async getWarehouseDetail(id: string): Promise<WarehouseDetailDto> {
    const warehouse = await this.warehouseRepository.findById(id);
    if (!warehouse) {
      throw new NotFoundException(`Warehouse not found: ${id}`);
    }
    const header = warehouse.toSnapshot() as WarehouseDto;

    const [configEntity, locationsResult, documentsResult, overridesResult, activePhysical, recentHistory] =
      await Promise.all([
        this.locationRepository.findConfigByWarehouseId(id),
        this.locationRepository.findByWarehouse(id),
        this.documentRepository.findAll(
          { warehouseId: id, isArchived: false },
          1,
          PREVIEW_LIMIT,
        ),
        this.overrideRepository.findAll(
          {
            resourceType: OverrideResourceType.WAREHOUSE,
            resourceId: id,
            status: OverrideStatus.PENDING,
          },
          1,
          PREVIEW_LIMIT,
        ),
        this.locationRepository.countActivePhysicalLocations(id),
        this.loadHistory("warehouse", id),
      ]);

    const allLocations = locationsResult.data;
    const locationTotal = locationsResult.total;
    const locationActive = allLocations.filter((l) => l.isActive).length;
    const locationsPreview = allLocations
      .slice(0, PREVIEW_LIMIT)
      .map((l) => l.toSnapshot() as WarehouseLocationDto);

    const documentsPreview = documentsResult.data.map(
      (d) => d.toSnapshot() as InventoryDocumentDto,
    );
    const documentTotal = documentsResult.total;

    const overridesPreview = overridesResult.data.map(
      (o) => o.toSnapshot() as OverrideRequestDto,
    );
    const openOverrideCount = overridesResult.total;

    const config = configEntity
      ? (configEntity.toSnapshot() as WarehouseLocationConfigDto)
      : null;

    const summary = {
      locationTotal,
      locationActive,
      documentTotal,
      openOverrideCount,
      balanceAvailable: false as const,
    };

    const tabs: DetailTabDto[] = [
      { id: "summary", label: "Summary" },
      { id: "locations", label: "Locations", count: locationTotal },
      { id: "documents", label: "Documents", count: documentTotal },
      { id: "overrides", label: "Overrides", count: openOverrideCount },
      { id: "history", label: "History", count: recentHistory.length },
    ];

    const availableActions = this.warehouseActions(
      warehouse.isActive,
      activePhysical,
    );
    const primaryAction = this.primaryAction(warehouse.isActive, availableActions);

    this.logger.info(
      {
        action: "WAREHOUSE_DETAIL_COMPOSED",
        warehouseId: id,
        locationTotal,
        documentTotal,
        openOverrideCount,
      },
      "Warehouse detail composed",
    );

    return {
      header,
      config,
      summary,
      tabs,
      locationsPreview,
      documentsPreview,
      overridesPreview,
      recentHistory,
      availableActions,
      primaryAction,
    };
  }

  async getLocationDetail(
    warehouseId: string,
    locationId: string,
  ): Promise<LocationDetailDto> {
    const warehouse = await this.warehouseRepository.findById(warehouseId);
    if (!warehouse) {
      throw new NotFoundException(`Warehouse not found: ${warehouseId}`);
    }

    const location = await this.locationRepository.findById(locationId);
    if (!location || location.warehouseId !== warehouseId) {
      throw new NotFoundException(`Location not found: ${locationId}`);
    }

    const header = location.toSnapshot() as WarehouseLocationDto;
    const warehouseDto = warehouse.toSnapshot() as WarehouseDto;

    const [path, documentsResult, overridesResult, activeChildCount, recentHistory] =
      await Promise.all([
        this.buildPath(location),
        this.documentRepository.findAll(
          { locationId, isArchived: false },
          1,
          PREVIEW_LIMIT,
        ),
        this.overrideRepository.findAll(
          {
            resourceType: OverrideResourceType.LOCATION,
            resourceId: locationId,
            status: OverrideStatus.PENDING,
          },
          1,
          PREVIEW_LIMIT,
        ),
        this.locationRepository.countActiveChildren(locationId),
        this.loadHistory("warehouse_location", locationId),
      ]);

    const documentsPreview = documentsResult.data.map(
      (d) => d.toSnapshot() as InventoryDocumentDto,
    );
    const documentTotal = documentsResult.total;
    const overridesPreview = overridesResult.data.map(
      (o) => o.toSnapshot() as OverrideRequestDto,
    );
    const openOverrideCount = overridesResult.total;

    const summary = {
      documentTotal,
      openOverrideCount,
      activeChildCount,
      balanceAvailable: false as const,
    };

    const tabs: DetailTabDto[] = [
      { id: "summary", label: "Summary" },
      { id: "documents", label: "Documents", count: documentTotal },
      { id: "overrides", label: "Overrides", count: openOverrideCount },
      { id: "history", label: "History", count: recentHistory.length },
    ];

    const availableActions = this.locationActions(location.isActive);
    const primaryAction = this.primaryAction(location.isActive, availableActions);

    this.logger.info(
      {
        action: "LOCATION_DETAIL_COMPOSED",
        warehouseId,
        locationId,
        documentTotal,
        openOverrideCount,
      },
      "Location detail composed",
    );

    return {
      header,
      warehouse: warehouseDto,
      path,
      summary,
      tabs,
      documentsPreview,
      overridesPreview,
      recentHistory,
      availableActions,
      primaryAction,
    };
  }

  async validateWarehouse(
    dto: ValidateWarehouseDto,
  ): Promise<ProgressiveValidationResultDto> {
    const errors: ProgressiveValidationIssueDto[] = [];
    const warnings: ProgressiveValidationIssueDto[] = [];

    if (dto.mode !== "create" && dto.mode !== "update") {
      return {
        valid: false,
        errors: [
          {
            field: "mode",
            message: "mode must be create or update",
            code: "INVALID_MODE",
          },
        ],
        warnings,
      };
    }

    try {
      if (dto.mode === "create") {
        Warehouse.create({
          code: dto.code ?? "",
          name: dto.name ?? "",
          type: dto.type ?? "",
          organizationId: dto.organizationId,
          address: dto.address,
          zones: dto.zones,
          capacity: dto.capacity,
          capacityUnit: dto.capacityUnit,
        });
        const orgId = dto.organizationId?.trim() || "org_001";
        const code = Warehouse.normalizeCode(dto.code ?? "");
        if (code) {
          const existing = await this.warehouseRepository.findByCode(orgId, code);
          if (existing) {
            errors.push({
              field: "code",
              message: `Warehouse code already exists: ${code}`,
              code: "CODE_EXISTS",
            });
          }
        }
      } else {
        if (!dto.id?.trim()) {
          errors.push({
            field: "id",
            message: "id is required for update mode",
            code: "ID_REQUIRED",
          });
        } else {
          const warehouse = await this.warehouseRepository.findById(dto.id);
          if (!warehouse) {
            errors.push({
              field: "id",
              message: `Warehouse not found: ${dto.id}`,
              code: "NOT_FOUND",
            });
          } else {
            const clone = Warehouse.rehydrate(warehouse.toSnapshot());
            clone.update({
              name: dto.name,
              type: dto.type,
              address: dto.address,
              zones: dto.zones,
              capacity: dto.capacity,
              capacityUnit: dto.capacityUnit,
              expectedVersion: dto.expectedVersion,
            });
          }
        }
      }
    } catch (err) {
      if (err instanceof DomainError) {
        errors.push(this.mapDomainError(err));
      } else {
        throw err;
      }
    }

    return { valid: errors.length === 0, errors, warnings };
  }

  async validateLocation(
    dto: ValidateLocationDto,
  ): Promise<ProgressiveValidationResultDto> {
    const errors: ProgressiveValidationIssueDto[] = [];
    const warnings: ProgressiveValidationIssueDto[] = [];

    if (dto.mode !== "create" && dto.mode !== "update") {
      return {
        valid: false,
        errors: [
          {
            field: "mode",
            message: "mode must be create or update",
            code: "INVALID_MODE",
          },
        ],
        warnings,
      };
    }

    if (!dto.warehouseId?.trim()) {
      return {
        valid: false,
        errors: [
          {
            field: "warehouseId",
            message: "warehouseId is required",
            code: "WAREHOUSE_ID_REQUIRED",
          },
        ],
        warnings,
      };
    }

    try {
      const warehouse = await this.warehouseRepository.findById(dto.warehouseId);
      if (!warehouse) {
        errors.push({
          field: "warehouseId",
          message: `Warehouse not found: ${dto.warehouseId}`,
          code: "NOT_FOUND",
        });
        return { valid: false, errors, warnings };
      }
      if (!warehouse.isActive) {
        errors.push({
          field: "warehouseId",
          message: "Warehouse is inactive",
          code: "WAREHOUSE_INACTIVE",
        });
        return { valid: false, errors, warnings };
      }

      if (dto.mode === "create") {
        let config = await this.locationRepository.findConfigByWarehouseId(
          dto.warehouseId,
        );
        if (!config) {
          config = WarehouseLocationConfig.createDefault(dto.warehouseId);
        }

        let location: WarehouseLocation;
        if (dto.isVirtual) {
          location = WarehouseLocation.createVirtual(
            {
              warehouseId: dto.warehouseId,
              level: dto.level ?? 0,
              code: dto.code,
              name: dto.name ?? "",
              isVirtual: true,
              virtualType: dto.virtualType,
              capacity: dto.capacity,
              capacityUnit: dto.capacityUnit,
              parentId: dto.parentId,
            },
            dto.warehouseId,
          );
        } else {
          let parentRef = null as {
            id: string;
            level: number;
            path: string;
            isVirtual: boolean;
            isActive: boolean;
          } | null;
          if (dto.parentId) {
            const parent = await this.locationRepository.findById(dto.parentId);
            if (!parent || parent.warehouseId !== dto.warehouseId) {
              errors.push({
                field: "parentId",
                message: `Parent location not found: ${dto.parentId}`,
                code: "PARENT_NOT_FOUND",
              });
              return { valid: false, errors, warnings };
            }
            parentRef = {
              id: parent.id,
              level: parent.level,
              path: parent.path,
              isVirtual: parent.isVirtual,
              isActive: parent.isActive,
            };
          }
          location = WarehouseLocation.createPhysical(
            {
              warehouseId: dto.warehouseId,
              parentId: dto.parentId,
              level: dto.level ?? 1,
              code: dto.code,
              name: dto.name ?? "",
              capacity: dto.capacity,
              capacityUnit: dto.capacityUnit,
            },
            { parent: parentRef, config },
          );
        }

        const parentKey = location.parentKey || LOCATION_ROOT_PARENT_KEY;
        const duplicate = await this.locationRepository.findByWarehouseAndCode(
          dto.warehouseId,
          parentKey,
          location.code,
        );
        if (duplicate) {
          errors.push({
            field: "code",
            message: `Location code already exists under parent: ${location.code}`,
            code: "CODE_EXISTS",
          });
        }
      } else {
        if (!dto.id?.trim()) {
          errors.push({
            field: "id",
            message: "id is required for update mode",
            code: "ID_REQUIRED",
          });
        } else {
          const location = await this.locationRepository.findById(dto.id);
          if (!location || location.warehouseId !== dto.warehouseId) {
            errors.push({
              field: "id",
              message: `Location not found: ${dto.id}`,
              code: "NOT_FOUND",
            });
          } else {
            const clone = WarehouseLocation.rehydrate(location.toSnapshot());
            clone.update({
              name: dto.name,
              capacity: dto.capacity,
              capacityUnit: dto.capacityUnit,
              expectedVersion: dto.expectedVersion,
            });
          }
        }
      }
    } catch (err) {
      if (err instanceof DomainError) {
        errors.push(this.mapDomainError(err));
      } else {
        throw err;
      }
    }

    return { valid: errors.length === 0, errors, warnings };
  }

  private warehouseActions(
    isActive: boolean,
    activePhysical: number,
  ): string[] {
    if (!isActive) {
      return ["read", "upload_document", "activate"];
    }
    const actions = [
      "read",
      "upload_document",
      "update",
      "create_location",
      "configure_levels",
    ];
    if (activePhysical === 0) {
      actions.push("deactivate");
    } else {
      actions.push("request_override_deactivate");
    }
    return actions;
  }

  private locationActions(isActive: boolean): string[] {
    if (!isActive) {
      return ["read", "upload_document", "activate"];
    }
    return [
      "read",
      "upload_document",
      "update",
      "deactivate",
      "request_override_deactivate",
    ];
  }

  private primaryAction(
    isActive: boolean,
    availableActions: string[],
  ): string | null {
    if (isActive && availableActions.includes("update")) return "update";
    if (!isActive && availableActions.includes("activate")) return "activate";
    return availableActions[0] ?? null;
  }

  private async buildPath(
    location: WarehouseLocation,
  ): Promise<LocationPathDto> {
    const ancestors = await this.locationRepository.findPathChain(location.id);
    const chain = [
      ...ancestors.map((a) => a.toSnapshot() as WarehouseLocationDto),
      location.toSnapshot() as WarehouseLocationDto,
    ];
    return {
      locationId: location.id,
      warehouseId: location.warehouseId,
      path: location.path,
      chain,
    };
  }

  private async loadHistory(
    entityType: string,
    entityId: string,
  ): Promise<DetailHistoryItemDto[]> {
    const rows = await prisma.auditLog.findMany({
      where: { entityType, entityId },
      orderBy: { createdAt: "desc" },
      take: HISTORY_LIMIT,
      select: {
        id: true,
        action: true,
        entityType: true,
        entityId: true,
        userId: true,
        createdAt: true,
        correlationId: true,
      },
    });
    return rows.map((r) => ({
      id: r.id,
      action: r.action,
      entityType: r.entityType,
      entityId: r.entityId,
      userId: r.userId,
      createdAt:
        r.createdAt instanceof Date
          ? r.createdAt.toISOString()
          : String(r.createdAt),
      correlationId: r.correlationId,
    }));
  }

  private mapDomainError(err: DomainError): ProgressiveValidationIssueDto {
    const msg = err.message.toLowerCase();
    let field = "domain";
    if (msg.includes("code")) field = "code";
    else if (msg.includes("name")) field = "name";
    else if (msg.includes("type")) field = "type";
    else if (msg.includes("capacity")) field = "capacity";
    else if (msg.includes("level")) field = "level";
    else if (msg.includes("parent")) field = "parentId";
    else if (msg.includes("warehouse")) field = "warehouseId";
    else if (msg.includes("version")) field = "expectedVersion";
    else if (msg.includes("virtual")) field = "virtualType";
    return { field, message: err.message, code: err.code };
  }
}
