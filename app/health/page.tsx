import type { Metadata } from "next";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Section from "../../components/Section";

export const metadata: Metadata = {
  title: "Health — FlyRank Capstone",
};

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function getTodo(): Promise<Todo> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1",
    { cache: "no-store" },
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export default async function HealthPage() {
  const fetchedAt = new Date().toISOString();
  let todo: Todo | null = null;
  let error: string | null = null;

  try {
    todo = await getTodo();
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to fetch";
  }

  return (
    <Container>
      <Section>
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Health Check
        </h1>
        <p className="mt-3 text-secondary">
          Server component fetching data from JSONPlaceholder API.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Card>
            <h2 className="text-lg font-semibold text-foreground">Status</h2>
            {error ? (
              <p className="mt-3 text-sm text-red-600">Error: {error}</p>
            ) : (
              <div className="mt-3 space-y-2 text-sm text-secondary">
                <p>
                  <span className="font-medium text-foreground">Title:</span>{" "}
                  {todo?.title}
                </p>
                <p>
                  <span className="font-medium text-foreground">
                    Completed:
                  </span>{" "}
                  {todo?.completed ? "Yes" : "No"}
                </p>
                <p>
                  <span className="font-medium text-foreground">
                    Fetched at:
                  </span>{" "}
                  {fetchedAt}
                </p>
              </div>
            )}
          </Card>

          <Card>
            <h2 className="text-lg font-semibold text-foreground">
              Details
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-secondary">
              <li>Render strategy: Server Component</li>
              <li>Data source: JSONPlaceholder API</li>
              <li>Cache: no-store (dynamic)</li>
              <li>Error handling: try/catch in component</li>
            </ul>
          </Card>
        </div>
      </Section>
    </Container>
  );
}
