import Container from "@/components/layout/Container";
import HeroSection from "@/components/layout/sections/HeroSection";
import PartnersSection from "@/components/layout/sections/PartnersSection";
import TechnologySection from "@/components/layout/sections/TechnologySection";

export default function Home() {
  return (
    <Container className="mt-4">
      <HeroSection />
      <PartnersSection />
      <TechnologySection />
    </Container>
  );
}