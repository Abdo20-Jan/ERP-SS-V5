import { describe, it } from "vitest";
import {
  assertControllerAuthCoverage,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { InventoryTaskController } from "../inventory-task.controller";

const ENDPOINTS: EndpointAuthCase[] = [
  { method: "create", permission: "inventory:task:create", label: "POST /inventory/tasks" },
  { method: "list", permission: "inventory:task:read", label: "GET /inventory/tasks" },
  { method: "summary", permission: "inventory:task:read", label: "GET /inventory/tasks/summary" },
  { method: "getById", permission: "inventory:task:read", label: "GET /inventory/tasks/:id" },
  { method: "assign", permission: "inventory:task:assign", label: "POST /inventory/tasks/:id/assign" },
  { method: "start", permission: "inventory:task:update", label: "POST /inventory/tasks/:id/start" },
  { method: "block", permission: "inventory:task:update", label: "POST /inventory/tasks/:id/block" },
  { method: "unblock", permission: "inventory:task:update", label: "POST /inventory/tasks/:id/unblock" },
  { method: "waitDependency", permission: "inventory:task:update", label: "POST /inventory/tasks/:id/wait-dependency" },
  { method: "resumeDependency", permission: "inventory:task:update", label: "POST /inventory/tasks/:id/resume-dependency" },
  { method: "escalate", permission: "inventory:task:escalate", label: "POST /inventory/tasks/:id/escalate" },
  { method: "complete", permission: "inventory:task:complete", label: "POST /inventory/tasks/:id/complete" },
  { method: "cancel", permission: "inventory:task:cancel", label: "POST /inventory/tasks/:id/cancel" },
];

describe("InventoryTaskController authorization (PR-INVENTORY-01-S06)", () => {
  it("class guards + matrix for all endpoints", () => {
    assertControllerAuthCoverage(InventoryTaskController, ENDPOINTS);
  });

  for (const ep of ENDPOINTS) {
    it(`${ep.label}: metadata permission ${ep.permission}`, () => {
      assertControllerAuthCoverage(InventoryTaskController, [ep]);
    });
  }
});
