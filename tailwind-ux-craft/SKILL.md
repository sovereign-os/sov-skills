---
name: tailwind-ux-craft
description: Advanced UI/UX rules for Tailwind CSS. Enforces "Premium Component Laws" for buttons, cards, and interactive states to ensure a "Wow" factor and total theme elasticity.
version: 1.1.0
author: Antigravity
tags: [tailwind, ui-ux, components, micro-interactions, premium-design]
---

# 🎨 Tailwind UX Craft: The "Premium Component Laws"

This skill bridges the gap between basic Tailwind utility usage and High-Fidelity UI engineering.

## 0. The Golden Law: Zero-Hardcoding (MANDATORY)

To ensure High-Fidelity Elasticity (Light/Dark mode safety), you MUST NOT use hardcoded colors.

- **❌ FORBIDDEN**: `bg-white`, `text-black`, `border-gray-200`, `shadow-indigo-500`.
- **✅ MANDATORY**: Use Semantic Tokens mapped to CSS Variables.
  - Colors: `bg-background`, `text-foreground`, `bg-primary`, `text-primary-foreground`.
  - Opacity: `bg-primary/90`, `text-foreground/60`.
  - Borders: `border-border`, `border-primary/20`.

## 1. The Universal Button Laws (Sure Rules)

Every button in a "Wow" interface MUST follow these interaction and structural rules:

### A. Anatomy of Excellence

- **Height**: Use `h-12` (Compact), `h-14` (Standard Premium), or `h-16` (Hero/CTA).
- **Rounding**: Use `rounded-full` or `rounded-[1.25rem]`.
- **Font**: `font-bold` or `font-black`. High tracking (`tracking-wide` or `tracking-tight`).

### B. Micro-Interactions (Mandatory)

A button that doesn't "react" is dead. Every button MUST include:

- **Hover Scale**: `hover:scale-105` (Subtle) or `hover:scale-[1.02]`.
- **Tactile Feedback**: `active:scale-95`. This provides an "analogue" click feel.
- **Color Depth**: Use `hover:opacity-90` or `hover:saturate-[1.5]`.
- **Transition**: `transition-all duration-300 ease-out`.

### C. Shadow Mapping (The Glow)

Don't use generic shadows. Use "Themed Glows":

- **Primary Buttons**: `shadow-xl shadow-primary/20`.
- **Hover State**: `hover:shadow-2xl hover:shadow-primary/30`.

## 2. Dynamic Contrast Laws

### A. The Ghost/Outline Trap

On highly vibrant backgrounds (e.g., Mint Green, Electric Blue):

- **Rule**: Use "Adaptive Neutrals". Instead of `white`, use `bg-primary-foreground/10` with `backdrop-blur-md`.
- **Rule**: The secondary button MUST use `text-primary-foreground` or a high-contrast mapping from `globals.css`.

### B. Text Layers

- **Primary Headline**: `text-foreground` or `text-primary-foreground`.
- **Meta/Caption**: `text-muted-foreground` or `text-foreground/60`.

## 3. Surface & Elevation

### A. The "Card Glass" Protocol

Cards should not be flat.

- **Base**: `bg-card/80 backdrop-blur-2xl`.
- **Border**: `border border-border/50`.
- **Elevation**: Saturated shadow `shadow-2xl shadow-primary/5`.

## 4. Execution Workflow

1.  **Sync**: Ensure variables (`--primary`, `--background`) are mapped in `globals.css`.
2.  **Verify**: Audit classes. Searching for `white`, `black`, `gray` or hex codes is a signal of failure.
3.  **Implement**: Apply the Anatomy (`h-14`, `rounded-full`) using Semantic Variables.
4.  **Animate**: Apply Transitions (`transition-all`, `hover:scale-105`, `active:scale-95`).
5.  **Audit**: Switch system between Light/Dark mode. If a component becomes invisible or "funny", the token mapping is wrong.
