---
description: Automated health check for the Sovereign OS environment (AS & FS).
---

# 🏥 Workflow: /sovereign-doctor

This workflow audits the physical and virtual health of the development environment.

## 🛠️ Engaged Skills

- `resource-tuner`: Monitoring CPU, RAM, and Disk health.
- `observability-and-telemetry`: Checking for active process anomalies.
- `security-sentinel`: Verifying no dangling security risks in the running environment.

## 🔄 Sequence

1.  **Zombie Scan**:
    - Identify and report dangling node/tsx processes that might be eating resources.
2.  **Network Audit**:
    - Check if required ports (4225, 1946, etc.) are listening or blocked.
3.  **Workspace Compliance Audit**:
    - Validate workspace root against `WORKSPACE_STANDARD_SPEC.md` (6-folder check).
    - Check for "Illegal" source code in root (MUST be in `registry/projects/`).
    - Verify hidden engine encapsulation (`.agent/`).

4.  **Infrastructure Audit (Manifest Check)**:
    - Validate `registry/projects/[PROJECT].md`.
    - If `platform: docker`, verify Docker daemon is running.
    - Check if the specified `service` container is active and accessible.
    - Verify ports mapping in the manifest matches actual listening ports.

5.  **Interactive Healing**:
    - Automatically suggest `mv` commands to reposition misplaced folders.
5.  **Health Report**:
    - Output a "Sovereign Health Card" (CPU, Mem, Connectivity, Compliance Status).

## 🚀 Usage

Trigger: `/sovereign-doctor`
