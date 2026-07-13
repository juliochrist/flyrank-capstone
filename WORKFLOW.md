# AI-Assisted Workflow Comparison

This document compares two implementations of a Settings page built from the same capstone project, using different AI prompting strategies.

**Branches:** `feat/settings-vague-prompt` (Round 1) vs `feat/settings-detailed-prompt` (Round 2)

## Summary of Diffs

Round 1 produced a single 81-line file (`src/pages/SettingsPage.tsx`) with manual `useState` form handling. Round 2 added 6 new files across `components/`, `lib/`, and `types/`, introduced `react-hook-form`, and expanded the form from 3 fields to 5 (adding current/new/confirm password).

## Correctness

Round 1 validation is minimal and brittle. Email is considered valid if it merely contains `@` (e.g. `"a@b"` passes), and there is no password length rule or confirmation check. The save action sets a success flag synchronously with no async handling, so double-submits are possible.

Round 2 centralizes rules in `src/lib/validation.ts` with a proper email regex, an 8-character minimum for new passwords, and cross-field matching via `getValues("newPassword")`. Submit is async with `isSubmitting` guarding the button. After a successful save, password fields are cleared while profile fields are retained.

**AI mistake caught in Round 2:** The initial implementation used `watch("newPassword")` for confirm-password validation. During self-review, this was flagged as unreliable on blur — `getValues()` is the correct approach for cross-field checks.

## Accessibility

Round 1 labels are visually present but not programmatically linked — inputs lack matching `id` attributes and `htmlFor` on labels. Error messages have no `role="alert"`, and the success message is a plain `<p>` with no `aria-live` region.

Round 2 uses a reusable `FormField` component with `htmlFor`, `aria-invalid`, and `aria-describedby` pointing to hints or errors. Password fields are grouped in a `<fieldset>` with a `<legend>`. The success banner uses `role="status"` and `aria-live="polite"`.

## Edge Cases

| Scenario | Round 1 | Round 2 |
|---|---|---|
| Empty submit | Shows errors | Shows per-field errors on blur/submit |
| Invalid email (`"test@"`) | Passes validation | Blocked by regex |
| Short password (`"abc"`) | Accepted | Rejected (min 8 chars) |
| Mismatched passwords | Not applicable (1 field) | Caught by cross-field rule |
| Double-click Save | No guard | Button disabled via `isSubmitting` |
| Edit after success | Stale success shown | Password fields reset; message clears on re-submit |

## Review Effort

Round 1 required significant review time despite its small diff. A reviewer must audit inline validation logic, check for missing accessibility attributes, verify edge cases the AI did not specify, and decide whether the single-password model is even correct for a settings page.

Round 2's diff is larger (+316 lines) but more reviewable. Validation rules, types, and UI primitives are separated into named files. A reviewer can scan `validation.ts` for business rules and `FormField.tsx` for accessibility patterns without reading every line of form logic. The self-review step caught three issues before human review.

**Estimated review time:** Round 1 ~30 min (small code, many hidden gaps). Round 2 ~15 min (more files, but conventions are explicit).

## Conclusion

A vague prompt produces fast but fragile output. A detailed prompt with constraints, file structure expectations, and a verification/self-review step yields code that is more correct, accessible, and cheaper to review — even though the diff is larger.
