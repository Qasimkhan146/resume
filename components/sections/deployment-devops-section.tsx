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

        <div className="surface-card shadow-md rounded-2xl p-5 sm:p-6">
          <p className="text-sm leading-7 text-(--color-muted)">
            My focus is on shipping maintainable products with dependable release processes. I keep the approach pragmatic and aligned with project needs, without overengineering.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {deploymentItems.map((item) => (
              <article
                key={item.title}
                className="surface-card shadow-sm rounded-xl p-4 border border-(--color-border)"
              >
                <h3 className="text-sm font-semibold text-(--color-text)">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-(--color-accent)">
                  {item.tools}
                </p>
                <p className="mt-2 text-sm leading-6 text-(--color-muted)">
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
