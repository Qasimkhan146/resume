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
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--color-muted)">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag className="text-2xl font-semibold tracking-tight text-(--color-text) sm:text-3xl">
        {title}
      </HeadingTag>
      <span
        aria-hidden
        className={cn(
          "block h-px w-16",
          align === "center" && "mx-auto",
        )}
        style={{ background: "linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)" }}
      />
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-sm leading-6 text-(--color-muted) sm:text-base",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
