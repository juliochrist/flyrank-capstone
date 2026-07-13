import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  variant?: "primary" | "secondary";
};

export function Button({
  isLoading = false,
  variant = "primary",
  disabled,
  children,
  className = "",
  type = "submit",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-500 disabled:bg-slate-300",
    secondary:
      "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-60",
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {isLoading ? "Saving…" : children}
    </button>
  );
}
