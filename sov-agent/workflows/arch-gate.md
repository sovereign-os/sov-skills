---
description: Architecture Blueprint Review & Design Gatekeeper
---

# 📐 Workflow: /arch-gate

This workflow enforces a systematic analysis phase before any feature implementation, ensuring structural integrity and alignment with Sovereign OS standards.

## 🛠️ Engaged Skills

- `architecture-blueprint-mastery`: For structured planning and technical analysis.
- `clean-architecture-mastery`: To enforce dependency rules and separation of concerns.
- `system-design-mastery`: For high-level orchestration and scalability checks.

## 🔄 Sequence

1.  **Requirement Deconstruction**:
    - Extract the core business logic from the user request.
    - Identify potential impacts on existing modules.
    - **Oracle Check**: Search the **Solution Vault** (`memory/`) for similar technical patterns.

2.  **Blueprint Generation**:
    - Create a technical design document (temporary or in `docs/blueprints/`).
    - Define:
      - New Entities/Interfaces.
      - Data flow changes.
      - API contract updates (if applicable).
      - **Infrastructure Impact**: Does this require new Docker services, ports, or environment variables? Update `registry/projects/` manifest if needed.

3.  **Verification Gate**:
    - Check against `solid-principles-mastery`.
    - Ensure no violation of the "Dependency Rule" (Outer layers depend on inner layers).

4.  **Approval**:
    - Present the plan to the user for a "GO/NO-GO" decision.

## 🚀 Usage

Trigger: `/arch-gate [Feature Name] [Description]`
