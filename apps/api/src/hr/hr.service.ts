import { Injectable } from "@nestjs/common";
import { type PageQuery, paginate } from "../common/paginate";
import { EMPLOYEES_SEED, type EmployeeDto } from "./hr.seed";

@Injectable()
export class HrService {
  private readonly employees: EmployeeDto[] = [...EMPLOYEES_SEED];

  listEmployees(query: PageQuery & { status?: string }) {
    const status = query.status?.trim().toUpperCase();
    const base = status
      ? this.employees.filter((e) => e.status === status)
      : this.employees;
    return paginate(base, query, (item, search) =>
      [
        item.employeeCode,
        item.fullName,
        item.department,
        item.jobTitle,
        item.manager,
      ]
        .join(" ")
        .toLowerCase()
        .includes(search),
    );
  }
}
