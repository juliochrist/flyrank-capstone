import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
