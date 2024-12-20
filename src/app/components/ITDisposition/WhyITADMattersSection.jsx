"use client";

import { FaShieldAlt, FaRecycle, FaGavel, FaDollarSign } from "react-icons/fa";

export default function WhyITADMattersSection() {
  const features = [
    {
      icon: <FaShieldAlt size={48} className="text-teal-600" />,
      title: "Data Security",
      description:
        "IT equipment often contains sensitive company and customer data. ITAD ensures that all information is permanently erased or destroyed, reducing the risk of breaches.",
      link: "Learn more →",
    },
    {
      icon: <FaRecycle size={48} className="text-teal-600" />,
      title: "Environmental Responsibility",
      description:
        "Proper IT asset disposal prevents harmful e-waste from polluting the environment by recycling materials and repurposing components.",
      link: "Explore sustainability →",
    },
    {
      icon: <FaGavel size={48} className="text-teal-600" />,
      title: "Regulatory Compliance",
      description:
        "ITAD helps businesses comply with legal requirements for disposing of electronic waste, including adherence to GDPR and WEEE directives.",
      link: "Stay compliant →",
    },
    {
      icon: <FaDollarSign size={48} className="text-teal-600" />,
      title: "Maximizing Value",
      description:
        "Through ITAD, companies can recover residual value from their old IT assets, turning them into an additional revenue stream.",
      link: "Discover value →",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold md:w-[55%] text-[#005C38] mb-4 montserrat-bold">
          The Importance of ITAD
        </h1>
        <p className="text-xl text-gray-600 mb-6 md:w-[50%] flex justify-center flex-col gap-y-4">
          At Sun Circular IT Solutions, ITAD is at the core of what we do. We help businesses recover value from their retired IT assets while ensuring data security and environmental sustainability.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
  {features.map((feature, index) => (
    <div
      key={index}
      className="text-center md:text-left flex flex-col items-center md:items-start gap-4"
    >
      <div className="w-20 h-20 flex items-center justify-center bg-teal-100 rounded-full">
        {feature.icon}
      </div>
      <h3 className="text-teal-900 text-3xl font-bold">{feature.title}</h3>
      <p className="text-black text-base leading-relaxed ">
        {feature.description}
      </p>
      <a
        href="#"
        className="text-teal-600 font-semibold text-sm hover:underline"
      >
        {feature.link}
      </a>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
