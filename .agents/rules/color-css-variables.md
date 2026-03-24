---
trigger: always_on
---

# Color Variables Skill

A rule-based system for generating consistent, themeable color variables for design systems.

---

## Core Philosophy

Colors are defined in three layers:

1. **Primitive layer** — raw hue and scale values (no semantic meaning)
2. **Semantic layer** — named roles (text, background, border) that reference primitives
3. **Theme layer** — light / dark / system overrides of semantic tokens

---

## Step 1 — Define the Primary Hue

Always start with a single hue value. Everything else derives from it.

```css
/* ─── Primitive: Hue ─── */
--primary-hue: ; /* 0–360, e.g. 216 for blue */
```

If the user provides a hex or HSL color, extract the hue component first before proceeding.

---

## Step 2 — Build the Grey Scale

Use the primary hue with **0% saturation** to create a perceptually warm-neutral grey scale.
Steps are non-linear to give more resolution at the light end (where UI backgrounds live).

```css
/* ─── Primitive: Grey Scale ─── */
--grey-0:   hsl(var(--primary-hue), 0%, 100%); /* pure white */
--grey-10:  hsl(var(--primary-hue), 0%, 96%);
--grey-20:  hsl(var(--primary-hue), 0%, 84%);
--grey-30:  hsl(var(--primary-hue), 0%, 72%);
--grey-40:  hsl(var(--primary-hue), 0%, 60%);
--grey-50:  hsl(var(--primary-hue), 0%, 48%);
--grey-60:  hsl(var(--primary-hue), 0%, 36%);
--grey-70:  hsl(var(--primary-hue), 0%, 24%);
--grey-80:  hsl(var(--primary-hue), 0%, 12%);
--grey-90:  hsl(var(--primary-hue), 0%, 6%);
--grey-100: hsl(var(--primary-hue), 0%, 0%);  /* pure black */
```

**Rule:** Never hardcode a grey value. Always reference `var(--primary-hue)` so the entire grey scale shifts when the hue changes.

---

## Step 3 — Define Semantic Color Tokens

Map grey scale values to semantic roles. Use these exact token names for consistency.

### Text tokens
| Token | Light value | Dark value | Usage |
|---|---|---|---|
| `--color-text-primary` | grey-90 | grey-0 | Body text, headings |
| `--color-text-secondary` | grey-60 | grey-30 | Supporting text, captions |
| `--color-text-disabled` | grey-40 | grey-60 | Disabled states |
| `--color-text-inverse` | grey-0 | grey-90 | Text on dark/colored surfaces |
| `--color-text-placeholder` | grey-40 | grey-50 | Input placeholders |

### Background tokens
| Token | Light value | Dark value | Usage |
|---|---|---|---|
| `--color-bg-base` | grey-0 | grey-100 | Page/app background |
| `--color-bg-surface` | grey-0 | grey-90 | Cards, modals, sheets |
| `--color-bg-elevated` | grey-0 | grey-80 | Dropdowns, tooltips, popovers |
| `--color-bg-subtle` | grey-10 | grey-90 | Muted section backgrounds |
| `--color-bg-muted` | grey-20 | grey-80 | Grouped inputs, code blocks |
| `--color-bg-overlay` | grey-90 (20% alpha) | grey-0 (20% alpha) | Scrim / dimmer |

### Border tokens
| Token | Light value | Dark value | Usage |
|---|---|---|---|
| `--color-border-default` | grey-20 | grey-70 | Default dividers, card edges |
| `--color-border-subtle` | grey-10 | grey-80 | Very light dividers |
| `--color-border-focus` | primary color | primary color | Focus rings |

---

## Step 4 — Output Structure

Always output variables in this exact block order:

