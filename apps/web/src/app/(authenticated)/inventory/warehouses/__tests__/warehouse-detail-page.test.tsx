import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { WarehouseDetailDto } from "../../../../../lib/api/inventory";
import { WarehouseDetailPage } from "../[id]/components/warehouse-detail-page";
import { LocationTab } from "../[id]/components/location-tab";
import { EmptyState } from "@sunset/ui";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

vi.mock("../[id]/hooks/use-warehouse-detail", () => ({
  useWarehouseDetail: () => ({
    detail: null,
    state: "loading",
    error: null,
    reload: () => undefined,
  }),
}));

const mockDetail: WarehouseDetailDto = {
  header: {
    id: "wh-1",
    organizationId: "org_001",
    code: "TP_NAC",
    name: "Depósito TP Nacional",
    type: "TERCEIRIZADO",
    addressStreet: null,
    addressNumber: null,
    addressCity: "Buenos Aires",
    addressProvince: null,
    addressCountry: "AR",
    addressPostalCode: null,
    zones: [],
    capacity: 1000,
    capacityUnit: "m3",
    isActive: true,
    version: 1,
    createdAt: "2026-07-21T00:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
  config: null,
  summary: {
    locationTotal: 0,
    locationActive: 0,
    documentTotal: 0,
    openOverrideCount: 0,
    balanceAvailable: false,
  },
  tabs: [],
  locationsPreview: [],
  documentsPreview: [],
  overridesPreview: [],
  recentHistory: [
    {
      id: "h1",
      action: "warehouse.created",
      entityType: "warehouse",
      entityId: "wh-1",
      userId: "u1",
      createdAt: "2026-07-21T00:00:00.000Z",
      correlationId: "c1",
    },
  ],
  availableActions: ["read", "update", "deactivate"],
  primaryAction: "update",
};

describe("WarehouseDetailPage", () => {
  it("renders 5 tabs from mocked detail", () => {
    render(
      <WarehouseDetailPage
        warehouseId="wh-1"
        detailOverride={mockDetail}
        loadStateOverride="success"
        onlineOverride={true}
      />,
    );
    expect(screen.getByTestId("warehouse-detail-page")).toBeInTheDocument();
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(5);
    expect(screen.getByRole("tab", { name: /Posições/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /Saldo/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /Documentos/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /Timeline/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /Auditoria/i })).toBeInTheDocument();
    expect(screen.getByTestId("object-page-code")).toHaveTextContent("TP_NAC");
    expect(screen.getByTestId("object-page-title")).toHaveTextContent(
      "Depósito TP Nacional",
    );
  });

  it("shows offline banner when online=false", () => {
    render(
      <WarehouseDetailPage
        warehouseId="wh-1"
        detailOverride={mockDetail}
        loadStateOverride="success"
        onlineOverride={false}
      />,
    );
    expect(screen.getByText(/Você está offline/i)).toBeInTheDocument();
  });

  it("switches to Saldo tab and shows deferred message", () => {
    render(
      <WarehouseDetailPage
        warehouseId="wh-1"
        detailOverride={mockDetail}
        loadStateOverride="success"
        onlineOverride={true}
      />,
    );
    fireEvent.click(screen.getByRole("tab", { name: /Saldo/i }));
    expect(screen.getByText(/D-003\.14/i)).toBeInTheDocument();
  });
});

describe("LocationTab empty", () => {
  it("shows EmptyState when no locations", () => {
    render(
      <LocationTab warehouseId="wh-1" preview={[]} active={false} />,
    );
    expect(screen.getByText("Nenhuma posição")).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});

describe("EmptyState wrapper", () => {
  it("has no action button without action props", () => {
    render(<EmptyState title="Vazio" />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
