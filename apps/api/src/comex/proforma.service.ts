import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { AppError, ConflictError, ValidationError, type RegisterProformaDto, type ProformaVersionDto } from "@sunset/contracts";
import { DomainError, ProformaVersion, PROFORMA_VERSION_REPOSITORY, type ProformaVersionRepository } from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";

@Injectable()
export class ProformaService {
  private readonly log = createLogger({ name: "api.comex.proforma" });
  constructor(@Inject(PROFORMA_VERSION_REPOSITORY) private readonly repo: ProformaVersionRepository) {}

  async register(orderId: string, dto: RegisterProformaDto, uid?: string): Promise<ProformaVersionDto> {
    const existing = await this.repo.findLatestByOrder(orderId);
    const vnum = existing ? existing.versionNumber + 1 : 1;
    if (existing) existing.supersede();
    const pv = ProformaVersion.create({ orderId, organizationId: "org_001", supplierPartyId: "", proformaNumber: dto.proformaNumber, versionNumber: vnum, issueDate: dto.issueDate, totalAmount: dto.totalAmount?.toString(), currencyCode: dto.currencyCode, createdBy: uid, correlationId: getCorrelationId() });
    await prisma.$transaction(async tx => {
      if (existing) await this.repo.save(existing, tx);
      await this.repo.save(pv, tx);
    });
    return pv.snapshot() as ProformaVersionDto;
  }

  async confirm(orderId: string, versionNumber: number, expectedVersion: number, uid?: string): Promise<ProformaVersionDto> {
    const pv = await this.repo.findLatestByOrder(orderId);
    if (!pv || pv.versionNumber !== versionNumber) throw new NotFoundException(`Proforma v${versionNumber} not found`);
    pv.confirm(uid ?? "system");
    await prisma.$transaction(async tx => { await this.repo.save(pv, tx); });
    return pv.snapshot() as ProformaVersionDto;
  }
}
