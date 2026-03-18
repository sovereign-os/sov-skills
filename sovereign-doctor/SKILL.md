---
name: sovereign-doctor
description: Automated health check protocol for Sovereign OS runtime, process hygiene, and workspace compliance.
version: 1.0.0
author: Sovereign OS Agent
tags: [health-check, observability, compliance, operations]
---

# Sovereign Doctor

## Purpose

This skill validates runtime health for the Sovereign OS environment, including process hygiene, network ports, and basic workspace compliance checks.

## Usage

Run the `/sovereign-doctor` workflow or execute the related scripts from `.agents/scripts` when bootstrapping or diagnosing startup issues.

## Expected Outcome

- Detect dangling processes and blocked ports.
- Surface workspace compliance issues.
- Provide actionable diagnostics before boot workflows proceed.

## Agent-Agnostic Execution Layer

This skill supports multi-agent execution through:

- Core guidance in SKILL.md
- Machine contract in skill.contract.json
- Agent adapters in adapters/
- Canonical script entrypoint in scripts/run.sh
