# Using AI Effectively in React Development

**Name:** Julio Christianto
**Week:** 03
**Date:** July 2026

---

## Overview

This workshop covered how to integrate AI tools into a React development workflow without losing control over code quality. The focus was on practical techniques: writing structured prompts, using AI for debugging and code review, and knowing when to trust the output versus when to verify manually.

The key idea is that AI works best as a collaborative partner — it handles boilerplate, catches patterns, and suggests improvements, but the developer remains responsible for architecture, business logic, and correctness. The workshop demonstrated this through real examples from the FlyRank Capstone project, including the Settings Page implementation.

---

## Why AI Matters in React Development

**Productivity.** AI generates boilerplate — form fields, validation rules, component scaffolding — so I can focus on logic and architecture instead of repetitive typing.

**Faster iteration.** I can describe a component in natural language, get a working version, and refine from there. This cuts the time from idea to working code.

**Debugging.** Paste an error message or stack trace into an AI prompt. It often identifies the root cause faster than scanning files manually. This is especially useful for cryptic TypeScript errors or React-specific issues like stale closures.

**Code explanation.** AI explains unfamiliar patterns (e.g., why `useEffect` runs twice in Strict Mode) in plain language. This helped me learn React concepts while building.

**Documentation.** AI drafts README files, inline comments, and architecture docs from a brief description of the code. I review and edit rather than writing from scratch.

**Limitations.** AI does not understand business context, security requirements, or your specific user base. It generates plausible code that may be wrong in subtle ways. It cannot test its own output. Every AI-generated line must be reviewed by a human who understands the full system.

---

## AI Workflow I Would Use

1. **Understand the problem** — Define what needs to be built. Write down requirements before opening a chat.
2. **Plan architecture** — Decide file structure, component hierarchy, and data flow. I do this myself — AI is not good at system-level design without deep context.
3. **Write a structured prompt** — Include role, goal, tech stack, file structure, quality criteria, and edge cases.
4. **Generate implementation** — Let AI produce the first pass.
5. **Review generated code** — Check for TypeScript errors, accessibility, edge cases, and correct API usage.
6. **Refactor** — Rename variables, extract functions, improve readability. AI can help with this too.
7. **Test manually** — Run the app, try edge cases, verify behavior. AI cannot do this.
8. **Improve documentation** — Ask AI to generate or update docs based on the final code.

---

## Weak vs Strong Prompt

### Weak Prompt

```
Build a settings form.
```

**Why it fails:** No mention of fields, validation, tech stack, or quality standards. The AI guesses and produces a generic, low-quality result — likely a single file with manual state and no accessibility.

### Strong Prompt

```
You are a senior frontend engineer.

Build a settings form with fields for full name, email, and password change (current, new, confirm).

Use React 19, TypeScript, Tailwind CSS v4, and React Hook Form.
Split into types/, lib/, components/ui/, components/settings/, and pages/ folders.

Quality requirements:
- Zero TypeScript errors
- aria-invalid and aria-describedby on every input
- role="alert" on errors, aria-live="polite" on success
- React Hook Form mode: onBlur
- Cross-field validation uses getValues, not watch
- Button disabled during submit
- Edge cases: empty fields, invalid email, short password, double-click
```

**Why it is better:** Every sentence adds a constraint that prevents a specific class of bugs or quality issues. The AI knows exactly what files to create, which libraries to use, and what standards to meet.

---

## Example Prompt

The prompt below is a complete, production-quality prompt for building a React feature. It combines role assignment, goal, tech stack, file structure, and quality criteria.

```
You are a senior frontend engineer at a SaaS startup.

Build a user profile page component that displays and edits the user's display name, bio, and avatar URL.

This project uses:
- React 19 + TypeScript + Vite
- Tailwind CSS v4 (via @tailwindcss/vite)
- React Hook Form for all form state

File structure:
- src/types/profile.ts — ProfileFormValues type
- src/lib/validation.ts — validation rules and messages
- src/components/ui/Avatar.tsx — avatar display with fallback
- src/components/ui/FormField.tsx — reusable field wrapper with label, hint, error
- src/components/ui/Button.tsx — submit button with loading state
- src/components/profile/ProfileForm.tsx — form logic
- src/pages/ProfilePage.tsx — layout wrapper

Requirements:
- Display name is required (1-50 chars)
- Bio is optional, max 200 chars with character counter
- Avatar URL is optional, must be a valid URL if provided
- Every input has id + matching label htmlFor
- aria-invalid and aria-describedby wired to errors
- role="alert" on error messages
- React Hook Form mode: onBlur
- Async submit with simulated 600ms delay
- Button disabled while isSubmitting, shows "Saving…"
- Success message uses role="status" with aria-live="polite"
- Responsive: single column on mobile, two columns for avatar + fields on desktop
- Edge cases: empty submit, URL format validation, long bio truncation display
```

