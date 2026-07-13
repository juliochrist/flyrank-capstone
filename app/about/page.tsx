import type { Metadata } from "next";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Section from "../../components/Section";

export const metadata: Metadata = {
  title: "About — FlyRank Capstone",
};

export default function AboutPage() {
  return (
    <Container>
      <Section>
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          About
        </h1>
        <p className="mt-3 text-secondary">
          Frontend AI Engineering Intern building AI-powered web applications.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Card>
            <h2 className="text-lg font-semibold text-foreground">Stack</h2>
            <ul className="mt-3 space-y-2 text-sm text-secondary">
              <li>Next.js 15 — App Router</li>
              <li>React 19 — Server & Client Components</li>
              <li>TypeScript — Strict mode</li>
              <li>Tailwind CSS v4 — Design tokens</li>
              <li>React Hook Form — Form state</li>
            </ul>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-foreground">
              Approach
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-secondary">
              <li>Server components by default</li>
              <li>Accessible UI with ARIA attributes</li>
              <li>Responsive design at all breakpoints</li>
              <li>AI-assisted development workflow</li>
              <li>Continuous deployment via Vercel</li>
            </ul>
          </Card>
        </div>
      </Section>
    </Container>
  );
}
