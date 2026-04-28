import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  index: number;
  className?: string;
};

export function ServiceCard({
  title,
  description,
  index,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "surface-card group rounded-2xl border border-(--color-border) bg-(--color-surface) p-5 shadow-sm",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-accent)_10%,var(--color-surface))] text-xs font-semibold text-(--color-accent) transition-colors duration-200 group-hover:bg-[color-mix(in_srgb,var(--color-accent)_15%,var(--color-surface))]">
          {index + 1}
        </span>

        <div>
          <h3 className="text-base font-semibold text-(--color-text)">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-(--color-muted)">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
