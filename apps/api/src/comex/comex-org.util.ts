export const DEFAULT_COMEX_ORG = "org_001";

export function resolveOrganizationId(_user?: { organizationId?: string | null } | null): string {
  return DEFAULT_COMEX_ORG;
}
