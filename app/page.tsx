import Link from "next/link";
import Container from "../components/Container";
import Card from "../components/Card";

export default function HomePage() {
  return (
    <Container>
      <section className="py-20 text-center sm:py-28">
        <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
          FlyRank Capstone
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary">
          AI-powered web applications built with React, TypeScript, and Next.js.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-hover"
          >
            View Projects
          </Link>
          <Link
            href="/health"
            className="inline-flex items-center rounded-xl border border-border bg-white px-5 py-2.5 text-sm font-medium text-secondary transition hover:bg-slate-50"
          >
            Health Check
          </Link>
        </div>
      </section>

      <section className="grid gap-6 pb-20 sm:grid-cols-3">
        <Card>
          <h2 className="text-lg font-semibold text-foreground">
            Modern Stack
          </h2>
          <p className="mt-2 text-sm text-secondary">
            Built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold text-foreground">
            AI-Integrated
          </h2>
          <p className="mt-2 text-sm text-secondary">
            Developed using AI collaboration tools for faster iteration and
            quality code.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold text-foreground">
            Production Ready
          </h2>
          <p className="mt-2 text-sm text-secondary">
            Deployed on Vercel with server components, accessibility, and
            responsive design.
          </p>
        </Card>
      </section>
    </Container>
  );
}
