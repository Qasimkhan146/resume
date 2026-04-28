import { projectsData, type PortfolioProject } from "@/lib/projects-data";
import { Container, ProjectCard, SectionHeading, Tag } from "@/components/ui";

function pickFeaturedProject(projects: PortfolioProject[]) {
  return (
    projects.find((project) => project.slug === "ims") ??
    projects.find((project) => project.slug === "kuchbhi-io") ??
    projects[0]
  );
}

function truncateText(value: string, max: number) {
  if (value.length <= max) {
    return value;
  }

  return `${value.slice(0, max).trim()}...`;
}

export function FeaturedProjectsSection() {
  const bestProjects = projectsData.filter((project) => project.featured !== false).slice(0, 6);
  const featuredProject = pickFeaturedProject(bestProjects);
  const remainingProjects = bestProjects.filter(
    (project) => project.slug !== featuredProject.slug,
  );

  return (
    <section id="projects" className="scroll-mt-24 py-12 sm:py-16">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          description="A focused set of production-oriented projects built for real business workflows and client needs."
        />

        <article className="surface-card rounded-3xl p-5 shadow-sm sm:p-8">
          <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="inline-flex rounded-full border border-(--color-border) bg-[color-mix(in_srgb,var(--color-accent)_10%,var(--color-surface))] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-(--color-accent)">
                Featured Project
              </p>

              <h3 className="mt-4 text-xl font-semibold tracking-tight text-(--color-text) sm:text-3xl">
                {featuredProject.title}
              </h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-(--color-muted)">
                {featuredProject.type}
              </p>

              <div className="mt-5 grid gap-4 text-sm leading-6 text-(--color-muted)">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-(--color-muted)">
                    Problem
                  </p>
                  <p className="mt-1">{featuredProject.problem}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-(--color-muted)">
                    Solution
                  </p>
                  <p className="mt-1">{featuredProject.solution}</p>
                </div>
              </div>

              {featuredProject.liveUrl || featuredProject.githubUrl ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {featuredProject.liveUrl ? (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-(--color-accent) px-4 py-2 text-sm font-medium text-(--color-surface) transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--color-accent-hover) sm:w-auto"
                    >
                      Live Demo
                    </a>
                  ) : null}

                  {featuredProject.githubUrl ? (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-(--color-border) bg-(--color-surface) px-4 py-2 text-sm font-medium text-(--color-text) transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--color-bg) sm:w-auto"
                    >
                      GitHub
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>

            <aside className="surface-card shadow-sm border border-(--color-border) space-y-5 rounded-2xl p-5 bg-(--color-surface)">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-(--color-muted)">
                  Tech Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {featuredProject.techStack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-(--color-muted)">
                  Highlights
                </p>
                <ul className="mt-3 space-y-2 text-sm text-(--color-muted)">
                  {featuredProject.highlights.slice(0, 4).map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-(--color-accent)" />
                      <span>{truncateText(highlight, 75)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </article>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {remainingProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
