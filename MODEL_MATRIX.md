# SUNSET ERP — Matriz do Exército de Modelos

Esta matriz é um ponto inicial, não uma alegação de benchmark. Ela usa os IDs que estavam disponíveis no comando `opencode models --refresh` fornecido pelo usuário. Antes de produção, execute smoke tests e um benchmark interno com slices reais.

## Estado-maior

| Papel | Modelo inicial | Função |
|---|---|---|
| Comandante/orchestrator | `opencode/gpt-5.6-sol` | decomposição, roteamento e decisão |
| Juiz supremo | `openrouter/openai/gpt-5.6-sol-pro` | síntese independente e merge decision |
| Arquiteto principal | `opencode/claude-opus-4-8` | arquitetura, limites e trade-offs |
| Contraditor | `sakana/fugu-ultra-20260615` | refutar premissas e buscar falhas |

## Construção

| Papel | Modelo inicial |
|---|---|
| Escritor único | `opencode/gpt-5.3-codex` |
| Implementador sombra | `moonshotai/kimi-k2.7-code-highspeed` |
| API e integrações | `moonshotai/kimi-k2.7-code-highspeed` |
| DevOps | `opencode/kimi-k2.7-code` |
| Banco | `opencode/gpt-5.3-codex` |

## Tribunal

| Papel | Modelo inicial |
|---|---|
| Reviewer geral | `google/gemini-3.1-pro-preview` |
| Reviewer de contratos/testes | `opencode/claude-sonnet-5` |
| Integridade de dados | `opencode/deepseek-v4-pro` |
| Performance | `opencode/glm-5.2` |
| Release adversarial | `openrouter/x-ai/grok-4.20-multi-agent` |

## Domínio e pesquisa

| Papel | Modelo inicial |
|---|---|
| Fiscal/contábil/financeiro | `opencode/gpt-5.5-pro` |
| Reconciliação independente | `opencode/claude-opus-4-8` |
| Pesquisa de corpus longo | `moonshotai/kimi-k3` |
| Pesquisa web | `perplexity-agent/perplexity/sonar` |
| Exploração rápida | `opencode/deepseek-v4-flash` |

## Reservas

Use como candidatos de benchmark e fallback: `opencode/gemini-3.5-flash`, `opencode/glm-5.1`, `opencode/qwen3.6-plus`, `opencode/minimax-m3`, `opencode/grok-4.5`, `openrouter/nvidia/nemotron-3-ultra-550b-a55b`, `openrouter/qwen/qwen3.7-max`, `openrouter/deepseek/deepseek-v4-pro`, `openrouter/x-ai/grok-build-0.1`.
