import HeroSection from "./components/HomeComponents/heroSection";
import HomeSection2 from "./components/HomeComponents/homeSection2";
import WhyCircularITMatters from "./components/HomeComponents/WhyCircularITMatters";
import WhyChooseSection from "./components/HomeComponents/WhyChooseSection";
import OurServicesSection from "./components/HomeComponents/OurServicesSection";
import ContactSection from "./components/HomeComponents/ContactSection";
import HowItWorksSection from "./components/HomeComponents/HowItWorksSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <HomeSection2/>
      <OurServicesSection/>
      <WhyCircularITMatters/>
      <WhyChooseSection/>
      <HowItWorksSection/>
      <ContactSection/>
    </div>
  );
}
