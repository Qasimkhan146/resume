import type { Metadata } from "next";
import {
  AboutPreviewSection,
  ContactCtaSection,
  DeploymentDevOpsSection,
  FeaturedProjectsSection,
  HeroSection,
  ProcessSection,
  ServicesSection,
  TechStackSection,
  TrustStripSection,
  WhyChooseMeSection,
} from "@/components/sections";
import { Reveal } from "@/components/ui";
import { defaultSeo } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: defaultSeo.title },
  description: defaultSeo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultSeo.title,
    description: defaultSeo.description,
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <Reveal delay={40}>
        <TrustStripSection />
      </Reveal>
      <Reveal delay={60}>
        <AboutPreviewSection />
      </Reveal>
      <Reveal delay={70}>
        <WhyChooseMeSection />
      </Reveal>
      <Reveal delay={80}>
        <TechStackSection />
      </Reveal>
      <Reveal delay={90}>
        <DeploymentDevOpsSection />
      </Reveal>
      <Reveal delay={100}>
        <FeaturedProjectsSection />
      </Reveal>
      <Reveal delay={110}>
        <ProcessSection />
      </Reveal>
      <Reveal delay={120}>
        <ServicesSection />
      </Reveal>
      <Reveal delay={130}>
        <ContactCtaSection />
      </Reveal>
    </>
  );
}
