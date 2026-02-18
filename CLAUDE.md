# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Dev server with Turbopack (http://localhost:3000)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint via Next.js
```

No test framework is configured. No type-check script exists — run `npx tsc --noEmit` to check types manually.

## Architecture

**Stack**: Next.js 15 (App Router) + React 19 + TypeScript 5 + Tailwind CSS v4

**Single-page marketing site** — one route (`src/app/page.tsx`) that composes section components. Navigation is scroll-based using `scrollIntoView` with section `id` attributes matching `NAVIGATION.sections` in `src/lib/constants.ts`.

### Key directories

- `src/components/sections/` — Page-level sections (Header, Hero, HowItWorks, Benefits, FAQ, Contact, Footer)
- `src/components/ui/` — Reusable primitives (Button, Container, Accordion, AppStoreButton)
- `src/lib/constants.ts` — All website copy and content data, using `as const` assertions
- `src/app/globals.css` — Tailwind import, CSS custom properties, custom utility classes

### Component conventions

- Named exports for components (e.g., `export function Hero()`), default export only for `page.tsx`
- `'use client'` directive only where hooks are needed (Accordion, Header, Contact) — everything else is a Server Component
- Props typed with inline TypeScript interfaces
- `Container` component supports a polymorphic `as` prop (`div | section | article | main`)

### Styling

- **Tailwind CSS v4** with CSS-first config (no `tailwind.config.js` — theme defined via `@theme inline` in `globals.css`)
- Brand colors exposed as CSS custom properties (`:root`) and as Tailwind tokens (`--color-delgoo-blue`, `--color-delgoo-gold`, etc.)
- Custom font: NeueMontreal loaded via `@font-face` in globals.css, applied with `.font-neuemontreal` class
- Geist Sans/Mono loaded via `next/font/google` in `layout.tsx`
- Custom utility classes in globals.css: `.solid-text`, `.glass`, `.shadow-soft/medium/large`, `.hover-lift`, `.bg-primary/secondary/accent`, `.bg-pattern-dots/grid/hex`, `.geometric-bg`
- Dark mode: system-preference-based (`prefers-color-scheme: dark`), inverts gray scale

### Path alias

`@/*` → `./src/*` (configured in `tsconfig.json`)

### No backend

No API routes, no data fetching, no environment variables. All content is static in `constants.ts`.
