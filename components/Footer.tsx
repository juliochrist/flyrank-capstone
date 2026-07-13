import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-muted sm:flex-row sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} FlyRank Capstone</p>
        <div className="flex gap-6">
          <Link href="/health" className="transition hover:text-primary">
            Health
          </Link>
          <a
            href="https://github.com/juliochrist/flyrank-capstone"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-primary"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
