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
        "surface-card group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700 transition-colors duration-200 group-hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-300 dark:group-hover:bg-blue-900">
          {index + 1}
        </span>

        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
