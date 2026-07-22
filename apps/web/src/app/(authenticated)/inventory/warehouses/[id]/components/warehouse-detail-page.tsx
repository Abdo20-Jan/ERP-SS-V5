"use client";

import {
  Button,
  ConflictState,
  ErrorState,
  LoadingState,
  NoPermissionState,
  ObjectPageHeader,
  OfflineState,
  SkeletonRows,
  TabPanel,
  Tabs,
  useOnlineStatus,
} from "@sunset/ui";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  primaryActionLabel,
  type WarehouseDetailDto,
} from "../../../../../../lib/api/inventory";
import { useWarehouseDetail } from "../hooks/use-warehouse-detail";
import { AuditTab } from "./audit-tab";
import { ContextPanel } from "./context-panel";
import { DocumentTab } from "./document-tab";
import { LocationTab } from "./location-tab";
import { SaldoTab } from "./saldo-tab";
import { TimelineTab } from "./timeline-tab";

export type WarehouseTabId =
  | "locations"
  | "balance"
  | "documents"
  | "timeline"
  | "audit";

const TAB_ORDER: WarehouseTabId[] = [
  "locations",
  "balance",
  "documents",
  "timeline",
  "audit",
];

const TAB_LABELS: Record<WarehouseTabId, string> = {
  locations: "Posições",
  balance: "Saldo",
  documents: "Documentos",
  timeline: "Timeline",
  audit: "Auditoria",
};

export interface WarehouseDetailPageProps {
  warehouseId: string;
  /** Initial tab from ?tab= query */
  initialTab?: string;
  /** Inject detail for tests (skips fetch when provided with state success). */
  detailOverride?: WarehouseDetailDto | null;
  loadStateOverride?: "loading" | "success" | "error" | "forbidden" | "conflict" | "not_found";
  onlineOverride?: boolean;
}

function normalizeTab(raw: string | undefined): WarehouseTabId {
  if (!raw) return "locations";
  const map: Record<string, WarehouseTabId> = {
    locations: "locations",
    posicoes: "locations",
    positions: "locations",
    balance: "balance",
    saldo: "balance",
    documents: "documents",
    documentos: "documents",
    timeline: "timeline",
    history: "timeline",
    audit: "audit",
    auditoria: "audit",
  };
  return map[raw.toLowerCase()] ?? "locations";
}

