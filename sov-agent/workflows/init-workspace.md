---
description: Automated Workspace Onboarding Protocol
---

# 🏢 Workflow: /init-workspace

This workflow automates the creation and standardization of a new workspace within the Sovereign OS ecosystem.

## 🛠️ Engaged Skills

- `architecture-blueprint-mastery`: To define the workspace structure.
- `clean-architecture-mastery`: To enforce folder separation.
- `environment-binder`: To setup local environment mapping.

## 🔄 Sequence

1.  **Directory Creation**:
    - Create `workspaces/[WORKSPACE_NAME]` directory.
    - Initialize Standard Workspace folders (Root):
      - `artifacts/`: General workspace artifacts.
      - `brain/`: Knowledge base and long-term memory.
      - `data/`: Core workspace data.
      - `operations/`: `tasks/`, `logs/`, and `artifacts/`.
      - `registry/`: `projects/` and `assets/`.
    - Initialize Hidden Agent Engine (`.agent/`):
      - `.agent/skills/`: Workspace-specific masteries.
      - `.agent/workflows/`: Specific automation.
      - `.agent/branding/`: Thematic assets.

2.  **Standard Configuration**:
    - Copy global `rules.md` template to `workspaces/[WORKSPACE_NAME]/.agent/rules.md`.
    - Create a `current-context.json` inside `workspaces/[WORKSPACE_NAME]/.agent/`.
    - Create `branding.json` inside `workspaces/[WORKSPACE_NAME]/.agent/branding/`.

3.  **Initial Blueprinting**:
    - Create a `README.md` with the "Sovereign OS Workspace" header.
    - Define initial projects in a workspace manifest.

4.  **Switch & Verify**:
    - Automatically trigger `/switch-workspace [WORKSPACE_NAME]`.
    - Perform a `sovereign-doctor` health check on the new directory.

## 🚀 Usage

Trigger: `/init-workspace [Name]`
