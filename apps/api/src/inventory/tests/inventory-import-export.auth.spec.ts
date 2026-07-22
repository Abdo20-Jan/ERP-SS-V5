import { describe, it } from "vitest"; import { assertControllerAuthCoverage, type EndpointAuthCase } from "../../auth/endpoint-auth.helpers"; import { InventoryImportController } from "../inventory-import.controller"; import { InventoryExportController } from "../inventory-export.controller";

const IMPORT: EndpointAuthCase[] = [
  { method: "create", permission: "inventory:import:create", label: "POST /inventory/imports" },
  { method: "list", permission: "inventory:import:read", label: "GET /inventory/imports" },
  { method: "get", permission: "inventory:import:read", label: "GET /inventory/imports/:id" },
  { method: "errors", permission: "inventory:import:error:read", label: "GET /inventory/imports/:id/errors" },
  { method: "apply", permission: "inventory:import:apply", label: "POST /inventory/imports/:id/apply" },
  { method: "cancel", permission: "inventory:import:cancel", label: "POST /inventory/imports/:id/cancel" },
];
const EXPORT: EndpointAuthCase[] = [
  { method: "create", permission: "inventory:export:create", label: "POST /inventory/exports" },
  { method: "list", permission: "inventory:export:read", label: "GET /inventory/exports" },
  { method: "get", permission: "inventory:export:read", label: "GET /inventory/exports/:id" },
  { method: "cancel", permission: "inventory:export:cancel", label: "POST /inventory/exports/:id/cancel" },
];
describe("ImportExport auth", () => {
  it("import all", () => { assertControllerAuthCoverage(InventoryImportController, IMPORT); });
  it("export all", () => { assertControllerAuthCoverage(InventoryExportController, EXPORT); });
  for (const ep of IMPORT) { it(`import ${ep.label}`, () => { assertControllerAuthCoverage(InventoryImportController, [ep]); }); }
  for (const ep of EXPORT) { it(`export ${ep.label}`, () => { assertControllerAuthCoverage(InventoryExportController, [ep]); }); }
});
