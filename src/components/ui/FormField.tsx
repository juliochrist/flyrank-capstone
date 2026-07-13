import type { InputHTMLAttributes, ReactNode } from "react";

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
};

export function FormField({ id, label, error, hint, children }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-slate-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  hasError?: boolean;
  describedBy?: string;
};

export function TextInput({
  id,
  hasError,
  describedBy,
  className = "",
  ...props
}: TextInputProps) {
  return (
    <input
      id={id}
      aria-invalid={hasError || undefined}
      aria-describedby={describedBy}
      className={`w-full rounded-xl border bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:bg-white focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60 ${
        hasError
          ? "border-red-300 focus:border-red-400 focus:ring-red-100"
          : "border-slate-200 focus:border-indigo-400 focus:ring-indigo-100"
      } ${className}`}
      {...props}
    />
  );
}
