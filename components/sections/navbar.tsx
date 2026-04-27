import Link from "next/link";
import { navLinks, siteMeta } from "@/lib/site-data";
import { ButtonLink, Container } from "@/components/ui";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-base font-semibold tracking-tight text-slate-900">
          {siteMeta.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>

        <ButtonLink href="/contact" className="hidden md:inline-flex">
          Hire Me
        </ButtonLink>
      </Container>
    </header>
  );
}
