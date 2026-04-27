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

        <article className="surface-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
          <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300">
                Featured Project
              </p>

              <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-100">
                {featuredProject.title}
              </h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {featuredProject.type}
              </p>

              <div className="mt-5 grid gap-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Problem
                  </p>
                  <p className="mt-1">{featuredProject.problem}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
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
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-cyan-700 sm:w-auto"
                    >
                      Live Demo
                    </a>
                  ) : null}

                  {featuredProject.githubUrl ? (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 sm:w-auto"
                    >
                      GitHub
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>

            <aside className="surface-card space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Tech Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {featuredProject.techStack.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Highlights
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {featuredProject.highlights.slice(0, 4).map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
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
