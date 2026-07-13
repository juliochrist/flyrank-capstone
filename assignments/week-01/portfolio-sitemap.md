# Portfolio Sitemap

**Name:** Julio Christianto
**Week:** 01
**Date:** July 2026

---

## Pages

### 1. Home (`/`)

- Hero section with introduction
- Skills summary
- Featured projects preview
- Contact CTA

### 2. About (`/about`)

- Professional background
- Resume / experience timeline
- Education

### 3. Projects (`/projects`)

- Project cards with thumbnails
- Filters (tech stack, category)
- Link to live demo + source code

### 4. Project Detail (`/projects/:id`)

- Full description
- Tech stack used
- Screenshots / demo
- GitHub link

### 5. Blog (`/blog`)

- Article listing
- Tag filters
- Search

### 6. Contact (`/contact`)

- Contact form
- Social links
- Location / availability

---

## Sitemap Diagram

```
Home (/)
├── About (/about)
├── Projects (/projects)
│   └── Project Detail (/projects/:id)
├── Blog (/blog)
└── Contact (/contact)
```

---

## Notes

- All routes sit behind a shared layout (navbar + footer).
- Blog can be optionally replaced by a `writing` section with external links.
- A `404` page should handle unknown routes gracefully.
