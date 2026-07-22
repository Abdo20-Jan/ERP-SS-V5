import { describe, expect, it } from "vitest"; import { IMPORT_EXPORT_EVENT_TYPES } from "@sunset/contracts";
describe("ImportExport contracts", () => { it("exports event types", () => { expect(IMPORT_EXPORT_EVENT_TYPES.IMPORT_CREATED).toBe("inventory.import.created"); expect(IMPORT_EXPORT_EVENT_TYPES.EXPORT_COMPLETED).toBe("inventory.export.completed"); }); });
