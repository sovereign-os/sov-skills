# Adapter: Antigravity

## Trigger Mapping

- Trigger when task involves UI, UX, design-system, layout refactor, typography, or interaction polish.
- Resolve core guidance from `SKILL.md` + `skill.contract.json`.

## Execution Steps

1. Parse user objective.
2. Select relevant resources from `resources/*.json` based on task type.
3. Execute:

```bash
scripts/run.sh --task "<task>" --context "<context>" --targets "<comma-separated-files>"
```

4. Apply recommendations in code.
5. Report changes with file references and quality checks.

## Output Style

- Keep tone concise and implementation-first.
- Always include: `Decision Summary`, `Applied Resources`, and `Quality Checks`.
