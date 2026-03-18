---
name: api-mastery
description: Advanced standard for building high-performance, contract-first, and industry-standard RESTful APIs using OpenAPI and Swagger.
version: 1.1.0
author: Sovereign OS Agent
tags: [api, rest, openapi, swagger, backend]
---

# 🚀 API Mastery


## 1. Core Philosophy (The "Why")
This skill enforces the "Sovereign API Standard". It ensures all services are scalable, discoverable, and strictly typed via **Contract-First Development**. The API is the Product.

### The 4 Pillars
1.  **Contract as Truth**: OpenAPI (OAS) is the master. Code follows specs.
2.  **Statelessness**: Every request contains full context.
3.  **Idempotency**: Safe retry mechanisms.
4.  **Discoverability**: Self-documenting (Swagger/HATEOAS).

## 2. When to use this skill
This skill is activated when the task requires Advanced standard for building high-performance, contract-first, and industry-standard RESTful APIs using OpenAPI and Swagger..
- Detected when the user's intent matches the semantic domain of 🚀 API Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Specification Standards
- **Schema**: Response/Request bodies MUST use strict schemas.
- **Naming**: URLs in `kebab-case`, JSON properties in `camelCase`.
- **Pluralization**: `/users`, `/projects`.
- **Depth**: Max 2 levels nesting (Avoid `/users/1/posts/2/comments`).

### Rule 2: Security & Integrity
- **Auth**: Bearer (JWT) with defined scopes.
- **Validation**: Strict schema validation BEFORE business logic.
- **CORS**: Strict Origin Check.

### Rule 3: Error Protocol
Return standardized JSON errors:
```json
{
  "error": {
    "code": "ENTITY_NOT_FOUND",
    "message": "User 123 not found",
    "traceId": "x-12345"
  }
}
```

### Rule 4: Optimization
- **Pagination**: `limit` & `offset` required for lists.
- **Sorting**: `?sort=-created_at`.
- **Fields**: `?fields=id,name` (Partial Response).

### Usage Instructions
### Workflow
1.  **Design**: Edit `openapi.yaml` first.
2.  **Mock**: Validate endpoint design.
3.  **Implement**: Write Controller/Service code.
4.  **Document**: Update Swagger UI description.

## 4. API Testing & Automation (The Sovereign Automation Framework)
For standardized end-to-end API testing across Sovereign OS workspaces, projects utilize a central Orchestrator (TypeScript + Newman).

### Runner Architecture (Ports & Adapters)
- **CliPort**: Defines the interface for CLI options (`-e env`, `-c collection`, `-f folder`).
- **CommanderAdapter**: Implements `CliPort` using Commander.js.
- **Orchestrator**: The core business logic, decoupled and injected via **InversifyJS**.

### Standard Directory Structure (Testing)
Any project implementing the testing framework MUST follow:
```text
tests/Api/
├── collections/      # Raw Postman Collections
├── data/             # Temp JSON for Newman
├── datasets/         # Parameter Data Files (e.g., datasets/staging/data.xlsx)
└── reports/          # Output for Newman HTML Reports
```

### Advanced Data Strategy (DataResolver)
The system automatically resolves variables based on environment prioritization:
1. Environment Dataset: `datasets/[env]/*.xlsx`
2. Fallback Env Dataset: `datasets/[env]/data.xlsx`
3. Generic Root Dataset: `datasets/data.xlsx`
4. Postman Cloud Sync: Fetches collection dynamically if `POSTMAN_API_KEY` is present.

### Execution Target
- Run specific environment: `npm run test:staging` (or `npx tsx tests/Api/runner.ts --env staging`)
- Run isolated endpoint/folder: `npx tsx tests/Api/runner.ts --env staging -f "Auth"`

### Resources & Templates
Standard API templates, stub responses, and mock architectures are stored inside the `resources/templates/` directory of this skill. Whenever the agent is scaffolding a new endpoint or writing Postman tests, they must consult this directory first to ensure enterprise consistency.

## 5. Maintenance
- **No Spec, No Code**: Endpoint logic requires spec first.
- **Versioning**: Breaking changes require `/v2/`.
- **Definition of Done**: Swagger UI must work perfectly.

## Agent-Agnostic Execution Layer

This skill supports multi-agent execution through:

- Core guidance in SKILL.md
- Machine contract in skill.contract.json
- Agent adapters in adapters/
- Canonical script entrypoint in scripts/run.sh
