#!/bin/bash
# link-workspace.sh
# Links a global workspace to a local project's workspaces/ container.

set -e

WORKSPACE_NAME=$1
PROJECT_ROOT=$2

if [ -z "$WORKSPACE_NAME" ] || [ -z "$PROJECT_ROOT" ]; then
    echo "Usage: $0 [workspace-name] [project-root]"
    exit 1
fi

LOCAL_GATE="$PROJECT_ROOT/workspaces/$WORKSPACE_NAME"

echo "🔗 Linking Workspace: $WORKSPACE_NAME"

# 1. Resolve Global Store Path
RAW_GLOBAL="$HOME/.agent/workspaces"
if [ -d "$RAW_GLOBAL/sovereign-os/$WORKSPACE_NAME" ]; then
    GLOBAL_STORE="$RAW_GLOBAL/sovereign-os/$WORKSPACE_NAME"
elif [ -d "$RAW_GLOBAL/$WORKSPACE_NAME" ]; then
    GLOBAL_STORE="$RAW_GLOBAL/$WORKSPACE_NAME"
elif [ -d "/data/agent/workspace/$WORKSPACE_NAME" ]; then
    GLOBAL_STORE="/data/agent/workspace/$WORKSPACE_NAME"
else
    echo "❌ Error: Could not find global store for $WORKSPACE_NAME"
    echo "Checked: $RAW_GLOBAL/sovereign-os/$WORKSPACE_NAME"
    echo "Checked: $RAW_GLOBAL/$WORKSPACE_NAME"
    echo "Checked: /data/agent/workspace/$WORKSPACE_NAME"
    exit 1
fi

mkdir -p "$PROJECT_ROOT/workspaces"
ln -sf "$GLOBAL_STORE" "$LOCAL_GATE"

echo "✅ Workspace linked: $LOCAL_GATE -> $GLOBAL_STORE"
