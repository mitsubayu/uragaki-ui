# Uragaki UI - Copilot Instructions

## What is this project?

Uragaki UI (`@yu-izumoto/uragaki-ui`) is a hand-drawn / sketchy UI component library for React. It wraps shadcn/ui (Radix UI) components with rough.js SVG overlays to create a paper-prototyping aesthetic.

## Tech Stack

- React 19 + TypeScript 5.8
- Tailwind CSS v4 (oklch color tokens)
- rough.js (hand-drawn SVG rendering)
- Radix UI (via shadcn/ui) for accessible primitives
- pnpm package manager

## Project Structure

- `src/components/ui/` - Base shadcn/ui components (do not edit directly)
- `src/components/uragaki/` - Uragaki-wrapped components (main library code)
- `src/components/uragaki/index.ts` - Public API exports
- `src/lib/rough-helpers.ts` - rough.js utility functions
- `src/lib/uragaki-colors.ts` - Theme-aware color hook
- `src/components/uragaki/uragaki-border.tsx` - Core rough.js border wrapper

## Component Pattern

All Uragaki components follow this pattern:
1. Wrap a shadcn/ui component with `UragakiBorder` or custom rough.js SVG
2. Apply hand-drawn fonts (`--font-uragaki-body`, `--font-uragaki-heading`)
3. Export with `Uragaki` prefix (e.g., `UragakiButton`, `UragakiCard`)
4. Accept `roughness?: number` (default: 2.6) and `seed?: number` props
5. SVG overlays must use `pointer-events: none`

## Naming Conventions

- Files: `uragaki-{name}.tsx` (kebab-case)
- Exports: `Uragaki{Name}` (PascalCase)
- Hooks: `use{Name}` (camelCase)

## Coding Guidelines

- Use Tailwind CSS utility classes for styling
- Design tokens are CSS custom properties in oklch format
- Colors come from `useUragakiColors()` hook for theme awareness
- All components support dark mode via `ThemeProvider`
- Do not modify files in `src/components/ui/` - create uragaki wrappers instead
- Always support `seed` prop for consistent rough.js rendering
- Library exports ESM only

## Adding New Components

1. Add base component: `npx shadcn@latest add {component}`
2. Create wrapper: `src/components/uragaki/uragaki-{name}.tsx`
3. Export from: `src/components/uragaki/index.ts`
4. Add docs page: `src/pages/components/{name}.tsx`

## Rough.js Defaults

```typescript
roughness: 2.6, bowing: 1.8, strokeWidth: 2
fillStyle: "hachure", hachureAngle: -41, hachureGap: 5
```

## Usage Example

```tsx
import { ThemeProvider, UragakiButton, UragakiCard, UragakiCardContent, UragakiInput } from "@yu-izumoto/uragaki-ui";
import "@yu-izumoto/uragaki-ui/styles.css";

<ThemeProvider defaultTheme="system">
  <UragakiCard>
    <UragakiCardContent className="space-y-4 p-6">
      <UragakiInput placeholder="Enter text" borderStyle="underline" />
      <UragakiButton variant="default">Submit</UragakiButton>
    </UragakiCardContent>
  </UragakiCard>
</ThemeProvider>
```
