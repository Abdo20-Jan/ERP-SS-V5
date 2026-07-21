import { describe, it } from "vitest";
import {
  assertControllerAuthCoverage,
  type EndpointAuthCase,
} from "../../auth/endpoint-auth.helpers";
import { ProductCategoryController } from "../product-category.controller";
import { ProductController } from "../product.controller";

const PRODUCT_ENDPOINTS: EndpointAuthCase[] = [
  { method: "create", permission: "product:write", label: "POST /products" },
  { method: "findAll", permission: "product:read", label: "GET /products" },
  { method: "findById", permission: "product:read", label: "GET /products/:id" },
  {
    method: "update",
    permission: "product:write",
    label: "PATCH /products/:id",
  },
  {
    method: "activate",
    permission: "product:write",
    label: "POST /products/:id/activate",
  },
  {
    method: "deactivate",
    permission: "product:write",
    label: "POST /products/:id/deactivate",
  },
];

const CATEGORY_ENDPOINTS: EndpointAuthCase[] = [
  {
    method: "create",
    permission: "product:write",
    label: "POST /product-categories",
  },
  {
    method: "findAll",
    permission: "product:read",
    label: "GET /product-categories",
  },
  {
    method: "findById",
    permission: "product:read",
    label: "GET /product-categories/:id",
  },
];

describe("ProductController authorization (MS-01-SS9)", () => {
  for (const ep of PRODUCT_ENDPOINTS) {
    it(`${ep.label}: 401/403/allow + guards`, () => {
      assertControllerAuthCoverage(ProductController, [ep]);
    });
  }
});

describe("ProductCategoryController authorization (MS-01-SS9)", () => {
  for (const ep of CATEGORY_ENDPOINTS) {
    it(`${ep.label}: 401/403/allow + guards`, () => {
      assertControllerAuthCoverage(ProductCategoryController, [ep]);
    });
  }
});
