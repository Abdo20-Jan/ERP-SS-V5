---
id: BR-11-PLATFORM
title: Plataforma — Build-Ready Express
status: BUILD_START_ALLOWED
version: 1.10.0
priority: P0
---

# Plataforma

## Objetivo

Entregar a base técnica compartilhada: identidade, permissões, auditoria, parâmetros, documentos, offline, integrações e observabilidade.

## Escopo do primeiro release

- web, API, worker, desktop e banco;
- RBAC, escopos, dupla aprovação e master override;
- parâmetros e feature flags pela interface;
- documentos, OCR, busca e notificações;
- offline/sync, APIs, eventos, logs e backup;

## Entidades nucleares

- `User`
- `Role`
- `Permission`
- `Scope`
- `ApprovalPolicy`
- `ApprovalInstance`
- `AuditEvent`
- `SystemParameter`
- `FeatureFlag`
- `DocumentObject`
- `Job`
- `Notification`
- `SyncCursor`
- `Conflict`

## Estados mínimos

`ACTIVE → INACTIVE → LOCKED → PENDING → RUNNING → FAILED → COMPLETED → CONFLICT`

## Workflows essenciais

1. Provisionar usuário.
2. Atribuir permissão.
3. Executar aprovação.
4. Alterar parâmetro versionado.
5. Processar documento/job.
6. Sincronizar desktop.
7. Resolver conflito.
8. Restaurar/operar contingência.

## Páginas mínimas

- Administração de usuários;
- Papéis e permissões;
- Políticas de aprovação;
- Parâmetros;
- Auditoria;
- Documentos;
- Jobs e filas;
- Integrações;
- Observabilidade;
- Backups e restore;

## Motores e regras técnicas

- RBAC+scope;
- approval engine;
- append-only audit;
- parameter effective dating;
- sync protocol e conflict detection;
- job retries/dead-letter;

## Integrações

- Vercel;
- Railway;
- S3-compatible storage;
- SI Factura;
- e-mail/WhatsApp adapters;
- monitoramento e alertas;

## Permissões e auditoria

- leitura, criação, alteração, aprovação, cancelamento, reabertura e exportação são permissões separadas;
- toda alteração crítica registra usuário, dispositivo, timestamp, valor anterior, valor novo e origem;
- override master gera evento específico e nunca remove a evidência da regra ultrapassada;
- documentos e movimentos postados não são apagados: são cancelados, revertidos ou substituídos por nova versão.

## Critérios P0 de aceite

- nenhuma configuração funcional exige editar código;
- master override não quebra invariantes técnicas;
- offline não emite autorização externa fictícia;
- segredo nunca aparece em log;
- restore é testado e documentado;

## Entrega técnica mínima

- migrations e constraints;
- serviços de domínio e APIs OpenAPI;
- eventos/outbox e consumidores necessários;
- telas web e desktop essenciais;
- operação offline onde aplicável;
- testes unitários, integração e E2E críticos;
- feature flag, observabilidade, runbook e rollback.

## Lacunas permitidas durante o início

Detalhes P1/P2 podem permanecer parametrizados ou atrás de feature flag. Qualquer lacuna que afete integridade financeira, fiscal, contábil, estoque, segurança ou auditoria deve ser escalada antes da ativação em produção, mas não impede a criação da fundação e do fluxo feliz.
