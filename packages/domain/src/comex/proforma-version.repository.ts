import type { ProformaVersion } from "./proforma-version.aggregate";

export type ProformaVersionRepositoryTransaction = unknown;

export interface ProformaVersionRepository {
  save(
    proforma: ProformaVersion,
    tx?: ProformaVersionRepositoryTransaction,
  ): Promise<void>;

  saveWithVersion?(
    proforma: ProformaVersion,
    expectedPersistedVersion: number | null,
    tx?: ProformaVersionRepositoryTransaction,
  ): Promise<void>;

  findLatestByOrder(
    orderId: string,
    organizationId: string,
    tx?: ProformaVersionRepositoryTransaction,
  ): Promise<ProformaVersion | null>;

  findByOrgSupplierNumber(
    organizationId: string,
    supplierPartyId: string,
    proformaNumber: string,
    tx?: ProformaVersionRepositoryTransaction,
  ): Promise<ProformaVersion | null>;

  findById?(
    id: string,
    organizationId: string,
    tx?: ProformaVersionRepositoryTransaction,
  ): Promise<ProformaVersion | null>;
}

export interface StrictProformaVersionRepository
  extends ProformaVersionRepository {
  saveWithVersion(
    proforma: ProformaVersion,
    expectedPersistedVersion: number | null,
    tx?: ProformaVersionRepositoryTransaction,
  ): Promise<void>;

  findById(
    id: string,
    organizationId: string,
    tx?: ProformaVersionRepositoryTransaction,
  ): Promise<ProformaVersion | null>;
}

export const PROFORMA_VERSION_REPOSITORY = Symbol(
  "PROFORMA_VERSION_REPOSITORY",
);
