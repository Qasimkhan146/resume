import { featuredProjects } from "@/lib/site-data";
import { Container, ProjectCard, SectionHeading } from "@/components/ui";

export function FeaturedProjectsSection() {
  return (
    <section className="py-14 sm:py-16" id="featured-projects">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected Projects"
          description="A curated set of projects that represent my strongest full-stack work for clients and product teams."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
