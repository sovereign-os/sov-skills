# Agent Compatibility: ui-ux-mastery

## Goal

Make this skill executable across multiple agent runtimes without coupling core UX logic to any one platform.

## Compatibility Matrix

- Antigravity: Supported via `adapters/antigravity.md`
- Codex: Supported via `adapters/codex.md`
- Generic CLI Agent: Supported via `scripts/run.sh`

## Invariants (Must Stay Agent-Agnostic)

- Core design rules remain in `SKILL.md` and `resources/*.json`.
- Runtime-specific trigger syntax must stay inside `adapters/`.
- Execution should prefer script entrypoint (`scripts/run.sh`) for deterministic behavior.
- Outputs should include a concise machine-friendly block and a human summary.

## Integration Pattern

1. Agent identifies UI/UX task.
2. Agent loads `skill.contract.json` and relevant `resources/*.json`.
3. Agent executes `scripts/run.sh` with task context.
4. Agent adapter maps script output into platform-native response style.

## Quick Test

```bash
/home/puterakahfi/.sov-agent/skills/ui-ux-mastery/scripts/run.sh \
  --task "dashboard redesign" \
  --context "B2B ops admin" \
  --targets "app/apps/web/src/app/workspaces/page.tsx"
```
