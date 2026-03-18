# Agent Compatibility: tailwind-ux-craft

## Goal

Make this skill runnable across multiple agent runtimes while preserving one source of truth for its engineering logic.

## Supported Modes

- Antigravity via adapters/antigravity.md
- Codex via adapters/codex.md
- Generic CLI agents via scripts/run.sh

## Universal Execution Contract

1. Load skill.contract.json
2. Execute scripts/run.sh with task context
3. Consume output sections:
- Decision Summary
- Applied Resources
- Quality Checks
- Next Actions

## Quick Test

scripts/run.sh --task "refactor module" --context "dashboard" --targets "src/app.tsx"
