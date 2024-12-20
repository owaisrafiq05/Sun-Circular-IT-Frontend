"use client";

import { FaCloud, FaTree, FaCoins } from "react-icons/fa";

export default function ReduceITSection() {
  const features = [
    {
      icon: <FaCloud size={48} className="text-teal-600" />,
      title: "Reduce Waste",
      description:
        "Keep electronic waste out of landfills by ensuring all IT assets are either reused, refurbished, or responsibly recycled.",
      link: "Read more →",
    },
    {
      icon: <FaTree size={48} className="text-teal-600" />,
      title: "Maximize Value",
      description:
        "Extract the maximum possible value from technology by reselling or repurposing it.",
      link: "Read more →",
    },
    {
      icon: <FaCoins size={48} className="text-teal-600" />,
      title: "Support Sustainability",
      description:
        "Reduce the demand for new raw materials by reintroducing refurbished equipment back into the market.",
      link: "Lifecycle Management Platform →",
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
      <h1 className="text-3xl lg:text-4xl font-bold md:w-[55%] text-[#005C38] mb-4 montserrat-bold">The Core Principles of Circular ITs</h1>
      <p className="text-xl color-gray-600 mb-6 md:w-[50%] flex justify-center flex-col gap-y-4 mb-4">At Sun Circular IT Solutions, we champion Circular IT by helping businesses responsibly manage their old or unused hardware while recovering value from it. By refurbishing and recycling IT assets, we ensure that technology continues to serve a purpose, even beyond its initial use.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center md:text-left flex flex-col items-center md:items-start gap-4"
            >
              <div className="w-20 h-20 flex items-center justify-center bg-teal-100 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-teal-900 text-3xl font-bold">
                {feature.title}
              </h3>
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