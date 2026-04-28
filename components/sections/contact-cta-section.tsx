import { ContactForm, Container, SectionHeading } from "@/components/ui";

const contactLinks = [
  {
    label: "Email",
    value: "qasimkhan1243@gmail.com",
    href: "mailto:qasimkhan1243@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Qasimkhan146",
    href: "https://github.com/Qasimkhan146",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/qasimkhan146",
    href: "https://www.linkedin.com/in/qasimkhan146",
  },
  {
    label: "Upwork",
    value: "upwork.com/freelancers/~0164c6f7511bef52ab",
    href: "https://www.upwork.com/freelancers/~0164c6f7511bef52ab",
  },
];

function isValidContactLink(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export function ContactCtaSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-12 sm:py-16">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Contact"
          title="Have a project in mind? Let&apos;s build something great together."
          description="Share your goals and project context. I will review your message and respond with a practical next step."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="surface-card rounded-2xl p-5 shadow-sm sm:p-6">
            <ContactForm
              buttonText="Send Project Inquiry"
              helperText="Your message will be delivered directly to my provider email inbox."
            />
          </div>

          <aside className="surface-card rounded-2xl p-5 shadow-sm sm:p-6">
            <h3 className="text-base font-semibold text-(--color-text)">
              Contact Links
            </h3>
            <p className="mt-2 text-sm leading-6 text-(--color-muted)">
              You can also reach out directly through these channels.
            </p>

            <ul className="mt-5 space-y-3">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  {isValidContactLink(link.href) ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="surface-card block rounded-xl border border-(--color-border) bg-(--color-surface) px-4 py-3 transition hover:border-(--color-accent) hover:bg-[color-mix(in_srgb,var(--color-accent)_10%,var(--color-surface))]"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-(--color-muted)">
                        {link.label}
                      </p>
                      <p className="mt-1 break-all text-sm font-medium text-(--color-text)">
                        {link.value}
                      </p>
                    </a>
                  ) : (
                    <div className="rounded-xl border border-dashed border-(--color-border) bg-(--color-surface)/90 px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-(--color-muted)">
                        {link.label}
                      </p>
                      <p className="mt-1 break-all text-sm font-medium text-(--color-text)">
                        {link.value}
                      </p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
