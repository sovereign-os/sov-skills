---
name: ui-ux-mastery
description: Unified State-of-the-Art standard for Professional UI/UX Engineering. Encompasses Design Systems, Motion, Typography, and Structural Modularity.
version: 2.3.0
author: Sovereign OS Agent
tags:
  [
    ui,
    ux,
    design-system,
    typography,
    framer-motion,
    atomic-design,
    responsive,
    tokens,
    state-management,
    copywriting,
  ]
---

# 💎 UI/UX Engineering Mastery (Unified)


## 1. Core Philosophy (The "Why")
A premium experience is a synergy of **Visual Precision**, **Tactile Feedback**, and **Structural Integrity**. We don't just build interfaces; we engineer digital habitats that are predictable, delightful, and mathematically harmonious.

## 2. When to use this skill
This skill is activated when the task requires Unified State-of-the-Art standard for Professional UI/UX Engineering. Encompasses Design Systems, Motion, Typography, and Structural Modularity..
- Detected when the user's intent matches the semantic domain of 💎 UI/UX Engineering Mastery (Unified).
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Revamp & Refactoring Protocols
When revamping, redesigning, or refactoring existing UI:

### 🛡️ The "Feature Parity" Rule

**NEVER delete existing sections or content unless explicitly authorized.**

1.  **Audit Before Action**: Before overwriting a page or component, list all existing sections (e.g., Hero, Features, Testimonials, About, Footer).
2.  **Preserve & Polish**: Your goal is to **upgrade**, not remove. If a section exists (e.g., "Tech Stack"), you must reimplement it with the new design system, not delete it.
3.  **Content Continuity**: Ensure all text, links, and assets (images, icons) from the old version are migrated to the new design.
4.  **Component Mapping**: Map old components to their new "Premium" equivalents (e.g., Old Grid -> New Bento Grid).

### Resource Mapping Matrix
Use this matrix to know exactly which resource solves your current problem:

| Valid Need                          | Target Resource                | Key to Look For            |
| :---------------------------------- | :----------------------------- | :------------------------- |
| "I need a Hero section"             | `ux-intelligence.json`         | `heroStructures`           |
| "I need a Landing Page flow"        | `ux-intelligence.json`         | `landingPageFlows`         |
| "I need a Dashboard layout"         | `ux-intelligence.json`         | `dashboardLayouts`         |
| "I need Admin/Settings modules"     | `ux-intelligence.json`         | `adminModules`             |
| "I need SaaS-specific patterns"     | `ux-intelligence.json`         | `saasPatterns`             |
| "I need a Footer"                   | `ux-intelligence.json`         | `footerStructures`         |
| "I need colors for Fintech"         | `design-intelligence.json`     | `palettes` (id: `fintech`) |
| "I need a specific vibe/mood"       | `typography-intelligence.json` | `pairings`                 |
| "I need animation values"           | `motion-tokens.json`           | `easings` / `durations`    |
| "I need a UI Component (Card, Nav)" | `patterns.json`                | `patterns`                 |

### Design Tokens & System Logic
### 🎨 Holistic Theme Engineering

- **Dual-Mode Semantic Mapping**: Use the `light` and `dark` token sets from `theme-bank.json`. Map these to CSS variables within `@layer base`.
- **Text Layering**: Do not just use `text-foreground`. Use the hierarchy:
  - `primary-text`: Standard high-contrast reading.
  - `secondary-text`: (`muted-foreground`) for sub-headlines/meta.
  - `accent-text`: Only for highlights that pass contrast tests.
- **Interactive States (Buttons/Tabs)**: Move beyond layout. Components MUST use:
  - `hover`: Reference the `components.button.primary-hover` logic from the theme bank.
  - `active`: Apply tactile feedback (scale-95).
  - `tabs`: Use the `indicator` and `active-bg` tokens for clear state visibility.
- **Surface Elevation**: In dark mode, use 5-10% lighter tints for cards/modals to create depth.
- **Contrast Guardrails (CRITICAL)**: Always test `--accent` contrast against `--background`. If the score is < 4.5:1, use `--primary` or add a high-opacity backdrop.

### ✍️ Typography & Rhythm

- **Rhythmic Scale**: All font sizes must follow a modular scale (e.g., Major Third).
- **Golden Ratio Spacing**: Spacing (margin/padding/gap) must follow a 4px or 8px grid system.
- **Pairing Vibe**: Match font-pairings from intelligence to the project's industry (e.g., Serif for Editorial, Geometric for Dev-Tools).

### Interaction & Motion Design
### 🧤 Tactile Feedback

- **Active States**: EVERY button/link must have a `:active` visual (e.g., `scale-95`).
- **Hover Maturity**: Use subtle "lifts" (`y: -2`) or glow effects.
- **Loading UX**: Prioritize **Skeleton Screens** for layout containers. Spinners are for micro-actions only.

