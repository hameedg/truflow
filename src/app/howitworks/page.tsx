import DashboardSection from "../components/LandingPageComponents/DashboardImage";
import Features from "../components/LandingPageComponents/Features";
import Footer from "../components/LandingPageComponents/Footer";
import Header from "../components/LandingPageComponents/Header";
import JoinSection from "../components/LandingPageComponents/JoinSection";
import FaqComponent from "../components/PricingPageComponents/Faq";


export default function Home() {
  return (
  // <div className="mt-0 mb-1.5 text-4xl font-bold leading-[1.3] bg-clip-text text-transparent bg-custom-gradient font-[family-name:var(--font-poppins)]">
  //     Sounds like a human, performs like an AI
  //   </div>
  <div className="font-[family-name:var(--font-poppins)] bg-[#f0f0f0]">
    <Header />
<DashboardSection />
<Features />
<FaqComponent />
<JoinSection />
    <Footer />
    
  </div>
  );
}
