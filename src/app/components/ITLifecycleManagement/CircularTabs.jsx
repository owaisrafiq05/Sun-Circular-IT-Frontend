"use client";

import { useState } from "react";
import Image from "next/image";
import img1 from "../../images/cirkel-acquire.svg";

export default function CircularTabs() {
  const tabs = [
    {
      id: 1,
      title: "Acquire",
      description:
        "Need to purchase IT hardware but have a limited budget? We offer smart financing options, so you can easily purchase the right equipment at the right time.",
      button: "Our options",
      activeImage: img1,
    },
    {
      id: 2,
      title: "Deploy",
      description:
        "Quickly and securely deploy IT equipment with minimal downtime. Our deployment services are tailored to ensure efficiency.",
      button: "Learn more",
      activeImage: img1,
    },
    {
      id: 3,
      title: "Manage",
      description:
        "Keep your IT systems up-to-date and secure with our comprehensive management solutions. We ensure smooth operation and proactive monitoring.",
      button: "Explore now",
      activeImage: img1,
    },
    {
      id: 4,
      title: "Refresh",
      description:
        "Extend the lifecycle of your IT equipment through our refurbishing and recycling services. A sustainable and cost-effective approach.",
      button: "Find out",
      activeImage: img1,
    },
  ];

  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="bg-[#e2f0f5] py-16">
    <h1 className="text-3xl lg:text-4xl font-bold text-[#005C38] mb-4 montserrat-bold text-center">Step into the circle wherever you want</h1>
    <p className="text-xl color-gray-600 text-center mb-6 md:w-[50%] flex justify-center flex-col gap-y-4 mx-auto">Our Lifecycle Management solutions are both circular and modular. Simply start with what you need. Then as your demand grows, you can seamlessly integrate more services.</p>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8">
        {/* Left Content */}
        <div className="max-w-lg lg:max-w-md flex flex-col space-y-6">
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
