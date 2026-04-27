import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 ease-out will-change-transform",
        variant === "primary"
          ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:from-blue-700 hover:to-cyan-700"
          : "border border-slate-300 bg-white text-slate-700 shadow-sm hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800",
        className,
      )}
    >
      {children}
    </Link>
  );
}
