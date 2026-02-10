---
name: saas-backend-mastery
description: Comprehensive backend architecture for SaaS platforms (APIs, Payments, Subscriptions, Multi-tenancy).
version: 1.0.0
author: Sovereign OS Agent
tags: [saas, backend, api, payment, subscription, multi-tenant]
---

# 💼 SaaS Backend Mastery


## 1. Core Philosophy (The "Why")
SaaS backends must handle: API contracts, recurring billing, multi-tenancy, and webhooks. This skill consolidates best practices from API design, payment orchestration, and subscription lifecycle management.

## 2. When to use this skill
This skill is activated when the task requires Comprehensive backend architecture for SaaS platforms (APIs, Payments, Subscriptions, Multi-tenancy)..
- Detected when the user's intent matches the semantic domain of 💼 SaaS Backend Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: API Design (Contract-First)
- **OpenAPI**: Define specs before code.
- **Versioning**: `/v1/`, `/v2/` for breaking changes.
- **Pagination**: Use cursor-based for scale.

### Rule 2: Payment & Subscription
- **Idempotency**: Process each transaction exactly once.
- **Webhooks**: Async payment confirmations are source of truth.
- **Lifecycle**: Handle trial, active, paused, canceled states.

### Rule 3: Multi-Tenancy
- **Isolation**: Tenant data MUST be separated (DB schema, row-level security).
- **Scalability**: Use tenant sharding for large customers.

### Usage Instructions
### Implementing Subscription Webhook
```php
public function handleStripeWebhook(Request $request) {
    $event = \Stripe\Webhook::constructEvent($request->getContent(), $sig, $secret);
    if ($event->type === 'invoice.payment_succeeded') {
        $this->subscriptionService->activate($event->data->object->subscription);
    }
}
```

## 4. Maintenance
- **Monitor**: Webhook failure rate, Payment success rate.
- **Audit**: Quarterly review of tenant isolation.
