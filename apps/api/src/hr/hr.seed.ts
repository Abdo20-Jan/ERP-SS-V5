import { EmployeeStatus } from "@sunset/domain";

export interface EmployeeDto {
  id: string;
  employeeCode: string;
  fullName: string;
  department: string;
  jobTitle: string;
  status: EmployeeStatus;
  accessProvisioning: string;
  manager: string;
  nextAction: string;
}

export const EMPLOYEES_SEED: EmployeeDto[] = [
  {
    id: "01930000-0006-7000-8000-000000000001",
    employeeCode: "EMP-0142",
    fullName: "Ana Gómez",
    department: "COMEX",
    jobTitle: "Analista de Importação",
    status: EmployeeStatus.ACTIVE,
    accessProvisioning: "PROVISIONADO",
    manager: "Gestor COMEX",
    nextAction: "Revisão documental anual",
  },
  {
    id: "01930000-0006-7000-8000-000000000002",
    employeeCode: "EMP-0201",
    fullName: "Diego Ruiz",
    department: "Tesouraria",
    jobTitle: "Analista de Caixa",
    status: EmployeeStatus.ACTIVE,
    accessProvisioning: "PROVISIONADO",
    manager: "CFO",
    nextAction: "—",
  },
  {
    id: "01930000-0006-7000-8000-000000000003",
    employeeCode: "EMP-0255",
    fullName: "Paula Medina",
    department: "Comercial",
    jobTitle: "Key Account",
    status: EmployeeStatus.ONBOARDING,
    accessProvisioning: "PENDENTE",
    manager: "Diretor Comercial",
    nextAction: "Provisionar usuário e papéis",
  },
  {
    id: "01930000-0006-7000-8000-000000000004",
    employeeCode: "EMP-0098",
    fullName: "Héctor Silva",
    department: "Estoque",
    jobTitle: "Operador de Depósito",
    status: EmployeeStatus.LEAVE,
    accessProvisioning: "SUSPENSO",
    manager: "Supervisor TP",
    nextAction: "Reativar acesso ao retorno",
  },
];
