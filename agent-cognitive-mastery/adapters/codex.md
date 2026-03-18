# Adapter: Codex

## Trigger

Use for tasks that need historical context retrieval, memory troubleshooting, or OpenViking/Qdrant verification.

## Execution

```bash
scripts/run.sh --query "<query>" --target-uri "<uri>" --limit <n>
```

## Response Contract

Always include:
- `Health`
- `Recall Summary`
- `Recommended Actions`
