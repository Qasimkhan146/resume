import Link from "next/link";
import { Container } from "@/components/ui";
import { navLinks, siteMeta } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-900">{siteMeta.name}</p>
            <p className="text-sm text-slate-500">{siteMeta.role}</p>
          </div>

          <nav className="flex flex-wrap items-center gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-600 hover:text-slate-900">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-6 text-xs text-slate-500">
           {new Date().getFullYear()} {siteMeta.name}. Built with Next.js and Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
