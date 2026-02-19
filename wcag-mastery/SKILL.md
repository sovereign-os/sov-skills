---
name: wcag-mastery
description: "Advanced methodology for Web Content Accessibility Guidelines (WCAG) compliance, auditing, and remediation."
version: 1.0.0
---

# ♿ WCAG Mastery: Accessibility-First Engineering

This skill establishes the protocols for building, auditing, and maintaining web applications that are inclusive and compliant with **WCAG 2.1/2.2 Level A, AA, and AAA** standards.

## 🏛️ Core Principles (POUR)

Every digital interface must be:
1. **Perceivable**: Users must be able to perceive the information being presented (it can't be invisible to all their senses).
2. **Operable**: Users must be able to operate the interface (the interface cannot require interaction that a user cannot perform).
3. **Understandable**: Users must be able to understand the information as well as the operation of the user interface.
4. **Robust**: Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

## 📋 Document Structure Protocols

All accessibility artifacts MUST follow the **Date-Prefix** naming convention: `[YYYY-MM-DD]_[TASK_ID]_[DocType].md`.

### A. Accessibility Audit Report (AAR) Protocol
**Template**: `resources/templates/WCAG-AAR.md`
**Filename**: `[YYYY-MM-DD]_[TASK_ID]_AAR.md`
Every AAR must include:
1. **Scope**: Targeted pages/components.
2. **Standard Level**: A, AA, or AAA.
3. **Violations List**: Categorized by POUR principle and Severity (Critical, High, Medium, Low).
4. **Remediation Plan**: Actionable code fixes for each violation.

### B. Voluntary Product Accessibility Template (VPAT)
**Template**: `resources/templates/WCAG-VPAT.md`
Standard reporting for Section 508 and WCAG compliance.

## 🚀 Checklists & Guidelines

### 🎨 Visual & UI (AA Standard)
- **Contrast Ratio**: Normal text 4.5:1, Large text 3:1.
- **Focus Indicators**: Visible focus rings on all interactive elements.
- **Color Dependency**: Information must not be conveyed by color alone.
- **Scale**: Text must be resizable up to 200% without loss of content.

### ⌨️ Interaction & Navigation
- **Keyboard Only**: All functionality must be operable via keyboard (`Tab`, `Enter`, `Space`).
- **No Keyboard Traps**: Users must not get "stuck" in a component.
- **Skip Links**: Provide a way to bypass repetitive content (Navigation).

### 🏷️ Semantics & ARIA
- **Alt Text**: Every image must have an `alt` attribute (empty for decorative).
- **ARIA Roles**: Use native HTML5 landmarks (`<nav>`, `<main>`, `<header>`) before ARIA.
- **Labels**: Every form field must have a programmatically associated `<label>`.

## 🛠️ Tools & Automation

### 1. Automated Scanning
- **Axe-Core**: Integrated CLI/Browser auditing.
- **Lighthouse**: Core Web Vitals + A11y score.

### 2. Manual Verification (Mandatory)
- **Screen Reader Test**: NVDA/JAWS (Windows), VoiceOver (macOS/iOS), Talkback (Android).
- **Keyboard Audit**: Full navigation without a mouse.

## 💡 Reference Examples
*See `resources/examples/` for full content.*
- **AAR Example**: `resources/examples/EXAMPLE-AAR-Dashboard.md`
- **VPAT Example**: `resources/examples/EXAMPLE-VPAT-Portal.md`

---
*Maintained by **Sovereign OS** Integrated Engineering System.*
