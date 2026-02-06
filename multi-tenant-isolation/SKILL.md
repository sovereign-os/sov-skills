---
name: multi-tenant-isolation
description: Expertise in strict data separation strategies for SaaS.
version: 1.2.0
author: Sovereign OS Agent
tags: [architecture, saas, multi-tenancy, security, isolation]
---

# 🏢 Multi-Tenant Isolation

## 1. Core Philosophy (The "Why")

In a SaaS, leaking data between tenants is the ultimate sin. It destroys trust instantly. We enforce **Logical Isolation** at the deepest possible layer (Database/ORM), ensuring that developer error cannot accidentally expose Tenant A's data to Tenant B.

## 2. Capabilities & Rules (The "What")

### Rule 1: The Tenant ID

- **Mandate**: Every table belonging to a tenant MUST have a `tenant_id` column (UUID/Int).
- **Index**: Always index `tenant_id` for performance.
- **Foreign Keys**: Cascade deletes if the tenant is deleted (optional/careful).

### Rule 2: Global Scope Injection (The Filter)

- **Mechanism**: Use ORM Global Scopes (Laravel/Hibernate) to automatically append `WHERE tenant_id = ?` to EVERY query.
- **Bypass**: Only "Super Admin" features can bypass this scope, and must do so explicitly (`withoutGlobalScope`).

### Rule 3: Context middleware

- **Resolving**: Identification of the tenant happens at the Middleware layer (via Subdomain `tenant.app.com` or Header `X-Tenant-ID`).
- **Persistence**: Store the resolved `tenant_id` in a Singleton/Context Service for the request duration.

## 3. Usage Instructions (The "How")

### Implementation (Laravel Example)

1.  **Trait**: Create `BelongsToTenant` trait.
2.  **Scope**:
    ```php
    static::addGlobalScope('tenant', function (Builder $builder) {
        $builder->where('tenant_id', CurrentTenant::id());
    });
    ```
3.  **Creating**: `static::creating` event to auto-fill `tenant_id`.

### Testing

- **Cross-Tenancy Test**:
  1. Create Tenant A & Object A.
  2. Create Tenant B.
  3. Act as Tenant B.
  4. Try to fetch Object A.
  5. Assert: `404 Not Found` (Not just empty result, but completely invisible).

## 4. Maintenance (The Law)

- **Audit**: Scan migrations for missing `tenant_id` columns.
- **Leak Check**: Periodically attempt cross-tenant access in Staging.
