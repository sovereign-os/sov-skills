---
description: Activates the Sovereign OS ecosystem in DEVELOPMENT mode
---

# 🚀 Sovereign OS Dev Boot Sequence

Automated steps to ignite the "Brain" and "Face" of the Sovereign Agent in development mode.

-1. **Constitutional Allegiance (MANDATORY)**

- The Agent **MUST** read and re-lock focus on the Sovereign OS Constitution (`[AGENT_ROOT]/rules.md`) and Layered Workspace Rules.
- **Respect Boundaries**: The Agent is strictly forbidden from leaking data or context across workspace boundaries. Each workspace is a private silo unless explicitly bridged.
- **Cross-Workspace Compliance**: The Agent MUST automatically detect and comply with the `rules.md`, `workflows/`, and `skills/` of the current active workspace.

0. **Neural Contract Handshake (Sovereign Standard)**
   - The Agent **MUST** bind itself to the `[AGENT_ROOT]/NEURAL_CONTRACT.md`.
   - **Essential Skill Loading**: Automatically load core skills for clean engineering:
     - `clean-code-mastery`
     - `solid-principles-mastery`
     - `typescript-mastery` (if applicable)
     - `architecture-blueprint-mastery`
   - This ensures every line of code produced is clean, modular, and adheres to the Sovereign standard.

1. **Preparation (Clean Slate)**
   - Terminate any dangling processes (ensure ports 1946/4225 are clear).

   ```bash
   pkill -f "next-server" || true && pkill -f "bridge/src/server.ts" || true
   ```

2. **Ignite Neural Bridge (The Kernel - DEV)**
   - Start the bridge server with hot-reload enabled.

   ```bash
   cd [AGENT_ROOT]/app
   nohup npm run bridge > bridge.log 2>&1 &
   ```

3. **Ignite Dashboard Interface (The Face - DEV)**
   - Start the Web UI in development mode.

   ```bash
   cd [AGENT_ROOT]/app
   nohup npm run web > web.log 2>&1 &
   ```

4. **Connection Verification**
   - Check if the Bridge is listening on port 4225 (Sovereign Port).
   - Check if the Web UI is ready on port 1946.
   - **Wait 5 seconds** before verification.

5. **System Report**
   - Confirmation: "Sovereign OS DEV MODE ONLINE. Dashboard: http://localhost:1946 | Bridge: ACTIVE (Port 4225)"
   - Declarative: "Neural Contract Signed. Essential Skills Loaded. Workspace Boundaries Locked."
