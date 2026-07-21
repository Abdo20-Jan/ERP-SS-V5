import { beforeEach, describe, expect, it, vi } from "vitest";
import { PermissionsGuard } from "../../auth/permissions.guard";
import { ProductCategoryController } from "../product-category.controller";
import { ProductController } from "../product.controller";
import { ProductService } from "../product.service";

describe("ProductController", () => {
  let controller: ProductController;
  let categories: ProductCategoryController;
  let service: Record<string, ReturnType<typeof vi.fn>>;

  beforeEach(() => {
    service = {
      create: vi.fn().mockResolvedValue({ id: "1" }),
      findAll: vi.fn().mockResolvedValue({ data: [], total: 0 }),
      findById: vi.fn().mockResolvedValue({ id: "1" }),
      update: vi.fn().mockResolvedValue({ id: "1" }),
      activate: vi.fn().mockResolvedValue({ id: "1", isActive: true }),
      deactivate: vi.fn().mockResolvedValue({ id: "1", isActive: false }),
      createCategory: vi.fn().mockResolvedValue({ id: "c1" }),
      findAllCategories: vi.fn().mockResolvedValue([]),
      findCategoryById: vi.fn().mockResolvedValue({ id: "c1" }),
    };
    controller = new ProductController(service as unknown as ProductService);
    categories = new ProductCategoryController(
      service as unknown as ProductService,
    );
  });

  it("create delegates", async () => {
    await controller.create({ sku: "X" } as never, { user: { id: "u" } });
    expect(service.create).toHaveBeenCalled();
  });

  it("findAll delegates", async () => {
    await controller.findAll("1", "20");
    expect(service.findAll).toHaveBeenCalled();
  });

  it("findById delegates", async () => {
    await controller.findById("1");
    expect(service.findById).toHaveBeenCalledWith("1");
  });

  it("update/activate/deactivate", async () => {
    await controller.update("1", { name: "Y" }, { user: { id: "u" } });
    await controller.activate("1", { user: { id: "u" } });
    await controller.deactivate("1", { reason: "x" }, { user: { id: "u" } });
    expect(service.update).toHaveBeenCalled();
    expect(service.activate).toHaveBeenCalled();
    expect(service.deactivate).toHaveBeenCalled();
  });

  it("category routes", async () => {
    await categories.create({ code: "01", name: "P" }, { user: { id: "u" } });
    await categories.findAll();
    await categories.findById("c1");
    expect(service.createCategory).toHaveBeenCalled();
    expect(service.findAllCategories).toHaveBeenCalled();
  });

  it("RBAC product:write denied without permission", () => {
    const reflector = {
      getAllAndOverride: vi.fn().mockReturnValue(["product:write"]),
    };
    const guard = new PermissionsGuard(reflector as never);
    const ctx = {
      getHandler: vi.fn(),
      getClass: vi.fn(),
      switchToHttp: () => ({
        getRequest: () => ({
          user: {
            roles: [
              { role: { permissions: [{ permission: { action: "product:read" } }] } },
            ],
          },
        }),
      }),
    } as never;
    expect(() => guard.canActivate(ctx)).toThrow();
  });

  it("RBAC product:read allowed", () => {
    const reflector = {
      getAllAndOverride: vi.fn().mockReturnValue(["product:read"]),
    };
    const guard = new PermissionsGuard(reflector as never);
    const ctx = {
      getHandler: vi.fn(),
      getClass: vi.fn(),
      switchToHttp: () => ({
        getRequest: () => ({
          user: {
            roles: [
              { role: { permissions: [{ permission: { action: "product:read" } }] } },
            ],
          },
        }),
      }),
    } as never;
    expect(guard.canActivate(ctx)).toBe(true);
  });
});
