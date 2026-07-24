import "reflect-metadata";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  expectAuthMatrix,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { PERMISSIONS_KEY } from "../../auth/permissions.guard";
import { ComexOverrideController } from "../comex-override.controller";
import { OrderAlertController } from "../order-alert.controller";
import { ProformaController } from "../proforma.controller";

const ROOT = resolve(__dirname, "../../../../../");

function read(relativePath: string): string {
  return readFileSync(resolve(ROOT, relativePath), "utf8");
}

function endpointBlock(source: string, method: string): string {
  const methodStart = source.indexOf(`async ${method}(`);
  expect(methodStart, `missing method ${method}`).toBeGreaterThanOrEqual(0);
  const decoratorStart = source.lastIndexOf("\n  @", methodStart);
  const nextDecorator = source.indexOf("\n  @", methodStart + 1);
  return source.slice(
    decoratorStart < 0 ? methodStart : decoratorStart,
    nextDecorator < 0 ? source.length : nextDecorator,
  );
}

function prismaModel(source: string, name: string): string {
  const start = source.indexOf(`model ${name} {`);
  expect(start, `missing Prisma model ${name}`).toBeGreaterThanOrEqual(0);
  const end = source.indexOf("\n}", start);
  expect(end, `unterminated Prisma model ${name}`).toBeGreaterThan(start);
  return source.slice(start, end);
}

const AUTH_CASES: Array<{
  controller: { prototype: Record<string, unknown> };
  endpoints: EndpointAuthCase[];
}> = [
  {
    controller: ComexOverrideController,
    endpoints: [
      {
        method: "request",
        permission: "comex:override:request",
        label: "override request",
      },
      {
        method: "findAll",
        permission: "comex:override:view",
        label: "override list",
      },
      {
        method: "approve",
        permission: "comex:override:approve",
        label: "override approve",
      },
      {
        method: "reject",
        permission: "comex:override:approve",
        label: "override reject",
      },
      {
        method: "execute",
        permission: "comex:override:execute",
        label: "override execute",
      },
    ],
  },
  {
    controller: OrderAlertController,
    endpoints: [
      { method: "findAll", permission: "comex:alert:read", label: "alert list" },
      {
        method: "create",
        permission: "comex:alert:resolve",
        label: "alert create",
      },
      {
        method: "acknowledge",
        permission: "comex:alert:resolve",
        label: "alert acknowledge",
      },
      {
        method: "resolve",
        permission: "comex:alert:resolve",
        label: "alert resolve",
      },
    ],
  },
  {
    controller: ProformaController,
    endpoints: [
      {
        method: "register",
        permission: "comex:proforma:register",
        label: "proforma register",
      },
      {
        method: "confirm",
        permission: "comex:proforma:confirm",
        label: "proforma confirm",
      },
    ],
  },
];

describe("COMEX S03 authorization and architecture regressions", () => {
  it("uses real permission metadata and enforces positive and negative guard paths", () => {
    for (const { controller, endpoints } of AUTH_CASES) {
      for (const endpoint of endpoints) {
        const handler = controller.prototype[endpoint.method];
        expect(
          Reflect.getMetadata(PERMISSIONS_KEY, handler as object),
          endpoint.label,
        ).toEqual([endpoint.permission]);
        expectAuthMatrix(
          controller as never,
          endpoint.method,
          endpoint.permission,
        );
      }
    }
  });

  it("forwards the parent order id for nested alert mutations", () => {
    const source = read("apps/api/src/comex/order-alert.controller.ts");
    for (const method of ["acknowledge", "resolve"]) {
      const block = endpointBlock(source, method);
      expect(block, method).toContain('@Param("orderId")');
      expect(block, method).toMatch(
        new RegExp(`this\\.svc\\.${method}\\([^;]*\\boid\\b`),
      );
    }
  });

  it("forwards Idempotency-Key into all four override writes", () => {
    const source = read("apps/api/src/comex/comex-override.controller.ts");
    for (const method of ["request", "approve", "reject", "execute"]) {
      const block = endpointBlock(source, method);
      expect(block, method).toContain('@Headers("idempotency-key")');
      expect(block, method).toContain("idempotencyKey");
    }
  });

  it("forwards Idempotency-Key into proforma register commands", () => {
    const source = read("apps/api/src/comex/proforma.controller.ts");
    const block = endpointBlock(source, "register");
    expect(block).toContain('@Headers("idempotency-key")');
    expect(block).toContain("idempotencyKey");
  });

  it("uses append-only receipts instead of replay columns on OverrideRequest", () => {
    const schema = read("packages/db/prisma/schema.prisma");
    const parent = prismaModel(schema, "OverrideRequest");
    const receipt = prismaModel(schema, "OverrideCommandReceipt");

    expect(parent).not.toContain("idempotencyKey");
    expect(parent).not.toContain("requestHash");
    expect(parent).toContain("commandReceipts OverrideCommandReceipt[]");
    expect(receipt).toContain("keyHash");
    expect(receipt).toContain("requestHash");
    expect(receipt).toContain("outcomeType");
    expect(receipt).toMatch(
      /@@unique\(\[organizationId,\s*commandName,\s*keyHash\]/,
    );
  });

  it("binds strict override ports and keeps lifecycle Prisma access out of COMEX", () => {
    const service = read("apps/api/src/comex/comex-override.service.ts");
    const module = read("apps/api/src/comex/comex.module.ts");

    expect(service).toContain("StrictOverrideRequestRepository");
    expect(service).toContain("OverrideCommandReceiptRepository");
    expect(service).toContain("OverrideRequest.requestForContext");
    expect(service).not.toMatch(/\btx\.overrideRequest\b/);
    expect(module).toContain("OVERRIDE_REQUEST_REPOSITORY");
    expect(module).toContain("PrismaOverrideRequestRepository");
    expect(module).toContain("OVERRIDE_COMMAND_RECEIPT_REPOSITORY");
    expect(module).toContain("PrismaOverrideCommandReceiptRepository");
  });

  it("declares mandatory optimistic versions in the COMEX HTTP body contracts", () => {
    const contracts = read(
      "packages/contracts/src/types/override-request.types.ts",
    );
    const approve = contracts.slice(
      contracts.indexOf("interface ApproveComexOverrideRequestDto"),
      contracts.indexOf("interface RejectComexOverrideRequestDto"),
    );
    const reject = contracts.slice(
      contracts.indexOf("interface RejectComexOverrideRequestDto"),
      contracts.indexOf("interface ExecuteComexOverrideRequestDto"),
    );
    const execute = contracts.slice(
      contracts.indexOf("interface ExecuteComexOverrideRequestDto"),
      contracts.indexOf("interface ExecuteOverrideDto"),
    );

    expect(approve).toContain("expectedOverrideVersion: number");
    expect(reject).toContain("expectedOverrideVersion: number");
    expect(execute).toContain("expectedOverrideVersion: number");
    expect(execute).toContain("expectedOrderVersion: number");
  });
});
