# The Prompt Ladder

**Name:** Julio Christianto
**Week:** 02
**Date:** July 2026
**Task:** Build a professional React Settings Page

---

## Baseline (Weak Prompt)

### Prompt

```
Build a settings page.
```

### Output

The AI produces a single file:

```tsx
import { useState } from "react";

export default function SettingsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1>Settings</h1>
      <form onSubmit={handleSave}>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Save</button>
      </form>
      {saved && <p>Saved!</p>}
    </div>
  );
}
```

No validation, no accessibility, no TypeScript types, no loading state, no error handling. The success message is a plain `<p>` with no `aria-live`. The form has 2 fields instead of the 5 needed for a settings page with password change.

---

## Version 1 — Clear Goal

**Layer:** Clear Goal

### Prompt

```
Build a settings page for a web app.

The user must:
- Update their full name, email, current password, new password, and confirm new password
- See validation errors when fields are empty, email format is wrong, or passwords don't match
- See a success message after saving

Use React and TypeScript.
```

### Output

```tsx
import { useState } from "react";

type FormValues = {
  fullName: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export default function SettingsPage() {
  const [values, setValues] = useState<FormValues>({ ... });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [success, setSuccess] = useState(false);

  function validate() { /* required checks, email includes "@" */ }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSuccess(true);
  }

  return ( /* form with 5 fields, validation errors, success banner */ );
}
```

### What Changed

Added specific features (5 fields, validation rules, success feedback) and the tech requirements (React + TypeScript).

### What Improved

The output includes all 5 form fields, a typed `FormValues` interface, a validation function that checks required fields and email format, and a success banner. The form structure matches the spec.

### What Still Failed

Single monolithic file. No accessibility attributes (`aria-invalid`, `aria-describedby`, `role="alert"`). Labels and inputs are not programmatically linked (no `htmlFor`/`id`). No loading or disabled state on the submit button. The success message has no `aria-live` region.

### What I Would Try Next

Add accessibility requirements to force proper ARIA attributes and linked labels.

---

## Version 2 — Audience

**Layer:** Audience

### Prompt

```
Build a settings page for a web app.

The user must:
- Update their full name, email, current password, new password, and confirm new password
- See validation errors when fields are empty, email format is wrong, or passwords don't match
- See a success message after saving

Use React and TypeScript.

The code will be reviewed by startup founders and engineering managers evaluating my frontend engineering skills.
```

### Output

The output is nearly identical to Version 1. The AI adds slightly more polished Tailwind classes (rounded corners, better spacing) and uses more descriptive placeholder text. The code structure and quality remain the same.

### What Changed

Added the audience description.

### What Improved

Minor visual polish in styling and placeholder text.

### What Still Failed

This change didn't improve the output much. Telling the AI "startup founders and engineering managers are watching" gives no concrete technical constraints. The AI cannot translate "impress a founder" into "add aria-invalid attributes" or "use React Hook Form" without explicit instruction. The audience layer is only useful when paired with specifics about what that audience values.

### What I Would Try Next

Provide the project's actual tech stack and folder conventions so the AI can match existing code patterns.

---

## Version 3 — Project Context

**Layer:** Project Context

### Prompt

```
Build a settings page for a web app.

The user must:
- Update their full name, email, current password, new password, and confirm new password
- See validation errors when fields are empty, email format is wrong, or passwords don't match
- See a success message after saving

This project uses:
- React 19 + TypeScript + Vite
- Tailwind CSS v4 (via @tailwindcss/vite)
- React Hook Form for all form state
- Separate folders for pages/ (layout), components/ (feature logic), components/ui/ (primitives), lib/ (validation), types/ (form values)
```

### Output

```tsx
// types/settings.ts
export type SettingsFormValues = {
  fullName: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};
```

```ts
// lib/validation.ts
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MIN_PASSWORD_LENGTH = 8;
export const settingsValidationMessages = {
  required: "This field is required",
  email: "Enter a valid email address",
  minPassword: `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
  passwordMismatch: "Passwords do not match",
};
```

```tsx
// components/settings/SettingsForm.tsx
import { useForm } from "react-hook-form";
import type { SettingsFormValues } from "../../types/settings";

