import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { AppError, type OrderAlertDto } from "@sunset/contracts";
import { OrderAlert, ORDER_ALERT_REPOSITORY, type OrderAlertRepository } from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";

@Injectable()
export class OrderAlertService {
  private readonly log = createLogger({ name: "api.comex.alert" });
  constructor(@Inject(ORDER_ALERT_REPOSITORY) private readonly repo: OrderAlertRepository) {}

  async findByOrder(orderId: string): Promise<OrderAlertDto[]> {
    return (await this.repo.findByOrder(orderId)).map(a => a.snapshot() as OrderAlertDto);
  }

  async acknowledge(id: string, uid?: string): Promise<OrderAlertDto> {
    const a = await this.repo.findById(id);
    if (!a) throw new NotFoundException(`Alert not found: ${id}`);
    a.ack(uid ?? "system");
    await prisma.$transaction(async tx => { await this.repo.save(a, tx); });
    return a.snapshot() as OrderAlertDto;
  }

  async resolve(id: string, reason?: string, uid?: string): Promise<OrderAlertDto> {
    const a = await this.repo.findById(id);
    if (!a) throw new NotFoundException(`Alert not found: ${id}`);
    a.resolve(uid ?? "system", reason);
    await prisma.$transaction(async tx => { await this.repo.save(a, tx); });
    return a.snapshot() as OrderAlertDto;
  }
}
