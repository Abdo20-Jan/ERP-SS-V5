# Mapa de integrações e contratos

| Integração | Direção | Padrão | Requisitos |
|---|---|---|---|
| SI Factura | bidirecional | REST/API documentada | adapter substituível, idempotência, retries, auditoria |
| ARCA | indireta/direta de contingência | web services/portal | CAE real, nunca inventado; reconciliação posterior |
| Bancos | entrada/saída | arquivo/API conforme banco | extratos, pagamentos, câmbio, conciliação |
| Operadores logísticos | bidirecional | API e Excel | snapshot e posição detalhada, validação e histórico |
| E-mail | entrada/saída | provider/API | ingestão documental e comunicação rastreável |
| WhatsApp | bidirecional | integração oficial a definir | consentimento, threads, anexos e auditoria |
| OCR | interno/serviço | job assíncrono | confiança por campo, revisão humana e versão |

## Contratos

- REST/JSON/OpenAPI versionado.
- Eventos de domínio versionados e envelope padronizado.
- Idempotency key para comandos externos e internos críticos.
- Outbox/inbox para consistência.
- Dead-letter e reprocessamento controlado.
- Toda integração possui health, métricas, logs, timeout, retry e fallback.
