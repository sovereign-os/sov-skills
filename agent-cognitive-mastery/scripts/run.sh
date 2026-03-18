#!/usr/bin/env bash
set -euo pipefail

QUERY=""
TARGET_URI="viking://resources"
LIMIT="5"

while [ "$#" -gt 0 ]; do
  case "$1" in
    --query)
      QUERY="${2:-}"
      shift 2
      ;;
    --target-uri)
      TARGET_URI="${2:-}"
      shift 2
      ;;
    --limit)
      LIMIT="${2:-5}"
      shift 2
      ;;
    *)
      echo "Unknown argument: $1" >&2
      exit 2
      ;;
  esac
done

if [ -z "$QUERY" ]; then
  echo "Missing required argument: --query" >&2
  exit 2
fi

OV_HEALTH="down"
QDRANT_HEALTH="down"

if curl -fsS http://localhost:1933/health >/dev/null 2>&1; then
  OV_HEALTH="up"
fi

if curl -fsS http://localhost:6333/collections >/dev/null 2>&1; then
  QDRANT_HEALTH="up"
fi

cat <<OUT
Health:
- OpenViking: $OV_HEALTH
- Qdrant: $QDRANT_HEALTH

Recall Summary:
- Query: $QUERY
- Target URI: $TARGET_URI
- Limit: $LIMIT
- Note: Use OpenViking CLI/API retrieval in agent runtime for full semantic result payload.

Recommended Actions:
- If OpenViking is down, start VORTEX services first.
- If Qdrant is down, verify container and port 6333.
- If both are up but recall is empty, run memory-vortex ingestion.
OUT
