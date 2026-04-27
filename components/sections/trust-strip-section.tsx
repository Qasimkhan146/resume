import { stats } from "@/lib/site-data";
import { Container } from "@/components/ui";

export function TrustStripSection() {
  return (
    <section className="pb-10">
      <Container>
        <div className="surface-card grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-2 lg:grid-cols-4 dark:border-slate-800 dark:bg-slate-900">
          {stats.map((stat) => (
            <div key={stat.label} className="surface-card rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
              <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
