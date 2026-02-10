---
name: logo-mastery
description: Advanced guide for creating professional, scalable, and impactful logos.
version: 1.0.0
author: Sovereign OS Agent
tags: [design, branding, logo, aesthetics, svg]
---

# 🎨 Logo Mastery


## 1. Core Philosophy (The "Why")
A logo is not just an image; it is the visual anchor of a brand's identity. It must be **Simple**, **Memorable**, **Timeless**, **Versatile**, and **Appropriate**. We reject generic templates in favor of geometrically sound, conceptually deep, and mathematically balanced designs.

## 2. When to use this skill
This skill is activated when the task requires Advanced guide for creating professional, scalable, and impactful logos..
- Detected when the user's intent matches the semantic domain of 🎨 Logo Mastery.
- Triggered by technical requirements or explicit architectural requests.

## 3. How to use it

### Capabilities & Rules
### Rule 1: The Golden Principles
1.  **Simplicity**: Can it be drawn from memory in 5 seconds? If not, it's too complex.
2.  **Scalability**: Must look perfect at 16x16px (Favicon) and 10x10 meters (Billboard).
3.  **Monochrome Test**: Must work in pure black and white. No reliance on gradients for structure.

### Rule 2: Geometric Construction
- **Grid Systems**: Always use a construction grid (circles, squares, golden ratio) to align elements.
- **Negative Space**: Utilize negative space to create dual meanings (e.g., FedEx arrow).
- **Balance**: Ensure visual weight is distributed evenly (Symmetrical or Asymmetrical balance).

### Rule 3: Color Psychology
- **Blue**: Trust, Professionalism (Tech, Finance)
- **Red**: Energy, Passion, Action (Food, Sports)
- **Black/White**: Luxury, Sophistication, Minimalism
- **Green**: Growth, Health, Nature
- **Restriction**: Max 2-3 primary colors.

### Rule 4: Output Format
- **Primary**: SVG (Vector) is mandatory.
- **Code Cleanliness**: SVG code must be optimized (minimized paths, no excess metadata).

### Implementation Workflow
### Phase 1: Discovery
- **Brand Personality**: Is it Playful or Serious? Modern or Classic?
- **Keywords**: Define 3 core adjectives (e.g., "Fast", "Secure", "Global").

### Phase 2: Conceptualization
- **Metaphor Mapping**: Connect keywords to visual symbols (e.g., Security -> Shield/Lock/Hexagon).
- **Wordmark vs. Logomark**: Decide on Text-only, Icon-only, or Combination.
- **Typography**: Choose a typeface that matches the personality (Serif vs. Sans-Serif).

### Phase 3: Construction (SVG)
1.  **ViewBox**: Standardize on `0 0 100 100` or `0 0 512 512`.
2.  **Shapes**: Use primitive shapes (`<circle>`, `<rect>`, `<path>`) combined.
3.  **Gradients**: Use `<defs>` and `<linearGradient>` for "Wow" factor (only if monochrome test passes).

### Phase 4: Polish
- **Optical Correction**: Adjust alignment based on how it *looks*, not just the math.
- **Contrast Check**: Ensure distinct visibility on Dark and Light backgrounds.

### Advanced Design Theory
### 5.1 The Laws of Minimalism (Reductionism)
"Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."
- **The Squint Test**: If you squint, does the shape hold up?
- **Single Trick Pony**: A logo should have ONE clever element, not two. (e.g., The arrow in FedEx). Do not combine a "lightbulb" AND a "brain" AND a "gear". Choose one metaphor.

### 5.2 Typography & Letterforms
- **Geometric Sans**: (Futura, circular) = Modern, Friendly, Tech (Google, Spotify).
- **Humanist Sans**: (Gill Sans) = Approachable, Human, corporately warm.
- **Serif**: (Garamond, Bodoni) = Tradition, Trust, Authority, Luxury (Vogue, Rolex).
- **Kerning is King**: Bad spacing kills professional vibes.
  - *Tip*: Space capitals (AV) tighter than straight letters (HI).
  - *Tip*: Logos usually need "looser" tracking than body text to survive reduction.

### 5.3 Gestalt Principles (Visual Psychology)
- **Closure**: The brain fills in missing gaps (e.g., IBM striped logo). Use broken lines to imply shape without drawing it.
- **Figure/Ground**: The relationship between positive (shape) and negative (background) space.
- **Proximity**: Elements placed close together are perceived as a group.

### Reference & Inspiration
- **Minimalist Prompt Library**: See `examples/minimalist_prompts.json` for a collection of high-quality prompts derived from premium minimalist design patterns (Geometric, Fluid, Monogram). Use these prompts as a baseline for image generation or vector construction.

## 4. Maintenance
- **Storage**: Store source SVGs in `.agent/branding/` or `assets/logo/`.
- **Naming**: `logo-primary.svg`, `logo-monochrome.svg`, `logo-icon.svg`.
