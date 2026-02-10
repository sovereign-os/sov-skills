#!/bin/bash
# activate-context.sh
# Discovers and injects (symlinks) workspace-specific assets for Agent ingestion.

set -e

WORKSPACE_DIR=$1
AGENT_ROOT=$2

if [ -z "$WORKSPACE_DIR" ] || [ ! -d "$WORKSPACE_DIR" ] || [ -z "$AGENT_ROOT" ]; then
    echo "Usage: $0 [workspace-dir] [project-root]"
    exit 1
fi

AGENT_ENV="$WORKSPACE_DIR/.agent"
CORE_RULES="$AGENT_ROOT/.agent/rules"
CORE_WORKFLOWS="$AGENT_ROOT/.agent/workflows"
VORTEX_SKILL="$HOME/.sov-agent/skills/memory-vortex"
WORKSPACE_NAME=$(basename "$WORKSPACE_DIR")

echo "🔍 Scanning Workspace Assets in: $WORKSPACE_DIR"

# 0. Cleanup old workspace symlinks
echo "🧹 Cleaning previous workspace symlinks from core..."
find "$CORE_RULES" -type l -name "*-*.md" -delete 2>/dev/null || true
find "$CORE_WORKFLOWS" -type l -name "*-*.md" -delete 2>/dev/null || true

# 1. Rule Injection
if [ -d "$AGENT_ENV/rules" ]; then
    echo "📜 Injecting Local Rules:"
    for rule in "$AGENT_ENV/rules"/*.md; do
        if [ -f "$rule" ]; then
            FILENAME=$(basename "$rule")
            ln -sf "$rule" "$CORE_RULES/$FILENAME"
            echo "   - [Linked] $FILENAME"
        fi
    done
    echo "💡 ACTION: Agent MUST read and adhere to these local rules immediately."
fi

# 2. Workflow Injection
if [ -d "$AGENT_ENV/workflows" ]; then
    echo "🔄 Injecting Local Workflows:"
    for flow in "$AGENT_ENV/workflows"/*.md; do
        if [ -f "$flow" ]; then
            FILENAME=$(basename "$flow")
            ln -sf "$flow" "$CORE_WORKFLOWS/$FILENAME"
            echo "   - [Linked] $FILENAME"
        fi
    done
fi

# 3. Skills Discovery
if [ -d "$AGENT_ENV/skills" ]; then
    echo "🧠 Found Local Skills:"
    ls "$AGENT_ENV/skills" | sed 's/^/   - /'
fi

# 4. Neural Ingestion (Vortex Sync)
if [ -d "$VORTEX_SKILL" ]; then
    echo "🌪️  Syncing Vortex Memory for: $WORKSPACE_NAME"
    cd "$VORTEX_SKILL"
    # Run ingestion in background to avoid blocking switch, but with log output for initial visibility
    npm run ingest -- --dir="$WORKSPACE_DIR" --workspace="$WORKSPACE_NAME" > ingest.log 2>&1 || echo "⚠️ Vortex Sync failed. Check log: $VORTEX_SKILL/ingest.log"
    echo "✅ Vortex Ingestion Scheduled."
fi

echo "✅ Neural Injection Complete."
