import { ButtonLink, Container, SectionHeading } from "@/components/ui";

const aboutStats = [
  {
    title: "Full-Stack Projects",
    detail: "Real-world product delivery",
  },
  {
    title: "Marketplace Apps",
    detail: "Buyer and seller workflows",
  },
  {
    title: "Admin Dashboards",
    detail: "Role-based operations systems",
  },
  {
    title: "Deployment Knowledge",
    detail: "Docker, CI/CD, and cloud basics",
  },
];

export function AboutPreviewSection() {
  return (
    <section id="about" className="scroll-mt-24 py-12 sm:py-16">
      <Container>
        <div className="surface-card rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="About Me"
                title="Full-Stack Developer Focused on Business-Ready Applications"
                description="I build reliable web products for teams that need maintainable code, solid architecture, and clear delivery."
              />

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                <p>
                  I am a Full-Stack Developer with hands-on experience building real-world applications including marketplaces, SaaS platforms, admin dashboards, and e-commerce systems.
                </p>
                <p>
                  I focus on writing clean, scalable code and delivering production-ready solutions, not just prototypes.
                </p>
                <p>
                  From idea to deployment, I help turn concepts into fully functional applications using modern technologies like Next.js, Node.js, PostgreSQL, and MongoDB. I also work with deployment and DevOps tools including Docker, GitHub Actions, Vercel, Netlify, and basic AWS setups.
                </p>
              </div>

              <div className="mt-6">
                <ButtonLink href="/about" variant="secondary" className="min-h-11 w-full sm:w-auto">
                  Read Full About
                </ButtonLink>
              </div>
            </div>

            <aside className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {aboutStats.map((item) => (
                <article
                  key={item.title}
                  className="surface-card rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800"
                >
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                    {item.detail}
                  </p>
                </article>
              ))}
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
