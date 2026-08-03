import { LeadStatus, OpportunityStage } from "@sunset/domain";

export interface LeadDto {
  id: string;
  name: string;
  company: string;
  channel: string;
  region: string;
  status: LeadStatus;
  owner: string;
  slaFirstContactHours: number;
  nextAction: string;
}

export interface OpportunityDto {
  id: string;
  title: string;
  accountName: string;
  stage: OpportunityStage;
  currency: string;
  amount: string;
  probability: number;
  expectedCloseDate: string;
  owner: string;
  nextAction: string;
}

export const LEADS_SEED: LeadDto[] = [
  {
    id: "01930000-0005-7000-8000-000000000001",
    name: "María López",
    company: "Neumáticos López",
    channel: "WHATSAPP",
    region: "CABA",
    status: LeadStatus.NEW,
    owner: "Fila CABA",
    slaFirstContactHours: 2,
    nextAction: "Primeiro contato em 1h",
  },
  {
    id: "01930000-0005-7000-8000-000000000002",
    name: "Jorge Pérez",
    company: "Flota Andes",
    channel: "PORTAL",
    region: "Mendoza",
    status: LeadStatus.QUALIFIED,
    owner: "Vendedor Oeste",
    slaFirstContactHours: 24,
    nextAction: "Agendar visita técnica",
  },
  {
    id: "01930000-0005-7000-8000-000000000003",
    name: "Lucía Fernández",
    company: "Transportes Patagonia",
    channel: "EMAIL",
    region: "Patagonia",
    status: LeadStatus.ASSIGNED,
    owner: "Vendedor Sur",
    slaFirstContactHours: 8,
    nextAction: "Enviar catálogo frota",
  },
];

export const OPPORTUNITIES_SEED: OpportunityDto[] = [
  {
    id: "01930000-0005-7000-8000-000000000101",
    title: "Renovação frota 40 unidades",
    accountName: "Flota Andes",
    stage: OpportunityStage.PROPOSAL,
    currency: "USD",
    amount: "64000.00",
    probability: 60,
    expectedCloseDate: "2026-08-30",
    owner: "Vendedor Oeste",
    nextAction: "Enviar revisão de desconto",
  },
  {
    id: "01930000-0005-7000-8000-000000000102",
    title: "Estoque inicial loja",
    accountName: "Neumáticos López",
    stage: OpportunityStage.QUALIFICATION,
    currency: "ARS",
    amount: "3800000.00",
    probability: 35,
    expectedCloseDate: "2026-09-15",
    owner: "Vendedor CABA",
    nextAction: "Validar CUIT e crédito",
  },
  {
    id: "01930000-0005-7000-8000-000000000103",
    title: "Contrato anual marketplace",
    accountName: "Mercado Rueda",
    stage: OpportunityStage.NEGOTIATION,
    currency: "ARS",
    amount: "12500000.00",
    probability: 75,
    expectedCloseDate: "2026-08-20",
    owner: "Key Account",
    nextAction: "Assinar aditivo comercial",
  },
];
