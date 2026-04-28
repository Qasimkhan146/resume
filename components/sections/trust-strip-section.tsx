import { stats } from "@/lib/site-data";
import { Container } from "@/components/ui";

export function TrustStripSection() {
  return (
    <section className="pb-10">
      <Container>
        <div className="surface-card shadow-md grid gap-4 rounded-2xl p-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="surface-card shadow-sm rounded-xl p-4 border border-(--color-border)">
              <p className="text-lg font-semibold text-(--color-text)">{stat.value}</p>
              <p className="mt-1 text-sm text-(--color-muted)">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
