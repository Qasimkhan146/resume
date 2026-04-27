import { services } from "@/lib/site-data";
import { Container, SectionHeading } from "@/components/ui";

export function ServicesSection() {
  return (
    <section className="py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Services"
          title="How I Can Help"
          description="I partner with recruiters, founders, and teams to deliver reliable and scalable web products."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
