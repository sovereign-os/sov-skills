# Adapter: Antigravity

## Trigger

Use this skill for semantic recall, memory diagnostics, and context recovery tasks.

## Execution

```bash
scripts/run.sh --query "<query>" --target-uri "<uri>" --limit <n>
```

## Notes

- Prefer routed recall (`viking://projects/...`) to avoid context pollution.
- If recall is empty but health is OK, trigger memory ingestion workflow.
