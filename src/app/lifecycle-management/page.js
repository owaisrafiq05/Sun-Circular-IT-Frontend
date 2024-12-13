import Image from "next/image";
import HeroSection from "../components/ITLifecycleManagement/HeroSection";
import Section2 from "../components/ITLifecycleManagement/Section2";
import CircularTabs from "../components/ITLifecycleManagement/CircularTabs";
import LifecycleManagement from "../components/ITLifecycleManagement/LifecycleManagement";
import ReduceITSection from "../components/ITLifecycleManagement/ReduceITSection";
import ImpactSection from "../components/ITLifecycleManagement/ImpactSection";
import HeartSection from "../components/ITLifecycleManagement/HeartSection";
import RelevantArticles from "../components/ITLifecycleManagement/RelevantArticles";
import ContactSection from "../components/ITLifecycleManagement/ContactSection";
import CustomersSection from "../components/ITLifecycleManagement/CustomersSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Section2/>
      <CircularTabs/>
      <LifecycleManagement/>
      <ReduceITSection/>
      <ImpactSection/>
      <HeartSection/>
      <RelevantArticles/>
      <ContactSection/>
      <CustomersSection/>
    </div>
  );
}
