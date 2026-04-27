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
        "surface-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700 transition-colors duration-200 dark:bg-blue-950 dark:text-blue-300">
          {title.charAt(0)}
        </span>
        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
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
