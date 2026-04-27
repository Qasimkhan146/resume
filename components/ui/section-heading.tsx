import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  level?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  level = "h2",
}: SectionHeadingProps) {
  const HeadingTag = level;

  return (
    <header className={cn("space-y-3", align === "center" && "text-center")}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
        {title}
      </HeadingTag>
      <span
        aria-hidden
        className={cn(
          "block h-px w-16 bg-gradient-to-r from-blue-500/70 to-cyan-500/40",
          align === "center" && "mx-auto",
        )}
      />
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
