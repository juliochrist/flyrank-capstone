import type { Metadata } from "next";
import Container from "../../components/Container";
import { SettingsForm } from "../../src/components/settings/SettingsForm";

export const metadata: Metadata = {
  title: "Settings — FlyRank Capstone",
};

export default function SettingsPage() {
  return (
    <Container className="py-10 sm:py-14">
      <div className="mx-auto w-full max-w-lg">
        <header className="mb-8">
          <p className="text-sm font-medium text-primary">Account</p>
          <h1 className="mt-1 text-2xl font-semibold text-foreground sm:text-3xl">
            Settings
          </h1>
          <p className="mt-2 text-sm text-secondary">
            Update your profile information and password.
          </p>
        </header>

        <section className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
          <SettingsForm />
        </section>
      </div>
    </Container>
  );
}
