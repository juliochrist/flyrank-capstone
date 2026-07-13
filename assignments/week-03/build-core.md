# Build Core — Next.js Migration

**Name:** Julio Christianto
**Week:** 03
**Date:** July 2026

---

## Project Overview

Migrated the FlyRank Capstone from a Vite + React SPA to a Next.js 15 App Router application. The project now uses Server Components by default, has a responsive layout with Navbar and Footer, and is ready for Vercel deployment.

---

## Folder Structure

```
flyrank-capstone/
├── app/
│   ├── globals.css          # Tailwind v4 with design tokens
│   ├── layout.tsx            # Root layout (Navbar + Footer + metadata)
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── projects/page.tsx     # Projects page
│   ├── contact/page.tsx      # Contact page
│   ├── settings/page.tsx     # Settings page (uses SettingsForm from src/)
│   └── health/page.tsx       # Health check (fetches JSONPlaceholder)
├── components/
│   ├── Button.tsx            # Reusable button with isLoading + variants
│   ├── Card.tsx              # Card container
│   ├── Container.tsx         # Max-width wrapper
│   ├── Section.tsx           # Section spacing
│   ├── Navbar.tsx            # Sticky nav with active link highlighting
│   └── Footer.tsx            # Footer with links
├── src/
│   ├── components/
│   │   ├── settings/
│   │   │   └── SettingsForm.tsx   # Form logic (preserved from Vite)
│   │   ├── ui/
│   │   │   ├── Button.tsx         # Settings-specific button (preserved)
│   │   │   └── FormField.tsx      # Reusable form field (preserved)
│   │   └── PromptCard.tsx         # AI prompt component (preserved)
│   ├── lib/
│   │   └── validation.ts          # Validation rules (preserved)
│   └── types/
│       └── settings.ts            # Form types (preserved)
├── assignments/               # All assignment documentation preserved
├── .env.example               # Environment variable placeholders
├── .eslintrc.json             # ESLint config (next/core-web-vitals)
├── next.config.ts             # Next.js configuration
├── postcss.config.mjs         # PostCSS with Tailwind v4
└── tsconfig.json              # TypeScript config (Next.js style)
```

---

## Routes

| Route | Type | Description |
|---|---|---|
| `/` | Server | Home page with hero and feature cards |
| `/about` | Server | Stack and approach overview |
| `/projects` | Server | Project cards with status badges |
| `/contact` | Server | Contact information |
| `/settings` | Client | Account settings form (uses SettingsForm) |
| `/health` | Server | Fetches todo from JSONPlaceholder API |

---

## Deployment Steps

1. Push repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel detects Next.js automatically — no configuration needed.
4. Add environment variables in Vercel dashboard (see `.env.example`).
5. Deploy. The build command (`next build`) runs automatically.

---

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_APP_URL` | Public URL of the deployed app |
| `NEXT_PUBLIC_API_URL` | Base URL for API requests |

---

## Health Check Explanation

The `/health` route is a Server Component that:

1. Fetches `https://jsonplaceholder.typicode.com/todos/1` with `cache: "no-store"` to ensure fresh data on every request.
2. Displays the todo title, completed status, and the ISO timestamp of when the fetch occurred.
3. Handles errors with a try/catch block — if the fetch fails, an error message is shown instead of crashing the page.

This pattern validates that server-side data fetching works correctly in the deployed environment.

---

## Responsive Strategy

- **Mobile (375px):** Single column layouts, stacked navigation, full-width cards.
- **Tablet (768px):** Two-column grids for cards, horizontal nav.
- **Desktop (1280px):** Three-column grids, max-width container (6xl = 1152px).
- Tailwind breakpoints: `sm` (640px), `md` (768px), `lg` (1024px).

All layouts use Tailwind's responsive prefixes (`sm:`, `lg:`) and avoid fixed widths.

---

## Lessons Learned

- Server Components require a different mental model — data fetching happens at the top level, not in `useEffect`. This simplifies data flow but requires planning which parts need client interactivity.
- Tailwind v4 with Next.js needs `@tailwindcss/postcss` instead of `@tailwindcss/vite`. The CSS-first `@theme` directive replaces `tailwind.config.ts`.
- `next lint` requires `eslint-config-next`. Vite's eslint plugins are not compatible.
- The Navbar needs `"use client"` because it uses `usePathname()`. All other pages remain Server Components.
- Old `src/` files continue to work with relative imports from `app/`. No need to rewrite working code — Next.js coexists with existing module structures.

---

```
docs: add Phase 3 build-core migration documentation
```
