---
id: PR-CRM-04
module: CRM
status: APPROVED_FOR_SLICED_DELIVERY
logical_requirements: 500
delivery_slices: 10
---

# PR-CRM-04 — Atividades, WhatsApp, e-mail e tickets

O PR lógico possui 500 decisões aceitas. Para execução segura ele é entregue em 10 branches/PRs físicos de 50 requisitos. Não mescle todos os 500 requisitos em uma única revisão.

- **Fonte integral aceita:** `docs/blueprint-accepted/SUNSET_ERP_CLEAN_SLATE_v1.12.0_ACCEPTED/05-questionarios/05-corpus-71500/03-prs/CRM/PR-CRM-04_ATIVIDADES_WHATSAPP_E_MAIL_E_TICKETS_500_PERGUNTAS.md`
- **Precedência:** `docs/governance/DECISION_PRECEDENCE.md`
- **Branch:** `codex/<slice-id>-<objetivo-curto>`
- **Regra:** no máximo um slice com migration estrutural por domínio ao mesmo tempo.

## Slices

| Slice | Requisitos | Arquivo |
|---|---|---|
| `PR-CRM-04-S01` | `PR-CRM-04-Q0001` → `PR-CRM-04-Q0050` | `docs/requirements/pr-programs/CRM/PR-CRM-04/PR-CRM-04-S01.md` |
| `PR-CRM-04-S02` | `PR-CRM-04-Q0051` → `PR-CRM-04-Q0100` | `docs/requirements/pr-programs/CRM/PR-CRM-04/PR-CRM-04-S02.md` |
| `PR-CRM-04-S03` | `PR-CRM-04-Q0101` → `PR-CRM-04-Q0150` | `docs/requirements/pr-programs/CRM/PR-CRM-04/PR-CRM-04-S03.md` |
| `PR-CRM-04-S04` | `PR-CRM-04-Q0151` → `PR-CRM-04-Q0200` | `docs/requirements/pr-programs/CRM/PR-CRM-04/PR-CRM-04-S04.md` |
| `PR-CRM-04-S05` | `PR-CRM-04-Q0201` → `PR-CRM-04-Q0250` | `docs/requirements/pr-programs/CRM/PR-CRM-04/PR-CRM-04-S05.md` |
| `PR-CRM-04-S06` | `PR-CRM-04-Q0251` → `PR-CRM-04-Q0300` | `docs/requirements/pr-programs/CRM/PR-CRM-04/PR-CRM-04-S06.md` |
| `PR-CRM-04-S07` | `PR-CRM-04-Q0301` → `PR-CRM-04-Q0350` | `docs/requirements/pr-programs/CRM/PR-CRM-04/PR-CRM-04-S07.md` |
| `PR-CRM-04-S08` | `PR-CRM-04-Q0351` → `PR-CRM-04-Q0400` | `docs/requirements/pr-programs/CRM/PR-CRM-04/PR-CRM-04-S08.md` |
| `PR-CRM-04-S09` | `PR-CRM-04-Q0401` → `PR-CRM-04-Q0450` | `docs/requirements/pr-programs/CRM/PR-CRM-04/PR-CRM-04-S09.md` |
| `PR-CRM-04-S10` | `PR-CRM-04-Q0451` → `PR-CRM-04-Q0500` | `docs/requirements/pr-programs/CRM/PR-CRM-04/PR-CRM-04-S10.md` |

## Definition of Done do PR lógico

- todos os 10 slices mergeados;
- migrations aplicadas e rollback testado;
- contratos e documentação atualizados;
- `/review` sem achados P0/P1 abertos;
- UAT e reconciliação do objeto principal;
- métricas, logs e alertas mínimos ativos.
