"use client";

import { FaCloud, FaTree, FaCoins } from "react-icons/fa";
import { PiFootprintsBold } from "react-icons/pi";

export default function ReduceITSection() {
  const features = [
    {
      icon: <FaCloud size={48} className="text-teal-600" />,
      title: "Reduce IT costs",
      description:
        "Looking to spend less on IT? Then let us take care of Lifecycle Management for your devices. Whether procuring, deploying, maintaining or replacing a device, it all runs seamlessly.",
      link: "Read more →",
    },
    {
      icon: <FaTree size={48} className="text-teal-600" />,
      title: "Improve compliance",
      description:
        "Prevention is better than cure. Reduce risks, prevent fines and protect your reputation by making sure you meet all the legal requirements.",
      link: "Read more →",
    },
    {
      icon: <FaCoins size={48} className="text-teal-600" />,
      title: "Manage your assets",
      description:
        "Monitor each device in your organisation by tracking its location, owner and status. Boost efficiency and protect your organisation from expensive losses and data theft.",
      link: "Lifecycle Management Platform →",
    },
    {
      icon: <PiFootprintsBold size={48} className="text-teal-600" />,
      title: "Be more sustainable",
      description:
        "Our smart Lifecycle Management solution helps make devices more sustainable by extending their life, refurbishing and redeploying them.",
      link: "Extended Lifecycle Management →",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
      <h1 className="text-3xl lg:text-4xl font-bold md:w-[55%] text-[#005C38] mb-4 montserrat-bold">Lifecycle Management: longer lifetime, lower costs</h1>
      <p className="text-xl color-gray-600 mb-6 md:w-[50%] flex justify-center flex-col gap-y-4 mb-4">Our Lifecycle Management is the process of managing the entire lifecycle of your IT equipment, from procurement to replacement. By optimising and redeploying IT equipment, you can significantly extend its life. The sustainable choice for your organisation, while saving you money.</p>

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