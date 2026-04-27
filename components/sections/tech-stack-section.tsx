import { techGroups } from "@/lib/site-data";
import { Container, SectionHeading, Tag } from "@/components/ui";

export function TechStackSection() {
  return (
    <section className="py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I Use"
          description="A practical stack focused on performance, maintainability, and business delivery."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {techGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
