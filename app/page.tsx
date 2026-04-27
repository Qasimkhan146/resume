import {
  AboutPreviewSection,
  ContactCtaSection,
  FeaturedProjectsSection,
  HeroSection,
  ProcessSection,
  ServicesSection,
  TechStackSection,
  TrustStripSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStripSection />
      <FeaturedProjectsSection />
      <ServicesSection />
      <TechStackSection />
      <ProcessSection />
      <AboutPreviewSection />
      <ContactCtaSection />
    </>
  );
}
