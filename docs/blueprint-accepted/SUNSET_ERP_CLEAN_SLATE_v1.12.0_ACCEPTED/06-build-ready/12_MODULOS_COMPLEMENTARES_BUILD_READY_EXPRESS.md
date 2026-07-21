---
id: BR-12-COMPLEMENTARY
title: Módulos complementares — Build-Ready Express
status: BUILD_START_ALLOWED
version: 1.10.0
priority: P0
---

# Módulos complementares

## Objetivo

Cobrir qualidade, garantia, devoluções, atendimento, ativos, RH básico, jurídico, compliance e BI sem bloquear o núcleo.

## Escopo do primeiro release

- qualidade e certificações;
- garantia, reclamação e devolução;
- atendimento/tickets;
- ativos e manutenção básica;
- RH/cadastros mínimos;
- jurídico/compliance documental;
- dashboards e alertas;

## Entidades nucleares

- `QualityCertificate`
- `QualityInspection`
- `WarrantyClaim`
- `CustomerTicket`
- `Asset`
- `MaintenanceOrder`
- `EmployeeProfile`
- `LegalDocument`
- `ComplianceCase`
- `KPIDefinition`

## Estados mínimos

`OPEN → IN_REVIEW → APPROVED → REJECTED → RESOLVED → CLOSED → EXPIRED`

## Workflows essenciais

1. Registrar reclamação.
2. Inspecionar e decidir garantia.
3. Criar devolução/nota vinculada.
4. Abrir ticket.
5. Controlar ativo/manutenção.
6. Vigiar vencimentos.
7. Publicar KPI.

## Páginas mínimas

- Qualidade;
- Garantias;
- Atendimento;
- Ativos;
- RH básico;
- Jurídico/compliance;
- Catálogo de KPIs;

## Motores e regras técnicas

- SLA e aging;
- warranty eligibility;
- document expiry alerts;
- KPI formulas versionadas;
- task routing;

## Integrações

- comercial;
- estoque;
- fiscal;
- contabilidade;
- documentos;
- notificações;

## Permissões e auditoria

- leitura, criação, alteração, aprovação, cancelamento, reabertura e exportação são permissões separadas;
- toda alteração crítica registra usuário, dispositivo, timestamp, valor anterior, valor novo e origem;
- override master gera evento específico e nunca remove a evidência da regra ultrapassada;
- documentos e movimentos postados não são apagados: são cancelados, revertidos ou substituídos por nova versão.

## Critérios P0 de aceite

- reclamação referencia venda, SKU e despacho;
- garantia gera impacto financeiro somente após decisão;
- documento vencido alerta sem apagar histórico;
- KPI identifica fórmula e fonte;
- módulos podem ser habilitados por feature flag;

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
