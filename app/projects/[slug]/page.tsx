import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ButtonLink, Container, SectionHeading, Tag } from "@/components/ui";
import { getProjectBySlug, projectsData } from "@/lib/projects-data";

type ProjectDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const projectPath = `/projects/${project.slug}`;

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: projectPath,
    },
    openGraph: {
      title: `${project.title} | Project Case Study`,
      description: project.summary,
      url: projectPath,
      type: "article",
      images: [
        {
          url: project.image,
          alt: project.imageAlt,
          width: 1200,
          height: 675,
        },
      ],
    },
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
        <Link href="/projects" className="text-sm font-medium text-(--color-accent) hover:text-[var(--color-accent-hover)]">
          Back to Projects
        </Link>

        <SectionHeading
          level="h1"
          eyebrow={project.type}
          title={project.title}
          description={project.summary}
        />

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="surface-card rounded-2xl p-5">
            <h2 className="text-base font-semibold text-(--color-text)">Problem</h2>
            <p className="mt-2 text-sm leading-6 text-(--color-muted)">{project.problem}</p>
          </article>
          <article className="surface-card rounded-2xl p-5">
            <h2 className="text-base font-semibold text-(--color-text)">Solution</h2>
            <p className="mt-2 text-sm leading-6 text-(--color-muted)">{project.solution}</p>
          </article>
          <article className="surface-card rounded-2xl p-5">
            <h2 className="text-base font-semibold text-(--color-text)">Result</h2>
            <p className="mt-2 text-sm leading-6 text-(--color-muted)">{project.result}</p>
          </article>
        </div>

        <div className="surface-card rounded-2xl p-6">
          <p className="text-sm font-medium text-(--color-muted)">Role</p>
          <p className="mt-1 text-base text-(--color-text)">{project.role}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl ? <ButtonLink href={project.liveUrl}>Live Demo</ButtonLink> : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-(--color-border) bg-(--color-surface) px-5 py-2.5 text-sm font-medium text-(--color-text) transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--color-bg)"
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
