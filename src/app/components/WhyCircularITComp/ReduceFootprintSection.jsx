"use client";

import { FaCloud, FaTree, FaCoins } from "react-icons/fa";
import { PiFootprintsBold } from "react-icons/pi";

export default function ReduceFootprintSection() {
  const features = [
    {
      icon: <FaCloud size={48} className="text-teal-600" />,
      title: "CO₂ emissions",
      description:
        "Circular IT helps reduce CO₂ emissions. IT equipment production is responsible for a significant amount of CO₂ emissions.",
      link: "Read more →",
    },
    {
      icon: <FaTree size={48} className="text-teal-600" />,
      title: "Fewer raw materials",
      description:
        "Circular IT reduces the demand for new raw materials, such as metals, plastics and rare earths.",
      link: "Read more →",
    },
    {
      icon: <FaCoins size={48} className="text-teal-600" />,
      title: "Cost-effective",
      description:
        "Keeping IT equipment up and running for longer can help you save big on your IT costs.",
      link: "Read more →",
    },
    {
      icon: <PiFootprintsBold size={48} className="text-teal-600" />,
      title: "Improve compliance",
      description:
        "Our solution allows you to accurately calculate and reduce your footprint. This means you stay compliant with all future regulations.",
      link: "Read more →",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-teal-900 text-3xl lg:text-4xl font-bold mb-12 text-center">
          How we help you reduce your footprint
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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