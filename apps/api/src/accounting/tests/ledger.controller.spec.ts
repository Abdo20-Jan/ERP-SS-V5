import { beforeEach, describe, expect, it, vi } from "vitest";
import { PermissionsGuard } from "../../auth/permissions.guard";
import { LedgerController } from "../ledger.controller";
import { LedgerService } from "../ledger.service";

describe("LedgerController", () => {
  let controller: LedgerController;
  let service: Record<string, ReturnType<typeof vi.fn>>;

  beforeEach(() => {
    service = {
      getJournals: vi.fn().mockResolvedValue([]),
      createJournal: vi.fn().mockResolvedValue({ id: "j1" }),
      createJournalEntry: vi.fn().mockResolvedValue({ id: "e1", status: "DRAFT" }),
      getJournalEntries: vi.fn().mockResolvedValue({ data: [], total: 0 }),
      getJournalEntry: vi.fn().mockResolvedValue({ id: "e1" }),
      postJournalEntry: vi.fn().mockResolvedValue({ id: "e1", status: "POSTED" }),
      reverseJournalEntry: vi
        .fn()
        .mockResolvedValue({ id: "e2", status: "POSTED" }),
    };
    controller = new LedgerController(service as unknown as LedgerService);
  });

  it("createEntry", async () => {
    await controller.createEntry(
      {
        journalId: "j",
        entryDate: "2026-07-21",
        description: "t",
        lines: [
          { accountId: "a1", debitAmount: "100" },
          { accountId: "a2", creditAmount: "100" },
        ],
      },
      { user: { id: "u" } },
    );
    expect(service.createJournalEntry).toHaveBeenCalled();
  });

  it("getEntries", async () => {
    await controller.getEntries("DRAFT", undefined, undefined, undefined, "1", "20");
    expect(service.getJournalEntries).toHaveBeenCalled();
  });

  it("getEntry", async () => {
    await controller.getEntry("e1");
    expect(service.getJournalEntry).toHaveBeenCalledWith("e1");
  });

  it("postEntry", async () => {
    await controller.postEntry("e1", {}, { user: { id: "u" } });
    expect(service.postJournalEntry).toHaveBeenCalled();
  });

  it("reverseEntry", async () => {
    await controller.reverseEntry(
      "e1",
      { reason: "fix", reversalDate: "2026-07-22" },
      { user: { id: "u" } },
    );
    expect(service.reverseJournalEntry).toHaveBeenCalled();
  });

  it("getJournals", async () => {
    await controller.getJournals();
    expect(service.getJournals).toHaveBeenCalled();
  });

  it("createJournal", async () => {
    await controller.createJournal(
      { code: "99", name: "X", type: "GENERAL" },
      { user: { id: "u" } },
    );
    expect(service.createJournal).toHaveBeenCalled();
  });

  it("RBAC write denied without permission", () => {
    const reflector = {
      getAllAndOverride: vi.fn().mockReturnValue(["accounting:write"]),
    };
    const guard = new PermissionsGuard(reflector as never);
    const ctx = {
      getHandler: vi.fn(),
      getClass: vi.fn(),
      switchToHttp: () => ({
        getRequest: () => ({
          user: {
            roles: [
              {
                role: {
                  permissions: [
                    { permission: { action: "accounting:read" } },
                  ],
                },
              },
            ],
          },
        }),
      }),
    } as never;
    expect(() => guard.canActivate(ctx)).toThrow();
  });

  it("RBAC read allowed", () => {
    const reflector = {
      getAllAndOverride: vi.fn().mockReturnValue(["accounting:read"]),
    };
    const guard = new PermissionsGuard(reflector as never);
    const ctx = {
      getHandler: vi.fn(),
      getClass: vi.fn(),
      switchToHttp: () => ({
        getRequest: () => ({
          user: {
            roles: [
              {
                role: {
                  permissions: [
                    { permission: { action: "accounting:read" } },
                  ],
                },
              },
            ],
          },
        }),
      }),
    } as never;
    expect(guard.canActivate(ctx)).toBe(true);
  });
});
