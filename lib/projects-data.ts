export type PortfolioProject = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
  role: string;
  techStack: string[];
  highlights: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

const defaultProjectPlaceholder = "/images/projects/project-placeholder.svg";

export const projectsData: PortfolioProject[] = [
  {
    slug: "ims",
    title: "IMS",
    type: "Software House Management System",
    summary: "Software house management platform with role-based workflows and centralized operations.",
    problem:
      "Managing internal workflows, employees, and tasks is complex without a centralized system.",
    solution:
      "Built a full-stack management system to handle employee data, project tracking, and internal operations.",
    result:
      "Improved team visibility and streamlined project, HR, and task operations in one system.",
    role: "Full-Stack Developer",
    techStack: ["Next.js", "Node.js", "Express.js", "Prisma", "PostgreSQL"],
    highlights: [
      "Role-based access",
      "Task and project management",
      "Scalable backend architecture",
    ],
    liveUrl: "",
    githubUrl: "",
    image: defaultProjectPlaceholder,
    imageAlt: "Placeholder preview for IMS software house management system project",
    featured: true,
  },
  {
    slug: "kuchbhi-io",
    title: "Kuchbhi.io",
    type: "Marketplace Platform",
    summary: "Marketplace platform for scalable product listings and admin-controlled operations.",
    problem: "Users need a scalable platform to buy and sell products.",
    solution:
      "Built a marketplace with authentication, product listings, and admin control.",
    result:
      "Delivered a robust marketplace experience with clear buyer-seller workflows.",
    role: "Full-Stack Developer",
    techStack: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      "User authentication",
      "Product management",
      "Admin panel",
      "Scalable architecture",
    ],
    liveUrl: "",
    githubUrl: "",
    image: defaultProjectPlaceholder,
    imageAlt: "Placeholder preview for Kuchbhi.io marketplace platform project",
    featured: true,
  },
  {
    slug: "bidbuild",
    title: "BidBuild",
    type: "Construction Client Portal",
    summary: "Construction portal for project lifecycle, bidding workflows, and client-contractor collaboration.",
    problem:
      "Construction clients and contractors need a platform to connect and manage bids.",
    solution:
      "Developed a web platform for construction project and bidding workflows.",
    result:
      "Enabled smoother communication and operations between project teams and clients.",
    role: "Full-Stack Developer",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js"],
    highlights: [
      "Project listing",
      "Bidding system",
      "Client-contractor interaction",
      "Dashboard features",
    ],
    liveUrl: "",
    githubUrl: "",
    image: defaultProjectPlaceholder,
    imageAlt: "Placeholder preview for BidBuild construction portal project",
    featured: true,
  },
  {
    slug: "resume-builder",
    title: "Resume Builder",
    type: "Resume Builder",
    summary: "Resume builder application with dynamic templates and ATS-friendly output.",
    problem: "Users struggle to create professional resumes.",
    solution: "Developed a resume builder with dynamic templates and clean UX.",
    result:
      "Enabled users to create professional resumes quickly through a streamlined workflow.",
    role: "Full-Stack Developer",
    techStack: ["Next.js", "PostgreSQL", "Prisma"],
    highlights: [
      "Dynamic resume generation",
      "ATS-friendly formatting",
      "Clean UI",
    ],
    liveUrl: "",
    githubUrl: "",
    image: defaultProjectPlaceholder,
    imageAlt: "Placeholder preview for Resume Builder web application project",
    featured: true,
  },
  {
    slug: "omega-wallet",
    title: "Omega Wallet",
    type: "E-commerce Platform",
    summary: "E-commerce platform with admin controls for product and order management.",
    problem: "Businesses need a platform to sell products with admin control.",
    solution: "Built an e-commerce system with product and admin management.",
    result:
      "Delivered a production-ready commerce platform aligned with day-to-day operations.",
    role: "Full-Stack Developer",
    techStack: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    highlights: ["Product management", "Order flow", "Admin dashboard"],
    liveUrl: "",
    githubUrl: "",
    image: defaultProjectPlaceholder,
    imageAlt: "Placeholder preview for Omega Wallet e-commerce project",
    featured: true,
  },
  {
    slug: "mobilemate",
    title: "MobileMate",
    type: "Mobile Buying and Selling Platform",
    summary: "Mobile-focused marketplace platform for product discovery and trading workflows.",
    problem: "Users need a platform for mobile information and buying/selling.",
    solution: "Built a mobile-focused marketplace-style platform.",
    result:
      "Delivered practical listing and discovery flows for mobile-focused buyers and sellers.",
    role: "Full-Stack Developer",
    techStack: ["Next.js", "Node.js", "MongoDB", "Express.js"],
    highlights: ["Mobile listings", "Product details", "Marketplace flow"],
    liveUrl: "",
    githubUrl: "",
    image: defaultProjectPlaceholder,
    imageAlt: "Placeholder preview for MobileMate buying and selling platform project",
    featured: false,
  },
];

export const featuredProjects = projectsData.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}
