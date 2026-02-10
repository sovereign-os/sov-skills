#!/bin/bash
# scripts/vortex-query.sh
# Standardized wrapper for Vortex Semantic Query.

SKILL_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
cd "$SKILL_DIR"

if [ -z "$1" ]; then
    echo "Usage: ./vortex-query.sh \"Your semantic search query\" [--limit=5]"
    exit 1
fi

npm run query -- "$@"
