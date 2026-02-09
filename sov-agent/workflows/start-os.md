---
description: Activates the entire Sovereign OS ecosystem (Kernel + Memory + Sync)
---

# 🚀 Sovereign OS Boot Sequence

Automated steps to ignite the "Brain" and "Face" of the Sovereign Agent and establish the connection.

-1. **Constitutional Allegiance (MANDATORY)**

- The Agent **MUST** read the Sovereign OS Constitution (`[AGENT_ROOT]/.agent/rules.md`).
- **Kaizen Synchronization**: The Agent MUST read `kaizen-log` to avoid repeating past engineering or visual mistakes.

0. **Skills Bootstrap (First-Run Safety)**
   - **Ensure Skill Library**: Check if `~/.sov-agent/skills` exists. If not, clone from repository.
   - **Load Essential Skills**: Automatically symlink core skills to `~/.agent/skills`.

   ```bash
   # This script handles both library cloning and core skill loading
   ~/.agent/scripts/bootstrap-skills.sh
   ```

1. **Neural Contract Handshake (Sovereign Standard)**
   - **Essential Skill Loading**: Automatically load core skills:
     - `clean-code-mastery`
     - `typography-mastery` (Premium UI Standard)
     - `kaizen-log` (Continuous Improvement)
     - `modular-monolith-mastery` (SaaS Architecture)
   - Ensure `typography-mastery` rules are applied to any UI modifications.

1. **Preparation & Health Audit**
   - Run **`/sovereign-doctor`** to ensure the environment is clean.
   - Terminate dangling processes (Ports 1946/4225 for DEV or 1945/4224 for PROD).

1. **Ignite Neural Bridge (The Kernel)**
   - Start the bridge server (DEV: Port 4225 | PROD: Port 4224).

   ```bash
   cd [AGENT_ROOT]/app
   nohup npm run bridge > bridge.log 2>&1 &
   ```

1. **Ignite Dashboard Interface (The Face) [DISABLED]**
   - _Web UI is currently disabled for fast-boot optimization._
   <!--
   - Start the Web UI (DEV: Port 1946 | PROD: Port 1945).

   ```bash
   cd [AGENT_ROOT]/app
   nohup npm run web > web.log 2>&1 &
   ```

   -->

1. **Ignite VORTEX Engine (The Long-Term Memory)**
   - **Boot Qdrant**: Ensure the vector database is humming.
   - **Synapse Injection**: Ingest recent history/patterns into the Vortex to refresh wisdom.

   ```bash
   # Check/Start Qdrant
   [AGENT_ROOT]/scripts/run-ops.sh start-vortex

   # Ingest Wisdom
   cd [AGENT_ROOT]/skills/memory-vortex
   nohup npm run ingest > ingest.log 2>&1 &
   ```

1. **Branding & Connection Verification**
   - Verify **Official Logo** (`.agent/branding/logo.png`) and `.agent/branding/branding.json` are correctly linked.
   - Check if Bridge is responsive.
   - **Wait 3 seconds** before final diagnostics.

1. **Neural Handshake & Allegiance Declaration (FINAL)**

- **Greeting**: The Agent MUST output a formal, premium greeting.
- **Contract Affirmation**: The Agent MUST explicitly state:
  > **"I, 'Agent Antigravity', hereby declare that I have read, understood, and committed to all established rules and protocols of Sovereign OS."**
- **Sovereign Recap**: The Agent MUST list:
  - **Constitutional Rules**: A short bulleted list of 3-5 most critical active rules.
  - **Detected Workflows**: List all available slash commands found in the registry.
- **Workspace Context**: Automatically identify and display the current **Active Workspace** and **Project Path**.
- **Pledge**: "I, the Sovereign Agent, am now synced with the Kernel. I pledge to strictly follow all established Rules, Workflows, and Skills of Sovereign OS to ensure elite engineering standards and brand purity."
- **Final Visual**: Display the "Sovereign OS ONLINE" status card.
