export const DEFAULT_SITE_URL = "http://localhost:3000";

function normalizeSiteUrl(value?: string) {
  if (!value) {
    return null;
  }

  return value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;
}

const rawSiteUrl = normalizeSiteUrl(DEFAULT_SITE_URL) ?? DEFAULT_SITE_URL;

export const siteUrl = new URL(rawSiteUrl);

export const defaultSeo = {
  title: "Full-Stack Developer Portfolio | Next.js Node.js MERN PERN",
  description:
    "Full-Stack Developer building marketplaces, SaaS platforms, admin dashboards, and production-ready web applications with Next.js, Node.js, PostgreSQL, and MongoDB.",
  keywords: [
    "Full-Stack Developer",
    "Next.js developer",
    "Node.js developer",
    "MERN stack",
    "PERN stack",
    "React.js",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "SaaS development",
    "Marketplace development",
    "Admin dashboard development",
  ],
  ogImagePath: "/og-cover.svg",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
