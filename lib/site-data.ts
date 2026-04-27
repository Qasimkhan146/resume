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
  items: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  category: string;
  stack: string[];
  featured: boolean;
  role: string;
  challenge: string;
  solution: string;
  result: string;
  links: {
    live?: string;
    github?: string;
  };
};

export const siteMeta = {
  name: "Muhammad Qasim",
  role: "Full-Stack Developer",
  location: "Pakistan",
  email: "hello@example.com",
  headline: "Full-Stack Developer Building Scalable Web Products",
  subheadline:
    "I build fast, modern, and business-focused web applications using Next.js, MERN, and PERN stacks for startups, software houses, and freelance clients.",
} as const;

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const stats: Stat[] = [
  { label: "Production Projects", value: "7+" },
  { label: "Primary Focus", value: "Next.js + Node.js" },
  { label: "Availability", value: "Freelance + Full-time" },
  { label: "Deployment", value: "Vercel / Netlify" },
];

export const services: Service[] = [
  {
    title: "Custom Full-Stack Web Apps",
    description:
      "End-to-end product development from architecture and UI to APIs and deployment.",
  },
  {
    title: "MVP and SaaS Development",
    description:
      "Fast, iterative shipping for startup ideas with maintainable foundations.",
  },
  {
    title: "Marketplace and Admin Systems",
    description:
      "Complex role-based dashboards, listing flows, and operations panels.",
  },
  {
    title: "API Integration and Backend Engineering",
    description:
      "Robust API design, integrations, data modeling, and business logic implementation.",
  },
  {
    title: "Deployment and CI/CD Support",
    description:
      "Basic DevOps setup with Docker, GitHub Actions, and cloud deployment workflows.",
  },
];

export const techGroups: TechGroup[] = [
  {
    title: "Frontend",
    items: ["Next.js", "React.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "DevOps",
    items: ["Docker", "GitHub Actions", "Vercel", "Netlify", "AWS Basics"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    description: "Clarify goals, user flows, constraints, and delivery priorities.",
  },
  {
    title: "Plan",
    description: "Define architecture, milestones, and implementation roadmap.",
  },
  {
    title: "Build",
    description: "Develop clean, maintainable frontend and backend modules.",
  },
  {
    title: "Deploy",
    description: "Ship stable releases with environment and CI/CD configuration.",
  },
  {
    title: "Support",
    description: "Iterate based on feedback, performance, and feature expansion.",
  },
];

export const projects: Project[] = [
  {
    slug: "ims",
    name: "IMS",
    category: "Business Management",
    summary: "Software house management platform with role-based workflows.",
    stack: ["Next.js", "Express", "PostgreSQL"],
    featured: true,
    role: "Full-Stack Developer",
    challenge: "Operational workflows were fragmented across tools.",
    solution:
      "Built a centralized dashboard system with modular backend services and structured relational data.",
    result:
      "Improved team visibility and streamlined project, HR, and task operations in one system.",
    links: {
      github: "#",
    },
  },
  {
    slug: "kuchbhi-io",
    name: "Kuchbhi.io",
    category: "Marketplace",
    summary: "Marketplace app with scalable listing and transaction flows.",
    stack: ["Next.js", "Express", "MongoDB"],
    featured: true,
    role: "Full-Stack Developer",
    challenge: "Needed reliable multi-user marketplace behavior and fast search flows.",
    solution:
      "Implemented optimized listing architecture, API pagination, and structured product pipelines.",
    result:
      "Delivered a robust marketplace experience with clear buyer/seller interactions.",
    links: {
      github: "#",
    },
  },
  {
    slug: "bidbuild",
    name: "BidBuild",
    category: "Construction Portal",
    summary: "MERN construction portal for project lifecycle and communication.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    featured: true,
    role: "Full-Stack Developer",
    challenge: "Construction workflows required domain-specific data and portal UX.",
    solution:
      "Built custom modules for proposals, schedules, and client-side collaboration.",
    result:
      "Enabled smoother communication and operations between teams and clients.",
    links: {
      github: "#",
    },
  },
  {
    slug: "chota-bazar",
    name: "Chota Bazar",
    category: "Marketplace + Admin",
    summary: "Marketplace product with admin controls and modern frontend.",
    stack: ["MERN", "Next.js Frontend"],
    featured: true,
    role: "Full-Stack Developer",
    challenge: "Required consumer-friendly shopping UX with internal admin management.",
    solution:
      "Developed customer storefront and admin panel with shared APIs and reusable UI.",
    result:
      "Reduced admin overhead while keeping customer-side interactions smooth.",
    links: {
      github: "#",
    },
  },
  {
    slug: "mobilemate",
    name: "MobileMate",
    category: "Classified Platform",
    summary: "Mobile information and buying/selling platform built with MERN.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    featured: false,
    role: "Full-Stack Developer",
    challenge: "Needed dynamic product data and trust-focused listing experience.",
    solution:
      "Implemented structured listing models and clear filtering for users.",
    result:
      "Delivered a practical product discovery and trade platform.",
    links: {
      github: "#",
    },
  },
  {
    slug: "omega-wallet",
    name: "Omega Wallet",
    category: "E-commerce + Admin",
    summary: "E-commerce platform with admin management and operational controls.",
    stack: ["Next.js", "Express", "MongoDB"],
    featured: true,
    role: "Full-Stack Developer",
    challenge: "Business required stable order, catalog, and admin workflows.",
    solution:
      "Built modular storefront and admin tooling with scalable backend endpoints.",
    result:
      "Delivered a production-ready commerce platform aligned to business operations.",
    links: {
      github: "#",
    },
  },
  {
    slug: "resume-builder",
    name: "Resume Builder",
    category: "Productivity Tool",
    summary: "Resume builder app with Next.js frontend and backend integration.",
    stack: ["Next.js", "Node.js", "Tailwind CSS"],
    featured: true,
    role: "Full-Stack Developer",
    challenge: "Users needed quick CV generation with simple UX.",
    solution:
      "Built a guided form flow with clean templates and API-powered persistence.",
    result:
      "Enabled users to create professional resumes in a streamlined process.",
    links: {
      github: "#",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
