---
name: solid-principles-mastery
description: Comprehensive guide and enforcement rules for applying SOLID principles in software development.
version: 1.1.0
author: Sovereign OS Agent
tags: [architecture, oop, solid, design, refactoring]
---

# 🏛️ SOLID Principles Mastery

## 1. Core Philosophy (The "Why")
SOLID is the foundation of maintainable OOP. Violations lead to God Classes, tight coupling, and untestable code. We enforce SOLID to ensure scalability and sanity.

## 2. Capabilities & Rules (The "What")

### Rule 1: Single Responsibility (SRP)
- **Definition**: One class, one reason to change.
- **Violation**: `UserManager` handles validation, DB, email, logging.
- **Fix**: Split into `UserValidator`, `UserRepository`, `UserNotifier`.

### Rule 2: Open/Closed (OCP)
- **Definition**: Open for extension, closed for modification.
- **Violation**: Adding `ApplePay` requires editing `PaymentProcessor`.
- **Fix**: Use Strategy Pattern (`PaymentGatewayInterface`).

### Rule 3: Liskov Substitution (LSP)
- **Definition**: Subtypes must be substitutable for base types.
- **Violation**: `Square` extends `Rectangle` but breaks `setWidth()` logic.
- **Fix**: Use Composition or separate interfaces.

### Rule 4: Interface Segregation (ISP)
- **Definition**: No fat interfaces.
- **Violation**: `WorkerInterface` has `work()` and `eat()`. `Robot` throws on `eat()`.
- **Fix**: Split into `WorkableInterface` and `FeedableInterface`.

### Rule 5: Dependency Inversion (DIP)
- **Definition**: Depend on abstractions, not concretions.
- **Violation**: `OrderService` instantiates `MySQLConnection`.
- **Fix**: Inject `DatabaseConnectionInterface`.

## 3. Usage Instructions (The "How")

### Applying DIP
```php
class OrderService {
    public function __construct(
        private DatabaseConnectionInterface $db
    ) {}
}
```

## 4. Maintenance
- **Review**: Reject PRs with God Classes.
- **Refactor**: Apply Boy Scout Rule to legacy violations.
