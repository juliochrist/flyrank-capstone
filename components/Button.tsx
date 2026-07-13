import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  variant?: "primary" | "secondary";
};

export default function Button({
  isLoading = false,
  variant = "primary",
  disabled,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition disabled:cursor-not-allowed";

  const styles = {
    primary:
      "bg-primary text-white hover:bg-primary-hover disabled:bg-slate-300",
    secondary:
      "border border-border bg-white text-secondary hover:bg-slate-50 disabled:opacity-60",
  };

  return (
    <button
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {isLoading ? "Loading…" : children}
    </button>
  );
}