### 🎭 Motion Physics (Framer Motion)

- **Spring over Tween**: Use spring physics (`stiffness: 400`, `damping: 30`) for a natural, luxury feel.
- **Spatial Reasoning**: Animations must explain where elements came from (e.g., Sidebar slides from the edge, not fades in place).

### Blueprint Assemblies
Use `ux-intelligence.json` to select the correct architectural blueprint for high-level sections.

### 👑 Sovereign Hero Protocol

- **Constraint**: Must dominate the viewport (90-100vh).
- **Structure**: Select from `heroStructures` in intelligence (e.g., _Visual Anchor_, _SaaS Split_).
- **Mandatory Elements**:
  - **Status Pill**: A small, pulsing badge (e.g., "v2.0 Beta") to signal aliveness.
  - **Optical H1**: Typography that anchors the page. Use `font-display`.
  - **Tactile CTA**: Primary action must have hover/active physics.

### 🚀 Landing Page Architecture (AIDA)

- **Flow**: Follow `landingPageFlows` (e.g., _SaaS Conversion Prime_).
- **Key Principle**: The scroll journey is a narrative.
  1.  **Attention**: Hero (Value Prop).
  2.  **Interest**: Feature Grid / Problem agitation.
  3.  **Desire**: Social Proof / interactive demo.
  4.  **Action**: Final CTA / Pricing.

### 🗺️ The Footer Protocol

- **Function**: The "Map of the World". Never treat it as an afterthought.
- **Structure**: Select from `footerStructures` (e.g., _Mega Sitemap_, _Minimalist Brand_).
- **Requirements**:
  - **Visual Separation**: Must have a distinct background (e.g., `bg-muted/30` or border-top).
  - **Brand Echo**: Repeat the logo/wordmark to close the loop.
  - **Legals**: Privacy Policy, Terms, and Copyright are mandatory for trust.

### Structural Engineering
Maintain a strict component hierarchy to ensure scalability:

1.  **Atoms**: Purely presentational HTML primitives (Button, Input).
2.  **Molecules**: Combinations of atoms (SearchField = Input + Icon).
3.  **Organisms**: Functional UI sections (Navbar, Sidebar).
4.  **Templates**: Layout scaffolds (DashboardLayout).
5.  **Pages**: The "Page" component where logic/data orchestration lives.

### Robust State Architecture
Do not just build the "Happy Path". Every data-driven component MUST account for:

1.  **Ideal State**: The happy path (fully populated data).
2.  **Empty State**: First-run experience. Must be educational and actionable (e.g., "No Projects yet" -> with a "Create Project" button). Never use dead-ends like "No data found".
3.  **Loading State**: Use animated **Skeletons** that match the final layout. Avoid layout shifts (CLS).
4.  **Error State**: Helpful recovery paths. "Try again" buttons and human-readable context, not red stack traces.

### Voice & Tone
- **No Lorem Ipsum**: Use realistic mock data from the start to test layout stress.
- **Human-Centric**: Use "You" and "We". Avoid passive voice.
- **Action-Oriented**: Buttons should say what they do (e.g., "Create Project" instead of "Submit").
- **Conciseness**: Cut words by 50% in the second draft.

### Responsive Strategy
- **Mobile First**: Design for the smallest screen first, then scale up.
- **Breakpoint Intelligence**: Subtract sidebar/persistent UI widths when calculating grid columns.
- **No-Clipping Rule**: Content must NEVER touch the edge of the viewport. Minimum 24px (1.5rem) safety zone.

### Quality Audit
- [ ] **Contrast Audit**: Does it pass WCAG AA (4.5:1)?
- [ ] **Tactility Check**: Do all interactive elements respond to touch/click?
- [ ] **Dual-Mode Check**: Does it look "Premium" in both Light and Dark modes?
- [ ] **Motion Check**: Is `prefers-reduced-motion` respected?
- [ ] **Token Audit**: Are there any hardcoded Hex/Pixels?
- [ ] **State Check**: Did you style the Empty and Error states?

## 4. Maintenance
Design is not just decoration; it is persuasion. Apply these principles to drive action:

### 🧠 The Value Stack

Don't just list features; map them to benefits.

- **Feature**: "5GB Storage" (The What) vs **Benefit**: "Store 1,000 photos safely" (The Why).
- **Agitation**: Show you understand the user's pain before offering the solution.

### 🔋 The Trust Battery

A user will not convert if their "Trust Battery" is empty. Charge it with:

- **Social Proof**: "Used by [Company]..." logos above the fold.
- **Objection Handling**: FAQ section addressing pricing, refunds, and support.
- **Risk Reversal**: "30-day money-back guarantee" or "No credit card required".

### 📊 Maintenance & Metrics

- **Performance**: LCP must be < 2.5s. Speed is a feature.
- **Conversion Rate (CR)**: Target > 2%. If lower, A/B test Headlines first, then CTAs.
