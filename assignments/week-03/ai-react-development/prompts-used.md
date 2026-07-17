# Prompts Used During Development

## Building the Settings Page

> "Build a Settings page with a form that includes fields for full name, email, current password, new password, and confirm password. Use React Hook Form for validation and state management."

> "Add a success message after the form is submitted successfully. Reset only the password fields, not the profile fields."

> "Add a fieldset and legend for the Change Password section to group the password fields semantically."

## Refactoring Components

> "Extract the form field wrapper into a reusable FormField component that handles labels, hints, errors, and aria attributes."

> "Create a reusable TextInput component inside src/components/ui/ and use it across all form fields in SettingsForm."

> "Refactor the Button component to support isLoading and variant props, and move it to src/components/ui/."

> "Split the server-compatible components from client-only components — keep Button, Card, Container, Section, Footer, Navbar in the root components/ folder."

## Accessibility Improvements

> "Add aria-invalid and aria-describedby to all form inputs when they have validation errors."

> "Wire role="alert" to the error message elements so screen readers announce validation errors immediately."

> "Add aria-live="polite" and role="status" to the success message so it's announced without interrupting."

> "Ensure every input has a matching label with htmlFor and a unique id."

## Validation

> "Create a shared validation module in src/lib/validation.ts with the email regex, minimum password length constant, and typed error messages."

> "Add cross-field validation to confirmPassword — it must match the newPassword value using react-hook-form's validate function with getValues."

> "Set the form mode to 'onBlur' so validation triggers when the user leaves each field, not on every keystroke."

## Code Review

> "Review the SettingsForm component for any issues with the form submission logic, error handling, or type safety."

> "Check that all components follow the project's TypeScript strict mode rules and fix any implicit any types."

> "Review the FormField and TextInput components — are there any edge cases where aria-describedby could point to a non-existent element?"

> "Check for unused imports, variables, or duplicate logic across the settings feature."

## Performance Improvements

> "Ensure SettingsForm is the only client component on the settings page — wrap it in a server component page to keep the rest of the page server-rendered."

> "Use useCallback and useMemo where appropriate in SettingsForm to prevent unnecessary re-renders on every keystroke."

> "Verify that react-hook-form's register function is used efficiently — avoid inline functions in render where possible."

> "Check that the Navbar component's usePathname usage doesn't cause unnecessary client-side re-renders on route changes."
