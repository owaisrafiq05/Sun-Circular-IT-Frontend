"use client";

import { FaTools, FaDollarSign, FaShieldAlt, FaLeaf } from "react-icons/fa";

export default function WhyITAMMattersSection() {
  const features = [
    {
      icon: <FaTools size={48} className="text-teal-600" />,
      title: "Enhanced Efficiency",
      description:
        "A well-managed IT asset inventory reduces downtime and improves operational efficiency.",
      link: "Read more →",
    },
    {
      icon: <FaDollarSign size={48} className="text-teal-600" />,
      title: "Cost Savings",
      description:
        "Avoid unnecessary purchases and maximize the return on your existing assets.",
      link: "Learn more →",
    },
    {
      icon: <FaShieldAlt size={48} className="text-teal-600" />,
      title: "Risk Management",
      description:
        "Prevent data breaches by ensuring secure handling of assets, especially during disposal.",
      link: "Explore solutions →",
    },
    {
      icon: <FaLeaf size={48} className="text-teal-600" />,
      title: "Sustainability",
      description:
        "Implement environmentally responsible practices for IT asset usage and retirement.",
      link: "Learn about sustainability →",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold md:w-[55%] text-[#005C38] mb-4 montserrat-bold">
          Why ITAM Matters
        </h1>
        <p className="text-xl text-gray-600 mb-6 md:w-[50%] flex justify-center flex-col gap-y-4">
          IT Asset Management (ITAM) is essential for organizations to improve efficiency, reduce costs, manage risks, and adopt sustainable practices. Here's how ITAM can transform your IT operations:
        </p>

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