---
description: Manage and list active Sovereign Skills within the current workspace.
---

# 🧠 Workflow: /skills

This workflow allows you to manage the active skill set (The Agent's capabilities) for the current workspace.

## 🚀 Usage

- **/skills list**: Show all currently loaded skills.
- **/skills catalog**: Display the full catalog of available skills from the library.
- **/skills load [profile]**: Load a specific skill profile (core, arch, eng, frontend, ops, gov, full).
- **/skills check [skill-name]**: Verify if a specific skill is active.

## 🛠️ Implementation Details

### 1. List Active Skills

Run this command to see what skills are currently symlinked in `~/.agent/skills`.

```bash
echo -e "\n\033[1;34m🧠 Active Sovereign Skills:\033[0m"
ls -F ~/.agent/skills | grep "@" | sed 's/@//' | sed 's/->.*//' | sort
echo -e "\n\033[0;90mTotal Active: $(ls -l ~/.agent/skills | grep "^l" | wc -l)\033[0m"
```

### 2. View Skill Catalog

Display the full index of available skills from the central library.

```bash
~/.sov-agent/skills/premium-presentation/scripts/view-catalog.sh ~/.sov-agent/skills/SKILL_INDEX.md
```

### 3. Load Skill Profile

Use the operational script to load a predefined set of skills.

```bash
# Available Profiles: core, arch, eng, frontend, ops, gov, full
~/.agent/scripts/skill-loader.sh [profile]
```

### 4. Check Specific Skill

Quickly verify if a skill is available.

```bash
if [ -L "$HOME/.agent/skills/[SKILL_NAME]" ]; then
    echo "✅ [SKILL_NAME] is ACTIVE."
else
    echo "❌ [SKILL_NAME] is NOT active."
fi
```
