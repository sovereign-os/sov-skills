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

## 2. When to use this skill
This skill is activated when the task requires Monitoring, logging, and tracing for production systems..
- Detected when the user's intent matches the semantic domain of 📊 Observability & Telemetry.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
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

### Usage Instructions
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
