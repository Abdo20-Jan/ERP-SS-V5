/**
 * Port for warehouse balance checks (D-003.14 related).
 * Real implementation lands in PR-INVENTORY-01-S04 (InventorySummary).
 * S03 ships AlwaysFalse adapter so deactivate-with-balance gate is wired
 * but inert until S04.
 */
export interface InventoryBalancePort {
  hasPositiveBalance(warehouseId: string): Promise<boolean>;
}

export const INVENTORY_BALANCE_PORT = Symbol("InventoryBalancePort");

export class AlwaysFalseInventoryBalancePort implements InventoryBalancePort {
  async hasPositiveBalance(_warehouseId: string): Promise<boolean> {
    return false;
  }
}

export class FixedInventoryBalancePort implements InventoryBalancePort {
  constructor(private readonly positive: boolean) {}
  async hasPositiveBalance(_warehouseId: string): Promise<boolean> {
    return this.positive;
  }
}
