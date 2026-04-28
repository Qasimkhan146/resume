"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteMeta } from "@/lib/site-data";
import { Container, ThemeToggle } from "@/components/ui";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-border">
      <Container className="flex h-14 items-center justify-between gap-3 sm:h-16 sm:gap-4">
        <Link
          href="/#home"
          className="shrink-0 text-sm font-semibold tracking-tight text-text transition-colors duration-200 hover:text-accent sm:text-base"
        >
          {siteMeta.name}
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted transition-colors duration-200 hover:text-text after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-(--color-accent) after:opacity-70 after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-text transition-colors duration-200 lg:hidden"
            onMouseEnter={e =>
            ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "color-mix(in srgb, var(--color-accent) 10%, var(--color-surface))")
            }
            onMouseLeave={e =>
            ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "var(--color-surface)")
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
          >
            <span className="relative block h-4 w-4" aria-hidden>
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 bg-current transition-transform duration-200 ${isMenuOpen ? "translate-y-1.75 rotate-45" : ""
                  }`}
              />
              <span
                className={`absolute left-0 top-1.75 h-0.5 w-4 bg-current transition-opacity duration-200 ${isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
              />
              <span
                className={`absolute left-0 top-3.5 h-0.5 w-4 bg-current transition-transform duration-200 ${isMenuOpen ? "-translate-y-1.75 -rotate-45" : ""
                  }`}
              />
            </span>
          </button>
        </div>
      </Container>

      {isMenuOpen ? (
        <div id="mobile-nav" className="lg:hidden border-t border-border bg-surface">
          <Container className="flex max-h-[calc(100vh-3.5rem)] flex-col gap-1 overflow-y-auto py-3 sm:max-h-[calc(100vh-4rem)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-text transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}