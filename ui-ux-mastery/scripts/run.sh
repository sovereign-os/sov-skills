#!/usr/bin/env bash
set -euo pipefail

TASK=""
CONTEXT=""
TARGETS=""

while [ "$#" -gt 0 ]; do
  case "$1" in
    --task)
      TASK="${2:-}"
      shift 2
      ;;
    --context)
      CONTEXT="${2:-}"
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

if [ -z "$CONTEXT" ]; then
  CONTEXT="general"
fi

if [ -z "$TARGETS" ]; then
  TARGETS="(not provided)"
fi

cat <<OUT
Decision Summary:
- Apply UI/UX Mastery principles for task: $TASK
- Context model: $CONTEXT
- Target files: $TARGETS

Applied Resources:
- resources/ux-intelligence.json
- resources/design-intelligence.json
- resources/typography-intelligence.json
- resources/motion-tokens.json
- resources/theme-bank.json

Quality Checks:
- Use semantic tokens (avoid hardcoded hex and neutral utility scales when restricted)
- Verify loading, empty, error, and ideal states
- Ensure responsive spacing and typography rhythm
- Validate contrast and interaction states

Next Actions:
- Implement design changes in target files
- Run local design audit and governance checks
- Iterate based on visual regression feedback
OUT
