---
id: BR-09-CRM
title: CRM — Build-Ready Express
status: BUILD_START_ALLOWED
version: 1.10.0
priority: P0
---

# CRM

## Objetivo

Capturar leads, atividades, oportunidades, carteira, histórico de comunicação, forecast e atendimento pré-venda.

## Escopo do primeiro release

- entrada manual, portal, marketplace, WhatsApp e e-mail;
- propriedade e distribuição de leads;
- funil configurável;
- atividades e follow-ups;
- forecast e conversão em orçamento;

## Entidades nucleares

- `Lead`
- `LeadSource`
- `Contact`
- `AccountRole`
- `Opportunity`
- `OpportunityStage`
- `CRMActivity`
- `CRMTask`
- `CommunicationThread`
- `SalesForecast`

## Estados mínimos

`NEW → ASSIGNED → CONTACTED → QUALIFIED → PROPOSAL → NEGOTIATION → WON → LOST → DORMANT`

## Workflows essenciais

1. Capturar/deduplicar lead.
2. Atribuir carteira.
3. Registrar contato.
4. Qualificar oportunidade.
5. Criar orçamento.
6. Marcar ganho/perda.
7. Agendar follow-up.

## Páginas mínimas

- Inbox de leads;
- Carteira;
- Oportunidades;
- Atividades;
- Linha do tempo;
- Forecast;
- Indicadores de conversão;

## Motores e regras técnicas

- deduplicação por CUIT e contatos;
- lead routing configurável;
- stale opportunity alerts;
- forecast ponderado;
- conversão sem duplicar Party Master;

## Integrações

- comercial;
- e-mail/WhatsApp por adapters futuros;
- portal/marketplace;
- notificações;
- BI;

## Permissões e auditoria

- leitura, criação, alteração, aprovação, cancelamento, reabertura e exportação são permissões separadas;
- toda alteração crítica registra usuário, dispositivo, timestamp, valor anterior, valor novo e origem;
- override master gera evento específico e nunca remove a evidência da regra ultrapassada;
- documentos e movimentos postados não são apagados: são cancelados, revertidos ou substituídos por nova versão.

## Critérios P0 de aceite

- conversão reutiliza cadastro existente;
- histórico não pode ser apagado silenciosamente;
- atividade offline sincroniza idempotentemente;
- ganho gera orçamento/pedido vinculado;
- forecast permite drill-down por vendedor, canal e região;

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
