---
id: MASTER-BUILD-READY-EXPRESS
status: BUILD_START_ALLOWED
version: 1.10.0
---

# Master Build-Ready Express — todos os módulos

Este pacote converte as decisões P0 aprovadas em contratos de implementação suficientes para iniciar desenvolvimento em todos os workstreams. Ele não declara que cada detalhe P1/P2 está fechado.

## Workstreams
1. [COMEX](01_COMEX_BUILD_READY_EXPRESS.md) — `BR-01-COMEX`
2. [Landed cost](02_LANDED_COST_BUILD_READY_EXPRESS.md) — `BR-02-LANDED`
3. [Fiscal](03_FISCAL_BUILD_READY_EXPRESS.md) — `BR-03-FISCAL`
4. [Contábil — fundação](04_CONTABIL_FUNDACAO_BUILD_READY_EXPRESS.md) — `BR-04-ACCOUNTING`
5. [Estoque](05_ESTOQUE_BUILD_READY_EXPRESS.md) — `BR-05-INVENTORY`
6. [Tesouraria](06_TESOURARIA_BUILD_READY_EXPRESS.md) — `BR-06-TREASURY`
7. [Comercial](07_COMERCIAL_BUILD_READY_EXPRESS.md) — `BR-07-SALES`
8. [Compras](08_COMPRAS_BUILD_READY_EXPRESS.md) — `BR-08-PURCHASING`
9. [CRM](09_CRM_BUILD_READY_EXPRESS.md) — `BR-09-CRM`
10. [Fechamento contábil transversal](10_FECHAMENTO_CONTABIL_TRANSVERSAL_BUILD_READY_EXPRESS.md) — `BR-10-CLOSE`
11. [Plataforma](11_PLATAFORMA_BUILD_READY_EXPRESS.md) — `BR-11-PLATFORM`
12. [Módulos complementares](12_MODULOS_COMPLEMENTARES_BUILD_READY_EXPRESS.md) — `BR-12-COMPLEMENTARY`
13. [Testes, migração e implantação](13_TESTES_MIGRACAO_IMPLANTACAO_BUILD_READY_EXPRESS.md) — `BR-13-QA-GOLIVE`

## Contratos transversais obrigatórios

- Party Master único para clientes, fornecedores, transportadoras, financeiras e representantes;
- SKU e certificações compartilhados;
- depósitos e posições compartilhados;
- documento original imutável + metadados + versão;
- moeda original, taxa do evento, ARS funcional e USD de apresentação;
- eventos de domínio versionados e idempotentes;
- contrato contábil para todo evento com impacto patrimonial;
- RBAC, aprovação, override e auditoria comuns;
- operações offline capturadas localmente e finalizadas online quando dependem de terceiros;
- nenhuma exclusão destrutiva de registros transacionais.

## Estado

`BUILD_START_ALLOWED`: Codex pode criar o monorepo, migrations, contratos, serviços, telas-base e testes de todos os módulos. Lacunas P1/P2 devem virar parâmetros, feature flags ou backlog; não podem ser resolvidas por suposição destrutiva.
