import type { OverrideRequest } from "./override-request.aggregate";

export interface OverrideRequestListFilters {
  status?: string;
  action?: string;
  requestedById?: string;
  resourceType?: string;
  resourceId?: string;
  organizationId?: string;
}

export interface OverrideRequestListResult {
  data: OverrideRequest[];
  total: number;
}

export type OverrideRequestDbClient = unknown;

export interface OverrideRequestRepository {
  save(override: OverrideRequest, db?: OverrideRequestDbClient): Promise<void>;
  saveWithVersion?(
    override: OverrideRequest,
    expectedPersistedVersion: number | null,
    db?: OverrideRequestDbClient,
  ): Promise<void>;
  findById(id: string): Promise<OverrideRequest | null>;
  findByIdForOrganization?(
    id: string,
    organizationId: string,
    db?: OverrideRequestDbClient,
  ): Promise<OverrideRequest | null>;
  findPending(
    organizationId: string,
    action: string,
    resourceType: string,
    resourceId: string,
    db?: OverrideRequestDbClient,
  ): Promise<OverrideRequest | null>;
  findAll(
    filters?: OverrideRequestListFilters,
    page?: number,
    limit?: number,
  ): Promise<OverrideRequestListResult>;
}

/** COMEX must use this org-scoped, CAS-capable repository contract. */
export interface StrictOverrideRequestRepository
  extends OverrideRequestRepository {
  saveWithVersion(
    override: OverrideRequest,
    expectedPersistedVersion: number | null,
    db?: OverrideRequestDbClient,
  ): Promise<void>;
  findByIdForOrganization(
    id: string,
    organizationId: string,
    db?: OverrideRequestDbClient,
  ): Promise<OverrideRequest | null>;
}

export const OVERRIDE_REQUEST_REPOSITORY = Symbol("OverrideRequestRepository");
