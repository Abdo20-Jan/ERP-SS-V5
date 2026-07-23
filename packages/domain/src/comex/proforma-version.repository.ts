import type { ProformaVersion } from "./proforma-version.aggregate";
export interface ProformaVersionRepository {
  save(pv: ProformaVersion, tx?: unknown): Promise<void>;
  findLatestByOrder(orderId: string, organizationId: string, tx?: unknown): Promise<ProformaVersion | null>;
  findByOrgSupplierNumber(orgId: string, supId: string, num: string, tx?: unknown): Promise<ProformaVersion | null>;
}
export const PROFORMA_VERSION_REPOSITORY = Symbol("PROFORMA_VERSION_REPOSITORY");
