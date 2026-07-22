import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";
import type { UploadInventoryDocumentDto } from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { InventoryDocumentService } from "./inventory-document.service";

@Controller()
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class InventoryDocumentController {
  constructor(
    @Inject(InventoryDocumentService)
    private readonly documentService: InventoryDocumentService,
  ) {}

  @Post("inventory/documents")
  @RequirePermission("inventory:document:upload")
  async upload(
    @Body() dto: UploadInventoryDocumentDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.documentService.upload(dto, req.user?.id ?? "");
  }

  @Get("inventory/documents")
  @RequirePermission("inventory:document:read")
  async list(
    @Query("warehouseId") warehouseId?: string,
    @Query("locationId") locationId?: string,
    @Query("documentType") documentType?: string,
    @Query("isArchived") isArchived?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
  ): Promise<unknown> {
    return this.documentService.list({
      warehouseId,
      locationId,
      documentType,
      isArchived:
        isArchived === undefined
          ? undefined
          : isArchived === "true" || isArchived === "1",
      page: page ? Number(page) : undefined,
      limit: limit ? Number(limit) : undefined,
    });
  }

  @Get("inventory/documents/file")
  @RequirePermission("inventory:document:read")
  async downloadSigned(
    @Query("path") path: string,
    @Query("exp") exp: string,
    @Query("sig") sig: string,
    @Res() res: { header: (k: string, v: string) => void; send: (b: Buffer) => void },
  ): Promise<void> {
    const { buffer, fileName } = await this.documentService.readSignedFile(
      path,
      Number(exp),
      sig,
    );
    res.header("Content-Disposition", `attachment; filename="${fileName}"`);
    res.send(buffer);
  }

  @Get("inventory/documents/:id")
  @RequirePermission("inventory:document:read")
  async getById(@Param("id") id: string): Promise<unknown> {
    return this.documentService.getById(id);
  }

  @Get("inventory/documents/:id/versions")
  @RequirePermission("inventory:document:read")
  async versions(@Param("id") id: string): Promise<unknown> {
    return this.documentService.versions(id);
  }

  @Post("inventory/documents/:id/archive")
  @RequirePermission("inventory:document:archive")
  async archive(
    @Param("id") id: string,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.documentService.archive(id, req.user?.id ?? "");
  }

  @Post("inventory/documents/:id/restore")
  @RequirePermission("inventory:document:archive")
  async restore(
    @Param("id") id: string,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.documentService.restore(id, req.user?.id ?? "");
  }

  @Get("inventory/warehouses/:warehouseId/documents")
  @RequirePermission("inventory:document:read")
  async listByWarehouse(
    @Param("warehouseId") warehouseId: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
  ): Promise<unknown> {
    return this.documentService.list({
      warehouseId,
      page: page ? Number(page) : undefined,
      limit: limit ? Number(limit) : undefined,
    });
  }

  @Get("inventory/locations/:locationId/documents")
  @RequirePermission("inventory:document:read")
  async listByLocation(
    @Param("locationId") locationId: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
  ): Promise<unknown> {
    return this.documentService.list({
      locationId,
      page: page ? Number(page) : undefined,
      limit: limit ? Number(limit) : undefined,
    });
  }
}
