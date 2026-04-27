import type { Metadata } from "next";
import { Container, SectionHeading, Tag } from "@/components/ui";
import { siteMeta, techGroups } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description: "About Muhammad Qasim, full-stack developer focused on scalable web products.",
};

export default function AboutPage() {
  return (
    <section className="py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="About Me"
          title="Full-Stack Developer for Product Teams and Freelance Clients"
          description="I build dependable, modern web applications with strong attention to architecture, user experience, and delivery quality."
        />

        <article className="rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 sm:text-base">
          <p>
            I&apos;m {siteMeta.name}, a {siteMeta.role} working with Next.js, React.js, Node.js, Express.js, MongoDB, and PostgreSQL.
            My work spans complete product development, from frontend systems and backend APIs to deployment on modern hosting platforms.
          </p>
          <p className="mt-4">
            I enjoy solving business problems through clean software, structured delivery, and clear communication.
            I can contribute as an individual builder or collaborate directly with engineering and product teams.
          </p>
        </article>

        <div className="grid gap-4 md:grid-cols-2">
          {techGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
