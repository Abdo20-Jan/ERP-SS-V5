import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AppShell } from "./app-shell";

describe("AppShell", () => {
  it("renders NetSuite chrome with side navigation", () => {
    render(
      <AppShell
        user={{ name: "Admin", email: "admin@sunset.local" }}
        environment="test"
        navItems={[
          { href: "/app", label: "Início", active: true, group: "Operação" },
          { href: "/comex/orders", label: "COMEX", group: "Operação" },
        ]}
      >
        <div>conteúdo</div>
      </AppShell>,
    );

    expect(screen.getByTestId("app-shell")).toBeInTheDocument();
    expect(screen.getByTestId("top-nav")).toBeInTheDocument();
    expect(screen.getByTestId("side-nav")).toBeInTheDocument();
    expect(screen.getByText("Sunset ERP")).toBeInTheDocument();
    expect(screen.getByText("COMEX")).toBeInTheDocument();
    expect(screen.getByText("conteúdo")).toBeInTheDocument();
  });
});
