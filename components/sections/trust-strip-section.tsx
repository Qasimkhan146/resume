import { stats } from "@/lib/site-data";
import { Container } from "@/components/ui";

export function TrustStripSection() {
  return (
    <section className="pb-10">
      <Container>
        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-slate-50 p-4">
              <p className="text-lg font-semibold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
