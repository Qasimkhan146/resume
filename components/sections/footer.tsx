import Link from "next/link";
import { Container } from "@/components/ui";
import { navLinks, siteMeta } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-text">
              {siteMeta.name}
            </p>
            <p className="text-sm text-muted">
              {siteMeta.role}
            </p>
          </div>

          <nav
            className="flex flex-wrap items-center gap-x-4 gap-y-2"
            aria-label="Footer"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="footer-nav-link relative rounded-md px-1 py-1 text-sm transition-colors duration-200 after:absolute after:bottom-0 after:left-1 after:right-1 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-6 text-xs leading-6 text-muted">
          © {new Date().getFullYear()} {siteMeta.name}. Built with Next.js and
          Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}