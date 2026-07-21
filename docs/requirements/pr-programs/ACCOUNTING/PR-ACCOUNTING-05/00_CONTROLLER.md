---
id: PR-ACCOUNTING-05
module: ACCOUNTING
status: APPROVED_FOR_SLICED_DELIVERY
logical_requirements: 500
delivery_slices: 10
---

# PR-ACCOUNTING-05 — Razão, balanço, DRE e drill-down

O PR lógico possui 500 decisões aceitas. Para execução segura ele é entregue em 10 branches/PRs físicos de 50 requisitos. Não mescle todos os 500 requisitos em uma única revisão.

- **Fonte integral aceita:** `docs/blueprint-accepted/SUNSET_ERP_CLEAN_SLATE_v1.12.0_ACCEPTED/05-questionarios/05-corpus-71500/03-prs/ACCOUNTING/PR-ACCOUNTING-05_RAZAO_BALANCO_DRE_E_DRILL_DOWN_500_PERGUNTAS.md`
- **Precedência:** `docs/governance/DECISION_PRECEDENCE.md`
- **Branch:** `codex/<slice-id>-<objetivo-curto>`
- **Regra:** no máximo um slice com migration estrutural por domínio ao mesmo tempo.

## Slices

| Slice | Requisitos | Arquivo |
|---|---|---|
| `PR-ACCOUNTING-05-S01` | `PR-ACCOUNTING-05-Q0001` → `PR-ACCOUNTING-05-Q0050` | `docs/requirements/pr-programs/ACCOUNTING/PR-ACCOUNTING-05/PR-ACCOUNTING-05-S01.md` |
| `PR-ACCOUNTING-05-S02` | `PR-ACCOUNTING-05-Q0051` → `PR-ACCOUNTING-05-Q0100` | `docs/requirements/pr-programs/ACCOUNTING/PR-ACCOUNTING-05/PR-ACCOUNTING-05-S02.md` |
| `PR-ACCOUNTING-05-S03` | `PR-ACCOUNTING-05-Q0101` → `PR-ACCOUNTING-05-Q0150` | `docs/requirements/pr-programs/ACCOUNTING/PR-ACCOUNTING-05/PR-ACCOUNTING-05-S03.md` |
| `PR-ACCOUNTING-05-S04` | `PR-ACCOUNTING-05-Q0151` → `PR-ACCOUNTING-05-Q0200` | `docs/requirements/pr-programs/ACCOUNTING/PR-ACCOUNTING-05/PR-ACCOUNTING-05-S04.md` |
| `PR-ACCOUNTING-05-S05` | `PR-ACCOUNTING-05-Q0201` → `PR-ACCOUNTING-05-Q0250` | `docs/requirements/pr-programs/ACCOUNTING/PR-ACCOUNTING-05/PR-ACCOUNTING-05-S05.md` |
| `PR-ACCOUNTING-05-S06` | `PR-ACCOUNTING-05-Q0251` → `PR-ACCOUNTING-05-Q0300` | `docs/requirements/pr-programs/ACCOUNTING/PR-ACCOUNTING-05/PR-ACCOUNTING-05-S06.md` |
| `PR-ACCOUNTING-05-S07` | `PR-ACCOUNTING-05-Q0301` → `PR-ACCOUNTING-05-Q0350` | `docs/requirements/pr-programs/ACCOUNTING/PR-ACCOUNTING-05/PR-ACCOUNTING-05-S07.md` |
| `PR-ACCOUNTING-05-S08` | `PR-ACCOUNTING-05-Q0351` → `PR-ACCOUNTING-05-Q0400` | `docs/requirements/pr-programs/ACCOUNTING/PR-ACCOUNTING-05/PR-ACCOUNTING-05-S08.md` |
| `PR-ACCOUNTING-05-S09` | `PR-ACCOUNTING-05-Q0401` → `PR-ACCOUNTING-05-Q0450` | `docs/requirements/pr-programs/ACCOUNTING/PR-ACCOUNTING-05/PR-ACCOUNTING-05-S09.md` |
| `PR-ACCOUNTING-05-S10` | `PR-ACCOUNTING-05-Q0451` → `PR-ACCOUNTING-05-Q0500` | `docs/requirements/pr-programs/ACCOUNTING/PR-ACCOUNTING-05/PR-ACCOUNTING-05-S10.md` |

## Definition of Done do PR lógico

- todos os 10 slices mergeados;
- migrations aplicadas e rollback testado;
- contratos e documentação atualizados;
- `/review` sem achados P0/P1 abertos;
- UAT e reconciliação do objeto principal;
- métricas, logs e alertas mínimos ativos.
