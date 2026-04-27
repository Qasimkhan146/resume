import { ButtonLink, Container, SectionHeading } from "@/components/ui";

export function AboutPreviewSection() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <SectionHeading
            eyebrow="About"
            title="Product-Minded Full-Stack Developer"
            description="I focus on building web products that solve real business problems, with clean architecture and dependable delivery from frontend to deployment."
          />

          <p className="mt-4 text-sm leading-7 text-slate-600">
            I work across Next.js, MERN, and PERN stacks, and I value clarity, code quality, and shipping momentum.
            Whether you need a complete web app, admin portal, or feature iteration, I can help move it from idea to production.
          </p>

          <div className="mt-6">
            <ButtonLink href="/about" variant="secondary">
              Read Full About
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
