import Image from "next/image";
import HeroSection from "../components/ITLifecycleManagement/HeroSection";
import Section2 from "../components/ITLifecycleManagement/Section2";
import ITAMServicesTabs from "../components/ITLifecycleManagement/CircularTabs";
import LifecycleManagement from "../components/ITLifecycleManagement/LifecycleManagement";
import ReduceITSection from "../components/ITLifecycleManagement/ReduceITSection";
import ImpactSection from "../components/ITLifecycleManagement/ImpactSection";
import HeartSection from "../components/ITLifecycleManagement/HeartSection";
import WhyChooseITAM from "../components/ITLifecycleManagement/WhyChooseITAM";
import ContactSection from "../components/ITLifecycleManagement/ContactSection";
import CustomersSection from "../components/ITLifecycleManagement/CustomersSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <LifecycleManagement/>
      <ReduceITSection/>
      <ITAMServicesTabs/>
      <WhyChooseITAM/>
      <HeartSection/>
      <ContactSection/>
    </div>
  );
}
