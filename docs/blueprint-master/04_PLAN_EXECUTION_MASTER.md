# Plano mestre de planejamento e execução

## Regra

Nenhum agente implementa um módulo inteiro de uma vez. O trabalho é conduzido pelos 65 PRs lógicos, subdivididos em 650 slices físicos de até 50 requisitos aceitos.

## Onda 0 — fundação

1. BOOT-01: monorepo executável, versões, lockfile, ambientes e CI.
2. Plataforma: contratos, saúde, logging e observabilidade.
3. Identidade, RBAC e auditoria.
4. Design system e padrões de layout.
5. Arquitetura de testes e quality gates.

## Onda 1 — núcleo de mercadoria e custo

- COMEX
- Landed cost
- Fiscal
- Contábil — fundação
- Estoque

## Onda 2 — dinheiro e receita

- Tesouraria
- Comercial
- Compras
- CRM

## Onda 3 — fechamento e complementares

- Fechamento contábil transversal
- Módulos complementares
- Migração, testes integrados, cutover e implantação

## Ciclo obrigatório de cada slice

```text
Plan Mode → aprovação do plano → implementação → testes → /review → correções → PR → merge
```

## Gates

- contrato e modelo de dados revisados;
- migrations reversíveis;
- permissões e auditoria testadas;
- cálculos com exemplos e reconciliação;
- UI com todos os estados;
- acessibilidade e teclado;
- observabilidade e runbook;
- rastreabilidade requisito → código → teste → evidência.
