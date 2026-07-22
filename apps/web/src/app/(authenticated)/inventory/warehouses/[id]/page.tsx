"use client";

import { useParams, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { LoadingState } from "@sunset/ui";
import { WarehouseDetailPage } from "./components/warehouse-detail-page";

function WarehouseDetailRouteInner() {
  const params = useParams<{ id: string }>();
  const search = useSearchParams();
  const id = params?.id ?? "";
  const tab = search.get("tab") ?? undefined;

  if (!id) {
    return <LoadingState message="Carregando..." />;
  }

  return <WarehouseDetailPage warehouseId={id} initialTab={tab} />;
}

export default function WarehouseDetailRoute() {
  return (
    <Suspense fallback={<LoadingState message="Carregando depósito..." />}>
      <WarehouseDetailRouteInner />
    </Suspense>
  );
}
