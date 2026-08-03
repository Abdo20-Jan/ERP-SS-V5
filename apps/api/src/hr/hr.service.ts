import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import type { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import {
  parsePagination,
  type PaginatedQuery,
  type PaginatedResult,
} from "../common/pagination";

@Injectable()
export class HrService {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async listEmployees(
    query: PaginatedQuery,
  ): Promise<PaginatedResult<unknown>> {
    const { page, limit, skip } = parsePagination(query);
    const where: Prisma.HrEmployeeWhereInput = {};
    if (query.status) where.status = query.status;
    if (query.search) {
      where.OR = [
        { fullName: { contains: query.search, mode: "insensitive" } },
        { employeeCode: { contains: query.search, mode: "insensitive" } },
      ];
    }
    const [data, total] = await Promise.all([
      this.prisma.client.hrEmployee.findMany({
        where,
        skip,
        take: limit,
        orderBy: { fullName: "asc" },
        include: {
          department: { select: { code: true, name: true } },
          position: { select: { title: true } },
        },
      }),
      this.prisma.client.hrEmployee.count({ where }),
    ]);
    return { data, total, page, limit };
  }

  async listDepartments(): Promise<unknown[]> {
    return this.prisma.client.hrDepartment.findMany({
      where: { isActive: true },
      orderBy: { code: "asc" },
    });
  }

  async getEmployee(id: string) {
    const employee = await this.prisma.client.hrEmployee.findUnique({
      where: { id },
      include: { department: true, position: true, manager: true },
    });
    if (!employee) throw new NotFoundException("Colaborador não encontrado");
    return employee;
  }
}
