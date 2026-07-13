import { SettingsForm } from "../components/settings/SettingsForm";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 sm:py-14">
      <div className="mx-auto w-full max-w-lg">
        <header className="mb-8">
          <p className="text-sm font-medium text-indigo-600">Account</p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Settings
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Update your profile information and password.
          </p>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <SettingsForm />
        </section>
      </div>
    </main>
  );
}
