---
name: event-sourcing-mastery
description: CQRS, Event Store, and Event Replay for audit trails and temporal queries.
version: 1.0.0
author: Sovereign OS Agent
tags: [event-sourcing, cqrs, event-store, architecture, audit]
---

# 📜 Event Sourcing Mastery


## 1. Core Philosophy (The "Why")
State is derived from events, not stored directly. This enables: complete audit trails, time-travel queries, and event replay for debugging. Essential for financial and compliance-heavy SaaS.

## 2. When to use this skill
This skill is activated when the task requires CQRS, Event Store, and Event Replay for audit trails and temporal queries..
- Detected when the user's intent matches the semantic domain of 📜 Event Sourcing Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: Event Store
- **Append-Only**: Events are immutable. Never update or delete.
- **Schema**: `{ event_id, aggregate_id, event_type, payload, timestamp }`.

### Rule 2: CQRS (Command Query Responsibility Segregation)
- **Write Model**: Commands modify state by appending events.
- **Read Model**: Projections built from events for queries.

### Rule 3: Event Replay
- **Rebuild**: Replay all events to reconstruct state.
- **Use Case**: Debugging, migrating to new schema.

### Usage Instructions
### Appending an Event
```php
$event = new OrderPlaced($orderId, $userId, $amount);
$this->eventStore->append($event);
$this->eventBus->dispatch($event);
```

## 4. Maintenance
- **Snapshots**: Create snapshots every N events to speed up replay.
