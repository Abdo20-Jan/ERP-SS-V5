"use client";

import { ErpListPage } from "../../../../components/erp-list-page";
import {
  formatMoney,
  treasuryApi,
  type BankAccountDto,
} from "../../../../lib/api/modules";

export default function BankAccountsPage() {
  return (
    <ErpListPage<BankAccountDto>
      title="Contas Bancárias"
      subtitle="Tesouraria · gestão de contas e saldos"
      breadcrumbs={["Finanças", "Tesouraria", "Contas Bancárias"]}
      permissionDeniedMessage="Sem permissão treasury:read."
      searchPlaceholder="Código ou nome da conta"
      testId="bank-accounts-list"
      loadData={async ({ page, search }) => {
        const res = await treasuryApi.listBankAccounts({ page, limit: 20, search });
        return { data: res.data, total: res.total };
      }}
      keyExtractor={(r) => r.id}
      columns={[
        { id: "code", header: "Código", accessor: (r) => <span className="font-mono text-accent-600">{r.code}</span> },
        { id: "name", header: "Nome", accessor: (r) => r.name },
        { id: "bank", header: "Banco", accessor: (r) => r.bankName },
        { id: "account", header: "Conta", accessor: (r) => r.accountNumber },
        { id: "currency", header: "Moeda", accessor: (r) => r.currencyCode, align: "center" },
        {
          id: "balance",
          header: "Saldo",
          accessor: (r) => formatMoney(r.currentBalance, r.currencyCode),
          align: "right",
        },
        {
          id: "status",
          header: "Status",
          accessor: (r) => (
            <span className={r.isActive ? "text-success-700" : "text-gray-400"}>
              {r.isActive ? "Ativa" : "Inativa"}
            </span>
          ),
        },
      ]}
    />
  );
}
