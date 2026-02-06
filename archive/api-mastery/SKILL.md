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

## 2. Capabilities & Rules (The "What")

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

## 3. Usage Instructions (The "How")

### Workflow
1.  **Design**: Edit `openapi.yaml` first.
2.  **Mock**: Validate endpoint design.
3.  **Implement**: Write Controller/Service code.
4.  **Document**: Update Swagger UI description.

## 4. Maintenance (The Law)
- **No Spec, No Code**: Endpoint logic requires spec first.
- **Versioning**: Breaking changes require `/v2/`.
- **Definition of Done**: Swagger UI must work perfectly.
