---
id: BASELINE-ERP-EXPRESS-P0
version: 1.8.1
status: ACCEPTED
approved_by: Proprietário do projeto
scope: 72 decisões P0 dos módulos restantes
---

# Baseline — ERP Express P0

## Resultado da aprovação

O proprietário do projeto aprovou todas as decisões sugeridas do questionário `QA-ERP-EXPRESS-P0`, com duas alterações expressas:

- `P0-ERP-001`: ampliar o primeiro release de COMEX para contemplar importação definitiva, trânsito aduaneiro, operações em Zona Primária Aduaneira e operações em Zona Franca.
- `P0-ERP-036`: permitir contas bancárias em USD mantidas na Argentina, além de contas em ARS e eventuais contas no exterior.

As outras 70 decisões foram aprovadas sem alteração.

## Normalização da decisão P0-ERP-001

Para evitar ambiguidade no modelo de dados e nos workflows, o ERP deverá tratar separadamente:

1. importação definitiva;
2. trânsito aduaneiro;
3. operação/localização em Zona Primária Aduaneira;
4. operação sob regime de Zona Franca.

Esses conceitos poderão compartilhar documentos, entidades e motores, mas não serão gravados como sinônimos.

## Normalização da decisão P0-ERP-036

O cadastro bancário deverá aceitar, no mínimo:

- contas em ARS na Argentina;
- contas em USD na Argentina;
- contas em outras moedas, quando habilitadas;
- contas no exterior, quando cadastradas.

Cada conta terá banco, país, moeda, titularidade, finalidade, status, saldo contábil, saldo conciliado, saldo disponível, valores bloqueados e compromissos futuros.

## Efeito no projeto

O levantamento P0 crítico está aprovado e pode ser convertido em:

- épicos e features;
- workflows;
- contratos de dados;
- matrizes de permissão;
- motores de cálculo;
- critérios de aceite;
- plano de implementação por módulo.

As perguntas P1 e P2 permanecem no backlog e não bloqueiam o início do desenvolvimento.
