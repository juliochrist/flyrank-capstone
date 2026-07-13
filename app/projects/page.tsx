import type { Metadata } from "next";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Section from "../../components/Section";

export const metadata: Metadata = {
  title: "Projects — FlyRank Capstone",
};

const projects = [
  {
    title: "TradeIntel",
    description:
      "AI-powered market analysis tool for traders. Built with React, TypeScript, and Supabase.",
    status: "In Development",
  },
  {
    title: "SmartPOS AI",
    description:
      "Intelligent point-of-sale dashboard with AI-powered inventory and sales analytics.",
    status: "Planned",
  },
  {
    title: "Portfolio Website",
    description:
      "This site — a Next.js starter with server components, accessibility, and responsive design.",
    status: "Live",
  },
];

export default function ProjectsPage() {
  return (
    <Container>
      <Section>
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Projects
        </h1>
        <p className="mt-3 text-secondary">
          AI-powered web applications built during the FlyRank internship.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title}>
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h2>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {project.status}
                </span>
              </div>
              <p className="mt-3 text-sm text-secondary">
                {project.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </Container>
  );
}
