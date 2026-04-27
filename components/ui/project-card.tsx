import Link from "next/link";
import type { Project } from "@/lib/site-data";
import { Tag } from "@/components/ui/tag";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <p className="text-xs font-medium text-blue-600">{project.category}</p>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{project.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 text-sm font-medium">
        <Link href={`/projects/${project.slug}`} className="text-blue-600 hover:text-blue-700">
          Case Study
        </Link>
        {project.links.github ? (
          <a href={project.links.github} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900">
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}
