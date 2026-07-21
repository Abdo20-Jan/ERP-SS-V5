/**
 * D-003.14: Estoque não-negativo — skeleton until MS-02.
 */
import type { PrismaClient } from "@prisma/client";
import type { InvariantResult } from "./validate-double-entry";

export async function validateStock(
  prisma: PrismaClient,
): Promise<InvariantResult> {
  const productCount = await prisma.product.count();
  console.log(
    `ℹ️  D-003.14: Stock validation skeleton — ${productCount} products (full check in MS-02)`,
  );
  return { passed: true, message: "SKELETON - MS-02" };
}
