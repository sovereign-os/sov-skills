---
description: Automated Professional Logo Creation Protocol
---

# 🎨 Brand Logo Workflow

This workflow utilizes the `logo-design-mastery` skill to generate professional quality logos using high-fidelity prompt engineering and Hipster persona logic.

## 1. Sequence

1.  **Persona Shift (The Hipster & The Hacker)**:
    - **Vibe Translation (Hipster)**: Convert user keywords using the `logo-design-mastery` Dictionary. NEVER pass raw adjectives.
    - **Technical Blueprinting (Hacker)**: Define the logo as a **'Single Minimalist Glyph'**.
    - **Geometric Constraint**: Force the engine to use Boolean operations (Union, Subtract, Intersect). Focus on **"Cutting"** and **"Subtracting"** shapes (Subtraction Logic) rather than "Painting" illustrations.
    - **Specific DNA**: Encode 'Chunky' and 'Bold' geometry to ensure the 'Squint Test' passes at 16px. Use the **"Unfinished" Logic** to suggest shapes rather than drawing them completely.
    - Analyze User Input (`[Name]`).
    - Convert the request into a **Professional Design Brief**.

2.  **Brief Expansion (Mega-Prompt Construction - Hacker Precision)**:
    - Use the following template to build the prompt for `generate_image`, ensuring **The Hacker**'s geometric rules are enforced:

    > **Subject**: Professional minimalist vector logo for [Name].
    >
    > **Core Concept**: [Translated Design Language Keywords].
    >
    > **Visual DNA**: Single solid geometric icon, mathematical precision, balanced negative space.
    >
    > **Art Style**: Swiss Modernism, Flat Design, Vector, No 3D, No Gradients.
    >
    > **Aesthetic**: Clean, surgical precision, high-end SaaS branding.
    >
    > **Constraint Enforcement**: No shadows, no messy details, no photorealistic elements, no 3D effects, no raster textures, no text inside the icon.

3.  **Execution (Generation)**:
    - Call the `generate_image` tool with the expanded prompt.
    - Save the resulting image to the current workspace's assets or `.agent/branding/`.

4.  **Verification**:
    - Ensure the logo passes the Monochrome and Squint tests as defined in `logo-design-mastery`.

## 2. Usage Pattern

Trigger: `/brand-logo [Name] [Keyword]`

**Step-by-Step Example:**
Input: `/brand-logo Nexus Modular`

1. **Hipster Logic**: "Nexus" is the brand. "Modular" becomes "Interlocking hexagonal grid".
2. **Prompt**:
   - Subject: Professional minimalist vector logo for Nexus.
   - Core Concept: Interlocking hexagonal grid representing modular connectivity.
   - Visual DNA: Single solid geometric icon, mathematical precision, balanced negative space.
   - Art Style: Swiss Modernism, Flat Design, Vector, No 3D, No Gradients.
   - Aesthetic: Clean, surgical precision, high-end SaaS branding.
   - Constraint Enforcement: No shadows, no messy details, no photorealistic elements.

## 3. Command Definition

```bash
# Workflow Trigger
/brand-logo [Name] [Keyword]
```
