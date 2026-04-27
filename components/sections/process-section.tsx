import { processSteps } from "@/lib/site-data";
import { Container, SectionHeading } from "@/components/ui";

export function ProcessSection() {
  return (
    <section className="py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Process"
          title="How We Work Together"
          description="A clear process to keep delivery predictable and communication transparent."
        />

        <div className="grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold text-blue-600">Step {index + 1}</p>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
