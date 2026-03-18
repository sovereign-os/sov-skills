# Adapter: Codex

## Trigger Mapping

- Use when user asks for frontend revamp, interaction improvements, visual hierarchy fixes, token cleanup, or UX architecture.
- Load core from `SKILL.md` and operational contract from `skill.contract.json`.

## Execution Steps

1. Read intent and detect UI scope.
2. Select only necessary resource files.
3. Run:

```bash
scripts/run.sh --task "<task>" --context "<context>" --targets "<comma-separated-files>"
```

4. Perform code edits.
5. Validate design constraints (tokens, states, responsiveness, motion).

## Response Contract

- Include:
  - `Decision Summary`
  - `Applied Resources`
  - `Quality Checks`
  - `Next Actions`
