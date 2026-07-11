import { useState, type FormEvent } from "react";

type PromptCardProps = {
  title?: string;
  placeholder?: string;
  onSubmit: (prompt: string) => void;
  isLoading?: boolean;
};

export function PromptCard({
  title = "Ask AI",
  placeholder = "Describe what you want to build…",
  onSubmit,
  isLoading = false,
}: PromptCardProps) {
  const [prompt, setPrompt] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = prompt.trim();
    if (!trimmed || isLoading) return;

    onSubmit(trimmed);
    setPrompt("");
  }

  return (
    <section className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">
          Enter a prompt to generate a frontend idea or component.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder={placeholder}
          rows={4}
          disabled={isLoading}
          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:opacity-60"
        />

        <div className="flex items-center justify-between gap-3">
          <span className="text-xs text-slate-400">
            {prompt.length} characters
          </span>

          <button
            type="submit"
            disabled={!prompt.trim() || isLoading}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {isLoading ? "Generating…" : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}
