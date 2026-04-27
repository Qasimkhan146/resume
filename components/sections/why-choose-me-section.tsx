import { Container, SectionHeading } from "@/components/ui";

const valuePoints = [
  {
    title: "Real-World Project Experience",
    description:
      "Hands-on delivery across marketplaces, SaaS platforms, dashboards, and e-commerce products.",
  },
  {
    title: "Clean and Scalable Code",
    description:
      "I build maintainable codebases designed for growth, team collaboration, and long-term stability.",
  },
  {
    title: "Fast Communication",
    description:
      "Clear updates, quick responses, and dependable coordination to keep projects moving without confusion.",
  },
  {
    title: "Deployment and DevOps Knowledge",
    description:
      "Practical experience with Docker, CI/CD workflows, and production deployment basics.",
  },
  {
    title: "Business-Focused Execution",
    description:
      "I prioritize outcomes that solve business problems, not just code output.",
  },
];

export function WhyChooseMeSection() {
  return (
    <section id="why-choose-me" className="scroll-mt-24 py-12 sm:py-16">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Why Choose Me"
          title="A Reliable Technical Partner for Product Delivery"
          description="I combine practical engineering with business awareness to help teams ship production-ready applications with confidence."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {valuePoints.map((point, index) => (
            <article
              key={point.title}
              className="surface-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700 transition-colors duration-200 dark:bg-blue-950 dark:text-blue-300">
                {index + 1}
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-slate-100">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
