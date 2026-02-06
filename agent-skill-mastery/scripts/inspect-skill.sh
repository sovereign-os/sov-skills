#!/bin/bash
# Inspect Skill
# Displays the content of a skill's SKILL.md file.

SKILL_NAME="$1"
AGENT_SKILLS="$HOME/.agent/skills"
SOV_SKILLS="$HOME/.sov-agent/skills"

if [ -z "$SKILL_NAME" ]; then
    echo "Usage: ./inspect-skill.sh [skill-name]"
    exit 1
fi

# Check in active skills first
if [ -L "$AGENT_SKILLS/$SKILL_NAME" ]; then
    TARGET_PATH=$(readlink -f "$AGENT_SKILLS/$SKILL_NAME/SKILL.md")
elif [ -d "$SOV_SKILLS/$SKILL_NAME" ]; then
    TARGET_PATH="$SOV_SKILLS/$SKILL_NAME/SKILL.md"
else
    echo "❌ Skill '$SKILL_NAME' not found."
    exit 1
fi

if [ ! -f "$TARGET_PATH" ]; then
    echo "❌ Error: SKILL.md not found in $SKILL_NAME."
    exit 1
fi

echo -e "\n\033[1;34m🔍 Inspecting Skill: \033[1;33m$SKILL_NAME\033[0m"
echo -e "\033[0;90mFile: $TARGET_PATH\033[0m\n"
echo "--------------------------------------------------------"
cat "$TARGET_PATH"
echo "--------------------------------------------------------"
