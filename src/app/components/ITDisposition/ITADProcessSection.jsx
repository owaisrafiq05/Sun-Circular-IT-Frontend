"use client";

import Image from "next/image";
import cardImage1 from "../../images/card-image1.webp";
import cardImage2 from "../../images/card-image2.webp";
import cardImage3 from "../../images/card-image3.webp";

export default function ITADProcessSection() {
  const cards = [
    {
      id: 1,
      image: cardImage1,
      title: "Evaluation",
      description:
        "We assess your IT assets to determine their value and the most appropriate disposition strategy.",
    },
    {
      id: 2,
      image: cardImage2,
      title: "Secure Data Destruction",
      description:
        "Certified data wiping or physical destruction ensures sensitive information is fully protected.",
    },
    {
      id: 3,
      image: cardImage3,
      title: "Reuse and Recycling",
      description:
        "Equipment is either refurbished for reuse or recycled responsibly under our T11 WEEE license.",
    },
    {
      id: 4,
      image: cardImage1,
      title: "Rebate Opportunities",
      description:
        "Eligible assets are turned into cash, providing financial returns for your business.",
    },
    {
      id: 5,
      image: cardImage2,
      title: "Reporting and Certification",
      description:
        "We provide detailed reports and certifications to confirm data destruction and environmental compliance.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#005C38] text-3xl md:text-4xl font-bold">
            Our ITAD Process
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            At Sun Circular IT Solutions, we follow a comprehensive ITAD process to meet your business needs:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {cards.map((card) => (
            <div key={card.id} className="bg-white shadow-md rounded-lg">
              {/* Card Image */}
              <div className="relative w-full h-64">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-[#005C38] text-xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-base">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
