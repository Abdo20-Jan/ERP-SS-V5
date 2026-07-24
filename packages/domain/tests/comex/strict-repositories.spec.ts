import { describe, expect, it } from "vitest";
import {
  type OrderAlert,
  type OrderAlertRepositoryTransaction,
  type ProformaVersion,
  type ProformaVersionRepositoryTransaction,
  type StrictOrderAlertRepository,
  type StrictProformaVersionRepository,
} from "../../src";

class StrictAlertRepositoryStub implements StrictOrderAlertRepository {
  readonly saves: Array<{ expected: number | null; tx: unknown }> = [];

  save(_alert: OrderAlert, _tx?: OrderAlertRepositoryTransaction): Promise<void> {
    return Promise.resolve();
  }

  saveWithVersion(
    _alert: OrderAlert,
    expectedPersistedVersion: number | null,
    tx?: OrderAlertRepositoryTransaction,
  ): Promise<void> {
    this.saves.push({ expected: expectedPersistedVersion, tx });
    return Promise.resolve();
  }

  findByOrder(): Promise<OrderAlert[]> {
    return Promise.resolve([]);
  }

  findById(): Promise<OrderAlert | null> {
    return Promise.resolve(null);
  }
}

class StrictProformaRepositoryStub
  implements StrictProformaVersionRepository
{
  readonly saves: Array<{ expected: number | null; tx: unknown }> = [];

  save(
    _proforma: ProformaVersion,
    _tx?: ProformaVersionRepositoryTransaction,
  ): Promise<void> {
    return Promise.resolve();
  }

  saveWithVersion(
    _proforma: ProformaVersion,
    expectedPersistedVersion: number | null,
    tx?: ProformaVersionRepositoryTransaction,
  ): Promise<void> {
    this.saves.push({ expected: expectedPersistedVersion, tx });
    return Promise.resolve();
  }

  findLatestByOrder(): Promise<ProformaVersion | null> {
    return Promise.resolve(null);
  }

  findByOrgSupplierNumber(): Promise<ProformaVersion | null> {
    return Promise.resolve(null);
  }

  findById(): Promise<ProformaVersion | null> {
    return Promise.resolve(null);
  }
}

describe("strict COMEX repository ports", () => {
  it("requires CAS save while retaining legacy save on alerts", async () => {
    const repository = new StrictAlertRepositoryStub();
    const tx = { opaque: "alert" };

    await repository.saveWithVersion({} as OrderAlert, null, tx);
    await repository.saveWithVersion({} as OrderAlert, 3, tx);

    expect(repository.saves).toEqual([
      { expected: null, tx },
      { expected: 3, tx },
    ]);
    expect(typeof repository.save).toBe("function");
  });

  it("requires CAS save and target lookup while retaining legacy save on proformas", async () => {
    const repository = new StrictProformaRepositoryStub();
    const tx = { opaque: "proforma" };

    await repository.saveWithVersion({} as ProformaVersion, null, tx);
    await repository.saveWithVersion({} as ProformaVersion, 5, tx);

    expect(repository.saves).toEqual([
      { expected: null, tx },
      { expected: 5, tx },
    ]);
    expect(typeof repository.save).toBe("function");
    await expect(repository.findById("proforma-001", "org_001", tx)).resolves.toBeNull();
  });
});
