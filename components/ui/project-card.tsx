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
    <article className="surface-card group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <figure className="mb-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
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
        <p className="text-xs font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
          {project.type}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
          {project.title}
        </h3>
      </header>

      <div className="mt-4 space-y-3 text-sm leading-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Problem
          </p>
          <p className="mt-1 text-slate-600 dark:text-slate-300">
            {truncateText(project.problem, 110)}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Solution
          </p>
          <p className="mt-1 text-slate-600 dark:text-slate-300">
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
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Highlights
        </p>
        <ul className="mt-2 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-blue-300 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:bg-blue-900/50 sm:w-auto"
        >
          Case Study
        </Link>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-cyan-700 sm:w-auto"
          >
            Live Demo
          </a>
        ) : null}

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 sm:w-auto"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}