export function SettingsForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<SettingsFormValues>({
    defaultValues: { fullName: "", email: "", currentPassword: "", newPassword: "", confirmPassword: "" },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* fields using register() */}
    </form>
  );
}
```

### What Changed

Added the project's tech stack and folder conventions.

### What Improved

The AI now uses React Hook Form instead of manual `useState`. Files are split across the correct folders (types, lib, components). Validation rules are extracted into a shared module. The code matches the project's established patterns.

### What Still Failed

No reusable UI components — form fields are still written inline. No accessibility attributes. No async submit handling. No loading state. Password confirmation uses basic logic without cross-field validation.

### What I Would Try Next

Specify the exact file structure and component hierarchy I expect.

---

## Version 4 — Output Format

**Layer:** Output Format

### Prompt

```
Build a settings page for a web app.

The user must:
- Update their full name, email, current password, new password, and confirm new password
- See validation errors when fields are empty, email format is wrong, or passwords don't match
- See a success message after saving

This project uses React 19 + TypeScript + Vite + Tailwind CSS v4 + React Hook Form.

Create these files:
- src/types/settings.ts — SettingsFormValues type
- src/lib/validation.ts — EMAIL_PATTERN, MIN_PASSWORD_LENGTH, settingsValidationMessages
- src/components/ui/FormField.tsx — FormField wrapper + TextInput component
- src/components/ui/Button.tsx — reusable submit button with loading state
- src/components/settings/SettingsForm.tsx — form logic using RHF
- src/pages/SettingsPage.tsx — layout page with header and card

Use FormField for every form field. Use Button for the submit action.
```

### Output

All 6 specified files are created. The form uses `FormField` and `Button` components. The structure matches the specification exactly.

```tsx
// components/ui/FormField.tsx
export function FormField({ id, label, error, hint, children }) { /* wrapper */ }
export function TextInput({ id, hasError, describedBy, ...props }) { /* styled input */ }
```

```tsx
// components/ui/Button.tsx
export function Button({ isLoading, children }) { /* submit button with "Saving…" text */ }
```

### What Changed

Specified the exact file list and component hierarchy.

### What Improved

The output format is now predictable and consistent. Every form field uses the `FormField` wrapper. The `Button` component includes a loading state. The file structure follows project conventions without needing correction.

### What Still Failed

Still missing accessibility attributes in `FormField`/`TextInput`. No `aria-invalid`, no `aria-describedby`. No `onBlur` validation mode. No cross-field password confirmation. No success message with `aria-live`. The code works but is not production-ready.

### What I Would Try Next

Add quality criteria — accessibility standards, edge cases, and async behavior requirements.

---

## Version 5 — Quality Criteria

**Layer:** Quality Criteria

### Prompt

```
Build a settings page for a web app.

The user must:
- Update their full name, email, current password, new password, and confirm new password
- See validation errors when fields are empty, email format is wrong, or passwords don't match
- See a success message after saving

This project uses React 19 + TypeScript + Vite + Tailwind CSS v4 + React Hook Form.

Create these files:
- src/types/settings.ts
- src/lib/validation.ts
- src/components/ui/FormField.tsx (FormField wrapper + TextInput)
- src/components/ui/Button.tsx
- src/components/settings/SettingsForm.tsx
- src/pages/SettingsPage.tsx

