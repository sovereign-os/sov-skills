#!/bin/bash
# 🧪 Sovereign OS: Skill Wrapper for PHPUnit
# This script automatically wraps execution based on the Project Registry.

SKILL_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
AGENT_ROOT="$(dirname "$(dirname "$SKILL_DIR")")"
CONTEXT_FILE="$AGENT_ROOT/data/current-context.json"

# 1. Resolve Infrastructure from Context
PROJECT_NAME=$(grep -oP '"project":\s*\{\s*"name":\s*"\K[^"]+' $CONTEXT_FILE)
PROJECT_PATH=$(grep -oP '"path":\s*"\K[^"]+' $CONTEXT_FILE)

# 🔍 Find Manifest in Registry
REGISTRY_PATH="$AGENT_ROOT/workspace/arbiter/registry/projects/$PROJECT_NAME.md"

if [ -f "$REGISTRY_PATH" ]; then
    PLATFORM=$(grep -A 10 "infrastructure:" "$REGISTRY_PATH" | grep "platform:" | cut -d' ' -f4-)
    SERVICE=$(grep -A 10 "infrastructure:" "$REGISTRY_PATH" | grep "service:" | cut -d' ' -f4-)
fi

# 2. Command Execution
PHPUNIT_BIN="vendor/bin/phpunit"

if [ "$PLATFORM" == "docker" ] && [ -n "$SERVICE" ]; then
    echo -e "🧪 \033[1;36mPHPUnit (Docker):\033[0m Running on service $SERVICE..."
    docker exec -w /var/www/as-api/staging "$SERVICE" "$PHPUNIT_BIN" "$@"
else
    echo -e "🧪 \033[1;36mPHPUnit (Local):\033[0m Running locally..."
    cd "$PROJECT_PATH" && "$PHPUNIT_BIN" "$@"
fi
