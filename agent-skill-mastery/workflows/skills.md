---
description: Manage and list active Sovereign Skills within the current workspace.
---

# 🧠 Workflow: /skills

This workflow allows you to manage the active skill set (The Agent's capabilities) for the current workspace.

## 🚀 Usage

- **/skills list**: Show all currently loaded skills.
- **/skills catalog**: Display the full catalog of available skills from the library.
- **/skills load [profile]**: Load a specific skill profile.
- **/skills check [skill-name]**: Verify if a specific skill is active.
- **/skills inspect [skill-name]**: Read the instructions (SKILL.md) of a skill.
- **/skills sync**: Pull the latest updates from the skill repository.
- **/skills create [name]**: Scaffold a new skill template.

## 🛠️ Implementation Details

### 1. List Active Skills

Run this command to see what skills are currently symlinked in `~/.agent/skills`.

```bash
~/.sov-agent/skills/agent-skill-mastery/scripts/skill-manager.sh active
```

### 2. View Skill Catalog

Display the full index of available skills from the central library.

```bash
~/.sov-agent/skills/agent-skill-mastery/scripts/view-catalog.sh ~/.sov-agent/skills/SKILL_INDEX.md
```

### 3. Load Skill Profile

Use the operational script to load a predefined set of skills.

```bash
# Available Profiles: core, arch, eng, frontend, ops, gov, full
~/.sov-agent/skills/agent-skill-mastery/scripts/load-profile.sh [profile]
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

### 5. Inspect Skill

Read the full instructions/manifest of a specific skill.

```bash
~/.sov-agent/skills/agent-skill-mastery/scripts/inspect-skill.sh [SKILL_NAME]
```

### 6. Sync Library

Update the local skill library from the remote git repository.

```bash
~/.sov-agent/skills/agent-skill-mastery/scripts/sync-skills.sh
```

### 7. Create New Skill

Scaffold a new skill directory with a standard template.

```bash
~/.sov-agent/skills/agent-skill-mastery/scripts/create-skill.sh [SKILL_NAME]
```
