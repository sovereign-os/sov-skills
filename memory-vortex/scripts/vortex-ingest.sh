#!/bin/bash
# scripts/vortex-ingest.sh
# Standardized wrapper for Vortex Ingestion.

SKILL_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
cd "$SKILL_DIR"

if [ "$1" == "--help" ]; then
    echo "Usage: ./vortex-ingest.sh [--dir=PATH] [--workspace=NAME]"
    exit 0
fi

npm run ingest -- "$@"
