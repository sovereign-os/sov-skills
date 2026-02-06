# 🏗️ Sovereign Module Standard Structure

To ensure consistency across the Modular Monolith, all bounded contexts (modules) must follow this directory structure.

## 📂 The "Vertical Slice" Pattern

We prefer **grouping by module** (vertical) over grouping by technical layer (horizontal).

```text
packages/core/src/[module-name]/
├── application/                  # 🟢 THE ORCHESTRATOR
│   ├── use-cases/                # Command/Query Handlers
│   │   ├── create-noun.use-case.ts
│   │   └── get-noun.use-case.ts
│   └── [module].service.ts       # Application Service (Facade)
│
├── domain/                       # 🔴 THE BRAIN (Pure Typescript)
│   ├── [noun].entity.ts          # Aggregate Root or Entity
│   ├── [noun].vo.ts              # Value Objects
│   ├── [noun].events.ts          # Domain Events
│   ├── [noun].repository.ts      # Repository Interface (Contract)
│   └── [noun].service.ts         # Domain Service (Complex Business Rules)
│
├── infrastructure/               # 🔵 THE PLUMBING (Optional internal impl)
│   ├── [noun].mapper.ts          # DTO <-> Entity Mappers
│   └── [noun].adapter.ts         # External Service Adapters
│
├── index.ts                      # 🚪 THE PUBLIC API (Barrel File)
└── README.md                     # 📖 Documentation (Context Map, Rules)
```

## 📜 Rules of the Structure

1.  **Domain Purity**:
    - The `domain/` directory MUST NOT import from `application/`, `infrastructure/`, or external libraries (except utilities like `date-fns` or shared kernel).
    - Repository **Interfaces** live in `domain/`.
    - Repository **Implementations** live in `@pkahfi/infrastructure` usually, OR `infrastructure/` folder if module-private.

2.  **Public API (`index.ts`)**:
    - Only export what other modules are allowed to see.
    - Export `Entities`, `ValueObjects`, `DomainEvents`, and `DTOs`.
    - **DO NOT** export `infrastructure` details or internal helper functions.

3.  **Naming Conventions**:
    - File names: `kebab-case.type.ts` (e.g., `user.entity.ts`, `register-user.use-case.ts`).
    - Class names: `PascalCase`.

4.  **Testing**:
    - Colocate tests in `__tests__/` folders next to the code being tested, or at the root of the module `[module-name]/__tests__/`.

## 🔄 Migration Guide

If a module uses legacy structures (e.g., `ports/` folder for repo interfaces, or grouped `entities/` folders):

1. Move Repository Interfaces -> `domain/[noun].repository.ts`.
2. Move Entities -> `domain/[noun].entity.ts`.
3. Flatten `domain/` if it contains unnecessary subfolders like `interfaces/` or `types/`.
