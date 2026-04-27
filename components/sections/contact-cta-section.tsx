import { ButtonLink, Container, SectionHeading } from "@/components/ui";

export function ContactCtaSection() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
          <SectionHeading
            eyebrow="Contact"
            title="Have a Project in Mind?"
            description="Im available for freelance projects and full-time opportunities. Lets discuss your goals and timeline."
          />

          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Start a Conversation</ButtonLink>
            <ButtonLink href="/projects" variant="secondary" className="border-slate-500 bg-transparent text-white hover:bg-slate-800">
              Explore Projects
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
