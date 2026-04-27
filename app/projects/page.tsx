import type { Metadata } from "next";
import { Container, ProjectCard, SectionHeading } from "@/components/ui";
import { projectsData } from "@/lib/projects-data";

const projectsDescription =
  "Selected full-stack projects across marketplaces, SaaS platforms, admin dashboards, and production-ready web applications.";

export const metadata: Metadata = {
  title: "Projects",
  description: projectsDescription,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Qasim Sharif",
    description: projectsDescription,
    url: "/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <section className="py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionHeading
          level="h1"
          eyebrow="Projects"
          title="All Projects"
          description="A complete view of projects focused on marketplaces, internal systems, and production-ready web applications."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

