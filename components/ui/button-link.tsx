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
          ? "bg-(--color-accent) text-(--color-surface) shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:bg-(--color-accent-hover)"
          : "border border-(--color-border) bg-(--color-surface) text-(--color-text) shadow-sm hover:-translate-y-0.5 hover:bg-(--color-bg) hover:shadow-md",
        className,
      )}
    >
      {children}
    </Link>
  );
}