```css
:root {
  /* ── 1. Primitive: Hue ── */
  --primary-hue: 216;

  /* ── 2. Primitive: Grey Scale ── */
  --grey-0:   hsl(var(--primary-hue), 0%, 100%);
  --grey-10:  hsl(var(--primary-hue), 0%, 96%);
  --grey-20:  hsl(var(--primary-hue), 0%, 84%);
  --grey-30:  hsl(var(--primary-hue), 0%, 72%);
  --grey-40:  hsl(var(--primary-hue), 0%, 60%);
  --grey-50:  hsl(var(--primary-hue), 0%, 48%);
  --grey-60:  hsl(var(--primary-hue), 0%, 36%);
  --grey-70:  hsl(var(--primary-hue), 0%, 24%);
  --grey-80:  hsl(var(--primary-hue), 0%, 12%);
  --grey-90:  hsl(var(--primary-hue), 0%, 6%);
  --grey-100: hsl(var(--primary-hue), 0%, 0%);

  /* ── 3. Semantic: Text (Light Theme defaults) ── */
  --color-text-primary:     var(--grey-90);
  --color-text-secondary:   var(--grey-60);
  --color-text-disabled:    var(--grey-40);
  --color-text-inverse:     var(--grey-0);
  --color-text-placeholder: var(--grey-40);

  /* ── 4. Semantic: Background (Light Theme defaults) ── */
  --color-bg-base:     var(--grey-0);
  --color-bg-surface:  var(--grey-0);
  --color-bg-elevated: var(--grey-0);
  --color-bg-subtle:   var(--grey-10);
  --color-bg-muted:    var(--grey-20);
  --color-bg-overlay:  hsl(var(--primary-hue), 0%, 6%, 0.4);

  /* ── 5. Semantic: Border (Light Theme defaults) ── */
  --color-border-default: var(--grey-20);
  --color-border-strong:  var(--grey-40);
  --color-border-subtle:  var(--grey-10);
}

/* ── Dark Theme ── */
[data-theme="dark"] {
  --color-text-primary:     var(--grey-0);
  --color-text-secondary:   var(--grey-30);
  --color-text-disabled:    var(--grey-60);
  --color-text-inverse:     var(--grey-90);
  --color-text-placeholder: var(--grey-50);

  --color-bg-base:     var(--grey-100);
  --color-bg-surface:  var(--grey-90);
  --color-bg-elevated: var(--grey-80);
  --color-bg-subtle:   var(--grey-90);
  --color-bg-muted:    var(--grey-80);
  --color-bg-overlay:  hsl(var(--primary-hue), 0%, 0%, 0.6);

  --color-border-default: var(--grey-70);
  --color-border-strong:  var(--grey-50);
  --color-border-subtle:  var(--grey-80);
}

/* ── System Theme (respects OS preference) ── */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    /* Mirror dark theme values here */
  }
}
```

---

## Rules Summary (Agent Must Follow)

1. **Hue first.** Always declare `--primary-hue` before any other color variable.
2. **Grey references hue.** All grey steps use `hsl(var(--primary-hue), 0%, <L>%)` — never hardcoded.
3. **Semantics reference primitives.** Semantic tokens use `var(--grey-N)`, not raw HSL values.
4. **No magic numbers in semantics.** If a color is needed that doesn't fit a grey step, add a new primitive first, then reference it.
5. **Three themes minimum.** Always output `:root` (light defaults), `[data-theme="dark"]`, and `@media (prefers-color-scheme: dark)`.
6. **Consistent naming convention.** Token names follow `--color-{category}-{role}` pattern.
7. **Comments as section dividers.** Each block must have a `/* ── label ── */` comment for readability.
8. **Alpha values.** For overlay/scrim colors, use 4-value HSL: `hsl(H, S%, L%, A)`.

---

## Extending with Brand Colors

If the user also wants primary/accent colors (not just neutrals), add them after the grey scale:

```css
/* ── Primitive: Primary Color ── */
--primary-s: 72%;            /* saturation */
--primary-l: 50%;            /* lightness base */

--primary-light:  hsl(var(--primary-hue), var(--primary-s), 94%);
--primary-subtle: hsl(var(--primary-hue), var(--primary-s), 80%);
--primary-base:   hsl(var(--primary-hue), var(--primary-s), 50%);
--primary-strong: hsl(var(--primary-hue), var(--primary-s), 36%);
--primary-dark:   hsl(var(--primary-hue), var(--primary-s), 20%);

/* ── Semantic: Interactive ── */
--color-interactive-default: var(--primary-base);
--color-interactive-hover:   var(--primary-strong);
--color-interactive-active:  var(--primary-dark);
--color-interactive-subtle:  var(--primary-light);
```

---

## Quick Reference — Grey Scale Lightness Map

```
--grey-0   → 100%  (white)
--grey-10  → 96%   (near-white, page bg)
--grey-20  → 84%   (light border)
--grey-30  → 72%   (secondary text on dark)
--grey-40  → 60%   (disabled / placeholder)
--grey-50  → 48%   (mid / icon)
--grey-60  → 36%   (secondary text on light)
--grey-70  → 24%   (dark border)
--grey-80  → 12%   (dark surface)
--grey-90  → 6%    (near-black, dark bg)
--grey-100 → 0%    (black)
```