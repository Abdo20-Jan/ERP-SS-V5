import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import type {
  AssignInventoryTaskDto,
  BlockInventoryTaskDto,
  CancelInventoryTaskDto,
  CompleteInventoryTaskDto,
  CreateInventoryTaskDto,
  EscalateInventoryTaskDto,
  ResumeDependencyInventoryTaskDto,
  StartInventoryTaskDto,
  UnblockInventoryTaskDto,
  WaitDependencyInventoryTaskDto,
} from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { InventoryTaskService } from "./inventory-task.service";

@Controller()
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class InventoryTaskController {
  constructor(
    @Inject(InventoryTaskService)
    private readonly taskService: InventoryTaskService,
  ) {}

  @Post("inventory/tasks")
  @RequirePermission("inventory:task:create")
  async create(
    @Body() dto: CreateInventoryTaskDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.taskService.create(dto, req.user?.id ?? "");
  }

  @Get("inventory/tasks")
  @RequirePermission("inventory:task:read")
  async list(
    @Query("status") status?: string,
    @Query("priority") priority?: string,
    @Query("ownerUserId") ownerUserId?: string,
    @Query("warehouseId") warehouseId?: string,
    @Query("locationId") locationId?: string,
    @Query("sourceType") sourceType?: string,
    @Query("sourceId") sourceId?: string,
    @Query("type") type?: string,
    @Query("overdueOnly") overdueOnly?: string,
    @Query("organizationId") organizationId?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
  ): Promise<unknown> {
    return this.taskService.list({
      status,
      priority,
      ownerUserId,
      warehouseId,
      locationId,
      sourceType,
      sourceId,
      type,
      overdueOnly,
      organizationId,
      page: page ? Number(page) : undefined,
      limit: limit ? Number(limit) : undefined,
    });
  }

  @Get("inventory/tasks/summary")
  @RequirePermission("inventory:task:read")
  async summary(
    @Query("organizationId") organizationId?: string,
    @Query("ownerUserId") ownerUserId?: string,
    @Query("warehouseId") warehouseId?: string,
  ): Promise<unknown> {
    return this.taskService.summary({ organizationId, ownerUserId, warehouseId });
  }

  @Get("inventory/tasks/:id")
  @RequirePermission("inventory:task:read")
  async getById(@Param("id") id: string): Promise<unknown> {
    return this.taskService.getById(id);
  }

  @Post("inventory/tasks/:id/assign")
  @RequirePermission("inventory:task:assign")
  async assign(
    @Param("id") id: string,
    @Body() dto: AssignInventoryTaskDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.taskService.assign(id, dto ?? {}, req.user?.id ?? "");
  }

  @Post("inventory/tasks/:id/start")
  @RequirePermission("inventory:task:update")
  async start(
    @Param("id") id: string,
    @Body() dto: StartInventoryTaskDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.taskService.start(id, dto ?? {}, req.user?.id ?? "");
  }

  @Post("inventory/tasks/:id/block")
  @RequirePermission("inventory:task:update")
  async block(
    @Param("id") id: string,
    @Body() dto: BlockInventoryTaskDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.taskService.block(id, dto, req.user?.id ?? "");
  }

  @Post("inventory/tasks/:id/unblock")
  @RequirePermission("inventory:task:update")
  async unblock(
    @Param("id") id: string,
    @Body() dto: UnblockInventoryTaskDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.taskService.unblock(id, dto ?? {}, req.user?.id ?? "");
  }

  @Post("inventory/tasks/:id/wait-dependency")
  @RequirePermission("inventory:task:update")
  async waitDependency(
    @Param("id") id: string,
    @Body() dto: WaitDependencyInventoryTaskDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.taskService.waitDependency(id, dto, req.user?.id ?? "");
  }

  @Post("inventory/tasks/:id/resume-dependency")
  @RequirePermission("inventory:task:update")
  async resumeDependency(
    @Param("id") id: string,
    @Body() dto: ResumeDependencyInventoryTaskDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.taskService.resumeDependency(id, dto ?? {}, req.user?.id ?? "");
  }

  @Post("inventory/tasks/:id/escalate")
  @RequirePermission("inventory:task:escalate")
  async escalate(
    @Param("id") id: string,
    @Body() dto: EscalateInventoryTaskDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.taskService.escalate(id, dto, req.user?.id ?? "");
  }

  @Post("inventory/tasks/:id/complete")
  @RequirePermission("inventory:task:complete")
  async complete(
    @Param("id") id: string,
    @Body() dto: CompleteInventoryTaskDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.taskService.complete(id, dto ?? {}, req.user?.id ?? "");
  }

  @Post("inventory/tasks/:id/cancel")
  @RequirePermission("inventory:task:cancel")
  async cancel(
    @Param("id") id: string,
    @Body() dto: CancelInventoryTaskDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.taskService.cancel(id, dto ?? {}, req.user?.id ?? "");
  }
}
