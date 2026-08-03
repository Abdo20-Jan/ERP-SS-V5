import { ConnectorStatus } from "@sunset/domain";

export interface ConnectorDto {
  id: string;
  code: string;
  name: string;
  category: string;
  status: ConnectorStatus;
  lastSuccessAt: string | null;
  lastErrorAt: string | null;
  pendingJobs: number;
  nextAction: string;
}

export const CONNECTORS_SEED: ConnectorDto[] = [
  {
    id: "01930000-0007-7000-8000-000000000001",
    code: "SI_FACTURA",
    name: "SI Factura / ARCA",
    category: "FISCAL",
    status: ConnectorStatus.ACTIVE,
    lastSuccessAt: "2026-08-03T03:40:00.000Z",
    lastErrorAt: null,
    pendingJobs: 2,
    nextAction: "Processar fila de autorização",
  },
  {
    id: "01930000-0007-7000-8000-000000000002",
    code: "BANK_FILE_GALICIA",
    name: "Importação extrato Galicia",
    category: "BANK",
    status: ConnectorStatus.DEGRADED,
    lastSuccessAt: "2026-08-02T23:10:00.000Z",
    lastErrorAt: "2026-08-03T01:05:00.000Z",
    pendingJobs: 1,
    nextAction: "Reprocessar arquivo rejeitado",
  },
  {
    id: "01930000-0007-7000-8000-000000000003",
    code: "WHATSAPP_BUSINESS",
    name: "WhatsApp Business",
    category: "COMMS",
    status: ConnectorStatus.ACTIVE,
    lastSuccessAt: "2026-08-03T03:55:00.000Z",
    lastErrorAt: null,
    pendingJobs: 0,
    nextAction: "—",
  },
  {
    id: "01930000-0007-7000-8000-000000000004",
    code: "OCR_DOCS",
    name: "OCR documentos COMEX",
    category: "DOCUMENTS",
    status: ConnectorStatus.ERROR,
    lastSuccessAt: "2026-08-01T18:00:00.000Z",
    lastErrorAt: "2026-08-03T02:12:00.000Z",
    pendingJobs: 7,
    nextAction: "Abrir dead-letter e reprocessar",
  },
  {
    id: "01930000-0007-7000-8000-000000000005",
    code: "EMAIL_SMTP",
    name: "E-mail transacional",
    category: "COMMS",
    status: ConnectorStatus.DISABLED,
    lastSuccessAt: null,
    lastErrorAt: null,
    pendingJobs: 0,
    nextAction: "Configurar credenciais",
  },
];