export function WarehouseDetailPage({
  warehouseId,
  initialTab,
  detailOverride,
  loadStateOverride,
  onlineOverride,
}: WarehouseDetailPageProps) {
  const hook = useWarehouseDetail(warehouseId);
  const detail = detailOverride !== undefined ? detailOverride : hook.detail;
  const state = loadStateOverride ?? hook.state;
  const error = hook.error;
  const reload = hook.reload;

  const onlineHook = useOnlineStatus(true);
  const online = onlineOverride ?? onlineHook;

  const [tab, setTab] = useState<WarehouseTabId>(() => normalizeTab(initialTab));
  const [panelOpen, setPanelOpen] = useState(true);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    setTab(normalizeTab(initialTab));
  }, [initialTab]);

  // Keyboard: Alt+1..5 tabs, Escape close panel, Ctrl+N / Ctrl+U
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.altKey && !event.ctrlKey && !event.metaKey) {
        const n = Number(event.key);
        if (n >= 1 && n <= 5) {
          event.preventDefault();
          setTab(TAB_ORDER[n - 1]!);
        }
      }
      if (event.key === "Escape") {
        setPanelOpen(false);
      }
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "n") {
        event.preventDefault();
        setToast("Criar depósito: em breve");
      }
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "u") {
        event.preventDefault();
        setTab("documents");
        setToast("Aba Documentos");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 2500);
    return () => window.clearTimeout(t);
  }, [toast]);

  const tabItems = useMemo(() => {
    const counts: Partial<Record<WarehouseTabId, number | null>> = {};
    if (detail) {
      counts.locations = detail.summary.locationTotal;
      counts.documents = detail.summary.documentTotal;
      counts.timeline = detail.recentHistory.length;
    }
    return TAB_ORDER.map((id) => ({
      id,
      label: TAB_LABELS[id],
      count: counts[id] ?? null,
    }));
  }, [detail]);

  const onTabChange = useCallback((id: string) => {
    setTab(normalizeTab(id));
  }, []);

  if (state === "loading") {
    return (
      <div className="p-6" data-testid="warehouse-detail-loading">
        <LoadingState message="Carregando depósito..." />
        <div className="mt-4">
          <SkeletonRows rows={6} columns={4} />
        </div>
      </div>
    );
  }

  if (state === "forbidden") {
    return (
      <div className="p-6">
        <NoPermissionState
          message="Você não tem permissão inventory:read para este depósito."
          onAction={() => {
            window.location.href = "/inventory/warehouses";
          }}
          actionLabel="Voltar à lista"
        />
      </div>
    );
  }

  if (state === "conflict") {
    return (
      <div className="p-6">
        <ConflictState onReload={reload} />
      </div>
    );
  }

  if (state === "not_found") {
    return (
      <div className="p-6">
        <ErrorState
          title="Depósito não encontrado"
          message="O registro solicitado não existe ou foi removido."
          actionLabel="Voltar à lista"
          onAction={() => {
            window.location.href = "/inventory/warehouses";
          }}
        />
      </div>
    );
  }

  if (state === "error" || !detail) {
    return (
      <div className="p-6">
        <ErrorState
          message={error?.error.message ?? "Falha ao carregar o depósito."}
          correlationId={error?.error.correlationId}
          onAction={reload}
        />
      </div>
    );
  }

  const header = detail.header;
  const subtitleParts = [
    header.type,
    header.addressCity,
    header.addressCountry,
  ].filter(Boolean);

  return (
    <div className="flex min-h-full flex-col" data-testid="warehouse-detail-page">
      {!online ? <OfflineState /> : null}
      {toast ? (
        <div
          className="bg-primary-50 px-4 py-2 text-sm text-primary-900"
          role="status"
          aria-live="polite"
        >
          {toast}
        </div>
      ) : null}

      <div className="border-b border-gray-100 px-4 py-2 text-sm md:px-6">
        <Link
          href="/inventory/warehouses"
          className="text-primary-700 hover:underline"
        >
          ← Depósitos
        </Link>
      </div>

      <ObjectPageHeader
        code={header.code}
        title={header.name}
        subtitle={subtitleParts.join(" · ")}
        isActive={header.isActive}
        lastUpdated={formatDate(header.updatedAt)}
        primaryAction={
          detail.primaryAction
            ? {
                label: primaryActionLabel(detail.primaryAction),
                disabled: true,
                title:
                  "Escrita na UI fora do escopo deste slice — use a API",
              }
            : null
        }
        secondaryActions={
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="lg:hidden"
            onClick={() => setPanelOpen((o) => !o)}
            aria-expanded={panelOpen}
          >
            {panelOpen ? "Ocultar resumo" : "Resumo"}
          </Button>
        }
      />

      <div className="flex flex-1 flex-col gap-0 lg:flex-row">
        <div className="min-w-0 flex-1 px-4 py-4 md:px-6">
          <Tabs
            items={tabItems}
            value={tab}
            onValueChange={onTabChange}
            aria-label="Abas do depósito"
          />

          <TabPanel id="locations" value="locations" activeValue={tab}>
            <LocationTab
              warehouseId={warehouseId}
              preview={detail.locationsPreview}
              active={tab === "locations"}
            />
          </TabPanel>
          <TabPanel id="balance" value="balance" activeValue={tab}>
            <SaldoTab balanceAvailable={detail.summary.balanceAvailable} />
          </TabPanel>
          <TabPanel id="documents" value="documents" activeValue={tab}>
            <DocumentTab
              warehouseId={warehouseId}
              preview={detail.documentsPreview}
              active={tab === "documents"}
            />
          </TabPanel>
          <TabPanel id="timeline" value="timeline" activeValue={tab}>
            <TimelineTab items={detail.recentHistory} />
          </TabPanel>
          <TabPanel id="audit" value="audit" activeValue={tab}>
            <AuditTab
              warehouseId={warehouseId}
              fallback={detail.recentHistory}
              active={tab === "audit"}
            />
          </TabPanel>
        </div>

        <div
          className={
            panelOpen
              ? "w-full border-t border-gray-200 bg-gray-50 p-4 lg:block lg:w-80 lg:border-l lg:border-t-0 lg:bg-white"
              : "hidden lg:block lg:w-80 lg:border-l lg:border-gray-200 lg:bg-white lg:p-4"
          }
        >
          <ContextPanel
            detail={detail}
            open
            onClose={() => setPanelOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString("pt-BR");
  } catch {
    return iso;
  }
}
