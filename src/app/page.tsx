import HeroSection from "@/components/HeroSection";
import HomeIntro from "@/components/home/HomeIntro";
import HomeServicesPreview from "@/components/home/HomeServicesPreview";
import HomeApproach from "@/components/home/HomeApproach";
import StatsSection from "@/components/StatsSection";
import HomeReferencesPreview from "@/components/home/HomeReferencesPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import HomeCta from "@/components/home/HomeCta";

export const metadata = {
  title: "Kalyce Consulting | Conseil en Management & Stratégie",
  description:
    "Cabinet de conseil en management. Stratégie d'entreprise, conduite du changement et performance organisationnelle au service des dirigeants.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeIntro />
      <HomeServicesPreview />
      <HomeApproach />
      <StatsSection />
      <HomeReferencesPreview />
      <TestimonialsSection />
      <HomeCta />
    </>
  );
}
