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
              className="surface-card rounded-2xl p-5 shadow-sm border border-(--color-border)"
            >
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-accent)_10%,var(--color-surface))] text-xs font-semibold text-(--color-accent) transition-colors duration-200">
                {index + 1}
              </div>
              <h3 className="mt-3 text-base font-semibold text-(--color-text)">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-(--color-muted)">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
