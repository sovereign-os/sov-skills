---
name: observability-and-telemetry
description: Monitoring, logging, and tracing for production systems.
version: 1.1.0
author: Sovereign OS Agent
tags: [monitoring, logging, observability, production, telemetry]
---

# 📊 Observability & Telemetry

## 1. Core Philosophy (The "Why")
You can't fix what you can't see. Observability is the ability to understand system internal state from external outputs (logs, metrics, traces). It's the difference between "it's down" and "it's down because X".

## 2. Capabilities & Rules (The "What")

### Rule 1: The Three Pillars
- **Logs**: Discrete events (errors, warnings, info).
- **Metrics**: Aggregated measurements (request count, latency).
- **Traces**: Request flow across services (distributed tracing).

### Rule 2: Structured Logging
- **Format**: JSON logs for machine parsing.
- **Context**: Include Request ID, User ID, Timestamp.
- **Levels**: ERROR (action required), WARN (investigate), INFO (audit), DEBUG (dev only).

### Rule 3: Alerting
- **SLO-Based**: Alert on Service Level Objectives (e.g., "Error Rate > 1%").
- **Actionable**: Every alert must have a runbook.

## 3. Usage Instructions (The "How")

### Structured Log (Monolog)
```php
$logger->error('Payment failed', [
    'request_id' => $requestId,
    'user_id' => $userId,
    'amount' => $amount,
    'gateway' => 'stripe'
]);
```

### Metrics (Prometheus)
```php
$counter->inc(['endpoint' => '/api/users', 'status' => '200']);
```

## 4. Maintenance
- **Retention**: Logs 30 days, Metrics 1 year.
- **Review**: Weekly dashboard review for anomalies.
