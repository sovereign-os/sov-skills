---
description: Rapidly scaffold a new DDD module within the Modular Monolith architecture.
---

# 📦 Workflow: /scaffold-module

This workflow automates the creation of a standardized DDD module structure.

## 🛠️ Engaged Skills

- `modular-monolith-mastery`: Ensuring structural decoupling.
- `ddd-mastery`: Applying Entity, VO, and Repository patterns.
- `typescript-mastery`: Ensuring strict type safety.

## 🔄 Sequence

1.  **Context Detection**:
    - Identify the target package (usually `packages/core` or `packages/infrastructure`).
2.  **Naming & Strategy**:
    - Request the name of the new module (e.g., `billing`, `inventory`).
3.  **Core Scaffolding (Domain Layer)**:
    - Create `[MODULE]/domain/entities/`
    - Create `[MODULE]/domain/value-objects/`
    - Create `[MODULE]/domain/repositories/`
4.  **Application Scaffolding**:
    - Create `[MODULE]/application/use-cases/`
    - Create `[MODULE]/application/services/`
5.  **Infrastructure Scaffolding**:
    - Create `[MODULE]/infrastructure/repositories/` (Implementations).
6.  **Ioc/DI Wiring**:
    - Register the new module in the nearest `Inversify` container or IoC provider.
7.  **Final Export**:
    - Update the package's `index.ts` to expose the module's public interface.

## 🚀 Usage

Trigger: `/scaffold-module [name]`
