# Agent Compatibility: agent-cognitive-mastery

## Goal

Provide a universal way for any agent runtime to perform memory health checks and semantic recall without being tied to one orchestrator.

## Supported Agents

- Antigravity via `adapters/antigravity.md`
- Codex via `adapters/codex.md`
- Generic CLI agents via `scripts/run.sh`

## Universal Execution Contract

1. Load `skill.contract.json`.
2. Run `scripts/run.sh` with query and optional routing.
3. Consume output blocks:
- `Health`
- `Recall Summary`
- `Recommended Actions`

## Quick Test

```bash
/home/puterakahfi/.sov-agent/skills/agent-cognitive-mastery/scripts/run.sh \
  --query "workspace context switch failures" \
  --target-uri "viking://resources" \
  --limit 5
```
