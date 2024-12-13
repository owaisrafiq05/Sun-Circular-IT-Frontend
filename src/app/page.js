import Image from "next/image";
import HeroSection from "./components/HomeComponents/heroSection";
import HomeSection2 from "./components/HomeComponents/homeSection2";
import HowCircularITWorks from "./components/HomeComponents/HowCircularITWorks";
import QuoteSection from "./components/HomeComponents/QuoteSection";
import ImpactSection from "./components/HomeComponents/ImpactSection";
import RelevantArticles from "./components/HomeComponents/RelevantArticles";
import ContactSection from "./components/HomeComponents/ContactSection";
import CustomersSection from "./components/HomeComponents/CustomersSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <HomeSection2/>
      <HowCircularITWorks/>
      <QuoteSection/>
      <ImpactSection/>
      <RelevantArticles/>
      <ContactSection/>
      <CustomersSection/>
    </div>
  );
}
