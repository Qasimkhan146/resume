import { Container, SectionHeading } from "@/components/ui";

const deploymentItems = [
  {
    title: "Frontend Deployment",
    tools: "Vercel, Netlify",
    description:
      "Deploying modern frontend applications with environment configuration and stable production delivery.",
  },
  {
    title: "Backend Deployment",
    tools: "AWS (Basic Setups)",
    description:
      "Handling basic server deployment workflows for Node.js backends with practical production considerations.",
  },
  {
    title: "Containerization",
    tools: "Docker",
    description:
      "Containerizing applications for consistent development and deployment across environments.",
  },
  {
    title: "Automation",
    tools: "GitHub Actions CI/CD",
    description:
      "Setting up essential CI/CD pipelines for build checks and smoother release processes.",
  },
  {
    title: "Production Workflow",
    tools: "Monitoring and Release Basics",
    description:
      "Applying practical production-readiness fundamentals including release hygiene and ongoing iteration support.",
  },
];

export function DeploymentDevOpsSection() {
  return (
    <section id="deployment" className="scroll-mt-24 py-12 sm:py-16">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Deployment & DevOps"
          title="Production-Ready Delivery"
          description="I do not just build apps. I help prepare them for real-world usage with reliable deployment workflows and practical DevOps support."
        />

        <div className="surface-card rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 sm:p-6">
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
            My focus is on shipping maintainable products with dependable release processes. I keep the approach pragmatic and aligned with project needs, without overengineering.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {deploymentItems.map((item) => (
              <article
                key={item.title}
                className="surface-card rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800"
              >
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
                  {item.tools}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
