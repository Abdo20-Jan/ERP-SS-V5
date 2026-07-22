import { WarehouseValidationError } from "../common/errors";
import { isWarehouseType } from "./warehouse-type.enum";

export function validateWarehouseInvariants(input: {
  code: string;
  name: string;
  type: string;
  capacity?: number | null;
}): void {
  if (!input.code?.trim()) {
    throw new WarehouseValidationError("code is required");
  }
  if (!input.name?.trim()) {
    throw new WarehouseValidationError("name is required");
  }
  if (!isWarehouseType(String(input.type))) {
    throw new WarehouseValidationError(`Invalid warehouse type: ${input.type}`);
  }
  if (input.capacity != null && Number(input.capacity) < 0) {
    throw new WarehouseValidationError("capacity must be >= 0");
  }
}
