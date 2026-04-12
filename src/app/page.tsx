import HeroSection from "@/components/HeroSection";
import ReferencesSection from "@/components/ReferencesSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ReferencesSection />
      <StatsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
