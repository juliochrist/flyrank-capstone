# Identity Kit

## Overview

This identity kit defines the visual language used across my portfolio and internship projects. It ensures a consistent look and feel whether I'm building a personal site, a FlyRank assignment, or a prototype for TradeIntel. Every color, typeface, and spacing rule documented here reflects intentional choices for readability, accessibility, and a clean developer-focused aesthetic.

---

## Typography

**Heading Font** — Space Grotesk
**Body Font** — Inter

Space Grotesk was chosen for headings because it carries a modern, slightly geometric character that feels technical without being cold. Inter was chosen for body text because it was designed specifically for screen readability — it has generous letter spacing, clear glyph distinctions, and excellent hinting at small sizes. Together they create a clear hierarchy: distinctive headlines paired with highly legible running text.

---

## Color Palette

| Token       | Hex       | Usage                                                        |
| ----------- | --------- | ------------------------------------------------------------ |
| **Primary** | `#2563EB` | Main interactive elements — buttons, links, active states.   |
| **Accent**  | `#3B82F6` | Hover states, secondary highlights, subtle interactive cues. |
| **Background** | `#FAFAFA` | Page background — near-white with a tiny warmth to reduce eye strain. |
| **Text**    | `#111827` | Body and heading text — near-black for maximum contrast.      |
| **Border**  | `#E5E7EB` | Cards, inputs, dividers — light gray that defines edges without competing with content. |

- **Primary (`#2563EB`):** A strong, confident blue that passes WCAG AA on white. Used for primary buttons and navigation links.
- **Accent (`#3B82F6`):** A slightly lighter blue for hover transitions and secondary indicators. Keeps the palette monochromatic and harmonious.
- **Background (`#FAFAFA`):** Off-white base that feels softer than pure white while remaining neutral.
- **Text (`#111827`):** High-contrast dark gray instead of pure black to reduce screen glare while staying accessible.
- **Border (`#E5E7EB`):** Subtle separators that create structure without drawing attention.

---

## Logo / Monogram

The monogram uses the initials **JC** in a minimal, modern lockup.

- **Style:** Clean sans-serif letterforms matching the Space Grotesk geometry.
- **Rounded corners:** All outer corners and inner joint transitions are slightly rounded for approachability.
- **Favicon-ready:** Designed to be recognizable at 16×16px and 32×32px with no fine detail lost.
- **Dark/light mode:** A single-color silhouette that inverts cleanly — dark mark on light backgrounds, light mark on dark backgrounds. No gradient or fill dependency.

---

## Design Principles

1. **Simplicity over decoration** — Every element must earn its place. If it doesn't serve the content or the interaction, remove it.
2. **Readability first** — Typography, line-height, and contrast are never compromised for visual flair.
3. **Consistent spacing** — Use a defined 4px/8px rhythm. Margins and padding follow the same scale across all components.
4. **Accessible color contrast** — All text meets at least WCAG AA (4.5:1 for body, 3:1 for large text). Interactive states are distinguishable without relying solely on color.
5. **Components before custom styling** — Build reusable UI primitives (Button, Card, FormField). Custom one-off styles are only added when a component abstraction doesn't fit.

---

## Style Note

Minimal, modern, and developer-focused. The interface should stay quiet so the projects become the main focus.

---

## Claude / AI Project Standing Instruction

When generating UI, always follow my Identity Kit. Use Space Grotesk for headings, Inter for body text, the defined color palette, clean spacing, rounded corners, accessible contrast, and avoid unnecessary visual effects.

---

## Future Usage

This Identity Kit is the single source of truth for visual decisions across every frontend project:

- **Portfolio** — The personal site uses these tokens for typography, color, and spacing so it remains consistent with the broader brand.
- **FlyRank assignments** — Every week 1–3 deliverable that includes a UI component references this kit. No assignment introduces a new color or font without updating the kit first.
- **TradeIntel** — The TradeIntel prototype follows the same palette and principle set, with any domain-specific additions documented as extensions (not overrides).
- **Future frontend projects** — Any new React, Next.js, or static site starts by importing this identity kit. Custom deviations are documented as intentional exceptions.
