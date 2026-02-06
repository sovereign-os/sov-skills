#!/bin/bash
# Create Skill
# Scaffolds a new skill directory and SKILL.md template.

SKILL_NAME="$1"
SOV_SKILLS="$HOME/.sov-agent/skills"

if [ -z "$SKILL_NAME" ]; then
    echo "Usage: ./create-skill.sh [skill-name]"
    exit 1
fi

TARGET_DIR="$SOV_SKILLS/$SKILL_NAME"

if [ -d "$TARGET_DIR" ]; then
    echo "❌ Error: Skill '$SKILL_NAME' already exists."
    exit 1
fi

mkdir -p "$TARGET_DIR"

# Create SKILL.md Template
cat <<EOF > "$TARGET_DIR/SKILL.md"
---
name: $SKILL_NAME
description: [Short description of the skill]
version: 1.0.0
author: Sovereign OS Agent
tags: []
---

# 🧠 $SKILL_NAME

## 1. Description
Explain what this skill does and why it is important.

## 2. Capabilities
- **Capability 1**: Description...
- **Capability 2**: Description...

## 3. Usage Rules
- **Rule 1**: ...

## 4. Workflows (Optional)
If this skill enables specific workflows, list them here.
EOF

echo -e "\n\033[1;32m✅ Skill Created Successfully:\033[0m"
echo -e "\033[0;90mPath: $TARGET_DIR\033[0m"
echo -e "\nDon't forget to update SKILL_INDEX.md!"
