import { techGroups } from "@/lib/site-data";
import { Container, SectionHeading, SkillGroupCard } from "@/components/ui";

export function TechStackSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-12 sm:py-16">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technology Stack"
          description="A focused, production-ready toolkit I use to build and deploy modern web applications."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {techGroups.map((group) => (
            <SkillGroupCard
              key={group.title}
              title={group.title}
              description={group.description}
              items={group.items}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

