import Image from "next/image";
import HeroSection from "../components/WhyCircularITComp/HeroSection";
import ReduceResourcesSection from "../components/WhyCircularITComp/ReduceResourcesSection";
import ReduceFootprintSection from "../components/WhyCircularITComp/ReduceFootprintSection";
import ImpactSection from "../components/WhyCircularITComp/ImpactSection";
import RelevantArticles from "../components/WhyCircularITComp/RelevantArticles";
import ContactSection from "../components/WhyCircularITComp/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <ReduceResourcesSection/>
      <ReduceFootprintSection/>
      <ImpactSection/>
      <RelevantArticles/>
      <ContactSection/>
    </div>
  );
}
