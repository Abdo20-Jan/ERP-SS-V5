"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ConflictState,
  EmptyState,
  ErrorState,
  LoadingState,
  NoPermissionState,
  OfflineState,
  SuccessState,
} from "@sunset/ui";
import { useAuth } from "../../../providers/auth-provider";

export default function AppPage() {
  const { user } = useAuth();

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Bem-vindo, {user?.name}
        </h1>
        <p className="text-sm text-gray-500">
          Sunset ERP — Fundação executável (MS-00)
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">LoadingState</CardTitle>
            <CardDescription>Carregando dados</CardDescription>
          </CardHeader>
          <CardContent>
            <LoadingState />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">EmptyState</CardTitle>
            <CardDescription>Sem registros</CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState actionLabel="Criar primeiro" onAction={() => {}} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">ErrorState</CardTitle>
            <CardDescription>Erro recuperável</CardDescription>
          </CardHeader>
          <CardContent>
            <ErrorState correlationId="abc-123" onAction={() => {}} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">NoPermissionState</CardTitle>
            <CardDescription>Sem permissão</CardDescription>
          </CardHeader>
          <CardContent>
            <NoPermissionState onAction={() => {}} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">ConflictState</CardTitle>
            <CardDescription>Conflito de edição</CardDescription>
          </CardHeader>
          <CardContent>
            <ConflictState onReload={() => {}} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Offline + Success</CardTitle>
            <CardDescription>Estados de rede e sucesso</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <OfflineState />
            <SuccessState />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
