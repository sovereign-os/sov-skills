---
name: clean-architecture-mastery
description: Dependency Rule enforcement, Separation of Concerns, and Business-at-the-Center.
version: 1.1.0
author: Sovereign OS Agent
tags: [architecture, design, clean-code, ddd]
---

# 🏛️ Clean Architecture Mastery

## 1. Core Philosophy (The "Why")

Clean Architecture (Uncle Bob) is about creating systems that are independent of frameworks, UI, databases, or any external agency. The goal is to make the business logic (the "Core") the most stable and testable part of the system.

### The Dependency Rule

Source code dependencies must point **inwards**. Nothing in an inner circle can know anything at all about something in an outer circle.

#### 🧱 Layer Dependency Rules (Strict):

1. **DOMAIN (ENTITIES)**:
   - Core business logic and objects.
   - **DEPENDS ON: NOTHING.**
   - No external libraries, no frameworks, no other layers.
2. **APPLICATION (USE CASES)**:
   - Orchestrates the domain objects.
   - **DEPENDS ON: DOMAIN ONLY.**
   - Independent of Database, UI, or Frameworks. Uses interfaces (Ports) to talk to the outside.

3. **INFRASTRUCTURE / PRESENTATION**:
   - Implementation and delivery details.
   - **DEPENDS ON: APPLICATION & DOMAIN.**
   - This is where the concrete DB implementations, API Clients, and UI live.

```text
[ PRESENTATION / ADAPTERS ] ---> [ APPLICATION (USE CASES) ] ---> [ DOMAIN (ENTITIES) ]
           |                                ^                            ^
           |                                |                            |
           +--------------------------------+----------------------------+
                                            |
                                  [ INFRASTRUCTURE ]
```

> **Violation**: If `Application` or `Domain` imports from `Infrastructure`, it's a "Dirty Leak" that breaks the architecture.

## 2. Capabilities & Rules (The "What")

### Rule 1: The Core (Entities & Use Cases)

- **Entities**: Business objects (e.g., User, Invoice) that encapsulate enterprise-wide business rules. They must be pure code.
- **Use Cases**: Application-specific business rules. They orchestrate the flow of data to and from entities.

### Rule 2: Boundary Interactors

- **Isolation**: Use Cases should communicate with external worlds only through interfaces (Ports).
- **No Leaks**: Technical details (SQL, HTTP, UI) must NEVER leak into the Core.

### Rule 3: Interface Adapters

- **Role**: Convert data from the format most convenient for the use cases and entities, to the format most convenient for some external agency such as the Database or the Web.
- **Examples**: Controllers, Presenters, Gateways.

### Rule 4: Frameworks & Drivers

- **Details**: The outermost layer is where the tools live. The Database is a tool. The Web is a tool.
- **Separation**: Keep these tools separated from the Core.

## 3. Usage Instructions (The "How")

### Implementation Step-by-Step

1.  **Identify Entities**: Define the core business objects.
2.  **Define Use Cases**: What does the system DO?
3.  **Define Ports**: Create interfaces for external services (Input/Output).
4.  **Implement Adapters**: Write the concrete implementations of the ports.
5.  **Inject Dependencies**: Use a DI container to wire everything together, pointing inwards.

## 4. Maintenance (The Law)

- **Strict Separation**: If you find yourself importing a Framework (Laravel/Symfony) class inside an Entity, you have failed.
- **Testability**: The Core MUST be testable without starting a web server or connecting to a database.
- **Refactor Early**: If the "details" (outer circles) start influencing the "policy" (inner circles), refactor immediately.
