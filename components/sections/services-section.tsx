import { services } from "@/lib/site-data";
import { Container, SectionHeading, ServiceCard } from "@/components/ui";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 py-12 sm:py-16">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="What I Can Build For You"
          title="Services Designed for Real Product Delivery"
          description="I work with clients from freelance platforms and product teams to build practical, production-ready web solutions that align with business goals."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

