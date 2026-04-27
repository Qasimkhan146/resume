import { ButtonLink, Container } from "@/components/ui";

const techBadges = ["React.js", "Express.js", "Next.js", "Node.js", "PostgreSQL", "MongoDB"];

export function HeroSection() {
  return (
    <section id="home" className="scroll-mt-24 overflow-hidden py-14 sm:py-20 lg:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/50 blur-3xl dark:bg-blue-900/40" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_55%)]" />
      </div>

      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
          <div>
            <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300">
              Full-Stack Developer
            </p>

            <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-100">
              I build scalable web applications that help businesses grow and automate their workflows.
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
              Full-Stack Developer specializing in SaaS platforms, marketplaces, admin systems, and production-ready web applications using Next.js, Node.js, PostgreSQL, and MongoDB.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <ButtonLink href="/#projects" className="min-h-11 w-full sm:w-auto">
                View My Work
              </ButtonLink>
              <ButtonLink href="/#contact" variant="secondary" className="min-h-11 w-full sm:w-auto">
                Let&apos;s Build Your Project
              </ButtonLink>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/70 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-800 dark:hover:bg-blue-950/40"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <aside className="surface-card rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Why Companies Hire Me
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              <li>Builds complete products from UI to backend APIs</li>
              <li>Writes clean, maintainable, production-ready code</li>
              <li>Delivers responsive experiences across all devices</li>
              <li>Supports deployment and handover with clarity</li>
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
