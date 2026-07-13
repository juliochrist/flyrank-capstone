# Frame It as Cases

**Name:** Julio Christianto
**Week:** 02
**Date:** July 2026

---

## Voice Card

Direct, practical, honest, curious, no buzzwords.

---

# FlyRank AI Internship Capstone

## Problem

The FlyRank internship required more than completing tasks — it demanded proof that I could ship production-quality code using AI as a collaborative tool. I needed to build a working application and document how AI influenced every decision, from architecture to implementation.

## What I Did

I built the capstone using React 19, TypeScript, Vite, and Tailwind CSS v4. I used React Hook Form for all form state and extracted validation rules into a shared module. I implemented two branches comparing AI prompting strategies: one with vague prompts and one with detailed, structured prompts. The detailed branch produced code with proper validation, full ARIA accessibility (`aria-invalid`, `aria-describedby`, `role="alert"`), and reusable components (`FormField`, `Button`, `PromptCard`). I used Claude for documentation and architectural planning, and ChatGPT for debugging. The main trade-off was speed vs quality — detailed prompts took longer to write but produced cleaner code that needed less review.

## Outcome

The capstone is functional with a validated, accessible settings form and a reusable component library. I learned that investing time in precise AI prompts saves more hours in debugging and refactoring. Next improvements: add routing, integrate Supabase, and build TradeIntel as the flagship feature.

---

# TradeIntel

## Problem

Market analysis tools are either too complex for casual traders or too simplistic for informed decisions. I wanted to build a tool that helps traders make faster, data-backed decisions without needing a finance degree.

## What I Did

I designed TradeIntel as an AI-powered market analysis web application. I chose React 19 + TypeScript for the frontend and planned Supabase for authentication and storage. I used Claude to design the architecture and data models. The main challenge was defining scope — trading is a deep domain. I decided to start with a focused feature set: asset watchlists, AI-generated market summaries, and trade journaling with performance analytics. I skipped real-time charting in v1 to validate the core idea first. The trade-off was accepting a less impressive demo in exchange for faster shipping.

## Outcome

TradeIntel is in active development with a documented architecture and scoped feature set. I learned that domain research is as important as technical planning when building for an unfamiliar industry. Next improvements: implement core features, deploy a prototype, and add real-time data feeds.

---

# SmartPOS AI

## Problem

Small retailers and cafes use basic POS systems that track transactions but offer no business intelligence. Owners don't know which products drive profit, when to restock, or how seasonal trends affect sales — extracting those insights requires manual spreadsheet work they don't have time for.

## What I Did

I designed SmartPOS AI as an intelligent point-of-sale dashboard with AI-powered analytics. The concept: connect a POS data feed to a web dashboard that surfaces actionable insights — top inventory, restock alerts, and sales forecasts. I planned the tech stack around React + TypeScript + Supabase, consistent with my other projects. The main trade-off was feature breadth vs depth — I focused on the analytics layer rather than building a full POS terminal, because the terminal problem is already solved. I used Claude to research common POS data models and define the analytics scope.

## Outcome

SmartPOS AI is a planned portfolio project with a defined scope and architecture. I learned that the most valuable AI applications for small businesses are not flashy features — they surface the right data at the right time. Next improvements: build a prototype with mock data to validate insight quality before connecting to real POS systems.

---

# Portfolio Website

## Problem

A resume lists job titles but doesn't prove I can build AI-powered web applications. Startup founders and engineering managers need to see working code, real projects, and a clear narrative connecting technical skills to business outcomes.

## What I Did

I designed a 6-page portfolio site (Home, About, Projects, Project Detail, Blog, Contact) using React, TypeScript, Vite, and Tailwind CSS — the same stack I use in production. I used Claude to plan the sitemap and content structure. I chose a case-study format for project pages so visitors can understand the problem, my approach, and the outcome. The main challenge was balancing simplicity with enough detail to demonstrate competence. I decided to skip animations and heavy visual effects in favor of fast load times and clear communication.

## Outcome

The portfolio has a complete sitemap, content plan, and technical architecture. I learned that a portfolio's job is not to impress with visual flair — it answers one question fast: "Can this person build what I need?" Next improvements: implement all pages, add live demos, and deploy.

---

## Bio

I build AI-powered web applications with React, TypeScript, and modern frontend tools. As a Frontend AI Engineering Intern at FlyRank, I ship production code by combining strong fundamentals with AI collaboration — using Claude and ChatGPT to generate, review, and improve my work. I focus on practical outcomes: accessible UI, clean architecture, and features that solve real business problems. My current projects include an AI-powered market analysis tool (TradeIntel) and my portfolio site, both built with strict TypeScript, React Hook Form, and Tailwind CSS v4. I'm looking for a frontend engineering role where I build AI-powered products that users actually need.

---

## Contact CTA

If you're looking for someone who can build AI-powered web applications, I'd love to talk.

---

## Before vs After

**Generic AI version:**
"I am a passionate developer who enjoys solving problems."

**Edited version:**
"I build AI-powered web applications with React, TypeScript, and modern AI tools to solve practical business problems."

---

## Reflection

- Writing case studies forces you to articulate not just what you built, but why it matters — which is harder and more useful than I expected.
- The Problem → What I Did → Outcome structure reveals gaps in projects that feel complete but lack clear problem definitions.
- Being specific about challenges and trade-offs builds more trust with readers than listing technologies used.
- SmartPOS taught me that a project doesn't need to be fully built to be framed as a case study — the planning and decision-making process is worth documenting.
- Before vs After editing showed me how much filler language like "passionate" and "innovative" creeps into drafts without adding substance.

---

```
docs: add Week 2 framed portfolio case studies
```