Quality requirements:
- Zero TypeScript errors (strict mode)
- Every input has id + matching label htmlFor
- aria-invalid and aria-describedby wired to errors and hints
- role="alert" on error messages, aria-live="polite" on success message
- React Hook Form mode: onBlur (not onSubmit)
- Password confirmation validates against newPassword using getValues (not watch)
- Async save with 800ms simulated delay
- Button disabled while isSubmitting, shows "Saving…"
- After save, clear password fields but keep profile fields
- Edge cases: empty submit, invalid email formats, short passwords (< 8 chars), mismatched passwords, double-click on save
```

### Output

Matches the actual production code in the repository. All quality criteria are met:

- `FormField` renders `aria-describedby` pointing to hint or error IDs. `TextInput` passes `aria-invalid` and `aria-describedby`.
- `SettingsForm` uses `mode: "onBlur"`, `getValues("newPassword")` for confirmation, `reset()` to clear password fields after save.
- `Button` accepts `isLoading`, shows `"Saving…"`, and sets `aria-busy`.
- Success banner uses `<p role="status" aria-live="polite">`.
- All validation rules live in `validation.ts` with typed error messages.

```tsx
// FormField.tsx — accessibility excerpt
<label htmlFor={id}>{label}</label>
{children}
{hint && !error && <p id={`${id}-hint`}>{hint}</p>}
{error && <p id={`${id}-error`} role="alert">{error}</p>}
```

```tsx
// SettingsForm.tsx — validation excerpt
{...register("newPassword", {
  required: settingsValidationMessages.required,
  minLength: { value: MIN_PASSWORD_LENGTH, message: settingsValidationMessages.minPassword },
})}
...
{...register("confirmPassword", {
  required: settingsValidationMessages.required,
  validate: (value) => value === getValues("newPassword") || settingsValidationMessages.passwordMismatch,
})}
```

### What Changed

Added concrete quality criteria covering accessibility, validation mode, edge cases, and async behavior.

### What Improved

Every quality gap from previous versions is addressed. The output is production-ready and matches the existing codebase. Accessibility attributes are correct. Cross-field validation uses the right API (`getValues` instead of `watch`). Edge cases are handled (double-click, short passwords, empty submit).

### What Still Failed

AI initially used `watch("newPassword")` instead of `getValues("newPassword")` for password confirmation. Caught during self-review. The AI still needs human review to catch subtle API-level mistakes.

### What I Would Try Next

Automate the self-review step — ask the AI to audit its own output against the quality criteria before presenting it.

---

## Final Reusable Prompt

The prompt below combines all 5 layers — goal, audience, project context, output format, and quality criteria — into a single template. It works for any frontend engineer building a form with this tech stack.

```
Build a [form/page description] for a web app.

The user must:
- [list specific user actions, one per bullet]
- [validation requirements]
- [feedback requirements]

This project uses:
- React 19 + TypeScript + Vite
- Tailwind CSS v4 (via @tailwindcss/vite)
- React Hook Form for all form state
- [folder structure conventions]

Create these files:
- src/types/[name].ts — [type description]
- src/lib/[name].ts — [validation rules description]
- src/components/ui/[Component].tsx — [component description]
- src/components/[feature]/[Component].tsx — [feature logic]
- src/pages/[Page].tsx — [page layout]

Quality requirements:
- Zero TypeScript errors (strict mode)
- Every input has id + matching label htmlFor
- aria-invalid and aria-describedby wired to errors and hints
- role="alert" on error messages, aria-live="polite" on success messages
- React Hook Form mode: onBlur (not onSubmit)
- Cross-field validation uses getValues (not watch)
- Async save with [delay]ms simulated delay
- Button disabled while isSubmitting, shows "[loading text]"
- [specific edge cases to handle]
```

Replace the bracketed placeholders with your project's specifics. The prompt produces production-ready code that passes accessibility audits, handles edge cases, and follows project conventions — but always review the output before merging.

---

## Rubric Review

| Criterion | Status |
|---|---|
| Six stages (Baseline + 5 versions) | Done |
| Each version changes exactly one layer | Done |
| Notes describe changes in output, not only prompt changes | Done |
| Uses FlyRank Capstone project context | Done |
| Uses React + TypeScript + Vite | Done |
| One version says "didn't improve the output much" with reason | V2 — Audience |
| Final Reusable Prompt works for another engineer | Done |
| No buzzwords | Done |
| Concise language | Done |

## Suggested Improvement

The "Audience" layer could be more effective if paired with a specific list of what the audience values (e.g., "They prioritize accessibility, type safety, and production-readiness over visual flair"). A future version might combine Audience with a "Constraints" layer to make it actionable.

---

```
docs: add Week 2 prompt ladder exercise
```
