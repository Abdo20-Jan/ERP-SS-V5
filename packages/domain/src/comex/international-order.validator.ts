import { OrderValidationError } from "../common/errors";
import { isValidOperationType, type OperationType } from "./international-order.enums";

export interface OrderValidationInput {
  operationType: string;
  supplierPartyId?: string;
  incoterm?: string | null;
  paymentTerms?: string | null;
  originCountry?: string | null;
  currencyCode?: string | null;
  expectedReadyDate?: string | null;
  responsibleUserId?: string | null;
  hasLines: boolean;
}

export function validateCreateOrder(input: { operationType: string }): void {
  if (!input.operationType || !isValidOperationType(input.operationType)) {
    throw new OrderValidationError("Invalid operation_type", {
      provided: input.operationType,
      valid: "IMPORTACAO_DEFINITIVA, TRANSITO_ADUANEIRO, ZONA_PRIMARIA, ZONA_FRANCA",
    });
  }
}

export function validateApprovalReady(input: OrderValidationInput): string[] {
  const errors: string[] = [];
  if (!input.supplierPartyId) errors.push("supplierPartyId is required for approval");
  if (!input.incoterm) errors.push("incoterm is required for approval");
  if (!input.paymentTerms) errors.push("paymentTerms is required for approval");
  if (!input.originCountry) errors.push("originCountry is required for approval");
  if (!input.currencyCode) errors.push("currencyCode is required for approval");
  if (!input.expectedReadyDate) errors.push("expectedReadyDate is required for approval");
  if (!input.responsibleUserId) errors.push("responsibleUserId is required for approval");
  if (!input.hasLines) errors.push("At least one active line is required for approval");
  return errors;
}

