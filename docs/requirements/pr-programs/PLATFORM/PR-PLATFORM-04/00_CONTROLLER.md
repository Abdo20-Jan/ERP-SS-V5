---
id: PR-PLATFORM-04
module: PLATFORM
status: APPROVED_FOR_SLICED_DELIVERY
logical_requirements: 500
delivery_slices: 10
---

# PR-PLATFORM-04 — Desktop offline e sincronização

O PR lógico possui 500 decisões aceitas. Para execução segura ele é entregue em 10 branches/PRs físicos de 50 requisitos. Não mescle todos os 500 requisitos em uma única revisão.

- **Fonte integral aceita:** `docs/blueprint-accepted/SUNSET_ERP_CLEAN_SLATE_v1.12.0_ACCEPTED/05-questionarios/05-corpus-71500/03-prs/PLATFORM/PR-PLATFORM-04_DESKTOP_OFFLINE_E_SINCRONIZACAO_500_PERGUNTAS.md`
- **Precedência:** `docs/governance/DECISION_PRECEDENCE.md`
- **Branch:** `codex/<slice-id>-<objetivo-curto>`
- **Regra:** no máximo um slice com migration estrutural por domínio ao mesmo tempo.

## Slices

| Slice | Requisitos | Arquivo |
|---|---|---|
| `PR-PLATFORM-04-S01` | `PR-PLATFORM-04-Q0001` → `PR-PLATFORM-04-Q0050` | `docs/requirements/pr-programs/PLATFORM/PR-PLATFORM-04/PR-PLATFORM-04-S01.md` |
| `PR-PLATFORM-04-S02` | `PR-PLATFORM-04-Q0051` → `PR-PLATFORM-04-Q0100` | `docs/requirements/pr-programs/PLATFORM/PR-PLATFORM-04/PR-PLATFORM-04-S02.md` |
| `PR-PLATFORM-04-S03` | `PR-PLATFORM-04-Q0101` → `PR-PLATFORM-04-Q0150` | `docs/requirements/pr-programs/PLATFORM/PR-PLATFORM-04/PR-PLATFORM-04-S03.md` |
| `PR-PLATFORM-04-S04` | `PR-PLATFORM-04-Q0151` → `PR-PLATFORM-04-Q0200` | `docs/requirements/pr-programs/PLATFORM/PR-PLATFORM-04/PR-PLATFORM-04-S04.md` |
| `PR-PLATFORM-04-S05` | `PR-PLATFORM-04-Q0201` → `PR-PLATFORM-04-Q0250` | `docs/requirements/pr-programs/PLATFORM/PR-PLATFORM-04/PR-PLATFORM-04-S05.md` |
| `PR-PLATFORM-04-S06` | `PR-PLATFORM-04-Q0251` → `PR-PLATFORM-04-Q0300` | `docs/requirements/pr-programs/PLATFORM/PR-PLATFORM-04/PR-PLATFORM-04-S06.md` |
| `PR-PLATFORM-04-S07` | `PR-PLATFORM-04-Q0301` → `PR-PLATFORM-04-Q0350` | `docs/requirements/pr-programs/PLATFORM/PR-PLATFORM-04/PR-PLATFORM-04-S07.md` |
| `PR-PLATFORM-04-S08` | `PR-PLATFORM-04-Q0351` → `PR-PLATFORM-04-Q0400` | `docs/requirements/pr-programs/PLATFORM/PR-PLATFORM-04/PR-PLATFORM-04-S08.md` |
| `PR-PLATFORM-04-S09` | `PR-PLATFORM-04-Q0401` → `PR-PLATFORM-04-Q0450` | `docs/requirements/pr-programs/PLATFORM/PR-PLATFORM-04/PR-PLATFORM-04-S09.md` |
| `PR-PLATFORM-04-S10` | `PR-PLATFORM-04-Q0451` → `PR-PLATFORM-04-Q0500` | `docs/requirements/pr-programs/PLATFORM/PR-PLATFORM-04/PR-PLATFORM-04-S10.md` |

## Definition of Done do PR lógico

- todos os 10 slices mergeados;
- migrations aplicadas e rollback testado;
- contratos e documentação atualizados;
- `/review` sem achados P0/P1 abertos;
- UAT e reconciliação do objeto principal;
- métricas, logs e alertas mínimos ativos.
