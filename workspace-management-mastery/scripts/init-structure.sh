#!/bin/bash
# init-structure.sh
# Standardizes the creation of a new Sovereign High-Rise workspace.

set -e

WORKSPACE_NAME=$1
GLOBAL_BASE="$HOME/.agent/workspaces"
TARGET_DIR="$GLOBAL_BASE/$WORKSPACE_NAME"

if [ -z "$WORKSPACE_NAME" ]; then
    echo "Usage: $0 [workspace-name]"
    exit 1
fi

echo "🏗️ Initializing Workspace: $WORKSPACE_NAME"
mkdir -p "$TARGET_DIR"

# Create the 6-folder Standard
FOLDERS=(
    "registry/projects"
    "registry/assets"
    "operations/tasks/todo"
    "operations/tasks/in-progress"
    "operations/tasks/done"
    "operations/history"
    "operations/logs/tasks"
    "brain/memory"
    "brain/wisdom"
    "artifacts/specifications"
    "artifacts/verification"
    "artifacts/evidence"
    "data"
    ".agent/rules"
    ".agent/workflows"
    ".agent/skills"
    ".agent/branding"
)

for folder in "${FOLDERS[@]}"; do
    mkdir -p "$TARGET_DIR/$folder"
done

# Initialize README
echo "# Workspace: $WORKSPACE_NAME" > "$TARGET_DIR/README.md"
echo "Initialized on $(date)" >> "$TARGET_DIR/README.md"

echo "✅ Structure initialized at $TARGET_DIR"
