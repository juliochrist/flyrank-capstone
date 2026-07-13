import type { Metadata } from "next";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Section from "../../components/Section";

export const metadata: Metadata = {
  title: "Contact — FlyRank Capstone",
};

export default function ContactPage() {
  return (
    <Container>
      <Section>
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Contact
        </h1>
        <p className="mt-3 text-secondary">
          If you are looking for someone who can build AI-powered web
          applications, I would love to talk.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Card>
            <h2 className="text-lg font-semibold text-foreground">Email</h2>
            <p className="mt-2 text-sm text-secondary">
              <a
                href="mailto:julio@example.com"
                className="text-primary transition hover:text-primary-hover"
              >
                julio@example.com
              </a>
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-foreground">GitHub</h2>
            <p className="mt-2 text-sm text-secondary">
              <a
                href="https://github.com/juliochrist/flyrank-capstone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary transition hover:text-primary-hover"
              >
                github.com/juliochrist/flyrank-capstone
              </a>
            </p>
          </Card>
        </div>
      </Section>
    </Container>
  );
}
