---
description: The "One-Shot" Initialization Protocol for New Agents.
---

# 🚀 Initialize Sovereign Environment

This workflow is the "Big Red Button" for new developers. It sequentially executes the entire onboarding chain: environment checking, patching, kernel booting, and (optional) workspace creation.

## 1. Syntax
`/init [workspace_name]` (Optional workspace name)

## 2. Phase 0: Identity & Contract Synchronization (Mandatory)
The Agent **MUST** reload and strictly adhere to the Sovereign OS Constitution and Layered Rules. **NO DEVIATION ALLOWED.**

1.  **Read Constitution**: Load `[AGENT_ROOT]/rules.md`.
2.  **Bind Neural Contract**: Execute `[AGENT_ROOT]/NEURAL_CONTRACT.md` compliance.
3.  **Respect boundaries**: Acknowledge that project A and project B are strictly separated. 
4.  **Compliance Check**: Automatically detect and respect `rules.md`, `workflows/`, and `skills/` of use other workspaces.
5.  **Confirm Compliance**: Declare "I am Antigravity. I obey the Sovereign OS Constitution and the Neural Contract. All workspace silos are respected."

## 3. Phase 1: Environment Hardening
Execute the robust setup script to ensure Node/Docker/Git/Env are correctly configured.

```bash
# // turbo
$HOME/.agent/scripts/setup.sh
```

## 3. Phase 2: Kernel Ignition
Launch the Sovereign OS Kernel (Bridge & Web UI) if not already running.

```bash
# // turbo
$HOME/.agent/scripts/start-os.sh || $HOME/.agent/app/scripts/bridge-launcher.sh
```
*(Note: We rely on the internal start-os mechanics)*

## 4. Phase 3: Workspace Fabrication (Optional)
If the user provided a workspace name argument, create it immediately.

```bash
if [ ! -z "{1}" ]; then
  $HOME/.agent/scripts/init-workspace.sh "{1}"
fi
```

## 5. Handover
Final confirmation to the user.
> "Environment Initialized. Kernel Active. Workspace '{1}' Ready."
