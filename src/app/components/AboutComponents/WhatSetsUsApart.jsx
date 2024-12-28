"use client";

import { FaCertificate, FaTruck, FaShieldAlt, FaDollarSign } from "react-icons/fa";

export default function WhatSetsUsApart() {
  const features = [
    {
      icon: <FaCertificate size={48} className="text-[#db8f1b]" />,
      title: "T11 WEEE Licensed",
      description:
        "Operating under full compliance with England and Wales regulations, we adhere to the highest standards of electronic waste management.",
    },
    {
      icon: <FaTruck size={48} className="text-[#db8f1b]" />,
      title: "Free London Collections",
      description:
        "For most projects in London, we offer complimentary pickups, saving you time and effort.",
    },
    {
      icon: <FaShieldAlt size={48} className="text-[#db8f1b]" />,
      title: "Data Security You Can Trust",
      description:
        "Certified data wiping and destruction services ensure your information remains protected at all times.",
    },
    {
      icon: <FaDollarSign size={48} className="text-[#db8f1b]" />,
      title: "Rebate Opportunities",
      description:
        "We don’t just recycle your IT equipment—we help you get financial value back.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#db8f1b] mb-8 text-center montserrat-bold">
          What Sets Us Apart
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center md:text-left flex flex-col items-center md:items-start gap-4 bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition duration-300"
            >
              <div className="w-20 h-20 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-[#db8f1b] text-xl font-bold mb-2 montserrat-bold">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
