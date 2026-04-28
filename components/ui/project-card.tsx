import Link from "next/link";
import Image from "next/image";
import type { PortfolioProject } from "@/lib/projects-data";
import { Tag } from "@/components/ui/tag";

type ProjectCardProps = {
  project: PortfolioProject;
};

function truncateText(value: string, max: number) {
  if (value.length <= max) {
    return value;
  }

  return `${value.slice(0, max).trim()}...`;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const highlights = project.highlights.slice(0, 3);

  return (
    <article className="surface-card group flex h-full flex-col rounded-2xl border border-(--color-border) bg-(--color-surface) p-5 shadow-sm">
      <figure className="mb-4 overflow-hidden rounded-xl border border-(--color-border) bg-(--color-surface)">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1200}
          height={675}
          sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 100vw"
          className="h-40 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      </figure>

      <header>
        <p className="text-xs font-medium uppercase tracking-wide text-(--color-muted)">
          {project.type}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-(--color-text)">
          {project.title}
        </h3>
      </header>

      <div className="mt-4 space-y-3 text-sm leading-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-(--color-muted)">
            Problem
          </p>
          <p className="mt-1 text-(--color-muted)">
            {truncateText(project.problem, 110)}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-(--color-muted)">
            Solution
          </p>
          <p className="mt-1 text-(--color-muted)">
            {truncateText(project.solution, 110)}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-(--color-muted)">
          Highlights
        </p>
        <ul className="mt-2 space-y-1.5 text-sm text-(--color-muted)">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-(--color-accent)" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-(--color-border) bg-(--color-surface) px-4 py-2 text-sm font-medium text-(--color-text) transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--color-bg) sm:w-auto"
        >
          Case Study
        </Link>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-(--color-accent) px-4 py-2 text-sm font-medium text-(--color-surface) transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--color-accent-hover) sm:w-auto"
          >
            Live Demo
          </a>
        ) : null}

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-(--color-border) bg-(--color-surface) px-4 py-2 text-sm font-medium text-(--color-text) transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--color-bg) sm:w-auto"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}
