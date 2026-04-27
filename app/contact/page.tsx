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
          <div className="surface-card rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <ContactForm
              buttonText="Send Inquiry"
              helperText="Submissions from this form are sent directly to my provider email."
            />
          </div>

          <aside className="surface-card rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">Direct Contact</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Email: {siteMeta.email}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Location: {siteMeta.location}</p>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Available for freelance projects, startup collaborations, and full-time roles.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