This prompt works because it leaves nothing to guess. The AI knows the tech stack, the component hierarchy, the validation rules, the accessibility requirements, and the edge cases.

---

## AI for Debugging

AI helps with debugging in several ways:

**Understanding errors.** Paste the full error message and stack trace. AI explains what caused it and where to look.

**Explaining stack traces.** React error traces can be long. AI can highlight the relevant frame and explain what went wrong.

**Suggesting fixes.** AI proposes specific code changes based on the error. Example: a "cannot read properties of undefined" error might be fixed by adding optional chaining or a default value.

**Optimizing code.** AI identifies performance issues — unnecessary re-renders, missing dependency arrays in `useEffect`, large list re-renders without keys.

**Improving readability.** AI can suggest better variable names, extract complex conditions into functions, and simplify nested ternaries.

### Example

**Code with bug:**

```tsx
function useUser(id: string) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${id}`).then((res) => setUser(res.json()));
  }, [id]);

  return user;
}
```

**AI identifies two issues:**
1. `res.json()` returns a Promise — missing `await` or `.then()` chaining.
2. No error handling — network failure causes silent crash.

**AI suggests fix:**

```tsx
function useUser(id: string) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => { if (!cancelled) setUser(data); })
      .catch((err) => { if (!cancelled) setError(err.message); });
    return () => { cancelled = true; };
  }, [id]);

  return { user, error };
}
```

---

## AI for Code Review

AI can review code for common issues:

**Readability.** Suggests clearer variable names, simpler conditionals, and consistent formatting.

**Naming.** Flags inconsistent naming conventions (e.g., mixing `camelCase` and `snake_case`).

**Architecture.** Points out where a component does too much or where logic should be extracted.

**Performance.** Identifies missing `React.memo`, unnecessary re-computations, or large lists without keys.

**Accessibility.** Catches missing `aria-*` attributes, unlinked labels, or missing `role` attributes.

### Example

**Code to review:**

```tsx
function Card(props: any) {
  return (
    <div onClick={props.onClick}>
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}
```

**AI review feedback:**

- **Typing:** `props: any` defeats TypeScript. Define an interface.
- **Accessibility:** `onClick` on a `<div>` is not keyboard accessible. Use a `<button>` or add `role="button"` + `tabIndex` + keyboard handler.
- **Semantic HTML:** Use `<article>` instead of `<div>` for a card.
- **Image:** Missing `alt` attribute.
- **Naming:** `desc` should be `description`.

---

## Manual Improvements

These are things I always verify myself, never delegate entirely to AI:

**Accessibility.** AI adds `aria-*` attributes but does not test with a screen reader. I manually tab through every interactive element and verify focus order, visible focus indicators, and screen reader announcements.

**Performance.** AI does not measure render times or bundle size. I check for unnecessary re-renders using React DevTools and verify that lists have stable keys.

**Responsive design.** AI generates responsive classes but does not test at real breakpoints. I resize the browser and test on mobile viewports.

**Business logic.** AI does not understand the business domain. Every calculation, conditional, and data transformation must be verified against the requirements.

**Security.** AI does not know about XSS, CSRF, or data validation for your specific API. I never trust AI-generated code that handles user input, authentication, or API calls without manual review.

**Validation.** AI generates validation rules from the prompt, but I verify edge cases: empty strings, whitespace-only input, special characters, and max-length boundaries.

**Error handling.** AI often omits error states. I check that every API call, async operation, and data fetch has loading, error, and empty states.

**Testing.** AI can generate test stubs but not meaningful test cases. I write tests that cover the actual business logic and edge cases.

---

## Key Takeaways

1. A structured prompt with role, goal, stack, file structure, and quality criteria produces production-ready code. A vague prompt produces a sketch.
2. AI is best at boilerplate — form fields, validation rules, component scaffolding. It saves time on repetitive patterns.
3. AI is weak at system design, business logic, and security. These stay with the developer.
4. AI-generated accessibility attributes are a good starting point but never replace manual screen reader testing.
5. Debugging with AI is faster than searching Stack Overflow. Paste the error and let AI narrow the cause.
6. AI code review catches naming, type, and pattern issues but misses domain-specific problems.
7. Step decomposition (telling AI the order to build files) prevents monolithic output and forces modular code.
8. AI used `watch` instead of `getValues` for cross-field validation in my project — caught during self-review. Always verify API usage.
9. The human-to-AI ratio matters. For complex features, I spend 30% of time writing the prompt and 70% reviewing and refining.
10. AI documentation saves time but requires editing. AI drafts are too verbose and include filler phrases I remove.

---

## Reflection

### What did I learn?

AI output quality depends almost entirely on prompt quality, not the model used. Adding specific constraints — file structure, accessibility requirements, edge cases — improved the output more than changing from ChatGPT to Claude.

### What surprised me?

AI added accessibility attributes correctly when prompted but did not add them when only told to "build a form." The AI does not infer quality standards from context. Every requirement must be explicit.

### When should I trust AI?

I trust AI for generating boilerplate, suggesting fixes for known error patterns, explaining unfamiliar code, and drafting documentation. These are tasks where correctness is easy to verify quickly.

### When should I NOT trust AI?

I do not trust AI for business logic, security-sensitive code, authentication flows, data validation edge cases, or any code that handles money, personal data, or access control. These require domain knowledge the AI does not have.

### How will I use AI differently after this workshop?

I will write structured prompts with explicit quality criteria before generating code. I will use AI for debugging earlier — paste errors immediately instead of scanning files manually. I will always allocate review time proportional to the amount of AI-generated code in a feature.

---

## Questions & Answers

**Q: When is AI useful in React development?**
A: For generating boilerplate (form fields, components, validation), debugging errors, explaining unfamiliar patterns, drafting documentation, and code review for surface-level issues.

**Q: Why should developers validate AI code?**
A: AI generates plausible code that may be wrong in subtle ways — wrong API usage, missing edge cases, incorrect types. Validation catches these before they reach production.

**Q: How do good prompts improve code quality?**
A: A good prompt includes specific constraints (tech stack, file structure, accessibility, edge cases) that align the AI's output with your project's standards. Vague prompts produce generic code.

**Q: Can AI replace frontend developers?**
A: No. AI handles patterns and boilerplate but cannot understand business requirements, design systems, user research, or make architectural trade-offs. It is a productivity tool, not a replacement.

**Q: What is the biggest mistake developers make when using AI?**
A: Trusting the output without review. AI-generated code looks correct but often has subtle bugs, missing error handling, or incorrect API usage.

**Q: How should I handle AI-generated TypeScript errors?**
A: Feed the error message back to the AI. Include the full error and the relevant code block. Ask for a fix. Repeat until the error resolves — but verify the fix is correct.

**Q: What is the difference between `watch` and `getValues` in React Hook Form?**
A: `watch` triggers re-renders on every value change. `getValues` reads the current value without re-rendering. Use `getValues` for cross-field validation in `validate` functions to avoid performance issues.

**Q: Should AI write tests?**
A: AI can generate test stubs (describe/it blocks, mock setups) but cannot write meaningful test cases without understanding the business logic. Write tests yourself or use AI only as a starting point.

**Q: How do I prompt AI for accessible components?**
A: Include specific requirements: "Every input has id + matching label htmlFor", "aria-invalid wired to errors", "role='alert' on error messages", "aria-live='polite' on success messages".

**Q: What is a good file structure for a React project using AI?**
A: Pages for layout, components/feature for feature logic, components/ui for reusable primitives, lib for validation and utilities, types for TypeScript types. This structure helps AI generate correctly organized code when included in the prompt.

**Q: How do I debug a stale closure in React?**
A: Check the dependency array of your `useEffect` or `useCallback`. If a variable is used inside but not listed in dependencies, you have a stale closure. AI can identify missing dependencies if you paste the full hook.

**Q: What should I do if AI generates code with security issues?**
A: Never use AI-generated code for authentication, authorization, or data validation without manual review. AI does not understand your security context and may introduce vulnerabilities.

---

## Self-Review Against Rubric

| Requirement | Status |
|---|---|
| Overview (2-3 paragraphs) | Done |
| Why AI Matters in React Development | Done — all sections covered |
| AI Workflow (7 steps) | Done |
| Weak vs Strong Prompt with explanation | Done |
| Example Prompt (React, TS, Vite, Components, A11y, Responsive) | Done |
| AI for Debugging with explanation + example | Done |
| AI for Code Review with explanation + example | Done |
| Manual Improvements (8 items listed) | Done |
| Key Takeaways (10 bullet points) | Done |
| Reflection (5 questions answered) | Done |
| Questions & Answers (12 Q&A pairs) | Done |
| No source code modified | Done — only assignments/ changed |
| README.md updated with Week 3 link | Pending |
| Professional Markdown | Done |
| No buzzwords | Done |
| Based on real React development | Done — references actual project patterns |

## Suggested Improvement

The debugging example could include a real error from the FlyRank Capstone project (like the `watch` vs `getValues` issue) to make it more authentic to the reader. I would add this if I had the actual error output saved.

---

```
docs: add Week 3 React AI development workshop notes
```
