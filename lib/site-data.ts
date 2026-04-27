export type NavLink = {
  href: string;
  label: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type Service = {
  title: string;
  description: string;
};

export type TechGroup = {
  title: string;
  description: string;
  items: string[];
};

export const siteMeta = {
  name: "Qasim Sharif",
  role: "Full-Stack Developer",
  location: "Pakistan",
  email: "qasimkhan1243@gmail.com",
  headline: "Full-Stack Developer Building Scalable Web Products",
  subheadline:
    "I build fast, modern, and business-focused web applications using Next.js, MERN, and PERN stacks for startups, software houses, and freelance clients.",
} as const;

export const navLinks: NavLink[] = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#process", label: "Process" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export const stats: Stat[] = [
  { label: "Production Projects", value: "9+" },
  {
    label: "Primary Focus",
    value: "Next.js + React.js + Node.js + Express.js ",
  },
  { label: "Availability", value: "Freelance + Full-time" },
  { label: "Deployment", value: "Vercel / Netlify" },
];

export const services: Service[] = [
  {
    title: "SaaS Applications",
    description:
      "Build subscription-based platforms with scalable architecture, user roles, and long-term maintainability.",
  },
  {
    title: "Marketplace Platforms",
    description:
      "Develop buyer-seller systems with listings, authentication, and operational workflows.",
  },
  {
    title: "Admin Dashboards",
    description:
      "Create role-based dashboards for teams to manage data, users, and daily operations efficiently.",
  },
  {
    title: "E-commerce Websites",
    description:
      "Deliver commerce-ready solutions with product management, order flows, and admin controls.",
  },
  {
    title: "AI-powered Tools",
    description:
      "Integrate AI features into web products for automation, smarter workflows, and better user productivity.",
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "Build complete applications from frontend to backend, deployment, and ongoing iteration support.",
  },
];

export const techGroups: TechGroup[] = [
  {
    title: "Frontend",
    description:
      "Building fast, responsive interfaces with clean component architecture.",
    items: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "BootStrap",
      "Shadcn",
      "MUI",
    ],
  },
  {
    title: "Backend",
    description:
      "Designing reliable server-side logic and scalable API workflows.",
    items: ["Node.js", "Express.js", "Nest.js"],
  },
  {
    title: "Databases",
    description:
      "Structuring and querying application data for performance and maintainability.",
    items: ["MongoDB", "PostgreSQL", "MYSQL"],
  },
  {
    title: "DevOps & Tools",
    description:
      "Supporting delivery pipelines, deployments, and environment setup.",
    items: [
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Netlify",
      "AWS Basic",
      "Nginx",
    ],
  },
];

