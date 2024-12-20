import Image from "next/image";
import HeroSection from "../components/WhyCircularITComp/HeroSection";
import ReduceResourcesSection from "../components/WhyCircularITComp/ReduceResourcesSection";
import ReduceITSection from "../components/WhyCircularITComp/ReduceFootprintSection";
import ImpactSection from "../components/WhyCircularITComp/ImpactSection";
import RelevantArticles from "../components/WhyCircularITComp/RelevantArticles";
import ContactSection from "../components/WhyCircularITComp/ContactSection";
import CircularITSection from "../components/WhyCircularITComp/CircularITSection";
import CircularITSection2 from "../components/WhyCircularITComp/CircularITSection2";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <ReduceITSection/>
      <CircularITSection2/>
      <CircularITSection/>
      <ContactSection/>
    </div>
  );
}
