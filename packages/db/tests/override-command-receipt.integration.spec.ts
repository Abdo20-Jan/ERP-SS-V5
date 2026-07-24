import { createHash } from "node:crypto";
import type { ConflictError } from "@sunset/contracts";
import {
  OverrideConcurrencyError,
  OverrideCommandName,
  type OverrideCommandReceipt,
  OverrideCommandOutcomeType,
  OverrideStatus,
} from "@sunset/domain";
import { Prisma, PrismaClient } from "@prisma/client";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { PrismaOverrideCommandReceiptRepository } from "../src/repositories/override-command-receipt.repository.prisma";
import { PrismaOverrideRequestRepository } from "../src/repositories/override-request.repository.prisma";

const DATABASE_URL = process.env.DATABASE_URL;
const RECEIPT_MIGRATION = "20260731010000_create_override_command_receipts";

class RollbackFixture extends Error {}

let fixtureUuidV7Sequence = 0n;

function nextFixtureUuidV7(): string {
  fixtureUuidV7Sequence += 1n;
  const sequence = fixtureUuidV7Sequence.toString(16).padStart(12, "0");
  return `0190a1b2-c3d4-7000-8000-${sequence}`;
}

function sha256(seed: string): string {
  return createHash("sha256").update(seed).digest("hex");
}

function md5(seed: string): string {
  return createHash("md5").update(seed).digest("hex");
}

function generatedKeyHash(sequence: number): string {
  return `${md5(String(sequence))}${md5(`key-${sequence}`)}`;
}

function receipt(
  overrideRequestId: string,
  organizationId: string,
  overrides: Partial<OverrideCommandReceipt> = {},
): OverrideCommandReceipt {
  return {
    id: nextFixtureUuidV7(),
    organizationId,
    overrideRequestId,
    commandName: OverrideCommandName.EXECUTE,
    keyHash: sha256(`key:${nextFixtureUuidV7()}`),
    requestHash: sha256(`request:${nextFixtureUuidV7()}`),
    actorId: nextFixtureUuidV7(),
    correlationId: `corr-${nextFixtureUuidV7()}`,
    outcomeType: OverrideCommandOutcomeType.SUCCESS,
    resultStatus: OverrideStatus.EXECUTED,
    resultVersion: 1,
    httpStatus: 200,
    result: { integration: true },
    recordedAt: new Date().toISOString(),
    ...overrides,
  };
}

