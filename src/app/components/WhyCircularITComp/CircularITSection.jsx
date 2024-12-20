"use client";

import { FaLeaf, FaDollarSign, FaShieldAlt } from "react-icons/fa";

export default function CircularITSection() {
  const features = [
    {
      icon: <FaLeaf size={36} className="text-teal-600" />,
      title: "Environmental Impact",
      description:
        "E-waste is one of the fastest-growing waste streams in the world. Circular IT reduces this burden by keeping technology in circulation longer.",
    },
    {
      icon: <FaDollarSign size={36} className="text-teal-600" />,
      title: "Cost Efficiency",
      description:
        "Businesses can save money or generate revenue by reselling unused IT assets instead of discarding them.",
    },
    {
      icon: <FaShieldAlt size={36} className="text-teal-600" />,
      title: "Compliance and Responsibility",
      description:
        "Circular IT practices help companies meet regulatory requirements and demonstrate their commitment to sustainability.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#005C38] mb-4 montserrat-bold">
            Why Circular IT Matters
          </h2>
          <p className="text-lg text-gray-600 md:w-3/4 mx-auto">
            Discover how Circular IT can make a difference in sustainability, cost-efficiency, and compliance for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center md:text-left md:items-start"
            >
              <div className="mb-4 w-16 h-16 flex items-center justify-center bg-teal-100 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-teal-900 text-3xl font-bold">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mt-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
