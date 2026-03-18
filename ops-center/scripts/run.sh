#!/usr/bin/env bash
set -euo pipefail

TASK=""
CONTEXT="general"
TARGETS="(not provided)"

while [ "$#" -gt 0 ]; do
  case "$1" in
    --task)
      TASK="${2:-}"
      shift 2
      ;;
    --context)
      CONTEXT="${2:-general}"
      shift 2
      ;;
    --targets)
      TARGETS="${2:-}"
      shift 2
      ;;
    *)
      echo "Unknown argument: $1" >&2
      exit 2
      ;;
  esac
done

if [ -z "$TASK" ]; then
  echo "Missing required argument: --task" >&2
  exit 2
fi

cat <<OUT
Decision Summary:
- Apply ops-center principles for task: $TASK
- Context: $CONTEXT
- Targets: $TARGETS

Applied Resources:
- SKILL.md
- skill.contract.json

Quality Checks:
- Validate domain-specific guardrails
- Validate maintainability and consistency
- Validate state coverage when UI-facing (ideal/empty/loading/error)

Next Actions:
- Implement changes in target files
- Run project checks and governance checks
- Iterate with review feedback
OUT
