"use client";

import { FaLeaf, FaRecycle, FaMoneyBillWave } from "react-icons/fa";

export default function CircularITSolution2() {
  const features = [
    {
      icon: <FaLeaf size={24} className="text-white" />,
      title: "Refurbishment",
      description:
        "We assess and restore IT equipment to working condition, giving it a second life.",
    },
    {
      icon: <FaRecycle size={24} className="text-white" />,
      title: "Recycling",
      description:
        "For devices that cannot be reused, we recycle responsibly under the T11 WEEE license, ensuring compliance with environmental regulations.",
    },
    {
      icon: <FaMoneyBillWave size={24} className="text-white" />,
      title: "Rebate Opportunities",
      description:
        "By reclaiming value from retired IT assets, we help businesses see a return on their investments while supporting a sustainable approach.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-300 to-orange-500 text-white my-4">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How Sun Circular IT Solutions Supports Circular IT</h2>
          <p className="text-lg lg:w-2/3 mx-auto">
            Learn how we extend the lifecycle of IT assets through refurbishment, recycling, and offering rebate opportunities.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 rounded-lg p-8 flex flex-col items-center lg:items-start"
            >
              <div className="bg-orange-700 p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
