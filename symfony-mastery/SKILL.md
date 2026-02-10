---
name: symfony-mastery
description: Advanced Symfony architecture, design patterns, and high-performance development practices.
version: 1.1.0
author: Sovereign OS Agent
tags: [symfony, php, backend, dependency-injection, doctrine]
---

# 🐘 Symfony Mastery


## 1. Core Philosophy (The "Why")
Infrastructure belongs in the Container; Business Logic belongs in the Domain. Symfony is the glue, not the boss. We leverage DI, Events, and Doctrine to build maintainable enterprise apps.

## 2. When to use this skill
This skill is activated when the task requires Advanced Symfony architecture, design patterns, and high-performance development practices..
- Detected when the user's intent matches the semantic domain of 🐘 Symfony Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Dependency Injection Excellence
- **Autowiring**: Default for all services.
- **Interface Binding**: Depend on `RepositoryInterface`, not `DoctrineRepository`.
- **Constraint**: If a service has >5 dependencies, refactor (Extract Facade or Split Responsibility).

### Rule 2: Doctrine Optimization
- **DTOs**: Use `NEW` syntax for read-heavy queries (avoid hydrating full entities).
- **Batch Processing**: Use `iterable` + `detach()` for large datasets to prevent OOM.
- **Repository Purity**: No business logic. Only persistence and queries.

### Rule 3: Controller Standards
- **Invokable**: Prefer `__invoke()` for single-action controllers.
- **Argument Resolvers**: Auto-map request to DTOs.
- **ParamConverter**: Auto-fetch entities from route params.

### Rule 4: Strict Typing
- **Declaration**: Every file starts with `declare(strict_types=1);`.
- **Return Types**: All methods MUST have explicit return types.

### Usage Instructions
### Creating a Service
```php
final readonly class UserService {
    public function __construct(
        private UserRepositoryInterface $repo
    ) {}
}
```

## 4. Maintenance
- **Review**: Does the service inject `ContainerInterface`? (Violation!).
