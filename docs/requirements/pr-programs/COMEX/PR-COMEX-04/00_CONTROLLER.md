---
id: PR-COMEX-04
module: COMEX
status: APPROVED_FOR_SLICED_DELIVERY
logical_requirements: 500
delivery_slices: 10
---

# PR-COMEX-04 — Documentos, OCR, ocorrências e prazos

O PR lógico possui 500 decisões aceitas. Para execução segura ele é entregue em 10 branches/PRs físicos de 50 requisitos. Não mescle todos os 500 requisitos em uma única revisão.

- **Fonte integral aceita:** `docs/blueprint-accepted/SUNSET_ERP_CLEAN_SLATE_v1.12.0_ACCEPTED/05-questionarios/05-corpus-71500/03-prs/COMEX/PR-COMEX-04_DOCUMENTOS_OCR_OCORRENCIAS_E_PRAZOS_500_PERGUNTAS.md`
- **Precedência:** `docs/governance/DECISION_PRECEDENCE.md`
- **Branch:** `codex/<slice-id>-<objetivo-curto>`
- **Regra:** no máximo um slice com migration estrutural por domínio ao mesmo tempo.

## Slices

| Slice | Requisitos | Arquivo |
|---|---|---|
| `PR-COMEX-04-S01` | `PR-COMEX-04-Q0001` → `PR-COMEX-04-Q0050` | `docs/requirements/pr-programs/COMEX/PR-COMEX-04/PR-COMEX-04-S01.md` |
| `PR-COMEX-04-S02` | `PR-COMEX-04-Q0051` → `PR-COMEX-04-Q0100` | `docs/requirements/pr-programs/COMEX/PR-COMEX-04/PR-COMEX-04-S02.md` |
| `PR-COMEX-04-S03` | `PR-COMEX-04-Q0101` → `PR-COMEX-04-Q0150` | `docs/requirements/pr-programs/COMEX/PR-COMEX-04/PR-COMEX-04-S03.md` |
| `PR-COMEX-04-S04` | `PR-COMEX-04-Q0151` → `PR-COMEX-04-Q0200` | `docs/requirements/pr-programs/COMEX/PR-COMEX-04/PR-COMEX-04-S04.md` |
| `PR-COMEX-04-S05` | `PR-COMEX-04-Q0201` → `PR-COMEX-04-Q0250` | `docs/requirements/pr-programs/COMEX/PR-COMEX-04/PR-COMEX-04-S05.md` |
| `PR-COMEX-04-S06` | `PR-COMEX-04-Q0251` → `PR-COMEX-04-Q0300` | `docs/requirements/pr-programs/COMEX/PR-COMEX-04/PR-COMEX-04-S06.md` |
| `PR-COMEX-04-S07` | `PR-COMEX-04-Q0301` → `PR-COMEX-04-Q0350` | `docs/requirements/pr-programs/COMEX/PR-COMEX-04/PR-COMEX-04-S07.md` |
| `PR-COMEX-04-S08` | `PR-COMEX-04-Q0351` → `PR-COMEX-04-Q0400` | `docs/requirements/pr-programs/COMEX/PR-COMEX-04/PR-COMEX-04-S08.md` |
| `PR-COMEX-04-S09` | `PR-COMEX-04-Q0401` → `PR-COMEX-04-Q0450` | `docs/requirements/pr-programs/COMEX/PR-COMEX-04/PR-COMEX-04-S09.md` |
| `PR-COMEX-04-S10` | `PR-COMEX-04-Q0451` → `PR-COMEX-04-Q0500` | `docs/requirements/pr-programs/COMEX/PR-COMEX-04/PR-COMEX-04-S10.md` |

## Definition of Done do PR lógico

- todos os 10 slices mergeados;
- migrations aplicadas e rollback testado;
- contratos e documentação atualizados;
- `/review` sem achados P0/P1 abertos;
- UAT e reconciliação do objeto principal;
- métricas, logs e alertas mínimos ativos.
