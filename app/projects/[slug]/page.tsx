import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ButtonLink, Container, SectionHeading, Tag } from "@/components/ui";
import { getProjectBySlug, projects } from "@/lib/site-data";

type ProjectDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-14 sm:py-16">
      <Container className="space-y-8">
        <Link href="/projects" className="text-sm font-medium text-blue-600 hover:text-blue-700">
          ? Back to Projects
        </Link>

        <SectionHeading
          eyebrow={project.category}
          title={project.name}
          description={project.summary}
        />

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-semibold text-slate-900">Challenge</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{project.challenge}</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-semibold text-slate-900">Solution</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{project.solution}</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-semibold text-slate-900">Result</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{project.result}</p>
          </article>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm font-medium text-slate-500">Role</p>
          <p className="mt-1 text-base text-slate-800">{project.role}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.live ? <ButtonLink href={project.links.live}>Live Demo</ButtonLink> : null}
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
