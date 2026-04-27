import type { Metadata } from "next";
import { Container, ProjectCard, SectionHeading } from "@/components/ui";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected full-stack projects across marketplace, SaaS, and admin systems.",
};

export default function ProjectsPage() {
  return (
    <section className="py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Projects"
          title="All Projects"
          description="A complete view of the products I have built using Next.js, MERN, and PERN stacks."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
