import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-(--color-border) bg-(--color-surface) px-3 py-1 text-xs font-medium text-(--color-text) transition-colors duration-200 hover:border-(--color-accent) hover:bg-[color-mix(in_srgb,var(--color-accent)_10%,var(--color-surface))]",
        className,
      )}
    >
      {children}
    </span>
  );
}
