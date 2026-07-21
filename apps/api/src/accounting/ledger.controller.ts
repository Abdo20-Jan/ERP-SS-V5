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
  CreateJournalDto,
  CreateJournalEntryDto,
  PostJournalEntryDto,
  ReverseJournalEntryDto,
} from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { LedgerService } from "./ledger.service";

@Controller("ledger")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class LedgerController {
  constructor(
    @Inject(LedgerService) private readonly ledgerService: LedgerService,
  ) {}

  @Get("journals")
  @RequirePermission("accounting:read")
  async getJournals(): Promise<unknown> {
    return this.ledgerService.getJournals();
  }

  @Post("journals")
  @RequirePermission("accounting:write")
  async createJournal(
    @Body() dto: CreateJournalDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.ledgerService.createJournal(dto, req.user?.id);
  }

  @Post("journal-entries")
  @RequirePermission("accounting:write")
  async createEntry(
    @Body() dto: CreateJournalEntryDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.ledgerService.createJournalEntry(dto, req.user?.id);
  }

  @Get("journal-entries")
  @RequirePermission("accounting:read")
  async getEntries(
    @Query("status") status?: string,
    @Query("journalId") journalId?: string,
    @Query("startDate") startDate?: string,
    @Query("endDate") endDate?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
  ): Promise<unknown> {
    return this.ledgerService.getJournalEntries({
      status,
      journalId,
      startDate,
      endDate,
      page: page ? Number(page) : undefined,
      limit: limit ? Number(limit) : undefined,
    });
  }

  @Get("journal-entries/:id")
  @RequirePermission("accounting:read")
  async getEntry(@Param("id") id: string): Promise<unknown> {
    return this.ledgerService.getJournalEntry(id);
  }

  @Post("journal-entries/:id/post")
  @RequirePermission("accounting:write")
  async postEntry(
    @Param("id") id: string,
    @Body() dto: PostJournalEntryDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.ledgerService.postJournalEntry(id, dto ?? {}, req.user?.id);
  }

  @Post("journal-entries/:id/reverse")
  @RequirePermission("accounting:write")
  async reverseEntry(
    @Param("id") id: string,
    @Body() dto: ReverseJournalEntryDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.ledgerService.reverseJournalEntry(id, dto, req.user?.id);
  }
}
