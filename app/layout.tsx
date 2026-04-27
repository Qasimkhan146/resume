import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer, Navbar } from "@/components/sections";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Muhammad Qasim | Full-Stack Developer",
    template: "%s | Muhammad Qasim",
  },
  description:
    "Portfolio of Muhammad Qasim, a Full-Stack Developer specializing in Next.js, MERN, and PERN stacks.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
