#!/bin/bash

# --- Configuration ---
# 🆕 Updated Path Structure for Sovereign Agent v2
LIBRARY_DIR="$HOME/.sov-agent/skills"
ACTIVE_DIR="$HOME/.agent/skills"

# Essential skills that must always be loaded
ESSENTIALS=("agent-skill-mastery" "clean-architecture-mastery" "clean-code-mastery" "ddd-mastery" "find-skills" "kaizen-log" "memory-vortex" "premium-presentation" "solid-principles-mastery" "ui-ux-mastery" "sovereign-doctor" "ops-center" "SKILL_INDEX.md" "archive")

COMMAND=$1
SKILL_NAME=$2

function is_essential() {
    local skill=$1
    for e in "${ESSENTIALS[@]}"; do
        if [[ "$skill" == "$e" ]]; then
            return 0
        fi
    done
    return 1
}

function ensure_library() {
    if [ ! -d "$LIBRARY_DIR" ]; then
        echo -e "🚀 \033[1;33mLibrary missing. Cloning Sovereign Skills...\033[0m"
        mkdir -p "$(dirname "$LIBRARY_DIR")"
        git clone https://github.com/pkahfi-platform/sov-skills "$LIBRARY_DIR"
    fi
}

ensure_library

case $COMMAND in
    "list")
        echo -e "📦 \033[1;34mAvailable Skills (Library):\033[0m"
        ls -F "$LIBRARY_DIR" | grep "/$" | sed 's/\///'
        ;;
    "active")
        echo -e "🧠 \033[1;32mActive Skills:\033[0m"
        ls -F "$ACTIVE_DIR" | grep "/$" | sed 's/\///'
        ;;
    "load")
        if [ -z "$SKILL_NAME" ]; then
            echo "Usage: skill.sh load [skill-name]"
            exit 1
        fi
        if [ ! -d "$LIBRARY_DIR/$SKILL_NAME" ]; then
            echo -e "❌ \033[1;31mError:\033[0m Skill '$SKILL_NAME' not found in library."
            exit 1
        fi
        if [ -d "$ACTIVE_DIR/$SKILL_NAME" ] || [ -L "$ACTIVE_DIR/$SKILL_NAME" ]; then
            echo -e "ℹ️  Skill '$SKILL_NAME' is already active."
        else
            ln -s "$LIBRARY_DIR/$SKILL_NAME" "$ACTIVE_DIR/$SKILL_NAME"
            echo -e "✅ \033[1;32mSkill Loaded:\033[0m $SKILL_NAME linked to workspace."
        fi
        ;;
    "unload")
        if [ -z "$SKILL_NAME" ]; then
            echo "Usage: skill.sh unload [skill-name]"
            exit 1
        fi
        if is_essential "$SKILL_NAME"; then
            echo -e "🛑 \033[1;33mWarning:\033[0m Cannot unload essential skill '$SKILL_NAME'."
            exit 1
        fi
        if [ -L "$ACTIVE_DIR/$SKILL_NAME" ]; then
            rm "$ACTIVE_DIR/$SKILL_NAME"
            echo -e "🔌 \033[1;34mSkill Unloaded:\033[0m $SKILL_NAME removed from active workspace."
        elif [ -d "$ACTIVE_DIR/$SKILL_NAME" ]; then
            echo -e "❌ \033[1;31mError:\033[0m '$SKILL_NAME' is a physical directory, move it manually to library first."
        else
            echo "Skill not found in active workspace."
        fi
        ;;
    "purge")
        echo -e "🧹 \033[1;33mPurging non-essential symlinks...\033[0m"
        for link in "$ACTIVE_DIR"/*; do
            if [ -L "$link" ]; then
                name=$(basename "$link")
                if ! is_essential "$name"; then
                    rm "$link"
                    echo "Removed: $name"
                fi
            fi
        done
        ;;
    *)
        echo "Usage: skill.sh [list|active|load|unload|purge] [skill-name]"
        ;;
esac
