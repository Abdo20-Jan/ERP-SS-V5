import { describe, expect, it } from "vitest";
import {
  OverrideAction,
  OverrideRequest,
  type OverrideRequestDbClient,
  type OverrideRequestRepository,
  OverrideResourceType,
  type StrictOverrideRequestRepository,
} from "../../src";

const legacyRepository: OverrideRequestRepository = {
  save: () => Promise.resolve(),
  async findById() {
    return null;
  },
  async findPending() {
    return null;
  },
  async findAll() {
    return { data: [], total: 0 };
  },
};

function pendingOverride(): OverrideRequest {
  return OverrideRequest.request({
    action: OverrideAction.DEACTIVATE_WAREHOUSE,
    resourceType: OverrideResourceType.WAREHOUSE,
    resourceId: "warehouse-001",
    reason: "Motivo operacional valido para Inventory",
    requestedById: "user-001",
  });
}

describe("OverrideRequestRepository contracts", () => {
  it("preserves the legacy Inventory repository shape and findPending calls", async () => {
    const tx = { opaque: true };

    await expect(legacyRepository.findById("override-001")).resolves.toBeNull();
    await expect(
      legacyRepository.findPending(
        "org_001",
        OverrideAction.DEACTIVATE_WAREHOUSE,
        OverrideResourceType.WAREHOUSE,
        "warehouse-001",
      ),
    ).resolves.toBeNull();
    await expect(
      legacyRepository.findPending(
        "org_001",
        OverrideAction.DEACTIVATE_WAREHOUSE,
        OverrideResourceType.WAREHOUSE,
        "warehouse-001",
        tx,
      ),
    ).resolves.toBeNull();
    expect(legacyRepository.saveWithVersion).toBeUndefined();
    expect(legacyRepository.findByIdForOrganization).toBeUndefined();
  });

  it("requires org-scoped lookup and CAS save on the strict COMEX contract", async () => {
    let receivedExpectedVersion: number | null | undefined;
    let receivedSaveTx: OverrideRequestDbClient;
    let receivedFindTx: OverrideRequestDbClient;

    const strictRepository: StrictOverrideRequestRepository = {
      ...legacyRepository,
      async saveWithVersion(_override, expectedPersistedVersion, db) {
        receivedExpectedVersion = expectedPersistedVersion;
        receivedSaveTx = db;
      },
      async findByIdForOrganization(_id, _organizationId, db) {
        receivedFindTx = db;
        return null;
      },
    };
    const tx = { opaque: true };

    await strictRepository.saveWithVersion(pendingOverride(), 0, tx);
    await strictRepository.findByIdForOrganization(
      "override-001",
      "org_001",
      tx,
    );

    expect(receivedExpectedVersion).toBe(0);
    expect(receivedSaveTx).toBe(tx);
    expect(receivedFindTx).toBe(tx);
  });
});
