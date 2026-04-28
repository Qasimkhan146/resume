import type { Metadata } from "next";
import { ContactForm, Container, SectionHeading } from "@/components/ui";
import { siteMeta } from "@/lib/site-data";

const contactDescription =
  "Contact Qasim Sharif for freelance or full-time full-stack web development opportunities.";

export const metadata: Metadata = {
  title: "Contact",
  description: contactDescription,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Qasim Sharif",
    description: contactDescription,
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <section className="py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionHeading
          level="h1"
          eyebrow="Contact"
          title="Let&apos;s Build Something Great"
          description="Share your project scope, timeline, and goals. I&apos;ll get back with a practical plan."
        />

        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="surface-card border border-(--color-border) shadow-sm rounded-2xl p-6">
            <ContactForm
              buttonText="Send Inquiry"
              helperText="Submissions from this form are sent directly to my provider email."
            />
          </div>

          <aside className="surface-card border border-(--color-border) shadow-sm rounded-2xl p-6">
            <h2 className="text-base font-semibold text-(--color-text)">Direct Contact</h2>
            <p className="mt-3 text-sm text-(--color-muted)">Email: {siteMeta.email}</p>
            <p className="mt-1 text-sm text-(--color-muted)">Location: {siteMeta.location}</p>
            <p className="mt-4 text-sm leading-6 text-(--color-muted)">
              Available for freelance projects, startup collaborations, and full-time roles.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
