import { Container, SectionHeading } from "@/components/ui";

const workSteps = [
  {
    title: "Understand Requirements and Business Goals",
    description:
      "I start by aligning technical decisions with your business priorities, users, and delivery timeline.",
  },
  {
    title: "Plan Scalable Architecture",
    description:
      "I define a maintainable project structure and data flow that supports long-term growth.",
  },
  {
    title: "Develop Clean and Maintainable Code",
    description:
      "I implement production-ready features with clear code organization, reusable components, and quality standards.",
  },
  {
    title: "Implement Deployment and CI/CD",
    description:
      "I set up deployment workflows so releases are consistent, reliable, and easy to manage.",
  },
  {
    title: "Provide Ongoing Support and Improvements",
    description:
      "After launch, I help optimize, refine, and extend features based on usage and business feedback.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 py-12 sm:py-16">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="How I Work"
          title="A Structured Process for Scalable Delivery"
          description="My goal is to deliver scalable and production-ready solutions with clear communication and predictable execution."
        />

        <div className="surface-card shadow-md rounded-2xl p-5 sm:p-6">
          <p className="text-sm leading-6 text-(--color-muted)">
            Each phase is designed to reduce risk, maintain quality, and keep your product moving forward with confidence.
          </p>

          <div className="relative mt-6">
            <div className="absolute bottom-0 left-5 top-0 w-px bg-(--color-border) md:hidden" />
            <div className="absolute left-0 right-0 top-5 hidden h-px bg-(--color-border) md:block" />

            <ol className="space-y-5 md:grid md:grid-cols-5 md:gap-4 md:space-y-0">
              {workSteps.map((step, index) => (
                <li key={step.title} className="relative pl-14 md:pl-0 ">
                  <span className="absolute left-0 top-0 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) bg-[color-mix(in_srgb,var(--color-accent)_10%,var(--color-surface))] text-sm font-semibold text-(--color-accent) transition-colors duration-200 md:left-1/2 md:-translate-x-1/2">
                    {index + 1}
                  </span>

                  <article className="surface-card h-full rounded-2xl p-4 md:mt-8 border border-(--color-border) shadow-sm">
                    <h3 className="text-sm font-semibold leading-6 text-(--color-text)">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-(--color-muted)">
                      {step.description}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
