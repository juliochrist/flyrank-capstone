import { useState } from "react";
import { PromptCard } from "./components/PromptCard";

export default function App() {
  const [lastPrompt, setLastPrompt] = useState<string | null>(null);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-12">
      <div className="flex w-full max-w-xl flex-col gap-6">
        <PromptCard onSubmit={setLastPrompt} />

        {lastPrompt && (
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
            <p className="mb-1 font-medium text-slate-900">Last prompt</p>
            <p>{lastPrompt}</p>
          </div>
        )}
      </div>
    </main>
  );
}
