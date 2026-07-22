import { describe, it } from "vitest";
import {
  assertControllerAuthCoverage,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { InventoryDocumentController } from "../inventory-document.controller";

const ENDPOINTS: EndpointAuthCase[] = [
  { method: "upload", permission: "inventory:document:upload", label: "POST /inventory/documents" },
  { method: "list", permission: "inventory:document:read", label: "GET /inventory/documents" },
  { method: "downloadSigned", permission: "inventory:document:read", label: "GET /inventory/documents/file" },
  { method: "getById", permission: "inventory:document:read", label: "GET /inventory/documents/:id" },
  { method: "versions", permission: "inventory:document:read", label: "GET /inventory/documents/:id/versions" },
  { method: "archive", permission: "inventory:document:archive", label: "POST archive" },
  { method: "restore", permission: "inventory:document:archive", label: "POST restore" },
  { method: "listByWarehouse", permission: "inventory:document:read", label: "GET warehouses/:id/documents" },
  { method: "listByLocation", permission: "inventory:document:read", label: "GET locations/:id/documents" },
];

describe("InventoryDocumentController authorization (PR-INVENTORY-01-S04)", () => {
  it("class guards + matrix", () => {
    assertControllerAuthCoverage(InventoryDocumentController, ENDPOINTS);
  });
  for (const ep of ENDPOINTS) {
    it(`${ep.label}: ${ep.permission}`, () => {
      assertControllerAuthCoverage(InventoryDocumentController, [ep]);
    });
  }
});
