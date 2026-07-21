---
id: BR-06-TREASURY
title: Tesouraria — Build-Ready Express
status: BUILD_START_ALLOWED
version: 1.10.0
priority: P0
---

# Tesouraria

## Objetivo

Controlar contas bancárias ARS/USD na Argentina e no exterior, pagamentos, recebimentos, câmbio, conciliação e previsão de caixa.

## Escopo do primeiro release

- contas por banco, país e moeda;
- workflow de pagamento com dupla aprovação;
- pagamento por conta de terceiros;
- recebimentos parciais e múltiplos meios;
- cheques, cartões, depósitos, empréstimos e câmbio;

## Entidades nucleares

- `BankAccount`
- `PaymentOrder`
- `PaymentAllocation`
- `Receipt`
- `ReceiptAllocation`
- `BankStatement`
- `BankTransaction`
- `BankReconciliation`
- `FXDeal`
- `Loan`
- `CashForecast`

## Estados mínimos

`DRAFT → PENDING_APPROVAL → APPROVED → SCHEDULED → PROCESSING → SETTLED → PARTIALLY_SETTLED → REJECTED → CANCELLED → RECONCILED`

## Workflows essenciais

1. Criar e aprovar pagamento.
2. Liquidar vários documentos por uma contraparte.
3. Registrar recebimento e alocar.
4. Importar extrato e sugerir conciliação.
5. Fechar câmbio.
6. Atualizar previsão de caixa.

## Páginas mínimas

- Painel de caixa;
- Contas bancárias;
- Pagamentos;
- Recebimentos;
- Câmbio;
- Extratos e conciliação;
- Cheques e instrumentos;
- Empréstimos;
- Previsão de caixa;

## Motores e regras técnicas

- matching bancário assistido;
- alocação parcial/múltipla;
- diferença cambial realizada;
- saldos contábil, conciliado e disponível;
- cash forecast diário/semanal/mensal;

## Integrações

- bancos por arquivo/API futura;
- COMEX;
- compras;
- comercial;
- contabilidade;
- OCR de extratos;

## Permissões e auditoria

- leitura, criação, alteração, aprovação, cancelamento, reabertura e exportação são permissões separadas;
- toda alteração crítica registra usuário, dispositivo, timestamp, valor anterior, valor novo e origem;
- override master gera evento específico e nunca remove a evidência da regra ultrapassada;
- documentos e movimentos postados não são apagados: são cancelados, revertidos ou substituídos por nova versão.

## Critérios P0 de aceite

- pagamento não duplica por reenvio;
- principal em USD é quitado em USD mesmo com desembolso ARS;
- diferença de pagamento por terceiro vira saldo da contraparte;
- conciliação manual preserva sugestão original;
- conta USD argentina é suportada;

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
