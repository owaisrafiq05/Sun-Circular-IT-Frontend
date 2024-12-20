import HeroSection from "../components/ITDisposition/HeroSection";
import WhyITADMattersSection from "../components/ITDisposition/WhyITADMattersSection";
import ITADProcessSection from "../components/ITDisposition/ITADProcessSection";
import WhyChooseITADSection from "../components/ITDisposition/WhyChooseITADSection";
import BenefitsSection from "../components/ITDisposition/BenefitsSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <WhyITADMattersSection/>
      <ITADProcessSection/>
      <WhyChooseITADSection/>
      <BenefitsSection/>
    </div>
  );
}
