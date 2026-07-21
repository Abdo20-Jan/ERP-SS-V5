---
id: ROADMAP-ACCELERATED-ALL
status: ACTIVE
version: 1.10.0
---

# Roadmap acelerado por ondas

## Onda 0 — fundação executável

- monorepo, ambientes e deploy;
- autenticação, RBAC, auditoria e parâmetros;
- PostgreSQL, migrations e convenções;
- object storage e pipeline documental;
- filas, workers, notificações e idempotência;
- desktop Tauri, SQLite e protocolo de sync;
- contratos base de Party, SKU, depósito, moeda e documento.

## Onda 1 — import-to-stock mínimo

- COMEX;
- landed cost provisório e definitivo;
- fiscal de importação;
- lançamentos contábeis de importação;
- entrada e disponibilidade de estoque.

## Onda 2 — liquidação e controle

- contas a pagar;
- tesouraria e câmbio;
- conciliação bancária;
- estoque, reservas, transferências e divergências;
- contas a receber.

## Onda 3 — quote-to-cash e source-to-pay

- CRM básico;
- orçamento, preço, margem e pedido;
- faturamento SI Factura;
- recebimento, remito e entrega;
- compras nacionais e despesas;
- comissões e financeiras.

## Onda 4 — record-to-report

- plano de contas e diário;
- fechamento diário, mensal e fiscal;
- balanço, DRE e fluxo de caixa;
- reavaliação cambial;
- reconciliações transversais.

## Onda 5 — extensão e go-live

- qualidade, garantia, devoluções e atendimento;
- dashboards e alertas;
- migração assistida por documentos e extratos;
- UAT, carga, segurança, restore e contingência;
- cutover, rollback e suporte intensivo.

## Princípio de entrega

Cada onda produz software utilizável atrás de feature flags. O desenvolvimento das ondas posteriores pode começar com contratos e dados simulados antes da conclusão da onda anterior.
