---
id: PR-TREASURY-03
module: TREASURY
status: APPROVED_FOR_SLICED_DELIVERY
logical_requirements: 500
delivery_slices: 10
---

# PR-TREASURY-03 — Recebimentos e meios de pagamento

O PR lógico possui 500 decisões aceitas. Para execução segura ele é entregue em 10 branches/PRs físicos de 50 requisitos. Não mescle todos os 500 requisitos em uma única revisão.

- **Fonte integral aceita:** `docs/blueprint-accepted/SUNSET_ERP_CLEAN_SLATE_v1.12.0_ACCEPTED/05-questionarios/05-corpus-71500/03-prs/TREASURY/PR-TREASURY-03_RECEBIMENTOS_E_MEIOS_DE_PAGAMENTO_500_PERGUNTAS.md`
- **Precedência:** `docs/governance/DECISION_PRECEDENCE.md`
- **Branch:** `codex/<slice-id>-<objetivo-curto>`
- **Regra:** no máximo um slice com migration estrutural por domínio ao mesmo tempo.

## Slices

| Slice | Requisitos | Arquivo |
|---|---|---|
| `PR-TREASURY-03-S01` | `PR-TREASURY-03-Q0001` → `PR-TREASURY-03-Q0050` | `docs/requirements/pr-programs/TREASURY/PR-TREASURY-03/PR-TREASURY-03-S01.md` |
| `PR-TREASURY-03-S02` | `PR-TREASURY-03-Q0051` → `PR-TREASURY-03-Q0100` | `docs/requirements/pr-programs/TREASURY/PR-TREASURY-03/PR-TREASURY-03-S02.md` |
| `PR-TREASURY-03-S03` | `PR-TREASURY-03-Q0101` → `PR-TREASURY-03-Q0150` | `docs/requirements/pr-programs/TREASURY/PR-TREASURY-03/PR-TREASURY-03-S03.md` |
| `PR-TREASURY-03-S04` | `PR-TREASURY-03-Q0151` → `PR-TREASURY-03-Q0200` | `docs/requirements/pr-programs/TREASURY/PR-TREASURY-03/PR-TREASURY-03-S04.md` |
| `PR-TREASURY-03-S05` | `PR-TREASURY-03-Q0201` → `PR-TREASURY-03-Q0250` | `docs/requirements/pr-programs/TREASURY/PR-TREASURY-03/PR-TREASURY-03-S05.md` |
| `PR-TREASURY-03-S06` | `PR-TREASURY-03-Q0251` → `PR-TREASURY-03-Q0300` | `docs/requirements/pr-programs/TREASURY/PR-TREASURY-03/PR-TREASURY-03-S06.md` |
| `PR-TREASURY-03-S07` | `PR-TREASURY-03-Q0301` → `PR-TREASURY-03-Q0350` | `docs/requirements/pr-programs/TREASURY/PR-TREASURY-03/PR-TREASURY-03-S07.md` |
| `PR-TREASURY-03-S08` | `PR-TREASURY-03-Q0351` → `PR-TREASURY-03-Q0400` | `docs/requirements/pr-programs/TREASURY/PR-TREASURY-03/PR-TREASURY-03-S08.md` |
| `PR-TREASURY-03-S09` | `PR-TREASURY-03-Q0401` → `PR-TREASURY-03-Q0450` | `docs/requirements/pr-programs/TREASURY/PR-TREASURY-03/PR-TREASURY-03-S09.md` |
| `PR-TREASURY-03-S10` | `PR-TREASURY-03-Q0451` → `PR-TREASURY-03-Q0500` | `docs/requirements/pr-programs/TREASURY/PR-TREASURY-03/PR-TREASURY-03-S10.md` |

## Definition of Done do PR lógico

- todos os 10 slices mergeados;
- migrations aplicadas e rollback testado;
- contratos e documentação atualizados;
- `/review` sem achados P0/P1 abertos;
- UAT e reconciliação do objeto principal;
- métricas, logs e alertas mínimos ativos.
