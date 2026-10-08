import HeroSection from "@/components/HeroSection";
import HomeIntro from "@/components/home/HomeIntro";
import HomeServicesPreview from "@/components/home/HomeServicesPreview";
import HomeApproach from "@/components/home/HomeApproach";
import StatsSection from "@/components/StatsSection";
import HomeCta from "@/components/home/HomeCta";



export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeIntro />
      <HomeServicesPreview />
      <HomeApproach />
      <StatsSection />
      <HomeCta />
    </>
  );
}
