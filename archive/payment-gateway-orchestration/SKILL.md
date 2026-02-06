---
name: payment-gateway-orchestration
description: Expertise in managing external payments (Stripe, Midtrans) with robust webhook handling and idempotency.
version: 1.1.0
author: Sovereign OS Agent
tags: [payment, stripe, webhooks, backend, financial]
---

# 💸 Payment Gateway Orchestration

## 1. Core Philosophy (The "Why")
This skill manages the movement of value. It connects Sovereign OS to the global financial system. Reliability is non-negotiable. Webhooks are the source of truth, not the user's browser.

## 2. Capabilities & Rules (The "What")

### Rule 1: Webhook Resilience
- **Source of Truth**: Async payments (Bank Transfer) succeed via Webhook, not return URL.
- **Verification**: ALWAYS verify webhook signatures (HMAC) to prevent spoofing.
- **Response**: Return `200 OK` quickly. Process logic in background/queue.

### Rule 2: Strict Idempotency
- **Constraint**: Process each `TransactionID` exactly once.
- **Lock**: Use DB Lock before updating balance/status.

### Rule 3: Atomic Balance
- **Transaction**: Payment Success + Product Unlock MUST happen in the same DB Transaction.

## 3. Usage Instructions (The "How")

### Implementing Webhook Controller
1.  **Verify**: `$gateway->verifySignature($request)`.
2.  **Ack**: `return Response(200)` (if queuing) or process fast.
3.  **Check**: `if (Transaction::exists($id)) return;`
4.  **Process**: Unlocking logic.

## 4. Maintenance
- **Monitor**: Set alerts for "Webhook Failure Rate > 1%".
- **Logs**: Log every raw webhook payload for debugging disputes.
