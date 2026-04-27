import { siteMeta } from "@/lib/site-data";
import { ButtonLink, Container, Tag } from "@/components/ui";

export function HeroSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Portfolio</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {siteMeta.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {siteMeta.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/projects">View Projects</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Let&apos;s Work Together
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Tag>Next.js</Tag>
              <Tag>MERN</Tag>
              <Tag>PERN</Tag>
              <Tag>TypeScript</Tag>
              <Tag>javaScript</Tag>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Current Focus</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>Building scalable full-stack web platforms</li>
              <li>Designing clean and responsive frontend systems</li>
              <li>Shipping production-ready APIs and integrations</li>
              <li>Supporting deployment with CI/CD basics</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
