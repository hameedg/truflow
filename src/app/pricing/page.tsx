import Footer from "../components/LandingPageComponents/Footer";
import Header from "../components/LandingPageComponents/Header";
import JoinSection from "../components/LandingPageComponents/JoinSection";
import FaqComponent from "../components/PricingPageComponents/Faq";
import HeroPricing from "../components/PricingPageComponents/Hero";
import PricingPage from "../components/PricingPageComponents/HomePricing";


export default function Home() {
  return (
  // <div className="mt-0 mb-1.5 text-4xl font-bold leading-[1.3] bg-clip-text text-transparent bg-custom-gradient font-[family-name:var(--font-poppins)]">
  //     Sounds like a human, performs like an AI
  //   </div>
  <div className="font-[family-name:var(--font-poppins)] bg-[#f0f0f0]">
    <Header />
    <HeroPricing />
<PricingPage />
<FaqComponent />
<JoinSection />
    <Footer />
    
  </div>
  );
}
