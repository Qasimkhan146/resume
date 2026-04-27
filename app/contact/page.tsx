import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { siteMeta } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Muhammad Qasim for freelance and full-time opportunities.",
};

export default function ContactPage() {
  return (
    <section className="py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s Build Something Great"
          description="Share your project scope, timeline, and goals. I&apos;ll get back with a practical plan."
        />

        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-200 transition focus:ring"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-200 transition focus:ring"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Project Details</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-200 transition focus:ring"
              />
            </label>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              Send Inquiry
            </button>
          </form>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-base font-semibold text-slate-900">Direct Contact</h3>
            <p className="mt-3 text-sm text-slate-600">Email: {siteMeta.email}</p>
            <p className="mt-1 text-sm text-slate-600">Location: {siteMeta.location}</p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Available for freelance projects, startup collaborations, and full-time roles.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
