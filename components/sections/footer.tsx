import Link from "next/link";
import { Container } from "@/components/ui";
import { navLinks, siteMeta } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <Container className="py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{siteMeta.name}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{siteMeta.role}</p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2" aria-label="Footer">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative rounded-md px-1 py-1 text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900 after:absolute after:bottom-0 after:left-1 after:right-1 after:h-px after:origin-left after:scale-x-0 after:bg-blue-500/70 after:transition-transform after:duration-200 hover:after:scale-x-100 dark:text-slate-300 dark:hover:text-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-6 text-xs leading-6 text-slate-500 dark:text-slate-400">
          (c) {new Date().getFullYear()} {siteMeta.name}. Built with Next.js and Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
