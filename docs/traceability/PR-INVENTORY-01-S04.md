# PR-INVENTORY-01-S04 — Traceability

**Slice:** PR-INVENTORY-01-S04 — Anexos e versoes
**Module:** INVENTORY
**Branch:** codex/pr-inventory-01-s04-documents
**Commit:** 9baf2b6
**Base:** S01 dc6352e/96e13fe -> S02 4ba0dae -> S03 4664771 -> S04

## Objetivo testavel
Upload SHA-256 + tipo + classificacao + retencao + versionamento append-only por warehouse/location; list/download assinado; archive/restore.

## COVERED (Q0151-Q0160)
Arquivo original, hash, versao, classificacao, retencao, relacao objeto via API/domain/db.

## DEFERRED
- OCR Q0161+ / LAY-17
- UI LAY-16 frontend
- Multipart Fastify (upload = JSON fileBase64)
- Retention cron (campo retentionDays ok)
- Bulk upload S10
- OpenAPI YAML
- S3 (port + LocalFileStorageAdapter)

## Defaults
| Item | Valor |
|---|---|
| Storage | local FS adapter |
| Max | 10MB |
| MIME | PDF PNG JPEG DXF DOCX |
| Idempotency | sha256+owner+type |
| Download | signed URL 1h -> GET /inventory/documents/file |
| Delete | archive only |

## API /v1
POST/GET /inventory/documents; GET .../file; GET :id; GET :id/versions; POST :id/archive|restore; GET warehouses/:id/documents; GET locations/:id/documents

## Perms seed
inventory:document:upload|read|archive

## Migration
20260725000000_create_inventory_documents; CHECK owner; FKs Restrict; down.sql removes table

## Evidence re-run 2026-07-21
| Gate | Result |
|---|---|
| domain | 234 passed (6 inventory-document) |
| api | 232 passed (document service/auth/contract) |
| db | 52 passed |
| guards | 85 endpoints / 12 controllers |

## Risks
Feature fora de main; storage local; base64 vs multipart; unique version com NULL no PG so app-level; no OpenAPI YAML; no retention job.

## Status
**READY_WITH_RISKS**

## Rollback
1. git revert 9baf2b6
2. run down.sql (removes inventory_documents)
3. limpar storage local

## Fontes
PR-INVENTORY-01-S04.md; DECISION_PRECEDENCE; D-003.11/15/16; SOURCE_BASIS [OAI-AGENTS][NIST-SSDF]
