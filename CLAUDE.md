# Uragaki UI - Claude Code Instructions

## Project Overview

Uragaki UI (`uragaki-ui`) is a hand-drawn / sketchy UI component library built on **shadcn/ui + rough.js** for React. It wraps shadcn/ui (Radix UI) components with rough.js SVG overlays to create a paper-prototyping aesthetic.

## Tech Stack

- **React 19** + **TypeScript 5.8**
- **Vite** (dev server) + **tsup** (library build)
- **Tailwind CSS v4** (utility-first styling, oklch color tokens)
- **rough.js** (hand-drawn SVG rendering)
- **Radix UI** (accessible component primitives, via shadcn/ui)
- **pnpm** (package manager)
- **Storybook 8** (component documentation)

## Directory Structure

```
src/
├── components/
│   ├── ui/              # Base shadcn/ui components (do not edit directly)
│   ├── uragaki/         # Uragaki-wrapped components (main library source)
│   │   ├── __stories__/ # Storybook stories
│   │   ├── index.ts     # Public exports
│   │   └── uragaki-*.tsx
│   └── docs/            # Documentation site components
├── hooks/               # Custom React hooks
├── lib/                 # Utilities (rough-helpers, uragaki-colors, utils)
├── pages/               # Documentation pages (React Router)
├── index.css            # Global styles & design tokens
└── uragaki-styles.css   # Exported library styles
```

## Architecture

### Component Wrapping Pattern

Every Uragaki component follows this pattern:

1. Import the base shadcn/ui component from `@/components/ui/`
2. Wrap it with `UragakiBorder` (or custom SVG drawing via rough.js)
3. Apply hand-drawn font families
4. Export with `Uragaki` prefix

Two main approaches:
- **UragakiBorder wrapper**: Components wrapped in `<UragakiBorder>` for rough.js rectangle/ellipse borders
- **Custom SVG overlay**: Components with custom rough.js drawing (checkbox, input, dialog close button, etc.)

### Key Files

- `src/components/uragaki/uragaki-border.tsx` - Core border wrapper using rough.js
- `src/lib/rough-helpers.ts` - rough.js utility functions and defaults
- `src/lib/uragaki-colors.ts` - Theme-aware color hook (`useUragakiColors`)
- `src/components/uragaki/theme-provider.tsx` - Dark/light mode management
- `src/components/uragaki/index.ts` - Public API exports

### Rough.js Defaults

```typescript
roughness: 2.6
bowing: 1.8
strokeWidth: 2
fillStyle: "hachure"
hachureAngle: -41
hachureGap: 5
```

### Color System

Colors use oklch format via `useUragakiColors()` hook. The hook returns theme-aware colors that switch between light and dark palettes based on `ThemeProvider`.

## Coding Conventions

### Naming

- Component files: `uragaki-{name}.tsx` (kebab-case)
- Component exports: `Uragaki{Name}` (PascalCase with Uragaki prefix)
- Hooks: `use{Name}` (camelCase)
- All components mirror the shadcn/ui API with the `Uragaki` prefix

### Common Props Pattern

Most components that use rough.js accept:
```typescript
roughness?: number  // default: 2.6
seed?: number       // for consistent rendering
```

### Styling

- Use Tailwind CSS utility classes
- Design tokens are CSS custom properties in oklch format
- Font families: `--font-uragaki-body`, `--font-uragaki-heading`, `--font-uragaki-accent`
- SVG overlays always use `pointer-events: none`

### When Adding New Components

1. Add the base shadcn/ui component: `npx shadcn@latest add {component}`
2. Create `src/components/uragaki/uragaki-{name}.tsx`
3. Follow the wrapping pattern (UragakiBorder or custom SVG)
4. Export from `src/components/uragaki/index.ts`
5. Create a documentation page in `src/pages/components/`
6. Add a Storybook story in `src/components/uragaki/__stories__/`

## Commands

```bash
pnpm dev              # Start dev server
pnpm build            # Full build (TypeScript + Vite)
pnpm build:lib        # Build library with tsup
pnpm storybook        # Start Storybook dev server
pnpm build-storybook  # Build Storybook static files
pnpm lint             # Run ESLint
pnpm deploy:pages     # Deploy to GitHub Pages
pnpm publish:npm      # Publish to npm registry
```

## Important Notes

- The `src/components/ui/` directory contains base shadcn/ui components. Do not modify these directly; create uragaki wrappers instead.
- All rough.js rendering uses seed-based randomization for stable output. Always support the `seed` prop.
- SVG overlays must use `pointer-events: none` to preserve component interactivity.
- The library exports ESM only. TypeScript declarations are included.
- Peer dependencies (react, tailwindcss, roughjs, radix-ui, etc.) are not bundled.
