import { fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";
import { describe, expect, it } from "vitest";

import { useOnlineStatus } from "../hooks/use-online-status";
import { EmptyState } from "../states/empty-state";
import { OfflineState } from "../states/offline-state";
import { ObjectPageHeader } from "./object-page-header";
import { StatusBadge } from "./status-badge";
import { TabPanel, Tabs } from "./tabs";

describe("StatusBadge", () => {
  it("renders ACTIVE styles and label when isActive", () => {
    render(<StatusBadge isActive />);
    const badge = screen.getByText("Ativo");
    expect(badge).toBeInTheDocument();
    expect(badge.closest("[data-status]")?.getAttribute("data-status")).toBe(
      "ACTIVE",
    );
  });

  it("renders INACTIVE styles and label when not active", () => {
    render(<StatusBadge isActive={false} />);
    const badge = screen.getByText("Inativo");
    expect(badge).toBeInTheDocument();
    expect(badge.closest("[data-status]")?.getAttribute("data-status")).toBe(
      "INACTIVE",
    );
  });

  it("accepts status string ACTIVE", () => {
    render(<StatusBadge status="ACTIVE" />);
    expect(screen.getByText("Ativo")).toBeInTheDocument();
  });
});

describe("Tabs", () => {
  const items = [
    { id: "locations", label: "Posições", count: 2 },
    { id: "balance", label: "Saldo" },
    { id: "documents", label: "Documentos", count: 0 },
  ];

  it("exposes role=tablist and aria-selected", () => {
    render(
      <Tabs items={items} value="locations" onValueChange={() => undefined} />,
    );
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(3);
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
  });

  it("switches panel when tab clicked", () => {
    function Harness() {
      const [value, setValue] = React.useState("locations");
      return (
        <div>
          <Tabs items={items} value={value} onValueChange={setValue} />
          <TabPanel id="locations" value="locations" activeValue={value}>
            painel-posicoes
          </TabPanel>
          <TabPanel id="balance" value="balance" activeValue={value}>
            painel-saldo
          </TabPanel>
        </div>
      );
    }
    render(<Harness />);
    expect(screen.getByText("painel-posicoes")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("tab", { name: /Saldo/i }));
    expect(screen.getByText("painel-saldo")).toBeInTheDocument();
    expect(screen.queryByText("painel-posicoes")).not.toBeInTheDocument();
  });
});

describe("EmptyState", () => {
  it("has no button when action is omitted", () => {
    render(<EmptyState title="Vazio" description="Sem dados" />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});

describe("ObjectPageHeader", () => {
  it("renders code, title and badge", () => {
    render(
      <ObjectPageHeader
        code="TP_NAC"
        title="Depósito TP Nacional"
        isActive
        primaryAction={{ label: "Editar", disabled: true }}
      />,
    );
    expect(screen.getByTestId("object-page-code")).toHaveTextContent("TP_NAC");
    expect(screen.getByTestId("object-page-title")).toHaveTextContent(
      "Depósito TP Nacional",
    );
    expect(screen.getByText("Ativo")).toBeInTheDocument();
    expect(screen.getByTestId("object-page-primary-action")).toBeDisabled();
  });
});

describe("useOnlineStatus + OfflineState", () => {
  it("shows offline banner when online=false", () => {
    function OfflineProbe({ online }: { online: boolean }) {
      return online ? null : <OfflineState />;
    }
    render(<OfflineProbe online={false} />);
    expect(screen.getByText(/Você está offline/i)).toBeInTheDocument();
  });

  it("hook returns boolean", () => {
    function Probe() {
      const online = useOnlineStatus(true);
      return <span data-testid="online">{String(online)}</span>;
    }
    render(<Probe />);
    expect(screen.getByTestId("online").textContent).toMatch(/true|false/);
  });
});
