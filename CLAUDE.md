# Project Rules

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- React Hook Form for all form state and validation

## Component Structure

- Pages live in `src/pages/` and only handle layout
- Feature logic lives in `src/components/<feature>/`
- Reusable UI primitives live in `src/components/ui/`
- Shared validation rules and constants live in `src/lib/`
- Form value types live in `src/types/`

## Forms

- Always use React Hook Form — never manual `useState` per field
- Extract validation rules to `src/lib/validation.ts` with typed error messages
- Use the `FormField` + `TextInput` components for consistent labels, errors, and `aria-*` attributes
- Group related fields (e.g. password change) in a `<fieldset>` with `<legend>`
- Disable submit buttons while `isSubmitting` and show async feedback

## Accessibility

- Every input must have a matching `id` and label `htmlFor`
- Wire `aria-invalid` and `aria-describedby` to error/hint elements
- Use `role="alert"` for errors and `aria-live="polite"` for success messages

## Coding Style

- Use functional components with strict TypeScript
- Keep components small and single-purpose
- Match existing Tailwind tokens: `slate` for neutrals, `indigo` for primary actions

## Git

- Follow Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`)

## Formatting

- Use Prettier and ESLint — run `npm run build` before committing
