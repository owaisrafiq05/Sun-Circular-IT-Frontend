"use client";

import { FaLightbulb, FaLeaf, FaDollarSign, FaShieldAlt } from "react-icons/fa";

export default function WhyChooseITAM() {
  const features = [
    {
      icon: <FaLightbulb size={48} className="text-teal-600" />,
      title: "Expert Guidance",
      description:
        "Leverage our experience to streamline and optimize your IT asset management processes.",
    },
    {
      icon: <FaLeaf size={48} className="text-teal-600" />,
      title: "Sustainability-Focused",
      description:
        "We align ITAM strategies with environmental best practices, reducing your organization’s carbon footprint.",
    },
    {
      icon: <FaDollarSign size={48} className="text-teal-600" />,
      title: "Cost-Effective Solutions",
      description:
        "Maximize the value of your IT investments while minimizing unnecessary expenses.",
    },
    {
      icon: <FaShieldAlt size={48} className="text-teal-600" />,
      title: "Compliance Assurance",
      description:
        "Stay fully compliant with legal and regulatory standards, including WEEE directives.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <h2 className="text-teal-900 text-3xl lg:text-4xl font-bold text-center mb-12">
          Why Choose Sun Circular IT Solutions for ITAM?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-teal-900 text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            className="text-teal-600 border-2 border-teal-600 font-semibold text-lg py-2 px-8 rounded-tr-full rounded-b-full hover:bg-teal-600 hover:text-white transition duration-300"
          >
            Learn More About ITAM
          </button>
        </div>
      </div>
    </section>
  );
}
