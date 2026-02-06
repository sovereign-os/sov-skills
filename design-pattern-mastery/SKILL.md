---
name: design-pattern-mastery
description: Catalog of essential Design Patterns with use-cases and implementation guides.
version: 1.1.0
author: Sovereign OS Agent
tags: [architecture, design-patterns, oop, refactoring]
---

# 🏗️ Design Pattern Mastery

## 1. Core Philosophy (The "Why")
Don't reinvent the wheel. Patterns are proven solutions to common problems. They optimize for maintainability, not just functionality. However, **Don't Force It**—complexity without need is a bug.

## 2. Capabilities & Rules (The "What")

### Creational
1.  **Factory**: Encapsulates creation logic. (`StorageFactory::create('s3')`).
2.  **Singleton**: One instance globally. (Warning: Prefer Dependency Injection).
3.  **Builder**: Step-by-step construction for complex objects. (`QueryBuilder`).

### Structural
4.  **Adapter**: Makes incompatible interfaces work together. (`StripeAdapter` implements `PaymentGateway`).
5.  **Facade**: Simplifies complex subsystems. (`NotificationFacade` -> Email + SMS).
6.  **Decorator**: Adds behavior dynamically. (`CachedRepository` wraps `SqlRepository`).

### Behavioral
7.  **Strategy**: Interchangeable algorithms. (`PriceCalculator` uses `HolidayDiscountStrategy`).
8.  **Observer**: Event subscription. (`UserRegistered` triggers `SendEmail`).
9.  **Command**: Encapsulates action as object. (Jobs, Queue).
10. **Template**: Skeleton algorithm in base, steps in child. (`DataImport`).

## 3. Usage Instructions (The "How")

### Selection Process
1.  **Analyze**: What changes? (Algorithms? Objects? Interfaces?)
2.  **Match**: Find the pattern that encapsulates that change.
3.  **Implement**: Use standard naming (`Strategy`, `Factory`) for clarity.

## 4. Maintenance
- **Review**: Does the pattern name match the implementation?
- **Anti-Pattern**: Using Singleton for stateful objects (Global State hell).