describe("override command receipt persistence (PostgreSQL integration)", () => {
  let prisma: PrismaClient;

  beforeAll(async () => {
    if (!DATABASE_URL) {
      throw new Error(
        "OVERRIDE_RECEIPT_TEST_DATABASE_URL_REQUIRED: set DATABASE_URL to an isolated PostgreSQL test database.",
      );
    }
    prisma = new PrismaClient();
    try {
      await prisma.$connect();
      const readiness = await prisma.$queryRaw<
        Array<{
          databaseName: string;
          migrationApplied: boolean;
          receiptTable: string | null;
          triggerInstalled: boolean;
          identityIndexInstalled: boolean;
          historyIndexInstalled: boolean;
          tenantFkInstalled: boolean;
        }>
      >(Prisma.sql`
        SELECT
          current_database() AS "databaseName",
          EXISTS (
            SELECT 1
            FROM "_prisma_migrations"
            WHERE "migration_name" = ${RECEIPT_MIGRATION}
              AND "finished_at" IS NOT NULL
              AND "rolled_back_at" IS NULL
          ) AS "migrationApplied",
          to_regclass(
            format($fmt$%I.%I$fmt$, current_schema(), $name$override_command_receipts$name$)
          )::text AS "receiptTable",
          EXISTS (
            SELECT 1
            FROM pg_trigger trigger_record
            JOIN pg_class table_record ON table_record.oid = trigger_record.tgrelid
            JOIN pg_namespace namespace_record
              ON namespace_record.oid = table_record.relnamespace
            WHERE namespace_record.nspname = current_schema()
              AND table_record.relname = $name$override_command_receipts$name$
              AND trigger_record.tgname = $name$ocrr_append_only$name$
              AND NOT trigger_record.tgisinternal
          ) AS "triggerInstalled",
          EXISTS (
            SELECT 1 FROM pg_indexes
            WHERE schemaname = current_schema()
              AND indexname = $name$ocrr_org_command_key_uq$name$
          ) AS "identityIndexInstalled",
          EXISTS (
            SELECT 1 FROM pg_indexes
            WHERE schemaname = current_schema()
              AND indexname = $name$ocrr_request_history_idx$name$
          ) AS "historyIndexInstalled",
          EXISTS (
            SELECT 1
            FROM pg_constraint constraint_record
            JOIN pg_class table_record ON table_record.oid = constraint_record.conrelid
            JOIN pg_namespace namespace_record
              ON namespace_record.oid = table_record.relnamespace
            WHERE namespace_record.nspname = current_schema()
              AND table_record.relname = $name$override_command_receipts$name$
              AND constraint_record.conname = $name$ocrr_override_request_fk$name$
          ) AS "tenantFkInstalled"
      `);
      const state = readiness[0];
      if (
        !state?.migrationApplied ||
        !state.receiptTable ||
        !state.triggerInstalled ||
        !state.identityIndexInstalled ||
        !state.historyIndexInstalled ||
        !state.tenantFkInstalled
      ) {
        throw new Error(
          `OVERRIDE_RECEIPT_MIGRATION_NOT_READY: database "${state?.databaseName ?? "unknown"}" does not have completed migration ${RECEIPT_MIGRATION}, table override_command_receipts, trigger ocrr_append_only, tenant FK, and required indexes. Apply prisma migrate deploy to the isolated test database before running this spec.`,
        );
      }
    } catch (error) {
      await prisma.$disconnect().catch(() => undefined);
      if (
        error instanceof Error &&
        error.message.startsWith("OVERRIDE_RECEIPT_MIGRATION_NOT_READY:")
      ) {
        throw error;
      }
      throw new Error(
        `OVERRIDE_RECEIPT_MIGRATION_PREFLIGHT_FAILED: could not validate ${RECEIPT_MIGRATION} on the isolated test database.`,
        { cause: error },
      );
    }
  });

  afterAll(async () => {
    if (prisma) await prisma.$disconnect();
  });

  async function createOverrideRequest(
    tx: Prisma.TransactionClient,
    organizationId: string,
  ) {
    return tx.overrideRequest.create({
      data: {
        id: nextFixtureUuidV7(),
        organizationId,
        action: "ready_to_ship_partial",
        resourceType: "international_order",
        resourceId: nextFixtureUuidV7(),
        reason: "Synthetic integration fixture for receipt persistence",
        requestedById: nextFixtureUuidV7(),
        requestedAt: new Date("2026-07-23T10:00:00.000Z"),
        status: "PENDING",
        version: 0,
        createdAt: new Date("2026-07-23T10:00:00.000Z"),
        updatedAt: new Date("2026-07-23T10:00:00.000Z"),
      },
    });
  }

  async function withRollback(
    test: (tx: Prisma.TransactionClient) => Promise<void>,
  ): Promise<void> {
    const marker = new RollbackFixture("rollback synthetic fixture");
    try {
      await prisma.$transaction(async (tx) => {
        await test(tx);
        throw marker;
      });
    } catch (error) {
      if (error !== marker) throw error;
    }
  }

  it("appends and finds a canonical receipt in the same transaction", async () => {
    await withRollback(async (tx) => {
      const organizationId = `org_receipt_${nextFixtureUuidV7()}`;
      const request = await createOverrideRequest(tx, organizationId);
      const expected = receipt(request.id, organizationId);
      const repository = new PrismaOverrideCommandReceiptRepository(tx);

      await repository.append(expected, tx);
      const found = await repository.find(
        {
          organizationId,
          commandName: expected.commandName,
          keyHash: expected.keyHash,
        },
        tx,
      );

      expect(found).toEqual(expected);
    });
  });

  it("maps a duplicate command identity to a recognizable ConflictError", async () => {
    await expect(
      prisma.$transaction(async (tx) => {
        const organizationId = `org_duplicate_${nextFixtureUuidV7()}`;
        const request = await createOverrideRequest(tx, organizationId);
        const repository = new PrismaOverrideCommandReceiptRepository(tx);
        const first = receipt(request.id, organizationId);
        const duplicate = { ...first, id: nextFixtureUuidV7() };

        await repository.append(first, tx);
        await repository.append(duplicate, tx);
      }),
    ).rejects.toMatchObject({
      name: "ConflictError",
      code: "CONFLICT",
      entityType: "OverrideCommandReceipt",
    } satisfies Partial<ConflictError>);
  });

  it("rejects a cross-organization parent reference", async () => {
    await expect(
      prisma.$transaction(async (tx) => {
        const request = await createOverrideRequest(
          tx,
          `org_parent_${nextFixtureUuidV7()}`,
        );
        const repository = new PrismaOverrideCommandReceiptRepository(tx);

        await repository.append(
          receipt(request.id, `org_other_${nextFixtureUuidV7()}`),
          tx,
        );
      }),
    ).rejects.toThrow();
  });

  it("rejects non-canonical hashes", async () => {
    await expect(
      prisma.$transaction(async (tx) => {
        const organizationId = `org_hash_${nextFixtureUuidV7()}`;
        const request = await createOverrideRequest(tx, organizationId);
        const repository = new PrismaOverrideCommandReceiptRepository(tx);

        await repository.append(
          receipt(request.id, organizationId, { keyHash: "not-a-sha256" }),
          tx,
        );
      }),
    ).rejects.toThrow();
  });

  it.each(["UPDATE", "DELETE", "TRUNCATE"] as const)(
    "blocks %s against append-only receipts",
    async (operation) => {
      await expect(
        prisma.$transaction(async (tx) => {
          const organizationId = `org_immutable_${nextFixtureUuidV7()}`;
          const request = await createOverrideRequest(tx, organizationId);
          const repository = new PrismaOverrideCommandReceiptRepository(tx);
          const persisted = receipt(request.id, organizationId);
          await repository.append(persisted, tx);

          if (operation === "UPDATE") {
            await tx.overrideCommandReceipt.update({
              where: { id: persisted.id },
              data: { httpStatus: 201 },
            });
          } else if (operation === "DELETE") {
            await tx.overrideCommandReceipt.delete({
              where: { id: persisted.id },
            });
          } else {
            await tx.$executeRawUnsafe(
              'TRUNCATE TABLE "override_command_receipts"',
            );
          }
        }),
      ).rejects.toThrow("append-only");
    },
  );

  it("allows only one stale writer to satisfy strict CAS", async () => {
    await withRollback(async (tx) => {
      const organizationId = `org_cas_${nextFixtureUuidV7()}`;
      const persisted = await createOverrideRequest(tx, organizationId);
      const repository = new PrismaOverrideRequestRepository(tx);
      const firstWriter = await repository.findByIdForOrganization(
        persisted.id,
        organizationId,
        tx,
      );
      const staleWriter = await repository.findByIdForOrganization(
        persisted.id,
        organizationId,
        tx,
      );
      expect(firstWriter).not.toBeNull();
      expect(staleWriter).not.toBeNull();

      firstWriter!.approve(
        { approvedById: nextFixtureUuidV7(), expectedVersion: 0 },
        new Date("2026-07-23T11:00:00.000Z"),
      );
      await repository.saveWithVersion(firstWriter!, 0, tx);

      staleWriter!.reject(
        {
          rejectedById: nextFixtureUuidV7(),
          reason: "Synthetic stale writer rejection reason",
          expectedVersion: 0,
        },
        new Date("2026-07-23T11:01:00.000Z"),
      );

      await expect(
        repository.saveWithVersion(staleWriter!, 0, tx),
      ).rejects.toBeInstanceOf(OverrideConcurrencyError);
    });
  });

  it("uses the unique lookup and history indexes on representative synthetic volume", async () => {
    await withRollback(async (tx) => {
      const organizationId = `org_plan_${nextFixtureUuidV7()}`;
      const request = await createOverrideRequest(tx, organizationId);

      await tx.$executeRaw(
        Prisma.sql`
          INSERT INTO "override_command_receipts" (
            "id", "organization_id", "override_request_id", "command_name",
            "key_hash", "request_hash", "actor_id", "correlation_id",
            "outcome_type", "result_status", "result_version", "http_status",
            "recorded_at"
          )
          SELECT
            uuid_generate_v7(),
            ${organizationId},
            ${request.id}::uuid,
            'override.execute.v1',
            md5(gs::text) || md5('key-' || gs::text),
            md5('request-' || gs::text) || md5('payload-' || gs::text),
            '55555555-5555-7555-8555-555555555555'::uuid,
            'corr-plan-' || gs::text,
            'SUCCESS',
            'EXECUTED',
            1,
            200,
            CURRENT_TIMESTAMP + gs * INTERVAL '1 millisecond'
          FROM generate_series(1, 2000) AS gs
        `,
      );
      await tx.$executeRawUnsafe('ANALYZE "override_command_receipts"');

      const lookupPlan = await tx.$queryRaw<Array<Record<string, unknown>>>(
        Prisma.sql`
          EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON)
          SELECT *
          FROM "override_command_receipts"
          WHERE "organization_id" = ${organizationId}
            AND "command_name" = 'override.execute.v1'
            AND "key_hash" = ${generatedKeyHash(1999)}
        `,
      );
      const historyPlan = await tx.$queryRaw<Array<Record<string, unknown>>>(
        Prisma.sql`
          EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON)
          SELECT *
          FROM "override_command_receipts"
          WHERE "organization_id" = ${organizationId}
            AND "override_request_id" = ${request.id}::uuid
          ORDER BY "recorded_at" DESC
          LIMIT 50
        `,
      );

      expect(JSON.stringify(lookupPlan)).toContain("ocrr_org_command_key_uq");
      expect(JSON.stringify(historyPlan)).toContain(
        "ocrr_request_history_idx",
      );
    });
  });
});
