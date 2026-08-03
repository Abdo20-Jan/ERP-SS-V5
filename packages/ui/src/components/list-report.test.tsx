import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ListReport } from "./list-report";

describe("ListReport", () => {
  it("renders dense list report chrome", () => {
    render(
      <ListReport
        title="Pedidos internacionais"
        subtitle="COMEX · SM-COMEX-01"
        filters={<input aria-label="Buscar" />}
        footer="10 registros"
      >
        <table>
          <tbody>
            <tr>
              <td>PO-001</td>
            </tr>
          </tbody>
        </table>
      </ListReport>,
    );

    expect(screen.getByTestId("list-report")).toBeInTheDocument();
    expect(screen.getByText("Pedidos internacionais")).toBeInTheDocument();
    expect(screen.getByText("PO-001")).toBeInTheDocument();
    expect(screen.getByText("10 registros")).toBeInTheDocument();
  });
});
