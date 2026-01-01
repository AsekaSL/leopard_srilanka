import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomCTA from "@/components/layout/MobileBottomCTA";
import HeroSection from "@/components/sections/HeroSection";
import TrustInfoStrip from "@/components/sections/TrustInfoStrip";
import IntroductionSection from "@/components/sections/IntroductionSection";
import PackagesSection from "@/components/sections/PackagesSection";
import JourneySection from "@/components/sections/JourneySection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import CalculatorCTA from "@/components/sections/CalculatorCTA";
import ResponsibleTourism from "@/components/sections/ResponsibleTourism";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustInfoStrip />
      <IntroductionSection />
      <PackagesSection />
      <JourneySection />
      <DestinationsSection />
      <CalculatorCTA />
      <ResponsibleTourism />
      <ReviewsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <MobileBottomCTA />
    </>
  );
}

