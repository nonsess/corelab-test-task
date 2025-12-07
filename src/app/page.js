import Container from "@/components/layout/Container";
import ForWhoSection from "@/components/layout/sections/ForWhoSection";
import GeographySection from "@/components/layout/sections/GeographySection";
import HeroSection from "@/components/layout/sections/HeroSection";
import PartnersSection from "@/components/layout/sections/PartnersSection";
import PossibilitiesSection from "@/components/layout/sections/PossibilitiesSection";
import ReviewsSection from "@/components/layout/sections/ReviewsSection";
import TechnologyExplanationSection from "@/components/layout/sections/TechnologyExplanationSection";
import TechnologySection from "@/components/layout/sections/TechnologySection";

export default function Home() {
  return (
    <Container className="mt-4">
      <HeroSection />
      <PartnersSection />
      <TechnologySection />
      <TechnologyExplanationSection />
      <PossibilitiesSection />
      <ForWhoSection />
      <ReviewsSection />
      <GeographySection />
    </Container>
  );
}