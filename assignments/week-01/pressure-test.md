# AI Pressure Test

**Name:** Julio Christianto
**Week:** 01
**Date:** July 2026

---

## Prompt 1 — Code Generation

Generate the paginated table component

### Result

import { useEffect, useState } from "react";

interface PaginatedTableProps<T> {
endpoint: string;
columns: { key: keyof T; label: string }[];
pageSize?: number;
}

interface ApiResponse<T> {
data: T[];
total: number;
}

export function PaginatedTable<T extends { id: string | number }>({
endpoint,
columns,
pageSize = 10,
}: PaginatedTableProps<T>) {
const [rows, setRows] = useState<T[]>([]);
const [page, setPage] = useState(1);
const [total, setTotal] = useState(0);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `${endpoint}?page=${page}&pageSize=${pageSize}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const json: ApiResponse<T> = await res.json();
        setRows(json.data);
        setTotal(json.total);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => controller.abort();

}, [endpoint, page, pageSize]);

const totalPages = Math.max(1, Math.ceil(total / pageSize));

if (error) return <p role="alert">Error: {error}</p>;

return (

<div>
<table>
<thead>
<tr>
{columns.map((col) => (
<th key={String(col.key)}>{col.label}</th>
))}
</tr>
</thead>
<tbody>
{loading ? (
<tr>
<td colSpan={columns.length}>Loading…</td>
</tr>
) : rows.length === 0 ? (
<tr>
<td colSpan={columns.length}>No data</td>
</tr>
) : (
rows.map((row) => (
<tr key={row.id}>
{columns.map((col) => (
<td key={String(col.key)}>{String(row[col.key])}</td>
))}
</tr>
))
)}
</tbody>
</table>

      <div>
        <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
          Prev
        </button>
        <span> Page {page} of {totalPages} </span>
        <button
          disabled={page >= totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>

);
}

### Observations

- Correctness:
- Completeness:
- Readability:
- Edge cases handled:

---

## Prompt 2 — Debugging

Explain the useEffect double-invoke behavior in Strict Mode

### Result

Short answer: it's intentional, dev-only behavior.
In React 18, when <StrictMode> is enabled, React deliberately mounts, unmounts, and remounts every component in development — which means effects run, clean up, then run again. This is not a bug. It's React simulating what happens when a component's state is preserved but its effect needs to re-run (e.g., due to Fast Refresh, or future features like offscreen rendering).
The point is to surface effects that aren't properly cleaned up. If your useEffect does something like set up a subscription, timer, or event listener without a cleanup function, running it twice will reveal bugs that would otherwise hide until production under different conditions.
The fix isn't to suppress it — it's to make effects idempotent:

useEffect(() => {
const controller = new AbortController();
fetch(url, { signal: controller.signal }).then(...);
return () => controller.abort(); // cleanup
}, [url]);

### Observations

- Accuracy:
- Clarity:
- Usefulness:

---

## Prompt 3 — Planning

Propose a folder structure for your portfolio site

### Result

src/
├── assets/ # images, fonts, static media
├── components/
│ ├── common/ # Button, Card, Modal — generic, reusable
│ └── layout/ # Header, Footer, Nav
├── sections/ # Hero, About, Projects, Contact — page sections
├── hooks/ # useScrollSpy, useTheme, etc.
├── lib/ # utils, constants, api client
├── types/ # shared TypeScript types/interfaces
├── styles/ # global.css, tailwind config extensions
├── data/ # projects.ts, skills.ts (static content as data)
├── App.tsx
└── main.tsx

### Observations

- Practicality:
- Scalability:
- Alignment with best practices:

---

## Summary

| Prompt          | Rating (1–5) | Notes |
| --------------- | ------------ | ----- |
| Code Generation |              |       |
| Debugging       |              |       |
| Planning        |              |       |

**Overall reflection:**

<!-- What did this exercise teach you about working with AI? -->
