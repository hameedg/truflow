import Header from "./components/LandingPageComponents/Header";
import Hero from "./components/LandingPageComponents/Hero";
import Marquee from "./components/LandingPageComponents/Marquee";
import SplitSection from "./components/LandingPageComponents/SplitSection";
import Features from "./components/LandingPageComponents/Features";
import ExpandableSection from "./components/LandingPageComponents/ExpandableSection";
import Footer from "./components/LandingPageComponents/Footer";
import JoinSection from "./components/LandingPageComponents/JoinSection";
import GlobeSection from "./components/LandingPageComponents/GlobeSection";
import AdvantagesSection from "./components/LandingPageComponents/AdvantagesSection";

export default function Home() {
  return (
  // <div className="mt-0 mb-1.5 text-4xl font-bold leading-[1.3] bg-clip-text text-transparent bg-custom-gradient font-[family-name:var(--font-poppins)]">
  //     Sounds like a human, performs like an AI
  //   </div>
  <div className="font-[family-name:var(--font-poppins)]">
    <Header />
    <Hero />
    <Marquee />
    <SplitSection />
    <Features />
    <ExpandableSection />
    <AdvantagesSection />
    <GlobeSection />
    <JoinSection />
    <Footer />
    {/* <Circle /> */}
    {/* <DashboardSection /> */}
    
  </div>
  );
}
