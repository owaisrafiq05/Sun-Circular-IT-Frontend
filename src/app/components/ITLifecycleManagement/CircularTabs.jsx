"use client";

import { useState } from "react";
import Image from "next/image";
import img1 from "../../images/cirkel-acquire.svg";

export default function ITAMServicesTabs() {
  const tabs = [
    {
      id: 1,
      title: "Inventory and Tracking",
      description:
        "We help you maintain a detailed inventory of all IT assets to ensure complete visibility and accountability.",
      button: "Learn more",
      activeImage: img1,
    },
    {
      id: 2,
      title: "Lifecycle Management",
      description:
        "From procurement to retirement, we manage your IT assets at every stage to optimize their value and usage.",
      button: "Explore now",
      activeImage: img1,
    },
    {
      id: 3,
      title: "Data Security",
      description:
        "Our ITAM processes include robust measures for protecting sensitive data on IT hardware, especially during upgrades or decommissioning.",
      button: "Secure your assets",
      activeImage: img1,
    },
    {
      id: 4,
      title: "Compliance Monitoring",
      description:
        "We ensure that your IT assets comply with software licensing agreements and environmental regulations, such as T11 WEEE requirements.",
      button: "Stay compliant",
      activeImage: img1,
    },
    {
      id: 5,
      title: "Disposal and Recycling",
      description:
        "When it’s time to retire assets, we integrate ITAM with IT asset disposition (ITAD) to ensure secure and sustainable disposal.",
      button: "Recycle responsibly",
      activeImage: img1,
    },
  ];

  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="bg-[#e2f0f5] py-16">
      <h1 className="text-3xl lg:text-4xl font-bold text-[#005C38] mb-4 montserrat-bold text-center">
        Our IT Asset Management Services
      </h1>
      <p className="text-xl color-gray-600 text-center mb-6 md:w-[50%] flex justify-center flex-col gap-y-4 mx-auto">
        At Sun Circular IT Solutions, we take a comprehensive approach to ITAM, offering solutions that enhance visibility, ensure security, and promote sustainability.
      </p>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8">
        {/* Left Content */}
        <div className="max-w-lg lg:max-w-xl flex flex-col space-y-6">
          {/* Tabs */}
          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-[#005C38] text-lg font-semibold border-b-4 ${
                  activeTab === tab.id
                    ? "border-teal-500"
                    : "border-transparent"
                } transition duration-300`}
              >
                {tab.title} →
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            <h2 className="text-[#005C38] text-2xl font-bold mb-4">
              {tabs[activeTab - 1].title}
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              {tabs[activeTab - 1].description}
            </p>
            <button className="bg-teal-500 text-white font-semibold py-2 px-6 rounded-tr-full rounded-b-full hover:bg-teal-600 transition duration-300">
              {tabs[activeTab - 1].button}
            </button>
          </div>
        </div>

        {/* Right Circular Graphic */}
        <div className="relative flex-shrink-0 w-72 h-72 lg:w-96 lg:h-96">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={tabs[activeTab - 1].activeImage}
              alt={`${tabs[activeTab - 1].title} Circular Graphic`}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
