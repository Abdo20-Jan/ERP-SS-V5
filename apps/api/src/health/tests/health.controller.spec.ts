import { HealthCheckService } from "@nestjs/terminus";
import { Test, TestingModule } from "@nestjs/testing";
import { HealthController } from "../health.controller";
import { PrismaHealthIndicator } from "../prisma.health";

describe("HealthController", () => {
  let controller: HealthController;
  let healthCheckService: HealthCheckService;
  let prismaHealthIndicator: PrismaHealthIndicator;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        {
          provide: HealthCheckService,
          useValue: {
            check: jest.fn(),
          },
        },
        {
          provide: PrismaHealthIndicator,
          useValue: {
            isHealthy: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<HealthController>(HealthController);
    healthCheckService = module.get<HealthCheckService>(HealthCheckService);
    prismaHealthIndicator = module.get<PrismaHealthIndicator>(PrismaHealthIndicator);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("check", () => {
    it("should return health status without DB check", async () => {
      const mockResult = { status: "ok" };
      jest.spyOn(healthCheckService, "check").mockResolvedValue(mockResult as any);

      const result = await controller.check();

      expect(result).toEqual(mockResult);
      expect(healthCheckService.check).toHaveBeenCalledWith([]);
    });
  });

  describe("ready", () => {
    it("should return health status with DB check", async () => {
      const mockResult = { status: "ok", info: { database: { status: "up" } } };
      jest.spyOn(healthCheckService, "check").mockResolvedValue(mockResult as any);
      jest.spyOn(prismaHealthIndicator, "isHealthy").mockResolvedValue({
        database: { status: "up" },
      } as any);

      const result = await controller.ready();

      expect(result).toEqual(mockResult);
      expect(healthCheckService.check).toHaveBeenCalled();
    });
  });

  describe("detailed", () => {
    it("should return detailed health status", async () => {
      const mockResult = {
        status: "ok",
        info: {
          database: { status: "up" },
          app: { status: "up", version: "0.0.0" },
        },
      };
      jest.spyOn(healthCheckService, "check").mockResolvedValue(mockResult as any);
      jest.spyOn(prismaHealthIndicator, "isHealthy").mockResolvedValue({
        database: { status: "up" },
      } as any);

      const result = await controller.detailed();

      expect(result).toEqual(mockResult);
      expect(healthCheckService.check).toHaveBeenCalled();
    });
  });
});
