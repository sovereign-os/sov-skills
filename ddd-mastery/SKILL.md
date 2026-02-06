---
name: ddd-mastery
description: Guide to Domain-Driven Design (DDD) tactical patterns and strategic design.
version: 1.1.0
author: Sovereign OS Agent
tags: [architecture, ddd, design-patterns, backend, domain]
---

# 🧠 DDD Mastery

## 1. Core Philosophy (The "Why")

Software must reflect the business, not the database. We use **Ubiquitous Language** so developers and experts speak the same dialect. The Domain Model is the heart of the application.

## 2. Capabilities & Rules (The "What")

DDD is composed of two distinct strategies (Pillars):

1.  **Strategic Design (The Macro)**: Defining the boundaries, relationships between teams, and the "Big Picture" architecture.
2.  **Tactical Design (The Micro)**: The specific patterns and coding practices used within a Bounded Context to implement the Domain Model.

### Strategic Design (Macro)

- **Ubiquitous Language**: Code names match business terms (`Flight->book()`, not `Flight->update()`).
- **Bounded Context**: Explicit consistency boundaries (e.g., `Sales` vs `Shipping`).
- **ID-Only References**: Entities in different contexts MUST only reference each other via IDs (Strings/UUIDs), never by direct object composition. This prevents context leakage.
- **Context Mapping (ACL)**: Use Anti-Corruption Layers (ACL) or Domain Services to map external data without polluting the local domain model.
- **Integration Strategies (Context Mapping)**:
  - **Partnership**: Two teams succeed or fail together. High coordination, synchronized releases.
  - **Shared Kernel**: Two contexts share a small part of the domain code (e.g., "TenantAware" interface). High speed, high coupling risk.
  - **Customer-Supplier**: Upstream (Supplier) creates what Downstream (Customer) needs. Formal negotiation.
  - **Conformist**: Downstream adopts Upstream's model "as-is". No translation. Cheap but binds strict dependency.
  - **Anti-Corruption Layer (ACL)**: Downstream builds a translation layer to isolate itself from Upstream changes. High stability, higher cost.
  - **Open Host Service (OHS)**: Upstream provides a public, documented API for many consumers.
  - **Published Language (PL)**: The standard format used by OHS (e.g., JSON Schema, Protobuf).
  - **Separate Ways**: Deciding NOT to integrate. Duplicating logic/data to avoid coupling.

### Tactical Design (Micro)

1.  **Entities**: Identity-based, Mutable. (`User` with ID).
2.  **Value Objects (VO)**: Attribute-based, Immutable, Self-Validating. (`EmailAddress`, `Money`).
3.  **Aggregate Root**: The entry point. Transactions ensure consistency here. (`Order` controls `OrderLines`).
4.  **Domain Services**: Stateless logic that doesn't fit into an Entity or VO. (`MoneyTransferService`, `TenantHierarchyService`).
5.  **Repository**: Collection abstraction. Interface in Domain, Impl in Infra. (`Orders::add()`, `Orders::get()`).
6.  **Domain Events**: Side effects decoupled from logic. (`OrderPlaced`).
7.  **Modules (Vertical Slicing)**: Grouping related domain objects (Aggregates, Services) into cohesive packages. High cohesion within, low coupling between.

> 🤝 **INTEGRATION STRATEGY**: For patterns on how Modules communicate (e.g. IAM <-> Tenant), see [INTEGRATION_STRATEGY.md](../../../packages/core/INTEGRATION_STRATEGY.md).

### Layered Architecture (The "Where")

- **Domain Layer**: Pure business logic (Entities, VOs, Domain Services). No external dependencies.
- **Application Layer**: Orchestrates the Domain. Use Cases (`RegisterTenant`), Application Services (`TenantFacade`). **Logic-free**, only coordination.
- **Infrastructure Layer**: Technical capabilities (SQL, API calls, File I/O). Implements Repositories and Interfaces.

> 📂 **STANDARD STRUCTURE**: For the official directory layout, please refer to [STANDARD_MODULE_STRUCTURE.md](./resources/STANDARD_MODULE_STRUCTURE.md).

## 3. Usage Instructions (The "How")

### Modeling Workflow

1.  **Conversation**: Talk to experts. Capture nouns and verbs.
2.  **Definition**: Identify Contexts and Roots.
3.  **VO First**: Define strict Value Objects (no primitive obsession).
4.  **Entity Logic**: Push logic into Entities (Rich Model), not Services (Anemic Model).
5.  **Events**: Publish events for cross-boundary communication.

## 4. Maintenance

- **Review**: Does the code "scream" the business intent?
- **Refactor**: If language changes, code must change.
