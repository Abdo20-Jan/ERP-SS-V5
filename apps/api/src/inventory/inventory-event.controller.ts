import {
  Body, Controller, Get, Inject, Param, Post, Query, Req, UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { InventoryEventService } from "./inventory-event.service";
import type { RequestReplayDto, MoveToDeadLetterDto, CancelEventDto } from "./dto/inventory-event.dto";

@Controller()
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class InventoryEventController {
  constructor(
    @Inject(InventoryEventService) private readonly eventService: InventoryEventService,
  ) {}

  @Get("inventory/events")
  @RequirePermission("inventory:event:read")
  async list(
    @Query("organizationId") organizationId?: string,
    @Query("eventType") eventType?: string,
    @Query("eventVersion") eventVersion?: string,
    @Query("aggregateType") aggregateType?: string,
    @Query("aggregateId") aggregateId?: string,
    @Query("status") status?: string,
    @Query("producer") producer?: string,
    @Query("correlationId") correlationId?: string,
    @Query("failedOnly") failedOnly?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
  ): Promise<unknown> {
    return this.eventService.list({
      organizationId, eventType, eventVersion, aggregateType, aggregateId, status, producer, correlationId, failedOnly,
      page: page ? Number(page) : undefined, limit: limit ? Number(limit) : undefined,
    });
  }

  @Get("inventory/events/summary")
  @RequirePermission("inventory:event:read")
  async summary(@Query("organizationId") organizationId?: string): Promise<unknown> {
    return this.eventService.summary(organizationId ?? "org_001");
  }

  @Get("inventory/events/:id")
  @RequirePermission("inventory:event:read")
  async getById(@Param("id") id: string): Promise<unknown> {
    return this.eventService.getById(id);
  }

  @Get("inventory/events/:id/payload")
  @RequirePermission("inventory:event:payload:read")
  async getPayload(@Param("id") id: string, @Req() req: any): Promise<unknown> {
    return this.eventService.getPayload(id, req.user?.id ?? "");
  }

  @Post("inventory/events/:id/replay")
  @RequirePermission("inventory:event:replay")
  async requestReplay(@Param("id") id: string, @Body() dto: RequestReplayDto, @Req() req: any): Promise<unknown> {
    return this.eventService.requestReplay(id, dto, req.user?.id ?? "");
  }

  @Post("inventory/events/:id/dead-letter")
  @RequirePermission("inventory:event:dead-letter")
  async moveToDeadLetter(@Param("id") id: string, @Body() dto: MoveToDeadLetterDto, @Req() req: any): Promise<unknown> {
    return this.eventService.moveToDeadLetter(id, dto, req.user?.id ?? "");
  }

  @Post("inventory/events/:id/cancel")
  @RequirePermission("inventory:event:cancel")
  async cancel(@Param("id") id: string, @Body() dto: CancelEventDto, @Req() req: any): Promise<unknown> {
    return this.eventService.cancel(id, dto, req.user?.id ?? "");
  }
}
