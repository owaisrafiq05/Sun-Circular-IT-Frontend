"use client";

import { FaClipboardList, FaRecycle, FaTruck, FaShieldAlt, FaDollarSign } from "react-icons/fa";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <FaClipboardList size={48} className="text-teal-600" />,
      title: "Contact Us",
      description:
        "Share the details of your IT assets, and we’ll assess your needs.",
    },
    {
      icon: <FaClipboardList size={48} className="text-teal-600" />,
      title: "Evaluation",
      description:
        "We evaluate your hardware to determine its potential for reuse, recycling, or rebate opportunities.",
    },
    {
      icon: <FaTruck size={48} className="text-teal-600" />,
      title: "Collection",
      description:
        "For eligible projects in London, we offer free pickups to streamline the process.",
    },
    {
      icon: <FaShieldAlt size={48} className="text-teal-600" />,
      title: "Secure Data Destruction",
      description:
        "All sensitive data is securely wiped or destroyed, protecting your business from potential risks.",
    },
    {
      icon: <FaRecycle size={48} className="text-teal-600" />,
      title: "Recycling or Rebate",
      description:
        "We recycle the equipment responsibly or provide rebates for eligible hardware.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-bold md:w-[55%] text-[#005C38] mb-4 montserrat-bold">
          How It Works
        </h1>
        <p className="text-xl text-gray-600 mb-6 md:w-[50%] flex justify-center flex-col gap-y-4">
          Our process is simple and efficient, ensuring a seamless experience for managing your IT assets:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center md:text-left flex flex-col items-center md:items-start gap-4"
            >
              <div className="w-20 h-20 flex items-center justify-center bg-teal-100 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-teal-900 text-3xl font-bold">
                {step.title}
              </h3>
              <p className="text-black text-base leading-relaxed ">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
