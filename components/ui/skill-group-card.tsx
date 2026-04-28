import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

type SkillGroupCardProps = {
  title: string;
  description: string;
  items: string[];
  className?: string;
};

export function SkillGroupCard({
  title,
  description,
  items,
  className,
}: SkillGroupCardProps) {
  return (
    <article
      className={cn(
        "surface-card rounded-2xl border border-(--color-border) bg-(--color-surface) p-5 shadow-sm",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-accent)_10%,var(--color-surface))] text-xs font-semibold text-(--color-accent) transition-colors duration-200">
          {title.charAt(0)}
        </span>
        <div>
          <h3 className="text-base font-semibold text-(--color-text)">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-6 text-(--color-muted)">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </article>
  );
}
